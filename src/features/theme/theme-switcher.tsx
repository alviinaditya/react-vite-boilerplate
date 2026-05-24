import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const themeOptions = [
  { icon: SunIcon, value: 'light' },
  { icon: MoonIcon, value: 'dark' },
  { icon: MonitorIcon, value: 'system' },
] as const

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  const { t } = useTranslation('common')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label={t('actions.theme')} size="icon" variant="outline">
          <SunIcon className="dark:hidden" />
          <MoonIcon className="hidden dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          {themeOptions.map(({ icon: Icon, value }) => (
            <DropdownMenuCheckboxItem
              checked={theme === value}
              key={value}
              onSelect={() => setTheme(value)}
            >
              <Icon />
              {t(`theme.${value}`)}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
