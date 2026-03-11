import { defineCollection, z } from "astro:content";

const rituales = defineCollection({
  schema: z.object({
    titulo: z.string(),
    img: z.string(),
    orden: z.number(),
    secciones: z.array(
      z.object({
        titulo: z.string(),
        img: z.string().optional(),
        texto: z.string().optional(),
      })
    ).optional(),
  }),
});

export const collections = { rituales };