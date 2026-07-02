import * as React from "react";
import { ArrowRight } from "lucide-react";

import { GBCard } from "./gb-card";
import { GBHeading } from "./gb-heading";
import { GBText } from "./gb-text";

interface GBFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function GBFeatureCard({
  icon,
  title,
  description,
}: GBFeatureCardProps) {
  return (
    <GBCard className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
        {icon}
      </div>

      <GBHeading level={4}>{title}</GBHeading>

      <GBText variant="muted" className="mt-3">
        {description}
      </GBText>

      <div className="mt-6 flex items-center gap-2 text-yellow-400 opacity-0 transition group-hover:opacity-100">
        Learn More
        <ArrowRight size={16} />
      </div>
    </GBCard>
  );
}