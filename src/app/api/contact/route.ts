import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function sanitizeHeaderValue(value: string): string {
  return value
    .replace(/[\r\n]+/g, ' ')
    .replace(/[^\x20-\x7E]/g, '')
    .trim()
}

const SERVICE_LABELS: Record<string, string> = {
  'window-tinting': 'Window Tinting',
  'tint-removal': 'Tint Removal',
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
    }

    const body = (await request.json()) as Record<string, unknown>

    const name = asString(body.name)
    const email = asString(body.email)
    const phone = asString(body.phone)
    const service = asString(body.service)
    const year = asString(body.year)
    const make = asString(body.make)
    const model = asString(body.model)
    const message = asString(body.message)

    if (!name || !email || !phone || !service || !year || !make || !model || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    if (!/^[0-9]{4}$/.test(year)) {
      return NextResponse.json({ error: 'Year must be a 4-digit value.' }, { status: 400 })
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const mappedServiceLabel = SERVICE_LABELS[service]
    const sanitizedServiceInput = sanitizeHeaderValue(service)
    const serviceLabel = mappedServiceLabel || sanitizedServiceInput || 'General Inquiry'
    const subjectServiceLabel = serviceLabel.slice(0, 80)

    const toEmail = process.env.OWNER_EMAIL || 'emeraldwindowtinting@gmail.com'
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeService = escapeHtml(serviceLabel)
    const safeYear = escapeHtml(year)
    const safeMake = escapeHtml(make)
    const safeModel = escapeHtml(model)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>')

    const response = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Quote Request - ${subjectServiceLabel}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Service:</strong> ${safeService}</p>
        <p><strong>Year:</strong> ${safeYear}</p>
        <p><strong>Make:</strong> ${safeMake}</p>
        <p><strong>Model:</strong> ${safeModel}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
    })

    const responseRecord = response as unknown as Record<string, unknown>
    const responseStatus =
      typeof responseRecord.status === 'number'
        ? responseRecord.status
        : typeof responseRecord.statusCode === 'number'
          ? responseRecord.statusCode
          : 200

    if (response.error || responseStatus >= 400) {
      console.error('Resend email send failed', response)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: responseStatus >= 400 ? responseStatus : 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact API unexpected error', error)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
