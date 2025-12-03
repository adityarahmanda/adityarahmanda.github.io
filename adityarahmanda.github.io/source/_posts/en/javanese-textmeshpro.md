---
layout: work
title: "Javanese TextMeshPro – Javanese Script Text Rendering Support For Unity"
date: 2023-08-05 01:09
lang: en
categories: works
tags: 
    - "Tool"
    - "Unity"
external-links:
  - { text: Open UPM, icon: globe, url: "https://openupm.com/packages/com.adityarahmanda.javanese-textmeshpro" }
  - { text: Github, isBrand: true, icon: github, url: "https://github.com/adityarahmanda/javanese-textmeshpro" }
thumbnail : "/images/javanese-textmeshpro-thumbnail.webp"
canonical_url: 'https://adityarahmanda.github.io/en/works/javanese-textmeshpro'
---
Tools to correcting Javanese script text rendering in Unity, developed with the help of [TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/manual/index.html).

<!-- more -->

### Features
#### Javanese Text
Text element used to display Javanese script.

<img class="margin-p" src="/images/javanese-text-example.webp" alt="Preview Javanese Text" />

#### Javanese Button
UI button containing a `Javanese Text (UI)` text element.

<img class="w-auto margin-p" src="/images/javanese-button-example.webp" alt="Preview Javanese Button" />

#### Javanese Input Field
Input field capable of receiving input in Javanese script.

<img class="w-auto margin-p" src="/gif/javanese-input-example.gif" alt="Preview Javanese Input Field" />

#### Javanese Dropdown
Dropdown capable of displaying options in Javanese Scripts.

<img class="w-auto margin-p" src="/gif/javanese-dropdown-example.gif" alt="Preview Javanese Dropdown" />

#### Transliterator Window
Window for transliterating Latin-Javanese or Javanese-Latin text within the Unity editor.

<img class="w-auto margin-p" src="/gif/javanese-transliterator-example.gif" alt="Preview Transliterator Window" />

### Requirements

<table>
  <thead>
    <tr>
      <th style="text-align: center; width:30%">Minimum Requirement</th>
      <th style="text-align: center">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; vertical-align: middle"><a href="https://unity3d.com/unity/whats-new/2021.2.0">Unity 2021.2.0f1</a></td>
      <td>Requires at least <strong>Unity 2021.2.0f1</strong> for optimal use, as Unicode Javanese text input is only supported starting with this version.</td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle"><a href="https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/manual/index.html">TextMeshPro</a></td>
      <td>TextMeshPro must be installed in your Unity project as this plugin depends on it. You can install TextMeshPro through the Package Manager.</td>
    </tr>
  </tbody>
</table>

### Limitations
[TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/manual/index.html) does not handle glyph positioning or substitution (GPOS and GSUB) for Javanese script fonts, making it unable to display Javanese text properly.

The Javanese TextMeshPro plugin addresses this by processing specially prepared Javanese script fonts with additional glyphs in the Unicode blocks U+E000-U+E09F and U+E100-U+E11D. These blocks are within the [Private Use Area (PUA)](https://en.wikipedia.org/wiki/Private_Use_Areas#:~:text=In%20Unicode%2C%20a%20Private%20Use,characters%20by%20the%20Unicode%20Consortium.), and the glyph arrangement follows the layout of the [Ngayogyan](https://aksaradinusantara.com/fonta/nyk-ngayogyan.font) font.

Currently, the plugin only supports a limited selection of fonts, including [Ngayogyan](https://aksaradinusantara.com/fonta/nyk-ngayogyan.font), [Ngayogyan Jejeg](https://aksaradinusantara.com/fonta/nyk-ngayogyan-jejeg.font), and [a custom version of Noto Sans](https://github.com/adityarahmanda/javanese-textmeshpro/tree/master/Fonts/noto-sans.ttf). All these fonts are included in the plugin package.

### Installation via OpenUPM
1. Open **Project Settings** in your Unity project via `Edit / Project Settings / Package Manager`r and add the following scoped registry: 

    | Kolom | Keterangan                                |
    | ----- | ----------------------------------------- |
    | Name  | OpenUPM                                   |
    | URL   | `https://package.openupm.com`             |
    | Scope | `com.adityarahmanda.javanese-textmeshpro` |

    <img class="margin-p" src="/images/installation-1.webp" alt="Installation Step 1 - Add Package Scope" />

2. Open **Package Manager** via `Windows / Package Manager`, set the scope to  **My Registry**, select the "Javanese TextMeshPro" package, and click **Install**. Wait for the installation to complete.
    
    <img class="margin-p" src="/images/installation-2.webp" alt="Installation Step 2 - Installing Package" />

### Essential dan Example Resources
To use Javanese TextMeshPro, you must first import the `JVTMP Essential Resources` package. The import window will appear automatically after installing the plugin.

Optionally, you can also import the `JVTMP Examples Resources` package to explore practical examples of how this plugin can be implemented in a game.