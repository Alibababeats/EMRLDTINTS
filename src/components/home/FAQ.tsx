'use client'

import { useState, useRef, useEffect } from 'react'

const faqs = [
  {
    question: 'What is the legal tint limit in Maryland?',
    answer:
      'Maryland law requires at least 35% VLT (Visible Light Transmission) on front side windows and the windshield strip. Rear side windows and the rear window have no restriction for non-passenger vehicles. We ensure every installation is fully compliant with state law.',
  },
  {
    question: 'How long does the film take to cure?',
    answer:
      'It takes approximately 3–5 days to fully cure. In extreme cases it may take up to 30 days to fully heal. During this time, avoid rolling your windows down. You may notice slight haze or small water bubbles — these are completely normal and will disappear as the film dries.',
  },
  {
    question: 'Can I use my defrosters after tinting?',
    answer:
      'Yes, but wait at least 3–5 days after installation before using your rear defroster. This allows the adhesive to fully bond to the glass and prevents any lifting or damage to the film.',
  },
  {
    question: 'How should I clean my tinted windows?',
    answer:
      'Use a soft microfiber cloth and an ammonia-free cleaner. Avoid paper towels, harsh chemicals, or abrasive products — these can scratch or degrade the film over time. A simple spray of water and a clean cloth works great.',
  },
  {
    question: 'What warranty do you provide?',
    answer:
      'We stand behind every installation. Our films come backed by the manufacturer\'s warranty covering defects such as bubbling, peeling, and discoloration. Reach out to us directly and we\'ll make it right.',
  },
  {
    question: 'How long does a typical installation take?',
    answer:
      'Most full-vehicle installs take between 2–4 hours depending on the vehicle size and number of windows. We work efficiently without cutting corners to ensure a clean, long-lasting result.',
  },
  {
    question: 'What is the difference between carbon and ceramic tint?',
    answer:
      'Carbon tint (UVIRON) offers excellent heat rejection and a matte, premium look without interfering with signals. Ceramic tint (Geoshield) provides the highest heat rejection, superior UV protection, and maximum clarity — ideal for those who want the best performance available.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-base md:text-lg">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-emerald/50 flex items-center justify-center transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg className="w-3 h-3 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-6 text-white/70 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
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
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding bg-black-card">
      <div ref={ref} className="container-main animate-on-scroll">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Maryland Tint Law <span className="text-emerald">&amp; FAQs</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Everything you need to know before and after your tint installation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
