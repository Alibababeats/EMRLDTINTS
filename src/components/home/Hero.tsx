import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient background layer for side blending */}
      <video
        src="/video/typertinting.mov"
        autoPlay
        muted
        loop
        playsInline
        poster="/gallery/bmwx7.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-45"
      />

      {/* Main hero video: preserve original aspect ratio on desktop */}
      <video
        src="/video/typertinting.mov"
        autoPlay
        muted
        loop
        playsInline
        poster="/gallery/bmwx7.jpg"
        className="absolute inset-0 w-full h-full object-cover md:object-contain z-[1]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black z-10" />
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/75 to-transparent z-10 hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/75 to-transparent z-10 hidden md:block" />

      {/* Decorative glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald/10 rounded-full blur-[120px] z-10" />

      {/* Content */}
      <div className="container-main relative z-20 text-center pt-20">
        <h1 className="heading-xl mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Precision Tinting.
          <br />
          <span className="text-emerald">Elevated Style.</span>
        </h1>

        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Premium window tinting in the DMV area.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <Link href="/contact" className="btn-primary text-lg">
            Get a Free Quote
          </Link>
          <a href="tel:2407565906" className="btn-glass text-lg">
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
