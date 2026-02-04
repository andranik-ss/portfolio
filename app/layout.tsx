import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from '@/components/footer/Footer'
import { NavBar } from '@/components/nav/NavBar'
import { Heading } from '@/components/nav/Heading'
import '@/styles/globals.css'
import { Providers } from './providers'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '400', '700', '900'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Andranik Simonian | Senior Full Stack Engineer',
  description: 'Portfolio of Andranik Simonian',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Providers>
          <section className='layout'>
            <NavBar />
            <article>
              <Heading />
              <main role='main'>{children}</main>
              <Footer />
            </article>
          </section>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
