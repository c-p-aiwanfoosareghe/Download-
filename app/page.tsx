import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MarketTicker } from "@/components/market-ticker"
import { TradingSection } from "@/components/trading-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { CryptoList } from "@/components/crypto-list"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <MarketTicker />
      <HeroSection />
      <TradingSection />
      <FeaturesSection />
      <StatsSection />
      <CryptoList />
      <CTASection />
      <Footer />
    </main>
  )
}
