# Internationalization (i18n) Guide

## How to add translated text to the site

To add new translated text to the application, follow these 3 steps:

### 1. Update the Zod Schema

The `src/i18n/schema.ts` file defines the structure of translation files and validates their format.

**Example:** Adding a new "footer" section

```typescript
export const translationSchema = z.object({
  // ... other existing sections
  footer: z.object({
    copyright: z.string(),
    links: z.object({
      privacy: z.string(),
      terms: z.string()
    })
  })
})
```

### 2. Update the JSON Files

Add translations to each language file following the defined schema.

**`src/i18n/locales/en.json`**
```json
{
  "footer": {
    "copyright": "© 2025 All rights reserved",
    "links": {
      "privacy": "Privacy Policy",
      "terms": "Terms of Service"
    }
  }
}
```

**`src/i18n/locales/fr.json`**
```json
{
  "footer": {
    "copyright": "© 2025 Tous droits réservés",
    "links": {
      "privacy": "Politique de confidentialité",
      "terms": "Conditions d'utilisation"
    }
  }
}
```

### 3. Use Translations in Components

Import `useTranslation` from `react-i18next` and use the `t()` function with the key path.

**Simple example:**
```tsx
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer>
      <p>{t('footer.copyright')}</p>
      <a href="/privacy">{t('footer.links.privacy')}</a>
      <a href="/terms">{t('footer.links.terms')}</a>
    </footer>
  )
}
```

**Example with nested structure:**
```tsx
import { useTranslation } from 'react-i18next'

export function LoginForm() {
  const { t } = useTranslation()

  return (
    <form>
      <h1>{t('login.title')}</h1>
      <input placeholder={t('login.email')} />
      <input type="password" placeholder={t('login.password')} />
      <button>{t('login.submit')}</button>
    </form>
  )
}
```

## Important Notes

- Keys use dot notation: `section.subsection.key`
- Always add translations to **all** language files (en, fr, etc.)
- The Zod schema ensures all languages have the same structure
- If a key is missing, i18next will display the key itself (e.g., "footer.copyright")
