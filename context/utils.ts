import { Theme } from './types'

const SAS_THEME = 'sas-theme'

function isValidTheme(theme: string): theme is Theme {
  return ['dark', 'light'].includes(theme)
}

export function getStoredTheme() {
  try {
    const theme = localStorage.getItem(SAS_THEME)
    if (!theme) {
      return null
    }
    return JSON.parse(theme)
  } catch (error) {
    return null
  }
}

export function setStoredTheme(theme: Theme) {
  localStorage.setItem(SAS_THEME, JSON.stringify(theme))
}

export function getPrefersTheme() {
  let theme: Theme = 'dark'
  if (typeof window !== 'undefined') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark'
    } else {
      theme = 'light'
    }
  }
  return theme
}
