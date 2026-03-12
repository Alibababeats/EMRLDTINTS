'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const formData = new FormData(form)
    
    // For now, we'll just simulate a submission
    // Replace with actual form handling (Formspree, Netlify Forms, etc.)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In production, you'd send to an endpoint:
      // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   body: formData,
      //   headers: { 'Accept': 'application/json' },
      // })
      
      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <span className="text-5xl mb-4 block">✅</span>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted">We'll get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-glass mt-6"
        >
          Send Another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-emerald/10 border border-emerald/30 text-white placeholder-white/40 rounded-lg focus:border-emerald focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-emerald/10 border border-emerald/30 text-white placeholder-white/40 rounded-lg focus:border-emerald focus:outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3 bg-emerald/10 border border-emerald/30 text-white placeholder-white/40 rounded-lg focus:border-emerald focus:outline-none transition-colors"
          placeholder="(240) 555-0000"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2">
          Service *
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-3 bg-emerald/10 border border-emerald/30 text-white rounded-lg focus:border-emerald focus:outline-none transition-colors appearance-none cursor-pointer"
        >
          <option value="" className="bg-black-card text-white">Select a service</option>
          <option value="window-tinting" className="bg-black-card text-white">Window Tinting</option>
          <option value="tint-removal" className="bg-black-card text-white">Tint Removal</option>
        </select>
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-medium mb-2">
          Vehicle Info *
        </label>
        <input
          type="text"
          id="vehicle"
          name="vehicle"
          required
          className="w-full px-4 py-3 bg-emerald/10 border border-emerald/30 text-white placeholder-white/40 rounded-lg focus:border-emerald focus:outline-none transition-colors"
          placeholder="Year, Make, Model (e.g., 2024 BMW M4)"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 bg-emerald/10 border border-emerald/30 text-white placeholder-white/40 rounded-lg focus:border-emerald focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <div className="rounded-lg border border-emerald/30 bg-emerald/10 px-4 py-3 text-sm text-white/80">
        A $25 non-refundable deposit is required to book an appointment. Quotes and consultations are always free.
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
    </form>
  )
}
