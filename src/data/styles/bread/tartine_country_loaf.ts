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
      },
      {
        scenario: "You add 10-20% Einkorn, Emmer, or heritage wheat",
        result: "Deeper, nuttier flavor and more complex aroma — but lower gluten strength means less oven spring",
        correction: "Reduce hydration by 3-5% per 10% heritage grain substitution. Shorten bulk by ~20% since these grains acidify faster. Use a strong levain proportion (25%) to compensate for the weaker gluten network."
      },
      {
        scenario: "You blend 30% whole rye or whole spelt into the formula",
        result: "Dramatically increased fermentation speed, nuttier/earthier flavor, denser crumb with smaller alveoli",
        correction: "Reduce fermentation time by up to 30-40%. Lower hydration by 5% for rye additions. Score deeper to allow expansion of denser dough. Cold retard is especially beneficial to tame rye's fast fermentation."
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
    hero: "/images/styles/tartine_country_loaf_hero.png",
    dough: "/images/styles/tartine_country_loaf_dough.png",
    crumb: "/images/styles/tartine_country_loaf_crumb.png"
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "olive_oil_extra_virgin"],

  flavorProfile: {
    primaryFlavors: ["mild lactic sourness", "creamy whole wheat", "toasted caramelised crust", "complex fermentation depth", "clean sweet grain"],
    aromaProfile: ["wild fermentation", "yogurt-like lactic tang", "toasted wheat", "caramelised Maillard crust", "earthy sourdough"],
    textureNotes: ["crackling thick crust", "open wild irregular crumb (alveoli)", "gelatinous pearlescent crumb sheen", "chewy and moist interior", "blistered crust surface"],
    pairingRecommendations: ["Salted cultured butter", "Avocado with flaky salt", "Aged Comté or Gruyère", "Smoked salmon and crème fraîche", "Quality olive oil and fleur de sel"],
    flavorEvolution: ["Day 1: peak crust crunch and lactic freshness", "Day 2: crust softens, acidity mellows and deepens", "Day 3-4: ideal for grilled cheese and toast", "Flavour actually peaks at 24-48h after baking for full complexity"]
  },

  culturalContext: {
    significance: [
      "Tartine Bakery's Country Loaf is the bread that triggered the global sourdough renaissance",
      "Chad Robertson's 2010 book 'Tartine Bread' became the bible of a generation of artisan bakers",
      "Defined the aesthetic of the 'Instagram sourdough' era — the ear, the open crumb, the blistered crust",
      "Shifted sourdough from 'sour health bread' to 'chef's bread' — a sophisticated, mild lactic product",
      "Represents the California ethos: natural, slow, minimal ingredients, maximal craft"
    ],
    consumptionContext: [
      "Daily table bread at artisan restaurants",
      "Avocado toast standard at California-style brunch cafes",
      "Grilled cheese with artisan bread — the 'adult' version",
      "The sourdough starter 'pet' is part of the consumption ritual — you must keep it alive",
      "Shared in long slices at communal dinner tables"
    ],
    evolution: [
      "Evolved from traditional San Francisco sourdough but purposely moved away from its aggressive acidity",
      "Chad Robertson trained in France and brought pain de campagne sensibilities to California",
      "2010 Tartine Bread book sparked the global home-baking sourdough movement",
      "The COVID-19 lockdown of 2020 triggered a worldwide sourdough revival — Tartine style was the template",
      "Now considered the benchmark for high-hydration sourdough worldwide"
    ],
    rituals: [
      "The 'Wobble Test' — you only stop bulk fermentation when the dough wobbles like jelly",
      "The Dutch Oven ritual — preheating for 45 min, loading the dough, and the steam-reveal at 20 min",
      "The 24-hour wait before the first slice — patience is part of the method",
      "Scoring the shallow 'ear' angle is a baker's rite of passage",
      "The floating starter test — a spoonful of levain dropped in water; sinks means not ready"
    ]
  },

  globalPresence: {
    regions: ["USA, especially California (origin)", "UK and Scandinavia (strong artisan bakery scene)", "Australia and New Zealand", "Global via food media and social media"],
    popularity: "world benchmark for modern sourdough",
    exportStatus: "The method and ethos are globally exported; fresh bread is local",
    internationalRecognition: "Universally recognized as the pinnacle of modern artisan sourdough baking"
  },

  pairings: {
    beverages: ["Natural wine (especially orange wine)", "Cold-brew coffee", "Craft IPA", "Good quality Pinot Noir"],
    foods: ["Cultured salted butter", "Avocado with flaky salt and citrus", "Aged hard cheeses (Comté, Manchego)", "Smoked salmon", "Grilled cheese with Gruyère", "Olive oil and a good finishing salt"],
    occasions: ["Artisan restaurant table bread", "Weekend brunch", "Cheese and charcuterie boards", "Gift loaf for food-loving friends"],
    seasons: ["Year-round; the sourdough starter routine adapts to seasons"]
  },

  experimentSuggestions: [
    { title: "Heritage Wheat Blend", description: "Substitute 20% of the bread flour with Einkorn or Emmer for deeper, nuttier grain flavour. Reduce hydration by 3-5% to compensate for the weaker gluten network." },
    { title: "Rye Exploration", description: "Add 10% dark rye flour to the formula — it dramatically speeds fermentation and adds earthiness. Reduce bulk time by 15-20%." },
    { title: "Cold Country Loaf", description: "Extend the cold retard to 36-48h at 3°C for maximum crust blistering and acidity development — the bread used by professional bakeries." },
    { title: "Demi-wheat Version", description: "Use 20% whole wheat instead of 10% for a richer, more nutritious crumb. Increase hydration by 3% and extend autolyse to 90 min." },
    { title: "Open Crumb Study", description: "Bake one loaf with minimal degassing during shaping and one with tight shaping — compare the crumb openness versus structural integrity." }
  ],

  learnLinkTags: ["tartine", "sourdough", "levain", "high-hydration", "dutch-oven", "wild-yeast", "artisan-bread", "open-crumb", "chad-robertson"]
};
