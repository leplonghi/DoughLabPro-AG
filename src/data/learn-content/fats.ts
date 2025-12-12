import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const fatsArticle: LearnArticleData = {
    id: "fats-oils-lubrication-oxidation",
    title: t('learn.fats__oils__lubrication_tenderness__oxidation'),
    subtitle: t('learn.influencing_tenderness_structure_lubrication_and_s'),
    category: t('learn.ingredient_science_5'),
    difficulty: t('learn.intermediate_14'),
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
        { label: t('learn.pizza_dough'), notes: "Recommended: 2% (Range: 1-5%)" },
        { label: t('learn.focaccia'), notes: "Recommended: 10% (Range: 5-15%)" },
        { label: t('learn.enriched_breads'), notes: "Recommended: 15% (Range: 5-25%)" }
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
            variant: t('learn.olive_oil'),
            implications: "Common in Italian doughs. Liquid, distinct aroma. Increases extensibility; makes dough more workable. Enhances crust crispness and aroma."
        },
        {
            variant: t('learn.butter'),
            implications: "Solid fat adding richness. Water content, melting behavior. Tenderizes and enriches dough. Adds aroma; softens crumb."
        },
        {
            variant: t('learn.lard'),
            implications: "Solid animal fat with unique plasticity. High saturation, stable structure. Enhances softness; improves handling. Tender bite; subtle savory notes."
        },
        {
            variant: t('learn.vegetable_oils'),
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
        whatItDoes: t('learn.fat_keeps_the_dough_tender_and_helps_it_brown_beau'),
        howToUse: t('learn.a_little_oil_or_butter_makes_the_dough_easier_to_s'),
        dangerSigns: t('learn.but_too_much_fat_makes_the_dough_lazy__it_wont_hol')
    }
};
