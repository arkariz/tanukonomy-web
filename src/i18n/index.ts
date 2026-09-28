import { id } from './id';
import { en } from './en';

export type Lang = 'id' | 'en';
export type PageKey = 'home' | 'beta' | 'privacy' | 'terms';

const dicts = { id, en };

export const t = (lang: Lang) => dicts[lang];

/** Slug tiap halaman per bahasa. Bahasa Indonesia di akar, Inggris di /en/. */
const routes: Record<PageKey, Record<Lang, string>> = {
  home: { id: '/', en: '/en/' },
  beta: { id: '/beta/', en: '/en/beta/' },
  privacy: { id: '/privasi/', en: '/en/privacy/' },
  terms: { id: '/syarat/', en: '/en/terms/' },
};

export const path = (page: PageKey, lang: Lang) => routes[page][lang];

export const otherLang = (lang: Lang): Lang => (lang === 'id' ? 'en' : 'id');

export const htmlLang = (lang: Lang) => (lang === 'id' ? 'id-ID' : 'en');
export const ogLocale = (lang: Lang) => (lang === 'id' ? 'id_ID' : 'en_US');
