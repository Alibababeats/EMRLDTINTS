import Link from 'next/link'

function AnimatedText({ text, delayOffset, className }: { text: string, delayOffset: number, className?: string }) {
  const words = text.split(' ')
  let charCount = 0

  return (
    <span className={className}>
      {words.map((word, wIndex) => (
        <span key={wIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, cIndex) => {
            const delay = delayOffset + charCount * 0.04
            charCount++
            return (
              <span
                key={cIndex}
                className="inline-block animate-pop-in"
                style={{ animationDelay: `${delay}s` }}
              >
                {char}
              </span>
            )
          })}
          {wIndex < words.length - 1 && (
            <span
              key={`space-${wIndex}`}
              className="inline-block animate-pop-in"
              style={{ animationDelay: `${delayOffset + (charCount++) * 0.04}s`, whiteSpace: 'pre' }}
            >
              {' '}
            </span>
          )}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      {/* Skeleton loader underneath the video */}
      <div className="absolute inset-0 w-full h-full bg-white/5 animate-pulse md:animate-none z-0" />

      {/* Single video source keeps hero visual while reducing bandwidth and decode cost */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover md:object-contain z-[1]"
      >
        <source src="/video/typertinting.mp4" type="video/mp4" />
        <source src="/video/typertinting.mov" type="video/quicktime" />
      </video>

      {/* Decorative glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald/10 rounded-full blur-[120px] z-10" />

      {/* Content */}
      <div className="container-main relative z-20 text-center pt-20">
        <h1 className="heading-xl mb-6" style={{ color: '#FFFFFF' }}>
          <AnimatedText text="Precision Tinting." delayOffset={0.1} />
          <br />
          <AnimatedText className="text-emerald" text="Elevated Style." delayOffset={0.8} />
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '1.4s', color: '#FFFFFF' }}>
          Premium window tinting in Maryland.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '1.6s' }}>
          <Link href="/contact" className="btn-primary text-lg">
            Get a Free Quote
          </Link>
          <a href="tel:2407565906" className="btn-glass text-lg" style={{ color: '#FFFFFF' }}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
