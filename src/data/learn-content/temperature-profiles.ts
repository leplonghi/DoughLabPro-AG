import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const temperatureProfilesArticle: LearnArticleData = {
    id: "temperature-profiles",
    title: t('learn.temperature_profiles__dough_temperature_management'),
    subtitle: "How dough temperature (DT) controls fermentation, gluten behavior and timing.",
    category: t('learn.fermentation_science_11'),
    difficulty: t('learn.advanced_16'),
    tags: ["temperature", "fermentation", "dough-temperature", "timing"],

    intro: "Dough temperature (DT) is the primary driver of fermentation speed. Maintaining predictable DT ensures consistent flavor, timing and dough strength.",
    history: "Professional bakers adopted DT control through the 'desired dough temperature' method using calculated water temperature.",

    technicalFoundations: [
        "Yeast activity doubles approximately every +6°C.",
        "DT = (Flour Temp + Room Temp + Friction Factor + Water Temp) / 4.",
        "Higher DT increases extensibility but weakens gluten if excessive.",
        "Cold dough slows fermentation and strengthens elasticity."
    ],

    doughImpact: [
        "Warm dough = fast fermentation and softer gluten.",
        "Cold dough = slow fermentation and stronger gluten.",
        "Stable DT = predictable fermentation curves.",
        "DT determines handling and shaping windows."
    ],

    bakingImpact: [
        "Warm dough produces higher oven spring.",
        "Cold dough produces tighter structure but improved flavor.",
        "DT affects final crumb openness."
    ],

    practicalRanges: [
        { label: t('learn.neapolitan_dt_target'), notes: "Recommended: 23°C (Range: 21-24°C)" },
        { label: t('learn.ny_style_dt_target'), notes: "Recommended: 25°C (Range: 24-26°C)" },
        { label: t('learn.artisan_bread_dt'), notes: "Recommended: 24.5°C (Range: 23-26°C)" }
    ],

    practicalApplications: [
        "Compute water temperature to hit target DT in Calculator.",
        "Warn when DT predicts too fast fermentation.",
        "Each style includes DT targets based on tradition and fermentation curve.",
        "Track DT at mixing, bulk and balling stages in MyLab.",
        "Levain thrives at tighter DT bands due to LAB sensitivity.",
        "DT Calculator provided inside Tools section."
    ],

    proTips: [
        "Use cold water in hot climates.",
        "Measure DT instead of guessing fermentation speed."
    ],

    criticalPoints: [
        "DT variations of ±2°C significantly alter fermentation.",
        "Warm kitchens require strict DT control."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature dominates fermentation behavior.",
        "Hydration amplifies DT effects."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.warm_profile'),
            implications: "Higher DT accelerates fermentation. Fast, soft. Shorter working window. Larger bubbles; pale crust if underfermented."
        },
        {
            variant: t('learn.cold_profile'),
            implications: "Low DT slows fermentation. Stable, predictable. Extended handling window. Better flavor and oven spring."
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
        intro: "Sweetheart, dough temperature is like the dough’s mood — warm and excited or cool and calm.",
        whatItDoes: t('learn.it_controls_how_fast_the_dough_grows_and_how_soft_'),
        howToUse: t('learn.warm_dough_rises_quickly_cool_dough_rises_slowly'),
        dangerSigns: t('learn.too_warm_and_it_rushes_too_cold_and_it_stalls')
    }
};