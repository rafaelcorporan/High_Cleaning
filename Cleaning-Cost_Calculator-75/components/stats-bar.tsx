"use client"

const stats = [
  { value: "<100ms", label: "TTFB with Vercel", company: "Netflix" },
  { value: "300+", label: "AI credits on Dora", company: "Designers" },
  { value: "190+", label: "Edge regions", company: "Vercel Network" },
  { value: "3D/2D", label: "Animation support", company: "Dora Canvas" },
]

export function StatsBar() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-foreground lg:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground/60">{stat.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
