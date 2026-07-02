import { Signal } from "./types";

export const signals: Signal[] = [
  {
    pair: "XAU/USD",
    type: "BUY",
    entry: "3365",
    target: "3388",
    stopLoss: "3350",
    accuracy: "95%",
  },
  {
    pair: "BTC/USD",
    type: "BUY",
    entry: "108500",
    target: "110000",
    stopLoss: "107800",
    accuracy: "92%",
  },
  {
    pair: "EUR/USD",
    type: "SELL",
    entry: "1.1730",
    target: "1.1685",
    stopLoss: "1.1765",
    accuracy: "90%",
  },
];