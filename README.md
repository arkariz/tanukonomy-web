# tanukonomy-web

Landing page, kebijakan privasi, syarat dan ketentuan, dan halaman
pendaftaran uji coba tertutup untuk **Tanukonomy** (aplikasi Flutter di
repo `arkariz/Saldough`).

Situs statis Astro, dua bahasa (Indonesia di `/`, Inggris di `/en/`),
tanpa JavaScript di sisi klien, tanpa cookie, tanpa analitik.

## Menjalankan

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # pemeriksaan tipe Astro
npm run build    # hasil di dist/
npm run preview  # menyajikan dist/
```

Node 22 atau lebih baru.

## Halaman

| Indonesia | Inggris | Isi |
|---|---|---|
| `/` | `/en/` | Landing |
| `/beta/` | `/en/beta/` | Langkah ikut uji coba tertutup Google Play |
| `/privasi/` | `/en/privacy/` | Kebijakan privasi (wajib untuk Play Console) |
| `/syarat/` | `/en/terms/` | Syarat dan ketentuan |

## Yang perlu diisi pemilik

Semua ada di `src/config.ts`:

- `SITE_URL` — domain final. Dipakai untuk canonical, hreflang, sitemap,
  dan Open Graph. Juga perbarui baris `Sitemap:` di `public/robots.txt`.
- `CONTACT_EMAIL` — alamat kontak di footer, halaman uji coba, dan
  dokumen hukum.
- `GOOGLE_GROUP_URL` dan `PLAY_TESTING_URL` — selama kosong, tombol di
  `/beta/` tampil "Segera dibuka", bukan tautan mati.
- `LEGAL_EFFECTIVE_DATE` — ubah setiap kali isi kebijakan privasi atau
  syarat berubah.

## Struktur

```
src/
  config.ts            nilai yang bergantung keputusan pemilik
  i18n/{id,en}.ts      seluruh teks landing dan /beta (en.ts wajib bertipe Dict)
  i18n/index.ts        slug per bahasa, helper bahasa
  layouts/Base.astro   <head> SEO: canonical, hreflang, OG, JSON-LD
  layouts/Legal.astro  kerangka halaman hukum
  components/          Home, Beta, Phone (tangkapan layar), PixelIcon, ...
  pages/               rute; halaman hukum ditulis langsung per bahasa
  assets/screens/      tangkapan layar aplikasi sungguhan (lihat tools/screenshots)
  assets/illustration/ maskot tanuki dari aplikasi
  assets/icons/        ikon pixel dari aplikasi
public/                font woff2 (subset latin), ikon, og/, robots.txt
tools/og/              template dan skrip render gambar Open Graph
tools/screenshots/     seed data dan skrip render tangkapan layar aplikasi
docs/                  ADR dan daftar tugas situs
```

## Deploy

Rencananya Cloudflare Pages (lihat [ADR-001](docs/adr/0001-astro-statis-di-cloudflare-pages.md)):
perintah build `npm run build`, direktori keluaran `dist`, variabel
lingkungan `NODE_VERSION=22`.
