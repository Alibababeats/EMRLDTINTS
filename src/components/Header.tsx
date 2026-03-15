'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false
    return pathname.startsWith(path)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-x-0 border-t-0">
      <div className="container-main">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="relative h-24 w-44 sm:h-28 sm:w-52 md:h-[110px] md:w-[210px] lg:h-[120px] lg:w-[230px]">
              <Image
                src="/emrldlogomasked.png"
                alt="Emerald Window Tinting"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-hatton text-sm sm:text-lg md:text-2xl font-bold leading-tight mt-1">
              Emerald <span className="text-emerald">Window Tinting</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={`transition-colors ${isActive('/') ? 'text-emerald font-semibold' : 'text-white/80 hover:text-emerald'}`}>
              Home
            </Link>
            <Link href="/services/window-tinting" className={`transition-colors ${isActive('/services/window-tinting') ? 'text-emerald font-semibold' : 'text-white/80 hover:text-emerald'}`}>
              Window Tinting
            </Link>
            <Link href="/services/tint-removal" className={`transition-colors ${isActive('/services/tint-removal') ? 'text-emerald font-semibold' : 'text-white/80 hover:text-emerald'}`}>
              Tint Removal
            </Link>
            <Link href="/gallery" className={`transition-colors ${isActive('/gallery') ? 'text-emerald font-semibold' : 'text-white/80 hover:text-emerald'}`}>
              Gallery
            </Link>
            <Link href="/about" className={`transition-colors ${isActive('/about') ? 'text-emerald font-semibold' : 'text-white/80 hover:text-emerald'}`}>
              About
            </Link>
            <Link href="/contact" className="btn-primary text-sm">
              Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">            <Link href="/" onClick={() => setIsOpen(false)} className={`transition-colors py-2 ${isActive('/') ? 'text-emerald font-semibold' : 'text-white/80 hover:text-emerald'}`}>
              Home
            </Link>            <Link href="/services/window-tinting" onClick={() => setIsOpen(false)} className={`transition-colors py-2 ${isActive('/services/window-tinting') ? 'text-emerald font-semibold' : 'text-white/80 hover:text-emerald'}`}>
              Window Tinting
            </Link>
            <Link href="/services/tint-removal" onClick={() => setIsOpen(false)} className={`transition-colors py-2 ${isActive('/services/tint-removal') ? 'text-emerald font-semibold' : 'text-white/80 hover:text-emerald'}`}>
              Tint Removal
            </Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className={`transition-colors py-2 ${isActive('/gallery') ? 'text-emerald font-semibold' : 'text-white/80 hover:text-emerald'}`}>
              Gallery
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className={`transition-colors py-2 ${isActive('/about') ? 'text-emerald font-semibold' : 'text-white/80 hover:text-emerald'}`}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary text-center mt-2">
              Free Quote
            </Link>
            <a href="tel:2407565906" onClick={() => setIsOpen(false)} className="btn-glass text-center">
              📞 (240) 756-5906
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
