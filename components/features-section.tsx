import { Shield, Zap, Lock, Headphones, BarChart3, Wallet } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your assets are protected by industry-leading security protocols and insurance coverage.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our high-performance matching engine.",
  },
  {
    icon: Lock,
    title: "Cold Storage",
    description: "95% of all assets are stored offline in geographically distributed cold wallets.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our expert support team is available around the clock to help you.",
  },
  {
    icon: BarChart3,
    title: "Advanced Trading",
    description: "Professional tools including spot, margin, and futures trading.",
  },
  {
    icon: Wallet,
    title: "Multi-Asset Wallet",
    description: "Store, send, and receive 200+ cryptocurrencies in one secure wallet.",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-y border-border bg-card/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">Why Choose Zerbyte</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Built by traders, for traders. We provide the tools and security you need to succeed.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
