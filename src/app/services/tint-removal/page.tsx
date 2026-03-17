import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Tint Removal Services | Emerald Window Tinting Rockville MD',
  description: 'Professional window tint removal in Rockville, MD. Safe, residue-free removal of old, bubbling, or faded tint. Protect your windows with our expert service.',
}

const benefits = [
  { icon: '👨‍🔧', title: 'Expert Technicians', desc: 'Years of experience in safe tint removal' },
  { icon: '🔧', title: 'Proper Tools', desc: 'State-of-the-art equipment for residue-free results' },
  { icon: '🛡️', title: 'Glass Protection', desc: 'Zero damage to your windows guaranteed' },
  { icon: '⚡', title: 'Fast Service', desc: 'Efficient removal without compromising quality' },
]

const steps = [
  { num: '01', title: 'Assessment', desc: 'We inspect your current tint condition' },
  { num: '02', title: 'Safe Removal', desc: 'Careful peeling using proper techniques' },
  { num: '03', title: 'Residue Cleaning', desc: 'Thorough adhesive removal from glass' },
  { num: '04', title: 'Final Inspection', desc: 'Crystal-clear windows, ready for new tint' },
]

export default function TintRemoval() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative min-h-[400px] flex items-center">
        <Image
          src="/gallery/rado3.jpg"
          alt="Silverado with tint ready for removal service"
          fill
          priority
          className="object-cover absolute inset-0 z-0 opacity-40 object-[center_34%]"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-[1]" />
        <div className="container-main relative z-10 w-full">
          <Link href="/" className="text-white text-sm hover:text-white transition-colors mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="heading-xl mb-6">
            Tint <span className="text-emerald">Removal</span>
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Expert removal of old, bubbling, or faded window tint without damage.
          </p>
        </div>
      </section>

      {/* Why Remove */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="heading-md text-center mb-12">
            Why Choose <span className="text-emerald">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass-card p-6 text-center">
                <span className="text-3xl mb-4 block">{benefit.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-black-card">
        <div className="container-main max-w-4xl">
          <h2 className="heading-md text-center mb-12">
            Our <span className="text-emerald">Process</span>
          </h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.num} className="glass-card p-6 flex items-start gap-6">
                <span className="text-4xl font-hatton font-bold text-emerald">{step.num}</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready for New Tint */}
      <section className="section-padding bg-black-card">
        <div className="container-main text-center max-w-2xl">
          <h2 className="heading-md mb-6">
            Ready for <span className="text-emerald">Fresh Tint</span>?
          </h2>
          <p className="text-muted mb-8">
            After removal, your windows are prepped and ready. Ask about our window tinting packages 
            to complete the transformation.
          </p>
          <Link href="/services/window-tinting" className="btn-glass inline-flex items-center gap-2">
            View Tinting Options
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
