import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const highHydrationArticle: LearnArticleData = {
    id: "high-hydration-management",
    title: t('learn.high_hydration_management'),
    subtitle: t('learn.handling_wet_doughs_with_confidence_strength_struc'),
    category: t('learn.dough_science_9'),
    difficulty: t('learn.advanced_8'),
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
        { label: t('learn.intermediate_hydration'), notes: "Recommended: 70% (Range: 65-75%)" },
        { label: t('learn.high_hydration'), notes: "Recommended: 80% (Range: 75-85%)" },
        { label: t('learn.ultrahigh'), notes: "Recommended: 88% (Range: 85-90%)" }
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
            variant: t('learn.high_hydration_with_strong_flour'),
            implications: "Better structure, less collapse risk. High protein, stability. Requires fewer folds. Better shape retention."
        },
        {
            variant: t('learn.high_hydration_with_whole_grain'),
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
        whatItDoes: t('learn.more_water_helps_the_dough_grow_light_and_airy'),
        howToUse: t('learn.its_stickier_but_makes_bread_full_of_big_bubbles'),
        dangerSigns: t('learn.but_handle_gently_or_the_dough_will_spread_or_tear')
    }
};