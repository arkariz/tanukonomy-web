/**
 * Satu-satunya tempat untuk nilai yang bergantung pada keputusan pemilik.
 * Ganti di sini, bukan di halaman.
 */
export const SITE_URL = 'https://arkariz.github.io';

/**
 * Awalan jalur situs. GitHub Pages proyek disajikan di /<nama-repo>/;
 * kosongkan ('/') begitu situs pindah ke domain sendiri.
 */
export const BASE_PATH = '/tanukonomy-web/';

/** Jalur absolut di dalam situs, memperhitungkan BASE_PATH. `p` diawali '/'. */
export const withBase = (p: string) => BASE_PATH.replace(/\/$/, '') + p;

/** Alamat kontak publik (kebijakan privasi mewajibkannya). */
export const CONTACT_EMAIL = 'halo@tanukonomy.app';

/**
 * Tautan closed testing. Biarkan kosong sampai tersedia: tombolnya tampil
 * nonaktif dengan keterangan "segera dibuka", bukan tautan mati.
 */
export const GOOGLE_GROUP_URL = '';
export const PLAY_TESTING_URL = '';

/** Tanggal berlaku dokumen hukum (YYYY-MM-DD). */
export const LEGAL_EFFECTIVE_DATE = '2026-09-28';

export const APP_NAME = 'Tanukonomy';
