"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Minus, Target, BarChart3 } from "lucide-react"
import {
  TIER_INFO,
  SIZE_INFO,
  LABOR_RATE,
  calculateMaterialCost,
  getAvailableFrequencies,
  type TierType,
  type FacilitySize,
  type TierConfig,
} from "@/lib/cleaning-data"

export function ProfitAnalysis() {
  const [tier, setTier] = useState<TierType>("essential")
  const [size, setSize] = useState<FacilitySize>("small")
  const [selectedConfig, setSelectedConfig] = useState<TierConfig | null>(null)
  const [clientPrice, setClientPrice] = useState<number>(0)

  // Get available frequencies for selected tier/size
  const availableConfigs = useMemo(() => {
    return getAvailableFrequencies(tier, size)
  }, [tier, size])

  // Auto-select first available config when tier/size changes
  useMemo(() => {
    if (availableConfigs.length > 0 && !availableConfigs.find((c) => c === selectedConfig)) {
      setSelectedConfig(availableConfigs[0])
    }
  }, [availableConfigs, selectedConfig])

  // Calculate profit/margin
  const analysis = useMemo(() => {
    if (!selectedConfig) return null

    const laborCost = selectedConfig.hoursMonthly * LABOR_RATE
    const materialCost = calculateMaterialCost(size)
    const totalCost = laborCost + materialCost

    const revenue = clientPrice || 0
    const profit = revenue - totalCost
    const marginPercent = revenue > 0 ? (profit / revenue) * 100 : 0
    const markupPercent = totalCost > 0 ? ((revenue - totalCost) / totalCost) * 100 : 0

    // Suggested prices at different margins
    const suggestedPrices = {
      breakeven: totalCost,
      margin20: totalCost / 0.8,
      margin30: totalCost / 0.7,
      margin40: totalCost / 0.6,
    }

    return {
      laborCost,
      materialCost,
      totalCost,
      revenue,
      profit,
      marginPercent,
      markupPercent,
      suggestedPrices,
      isProfitable: profit > 0,
      isBreakeven: Math.abs(profit) < 1,
    }
  }, [selectedConfig, size, clientPrice])

  const getProfitIcon = () => {
    if (!analysis) return <Minus className="w-5 h-5 text-muted-foreground" />
    if (analysis.isBreakeven) return <Minus className="w-5 h-5 text-amber-400" />
    if (analysis.isProfitable) return <TrendingUp className="w-5 h-5 text-emerald-400" />
    return <TrendingDown className="w-5 h-5 text-red-400" />
  }

  const getProfitColor = () => {
    if (!analysis) return "text-muted-foreground"
    if (analysis.isBreakeven) return "text-amber-400"
    if (analysis.isProfitable) return "text-emerald-400"
    return "text-red-400"
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <BarChart3 className="w-5 h-5 text-primary" />
          Profit Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quick Selection */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Service Tier</Label>
            <Select value={tier} onValueChange={(v) => setTier(v as TierType)}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(TIER_INFO).map(([key, info]) => (
                  <SelectItem key={key} value={key}>
                    {info.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Facility Size</Label>
            <Select value={size} onValueChange={(v) => setSize(v as FacilitySize)}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(SIZE_INFO).map(([key, info]) => (
                  <SelectItem key={key} value={key}>
                    {info.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Frequency Selection */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Frequency</Label>
          <div className="flex flex-wrap gap-2">
            {availableConfigs.map((config) => (
              <button
                key={config.frequency}
                onClick={() => setSelectedConfig(config)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  selectedConfig?.frequency === config.frequency
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-secondary text-muted-foreground hover:border-primary/50"
                }`}
              >
                {config.frequencyLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Client Price Input */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Client Monthly Price ($)</Label>
          <Input
            type="number"
            value={clientPrice || ""}
            onChange={(e) => setClientPrice(Number.parseFloat(e.target.value) || 0)}
            placeholder="Enter what you charge the client"
            className="bg-secondary border-border"
          />
        </div>

        {analysis && (
          <>
            {/* Cost Summary */}
            <div className="bg-secondary/30 rounded-lg p-4 space-y-2">
              <h4 className="text-sm font-medium text-foreground mb-3">Your Costs</h4>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Labor</span>
                <span className="text-foreground">${analysis.laborCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Materials</span>
                <span className="text-foreground">${analysis.materialCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-medium pt-2 border-t border-border">
                <span className="text-foreground">Total Cost</span>
                <span className="text-foreground">${analysis.totalCost.toFixed(2)}</span>
              </div>
            </div>

            {/* Profit Result */}
            {clientPrice > 0 && (
              <div
                className={`rounded-lg p-4 border ${analysis.isProfitable ? "border-emerald-500/30 bg-emerald-500/10" : analysis.isBreakeven ? "border-amber-500/30 bg-amber-500/10" : "border-red-500/30 bg-red-500/10"}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getProfitIcon()}
                    <span className="font-medium text-foreground">
                      {analysis.isProfitable ? "Profitable" : analysis.isBreakeven ? "Break Even" : "Loss"}
                    </span>
                  </div>
                  <span className={`text-2xl font-bold ${getProfitColor()}`}>
                    {analysis.profit >= 0 ? "+" : ""}${analysis.profit.toFixed(2)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Margin</span>
                    <div className={`font-semibold ${getProfitColor()}`}>{analysis.marginPercent.toFixed(1)}%</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Markup</span>
                    <div className={`font-semibold ${getProfitColor()}`}>{analysis.markupPercent.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            )}

            {/* Suggested Prices */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Target className="w-4 h-4 text-primary" />
                Suggested Pricing
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-muted-foreground text-xs">Break Even</div>
                  <div className="font-semibold text-foreground">${analysis.suggestedPrices.breakeven.toFixed(2)}</div>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-muted-foreground text-xs">20% Margin</div>
                  <div className="font-semibold text-blue-400">${analysis.suggestedPrices.margin20.toFixed(2)}</div>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-muted-foreground text-xs">30% Margin</div>
                  <div className="font-semibold text-emerald-400">${analysis.suggestedPrices.margin30.toFixed(2)}</div>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-muted-foreground text-xs">40% Margin</div>
                  <div className="font-semibold text-amber-400">${analysis.suggestedPrices.margin40.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
