import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Genesis Block",
    template: "%s | Genesis Block",
  },
  description:
    "Professional Trading Education, Gold Analysis, Premium Signals, TradingView Setups & Trading Community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, spaceGrotesk.variable)}
    >
      <body>{children}</body>
    </html>
  );
}