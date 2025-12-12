import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const saltArticle: LearnArticleData = {
    id: "salt-functionality-osmotic-effects",
    title: t('learn.salt__functionality__osmotic_effects'),
    subtitle: t('learn.strengthens_gluten_regulates_fermentation_enhances'),
    category: t('learn.ingredient_science_9'),
    difficulty: t('learn.beginner_9'),
    tags: ["salt", "fermentation", "gluten", "flavor"],

    intro: "Salt strengthens gluten, moderates fermentation through osmotic pressure, improves dough handling and enhances flavor. Its type, granulation and purity define how it dissolves and interacts with yeast and proteins.",
    history: "Salt has been used in bread for thousands of years, from sea harvesting to rock salt mining. Industrial fine salt standardized dough behavior, while artisanal salts introduced mineral and texture variation.",

    technicalFoundations: [
        "Salt tightens gluten networks by strengthening protein bonds.",
        "Salt slows fermentation by drawing water from yeast cells (osmotic pressure).",
        "Lower salt → faster fermentation; higher salt → stronger dough but slower rise.",
        "Salt enhances flavor, masks bitterness and improves browning.",
        "Granulation affects dissolution speed, influencing yeast exposure."
    ],

    doughImpact: [
        "2.0–2.8% salt strengthens gluten and improves dough handling.",
        "Low salt (<1.8%) produces slack dough and faster fermentation.",
        "High salt (>3.0%) can inhibit yeast and cause underfermentation.",
        "Coarse salt dissolves slower, delaying its effect on dough strength."
    ],

    bakingImpact: [
        "Salt enhances crust color by improving Maillard balance.",
        "Proper salt levels translate to controlled expansion in the oven.",
        "Low-salt doughs brown too quickly due to higher sugar presence."
    ],

    practicalRanges: [
        { label: t('learn.standard_pizza'), notes: "Recommended: 2.3% (Range: 1.8-2.8%)" },
        { label: t('learn.hightemp_styles'), notes: "Recommended: 2.5% (Range: 2.2-2.8%)" },
        { label: t('learn.artisan_breads'), notes: "Recommended: 2.0% (Range: 1.8-2.2%)" }
    ],

    practicalApplications: [
        "Salt % modifies fermentation speed predictions in Calculator.",
        "Adjusting salt changes hydration recommendations for certain styles.",
        "Traditional styles define explicit salt ranges for flavor and structure.",
        "Experiment with 1.8%, 2.3% and 2.8% salt levels to test elasticity changes in MyLab.",
        "Salt strongly influences LAB activity; high salt suppresses acidity.",
        "Doughbot detects under-salted or over-salted dough based on fermentation rate."
    ],

    proTips: [
        "Always measure salt by weight, not volume.",
        "High salt slows yeast — extend fermentation instead of lowering yeast dramatically."
    ],

    criticalPoints: [
        "Large-flake salts must be dissolved fully to avoid inconsistent salinity.",
        "Too little salt can cause sticky, weak dough with poor shape retention."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Salt has high influence on fermentation speed.",
        "Granulation affects dissolution rate and early dough behavior."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.fine_table_salt'),
            implications: "Highly refined crystals with anti-caking agents. Fast dissolution, neutral flavor, consistent. Immediate impact on gluten and yeast. Predictable flavor and browning. Recommended for All styles, Precise baking."
        },
        {
            variant: t('learn.sea_salt'),
            implications: "Evaporated seawater with natural minerals. Complex flavor, varied crystal size. Slower dissolution depending on granulation; minerals may affect gluten slightly. Enhanced flavor complexity. Recommended for Artisan baking, Neapolitan blends."
        },
        {
            variant: t('learn.kosher_salt'),
            implications: "Large, airy flakes. Light density, variable salinity per volume. Dissolves slower; must measure by weight, not volume. Clean flavor; consistent crust coloration. Recommended for Hand-mixed doughs, Chefs preferring tactile control."
        },
        {
            variant: t('learn.himalayan_pink_salt'),
            implications: "Rock salt with trace minerals. Slower dissolution, distinct mineral notes. Slightly weaker initial gluten tightening; dissolves slower than fine salt. Subtle flavor complexity. Recommended for Artisan breads, Whole grain blends."
        }
    ],

    references: [
        "Calvel, R. The Taste of Bread.",
        "Suas, M. Advanced Bread and Pastry.",
        "Hamelman, J. Bread."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.sweetheart_salt_is_like_the_doughs_coach__it_keeps'),
        whatItDoes: t('learn.salt_slows_the_yeast_down_just_enough_so_the_dough'),
        howToUse: t('learn.a_little_salt_makes_your_dough_stronger_tastier_an'),
        dangerSigns: t('learn.too_much_salt_makes_the_yeast_shy__and_your_dough_')
    }
};
