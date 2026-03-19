import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Emerald Window Tinting Germantown MD',
  description: 'Get a free quote for professional window tinting in Germantown, MD. Call, text, or email us. Serving the entire DMV area.',
}

export default function Contact() {
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
            Get In <span className="text-emerald">Touch</span>
          </h1>
          <p className="text-muted text-xl max-w-2xl">
            Ready for a quote? Reach out — we typically respond within a few hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass-card p-8">
              <h2 className="heading-md mb-6">Request a Quote</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="font-semibold text-xl mb-6 text-emerald">Contact Info</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:2407565906" className="flex items-center gap-4 text-muted hover:text-white transition-colors">
                      <span className="text-2xl">📞</span>
                      <div>
                        <p className="font-medium text-white">Call or Text</p>
                        <p>(240) 756-5906</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:emeraldwindowtinting@gmail.com" className="flex items-center gap-4 text-muted hover:text-white transition-colors">
                      <span className="text-2xl">✉️</span>
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p>emeraldwindowtinting@gmail.com</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center gap-4 text-muted">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p>Germantown, MD 20876</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 text-muted">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <p className="font-medium text-white">Hours</p>
                      <p>Drop-off available by appointment - Typically 9am-6pm</p>
                    </div>
                  </li>
                </ul>
              </div>



              {/* Social */}
              <div className="glass-card p-8">
                <h3 className="font-semibold text-xl mb-4 text-emerald">Follow Us</h3>
                <a
                  href="https://www.instagram.com/emeraldwindowtinting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @emeraldwindowtinting
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
