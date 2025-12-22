import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * WHEAT TORTILLA (SONORAN STYLE)
 * 
 * Researched and validated content:
 * - Origin: Northern Mexico (Sonora)
 * - Technique: Hot water lard emulsion + extreme thin rolling
 * - Ingredients: Wheat Flour, Lard, Hot Water, Salt, Baking Powder (optional)
 * - Characteristics: Translucent spots, chewy, laminated layers, nutty fat flavor
 */
export const wheat_tortilla: DoughStyleDefinition = {
  id: "wheat_tortilla",
  name: "Wheat Tortilla (Sonora Style)",
  category: "flatbread",
  recipeStyle: RecipeStyle.FLATBREAD,
  family: "Mexican Flatbread",

  origin: {
    country: "Mexico",
    region: "Sonora",
    period: "Post-Spanish Colonization (16th Century)"
  },

  description: "The Wheat Tortilla (Tortilla de Harina) is the staple bread of Northern Mexico, born from the introduction of wheat and pigs (lard) by the Spanish. A great Sonoran tortilla is paper-thin, huge (often 12-16 inches for 'Sobaqueras'), and translucent. It relies on the distinctive flavor and plasticity of lard (manteca) and the gluten-relaxing power of hot water to achieve its incredible extensibility.",

  history: "While corn tortillas dominate Central and Southern Mexico, wheat thrives in the arid North. The 'Tortilla de Harina' became the foundation for burritos, quesadillas, and chimichangas. Authenticity lies in the fat: traditionally pork lard, which creates microscopic layers (lamination) similar to a pastry, giving the tortilla its puff and flake.",

  difficulty: "Medium",
  fermentationType: "direct", // Chemically leavened or unleavened

  base_formula: [
    { name: "All-Purpose Flour", percentage: 100 },
    { name: "Hot Water (60°C)", percentage: 50 },
    { name: "Lard (Manteca) or Vegetable Shortening", percentage: 15 },
    { name: "Salt", percentage: 2 },
    { name: "Baking Powder (optional)", percentage: 0.5 } // Helps fluffiness
  ],

  technicalProfile: {
    hydration: [45, 55], // Appears low, but fat provides significant liquid-like mobility
    salt: [1.8, 2.2],
    oil: [10, 20], // High fat is non-negotiable for extensibility
    sugar: [0, 0],
    flourStrength: "Medium Protein (All Purpose). Bread flour makes them rubbery and hard to roll.",
    ovenTemp: [200, 240], // Comal/Griddle temperature
    recommendedUse: [
      "Burritos",
      "Quesadillas",
      "Fajitas wrapper"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 50, min: 40, max: 80 }, // 40-50g for Taco size
    fermentationSteps: [
      "Fat Incorporation: Rub the lard/fat into the flour until crumbly (sable handling). [Science: Coats the protein, limiting gluten bond formation for tenderness]",
      "Hot Water Mix: Add hot water and mix. [Science: Heat denatures some proteins and creates a paste, but mainly keeps the saturated fat melted for better distribution]",
      "Kneading: Knead until smooth and very soft (EARLOBE texture). [Science: Needs to be cohesive]",
      "The Long Rest: Divide into balls and rest for at least 30 minutes (up to 2 hours). [Science: CRITICAL STEP. Gluten must be completely relaxed to roll paper-thin without springing back]",
      "Rolling: Roll out on a lightly floured surface until translucent. Rotate often.",
      "Cooking: Place on a hot dry skillet (Comal). Cook 20-30 seconds until bubbles appear. Flip. Cook 15 seconds. [Science: The steam blows up the layers created by the lard]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W200-240 (All Purpose)",
      pl_ratio: "0.40 (Extensible)",
      absorption_capacity: "Low",
      protein_type: "Soft Wheat mixture",
      science_explanation: "High extensibility (L) is the priority. We want the dough to stretch indefinitely without tearing. Lard acts as a shortening agent, literally 'shortening' the gluten strands."
    },
    thermalProfile: {
      oven_type: "Comal (Cast Iron Griddle)",
      heat_distribution: "Direct Conduction",
      crust_development: "Brown blister spots (ampollas) on a pale background",
      crumb_structure: "Laminated layers, hollow puff"
    },
    fermentationScience: {
      yeast_activity: "None",
      ph_target: "Neutral",
      organic_acids: "N/A",
      enzymatic_activity: "N/A"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Lard is King",
        explanation: "Vegetable oil makes a pliable tortilla, but Lard makes a flaky one. The solid fat crystals create layers."
      },
      {
        tip: "Hot Water",
        explanation: "If you use cold water, the fat will seize up and clump. Hot water keeps the potential liquid phase active."
      },
      {
        tip: "Rest Time",
        explanation: "If the dough shrinks back when you roll it, STOP. Cover it and wait 15 mins. You cannot force a wheat tortilla."
      },
      {
        tip: "Steam Stack",
        explanation: "Keep a cloth towel or 'Tortillero' ready. Stack the cooked tortillas immediately inside. The steam from the hot tortillas softens the others, keeping them flexible. If left in open air, they turn into crackers/chips."
      }
    ],
    what_if: [
      {
        scenario: "They are stiff and cracker-like",
        result: "Over-cooked or not enough fat",
        correction: "Cook fast (max 45 seconds total) and ensure fat is > 15%."
      },
      {
        scenario: "They are thick and bready",
        result: "Rolled too thick",
        correction: "Roll them until you can see the grain of the counter through the dough."
      },
      {
        scenario: "They shrink when cooking",
        result: "Gluten wasn't relaxed",
        correction: "Rest the dough balls longer."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Corn Tortilla",
        difference: "Corn is nixtamalized, earthy, GF; Wheat is fatty, neutral, and chewy.",
        why_choose_this: "Choose Wheat for large wraps (Burritos)."
      },
      {
        target_style: "Store-bought",
        difference: "Commercial tortillas have preservatives and gums to stay flexible for weeks; homemade rely on fat and freshness. Homemade MUST be eaten fresh or frozen.",
        why_choose_this: "Choose Homemade for flavor."
      }
    ],
    q_and_a: [
      {
        question: "Baking Powder?",
        answer: "Purists say no, but it helps create that fluffy 'Tex-Mex' style. Authentic Sonoran is usually unleavened.",
        context: "Ingredients"
      },
      {
        question: "Can I use butter?",
        answer: "Yes, but butter contains water (15%). Lard/Shortening is 100% fat. Tortillas made with butter are softer but less flaky.",
        context: "Ingredients"
      },
      {
        question: "Sobaqueras?",
        answer: "Huge, arm-length tortillas made in Sonora, stretched over the armpit ('sobaco' slang).",
        context: "Culture"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Chemical leavening or none."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "50% water + 15-20% fat = 70% total fluids. That's why the dough is soft.",
    methodSuitability: {
      direct: { suitable: true, notes: "Standard." },
      poolish: { suitable: false, notes: "N/A" },
      biga: { suitable: false, notes: "N/A" }
    },
    whatIf: [
      {
        scenario: "You omit the Fat",
        outcome: "You get a hard, dry cracker (Matzah-like). Fat is the plasticizer.",
        solution: "Don't omit fat."
      }
    ],
    comparisons: [
      {
        vsStyle: "Burrito vs Taco",
        difference: "Burritos use wheat for structural integrity; Tacos use corn for flavor."
      }
    ],
    proTips: [
      "If you want them translucent like Sonora, hydration must be slightly higher and rolling pin work minimal (hand stretch).",
      "Cook until the first brown spots appear, then flip. Don't wait for 'golden brown' all over."
    ]
  },

  tags: ["tortilla", "mexican", "flatbread", "lard", "unleavened", "soft"],

  watchouts: [
    "Cold dough won't roll.",
    "Baking powder makes them cakey if overused.",
    "Overcooking kills flexibility.",
    "Lack of resting = triangular/oval shapes."
  ],

  notes: [
    "Northern Mexico specialty.",
    "Uses Lard + Hot Water.",
    "Must be rolled paper-thin.",
    "Stack while hot to steam-soften.",
    "Base of the Burrito."
  ],

  references: [
    {
      source: "Larousse de la Cocina Mexicana",
      url: "https://laroussecocina.mx/",
      author: "Alicia Gironella",
      year: "2018"
    },
    {
      source: "Pati Jinich Treasures",
      url: "https://patijinich.com/",
      author: "Pati Jinich",
      year: "2016"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/wheat-tortilla-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["lard_pork_fat", "salted_butter_normandy", "cheddar_cheese"]
};
