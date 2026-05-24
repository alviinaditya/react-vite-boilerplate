import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useIsMounted } from '@/hooks/use-is-mounted'

describe('useIsMounted', () => {
  it('returns true after the component is mounted', () => {
    const { result } = renderHook(() => useIsMounted())

    expect(result.current).toBe(true)
  })
})
