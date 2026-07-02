import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import { TestimonialCard } from "./components/testimonial-card";
import { testimonials } from "./data";

export function TestimonialsSection() {
  return (
    <GBSection>
      <GBContainer>

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <GBHeading level={2}>
            Loved by Traders
          </GBHeading>

          <GBText
            variant="muted"
            className="mx-auto mt-4 text-base sm:text-lg"
          >
            Thousands of traders trust Genesis Block
            to improve their consistency,
            confidence and trading performance.
          </GBText>

        </div>

        <StaggerContainer
          className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >

          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <TestimonialCard
                testimonial={testimonial}
              />
            </StaggerItem>
          ))}

        </StaggerContainer>

      </GBContainer>
    </GBSection>
  );
}