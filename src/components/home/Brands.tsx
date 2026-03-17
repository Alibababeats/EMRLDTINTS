'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const brands = [
  { name: 'UVIRON', type: 'Supreme carbon film', logo: '/brands/uviron-logo.png' },
  { name: 'Geoshield', type: 'NANO ceramic film', logo: '/brands/geoshield-logo.png' },
]

export default function Brands() {
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
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding bg-black-card">
      <div ref={ref} className="container-main text-center animate-on-scroll">
        <h2 className="heading-lg mb-4">
          Featured <span className="text-emerald">Brands</span>
        </h2>
        <p className="text-muted mb-12 max-w-xl mx-auto">
          Premium window films trusted by professionals across the DMV.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 max-w-3xl mx-auto">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className="glass-card px-8 py-8 flex flex-col items-center gap-4 flex-1 opacity-80 hover:opacity-100 transition-opacity"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 flex items-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 640px) 112px, 96px"
                />
              </div>
              <span className="text-xs font-medium text-emerald uppercase tracking-wider">{brand.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
