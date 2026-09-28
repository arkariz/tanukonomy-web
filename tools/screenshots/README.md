# Tangkapan layar aplikasi

Semua gambar ponsel di `src/assets/screens/` adalah render **aplikasi
sungguhan** (repo `arkariz/Saldough`) dengan data contoh, bukan mockup.
Nama berkas: `<layar>-<bahasa>-<tema>.png`, 780×1688 (390×844 @2x).

## Merender ulang

Dari akar repo aplikasi (Flutter 3.47.2), dengan Playwright terpasang global:

```sh
cp ../tanukonomy-web/tools/screenshots/main_screenshot.dart lib/
flutter create . --platforms web
flutter build web --release --no-web-resources-cdn -t lib/main_screenshot.dart
(cd build/web && python3 -m http.server 8080 &)

OUT=../tanukonomy-web/src/assets/screens
export NODE_PATH=$(npm root -g)
node ../tanukonomy-web/tools/screenshots/drive.cjs $OUT light id-ID id
node ../tanukonomy-web/tools/screenshots/drive.cjs $OUT dark  id-ID id
node ../tanukonomy-web/tools/screenshots/drive.cjs $OUT light en-US en
node ../tanukonomy-web/tools/screenshots/drive.cjs $OUT dark  en-US en

# Bersihkan repo aplikasi — jangan ada yang ikut ter-commit.
git checkout -- .metadata analysis_options.yaml
rm -rf web .idea *.iml test/widget_test.dart build/web lib/main_screenshot.dart
```

`main_screenshot.dart` mengisi dompet, transaksi bulan berjalan, satu
anggaran, dan satu proyek freelance, lalu menandai onboarding dan tur
selesai supaya layar tidak tertutup sorotan. Tanggal mengikuti hari build.

`drive.cjs` menekan navigasi bawah lewat koordinat (lebar 390), jadi kalau
tata letak navigasi aplikasi berubah, koordinatnya perlu disesuaikan.
