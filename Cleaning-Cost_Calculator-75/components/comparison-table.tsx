"use client"

import { Check, Minus } from "lucide-react"

const comparisons = [
  {
    category: "Audience",
    vercel: "Developers, engineering teams",
    dora: "Designers, freelancers, creators",
  },
  {
    category: "Core Promise",
    vercel: "Zero-config performance & DX",
    dora: "No-code 3D animation & AI generation",
  },
  {
    category: "Primary Workflow",
    vercel: "git push → Deploy",
    dora: "Prompt → Generate",
  },
  {
    category: "Differentiator",
    vercel: "Git integration, Edge Network, Next.js",
    dora: "Visual canvas, scroll animations, AI",
  },
  {
    category: "Performance Proof",
    vercel: "TTFB <100ms, Lighthouse 100",
    dora: "Responsive design, scroll triggers",
  },
  {
    category: "Framework Support",
    vercel: "Next.js, React, Vue, Svelte, etc.",
    dora: "Platform-native (no framework)",
  },
]

const features = [
  { feature: "Git Integration", vercel: true, dora: false },
  { feature: "Visual Editor", vercel: false, dora: true },
  { feature: "AI Generation", vercel: true, dora: true },
  { feature: "3D Animations", vercel: false, dora: true },
  { feature: "Edge Functions", vercel: true, dora: false },
  { feature: "Custom Code", vercel: true, dora: false },
  { feature: "Preview URLs", vercel: true, dora: true },
  { feature: "Analytics", vercel: true, dora: true },
]

export function ComparisonTable() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Key Adaptations</h2>
          <p className="mt-4 text-muted-foreground">How each platform approaches web development</p>
        </div>

        {/* Main comparison */}
        <div className="mt-12 overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-3 bg-secondary/50">
            <div className="p-4 text-sm font-medium text-muted-foreground">Element</div>
            <div className="border-l border-border p-4 text-sm font-medium text-foreground">Vercel</div>
            <div className="border-l border-border p-4 text-sm font-medium text-[oklch(0.70_0.18_320)]">Dora</div>
          </div>

          {comparisons.map((row, i) => (
            <div key={i} className="grid grid-cols-3 border-t border-border transition-colors hover:bg-secondary/30">
              <div className="p-4 text-sm font-medium text-foreground">{row.category}</div>
              <div className="border-l border-border p-4 text-sm text-muted-foreground">{row.vercel}</div>
              <div className="border-l border-border p-4 text-sm text-muted-foreground">{row.dora}</div>
            </div>
          ))}
        </div>

        {/* Feature checklist */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-xl font-semibold text-foreground">Feature Comparison</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
                <span className="text-sm text-foreground">{item.feature}</span>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1">
                    {item.vercel ? (
                      <Check className="h-4 w-4 text-foreground" />
                    ) : (
                      <Minus className="h-4 w-4 text-muted-foreground/50" />
                    )}
                    <span className="text-xs text-muted-foreground">V</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {item.dora ? (
                      <Check className="h-4 w-4 text-[oklch(0.70_0.18_320)]" />
                    ) : (
                      <Minus className="h-4 w-4 text-muted-foreground/50" />
                    )}
                    <span className="text-xs text-muted-foreground">D</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
