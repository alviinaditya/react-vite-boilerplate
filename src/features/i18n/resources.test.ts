import { describe, expect, it } from 'vitest'

import { appConfig } from '@/config/app'
import { resources } from '@/features/i18n/resources'

describe('i18n resources', () => {
  it('contains translations for every supported language', () => {
    expect(Object.keys(resources).sort()).toEqual(
      [...appConfig.languages].sort(),
    )
  })

  it('contains common and dashboard namespaces for every language', () => {
    for (const language of appConfig.languages) {
      expect(Object.keys(resources[language]).sort()).toEqual([
        'common',
        'dashboard',
      ])
    }
  })
})
