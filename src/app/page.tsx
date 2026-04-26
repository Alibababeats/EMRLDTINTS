import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Testimonials from '@/components/home/Testimonials'
import Brands from '@/components/home/Brands'
import GalleryPreview from '@/components/home/GalleryPreview'
import FAQ from '@/components/home/FAQ'
import CTASection from '@/components/home/CTASection'
import Services from '@/components/home/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Testimonials />
      <Brands />
      <Services />
      <GalleryPreview />
      <FAQ />
      <CTASection />
    </>
  )
}
