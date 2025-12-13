"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TableIcon, Filter } from "lucide-react"
import { TIER_DATA, TIER_INFO, LABOR_RATE, calculateMaterialCost, type TierType } from "@/lib/cleaning-data"

export function TierDataTable() {
  const [filterTier, setFilterTier] = useState<TierType | "all">("all")

  const filteredData = filterTier === "all" ? TIER_DATA : TIER_DATA.filter((t) => t.tier === filterTier)

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TableIcon className="w-5 h-5 text-primary" />
            Complete Tier Reference
          </CardTitle>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <div className="flex gap-1">
              <Button
                variant={filterTier === "all" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setFilterTier("all")}
                className="text-xs h-7"
              >
                All
              </Button>
              {Object.entries(TIER_INFO).map(([key, info]) => (
                <Button
                  key={key}
                  variant={filterTier === key ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setFilterTier(key as TierType)}
                  className="text-xs h-7"
                >
                  {info.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50 hover:bg-secondary/50">
                  <TableHead className="text-xs font-semibold text-foreground">Tier</TableHead>
                  <TableHead className="text-xs font-semibold text-foreground">Size</TableHead>
                  <TableHead className="text-xs font-semibold text-foreground">Sq Ft</TableHead>
                  <TableHead className="text-xs font-semibold text-foreground">Frequency</TableHead>
                  <TableHead className="text-xs font-semibold text-foreground text-center">Staff</TableHead>
                  <TableHead className="text-xs font-semibold text-foreground text-center">Hrs/Cycle</TableHead>
                  <TableHead className="text-xs font-semibold text-foreground text-center">Hrs/Month</TableHead>
                  <TableHead className="text-xs font-semibold text-foreground text-right">Labor Cost</TableHead>
                  <TableHead className="text-xs font-semibold text-foreground text-right">Materials</TableHead>
                  <TableHead className="text-xs font-semibold text-foreground text-right">Total Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((row, index) => {
                  const materialCost = calculateMaterialCost(row.size)
                  const laborCost = row.hoursMonthly * LABOR_RATE
                  const totalCost = laborCost + materialCost

                  return (
                    <TableRow key={index} className="hover:bg-secondary/30">
                      <TableCell>
                        <Badge variant="outline" className={`text-xs ${TIER_INFO[row.tier].color}`}>
                          {row.tierLabel}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-foreground">{row.sizeLabel}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{row.sqFtRange}</TableCell>
                      <TableCell className="text-sm text-foreground">{row.frequencyLabel}</TableCell>
                      <TableCell className="text-sm text-foreground text-center">{row.staff}</TableCell>
                      <TableCell className="text-sm text-muted-foreground text-center">
                        {row.avgHoursPerCycle}
                      </TableCell>
                      <TableCell className="text-sm text-foreground text-center font-medium">
                        {row.hoursMonthly.toFixed(1)}
                      </TableCell>
                      <TableCell className="text-sm text-foreground text-right">${laborCost.toFixed(2)}</TableCell>
                      <TableCell className="text-sm text-muted-foreground text-right">
                        ${materialCost.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-sm text-emerald-400 text-right font-semibold">
                        ${totalCost.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          * Labor rate fixed at ${LABOR_RATE}/hr. Materials based on NJ-compliant affordable tier ($94.80/mo base for 5k
          sq ft, scaled by facility size).
        </p>
      </CardContent>
    </Card>
  )
}
