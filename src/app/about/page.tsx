import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'About Us | Emerald Window Tinting Rockville MD',
  description: 'Learn about Emerald Window Tinting, the DMV\'s trusted window tinting specialists. Quality films, precision installation, customer-first service in Rockville, MD.',
}

const values = [
  {
    icon: '🎯',
    title: 'Precision',
    desc: 'Every edge, every corner — installed with meticulous attention to detail.',
  },
  {
    icon: '💎',
    title: 'Quality Films',
    desc: 'Only premium ceramic and carbon films that deliver real performance.',
  },
  {
    icon: '🤝',
    title: 'Customer First',
    desc: 'Your satisfaction drives everything we do. Period.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald/5 to-transparent" />
        <div className="container-main relative">
          <Link href="/" className="text-muted text-sm hover:text-white transition-colors mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="heading-xl mb-6">
            About <span className="text-emerald">Us</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">
                DMV's Trusted <span className="text-emerald">Tint Shop</span>
              </h2>
              <div className="space-y-4 text-muted">
                <p>
                  Emerald Window Tinting is built on one principle: do exceptional work, every time. 
                  Based in Germantown, MD, we serve clients across the DMV who demand precision 
                  and premium results.
                </p>
                <p>
                  We use only the best ceramic and carbon films — PureMax Supreme Carbon 
                  and KOOLMAX Supreme Ceramic — because your vehicle deserves nothing less.
                </p>
                <p>
                  No shortcuts. No compromises. Just clean, professional tinting that transforms 
                  your ride.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/emrldlogomasked.png"
                alt="Emerald Window Tinting"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-black-card">
        <div className="container-main">
          <h2 className="heading-md text-center mb-12">
            What Drives <span className="text-emerald">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-8 text-center">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
