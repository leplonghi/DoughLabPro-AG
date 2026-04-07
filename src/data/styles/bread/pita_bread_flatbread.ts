import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PITA BREAD (MIDDLE EASTERN POCKET BREAD)
 * 
 * Researched and validated content:
 * - Origin: Middle East (Levant Region)
 * - Technique: High heat flash-baking creating steam explosion (pocket)
 * - Ingredients: Flour, Water, Yeast, Salt, Olive Oil
 * - Characteristics: Pale to golden, soft, single large internal pocket
 */
export const pita_bread_flatbread: DoughStyleDefinition = {
  id: "pita_bread_flatbread",
  name: "Pita Bread (Pocket)",
  category: "flatbread",
  recipeStyle: RecipeStyle.FLATBREAD,
  family: "Levantine Flatbread",

  origin: {
    country: "Levant (Syria/Lebanon)",
    region: "Middle East",
    period: "Ancient (>4000 years)"
  },

  description: "Pita is the famous 'pocket bread' of the Middle East. Its magic lies not in the ingredients, which are simple, but in the baking technique. When a thin disk of fermented dough hits a scorching hot surface (250°C+), the exterior sets instantly while the water inside turns to steam, blowing the bread up like a balloon. This creates the signature hollow center perfect for stuffing with Falafel or Shawarma.",

  history: "One of the oldest breads in human history. The 'pocket' phenomenon was likely a happy accident of baking flattened dough on increasingly hot hearths. It is the daily bread of millions across the Mediterranean and Arab world, serving as both food and utensil.",

  difficulty: "Medium",
  fermentationType: "direct",

  base_formula: [
    { name: "All-Purpose or Bread Flour", percentage: 100 }, // Can be a mix with Whole Wheat
    { name: "Water", percentage: 60 },
    { name: "Olive Oil", percentage: 3 },
    { name: "Salt", percentage: 2 },
    { name: "Sugar", percentage: 1 }, // Helps browning in short bake
    { name: "Instant Yeast", percentage: 1 }
  ],

  technicalProfile: {
    hydration: [60, 65], // Moderate hydration is easier to roll thin
    salt: [1.8, 2.2],
    oil: [2, 5],
    sugar: [0, 2],
    flourStrength: "Medium Strong (W240-280). Needs some elasticity to hold the steam balloon.",
    ovenTemp: [250, 300], // As hot as possible
    recommendedUse: [
      "Falafel Sandwich",
      "Hummus dipper",
      "Shawarma wrap"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 80, min: 60, max: 100 },
    fermentationSteps: [
      "Mix & Knead: Develop a strong gluten network. Smooth dough is essential. [Science: Weak gluten will burst instead of inflating]",
      "Bulk Proof: 1 hour or until doubled.",
      "Divide & Pre-shape: Form into smooth balls. Rest 15 mins. [Science: Resting prevents 'snap-back' during rolling]",
      "Rolling: Roll out into 5-6mm thick rounds. Even thickness is critical. [Science: Thin spots burn; thick spots don't puff]",
      "The Second Rest (CRITICAL): Let the rolled disks rest for 15-20 minutes covered. [Science: This allows the yeast to generate a small base of CO2 bubbles which will act as the 'nuclei' for the steam expansion]",
      "Baking: Slide onto a preheated stone/steel at max temp. Bake for 2-3 minutes. [Science: Watch it puff. Do not overbake or it becomes crunchy]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W240-280",
      pl_ratio: "0.50-0.60 (Balanced)",
      absorption_capacity: "Moderate",
      protein_type: "Hard Wheat",
      science_explanation: "The dough needs enough tensile strength (elasticity) to expand into a balloon without tearing, but enough extensibility to roll out easily."
    },
    thermalProfile: {
      oven_type: "Pizza Stone or Steel",
      heat_distribution: "Bottom conduction is key",
      crust_development: "Pale with very light spotting; soft and pliable",
      crumb_structure: "Two distinct layers separated by a large void"
    },
    fermentationScience: {
      yeast_activity: "Moderate",
      ph_target: "pH 5.5",
      organic_acids: "Low profile",
      enzymatic_activity: "Standard"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "The 2nd Rest",
        explanation: "If you bake immediately after rolling, it won't puff. If you wait too long (45m+), it will just be a fluffy bun. The sweet spot is 15-20 mins."
      },
      {
        tip: "Heat Saturation",
        explanation: "Your baking stone needs to be heat-soaked for 45 mins. If the bottom heat isn't aggressive, the steam won't generate fast enough."
      },
      {
        tip: "Cool under a Cloth",
        explanation: "As soon as they come out, stack them and cover with a clean towel. The escaping steam softens the crust, keeping them pliable."
      },
      {
        tip: "Flip before Baking",
        explanation: "Flip the disk onto your peel so the side that was drying on the counter goes face down on the boiling hot stone. This helps even puffing."
      }
    ],
    what_if: [
      {
        scenario: "It didn't puff (Flat pita)",
        result: "Oven not hot enough, rolled too thin, or didn't rest enough",
        correction: "Check stone temperature and ensure thickness is at least 5mm."
      },
      {
        scenario: "It puffed but popped/tore",
        result: "Weak spot in rolling or low protein flour",
        correction: "Roll more evenly and ensure dough is smooth."
      },
      {
        scenario: "It's crunchy",
        result: "Baked too long",
        correction: "Pita bakes in 2-3 minutes. Remove as soon as it's puffed and pale blonde."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Greek Pita",
        difference: "Greek pita is often pocketless, thicker, and cooked in oil for wrapping Gyros. This style is the 'Pocket' savory version.",
        why_choose_this: "Choose Pocket Pita for stuffing."
      },
      {
        target_style: "Tortilla",
        difference: "Tortilla is unleavened and fat-heavy; Pita is yeasted and lean.",
        why_choose_this: "Choose Pita for the pocket functionality."
      }
    ],
    q_and_a: [
      {
        question: "Can I freeze them?",
        answer: "Yes, excellent freezing qualities. Reheat in a toaster.",
        context: "Storage"
      },
      {
        question: "Whole wheat?",
        answer: "Yes, but mix 50/50 with white flour to ensure it still puffs well. 100% whole wheat struggles to hold the balloon.",
        context: "Ingredients"
      },
      {
        question: "Why does it deflate?",
        answer: "It's physics. As the steam cools, it contracts. The pocket remains, but the bread flattens.",
        context: "Science"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Standard."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "60-63% is the sweet spot. Too wet = hard to transfer. Too dry = won't steam enough.",
    methodSuitability: {
      direct: { suitable: true, notes: "Best." },
      poolish: { suitable: true, notes: "Good flavor." },
      biga: { suitable: false, notes: "Too stiff." }
    },
    whatIf: [
      {
        scenario: "You use a Rolling Pin vs Hand Stretching",
        outcome: "For Pita, ALWAYS use a pin. You need uniform thickness for the pocket. Hand stretching creates thin spots that break.",
        solution: "Use a pin."
      }
    ],
    comparisons: [
      {
        vsStyle: "Pita vs Focaccia",
        difference: "Opposites. Focaccia wants to keep gas IN the crumb; Pita wants to consolidate gas into ONE giant bubble."
      }
    ],
    proTips: [
      "Sprinkle bran (wheat bran) on the peel to prevent sticking and add a rustic nutty flavor.",
      "If you don't have a stone, use an inverted baking sheet, preheated.",
      "Don't brown them too much! Authentic pita is pale."
    ]
  },

  tags: ["pita", "pocket-bread", "middle-eastern", "flatbread", "lean"],

  watchouts: [
    "Uneven rolling kills the pocket.",
    "Oven temp < 250°C won't work.",
    "Drafts can dry out the skins during resting.",
    "Over-baking = chips, not bread."
  ],

  notes: [
    "Famous for the steam pocket.",
    "High heat mandatory.",
    "Lean dough (no heavy fat/eggs).",
    "Short bake time (< 3 mins).",
    "Resting after rolling is the secret."
  ],

  references: [
    {
      source: "Zahav Cookbook",
      url: "https://www.zahavrestaurant.com/",
      author: "Michael Solomonov",
      year: "2015"
    },
    {
      source: "Serious Eats - Pita Guide",
      url: "https://www.seriouseats.com/perfect-pita-bread-recipe",
      author: "J. Kenji López-Alt",
      year: "2019"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/pita-bread-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["olive_oil_extra_virgin", "yogurt_plain", "honey_raw"]
};
