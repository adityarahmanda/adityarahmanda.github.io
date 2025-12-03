---
layout: work
title: "Javanese TextMeshPro – Dukungan Aksara Jawa untuk TextMeshPro"
date: 2023-08-05 01:09
lang: id
categories: works
tags: 
    - "Perkakas"
tools: 
    - "Unity"
externalLinks:
  - { text: Open UPM, icon: globe, url: "https://openupm.com/packages/com.adityarahmanda.javanese-textmeshpro" }
  - { text: Github, isBrand: true, icon: github, url: "https://github.com/adityarahmanda/javanese-textmeshpro" }
thumbnail : "/images/javanese-textmeshpro-thumbnail.webp"
canonical_url: 'https://adityarahmanda.github.io/kerjaan/javanese-textmeshpro'
---
Perkakas tambahan untuk memenuhi kebutuhan penulisan teks aksara Jawa di dalam Unity, dibuat dengan memanfaatkan bantuan dari [TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/manual/index.html).

<!-- more -->

#### Fitur-Fitur
##### Javanese Text
Elemen teks yang digunakan untuk menampilkan teks aksara Jawa.

![Preview Javanese Text]({{"/images/javanese-text-example.webp", | relative_url }})​

##### Javanese Button
Elemen UI berupa tombol yang berisikan elemen teks `Javanese Text (UI)` di dalamnya.

![Preview Javanese Button]({{"/images/javanese-button-example.webp", | relative_url }})​

##### Javanese Input Field
Elemen UI berupa *input field* yang mampu menerima masukan teks aksara Jawa.

![Preview Javanese Input Field]({{"/gif/javanese-input-example.gif", | relative_url }})

##### Javanese Dropdown
Elemen UI berupa *dropdown* yang mampu menyajikan daftar pilihan beraksara Jawa.

![Preview Javanese Dropdown]({{"/gif/javanese-dropdown-example.gif", | relative_url }})

##### Jendela Transliterator
Jendela untuk melakukan transliterasi teks Latin-Jawa atau Jawa-Latin pada editor Unity.

![Preview Transliterator Window]({{"/gif/javanese-transliterator-example.gif", | relative_url }})

#### Prasyarat

<table>
  <thead>
    <tr>
      <th style="text-align: center; width:30%">Prasyarat Minimum</th>
      <th style="text-align: center">Keterangan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; vertical-align: middle"><a href="https://unity3d.com/unity/whats-new/2021.2.0">Unity 2021.2.0f1</a></td>
      <td>Untuk dapat menggunakan plugin ini secara maksimal, dibutuhkan minimum <strong>Unity 2021.2.0f1</strong> karena baru pada versi inilah editor Unity mendukung pengetikan teks Unicode aksara Jawa.</td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle"><a href="https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/manual/index.html">TextMeshPro</a></td>
      <td>Pada project Unity-mu, TextMeshPro sudah harus terpasang terlebih dahulu karena plugin ini bergantung padanya. Pemasangan TextMeshPro dapat dilakukan secara langsung melalui jendela Package Manager.</td>
    </tr>
  </tbody>
</table>

#### Batasan
[TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/manual/index.html) tidak membaca peletakan dan penggantian *glyph* (GPOS dan GSUB)[🡕](https://forum.unity.com/threads/needs-unicode-support.483802/#post-3148337) dari *font* aksara Jawa sehingga tidak mampu menampilkan teks aksara Jawa dengan benar.

Plugin Javanese TextMeshPro mengatasi permasalahan tersebut dengan memproses *font* aksara Jawa khusus yang memiliki tambahan *glyph* pada blok Unicode U+E000-U+E09F dan U+E100-U+E11D. Jangkauan blok tersebut sengaja dipilih karena termasuk dalam ranah blok [Private Use Area (PUA)](https://en.wikipedia.org/wiki/Private_Use_Areas#:~:text=In%20Unicode%2C%20a%20Private%20Use,characters%20by%20the%20Unicode%20Consortium.). Sedangkan pengaturan peletakan *glyph* dari *font* khusus yang digunakan oleh plugin ini sendiri, mengikuti peletakan *glyph* dari *font* [Ngayogyan](https://aksaradinusantara.com/fonta/nyk-ngayogyan.font). 

Oleh karena itu, untuk saat ini plugin ini hanya mendukung beberapa *font* terbatas saja yang meliputi *font* [Ngayogyan](https://aksaradinusantara.com/fonta/nyk-ngayogyan.font), [Ngayogyan Jejeg](https://aksaradinusantara.com/fonta/nyk-ngayogyan-jejeg.font) dan [Noto Sans (Custom)](https://github.com/adityarahmanda/javanese-textmeshpro/tree/master/Fonts/noto-sans.ttf). Semua *font* tersebut sudah tersedia di dalam *package* plugin ini.

#### Instalasi melalui OpenUPM
1. Pada project Unity-mu, buka jendela **Project Settings**  melalui menu `Edit / Project Settings / Package Manager` dan tambahkan *scoped registry* sebagaimana berikut.

    | Kolom | Keterangan                                |
    | ----- | ----------------------------------------- |
    | Name  | OpenUPM                                   |
    | URL   | `https://package.openupm.com`             |
    | Scope | `com.adityarahmanda.javanese-textmeshpro` |

    ![Installation Step 1 - Add Package Scope]({{"/images/installation-1.webp", | relative_url }})

2. Selanjutnya buka jendela **Package Manager** melalui menu `Windows / Package Manager` dan ubah scope menjadi **My Registry**. Pilih *package* "Javanese TextMeshPro" dan tekan tombol **Install** dan tunggu hingga instalasi selesai.

    ![Installation Step 3 - Installing Package]({{"/images/installation-2.webp", | relative_url }})

#### Essential dan Example Resources
Untuk dapat menggunakan Javanese TextMeshPro, package `JVTMP Essential Resources` wajib diimpor terlebih dahulu. Jendela impor package `JVTMP Essential Resources` akan muncul secara otomatis setelah instalasi plugin.

Package `JVTMP Examples Resources` juga dapat diimpor secara opsional untuk mempelajari bagaimana contoh penerapan langsung dari plugin ini di dalam game.