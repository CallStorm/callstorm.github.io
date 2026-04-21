import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const profile = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/profile" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    location: z.string().optional(),
    email: z.string().email(),
    github: z.string().url(),
    social: z.array(
      z.object({
        name: z.string(),
        url: z.string().url()
      })
    ).default([])
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tech: z.array(z.string()).default([]),
    cover: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    publishedAt: z.coerce.date()
  })
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([])
  })
});

const videos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/videos" }),
  schema: z.object({
    title: z.string(),
    platform: z.enum(["Bilibili", "YouTube", "Other"]),
    videoUrl: z.string().url(),
    thumbnail: z.string().optional(),
    publishedAt: z.coerce.date(),
    summary: z.string()
  })
});

export const collections = {
  profile,
  projects,
  posts,
  videos
};
