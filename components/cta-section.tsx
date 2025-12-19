import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8 lg:p-16">
          <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">Ready to Start Trading?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join over 10 million users worldwide and start your crypto journey today. Sign up in seconds and get $10
              in free Bitcoin.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Create Free Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold bg-transparent">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
