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

- [x] **W-7** Hosting sementara di GitHub Pages
      (`arkariz.github.io/tanukonomy-web/`) dengan workflow deploy otomatis.

## Menunggu pemilik

- [ ] **P-1** *(ditunda pemilik 28 Sep 2026)* Cek merek dagang "Tanukonomy" dan beli domain (T-8.3 di repo
      aplikasi). Lalu ganti `SITE_URL` dan baris `Sitemap:` di
      `public/robots.txt` kalau domainnya bukan `tanukonomy.app`.
- [ ] **P-2** *(ditunda pemilik 28 Sep 2026; `halo@tanukonomy.app` belum menerima email)* Alamat kontak: aktifkan Email Routing Cloudflare untuk
      `halo@<domain>` (atau ganti `CONTACT_EMAIL`).
- [ ] **P-3** Tinjau dan setujui isi kebijakan privasi dan syarat. Draf
      ditulis dari perilaku aplikasi per 28 Sep 2026 (tanpa server, tanpa
      izin Android tambahan, tanpa analitik); bukan nasihat hukum.
- [ ] **P-4** Buat Google Group penguji dan jalur closed testing di Play
      Console, lalu isi `GOOGLE_GROUP_URL` dan `PLAY_TESTING_URL`.
- [ ] **P-7** Aktifkan GitHub Pages: Settings → Pages → Source: GitHub
      Actions, dan jadikan repo publik (atau pakai GitHub Pro).
- [ ] **P-5** *(setelah P-1)* Hubungkan repo ke Cloudflare Pages (build `npm run build`,
      keluaran `dist`, `NODE_VERSION=22`) dan pasang domain.
- [ ] **P-6** Konfirmasi dua klaim di tanya jawab: iOS "menyusul" dan
      "gratis selama uji coba".

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
