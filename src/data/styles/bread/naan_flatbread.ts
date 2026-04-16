import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * NAAN (INDIAN TANDOORI FLATBREAD)
 * 
 * Researched and validated content:
 * - Origin: India/Persia (Mughal Era)
 * - Technique: High hydration + Yogurt enrichment + High heat (Tandoor)
 * - Ingredients: Maida (White Flour), Yogurt, Milk, Ghee, Nigella Seeds
 * - Characteristics: Teardrop shape, smoky flavor, bubbly charred surface, soft/chewy texture
 */
export const naan_flatbread: DoughStyleDefinition = {
  id: "naan_flatbread",
  name: "Naan (Restaurant Style)",
  category: "flatbread",
  recipeStyle: RecipeStyle.FLATBREAD,
  family: "Asian Flatbread",

  origin: {
    country: "India",
    region: "Northern India",
    period: "Mughal Empire (16th Century)"
  },

  description: "Naan is the quintessential leavened flatbread of Northern Indian cuisine. Traditionally baked by slapping dough onto the super-heated clay walls of a Tandoor oven (480°C+), it is defined by its smoky flavor, pillowy texture, and signature charred bubbles. Restaurant-style naan is enriched with yogurt and milk to ensure it remains soft even after cooling, often finished with a brush of Ghee or Butter.",

  history: "The word 'Naan' comes from the Persian word for bread. It was popularized in India during the Mughal era as a breakfast food for royals. Originally a simple dough, it evolved into the enriched, fluffy version we know today. The 'teardrop' shape is a result of gravity stretching the dough as it hangs on the vertical wall of the clay oven.",

  difficulty: "Medium",
  fermentationType: "direct", // Short fermentation is common for soft naan

  base_formula: [
    { name: "All-Purpose Flour (Maida)", percentage: 100 },
    { name: "Water (Warm)", percentage: 40 },
    { name: "Plain Yogurt (Thick)", percentage: 20 },
    { name: "Whole Milk", percentage: 10 },
    { name: "Ghee or Oil", percentage: 5 },
    { name: "Sugar", percentage: 2 },
    { name: "Salt", percentage: 1.5 },
    { name: "Instant Yeast", percentage: 1 },
    { name: "Baking Powder", percentage: 0.5 } // Common cheat in restaurants
  ],

  technicalProfile: {
    hydration: [65, 75], // Effective hydration is high due to yogurt
    salt: [1.2, 1.8],
    oil: [5, 10], // Ghee inside the dough
    sugar: [2, 4],
    flourStrength: "Medium Protein (All Purpose/Maida). Too strong = tough naan.",
    ovenTemp: [250, 300], // Maximum domestic oven temp + Broiler
    recommendedUse: [
      "Curry accompaniment",
      "Kebab wraps",
      "Pizza base ('Naan Pizza')"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 120, min: 100, max: 150 },
    fermentationSteps: [
      "Mix: Combine flour, sugar, salt, yeast, and baking powder. Whisk yogurt, milk, and water together. [Science: The acidity of the yogurt tenderizes the gluten and activates the baking powder]",
      "Knead: Mix until smooth and soft. It should be slightly sticky. [Science: High hydration ensures steam generation for the bubbles]",
      "First Proof: 1-2 hours until doubled. [Science: We want significant aeration but not exhaustion]",
      "Ball & Rest: Divide into 120g balls. Rest 20 mins. [Science: Relaxed gluten is essential for stretching without tearing]",
      "Shaping: Stretch into a teardrop shape. Use wet hands or a rolling pin. [Science: Uneven stretching creates the variation between thin crispy spots and thick fluffy spots]",
      "Application (Home Method): slap onto a pre-heated cast iron skillet, then flip the skillet upside down over a gas flame. [Science: Mimics the conductive heat of the tandoor wall and the convective heat of the tandoor fire]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W200-240 (Medium)",
      pl_ratio: "0.40 (Extensible)",
      absorption_capacity: "Moderate",
      protein_type: "Soft Wheat (Maida)",
      science_explanation: "Naan should be soft, not chewy like a baguette. Lower protein flour + yogurt enzymes break down the protein matrix."
    },
    thermalProfile: {
      oven_type: "Tandoor (Clay Oven) or Cast Iron + Flame",
      heat_distribution: "Intense direct conduction + Radiance",
      crust_development: "Spotty charring (leopard spots), glossy from ghee",
      crumb_structure: "Large irregular bubbles, open textured but soft"
    },
    fermentationScience: {
      yeast_activity: "Moderate to High",
      ph_target: "pH 5.0 - 5.5 (Acidic due to Yogurt)",
      organic_acids: "Lactic dominant",
      enzymatic_activity: "Proteolytic activity from yogurt bacteria softens the dough."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "The Skillet Method",
        explanation: "Use a cast iron tawa or skillet. Wet one side of the naan with water before slapping it on the hot pan—this acts as 'glue' so you can invert the pan over the flame without it falling."
      },
      {
        tip: "Baking Powder Hack",
        explanation: "Include 0.5% baking powder along with yeast. This gives an immediate 'puff' in the heat that yeast alone sometimes struggles to achieve in a home oven."
      },
      {
        tip: "Yogurt is Key",
        explanation: "Don't skip the yogurt. It provides the signature tang and tenderness. Milk alone makes a 'bread', not a 'naan'."
      },
      {
        tip: "Nigella Seeds",
        explanation: "Sprinkle Nigella (Kalonji) seeds and press them into the dough before baking for that authentic restaurant flavor profile."
      },
      {
        tip: "Garlic & Corriander",
        explanation: "Mix minced garlic and cilantro into soft butter. Brush this on the naan the second it comes off the fire."
      }
    ],
    what_if: [
      {
        scenario: "The naan is hard and cracker-like",
        result: "Cooked too slowly at too low heat",
        correction: "Naan needs VIOLENT heat. Max out your burner or broiler. It should cook in 90 seconds."
      },
      {
        scenario: "The naan falls off the pan when inverted",
        result: "Pan wasn't hot enough or not enough water glue",
        correction: "The pan must be smoking hot, and the dough surface wet."
      },
      {
        scenario: "It's too chewy",
        result: "Flour was too strong (Bread flour)",
        correction: "Use Pastry flour or All Purpose flour (Maida)."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Pita Bread",
        difference: "Pita is leaner (water only) and forms a single pocket; Naan is enriched (yogurt/milk) and forms multiple bubbles.",
        why_choose_this: "Choose Naan for a richer, softer accompaniment."
      },
      {
        target_style: "Roti / Chapati",
        difference: "Roti is unleavened whole wheat; Naan is leavened white flour.",
        why_choose_this: "Choose Naan for a restaurant-style feast."
      }
    ],
    q_and_a: [
      {
        question: "Can I make this in an oven?",
        answer: "Yes, use a pizza stone preheated at max temp. Broil for the last minute to get the char.",
        context: "Technique"
      },
      {
        question: "Why the teardrop shape?",
        answer: "In a tandoor, the dough stretches downward due to gravity before it sets. It's a sign of authenticity.",
        context: "History"
      },
      {
        question: "Is yeast necessary?",
        answer: "Traditional Naan is yeasted. 'Kulcha' is a similar bread often leavened with baking powder/soda only.",
        context: "Ingredients"
      },
      {
        question: "What is 'Maida'?",
        answer: "Indian finely milled refined wheat flour, similar to US Cake/Pastry flour or soft AP flour.",
        context: "Ingredients"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Most common. 2-4 hour rise."
      },
      {
        method: "Sourdough",
        suitability: "Historical",
        notes: "Before commercial yeast, old dough (khameer) was used."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Effective hydration around 70-75% (counting yogurt water). Soft dough bubbles better.",
    methodSuitability: {
      direct: { suitable: true, notes: "Standard." },
      poolish: { suitable: true, notes: "Good for puffiness." },
      biga: { suitable: false, notes: "Too stiff." }
    },
    whatIf: [
      {
        scenario: "You omit the Sugar",
        outcome: "You lose the beautiful browning/char spots.",
        solution: "Keep at least 1-2% sugar for color."
      }
    ],
    comparisons: [
      {
        vsStyle: "Butter Naan vs Garlic Naan",
        difference: "Same dough, different finishing topping."
      }
    ],
    proTips: [
      "Rest the dough balls for at least 30 mins before shaping—if they shrink back, they aren't ready.",
      "Use a rolling pin for even thickness, but hands for a more rustic texture.",
      "Brush with Ghee immediately—dry naan goes stale in minutes.",
      "Stack cooked naans in a cloth towel to keep them soft while you cook the rest."
    ]
  },

  tags: ["naan", "indian", "flatbread", "tandoor", "soft", "yogurt"],

  watchouts: [
    "Don't use Bread Flour—it creates a tough 'shoe-leather' naan.",
    "Pan not hot enough = no bubbles.",
    "Too much flour during rolling = burnt flour taste.",
    "Over-baking makes it a cracker."
  ],

  notes: [
    "Requires high smoke-point fat (Ghee).",
    "Yogurt tenderizer is mandatory.",
    "Best cooked on Cast Iron or Pizza Stone.",
    "Consume immediately.",
    "Can be stuffed (Keema Naan, Peshwari Naan)."
  ],

  references: [
    {
      source: "Dishoom Cookbook",
      url: "https://www.dishoom.com/",
      author: "Shamil Thakrar",
      year: "2019"
    },
    {
      source: "The Indian Cooking Course",
      url: "https://www.monishabharadwaj.com/",
      author: "Monisha Bharadwaj",
      year: "2016"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/naan_flatbread_hero.png",
    dough: "/images/styles/naan_flatbread_dough.png",
    crumb: "/images/styles/naan_flatbread_crumb.png"
  },
  recommendedFlavorComponents: ["yogurt_plain", "ghee_clarified_butter", "nigella_seeds", "garlic_fresh"],

  flavorProfile: {
    primaryFlavors: ["tangy yogurt fermentation", "rich ghee butter", "smoky char from high heat", "milky sweetness", "clean wheat dough"],
    aromaProfile: ["smoky tandoor char", "warm ghee", "yogurt tang", "fresh-baked wheat", "faintly spiced from nigella"],
    textureDescriptors: ["soft and billowy crumb", "charred bubbles on surface", "slightly chewy with a gentle pull", "tears cleanly into long strips"],
    tasteJourney: "The first bite delivers char and smoke from the grill or tandoor. Then the dough opens up — soft, tangy, and buttery from the ghee finish. The yogurt adds a subtle sourness that makes each bite feel complete.",
    mouthfeel: "Uniquely textural: the charred bubbles give pockets of smokiness while the dough around them is pillowy and hydrated. The ghee brush creates a slick, rich mouthfeel on the lips.",
    bakersNotes: "Without a tandoor, a cast iron skillet or pizza steel under the broiler at maximum temperature is the closest approximation. The dough must be hot-loaded — contact with intense heat is what creates the bubbles. Do not let it cook slowly."
  },

  culturalContext: {
    significance: "Naan is the bread of the Mughal courts, brought to Indian cuisine as a symbol of Persian refinement. It remains the most recognized Indian bread worldwide and is served at virtually every Indian restaurant globally. In South Asia, it represents celebration food — eaten at weddings and festivals.",
    rituals: ["Served alongside dal makhani and butter chicken at North Indian restaurants", "Garlic Naan (brushed with ghee and garlic) is the non-negotiable companion to any tandoor meal", "Keema Naan (stuffed with spiced minced meat) is a street food staple in Lahore and Delhi", "In Afghanistan, Naan (often just 'bread') is the dietary staple baked in communal stone ovens"],
    symbolism: "The teardrop shape is not intentional — it is physics. The dough stretches under gravity as it hangs on the vertical walls of the clay tandoor. This 'natural' shape has become the internationally recognized forma for the bread.",
    modernRole: "Omnipresent in Indian restaurants worldwide. As the global Indian diaspora expanded, Naan became one of the most consumed non-European flatbreads in the West. Premium versions with truffles, cheese, or sundried tomato have entered fine dining menus."
  },

  globalPresence: {
    primaryMarkets: ["India", "Pakistan", "Bangladesh", "UK", "Canada", "USA"],
    growingMarkets: ["Australia", "Germany", "France", "Japan", "Brazil"],
    penetrationLevel: "global",
    trend: "Extremely stable global demand. Supermarket versions are ubiquitous. Artisan bakeries now offer sourdough naan and specialty filled versions. Growing demand for restaurant-quality home versions.",
    diasporaImpact: "The British South Asian diaspora made Naan the UK's most popular flatbread. It is now the UK's #1 selling flatbread in supermarkets. The pattern has repeated across all major diaspora cities globally."
  },

  pairings: {
    beverages: [
      { name: "Mango Lassi", type: "traditional", notes: "The cool, sweet lassi is the antidote to the heat of the curry and the smoky char of the naan" },
      { name: "Kingfisher Beer (Indian Lager)", type: "traditional", notes: "The go-to beer at Indian restaurants globally — light and refreshing against bold spices" },
      { name: "Masala Chai", type: "traditional", notes: "Morning naan with chai is a common breakfast in North India and Pakistan" },
      { name: "Gewürztraminer (Alsatian White Wine)", type: "elevated", notes: "The aromatic, slightly sweet wine handles curry spice brilliantly" }
    ],
    foods: [
      { name: "Butter Chicken (Murgh Makhani)", pairing: "perfect", notes: "The definitive pairing — rich, creamy curry with soft naan for scooping" },
      { name: "Dal Makhani", pairing: "perfect", notes: "Black lentils slow-cooked in butter — naan is the required vessel" },
      { name: "Saag Paneer", pairing: "classic", notes: "Spinach and fresh cheese curry — naan scoops up every drop" },
      { name: "Seekh Kebab", pairing: "elevated", notes: "Wrap minced meat kebabs in naan with raita and onion — the ultimate street food" }
    ],
    occasions: ["Indian restaurant meal", "Diwali celebration dinner", "Wedding banquet", "Home takeaway Friday night"]
  },

  experimentSuggestions: [
    {
      title: "Sourdough Naan",
      description: "Replace instant yeast with 15% liquid sourdough starter. Add the extra tang to the existing yogurt base. Proof overnight in the refrigerator.",
      difficulty: "Medium",
      expectedOutcome: "Deeper tanginess from double fermentation. Slightly chewier texture with more complex flavor. Exceptional with ghee butter."
    },
    {
      title: "Black Garlic Naan",
      description: "Mash 4-5 black garlic cloves into the dough. Brush finished naan with regular garlic butter. The black garlic adds umami depth without the sharpness.",
      difficulty: "Easy",
      expectedOutcome: "A subtly sweet, molasses-like garlic note throughout the dough. A premium upgrade to garlic naan."
    },
    {
      title: "Peshwari Naan (Almond & Coconut Fill)",
      description: "Fill the naan with a paste of desiccated coconut, ground almonds, and brown sugar before grilling. Originally from Peshawar, Pakistan.",
      difficulty: "Medium",
      expectedOutcome: "A slightly sweet, fragrant filled naan. The coconut toasts against the hot grill, creating a caramelized filling contrast."
    }
  ],

  learnLinkTags: ["indian-bread", "flatbread", "tandoor", "yogurt-bread", "mughal", "north-india", "ghee", "garlic-naan", "south-asian", "restaurant-staple"]
};
