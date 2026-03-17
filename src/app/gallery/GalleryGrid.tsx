'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface GalleryItem {
  src: string
  alt: string
  wide: boolean
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', '-translate-x-12', 'translate-x-12')
            entry.target.classList.add('opacity-100', 'translate-x-0')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      const children = ref.current.querySelectorAll('.animate-slide-in')
      children.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
      {items.map((item, i) => (
        <div
          key={`${item.src}-${i}`}
          className={`animate-slide-in opacity-0 ${
            i % 2 === 0 ? '-translate-x-12' : 'translate-x-12'
          } relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-700 ease-out`}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={i < 4}
              quality={65}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-emerald/20 transition-colors duration-300" />
          </div>
        </div>
      ))}
    </div>
  )
}
