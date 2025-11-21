'use strict';

var _ = require('lodash');

hexo.extend.helper.register('get_langs', function () {
  let langs = this.config.language;
  if (!Array.isArray(langs)) {
    langs = [langs];
  }
  langs = langs.filter(l => l && l !== 'default');
  return langs;
});

hexo.extend.helper.register('switch_lang', function (lang) {
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
  const isDefault = config.language[0] === lang;

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