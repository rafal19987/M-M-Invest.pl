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

export const OFFER_STATUSES = ['sale', 'planned', 'sold'] as const;
export type OfferStatus = (typeof OFFER_STATUSES)[number];

const offers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/offers' }),
  schema: ({ image }) =>
    z.object({
      locale: z.enum(['pl', 'en']),
      slug: z.string(),
      translationId: z.string(),
      title: z.string(),
      city: z.string(),
      address: z.string().optional(),
      status: z.enum(['sale', 'planned', 'sold']),
      apartmentsCount: z.number(),
      areaMin: z.number(),
      areaMax: z.number(),
      priceFrom: z.number().optional(),
      completionDate: z.string().optional(),
      description: z.string(),
      coverImage: image(),
      coverImageAlt: z.string().optional(),
      gallery: z.array(image()).optional(),
      order: z.number().default(0),
    }),
});

export const collections = { blog, offers };
