import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const sugarsArticle: LearnArticleData = {
    id: "sugars-enzymatic-activity",
    title: t('learn.sugars__enzymatic_activity'),
    subtitle: "How sugars, amylase and fermentation chemistry shape browning, flavor and gas production.",
    category: t('learn.ingredient_science_12'),
    difficulty: t('learn.advanced_14'),
    tags: ["sugars", "enzymes", "browning", "fermentation"],

    intro: "Sugars influence fermentation speed, browning, flavor complexity and dough softness. Endogenous starch enzymes (amylases) convert starch into fermentable sugars that fuel yeast activity and improve crust coloration.",
    history: "Traditional breads relied solely on natural enzymatic sugar release. Modern baking introduced added sugars for enriched doughs, color control and fermentation balance.",

    technicalFoundations: [
        "Yeast primarily consumes simple sugars: glucose, fructose and maltose.",
        "Amylase enzymes (α-amylase and β-amylase) convert starch into maltose.",
        "Added sugars increase fermentation rate and browning.",
        "Excess sugar competes for water, tightening gluten and slowing hydration."
    ],

    doughImpact: [
        "Low sugar = mild fermentation and light browning.",
        "Moderate sugar enhances softness and fermentation stability.",
        "High sugar (>10%) slows yeast due to osmotic pressure.",
        "Enzyme-rich flours produce more fermentable sugars naturally."
    ],

    bakingImpact: [
        "More maltose = stronger Maillard reaction and deeper crust color.",
        "Added sugars caramelize, improving flavor and aroma.",
        "Sugar-rich dough browns faster and risks burning at high temperatures."
    ],

    practicalRanges: [
        { label: "Lean Doughs (Pizza/Bread)", notes: "Recommended: 1% (Range: 0-2%)" },
        { label: t('learn.enriched_doughs'), notes: "Recommended: 6% (Range: 3-10%)" },
        { label: t('learn.sweet_doughs'), notes: "Recommended: 14% (Range: 10-20%)" }
    ],

    practicalApplications: [
        "Doughbot adjusts fermentation predictions when sugar >5%.",
        "Warn users if sugar is too high for high-temperature baking.",
        "Roman and NY styles may use small sugar percentages.",
        "Compare 0%, 1% and 3% sugar batches to track crust color changes in MyLab.",
        "Levain fermentation is sensitive to excess sugar; use minimal amounts.",
        "Color predictor uses sugar %, malt presence and oven style."
    ],

    proTips: [
        "Use malt powder for controlled browning without excessive sweetness.",
        "Monitor sugar levels for high-heat ovens (Neapolitan)."
    ],

    criticalPoints: [
        "Too much sugar slows yeast dramatically.",
        "Different sugars caramelize at different temperatures."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Sugars strongly affect browning.",
        "High sugar impacts dough hydration and fermentation curves."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.natural_starch_sugars'),
            implications: "Sugars released from flour through enzymatic activity. Driven by amylase, varies by flour type. Stronger fermentation in whole grains. Naturally darker crusts."
        },
        {
            variant: t('learn.added_sugars'),
            implications: "Granulated sugar, honey, malt syrup. Fuel for yeast, enhances softness. Can slow hydration if excessive. Promotes caramelization."
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
        intro: t('learn.sweetheart_sugar_is_like_a_little_energy_snack_for'),
        whatItDoes: t('learn.it_speeds_up_the_yeast_and_adds_color_and_softness'),
        howToUse: t('learn.a_bit_of_sugar_helps_the_dough_grow_and_makes_the_'),
        dangerSigns: "Too much sugar makes the dough heavy and slow. And be careful — sugary dough burns faster in the oven."
    }
};
