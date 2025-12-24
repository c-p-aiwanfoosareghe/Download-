"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">Z</span>
          </div>
          <span className="text-xl font-bold text-foreground">Zerbyte</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Markets
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Trade
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Earn
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            NFT
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Learn
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" className="w-full bg-transparent">
  <Link href="/login">Log In</Link>
</Button>

     <Button asChild variant="outline" className="w-full bg-transparent">
  <Link href="/get-started">Sign Up</Link>
</Button>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="#" className="text-base font-medium text-foreground">
              Markets
            </Link>
            <Link href="#" className="text-base font-medium text-foreground">
              Trade
            </Link>
            <Link href="#" className="text-base font-medium text-foreground">
              Earn
            </Link>
            <Link href="#" className="text-base font-medium text-foreground">
              NFT
            </Link>
            <Link href="#" className="text-base font-medium text-foreground">
              Learn
            </Link>
            <div className="flex flex-col gap-2 pt-4">
            <Button asChild variant="outline" className="w-full bg-transparent">
  <Link href="/login">Log In</Link>
</Button>
           <Button asChild variant="outline" className="w-full bg-transparent">
  <Link href="/login">sign Up</Link>
</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
