"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const initialCryptoData = [
  {
    rank: 1,
    symbol: "BTC",
    name: "Bitcoin",
    price: 43250.82,
    change24h: 2.34,
    marketCap: 847.2,
    volume: 28.4,
  },
  {
    rank: 2,
    symbol: "ETH",
    name: "Ethereum",
    price: 2285.15,
    change24h: -1.12,
    marketCap: 274.5,
    volume: 15.8,
  },
  {
    rank: 3,
    symbol: "SOL",
    name: "Solana",
    price: 98.42,
    change24h: 5.67,
    marketCap: 42.3,
    volume: 2.9,
  },
  {
    rank: 4,
    symbol: "XRP",
    name: "Ripple",
    price: 0.6234,
    change24h: 1.89,
    marketCap: 34.1,
    volume: 1.2,
  },
  {
    rank: 5,
    symbol: "ADA",
    name: "Cardano",
    price: 0.5123,
    change24h: -0.45,
    marketCap: 18.2,
    volume: 0.8,
  },
  {
    rank: 6,
    symbol: "DOGE",
    name: "Dogecoin",
    price: 0.0842,
    change24h: 3.21,
    marketCap: 12.1,
    volume: 0.6,
  },
]

export function CryptoList() {
  const [cryptoData, setCryptoData] = useState(initialCryptoData)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData((prev) =>
        prev.map((crypto) => ({
          ...crypto,
          price: crypto.price * (1 + (Math.random() - 0.5) * 0.002),
          change24h: crypto.change24h + (Math.random() - 0.5) * 0.1,
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const filteredData = cryptoData.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="border-t border-border bg-card/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">Market Overview</h2>
            <p className="text-muted-foreground">Real-time prices for popular cryptocurrencies</p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">#</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Name</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Price</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">24h Change</th>
                <th className="hidden px-4 py-3 text-right text-sm font-medium text-muted-foreground md:table-cell">
                  Market Cap
                </th>
                <th className="hidden px-4 py-3 text-right text-sm font-medium text-muted-foreground lg:table-cell">
                  Volume (24h)
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Trade</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((crypto) => (
                <tr
                  key={crypto.symbol}
                  className="border-b border-border bg-background transition-colors hover:bg-card"
                >
                  <td className="px-4 py-4 text-sm text-muted-foreground">{crypto.rank}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                        {crypto.symbol.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{crypto.name}</div>
                        <div className="text-xs text-muted-foreground">{crypto.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-sm text-foreground">
                    $
                    {crypto.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: crypto.price < 1 ? 4 : 2,
                    })}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span
                      className={`inline-flex items-center gap-1 text-sm font-medium ${
                        crypto.change24h >= 0 ? "text-success" : "text-destructive"
                      }`}
                    >
                      {crypto.change24h >= 0 ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {crypto.change24h >= 0 ? "+" : ""}
                      {crypto.change24h.toFixed(2)}%
                    </span>
                  </td>
                  <td className="hidden px-4 py-4 text-right font-mono text-sm text-muted-foreground md:table-cell">
                    ${crypto.marketCap}B
                  </td>
                  <td className="hidden px-4 py-4 text-right font-mono text-sm text-muted-foreground lg:table-cell">
                    ${crypto.volume}B
                  </td>
                  <td className="px-4 py-4 text-right">
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Trade
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
