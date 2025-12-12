import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';
import { useTranslation } from '@/i18n';

export const DetroitStyle: DoughStyleDefinition = {
    id: "detroit_style_v2",
    name: t('styles.detroit_style_pizza'),
    category: "pizza",
    recipeStyle: RecipeStyle.DETROIT,
    family: t('styles.flatbreads__pizzas_2'),
    description: "A rectangular, deep-dish pizza baked in blue steel automotive parts pans. Famous for its crispy, cheesy edges (frico) created by spreading Wisconsin Brick Cheese (or cheddar blend) all the way to the perimeter. The sauce is typically ladled on TOP of the cheese after baking or halfway through.",
    origin: {
        country: t('styles.usa_6'),
        region: t('styles.detroit_mi'),
        period: "1946 (Buddy's Pizza)"
    },
    history: "Created by Gus Guerra at Buddy's Rendezvous in 1946 using blue steel pans from local automotive factories. The pans' conductive properties create the signature crust.",
    difficulty: t('styles.medium_20'),
    fermentationType: "preferment",
    technicalProfile: {
        hydration: [70, 75],
        salt: [2.0, 2.5],
        oil: [2.0, 4.0],
        sugar: [1.0, 2.0],
        flourStrength: "Bread Flour (12-13%)",
        ovenTemp: [260, 290],
        recommendedUse: [t('styles.classic_red_top'), ],
        difficulty: t('styles.medium_21'),
        fermentationSteps: [
            "Mix to medium development. [Science: Extensibility is more important than elasticity to allow dough to fill corners.]",
            "Bulk ferment 2h or cold ferment 24h.",
            "Pan proofing (Crucial): Dough must relax and fill the pan corners (2-4h). [Science: Retracting dough indicates gluten is still too tight; rest allows protease to work.]"
        ]
    },
    tags: ["pizza", "pan-pizza", "deep-dish", "american", "cheesy-crust", "frico"],
    pairings: {
        canonical: [t('styles.brick_cheese'), t('styles.pepperoni_cups')],
        modern: [t('styles.burrata'), t('styles.hot_honey_2')],
        regional: [t('styles.vernors_ginger_ale')]
    },
    watchouts: [
        "Soggy center: Ensure the pan is properly seasoned and use enough oil.",
        "Burnt cheese: Brick cheese allows high heat, but mozzarella burns faster.",
        "Dough retraction: If it won't stretch to corners, wait 20 mins and try again."
    ],
    notes: [
        "Traditional pans are Blue Steel which requires seasoning.",
        "Toppings often go: Dough -> Pepperoni -> Cheese -> Sauce (on top).",
        "The 'Frico' is the caramelized cheese lace around the edge."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [
        { source: "Buddy's Pizza History", url: "https://www.buddyspizza.com/history" },
        { source: t('styles.pizza_today_magazine') }
    ],
    images: {
        hero: "/images/styles/detroit_hero.jpg",
        dough: "/images/styles/detroit_dough.jpg",
        crumb: "/images/styles/detroit_crumb.jpg"
    }
};

export const GrandmaStyle: DoughStyleDefinition = {
    id: "grandma_style_v2",
    name: t('styles.grandma_pizza'),
    category: "pizza",
    recipeStyle: RecipeStyle.GRANDMA_STYLE,
    family: t('styles.flatbreads__pizzas_3'),
    description: "A thin, rectangular pan pizza that bridges the gap between home cooking and pizzeria style. Defined by a short proofing time (often no cold ferment) and being baked in an olive-oil coated sheet pan.",
    origin: {
        country: t('styles.usa_7'),
        region: t('styles.long_island_ny'),
        period: "1970s"
    },
    history: "Originated from Italian grandmothers (Nonnas) in Long Island making pizza at home with whatever they had (simple dough, crushed tomatoes, standard oven) without long fermentation times.",
    difficulty: t('styles.easy_6'),
    fermentationType: "direct",
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [3.0, 5.0], // High oil in dough + pan
        sugar: [1.0, 3.0],
        flourStrength: "All Purpose or Bread (11-12%)",
        ovenTemp: [230, 260],
        recommendedUse: [t('styles.classic_tomato__garlic'), t('styles.vodka_sauce_2')],
        difficulty: t('styles.easy_7'),
        fermentationSteps: [
            "Mix to moderate development. [Science: Doesn't need windowpane as it's supported by a pan.]",
            "Short bulk (1-2h). [Science: 'Grandma' style implies immediacy; rapid yeast activity is key.]",
            "Stretch into oiled pan immediately. [Science: Oil conducts heat for a fried bottom texture.]"
        ]
    },
    tags: ["pizza", "pan-pizza", "italian-american", "beginner-friendly", "thin-crust"],
    pairings: {
        canonical: [t('styles.garlic'), t('styles.crushed_tomatoes'), t('styles.mozzarella'), t('styles.olive_oil')],
        modern: [t('styles.pesto'), t('styles.fresh_mozzarella')],
        regional: [t('styles.none')]
    },
    watchouts: [
        "Sticking: Use plenty of oil in the pan.",
        "Soggy: Bake on the bottom rack of the oven.",
        "Blandness: Heavy garlic usage in the sauce is characteristic."
    ],
    notes: [
        "Often lightly par-baked with sauce before adding cheese.",
        "Texture should be crispy on bottom but dense/soft inside, not airy like Roman.",
        "Garlic is usually sliced, not minced, or infused in the oil."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Pizza History (Long Island)" }],
    images: {
        hero: "/images/styles/grandma_hero.jpg",
        dough: "/images/styles/grandma_dough.jpg",
        crumb: "/images/styles/grandma_crumb.jpg"
    }
};

// Export definitions
export const panStyles: DoughStyleDefinition[] = [
    DetroitStyle,
    GrandmaStyle
];
