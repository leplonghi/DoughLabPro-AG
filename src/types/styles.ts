
// ... (previous imports and types remain unchanged)

// ========================================================
// 1. HELPER TYPES
// ========================================================

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

export enum RecipeStyle {
    // --- PIZZAS ---
    NEAPOLITAN = 'NEAPOLITAN',
    NEW_YORK = 'NEW_YORK',
    PAN_PIZZA = 'PAN_PIZZA',
    CHICAGO_DEEP_DISH = 'CHICAGO_DEEP_DISH',
    ROMANA_TONDA = 'ROMANA_TONDA',
    SICILIANA = 'SICILIANA',
    GRANDMA_STYLE = 'GRANDMA_STYLE',
    DETROIT = 'DETROIT',
    ROMAN = 'ROMAN', // Teglia/Pala
    THIN_CRUST = 'THIN_CRUST',

    // --- BREADS & SAVORY ---
    PAO_FRANCES = 'PAO_FRANCES',
    BAGUETTE = 'BAGUETTE',
    CIABATTA = 'CIABATTA',
    PUMPERNICKEL = 'PUMPERNICKEL',
    RYE = 'RYE',
    PAO_DE_BATATA = 'PAO_DE_BATATA', // Potato Bread
    PAO_DE_QUEIJO = 'PAO_DE_QUEIJO', // Cheese Bread
    FOCACCIA = 'FOCACCIA',
    CHALLAH = 'CHALLAH',
    BAGEL = 'BAGEL',
    ENGLISH_MUFFIN = 'ENGLISH_MUFFIN',
    PITA = 'PITA',
    MASSA_PODRE = 'MASSA_PODRE',
    MASSA_ESFIHA = 'MASSA_ESFIHA',
    MASSA_TORTA = 'MASSA_TORTA',
    BURGER_BUN = 'BURGER_BUN',
    HOKKAIDO_MILK_BREAD = 'HOKKAIDO_MILK_BREAD',
    SOURDOUGH = 'SOURDOUGH',
    COUNTRY_LOAF = 'COUNTRY_LOAF',
    SANDWICH_LOAF = 'SANDWICH_LOAF',
    FLATBREAD = 'FLATBREAD',
    BRIOCHE = 'BRIOCHE',
    DINNER_ROLLS = 'DINNER_ROLLS',

    // --- NEW STYLES (BREADS) ---
    BREAD_RUSTIC_SOURDOUGH = 'BREAD_RUSTIC_SOURDOUGH',
    BREAD_BAGUETTE_CLASSIC = 'BREAD_BAGUETTE_CLASSIC',
    BREAD_SANDWICH_SOFT = 'BREAD_SANDWICH_SOFT',

    // --- NEW STYLES (ENRICHED) ---
    ENRICHED_BRIOCHE_CLASSIC = 'ENRICHED_BRIOCHE_CLASSIC',
    ENRICHED_DINNER_ROLL = 'ENRICHED_DINNER_ROLL',

    // --- NEW STYLES (BUNS) ---
    BURGER_BUN_BRIOCHE = 'BURGER_BUN_BRIOCHE',
    BURGER_BUN_POTATO = 'BURGER_BUN_POTATO',
    BURGER_BUN_SOFT = 'BURGER_BUN_SOFT',

    // --- SWEETS & PASTRY ---
    PATE_SUCREE = 'PATE_SUCREE',
    SABLEE = 'SABLEE',
    POUND_CAKE = 'POUND_CAKE',
    COOKIES = 'COOKIES',
    COOKIE_NY_CHOC_CHIP = 'COOKIE_NY_CHOC_CHIP',
    CINNAMON_ROLL = 'CINNAMON_ROLL',
    SWEET_ROLL = 'SWEET_ROLL',
    BABKA = 'BABKA',
    DONUT = 'DONUT',
    SHORTBREAD = 'SHORTBREAD',
    PIE_DOUGH = 'PIE_DOUGH',
    BOLO_SIMPLES = 'BOLO_SIMPLES',
    BROWNIE = 'BROWNIE',
    SWEETS_PASTRY = 'SWEETS_PASTRY',

    // --- NEW STYLES (PASTRY/COOKIES) ---
    PASTRY_CINNAMON_ROLL = 'PASTRY_CINNAMON_ROLL',
    PASTRY_DANISH = 'PASTRY_DANISH',
    FRENCH_CROISSANT = 'FRENCH_CROISSANT',
    PANETTONE_ARTISANAL = 'PANETTONE_ARTISANAL',
    PUFF_PASTRY = 'PUFF_PASTRY',
    COOKIE_CLASSIC_CHOC_CHIP = 'COOKIE_CLASSIC_CHOC_CHIP',
    COOKIE_BROWN_BUTTER = 'COOKIE_BROWN_BUTTER',
    COOKIE_SHORTBREAD = 'COOKIE_SHORTBREAD',

    // Legacy/Duplicate Handling
    NY_STYLE = 'NY_STYLE',
    SICILIAN = 'SICILIAN',
    CHICAGO = 'CHICAGO',
    PRETZEL = 'PRETZEL',
}

export type StyleSource = 'official' | 'user_manual' | 'user_ai';

export interface Reference {
    source: string;
    author?: string;
    year?: string;
    url?: string;
    notes?: string;
}

export interface StyleImages {
    hero: string;
    dough: string;
    crumb: string;
}

export interface StylePairings {
    canonical: string[];
    modern: string[];
    regional: string[];
}

// ========================================================
// 2. CORE SUB-SCHEMAS
// ========================================================

export interface StyleOrigin {
    country: string;
    region: string;
    period: string;
}

export interface StyleTechnicalProfile {
    hydration: [number, number];
    salt: [number, number];
    oil?: [number, number];
    sugar?: [number, number];
    fat?: [number, number];
    cocoa?: [number, number];
    ballWeight?: { recommended: number; min: number; max: number };

    flourStrength?: string;
    preferment?: string;

    rheology?: {
        elasticity: 'Very Low' | 'Low' | 'Medium' | 'High' | 'Very High';
        extensibility: 'Very Low' | 'Low' | 'Medium' | 'High' | 'Very High';
        tenacity: 'Very Low' | 'Low' | 'Medium' | 'High' | 'Very High';
        description?: string;
    };
    texture?: {
        crust: string; // e.g. t('common.eggshell_thin')
        crumb: string; // e.g. "Melting, moist"
    };
    flourProfile?: { // New deep flour specs
        type: string; // e.g. "00", "T65"
        protein: string;
        w: string; // W Index
        pl: string; // P/L Ratio
        elastisity?: string; // Optional specific note
    };

    fermentationSteps: string[]; // Action-oriented steps

    ovenTemp: [number, number]; // Celsius

    recommendedUse: string[];
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';

    // Level 2 Addition: Experiment
    experiment?: {
        name: string;
        description: string;
        technique: string;
    };

    // Legacy/Optional fields for backward compatibility or specific types
    prefermentDescription?: string;
    fermentation?: {
        bulk: string;
        proof?: string;
        coldRetard?: string;
        rest?: string;
        notes?: string;
    };
    ovenRecommendations?: string;
}

// ========================================================
// 3. MAIN DEFINITION
// ========================================================

// Level 2.5: Advanced Technical Specifications
export interface AdvancedProfile {
    // The Science of Flour (Rheology)
    flourRheology: {
        w_index: string; // e.g. "W280-320"
        pl_ratio: string; // P/L (Elasticity/Extensibility Ratio)
        absorption_capacity: string; // e.g. "High (65%+)"
        protein_type: string; // e.g. "Soft Wheat, low damaged starch"
        science_explanation: string; // "Why this flour?"
    };

    // The Science of Heat (Thermodynamics)
    thermalProfile: {
        oven_type: string;
        heat_distribution: string; // e.g. "High conduction (floor), High radiation (dome)"
        crust_development: string; // e.g. t('common.leopard_spotting_due_to_rapid_gelatinization')
        crumb_structure: string; // e.g. "Large alveoli, thin walls"
    };

    // The Chemistry of Fermentation
    fermentationScience: {
        yeast_activity: string; // e.g. t('common.slow_due_to_cold_retard')
        ph_target: string; // e.g. "pH 5.5 - 5.8"
        organic_acids: string; // e.g. t('common.lactic_dominant_over_acetic')
        enzymatic_activity: string; // e.g. t('common.high_protease_activity_during_autolyse')
    };
}

// Level 3: Educational & Deep Dive Content
export interface EducationalContent {
    pro_tips: {
        tip: string;
        explanation: string;
    }[];

    what_if: {
        scenario: string; // e.g. "Hydration is increased to 70%"
        result: string; // e.g. t('common.dough_becomes_too_sticky_to_stretch')
        correction: string; // e.g. t('common.use_cold_water_or_reduce_autolyse')
    }[];

    comparative_analysis: {
        target_style: string; // e.g. t('common.roman_teglia')
        difference: string; // e.g. "Thicker, uses pan instead of hearth"
        why_choose_this: string; // e.g. t('common.better_for_toppings_density')
    }[];

    q_and_a: {
        question: string;
        answer: string;
        context?: string;
    }[];

    fermentation_methods: {
        method: 'Direct' | 'Biga' | 'Poolish' | 'Sourdough' | 'Hybrid' | 'Scald' | 'Tangzhong';
        suitability: 'Ideal' | 'Possible' | 'Not Recommended' | 'Historical' | 'Authentic';
        notes: string;
    }[];
}

export interface FlavorProfile {
    primaryFlavors: string[];
    aromaProfile: string[];
    textureNotes: string[];
    pairingRecommendations: string[];
    flavorEvolution?: string[];
}

export interface DeepDive {
    hydrationLogic: string;
    methodSuitability: {
        direct: { suitable: boolean; notes: string };
        biga: { suitable: boolean; notes: string };
        poolish: { suitable: boolean; notes: string };
    };
    whatIf: Array<{
        scenario: string;
        outcome: string;
        solution: string;
    }>;
    comparisons: Array<{
        vsStyle: string;
        difference: string;
    }>;
    proTips: string[];
}

export interface BaseFormulaIngredient {
    name: string;
    percentage: number;
    hydrationContent?: number; // 0 to 1
    category?: 'base' | 'liquid' | 'fat' | 'sugar' | 'leaven' | 'additive';
    role?: string;
}

export interface DoughStyleDefinition {
    id: string;
    name: string;
    category: StyleCategory;
    recipeStyle?: RecipeStyle;
    family?: string;

    origin: StyleOrigin;

    description: string;
    history: string;
    culturalContext?: string;

    regulatoryNotes?: string;
    globalPresence?: string;

    pairings?: StylePairings;

    tags: string[];
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';

    fermentationType: 'direct' | 'preferment' | 'levain' | 'cold';

    customMethod?: {
        phase: string;
        title: string;
        actionInstructions: string;
        grandmaInstructions?: string;
        technicalExplanation?: string;
        proTip?: string;
        criticalPoint?: string;
        durationLabel?: string;
        temperatureLabel?: string;
    }[];

    technicalProfile: StyleTechnicalProfile;

    // Level 2.5: The Scientific Core
    scientificProfile?: AdvancedProfile;

    // Level 3: Educational & Deep Dive Content
    education?: EducationalContent;
    deepDive?: DeepDive;

    /** Flavor Intelligence - Sensory profile and pairing recommendations */
    flavorProfile?: FlavorProfile;

    // App Mapping (MyLab)
    experimentSuggestions?: string[]; // e.g. "Try pushing hydration to 75%..."

    // Educational Links
    learnLinkTags?: string[]; // e.g. ["rheology-101", "maillard-reaction"]

    watchouts?: string[]; // Replaces risks
    notes: string[];
    references: Reference[];

    isPro: boolean;
    source: StyleSource;
    createdAt: string;
    releaseDate: string;

    images?: StyleImages;
    // Legacy mapping (can be deprecated eventually)
    relatedLearn?: string[]; // Keeping for now, likely mapped to learnLinkTags

    // Legacy fields for backward compatibility
    risks?: string[];
    variations?: any[];
    isCanonical?: boolean;
    country?: string;

    // V3 Backport
    base_formula?: BaseFormulaIngredient[];

    /**
     * INCREMENT SYSTEM (V4)
     * IDs of recommended increments/ingredients for this style.
     */
    recommendedIncrements?: string[];
    recommendedFlavorComponents?: string[];
}
