import { LearnArticleData } from '@/types/learn';

export const fatsArticle: LearnArticleData = {
    id: "fats-oils-lubrication-oxidation",
    title: "Fats & Oils — Lubrication, Tenderness & Oxidation",
    subtitle: "Influencing tenderness, structure lubrication and shelf-life.",
    category: "Ingredient Science",
    difficulty: "Intermediate",
    tags: ["fats", "oils", "tenderness", "oxidation"],

    intro: "Fats coat gluten strands, improving tenderness, extensibility and softness. They slow staling and influence browning, aroma and dough rheology.",
    history: "Traditional doughs used animal fats (lard, butter). Modern baking introduced plant oils, emulsifiers and controlled lipid profiles to adjust structure and flavor.",

    technicalFoundations: [
        "Fats coat gluten proteins, limiting cross-linking and increasing tenderness.",
        "Liquid oils increase extensibility; solid fats add structure and richness.",
        "Oxidation affects flavor stability: saturated fats resist oxidation, unsaturated oils oxidize faster.",
        "Fats reduce water activity, slowing staling."
    ],

    doughImpact: [
        "Oils make dough softer and easier to stretch.",
        "Butter enriches dough, adding tenderness and aroma.",
        "Lard improves plasticity and bite.",
        "Excess fat weakens gluten too much, reducing gas retention."
    ],

    bakingImpact: [
        "Fats improve browning by enhancing heat transfer.",
        "Enriched doughs produce tender crumb and soft crust.",
        "Olive oil creates crisp surfaces in Roman-style and focaccia."
    ],

    practicalRanges: [
        { label: "Pizza Dough", notes: "Recommended: 2% (Range: 1-5%)" },
        { label: "Focaccia", notes: "Recommended: 10% (Range: 5-15%)" },
        { label: "Enriched Breads", notes: "Recommended: 15% (Range: 5-25%)" }
    ],

    practicalApplications: [
        "Fat % modifies recommended hydration.",
        "Olive oil triggers Roman-style crispness adjustments in Calculator.",
        "Test butter vs olive oil vs no fat to evaluate crumb softness differences in MyLab.",
        "High fat slows levain fermentation; extend proofing.",
        "Doughbot warns if fat % weakens gluten beyond safe handling range."
    ],

    proTips: [
        "Use oils for extensibility; use butter for richness.",
        "Avoid high fat in weak flours — it collapses gas retention."
    ],

    criticalPoints: [
        "Fats must be fully incorporated; streaks weaken structure.",
        "Rancid oils ruin flavor — store properly."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Fat % influences hydration strongly.",
        "Saturated vs unsaturated fats behave differently during baking."
    ],

    variantsAndImplications: [
        {
            variant: "Olive Oil",
            implications: "Common in Italian doughs. Liquid, distinct aroma. Increases extensibility; makes dough more workable. Enhances crust crispness and aroma."
        },
        {
            variant: "Butter",
            implications: "Solid fat adding richness. Water content, melting behavior. Tenderizes and enriches dough. Adds aroma; softens crumb."
        },
        {
            variant: "Lard",
            implications: "Solid animal fat with unique plasticity. High saturation, stable structure. Enhances softness; improves handling. Tender bite; subtle savory notes."
        },
        {
            variant: "Vegetable Oils",
            implications: "Neutral profile oils. Unsaturated, light flavor. Softens dough; increases extensibility. Consistent browning; mild flavor."
        }
    ],

    references: [
        "Calvel, R. The Taste of Bread.",
        "Suas, M. Advanced Bread and Pastry."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, fat is like lotion for your dough — it makes everything smooth and soft.",
        whatItDoes: "Fat keeps the dough tender and helps it brown beautifully.",
        howToUse: "A little oil or butter makes the dough easier to stretch and tastier when baked.",
        dangerSigns: "But too much fat makes the dough lazy — it won’t hold its shape."
    }
};
