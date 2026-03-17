import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

const josefin = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin', weight: ['300', '400', '600', '700'] })

export const metadata: Metadata = {
  title: 'Emerald Window Tinting | Premium Auto Tint in Rockville, MD',
  description: 'Professional ceramic and carbon window tinting in the DMV area. Precision installation, premium films, exceptional results. Get your free quote today.',
  keywords: 'window tinting rockville md, ceramic window tint maryland, car window tinting dmv, auto tint germantown md',
  openGraph: {
    title: 'Emerald Window Tinting | Premium Auto Tint in Rockville, MD',
    description: 'Professional ceramic and carbon window tinting in the DMV area. Precision installation, premium films, exceptional results.',
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
