# CLAUDE.md — tanukonomy-web

Situs pemasaran dan dokumen hukum untuk aplikasi **Tanukonomy** (kode
aplikasinya di `arkariz/Saldough`, nama paket Dart masih `saldough`).
Percakapan dan prosa dokumen dalam bahasa Indonesia.

Baca dulu: `README.md` (struktur, perintah), `docs/TASKS.md` (progres dan
yang menunggu pemilik), `docs/adr/` (keputusan).

## Aturan

- **Bahasa visual mengikuti aplikasi**: design system v2 "Tanukonomy
  Matcha" (ADR-043 di repo aplikasi; di sini `docs/adr/0002`): kanvas kabut,
  hijau matcha `#1F4B2C`, garis rambut 1px, sudut 8/16/24 dan pil, bayangan
  sekitar tipis (tanpa bayangan keras), ikon clay 3D, satu huruf Plus
  Jakarta Sans dengan Space Mono Bold untuk label. Token di
  `src/styles/global.css` disalin dari `docs/03-design/design-system-v2/tokens.json`
  aplikasi (terang dan gelap). Satu tombol `.btn-primary` per layar, label
  mikro minimal 12px. Jangan menambah warna di luar token dan jangan
  memakai kembali gaya pixel lama (ADR-015/016/020).
- **Kosakata produk sama dengan aplikasi**: aplikasi *mencatat*, bukan
  *melakukan*. Tidak ada klaim fitur yang belum ada di aplikasi; cek
  repo aplikasi sebelum menulis klaim baru. Jangan mengarang rating,
  jumlah pengguna, atau testimoni.
- **Teks ada di `src/i18n/`**, bukan di komponen. `en.ts` bertipe `Dict`
  dari `id.ts`, jadi kunci yang hilang gagal di `npm run check`.
  Halaman hukum pengecualian: ditulis langsung per bahasa di `src/pages/`.
- **Tangkapan layar asli**: tangkapan layar listing Play v2 dari repo
  aplikasi (`src/assets/shots/`, lihat `tools/screenshots/README.md`).
  Jangan diganti mockup. Teks alternatifnya wajib menyebut judul di
  dalam gambar.
- **Tanpa JavaScript klien, cookie, atau analitik** kecuali lewat ADR
  baru — kebijakan privasi menjanjikan itu.
- Ubah dokumen hukum → perbarui `LEGAL_EFFECTIVE_DATE` di `src/config.ts`.

## Sebelum commit

`npm run check` (0 error) dan `npm run build`. Untuk perubahan tampilan,
render di lebar 390 dan 1280, mode terang dan gelap. Target Lighthouse:
100 di keempat kategori (terakhir diukur 28 Sep 2026 di semua halaman).
