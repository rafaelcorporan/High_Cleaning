"use client"

import { Header } from "@/components/header"
import { DashboardStats } from "@/components/dashboard-stats"
import { CostCalculator } from "@/components/cost-calculator"
import { TierDataTable } from "@/components/tier-data-table"
import { ProfitAnalysis } from "@/components/profit-analysis"
import { ServicePrepCalculator } from "@/components/service-prep-calculator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, FileText, Table2 } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function Home() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <DashboardStats />

        <Tabs defaultValue="service-prep" className="w-full">
          <TabsList className="bg-secondary border border-border mb-6">
            <TabsTrigger value="service-prep" className="gap-2 data-[state=active]:bg-primary/10">
              <FileText className="w-4 h-4" />
              {t("tabServicePrep")}
            </TabsTrigger>
            <TabsTrigger value="quick-calc" className="gap-2 data-[state=active]:bg-primary/10">
              <Calculator className="w-4 h-4" />
              {t("tabQuickCalc")}
            </TabsTrigger>
            <TabsTrigger value="data-table" className="gap-2 data-[state=active]:bg-primary/10">
              <Table2 className="w-4 h-4" />
              {t("tabTierData")}
            </TabsTrigger>
          </TabsList>

          {/* Service Prep - Full editable calculator */}
          <TabsContent value="service-prep">
            <ServicePrepCalculator />
          </TabsContent>

          {/* Quick Calculator - Original preset-based calculator */}
          <TabsContent value="quick-calc">
            <div className="grid lg:grid-cols-2 gap-8">
              <CostCalculator />
              <ProfitAnalysis />
            </div>
          </TabsContent>

          {/* Data Table - Reference data */}
          <TabsContent value="data-table">
            <TierDataTable />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
