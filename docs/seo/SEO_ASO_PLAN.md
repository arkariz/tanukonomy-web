# Rencana SEO dan ASO (9 November 2026)

Tujuan: menaikkan trafik organik ke situs dan install Tanukonomy dari Google
Play. Dokumen ini mencatat apa yang sudah dikerjakan di situs, cara
mengukurnya, rencana konten, dan **teks listing Play siap tempel** yang
disesuaikan dengan versi 1.0.0. Tidak ada angka volume pencarian di repo, jadi
prioritas ditentukan dari kecocokan dengan fitur nyata dan persaingan yang
masuk akal, bukan dari klaim perkiraan trafik.

## 1. Sudah dikerjakan di situs (W-16)

| Area | Perubahan | Mengapa |
|---|---|---|
| Judul dan deskripsi beranda | id: "Tanukonomy: Aplikasi Catatan Keuangan, Anggaran & Freelance"; en: "Tanukonomy: Budget & Expense Tracker with Freelance Income"; deskripsi memuat kata kunci dan "Gratis di Google Play" | Kata kunci riset ASO (catatan keuangan, anggaran, pengeluaran, freelance; budget, expense tracker) ada di judul |
| Judul artikel | Akhiran " — Tanukonomy" dibuang bila judul lebih dari 60 karakter (sebelumnya 73) | Google memotong judul di sekitar 60 karakter |
| Data terstruktur | `MobileApplication` kini memuat `installUrl`, `screenshot` (5 tangkapan layar asli), `featureList`, `applicationSubCategory`, `isAccessibleForFree`; ditambah `WebSite`; `Organization` memuat `sameAs` ke halaman Play. Tidak ada `aggregateRating` (tidak ada rating yang bisa dibuktikan di situs) | Melengkapi data yang dipakai hasil pencarian aplikasi |
| Meta robots | `max-image-preview:large, max-snippet:-1`; halaman 404 `noindex` | Pratinjau gambar besar di hasil pencarian dan Discover |
| Atribusi install | Setiap tombol Play memakai `referrer=utm_source=tanukonomy.app&utm_medium=website&utm_campaign=<penempatan>` (`header`, `hero`, `cta`, `download`, `blog-<slug>`) | Play Console mencatat install per penempatan tanpa pelacak di situs |
| Konversi di ponsel | Tombol pasang di header tetap terlihat di layar sempit (label pendek "Pasang"/"Get") | Sebelumnya hilang di bawah 480px |
| Tautan internal | Beranda memuat tiga artikel terbaru; artikel punya kartu "Coba Tanukonomy" di akhir | Aliran otoritas ke artikel dan jalur dari artikel ke install |

Lighthouse (9 Nov 2026, build lokal, Chromium headless): Performance 99–100,
Accessibility 100, Best Practices 100, SEO 100 di beranda id dan en, halaman
pasang, dan artikel, mobile dan desktop.

## 2. Mengukur

1. **Search Console (S-1).** Daftarkan `https://tanukonomy.app` (verifikasi DNS
   lewat domain), kirim `sitemap-index.xml`. Tanpa ini tidak ada data kueri
   dan peringkat; semua keputusan konten di bawah baru bisa diuji setelahnya.
2. **Laporan akuisisi Play.** Di Play Console, lihat laporan akuisisi dan
   kolom UTM/sumber untuk melihat install dari `tanukonomy.app` per
   `utm_campaign`. Nama menu bisa berubah; cek di konsol.
3. **Tanpa analitik di situs.** Kebijakan privasi menjanjikan situs tanpa
   cookie dan analitik; pengukuran memakai Search Console dan Play Console saja.

## 3. Rencana konten (belum ditulis)

Aturan: tips keuangan umum yang berguna dengan alat apa pun, jembatan halus ke
Tanukonomy di satu bagian (lihat skill `blog-writer`). Satu artikel, satu niat
pencarian. Urutan usulan, tanpa data volume:

| # | Topik (kata kunci) | Niat | Fitur sebagai jembatan |
|---|---|---|---|
| 1 | Cara mencatat pengeluaran harian tanpa ribet (*cara mencatat pengeluaran harian*) | Informasional, kemungkinan ramai | CATAT, suara, notifikasi |
| 2 | Cara mengatur gaji bulanan (*cara mengatur gaji*) | Informasional | Anggaran sebagai rencana, periode keuangan mengikuti gajian |
| 3 | Cara mencatat penghasilan freelance (*mencatat penghasilan freelance*) | Informasional, persaingan rendah menurut riset ASO | Freelance: worklog, tagihan, pembayaran diterima |
| 4 | Cara mencatat transfer antar rekening dan e-wallet (*mencatat transfer e-wallet*) | Informasional, sempit | Dompet, Transfer |
| 5 | Cara mencatat tagihan dan langganan bulanan (*mencatat tagihan bulanan*) | Informasional | Rutin dan pengingat |
| 6 | Catatan keuangan: aplikasi atau spreadsheet (*catatan keuangan excel atau aplikasi*) | Perbandingan jenis alat, tanpa menyebut aplikasi lain | Ekspor dan cadangan |
| 7 | Cara membuat anggaran bulanan yang realistis (*cara membuat anggaran bulanan*) | Informasional, ramai | Anggaran |
| 8 | Padanan Inggris tiap artikel di atas | Pembaca berbahasa Inggris | sama |

Satu artikel baru per dua minggu cukup untuk memulai; hindari menerbitkan
banyak artikel tipis sekaligus.

## 4. ASO: teks listing Play siap tempel

Cocokkan dengan `PLAY_STORE_LISTING.md` di repo aplikasi. Teks listing di
repo aplikasi masih menyebut "gaya pixel" dan belum memuat Plus, notifikasi,
rutin, Analisis, serta ekspor, jadi perlu diperbarui di Play Console.
**Pemilik mengisi Play Console**; agen tidak mengubah konsol.

### 4.1 Judul (maks. 30), tetap

| Bahasa | Teks | Panjang |
|---|---|---|
| `id-ID` | `Tanukonomy: Catatan Keuangan` | 28 |
| `en-US` | `Tanukonomy: Budget & Expense` | 28 |

### 4.2 Deskripsi singkat (maks. 80), dua varian untuk eksperimen

| Bahasa | Varian | Teks | Panjang |
|---|---|---|---|
| `id-ID` | A (sekarang) | `Catat pengeluaran harian, atur anggaran bulanan & pantau pemasukan freelance.` | 77 |
| `id-ID` | B | `Catat pengeluaran, atur anggaran, tagihan rutin & uang freelance. Data di HP-mu.` | 80 |
| `en-US` | A (sekarang) | `Spending tracker & money manager with freelance income and monthly plans.` | 73 |
| `en-US` | B | `Track spending, plan budgets, bills & freelance income. Data stays on-device.` | 77 |

Uji lewat **Store listing experiments** (Grow users › Store listing
experiments): varian B melawan A, ukur konversi kunjungan ke install sampai
hasilnya jelas; jangan ganti dua hal sekaligus.

### 4.3 Deskripsi lengkap `id-ID` (2885/4000)

```
Tanukonomy adalah aplikasi catatan keuangan pribadi yang bekerja seperti buku kas: lihat di mana uangmu berada, apa yang terjadi padanya, dan ke mana ia direncanakan pergi. Seekor tanuki juru catat menemanimu di tiap layar.

Catat pemasukan, pengeluaran, dan transfer antardompet dalam hitungan detik, lewat ketikan, suara, atau notifikasi bank dan e-wallet. Susun anggaran bulanan, jadwalkan tagihan rutin, dan lihat ke mana uangmu pergi lewat Analisis. Untuk freelancer, catat jam kerja per proyek dan tandai saat pembayarannya benar-benar diterima.

DOMPET
• Rekening bank, e-wallet, uang tunai, dan tabungan jadi dompet masing-masing
• Saldo tiap dompet dan total saldo selalu terlihat
• Transfer antardompet tidak dihitung sebagai pemasukan atau pengeluaran

CATAT
• Satu tombol untuk mencatat pemasukan, pengeluaran, atau transfer, lengkap dengan kalkulator
• Catat pakai suara: ucapkan satu transaksi, periksa formulir yang sudah terisi, lalu simpan
• Catat dari notifikasi (Android, opsional): pilih sendiri aplikasi bank atau e-wallet yang dibaca
• Tautkan pengeluaran ke pos anggaran supaya progres anggaran ikut bergerak

RENCANA DAN RUTIN
• Gaji, tagihan, langganan, dan tabungan dicatat sebagai rutin dengan pengingat sebelum jatuh tempo
• Lihat uang yang belum terpakai dan perkiraan saldo akhir bulan
• Awal bulan keuangan bisa mengikuti tanggal gajianmu

ANGGARAN
• Anggaran mingguan atau bulanan dengan pos-pos belanja
• Anggaran adalah rencana: membuatnya tidak mengubah saldo dompet
• Lihat sisa dan pemakaian tiap pos, simpan template untuk anggaran yang berulang

FREELANCE
• Kelola proyek dan klien dengan tarif per jam
• Catat jam kerja, lalu tagihkan dan catat pembayaran yang diterima ke dompet tujuan
• Pisahkan "sudah dikerjakan" dan "sudah dibayar" supaya tagihan yang tertunda terlihat jelas

ANALISIS
• Pengeluaran per kategori, dibanding biasanya, dan tren enam periode terakhir

EKSPOR DAN CADANGAN
• Ekspor catatanmu ke spreadsheet, cadangkan ke berkas, dan pulihkan di ponsel baru

TANUKONOMY PLUS (OPSIONAL)
• Langganan bulanan atau tahunan lewat Google Play untuk otomasi dan analisis lanjutan
• Masuk dengan akun untuk mencobanya gratis; pencatatan inti tetap gratis

DATAMU DI PERANGKATMU
• Semua catatan tersimpan di HP-mu; mencatat, dompet, dan anggaran berjalan penuh tanpa internet
• Tidak terhubung ke rekening bank mana pun dan tidak memindahkan uang
• Akun opsional, dan tanpa iklan
• Catat dari suara atau notifikasi yang ragu ditafsirkan aturan di perangkat dapat memakai layanan Gemini (Google)
• Statistik pemakaian dan laporan crash dikumpulkan untuk memperbaiki aplikasi

TAMPILAN
• Mode terang dan gelap, tema warna, dan maskot tanuki
• Bahasa Indonesia dan Inggris, dengan 14 pilihan mata uang (Rupiah bawaan)

Tanukonomy mencatat, bukan melakukan: aplikasi ini membantumu memahami dan merencanakan uang, tanpa menyentuh rekeningmu.
```

### 4.4 Deskripsi lengkap `en-US` (2689/4000)

```
Tanukonomy is a personal expense tracker and budget planner that works like a cash book: see where your money is, what happens to it, and where you plan for it to go. A note-taking tanuki keeps you company on every screen.

Record income, expenses, and transfers between wallets in seconds, by typing, by voice, or from bank and e-wallet notifications. Plan monthly budgets, schedule recurring bills, and see where your money goes with Analysis. Freelancers can log hours per project and mark when the payment actually arrives.

WALLETS
• Bank accounts, e-wallets, cash, and savings each become a wallet
• See every wallet balance and your total at a glance
• Transfers between wallets never count as income or expense

RECORD
• One button to record income, expenses, or transfers, with a built-in calculator
• Record by voice: say one transaction, check the filled-in form, then save
• Record from notifications (Android, optional): you choose which bank or e-wallet apps are read
• Link an expense to a budget item and the budget updates as you go

PLAN AND RECURRING
• Salary, bills, subscriptions, and savings are recurring items with reminders before they are due
• See money not yet spoken for and a month-end balance forecast
• Your financial month can start on your payday

BUDGETS
• Weekly or monthly budgets with spending items
• A budget is a plan: creating one never changes your wallet balances
• See what's left in each item, and save templates for recurring budgets

FREELANCE
• Manage projects and clients with hourly rates
• Log hours, invoice them, and record payments received into the right wallet
• Keep "work done" and "paid" apart, so unpaid invoices stay visible

ANALYSIS
• Spending by category, compared with usual, and a trend over the last six periods

EXPORT AND BACKUP
• Export your records to a spreadsheet, back up to a file, and restore on a new phone

TANUKONOMY PLUS (OPTIONAL)
• Monthly or yearly subscription through Google Play for automation and advanced analysis
• Sign in to try it free; core recording stays free

YOUR DATA STAYS ON YOUR PHONE
• Everything is stored on your device; recording, wallets, and budgets work fully offline
• No bank connection, and it never moves money
• Account optional, and no ads
• Voice or notification text the on-device rules are unsure about may use the Gemini (Google) service
• Usage statistics and crash reports help us improve the app

LOOK AND FEEL
• Light and dark modes, color themes, and a tanuki mascot
• Available in English and Indonesian, with 14 currencies (Rupiah by default)

Tanukonomy records, it doesn't transact: it helps you understand and plan your money without touching your bank account.
```

Klaim di atas dicek terhadap `release_notes/`, ADR-041, dan
`PLAY_DATA_SAFETY.md` (9 Nov 2026). Tidak ada harga, rating, jumlah unduhan,
atau fitur yang belum rilis (foto struk, catatan bersama, sinkronisasi,
iPhone). Kata kunci utama ada di kalimat pembuka dan judul bagian, tidak
ditumpuk dalam daftar.

### 4.5 Aset dan eksperimen

- Dua tangkapan layar pertama paling sering dilihat; urutan sekarang Beranda,
  Catat, Rutin, Anggaran, Freelance, Analisis. Uji tangkapan layar #1 (Beranda
  vs Catat) lewat eksperimen listing.
- **Custom store listing** untuk lalu lintas dari situs bisa dipertimbangkan
  bila ada dua kelompok pengunjung yang jelas berbeda (mis. pembaca artikel
  freelance); cek ketersediaan fiturnya di konsol.
- **Ulasan dan rating** paling berpengaruh pada peringkat dan konversi.
  Aplikasi belum meminta ulasan lewat Play In-App Review; usulkan sebagai tugas
  di repo aplikasi (minta setelah momen berhasil, tanpa mengganggu). Balas
  ulasan yang masuk.
- Jangan membuat tombol "Get it on Google Play" sendiri; pakai lencana resmi
  Google bila ingin lencana.

## 5. Menunggu pemilik

1. Daftarkan Search Console dan kirim sitemap (S-1).
2. Tempel teks 4.3 dan 4.4 di Play Console, dan jalankan eksperimen 4.2.
3. Putuskan urutan artikel di bagian 3 dan minta penulisannya.
4. Backlink awal (S-5): direktori aplikasi Indonesia, komunitas freelancer,
   Product Hunt. Tidak dikerjakan agen.
