import { LearnArticleData } from '@/types/learn';

export const foodSafetyAndDoughHandlingData: LearnArticleData = {
    id: "food-safety-and-dough-handling",
    title: "Food Safety & Dough Handling",
    subtitle: "Keeping dough, toppings and people safe",
    category: 'Dough Science',
    difficulty: 'Beginner',
    tags: ['food-safety', 'hygiene', 'storage', 'temperature'],

    intro: "Great pizza is not only delicious, it is safe. Understanding basic food safety principles for dough, toppings and service protects you, your guests and your reputation.",
    history: "Food safety standards evolved from traditional wisdom to formal regulations and Hazard Analysis and Critical Control Points (HACCP) systems. Even home and small-scale pizza makers benefit from applying core principles.",

    technicalFoundations: [
        "Pathogenic bacteria grow fastest in the 'danger zone' between roughly 5°C and 60°C when food is moist and nutrient-rich.",
        "Dough made with water, flour and salt is relatively low-risk but still requires clean handling and sensible time-at-temperature control.",
        "Toppings like meat, cheese and cooked sauces carry higher risk and must be stored and handled correctly.",
        "Cross-contamination (for example raw meat juices touching ready-to-eat foods) is a major source of foodborne illness.",
        "Cooling, reheating and holding foods must respect safe temperature and time limits, especially in professional settings."
    ],

    doughImpact: [
        "Leaving dough in very warm environments for extended periods increases microbial growth and potential spoilage.",
        "Over-acidified sourdoughs may resist some microbes but are not a universal safety guarantee.",
        "Flour dust and poorly cleaned containers can harbour pests or off-flavours if not maintained."
    ],

    bakingImpact: [
        "Adequate core baking temperature and time are required to make toppings safe, especially meats and eggs.",
        "Holding baked pizzas at warm but sub-safe temperatures for long periods increases risk, particularly with perishable toppings."
    ],

    practicalRanges: [
        {
            label: "Cold storage",
            notes: "≤4–5°C for perishable doughs and toppings. Keeps microbial growth slow."
        },
        {
            label: "Hot holding (professional context)",
            notes: "Typically ≥60°C. Used for slices kept hot."
        },
        {
            label: "Room-temperature handling",
            notes: "Limit cumulative time in danger zone. Short bench times are usually safe."
        }
    ],

    practicalApplications: [
        "Monitor dough and environment when defining long room-temperature schedules.",
        "Styles with high-risk toppings (seafood, fresh eggs) require prompt service.",
        "Reheat-focused styles (slice shops) must follow safe reheating and holding practices.",
        "Record storage methods and times for dough and prepared toppings in MyLab.",
        "Label containers with dates and batch identifiers.",
        "Avoid obviously risky patterns like unrefrigerated meat toppings for many hours.",
        "Discard batch if off smells, abnormal dough colour or visible mould appear."
    ],

    proTips: [
        "Keep separate boards and knives for raw meats and ready-to-eat ingredients whenever possible.",
        "In doubt about the safety of a dough or topping, discard it; ingredients are cheaper than medical problems or reputational damage."
    ],

    criticalPoints: [
        "Home-fermented or sourdough products are not automatically safe from all pathogens; basic hygiene is still mandatory.",
        "Never rely on smell alone to judge pathogen risk; some dangerous bacteria do not produce obvious odours."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "US FDA Food Code (general principles)",
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
