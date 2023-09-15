import { defineCollection, z } from "astro:content"; 

export const collectiom = {
    blog: defineCollection({
        schema: z.object({
            title: z.string(),
            slug: z.string(),
            date: z.string(),
            content: z.string().max(200),
        }),
        })
};