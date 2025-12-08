import { DoughStyleDefinition, StyleCategory } from '@/types/styles';

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
    technicalProfile: Partial<DoughStyleDefinition['technicalProfile']> & {
        hydration: [number, number]; // Hydration is mandatory
    };
};

/**
 * DEFAULTS for boilerplate reduction
 */
const DEFAULT_FERMENTATION = {
    bulk: "2-4h @ RT",
    proof: "12-24h @ CT",
};

const DEFAULT_REQ_TOOLS = ["Scale", "Mixer/Hands"];

/**
 * The Style Builder Function
 * Reduz a verbosidade e garante integridade dos dados via TypeScript
 */
export const defineDoughStyle = (def: PartialStyleDefinition): DoughStyleDefinition => {
    // 1. Auto-generate ID from name if missing (e.g. "New York Slice" -> "new_york_slice")
    const id = def.id || def.name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');

    // 2. Merge Technical Profile with Defaults
    // 2. Merge Technical Profile with Defaults
    const technicalProfile: DoughStyleDefinition['technicalProfile'] = {
        difficulty: 'Medium',
        salt: [2.0, 3.0],
        fermentationSteps: [], // Required by type
        ovenTemp: [250, 300],
        recommendedUse: [],
        ...def.technicalProfile,
    };

    // 3. Construct the Full Object
    // @ts-ignore - allowing loose mapping for backward compatibility if input types are slightly off
    return {
        id,
        name: def.name,
        description: def.description,
        category: def.category,
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
        watchouts: (def as any).watchouts || (def as any).risks || [], // Map risks to watchouts
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
        source: 'official'
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
