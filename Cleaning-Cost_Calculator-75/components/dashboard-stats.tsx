"use client"

import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Users, Clock, Building } from "lucide-react"
import { TIER_DATA, LABOR_RATE } from "@/lib/cleaning-data"
import { useI18n } from "@/lib/i18n-context"

export function DashboardStats() {
  const { t } = useI18n()
  const totalConfigs = TIER_DATA.length
  const avgMonthlyHours = TIER_DATA.reduce((sum, t) => sum + t.hoursMonthly, 0) / TIER_DATA.length
  const avgStaff = TIER_DATA.reduce((sum, t) => sum + t.staff, 0) / TIER_DATA.length

  const stats = [
    {
      label: t("laborRate"),
      value: `$${LABOR_RATE}/hr`,
      subtext: t("fixedRate"),
      icon: DollarSign,
      color: "text-emerald-400",
    },
    {
      label: t("serviceConfigs"),
      value: totalConfigs.toString(),
      subtext: t("tierCombinations"),
      icon: Building,
      color: "text-blue-400",
    },
    {
      label: t("avgMonthlyHours"),
      value: avgMonthlyHours.toFixed(1),
      subtext: t("perConfiguration"),
      icon: Clock,
      color: "text-amber-400",
    },
    {
      label: t("avgStaffRequired"),
      value: avgStaff.toFixed(1),
      subtext: t("perJob"),
      icon: Users,
      color: "text-purple-400",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>
              </div>
              <div className={`p-2 rounded-lg bg-secondary ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
