import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * TARTINE COUNTRY LOAF (MODERN SOURDOUGH)
 * 
 * Researched and validated content:
 * - Origin: California (San Francisco/Oakland) - Chad Robertson
 * - Technique: High Hydration, Young Levain, Gentle folding, Dutch Oven bake
 * - Ingredients: White Flour, Whole Wheat (10%), Water, Salt, Wild Yeast
 * - Characteristics: Open "wild" crumb, deep blistered crust, mild acidity
 */
export const tartine_country_loaf: DoughStyleDefinition = {
  id: "tartine_country_loaf",
  name: "Tartine Country Loaf",
  category: "bread",
  recipeStyle: RecipeStyle.SOURDOUGH,
  family: "Modern Artisan Sourdough",

  origin: {
    country: "USA",
    region: "California (San Francisco)",
    period: "Modern (2000s)"
  },

  description: "The bread that changed the world of baking. Developed by Chad Robertson at Tartine Bakery, this style focuses on a 'young' and mild sourdough starter, extremely high hydration, and gentle handling to preserve the gas structure. It is defined by its dramatic oven spring, dark mahogany crust with small blisters, and an open, creamy, pearlescent crumb.",

  history: "While San Francisco was already famous for its sour bread, the 'Tartine' style moved away from the intense acetic sourness of the 19th-century gold rush breads. Instead, it pursued a 'sweet' lactic acidity and a lightness previously thought impossible with simple flour and water. It is the archetype of the 'Instagram Sourdough' movement.",

  difficulty: "Expert",
  fermentationType: "levain",

  base_formula: [
    { name: "Strong Bread Flour", percentage: 90 },
    { name: "Whole Wheat Flour", percentage: 10 },
    { name: "Water (Warm)", percentage: 75 }, // Base hydration
    { name: "Water (Hold-back)", percentage: 5 }, // For Bassinage
    { name: "Young Levain (100% Hyd)", percentage: 20 },
    { name: "Sea Salt", percentage: 2 }
  ],

  technicalProfile: {
    hydration: [75, 85], // The hallmark of the style
    salt: [1.8, 2.2],
    oil: [0, 0],
    sugar: [0, 0],
    flourStrength: "High Protein but Extensible (W300+). Needs to hold tons of water.",
    ovenTemp: [240, 260], // Dutch Oven method requires high initial heat
    recommendedUse: [
      "Avocado Toast",
      "Table bread with salted butter",
      "Grilled Cheese"
    ],
    difficulty: "Expert",
    ballWeight: { recommended: 900, min: 750, max: 1200 },
    fermentationSteps: [
      "Levain Building: Use a 'young' levain, fed 4-6 hours before mixing, smelling milky-sweet, not vinegary. [Science: Younger biological age = less acidity and more enzymatic power for oven spring]",
      "Autolyse: Mix flour and water only. Rest 40-60 mins. [Science: Allows gluten to form passively and enzymes to start converting starch to sugar before salt/yeast inhibit them]",
      "Mixing: Add levain and salt. Squeeze the dough to incorporate. [Science: Minimal oxidation. No machine mixing preferred]",
      "Bulk Fermentation: 3-4 hours at 26°C. Perform 'Coil Folds' or 'Stretch & Folds' every 30 mins. [Science: Structure generates through folding, not kneading]",
      "The 'Wobble': Stop bulk when the dough is puffy, domed, and wobbles like jelly (approx 30-50% volume increase). [Science: Pushing beyond 50% weakens the gluten too much for the final shape]",
      "Shaping: Gentle tension building. Do not degas. [Science: We want to preserve the CO2 pockets for the open crumb]",
      "Cold Retard: Proof in banneton for 12-16 hours at 5°C. [Science: Enhances blistering and flavor complexity]",
      "Baking (Dutch Oven): Bake covered for 20 mins at 250°C (steam), then uncovered for 25 mins at 230°C. [Science: The sealed pot traps the dough's own steam, allowing maximum expansion]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W300-350 (Strong)",
      pl_ratio: "0.50-0.60 (Balanced)",
      absorption_capacity: "High",
      protein_type: "Hard Red Spring Wheat",
      science_explanation: "Requires a flour that can absorb 85% water without turning into soup. High protein content is mandatory."
    },
    thermalProfile: {
      oven_type: "Dutch Oven (Cast Iron) or Deck Oven with Steam",
      heat_distribution: "Radiant heat from all sides",
      crust_development: "Thick, crunchy, caramelized (Maillard), with micro-blisters",
      crumb_structure: "Wild, irregular alveoli (holes), gelatinized sheen"
    },
    fermentationScience: {
      yeast_activity: "Wild Yeast (Candida milleri) + Lactic Acid Bacteria (L. sanfranciscensis)",
      ph_target: "pH 4.1 - 4.3 (Baked)",
      organic_acids: "Balanced Acetic/Lactic favors Lactic",
      enzymatic_activity: "High; prolonged hydration breaks down gluten slightly, creating the tender bite."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Water Temperature is the Throttle",
        explanation: "Since you can't control the yeast amount (it's in the starter), you control speed with water temperature. Use 28°C water to keep the dough moving."
      },
      {
        tip: "Young Levain",
        explanation: "Test your starter by dropping a spoonful in water. If it floats, it's ready. If it sinks, it's too young or too old."
      },
      {
        tip: "The Score",
        explanation: "Score at a very shallow angle (almost horizontal) to get the 'Ear'. The expansion force must be directed upwards."
      },
      {
        tip: "Don't Slice Hot",
        explanation: "Sourdough continues to cook and set while cooling. Slicing it hot will result in a gummy, wet texture."
      }
    ],
    what_if: [
      {
        scenario: "The bread is a flat frisbee",
        result: "Over-fermented (acid degraded the gluten) or weak shaping",
        correction: "Shorten the bulk fermentation time or build more tension during shaping."
      },
      {
        scenario: "The crumb is tight and dense",
        result: "Under-fermented",
        correction: "Let the bulk fermentation go longer until you see bubbles on the surface."
      },
      {
        scenario: "The crust is pale and soft",
        result: "Not enough heat",
        correction: "Preheat the Dutch Oven for at least 45 mins at max temp."
      }
    ],
    comparative_analysis: [
      {
        target_style: "San Francisco Sour",
        difference: "Traditional SF Sour is very acidic (vinegary); Tartine style is milder and creamier.",
        why_choose_this: "Choose Tartine for a balanced, modern artisan flavor."
      },
      {
        target_style: "Ciabatta",
        difference: "Ciabatta is yeast-based and flatter; Country Loaf is wild-yeast and taller.",
        why_choose_this: "Choose Country Loaf for structure and complexity."
      }
    ],
    q_and_a: [
      {
        question: "Can I use 100% white flour?",
        answer: "Yes, but the 10% Whole Wheat provides nutrients for the yeast and deeper fermentation colors.",
        context: "Ingredients"
      },
      {
        question: "Why Dutch Oven?",
        answer: "Domestic ovens vent steam. The Dutch Oven creates a sealed, high-steam environment mimicking professional deck ovens.",
        context: "Technique"
      },
      {
        question: "Is it really healthy?",
        answer: "Long fermentation breaks down gluten and phytic acid, making nutrients more bioavailable and the bread easier to digest.",
        context: "Health"
      }
    ],
    fermentation_methods: [
      {
        method: "Sourdough",
        suitability: "Authentic",
        notes: "The soul of the bread."
      },
      {
        method: "Hybrid",
        suitability: "Possible",
        notes: "Adding 0.2% yeast speeds it up but reduces flavor complexity."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "High hydration (75-85%) allows the gluten to stretch thinly, creating the large holes. It also gelatinizes starch more effectively for a shiny crumb.",
    methodSuitability: {
      direct: { suitable: true, notes: "Only method." },
      poolish: { suitable: false, notes: "N/A" },
      biga: { suitable: false, notes: "N/A" }
    },
    whatIf: [
      {
        scenario: "You omit the Salt",
        outcome: "Fermentation will go out of control and the dough will be sticky/strengthless.",
        solution: "Never omit salt."
      }
    ],
    comparisons: [
      {
        vsStyle: "Round vs Oval",
        difference: "Boule (Round) vs Bâtard (Oval). Bâtard is easier to slice for sandwiches."
      }
    ],
    proTips: [
      "Rice flour for the banneton is non-negotiable—it acts like ball bearings preventing sticking.",
      "Ice cubes in the Dutch Oven can create extra steam for better blisters.",
      "Let the bread cure for 24 hours before eating for the peak flavor development."
    ]
  },

  tags: ["sourdough", "artisan", "tartine", "high-hydration", "levain", "wild-yeast"],

  watchouts: [
    "Starter must be active.",
    "Over-proofing destroys structure.",
    "Using low protein flour results in a pancake.",
    "Scoring too deep causes the loaf to spread instead of rise."
  ],

  notes: [
    "The Gold Standard of modern baking.",
    "Requires an active Sourdough Starter.",
    "Dutch Oven bake method recommended.",
    "Long cold retard improves flavor.",
    "High hydration requires folding technique."
  ],

  references: [
    {
      source: "Tartine Bread",
      url: "https://tartinebakery.com/",
      author: "Chad Robertson",
      year: "2010"
    },
    {
      source: "The Perfect Loaf",
      url: "https://www.theperfectloaf.com/",
      author: "Maurizio Leo",
      year: "2023"
    }
  ],

  isPro: true,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/tartine-country-loaf-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "olive_oil_extra_virgin"]
};
