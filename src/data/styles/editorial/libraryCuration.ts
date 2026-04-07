import { DoughStyleDefinition } from '@/types/styles';

export interface StyleLibraryRoadmapItem {
    id: string;
    title: string;
    reason: string;
    sourcePath?: string;
}

export const STYLE_LIBRARY_CURATION_OVERRIDES: Record<string, Partial<DoughStyleDefinition>> = {
    'pizza-napoletana': {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 10,
            rationale: 'Canonical benchmark for comparing modern pizza families, oven logic, and topping restraint.',
            isIndispensable: true,
            redundancyGroup: 'benchmark-pizza',
        },
    },
    'pizza-teglia-romana': {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 20,
            rationale: 'Essential pan-pizza reference for high-hydration handling, tray baking, and slice service.',
            isIndispensable: true,
            redundancyGroup: 'roman-pan-pizza',
        },
    },
    'pizza-tonda-romana': {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 30,
            rationale: 'Defines the crackly, thin Roman line and clarifies where it departs from Neapolitan softness.',
            isIndispensable: true,
            redundancyGroup: 'roman-thin-pizza',
        },
    },
    new_york_slice_v2: {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 40,
            rationale: 'Anchor reference for deck pizza, foldability, and slice-shop service behavior.',
            isIndispensable: true,
            redundancyGroup: 'new-york-pizza',
        },
    },
    detroit_style_classic: {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 50,
            rationale: 'Best-in-class example of pan caramelization, edge cheese logic, and square service format.',
            isIndispensable: true,
            redundancyGroup: 'american-pan-pizza',
        },
    },
    new_haven_apizza: {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 60,
            rationale: 'Important to teach the coal-oven lineage and the charred, minimal-topping New Haven branch.',
            isIndispensable: true,
            redundancyGroup: 'east-coast-pizza',
        },
    },
    'focaccia-genovese': {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 70,
            rationale: 'Bread-side cornerstone for oily pan baking, dimple management, and service versatility.',
            isIndispensable: true,
            redundancyGroup: 'italian-pan-bread',
        },
    },
    'ciabatta-classic': {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 80,
            rationale: 'High-hydration bread benchmark for open crumb, minimal shaping, and wet dough literacy.',
            isIndispensable: true,
            redundancyGroup: 'high-hydration-bread',
        },
    },
    sf_sourdough: {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 90,
            rationale: 'Core sourdough reference for fermentation depth, crust development, and naturally leavened process design.',
            isIndispensable: true,
            redundancyGroup: 'sourdough-country-loaf',
        },
    },
    nyc_bagel: {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 100,
            rationale: 'Teaches boil-and-bake structure, dense chew, and service-specific crumb expectations.',
            isIndispensable: true,
            redundancyGroup: 'bagel',
        },
    },
    baguette_tradition_francaise: {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 110,
            rationale: 'A true indispensable for lean bread literacy: crust, open crumb, scoring, steam, and daily-service context.',
            isIndispensable: true,
            redundancyGroup: 'french-lean-bread',
        },
    },
    japanese_shokupan: {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 120,
            rationale: 'Essential soft-bread benchmark for tangzhong/yudane logic, moisture retention, and pull-apart crumb.',
            isIndispensable: true,
            redundancyGroup: 'soft-sandwich-bread',
        },
    },
    'french-croissant': {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 130,
            rationale: 'Primary laminated pastry reference and the best entry point for layer architecture and proof control.',
            isIndispensable: true,
            redundancyGroup: 'laminated-pastry',
        },
    },
    naan_flatbread: {
        libraryCuration: {
            tier: 'flagship',
            visibility: 'featured',
            displayOrder: 140,
            rationale: 'Flatbread cornerstone that brings tandoor logic, yogurt enrichment, and high-heat blistering into the library.',
            isIndispensable: true,
            redundancyGroup: 'leavened-flatbread',
        },
    },
    chicago_deep_dish: {
        libraryCuration: {
            tier: 'core',
            visibility: 'standard',
            displayOrder: 210,
            rationale: 'Important American branch for butter-rich pan structure and reverse layering, but less foundational than the flagship set.',
        },
    },
    grandma_style_v2: {
        libraryCuration: {
            tier: 'core',
            visibility: 'standard',
            displayOrder: 220,
            rationale: 'Useful bridge between New York slice logic and pan pizza service, especially for square tray workflows.',
        },
    },
    chicago_tavern_v2: {
        libraryCuration: {
            tier: 'core',
            visibility: 'standard',
            displayOrder: 230,
            rationale: 'Distinctive thin-crust American branch that deserves inclusion without crowding the flagship pizza spine.',
        },
    },
    'sfincione-palermitano': {
        libraryCuration: {
            tier: 'core',
            visibility: 'standard',
            displayOrder: 240,
            rationale: 'Adds regional Sicilian context and a softer, sauced pan format that broadens the Italian pizza family tree.',
        },
    },
    'pane-toscano': {
        libraryCuration: {
            tier: 'core',
            visibility: 'standard',
            displayOrder: 250,
            rationale: 'Historically and culturally valuable as a saltless bread reference with a clear service identity.',
        },
    },
    arepa: {
        libraryCuration: {
            tier: 'core',
            visibility: 'standard',
            displayOrder: 260,
            rationale: 'Indispensable for Latin American flatbread coverage and non-wheat dough logic.',
        },
    },
    flour_tortilla_sonora: {
        libraryCuration: {
            tier: 'core',
            visibility: 'standard',
            displayOrder: 270,
            rationale: 'Important to cover extensible griddled flatbreads and the flour tortilla branch distinctly from naan and pita.',
        },
    },
    montreal_bagel: {
        libraryCuration: {
            tier: 'core',
            visibility: 'standard',
            displayOrder: 280,
            rationale: 'Strong comparative sibling to New York bagels, especially for sweetness, wood fire, and shape identity.',
            redundancyGroup: 'bagel',
            canonicalStyleId: 'nyc_bagel',
        },
    },
    pain_au_chocolat: {
        libraryCuration: {
            tier: 'core',
            visibility: 'standard',
            displayOrder: 290,
            rationale: 'A necessary laminated pastry sibling to croissant, showing how fill, shape, and service alter the same dough system.',
            redundancyGroup: 'laminated-pastry',
            canonicalStyleId: 'french-croissant',
        },
    },
    burger_buns_enriched: {
        libraryCuration: {
            tier: 'core',
            visibility: 'standard',
            displayOrder: 300,
            rationale: 'Covers the soft, resilient service-bun system better than a purely generic burger-bun entry.',
            redundancyGroup: 'service-buns',
        },
    },
    brazilian_gas_deck: {
        libraryCuration: {
            tier: 'specialist',
            visibility: 'hidden',
            displayOrder: 410,
            rationale: 'Relevant and worth keeping, but better framed as a specialist regional production style than a default browse entry.',
        },
    },
    'empanada-dough': {
        libraryCuration: {
            tier: 'specialist',
            visibility: 'hidden',
            displayOrder: 420,
            rationale: 'Useful in the broader dough universe, but not essential to the default flagship reading path of the library.',
        },
    },
};

export const STYLE_LIBRARY_NEXT_ADDITIONS: StyleLibraryRoadmapItem[] = [
    {
        id: 'pain-de-campagne',
        title: 'Pain de Campagne',
        reason: 'Needed to strengthen the canonical sourdough and rustic French bread branch beyond a single San Francisco reference.',
        sourcePath: 'src/data/styles/bread/pain_de_campagne.ts',
    },
    {
        id: 'pao-frances-brazil',
        title: 'Pão Francês',
        reason: 'A truly indispensable daily-service bread for Brazil and a strong bridge between lean rolls and bakery ritual.',
        sourcePath: 'src/data/styles/bread/pao_frances_brazil.ts',
    },
    {
        id: 'pita-bread-flatbread',
        title: 'Pita Bread',
        reason: 'Important for pocket-forming steam logic and a clearer Middle East flatbread anchor.',
        sourcePath: 'src/data/styles/bread/pita_bread_flatbread.ts',
    },
    {
        id: 'neapolitan-contemporary-high-hydration',
        title: 'Contemporary Neapolitan',
        reason: 'Needed as a modern comparison branch to classic Neapolitan for hydration, flour strength, and rim expansion.',
        sourcePath: 'src/data/styles/pizza/neapolitan_contemporary_high_hydration.ts',
    },
    {
        id: 'pain-aux-raisins',
        title: 'Pain aux Raisins',
        reason: 'Would complete the first laminated-pastry trio with a different shaping and filling logic.',
        sourcePath: 'src/data/styles/pastry/pain_aux_raisins.ts',
    },
];
