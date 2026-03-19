import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

const josefin = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin', weight: ['300', '400', '600', '700'] })

export const metadata: Metadata = {
  title: 'Premium Auto Window Tinting in the DMV | Located in Germantown, MD',
  description: 'Professional ceramic and carbon window tinting in Germantown, Maryland and the DMV area. Precision installation, premium films, exceptional results. Get your free quote today.',
  keywords: 'window tinting germantown md, window tinting dmv, ceramic window tint maryland, car window tinting near me',
  openGraph: {
    title: 'Premium Auto Window Tinting in the DMV | Located in Germantown, MD',
    description: 'Professional ceramic and carbon window tinting in Germantown, Maryland and the DMV area. Precision installation, premium films, exceptional results.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={josefin.variable}>
      <head />
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
