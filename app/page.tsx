import { HeroSection } from '@/components/hero'
import { FeaturesSection } from '@/components/features'
import { SpecialtiesSection } from '@/components/specialties'
import { InfrastructureSection } from '@/components/infrastructure'
import { TestimonialsSection } from '@/components/testimonials'

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SpecialtiesSection />
      <InfrastructureSection />
      <TestimonialsSection />
    </>
  )
}
