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
 * Halaman Tanukonomy di Google Play (rilis produksi 1.0.0, Nov 2026).
 * Parameter bahasa `hl` ditambahkan oleh playUrl().
 */
export const PLAY_STORE_URL: string = 'https://play.google.com/store/apps/details?id=com.arkarizdev.tanukonomy';
export const playUrl = (lang: 'id' | 'en') => `${PLAY_STORE_URL}&hl=${lang}`;

/** Tanggal berlaku dokumen hukum (YYYY-MM-DD). */
export const LEGAL_EFFECTIVE_DATE = '2026-11-09';

/** Tanggal berlaku Syarat dan Ketentuan (terakhir isinya diubah). */
export const TERMS_EFFECTIVE_DATE = '2026-11-06';

export const APP_NAME = 'Tanukonomy';
