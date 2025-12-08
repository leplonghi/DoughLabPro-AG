import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

export const DetroitStyle: DoughStyleDefinition = {
    id: "detroit_style_v2",
    name: "Detroit Style Pizza",
    category: "pizza",
    recipeStyle: RecipeStyle.DETROIT,
    family: "Flatbreads & Pizzas",
    description: "A rectangular, deep-dish pizza baked in blue steel automotive parts pans. Famous for its crispy, cheesy edges (frico) created by spreading Wisconsin Brick Cheese (or cheddar blend) all the way to the perimeter. The sauce is typically ladled on TOP of the cheese after baking or halfway through.",
    origin: {
        country: "USA",
        region: "Detroit, MI",
        period: "1946 (Buddy's Pizza)"
    },
    history: "Created by Gus Guerra at Buddy's Rendezvous in 1946 using blue steel pans from local automotive factories. The pans' conductive properties create the signature crust.",
    difficulty: "Medium",
    fermentationType: "preferment",
    technicalProfile: {
        hydration: [70, 75],
        salt: [2.0, 2.5],
        oil: [2.0, 4.0],
        sugar: [1.0, 2.0],
        flourStrength: "Bread Flour (12-13%)",
        ovenTemp: [260, 290],
        recommendedUse: ["Classic Red Top", "Pepperoni (under cheese)"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix to medium development. [Science: Extensibility is more important than elasticity to allow dough to fill corners.]",
            "Bulk ferment 2h or cold ferment 24h.",
            "Pan proofing (Crucial): Dough must relax and fill the pan corners (2-4h). [Science: Retracting dough indicates gluten is still too tight; rest allows protease to work.]"
        ]
    },
    tags: ["pizza", "pan-pizza", "deep-dish", "american", "cheesy-crust", "frico"],
    pairings: {
        canonical: ["Brick Cheese", "Tomato Sauce (on top)", "Pepperoni cups"],
        modern: ["Burrata", "Hot Honey"],
        regional: ["Vernors Ginger Ale"]
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
        { source: "Pizza Today Magazine" }
    ],
    images: {
        hero: "/images/styles/detroit_hero.jpg",
        dough: "/images/styles/detroit_dough.jpg",
        crumb: "/images/styles/detroit_crumb.jpg"
    }
};

export const GrandmaStyle: DoughStyleDefinition = {
    id: "grandma_style_v2",
    name: "Grandma Pizza",
    category: "pizza",
    recipeStyle: RecipeStyle.GRANDMA_STYLE,
    family: "Flatbreads & Pizzas",
    description: "A thin, rectangular pan pizza that bridges the gap between home cooking and pizzeria style. Defined by a short proofing time (often no cold ferment) and being baked in an olive-oil coated sheet pan.",
    origin: {
        country: "USA",
        region: "Long Island, NY",
        period: "1970s"
    },
    history: "Originated from Italian grandmothers (Nonnas) in Long Island making pizza at home with whatever they had (simple dough, crushed tomatoes, standard oven) without long fermentation times.",
    difficulty: "Easy",
    fermentationType: "direct",
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [3.0, 5.0], // High oil in dough + pan
        sugar: [1.0, 3.0],
        flourStrength: "All Purpose or Bread (11-12%)",
        ovenTemp: [230, 260],
        recommendedUse: ["Classic Tomato & Garlic", "Vodka Sauce"],
        difficulty: "Easy",
        fermentationSteps: [
            "Mix to moderate development. [Science: Doesn't need windowpane as it's supported by a pan.]",
            "Short bulk (1-2h). [Science: 'Grandma' style implies immediacy; rapid yeast activity is key.]",
            "Stretch into oiled pan immediately. [Science: Oil conducts heat for a fried bottom texture.]"
        ]
    },
    tags: ["pizza", "pan-pizza", "italian-american", "beginner-friendly", "thin-crust"],
    pairings: {
        canonical: ["Garlic", "Crushed Tomatoes", "Mozzarella", "Olive Oil"],
        modern: ["Pesto", "Fresh Mozzarella"],
        regional: ["None"]
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
