import { FadeIn } from "@/components/animations";

import { GBContainer } from "@/components/common/gb-container";
import { GBHeading } from "@/components/common/gb-heading";
import { GBSection } from "@/components/common/gb-section";
import { GBText } from "@/components/common/gb-text";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqItems } from "./data";

export function FAQSection() {
  return (
    <GBSection>
      <GBContainer>

        <FadeIn>

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <GBHeading level={2}>
              Frequently Asked Questions
            </GBHeading>

            <GBText
              variant="muted"
              className="mx-auto mt-4 text-base sm:text-lg"
            >
              Everything you need to know about Genesis Block,
              memberships and our trading services.
            </GBText>

          </div>

        </FadeIn>

        <FadeIn delay={0.2}>

          <div className="mx-auto max-w-4xl">

            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-[var(--primary)]
                  "
                >
                  <AccordionTrigger
                    className="
                      text-left
                      text-base
                      font-semibold
                      sm:text-lg
                    "
                  >
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent
                    className="
                      text-sm
                      leading-7
                      text-zinc-400
                      sm:text-base
                    "
                  >
                    {item.answer}
                  </AccordionContent>

                </AccordionItem>
              ))}
            </Accordion>

          </div>

        </FadeIn>

      </GBContainer>
    </GBSection>
  );
}