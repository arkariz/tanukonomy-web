# Tugas tanukonomy-web

Diperbarui 28 September 2026.

## Selesai

- [x] **W-1** Landing dua bahasa: hero, tiga pertanyaan, empat fitur,
      freelance, privasi, mode gelap, cara mulai, tanya jawab, ajakan.
- [x] **W-2** `/beta/`: langkah uji coba tertutup; tombol tampil
      "Segera dibuka" selama tautan di `src/config.ts` kosong.
- [x] **W-3** Draf kebijakan privasi dan syarat ketentuan (id, en).
- [x] **W-4** Fondasi SEO: title/description unik, canonical, hreflang +
      x-default, Open Graph + gambar 1200×630 per bahasa, Twitter card,
      JSON-LD (`Organization`, `MobileApplication`, `FAQPage`),
      `sitemap-index.xml`, `robots.txt`, halaman 404.
- [x] **W-5** Tangkapan layar aplikasi sungguhan (6 layar × id/en × terang/
      gelap) dan skrip render ulangnya.
- [x] **W-6** Lighthouse 100/100/100/100 di `/`, `/en/`, `/beta/`,
      `/privasi/`, `/en/terms/`.

- [x] **W-7** Hosting di GitHub Pages dengan workflow deploy otomatis.
      29 Sep 2026: pindah ke domain sendiri `tanukonomy.app`
      (`public/CNAME`, `SITE_URL`, `BASE_PATH = '/'`, `robots.txt`).
      Hosting tetap GitHub Pages; Cloudflare Pages tidak dipakai dulu.
- [x] **W-8** Freelance dihapus dari navigasi header (tetap ada sebagai
      bagian isi landing dan di footer) karena itu bagian dari fitur
      CATAT, bukan area terpisah. `/beta` ditulis ulang: 4 langkah yang
      cocok dengan alur asli Google Play (akun yang sama di tiga tempat,
      waktu tunggu aktivasi realistis), plus bagian "Masalah yang mungkin
      muncul" (7 isu umum opt-in closed testing). FAQ dan bagian privasi
      landing serta kebijakan privasi (id, en) sekarang menyebut rencana
      sinkronisasi data multi-perangkat sebagai fitur mendatang, opsional,
      belum tersedia.
- [x] **W-9** Pemilik mengonfirmasi rencana produk: akan ada akun, analitik
      pemakaian, dan model freemium (bukan cuma sinkronisasi). Klaim
      absolut "tanpa akun" dan "tanpa iklan dan pelacak" dilunakkan jadi
      "saat ini"/"hari ini" di semua tempat: judul `<title>`, chip hero,
      empat kartu privasi landing, kotak "sedang disiapkan", FAQ (2 item
      baru: analitik, freemium; 1 diperbarui: lokasi data), meta deskripsi
      `/beta`, dan gambar Open Graph. Kebijakan privasi (id, en) dapat §6
      diperluas (akun, sinkronisasi, **dan langganan premium**) dan §7 baru
      (analitik pemakaian produk, dengan janji: bukan untuk jual data/
      iklan, tidak mencakup isi catatan keuangan, provider akan disebutkan
      sebelum aktif); §2 diberi kualifikasi "saat ini". Nomor bagian 7–10
      lama bergeser jadi 8–11.
- [x] **W-10** Bagian baru "Fitur mendatang" (`#mendatang`) di landing,
      antara Privasi dan Mode gelap: tiga rencana (catat otomatis dari
      notifikasi/struk/suara, dashboard insight keuangan, catatan
      bersama), masing-masing berkartu bingkai putus-putus amber dan
      lencana "Segera", plus catatan yang menaut ke kebijakan privasi.
      Ditautkan dari navigasi header. "Catat otomatis" ditulis sebagai
      draf yang mengalir ke CATAT untuk dikonfirmasi, bukan jalur
      pencatatan baru (aturan #8 `CLAUDE.md` aplikasi). Token warna baru
      `--pending-on-tint` ditambahkan ke `global.css` untuk lencana
      "Segera" (`--pending` langsung di atas `--tint-pending` hanya
      4,19:1, di bawah ambang WCAG 4,5:1 untuk teks kecil).
- [x] **W-11** Halaman hapus akun/data (`/hapus-akun/`, `/en/delete-account/`),
      untuk kolom "URL hapus akun" di Play Console (App content → Data
      safety), ditautkan dari footer. Karena aplikasi belum punya sistem
      akun, isinya jujur soal keadaan sekarang (§1–§2: cara hapus data
      lokal lewat uninstall/clear data, tanpa masa retensi karena tidak
      ada server) dan menuliskan janji untuk nanti (§3: penghapusan akun
      dalam aplikasi dalam 30 hari, begitu akun/sinkronisasi aktif —
      lihat `PLAY_DATA_SAFETY.md` repo `Saldough`). Perbarui §3 dengan
      langkah pasti begitu fitur itu sungguhan dibangun.

## Menunggu pemilik

- [x] **P-1** Domain `tanukonomy.app` dibeli pemilik 29 Sep 2026. Cek
      merek dagang "Tanukonomy" (T-8.3 di repo aplikasi) masih terpisah.
- [ ] **P-1b** DNS `tanukonomy.app` diarahkan ke GitHub Pages (4 record A
      `185.199.108–111.153`, 4 record AAAA `2606:50c0:8000–8003::153`,
      CNAME `www` → `arkariz.github.io`), lalu Settings → Pages → Custom
      domain `tanukonomy.app` dan centang "Enforce HTTPS" setelah
      sertifikat terbit. Opsional: verifikasi domain di Settings akun →
      Pages supaya domain tidak bisa diklaim repo lain.
- [ ] **P-2** *(ditunda pemilik 28 Sep 2026; `halo@tanukonomy.app` belum menerima email)* Alamat kontak: aktifkan Email Routing Cloudflare untuk
      `halo@<domain>` (atau ganti `CONTACT_EMAIL`).
- [ ] **P-3** Tinjau dan setujui isi kebijakan privasi dan syarat. Draf
      ditulis dari perilaku aplikasi per 28 Sep 2026 (tanpa server, tanpa
      izin Android tambahan, tanpa analitik); bukan nasihat hukum.
- [ ] **P-4** Buat Google Group penguji dan jalur closed testing di Play
      Console, lalu isi `GOOGLE_GROUP_URL` dan `PLAY_TESTING_URL`.
- [ ] **P-7** Aktifkan GitHub Pages: Settings → Pages → Source: GitHub
      Actions, dan jadikan repo publik (atau pakai GitHub Pro).
- [-] **P-5** *(dibatalkan 29 Sep 2026)* Cloudflare Pages tidak dipakai;
      situs tetap di GitHub Pages dengan domain sendiri (P-1b). Buka lagi
      hanya kalau butuh header HTTP kustom atau repo harus privat tanpa
      GitHub Pro.
- [ ] **P-6** Konfirmasi dua klaim di tanya jawab: iOS "menyusul" dan
      "gratis selama uji coba".
- [x] **P-8a** *(29 Sep 2026, ADR-023 di repo aplikasi)* Identitas opsional
      (Google Sign-In + email/sandi tester), Firebase Analytics, dan
      Firebase Crashlytics sudah masuk kode aplikasi. Kebijakan privasi
      diperbarui: §6 "Akun (opsional)" dan §7 "Analitik pemakaian dan
      laporan error" menyebut Firebase Authentication/Analytics/Crashlytics
      secara eksplisit (`privasi.astro`, `en/privacy.astro`); §3 halaman
      hapus akun (`hapus-akun.astro`, `en/delete-account.astro`) ditulis
      ulang jadi langkah pasti (ikon Akun di Beranda → Hapus Akun), bukan
      lagi "belum tersedia". `LEGAL_EFFECTIVE_DATE` diperbarui ke
      2026-09-29.
- [ ] **P-8b** Sinkronisasi data dompet/transaksi/anggaran ke server dan
      langganan premium **masih belum digarap** — bagian itu di kebijakan
      privasi (sekarang §8) dan §3 halaman hapus akun tetap berupa rencana.
      Begitu digarap: sebutkan penyedia backend/pembayaran secara eksplisit,
      tulis ulang bagian itu dengan langkah pasti dan tenggat penghapusan
      data tersinkron, lalu perbarui `LEGAL_EFFECTIVE_DATE`. Jangan
      aktifkan fiturnya di aplikasi sebelum keduanya diperbarui.
- [ ] **P-9** Setelah domain sendiri aktif (P-1): tempel URL halaman hapus
      akun (`/hapus-akun/`, W-11) ke kolom "URL hapus akun" di Play
      Console (App content → Data safety) begitu fitur akun benar-benar
      dibangun. Untuk uji coba tertutup sekarang, kolom ini biasanya tidak
      wajib diisi kalau jawaban "metode pembuatan akun" dipilih "Aplikasi
      saya tidak mengizinkan pengguna membuat akun" (lihat
      `PLAY_DATA_SAFETY.md` repo `Saldough`).

## Berikutnya (SEO)

- [ ] **S-1** Daftarkan domain ke Google Search Console (verifikasi DNS)
      dan kirim sitemap.
- [ ] **S-2** Riset kata kunci web (bukan toko aplikasi): mis. "aplikasi
      catatan keuangan", "aplikasi pencatat keuangan pribadi", "cara
      mencatat keuangan freelancer". Data toko aplikasi ada di
      `docs/01-product/ASO_NAME_RESEARCH.md` repo aplikasi.
- [ ] **S-3** Koleksi artikel panduan (Astro content collection) untuk
      kata kunci informasional; satu artikel = satu niat pencarian.
- [ ] **S-4** Setelah rilis publik: tautan Google Play di hero dan JSON-LD
      (`installUrl`), lencana "Tersedia di Google Play".
- [ ] **S-5** Backlink awal: direktori aplikasi Indonesia, komunitas
      freelancer, Product Hunt.
