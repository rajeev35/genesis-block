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
    <GBCard className="transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/40">

      <div className="flex items-center justify-between">

        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
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

      <GBText
        variant="muted"
        className="mt-6 italic"
      >
        "{testimonial.review}"
      </GBText>

      <div className="mt-8 border-t border-zinc-800 pt-5">

        <GBHeading level={4}>
          {testimonial.name}
        </GBHeading>

        <GBText
          variant="gold"
          className="mt-1"
        >
          {testimonial.role}
        </GBText>

      </div>

    </GBCard>
  );
}