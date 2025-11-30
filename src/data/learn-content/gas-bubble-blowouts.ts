import { LearnArticleData } from '@/types/learn';

export const gasBubbleBlowoutsData: LearnArticleData = {
    id: "gas-bubble-blowouts",
    title: "Gas Bubble Blowouts",
    subtitle: "Understanding excessive bubbling, runaway gas pockets and surface eruptions.",
    category: "Troubleshooting",
    difficulty: "Intermediate",
    tags: ["bubbles", "blowouts", "troubleshooting", "shaping"],

    intro: "Gas bubble blowouts occur when gas accumulates in concentrated pockets instead of distributing evenly. This leads to large blisters, eruptions or hollow sections.",
    history: "Blistering phenomena have been studied in pizza baking, linking fermentation irregularities and heat profile mismatch.",

    technicalFoundations: [
        "Gas accumulates where gluten is weaker or thinner.",
        "Uneven fermentation causes local CO₂ concentration.",
        "Excessive heat creates runaway blister formation.",
        "Overproofed dough increases bubble instability."
    ],

    doughImpact: [
        "Leads to fragile, thin spots that burst.",
        "Weak gluten pathways channel gas improperly.",
        "Irregular gas pockets reduce structural integrity."
    ],

    bakingImpact: [
        "Large blisters scorch quickly.",
        "Surface eruptions disrupt uniform baking.",
        "May cause hollow cornicione."
    ],

    practicalRanges: [
        { label: "Safe Proofing Range Before Blister Risk", notes: "Recommended: 80% (Range: 70-90%)" }
    ],

    practicalApplications: [
        "Fermentation timing and hydration influence bubble formation in Calculator.",
        "Neapolitan purposely promotes controlled blistering.",
        "Track bubble patterns by adjusting fermentation time in MyLab.",
        "Levain gas variability increases blister risk.",
        "DoughBot flags patterns that lead to blowouts."
    ],

    proTips: [
        "Avoid overstretching the center of the dough.",
        "Use a fork to gently dock trouble areas in certain styles."
    ],

    criticalPoints: [
        "Overproofing drastically increases blister risk.",
        "Uneven shaping produces bubble pathways that erupt."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Fermentation time, heat intensity and gluten uniformity."
    ],

    variantsAndImplications: [
        {
            variant: "Thin Spots During Stretching",
            implications: "Over-thinned dough channels gas upward. Fragile, prone to blisters. Sensitive structure. Large surface bubbles."
        },
        {
            variant: "Overproofed Dough",
            implications: "Gas pockets already enlarged pre-bake. Soft, volatile. Bubble instability. Eruptions during bake."
        }
    ],

    references: [
        "AVPN Blister Formation Observations.",
        "AIB Gas Cell Dynamics Research."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, gas blowouts are like bubbles bursting in boiling soup.",
        whatItDoes: "Makes huge bubbles pop on the surface.",
        howToUse: "Handle the dough gently and don’t overstretch thin areas.",
        dangerSigns: "Too much gas gathers in one spot and can burn or tear the dough."
    }
};
