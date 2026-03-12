import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald/10 rounded-full blur-[150px]" />
      
      <div className="container-main relative text-center">
        <h2 className="heading-lg mb-6">
          Ready to Transform Your <span className="text-emerald">Ride</span>?
        </h2>
        <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
          Get a free, no-obligation quote in minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-lg">
            Get Your Free Quote
          </Link>
          <a href="tel:2407565906" className="btn-glass text-lg">
            (240) 756-5906
          </a>
        </div>
      </div>
    </section>
  )
}
