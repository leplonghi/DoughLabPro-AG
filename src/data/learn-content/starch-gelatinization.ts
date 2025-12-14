import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const starchGelatinizationArticle: LearnArticleData = {
    id: "starch-gelatinization",
    title: t('learn.starch_gelatinization'),
    subtitle: t('learn.how_starch_absorbs_water_swells_and_sets_the_crumb'),
    category: t('learn.baking_science_7'),
    difficulty: t('learn.advanced_13'),
    tags: ["starch", "gelatinization", "crumb", "structure"],

    intro: "Starch gelatinization is the process where starch granules absorb water, swell, and solidify to create the final crumb structure. It occurs during heating and is essential for the texture and stability of bread and pizza.",
    history: "Scientific understanding of starch gelatinization emerged from cereal chemistry research in the 20th century, providing insights into crumb development and baking performance.",

    technicalFoundations: [
        "Starch granules absorb water as temperature rises.",
        "Gelatinization typically occurs between 60–70°C depending on starch type.",
        "It contributes to crumb softness, moisture retention and structure.",
        "Incomplete gelatinization leads to gummy or dense crumb."
    ],

    doughImpact: [
        "Adequate hydration ensures proper gelatinization.",
        "High protein flours gelatinize slightly later due to stronger gluten networks.",
        "Sugar delays gelatinization by binding available water."
    ],

    bakingImpact: [
        "Controls final crumb texture and softness.",
        "Insufficient gelatinization leads to gummy crumb.",
        "Proper gelatinization ensures stable oven spring and crumb setting."
    ],

    practicalRanges: [
        { label: t('learn.gelatinization_start'), notes: "Recommended: 58°C (Range: 55-60°C)" },
        { label: t('learn.full_gelatinization'), notes: "Recommended: 68°C (Range: 60-72°C)" }
    ],

    practicalApplications: [
        "Hydration levels influence gelatinization potential in Calculator.",
        "Roman Pala and artisan breads rely heavily on deep gelatinization.",
        "Perform crumb transparency tests across hydration levels in MyLab.",
        "Acidity can modify starch hydration behavior.",
        "OvenProfiler evaluates whether oven temp supports full gelatinization."
    ],

    proTips: [
        "Avoid underbaking—internal starch must fully set.",
        "Hydration determines how well starch gelatinizes."
    ],

    criticalPoints: [
        "Underbaked dough feels gummy due to incomplete gelatinization.",
        "High sugar delays and disrupts gelatinization."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, temperature and sugar levels strongly influence gelatinization."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.highhydration_dough_2'),
            implications: "Plenty of water supports efficient gelatinization. Open crumb, soft texture. Higher rise potential. More translucent crumb walls."
        },
        {
            variant: t('learn.lowhydration_dough'),
            implications: "Limited water slows gelatinization. Dense crumb, firm texture. Reduced oven spring. Tighter crumb, reduced gloss."
        }
    ],

    references: [
        "Belitz, Grosch & Schieberle — Food Chemistry.",
        "AIB Cereal Science Reports."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, starch gelatinization is like cooking rice — the grains soak up water and get soft.",
        whatItDoes: t('learn.gives_bread_its_tender_inside'),
        howToUse: t('learn.inside_your_dough_starch_warms_up_and_absorbs_wate'),
        dangerSigns: t('learn.if_you_underbake_the_inside_stays_pasty')
    }
};