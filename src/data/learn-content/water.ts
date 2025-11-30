import { LearnArticleData } from '@/types/learn';

export const waterArticle: LearnArticleData = {
    id: "water-hydration-dynamics",
    title: "Water & Hydration Dynamics",
    subtitle: "Hydration controls gluten formation, extensibility, fermentation speed and final texture.",
    category: "Ingredient Science",
    difficulty: "Beginner",
    tags: ["water", "hydration", "gluten", "fermentation"],

    intro: "Water activates gluten-forming proteins, drives enzymatic activity, defines dough rheology and regulates fermentation. Its temperature directly determines dough temperature (DT), which is the primary driver of fermentation speed.",
    history: "Traditional baking relied on ambient water sources with variable mineral content. Modern bakers understand water hardness, pH and temperature as critical variables affecting gluten development, fermentation and flavor.",

    technicalFoundations: [
        "Water hydrates gliadin and glutenin, enabling gluten networks to form.",
        "Warmer water increases dough temperature (DT), speeding fermentation.",
        "Hard water (high mineral content) strengthens gluten; soft water weakens it.",
        "Hydration percentage defines dough viscosity, extensibility and gas retention."
    ],

    doughImpact: [
        "Low hydration (50–58%) → tight, strong dough with limited extensibility.",
        "Medium hydration (60–65%) → balanced handling, ideal for many pizza styles.",
        "High hydration (68–80%+) → open crumb, high extensibility, but sticky handling.",
        "Water temperature defines initial dough temperature (DT), controlling yeast activity."
    ],

    bakingImpact: [
        "Higher hydration delays crust setting, allowing stronger oven spring.",
        "Low hydration produces denser crumbs and crispier crusts.",
        "Very high hydration encourages gelation and open, creamy crumb (e.g., focaccia)."
    ],

    practicalRanges: [
        { label: "Neapolitan", notes: "Recommended: 62% (Range: 58-65%)" },
        { label: "New York", notes: "Recommended: 65% (Range: 60-68%)" },
        { label: "Roman (Pala/Taglio)", notes: "Recommended: 78% (Range: 70-85%)" },
        { label: "Artisan Bread", notes: "Recommended: 75% (Range: 68-85%)" }
    ],

    practicalApplications: [
        "Hydration slider adjusts flour absorption based on style selection in Calculator.",
        "Water temperature input modifies the predicted dough temperature (DT).",
        "Each style specifies hydration ranges aligned with traditional handling and final texture.",
        "Run A/B hydration tests: 58% vs 62% vs 70% and compare structure in MyLab.",
        "Hydration affects levain acid balance; higher hydration increases LAB activity.",
        "Doughbot warns if hydration is too high for your flour type.",
        "DT Calculator suggests exact water temperature to hit your fermentation curve."
    ],

    proTips: [
        "Use water temperature—not yeast percentage—to control fermentation speed.",
        "High hydration requires stronger flour and gentler handling.",
        "If dough tears easily, reduce hydration or strengthen gluten through mixing."
    ],

    criticalPoints: [
        "Hydration changes dramatically between flours. Never assume universal numbers.",
        "Warm kitchens accelerate fermentation; adjust water temperature accordingly."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "DT (dough temperature) is the most sensitive fermentation parameter.",
        "Protease and amylase activity increase with hydration and temperature.",
        "Mineral content alters gluten strength significantly."
    ],

    variantsAndImplications: [
        {
            variant: "Soft Water (Low Mineral)",
            implications: "Water low in calcium and magnesium. Gentle on gluten, softer dough feel. Weaker gluten network; may require less hydration. Softer crumb, reduced chew. Recommended for Soft dough styles, Enriched doughs."
        },
        {
            variant: "Hard Water (High Mineral)",
            implications: "High mineral content (Ca²⁺ / Mg²⁺). Strengthens gluten, firmer dough. Increases dough strength; can reduce extensibility if excessive. More chew, more structure. Recommended for NY-style, Bagels, High-strength doughs."
        },
        {
            variant: "Temperature-Controlled Water",
            implications: "Water used to set target dough temperature (DT). Direct control of fermentation speed. Consistent fermentation curves. Predictable oven spring and crust quality."
        }
    ],

    references: [
        "Suas, M. Advanced Bread and Pastry.",
        "Calvel, R. The Taste of Bread.",
        "Hamelman, J. Bread."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Honey, water is like the 'wake-up call' for your flour. Without it, nothing happens.",
        whatItDoes: "More water makes a softer, airier dough. Less water makes a firmer, easier-to-handle dough.",
        howToUse: "When you add water, the flour comes alive — it stretches, gets soft, and starts forming the dough’s structure.",
        dangerSigns: "If the dough sticks too much to your fingers, don't worry — wetter doughs just need gentle hands and a little patience."
    }
};
