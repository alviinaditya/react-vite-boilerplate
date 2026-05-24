import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useDebouncedValue } from '@/hooks/use-debounced-value'

const DEBOUNCE_DELAY_MS = 250
const PARTIAL_DELAY_MS = 200
const REMAINING_DELAY_MS = 50

describe('useDebouncedValue', () => {
  it('updates the returned value after the configured delay', () => {
    vi.useFakeTimers()

    const { result, rerender } = renderHook(
      ({ value }) => useDebouncedValue(value, DEBOUNCE_DELAY_MS),
      { initialProps: { value: 'initial' } },
    )

    expect(result.current).toBe('initial')

    rerender({ value: 'next' })

    act(() => {
      vi.advanceTimersByTime(PARTIAL_DELAY_MS)
    })

    expect(result.current).toBe('initial')

    act(() => {
      vi.advanceTimersByTime(REMAINING_DELAY_MS)
    })

    expect(result.current).toBe('next')

    vi.useRealTimers()
  })
})
