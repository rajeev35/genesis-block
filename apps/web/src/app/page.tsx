import { Navbar } from "@/components/layout/navbar/navbar";
import { HeroSection } from "@/features/home/hero/hero";
import { FeaturesSection } from "@/features/home/features/features";
import { PricingSection } from "@/features/home/pricing/pricing";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
    </>
  );
}