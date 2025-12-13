// High Cleaning NJ - Cost Data Configuration
// Based on operational data provided

export const LABOR_RATE = 25 // Fixed $25/hr

// Material costs per 5k sq ft base (monthly)
export const MATERIAL_COSTS = {
  affordable: 94.8,
  brand: 195.2,
}

// Facility size multipliers (based on 5k sq ft base)
export const SIZE_MULTIPLIERS = {
  small: 0.4, // 1-3k avg 2k sq ft
  medium: 1.1, // 3-8k avg 5.5k sq ft
  large: 2.8, // 8-20k avg 14k sq ft
}

export type TierType = "essential" | "hygiene" | "executive" | "facility"
export type FacilitySize = "small" | "medium" | "large"
export type Frequency = "daily" | "weekly" | "3x" | "4x" | "5x" | "24/7"

export interface TierConfig {
  tier: TierType
  tierLabel: string
  size: FacilitySize
  sizeLabel: string
  sqFtRange: string
  frequency: Frequency
  frequencyLabel: string
  staff: number
  avgHoursPerCycle: number
  hoursPerWeek: number
  hoursMonthly: number
  laborCostMonthly: number
}

// Complete tier data from the spreadsheet
export const TIER_DATA: TierConfig[] = [
  // Essential Tier
  {
    tier: "essential",
    tierLabel: "Essential",
    size: "small",
    sizeLabel: "Small",
    sqFtRange: "1-3k",
    frequency: "daily",
    frequencyLabel: "Daily",
    staff: 1,
    avgHoursPerCycle: 1.8,
    hoursPerWeek: 9.0,
    hoursMonthly: 38.7,
    laborCostMonthly: 967.5,
  },
  {
    tier: "essential",
    tierLabel: "Essential",
    size: "small",
    sizeLabel: "Small",
    sqFtRange: "1-3k",
    frequency: "weekly",
    frequencyLabel: "Weekly",
    staff: 1,
    avgHoursPerCycle: 3.2,
    hoursPerWeek: 3.2,
    hoursMonthly: 13.8,
    laborCostMonthly: 345,
  },
  {
    tier: "essential",
    tierLabel: "Essential",
    size: "medium",
    sizeLabel: "Medium",
    sqFtRange: "3-6k",
    frequency: "daily",
    frequencyLabel: "Daily",
    staff: 2,
    avgHoursPerCycle: 2.6,
    hoursPerWeek: 13.0,
    hoursMonthly: 55.9,
    laborCostMonthly: 1397.5,
  },
  {
    tier: "essential",
    tierLabel: "Essential",
    size: "medium",
    sizeLabel: "Medium",
    sqFtRange: "3-6k",
    frequency: "weekly",
    frequencyLabel: "Weekly",
    staff: 2,
    avgHoursPerCycle: 4.8,
    hoursPerWeek: 9.6,
    hoursMonthly: 41.3,
    laborCostMonthly: 1032.5,
  },
  {
    tier: "essential",
    tierLabel: "Essential",
    size: "large",
    sizeLabel: "Large",
    sqFtRange: "8-12k",
    frequency: "daily",
    frequencyLabel: "Daily",
    staff: 3,
    avgHoursPerCycle: 3.4,
    hoursPerWeek: 17.0,
    hoursMonthly: 73.1,
    laborCostMonthly: 1827.5,
  },
  {
    tier: "essential",
    tierLabel: "Essential",
    size: "large",
    sizeLabel: "Large",
    sqFtRange: "8-12k",
    frequency: "weekly",
    frequencyLabel: "Weekly",
    staff: 3,
    avgHoursPerCycle: 6.5,
    hoursPerWeek: 19.5,
    hoursMonthly: 83.9,
    laborCostMonthly: 2097.5,
  },

  // Hygiene+ Tier
  {
    tier: "hygiene",
    tierLabel: "Hygiene+",
    size: "small",
    sizeLabel: "Small",
    sqFtRange: "1-3k",
    frequency: "daily",
    frequencyLabel: "Daily",
    staff: 1,
    avgHoursPerCycle: 2.4,
    hoursPerWeek: 12.0,
    hoursMonthly: 51.6,
    laborCostMonthly: 1290,
  },
  {
    tier: "hygiene",
    tierLabel: "Hygiene+",
    size: "medium",
    sizeLabel: "Medium",
    sqFtRange: "3-6k",
    frequency: "daily",
    frequencyLabel: "Daily",
    staff: 2,
    avgHoursPerCycle: 3.5,
    hoursPerWeek: 17.5,
    hoursMonthly: 75.3,
    laborCostMonthly: 1882.5,
  },
  {
    tier: "hygiene",
    tierLabel: "Hygiene+",
    size: "large",
    sizeLabel: "Large",
    sqFtRange: "8-12k",
    frequency: "daily",
    frequencyLabel: "Daily",
    staff: 4,
    avgHoursPerCycle: 4.2,
    hoursPerWeek: 21.0,
    hoursMonthly: 90.3,
    laborCostMonthly: 2257.5,
  },

  // Executive Tier
  {
    tier: "executive",
    tierLabel: "Executive",
    size: "small",
    sizeLabel: "Small",
    sqFtRange: "1-3k",
    frequency: "3x",
    frequencyLabel: "3x/week",
    staff: 2,
    avgHoursPerCycle: 2.8,
    hoursPerWeek: 16.8,
    hoursMonthly: 72.2,
    laborCostMonthly: 1805,
  },
  {
    tier: "executive",
    tierLabel: "Executive",
    size: "medium",
    sizeLabel: "Medium",
    sqFtRange: "3-6k",
    frequency: "4x",
    frequencyLabel: "4x/week",
    staff: 3,
    avgHoursPerCycle: 3.8,
    hoursPerWeek: 22.8,
    hoursMonthly: 98.0,
    laborCostMonthly: 2450,
  },
  {
    tier: "executive",
    tierLabel: "Executive",
    size: "large",
    sizeLabel: "Large",
    sqFtRange: "8-12k",
    frequency: "5x",
    frequencyLabel: "5x/week",
    staff: 5,
    avgHoursPerCycle: 4.6,
    hoursPerWeek: 34.5,
    hoursMonthly: 148.4,
    laborCostMonthly: 3710,
  },

  // Facility Tier
  {
    tier: "facility",
    tierLabel: "Facility",
    size: "small",
    sizeLabel: "Small",
    sqFtRange: "1-3k",
    frequency: "5x",
    frequencyLabel: "5x/wk + on-call",
    staff: 2,
    avgHoursPerCycle: 3.6,
    hoursPerWeek: 28.0,
    hoursMonthly: 120.4,
    laborCostMonthly: 3010,
  },
  {
    tier: "facility",
    tierLabel: "Facility",
    size: "medium",
    sizeLabel: "Medium",
    sqFtRange: "3-8k",
    frequency: "5x",
    frequencyLabel: "5x/wk + 24/7",
    staff: 4,
    avgHoursPerCycle: 4.4,
    hoursPerWeek: 44.0,
    hoursMonthly: 189.2,
    laborCostMonthly: 4730,
  },
  {
    tier: "facility",
    tierLabel: "Facility",
    size: "large",
    sizeLabel: "Large",
    sqFtRange: "15k+",
    frequency: "24/7",
    frequencyLabel: "24/7 (3 shifts)",
    staff: 10,
    avgHoursPerCycle: 8.0,
    hoursPerWeek: 120.0,
    hoursMonthly: 516.0,
    laborCostMonthly: 12900,
  },
]

// Tier descriptions and features
export const TIER_INFO = {
  essential: {
    label: "Essential",
    description: "Standard office cleaning - vacuuming, trash, surfaces, restrooms",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  hygiene: {
    label: "Hygiene+",
    description: "Enhanced sanitization (+33% time) - disinfection protocols, high-touch surfaces",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  executive: {
    label: "Executive",
    description: "Premium detailing - polishing, organizing, meticulous attention",
    color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  facility: {
    label: "Facility",
    description: "Full facility management - on-call/24/7, multi-shift coverage",
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
}

export const SIZE_INFO = {
  small: { label: "Small", range: "1,000 - 3,000 sq ft" },
  medium: { label: "Medium", range: "3,000 - 8,000 sq ft" },
  large: { label: "Large", range: "8,000 - 20,000+ sq ft" },
}

// Calculate material cost based on facility size
export function calculateMaterialCost(size: FacilitySize): number {
  return MATERIAL_COSTS.affordable * SIZE_MULTIPLIERS[size]
}

// Get tier config by parameters
export function getTierConfig(tier: TierType, size: FacilitySize, frequency?: Frequency): TierConfig | undefined {
  return TIER_DATA.find((t) => t.tier === tier && t.size === size && (frequency ? t.frequency === frequency : true))
}

// Get all configs for a tier
export function getTierConfigs(tier: TierType): TierConfig[] {
  return TIER_DATA.filter((t) => t.tier === tier)
}

// Get available frequencies for a tier/size combo
export function getAvailableFrequencies(tier: TierType, size: FacilitySize): TierConfig[] {
  return TIER_DATA.filter((t) => t.tier === tier && t.size === size)
}
