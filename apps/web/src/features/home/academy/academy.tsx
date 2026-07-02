import {
  BookOpen,
  Brain,
  CandlestickChart,
  ShieldCheck,
} from "lucide-react";

import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { AcademyCard } from "./components/academy-card";

const courses = [
  {
    icon: <BookOpen size={28} />,
    title: "Trading Basics",
    description: "Start from zero and understand financial markets.",
    duration: "6 Hours",
    level: "Beginner",
  },
  {
    icon: <CandlestickChart size={28} />,
    title: "Technical Analysis",
    description: "Master chart patterns and price action.",
    duration: "8 Hours",
    level: "Intermediate",
  },
  {
    icon: <Brain size={28} />,
    title: "Trading Psychology",
    description: "Control emotions and build trading discipline.",
    duration: "4 Hours",
    level: "All Levels",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Risk Management",
    description: "Protect capital with proper risk management.",
    duration: "5 Hours",
    level: "Advanced",
  },
];

export function AcademySection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <GBHeading level={2}>
            Trading Academy
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 text-base sm:text-lg"
          >
            Learn from structured courses designed for every trader.
          </GBText>

        </div>

        <StaggerContainer
          className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {courses.map((course) => (
            <StaggerItem key={course.title}>
              <AcademyCard {...course} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </GBContainer>
    </GBSection>
  );
}