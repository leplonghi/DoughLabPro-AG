
export type FlavorCategory =
    | 'Cheese'
    | 'Meat'
    | 'Vegetal'
    | 'Sauce'
    | 'Finish'
    | 'Bread Filling'
    | 'Pastry Filling';

export interface FlavorTextureProfile {
    intensity: number; // 1-5
    fat: number; // 1-5
    salinity: number; // 1-5
    sweetness: number; // 1-5
    thermalBehavior?: string; // e.g. "Melts completely", "Holds shape", "Caramelizes"
}

export type ApplicationMoment = 'pre_oven' | 'post_oven' | 'mid_bake';

export interface FlavorReference {
    title: string;
    url: string; // The "Real Reference"
    summary: string;
    sourceType: 'authority' | 'variation' | 'scientific'; // e.g. AVPN, Serious Eats
}

export interface FlavorComponent {
    id: string;
    name: string;
    category: FlavorCategory;
    description: string; // Short summary

    // The Profile
    flavorProfile: FlavorTextureProfile;
    origin: string; // "Campania, Italy"
    historyContext: string;

    // Usage
    commonStyles: string[]; // IDs of styles, e.g. 'neapolitan', 'ny_style'
    ovenCompatibility: string[]; // e.g. 'high_temp', 'home_oven'

    // Combinations
    classicCombinations: string[]; // ["Tomato + Basil", "Honey + Walnuts"]

    // Technical
    technicalNotes: string; // Risks, tips
    applicationMoment: ApplicationMoment;

    // Variations
    variations: string; // "Can substitute with..."

    // Mandatory for Standards
    references: FlavorReference[];

    // System
    isStandard: boolean; // True for the built-in ones
}
