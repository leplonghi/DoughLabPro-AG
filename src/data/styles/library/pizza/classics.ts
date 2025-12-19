import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

export const NewYorkSlice: DoughStyleDefinition = {
    id: "new_york_slice_v2",
    name: "new_york_slice",
    category: "pizza",
    recipeStyle: RecipeStyle.NEW_YORK,
    family: "Flatbreads & Pizzas",
    description: "The quintessential American street pizza. Large, wide, foldable slices with a crispy bottom, tender chew, and slight drooping tip. Characterized by the use of oil and sugar/malt for browning at lower deck oven temperatures.",
    origin: {
        country: "USA",
        region: "New York City",
        period: "Early 1900s (Lombardi's)"
    },
    history: "Evolved from the Neapolitan pizza brought by Italian immigrants. Coal ovens turned into gas deck ovens, and the dough adapted with oil and sugar to retain moisture and brown at lower temperatures (500-550°F) for longer bakes.",
    difficulty: "Medium",
    fermentationType: "cold",
    technicalProfile: {
        hydration: [58, 65],
        salt: [2.0, 2.5],
        oil: [2.0, 3.0],
        sugar: [1.0, 2.0],
        flourStrength: "High Gluten (13-14%)",
        ovenTemp: [260, 300], // 500-575F
        recommendedUse: ["Cheese Slice", "Pepperoni", "White Pie"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix to full gluten development. [Science: Strong gluten network required to support the large surface area during stretching and baking.]",
            "Ball and cold ferment (24-72h). [Science: Cold environment slows yeast but allows protease enzymes to relax gluten for extensibility and amylase to generate sugars for browning.]",
            "Bring to room temp (2h) and stretch using knuckles/tossing. [Science: Warming up restores dough elasticity slightly, preventing tears.]"
        ]
    },
    tags: ["pizza", "american", "commercial", "foldable", "street-food"],
    pairings: {
        canonical: ["Low Moisture Mozzarella", "Oregano", "Pepperoni"],
        modern: ["Vodka Sauce", "Hot Honey"],
        regional: []
    },
    watchouts: [
        "Overheating the mixer: High gluten flour generates friction. Use ice water.",
        "Gummy layer: Sauce too watery or baked too fast.",
        "Pale crust: Lack of sugar/malt in a home oven environment."
    ],
    notes: [
        "Sugar or Diastatic Malt is essential for browning below 300°C.",
        "Oil (usually olive or soy blend) allows the slice to fold without cracking.",
        "The 'screen' method is often used initially to set the crust before finishing on the deck."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [
        { source: "The Pizza Bible", author: "Tony Gemignani" },
        { source: "PMQ Pizza Magazine" }
    ],
    images: {
        hero: "/images/styles/ny_hero.jpg",
        dough: "/images/styles/ny_dough.jpg",
        crumb: "/images/styles/ny_crumb.jpg"
    }
};

// Export as array for registry consumption
export const classicStyles: DoughStyleDefinition[] = [
    NewYorkSlice
];
