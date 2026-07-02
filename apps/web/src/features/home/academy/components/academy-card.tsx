import { ArrowRight, Clock } from "lucide-react";

import { GBCard } from "@/components/common/gb-card";
import { GBHeading } from "@/components/common/gb-heading";
import { GBText } from "@/components/common/gb-text";

interface AcademyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
  level: string;
}

export function AcademyCard({
  icon,
  title,
  description,
  duration,
  level,
}: AcademyCardProps) {
  return (
    <GBCard className="group transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
        {icon}
      </div>

      <GBHeading level={4}>{title}</GBHeading>

      <GBText variant="muted" className="mt-3">
        {description}
      </GBText>

      <div className="mt-6 flex items-center justify-between text-sm text-zinc-400">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          {duration}
        </div>

        <span>{level}</span>
      </div>

      <div className="mt-6 flex items-center gap-2 text-yellow-400 opacity-0 transition group-hover:opacity-100">
        Continue Learning
        <ArrowRight size={16} />
      </div>
    </GBCard>
  );
}