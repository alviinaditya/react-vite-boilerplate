import { useSyncExternalStore } from 'react'

const subscribe = () => {
  return () => undefined
}

const getClientSnapshot = () => true
const getServerSnapshot = () => false

export function useIsMounted() {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)
}
