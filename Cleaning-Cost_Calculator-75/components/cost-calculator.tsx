"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Calculator, Users, Clock, DollarSign, Package } from "lucide-react"
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

export function CostCalculator() {
  const [tier, setTier] = useState<TierType>("essential")
  const [size, setSize] = useState<FacilitySize>("small")
  const [selectedConfig, setSelectedConfig] = useState<TierConfig | null>(null)

  // Optional overhead fields
  const [showOverhead, setShowOverhead] = useState(false)
  const [overhead, setOverhead] = useState({
    transport: 0,
    equipment: 0,
    insurance: 0,
    adminPercent: 0,
  })

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

  // Calculate all costs
  const calculations = useMemo(() => {
    if (!selectedConfig) return null

    const laborCost = selectedConfig.hoursMonthly * LABOR_RATE
    const materialCost = calculateMaterialCost(size)

    // Optional overhead
    const transportCost = overhead.transport || 0
    const equipmentCost = overhead.equipment || 0
    const insuranceCost = overhead.insurance || 0

    const subtotal = laborCost + materialCost + transportCost + equipmentCost + insuranceCost
    const adminCost = subtotal * (overhead.adminPercent / 100)

    const totalCost = subtotal + adminCost

    return {
      labor: laborCost,
      materials: materialCost,
      transport: transportCost,
      equipment: equipmentCost,
      insurance: insuranceCost,
      admin: adminCost,
      total: totalCost,
      hoursMonthly: selectedConfig.hoursMonthly,
      staff: selectedConfig.staff,
      avgHoursPerCycle: selectedConfig.avgHoursPerCycle,
    }
  }, [selectedConfig, size, overhead])

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calculator className="w-5 h-5 text-primary" />
          Cost Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Tier Selection */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Service Tier</Label>
          <Select value={tier} onValueChange={(v) => setTier(v as TierType)}>
            <SelectTrigger className="bg-secondary border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(TIER_INFO).map(([key, info]) => (
                <SelectItem key={key} value={key}>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-xs ${info.color}`}>{info.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">{TIER_INFO[tier].description}</p>
        </div>

        {/* Size Selection */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Facility Size</Label>
          <Select value={size} onValueChange={(v) => setSize(v as FacilitySize)}>
            <SelectTrigger className="bg-secondary border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(SIZE_INFO).map(([key, info]) => (
                <SelectItem key={key} value={key}>
                  {info.label} ({info.range})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Frequency Selection */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Frequency</Label>
          <div className="grid grid-cols-2 gap-2">
            {availableConfigs.map((config) => (
              <button
                key={config.frequency}
                onClick={() => setSelectedConfig(config)}
                className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                  selectedConfig?.frequency === config.frequency
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-secondary text-muted-foreground hover:border-primary/50"
                }`}
              >
                {config.frequencyLabel}
              </button>
            ))}
          </div>
          {availableConfigs.length === 0 && (
            <p className="text-xs text-destructive">No configurations available for this combination</p>
          )}
        </div>

        {/* Optional Overhead Section */}
        <Collapsible open={showOverhead} onOpenChange={setShowOverhead}>
          <CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full">
            <ChevronDown className={`w-4 h-4 transition-transform ${showOverhead ? "rotate-180" : ""}`} />
            Additional Overhead (Optional)
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Transport/Fuel ($)</Label>
                <Input
                  type="number"
                  value={overhead.transport || ""}
                  onChange={(e) =>
                    setOverhead((prev) => ({ ...prev, transport: Number.parseFloat(e.target.value) || 0 }))
                  }
                  placeholder="0"
                  className="bg-secondary border-border h-9"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Equipment ($)</Label>
                <Input
                  type="number"
                  value={overhead.equipment || ""}
                  onChange={(e) =>
                    setOverhead((prev) => ({ ...prev, equipment: Number.parseFloat(e.target.value) || 0 }))
                  }
                  placeholder="0"
                  className="bg-secondary border-border h-9"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Insurance ($)</Label>
                <Input
                  type="number"
                  value={overhead.insurance || ""}
                  onChange={(e) =>
                    setOverhead((prev) => ({ ...prev, insurance: Number.parseFloat(e.target.value) || 0 }))
                  }
                  placeholder="0"
                  className="bg-secondary border-border h-9"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Admin Overhead (%)</Label>
                <Input
                  type="number"
                  value={overhead.adminPercent || ""}
                  onChange={(e) =>
                    setOverhead((prev) => ({ ...prev, adminPercent: Number.parseFloat(e.target.value) || 0 }))
                  }
                  placeholder="0"
                  className="bg-secondary border-border h-9"
                />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Results */}
        {calculations && (
          <div className="pt-4 border-t border-border space-y-4">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-secondary/50 rounded-lg p-3 text-center">
                <Users className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-foreground">{calculations.staff}</div>
                <div className="text-xs text-muted-foreground">Staff</div>
              </div>
              <div className="bg-secondary/50 rounded-lg p-3 text-center">
                <Clock className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-foreground">{calculations.hoursMonthly.toFixed(1)}</div>
                <div className="text-xs text-muted-foreground">Hrs/Month</div>
              </div>
              <div className="bg-secondary/50 rounded-lg p-3 text-center">
                <Package className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-foreground">${calculations.materials.toFixed(0)}</div>
                <div className="text-xs text-muted-foreground">Materials</div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Labor ({calculations.hoursMonthly.toFixed(1)} hrs x ${LABOR_RATE})
                </span>
                <span className="text-foreground font-medium">${calculations.labor.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Materials (NJ-Compliant)</span>
                <span className="text-foreground font-medium">${calculations.materials.toFixed(2)}</span>
              </div>
              {calculations.transport > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transport/Fuel</span>
                  <span className="text-foreground font-medium">${calculations.transport.toFixed(2)}</span>
                </div>
              )}
              {calculations.equipment > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Equipment</span>
                  <span className="text-foreground font-medium">${calculations.equipment.toFixed(2)}</span>
                </div>
              )}
              {calculations.insurance > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Insurance</span>
                  <span className="text-foreground font-medium">${calculations.insurance.toFixed(2)}</span>
                </div>
              )}
              {calculations.admin > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Admin Overhead ({overhead.adminPercent}%)</span>
                  <span className="text-foreground font-medium">${calculations.admin.toFixed(2)}</span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="pt-3 border-t border-border">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold text-foreground">Total Monthly Cost</span>
                </div>
                <span className="text-2xl font-bold text-emerald-400">${calculations.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
