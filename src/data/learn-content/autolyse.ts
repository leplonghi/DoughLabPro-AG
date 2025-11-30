import { LearnArticleData } from '@/types/learn';

export const autolyseArticle: LearnArticleData = {
    id: "autolyse-technique",
    title: "Autolyse — Enzymatic Relaxation & Gluten Pre-Formation",
    subtitle: "How a simple rest improves extensibility, hydration and dough handling.",

    category: "Dough Science", // Updated category
    difficulty: "Intermediate",
    tags: ["autolyse", "extensibility", "hydration", "calvel"],

    intro: "Autolyse is the rest period where flour and water hydrate before kneading. It improves extensibility, enhances gluten alignment, reduces mixing time and develops flavor naturally.",

    history: "Developed by Professor Raymond Calvel, autolyse revolutionized artisan baking by enabling stronger doughs with less oxidation during mixing.",

    technicalFoundations: [
        "Hydration activates gliadin (extensibility) and glutenin (elasticity).",
        "Proteolytic enzymes soften gluten bonds during rest.",
        "Amylases release sugars, enhancing fermentation potential.",
        "Salt and yeast are excluded to prevent premature tightening or fermentation."
    ],

    doughImpact: [
        "Greatly increases extensibility.",
        "Reduces required mixing time by 20–40%.",
        "Easier shaping and smoother dough surface.",
        "Too long autolyse may weaken dough structure."
    ],

    bakingImpact: [
        "Improved oven spring from balanced strength.",
        "Enhanced aroma due to reduced oxidation.",
        "More open and even crumb structure."
    ],

    practicalRanges: [
        { label: "Short Autolyse", notes: "Recommended: 20 min (Range: 15-25 min)" },
        { label: "Standard Autolyse", notes: "Recommended: 30 min (Range: 20-60 min)" },
        { label: "Long Autolyse", notes: "Recommended: 90 min (Range: 60-120 min)" }
    ],

    practicalApplications: [
        "Hydration affects ideal autolyse length; wetter doughs benefit more.",
        "Neapolitan and artisan bread benefit significantly from autolyse.",
        "Compare 0 min vs 30 min vs 60 min autolyse batches to see handling differences.",
        "Levain doughs should limit autolyse to avoid over-softening due to acidity.",
        "Doughbot correlates autolyse with gluten relaxation curves."
    ],

    proTips: [
        "Keep autolyse simple: only flour + water.",
        "Shorten autolyse when using high whole grain percentages."
    ],

    criticalPoints: [
        "Salt and yeast restrict enzymatic relaxation.",
        "Over-autolysed dough becomes weak and sticky."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration deeply affects autolyse effectiveness.",
        "Whole grains accelerate enzymatic softening."
    ],

    variantsAndImplications: [
        {
            variant: "With Whole Grain",
            implications: "Shorter autolyse recommended. Deeper flavor."
        },
        {
            variant: "High Protein Flour",
            implications: "Longer autolyse beneficial. Maximizes oven spring."
        }
    ],

    references: [
        "Calvel, R. The Taste of Bread.",
        "Hamelman, J. Bread."
    ],

    images: [],
    diagrams: [],

    faq: [
        {
            q: "Can I add salt during autolyse?",
            a: "Technically no, that's called a 'fermentolyse' if yeast is added too. Salt tightens gluten, counteracting the relaxation benefit of autolyse."
        }
    ],

    grandmaVersion: {
        intro: "Sweetheart, autolyse is like letting the dough take a warm bath before working. Just flour and water resting together makes the dough softer and easier to handle.",
        whatItDoes: "It helps the dough stretch without tearing and needs less mixing later.",
        howToUse: "Your hands work less, and the dough becomes smooth and happy.",
        dangerSigns: "But leave it too long and the dough gets weak — everything in balance."
    }
};
