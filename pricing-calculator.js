// ===================================
// CrystalCore Cleaning Systems
// Interactive Pricing Calculator
// ===================================

/**
 * Pricing Calculator Module
 * Calculates recommended tier and pricing based on:
 * - Square footage
 * - Traffic level (light/medium/heavy)
 * - Wellness requirements
 * - Specialized needs
 */

class PricingCalculator {
    constructor() {
        this.hourlyRate = 25; // NJ DOL 2025 standard
        this.overhead = 0.28; // 28% operational overhead
        this.annualDiscount = 0.15; // 15% annual contract discount

        // ISSA productivity standards (sq. ft. per cleaner per shift)
        this.productivity = {
            essential: 3000,    // Light daily clean
            premium: 2400,      // Deep hygiene
            executive: 1800,    // Executive detailing
            facility: 1500      // 24/7 facility management
        };
    }

    /**
     * Calculate recommended tier based on inputs
     * @param {number} sqFt - Square footage
     * @param {string} traffic - Traffic level: 'light', 'medium', 'heavy'
     * @param {boolean} wellness - Wellness module needed
     * @param {boolean} afterHours - After-hours service needed
     * @returns {object} Recommended tier and pricing details
     */
    calculateRecommendation(sqFt, traffic, wellness = false, afterHours = false) {
        // Determine size category
        const sizeCategory = this.getSizeCategory(sqFt);

        // Determine archetype based on needs
        const archetype = this.getRecommendedArchetype(traffic, wellness, afterHours);

        // Calculate staffing requirements
        const staffing = this.calculateStaffing(sqFt, archetype);

        // Calculate pricing
        const pricing = this.calculatePricing(staffing, archetype);

        // Find matching tier
        const matchingTier = this.findMatchingTier(sizeCategory, archetype, sqFt);

        return {
            sizeCategory,
            archetype,
            staffing,
            pricing,
            matchingTier,
            addons: this.getRecommendedAddons(wellness, sizeCategory)
        };
    }

    getSizeCategory(sqFt) {
        if (sqFt <= 3000) return 'small';
        if (sqFt <= 8000) return 'medium';
        return 'large';
    }

    getRecommendedArchetype(traffic, wellness, afterHours) {
        if (afterHours || traffic === 'heavy') {
            return 'facility';
        }
        if (wellness || traffic === 'medium') {
            return 'executive';
        }
        if (traffic === 'light') {
            return 'premium';
        }
        return 'essential';
    }

    calculateStaffing(sqFt, archetype) {
        const productivity = this.productivity[archetype];
        const staffRequired = Math.ceil(sqFt / productivity);

        // Calculate monthly hours based on archetype
        let hoursPerWeek;
        switch (archetype) {
            case 'essential':
                hoursPerWeek = 20; // 4 hours/day, 5 days/week
                break;
            case 'premium':
                hoursPerWeek = 25; // 5 hours/day, 5 days/week
                break;
            case 'executive':
                hoursPerWeek = 30; // 6 hours/day, 5 days/week
                break;
            case 'facility':
                hoursPerWeek = 40; // 8 hours/day, 5 days/week
                break;
            default:
                hoursPerWeek = 20;
        }

        const monthlyHours = hoursPerWeek * 4.33; // Average weeks per month

        return {
            staff: staffRequired,
            hoursPerWeek,
            monthlyHours: Math.round(monthlyHours)
        };
    }

    calculatePricing(staffing, archetype) {
        const baseCost = this.hourlyRate * staffing.staff * staffing.monthlyHours;
        const withOverhead = baseCost * (1 + this.overhead);
        const finalPrice = withOverhead * (1 - this.annualDiscount);

        return {
            hourlyRate: this.hourlyRate,
            baseCost: Math.round(baseCost),
            overhead: Math.round(baseCost * this.overhead),
            withOverhead: Math.round(withOverhead),
            annualDiscount: Math.round(withOverhead * this.annualDiscount),
            finalPrice: Math.round(finalPrice)
        };
    }

    findMatchingTier(sizeCategory, archetype, sqFt) {
        if (!serviceTiers || !serviceTiers[sizeCategory]) {
            return null;
        }

        const tiers = serviceTiers[sizeCategory];

        // Find tier matching archetype and sq ft range
        const matchingTier = tiers.find(tier => {
            if (tier.archetype !== archetype) return false;

            // Parse sq ft range
            if (tier.sqFtRange) {
                const range = tier.sqFtRange.replace(/,/g, '').split('–');
                const min = parseInt(range[0]);
                const max = range[1] ? parseInt(range[1].replace('+', '')) : Infinity;

                return sqFt >= min && sqFt <= max;
            }

            return false;
        });

        return matchingTier || tiers.find(t => t.archetype === archetype);
    }

    getRecommendedAddons(wellness, sizeCategory) {
        const addons = [];

        if (wellness && serviceTiers.addons) {
            const wellnessModule = serviceTiers.addons.find(a => a.name === 'Wellness Module');
            if (wellnessModule) addons.push(wellnessModule);
        }

        if (sizeCategory === 'large' && serviceTiers.addons) {
            const campusModule = serviceTiers.addons.find(a => a.name === 'Campus Integration');
            if (campusModule) addons.push(campusModule);
        }

        return addons;
    }

    formatCurrency(amount) {
        return `$${amount.toLocaleString()}`;
    }

    generateQuoteSummary(recommendation) {
        const { sizeCategory, archetype, staffing, pricing, matchingTier, addons } = recommendation;

        let summary = `
# Pricing Quote Summary

## Facility Details
- **Size Category**: ${sizeCategory.charAt(0).toUpperCase() + sizeCategory.slice(1)}
- **Recommended Archetype**: ${archetype.charAt(0).toUpperCase() + archetype.slice(1)}

## Staffing Requirements
- **Staff Members**: ${staffing.staff}
- **Hours per Week**: ${staffing.hoursPerWeek}
- **Monthly Hours**: ${staffing.monthlyHours}

## Pricing Breakdown
- **Hourly Rate**: ${this.formatCurrency(pricing.hourlyRate)}/hr (NJ DOL 2025 standard)
- **Base Labor Cost**: ${this.formatCurrency(pricing.baseCost)}
- **Operational Overhead (28%)**: ${this.formatCurrency(pricing.overhead)}
- **Subtotal**: ${this.formatCurrency(pricing.withOverhead)}
- **Annual Contract Discount (15%)**: -${this.formatCurrency(pricing.annualDiscount)}
- **Final Monthly Price**: ${this.formatCurrency(pricing.finalPrice)}

## Recommended Tier
${matchingTier ? `**${matchingTier.name}** (Tier ${matchingTier.tier})` : 'Custom tier required'}

## Recommended Add-ons
${addons.length > 0 ? addons.map(a => `- **${a.name}**: ${a.price} ${a.priceUnit}`).join('\n') : 'None'}

---
*This quote is valid for 30 days. Final pricing subject to facility inspection.*
        `;

        return summary.trim();
    }
}

// Initialize calculator
const pricingCalculator = new PricingCalculator();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PricingCalculator;
}
