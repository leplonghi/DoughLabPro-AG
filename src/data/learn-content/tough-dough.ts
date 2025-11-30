import { LearnArticleData } from '@/types/learn';

export const toughDoughData: LearnArticleData = {
    id: "tough-dough",
    title: "Tough Dough",
    subtitle: "Diagnosing dough that resists stretching, tears or snaps back.",
    category: "Troubleshooting",
    difficulty: "Intermediate",
    tags: ["tough-dough", "elasticity", "extensibility", "troubleshooting"],

    intro: "Tough dough is characterized by excessive elasticity and low extensibility. It resists stretching, tears easily and makes shaping difficult.",
    history: "Dough toughness is widely studied in rheology, connecting gluten strength, hydration and fermentation to extensibility behavior.",

    technicalFoundations: [
        "High gluten alignment increases elasticity.",
        "Low hydration stiffens gluten strands.",
        "Insufficient fermentation keeps gluten tight.",
        "Cold dough is naturally tougher and less extensible."
    ],

    doughImpact: [
        "Dough snaps back during shaping.",
        "Tearing risk increases with low extensibility.",
        "Dough structure may become overly dense."
    ],

    bakingImpact: [
        "Tough dough bakes with reduced oven spring.",
        "Crumb becomes tight and chewy.",
        "Cornicione fails to expand properly."
    ],

    practicalRanges: [
        { label: "Extensibility Temperature", notes: "Recommended: 24°C (Range: 22-26°C)" }
    ],

    practicalApplications: [
        "Hydration and fermentation sliders influence extensibility predictions in Calculator.",
        "NY Style requires balanced extensibility; Neapolitan favors softness.",
        "Track dough temperature and extensibility across tests in MyLab.",
        "Acidity impacts gluten elasticity; over-acidic dough becomes tough.",
        "DoughBot flags elasticity issues from logged shaping failures."
    ],

    proTips: [
        "Let dough relax for 10–20 minutes before reattempting stretching.",
        "Increase hydration slightly when dealing with strong flour."
    ],

    criticalPoints: [
        "Cold dough is significantly tougher.",
        "Excessive gluten strength without rest leads to tearing."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, flour strength, fermentation time and temperature."
    ],

    variantsAndImplications: [
        {
            variant: "Under-Fermented Dough",
            implications: "Gluten remains tight and undeveloped. Elastic, resistant. Difficult stretching. Weak spring."
        },
        {
            variant: "Low Hydration",
            implications: "Not enough water to soften gluten. Firm, dry. Low extensibility. Dense crumb."
        }
    ],

    references: [
        "AIB Extensibility Studies.",
        "Calvel — Gluten Behavior in Fermentation."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, tough dough is like trying to stretch a tight rubber band.",
        whatItDoes: "Makes shaping hard.",
        howToUse: "It’s too stiff and keeps pulling back.",
        dangerSigns: "You can’t get a nice pizza shape this way. A little rest can soften even the toughest dough."
    }
};
