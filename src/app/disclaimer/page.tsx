import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer | Emerald Window Tinting',
  description: 'Website disclaimer for Emerald Window Tinting.',
}

const paragraphs = [
  'The information contained on this website is for general information purposes only. The information is provided by Emerald Window Tinting, and while we endeavor to keep information up to date and correct, we make no representations or warranties of any kind, express or implied, about completeness, accuracy, reliability, suitability, or availability with respect to the website or information, products, services, or related graphics for any purpose.',
  'Any reliance you place on such information is therefore strictly at your own risk.',
  'In no event will we be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage arising from loss of data or profits arising out of, or in connection with, the use of this website.',
  'Through this website, you may be able to link to other websites that are not under the control of Emerald Window Tinting. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply recommendation or endorsement of the views expressed within them.',
  'Every effort is made to keep the website up and running smoothly. However, Emerald Window Tinting takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.',
]

export default function DisclaimerPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-main max-w-4xl">
        <p className="text-sm text-muted mb-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          {'  /  '}
          Disclaimer
        </p>

        <h1 className="heading-lg mb-6">
          Website <span className="text-emerald">Disclaimer</span>
        </h1>

        <div className="space-y-4">
          {paragraphs.map((text) => (
            <div key={text} className="glass-card p-5">
              <p className="text-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
