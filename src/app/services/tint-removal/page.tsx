import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Window Tint Removal in Potomac & Rockville, MD | Emerald',
  description: 'Safe, scratch-free window tint removal for cars in Potomac, Rockville, Gaithersburg & Frederick, MD. Old tint stripped and ready for a fresh install.',
  alternates: {
    canonical: 'https://emeraldwindowtinting.com/services/tint-removal',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const features = [
  { icon: '🔒', title: 'Safe & Secure', desc: 'Professional technique prevents glass damage' },
  { icon: '✨', title: 'Clean Results', desc: 'No residue or adhesive left behind' },
  { icon: '⚡', title: 'Fast Service', desc: 'Quick turnaround without compromising quality' },
  { icon: '🛡️', title: 'Expert Care', desc: 'Trained professionals handle delicate surfaces' },
  { icon: '💰', title: 'Affordable', desc: 'Competitive pricing for professional removal' },
  { icon: '📋', title: 'Full Inspection', desc: 'We check glass condition before starting' },
]

export default function TintRemoval() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative min-h-[400px] flex items-center">
        {/* Background Image */}
        <Image
          src="/gallery/vette1.jpg"
          alt="Professional tint removal service"
          fill
          priority
          className="object-cover absolute inset-0 z-0 opacity-40 object-[center_30%]"
          quality={90}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-[1]" />
        
        <div className="container-main relative z-10 w-full">
          <Link href="/" className="text-white text-sm hover:text-white transition-colors mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="heading-xl mb-6">
            Tint <span className="text-emerald">Removal</span>
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Professional removal of old or damaged window tint with precision and care.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="heading-md text-center mb-12">
            Why Choose Our <span className="text-emerald">Removal Service</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-black-card">
        <div className="container-main">
          <h2 className="heading-md text-center mb-12">
            Our <span className="text-emerald">Process</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-emerald mb-4">1</div>
              <h3 className="font-semibold mb-2">Assessment</h3>
              <p className="text-muted text-sm">
                We inspect your windows and tint condition to determine the best removal approach.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-emerald mb-4">2</div>
              <h3 className="font-semibold mb-2">Preparation</h3>
              <p className="text-muted text-sm">
                We protect surrounding areas and prepare the window for safe removal.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-emerald mb-4">3</div>
              <h3 className="font-semibold mb-2">Removal</h3>
              <p className="text-muted text-sm">
                Using specialized techniques, we carefully remove the film without damaging glass.
              </p>
            </div>

            {/* Step 4 */}
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-emerald mb-4">4</div>
              <h3 className="font-semibold mb-2">Finishing</h3>
              <p className="text-muted text-sm">
                We clean all residue and inspect the windows to ensure crystal clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Remove */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="heading-md text-center mb-12">
            Why <span className="text-emerald">Remove Tint</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-8">
              <h3 className="heading-sm mb-4 text-emerald">Old or Faded Film</h3>
              <p className="text-muted">
                Window tint can fade, bubble, or peel over time. Professional removal prepares your windows for new tint or allows you to enjoy clear glass again.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="heading-sm mb-4 text-emerald">Window Damage</h3>
              <p className="text-muted">
                If your tint is damaged but your glass is fine, removal is a better option than full window replacement.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="heading-sm mb-4 text-emerald">Changing Style</h3>
              <p className="text-muted">
                Ready for a new look? We remove old tint cleanly so you can upgrade to a fresh style or clarity.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="heading-sm mb-4 text-emerald">Adhesive Buildup</h3>
              <p className="text-muted">
                Stubborn adhesive residue requires expertise to remove without leaving traces or damaging the glass.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
