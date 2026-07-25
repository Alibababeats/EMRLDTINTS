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
  alternates: {
    canonical: 'https://emeraldwindowtinting.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={josefin.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Emerald Window Tinting',
              description: 'Professional automotive window tinting serving Potomac, Gaithersburg, Rockville, and Frederick, MD. Premium ceramic and carbon films with expert installation.',
              url: 'https://emeraldwindowtinting.com',
              telephone: '+1-240-756-5906',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Germantown',
                addressRegion: 'MD',
                addressCountry: 'US',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Potomac',
                },
                {
                  '@type': 'City',
                  name: 'Gaithersburg',
                },
                {
                  '@type': 'City',
                  name: 'Rockville',
                },
                {
                  '@type': 'City',
                  name: 'Frederick',
                },
              ],
              priceRange: '$$',
              serviceType: 'Automotive Window Tinting',
            }),
          }}
        />
      </head>
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
