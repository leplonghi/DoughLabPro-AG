import { StyleDefinition } from '../types/styleDefinition';
import { DoughStyleDefinition } from '../types';

export function adaptLegacyStyle(legacy: DoughStyleDefinition | any): StyleDefinition {
    // If it already looks like a new style, return it
    if (legacy.technicalProfile && Array.isArray(legacy.technicalProfile.hydrationRange)) {
        return legacy as StyleDefinition;
    }

    // Otherwise adapt
    return {
        id: legacy.id,
        title: legacy.name || legacy.title || 'Untitled Style',
        subtitle: legacy.description ? legacy.description.substring(0, 50) + '...' : '',
        category: legacy.category || 'Other',
        family: legacy.family || 'User Custom',
        variantName: legacy.variantName || legacy.name,
        origin: {
            country: legacy.country || 'Unknown',
            region: legacy.region,
        },
        intro: legacy.description || '',
        history: '',
        technicalFoundations: [],
        doughImpact: [],
        bakingImpact: [],
        technicalProfile: {
            hydrationRange: legacy.technicalProfile?.hydrationRange || [legacy.technical?.hydration || 60, legacy.technical?.hydration || 60],
            saltRange: legacy.technicalProfile?.saltRange || [2, 2],
            oilRange: legacy.technicalProfile?.fatRange || [0, 0],
            sugarRange: legacy.technicalProfile?.sugarRange || [0, 0],
            flourStrength: legacy.technicalProfile?.flourStrength || 'Medium',
            fermentation: legacy.technicalProfile?.fermentation || { bulk: 'Standard', proof: 'Standard' },
            oven: legacy.technicalProfile?.oven || { type: 'home_electric', temperatureC: [250, 250] },
            difficulty: legacy.technicalProfile?.difficulty || 'Medium',
            recommendedUse: legacy.technicalProfile?.recommendedUse || [],
        },
        regionalVariants: [],
        climateScenarios: [],
        styleComparisons: [],
        parameterSensitivity: [],
        risks: [],
        notes: [],
        tags: legacy.tags || [],
        applyInApp: {
            calculator: [],
            styles: [],
            mylab: [],
            levain: [],
            tools: []
        },
        references: [],
        images: legacy.image ? [legacy.image] : [],
        diagrams: [],
        faq: [],
        isCanonical: legacy.isCanonical || false,
        source: legacy.source || 'user_manual',
        createdBy: legacy.createdBy,
        createdAt: legacy.createdAt
    };
}

export function adaptNewToLegacy(style: StyleDefinition): DoughStyleDefinition {
    return {
        id: style.id,
        name: style.title,
        family: style.family,
        category: style.category.toLowerCase() as any,
        origin: style.origin,
        history: style.history,
        culturalContext: style.intro,
        isCanonical: style.isCanonical,
        source: style.source as any,
        // createdBy and createdAt removed from DoughStyleDefinition
        // createdBy: style.createdBy,
        // createdAt: style.createdAt,
        description: style.intro,
        isPro: false, // Default or derive

        // New Blocks (Empty by default for adapter)
        substyles: [],
        regionExpressions: [],
        seasonalVariants: [],
        experimentalVariants: [],
        references: [],

        technicalProfile: {
            hydration: style.technicalProfile.hydrationRange,
            salt: style.technicalProfile.saltRange,
            oil: style.technicalProfile.oilRange,
            sugar: style.technicalProfile.sugarRange,
            flourStrength: style.technicalProfile.flourStrength,
            fermentation: typeof style.technicalProfile.fermentation === 'string' ? { bulk: style.technicalProfile.fermentation, proof: 'Standard' } : style.technicalProfile.fermentation,
            oven: {
                temperatureC: style.technicalProfile.oven.temperatureC,
                type: style.technicalProfile.oven.type,
                notes: style.technicalProfile.oven.notes
            },
            difficulty: style.technicalProfile.difficulty as any
        },

        // Legacy fields
        technical: {
            hydration: (style.technicalProfile.hydrationRange[0] + style.technicalProfile.hydrationRange[1]) / 2,
            salt: (style.technicalProfile.saltRange[0] + style.technicalProfile.saltRange[1]) / 2,
            oil: style.technicalProfile.oilRange ? (style.technicalProfile.oilRange[0] + style.technicalProfile.oilRange[1]) / 2 : 0,
            sugar: style.technicalProfile.sugarRange ? (style.technicalProfile.sugarRange[0] + style.technicalProfile.sugarRange[1]) / 2 : 0,
            fermentation: typeof style.technicalProfile.fermentation === 'string' ? style.technicalProfile.fermentation : style.technicalProfile.fermentation.bulk,
            fermentationTechnique: 'DIRECT' as any, // Default
            bakingTempC: (style.technicalProfile.oven.temperatureC[0] + style.technicalProfile.oven.temperatureC[1]) / 2
        },
        allowedFermentationTechniques: ['DIRECT', 'POOLISH', 'BIGA', 'SOURDOUGH'] as any, // Default
        defaultFermentationTechnique: 'DIRECT' as any,
        ingredients: [], // Placeholder
        tags: style.tags
    };
}

export function normalizeDoughStyle(style: any): DoughStyleDefinition {
    // If it has substyles, assume it's already normalized or close enough
    if (style.substyles && Array.isArray(style.substyles)) {
        return style as DoughStyleDefinition;
    }

    // Otherwise, adapt old structure to new DoughStyleDefinition
    return {
        ...style,
        substyles: [],
        regionExpressions: [],
        seasonalVariants: [],
        experimentalVariants: [],
        references: [],
        // Ensure technicalProfile exists if it was missing or different
        technicalProfile: style.technicalProfile || {
            hydration: [60, 60],
            salt: [2, 2],
            fermentation: { bulk: 'Standard', proof: 'Standard' },
            oven: { temperatureC: [250, 250], type: 'home_electric' },
            difficulty: 'Medium'
        }
    };
}
