import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { testimonials } from "./data";
import { TestimonialCard } from "./components/testimonial-card";

export function TestimonialsSection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mb-14 text-center">

          <GBHeading level={2}>
            Loved by Traders
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 max-w-2xl text-center"
          >
            Thousands of traders trust Genesis Block
            to improve their consistency,
            confidence and trading performance.
          </GBText>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}

        </div>

      </GBContainer>
    </GBSection>
  );
}