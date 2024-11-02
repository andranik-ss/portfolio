'use client'

import { createContext, useCallback, useContext, useEffect, useInsertionEffect, useLayoutEffect, useState } from 'react'
import { Theme } from './types'
import { getPrefersTheme, getStoredTheme, setStoredTheme } from './utils'
import { useMediaQuery } from '@/hooks/useMediaQuery'

type ThemeContextValue = {
  theme: Theme | null
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: null,
  toggleTheme: () => {},
})

function getTheme() {
  let theme = getStoredTheme()
  if (!theme) {
    theme = getPrefersTheme()
  }

  return theme
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(getTheme())

  const isPrefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    setStoredTheme(nextTheme)
  }, [theme])

  useInsertionEffect(() => {
    document.body.classList.remove('dark', 'light')
    document.body.classList.add(theme)
  }, [theme])

  useEffect(() => {
    setTheme(isPrefersDark ? 'dark' : 'light')
  }, [isPrefersDark])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
