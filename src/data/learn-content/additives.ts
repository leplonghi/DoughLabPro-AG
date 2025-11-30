import { LearnArticleData } from '@/types/learn';

export const additivesArticle: LearnArticleData = {
    id: "additives-dough-conditioners",
    title: "Additives & Dough Conditioners",
    subtitle: "Improvers that refine gluten, fermentation behavior, softness and shelf life.",

    category: "Ingredient Science",
    difficulty: "Advanced",
    tags: ["additives", "improvers", "enzymes", "shelf-life"],

    intro: "Additives and dough conditioners enhance extensibility, fermentation performance, softness and shelf-life. They modify gluten bonds, pH, enzyme balance and gas retention.",

    history: "Commercial baking introduced oxidizers, emulsifiers and enzymes to achieve consistent large-scale dough performance. Artisan baking uses natural conditioners like preferments and malt.",

    technicalFoundations: [
        "Oxidizers (ascorbic acid) strengthen gluten.",
        "Emulsifiers (lecithin, DATEM) improve gas retention.",
        "Enzymes adjust starch and protein breakdown.",
        "Acidic additives improve extensibility and shelf life."
    ],

    doughImpact: [
        "Mild conditioners improve handling and stability.",
        "Excessive conditioners can make dough artificial or rubbery.",
        "Enzymes can dramatically affect fermentation rate."
    ],

    bakingImpact: [
        "Improvers increase volume and uniform crumb.",
        "They enhance browning balance and crust elasticity.",
        "Emulsifiers soften bread for longer."
    ],

    practicalRanges: [
        { label: "Ascorbic Acid", notes: "Recommended: 0.01% (Range: 0.002-0.02%)" },
        { label: "Lecithin", notes: "Recommended: 0.5% (Range: 0.1-1%)" },
        { label: "Malt Powder", notes: "Recommended: 2% (Range: 0.5-3%)" }
    ],

    practicalApplications: [
        "Be cautious not to exceed recommended technical limits for conditioners.",
        "Note that these are rarely used in traditional pizza styles.",
        "Experiment with natural improvers vs. no improver to observe differences in aroma and softness.",
        "Avoid mixing aggressive conditioners with levain acidity.",
        "Monitor for abnormal fermentation rates which may indicate enzyme overload."
    ],

    proTips: [
        "Prefer natural improvers for artisan dough.",
        "Avoid emulsifiers in high-end pizza unless necessary."
    ],

    criticalPoints: [
        "Excess additives alter dough flavor.",
        "Some conditioners require micro-dosages — precision is critical."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Conditioners alter gluten, enzymes and fermentation curves."
    ],

    variantsAndImplications: [
        {
            variant: "Natural Improvers",
            implications: "Better fermentation and softness. Natural color and improved aroma."
        },
        {
            variant: "Commercial Conditioners",
            implications: "More strength and tolerance. Greater loaf volume."
        }
    ],

    references: [
        "Suas, M. Advanced Bread and Pastry."
    ],

    images: [],
    diagrams: [],

    faq: [
        {
            q: "Are additives necessary for home baking?",
            a: "Generally no. High-quality flour and proper fermentation usually suffice. Additives are more for correcting flour deficiencies or specific commercial needs."
        }
    ],

    grandmaVersion: {
        intro: "Sweetheart, additives are like vitamins for your dough — a tiny bit can help a lot. Some help the dough stay soft, others make it stronger or help it rise better.",
        whatItDoes: "They make the dough easier to work and sometimes last longer.",
        howToUse: "Natural options add flavor, while artificial ones need caution.",
        dangerSigns: "But too much 'vitamin' makes the dough strange — use just a pinch."
    }
};
