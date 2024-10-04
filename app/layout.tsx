import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

const poppins = Poppins({ weight: ['100', '200', '400', '700', '900'], preload: false, subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andranik Simonian | Senior Frontend Engineer | App Router',
  description: 'Portfolio of Andranik Simonian',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
