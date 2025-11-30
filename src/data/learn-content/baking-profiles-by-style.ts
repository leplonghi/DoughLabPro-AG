import { LearnArticleData } from '@/types/learn';

export const bakingProfilesArticle: LearnArticleData = {
    id: "baking-profiles-by-style",
    title: "Baking Profiles by Style",
    subtitle: "Temperature, heat curves and timing for major global pizza and bread styles.",
    category: "Baking Science",
    difficulty: "Advanced",
    tags: ["baking", "temperature", "oven-spring", "styles"],

    intro: "Different dough styles require specific baking profiles tailored to heat intensity, timing, and oven type. These profiles define texture, oven spring, crust color and aroma.",
    history: "Baking profiles evolved from traditional wood-fired methods and adapted to modern electric, gas and deck ovens.",

    technicalFoundations: [
        "Each style matches a heat curve: temperature + bake duration.",
        "Oven type determines radiant vs convective balance.",
        "Hydration influences required bake time.",
        "Thicker styles need lower temperature and longer time."
    ],

    doughImpact: [
        "Proper profile prevents burning or underbaking.",
        "Thin styles require fast high-heat baking.",
        "Thick styles depend on controlled internal gelatinization."
    ],

    bakingImpact: [
        "Defines signature texture and aroma.",
        "Affects oven spring and crust blistering.",
        "Controls crumb hydration and chew."
    ],

    practicalRanges: [
        { label: "Neapolitan Bake", notes: "Recommended: 450°C (Range: 420-480°C)" },
        { label: "NY Style Bake", notes: "Recommended: 320°C (Range: 290-350°C)" },
        { label: "Roman Pala Bake", notes: "Recommended: 280°C (Range: 260-300°C)" }
    ],

    practicalApplications: [
        "Bake profile recommendations adjust to hydration and style.",
        "Each style includes its precise baking formula.",
        "Test different baking curves and record crust color and spring.",
        "Levain styles adjust bake time due to acidity-driven coloration.",
        "OvenProfiler loads style-specific heat curves."
    ],

    proTips: [
        "Know your oven—matching the style to its strengths is crucial.",
        "High hydration needs longer bake for full gelatinization."
    ],

    criticalPoints: [
        "Wrong baking profile ruins texture even if fermentation is perfect.",
        "Thick styles need lower heat to avoid crust burning before crumb sets."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature strongly defines style identity.",
        "Hydration and flour strength adjust bake timing."
    ],

    variantsAndImplications: [
        {
            variant: "Neapolitan",
            implications: "Extreme heat, 60–90 seconds. Requires soft, extensible dough. Rapid rise, blistered cornicione."
        },
        {
            variant: "NY Style",
            implications: "Moderate-high heat, 4–7 minutes. Slightly stronger gluten. Balanced crust development."
        },
        {
            variant: "Roman Pala",
            implications: "Low-moderate heat, long bake. High hydration mandatory. Delayed crust set for expansion."
        }
    ],

    references: [
        "Vapiano Pizza Research Reports.",
        "AIB Pizza Baking Studies."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, each pizza style has its favorite oven mood — some like it super hot, others prefer slow and steady.",
        whatItDoes: "Different temperatures and times make different crusts. It creates each pizza’s unique texture and flavor.",
        howToUse: "Use the right heat to make your pizza just like the originals.",
        dangerSigns: "If you mismatch the temperature, the style loses its charm."
    }
};
