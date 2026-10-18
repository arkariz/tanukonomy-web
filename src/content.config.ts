import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Artikel blog: satu berkas Markdown per bahasa di src/content/blog/{id,en}/.
 * Aturan penulisan ada di .claude/skills/blog-writer/. Artikel `draft: true`
 * tidak dibangun.
 */
const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    // id = "<bahasa>/<slug berkas>", supaya slug yang sama di dua bahasa tidak bentrok.
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70),
      description: z.string().max(160),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      lang: z.enum(['id', 'en']),
      /** Slug padanan di bahasa lain; kosong bila tidak ada. */
      translationOf: z.string().default(''),
      keyword: z.string(),
      intent: z.enum(['informasional', 'perbandingan', 'panduan-fitur']),
      publishedDate: z.coerce.date(),
      updatedDate: z.coerce.date(),
      author: z.string().default('Tim Tanukonomy'),
      image: image().optional(),
      imageAlt: z.string().default(''),
      draft: z.boolean().default(true),
    }),
});

export const collections = { blog };
