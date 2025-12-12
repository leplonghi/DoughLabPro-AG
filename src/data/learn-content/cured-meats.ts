import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const curedMeatsData: LearnArticleData = {
    id: 'cured-meats',
    title: 'Cured Meats: The Science of Preservation & Umami',
    subtitle: 'Understanding water activity (aw), protein hydrolysis, and the behavior of lipids under high heat.',
    category: 'Ingredient Science',
    difficulty: 'Intermediate',
    tags: ['toppings', 'cured-meats', 'umami', 'preservation'],

    intro: "Cured meats provide a concentrated burst of savory intensity. Understanding the history of a meat—whether it's a smoky American pepperoni or a delicate Italian speck—helps you respect its flavor profile and decide whether to cook it or serve it raw.",

    history: "Curing meat was originally a survival necessity. Before refrigeration, salting and drying were the only ways to preserve the harvest. What began as peasant food evolved into high-status delicacies like Prosciutto di Parma or spicy Nduja.",

    technicalFoundations: [
        "The Curing Mechanism: Dehydration lowers water activity (aw), preventing spoilage and concentrating flavor.",
        "Lipid Rendering: High fat content renders rapidly in high heat, frying the lean protein.",
        "Glutamate Concentration: Enzymatic proteolysis during aging creates free glutamate (Umami).",
        "The 'Cup' Effect: Differential shrinkage between casing and interior causes curling."
    ],

    doughImpact: [
        "High salt content in meats can impact overall pizza salinity balance.",
        "Rendered fat can soak into the crust, affecting texture."
    ],

    bakingImpact: [
        "Robust meats (Pepperoni, Salami) benefit from Maillard reaction and fat rendering during bake.",
        "Delicate meats (Prosciutto) lose volatile aromas and become salty if baked."
    ],

    practicalRanges: [],

    practicalApplications: [
        "Add delicate cured meats (Prosciutto, Culatello) POST-bake to preserve texture and aroma.",
        "Bake robust cured meats (Pepperoni, Pancetta) to render fat and crisp edges.",
        "Adjust dough or sauce salinity downwards when using heavy cured meat toppings."
    ],

    proTips: [
        "If using a very fatty cured meat (like Guanciale), consider sweating it in a pan beforehand and using the rendered fat to brush the cornicione (crust) of the pizza before baking."
    ],

    criticalPoints: [
        "Salt Saturation: Cured meats are 3–5% salt by weight. Balance your recipe accordingly."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "Modernist Cuisine - Nathan Myhrvold (2011)",
        "Salumi: The Craft of Italian Dry Curing - Michael Ruhlman (2012)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_4'),
        whatItDoes: t('learn.it_adds_a_salty_savory_punch_to_your_pizza'),
        howToUse: "Put the tough ones in the oven, but keep the fancy soft ones for after it's cooked.",
        dangerSigns: "Don't use too much salt in your dough if you're using lots of salty meat!"
    }
};
