import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const fermentationData: LearnArticleData = {
    id: 'fermentation',
    title: 'Fermentation: The Biological Engine',
    subtitle: 'Yeast metabolism, the Crabtree Effect, and the production of flavor.',
    category: 'Fermentation Science',
    difficulty: 'Intermediate',
    tags: [t('learn.yeast_2'), t('learn.bacteria'), t('learn.metabolism'), t('learn.flavor_2')],

    intro: "Fermentation is the biological engine of bread making. It's the process where yeast and bacteria consume sugars to produce carbon dioxide (leavening), alcohol (flavor), and organic acids (strength and flavor). Understanding this process allows you to control the texture, volume, and taste of your final product.",

    history: "Fermentation is one of the oldest biotechnologies, dating back to ancient Egypt around 4000 BC. Early bakers discovered that leaving dough to sit caused it to rise and develop flavor, likely due to wild yeast spores settling from the air. For millennia, this process was a mystery. It wasn't until Louis Pasteur's work in the 19th century that we understood yeast as a living microorganism responsible for fermentation, paving the way for the isolated commercial yeast we use today.",

    technicalFoundations: [
        "Yeast (Saccharomyces cerevisiae) functions in two modes: Aerobic (with oxygen) and Anaerobic (without oxygen).",
        "Aerobic Respiration: Occurs initially during mixing. Yeast reproduces rapidly but produces mostly water and CO₂.",
        "Anaerobic Fermentation: The primary mode during bulk fermentation. Yeast consumes sugar to produce Ethanol (alcohol) and CO₂.",
        "The Crabtree Effect: In high-sugar environments like dough, yeast prefers anaerobic fermentation even if oxygen is present.",
        "Bacterial Fermentation: Lactic Acid Bacteria (LAB) produce Lactic Acid (yogurt-like) and Acetic Acid (vinegar-like), crucial for sourdough flavor."
    ],

    doughImpact: [
        "Gas Production: CO₂ gets trapped in the gluten network, causing the dough to rise (leavening).",
        "Gluten Development: Fermentation byproducts (acids and alcohol) strengthen the gluten network initially.",
        "Rheology Change: Over time, enzymes and acids soften the gluten, increasing extensibility."
    ],

    bakingImpact: [
        "Oven Spring: Rapid expansion of CO₂ and evaporation of alcohol contributes to the final volume.",
        "Crust Color: Residual sugars that weren't consumed by yeast participate in Maillard reaction.",
        "Flavor Profile: Ethanol and organic acids volatilize, creating the complex aroma of baked bread."
    ],

    practicalRanges: [
        { label: "Bulk Fermentation (24°C)", notes: "Recommended: 4h (Range: 2-6h)" },
        { label: "Cold Proof (4°C)", notes: "Recommended: 24h (Range: 12-72h)" },
        { label: "Final Proof (24°C)", notes: "Recommended: 2h (Range: 1-4h)" }
    ],

    practicalApplications: [
        "Set fermentation time in Calculator.",
        "Adjust yeast percentage in Calculator.",
        "Track pH drop in MyLab.",
        "Record rise percentage in MyLab.",
        "Ask Doughbot about fermentation times for different temperatures."
    ],

    proTips: [
        "The 'Fridge Effect': LAB are less sensitive to cold than yeast. In the fridge (4°C), yeast almost stops, but LAB keep working (slowly). This is why cold-fermented doughs become more sour/acidic over time.",
        "Watch the dough, not the clock. Temperature fluctuations drastically change fermentation speed."
    ],

    criticalPoints: [
        "Over-Fermentation (Acid Load): If fermentation goes too long, the acid produced by LAB begins to digest the gluten network. The dough turns into a sticky, unworkable soup that tears when you look at it.",
        "Under-Fermentation: Results in dense crumb, pale crust, and lack of flavor."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature: The most critical factor. For every 8°C (15°F) increase, yeast activity roughly doubles.",
        "Hydration: Higher hydration speeds up fermentation as nutrients are more mobile.",
        "Salt: Inhibits yeast activity. Forgetting salt can lead to runaway fermentation."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.direct_method'),
            implications: "Mixing all ingredients at once and fermenting. Requires careful time management. Standard crust and crumb."
        },
        {
            variant: t('learn.cold_fermentation_3'),
            implications: "Retarding the dough in the refrigerator. Dough becomes firmer and easier to handle cold. More blistering on the crust."
        }
    ],

    references: [
        "The Art of Fermentation - Sandor Katz (2012)",
        "Microbiology of Sourdough Fermentation - NCBI",
        "Modernist Pizza - Nathan Myhrvold & Francisco Migoya (2021)",
        "Handbook of Dough Fermentations - Karel Kulp (2003)",
        "On Food and Cooking - Harold McGee (2004)",
        "The Sourdough School - Vanessa Kimbell (2018)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Think of yeast like a hungry little pet. It eats the sugar in the flour and burps out gas bubbles. These bubbles get trapped in the dough balloon, making it puff up.",
        whatItDoes: t('learn.it_makes_the_bread_light_fluffy_and_tasty_instead_'),
        howToUse: "Without it, you're making crackers, not bread.",
        dangerSigns: "Don't let it go too long or the yeast will get tired and the dough will collapse."
    }
};