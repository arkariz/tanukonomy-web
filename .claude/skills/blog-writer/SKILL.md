---
name: blog-writer
description: Tulis artikel blog Tanukonomy untuk menaikkan trafik organik dari pencarian, dalam bahasa Indonesia dengan padanan Inggris. Satu artikel menjawab satu niat pencarian, memakai suara dan kosakata Tanukonomy, dan setiap klaim tentang aplikasi dicek terhadap fakta yang benar. Hasilnya berkas Markdown berfrontmatter, meta SEO, dan daftar hal yang perlu dicek pemilik. Gunakan saat pemilik minta "tulis artikel/blog post", "artikel untuk kata kunci X", "konten SEO Tanukonomy", "ide artikel", atau "terjemahkan artikel ke Inggris". Bukan untuk teks antarmuka aplikasi (skill design:ux-copy), email rilis (skill release-email), kebijakan privasi, listing Play Store, atau postingan media sosial.
---

# Penulis artikel blog Tanukonomy

Artikel di situs ada untuk satu hal: dipertemukan dengan orang yang sedang
mencari jawaban, lalu memberi mereka jawaban yang berguna. Tanukonomy
disebut sebagai jalan keluar hanya kalau memang relevan. Artikel yang
mengiklankan terus akan ditinggalkan pembaca dan tidak naik di pencarian.

Pola kerja dan format mengikuti skill UX writing di
[pm-uxwriting](https://github.com/mohitagw15856/pm-claude-skills/tree/main/plugins/pm-uxwriting/skills)
(bagian "Working from a brief", "Required Inputs", "Output Format",
"Quality Checks", "Anti-Patterns"), disesuaikan untuk konten SEO dan aturan
situs ini.

## Bekerja dari brief tipis

Pemilik cukup bilang "tulis artikel tentang mencatat penghasilan freelance".
**Tulis artikelnya.** Tentukan sendiri kata kunci utama, niat pencarian, dan
sudut pandang, lalu beri label *(asumsi, konfirmasi)*. Jangan membalas
dengan pertanyaan sebagai ganti artikel. Satu-satunya hal yang boleh
ditanyakan sebelum menulis: fakta tentang aplikasi yang tidak bisa kamu
verifikasi dari repo (lihat langkah 2).

## Masukan yang dibutuhkan

Tanya hanya yang belum jelas, selain itu simpulkan dan beri label:

- **Topik atau kata kunci**, atau biarkan skill ini mengusulkan dari daftar
  di `docs/TASKS.md` (S-2) dan bagian "Peta topik" di bawah.
- **Bahasa**: Indonesia dulu. Padanan Inggris dibuat bila diminta atau bila
  topiknya relevan untuk pembaca berbahasa Inggris.
- **Pembaca**: bawaannya pekerja lepas dan pekerja muda di Indonesia yang
  mencatat uangnya di catatan ponsel, spreadsheet, atau tidak sama sekali.
- **Data atau sumber** yang pemilik punya (kebiasaan sendiri, cerita
  penguji). Tanpa itu, jangan mengarang cerita atau angka.

## Langkah kerja

### 1. Pilih satu niat pencarian

Satu artikel menjawab satu pertanyaan (kebijakan situs, S-3). Tulis di awal:

- **Kata kunci utama** dan 2–4 variasi alaminya.
- **Niat**: informasional ("cara mencatat…"), perbandingan ("catatan di
  spreadsheet atau aplikasi"), atau panduan fitur ("cara memakai anggaran").
- **Apa yang pembaca bisa lakukan setelah selesai**, dalam satu kalimat.

Tidak ada data volume pencarian di repo. **Jangan menyebut volume, peringkat,
atau perkiraan trafik.** Prioritas ditentukan dari kecocokan dengan fitur
nyata dan persaingan yang masuk akal. Bila Search Console sudah dipasang
(S-1), minta pemilik menempelkan datanya.

Cek `src/content/blog/` (kalau sudah ada) supaya tidak menulis dua artikel
yang berebut kata kunci yang sama.

### 2. Verifikasi fakta sebelum menulis

Setiap kalimat tentang apa yang dilakukan Tanukonomy harus lolos
`references/klaim-dan-fakta.md`. Bila artikel menyentuh fitur yang tidak
tercantum di sana, cari buktinya, jangan menebak:

- Repo aplikasi `arkariz/Saldough`: `.claude/CLAUDE.md`,
  `docs/02-architecture/DOMAIN_MODEL.md`, `docs/00-foundation/PROJECT_GLOSSARY.md`.
- Situs ini: `src/i18n/id.ts` (klaim yang sudah dipublikasikan) dan
  `src/pages/privasi.astro` (apa yang dijanjikan soal data).

Klaim yang tidak bisa dibuktikan dihapus dari artikel, bukan dilunakkan
dengan "mungkin". Bila fiturnya belum ada, jangan disebut sebagai ada.

### 3. Tulis dengan suara Tanukonomy

Ikuti `docs/03-design/design-system/writing.md` di repo aplikasi:

- Sapa dengan "kamu". Kalimat aktif, pendek, satu gagasan per kalimat.
- Tanpa tanda seru, tanpa emoji.
- **Jangan menyuruh kebiasaan** ("catat tiap hari ya"). Tawarkan jalannya,
  biarkan pembaca memutuskan.
- Aplikasi **mencatat, tidak melakukan**: "Catat transfer", bukan
  "Transfer sekarang". Jangan menulis seolah Tanukonomy memindahkan,
  membayar, atau menagih uang.
- Satu istilah, satu makna: Dompet, Transaksi, Pemasukan/Pengeluaran,
  Transfer, Anggaran, Pos anggaran, Tagihan, Riwayat, Selisih. Jangan
  mengganti dengan sinonim ("kantong", "mutasi", "arus bersih").
- Nominal `Rp27.522.000` tanpa spasi; contoh angka harus masuk akal dan
  ditandai sebagai contoh. Pengeluaran `−Rp45.000`, pemasukan `+Rp8.500.000`.
- Tulis seperti teman yang rapi mencatat: hangat, tepat, tidak menggurui.
  Pembaca artikel membaca lebih lama dari pengguna aplikasi, jadi
  paragraf boleh lebih panjang, tetapi tiap kalimat tetap pendek.

### 4. Susun artikel

Urutan yang dipakai:

1. **Judul (H1)** memuat kata kunci utama, ≤ 60 karakter, menjanjikan hal
   yang benar-benar dibahas. Tanpa clickbait.
2. **Pembuka 2–3 kalimat** yang langsung menjawab pertanyaan pencarian.
   Kata kunci utama muncul dalam 100 kata pertama.
3. **Isi** dengan H2 yang masing-masing menjawab sub-pertanyaan. Pakai
   langkah bernomor untuk "cara", tabel untuk perbandingan, dan satu contoh
   berangka yang bisa diikuti pembaca.
4. **Bagian Tanukonomy**, hanya bila relevan: satu bagian pendek (H2) yang
   menunjukkan bagaimana langkah tadi dikerjakan di aplikasi, memakai fitur
   dan istilah yang benar. Paling banyak satu bagian ini plus satu kalimat
   penutup yang menaut ke `/beta/`. Tidak ada tombol, banner, atau seruan
   di tengah isi.
5. **Pertanyaan umum (FAQ)** 2–4 butir, hanya bila pertanyaannya memang
   sering ditanyakan dan jawabannya belum ada di isi artikel. Jangan
   mengisi FAQ demi data terstruktur.
6. **Penutup** satu paragraf: ringkasan satu kalimat dan langkah berikutnya
   untuk pembaca.

Panjang mengikuti niat pencarian: 700–1.200 kata untuk "cara", 1.200–1.800
untuk panduan menyeluruh. Jangan menambah panjang demi hitungan kata.

### 5. SEO di halaman

- **Meta title** ≤ 60 karakter, **meta description** ≤ 155 karakter, tanpa
  mengulang judul mentah-mentah, dengan manfaat yang jelas.
- **Slug** pendek, huruf kecil, dipisah tanda hubung, memuat kata kunci.
  Bahasa Inggris memakai slug sendiri (situs ini memakai slug berbeda per
  bahasa: `/privasi/` dan `/en/privacy/`).
- Satu H1, H2 berurutan, tidak melompat tingkat.
- **Tautan internal**: 2–4 ke halaman situs yang relevan (`/`, `/beta/`,
  artikel lain), dengan teks tautan deskriptif. Dilarang "klik di sini".
  Tautan keluar hanya ke sumber resmi dan diberi `rel="noopener"`.
- **Gambar**: hanya tangkapan layar asli dari `tools/screenshots/` atau
  ilustrasi milik proyek. Jangan mockup, jangan gambar stok yang menyiratkan
  fitur. Beri `alt` yang menjelaskan isi, plus ukuran lebar dan tinggi.
- Kata kunci muncul alami di judul, H1, pembuka, satu atau dua H2, dan
  slug. Jangan diulang demi kepadatan.
- **Tanggal terbit dan tanggal diperbarui** di frontmatter. Artikel yang
  menyebut fitur aplikasi wajib diperbarui saat fiturnya berubah.

### 6. Padanan Inggris (opsional)

Bukan terjemahan kata per kata. Pertahankan arti dan klaim yang sama, tetapi
sesuaikan kata kunci ke yang dicari pembaca berbahasa Inggris, slug sendiri,
dan istilah produk yang sudah dipakai di `src/i18n/en.ts` (Wallet,
Transaction, Budget, Transfer, History). Hubungkan keduanya lewat
`translationOf`.

## Format hasil

Satu berkas Markdown per bahasa. Karena koleksi artikel Astro belum ada
(S-3 di `docs/TASKS.md`), jalur ini adalah **usulan** dan dicatat di laporan:

- `src/content/blog/id/<slug>.md`
- `src/content/blog/en/<slug>.md`

Frontmatter:

```yaml
---
title: "…"            # H1, ≤ 60 karakter
description: "…"      # meta description, ≤ 155 karakter
slug: "…"
lang: id              # id | en
translationOf: "…"    # slug padanan bahasa lain, kosong bila tidak ada
keyword: "…"          # kata kunci utama
intent: informasional # informasional | perbandingan | panduan-fitur
publishedDate: 2026-10-18
updatedDate: 2026-10-18
author: "Tim Tanukonomy"
image: ""             # opsional, berkas asli di repo
imageAlt: ""
draft: true           # selalu true sampai pemilik menyetujui
---
```

Setelah berkas, tampilkan **laporan singkat** dalam bahasa Indonesia:

1. Kata kunci, niat, dan asumsi yang diambil.
2. Daftar klaim tentang aplikasi di artikel dan sumber verifikasinya.
3. Hal yang perlu diputuskan pemilik (klaim yang dihapus, fitur yang
   butuh konfirmasi, gambar yang perlu dirender).
4. Tiga judul alternatif.
5. Pekerjaan teknis yang tersisa bila koleksi artikel belum ada.

Jangan menulis kode halaman, koleksi, atau tata letak Astro di dalam skill
ini kecuali pemilik memintanya sebagai tugas terpisah.

## Peta topik (usulan awal, bukan data pencarian)

Dipilih karena cocok dengan fitur yang nyata. Pemilik memutuskan urutannya.

| Kelompok | Contoh artikel (kata kunci) | Fitur yang relevan |
|---|---|---|
| Dasar | cara mencatat keuangan pribadi untuk pemula; aplikasi pencatat keuangan yang bisa dipakai offline | Dompet, Transaksi, pencatatan offline |
| Anggaran | cara membuat anggaran bulanan yang bisa dipakai; bedanya anggaran dan pengeluaran | Anggaran sebagai rencana, Pos anggaran |
| Freelance | cara mencatat penghasilan freelance; kerja selesai belum berarti uang masuk | Proyek, worklog, tagihan, pembayaran diterima |
| Dompet | cara memantau saldo beberapa dompet dan e-wallet; mencatat transfer antardompet | Dompet, Transfer |
| Rutin | cara mencatat tagihan dan langganan bulanan | Rencana dan rutin |
| Privasi | catatan keuangan di ponsel: apa yang tersimpan di mana | Penyimpanan lokal, kebijakan privasi |

Topik "Privasi" harus sejalan persis dengan `src/pages/privasi.astro`.

## Pemeriksaan mutu

- [ ] Satu niat pencarian, dan jawabannya ada di dua-tiga kalimat pertama
- [ ] Kata kunci utama di judul, H1, 100 kata pertama, dan slug, tanpa dijejalkan
- [ ] Setiap klaim tentang Tanukonomy lolos `references/klaim-dan-fakta.md`
- [ ] Tidak ada klaim terlarang: rating, jumlah pengguna, testimoni, "terbaik", statistik tanpa sumber
- [ ] Tidak ada nasihat keuangan, investasi, atau pajak personal; angka pajak atau aturan hanya bila bersumber dari instansi resmi yang ditautkan
- [ ] Kosakata dan suara sesuai `writing.md` (kamu, tanpa tanda seru dan emoji, satu istilah satu makna)
- [ ] Aplikasi digambarkan mencatat, tidak memindahkan atau membayar uang
- [ ] Bagian Tanukonomy relevan, singkat, dan tidak lebih dari satu
- [ ] Meta title ≤ 60 dan description ≤ 155 karakter
- [ ] Tautan internal deskriptif; tautan keluar hanya ke sumber resmi
- [ ] Gambar asli, ber-`alt`, tanpa mockup
- [ ] Contoh angka masuk akal dan ditandai sebagai contoh
- [ ] `draft: true` dan laporan untuk pemilik tersedia

## Larangan

- [ ] Jangan mengarang cerita pengguna, kutipan, testimoni, rating, atau jumlah pengguna
- [ ] Jangan menyebut volume pencarian, peringkat, atau janji naik di Google
- [ ] Jangan memakai klaim privasi yang lebih kuat dari kebijakan privasi (lihat referensi)
- [ ] Jangan membandingkan dengan aplikasi atau layanan lain secara bernama tanpa sumber yang bisa diperiksa pembaca; bandingkan jenis alat (catatan ponsel, spreadsheet, aplikasi pencatat)
- [ ] Jangan menulis artikel tipis demi jumlah halaman atau menduplikasi artikel dengan kata kunci sama
- [ ] Jangan menambah JavaScript klien, cookie, analitik, atau embed pihak ketiga ke artikel (kebijakan privasi menjanjikannya)
- [ ] Jangan menyebut harga, tanggal rilis publik, iOS, sinkronisasi, atau langganan premium sebagai sesuatu yang pasti
- [ ] Jangan mengubah halaman, tata letak, atau konfigurasi situs yang tidak terkait; jangan deploy

## Alur git

Ikuti `CLAUDE.md` repo ini. Sebelum commit: `npm run check` (0 error) dan
`npm run build`. Buat branch baru, satu commit per perubahan logis, dan buka
PR draf. Jangan menandai siap, jangan menggabungkan, jangan memicu deploy.
Branch `claude/saldough-project-progress-au5w8q` dan `main` sama-sama
memicu deploy, jadi cek `.github/workflows/deploy.yml` sebelum mendorong ke
branch mana pun yang bukan milikmu.

## Contoh pemicu

- "Tulis artikel tentang cara mencatat penghasilan freelance."
- "Buatkan artikel blog untuk kata kunci 'aplikasi pencatat keuangan offline'."
- "Usulkan 10 topik artikel untuk Tanukonomy."
- "Terjemahkan artikel `cara-mencatat-penghasilan-freelance` ke Inggris."
- "Periksa artikel ini terhadap fakta aplikasi sebelum diterbitkan."
