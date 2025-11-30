import { LearnArticleData } from '@/types/learn';

export const workflowAndServicePlanningData: LearnArticleData = {
    id: "workflow-and-service-planning",
    title: "Workflow & Service Planning",
    subtitle: "Designing production that actually fits your life or business",
    category: 'Process Techniques',
    difficulty: 'Advanced',
    tags: ['workflow', 'planning', 'service', 'schedule'],

    intro: "Even a perfect formula fails if it does not fit your schedule. Workflow and service planning connect dough science with real-world constraints at home or in a professional setting.",
    history: "Pizzerias and bakeries have always designed production schedules around service peaks, labour availability and equipment capacity. Home bakers and small pizzerias increasingly adopt thermometers, data loggers and controlled fermentation environments to reduce guesswork.",

    technicalFoundations: [
        "A workflow is a sequence of tasks (mix, bulk, divide, ball, proof, bake, clean) mapped over time and resources.",
        "Capacity constraints include oven throughput, bench space, fridge volume and staff availability.",
        "Batches can be staggered to spread workload, but each stage must still respect fermentation and temperature needs.",
        "Service windows (for example dinner peak, lunch rush) require enough proofed dough ready at the right time.",
        "Waste management and inventory (flour, toppings, sauce) also sit inside the workflow design."
    ],

    doughImpact: [
        "Poorly planned workflows push dough into over- or underfermentation as it waits for equipment or staff.",
        "Consistent, repeatable workflows support consistent dough quality across days and services.",
        "Splitting dough into multiple smaller batches can improve control but increases handling steps."
    ],

    bakingImpact: [
        "Oven bottlenecks cause delays that may force pizzas to overproof on the bench or cool before serving.",
        "Well-planned loading sequences keep the oven at stable temperature and minimise recovery dips."
    ],

    practicalRanges: [
        {
            label: "Home workflow (evening pizza)",
            notes: "Mix in the morning or previous day, cold ferment, temper and bake in a defined evening window. Centred on one oven and small batch sizes."
        },
        {
            label: "Small shop workflow",
            notes: "Daily or multi-day dough production with staggered mixing and balling. Requires alignment between prep staff and service crew."
        },
        {
            label: "Pop-up / event workflow",
            notes: "Pre-fermented dough transported and finished on site. Adds transport, holding conditions and limited redundancy into the equation."
        }
    ],

    practicalApplications: [
        "Set a target 'serve time' and work backwards to proposed milestones for mix, ball and proof.",
        "Include batch size and oven throughput when estimating how early to start baking.",
        "Styles can list typical workflows (same-day vs multi-day).",
        "Enable logging of full workflows including timestamps in MyLab.",
        "Allow users to clone successful workflows as templates.",
        "Tools should propose workflow adjustments before radical formula changes.",
        "Highlight bottlenecks (oven, fridge, manpower) inferred from user inputs."
    ],

    proTips: [
        "Plan backwards from when you want to eat or serve; then check if the resulting schedule is realistic for your day.",
        "Keep a simple written or digital timeline visible during busy sessions to reduce mental load."
    ],

    criticalPoints: [
        "Trying to compress inherently long fermentations into short windows by simply increasing yeast undermines quality and can create new problems.",
        "Ignoring equipment capacity leads to stress, food waste or disappointed guests when demand exceeds throughput."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
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
