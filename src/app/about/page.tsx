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
      <section className="pt-32 pb-20 relative min-h-[400px] flex items-center">
        <Image
          src="/gallery/bmwx7.jpg"
          alt="BMW X7 Window Tinting"
          fill
          className="object-cover absolute inset-0 z-0 opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-[1]" />
        <div className="container-main relative z-10 w-full">
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
                DMV's Most Trusted <span className="text-emerald">Tint Shop</span>
              </h2>
              <div className="space-y-4 text-muted">
                <p>
                  What started as a idea, grew into a passionable business for Umar who had something to prove to the world and himself. 
                  Formerly known as Halal Tints which started in 2023, eventually grew into Emerald Window Tinting 
                  locally Based in Germantown, MD through his home Garage. We serve clients across the&nbsp;DMV who demand precision 
                  and premium results.
                </p>
                <p>
                  We use only the best ceramic and carbon films because your vehicle deserves nothing less.
                </p>
                <p>
                  No shortcuts. No compromises. Just clean cuts, and professional tinting that transforms 
                  your ride.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/umar.jpg"
                alt="Umar - Founder of Emerald Window Tinting"
                fill
                className="object-cover"
                style={{ objectPosition: '30% center' }}
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
