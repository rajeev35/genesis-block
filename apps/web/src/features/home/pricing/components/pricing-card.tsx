import { Check } from "lucide-react";

import { GBBadge } from "@/components/common/gb-badge";
import { GBButton } from "@/components/common/gb-button";
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
      className={`
        relative
        flex
        h-full
        flex-col
        border-white/10
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[var(--primary)]
        ${
          plan.popular
            ? "border-[var(--primary)] bg-[var(--primary)]/5 shadow-[0_0_40px_rgba(250,204,21,0.15)]"
            : ""
        }
      `}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <GBBadge>
            ⭐ Most Popular
          </GBBadge>
        </div>
      )}

      <GBHeading
        level={3}
        className="mt-2"
      >
        {plan.name}
      </GBHeading>

      <div className="mt-6">
        <span className="text-5xl font-bold text-[var(--primary)]">
          {plan.price}
        </span>

        <span className="ml-1 text-base text-zinc-400">
          /month
        </span>
      </div>

      <GBText
        variant="muted"
        className="mt-4 text-sm leading-7 sm:text-base"
      >
        {plan.description}
      </GBText>

      <div className="mt-8 flex-1 space-y-4">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3"
          >
            <Check
              size={18}
              className="mt-1 shrink-0 text-green-400"
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