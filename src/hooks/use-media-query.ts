import { useCallback, useSyncExternalStore } from 'react'

function getServerSnapshot() {
  return false
}

function getMediaQuerySnapshot(query: string) {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia(query).matches
}

export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mediaQueryList = window.matchMedia(query)

      mediaQueryList.addEventListener('change', onStoreChange)

      return () => {
        mediaQueryList.removeEventListener('change', onStoreChange)
      }
    },
    [query],
  )

  const getSnapshot = useCallback(() => getMediaQuerySnapshot(query), [query])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
