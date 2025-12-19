"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowDownUp, ChevronDown } from "lucide-react"

const cryptos = [
  { symbol: "BTC", name: "Bitcoin", icon: "₿" },
  { symbol: "ETH", name: "Ethereum", icon: "Ξ" },
  { symbol: "SOL", name: "Solana", icon: "◎" },
  { symbol: "USDT", name: "Tether", icon: "$" },
]

export function TradingSection() {
  const [fromAmount, setFromAmount] = useState("1000")
  const [fromCrypto, setFromCrypto] = useState(cryptos[3])
  const [toCrypto, setToCrypto] = useState(cryptos[0])
  const [activeTab, setActiveTab] = useState<"buy" | "sell" | "convert">("buy")

  const conversionRate = 43250.82
  const toAmount = (Number.parseFloat(fromAmount) / conversionRate).toFixed(8)

  const handleSwap = () => {
    const temp = fromCrypto
    setFromCrypto(toCrypto)
    setToCrypto(temp)
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">Start Trading in Minutes</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our intuitive platform makes it easy to buy, sell, and convert cryptocurrency. No experience required.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Create your account</h3>
                  <p className="text-sm text-muted-foreground">Sign up in seconds with just your email address</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Add payment method</h3>
                  <p className="text-sm text-muted-foreground">Link your bank account or debit card</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Start trading</h3>
                  <p className="text-sm text-muted-foreground">Buy your first crypto in under a minute</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-6 flex gap-1 rounded-lg bg-secondary p-1">
              {(["buy", "sell", "convert"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 rounded-md px-4 py-2 text-sm font-medium capitalize transition-colors ${
                    activeTab === tab ? "bg-background text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{activeTab === "sell" ? "Sell" : "You pay"}</span>
                  <span className="text-xs text-muted-foreground">Balance: $5,420.00</span>
                </div>
                <div className="flex items-center gap-4">
                  <Input
                    type="text"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="flex-1 border-0 bg-transparent p-0 text-2xl font-semibold text-foreground focus-visible:ring-0"
                    placeholder="0"
                  />
                  <button className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
                    <span className="text-lg">{fromCrypto.icon}</span>
                    <span className="font-medium text-foreground">{fromCrypto.symbol}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleSwap}
                  className="rounded-full border border-border bg-background p-2 transition-colors hover:bg-secondary"
                >
                  <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              <div className="rounded-xl border border-border bg-background p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {activeTab === "buy" ? "You receive" : "You get"}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Input
                    type="text"
                    value={toAmount}
                    readOnly
                    className="flex-1 border-0 bg-transparent p-0 text-2xl font-semibold text-foreground focus-visible:ring-0"
                    placeholder="0"
                  />
                  <button className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
                    <span className="text-lg">{toCrypto.icon}</span>
                    <span className="font-medium text-foreground">{toCrypto.symbol}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-2 text-sm">
                <span className="text-muted-foreground">Rate</span>
                <span className="font-mono text-foreground">1 BTC = $43,250.82</span>
              </div>

              <Button className="h-12 w-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90">
                {activeTab === "buy" ? "Buy Bitcoin" : activeTab === "sell" ? "Sell Bitcoin" : "Convert"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
