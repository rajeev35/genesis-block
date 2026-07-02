import { Star } from "lucide-react";

import { GBBadge } from "@/components/common/gb-badge";
import { GBCard } from "@/components/common/gb-card";
import { GBHeading } from "@/components/common/gb-heading";
import { GBText } from "@/components/common/gb-text";

import type { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <GBCard
      className="
        h-full
        border-white/10
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[var(--primary)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex gap-1">
          {Array.from({
            length: testimonial.rating,
          }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <GBBadge>
          {testimonial.profit}
        </GBBadge>

      </div>

      {/* Review */}
      <GBText
        variant="muted"
        className="
          mt-6
          flex-1
          text-sm
          italic
          leading-7
          sm:text-base
        "
      >
        "{testimonial.review}"
      </GBText>

      {/* Footer */}
      <div className="mt-8 border-t border-white/10 pt-5">

        <GBHeading level={4}>
          {testimonial.name}
        </GBHeading>

        <GBText
          variant="gold"
          className="mt-1 font-medium"
        >
          {testimonial.role}
        </GBText>

      </div>
    </GBCard>
  );
}