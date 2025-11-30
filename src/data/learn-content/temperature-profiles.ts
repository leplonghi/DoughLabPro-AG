import { LearnArticleData } from '@/types/learn';

export const temperatureProfilesArticle: LearnArticleData = {
    id: "temperature-profiles",
    title: "Temperature Profiles — Dough Temperature Management",
    subtitle: "How dough temperature (DT) controls fermentation, gluten behavior and timing.",
    category: "Fermentation Science",
    difficulty: "Advanced",
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
        { label: "Neapolitan DT Target", notes: "Recommended: 23°C (Range: 21-24°C)" },
        { label: "NY Style DT Target", notes: "Recommended: 25°C (Range: 24-26°C)" },
        { label: "Artisan Bread DT", notes: "Recommended: 24.5°C (Range: 23-26°C)" }
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
            variant: "Warm Profile",
            implications: "Higher DT accelerates fermentation. Fast, soft. Shorter working window. Larger bubbles; pale crust if underfermented."
        },
        {
            variant: "Cold Profile",
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
        whatItDoes: "It controls how fast the dough grows and how soft it feels.",
        howToUse: "Warm dough rises quickly; cool dough rises slowly.",
        dangerSigns: "Too warm and it rushes; too cold and it stalls."
    }
};
