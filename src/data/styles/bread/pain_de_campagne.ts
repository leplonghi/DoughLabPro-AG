import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PAIN DE CAMPAGNE (FRENCH COUNTRY BREAD)
 * 
 * Researched and validated content:
 * - Origin: France (Nationwide)
 * - Technique: Levain + small amount of yeast (occasionally), blending flours
 * - Ingredients: French T65 Flour, Whole Wheat (T150), Rye (T170), Water, Salt
 * - Characteristics: Rustic thick crust, slightly greyish crumb, nutty flavor
 */
export const pain_de_campagne: DoughStyleDefinition = {
  id: "pain_de_campagne",
  name: "Pain de Campagne",
  category: "bread",
  recipeStyle: RecipeStyle.SOURDOUGH, // or COUNTRY_LOAF
  family: "French Artisan Bread",

  origin: {
    country: "France",
    region: "Rural Provinces",
    period: "Pre-Industrial (Standard Village Bread)"
  },

  description: "Pain de Campagne ('Country Bread') is the large, communal loaf of French villages. Historically, it was made with whatever flour was available, resulting in a blend of Wheat and Rye. It is characterized by its large size (often 1.5kg+), thick protective crust (to keep it fresh for a week), and a crumb that is rustic, meaty, and slightly sour from the natural leaven.",

  history: "Before the baguette became the symbol of Paris, the Miche or Pain de Campagne was the symbol of France. Families would bake massive loaves in the communal wood-fired oven once a week. The inclusion of Rye (Seigle) and high-extraction Wheat kept the bread moist for days.",

  difficulty: "Hard",
  fermentationType: "levain",

  base_formula: [
    { name: "French Flour T65 (Bread)", percentage: 80 },
    { name: "Whole Wheat (T150)", percentage: 15 },
    { name: "Dark Rye (T130/T170)", percentage: 5 },
    { name: "Water", percentage: 70 },
    { name: "Levain (Stiff or Liquid)", percentage: 20 },
    { name: "Salt", percentage: 2 }
  ],

  technicalProfile: {
    hydration: [68, 74], // Moderate hydration, easier to handle than Tartine
    salt: [1.8, 2.0],
    oil: [0, 0],
    sugar: [0, 0],
    flourStrength: "Medium Strength (W260-280). French wheat is softer.",
    ovenTemp: [230, 250],
    recommendedUse: [
      "Tartines (Open faced sandwiches)",
      "Served with Stews/Soups",
      "Cheese platter accompaniment"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 1000, min: 500, max: 2000 },
    fermentationSteps: [
      "Autolyse: 30 minutes. [Science: Hydrates the bran in the whole wheat]",
      "Mixing: Mix until supple. French technique often aims for 'Improved Mix' (moderate gluten development) rather than 'Intensive'. [Science: Preserves the creamy color of the crumb]",
      "Bulk Fermentation: 3 hours with 2 folds. [Science: Develops flavor]",
      "Shaping: Form into large rounds (Boules) or massive ovals. [Science: Low surface-to-volume ratio keeps the bread fresh]",
      "Proofing: 1-2 hours ambient or overnight cold. [Science: Overnight emphasizes the acetic notes of the rye]",
      "Scoring: Traditional 'Polka' (grid) or Hash cut. [Science: Increases surface area for crust]",
      "Baking: Bake deep and dark. The crust should be thick. [Science: Maillard reaction products penetrate the crumb over time]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W260-290",
      pl_ratio: "0.55",
      absorption_capacity: "Moderate-High",
      protein_type: "French Winter Wheat",
      science_explanation: "The addition of Rye creates a more plastic dough (less elastic). It won't spring as violently as a pure white loaf, resulting in a flatter, wider profile."
    },
    thermalProfile: {
      oven_type: "Wood Fired Hearth (Traditional)",
      heat_distribution: "Conduction",
      crust_development: "Very Thick, Rustic, Flour-dusted",
      crumb_structure: "Medium-open, irregular, grey/creamy color"
    },
    fermentationScience: {
      yeast_activity: "Low-Moderate",
      ph_target: "pH 4.3 - 4.6",
      organic_acids: "Balanced profile",
      enzymatic_activity: "Moderate"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Rye adds Moisture",
        explanation: "Even 5% rye flour significantly increases the shelf life because pentosans hold water tightly."
      },
      {
        tip: "The 'Coup de Lame'",
        explanation: "Campagne loaves don't always need an 'Ear'. A Polka pattern (criss-cross) creates a flatter loaf with more crust surface area for flavor."
      },
      {
        tip: "Bake it Dark",
        explanation: "Don't pull it when it's golden. Wait for dark brown. The flavor of a Campagne is in the caramelized crust."
      }
    ],
    what_if: [
      {
        scenario: "Dough spreads too much",
        result: "Weak flour or over-hydration for the rye content",
        correction: "Reduce water slightly or give an extra fold during bulk."
      },
      {
        scenario: "Sourness is too intense",
        result: "Over-fermented levain",
        correction: "Use a younger levain or ferment at a cooler ambient temperature."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Baguette",
        difference: "Baguette is fast, light, crusty, stale in 4 hours. Campagne is slow, dense, meaty, fresh for 4 days.",
        why_choose_this: "Choose Campagne for the week."
      }
    ],
    q_and_a: [
      {
        question: "Can I use yeast?",
        answer: "Authentic Campagne is Levain only, but 'Pain de Campagne' allows for up to 0.2% commercial yeast in French law.",
        context: "Legal"
      },
      {
        question: "Why is the crumb grey?",
        answer: "The enzymes in the flour oxidize during the long process, and the bran from the whole wheat/rye colors the crumb.",
        context: "Science"
      }
    ],
    fermentation_methods: [
      {
        method: "Sourdough",
        suitability: "Authentic",
        notes: "The definition of the style."
      },
      {
        method: "Hybrid",
        suitability: "Possible",
        notes: "Common in commercial bakeries."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Adjust hydration based on the thirsty whole grains.",
    methodSuitability: {
      direct: { suitable: false, notes: "Lacks flavor depth." },
      poolish: { suitable: true, notes: "Creates a lighter, sweeter version." },
      biga: { suitable: false, notes: "N/A" }
    },
    whatIf: [
      {
        scenario: "You forget the Rye",
        outcome: "It becomes a 'Pain Complet' (Whole Wheat) rather than a Campagne. The flavor will lack earthiness.",
        solution: "Add Rye."
      }
    ],
    comparisons: [
      {
        vsStyle: "Campagne vs Tartine",
        difference: "Campagne is more about the blend of grains; Tartine is more about the technique and hydration of white flour."
      }
    ],
    proTips: [
      "Dust the banneton with Rye flour for a beautiful contrast on the crust.",
      "A large 2kg Miche tastes better than two 1kg loaves because the fermentation mass retains heat better."
    ]
  },

  tags: ["campagne", "french", "sourdough", "rustic", "rye-blend", "miche"],

  watchouts: [
    "Rye makes dough sticky.",
    "Don't underbake.",
    "Score aggressively."
  ],

  notes: [
    "French Village Bread.",
    "Blend of Wheat and Rye.",
    "Long shelf life.",
    "Thick Crust."
  ],

  references: [
    {
      source: "Le Grand Livre de la Boulangerie",
      url: "https://www.alain-ducasse.com/",
      author: "Jean-Marie Lanio",
      year: "2017"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/pain-de-campagne-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw"]
};
