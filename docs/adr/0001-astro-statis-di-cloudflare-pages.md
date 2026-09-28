# ADR-001: Astro statis di Cloudflare Pages

- **Status:** Accepted
- **Tanggal:** 2026-09-28

## Konteks

Tanukonomy butuh halaman publik sebelum uji coba tertutup Google Play:
Play Console mewajibkan URL kebijakan privasi, dan penguji butuh halaman
berisi langkah ikut uji coba. Pemilik juga ingin landing yang serius secara
UI/UX dan dioptimasi SEO nantinya, jadi fondasinya harus benar sejak awal:
HTML yang bisa dirayapi, cepat, dua bahasa.

## Keputusan

1. **Astro, keluaran statis penuh, tanpa JavaScript klien.** Setiap halaman
   jadi HTML jadi saat build. Gambar dioptimasi saat build (AVIF + WebP,
   `srcset`) lewat `astro:assets`.
2. **Bukan Flutter Web.** Flutter Web merender ke kanvas, jadi mesin pencari
   hanya melihat halaman hampir kosong, dan muatan awalnya berat.
3. **Repo terpisah dari aplikasi** supaya CI Flutter tidak ikut terganggu.
   Aset (font, palet, ikon, maskot) disalin dari aplikasi, bukan dirujuk.
4. **Dua bahasa dengan slug lokal**: Indonesia di akar (`/privasi/`), Inggris
   di `/en/` (`/en/privacy/`). `hreflang` dan canonical dipasang di `<head>`
   tiap halaman; `x-default` menunjuk versi Indonesia.
5. **Hosting Cloudflare Pages** di domain sendiri (bukan subdomain
   `*.pages.dev` atau `*.github.io`, karena otoritas SEO melekat ke domain).
   Gratis, CDN global, dan Email Routing Cloudflare bisa meneruskan alamat
   kontak `halo@` di domain yang sama tanpa server surat.
6. **Tanpa cookie, formulir, atau analitik.** Kebijakan privasi menjanjikan
   ini. Pendaftaran penguji lewat Google Group + halaman opt-in Google Play,
   jadi situs tidak perlu backend.

## Amandemen (2026-09-28): GitHub Pages dulu

Pemilik menunda domain dan alamat kontak. Sampai domain dibeli, situs
disajikan di GitHub Pages `https://arkariz.github.io/tanukonomy-web/`
lewat GitHub Actions. Semua jalur internal melewati `withBase()`/`path()`
supaya pindah ke domain sendiri cukup mengubah `SITE_URL` dan `BASE_PATH`.
Batasan yang diterima: `robots.txt` di subfolder tidak dibaca perayap (hanya
`/robots.txt` di akar domain yang berlaku), dan otoritas SEO yang terkumpul
di `github.io` tidak ikut pindah — jadi jangan mulai kerja SEO serius (S-1
s.d. S-5) sebelum domain sendiri aktif.

## Konsekuensi

- Lighthouse 100 di performa, aksesibilitas, praktik terbaik, dan SEO di
  semua halaman saat ADR ini ditulis.
- Menambah analitik (misalnya untuk mengukur SEO) butuh ADR baru dan
  perubahan kebijakan privasi. Google Search Console tidak termasuk, karena
  tidak memasang apa pun di halaman selain verifikasi DNS.
- Blog atau artikel SEO nanti cukup ditambah sebagai koleksi konten Astro.
