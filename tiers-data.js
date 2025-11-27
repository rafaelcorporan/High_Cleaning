// ===================================
// CrystalCore Cleaning Systems
// Rationalized Service Tiers Data Structure
// NJ-Compliant Pricing | ISSA Standards | 4-Archetype System
// ===================================

/**
 * PRICING FORMULA:
 * Base Cost = $25/hr (NJ DOL 2025 standard) × Staff × Monthly Hours
 * Operational Overhead = 28%
 * Annual Contract Discount = 15%
 * Final Price = (Base Cost + Overhead) × 0.85
 * 
 * STAFFING STANDARDS (ISSA):
 * - Essential (Light Clean): 1 staff = 2,800-3,200 sq. ft./shift
 * - Premium (Deep Hygiene): 1 staff = 2,200-2,500 sq. ft./shift
 * - Executive (Detailing): 1 staff = 1,800 sq. ft./shift
 * - Facility Mgmt (24/7): 1 staff = 1,500 sq. ft./shift (rotation)
 */

const serviceTiers = {
    // ===================================
    // SMALL FACILITIES (1,000–3,000 sq. ft.)
    // ===================================
    small: [
        {
            tier: 1,
            name: "Essential Start",
            archetype: "essential",
            badge: "sterling-silver",
            price: 950,
            basePrice: 1120,
            staff: 1,
            monthlyHours: 80,
            hourlyRate: 25,
            size: "Small (1,000–3,000 sq. ft.)",
            sqFtRange: "1,000–3,000",
            cleaningIntensity: "Light Daily Clean",
            services: [
                "Daily/weekly OSHA-compliant baseline cleaning",
                "Trash removal and recycling",
                "Restroom sanitation",
                "Supply restocking"
            ],
            complianceCerts: ["OSHA 1910.141"],
            valueProposition: "OSHA-Compliant Baseline",
            popular: false
        },
        {
            tier: 2,
            name: "Hygiene+ Certified",
            archetype: "premium",
            badge: "emerald-green",
            price: 1200,
            basePrice: 1400,
            staff: 1,
            monthlyHours: 100,
            hourlyRate: 25,
            size: "Small (1,000–2,400 sq. ft.)",
            sqFtRange: "1,000–2,400",
            cleaningIntensity: "Deep Hygiene",
            services: [
                "All Essential services",
                "EPA List N disinfection protocols",
                "High-touch surface sanitization (bare-hand safe)",
                "Quarterly carpet care",
                "Kitchen/breakroom deep clean"
            ],
            complianceCerts: ["OSHA 1910.141", "EPA List N", "Green Seal"],
            valueProposition: "EPA-List N Disinfection • Bare-Hand Safe",
            popular: true
        },
        {
            tier: 3,
            name: "Executive Seamless",
            archetype: "executive",
            badge: "deep-navy",
            price: 1750,
            basePrice: 1960,
            staff: 2,
            monthlyHours: 140,
            hourlyRate: 25,
            size: "Small (1,000–1,800 sq. ft.)",
            sqFtRange: "1,000–1,800",
            cleaningIntensity: "Executive Detailing",
            services: [
                "All Hygiene+ services",
                "After-hours service (zero disruption)",
                "Floor waxing and polishing",
                "Boardroom detailing",
                "Concierge scheduling"
            ],
            complianceCerts: ["OSHA 1910.141", "EPA List N", "Green Seal"],
            valueProposition: "Zero-Disruption Service • After-Hours Guarantee",
            popular: false
        },
        {
            tier: 4,
            name: "Facility Command",
            archetype: "facility",
            badge: "crystal-gold",
            price: 2400,
            basePrice: 2688,
            staff: 2,
            monthlyHours: 192,
            hourlyRate: 25,
            size: "Small (1,801–3,000 sq. ft.)",
            sqFtRange: "1,801–3,000",
            cleaningIntensity: "24/7 Facility Management",
            services: [
                "All Executive services",
                "24/7 coverage with dedicated ops lead",
                "Emergency response protocols",
                "Custom KPI dashboards",
                "Specialized zone cleaning"
            ],
            complianceCerts: ["OSHA 1910.141", "EPA List N", "Green Seal", "ISSA Certified"],
            valueProposition: "24/7 Coverage • Dedicated Ops Lead",
            popular: false
        }
    ],

    // ===================================
    // MEDIUM FACILITIES (3,001–8,000 sq. ft.)
    // ===================================
    medium: [
        {
            tier: 5,
            name: "Essential Start",
            archetype: "essential",
            badge: "sterling-silver",
            price: 1900,
            basePrice: 2240,
            staff: 2,
            monthlyHours: 160,
            hourlyRate: 25,
            size: "Medium (3,001–6,000 sq. ft.)",
            sqFtRange: "3,001–6,000",
            cleaningIntensity: "Light Daily Clean",
            services: [
                "Daily/weekly OSHA-compliant baseline cleaning",
                "Trash removal and recycling",
                "Restroom sanitation",
                "Supply restocking",
                "Multi-zone coordination"
            ],
            complianceCerts: ["OSHA 1910.141"],
            valueProposition: "OSHA-Compliant Baseline",
            popular: false
        },
        {
            tier: 6,
            name: "Hygiene+ Certified",
            archetype: "premium",
            badge: "emerald-green",
            price: 2500,
            basePrice: 2800,
            staff: 2,
            monthlyHours: 200,
            hourlyRate: 25,
            size: "Medium (3,001–4,800 sq. ft.)",
            sqFtRange: "3,001–4,800",
            cleaningIntensity: "Deep Hygiene",
            services: [
                "All Essential services",
                "EPA List N disinfection protocols",
                "High-touch surface sanitization",
                "Quarterly carpet care",
                "Department-specific schedules",
                "Vent dusting and air quality support"
            ],
            complianceCerts: ["OSHA 1910.141", "EPA List N", "Green Seal"],
            valueProposition: "EPA-List N Disinfection • Bare-Hand Safe",
            popular: true
        },
        {
            tier: 7,
            name: "Executive Seamless",
            archetype: "executive",
            badge: "deep-navy",
            price: 3200,
            basePrice: 2940,
            staff: 3,
            monthlyHours: 210,
            hourlyRate: 25,
            size: "Medium (3,001–3,600 sq. ft.)",
            sqFtRange: "3,001–3,600",
            cleaningIntensity: "Executive Detailing",
            services: [
                "All Hygiene+ services",
                "After-hours service (zero disruption)",
                "Floor care: stripping, waxing, polishing",
                "Executive suite detailing",
                "Interior window cleaning (multi-floor)"
            ],
            complianceCerts: ["OSHA 1910.141", "EPA List N", "Green Seal"],
            valueProposition: "Zero-Disruption Service • After-Hours Guarantee",
            popular: false
        },
        {
            tier: 8,
            name: "Facility Command",
            archetype: "facility",
            badge: "crystal-gold",
            price: 4100,
            basePrice: 4480,
            staff: 4,
            monthlyHours: 320,
            hourlyRate: 25,
            size: "Medium (4,801–8,000 sq. ft.)",
            sqFtRange: "4,801–8,000",
            cleaningIntensity: "24/7 Facility Management",
            services: [
                "All Executive services",
                "24/7 availability for urgent needs",
                "Emergency cleaning services",
                "Specialized cleaning (server rooms, labs)",
                "Custom KPI dashboards"
            ],
            complianceCerts: ["OSHA 1910.141", "EPA List N", "Green Seal", "ISSA Certified"],
            valueProposition: "24/7 Coverage • Dedicated Ops Lead",
            popular: false
        }
    ],

    // ===================================
    // LARGE FACILITIES (8,001–20,000+ sq. ft.)
    // ===================================
    large: [
        {
            tier: 9,
            name: "Essential Start",
            archetype: "essential",
            badge: "sterling-silver",
            price: 3900,
            basePrice: 4480,
            staff: 4,
            monthlyHours: 320,
            hourlyRate: 25,
            size: "Large (8,001–12,000 sq. ft.)",
            sqFtRange: "8,001–12,000",
            cleaningIntensity: "Light Daily Clean",
            services: [
                "Daily/weekly OSHA-compliant baseline cleaning",
                "Trash removal and recycling",
                "Restroom sanitation",
                "Supply restocking",
                "Campus-wide coordination"
            ],
            complianceCerts: ["OSHA 1910.141"],
            valueProposition: "OSHA-Compliant Baseline",
            popular: false
        },
        {
            tier: 10,
            name: "Hygiene+ Certified",
            archetype: "premium",
            badge: "emerald-green",
            price: 5100,
            basePrice: 5600,
            staff: 4,
            monthlyHours: 400,
            hourlyRate: 25,
            size: "Large (8,001–9,600 sq. ft.)",
            sqFtRange: "8,001–9,600",
            cleaningIntensity: "Deep Hygiene",
            services: [
                "All Essential services",
                "EPA List N disinfection protocols",
                "High-touch surface sanitization",
                "Quarterly carpet and upholstery shampooing",
                "Vent dusting and air quality support",
                "Departmental SLAs"
            ],
            complianceCerts: ["OSHA 1910.141", "EPA List N", "Green Seal"],
            valueProposition: "EPA-List N Disinfection • Bare-Hand Safe",
            popular: true
        },
        {
            tier: 11,
            name: "Executive Seamless",
            archetype: "executive",
            badge: "deep-navy",
            price: 6800,
            basePrice: 5880,
            staff: 5,
            monthlyHours: 420,
            hourlyRate: 25,
            size: "Large (8,001–7,200 sq. ft.)*",
            sqFtRange: "8,001–7,200",
            cleaningIntensity: "Executive Detailing",
            services: [
                "All Hygiene+ services",
                "After-hours service (zero disruption)",
                "Floor care: stripping, waxing, polishing",
                "Executive suite and boardroom detailing",
                "Exterior window cleaning (multi-story)",
                "VIP area luxury detailing"
            ],
            complianceCerts: ["OSHA 1910.141", "EPA List N", "Green Seal"],
            valueProposition: "Zero-Disruption Service • After-Hours Guarantee",
            note: "* Capped at 7,200 sq. ft. for 5 staff (1,440 sq. ft./cleaner) to ensure quality",
            popular: false
        },
        {
            tier: 12,
            name: "Facility Command",
            archetype: "facility",
            badge: "crystal-gold",
            price: "8,500–13,000",
            basePrice: "8,960–13,440",
            staff: "10–12",
            monthlyHours: "640–960",
            hourlyRate: 25,
            size: "Large (8,001–20,000 sq. ft.)",
            sqFtRange: "8,001–20,000",
            cleaningIntensity: "24/7 Facility Management",
            services: [
                "All Executive services",
                "24/7 availability with dedicated facility manager",
                "Emergency response protocols",
                "Specialized zones (labs, data centers, medical)",
                "IoT sensor integration",
                "Custom reporting dashboards"
            ],
            complianceCerts: ["OSHA 1910.141", "EPA List N", "Green Seal", "ISSA Certified"],
            valueProposition: "24/7 Coverage • Dedicated Ops Lead",
            popular: false
        },
        {
            tier: 13,
            name: "Total Facility OS",
            archetype: "facility",
            badge: "crystal-gold",
            price: "14,500–19,500+",
            basePrice: "14,560–17,920",
            staff: "13–16+",
            monthlyHours: "1,040–1,280+",
            hourlyRate: 25,
            size: "Large (20,001+ sq. ft.)",
            sqFtRange: "20,001+",
            cleaningIntensity: "Total Facility Management",
            services: [
                "All Facility Command services",
                "Full-service facility management",
                "24/7 staffing and emergency response",
                "Specialized cleaning for sensitive areas",
                "Multi-building campus coordination",
                "Custom programs tailored to corporate needs",
                "Dedicated account manager"
            ],
            complianceCerts: ["OSHA 1910.141", "EPA List N", "Green Seal", "ISSA Certified", "LEED Support"],
            valueProposition: "Your Facility, Our Responsibility — End-to-End",
            popular: false,
            premium: true
        }
    ],

    // ===================================
    // SPECIALIZED ADD-ON MODULES
    // ===================================
    addons: [
        {
            name: "Wellness Module",
            price: "300–800",
            priceUnit: "per month",
            availability: "All archetypes, all sizes",
            services: [
                "Air quality monitoring with monthly reports",
                "Ergonomic cleaning schedules",
                "Green Seal certified products",
                "Employee wellness-focused sanitization",
                "LEED building support"
            ],
            complianceCerts: ["Green Seal", "LEED Support"],
            icon: "wellness"
        },
        {
            name: "Event Support Module",
            price: "250–600",
            priceUnit: "per event",
            availability: "Premium and above",
            services: [
                "Pre/post-event turnaround cleaning",
                "Flexible staffing for conferences",
                "VIP area detailing",
                "Same-day emergency response"
            ],
            complianceCerts: ["OSHA 1910.141"],
            icon: "event"
        },
        {
            name: "Campus Integration",
            price: "1,200–2,500",
            priceUnit: "per month",
            availability: "Large facilities only, Facility Command archetype",
            services: [
                "Multi-building coordination",
                "Departmental SLAs",
                "IoT sensor sync (occupancy-based cleaning)",
                "Custom reporting dashboards",
                "Dedicated account manager"
            ],
            complianceCerts: ["ISSA Certified", "LEED Support"],
            icon: "campus"
        }
    ]
};

// Badge color definitions for UI rendering
const badgeColors = {
    "sterling-silver": {
        background: "linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 100%)",
        color: "#2C3E50",
        label: "Essential"
    },
    "emerald-green": {
        background: "linear-gradient(135deg, #05ED43 0%, #00C853 100%)",
        color: "#FFFFFF",
        label: "Premium"
    },
    "deep-navy": {
        background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
        color: "#FFFFFF",
        label: "Executive"
    },
    "crystal-gold": {
        background: "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)",
        border: "2px solid #FFD700",
        color: "#1a237e",
        label: "Facility"
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { serviceTiers, badgeColors };
}
