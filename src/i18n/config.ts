import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { translationSchema } from './schema'

import enTranslations from './locales/en.json'
import frTranslations from './locales/fr.json'

import en from './locales/en.json'
import fr from './locales/fr.json'

const enParsed = translationSchema.safeParse(en)
const frParsed = translationSchema.safeParse(fr)

if (!enParsed.success) {
  console.error('Invalid EN translations:', enParsed.error)
  throw new Error('Invalid EN translations')
}

if (!frParsed.success) {
  console.error('Invalid FR translations:', frParsed.error)
  throw new Error('Invalid FR translations')
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: typeof en
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    // Persist language preference in localStorage
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n