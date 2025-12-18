---
title: "Gold City – Ruangan Immersive dengan Permainan Berbasis Tile untuk Kampanye Aktivasi Tring! dari Pegadaian"
categories: works
lang: id
date: 2025-12-18 01:01:57
tags: 
    - "Permainan"
    - "Lantai Interaktif"
    - "Ruangan Immersive"
    - "Sensor LiDAR Siminics"
    - "Unity"
thumbnail : "/images/gold-city-thumbnail.webp"
externalLinks:
  - { text: "Cuplikan Video", isBrand: true, icon: youtube, url: "https://www.youtube.com/watch?v=09dLKR-KBO8" }
---
Ruangan Immersive dengan wahana permainan berbasis tile di dalamnya yang ditujukan untuk kegiatan aktivasi dimana pengguna dapat mengumpulkan skor sebanyak-banyaknya untuk memenangkan hadiah emas asli.

<!-- more -->

Ruangan <i>immersive</i> bertajuk "Gold City" turut ditambahkan ke dalam area venue memasuki periode terakhir dari Aktivasi Perilisan Aplikasi Tring! dari Pegadaian di Terowongan Kendal, Jakarta. 

Dibuka untuk umum mulai tanggal 8 Desember 2025 hingga 8 Januari 2026, pengunjung tidak hanya akan melihat sajian proyeksi visual yang indah di dalamnya, namun juga dapat menikmati wahana permainan berbasis tile di dalamnya.

Seperti pada periode sebelumnya, pengunjung dapat berpartisipasi ke dalam kampanye dengan melakukan registrasi atau top up. Dalam setiap partisipasi permainan, pengunjung dapat mengumpulkan skor dan memenangkan hadiah 0.5 gr emas asli dari Pegadaian jika berada pada tiga peringkat skor tertinggi.

<div class="margin-p">
  <div class="youtube">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/09dLKR-KBO8?si=W7W7QHCjdy2wkRg3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div class="mt-2 text-center"><em>Ringkasan Dokumentasi Ruangan Immersive "Gold City" di Terowongan Kendal</em></div>
</div>

<div class="margin-p">
  <div class="youtube">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Socr_od-r1M?si=hziL2XB2tviYQ7nv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div class="mt-2 text-center"><em>Dokumentasi Gameplay Permainan dalam Ruangan Immersive "Gold City"</em></div>
</div>

Dalam project ini, saya berperan sebagai Unity Developer dan bertanggung jawab untuk mengimplementasikan keseluruhan sistem permainannya mulai dari core loop, gameplay, integrasi Unity dengan sensor untuk membuat lantai menjadi interaktif, UI/UX, dan back-end leaderboard pemainnya. 

Berbeda dengan project lantai interaktif sebelumnya, kali ini mekanisme lantai interaktif diberdayakan dengan <a href="https://www.siminics.shop/" target="_blank">sensor LiDAR Siminics PAVO</a>. Hal ini menjadikannya sebagai tantangan terbesar dalam proyek ini karena tidak tersedianya dukungan API resmi untuk integrasi ke dalam Unity. Untuk itu, saya perlu melakukan riset panjang dan penyesuaian teknis khusus agar data sensor dapat dibaca dan diproses dengan baik di dalam sistem permainan.

Berikut beberapa cuplikan hasil implementasi yang saya kerjakan.

<div class="margin-p">
  <div class="youtube !aspect-[2464/2384]">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/u7ZQ5Utrl34?si=4m-UWyKHjY0n161P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div class="mt-2 text-center"><em>"Gold City" - Idle State Preview</em></div>
</div>

<div class="margin-p">
  <div class="youtube !aspect-[2464/2384]">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KeSgXcbtbPQ?si=oaX3GxG1Sbtir1Zs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div class="mt-2 text-center"><em>"Gold City" - Singleplayer Gameplay Preview</em></div>
</div>

<div class="margin-p">
  <div class="youtube !aspect-[2464/2384]">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6p53O539pNY?si=r6wScE0Dy32mLQ5q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div class="mt-2 text-center"><em>"Gold City" - Multiplayer Gameplay Preview</em></div>
</div>