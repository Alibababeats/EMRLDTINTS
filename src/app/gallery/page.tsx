import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GalleryGrid from './GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery | Emerald Window Tinting Rockville MD',
  description: 'View our portfolio of professional window tinting work in the DMV area. Ceramic and carbon tint on luxury vehicles, SUVs, trucks, and more.',
}

// Gallery images - add more as they become available
const galleryItems = [
  { src: '/gallery/amg.jpg', alt: 'Mercedes AMG with premium tint', wide: false },
  { src: '/gallery/bmwx7.jpg', alt: 'BMW X7 with premium ceramic window tint', wide: false },
  { src: '/gallery/vette1.jpg', alt: 'Corvette with ceramic window tint', wide: false },
  { src: '/gallery/brz4.jpg', alt: 'Subaru BRZ with premium window tint', wide: false },
  { src: '/gallery/bmw2seiries.jpg', alt: 'BMW 2 Series professional window tinting', wide: false },
  { src: '/gallery/bmwx7_2.jpg', alt: 'BMW X7 luxury tint finish', wide: false },
  { src: '/gallery/bmwx7_3.jpg', alt: 'BMW X7 ceramic tint quality', wide: false },
  { src: '/gallery/bmwx7_4.jpg', alt: 'BMW X7 professional installation', wide: false },
  { src: '/gallery/musk1.jpg', alt: 'Professional window tint installation', wide: false },
  { src: '/gallery/musk2.jpg', alt: 'Tesla window tinting service', wide: false },
  { src: '/gallery/musk3.jpg', alt: 'Luxury vehicle tinting detail', wide: false },
  { src: '/gallery/rado.jpg', alt: 'Professional auto tinting work', wide: false },
  { src: '/gallery/rado2.jpg', alt: 'Window tint installation showcase', wide: false },
  { src: '/gallery/rado3.jpg', alt: 'Window tint installation finish', wide: false },
  { src: '/gallery/s4.jpg', alt: 'Audi S4 ceramic tint', wide: false },
  { src: '/gallery/rolla1.jpg', alt: 'Toyota Corolla tint', wide: false },
  { src: '/gallery/rolla2.jpg', alt: 'Toyota Corolla tint back view', wide: false },
  { src: '/gallery/rolla3.jpg', alt: 'Toyota Corolla tint side view', wide: false },
  { src: '/gallery/merc1.jpg', alt: 'Mercedes side view tint', wide: false },
  { src: '/gallery/merc2.jpg', alt: 'Mercedes back view tint', wide: false },
  { src: '/gallery/merc3.jpg', alt: 'Mercedes tint detail', wide: false },
  { src: '/gallery/merc4.jpg', alt: 'Mercedes front tint', wide: false },
  { src: '/gallery/300zx1.jpg', alt: 'Nissan 300ZX tint', wide: false },
  { src: '/gallery/300zx2.jpg', alt: 'Nissan 300ZX tint side', wide: false },
  { src: '/gallery/5seires1.jpg', alt: 'BMW 5 Series tint', wide: false },
  { src: '/gallery/5seires2.jpg', alt: 'BMW 5 Series tint detail', wide: false },
  { src: '/gallery/5seires3.jpg', alt: 'BMW 5 Series tint side', wide: false },
  { src: '/gallery/brz1.jpg', alt: 'Subaru BRZ tint', wide: false },
  { src: '/gallery/brz2.jpg', alt: 'Subaru BRZ tint side', wide: false },
  { src: '/gallery/brz3.jpg', alt: 'Subaru BRZ tint detail', wide: false },
]

export default function Gallery() {
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
            Our <span className="text-emerald">Work</span>
          </h1>
          <p className="text-muted text-xl max-w-2xl">
            Precision tinting on vehicles across the DMV.
          </p>
        </div>
      </section>

      {/* Video Hero */}
      <section className="pb-20">
        <div className="container-main">
          <div className="relative h-[55vh] min-h-[320px] max-h-[680px] rounded-2xl overflow-hidden shadow-2xl bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/gallery/bmwx7.jpg"
              className="absolute inset-0 w-full h-full object-cover md:object-contain z-[1]"
            >
              <source src="/video/emrldvideo.mp4" type="video/mp4" />
              <source src="/video/emrldvideo.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70 z-10" />
            <div className="absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-black/75 to-transparent z-10 md:block" />
            <div className="absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-black/75 to-transparent z-10 md:block" />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding overflow-hidden">
        <div className="container-main">
          <GalleryGrid items={galleryItems} />

          {/* More coming soon notice */}
          <div className="glass-card p-8 text-center mt-12">
            <p className="text-muted">
              More photos coming soon. Follow us for updates.
            </p>
            <a
              href="https://www.instagram.com/emeraldwindowtinting/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass inline-flex items-center gap-2 mt-6"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @emeraldwindowtinting
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black-card">
        <div className="container-main text-center">
          <h2 className="heading-md mb-6">
            Like What You <span className="text-emerald">See</span>?
          </h2>
          <p className="text-muted mb-8">
            Let's tint yours.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
