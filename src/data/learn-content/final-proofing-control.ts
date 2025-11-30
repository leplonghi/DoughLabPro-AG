import { LearnArticleData } from '@/types/learn';

export const finalProofingControlData: LearnArticleData = {
    id: 'final-proofing-control',
    title: 'Final Proofing Control',
    subtitle: 'Managing the dough’s last fermentation stage before baking.',
    category: 'Process Techniques',
    difficulty: 'Intermediate',
    tags: ['Proofing', 'Fermentation', 'Oven Spring', 'Timing'],

    intro: "Final proofing determines dough readiness for baking. Correct proof level ensures optimal oven spring, crumb development and crust coloration.",
    history: "Proofing control evolved from artisan bakeries monitoring tactile cues, temperature influences and fermentation curves.",

    technicalFoundations: [
        "Proofing balances gas production and gluten elasticity.",
        "Temperature radically alters fermentation speed.",
        "Visual and tactile cues determine readiness.",
        "Overproofing weakens structure; underproofing restricts spring."
    ],

    doughImpact: [
        "Underproofed dough resists stretching and bakes dense.",
        "Properly proofed dough expands evenly.",
        "Overproofed dough collapses or spreads."
    ],

    bakingImpact: [
        "Correct proofing triggers optimal oven spring.",
        "Underproofed dough has tight crumb.",
        "Overproofed dough produces pale crust and low rise."
    ],

    practicalRanges: [
        { label: "Ideal Final Proofing Temperature", notes: "Recommended: 26°C (Range: 22-30°C)" }
    ],

    practicalApplications: [
        "Yeast % and temperature feed into proofing time estimates in Calculator.",
        "Different styles require proofing levels for characteristic texture.",
        "Track proofing readiness tests like poke test in MyLab.",
        "Record proofing duration vs rise results in MyLab.",
        "Levain proofing varies with pH levels and acidity.",
        "DoughBot flags under/overproof based on logged patterns."
    ],

    proTips: [
        "Use the poke test to confirm readiness.",
        "Consistency matters more than exact timing."
    ],

    criticalPoints: [
        "Overproofing is irreversible.",
        "Underproofed dough yields tight crumbs."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature and yeast percentage strongly affect proofing."
    ],

    variantsAndImplications: [
        {
            variant: "Warm Proofing",
            implications: "Fast fermentation with stronger activity. Rapid rise, soft dough. Easy to overproof. Faster coloration. Recommended for Commercial Yeast Doughs, Same-day Bakes."
        },
        {
            variant: "Cool Proofing",
            implications: "Slow fermentation, tighter control. Stable, predictable. Better gas retention. Improved oven spring. Recommended for Sourdough, Long Fermentation."
        }
    ],

    references: [
        "Calvel — The Taste of Bread.",
        "AIB Proofing Science Notes."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, final proofing is like waiting for dough to take a deep breath before baking.",
        whatItDoes: "Gives the bread its perfect rise.",
        howToUse: "It needs to puff up just the right amount.",
        dangerSigns: "Once overproofed, there’s no going back."
    }
};
