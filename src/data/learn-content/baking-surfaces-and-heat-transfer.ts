import { LearnArticleData } from '@/types/learn';

export const bakingSurfacesAndHeatTransferData: LearnArticleData = {
    id: "baking-surfaces-and-heat-transfer",
    title: "Baking Surfaces & Heat Transfer",
    subtitle: "Stones, steels, pans and how they change your bake",
    category: 'Baking Science',
    difficulty: 'Intermediate',
    tags: ['baking-stone', 'pizza-steel', 'heat-transfer', 'pans'],

    intro: "The surface between your dough and the oven controls how quickly heat enters the base. Choosing the right stone, steel or pan is as important as choosing the right formula.",
    history: "Traditional brick and stone decks gradually gave way to steel, aluminium and specialty pans. Home bakers adopted pizza steels and baking stones to mimic professional decks in domestic ovens.",

    technicalFoundations: [
        "Heat transfer depends on material conductivity, thickness, mass and contact quality between dough and surface.",
        "Steel conducts heat faster than stone, but stone can provide smoother, more forgiving heat over time.",
        "Dark pans absorb and radiate heat differently from light or shiny pans; coatings also influence browning.",
        "High-hydration pan doughs rely on oil and pan material to fry and steam the base simultaneously.",
        "Thermal mass determines how much temperature drop occurs when multiple pizzas are baked sequentially."
    ],

    doughImpact: [
        "Very conductive surfaces (steel) can handle slightly higher hydration without underbaking, if bake time is tuned.",
        "Inadequate heat from below promotes gum lines, especially under wetter toppings and sauces.",
        "Thick pans and heavy stones take longer to preheat but provide more stable heat across many bakes."
    ],

    bakingImpact: [
        "Steels excel at fast bottom colour and crispness in lower-temperature ovens, but can burn bases if misused.",
        "Stones provide gentler heat and are more forgiving of small loading errors.",
        "Pans create distinct edge and bottom textures (fried edges, caramelised cheese, etc.), integral to certain styles."
    ],

    practicalRanges: [
        {
            label: "Pizza steel",
            notes: "6–10 mm carbon steel. Great for New York-style and crisp home-oven pizzas."
        },
        {
            label: "Baking stone / cordierite",
            notes: "10–20 mm. More forgiving; suitable for a wide range of styles."
        },
        {
            label: "Pan baking",
            notes: "Steel or aluminium pans. Used for Detroit style, Sicilian, focaccia."
        }
    ],

    practicalApplications: [
        "Select baking surface type as part of the oven profile to adjust suggested bake times.",
        "Be aware of potential underbake when combining high hydration with low-conductivity surfaces.",
        "Each style should specify its canonical baking surface (deck, steel, stone, specific pan type).",
        "Log surface type, preheat duration and rack position for each batch in MyLab.",
        "When diagnosing gum lines or burnt bottoms, consider surface material and preheat information.",
        "Adjustments like longer preheat, different rack position or switching surface material can fix baking issues."
    ],

    proTips: [
        "Preheat stones and steels longer than you think; stable heat is more important than air temperature alone.",
        "Use parchment or a launch peel only as needed; too many layers between dough and surface slow heat transfer."
    ],

    criticalPoints: [
        "Moving a steel or stone right before baking can crack it or cause uneven heat distribution.",
        "Extremely thin or low-quality stones may fracture under thermal stress or fail to deliver adequate bottom heat."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "Modernist Pizza - Nathan Myhrvold et al. (2021)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Imagine this like a secret ingredient. It helps make your bread better.",
        whatItDoes: "Improves texture and flavor by cooking the bottom just right.",
        howToUse: "Use a stone or steel to get that pizzeria crunch at home.",
        dangerSigns: "Use it wisely! Too hot and it burns, too cold and it's soggy."
    },
};
