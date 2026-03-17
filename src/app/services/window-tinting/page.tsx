import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Window Tinting Services | Emerald Window Tinting Rockville MD',
  description: 'Premium ceramic and carbon window tinting in Rockville, MD. PureMax Supreme Carbon & KOOLMAX Supreme Ceramic films. 99% UV protection, heat rejection, crystal clarity.',
}

const features = [
  { icon: '🛡️', title: '99% UV Protection', desc: 'Shield yourself and your interior from harmful rays' },
  { icon: '❄️', title: 'Superior Heat Rejection', desc: 'Keep your cabin cool and comfortable' },
  { icon: '👁️', title: 'Crystal Clarity', desc: 'Excellent visibility without compromising style' },
  { icon: '📶', title: 'Signal Friendly', desc: 'No interference with GPS, radio, or cell signals' },
  { icon: '🎨', title: 'Fade Resistant', desc: 'Color stays rich and sleek for years' },
  { icon: '✨', title: 'Custom Shades', desc: '5% to 70% VLT options available' },
]

export default function WindowTinting() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative min-h-[400px] flex items-center">
        {/* Background Image */}
        <Image
          src="/gallery/vette1.jpg"
          alt="Corvette with professional window tinting"
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
            Window <span className="text-emerald">Tinting</span>
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Professional installation of premium ceramic and carbon window films.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="heading-md text-center mb-12">
            Why Choose Our <span className="text-emerald">Films</span>
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

      {/* Film Packages */}
      <section className="section-padding bg-black-card">
        <div className="container-main">
          <h2 className="heading-md text-center mb-12">
            Our <span className="text-emerald">Packages</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PureMax Carbon */}
            <div className="glass-card-hover p-8">
              <h3 className="heading-md mb-4 text-emerald">PureMax Supreme Carbon</h3>
              <p className="text-muted mb-6">
                Afforable option mainly for privacy with minimal heat rejection. 
                If youre not looking to keep your car long, but want some tint.
              </p>
              <ul className="space-y-3 text-sm text-muted mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-emerald">✓</span>
                  Superior heat rejection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald">✓</span>
                  Fade-resistant color stability
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald">✓</span>
                  99% UV protection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald">✓</span>
                  Non-metal, signal-friendly
                </li>
              </ul>
              <Link href="/contact" className="btn-primary inline-block">
                Request a Quote
              </Link>
            </div>

            {/* C2 Nano Ceramic */}
            <div className="glass-card-hover p-8">
              <h3 className="heading-md mb-4 text-emerald">C2 Nano - Ceramic</h3>
              <p className="text-muted mb-6">
                Better optical clarity, and mainly for customers who want longevity and main focus is heat rejection, privacy is a plus. 
                It is a great investment for your car long term as well!
              </p>
              <ul className="space-y-3 text-sm text-muted mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-emerald">✓</span>
                  90% infrared heat rejection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald">✓</span>
                  99% UV ray protection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald">✓</span>
                  10+ year longevity
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald">✓</span>
                  Crystal-clear optical clarity
                </li>
              </ul>
              <Link href="/contact" className="btn-primary inline-block">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Available Shades */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="heading-md text-center mb-8">
            Available <span className="text-emerald">Shades</span>
          </h2>
          <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
            From maximum privacy to crystal clear UV protection, we carry a wide variety of VLT (Visible Light Transmission) percentages to match your style.
          </p>
          <div 
            className="rounded-lg p-6 md:p-12 flex flex-nowrap justify-center items-end gap-1 md:gap-3 mb-12 shadow-2xl overflow-x-auto"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            {[
              { percent: '5%' },
              { percent: '15%' },
              { percent: '20%' },
              { percent: '30%' },
              { percent: '35%' },
              { percent: '50%' },
              { percent: '70%' },
            ].map((shade) => (
              <div 
                key={shade.percent}
                className="flex flex-col items-center transition-all duration-300 hover:scale-125 cursor-pointer"
              >
                <div 
                  className="w-12 h-24 md:w-14 md:h-28 rounded-sm border border-emerald/40 mb-2 transition-all duration-300 transform -skew-x-12 hover:shadow-lg hover:border-emerald/80"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    className="absolute inset-0 bg-black" 
                    style={{ opacity: 1 - (parseInt(shade.percent) / 100) }}
                  />
                </div>
                <h4 className="font-bold text-base md:text-lg text-emerald text-center">{shade.percent}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maryland Law */}
      <section className="section-padding bg-black-card">
        <div className="container-main max-w-3xl">
          <h2 className="heading-md text-center mb-8">
            Maryland Tint <span className="text-emerald">Laws</span>
          </h2>
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-emerald mb-4">Cars</h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li>• Windshield: 35% VLT on top 5"</li>
                  <li>• Front sides: 35%+ VLT</li>
                  <li>• Back sides: 35%+ VLT</li>
                  <li>• Rear: 35%+ VLT</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald mb-4">SUVs & Vans</h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li>• Windshield: 35% VLT on top 5"</li>
                  <li>• Front sides: 35%+ VLT</li>
                  <li>• Back sides: Any darkness</li>
                  <li>• Rear: Any darkness</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted mt-6 text-center">
              VLT = Visible Light Transmission. We'll help you choose a legal shade that fits your style.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
