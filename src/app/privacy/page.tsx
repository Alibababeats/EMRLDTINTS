import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Emerald Window Tinting',
  description: 'Privacy policy for Emerald Window Tinting website visitors.',
}

const sections = [
  {
    title: 'Log Files',
    body: 'Like many websites, Emerald Window Tinting uses log files. Information in these logs may include IP addresses, browser type, ISP, date/time stamp, referring and exit pages, and click counts. This data is used to analyze trends, administer the site, track user movement, and gather demographic information. This data is not linked to personally identifiable information.',
  },
  {
    title: 'Cookies and Web Beacons',
    body: 'Emerald Window Tinting may use cookies to store visitor preferences, record user-specific page access, and customize web page content based on browser type or other information sent by the visitor.',
  },
  {
    title: 'Google DART Cookie',
    body: 'Google, as a third-party vendor, may use cookies to serve ads based on your visit to this and other sites. Users can opt out of DART cookie usage by visiting Google Privacy Policy: https://www.google.com/policies/privacy/.',
  },
  {
    title: 'Third-Party Advertising and Analytics',
    body: 'Third-party ad servers or ad networks may use technologies such as cookies, JavaScript, or web beacons in their advertisements and links that appear on this website. These technologies may be used to measure ad effectiveness and personalize content. Emerald Window Tinting does not have access to or control over cookies used by third-party advertisers.',
  },
  {
    title: 'Third-Party Privacy Policies',
    body: 'You should consult the respective privacy policies of third-party ad servers or service providers for more details on their practices and instructions about opting out. Emerald Window Tinting privacy policy does not apply to, and we cannot control, those third-party activities.',
  },
  {
    title: 'Disabling Cookies',
    body: 'If you wish to disable cookies, you may do so through your browser settings. More detailed information about cookie management can be found on your browser provider website.',
  },
]

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-main max-w-4xl">
        <p className="text-sm text-muted mb-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          {'  /  '}
          Privacy Policy
        </p>

        <h1 className="heading-lg mb-6">
          Privacy <span className="text-emerald">Policy</span>
        </h1>

        <p className="text-muted mb-8">
          At Emerald Window Tinting, the privacy of our visitors is important to us. This document outlines the types of
          personal information received and collected and how it is used.
        </p>

        <div className="space-y-5">
          {sections.map((section) => (
            <div key={section.title} className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-3 text-emerald">{section.title}</h2>
              <p className="text-muted leading-relaxed break-words">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
