import { LearnArticleData } from '@/types/learn';

export const highHydrationArticle: LearnArticleData = {
    id: "high-hydration-management",
    title: "High Hydration Management",
    subtitle: "Handling wet doughs with confidence: strength, structure and techniques.",
    category: "Dough Science",
    difficulty: "Advanced",
    tags: ["hydration", "wet-dough", "handling", "structure"],

    intro: "High-hydration doughs (70–90%) produce open crumb, exceptional texture and increased fermentation activity. They require specific handling strategies to avoid stickiness and structural weakness.",
    history: "Modern artisan baking embraced high hydration to achieve airy, gelatinized crumb structures and delicate crusts.",

    technicalFoundations: [
        "Higher water increases enzyme activity and fermentation.",
        "Wet doughs rely on stretch & fold instead of kneading.",
        "High hydration softens gluten and increases extensibility.",
        "Temperature control prevents overactivity."
    ],

    doughImpact: [
        "Greater extensibility and softness.",
        "Higher risk of tearing without adequate folds.",
        "Improved gas expansion and bubble morphology.",
        "Sticky handling for inexperienced bakers."
    ],

    bakingImpact: [
        "Open crumb with translucent walls.",
        "Strong oven spring from delayed crust setting.",
        "Gelatinized, creamy crumb appearance."
    ],

    practicalRanges: [
        { label: "Intermediate Hydration", notes: "Recommended: 70% (Range: 65-75%)" },
        { label: "High Hydration", notes: "Recommended: 80% (Range: 75-85%)" },
        { label: "Ultra-High", notes: "Recommended: 88% (Range: 85-90%)" }
    ],

    practicalApplications: [
        "Hydration slider improves predictions for folds and fermentation rate in Calculator.",
        "Roman Pala and artisan breads recommended for >75% hydration.",
        "Test dough handling at 70%, 80% and 85% to track bubble structure in MyLab.",
        "High hydration increases LAB activity — shorter fermentation recommended.",
        "Doughbot warns when hydration exceeds safe handling for flour strength."
    ],

    proTips: [
        "Use coil folds instead of kneading.",
        "Wet hands and bench scraper are essential tools."
    ],

    criticalPoints: [
        "Temperature accelerates fermentation in wet doughs.",
        "Weak flour collapses easily at high hydration."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration dramatically affects rheology and fermentation curves.",
        "Enzyme activity increases with water levels."
    ],

    variantsAndImplications: [
        {
            variant: "High Hydration with Strong Flour",
            implications: "Better structure, less collapse risk. High protein, stability. Requires fewer folds. Better shape retention."
        },
        {
            variant: "High Hydration with Whole Grain",
            implications: "Higher absorption and enzyme activity. Fast fermentation. Requires careful timing. Deeper flavor but denser crumb."
        }
    ],

    references: [
        "Calvel, R. The Taste of Bread.",
        "Hamelman, J. Bread."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, wet dough is like trying to hold jelly — soft, wobbly and full of life.",
        whatItDoes: "More water helps the dough grow light and airy.",
        howToUse: "It’s stickier but makes bread full of big bubbles.",
        dangerSigns: "But handle gently, or the dough will spread or tear."
    }
};
