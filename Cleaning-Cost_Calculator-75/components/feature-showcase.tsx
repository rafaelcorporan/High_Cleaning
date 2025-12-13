"use client"

import { Zap, Globe, GitBranch, ImageIcon, Box, Sparkles, Shield, Gauge } from "lucide-react"

const vercelFeatures = [
  {
    icon: Globe,
    title: "Edge Network",
    description: "190+ regions worldwide for sub-100ms response times",
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "Every push deploys automatically with preview URLs",
  },
  {
    icon: ImageIcon,
    title: "Image Optimization",
    description: "Automatic AVIF, WebP conversion and lazy loading",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals",
    description: "Built-in monitoring with Speed Insights",
  },
]

const doraFeatures = [
  {
    icon: Box,
    title: "3D Canvas",
    description: "Import and animate 3D objects with visual controls",
  },
  {
    icon: Sparkles,
    title: "AI Generation",
    description: "Prompt-to-design with constraint layouts",
  },
  {
    icon: Zap,
    title: "Scroll Animations",
    description: "Keyframe animations triggered by scroll position",
  },
  {
    icon: Shield,
    title: "Responsive Export",
    description: "Automatic mobile optimization and export",
  },
]

export function FeatureShowcase() {
  return (
    <section className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Vercel */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                <svg className="h-5 w-5 text-background" viewBox="0 0 76 65" fill="currentColor">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Vercel Features</h3>
                <p className="text-sm text-muted-foreground">For developers</p>
              </div>
            </div>

            <div className="space-y-4">
              {vercelFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="group flex gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-foreground/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <feature.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{feature.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dora */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.70_0.18_320)]">
                <span className="text-lg font-bold text-background">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Dora Features</h3>
                <p className="text-sm text-muted-foreground">For designers</p>
              </div>
            </div>

            <div className="space-y-4">
              {doraFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="group flex gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-[oklch(0.70_0.18_320)]/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.70_0.18_320)]/10">
                    <feature.icon className="h-5 w-5 text-[oklch(0.70_0.18_320)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{feature.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
