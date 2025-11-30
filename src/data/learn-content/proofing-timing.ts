import { LearnArticleData } from '@/types/learn';

export const proofingTimingData: LearnArticleData = {
    id: "proofing-and-bake-timing",
    title: "Proofing & Bake Timing",
    subtitle: "From final rise to the moment dough hits the oven",
    category: 'Process Techniques',
    difficulty: 'Intermediate',
    tags: ['proofing', 'timing', 'fermentation', 'baking'],

    intro: "Final proofing and bake timing close the fermentation loop. The same dough can bake brilliantly or poorly depending on how proofed it is and at what moment it enters the oven.",
    history: "Professional bakeries historically used proof boxes and strict schedules. Modern pizzerias and home bakers increasingly rely on fridges, ambient conditions and experience to decide when dough is 'ready', which DoughLabPro helps translate into clearer signals.",

    technicalFoundations: [
        "Final proof begins after dividing/balling or shaping and ends when dough enters the oven.",
        "Proofing continues fermentation, expanding gas cells and relaxing gluten for easier stretching and better oven spring.",
        "Indicators of proof include volume, surface tension, finger-poke response and internal structure.",
        "Temperature during proof (room vs fridge) and transitions between cold and warm environments strongly influence readiness.",
        "There is a window of optimal proof; dough can move from under to overproof relatively quickly, especially at warm temperatures."
    ],

    doughImpact: [
        "Underproofed dough resists stretching, exhibits strong spring-back and may tear easily.",
        "Properly proofed dough stretches smoothly with minimal resistance and holds shape when loaded.",
        "Overproofed dough becomes fragile, excessively gassy and prone to collapsing or sticking.",
        "Proofing time interacts with earlier bulk decisions; short bulk may require slightly longer proof and vice versa."
    ],

    bakingImpact: [
        "Underproofed pieces bake with limited oven spring, tight crumb and thick, heavy bases.",
        "Correctly proofed dough bakes with strong but controlled spring, open crumb and even colour.",
        "Overproofed dough can collapse or bake with irregular, weak structure and excessive blisters in unwanted areas."
    ],

    practicalRanges: [
        {
            label: "Room-temperature final proof for pizza balls",
            notes: "1–4 hours at 20–26°C. Depends on prior bulk and cold fermentation; adjust by observing dough behaviour."
        },
        {
            label: "Cold proof in trays or pans",
            notes: "8–48 hours at 3–6°C. Common for pan styles; usually followed by a tempering period before baking."
        },
        {
            label: "Temper out of the fridge",
            notes: "30–90 minutes at room temperature. Allows dough to warm, relax and reach optimal extensibility before use."
        }
    ],

    practicalApplications: [
        "Distribute total fermentation time between bulk, cold storage and final proof in Calculator.",
        "Offer reminder-style hints about bringing dough out of the fridge early enough.",
        "Styles should document typical proof targets (e.g. 'balls should be 50–70% larger').",
        "Indicate whether dough is usually baked cold, cool or at near room temperature.",
        "Log proof duration, temperature and subjective readiness indicators in MyLab.",
        "Support side-by-side comparison of under/overproof batches in MyLab.",
        "Dough Diagnostic connects issues like dense crumb or collapsing bases with proofing stage.",
        "Suggest specific adjustments (longer temper, shorter proof) based on reported schedule and symptoms."
    ],

    proTips: [
        "Use the finger-poke test as a guide: a gentle poke that slowly springs back but leaves a slight impression suggests near-optimal proof.",
        "When in doubt, bake one test piece first; it provides more information than any theoretical schedule."
    ],

    criticalPoints: [
        "Taking dough directly from very cold conditions to an extremely hot oven often limits oven spring and can exaggerate surface defects.",
        "Relying solely on clock time without reading visual and tactile cues can easily push dough into over or underproof."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "Modernist Bread - Nathan Myhrvold et al. (2017)",
        "Modernist Pizza - Nathan Myhrvold et al. (2021)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Imagine this like a secret ingredient. It helps make your bread better.",
        whatItDoes: "Improves texture and flavor.",
        howToUse: "So you get the best results.",
        dangerSigns: "Use it wisely!"
    },
};
