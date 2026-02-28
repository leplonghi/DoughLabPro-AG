/**
 * style.schema.ts — Zod validators for canonical style data
 *
 * Used for:
 *  - Validating styles fetched from Firestore
 *  - Validating user-created styles before save
 *  - Ensuring migrated data conforms to CanonicalStyle
 *
 * Import only where validation is actually needed (Firestore readers,
 * user style creation). Do NOT import in the hot render path.
 */

import { z } from 'zod';

// ─────────────────────────────────────────────────────────────────────────────
// PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────

export const StyleCategorySchema = z.enum([
    'pizza',
    'bread',
    'enriched_bread',
    'burger_bun',
    'pastry',
    'cookie',
    'cookies_confectionery',
    'flatbread',
    'other',
]);

export const FermentationTypeSchema = z.enum([
    'direct',
    'preferment',
    'levain',
    'cold',
    'hybrid',
    'indirect',
]);

export const DifficultySchema = z.enum(['Easy', 'Medium', 'Hard', 'Expert']);

export const StyleSourceSchema = z.enum(['official', 'user_manual', 'user_ai']);

// ─────────────────────────────────────────────────────────────────────────────
// STYLE INDEX ENTRY (lightweight list schema)
// ─────────────────────────────────────────────────────────────────────────────

export const StyleIndexEntrySchema = z.object({
    id: z.string().min(1, 'Style ID is required'),
    name: z.string().min(1, 'Style name is required'),
    category: StyleCategorySchema,
    family: z.string().optional(),
    tags: z.array(z.string()),
    proGate: z.boolean(),
    hasImage: z.boolean(),
    hydrationMid: z.number().min(0).max(200).optional(),
    difficulty: DifficultySchema,
    fermentationType: FermentationTypeSchema,
    releaseDate: z.string().datetime({ offset: true }).or(z.string().regex(/^\d{4}-\d{2}-\d{2}$/)),
});

// ─────────────────────────────────────────────────────────────────────────────
// BASE FORMULA
// ─────────────────────────────────────────────────────────────────────────────

export const BaseFormulaIngredientSchema = z.object({
    name: z.string(),
    percentage: z.number().min(0).max(500),
    hydrationContent: z.number().min(0).max(1).optional(),
    category: z.enum(['base', 'liquid', 'fat', 'sugar', 'leaven', 'additive']).optional(),
    role: z.string().optional(),
});

// ─────────────────────────────────────────────────────────────────────────────
// TECHNICAL PROFILE
// ─────────────────────────────────────────────────────────────────────────────

export const StyleTechnicalProfileSchema = z.object({
    hydration: z.tuple([z.number(), z.number()]),
    salt: z.tuple([z.number(), z.number()]),
    oil: z.tuple([z.number(), z.number()]).optional(),
    sugar: z.tuple([z.number(), z.number()]).optional(),
    fat: z.tuple([z.number(), z.number()]).optional(),
    flourStrength: z.string().optional(),
    preferment: z.string().optional(),
    ovenTemp: z.tuple([z.number(), z.number()]),
    difficulty: DifficultySchema,
    ballWeight: z.object({
        recommended: z.number().positive(),
        min: z.number().positive(),
        max: z.number().positive(),
    }).optional(),
    fermentationSteps: z.array(z.string()),
    recommendedUse: z.array(z.string()),
    fermentation: z.object({
        bulk: z.string(),
        proof: z.string().optional(),
        coldRetard: z.string().optional(),
        rest: z.string().optional(),
        notes: z.string().optional(),
    }).optional(),
});

// ─────────────────────────────────────────────────────────────────────────────
// CANONICAL STYLE (full object)
// ─────────────────────────────────────────────────────────────────────────────

export const CanonicalStyleSchema = StyleIndexEntrySchema.extend({
    origin: z.object({
        country: z.string(),
        region: z.string(),
        period: z.string(),
    }),
    description: z.string(),
    history: z.string(),
    culturalContext: z.string().optional(),
    regulatoryNotes: z.string().optional(),
    base_formula: z.array(BaseFormulaIngredientSchema).optional(),
    technicalProfile: StyleTechnicalProfileSchema,
    scientificProfile: z.any().optional(),
    education: z.any().optional(),
    deepDive: z.any().optional(),
    flavorProfile: z.any().optional(),
    source: StyleSourceSchema,
    createdAt: z.string(),
    images: z.object({
        hero: z.string(),
        dough: z.string(),
        crumb: z.string(),
    }).optional(),
    notes: z.array(z.string()),
    references: z.array(z.object({
        source: z.string(),
        author: z.string().optional(),
        year: z.string().optional(),
        url: z.string().optional(),
    })),
    watchouts: z.array(z.string()).optional(),
    pairings: z.object({
        canonical: z.array(z.string()),
        modern: z.array(z.string()),
        regional: z.array(z.string()),
    }).optional(),
    learnLinkTags: z.array(z.string()).optional(),
    experimentSuggestions: z.array(z.string()).optional(),
    recommendedIncrements: z.array(z.string()).optional(),
    recommendedFlavorComponents: z.array(z.string()).optional(),
    // Backward-compat deprecated fields
    isPro: z.boolean().optional(),
    isCanonical: z.boolean().optional(),
});

// ─────────────────────────────────────────────────────────────────────────────
// MIGRATION PATCH SCHEMA (for validating saved user data during migration)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Minimal schema for any saved object that references a styleId.
 * Used by migrateSavedData to validate inputs before and after patching.
 */
export const StyleIdCarrierSchema = z.object({
    styleId: z.string().optional(),
    recipeStyle: z.string().optional(),
    selectedStyleId: z.string().optional(),
    doughConfig: z.object({
        recipeStyle: z.string().optional(),
        stylePresetId: z.string().optional(),
        selectedStyleId: z.string().optional(),
    }).passthrough().optional(),
}).passthrough();

// ─────────────────────────────────────────────────────────────────────────────
// TYPE EXPORTS (inferred from schemas)
// ─────────────────────────────────────────────────────────────────────────────

export type StyleCategoryZod = z.infer<typeof StyleCategorySchema>;
export type StyleIndexEntryZod = z.infer<typeof StyleIndexEntrySchema>;
export type CanonicalStyleZod = z.infer<typeof CanonicalStyleSchema>;

// ─────────────────────────────────────────────────────────────────────────────
// VALIDATION HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Validate a style object. Returns { success, data?, errors? }.
 * Non-throwing — safe to call on untrusted remote data.
 */
export function validateStyle(raw: unknown): { success: boolean; data?: CanonicalStyleZod; errors?: z.ZodError } {
    const result = CanonicalStyleSchema.safeParse(raw);
    if (result.success) {
        return { success: true, data: result.data };
    }
    return { success: false, errors: result.error };
}

/**
 * Validate just the index entry fields (e.g. after building from registry).
 */
export function validateStyleIndex(raw: unknown): { success: boolean; data?: StyleIndexEntryZod; errors?: z.ZodError } {
    const result = StyleIndexEntrySchema.safeParse(raw);
    if (result.success) {
        return { success: true, data: result.data };
    }
    return { success: false, errors: result.error };
}
