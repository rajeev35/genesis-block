import { Check } from "lucide-react";

import { GBButton } from "./gb-button";
import { GBCard } from "./gb-card";
import { GBHeading } from "./gb-heading";
import { GBText } from "./gb-text";

interface GBPricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export function GBPricingCard({
  title,
  price,
 features,
popular,
}: GBPricingCardProps) {
  return (
    <GBCard
      className={
        popular
          ? "border-yellow-500"
          : ""
      }
    >
      {popular && (
        <div className="mb-4 inline-flex rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black">
          Most Popular
        </div>
      )}

      <GBHeading level={4}>
        {title}
      </GBHeading>

      <div className="mt-3 text-5xl font-bold">
        {price}
      </div>

      <div className="mt-8 space-y-3">
        {features.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <Check
              size={18}
              className="text-green-400"
            />

            <GBText>{item}</GBText>
          </div>
        ))}
      </div>

      <GBButton
        className="mt-8 w-full"
      >
        Choose Plan
      </GBButton>
    </GBCard>
  );
}