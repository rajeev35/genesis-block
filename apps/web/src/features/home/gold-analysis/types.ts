export interface GoldAnalysis {
  trend: "Bullish" | "Bearish";
  currentPrice: string;
  support: string;
  resistance: string;
  target: string;
}