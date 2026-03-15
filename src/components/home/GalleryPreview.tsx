'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const galleryImages = [
  { src: '/gallery/bmwx7.jpg', alt: 'BMW X7 with premium ceramic window tint' },
  { src: '/gallery/vette1.jpg', alt: 'Corvette with ceramic window tint' },
  { src: '/gallery/rado.jpg', alt: 'Silverado with professional window tint' },
  { src: '/gallery/bmw2seiries.jpg', alt: 'BMW 2 Series professional window tint' },
  { src: '/gallery/musk1.jpg', alt: 'Professional window tint installation' },
  { src: '/gallery/amg.jpg', alt: 'Mercedes AMG with luxury tint' },
]

export default function GalleryPreview() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      const items = ref.current.querySelectorAll('.gallery-item')
      items.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding">
      <div className="container-main">
        <h2 className="heading-lg text-center mb-16">
          Our <span className="text-emerald">Work</span>
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image Cards only */}
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className="gallery-item relative aspect-square rounded-2xl overflow-hidden group animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={60}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-emerald/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery" className="btn-glass inline-flex items-center gap-2">
            See All Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
