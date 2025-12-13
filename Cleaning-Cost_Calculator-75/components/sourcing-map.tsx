"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

const locations = [
  {
    id: "edison",
    name: "Edison",
    supplier: "Uline",
    items: "Microfiber cloths, trash liners, dispensers",
    savings: "$42/mo avg savings",
    x: 65,
    y: 45,
  },
  {
    id: "trenton",
    name: "Trenton",
    supplier: "VacuumPartsNow",
    items: "HEPA filters, vacuum bags, floor pads",
    savings: "$53/mo avg savings",
    x: 38,
    y: 68,
  },
]

export function SourcingMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  return (
    <section className="relative py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            NJ-Based Sourcing Network
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Local suppliers, DGS contract pricing, savings passed to you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative aspect-square max-w-md mx-auto w-full">
            {/* Low-poly NJ map representation */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="njGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E6F0FA" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#E6F0FA" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Simplified NJ shape */}
              <path
                d="M55,5 L70,10 L75,25 L80,35 L78,50 L72,65 L65,75 L55,85 L45,95 L35,90 L30,80 L25,65 L28,50 L35,35 L40,20 L50,10 Z"
                fill="url(#njGradient)"
                stroke="#E6F0FA"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />

              {/* Grid lines for low-poly effect */}
              <path
                d="M55,5 L55,85 M35,35 L75,35 M30,65 L72,65"
                stroke="#E6F0FA"
                strokeWidth="0.3"
                strokeOpacity="0.1"
                fill="none"
              />

              {/* Location pins */}
              {locations.map((location) => (
                <g
                  key={location.id}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r={hoveredLocation === location.id ? 4 : 3}
                    fill={hoveredLocation === location.id ? "#2E8B57" : "#E6F0FA"}
                    className="transition-all duration-300"
                  />
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r={hoveredLocation === location.id ? 8 : 6}
                    fill="none"
                    stroke={hoveredLocation === location.id ? "#2E8B57" : "#E6F0FA"}
                    strokeWidth="1"
                    strokeOpacity={hoveredLocation === location.id ? 0.5 : 0.3}
                    className="transition-all duration-300"
                  />
                  {hoveredLocation === location.id && (
                    <circle
                      cx={location.x}
                      cy={location.y}
                      r="12"
                      fill="none"
                      stroke="#2E8B57"
                      strokeWidth="0.5"
                      strokeOpacity="0.3"
                      className="animate-ping"
                    />
                  )}
                </g>
              ))}
            </svg>

            {/* Floating labels */}
            {locations.map((location) => (
              <div
                key={`label-${location.id}`}
                className={`absolute transition-all duration-300 ${
                  hoveredLocation === location.id ? "opacity-100 scale-100" : "opacity-70 scale-95"
                }`}
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transform: "translate(12px, -50%)",
                }}
              >
                <div className="text-xs font-semibold text-foreground whitespace-nowrap">{location.name}</div>
                <div className="text-xs text-muted-foreground whitespace-nowrap">{location.supplier}</div>
              </div>
            ))}
          </div>

          {/* Location details */}
          <div className="space-y-4">
            {locations.map((location) => (
              <div
                key={`detail-${location.id}`}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                className={`rounded-xl border p-5 transition-all duration-300 cursor-pointer ${
                  hoveredLocation === location.id
                    ? "border-[#2E8B57]/50 bg-[#2E8B57]/5 scale-[1.02]"
                    : "border-border bg-card hover:border-[#E6F0FA]/30"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      hoveredLocation === location.id ? "bg-[#2E8B57]/20" : "bg-[#E6F0FA]/10"
                    }`}
                  >
                    <MapPin
                      className={`h-5 w-5 transition-colors ${
                        hoveredLocation === location.id ? "text-[#2E8B57]" : "text-[#E6F0FA]"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground">{location.name}, NJ</h3>
                      <span className="text-xs font-medium text-[#2E8B57] px-2 py-1 rounded-full bg-[#2E8B57]/10">
                        {location.savings}
                      </span>
                    </div>
                    <div className="text-sm text-[#E6F0FA] mb-1">{location.supplier}</div>
                    <p className="text-sm text-muted-foreground">{location.items}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* DGS badge */}
            <div className="mt-6 p-4 rounded-lg border border-[#E6F0FA]/20 bg-[#E6F0FA]/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E6F0FA]/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#E6F0FA]">DGS</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">NJ Division of General Services</div>
                  <div className="text-xs text-muted-foreground">Authorized contract pricing • Bulk rates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
