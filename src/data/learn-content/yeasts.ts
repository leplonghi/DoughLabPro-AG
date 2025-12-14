import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const yeastArticle: LearnArticleData = {
    id: "yeast-leavening-agents",
    title: t('learn.yeast__leavening_agents'),
    subtitle: t('learn.gas_production_aroma_development_and_fermentation_'),
    category: t('learn.ingredient_science_16'),
    difficulty: t('learn.beginner_13'),
    tags: ["yeast", "leavening", "fermentation", "ingredients"],

    intro: "Yeast transforms dough from dense paste into an aerated structure through gas production and biochemical reactions. Its behavior depends on type, dosage, temperature and time.",
    history: "Commercial yeast evolved from traditional brewing strains. Instant and active dry yeasts standardized production, while sourdough cultures preserved traditional fermentation complexity.",

    technicalFoundations: [
        "Saccharomyces cerevisiae consumes sugars and produces CO₂ and ethanol.",
        "Different yeast types require different hydration and handling.",
        "Fermentation curves depend on yeast % and dough temperature.",
        "Levain includes LAB (lactic acid bacteria) that influence acidity and aroma."
    ],

    doughImpact: [
        "Too little yeast slows fermentation and reduces oven spring.",
        "Too much yeast accelerates rise but weakens flavor and structure.",
        "Yeast type changes fermentation timing: instant is faster, fresh is milder."
    ],

    bakingImpact: [
        "Proper leavening produces strong oven spring and open crumb.",
        "Over-yeasted dough collapses early and bakes gummy.",
        "Levain produces deeper crust color due to acidity and sugar balance."
    ],

    practicalRanges: [
        { label: t('learn.instant_yeast'), notes: "Recommended: 0.3% (Range: 0.1-1.0%)" },
        { label: t('learn.fresh_yeast'), notes: "Recommended: 1.0% (Range: 0.3-3.0%)" },
        { label: "Cold Fermentation (Instant)", notes: "Recommended: 0.1% (Range: 0.05-0.2%)" }
    ],

    practicalApplications: [
        "Yeast % auto-adjusts with fermentation time and target dough temperature in Calculator.",
        "Calculator suggests minimal IDY amounts for long cold fermentation.",
        "Each style defines typical yeast curves for direct and cold fermentation.",
        "Run tests comparing 0.1% vs 0.3% vs 0.5% instant yeast in MyLab.",
        "Explain safe hybrid ratios (levain + commercial yeast).",
        "Doughbot flags under/over-proofing based on yeast amount and DT."
    ],

    proTips: [
        "Use yeast percentage + target dough temperature, not random increases.",
        "When switching yeast types, follow established equivalences."
    ],

    criticalPoints: [
        "Excess yeast cannot fix weak gluten.",
        "High yeast + warm dough = blowout risk."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature is the strongest driver of yeast speed.",
        "Salt reduces yeast activity; sugar increases it."
    ],

    variantsAndImplications: [
        {
            variant: "Instant Yeast (IDY)",
            implications: "Highly active, fast hydration. Fine granules, high activity, no prehydration. Fast fermentation; strong initial gas production. Good oven spring; ideal for low-skill mixing. Recommended for Most pizza styles, Cold fermentation."
        },
        {
            variant: "Active Dry Yeast (ADY)",
            implications: "Dehydrated yeast requiring rehydration. Medium granules, needs blooming. Slower start; consistent results. Balanced flavor, moderate spring. Recommended for Home baking, Direct doughs."
        },
        {
            variant: t('learn.fresh_yeast_2'),
            implications: "High moisture content, mild flavor. Soft blocks, short shelf-life. Reliable fermentation; sensitive to temperature. Mild aroma and good spring. Recommended for Artisan baking, Short fermentations."
        },
        {
            variant: "Sourdough (Levain)",
            implications: "Wild yeasts + LAB. Acidity, complex aroma. Lower gas production than commercial yeast; requires longer fermentation. Deep color and rich flavor due to organic acids. Recommended for Hybrid doughs, High-flavor breads."
        }
    ],

    references: [
        "Suas, M. Advanced Bread and Pastry.",
        "Calvel, R. The Taste of Bread."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, think of yeast as tiny helpers making little balloons inside your dough.",
        whatItDoes: t('learn.more_yeast_means_faster_rise_less_yeast_means_slow'),
        howToUse: t('learn.they_eat_sugars_and_fill_the_dough_with_air_making'),
        dangerSigns: t('learn.too_much_yeast_and_the_dough_grows_wild__then_fall')
    }
};