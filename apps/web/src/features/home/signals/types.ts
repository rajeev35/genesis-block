export interface Signal {
  pair: string;
  type: "BUY" | "SELL";
  entry: string;
  target: string;
  stopLoss: string;
  accuracy: string;
}