'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage on mount
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved === 'dark' : prefersDark
    setIsDark(dark)
    applyTheme(dark)
  }, [])

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.remove('light')
    } else {
      html.classList.add('light')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    // Force a repaint
    html.style.opacity = '0.99'
    setTimeout(() => {
      html.style.opacity = '1'
    }, 0)
  }

  const handleToggle = () => {
    const newDark = !isDark
    setIsDark(newDark)
    applyTheme(newDark)
  }

  if (!mounted) return null

  return (
    <button
      onClick={handleToggle}
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
      style={{
        backgroundColor: isDark ? 'rgb(75, 85, 99)' : 'rgb(209, 213, 219)',
      }}
      aria-label="Toggle theme"
    >
      <span
        className="inline-block h-5 w-5 transform rounded-full bg-white transition-transform"
        style={{
          transform: isDark ? 'translateX(0.25rem)' : 'translateX(1.5rem)',
        }}
      />
    </button>
  )
}
