"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(230_240_250_/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(230_240_250_/_0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Crystal refraction effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E6F0FA]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#2E8B57]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E6F0FA]/20 bg-[#E6F0FA]/5 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#E6F0FA]" />
              <span className="text-xs font-medium tracking-widest text-[#E6F0FA]/80 uppercase">
                Premium Commercial Cleaning
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
              Crystal-clear pricing.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6F0FA] to-[#E6F0FA]/60">
                Spotless results.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty max-w-xl">
              New Jersey's premier commercial cleaning service. Transparent pricing at $25/hr baseline, ISSA 610
              staffing standards, and DGS-sourced materials. No hidden fees, ever.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 bg-[#E6F0FA] text-[#0A2540] hover:bg-[#E6F0FA]/90 font-semibold">
                Get Your Transparent Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-[#E6F0FA]/20 hover:bg-[#E6F0FA]/5 bg-transparent text-foreground"
              >
                View Pricing Tiers
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#2E8B57]" />
                <span>NJ Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#2E8B57]" />
                <span>ISSA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#2E8B57]" />
                <span>DGS Contract Pricing</span>
              </div>
            </div>
          </div>

          {/* Right content - Floating tablet display */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative">
              {/* Crystal lattice logo */}
              <div className="absolute -top-8 -left-8 w-24 h-24">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E6F0FA" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#E6F0FA" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#E6F0FA" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="50,5 95,30 95,70 50,95 5,70 5,30"
                    fill="none"
                    stroke="url(#crystalGradient)"
                    strokeWidth="1.5"
                  />
                  <polygon
                    points="50,20 80,35 80,65 50,80 20,65 20,35"
                    fill="none"
                    stroke="url(#crystalGradient)"
                    strokeWidth="1"
                  />
                  <polygon
                    points="50,35 65,42.5 65,57.5 50,65 35,57.5 35,42.5"
                    fill="url(#crystalGradient)"
                    fillOpacity="0.2"
                    stroke="url(#crystalGradient)"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              {/* Tablet device */}
              <div className="relative rounded-2xl border border-[#E6F0FA]/20 bg-gradient-to-br from-card to-card/50 p-1 shadow-2xl shadow-[#E6F0FA]/5">
                <div className="rounded-xl bg-card p-6 space-y-4">
                  {/* Tablet header */}
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded bg-gradient-to-br from-[#E6F0FA] to-[#E6F0FA]/60 flex items-center justify-center">
                        <span className="text-xs font-bold text-[#0A2540]">CC</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">CrystalCore</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Quote Builder</div>
                  </div>

                  {/* Featured tier */}
                  <div className="rounded-lg border border-[#2E8B57]/30 bg-[#2E8B57]/5 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-[#2E8B57] uppercase tracking-wider">
                        Tier 10 — Executive
                      </span>
                      <span className="text-xs text-muted-foreground">Most Popular</span>
                    </div>
                    <div className="text-3xl font-bold text-foreground">
                      $4,100<span className="text-lg font-normal text-muted-foreground">/mo</span>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                      <div className="rounded bg-secondary/50 p-2 text-center">
                        <div className="font-semibold text-foreground">4</div>
                        <div className="text-muted-foreground">Staff</div>
                      </div>
                      <div className="rounded bg-secondary/50 p-2 text-center">
                        <div className="font-semibold text-foreground">160</div>
                        <div className="text-muted-foreground">Hrs/mo</div>
                      </div>
                      <div className="rounded bg-secondary/50 p-2 text-center">
                        <div className="font-semibold text-foreground">10k</div>
                        <div className="text-muted-foreground">Sq. Ft.</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-secondary/30 p-3">
                      <div className="text-xs text-muted-foreground mb-1">Labor Rate</div>
                      <div className="text-lg font-semibold text-foreground">$25/hr</div>
                    </div>
                    <div className="rounded-lg bg-secondary/30 p-3">
                      <div className="text-xs text-muted-foreground mb-1">Materials</div>
                      <div className="text-lg font-semibold text-foreground">$195</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating microfiber cloth element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-lg bg-gradient-to-br from-[#E6F0FA]/10 to-transparent border border-[#E6F0FA]/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-12 h-8 rounded bg-[#E6F0FA]/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent crystal-shimmer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
