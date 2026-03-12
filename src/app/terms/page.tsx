import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Emerald Window Tinting',
  description: 'Terms and conditions for using the Emerald Window Tinting website.',
}

const termsItems = [
  'The content on this website is for general information and use only. It is subject to change without notice.',
  'Neither Emerald Window Tinting nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of information and materials found on this website for any particular purpose.',
  'You acknowledge that information and materials on this site may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.',
  'Your use of any information or materials on this website is entirely at your own risk. It is your responsibility to ensure that any products, services, or information available through this website meet your specific requirements.',
  'This website contains material owned by or licensed to Emerald Window Tinting, including design, layout, look, appearance, and graphics. Reproduction is prohibited except as permitted by applicable copyright law.',
  'All trademarks reproduced on this website that are not the property of, or licensed to, Emerald Window Tinting are acknowledged where applicable.',
  'Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.',
  'From time to time, this website may include links to other websites. These links are provided for convenience and additional information. They do not signify endorsement, and we are not responsible for the content of linked websites.',
  'You may not create a link to this website from another website or document without prior written consent from Emerald Window Tinting.',
]

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-main max-w-4xl">
        <p className="text-sm text-muted mb-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          {'  /  '}
          Terms &amp; Conditions
        </p>

        <h1 className="heading-lg mb-6">
          Terms &amp; <span className="text-emerald">Conditions</span>
        </h1>

        <p className="text-muted mb-8">
          Welcome to Emerald Window Tinting. By browsing and using this website, you agree to comply with and be bound by
          the following terms and conditions of use, together with our privacy policy.
        </p>

        <div className="space-y-4">
          {termsItems.map((item) => (
            <div key={item} className="glass-card p-5">
              <p className="text-muted leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
