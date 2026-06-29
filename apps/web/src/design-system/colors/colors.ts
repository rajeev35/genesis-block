export const colors = {
  background: "#09090B",
  surface: "#111113",
  card: "#18181B",
  border: "#27272A",

  primary: "#D4AF37",
  primaryHover: "#C9A227",

  white: "#FFFFFF",
  black: "#000000",

  muted: "#A1A1AA",

  success: "#22C55E",
  danger: "#EF4444",
  warning: "#F59E0B",

  transparent: "transparent",
} as const;

export type ColorKeys = keyof typeof colors;