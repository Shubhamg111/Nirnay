import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    section: z.enum(['finance', 'tech', 'gadgets']),
    category: z.enum([
      // finance
      'NEPSE Basics',
      'Mutual Funds',
      'Personal Finance',
      'Real Estate',
      'Case Studies',
      // tech
      'Software',
      'AI Tools',
      'Programming',
      'Internet & Apps',
      // gadgets
      'Reviews',
      'Buying Guides',
      'Comparisons',
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
