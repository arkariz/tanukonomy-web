# Klaim dan fakta untuk artikel

Dicek terakhir **15 Oktober 2026** terhadap kebijakan privasi situs,
`.claude/CLAUDE.md` dan `PLAY_DATA_SAFETY.md` di repo aplikasi
`arkariz/Saldough`. Aplikasi berubah cepat: kalau sebuah klaim penting bagi
artikel dan tanggal di atas sudah lama, cek ulang ke sumbernya. Perbarui
berkas ini bersamaan dengan kebijakan privasi.

## Boleh ditulis sebagai fakta

| Topik | Rumusan yang aman |
|---|---|
| Sifat aplikasi | Tanukonomy mencatat. Ia tidak memindahkan uang, tidak membayar, dan tidak terhubung ke bank atau e-wallet. |
| Fitur inti | Mencatat pemasukan, pengeluaran, dan transfer; Dompet; Anggaran; Freelance (proyek, jam kerja, tagihan, pembayaran diterima); Riwayat; rencana dan rutin. |
| Catatan keuangan | Dompet, transaksi, anggaran, dan proyek freelance tersimpan di perangkatmu dan tidak dikirim ke server kami. |
| Offline | Pencatatan inti bisa dipakai tanpa internet. |
| Akun | Akun bersifat opsional (Google atau email dan kata sandi). Aplikasi berfungsi penuh tanpa akun. |
| Anggaran | Anggaran adalah rencana. Membuatnya tidak mengubah saldo dompet. |
| Transfer | Transfer memindahkan tempat uang, tidak mengubah total saldo, dan tidak dihitung sebagai pemasukan atau pengeluaran. |
| Freelance | Jam kerja yang dicatat tidak mengubah saldo. Saldo bertambah saat pembayaran yang diterima dicatat. |
| Mata uang | Bawaan Rupiah; satu mata uang untuk seluruh aplikasi, dipilih di layar Akun. |
| Platform | Android. Uji coba tertutup lewat Google Play. |
| Mode gelap | Ada. |

## Boleh ditulis dengan kualifikasi

| Topik | Syaratnya |
|---|---|
| Data teknis | Aplikasi mengirim data teknis terbatas lewat Firebase Analytics dan Crashlytics (statistik pemakaian dasar dan laporan crash), Firebase Remote Config (catatan rilis), dan Shorebird (pembaruan kecil). Tidak ada yang berisi catatan keuangan tersimpan. Rinciannya di kebijakan privasi. |
| Catat Cerdas (suara, notifikasi) | Fitur opsional. Bila aturan di perangkat ragu, teks yang akan ditafsirkan dikirim ke Gemini (Google); saldo, riwayat, dan ID internal tidak dikirim, dan angka non-nominal pada notifikasi disamarkan. Jangan menulis "semua diproses di perangkat". |
| Catat dari notifikasi | Android saja, opsional, hanya aplikasi pilihan pengguna, teks disimpan di perangkat paling lama 7 hari. |
| Gratis | Pakai rumusan yang sudah ada di FAQ situs ("pencatatan inti gratis"). Konfirmasi harga masih menunggu pemilik (P-6). |
| Uji coba | Tanukonomy sedang uji coba tertutup; belum dirilis publik. Jangan menulis seolah sudah ada di Play Store. |

## Dilarang

- "Tanpa akun", "tanpa server", "tanpa analitik", "tanpa pelacak", "data tidak pernah meninggalkan ponsel" sebagai klaim mutlak. Yang benar: *catatan keuangan* tidak dikirim ke server kami.
- "Aman 100%", "terenkripsi", "tidak bisa diretas", atau jaminan keamanan lain yang tidak dibuktikan.
- Aplikasi "membayar", "mentransfer", "menagih", "menyambung ke rekening", atau "mengambil saldo otomatis dari bank".
- Rating, jumlah unduhan atau pengguna, testimoni, penghargaan, "terbaik", "nomor 1".
- Perbandingan fitur dengan aplikasi tertentu tanpa sumber yang bisa diperiksa.
- Tanggal rilis publik, iOS, harga atau langganan premium, sinkronisasi antar perangkat sebagai sesuatu yang pasti. Semuanya masih rencana.
- Menyebut pengguna "dilacak" atau datanya "dijual"; juga klaim hukum (GDPR dan sejenisnya) yang tidak ada di kebijakan privasi.
- Nasihat keuangan, investasi, atau pajak yang disesuaikan untuk pembaca. Bila artikel perlu menyebut aturan pajak atau angka dari instansi, kutip sumber resminya dan tautkan; kalau tidak bisa diverifikasi, jangan ditulis.

## Kosakata

Lihat tabel lengkap di `docs/03-design/design-system/writing.md` (repo
aplikasi). Yang paling sering keliru di artikel:

| Pakai | Jangan pakai |
|---|---|
| Dompet | kantong, kas, rekening (sebagai nama umum) |
| Transaksi | log, entri, catatan kas |
| Transfer | mutasi |
| Selisih | arus bersih, netto |
| Anggaran, pos anggaran | slot, kuota |
| Belum diterima | piutang |
| Uang nganggur | saldo (kata "saldo" hanya untuk isi dompet) |

## Bila sumber saling bertentangan

Kebijakan privasi situs (`src/pages/privasi.astro`) adalah acuan akhir untuk
semua klaim tentang data. Bila artikel atau berkas ini bertentangan dengan
kebijakan, kebijakan yang benar; laporkan pertentangannya ke pemilik.
