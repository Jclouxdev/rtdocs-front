// This schema defines the expected structure of translation JSON files using Zod for validation

import z from "zod";

export const translationSchema = z.object({
  homepage: z.object({
    welcomeMessage: z.string(),
    description: z.string()
  }),
  mainNav: z.object({
    login: z.string(),
    signUp: z.string(),
  }),
  login: z.object({
    title: z.string(),
    email: z.string(),
    emailInputsErrors: z.object({
      required: z.string(),
      invalid: z.string(),
      tooLong: z.string()
    }),
    password: z.string(),
    passwordInputsErrors: z.object({
      required: z.string(),
      tooLong: z.string()
    }),
    submitButton: z.string(),
    successfulLoginMessage: z.string(),
    unauthorizedMessage: z.string(),
    footerNote: z.string().optional(),
    footerNoteLink: z.string().optional()
  }),
  o2auth: z.object({
    github: z.string(),
    google: z.string()
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