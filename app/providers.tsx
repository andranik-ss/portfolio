'use client'

import { ThemeProvider } from '@/context/Theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
