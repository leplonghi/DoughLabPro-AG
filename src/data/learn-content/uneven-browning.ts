import { LearnArticleData } from '@/types/learn';

export const unevenBrowningData: LearnArticleData = {
    id: "uneven-browning",
    title: "Uneven Browning",
    subtitle: "Diagnosing hotspots, moisture pockets and ingredient-driven browning imbalance.",
    category: "Troubleshooting",
    difficulty: "Intermediate",
    tags: ["browning", "oven", "troubleshooting", "crust"],

    intro: "Uneven browning occurs when heat distribution, moisture levels or dough chemistry vary across the surface. It affects appearance and can indicate deeper process issues.",
    history: "Oven browning uniformity is a common subject in food engineering and oven design research.",

    technicalFoundations: [
        "Uneven heat exposure creates color variation.",
        "Moisture pockets delay browning.",
        "Sugar distribution impacts caramelization.",
        "Dough thickness variation creates differential baking."
    ],

    doughImpact: [
        "Thick spots stay pale, thin spots darken quickly.",
        "Uneven fermentation leads to color differences.",
        "Low gluten areas blister unevenly."
    ],

    bakingImpact: [
        "Hotspots create burnt patches.",
        "Cold zones cause persistent pallor.",
        "Moisture imbalance prevents uniform crust set."
    ],

    practicalRanges: [
        { label: "Target Oven Deck Variance", notes: "Recommended: 10°C Spread (Range: 0-15°C)" }
    ],

    practicalApplications: [
        "Fermentation curve mismatches influence browning uniformity in Calculator.",
        "Deck-oven styles show more browning variation than wood-fired.",
        "Record browning maps across oven positions in MyLab.",
        "Acidity-driven coloration varies with dough maturity.",
        "OvenProfiler highlights temperature gradients affecting browning."
    ],

    proTips: [
        "Rotate pizza halfway through bake in home ovens.",
        "Avoid uneven dusting flour distribution."
    ],

    criticalPoints: [
        "Cold dough creates pale spots — always reach room temp before baking.",
        "Uneven stretching creates thin and thick areas."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Heat distribution, dough thickness, sugar levels and moisture."
    ],

    variantsAndImplications: [
        {
            variant: "High Moisture Surface",
            implications: "Wet areas brown more slowly. Pale, soft. Wetter dough edges. Uneven coloration."
        },
        {
            variant: "Sugar Concentration Spots",
            implications: "Uneven fermentation creates sugar pockets. Dark spots, irregular burn. Inconsistent browning. Local caramelization spikes."
        }
    ],

    references: [
        "Food Engineering Reviews — Heat Transfer Variability.",
        "AIB Browning Consistency Research."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, uneven browning is like cooking pancakes on a pan that’s hotter on one side.",
        whatItDoes: "Creates light and dark patches.",
        howToUse: "Some parts heat faster than others.",
        dangerSigns: "The pizza looks uneven and may taste different. Rotate or adjust heat to even things out."
    }
};
