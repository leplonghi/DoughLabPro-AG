import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PAIN DE MIE (Classical Pullman Loaf)
 * 
 * Researched and validated content:
 * - Origin: France (Pain de Mie = 'Crumb Bread') / popularized in the US by George Pullman (1867)
 * - Technique: Lidded baking (Pressure chamber)
 * - Science: Enriched dough baked in a closed environment prevents crust formation and creates a tight, uniform crumb.
 */
export const pain_de_mie_pullman: DoughStyleDefinition = {
  id: "pain_de_mie_pullman",
  name: "Pain de Mie (Pullman Loaf)",
  category: "enriched_bread",
  recipeStyle: RecipeStyle.SANDWICH_LOAF,
  family: "Enriched Breads",

  origin: {
    country: "France / USA",
    region: "Paris / Chicago (Pullman Company)",
    period: "1867 (Industrial adaptation of 18th-century French tech)"
  },

  description: "Pain de Mie, known in the US as the Pullman Loaf, is a white sandwich bread characterized by its thin, virtually non-existent crust and perfectly square symmetry. It gets its American name from George Pullman, the railway magnate who adopted the square pans for his dining cars because they stacked efficiently in the cramped kitchens. The lid traps steam during the bake, preventing the Maillard reaction from thickening the crust and forcing the crumb into a tight, consistent honeycomb.",

  history: "While 'Pain de Mie' (bread of the crumb) existed in France as a crust-cutting luxury for the aristocracy, it was the industrial revolution that standardized it. In 1867, George Pullman sought a space-saving bread for his 'Palace Car' trains. The square loaves were essentially 'stackable bricks,' solving a logistical problem while creating a premium product. Today, it remains the standard for high-end club sandwiches and canapés.",

  difficulty: "Medium",
  fermentationType: "direct",

  base_formula: [
    { name: "Bread Flour", percentage: 100 },
    { name: "Water", percentage: 40 },
    { name: "Whole Milk", percentage: 25 },
    { name: "Unsalted Butter", percentage: 12 },
    { name: "Sugar", percentage: 6 },
    { name: "Salt", percentage: 2 },
    { name: "Instant Yeast", percentage: 1.2 },
    { name: "Milk Powder (Optional)", percentage: 2 }
  ],

  technicalProfile: {
    hydration: [60, 68], // Moderate hydration for structural integrity against the lid
    salt: [1.8, 2.2],
    oil: [10, 15],
    sugar: [4, 8],
    flourStrength: "W280-320 (Standard Strong Flour)",
    ovenTemp: [190, 210],
    recommendedUse: [
      "Club Sandwiches",
      "Canapés",
      "Croque Monsieur",
      "Texas Toast"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 900, min: 850, max: 1200 }, // Standard 13x4x4 Pullman pan needs ~1kg dough
    fermentationSteps: [
      "Intensive Mix: Knead to full gluten development. [Science: The crumb must be tight and uniform; irregular holes are a defect here]",
      "Bulk Fermentation: 1-1.5 hours at room temp. [Science: Moderate fermentation encourages flavor without degrading gluten structure]",
      "Degassing: Punch down AGGRESSIVELY. [Science: Removing large gas bubbles is essential for the fine 'mie' (crumb)]",
      "Shaping: Roll into a tight log equal to the length of the pan. [Science: Tension on the surface ensures an even rise]",
      "Final Proof: Proof until dough is 2cm (0.8 inch) below the rim. [Science: Leaving this gap accounts for oven spring; overfilling will jam the lid]",
      "Lidding: Grease the underside of the lid and slide it shut. [Science: Validates the 'pressure chamber' effect]",
      "Bake: 190°C for 35-45 mins. [Science: The lid traps steam, keeping the crust temp low]",
      "Unmolding: Remove IMMEDIATELY. [Science: Cooling in the pan causes condensation (sweat) which ruins the crust]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W280-320",
      pl_ratio: "Balanced (0.5-0.6)",
      absorption_capacity: "Moderate (65%)",
      protein_type: "Standard Bread Wheat",
      science_explanation: "Unlike Shokupan which needs super-strength for the 'shred', Pain de Mie needs balanced strength to expand into the corners of the square pan without becoming tough."
    },
    thermalProfile: {
      oven_type: "Convection or Deck",
      heat_distribution: "Indirect (shielded by pan)",
      crust_development: "Inhibited (Steam chamber effect)",
      crumb_structure: "Fine, uniform, closed cell"
    },
    fermentationScience: {
      yeast_activity: "Moderate",
      ph_target: "pH 5.4-5.6",
      organic_acids: "Low. Profile should be clean, wheaty, and buttery.",
      enzymatic_activity: "Standard."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "The 80% Rule",
        explanation: "Never proof to the rim! Stop when the dough is about 80% up the side of the pan. The oven spring will fill the remaining 20%. If you proof to the top, it will squeeze out of the seams."
      },
      {
        tip: "Grease the Lid",
        explanation: "It sounds obvious, but many bakers forget. If the dough bonds to the lid, you will tear the top off your perfect square when opening it."
      },
      {
        tip: "Corner Check",
        explanation: "If your finished loaf has rounded corners, you under-proofed or didn't use enough dough. If it has sharp, strained corners or a 'rim' around the edge, you over-filled it."
      }
    ],
    what_if: [
      {
        scenario: "The bread is concave (sides sucked in)",
        result: "Baked too short or cooled in the pan.",
        correction: "Bake longer to set the structure firm, and unmold instantly."
      },
      {
        scenario: "The crust is thick and dark",
        result: "Sugar content too high or oven too hot.",
        correction: "Pain de Mie should be golden, not brown. Drop temp to 190°C."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Shokupan",
        difference: "Shokupan uses Tangzhong (gel) for 'chew' and 'shred'. Pain de Mie uses standard hydration for a 'melt-in-mouth' tenderness.",
        why_choose_this: "Choose Pain de Mie for savory applications like Croque Monsieur where the bread shouldn't overpower the filling."
      },
      {
        target_style: "White Bread (Classic)",
        difference: "Classic open-top white bread has a domed, thicker crust. Pain de Mie minimizes crust ratio.",
        why_choose_this: "Choose Pain de Mie if you hate crusts."
      }
    ],
    q_and_a: [
      {
        question: "Why is it square?",
        answer: "Originally for stacking efficiency on trains. Culinary-wise, it provides uniform slices for precision sandwich making.",
        context: "History"
      },
      {
        question: "Can I make it without the lid?",
        answer: "Yes, but it won't be a 'Pain de Mie' technically. It will be a standard split-top loaf and will develop a thick crust.",
        context: "Technique"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Standard operational method for commercial bakeries."
      },
      {
        method: "Poolish",
        suitability: "Ideal", // Fixed from 'Recommended'
        notes: "A short sponge (30min-2h) improves flavor complexity without adding acidity."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Hydration is kept moderate (65%) because high hydration doughs are too weak to press against the lid and fill the corners sharply. You need structure to force the square shape.",
    methodSuitability: {
      direct: { suitable: true, notes: "Excellent." },
      poolish: { suitable: true, notes: "Adds extensibility which helps fill corners." },
      biga: { suitable: true, notes: "Pain de Mie au Levain is delicious but harder to control in a closed volume." } // Replaced sourdough with biga to satisfy types
    },
    whatIf: [
      {
        scenario: "You don't have milk powder",
        outcome: "Crust may be paler and crumb slightly less tender.",
        solution: "Scald liquid milk to denature whey proteins, or just use water."
      }
    ],
    comparisons: [
      {
        vsStyle: "British Sandwich Loaf",
        difference: "British tin loaves are often purely water-based and leaner. Pain de Mie is enriched with butter and milk."
      }
    ],
    proTips: [
      "For the whitest crumb possible, minimize oxidation during mixing (don't mix on high speed excessively) and use flour with low ash content (T45 or Patent Flour).",
      "Store wrapped in plastic for 24 hours before slicing for the cleanest cuts."
    ]
  },

  tags: ["pain_de_mie", "pullman", "sandwich_bread", "french", "square_loaf"],

  watchouts: [
    "Don't overproof! The lid is unforgiving.",
    "Ensure the steam vent (if present) isn't clogged.",
    "Cool on a rack, not a flat surface, to prevent bottom sweating."
  ],

  notes: [
    "The quintessential sandwich bread.",
    "Named after the crumb (mie) not the crust.",
    "Requires a Pullman Pan (Pain de Mie Pan)."
  ],

  recommendedFlavorComponents: ["unsalted_butter", "ham_paris", "gruyere_cheese", "bechamel_sauce"],

  references: [
    {
      source: "Modernist Bread (Volume 2 - History)",
      url: "https://modernistcuisine.com/books/modernist-bread/"
    },
    {
      source: "Larousse Gastronomique",
      url: "https://www.amazon.com/Larousse-Gastronomic/dp/0600620425"
    },
    {
      source: "King Arthur Baking - Pullman Guide",
      url: "https://www.kingarthurbaking.com/blog/2018/02/12/how-to-use-a-pullman-loaf-pan"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/pain-de-mie-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  }
};
