"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

const initialMarketData = [
  { symbol: "BTC", name: "Bitcoin", price: 43250.82, change: 2.34 },
  { symbol: "ETH", name: "Ethereum", price: 2285.15, change: -1.12 },
  { symbol: "SOL", name: "Solana", price: 98.42, change: 5.67 },
  { symbol: "XRP", name: "Ripple", price: 0.6234, change: 1.89 },
  { symbol: "ADA", name: "Cardano", price: 0.5123, change: -0.45 },
  { symbol: "DOGE", name: "Dogecoin", price: 0.0842, change: 3.21 },
]

export function MarketTicker() {
  const [marketData, setMarketData] = useState(initialMarketData)

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prev) =>
        prev.map((coin) => ({
          ...coin,
          price: coin.price * (1 + (Math.random() - 0.5) * 0.002),
          change: coin.change + (Math.random() - 0.5) * 0.1,
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border-b border-border bg-card/50">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-2 lg:px-8">
        <div className="flex animate-scroll items-center gap-8">
          {[...marketData, ...marketData].map((coin, index) => (
            <div key={`${coin.symbol}-${index}`} className="flex shrink-0 items-center gap-3">
              <span className="font-medium text-foreground">{coin.symbol}</span>
              <span className="font-mono text-sm text-muted-foreground">
                ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  coin.change >= 0 ? "text-success" : "text-destructive"
                }`}
              >
                {coin.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {coin.change >= 0 ? "+" : ""}
                {coin.change.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
