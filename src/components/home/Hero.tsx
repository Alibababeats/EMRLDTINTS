'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const loaderRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const loader = loaderRef.current

    // Create GSAP timeline for text animations
    const tl = gsap.timeline()

    // Animate heading characters one by one
    if (headingRef.current) {
      const lines = headingRef.current.querySelectorAll('.heading-line')
      lines.forEach((line, lineIndex) => {
        const text = line.textContent || ''
        const words = text.split(' ')
        line.textContent = ''
        
        const chars: HTMLSpanElement[] = []
        
        words.forEach((word, wordIndex) => {
          // Wrap each word in a span with whitespace-nowrap to prevent mid-word breaking
          const wordSpan = document.createElement('span')
          wordSpan.style.display = 'inline-block'
          wordSpan.style.whiteSpace = 'nowrap'
          
          word.split('').forEach((char) => {
            const span = document.createElement('span')
            span.textContent = char
            span.style.display = 'inline-block'
            span.style.opacity = '0'
            wordSpan.appendChild(span)
            chars.push(span)
          })
          
          line.appendChild(wordSpan)
          
          // Add space after word if it's not the last word
          if (wordIndex < words.length - 1) {
            const spaceSpan = document.createElement('span')
            spaceSpan.textContent = '\u00A0'
            spaceSpan.style.display = 'inline-block'
            line.appendChild(spaceSpan)
          }
        })
        
        // Stagger animation for each character
        const startTime = lineIndex === 0 ? 0.05 : `>+0.05`
        tl.fromTo(
          chars,
          { opacity: 0, y: 10 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.2, 
            ease: 'power2.out',
            stagger: 0.03
          },
          startTime
        )
      })
    }

    // Animate paragraph
    if (paragraphRef.current) {
      tl.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
        `>+0.05`
      )
    }

    // Animate CTA buttons
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
        `>+0.05`
      )
    }

    // Handler for video canplay event
    const onCanPlay = () => {
      if (loader) {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.5,
          pointerEvents: 'none',
        })
      }
    }

    // Handler for user interaction to play video
    const onUserInteraction = () => {
      if (video) {
        video.play().catch((e) => console.log('Play failed:', e))
        document.removeEventListener('click', onUserInteraction)
        document.removeEventListener('touchstart', onUserInteraction)
      }
    }

    if (video) {
      // Ensure video plays on mount
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay prevented, will retry:', error)
          // Retry play on user interaction
          document.addEventListener('click', onUserInteraction)
          document.addEventListener('touchstart', onUserInteraction)
        })
      }

      // Fade out loader when video loads
      video.addEventListener('canplay', onCanPlay)
    }

    return () => {
      // Kill GSAP timeline to prevent memory leaks
      if (tl) {
        tl.kill()
      }
      
      // Remove event listeners
      document.removeEventListener('click', onUserInteraction)
      document.removeEventListener('touchstart', onUserInteraction)
      
      // Remove video canplay listener
      if (video) {
        video.removeEventListener('canplay', onCanPlay)
      }
    }
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      {/* Static background overlay */}
      <div
        ref={loaderRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundColor: '#0A0A0A',
        }}
      />

      {/* Single video source keeps hero visual while reducing bandwidth and decode cost */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover md:object-contain z-[1]"
      >
        <source src="/video/typertinting.mp4" type="video/mp4" />
        <source src="/video/typertinting.mov" type="video/quicktime" />
      </video>

      {/* Decorative glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald/10 rounded-full blur-[120px] z-10" />

      {/* Content */}
      <div className="container-main relative z-20 text-center pt-20">
        <h1 className="heading-xl mb-6" ref={headingRef} style={{ color: '#FFFFFF' }}>
          <div className="heading-line">Precision Tinting.</div>
          <div className="heading-line text-emerald">Elevated Style.</div>
        </h1>

        <p ref={paragraphRef} className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: '#FFFFFF' }}>
          Premium window tinting in Maryland.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-lg">
            Get a Free Quote
          </Link>
          <a href="tel:2407565906" className="btn-glass text-lg" style={{ color: '#FFFFFF' }}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
