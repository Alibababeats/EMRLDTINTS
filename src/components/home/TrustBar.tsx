'use client'

import { useEffect, useRef } from 'react'

const trustItems = [
  { icon: '⭐', text: '200+ 5.0 Google Reviews' },
  { icon: '🏆', text: "DMV's Trusted Tint Shop" },
  { icon: '📅', text: 'Flexible Scheduling' },
]

export default function TrustBar() {
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
    <section className="py-12 border-y border-white/10">
      <div
        ref={ref}
        className="container-main flex flex-wrap justify-center gap-8 md:gap-16 animate-on-scroll"
      >
        {trustItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-muted"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-sm md:text-base font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
