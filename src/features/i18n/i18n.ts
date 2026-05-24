import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { appConfig } from '@/config/app'
import { resources } from '@/features/i18n/resources'

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS: 'dashboard',
    detection: {
      caches: ['localStorage'],
      lookupLocalStorage: 'app-language',
      order: ['localStorage', 'navigator', 'htmlTag'],
    },
    fallbackLng: appConfig.defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
    ns: ['common', 'dashboard'],
    resources,
    supportedLngs: appConfig.languages,
  })

export { i18n }
