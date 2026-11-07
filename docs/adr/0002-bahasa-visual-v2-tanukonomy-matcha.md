# ADR-002: Bahasa visual situs mengikuti design system v2 "Matcha"

- **Status:** Accepted (permintaan pemilik, 2026-11-07)
- **Tanggal:** 2026-11-07
- **Menggantikan:** pemakaian ADR-015/016/020 repo aplikasi (pixel) di situs.

## Konteks

Aplikasi berpindah dari bahasa visual "buku catatan dengan aksen piksel"
(ADR-034) ke design system v2 "Tanukonomy Matcha" (ADR-043 di repo
`arkariz/Saldough`, status Proposed di sana; spek di
`docs/03-design/design-system-v2/`). Situs masih memakai gaya piksel:
garis tepi 2px, bayangan keras, palet terakota, huruf Space Grotesk, ikon dan
maskot piksel, dan tangkapan layar v1. Situs harus terlihat sebagai produk
yang sama dengan aplikasi.

## Keputusan

1. **Token v2** (`src/styles/global.css`), terang dan gelap, disalin dari
   `tokens.json` aplikasi: kanvas `#FAFAF9`, kartu putih, hijau matcha
   `#1F4B2C` sebagai aksi utama (`#A2D2A9` di gelap), garis rambut `#EAECEF`
   1px, pita hijau hutan (`heroSurface`) untuk bagian privasi, sage dan
   sampanye untuk badge. Nama variabel lama dipertahankan (`--accent`,
   `--card`, `--edge`, ...) supaya komponen tidak diganti nama; artinya yang
   berubah.
2. **Bentuk:** sudut 8 (kontrol), 16 (kartu), 24 (panel besar, tangkapan
   layar), pil penuh untuk badge dan chip; bayangan sekitar tipis, tanpa
   bayangan keras dan tanpa gerak naik saat ditekan.
3. **Huruf:** Plus Jakarta Sans untuk semua teks; Space Mono Bold hanya
   untuk label mikro, pil, dan angka urut. Space Grotesk dihapus.
4. **Ikon dan maskot:** ikon clay 3D dari `assets/icons_clay/` aplikasi
   (`src/assets/clay/`) lewat komponen `ClayIcon`; aset piksel lama dihapus.
5. **Tangkapan layar:** tangkapan layar listing Play v2 (id dan en, render
   aplikasi sungguhan) di `src/assets/shots/`, ditampilkan lewat `Shot`.
   Komponen `Phone` dan render v1 dihapus.
6. **Ikon situs dan gambar OG** dibuat ulang dari ikon aplikasi v2 dan ikon
   clay.
7. **Ilustrasi artikel** memakai token yang sama (`tools/blog/make_svgs.py`).

## Konsekuensi

- Tangkapan layar listing adalah slide pemasaran berbingkai ponsel, bukan
  layar mentah, dan hanya satu varian tema per layar. Bagian "Tampilan"
  memakai pratinjau palet terang dan gelap dari token, bukan tangkapan
  layar. Render mentah per layar butuh emulator dan Flutter SDK di mesin
  pemilik; saat ada, ganti isi `Shot.astro`.
- Teks pemasaran yang sudah ada (bagian "Fitur mendatang", kotak "Sedang
  disiapkan", FAQ gratis/premium) tidak diubah di ADR ini dan perlu ditinjau
  terhadap fitur Plus yang sudah rilis.
- Selama ADR-043 di aplikasi masih Proposed, selisih dari spek v2 dicatat di
  `docs/TASKS.md` situs.
