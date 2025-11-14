import en from './locales/en.json'

// Combine all translation keys from different languages to generate a comprehensive type
export type TranslationKeys = typeof en

// Define a type for translation namespaces to use it in components
export type TranslationNamespace = keyof TranslationKeys