'use strict';

const pagination = require('hexo-pagination');
const path = require('path');
const _ = require('lodash');
const postcssRenderer = require('./postcss-renderer')
hexo.extend.renderer.register('css', 'css', postcssRenderer)

hexo.extend.helper.register('get_langs', function () {
  let langs = this.config.language;
  if (!Array.isArray(langs)) {
    langs = [langs];
  }
  langs = langs.filter(l => l && l !== 'default');
  return langs;
});

hexo.extend.helper.register('switch_lang', function (lang, preferPrefix) {
  const config = this.config;
  const page = this.page;
  const root = config.root || '';

  let p = page.path; // raw path, often ends with index.html

  // Remove trailing index.html
  if (p.endsWith('index.html')) {
    p = p.replace(/index\.html$/, '');
  }

  // Normalize: strip current lang prefix
  if (page.lang && _.startsWith(p, page.lang + '/')) {
    p = p.substring((page.lang + '/').length);
  }

  // Ensure leading slash
  if (!p.startsWith('/')) {
    p = '/' + p;
  }

  // Build final URL
  let ret = '';

  // If target lang is default language (first item in config.language)
  const isDefault = !preferPrefix && config.language[0] === lang;

  if (isDefault) {
    ret = root + p.substring(1); // no language prefix
  } else {
    ret = root + lang + p; // with language prefix
  }

  return ret;
});

hexo.extend.helper.register('i18n_url', function (path, language) {
  const langs = this.get_langs();
  const defaultLang = langs[0];

  const lang = language || this.page.lang || defaultLang;
  const root = this.config.root || '/';

  let url = this.url_for(path);

  // Skip external URLs
  if (
    url === '#' ||
    url.startsWith('//') ||
    url.includes('://') ||
    url.startsWith('mailto:')
  ) return url;

  // Ensure leading slash
  if (!url.startsWith('/')) url = '/' + url;

  // Strip root
  let relative = url.replace(root, '/');

  // Remove index.html
  relative = relative.replace(/index\.html$/, '');

  // Detect if path already has language prefix
  const first = relative.split('/')[1];
  const alreadyLang = langs.includes(first);

  if (alreadyLang) return url;

  // Default language → no prefix
  if (lang === defaultLang) {
    return root + relative.substring(1);
  }

  // Non-default → prefix
  return root + lang + relative;
});

/**
 * Generates translated and paginated index pages.
 *
 * @param {string} baseUrl Base URL
 * @param {string} lang Language code to get the list of translated posts
 * @param {Object[]} posts Full list of posts
 * @param {Object} config Hexo config
 * @returns {Object[]} Array of translated and paginated index pages
 */
function getIndexPages(baseUrl, lang, posts, config) {
  const paginationDir = config.pagination_dir || 'page';
  const translatedPosts = posts.filter(post => post.lang === lang && post.categories && post.categories.some(cat => cat.name === config.permalink_defaults.categories));

  return pagination(baseUrl, translatedPosts, {
    perPage: config.index_generator.per_page,
    layout: ['index'],
    format: `${paginationDir}/%d/`,
    data: {
      __index: true,
    },
  });
}

hexo.config.index_generator = Object.assign({
  per_page: typeof hexo.config.per_page === 'undefined' ? 10 : hexo.config.per_page,
  order_by: '-date',
  single_language_index: false,
}, hexo.config.index_generator);

hexo.extend.generator.register('index-i18n', function indexI18nGenerator(locals) {
  const config = this.config;
  const posts = locals.posts.sort(config.index_generator.order_by);
  const indexPath = config.index_generator.path || '';
  const languages = [].concat(config.language || [])
    .filter(lang => lang !== 'default');
  const defaultLanguage = languages[0];
  let indexPages = [].concat.apply([],
    languages.map(lang => getIndexPages(path.join(lang, indexPath), lang, posts, config))
  );

  if (config.index_generator.single_language_index && defaultLanguage) {
    indexPages = indexPages.concat(getIndexPages(indexPath, defaultLanguage, posts, config));
  }

  return indexPages;
});
