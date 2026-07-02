import { Navbar } from "@/components/layout/navbar/navbar";
import { HeroSection } from "@/features/home/hero/hero";
import { FeaturesSection } from "@/features/home/features/features";
import { StatsSection } from "@/features/home/stats/stats";
import { AcademySection } from "@/features/home/academy/academy";
import { SignalsSection } from "@/features/home/signals";
import { GoldAnalysisSection } from "@/features/home/gold-analysis";
import { JournalSection } from "@/features/home/journal";
import { CommunitySection } from "@/features/home/community";
import { PricingSection } from "@/features/home/pricing/pricing";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AcademySection />
      <SignalsSection />
      <GoldAnalysisSection />
      <JournalSection />
      <CommunitySection />
      <PricingSection />
    </>
  );
}