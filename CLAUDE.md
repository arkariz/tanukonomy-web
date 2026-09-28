# CLAUDE.md — tanukonomy-web

Situs pemasaran dan dokumen hukum untuk aplikasi **Tanukonomy** (kode
aplikasinya di `arkariz/Saldough`, nama paket Dart masih `saldough`).
Percakapan dan prosa dokumen dalam bahasa Indonesia.

Baca dulu: `README.md` (struktur, perintah), `docs/TASKS.md` (progres dan
yang menunggu pemilik), `docs/adr/` (keputusan).

## Aturan

- **Bahasa visual mengikuti aplikasi**: ADR-015 (pixel, garis tepi 2px,
  bayangan keras), ADR-016 (palet satu peran satu warna, token di
  `src/styles/global.css` disalin dari `app_colors_extension.dart`),
  ADR-020 (satu tombol `.btn-primary` per layar, label mikro minimal 12px
  di situs). Jangan menambah warna di luar token.
- **Kosakata produk sama dengan aplikasi**: aplikasi *mencatat*, bukan
  *melakukan*. Tidak ada klaim fitur yang belum ada di aplikasi; cek
  repo aplikasi sebelum menulis klaim baru. Jangan mengarang rating,
  jumlah pengguna, atau testimoni.
- **Teks ada di `src/i18n/`**, bukan di komponen. `en.ts` bertipe `Dict`
  dari `id.ts`, jadi kunci yang hilang gagal di `npm run check`.
  Halaman hukum pengecualian: ditulis langsung per bahasa di `src/pages/`.
- **Tangkapan layar asli**, dirender dari aplikasi lewat
  `tools/screenshots/`. Jangan diganti mockup.
- **Tanpa JavaScript klien, cookie, atau analitik** kecuali lewat ADR
  baru — kebijakan privasi menjanjikan itu.
- Ubah dokumen hukum → perbarui `LEGAL_EFFECTIVE_DATE` di `src/config.ts`.

## Sebelum commit

`npm run check` (0 error) dan `npm run build`. Untuk perubahan tampilan,
render di lebar 390 dan 1280, mode terang dan gelap. Target Lighthouse:
100 di keempat kategori (terakhir diukur 28 Sep 2026 di semua halaman).
