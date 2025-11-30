import { LearnArticleData } from '@/types/learn';

export const bulkFermentationData: LearnArticleData = {
    id: 'bulk-fermentation-management',
    title: 'Bulk Fermentation Management',
    subtitle: 'Controlling the first rise for structure and flavour.',
    category: 'Process Techniques',
    difficulty: 'Intermediate',
    tags: ['Fermentation', 'Dough Strength', 'Folds', 'Timing'],

    intro: "Bulk fermentation is the 'first rise' where the entire dough mass ferments as one unit. It is the primary stage for flavor development and structural strengthening before dividing.",

    history: "Historically, bakers relied on long bulk fermentations in wooden troughs to develop flavor naturally. Modern commercial baking often shortens this phase for efficiency, sacrificing flavor. Artisan bakers have returned to extended bulk fermentation, often combined with folding techniques, to maximize quality.",

    technicalFoundations: [
        "Begins when mixing ends and concludes when dough is divided.",
        "Yeast produces CO₂ for volume; bacteria produce acids for strength and flavor.",
        "Gluten structure is reinforced through time and folding (rheology).",
        "Temperature directly dictates the rate of fermentation and enzymatic activity."
    ],

    doughImpact: [
        "Proper bulk yields a dough that is airy, strong, and extensible.",
        "Under-bulked dough is dense, tight, and lacks flavor complexity.",
        "Over-bulked dough is sticky, weak, and acidic, tearing easily."
    ],

    bakingImpact: [
        "Determines the final crumb structure (alveolation).",
        "Influences crust color and thickness through sugar consumption.",
        "Sets the baseline for oven spring potential."
    ],

    practicalRanges: [
        { label: "Room Temp (24°C)", notes: "Recommended: 4h (Range: 2-6h)" },
        { label: "Cold Bulk (4°C)", notes: "Recommended: 24h (Range: 12-72h)" },
        { label: "Volume Increase", notes: "Recommended: 50% (Range: 30-100%)" }
    ],

    practicalApplications: [
        "Set bulk fermentation time in the calculator to adjust yeast dosage.",
        "Neapolitan style typically uses a short bulk (2h), while NY Style often uses a cold bulk (24h).",
        "Log volume increase % during bulk in MyLab.",
        "Diagnose sticky dough issues related to over-bulk using Doughbot.",
        "Use a straight-sided container to accurately measure volume increase."
    ],

    proTips: [
        "Use a straight-sided container to accurately measure volume increase (e.g., mark the starting level).",
        "If the dough is rising too fast, put it in the fridge to slow it down."
    ],

    criticalPoints: [
        "Volume is a better indicator than time. Watch the dough, not the clock.",
        "Do not punch down pizza dough aggressively; preserve the gas for the crust."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature fluctuations of even 2°C can change bulk time by hours.",
        "Higher hydration doughs ferment faster due to increased molecular mobility."
    ],

    variantsAndImplications: [
        {
            variant: "Ambient Bulk",
            implications: "Fast, active, time-sensitive. Requires careful monitoring; can over-proof quickly. Standard flavor profile."
        },
        {
            variant: "Cold Bulk (Retardation)",
            implications: "Slow, enzymatic, forgiving. Develops complex organic acids; easier handling. Superior flavor, blistering on crust."
        },
        {
            variant: "Hybrid (Short Warm + Long Cold)",
            implications: "Balanced, best of both worlds. Sets structure early, develops flavor late. Excellent volume and taste."
        }
    ],

    references: [
        "Jeffrey Hamelman, Bread (2012)",
        "Nathan Myhrvold, Modernist Bread (2017)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Bulk fermentation is like the dough's teenage years.",
        whatItDoes: "It's growing up, getting strong, and developing its personality (flavor).",
        howToUse: "Keep it cozy but not too hot, or it will grow too fast and get exhausted.",
        dangerSigns: "If you rush this, your pizza will be tasteless and tough. If you wait too long, it gets old and tired."
    }
};
