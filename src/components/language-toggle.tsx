import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'

const languages = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' }
}

export function LanguageToggle() {
  const { t, i18n } = useTranslation()
  const [announcement, setAnnouncement] = useState('')

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng)
    setAnnouncement(t('language.changed', { language: lng }))
  }

  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='bg-white' size="icon" aria-label="Choose language">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(languages).map((lng) => (
          <DropdownMenuItem
            key={lng}
            onClick={() => {
              i18n.changeLanguage(lng)
              handleChange(lng)
            }}
            className={i18n.language === lng ? 'bg-accent' : ''}
          >
            {languages[lng as keyof typeof languages].nativeName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
    <div role="status" aria-live="polite" className="sr-only">
        {announcement}
      </div>
    </>
  )
}