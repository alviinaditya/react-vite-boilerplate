import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useMediaQuery } from '@/hooks/use-media-query'

const DESKTOP_QUERY = '(min-width: 1024px)'
const createMatchMedia = (matchedQuery: string) => {
  return (query: string): MediaQueryList => ({
    addEventListener: vi.fn(),
    addListener: vi.fn(),
    dispatchEvent: vi.fn(),
    matches: query === matchedQuery,
    media: query,
    onchange: null,
    removeEventListener: vi.fn(),
    removeListener: vi.fn(),
  })
}

describe('useMediaQuery', () => {
  it('returns the current matchMedia state', () => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: createMatchMedia(DESKTOP_QUERY),
    })

    const { result } = renderHook(() => useMediaQuery(DESKTOP_QUERY))

    expect(result.current).toBe(true)
  })
})
