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
    hero: "/images/styles/wheat_tortilla_hero.png",
    dough: "/images/styles/wheat_tortilla_dough.png",
    crumb: "/images/styles/wheat_tortilla_crumb.png"
  },
  recommendedFlavorComponents: ["lard_pork_fat", "salted_butter_normandy", "cheddar_cheese"],

  flavorProfile: {
    primaryFlavors: ["neutral wheat", "fatty richness from lard", "faintly salty", "very subtle sweetness", "clean and fresh"],
    aromaProfile: ["warm toasted wheat", "lard-rendered pork fat", "neutral flour", "slight caramelised spots", "clean fresh bread"],
    textureNotes: ["paper-thin and translucent", "laminated flaky layers", "pliable and flexible when warm", "steam-puffed blisters (ampollas)", "chewy without toughness"],
    pairingRecommendations: ["Carnitas with salsa verde", "Refried beans and Cheddar (Quesadilla)", "Fajita-grilled peppers and steak", "Carne Asada Burrito", "Scrambled eggs and chorizo"],
    flavorEvolution: ["Fresh off the comal: peak pliability and subtle lard flavour", "Within 1 hour: still excellent — keep in a tortillero", "Day-old: best reheated 20 sec on a dry griddle", "Frozen and reheated: almost as good as fresh"]
  },

  culturalContext: {
    significance: [
      "The foundation of Northern Mexican and Tex-Mex cuisine — without it, there is no Burrito",
      "Born from the Spanish introduction of wheat and pigs to the Americas after 1519",
      "The Sobaquera (arm-length tortilla of Sonora) is a testament to the craft's ambition",
      "Lard was historically the prestige fat — today it signals authenticity and flavour over modern shortcuts",
      "Making tortillas by hand is a cultural inheritance passed from grandmother to grandchild"
    ],
    consumptionContext: [
      "The wrapper for Burritos, Fajitas, and Quesadillas",
      "Northern Mexican breakfast: tortilla with eggs and salsa",
      "Griddled and eaten plain with butter (Sobaquera style)",
      "The structure for 'Smash Quesadillas' and 'Birria Tacos'",
      "Torn and used to scoop beans at a home meal"
    ],
    evolution: [
      "Corn tortillas predate Spanish contact; wheat tortillas emerged post-1519 in Northern Mexico",
      "The Sonoran Sobaquera tradition created the largest versions — hand-stretched over the fist or arm",
      "The American 'burrito-size' commercial tortilla (12 inches+) evolved for US fast food chains",
      "Industrial production added gums and preservatives for 3-week shelf life — the enemy of the authentic",
      "Artisan revival promotes fresh-ground masa harina for corn and stone-milled wheat for flour tortillas"
    ],
    rituals: [
      "The 'long rest' after portioning is sacred — you cannot rush gluten relaxation",
      "Rolling out a perfect circle is the benchmark skill — irregular shapes signal beginner technique",
      "Stacking hot tortillas immediately in a cloth-lined Tortillero is non-negotiable for softness",
      "In Sonoran tradition, stretching the tortilla by hand over the fist is a theatrical skill"
    ]
  },

  globalPresence: {
    regions: ["Northern Mexico (Sonora, Chihuahua, Baja California) — origin", "Tex-Mex USA (Texas, New Mexico, California)", "Global via Mexican fast food chains"],
    popularity: "globally ubiquitous via fast food; authentic version is regional",
    exportStatus: "One of the highest-volume exported flatbreads in North America",
    internationalRecognition: "Widely recognised globally — associated with Burritos and Tex-Mex cuisine"
  },

  pairings: {
    beverages: ["Horchata", "Mexican beer (Modelo, Pacifico)", "Margarita", "Agua fresca (hibiscus, tamarind)"],
    foods: ["Carnitas with guacamole", "Carne Asada", "Grilled fajita vegetables and steak", "Refried beans", "Cheese (Oaxacan, Cheddar, Jack)", "Salsa verde and roja"],
    occasions: ["Everyday Mexican meal", "Tex-Mex restaurant", "Street food market", "Family weekend cook-up"],
    seasons: ["Year-round"]
  },

  experimentSuggestions: [
    { title: "Lard vs Shortening vs Butter", description: "Make three identical batches using lard, vegetable shortening, and butter respectively. Compare flakiness, flavour, and flexibility — lard consistently wins for authentic texture." },
    { title: "Sobaquera Giant Tortilla", description: "Double the ball size (100g) and practice hand-stretching over the fist after rolling — aim for 14+ inches for a Sonoran-style Sobaquera." },
    { title: "Blue Corn Hybrid", description: "Replace 20% of the all-purpose flour with blue corn masa harina for a nutty, earthy tortilla with a lavender-grey crumb." },
    { title: "Sourdough Flour Tortilla", description: "Add 10% active sourdough discard to the dough liquid — boosts flavour subtly without adding leavening. The rest time must be extended to 45 min." },
    { title: "Flavored Tortilla", description: "Add 1 tbsp roasted chipotle powder and 1 tsp achiote paste to the dough for a deeply coloured, smoky, flavour-forward tortilla perfect for black bean burritos." }
  ],

  learnLinkTags: ["wheat-tortilla", "sonoran", "flatbread", "lard", "mexican", "unleavened", "burrito", "tex-mex"]
};
