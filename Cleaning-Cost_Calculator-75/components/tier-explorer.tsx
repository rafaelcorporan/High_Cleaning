"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type FacilitySize = "small" | "medium" | "large"
type TierType = "essential" | "hygiene" | "executive" | "fm"

interface TierData {
  name: string
  staff: number
  hours: number
  price: number
  features: string[]
}

const facilitySizes: { id: FacilitySize; label: string; sqft: string }[] = [
  { id: "small", label: "Small", sqft: "1k - 5k sq.ft." },
  { id: "medium", label: "Medium", sqft: "5k - 10k sq.ft." },
  { id: "large", label: "Large", sqft: "10k - 20k+ sq.ft." },
]

const tiers: Record<FacilitySize, Record<TierType, TierData>> = {
  small: {
    essential: {
      name: "Essential",
      staff: 1,
      hours: 20,
      price: 695,
      features: ["Basic cleaning", "Weekly service", "Standard supplies"],
    },
    hygiene: {
      name: "Hygiene+",
      staff: 1,
      hours: 32,
      price: 1120,
      features: ["Enhanced sanitization", "2x weekly", "Eco products"],
    },
    executive: {
      name: "Executive",
      staff: 2,
      hours: 48,
      price: 1680,
      features: ["Premium service", "3x weekly", "Quality audit"],
    },
    fm: {
      name: "Full Maintenance",
      staff: 2,
      hours: 80,
      price: 2800,
      features: ["Daily service", "Deep cleaning", "24/7 support"],
    },
  },
  medium: {
    essential: {
      name: "Essential",
      staff: 2,
      hours: 40,
      price: 1390,
      features: ["Basic cleaning", "Weekly service", "Standard supplies"],
    },
    hygiene: {
      name: "Hygiene+",
      staff: 2,
      hours: 64,
      price: 2240,
      features: ["Enhanced sanitization", "2x weekly", "Eco products"],
    },
    executive: {
      name: "Executive",
      staff: 3,
      hours: 96,
      price: 3360,
      features: ["Premium service", "3x weekly", "Quality audit"],
    },
    fm: {
      name: "Full Maintenance",
      staff: 4,
      hours: 160,
      price: 5600,
      features: ["Daily service", "Deep cleaning", "24/7 support"],
    },
  },
  large: {
    essential: {
      name: "Essential",
      staff: 3,
      hours: 60,
      price: 2085,
      features: ["Basic cleaning", "Weekly service", "Standard supplies"],
    },
    hygiene: {
      name: "Hygiene+",
      staff: 4,
      hours: 96,
      price: 3360,
      features: ["Enhanced sanitization", "2x weekly", "Eco products"],
    },
    executive: {
      name: "Executive",
      staff: 5,
      hours: 144,
      price: 5040,
      features: ["Premium service", "3x weekly", "Quality audit"],
    },
    fm: {
      name: "Full Maintenance",
      staff: 6,
      hours: 240,
      price: 8400,
      features: ["Daily service", "Deep cleaning", "24/7 support"],
    },
  },
}

const tierOrder: TierType[] = ["essential", "hygiene", "executive", "fm"]

export function TierExplorer() {
  const [selectedSize, setSelectedSize] = useState<FacilitySize>("medium")
  const [hoveredTier, setHoveredTier] = useState<TierType | null>(null)

  return (
    <section className="relative py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Interactive Tier Explorer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your facility size and explore our service tiers
          </p>
        </div>

        {/* 3D Cube selector - simplified as interactive cards */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-border bg-card p-1 gap-1">
            {facilitySizes.map((size) => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                className={cn(
                  "px-6 py-3 rounded-md text-sm font-medium transition-all",
                  selectedSize === size.id
                    ? "bg-[#E6F0FA] text-[#0A2540]"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                )}
              >
                <div className="font-semibold">{size.label}</div>
                <div className="text-xs opacity-70">{size.sqft}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Tier grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tierOrder.map((tierKey) => {
            const tier = tiers[selectedSize][tierKey]
            const isHovered = hoveredTier === tierKey
            const isExecutive = tierKey === "executive"

            return (
              <div
                key={tierKey}
                onMouseEnter={() => setHoveredTier(tierKey)}
                onMouseLeave={() => setHoveredTier(null)}
                className={cn(
                  "relative rounded-xl border p-6 transition-all duration-300 cursor-pointer",
                  isExecutive ? "border-[#2E8B57]/50 bg-[#2E8B57]/5" : "border-border bg-card",
                  isHovered && "scale-[1.02] shadow-xl shadow-[#E6F0FA]/10",
                )}
              >
                {isExecutive && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#2E8B57] text-xs font-medium text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg font-semibold text-foreground mb-1">{tier.name}</h3>
                <div className="text-3xl font-bold text-foreground mb-4">
                  ${tier.price.toLocaleString()}
                  <span className="text-sm font-normal text-muted-foreground">/mo</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="rounded bg-secondary/50 p-2 text-center">
                    <div className="text-lg font-semibold text-foreground">{tier.staff}</div>
                    <div className="text-xs text-muted-foreground">Staff</div>
                  </div>
                  <div className="rounded bg-secondary/50 p-2 text-center">
                    <div className="text-lg font-semibold text-foreground">{tier.hours}</div>
                    <div className="text-xs text-muted-foreground">Hrs/mo</div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#E6F0FA]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
