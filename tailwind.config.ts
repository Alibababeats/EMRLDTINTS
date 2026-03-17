import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#50a56d',
          dark: '#2e7d4f',
          glow: '#5bc783',
        },
        black: {
          DEFAULT: '#0A0A0A',
          card: '#111111',
        },
      },
      fontFamily: {
        hatton: ['var(--font-josefin)', 'Futura', 'Century Gothic', 'Trebuchet MS', 'sans-serif'],
        body: ['var(--font-josefin)', 'Futura', 'Century Gothic', 'sans-serif'],
      },
      backdropBlur: {
        glass: '16px',
      },
      animation: {
        'scroll-left': 'scroll-left 12s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'pop-in': 'pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
