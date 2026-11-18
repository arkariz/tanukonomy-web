import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { BASE_PATH, SITE_URL } from './src/config.ts';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Halaman uji coba tertutup lama (/beta) kini halaman pasang; tautan lama tetap bekerja.
  redirects: {
    '/beta/': '/pasang/',
    '/en/beta/': '/en/get-the-app/',
  },
  integrations: [
    // hreflang dipasang di <head> tiap halaman (slug id/en berbeda, jadi
    // pemetaan otomatis sitemap per awalan tidak cocok).
    sitemap(),
  ],
});
