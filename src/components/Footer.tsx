import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black-card border-t border-white/10" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-20 w-36 sm:h-24 sm:w-44 md:h-[96px] md:w-[180px]">
                <Image
                  src="/emrldlogomasked.png"
                  alt="Emerald Window Tinting"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-hatton text-2xl font-bold">
                Emerald <span className="text-emerald">Window Tinting</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Premium window tinting in the DMV area. Precision installation, exceptional results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald">Services</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/services/window-tinting" className="hover:text-white transition-colors">Window Tinting</Link></li>
              <li><Link href="/services/tint-removal" className="hover:text-white transition-colors">Tint Removal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald">Contact</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>📍 Germantown, MD 20876</li>
              <li>
                <a href="tel:2407565906" className="hover:text-white transition-colors">
                  📞 (240) 756-5906
                </a>
              </li>
              <li>
                <a href="mailto:emeraldwindowtinting@gmail.com" className="hover:text-white transition-colors">
                  ✉️ emeraldwindowtinting@gmail.com
                </a>
              </li>
              <li>🕐 Drop-off available by appointment - Typically 9am-6pm</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/emeraldwindowtinting/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center rounded-full hover:border-emerald/50 transition-all"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© 2026 Emerald Window Tinting. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
