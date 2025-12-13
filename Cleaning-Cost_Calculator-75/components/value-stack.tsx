"use client"

import { useEffect, useRef, useState } from "react"
import { DollarSign, Users, Package } from "lucide-react"

const values = [
  {
    icon: DollarSign,
    title: "NJ $25/hr Baseline",
    description:
      "Competitive hourly rate based on New Jersey market standards. Transparent pricing with no hidden markups.",
    highlight: "$25/hr",
  },
  {
    icon: Users,
    title: "ISSA 610 Staffing",
    description:
      "Industry-standard staffing ratios ensuring optimal coverage. Trained professionals following ISSA guidelines.",
    highlight: "ISSA 610",
  },
  {
    icon: Package,
    title: "DGS-Sourced Materials",
    description: "Bulk pricing through NJ Division of General Services contracts. Savings passed directly to you.",
    highlight: "28% Savings",
  },
]

export function ValueStack() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            values.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            The CrystalCore Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pillars of transparent, professional commercial cleaning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-[#E6F0FA]/30 hover:shadow-lg hover:shadow-[#E6F0FA]/5 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#E6F0FA]/10 border border-[#E6F0FA]/20 group-hover:scale-105 transition-transform">
                <value.icon className="h-6 w-6 text-[#E6F0FA] pulse-icon" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{value.description}</p>

              {/* Highlight badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2E8B57]/10 border border-[#2E8B57]/20">
                <span className="text-sm font-semibold text-[#2E8B57]">{value.highlight}</span>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden">
                <div className="absolute inset-0 crystal-shimmer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
