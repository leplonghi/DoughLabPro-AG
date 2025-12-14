import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const sensoryMaturationData: LearnArticleData = {
    id: 'sensory-maturation',
    title: 'Sensory Maturation: The Flavor Curve',
    subtitle: 'Why dough that looks ready might not taste ready.',
    category: 'Fermentation Science',
    difficulty: 'Intermediate',
    tags: ['fermentation', 'flavor', 'cold-proof', 'enzymes'],

    intro: "Dough development has two distinct timelines: structural maturity (gas retention) and sensory maturity (flavor development). Often, a dough will look ready before it tastes ready. Understanding this disconnect is key to making pizza that is not just puffy, but deeply flavorful.",

    history: "In the era of commodity bread, the definition of 'good bread' shifted from flavor to visual volume and whiteness. The sensory complexity of a naturally leavened loaf was often considered a defect (too sour, too dense) by industrial standards. The Slow Food movement and the artisan baking renaissance challenged this. Bakers began to talk about 'terroir' in grain and the 'finish' of a crust, borrowing language from wine tasting.",

    technicalFoundations: [
        "Structural Maturity: Achieved when gluten is strong and yeast has produced enough CO₂ to inflate the ball.",
        "Sensory Maturity: Achieved when enzymes have generated enough organic acids, amino acids, and sugars to create a complex profile.",
        "The Disconnect: Structural maturity often happens BEFORE sensory maturity. Baking then results in bland crust.",
        "Enzymatic Lag: Flavor development (proteolysis and amylolysis) is slower than yeast activity (fermentation) at warm temperatures."
    ],

    doughImpact: [
        "Cold Fermentation: Slows down yeast (structure) to allow enzymes (flavor) to catch up.",
        "Acid Development: Longer maturation increases organic acids, strengthening the gluten network initially but degrading it if over-extended.",
        "Extensibility: Mature dough is more extensible due to enzymatic breakdown of gluten bonds."
    ],

    bakingImpact: [
        "Maillard Reaction: Abundant amino acids and sugars in mature dough lead to better browning and 'roasty' flavors.",
        "Crust Blistering: Long cold fermentation often results in the characteristic 'leopard spotting' or micro-blisters on the crust.",
        "Aroma: A mature crust releases complex volatile compounds that are absent in quick doughs."
    ],

    practicalRanges: [
        {
            label: t('learn.cold_fermentation_time'),
            notes: "Recommended: 24-72 hours. <24h lacks depth; >72h risks gluten breakdown."
        },
        {
            label: t('learn.temperature_2'),
            notes: "Recommended: 4°C (39°F). Ideal for halting yeast while allowing enzymes to work."
        }
    ],

    practicalApplications: [
        "Use the 'Cold Fermentation' setting in the Calculator to extend your process.",
        "If you must bake same-day, use a preferment (Biga/Poolish) to inject pre-developed flavor.",
        "Smell your dough: It should smell like yogurt or ripe fruit, not just raw flour and yeast.",
        "Using a preferment allows you to pre-ferment a portion of the flour to develop flavor before mixing the final dough."
    ],

    proTips: [
        "The 'Biga' Cheat Code: Using a preferment allows you to pre-ferment a portion of the flour to develop flavor (sensory maturity) before mixing the final dough, giving you a complex taste in a shorter overall timeframe.",
        "If your dough smells like nail polish remover (acetone), it is over-matured and the gluten is likely compromised."
    ],

    criticalPoints: [
        "Over-Maturation: If you wait too long for flavor, the gluten degrades. You might get the best tasting pizza you've ever made, but it will be flat and dense because the structure collapsed. Balance is key.",
        "Flour Strength: You need stronger flour (higher W) to withstand long maturation times."
    ],

    regionalVariants: [
        "Neapolitan: Traditionally uses shorter maturation (8-24h) at room temp, relying on high heat for flavor.",
        "New York Style: Heavily relies on cold fermentation (48-72h) for that distinct chewy, savory crust.",
        "Roman Teglia: Uses very long cold fermentation (up to 96h) with very strong flour for maximum digestibility."
    ],

    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature: The most critical variable. A few degrees warmer can accelerate yeast too much, missing the flavor window.",
        "Hydration: Higher hydration accelerates enzymatic activity."
    ],

    variantsAndImplications: [],

    references: [
        "Modernist Bread - Nathan Myhrvold (2017)",
        "Flour Water Salt Yeast - Ken Forkish (2012)"
    ],

    images: [],
    diagrams: [],
    faq: [
        {
            q: t('learn.can_i_get_sensory_maturity_in_4_hours'),
            a: "Not really. You can fake it with additives (malt, acids) or preferments, but the depth of a true long fermentation takes time."
        },
        {
            q: t('learn.does_whole_wheat_mature_faster'),
            a: "Yes. The bran contains more enzymes and nutrients, accelerating both fermentation and maturation."
        }
    ],

    grandmaVersion: {
        intro: "Imagine making a stew. If you eat it right away, it's okay. But if you let it sit in the fridge overnight, it tastes amazing the next day. Dough is the same.",
        whatItDoes: "It gives the ingredients time to get to know each other and create deep, yummy flavors.",
        howToUse: t('learn.be_patient_let_your_dough_sleep_in_the_fridge_for_'),
        dangerSigns: t('learn.if_it_smells_like_vinegar_or_alcohol_you_waited_to')
    }
};