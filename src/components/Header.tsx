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
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setIsOpen(false)}>
            <div className="relative h-16 w-32 sm:h-20 sm:w-40 md:h-[100px] md:w-[190px] lg:h-[110px] lg:w-[210px]">
              <Image
                src="/emrldlogomasked.png"
                alt="Emerald Window Tinting"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:block font-hatton text-xs sm:text-base md:text-xl font-bold leading-tight">
              Emerald <span className="text-emerald">Window Tinting</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 flex-1 ml-8">
            <Link href="/" className={`transition-colors text-sm ${isActive('/') ? 'text-emerald font-semibold' : 'text-secondary hover:text-emerald'}`}>
              Home
            </Link>
            <Link href="/services/window-tinting" className={`transition-colors text-sm ${isActive('/services/window-tinting') ? 'text-emerald font-semibold' : 'text-secondary hover:text-emerald'}`}>
              Window Tinting
            </Link>
            <Link href="/services/tint-removal" className={`transition-colors text-sm ${isActive('/services/tint-removal') ? 'text-emerald font-semibold' : 'text-secondary hover:text-emerald'}`}>
              Removal
            </Link>
            <Link href="/gallery" className={`transition-colors text-sm ${isActive('/gallery') ? 'text-emerald font-semibold' : 'text-secondary hover:text-emerald'}`}>
              Gallery
            </Link>
            <Link href="/about" className={`transition-colors text-sm ${isActive('/about') ? 'text-emerald font-semibold' : 'text-secondary hover:text-emerald'}`}>
              About
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-xs px-4 py-2">
              Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: '#FFFFFF' }} />
              <span className={`block h-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: '#FFFFFF' }} />
              <span className={`block h-0.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: '#FFFFFF' }} />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px] pb-6' : 'max-h-0'}`}>
            <div className="flex flex-col gap-4 pt-4" style={{ borderTopColor: 'var(--border-color)', borderTopWidth: '1px' }}>
            <Link href="/" onClick={() => setIsOpen(false)} className={`transition-colors py-2 ${isActive('/') ? 'text-emerald font-semibold' : 'text-secondary hover:text-emerald'}`}>
              Home
            </Link>            <Link href="/services/window-tinting" onClick={() => setIsOpen(false)} className={`transition-colors py-2 ${isActive('/services/window-tinting') ? 'text-emerald font-semibold' : 'text-secondary hover:text-emerald'}`}>
              Window Tinting
            </Link>
            <Link href="/services/tint-removal" onClick={() => setIsOpen(false)} className={`transition-colors py-2 ${isActive('/services/tint-removal') ? 'text-emerald font-semibold' : 'text-secondary hover:text-emerald'}`}>
              Tint Removal
            </Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className={`transition-colors py-2 ${isActive('/gallery') ? 'text-emerald font-semibold' : 'text-secondary hover:text-emerald'}`}>
              Gallery
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className={`transition-colors py-2 ${isActive('/about') ? 'text-emerald font-semibold' : 'text-secondary hover:text-emerald'}`}>
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
