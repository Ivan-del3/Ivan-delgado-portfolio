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

export const collections = { projects };