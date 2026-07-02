import { Check } from "lucide-react";

import { GBButton } from "@/components/common/gb-button";
import { GBBadge } from "@/components/common/gb-badge";
import { GBCard } from "@/components/common/gb-card";
import { GBHeading } from "@/components/common/gb-heading";
import { GBText } from "@/components/common/gb-text";

import type { PricingPlan } from "../types";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <GBCard
      className={`relative flex h-full flex-col transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40 ${
        plan.popular ? "border-yellow-500" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <GBBadge>⭐ Most Popular</GBBadge>
        </div>
      )}

      <GBHeading level={3}>{plan.name}</GBHeading>

      <p className="mt-6 text-5xl font-bold text-yellow-400">
        {plan.price}
        <span className="text-base text-zinc-400">/month</span>
      </p>

      <GBText
        variant="muted"
        className="mt-3"
      >
        {plan.description}
      </GBText>

      <div className="mt-8 space-y-4 flex-1">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <Check
              size={18}
              className="text-green-400"
            />

            <GBText>{feature}</GBText>
          </div>
        ))}
      </div>

      <GBButton className="mt-8 w-full">
        {plan.name === "Free"
          ? "Start Free"
          : plan.name === "Pro"
          ? "Get Pro"
          : "Go Elite"}
      </GBButton>
    </GBCard>
  );
}