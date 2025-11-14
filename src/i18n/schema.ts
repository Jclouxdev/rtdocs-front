// This schema defines the expected structure of translation JSON files using Zod for validation

import z from "zod";

export const translationSchema = z.object({
  homepage: z.object({
    welcomeMessage: z.string(),
    description: z.string(),
    getStartedButton: z.string(),
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
  signup: z.object({
    title: z.string(),
    emailLabel: z.string(),
    usernameLabel: z.string(),
    passwordLabel: z.string(),
    passwordRules: z.object({
      minLength: z.string(),
      uppercase: z.string(),
      symbol: z.string()
    }),
    confirmPasswordLabel: z.string(),
    emailInputsErrors: z.object({
      required: z.string(),
      invalid: z.string(),
      tooLong: z.string()
    }),
    usernameInputsErrors: z.object({
      required: z.string(),
      tooShort: z.string(),
      tooLong: z.string()
    }),
    passwordInputsErrors: z.object({
      required: z.string(),
      tooShort: z.string(),
      tooLong: z.string()
    }),
    confirmPasswordInputsErrors: z.object({
      required: z.string(),
      tooShort: z.string(),
      tooLong: z.string(),
      noMatch: z.string()
    }),
    submitButton: z.string(),
    successfulSignupMessage: z.string(),
    unableToCreateAccountMessage: z.string(),
    footerNote: z.string().optional(),
    footerNoteLink: z.string().optional()
  }),
  editor: z.object({
    title: z.string(),
    actions: z.object({
      erase: z.string(),
    }),
  }),
  o2auth: z.object({
    github: z.string(),
    google: z.string()
  }),
  beta: z.object({
    warningMessage: z.string(),
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