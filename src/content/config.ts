import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  schema: z.object({
    id: z.string(),
    bullets: z.array(z.string()),
    flavors: z.array(z.string()),
    quants: z.array(z.string()),
    title: z.string(),
    who: z.string(),
    when: z.string(),
    how: z.string(),
    ingridients: z.string(),
    ozonLink: z.string(),
    description: z.string(),
    heroImage: z.string(),
    table: z.array(z.object({
      factor: z.string(),
      meaning: z.string(),
    })),
  }),
});

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.date().optional(),
  }),
});

export const collections = { products, articles };
