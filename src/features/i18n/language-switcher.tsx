import { LanguagesIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { appConfig, type AppLanguage } from '@/config/app'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation('common')
  const currentLanguage = i18n.resolvedLanguage as AppLanguage

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label={t('actions.language')}
          size="icon"
          variant="outline"
        >
          <LanguagesIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          {appConfig.languages.map((language) => (
            <DropdownMenuCheckboxItem
              checked={currentLanguage === language}
              key={language}
              onSelect={() => void i18n.changeLanguage(language)}
            >
              {t(`language.${language}`)}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
