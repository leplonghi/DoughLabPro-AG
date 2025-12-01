

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
    COOKIE_CLASSIC_CHOC_CHIP = 'COOKIE_CLASSIC_CHOC_CHIP',
    COOKIE_BROWN_BUTTER = 'COOKIE_BROWN_BUTTER',
    COOKIE_SHORTBREAD = 'COOKIE_SHORTBREAD',

    // Legacy/Duplicate Handling
    NY_STYLE = 'NY_STYLE',
    SICILIAN = 'SICILIAN',
    CHICAGO = 'CHICAGO',
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
    cocoa?: [number, number];

    flourStrength?: string;
    preferment?: string;

    fermentationSteps: string[]; // Action-oriented steps

    ovenTemp: [number, number]; // Celsius

    recommendedUse: string[];
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';

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

    technicalProfile: StyleTechnicalProfile;

    watchouts?: string[]; // Replaces risks
    notes: string[];
    references: Reference[];

    isPro: boolean;
    source: StyleSource;
    createdAt: string;
    releaseDate: string;

    images?: StyleImages;
    relatedLearn?: string[];

    // Legacy fields for backward compatibility
    risks?: string[];
    variations?: any[];
    isCanonical?: boolean;
    country?: string;
}
