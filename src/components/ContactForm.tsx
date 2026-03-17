'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const payload = Object.fromEntries(formData.entries())

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setStatus('success')
      form.reset()
    } catch {
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="year" className="block text-sm font-medium mb-2">
            Year *
          </label>
          <input
            type="text"
            id="year"
            name="year"
            required
            inputMode="numeric"
            pattern="[0-9]{4}"
            minLength={4}
            maxLength={4}
            className="w-full px-4 py-3 bg-emerald/10 border border-emerald/30 text-white placeholder-white/40 rounded-lg focus:border-emerald focus:outline-none transition-colors"
            placeholder="2024"
          />
        </div>

        <div>
          <label htmlFor="make" className="block text-sm font-medium mb-2">
            Make *
          </label>
          <input
            type="text"
            id="make"
            name="make"
            required
            className="w-full px-4 py-3 bg-emerald/10 border border-emerald/30 text-white placeholder-white/40 rounded-lg focus:border-emerald focus:outline-none transition-colors"
            placeholder="BMW"
          />
        </div>

        <div>
          <label htmlFor="model" className="block text-sm font-medium mb-2">
            Model *
          </label>
          <input
            type="text"
            id="model"
            name="model"
            required
            className="w-full px-4 py-3 bg-emerald/10 border border-emerald/30 text-white placeholder-white/40 rounded-lg focus:border-emerald focus:outline-none transition-colors"
            placeholder="M4"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-emerald/10 border border-emerald/30 text-white placeholder-white/40 rounded-lg focus:border-emerald focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <div className="rounded-lg border border-emerald/30 bg-emerald/10 px-4 py-3 text-sm text-white">
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
