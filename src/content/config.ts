import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    order: z.number(),
    icon: z.string(),
    promise: z.string(),
    summary: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    categories: z.array(z.string()),
    offers: z.array(z.object({ title: z.string(), text: z.string(), icon: z.string().optional() })),
    process: z.array(z.object({ title: z.string(), text: z.string() })),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    clientType: z.string(),
    location: z.string(),
    year: z.string(),
    duration: z.string().optional(),
    value: z.string().optional(),
    categories: z.array(z.string()),
    services: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    featured: z.boolean().default(false),
    // Placeholder projects are marked draft: true and never appear on the live site.
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { services, projects };
