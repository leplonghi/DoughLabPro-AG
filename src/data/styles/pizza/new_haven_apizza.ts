import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * NEW HAVEN APIZZA
 * 
 * Researched and validated content:
 * - Origin: Frank Pepe (1925), Sally's (1938), Modern (1934)
 * - Technique: Coal-fired, thin, charred, high-gluten flour
 * - History: Neapolitan immigrants in Wooster Square
 * - Science: Long fermentation (24-96h) and high-heat coal combustion
 */
export const new_haven_apizza: DoughStyleDefinition = {
  id: "new_haven_apizza",
  name: "New Haven Apizza",
  category: "pizza",
  recipeStyle: RecipeStyle.THIN_CRUST, // Or a specific New Haven enum if we had one, but THIN_CRUST fits best for now
  family: "American Artisan Pizza",

  origin: {
    country: "United States",
    region: "New Haven, Connecticut",
    period: "1925, Frank Pepe Pizzeria Napoletana"
  },

  description: "New Haven apizza (pronounced 'ah-beetz') is a coal-fired, thin-crust pizza characterized by its irregular oblong shape, significant char (not burnt!), and chewy, high-gluten crust. It is a direct descendant of Neapolitan pizza but evolved with local coal and American flour to create one of the most respected pizza styles in the world.",

  history: "The style was pioneered by Frank Pepe, an Italian immigrant from Maiori, who opened Frank Pepe Pizzeria Napoletana in 1925 on Wooster Street. Initially selling only 'tomato pies' (sauce, garlic, oregano, and pecorino), the style expanded as his nephew, 'Sally' Consiglio, opened Sally's Apizza in 1938. Modern Apizza (1934) added an oil-fired variation to the canon. New Haven's pizza culture is defined by its terminology ('apizza' from the Neapolitan 'a pizza') and its signature 'White Clam Pie,' invented by Pepe when he was inspired by the fresh clams sold locally in the harbor town.",

  difficulty: "Hard",
  fermentationType: "cold",

  base_formula: [
    { name: "High-protein Bread flour (13%+)", percentage: 100 },
    { name: "Water", percentage: 68 },
    { name: "Salt", percentage: 2.2 },
    { name: "Olive oil (optional)", percentage: 1 },
    { name: "Instant Yeast", percentage: 0.3 }
  ],

  technicalProfile: {
    hydration: [65, 72],
    salt: [2, 2.5],
    oil: [0, 2],
    sugar: [0, 1],
    flourStrength: "High-gluten bread flour (13-14.5% protein) for maximum chew",
    ovenTemp: [315, 370], // Stone/Deck temp; coal dome is much hotter
    recommendedUse: [
      "Classic Tomato Pie with pecorino and garlic",
      "White Clam Pie with fresh clams and garlic",
      "The 'Mootz' (Mozzarella) pie"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 350, min: 300, max: 450 },
    fermentationSteps: [
      "Mix: Combine ingredients and develop strong gluten network. [Science: High-gluten flour requires intensive mixing to handle high hydration]",
      "Bulk Fermentation: 2 hours at room temperature followed by 24-96 hours cold retard. [Science: Extended cold fermentation breaks down complex starches into simple sugars for better charring]",
      "Division: Ball carefully to maintain tension. [Science: Structural integrity is needed for the thin, large stretch]",
      "Warm Up: Allow balls to sit at room temperature for 3-4 hours before stretching. [Science: Relaxation of gluten proteins is essential for stretching without tearing]",
      "Stretch: Hand-stretch into thin, irregular oblong shape. [Science: Non-circular shape is a hallmark of the 'peel' and 'deck' interaction]",
      "Bake: High heat in coal-fired oven (or deck with stone) for 5-8 minutes until charred. [Science: Coal provides dry, intense radiant heat that creates 'blisters' and smoky notes]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W300-350 (Strong)",
      pl_ratio: "0.50-0.65 (Balanced)",
      absorption_capacity: "High (68-72%)",
      protein_type: "High-gluten wheat (hard red spring)",
      science_explanation: "High-protein flour is required to support the long fermentation and high hydration, preventing the dough from becoming soft or fragile."
    },
    thermalProfile: {
      oven_type: "Coal-fired brick oven (Anthracite)",
      heat_distribution: "Intense bottom conduction, high radiant top heat",
      crust_development: "Crispy, charred, chewy (not snappy like a cracker)",
      crumb_structure: "Dense but airy with irregular bubble distribution"
    },
    fermentationScience: {
      yeast_activity: "Slowed by cold retard",
      ph_target: "pH 5.3-5.5",
      organic_acids: "Balanced lactic/acetic profile from multi-day aging",
      enzymatic_activity: "High amylase activity provides sugars for the iconic 'char' and deep color"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Embrace the 'Char', don't fear the 'Burn'",
        explanation: "Authentic New Haven apizza features black blisters (char), which adds bitterness and complexity. This is a result of high-sugar availability from long fermentation meeting intense coal heat. If it’s just tan, it’s not New Haven."
      },
      {
        tip: "Use the 'Tomato Pie' baseline",
        explanation: "Start with just tomato sauce, garlic, oregano, and olive oil (no mozzarella). Add a heavy dusting of Pecorino Romano both pre and post bake. This is the original 1920s flavor profile."
      },
      {
        tip: "The Clam Science",
        explanation: "For a Clam Pie, use fresh, shucked clams with their liquor. Garlic and oregano are essential. The clams should be added before the bake to slightly steam and sear in the high heat."
      },
      {
        tip: "Screen vs Hearth",
        explanation: "While traditional apizza is baked directly on the hearth, many modern shops use screens for consistency. For the most authentic 'bottom', stone-baked is mandatory."
      },
      {
        tip: "Mind the 'Mootz'",
        explanation: "In New Haven, mozzarella is considered a topping. If you want it, you ask for 'mootz'. The base cheese is always Pecorino Romano."
      }
    ],
    what_if: [
      {
        scenario: "Dough doesn't char (remains pale)",
        result: "Fermentation was too short or oven temp too low",
        correction: "Extend cold retard to at least 48h to increase residual sugars (maltose) or increase deck temperature."
      },
      {
        scenario: "Clam pie is too watery",
        result: "Too much clam liquor or clams were frozen",
        correction: "Drain clams slightly but keep the flavor. High heat (350°C+) is needed to evaporate moisture quickly."
      },
      {
        scenario: "Crust is tough/leather-like",
        result: "Flour was over-kneaded or too dry",
        correction: "Check hydration (aim for 70%) and reduce mixing time slightly."
      },
      {
        scenario: "Pizza sticks to the peel",
        result: "High hydration or too slow to launch",
        correction: "Use a wood peel for launching and plenty of flour/cornmeal for the slide. Work fast."
      }
    ],
    comparative_analysis: [
      {
        target_style: "New York Style",
        difference: "New Haven is thinner, more charred, and uses coal instead of gas deck ovens. NY is more foldable and uniform.",
        why_choose_this: "Choose New Haven for complex, smoky flavors and a rustic, artisan experience."
      },
      {
        target_style: "Neapolitan",
        difference: "New Haven is larger, crispier, and uses high-gluten flour vs Neapolitan's soft '00' flour and 60-second bake.",
        why_choose_this: "Choose New Haven if you want the soul of Italy with the strength and chew of American baking."
      },
      {
        target_style: "Trenton Tomato Pie",
        difference: "Trenton puts cheese first, sauce on top. New Haven (Tomato Pie) is sauce-first with just a dusting of pecorino.",
        why_choose_this: "Choose New Haven for a direct, sauce-forward experience."
      }
    ],
    q_and_a: [
      {
        question: "What does 'apizza' mean?",
        answer: "It is the Neapolitan dialect version of 'la pizza'. Italian-American immigrants in New Haven retained the Neapolitan article and pronunciation (ah-beetz).",
        context: "Linguistics"
      },
      {
        question: "Why is the pizza oblong and irregular?",
        answer: "Historically, pizzerias in New Haven used large rectangular peels, and the dough was stretched to fit the space available on the coal oven deck, resulting in a unique, non-circular shape.",
        context: "Form"
      },
      {
        question: "Do I have to use fresh clams?",
        answer: "For the 'canonical' Frank Pepe experience, yes. Canned clams are a common substitute in home kitchens but lack the briny snap and fresh liquor of the real thing.",
        context: "Ingredients"
      },
      {
        question: "Is anthracite coal mandatory?",
        answer: "Authentic shops like Pepe's and Sally's swear by it because it burns extremely hot and clean. Modern Apizza uses oil-fired brick ovens and still produces a legendary product, proving the oven design and heat profile are more important than the fuel source alone.",
        context: "Technology"
      },
      {
        question: "How long should I ferment the dough?",
        answer: "24 hours is the minimum for flavor, but 72-96 hours is where the 'magic' happens for the crust's texture and charring ability.",
        context: "Technique"
      }
    ],
    fermentation_methods: [
      {
        method: "Hybrid",
        suitability: "Authentic",
        notes: "Cold retard (24-96h) with initial room temp bulk. Essential for the char and flavor."
      },
      {
        method: "Direct",
        suitability: "Possible",
        notes: "Same-day dough will lack the characteristic char and deep flavor of New Haven."
      },
      {
        method: "Biga",
        suitability: "Possible",
        notes: "Can be used to add strength, but tradition favors long direct-cold retard."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "New Haven style pushes hydration to around 68-72%. This high moisture level is critical to withstand the intense, dry heat of a coal oven without drying out the interior. When the dough reaches the deck, the water flashes to steam, creating the light, airy pockets within the otherwise dense, high-gluten crumb.",
    methodSuitability: {
      direct: { suitable: true, notes: "Excellent if given 48h+ cold retard." },
      biga: { suitable: true, notes: "Adds complexity but tradition points to direct with long cold retard." },
      poolish: { suitable: true, notes: "Can help with extensibility for the long, thin stretch." }
    },
    whatIf: [
      {
        scenario: "You use 00 flour instead of High-Gluten",
        outcome: "The pizza will be soft and fragile; it won't have the characteristic 'chew' or support for the large size.",
        solution: "Stick to high-gluten bread flour or 'Strong' flour (W300+)."
      },
      {
        scenario: "You bake at 250°C (Home Oven)",
        outcome: "The pizza will take 12-15 minutes, becoming dry and tough before it chars.",
        solution: "Use a pizza steel/stone preheated for 1 hour at max temp (275°C+) and use the broiler/grill to simulate top heat."
      }
    ],
    comparisons: [
      {
        vsStyle: "Sally's vs Pepe's",
        difference: "Pepe's is famous for the White Clam; Sally's is known for its intense char and exclusive tomato sauce profile."
      }
    ],
    proTips: [
      "Heavy Pecorino Romano is the secret weapon.",
      "Use fresh garlic, never powdered.",
      "Obround is the new round - don't sweat the circle.",
      "Squeeze the water out of your mozzarella if using fresh."
    ]
  },

  tags: ["new haven", "apizza", "coal-fired", "charred", "clam-pie", "connecticut"],

  watchouts: [
    "Over-topping creates a soggy middle and prevents the thin crust from crisping.",
    "Baking too low results in 'tanned' bread instead of charred 'apizza'.",
    "High-gluten flour demands respect - it needs time to relax before stretching.",
    "Clam liquor is salty - watch your overall salt balance."
  ],

  notes: [
    "Pronounced 'ah-beetz' in local Connecticut/Neapolitan dialect.",
    "Frank Pepe invented the White Clam Pie in the 1960s.",
    "Anthracite coal is the traditional fuel for the 'Holy Trinity' of shops.",
    "One of the only styles where 'char' is a requirement, not a flaw.",
    "Tomato pie is the soul of the style."
  ],

  references: [
    {
      source: "Frank Pepe Pizzeria Napoletana - History",
      url: "https://pepespizzeria.com/history/"
    },
    {
      source: "Sally's Apizza - Our Story",
      url: "https://sallysapizza.com/about/"
    },
    {
      source: "Modernist Pizza (New Haven Profile)",
      url: "https://modernistcuisine.com/books/modernist-pizza/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2021"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/new-haven-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["pecorino_romano", "fresh_clams", "garlic_fresh", "oregano_dried", "olive_oil_extra_virgin", "mozzarella_low_moisture"]
};
