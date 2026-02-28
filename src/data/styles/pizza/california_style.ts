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

  history: "California-style pizza was born from the innovative spirit of California Cuisine in the early 1980s. The pivotal moment came when Chef Ed LaDou, working at Prego, was discovered by Wolfgang Puck. Puck hired him as the first pizza chef at Spago in 1982, where they defied tradition with toppings like smoked salmon, caviar, and duck sausage. In 1985, LaDou created the BBQ Chicken Pizza for the menu of the first California Pizza Kitchen (CPK), cementing the style's place in culinary history. Alice Waters at Chez Panisse simultaneously championed the 'garden-to-table' approach, using wood-fired ovens for pizzas topped with seasonal, locally sourced vegetables, effectively creating the 'salad pizza' concept.",

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
    hydration: [58, 65], // Moderate hydration for handling
    salt: [2, 2.5],
    oil: [3, 5], // Higher oil content for tenderness and flavor
    sugar: [2, 4], // Often uses Honey or Sugar for browning and flavor balance w/ savory toppings
    flourStrength: "Bread flour or all-purpose, moderate protein (11-12.5%)",
    ovenTemp: [370, 480],
    recommendedUse: [
      "Gourmet pizzas with seasonal, creative toppings",
      "Individual-sized pizzas for upscale casual dining"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 250, min: 200, max: 1000 },
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
        tip: "Honey is the Secret",
        explanation: "Many California dough recipes replace sugar with Honey. This adds a unique floral sweetness that pairs perfectly with goat cheese and figs, common toppings in this style."
      },
      {
        tip: "The 'Salad' Bake",
        explanation: "For topped pizzas with greens (arugula, mixed greens), bake the crust with just olive oil and garlic first, then toss the greens in vinaigrette and top the pizza AFTER it comes out of the oven."
      },
      {
        tip: "Ed LaDou's BBQ Sauce",
        explanation: "When making BBQ Chicken pizza, mix a little tomato sauce into your BBQ sauce (50/50 blend) to prevent the sugars in the BBQ sauce from burning too quickly in a high-heat oven."
      }
    ],
    what_if: [
      {
        scenario: "Crust is soggy under veggies",
        result: "Moisture release from fresh vegetables",
        correction: "Sauté vegetables like mushrooms or spinach beforehand to release moisture, or slice ingredients like zucchini paper-thin."
      },
      {
        scenario: "Dough is too elastic/springy",
        result: "Flour protein too high (using 100% Bread Flour)",
        correction: "Cut the bread flour with 20% All-Purpose or Pastry flour to reduce chewiness. California crust should yield, not fight back."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Neapolitan",
        difference: "California is structured to support heavy/gourmet toppings; Neapolitan is delicate and minimalist. California dough often contains oil and sugar/honey; Neapolitan never does.",
        why_choose_this: "Choose California when the toppings are the star of the show."
      },
      {
        target_style: "New York",
        difference: "NY is a street food slice; California is a sit-down variety. California crust is often lighter, less chewy, and 'pastry-like' due to higher oil/honey.",
        why_choose_this: "Choose California for a more refined, less greasy experience."
      }
    ],
    q_and_a: [
      {
        question: "Is BBQ Chicken Pizza essentially California Style?",
        answer: "Yes, it is the poster child of the style. Created by Ed LaDou for CPK in 1985, it broke the rule that pizza sauce must be tomato-based.",
        context: "History"
      },
      {
        question: "Why use honey?",
        answer: "Honey promotes faster browning at lower temperatures and adds a flavor profile that complements the sweet/savory 'California Cuisine' palette (e.g., pear and gorgonzola).",
        context: "Ingredients"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Most common in commercial chains like CPK. 24h cold rise is standard for quality."
      },
      {
        method: "Sourdough",
        suitability: "Ideal",
        notes: "San Francisco Sourdough culture is often used to add local terroir to the crust."
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
