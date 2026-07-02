import type { PricingPlan } from "./types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for beginners",
    features: [
      "Trading Academy",
      "Community Access",
      "Basic Market Updates",
      "Free Resources",
    ],
  },
  {
    name: "Pro",
    price: "₹999",
    description: "For serious traders",
    popular: true,
    features: [
      "Premium Signals",
      "Daily Gold Analysis",
      "Trading Journal",
      "Priority Support",
      "Premium Community",
    ],
  },
  {
    name: "Elite",
    price: "₹2999",
    description: "For professionals",
    features: [
      "Everything in Pro",
      "Live Sessions",
      "1-on-1 Mentorship",
      "AI Trading Tools",
      "Private Community",
    ],
  },
];