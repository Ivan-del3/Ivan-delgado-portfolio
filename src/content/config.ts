import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    order: z.number(),
    sections: z.array(
      z.object({
        title: z.string(),
        img: z.string().optional(),
        text: z.string().optional(),
      })
    ).optional(),
    repository: z.string().optional(),
    link: z.string().optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    repository: z.string().optional(),
    link: z.string().optional(),
    sections: z.array(
      z.object({
        title: z.string(),
        img: z.string().optional(),
        text: z.string(),
      })
    ).optional(),
  }),
});

export const collections = { projects, blog };