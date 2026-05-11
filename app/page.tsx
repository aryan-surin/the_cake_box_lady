import { Hero } from "@/components/hero"
import OccasionsSection from "@/components/OccasionsSection"
import SignatureShowcase from "@/components/SignatureShowcase"
import FounderStory from "@/components/FounderStory"
import GallerySection from "@/components/GallerySection"
import Testimonials from "@/components/Testimonials"
import CTASection from "@/components/CTASection"

export default function Home() {
  return (
    <main className="w-full bg-[#F7F2EC] text-[#5B4032] overflow-x-hidden">
      <Hero />
      <OccasionsSection />
      <SignatureShowcase />
      <FounderStory />
      <GallerySection />
      <Testimonials />
      <CTASection />
    </main>
  )
}