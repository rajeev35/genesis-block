import { Navbar } from "@/components/layout/navbar/navbar";
import { HeroSection } from "@/features/home/hero/hero";
import { FeaturesSection } from "@/features/home/features/features";
import { PricingSection } from "@/features/home/pricing/pricing";
import { StatsSection } from "@/features/home/stats/stats";
import { AcademySection } from "@/features/home/academy/academy";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AcademySection />
      <PricingSection />
    </>
  );
}