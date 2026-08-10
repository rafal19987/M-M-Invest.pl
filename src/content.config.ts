import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      locale: z.enum(['pl', 'en']),
      slug: z.string(),
      translationId: z.string(),
      title: z.string(),
      description: z.string(),
      publishedDate: z.coerce.date(),
      category: z.string(),
      coverImage: image().optional(),
      coverImageAlt: z.string().optional(),
      author: z.string(),
    }),
});

export const collections = { blog };
