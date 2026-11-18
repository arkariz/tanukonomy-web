# Tangkapan layar aplikasi (v2)

Sejak 7 Nov 2026 situs memakai **tangkapan layar listing Google Play v2** dari
repo aplikasi `arkariz/Saldough`, bukan render ponsel sendiri. Itu render
**aplikasi sungguhan** (emulator, cadangan demo), bukan mockup, dalam bahasa
`id` dan `en`.

| Di situs | Sumber di repo aplikasi |
|---|---|
| `src/assets/shots/<bahasa>/NN_<nama>.jpg` (1080×1920) | `docs/03-release/store_assets/screenshots/<bahasa>/NN_<nama>.jpg` |
| `public/icon-*.png`, `apple-touch-icon.png`, `favicon.ico` | `docs/03-release/store_assets/app_icon_512.png` (disimpan di `src/assets/icon-src/app-icon-v2-512.png`) |
| `src/assets/clay/*.svg` | `assets/icons_clay/*.svg` |

## Memperbarui

Kalau tampilan aplikasi berubah besar, repo aplikasi membangun ulang
tangkapan layar listing (`scripts/launcher_icon/build_store_screenshots.py`,
caranya di `docs/03-release/PLAY_STORE_LISTING.md` §4.1). Salin hasilnya:

```sh
A=../Saldough   # lokasi repo aplikasi
for l in id en; do cp $A/docs/03-release/store_assets/screenshots/$l/*.jpg src/assets/shots/$l/; done
```

Nama berkas (`01_beranda`, `02_catat`, `03_rutin`, `04_anggaran`,
`05_freelance`, `06_analisis`) dirujuk dari `src/i18n/*.ts` (`shot`).
Setiap tangkapan layar punya judul bawaan di dalam gambar, jadi **teks
alternatifnya wajib menyebut judul itu** dan isi layarnya. Gambar adalah
slide pemasaran berbingkai ponsel, bukan layar mentah; kalau kelak ada render
mentah per layar, ganti komponen `src/components/Shot.astro`.

Render mentah (emulator atau `flutter test`) tidak bisa dijalankan dari sesi
agen tanpa Flutter SDK; pemilik merendernya di mesin sendiri.
