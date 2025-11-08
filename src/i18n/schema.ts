// This schema defines the expected structure of translation JSON files using Zod for validation

import z from "zod";

export const translationSchema = z.object({
  homepage: z.object({
    welcomeMessage: z.string(),
    description: z.string()
  }),
  login: z.object({
    title: z.string(),
    email: z.string(),
    password: z.string(),
    submit: z.string()
  }),
  theme: z.object({
    light: z.string(),
    dark: z.string(),
    system: z.string()
  }),
  language: z.object({
    changed: z.string()
  }),
  notFound: z.object({
    title: z.string(),
    message: z.string(),
    homeLink: z.string()
  })
})

export type TranslationSchema = z.infer<typeof translationSchema>