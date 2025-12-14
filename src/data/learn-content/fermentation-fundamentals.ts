import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const fermentationFundamentalsArticle: LearnArticleData = {
    id: "fermentation-fundamentals",
    title: t('learn.fermentation_fundamentals'),
    subtitle: t('learn.how_yeast_enzymes_and_temperature_create_gas_flavo'),
    category: t('learn.fermentation_science_6'),
    difficulty: t('learn.beginner_4'),
    tags: ["fermentation", "yeast", "enzymes", "temperature"],

    intro: "Fermentation is the biochemical process where yeast consumes sugars, producing CO₂, ethanol and flavor compounds. This activity drives dough expansion, aroma development and structural transformation.",
    history: "From ancient sourdoughs to commercial yeast, fermentation has defined bread quality for thousands of years. Modern science details yeast metabolism, enzymatic balance and temperature effects.",

    technicalFoundations: [
        "Yeast metabolizes sugars through glycolysis, producing CO₂ and ethanol.",
        "CO₂ inflates gas cells; gluten holds expansion.",
        "Enzymes break starch and proteins into fermentable compounds.",
        "Temperature controls fermentation speed exponentially."
    ],

    doughImpact: [
        "Proper fermentation gives structure, elasticity and gas retention.",
        "Underfermentation = tight crumb, poor spring.",
        "Overfermentation = collapse, acidity, weak gluten.",
        "Balanced fermentation improves handling and extensibility."
    ],

    bakingImpact: [
        "Gas and ethanol expand rapidly in the oven (oven spring).",
        "Proper fermentation gives open crumb and strong walls.",
        "Overproofed dough collapses due to weakened gluten."
    ],

    practicalRanges: [
        { label: "Bulk Fermentation (pizza)", notes: "Recommended: 2 hours at 22–24°C (Range: 1.5-3 hours)" },
        { label: "Bulk Fermentation (artisan bread)", notes: "Recommended: 3.5 hours at 24–26°C (Range: 2-5 hours)" }
    ],

    practicalApplications: [
        "Doughbot adjusts yeast % according to fermentation time and temperature.",
        "Predictive curves warn for over/under-fermentation risk.",
        "Neapolitan traditionally uses long fermentation; NY uses medium; Roman varies.",
        "Track fermentation time vs aroma development in MyLab.",
        "Log dough softness at different stages.",
        "Levain requires careful temperature management for balanced acidity.",
        "DT Calculator models fermentation speed across temperatures."
    ],

    proTips: [
        "Long fermentation with low yeast is superior for flavor.",
        "Use temperature—not yeast percentage—to control timing."
    ],

    criticalPoints: [
        "Temperature is the most powerful fermentation variable.",
        "Overfermentation permanently damages gluten."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Sugar, salt, temperature, hydration and yeast % all modify fermentation curves."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.short_fermentation'),
            implications: "Fast rise with more yeast. Fast, limited flavor. Less extensible. Small spring, simple aroma."
        },
        {
            variant: t('learn.long_fermentation'),
            implications: "Slow rise with less yeast. Flavor depth, better texture. More extensible and relaxed. Open crumb and rich aroma."
        }
    ],

    references: [
        "Hamelman, J. Bread.",
        "Calvel, R. The Taste of Bread.",
        "Suas, M. Advanced Bread and Pastry."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, fermentation is like the dough breathing — tiny bubbles growing inside.",
        whatItDoes: t('learn.it_gives_flavor_softness_and_airiness'),
        howToUse: t('learn.yeast_eats_sugar_and_makes_gas_that_puffs_the_doug'),
        dangerSigns: t('learn.but_if_you_let_it_go_too_long_the_dough_gets_tired')
    }
};