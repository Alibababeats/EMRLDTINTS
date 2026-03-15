'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    // Keep scrolling native on lower-power devices for snappier navigation.
    if (prefersReducedMotion || isMobile) {
      return
    }

    const lenis = new Lenis({
      wheelMultiplier: 0.8, // Slow down desktop scroll
      touchMultiplier: 1.5, // Speed up mobile scroll
      syncTouch: true,
      lerp: 0.1,
    })

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}