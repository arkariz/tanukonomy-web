/**
 * Satu-satunya tempat untuk nilai yang bergantung pada keputusan pemilik.
 * Ganti di sini, bukan di halaman.
 */
export const SITE_URL = 'https://tanukonomy.app';

/**
 * Awalan jalur situs. '/' karena situs disajikan di domain sendiri
 * (public/CNAME); kembali ke '/<nama-repo>/' hanya kalau domain dilepas.
 */
export const BASE_PATH = '/';

/** Jalur absolut di dalam situs, memperhitungkan BASE_PATH. `p` diawali '/'. */
export const withBase = (p: string) => BASE_PATH.replace(/\/$/, '') + p;

/** Alamat kontak publik (kebijakan privasi mewajibkannya). */
export const CONTACT_EMAIL = 'halo@tanukonomy.app';

/**
 * Tautan closed testing, satu per langkah di /beta. Kosongkan kalau belum
 * tersedia: tombolnya tampil nonaktif "segera dibuka", bukan tautan mati.
 * Jangan menyertakan `/u/<n>/` dari URL Google: itu nomor akun di peramban
 * pemilik dan bisa membuka akun yang salah di perangkat penguji.
 */
export const GOOGLE_GROUP_URL = 'https://groups.google.com/g/tanukonomy-closed-tester';
/** Halaman opt-in "Jadi Penguji"; beda dari halaman toko di bawah. */
export const PLAY_TESTING_URL = 'https://play.google.com/apps/testing/com.arkarizdev.tanukonomy';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.arkarizdev.tanukonomy';

/** Tanggal berlaku dokumen hukum (YYYY-MM-DD). */
export const LEGAL_EFFECTIVE_DATE = '2026-09-29';

export const APP_NAME = 'Tanukonomy';
