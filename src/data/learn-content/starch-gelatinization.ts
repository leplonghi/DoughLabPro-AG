import { LearnArticleData } from '@/types/learn';

export const starchGelatinizationArticle: LearnArticleData = {
    id: "starch-gelatinization",
    title: "Starch Gelatinization",
    subtitle: "How starch absorbs water, swells and sets the crumb structure.",
    category: "Baking Science",
    difficulty: "Advanced",
    tags: ["starch", "gelatinization", "crumb", "structure"],

    intro: "Starch gelatinization is the process where starch granules absorb water, swell, and solidify to create the final crumb structure. It occurs during heating and is essential for the texture and stability of bread and pizza.",
    history: "Scientific understanding of starch gelatinization emerged from cereal chemistry research in the 20th century, providing insights into crumb development and baking performance.",

    technicalFoundations: [
        "Starch granules absorb water as temperature rises.",
        "Gelatinization typically occurs between 60–70°C depending on starch type.",
        "It contributes to crumb softness, moisture retention and structure.",
        "Incomplete gelatinization leads to gummy or dense crumb."
    ],

    doughImpact: [
        "Adequate hydration ensures proper gelatinization.",
        "High protein flours gelatinize slightly later due to stronger gluten networks.",
        "Sugar delays gelatinization by binding available water."
    ],

    bakingImpact: [
        "Controls final crumb texture and softness.",
        "Insufficient gelatinization leads to gummy crumb.",
        "Proper gelatinization ensures stable oven spring and crumb setting."
    ],

    practicalRanges: [
        { label: "Gelatinization Start", notes: "Recommended: 58°C (Range: 55-60°C)" },
        { label: "Full Gelatinization", notes: "Recommended: 68°C (Range: 60-72°C)" }
    ],

    practicalApplications: [
        "Hydration levels influence gelatinization potential in Calculator.",
        "Roman Pala and artisan breads rely heavily on deep gelatinization.",
        "Perform crumb transparency tests across hydration levels in MyLab.",
        "Acidity can modify starch hydration behavior.",
        "OvenProfiler evaluates whether oven temp supports full gelatinization."
    ],

    proTips: [
        "Avoid underbaking—internal starch must fully set.",
        "Hydration determines how well starch gelatinizes."
    ],

    criticalPoints: [
        "Underbaked dough feels gummy due to incomplete gelatinization.",
        "High sugar delays and disrupts gelatinization."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, temperature and sugar levels strongly influence gelatinization."
    ],

    variantsAndImplications: [
        {
            variant: "High-Hydration Dough",
            implications: "Plenty of water supports efficient gelatinization. Open crumb, soft texture. Higher rise potential. More translucent crumb walls."
        },
        {
            variant: "Low-Hydration Dough",
            implications: "Limited water slows gelatinization. Dense crumb, firm texture. Reduced oven spring. Tighter crumb, reduced gloss."
        }
    ],

    references: [
        "Belitz, Grosch & Schieberle — Food Chemistry.",
        "AIB Cereal Science Reports."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, starch gelatinization is like cooking rice — the grains soak up water and get soft.",
        whatItDoes: "Gives bread its tender inside.",
        howToUse: "Inside your dough, starch warms up and absorbs water, making the crumb soft.",
        dangerSigns: "If you underbake, the inside stays pasty."
    }
};
