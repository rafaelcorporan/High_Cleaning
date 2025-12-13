module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
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
        suggestedPricing: "Suggested Pricing"
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
        suggestedPricing: "Precios Sugeridos"
    }
};
}),
"[project]/lib/i18n-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function I18nProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    const t = (key, params)=>{
        let text = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language][key] || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"]["en"][key] || key;
        if (params) {
            Object.entries(params).forEach(([paramKey, paramValue])=>{
                text = text.replace(`{${paramKey}}`, paramValue);
            });
        }
        return text;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/i18n-context.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
function useI18n() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (context === undefined) {
        throw new Error("useI18n must be used within a I18nProvider");
    }
    return context;
}
}),
"[project]/components/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18nProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/components/providers.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07da36f1._.js.map