"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  Users,
  Clock,
  DollarSign,
  Package,
  Truck,
  Building2,
  Plus,
  Trash2,
  FileText,
  RefreshCcw,
  TrendingUp,
} from "lucide-react"
import { TIER_INFO, LABOR_RATE, type TierType } from "@/lib/cleaning-data"
import { useI18n } from "@/lib/i18n-context"

interface MaterialItem {
  id: string
  name: string
  quantity: number
  unitCost: number
}

interface ServicePrepData {
  // Basic info
  clientName: string
  facilityName: string
  tier: TierType

  // Facility details (editable)
  sqFt: number

  // Schedule (editable)
  frequency: string
  daysPerWeek: number

  // Manpower (editable)
  staffCount: number
  hoursPerVisit: number

  // Materials (editable list)
  materials: MaterialItem[]

  // Overhead (editable)
  transportCost: number
  equipmentCost: number
  insuranceCost: number
  adminPercent: number

  // Pricing
  chargeToClient: number
}

const DEFAULT_MATERIALS: MaterialItem[] = [
  { id: "1", name: "All-Purpose Cleaner", quantity: 2, unitCost: 8.5 },
  { id: "2", name: "Glass Cleaner", quantity: 1, unitCost: 6.75 },
  { id: "3", name: "Disinfectant", quantity: 2, unitCost: 12.0 },
  { id: "4", name: "Trash Bags (box)", quantity: 1, unitCost: 18.0 },
  { id: "5", name: "Paper Towels (case)", quantity: 1, unitCost: 24.0 },
  { id: "6", name: "Microfiber Cloths", quantity: 4, unitCost: 3.5 },
]

export function ServicePrepCalculator() {
  const [data, setData] = useState<ServicePrepData>({
    clientName: "",
    facilityName: "",
    tier: "essential",
    sqFt: 3000,
    frequency: "daily",
    daysPerWeek: 5,
    staffCount: 1,
    hoursPerVisit: 2,
    materials: DEFAULT_MATERIALS,
    transportCost: 0,
    equipmentCost: 0,
    insuranceCost: 0,
    adminPercent: 10,
    chargeToClient: 0,
  })

  const { t } = useI18n()

  const [newMaterial, setNewMaterial] = useState({ name: "", quantity: 1, unitCost: 0 })

  // Update a single field
  const updateField = <K extends keyof ServicePrepData>(field: K, value: ServicePrepData[K]) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  // Add material
  const addMaterial = () => {
    if (newMaterial.name && newMaterial.unitCost > 0) {
      const item: MaterialItem = {
        id: Date.now().toString(),
        ...newMaterial,
      }
      updateField("materials", [...data.materials, item])
      setNewMaterial({ name: "", quantity: 1, unitCost: 0 })
    }
  }

  // Remove material
  const removeMaterial = (id: string) => {
    updateField(
      "materials",
      data.materials.filter((m) => m.id !== id),
    )
  }

  // Update material
  const updateMaterial = (id: string, field: keyof MaterialItem, value: string | number) => {
    updateField(
      "materials",
      data.materials.map((m) => (m.id === id ? { ...m, [field]: value } : m)),
    )
  }

  // Reset to defaults
  const resetDefaults = () => {
    setData({
      clientName: "",
      facilityName: "",
      tier: "essential",
      sqFt: 3000,
      frequency: "daily",
      daysPerWeek: 5,
      staffCount: 1,
      hoursPerVisit: 2,
      materials: DEFAULT_MATERIALS,
      transportCost: 0,
      equipmentCost: 0,
      insuranceCost: 0,
      adminPercent: 10,
      chargeToClient: 0,
    })
  }

  // Calculate all costs in real-time
  const calculations = useMemo(() => {
    // Hours calculations
    const hoursPerWeek = data.hoursPerVisit * data.daysPerWeek * data.staffCount
    const hoursMonthly = hoursPerWeek * 4.3 // avg weeks per month

    // Labor cost
    const laborCost = hoursMonthly * LABOR_RATE

    // Materials cost (sum all items)
    const materialsCost = data.materials.reduce((sum, m) => sum + m.quantity * m.unitCost, 0)

    // Overhead
    const overheadSubtotal = data.transportCost + data.equipmentCost + data.insuranceCost

    // Subtotal before admin
    const subtotal = laborCost + materialsCost + overheadSubtotal

    // Admin overhead
    const adminCost = subtotal * (data.adminPercent / 100)

    // Total cost
    const totalCost = subtotal + adminCost

    // Profit analysis
    const profit = data.chargeToClient - totalCost
    const margin = data.chargeToClient > 0 ? (profit / data.chargeToClient) * 100 : 0
    const markup = totalCost > 0 ? ((data.chargeToClient - totalCost) / totalCost) * 100 : 0

    // Break-even and suggested pricing
    const breakEven = totalCost
    const suggested30 = totalCost / 0.7 // 30% margin
    const suggested40 = totalCost / 0.6 // 40% margin

    return {
      hoursPerWeek,
      hoursMonthly,
      laborCost,
      materialsCost,
      overheadSubtotal,
      adminCost,
      totalCost,
      profit,
      margin,
      markup,
      breakEven,
      suggested30,
      suggested40,
      targetRevenue80: totalCost * 1.8,
      targetRevenue100: totalCost * 2.0,
    }
  }, [data])

  const applyStrategy = () => {
    updateField("chargeToClient", Math.ceil(calculations.targetRevenue100))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            {t("spTitle")}
          </h2>
          <p className="text-sm text-muted-foreground">{t("spSubtitle")}</p>
        </div>
        <Button variant="outline" size="sm" onClick={resetDefaults} className="gap-2 bg-transparent">
          <RefreshCcw className="w-4 h-4" />
          {t("reset")}
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Inputs */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {t("clientFacilityInfo")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("clientName")}</Label>
                  <Input
                    value={data.clientName}
                    onChange={(e) => updateField("clientName", e.target.value)}
                    placeholder="ABC Company"
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("facilityLocation")}</Label>
                  <Input
                    value={data.facilityName}
                    onChange={(e) => updateField("facilityName", e.target.value)}
                    placeholder="Main Office"
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("serviceTier")}</Label>
                  <Select value={data.tier} onValueChange={(v) => updateField("tier", v as TierType)}>
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(TIER_INFO).map(([key, info]) => (
                        <SelectItem key={key} value={key}>
                          <span className={`px-2 py-0.5 rounded text-xs ${info.color}`}>{info.label}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("facilitySize")}</Label>
                  <Input
                    type="number"
                    value={data.sqFt}
                    onChange={(e) => updateField("sqFt", Number(e.target.value))}
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Schedule & Manpower */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" />
                {t("scheduleManpower")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("frequency")}</Label>
                  <Select
                    value={data.frequency}
                    onValueChange={(v) => {
                      updateField("frequency", v)
                      // Auto-adjust days based on frequency
                      const daysMap: Record<string, number> = {
                        daily: 5,
                        weekly: 1,
                        biweekly: 0.5,
                        monthly: 0.25,
                      }
                      updateField("daysPerWeek", daysMap[v] || 5)
                    }}
                  >
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">{t("freqDaily")}</SelectItem>
                      <SelectItem value="weekly">{t("freqWeekly")}</SelectItem>
                      <SelectItem value="biweekly">{t("freqBiWeekly")}</SelectItem>
                      <SelectItem value="monthly">{t("freqMonthly")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("visitsWeek")}</Label>
                  <Input
                    type="number"
                    min={0.25}
                    max={7}
                    step={0.25}
                    value={data.daysPerWeek}
                    onChange={(e) => updateField("daysPerWeek", Number(e.target.value))}
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("staffCount")}</Label>
                  <Input
                    type="number"
                    min={1}
                    value={data.staffCount}
                    onChange={(e) => updateField("staffCount", Number(e.target.value))}
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("hoursVisit")}</Label>
                  <Input
                    type="number"
                    step={0.5}
                    min={0.5}
                    value={data.hoursPerVisit}
                    onChange={(e) => updateField("hoursPerVisit", Number(e.target.value))}
                    className="bg-secondary border-border"
                  />
                </div>
              </div>

              {/* Real-time hours preview */}
              <div className="mt-4 p-3 bg-secondary/50 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{t("calculatedHours")}</span>
                </div>
                <div className="flex gap-4 text-sm">
                  <span>
                    <span className="text-muted-foreground">{t("weekly")}:</span>{" "}
                    <span className="text-foreground font-medium">{calculations.hoursPerWeek.toFixed(1)} hrs</span>
                  </span>
                  <span>
                    <span className="text-muted-foreground">{t("monthly")}:</span>{" "}
                    <span className="text-foreground font-medium">{calculations.hoursMonthly.toFixed(1)} hrs</span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Materials */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Package className="w-4 h-4" />
                {t("materialsSupplies")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Materials list */}
              <div className="space-y-2 max-h-[240px] overflow-y-auto pr-2">
                {data.materials.map((item) => (
                  <div key={item.id} className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg">
                    <Input
                      value={item.name}
                      onChange={(e) => updateMaterial(item.id, "name", e.target.value)}
                      className="flex-1 bg-secondary border-border h-8 text-sm"
                      placeholder={t("itemName")}
                    />
                    <Input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => updateMaterial(item.id, "quantity", Number(e.target.value))}
                      className="w-16 bg-secondary border-border h-8 text-sm text-center"
                    />
                    <span className="text-xs text-muted-foreground">x</span>
                    <div className="relative">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                      <Input
                        type="number"
                        step={0.01}
                        min={0}
                        value={item.unitCost}
                        onChange={(e) => updateMaterial(item.id, "unitCost", Number(e.target.value))}
                        className="w-20 bg-secondary border-border h-8 text-sm pl-5"
                      />
                    </div>
                    <span className="text-sm text-foreground font-medium w-16 text-right">
                      ${(item.quantity * item.unitCost).toFixed(2)}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeMaterial(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Add new material */}
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <Input
                  value={newMaterial.name}
                  onChange={(e) => setNewMaterial((prev) => ({ ...prev, name: e.target.value }))}
                  className="flex-1 bg-secondary border-border h-8 text-sm"
                  placeholder={t("addItem")}
                />
                <Input
                  type="number"
                  min={1}
                  value={newMaterial.quantity}
                  onChange={(e) => setNewMaterial((prev) => ({ ...prev, quantity: Number(e.target.value) }))}
                  className="w-16 bg-secondary border-border h-8 text-sm text-center"
                />
                <span className="text-xs text-muted-foreground">x</span>
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <Input
                    type="number"
                    step={0.01}
                    min={0}
                    value={newMaterial.unitCost || ""}
                    onChange={(e) => setNewMaterial((prev) => ({ ...prev, unitCost: Number(e.target.value) }))}
                    className="w-20 bg-secondary border-border h-8 text-sm pl-5"
                    placeholder="0.00"
                  />
                </div>
                <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent" onClick={addMaterial}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {/* Materials total */}
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-muted-foreground">{t("materialsTotal")}</span>
                <span className="text-lg font-bold text-emerald-400">${calculations.materialsCost.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          {/* Overhead */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Truck className="w-4 h-4" />
                {t("additionalOverhead")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("transportFuel")}</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      type="number"
                      value={data.transportCost || ""}
                      onChange={(e) => updateField("transportCost", Number(e.target.value))}
                      placeholder="0"
                      className="bg-secondary border-border pl-7"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("equipment")}</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      type="number"
                      value={data.equipmentCost || ""}
                      onChange={(e) => updateField("equipmentCost", Number(e.target.value))}
                      placeholder="0"
                      className="bg-secondary border-border pl-7"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("insurance")}</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      type="number"
                      value={data.insuranceCost || ""}
                      onChange={(e) => updateField("insuranceCost", Number(e.target.value))}
                      placeholder="0"
                      className="bg-secondary border-border pl-7"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("adminOverhead")}</Label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={data.adminPercent || ""}
                      onChange={(e) => updateField("adminPercent", Number(e.target.value))}
                      placeholder="10"
                      className="bg-secondary border-border pr-7"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Results */}
        <div className="space-y-6">
          <div className="space-y-4">
            {/* Staff & Labor Cost */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  {t("staff")} {t("costSummary").replace("Summary", "Cost")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end mb-2">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-foreground">${calculations.laborCost.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">{t("monthlyLabor")}</div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-sm font-medium">{data.staffCount} {t("staff")}</div>
                    <div className="text-xs text-muted-foreground">{calculations.hoursMonthly.toFixed(0)} {t("hrsMo")}</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                  {t("basedOnTierSqFt", { tier: data.tier, sqFt: (data.sqFt / 1000).toFixed(1) })}
                </div>
              </CardContent>
            </Card>

            {/* Material Cost */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Package className="w-4 h-4 text-purple-400" />
                  {t("materials")} {t("costSummary").replace("Summary", "Cost")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-foreground">${calculations.materialsCost.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">{t("monthlySupplies")}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{t("itemsCount", { count: data.materials.length.toString() })}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overhead & Admin (Hidden/Collapsed or Small) - Keeping it visible as it affects profit */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-orange-400" />
                  {t("overhead")} & {t("admin")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("transportEquip")}</span>
                    <span className="font-medium">${calculations.overheadSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("adminPercentage", { percentage: data.adminPercent.toString() })}</span>
                    <span className="font-medium">${calculations.adminCost.toFixed(2)}</span>
                  </div>
                  <div className="pt-2 border-t border-border flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{t("totalOverhead")}</span>
                    <span className="font-bold">${(calculations.overheadSubtotal + calculations.adminCost).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Budget / Revenue */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  {t("budgetRevenue")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">{t("chargeToClient")}</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      type="number"
                      value={data.chargeToClient || ""}
                      onChange={(e) => updateField("chargeToClient", Number(e.target.value))}
                      placeholder={t("enterPrice")}
                      className="bg-secondary border-border pl-7 text-lg h-12 font-bold"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm pt-2 border-t border-border">
                  <span className="text-muted-foreground">{t("totalCostToCover")}</span>
                  <span className="font-bold text-red-400">-${calculations.totalCost.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Profit Amount */}
            <Card className={`bg-card border-border ${data.chargeToClient > 0 ? (calculations.profit >= 0 ? "border-emerald-500/50" : "border-red-500/50") : ""}`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  {t("profitAnalysis")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className={`text-3xl font-bold ${calculations.profit >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                        ${calculations.profit.toFixed(2)}
                      </div>
                      <div className="text-xs text-muted-foreground">{t("netProfit")}</div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className={`text-sm font-bold ${calculations.margin >= 20 ? "text-emerald-400" : calculations.margin >= 0 ? "text-amber-400" : "text-red-400"}`}>
                        {calculations.margin.toFixed(1)}% {t("margin")}
                      </div>
                      <div className="text-xs text-muted-foreground">{calculations.markup.toFixed(1)}% {t("markup")}</div>
                    </div>
                  </div>

                  {/* Suggested pricing */}
                  <div className="text-xs space-y-1 pt-3 border-t border-border">
                    <div className="text-muted-foreground mb-2">{t("recBusinessApproach").replace("Recommended Business Approach", "Suggested Pricing")}:</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-secondary/50 p-2 rounded text-center">
                        <div className="text-[10px] text-muted-foreground">Break-even</div>
                        <div className="font-medium">${calculations.breakEven.toFixed(0)}</div>
                      </div>
                      <div className="bg-secondary/50 p-2 rounded text-center">
                        <div className="text-[10px] text-muted-foreground">30%</div>
                        <div className="font-medium text-emerald-400">${calculations.suggested30.toFixed(0)}</div>
                      </div>
                      <div className="bg-secondary/50 p-2 rounded text-center">
                        <div className="text-[10px] text-muted-foreground">40%</div>
                        <div className="font-medium text-emerald-400">${calculations.suggested40.toFixed(0)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profit Strategy Module */}
          <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-transparent border-primary/20 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2 text-primary">
                <TrendingUp className="w-5 h-5" />
                {t("recBusinessApproach")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                {t("recApproachText")} <strong>80% - 100% {t("markupText")}</strong>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-background/50 p-3 rounded-lg border border-border">
                  <div className="text-xs text-muted-foreground mb-1">{t("conservativeTarget")}</div>
                  <div className="font-bold text-lg text-foreground">${calculations.targetRevenue80.toFixed(2)}</div>
                </div>
                <div className="bg-background/50 p-3 rounded-lg border border-border">
                  <div className="text-xs text-muted-foreground mb-1">{t("growthTarget")}</div>
                  <div className="font-bold text-lg text-emerald-500">${calculations.targetRevenue100.toFixed(2)}</div>
                </div>
              </div>

              {/* Strategic Insight */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-xs space-y-2">
                <div className="font-semibold text-blue-400 flex items-center gap-2">
                  <Building2 className="w-3 h-3" />
                  {t("strategicInsight")}
                </div>
                <p className="text-muted-foreground">
                  {data.tier === "essential" && calculations.targetRevenue100 > 3000 ? (
                    t("insightPremium")
                  ) : data.tier === "essential" ? (
                    t("insightVolume")
                  ) : (
                    t("insightTier", { tier: TIER_INFO[data.tier].label })
                  )}
                </p>
              </div>

              <Button
                onClick={applyStrategy}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                {t("applyStrategy")} (${Math.ceil(calculations.targetRevenue100)})
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
