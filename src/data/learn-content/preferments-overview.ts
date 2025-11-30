import { LearnArticleData } from '@/types/learn';

export const prefermentsArticle: LearnArticleData = {
    id: "preferments-overview",
    title: "Preferments — Poolish, Biga & Pâte Fermentée",
    subtitle: "Flavor, extensibility and fermentation stability from pre-fermented dough.",
    category: "Fermentation Science",
    difficulty: "Advanced",
    tags: ["preferments", "poolish", "biga", "flavor"],

    intro: "Preferments are pre-fermented mixtures of flour, water and yeast (or levain) that enhance flavor, extensibility and fermentation stability. Each type offers unique hydration, aroma and strength profiles.",
    history: "Traditional European baking developed preferments to improve flavor and dough reliability before modern yeast became standardized.",

    technicalFoundations: [
        "Poolish: liquid preferment (~100% hydration).",
        "Biga: stiff preferment (~50–60% hydration).",
        "Pâte Fermentée: piece of old dough with salt included.",
        "Preferments develop organic acids, enzymes and stable gas cells."
    ],

    doughImpact: [
        "Enhance extensibility through enzymatic action.",
        "Improve flavor complexity and aroma.",
        "Stabilize fermentation in long processes.",
        "Too much preferment softens gluten excessively."
    ],

    bakingImpact: [
        "Better oven spring due to pre-developed gluten.",
        "Enhanced browning from increased sugars.",
        "Open and aromatic crumb."
    ],

    practicalRanges: [
        { label: "Poolish %", notes: "Recommended: 30% of flour (Range: 20-50%)" },
        { label: "Biga %", notes: "Recommended: 30% of flour (Range: 20-40%)" },
        { label: "Pâte Fermentée %", notes: "Recommended: 20% of dough weight (Range: 10-30%)" }
    ],

    practicalApplications: [
        "Adjust hydration based on preferment type (poolish adds water) in Calculator.",
        "Doughbot warns for excessive preferment percentages.",
        "NY and artisan bread often use preferments; Neapolitan rarely does.",
        "Run tests: 0%, 20% and 40% preferment to compare aroma in MyLab.",
        "Levain coexists with preferments but requires careful acidity balance.",
        "Preferment assistant recommends hydration adjustments."
    ],

    proTips: [
        "Poolish adds aroma and extensibility.",
        "Biga adds strength and controlled fermentation."
    ],

    criticalPoints: [
        "Too much preferment weakens dough.",
        "Each preferment needs its own fermentation schedule."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration heavily influences preferment behavior.",
        "Temperature strongly shapes enzyme and yeast activity."
    ],

    variantsAndImplications: [
        {
            variant: "Poolish",
            implications: "Wet, aromatic and enzymatically active. High extensibility, deep flavor. Softens dough; reduces mixing time. Open crumb and excellent aroma."
        },
        {
            variant: "Biga",
            implications: "Stiff, strong and structured. Gluten strength, controlled activity. Adds strength without excessive acidity. Great oven spring and chew."
        },
        {
            variant: "Pâte Fermentée",
            implications: "Old dough technique. Balanced flavor, salt present. Very stable fermentation. Classic European aroma."
        }
    ],

    references: [
        "Hamelman, J. Bread.",
        "Calvel, R. The Taste of Bread."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, preferments are like making a little head start for your dough.",
        whatItDoes: "It makes the dough tastier, softer and easier to handle.",
        howToUse: "You mix a small part of the dough ahead of time to develop flavor.",
        dangerSigns: "But too much starter makes the dough too soft — use just the right amount."
    }
};
