import { DoughStyleDefinition, StyleCategory } from '@/types/styles';
import { useTranslation } from '@/i18n';

/**
 * Partial definition allowing optional fields which will be filled with defaults
 */
type PartialStyleDefinition = Partial<Omit<DoughStyleDefinition, 'id' | 'technicalProfile'>> & {
    // Mandatory fields
    name: string;
    category: StyleCategory;
    description: string;

    // Optional overrides
    id?: string;
    recipeStyle?: any; // Allow explicit style mapping
    technicalProfile: Partial<DoughStyleDefinition['technicalProfile']> & {
        hydration: [number, number]; // Hydration is mandatory
    };
    education?: DoughStyleDefinition['education'];
    base_formula?: any[]; // Allow ingredient composition
};

// ... (existing constants)

export const defineDoughStyle = (def: PartialStyleDefinition): DoughStyleDefinition => {
    // ... (existing ID logic)
    const id = def.id || def.name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');

    // ... (existing technicalProfile logic)
    const technicalProfile: DoughStyleDefinition['technicalProfile'] = {
        difficulty: 'Medium',
        salt: [2.0, 3.0],
        fermentationSteps: [],
        ovenTemp: [250, 300],
        recommendedUse: [],
        ...def.technicalProfile,
    };

    // 3. Construct the Full Object
    // @ts-ignore
    return {
        id,
        name: def.name,
        description: def.description,
        category: def.category,
        recipeStyle: def.recipeStyle, // Pass through
        origin: {
            country: 'Unknown',
            region: null,
            period: null,
            ...def.origin
        },
        technicalProfile,
        difficulty: (def as any).difficulty || technicalProfile.difficulty || 'Medium',
        fermentationType: (def as any).fermentationType || 'direct',
        isCanonical: def.isCanonical ?? false,
        isPro: def.isPro ?? false,
        history: def.history || "",
        tags: def.tags || [],
        images: {
            hero: def.images?.hero || null,
            dough: def.images?.dough || null,
            crumb: def.images?.crumb || null
        },
        notes: def.notes || [],
        watchouts: (def as any).watchouts || (def as any).risks || [],
        releaseDate: def.releaseDate || new Date().toISOString(),
        createdAt: (def as any).createdAt || new Date().toISOString(),
        family: def.family || mapCategoryToFamily(def.category),
        culturalContext: def.culturalContext || null,
        references: def.references?.map((r: any) => ({
            source: r.source || r.title || 'Unknown Source',
            url: r.url,
            author: r.author,
            year: r.year
        })) || [],
        source: 'official',
        education: def.education,
        base_formula: def.base_formula, // Pass through
        scientificProfile: (def as any).scientificProfile,
        flavorProfile: (def as any).flavorProfile,
        deepDive: (def as any).deepDive,
        recommendedFlavorComponents: (def as any).recommendedFlavorComponents
    };
};

// Helper to map categories to broader families automatically
function mapCategoryToFamily(cat: StyleCategory): string {
    const map: Record<string, string> = {
        'pizza': 'Flatbreads & Pizzas',
        'bread': 'Lean Breads',
        'enriched_bread': 'Enriched Doughs',
        'pastry': 'Laminated & Sweet',
        'cookie': 'Confectionery',
        'burger_bun': 'Enriched Doughs',
        'flatbread': 'Flatbreads & Pizzas'
    };
    return map[cat] || 'General Baking';
}
