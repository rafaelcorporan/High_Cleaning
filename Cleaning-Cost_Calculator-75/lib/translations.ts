export type Language = "en" | "es"

export const translations = {
    en: {
        // Header
        appName: "High Cleaning",
        appSubtitle: "Internal Cost Calculator",
        opsDashboard: "Operations Dashboard",

        // Tabs
        tabServicePrep: "Service Prep",
        tabQuickCalc: "Quick Calculator",
        tabTierData: "Tier Data",

        // Service Prep Calculator
        spTitle: "Service Prep Calculator",
        spSubtitle: "Enter custom values to calculate exact service costs",
        reset: "Reset",

        // Client & Facility Info
        clientFacilityInfo: "Client & Facility Info",
        clientName: "Client Name",
        facilityLocation: "Facility/Location",
        serviceTier: "Service Tier",
        facilitySize: "Facility Size (sq ft)",

        // Schedule & Manpower
        scheduleManpower: "Schedule & Manpower",
        frequency: "Frequency",
        visitsWeek: "Visits/Week",
        staffCount: "Staff Count",
        hoursVisit: "Hours/Visit",
        calculatedHours: "Calculated Hours:",
        weekly: "Weekly",
        monthly: "Monthly",

        // Materials
        materialsSupplies: "Materials & Supplies (Monthly)",
        itemName: "Item name",
        addItem: "Add new item...",
        materialsTotal: "Materials Total (Monthly)",

        // Overhead
        additionalOverhead: "Additional Overhead (Monthly)",
        transportFuel: "Transport/Fuel",
        equipment: "Equipment",
        insurance: "Insurance",
        adminOverhead: "Admin Overhead",

        // Results / Cost Summary
        costSummary: "Cost Summary",
        staff: "Staff",
        hrsMo: "Hrs/Mo",
        sqFt: "Sq Ft",
        labor: "Labor",
        materials: "Materials",
        overhead: "Overhead",
        admin: "Admin",
        totalMonthlyCost: "Total Monthly Cost",
        monthlyLabor: "Monthly Labor",
        basedOnTierSqFt: "Based on {tier} tier & {sqFt}k sq ft",
        monthlySupplies: "Monthly Supplies",
        itemsCount: "{count} Items",
        transportEquip: "Transport/Equip",
        adminPercentage: "Admin ({percentage}%)",
        totalOverhead: "Total Overhead",

        // Profit Analysis
        budgetRevenue: "Budget / Revenue",
        chargeToClient: "Charge to Client (Monthly)",
        enterPrice: "Enter price...",
        totalCostToCover: "Total Cost to Cover",
        profitAnalysis: "Profit Analysis",
        netProfit: "Net Profit",
        margin: "Margin",
        markup: "Markup",
        enterChargeAmount: "Enter a charge amount to see profit analysis",

        // Profit Strategy
        recBusinessApproach: "Recommended Business Approach",
        recApproachText: "To build a sustainable, high-growth business, we recommend targeting a",
        markupText: "markup on your total costs.",
        conservativeTarget: "Conservative Target (80%)",
        growthTarget: "Growth Target (100%)",
        strategicInsight: "Strategic Insight",
        applyStrategy: "Apply 100% Profit Strategy",

        // Insights
        insightPremium: "At this price point ($3k+), clients expect premium service. Consider upgrading to the 'Hygiene+' or 'Executive' tier to justify this 100% markup.",
        insightVolume: "The 'Essential' tier is great for volume, but ensure your efficiency is high to maintain this margin.",
        insightTier: "The '{tier}' tier justifies premium pricing. Ensure your marketing highlights the extra value (sanitization/detailing) to lock in this rate.",

        // Tiers
        tierEssential: "Essential",
        tierHygiene: "Hygiene+",
        tierExecutive: "Executive",
        tierFacility: "Facility",

        // Frequencies
        freqDaily: "Daily",
        freqWeekly: "Weekly",
        freqBiWeekly: "Bi-Weekly",
        freqMonthly: "Monthly",

        // Dashboard Stats
        laborRate: "Labor Rate",
        fixedRate: "Fixed rate",
        serviceConfigs: "Service Configs",
        tierCombinations: "Tier combinations",
        avgMonthlyHours: "Avg Monthly Hours",
        perConfiguration: "Per configuration",
        avgStaffRequired: "Avg Staff Required",
        perJob: "Per job",

        // Additional UI Elements
        quantity: "Qty",
        unitCost: "Unit Cost",
        total: "Total",
        breakEven: "Break-even",
        suggestedPricing: "Suggested Pricing",
    },
    es: {
        // Header
        appName: "High Cleaning",
        appSubtitle: "Calculadora de Costos Internos",
        opsDashboard: "Panel de Operaciones",

        // Tabs
        tabServicePrep: "Prep. de Servicio",
        tabQuickCalc: "Calculadora Rápida",
        tabTierData: "Datos de Nivel",

        // Service Prep Calculator
        spTitle: "Calculadora de Prep. de Servicio",
        spSubtitle: "Ingrese valores personalizados para calcular costos exactos",
        reset: "Reiniciar",

        // Client & Facility Info
        clientFacilityInfo: "Info de Cliente e Instalación",
        clientName: "Nombre del Cliente",
        facilityLocation: "Ubicación/Instalación",
        serviceTier: "Nivel de Servicio",
        facilitySize: "Tamaño (pies cdros)",

        // Schedule & Manpower
        scheduleManpower: "Horario y Personal",
        frequency: "Frecuencia",
        visitsWeek: "Visitas/Semana",
        staffCount: "Personal",
        hoursVisit: "Horas/Visita",
        calculatedHours: "Horas Calculadas:",
        weekly: "Semanal",
        monthly: "Mensual",

        // Materials
        materialsSupplies: "Materiales y Suministros (Mensual)",
        itemName: "Nombre del artículo",
        addItem: "Agregar nuevo...",
        materialsTotal: "Total Materiales (Mensual)",

        // Overhead
        additionalOverhead: "Gastos Generales Adicionales (Mensual)",
        transportFuel: "Transporte/Combustible",
        equipment: "Equipo",
        insurance: "Seguro",
        adminOverhead: "Gastos Admin",

        // Results / Cost Summary
        costSummary: "Resumen de Costos",
        staff: "Personal",
        hrsMo: "Hrs/Mes",
        sqFt: "Pies²",
        labor: "Mano de Obra",
        materials: "Materiales",
        overhead: "Gastos Gen.",
        admin: "Admin",
        totalMonthlyCost: "Costo Mensual Total",
        monthlyLabor: "Mano de Obra Mensual",
        basedOnTierSqFt: "Basado en nivel {tier} y {sqFt}k pies²",
        monthlySupplies: "Suministros Mensuales",
        itemsCount: "{count} Artículos",
        transportEquip: "Transporte/Equipo",
        adminPercentage: "Admin ({percentage}%)",
        totalOverhead: "Gastos Generales Totales",

        // Profit Analysis
        budgetRevenue: "Presupuesto / Ingresos",
        chargeToClient: "Cobro al Cliente (Mensual)",
        enterPrice: "Ingrese precio...",
        totalCostToCover: "Costo Total a Cubrir",
        profitAnalysis: "Análisis de Beneficios",
        netProfit: "Beneficio Neto",
        margin: "Margen",
        markup: "Sobreprecio",
        enterChargeAmount: "Ingrese un monto de cobro para ver el análisis",

        // Profit Strategy
        recBusinessApproach: "Enfoque de Negocio Recomendado",
        recApproachText: "Para construir un negocio sostenible y de alto crecimiento, recomendamos apuntar a un",
        markupText: "de sobreprecio sobre sus costos totales.",
        conservativeTarget: "Objetivo Conservador (80%)",
        growthTarget: "Objetivo de Crecimiento (100%)",
        strategicInsight: "Perspectiva Estratégica",
        applyStrategy: "Aplicar Estrategia 100%",

        // Insights
        insightPremium: "A este precio ($3k+), los clientes esperan un servicio premium. Considere actualizar al nivel 'Hygiene+' o 'Executive' para justificar este 100% de sobreprecio.",
        insightVolume: "El nivel 'Essential' es excelente para volumen, pero asegúrese de que su eficiencia sea alta para mantener este margen.",
        insightTier: "El nivel '{tier}' justifica precios premium. Asegúrese de que su marketing destaque el valor extra (sanitización/detallado) para asegurar esta tarifa.",

        // Tiers
        tierEssential: "Esencial",
        tierHygiene: "Higiene+",
        tierExecutive: "Ejecutivo",
        tierFacility: "Instalación",

        // Frequencies
        freqDaily: "Diario",
        freqWeekly: "Semanal",
        freqBiWeekly: "Quincenal",
        freqMonthly: "Mensual",

        // Dashboard Stats
        laborRate: "TARIFA LABORAL",
        fixedRate: "Tarifa fija",
        serviceConfigs: "CONFIGURACIONES DE SERVICIO",
        tierCombinations: "Combinaciones de nivel",
        avgMonthlyHours: "HORAS MENSUALES PROM",
        perConfiguration: "Por configuración",
        avgStaffRequired: "PERSONAL REQUERIDO PROM",
        perJob: "Por trabajo",

        // Additional UI Elements
        quantity: "Cant",
        unitCost: "Costo Unit",
        total: "Total",
        breakEven: "Equilibrio",
        suggestedPricing: "Precios Sugeridos",
    }
}
