import { useCallback, useSyncExternalStore } from 'react'

export const useMediaQuery = (query: string) => {
  const getMatches = useCallback(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }, [query])

  const subscribe = useCallback((callback: () => void) => {
    const mediaQueryList = window.matchMedia(query)

    mediaQueryList.addEventListener('change', callback)
    return () => mediaQueryList.removeEventListener('change', callback)
  }, [query])

  return useSyncExternalStore(subscribe, getMatches, getMatches)
}
