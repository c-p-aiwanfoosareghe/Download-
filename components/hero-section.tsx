import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Globe } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Column: Content */}
          <div className="relative z-10 flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">Live Trading Available</span>
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Trade Crypto with
              <span className="text-primary"> Confidence</span>
            </h1>

            <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Join millions of traders worldwide. Buy, sell, and trade 200+ cryptocurrencies with industry-leading
              security and the lowest fees.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="h-12 px-8 text-base font-semibold bg-transparent"
              >
                <Link href="/markets">
                  View Markets
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Bank-grade security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Instant execution</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>180+ countries</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component */}
          <div className="relative">
            {/* Decorative Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-3xl" />
            
            {/* Portfolio Card */}
            <div className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Portfolio Value</span>
                <span className="text-xs font-bold text-primary">+12.4% today</span>
              </div>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">$48,392.54</span>
              </div>

              {/* Mock Chart Area */}
              <div className="relative h-32 w-full overflow-hidden rounded-lg bg-secondary/50">
                <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-primary/20 to-transparent" />
                {/* Visual "Wave" Decoration */}
                <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                  <path 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="4" 
                    d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128"
                  />
                </svg>
              </div>

              {/* Asset Grid */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-secondary/80 p-3 transition-colors hover:bg-secondary">
                  <span className="text-xs text-muted-foreground">BTC</span>
                  <p className="font-mono text-sm font-medium text-foreground">0.892</p>
                </div>
                <div className="rounded-lg bg-secondary/80 p-3 transition-colors hover:bg-secondary">
                  <span className="text-xs text-muted-foreground">ETH</span>
                  <p className="font-mono text-sm font-medium text-foreground">4.215</p>
                </div>
                <div className="rounded-lg bg-secondary/80 p-3 transition-colors hover:bg-secondary">
                  <span className="text-xs text-muted-foreground">SOL</span>
                  <p className="font-mono text-sm font-medium text-foreground">52.3</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
