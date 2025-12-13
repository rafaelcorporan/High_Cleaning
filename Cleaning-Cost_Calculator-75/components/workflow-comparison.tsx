"use client"

import { ArrowRight } from "lucide-react"

export function WorkflowComparison() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Different workflows, same goal</h2>
          <p className="mt-4 text-muted-foreground">See how each platform approaches the development process</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Vercel Workflow */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-foreground">
                <svg className="h-4 w-4 text-background" viewBox="0 0 76 65" fill="currentColor">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Vercel Workflow</h3>
            </div>

            <div className="space-y-4">
              {[
                { step: "1", label: "Write code", detail: "Next.js, React, Vue..." },
                { step: "2", label: "git push", detail: "Push to main or branch" },
                { step: "3", label: "Auto deploy", detail: "Builds & deploys in seconds" },
                { step: "4", label: "Preview URL", detail: "Share & collaborate" },
                { step: "5", label: "Production", detail: "Global Edge delivery" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium text-foreground">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                  {i < 4 && <ArrowRight className="h-4 w-4 text-muted-foreground/50" />}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-secondary/50 p-4 font-mono text-sm">
              <span className="text-muted-foreground">$</span>{" "}
              <span className="text-foreground">git push origin main</span>
              <br />
              <span className="text-accent">→ Deployed to vercel.app</span>
            </div>
          </div>

          {/* Dora Workflow */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[oklch(0.70_0.18_320)]">
                <span className="text-sm font-bold text-background">D</span>
              </div>
              <h3 className="font-semibold text-foreground">Dora Workflow</h3>
            </div>

            <div className="space-y-4">
              {[
                { step: "1", label: "Write prompt", detail: "Describe your vision" },
                { step: "2", label: "AI generates", detail: "3D scene, layouts, copy" },
                { step: "3", label: "Visual edit", detail: "Drag, drop, animate" },
                { step: "4", label: "Preview", detail: "Test scroll animations" },
                { step: "5", label: "Publish", detail: "One-click deployment" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[oklch(0.70_0.18_320)]/20 text-sm font-medium text-[oklch(0.70_0.18_320)]">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                  {i < 4 && <ArrowRight className="h-4 w-4 text-muted-foreground/50" />}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-[oklch(0.70_0.18_320)]/10 p-4 text-sm">
              <span className="text-muted-foreground">&quot;</span>
              <span className="text-foreground">Build a landing page with 3D hero animation...</span>
              <span className="text-muted-foreground">&quot;</span>
              <br />
              <span className="text-[oklch(0.70_0.18_320)]">→ Generated with AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
