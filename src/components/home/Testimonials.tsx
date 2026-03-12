'use client'

import { useEffect, useRef } from 'react'

const reviews = [
  {
    name: 'Harsimar Singh',
    text: 'Did a great job on my car, 20% ceramic all around. Didn\'t waste my time and was professional, highly recommend.',
    rating: 5,
  },
  {
    name: 'Ingrid Portillo',
    text: 'My daughter and I had the windows tinted. Umar did a wonderful job, was super helpful deciding on percentage and quick to respond.',
    rating: 5,
  },
  {
    name: 'James Lanier',
    text: 'Outstanding experience tinting my Jeep. Clean, precise, professional workmanship — no bubbles, factory-quality finish. Excellent attention to detail.',
    rating: 5,
  },
  {
    name: 'Gregory Simmons',
    text: 'Great job very friendly and very well done. Will definitely recommend.',
    rating: 5,
  },
  {
    name: 'Ryan SN',
    text: 'Best Tints in the DMV! Great price, and super cool owner. Very professional and respectful!',
    rating: 5,
  },
  {
    name: 'A. O.',
    text: 'Umar did a fantastic job on my 2026 Honda Civic. Liked his work so much I brought my wife\'s car too. Great prices, super nice, very knowledgeable.',
    rating: 5,
  },
  {
    name: 'Emanuel Rivera',
    text: 'First time getting window tinting. Umar was helpful and informative through the entire process. Great job on my 2024 Corolla.',
    rating: 5,
  },
  {
    name: 'Caitlyn Nkansah',
    text: 'Super easy to book, gets back quick, nice guy. 10/10',
    rating: 5,
  },
  {
    name: 'Brad Apling',
    text: 'Mr. Chaudry is a true professional in knowledge and customer relations. Careful attention to detail, listened to my questions, explained every step. Trustworthy.',
    rating: 5,
  },
  {
    name: 'Selena Robinson',
    text: 'First time getting car tinted and had a great experience. Umar was super communicative, professional, answered all my questions. Perfect results!',
    rating: 5,
  },
  {
    name: 'Maaz Anwar',
    text: 'Excellent experience. Professional, efficient, great attention to detail. Car looks fantastic, keeps interior much cooler. Top-notch quality, fair pricing.',
    rating: 5,
  },
  {
    name: 'Dean',
    text: 'Drove all the way from Virginia to come get my windows tinted. He\'s the best in the DMV, no one does it like him.',
    rating: 5,
  },
  {
    name: 'Ernest Kwong',
    text: 'Got 15% ceramic tints on my 2025 Model 3. Amazing results, excellent communication. Smooth process, no issues. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Carol Hooper',
    text: 'Very pleased with the work on my daughter\'s Prius. Umar was very professional and his work is amazing. Definitely come here.',
    rating: 5,
  },
]

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return

    // Touch handlers for mobile
    const handleTouchStart = () => {
      content.style.animationPlayState = 'paused'
    }

    const handleTouchEnd = () => {
      content.style.animationPlayState = 'running'
    }

    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchend', handleTouchEnd)
    container.addEventListener('touchcancel', handleTouchEnd)

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('touchcancel', handleTouchEnd)
    }
  }, [])

  return (
    <section className="section-padding bg-black-card overflow-hidden">
      <div className="container-main mb-12">
        <h2 className="heading-lg text-center">
          What Clients <span className="text-emerald">Say</span>
        </h2>
      </div>

      {/* Infinite scroll container */}
      <div
        ref={containerRef}
        className="scroll-container"
      >
        <div
          ref={contentRef}
          className="scroll-content"
        >
          {/* Double the reviews for seamless loop */}
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="glass-card p-6 min-w-[320px] max-w-[320px] flex-shrink-0"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-emerald">★</span>
                ))}
              </div>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-semibold text-sm">{review.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-main mt-12 text-center">
        <a
          href="https://maps.app.goo.gl/SHsKYUyHSuyfwiUt7"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass inline-flex items-center gap-2"
        >
          <span>Review Us on Google</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  )
}
