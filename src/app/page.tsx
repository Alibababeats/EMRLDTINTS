import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Services from '@/components/home/Services'
import Brands from '@/components/home/Brands'
import GalleryPreview from '@/components/home/GalleryPreview'
import Testimonials from '@/components/home/Testimonials'
import FAQ from '@/components/home/FAQ'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Brands />
      <GalleryPreview />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  )
}
