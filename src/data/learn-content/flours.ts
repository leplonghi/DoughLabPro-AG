import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const flourArticle: LearnArticleData = {
    id: "flour-core-composition",
    title: t('learn.flour__core_composition__gluten_potential'),
    subtitle: t('learn.the_foundation_of_structure_elasticity_and_dough_p'),
    category: t('learn.ingredient_science_6'),
    difficulty: t('learn.beginner_5'),
    tags: ["flour", "gluten", "protein", "ash"],

    intro: "Flour provides the proteins, starches and enzymes that define dough structure. Its gluten-forming capacity determines elasticity, gas retention and final texture.",
    history: "Wheat milling evolved from stone-grinding to modern roller milling. This increased extraction control, allowing bakers to select flours by protein level and ash content for consistent results.",

    technicalFoundations: [
        "Wheat flour contains proteins (gliadin + glutenin), starch granules, lipids and enzymes.",
        "Protein percentage predicts potential gluten strength, but quality matters as much as quantity.",
        "Ash content reflects mineral presence from the bran; higher ash = darker, more flavorful flours.",
        "Enzymes (amylase, protease) regulate sugar release and dough extensibility."
    ],

    doughImpact: [
        "High-protein flour forms stronger gluten networks, increasing elasticity and gas retention.",
        "Low-protein flour yields softer, shorter gluten, resulting in tenderness but less structure.",
        "Higher ash and whole grains increase fermentation activity due to enzyme presence.",
        "Starch damage influences hydration, fermentation rate and softness."
    ],

    bakingImpact: [
        "Strong flours support tall oven spring and open crumb.",
        "Soft flours brown faster due to higher simple sugar availability.",
        "Whole grain flours absorb more water and can shorten fermentation due to enzyme activity."
    ],

    practicalRanges: [
        { label: t('learn.neapolitan_2'), notes: "Recommended: 12% (Range: 11-12.5%)" },
        { label: t('learn.new_york'), notes: "Recommended: 13% (Range: 12-13.5%)" },
        { label: t('learn.bread_flour'), notes: "Recommended: 13.5% (Range: 12.5-14%)" },
        { label: t('learn.whole_wheat'), notes: "Recommended: 14% (Range: 13-15%)" }
    ],

    practicalApplications: [
        "Hydration auto-adjusts based on flour absorption profile in Calculator.",
        "Gluten strength influences the recommended mixing time in Calculator.",
        "Each style selects a default protein range aligned with tradition.",
        "Test blends: 00 + bread flour, bread flour + whole wheat in MyLab.",
        "Track how protein level impacts extensibility and oven spring in MyLab.",
        "Whole grain increases fermentation speed; adjust timing accordingly for Levain.",
        "Doughbot can flag underdevelopment if protein level is too high for mixing time."
    ],

    proTips: [
        "Blending flours allows fine control over gluten strength and flavor.",
        "Higher protein ≠ always better. Balance extensibility and elasticity."
    ],

    criticalPoints: [
        "Do not evaluate flour by protein alone; gluten quality varies.",
        "Switching brands changes absorption and fermentation — test before scaling recipes."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Protein % strongly affects hydration needs.",
        "Enzyme activity impacts fermentation rate and dough softness."
    ],

    variantsAndImplications: [
        {
            variant: "00 Flour (Low Ash)",
            implications: "Highly refined Italian-milled flour with low mineral content. High extensibility, ideal for high-temperature pizza. Light color, fast charring without bitterness."
        },
        {
            variant: t('learn.bread_flour_2'),
            implications: "High-protein flour commonly used for structured doughs. High elasticity; harder to stretch for beginners. Great oven spring; chewier crumb."
        },
        {
            variant: t('learn.whole_wheat_flour'),
            implications: "Flour with bran and germ intact. Higher absorption; can shorten fermentation time. Nuttier flavor; denser crumb unless blended."
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
        intro: "Sweetheart, think of flour like the 'skeleton' of your dough — it holds everything together. The stronger the flour, the stronger your dough will be. Some flours make stretchy dough, others make soft dough.",
        whatItDoes: "It forms gluten, absorbs water and helps your dough trap those little gas bubbles that make bread fluffy.",
        howToUse: "Choosing the right flour makes your pizza easier to stretch, tastier and more beautiful in the oven.",
        dangerSigns: "But careful: strong flour can be stubborn. If it fights back when you stretch it, let it rest a little — dough also gets tired."
    }
};