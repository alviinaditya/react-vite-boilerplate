export const appConfig = {
  defaultLanguage: 'en',
  languages: ['en', 'id'],
  name: 'React Vite Boilerplate',
} as const

export type AppLanguage = (typeof appConfig.languages)[number]
