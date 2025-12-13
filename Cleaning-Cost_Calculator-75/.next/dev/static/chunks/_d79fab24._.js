(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function I18nProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    const t = (key, params)=>{
        let text = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language][key] || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"]["en"][key] || key;
        if (params) {
            Object.entries(params).forEach(([paramKey, paramValue])=>{
                text = text.replace(`{${paramKey}}`, paramValue);
            });
        }
        return text;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
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
_s(I18nProvider, "JgNS4s3wc06/6u6z+Ak7Ai5ELN8=");
_c = I18nProvider;
function useI18n() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (context === undefined) {
        throw new Error("useI18n must be used within a I18nProvider");
    }
    return context;
}
_s1(useI18n, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "I18nProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-context.tsx [app-client] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/components/providers.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_d79fab24._.js.map