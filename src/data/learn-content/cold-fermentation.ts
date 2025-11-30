import { LearnArticleData } from '@/types/learn';

export const coldFermentationData: LearnArticleData = {
    id: "cold-fermentation",
    title: "Cold Fermentation",
    subtitle: "Slow fermentation at low temperatures for superior flavor, extensibility and structure.",
    category: "Fermentation Science",
    difficulty: "Intermediate",
    tags: ["cold-fermentation", "retarding", "flavor", "extensibility"],

    intro: "Cold fermentation slows yeast activity, increases flavor complexity, and enhances dough extensibility. It offers long working windows and superior texture for both pizza and bread.",
    history: "Cold fermentation became popular in professional pizzerias and artisan bakeries as refrigeration became standardized, enabling predictable long rises and improved dough structure.",

    technicalFoundations: [
        "Yeast activity decreases exponentially as temperature drops.",
        "Low temperature favors organic acid development which enhances aroma.",
        "Gluten relaxes gradually in cold conditions, improving extensibility.",
        "Cold dough absorbs gases slowly, stabilizing internal cell structure."
    ],

    doughImpact: [
        "Improves extensibility for shaping.",
        "Promotes flavor complexity through slow fermentation byproducts.",
        "Reduces risk of overproofing due to long timelines.",
        "Cold dough is initially elastic and must warm slightly before shaping."
    ],

    bakingImpact: [
        "Produces strong oven spring from well-developed internal gases.",
        "Enhanced browning from accumulated sugars.",
        "More open crumb and improved aroma."
    ],

    practicalRanges: [
        { label: "Refrigeration Time", notes: "Recommended: 24 hours (Range: 12-72 hours)" },
        { label: "Cold Fermentation Temperature", notes: "Recommended: 4°C (Range: 2-6°C)" }
    ],

    practicalApplications: [
        "Select 'Cold Fermentation' in the calculator to automatically reduce yeast %.",
        "NY style and artisan breads strongly benefit from cold fermentation.",
        "Run tests comparing 12h, 24h and 48h to log changes in extensibility and aroma.",
        "Levain doughs develop noticeable acidity in long cold fermentation.",
        "Doughbot flags when fermentation length exceeds structural stability limits."
    ],

    proTips: [
        "Allow dough to warm slightly before final shaping.",
        "Lower yeast percentage to prevent overactivity during warm-up."
    ],

    criticalPoints: [
        "Overly long cold fermentation weakens gluten.",
        "Temperature fluctuations drastically affect consistency."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Yeast percentage is extremely sensitive in cold fermentation.",
        "Hydration and flour strength determine cold-fermentation stability."
    ],

    variantsAndImplications: [
        {
            variant: "Short Cold Fermentation",
            implications: "12–18 hours at 4°C. Moderate flavor, balanced extensibility. Smoother texture, workable after short warm-up."
        },
        {
            variant: "Long Cold Fermentation",
            implications: "24–72 hours at 4°C. Deep flavor, high extensibility. Very relaxed dough; watch for structural weakening."
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
        intro: "Sweetheart, cold fermentation is like letting the dough sleep in the fridge so it wakes up full of flavor.",
        whatItDoes: "Cold slows the yeast, but gives the dough time to become tastier.",
        howToUse: "Makes the dough easier to stretch and more delicious.",
        dangerSigns: "Don’t leave it forever or it gets too soft and tired."
    }
};
