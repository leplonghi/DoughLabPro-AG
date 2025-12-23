import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CALIFORNIA STYLE PIZZA - V1 Schema
 * 
 * Researched and validated content with authoritative sources:
 * - Wikipedia: California-style pizza
 * - Wolfgang Puck / Spago history
 * - Alice Waters / Chez Panisse
 * - California Cuisine movement documentation
 */
export const california_style: DoughStyleDefinition = {
  id: "california_style",
  name: "California Style Pizza",
  category: "pizza",
  recipeStyle: RecipeStyle.THIN_CRUST,

  origin: {
    country: "United States",
    region: "California (Los Angeles, Berkeley)",
    period: "1980s, pioneered at Spago (1982) and Chez Panisse (1980)"
  },

  description: "California-style pizza emerged in the 1980s as part of the California Cuisine movement, pioneered by Wolfgang Puck at Spago and Alice Waters at Chez Panisse. It features thin crusts topped with fresh, unconventional, gourmet ingredients that celebrate local, seasonal produce.",

  history: "California-style pizza was born from the innovative spirit of California Cuisine in the early 1980s. Chef Ed LaDou, working at Prego Restaurant, began experimenting with unique toppings like ricotta, red peppers, pâté, and mustard. Wolfgang Puck was so impressed that he hired LaDou to lead Spago's pizza program when it opened in 1982. Together, they developed over 250 pizza concepts, moving beyond traditional pepperoni to embrace sophisticated flavors. Alice Waters at Chez Panisse also pioneered wood-fired pizzas with unusual, locally sourced toppings like leeks and duck confit starting in 1980. Spago became famous for Puck's signature smoked salmon pizza with dill crème fraîche, smoked salmon, caviar, and caramelized shallots. The style emphasized open kitchens centered around wood-burning ovens, fresh California ingredients, and creative freedom.",

  difficulty: "Medium",
  fermentationType: "cold",

  base_formula: [
    { name: "Bread flour", percentage: 100 },
    { name: "Water", percentage: 65 },
    { name: "Salt", percentage: 2.5 },
    { name: "Olive oil", percentage: 2 },
    { name: "Sugar", percentage: 1 },
    { name: "Fresh yeast", percentage: 0.5 }
  ],

  technicalProfile: {
    hydration: [60, 68],
    salt: [2, 2.5],
    oil: [2, 5],
    sugar: [1, 3],
    flourStrength: "Bread flour or all-purpose, moderate protein (11-12.5%)",
    ovenTemp: [370, 480],
    recommendedUse: [
      "Gourmet pizzas with seasonal, creative toppings",
      "Individual-sized pizzas for upscale casual dining"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 250, min: 200, max: 300 },
    fermentationSteps: [
      "Mix: Combine flour, water, salt, oil, and yeast until just incorporated. [Science: Minimal mixing prevents excessive gluten development, keeping crust tender]",
      "Bulk Fermentation: 12-24 hours cold retard at 4°C. [Science: Long cold fermentation develops complex flavors through enzymatic activity and slow yeast metabolism]",
      "Divide and Shape: Portion into 250g balls and shape gently. [Science: Gentle handling preserves air bubbles created during fermentation]",
      "Final Proof: 1-2 hours at room temperature until doubled. [Science: Yeast activity increases, creating CO2 for final rise]",
      "Bake: Wood-fired oven at 700-900°F for 2-4 minutes. [Science: High heat creates Maillard reaction for crispy crust while preserving delicate toppings]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W280-320 (Moderate strength)",
      pl_ratio: "0.55-0.65 (Balanced)",
      absorption_capacity: "Medium-high (62-68%)",
      protein_type: "Bread flour or all-purpose blend",
      science_explanation: "Moderate protein flour provides structure for thin crust while remaining tender enough for delicate toppings"
    },
    thermalProfile: {
      oven_type: "Wood-fired",
      heat_distribution: "Intense radiant heat",
      crust_development: "Crispy with slight char",
      crumb_structure: "Thin, airy, irregular holes"
    },
    fermentationScience: {
      yeast_activity: "Retarded (cold)",
      ph_target: "pH 5.2-5.4",
      organic_acids: "Balanced lactic and acetic",
      enzymatic_activity: "High (long cold fermentation)"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Use seasonal ingredients",
        explanation: "The essence of California style is fresh, local, seasonal produce. Change your toppings with the seasons."
      },
      {
        tip: "Don't overload",
        explanation: "Thin crust can't support heavy toppings. Use restraint - 3-4 quality ingredients maximum."
      },
      {
        tip: "Wood-fired is ideal",
        explanation: "High heat (700-900°F) cooks pizza in 2-4 minutes, creating char while keeping toppings fresh."
      }
    ],
    what_if: [
      {
        scenario: "Crust becomes soggy",
        result: "Too many wet toppings or insufficient oven heat",
        correction: "Pre-cook watery vegetables, use less sauce, increase oven temperature"
      },
      {
        scenario: "Toppings burn before crust cooks",
        result: "Oven too hot or delicate ingredients added too early",
        correction: "Lower temperature slightly, add delicate items like arugula after baking"
      }
    ],
    comparative_analysis: [
      {
        target_style: "Neapolitan",
        difference: "California is thinner and crispier with gourmet toppings; Neapolitan is soft with simple traditional ingredients",
        why_choose_this: "Choose California style for creative, seasonal, gourmet pizza experience"
      },
      {
        target_style: "New York",
        difference: "California emphasizes gourmet ingredients and creativity; NY focuses on classic simplicity and foldability",
        why_choose_this: "Choose California for upscale dining with wine pairings"
      }
    ],
    q_and_a: [
      {
        question: "What makes California-style pizza different?",
        answer: "Creative, gourmet toppings featuring fresh, seasonal, local ingredients. Pioneered by Wolfgang Puck and Alice Waters in the 1980s.",
        context: "California Cuisine movement"
      },
      {
        question: "Who invented California-style pizza?",
        answer: "Alice Waters at Chez Panisse (1980) and Wolfgang Puck at Spago (1982). Chef Ed LaDou developed over 250 concepts with Puck.",
        context: "Pizza history"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Possible",
        notes: "Works but loses complexity. Cold retard is preferred for authentic California style."
      },
      {
        method: "Hybrid",
        suitability: "Authentic",
        notes: "Cold Retard. 12-24 hours cold fermentation develops the complex flavors characteristic of California style."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Moderate hydration (60-68%) creates a thin, crispy yet pliable crust that can support gourmet toppings without becoming soggy. Higher hydration would make the dough too delicate for the creative, often moist toppings used in California style.",
    methodSuitability: {
      direct: { suitable: true, notes: "Works but loses the complex flavors from long fermentation" },
      biga: { suitable: true, notes: "Adds complexity and structure, good for supporting creative toppings" },
      poolish: { suitable: true, notes: "Creates extensible dough and adds subtle flavor complexity" }
    },
    whatIf: [
      {
        scenario: "Dough tears when stretching",
        outcome: "Insufficient gluten development or over-proofed",
        solution: "Ensure proper mixing, don't over-proof, let dough warm to room temp before stretching"
      },
      {
        scenario: "Crust is pale and soft",
        outcome: "Oven temperature too low",
        solution: "Increase to 700-900°F for proper Maillard reaction and crispy texture"
      }
    ],
    comparisons: [
      {
        vsStyle: "Roman",
        difference: "California uses wood-fired ovens and creative toppings; Roman is ultra-crispy with traditional ingredients"
      }
    ],
    proTips: [
      "Preheat pizza stone for 45-60 minutes for home ovens",
      "Add delicate greens like arugula AFTER baking to prevent wilting"
    ]
  },

  tags: ["california", "gourmet", "wood-fired", "seasonal", "artisan"],

  watchouts: [
    "Over-topping makes crust soggy",
    "Using out-of-season ingredients compromises the philosophy",
    "Insufficient oven heat results in pale, soft crust"
  ],

  notes: [
    "Pioneered by Wolfgang Puck at Spago (1982) and Alice Waters at Chez Panisse (1980)",
    "Over 250 pizza concepts developed by Ed LaDou and Wolfgang Puck",
    "Smoked salmon pizza with caviar became Spago's signature dish",
    "Open kitchens with wood-fired ovens became standard",
    "California Pizza Kitchen brought the style to mainstream America in 1985"
  ],
  recommendedFlavorComponents: ["mozzarella_low_moisture", "fior_di_latte", "ricotta", "bell_pepper", "cebola", "cogumelos", "olive_oil_extra_virgin", "bacon"],
  references: [
    {
      source: "Wikipedia - California-style pizza",
      url: "https://en.wikipedia.org/wiki/California-style_pizza"
    },
    {
      source: "Wolfgang Puck - Spago",
      url: "https://wolfgangpuck.com/dining/spago-beverly-hills/"
    },
    {
      source: "Chez Panisse",
      url: "https://www.chezpanisse.com/"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/california_style_pizza_hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  }
};
