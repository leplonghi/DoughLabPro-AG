import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

export const ChicagoTavern: DoughStyleDefinition = {
    id: "chicago_tavern_v2",
    name: "chicago_tavern_style_2",
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    family: "Flatbreads & Pizzas",
    description: "The TRUE Chicago pizza (what locals actually eat). Ultra-thin, cracker-like crust, square-cut (party cut), and loaded with toppings under the cheese. The dough is rolled flat and cured to ensure zero rise.",
    origin: {
        country: "USA",
        region: "Chicago / Midwest",
        period: "1940s"
    },
    history: "Developed in post-Prohibition taverns as a salty, cracker-like snack to encourage drinking. The 'party cut' allowed patrons to hold a square in one hand and a beer in the other.",
    difficulty: "Medium",
    fermentationType: "cold",
    technicalProfile: {
        hydration: [45, 50],
        salt: [1.5, 2.0],
        oil: [0, 5.0], // Often corn oil or shortening
        sugar: [1.0, 2.0],
        flourStrength: "All Purpose or High Gluten (Variable)",
        ovenTemp: [260, 290],
        recommendedUse: ["Sausage & Giardiniera", "Pepperoni"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix to stiff dough. [Science: Low hydration prevents gluten mobility, ensuring potential for crispness.]",
            "Sheet/Roll flat immediately or after short rest. [Science: Mechanical degassing is key; no alveoli allowed.]",
            "Cure in fridge (24-48h). [Science: This is a 'relieving' phase where hydration equalizes and starch degrades, but no yeast rise is desired.]",
            "Dock heavily and bake. [Science: Docking prevents steam pockets from separating cheese from crust.]"
        ]
    },
    tags: ["pizza", "american", "midwest", "thin-crust", "party-cut", "cracker"],
    pairings: {
        canonical: ["Fennel Sausage", "Giardiniera", "Mozzarella"],
        modern: ["Italian Beef"],
        regional: ["Old Style Beer"]
    },
    watchouts: [
        "Bubble formation: If not docked enough, it will bubble and burn.",
        "Soggy center: Sauce must be thick; vegetables should be precooked or sliced thin.",
        "Toughness: If hydration is too low without enough fat, it becomes hard hardtack instead of crisp."
    ],
    notes: [
        "Use a rolling pin or pasta sheeter.",
        "The 'Party Cut' is non-negotiable.",
        "Curing the rolled skins in the fridge uncovered can help dry them out."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [
        { source: "Pizza City USA", author: "Steve Dolinsky" }
    ],
    images: {
        hero: "/images/styles/chicago_hero.jpg",
        dough: "/images/styles/chicago_dough.jpg",
        crumb: "/images/styles/chicago_crumb.jpg"
    },
    recommendedFlavorComponents: ["mozzarella_low_moisture", "tomato_sauce_cooked", "oregano_dried", "calabresa", "onions_fresh", "pepperoni", "italian_sausage", "garlic_fresh", "pecorino_romano", "hot_honey"]
};

export const thinStyles: DoughStyleDefinition[] = [
    ChicagoTavern
];
