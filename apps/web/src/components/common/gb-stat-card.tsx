import { GBCard } from "./gb-card";
import { GBHeading } from "./gb-heading";
import { GBText } from "./gb-text";

interface GBStatCardProps {
  value: string;
  label: string;
}

export function GBStatCard({
  value,
  label,
}: GBStatCardProps) {
  return (
    <GBCard className="space-y-2 text-center">
      <GBHeading level={3}>{value}</GBHeading>

      <GBText variant="muted">
        {label}
      </GBText>
    </GBCard>
  );
}