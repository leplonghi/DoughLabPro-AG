/**
 * Canonical Style Model — domain/models/Style.ts
 *
 * This is the AUTHORITATIVE TypeScript model for a DoughLab style.
 * All style data (registry, Firestore, user-created) must conform to this.
 *
 * Versioned: maps to content.version.json schemaVersion 3.
 */

// ─────────────────────────────────────────────────────────────────────────────
// PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────

export type StyleCategory =
    | 'pizza'
    | 'bread'
    | 'enriched_bread'
    | 'burger_bun'
    | 'pastry'
    | 'cookie'
    | 'cookies_confectionery'
    | 'flatbread'
    | 'other';

export type FermentationType =
    | 'direct'
    | 'preferment'
    | 'levain'
    | 'cold'
    | 'hybrid'
    | 'indirect';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard' | 'Expert';

export type StyleSource = 'official' | 'user_manual' | 'user_ai';

// ─────────────────────────────────────────────────────────────────────────────
// STYLE INDEX ENTRY (Lightweight — safe to load upfront for lists/search)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Minimal record used in style lists, search, and paywall checks.
 * Does NOT include heavy educational/scientific content.
 */
export interface StyleIndexEntry {
    /** Canonical unique identifier. Never changes after publication. */
    id: string;
    /** Display name (i18n key or literal) */
    name: string;
    /** Style category */
    category: StyleCategory;
    /** Style family (e.g. "new_york", "neapolitan") — groups variants */
    family?: string;
    /** Quick-filter tags */
    tags: string[];
    /** Whether this style requires a Pro subscription */
    proGate: boolean;
    /** Whether a hero image is available at /images/styles/{id}-hero.webp */
    hasImage: boolean;
    /** ISO hydration mid-point for quick display */
    hydrationMid?: number;
    /** Difficulty rating */
    difficulty: DifficultyLevel;
    /** Fermentation type */
    fermentationType: FermentationType;
    /** Release date (ISO string) */
    releaseDate: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// BASE FORMULA INGREDIENT
// ─────────────────────────────────────────────────────────────────────────────

export interface BaseFormulaIngredient {
    name: string;
    percentage: number;
    hydrationContent?: number;
    category?: 'base' | 'liquid' | 'fat' | 'sugar' | 'leaven' | 'additive';
    role?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// TECHNICAL PROFILE
// ─────────────────────────────────────────────────────────────────────────────

export interface StyleTechnicalProfile {
    hydration: [number, number];
    salt: [number, number];
    oil?: [number, number];
    sugar?: [number, number];
    fat?: [number, number];
    flourStrength?: string;
    preferment?: string;
    ovenTemp: [number, number];
    difficulty: DifficultyLevel;
    ballWeight?: { recommended: number; min: number; max: number };
    fermentationSteps: string[];
    recommendedUse: string[];
    fermentation?: {
        bulk: string;
        proof?: string;
        coldRetard?: string;
        rest?: string;
        notes?: string;
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// SCIENTIFIC PROFILE (Level 2.5 — optional deep content)
// ─────────────────────────────────────────────────────────────────────────────

export interface AdvancedProfile {
    flourRheology: {
        w_index: string;
        pl_ratio: string;
        absorption_capacity: string;
        protein_type: string;
        science_explanation: string;
    };
    thermalProfile: {
        oven_type: string;
        heat_distribution: string;
        crust_development: string;
        crumb_structure: string;
    };
    fermentationScience: {
        yeast_activity: string;
        ph_target: string;
        organic_acids: string;
        enzymatic_activity: string;
    };
    processScience?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// EDUCATIONAL CONTENT (Level 3 — lazy-loaded)
// ─────────────────────────────────────────────────────────────────────────────

export interface EducationalContent {
    pro_tips: { tip: string; explanation: string }[];
    what_if: { scenario: string; result: string; correction: string }[];
    comparative_analysis: { target_style: string; difference: string; why_choose_this: string }[];
    q_and_a: { question: string; answer: string; context?: string }[];
    fermentation_methods: {
        method: 'Direct' | 'Biga' | 'Poolish' | 'Sourdough' | 'Hybrid' | 'Scald' | 'Tangzhong';
        suitability: 'Ideal' | 'Possible' | 'Not Recommended' | 'Historical' | 'Authentic';
        notes: string;
    }[];
}

// ─────────────────────────────────────────────────────────────────────────────
// CANONICAL STYLE (Full object)
// ─────────────────────────────────────────────────────────────────────────────

export interface CanonicalStyle extends StyleIndexEntry {
    // Identity
    origin: {
        country: string;
        region: string;
        period: string;
    };

    // Content
    description: string;
    history: string;
    culturalContext?: string;
    regulatoryNotes?: string;

    // Formula
    base_formula?: BaseFormulaIngredient[];
    technicalProfile: StyleTechnicalProfile;

    // Rich content (may be lazy-loaded)
    scientificProfile?: AdvancedProfile;
    education?: EducationalContent;
    deepDive?: {
        hydrationLogic: string;
        methodSuitability: {
            direct: { suitable: boolean; notes: string };
            biga: { suitable: boolean; notes: string };
            poolish: { suitable: boolean; notes: string };
        };
        whatIf: { scenario: string; outcome: string; solution: string }[];
        comparisons: { vsStyle: string; difference: string }[];
        proTips: string[];
    };

    flavorProfile?: {
        primaryFlavors: string[];
        aromaProfile: string[];
        textureNotes: string[];
        pairingRecommendations: string[];
        flavorEvolution?: string[];
    };

    // Paywall & Access
    source: StyleSource;
    createdAt: string;

    // Media
    images?: { hero: string; dough: string; crumb: string };

    // Cross-references
    notes: string[];
    references: { source: string; author?: string; year?: string; url?: string }[];
    watchouts?: string[];
    pairings?: { canonical: string[]; modern: string[]; regional: string[] };
    learnLinkTags?: string[];
    experimentSuggestions?: string[];
    recommendedIncrements?: string[];
    recommendedFlavorComponents?: string[];

    // Deprecated fields — kept for backward-compat, do not use in new code
    /** @deprecated use proGate */
    isPro?: boolean;
    /** @deprecated use StyleIndexEntry.family */
    isCanonical?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// ALIAS ENTRY (from aliases.json)
// ─────────────────────────────────────────────────────────────────────────────

export interface AliasEntry {
    /** Legacy or duplicate ID */
    fromId: string;
    /** Canonical ID to resolve to */
    toId: string;
}
