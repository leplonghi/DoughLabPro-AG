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
    hero: "/images/styles/pita_bread_flatbread_hero.png",
    dough: "/images/styles/pita_bread_flatbread_dough.png",
    crumb: "/images/styles/pita_bread_flatbread_crumb.png"
  },
  recommendedFlavorComponents: ["olive_oil_extra_virgin", "yogurt_plain", "honey_raw"],

  flavorProfile: {
    primaryFlavors: ["neutral wheat", "lightly yeasty", "clean grain", "subtle olive oil", "mild saltiness"],
    aromaProfile: ["warm fresh bread", "faint yeast", "toasted flour", "clean sesame (if topped)", "neutral wheat"],
    textureNotes: ["soft and pliable when fresh", "two distinct thin dough layers", "hollow interior pocket", "chewy when warm", "papery-crisp if over-baked"],
    pairingRecommendations: ["Hummus", "Falafel", "Shawarma", "Baba Ganoush", "Labneh with olive oil"],
    flavorEvolution: ["Fresh from oven: best — soft, pliant, steamy pocket", "1 hour later: pliable but softening pocket", "Day-old: best toasted or microwaved briefly", "Freezes perfectly — reheat in toaster"]
  },

  culturalContext: {
    significance: [
      "One of the oldest leavened breads in human history — over 4,000 years of continuous baking",
      "The daily bread of millions across the Levant, Arab world, and Mediterranean",
      "Functions simultaneously as food and eating utensil (scooping vehicle)",
      "The 'pocket' was likely a happy accident of ancient bakers on hot stone hearths",
      "Symbolic of hospitality across Middle Eastern cultures"
    ],
    consumptionContext: [
      "Stuffed with Falafel or Shawarma for street food",
      "Torn and used to scoop hummus and dips",
      "Served alongside grilled meats at family meals",
      "Cut into wedges and toasted as pita chips",
      "Eaten plain as a bread course with olive oil and za'atar"
    ],
    evolution: [
      "Origins in ancient Mesopotamia and the Levant — baked on clay tablets and hot stones",
      "The shape and technique crossed into Greece (pita) and became a Mediterranean staple",
      "Industrial pita production began in the US in the 1970s — popularising it globally",
      "Modern artisan revival focuses on whole-wheat, sourdough, and wood-fired versions",
      "The 'pocket' vs 'no-pocket' distinction now defines Greek gyro pita vs Middle Eastern pita"
    ],
    rituals: [
      "Covering pitas with a cloth immediately out of the oven is essential — steam softens the crust",
      "In Lebanon and Syria, pita bread accompanies every meal as the default table bread",
      "The act of tearing and sharing pita is a gesture of communal hospitality",
      "Leftover pita is almost always repurposed: toasted, fried (Fattoush salad croutons), or used for Fatteh"
    ]
  },

  globalPresence: {
    regions: ["Entire Middle East and Levant", "Greece and Cyprus", "North Africa", "Turkey (as a variant)", "USA, UK, Australia (supermarket staple)"],
    popularity: "globally ubiquitous",
    exportStatus: "One of the most exported flatbreads in the world",
    internationalRecognition: "Universally recognised — supermarket staple in Western countries"
  },

  pairings: {
    beverages: ["Ayran (yogurt drink)", "Mint lemonade", "Pomegranate juice", "Black tea"],
    foods: ["Hummus", "Falafel", "Shawarma", "Baba Ganoush", "Labneh", "Grilled lamb kebabs", "Fattoush salad"],
    occasions: ["Everyday meal bread", "Street food wrap", "Mezze spread", "Picnic snack"],
    seasons: ["Year-round"]
  },

  experimentSuggestions: [
    { title: "Sourdough Pita", description: "Replace instant yeast with 15% active sourdough levain for a more complex, slightly tangy pita with superior shelf life." },
    { title: "Whole Wheat 50/50", description: "Use 50% whole wheat + 50% white flour for a nuttier, earthier pita. Note: 100% whole wheat struggles to form the pocket reliably." },
    { title: "Wood-fired Pita", description: "Bake on a wood-fired pizza oven floor at 400°C+ — the dramatic heat creates a puffed, slightly charred, incredibly aromatic pita in under 90 seconds." },
    { title: "Za'atar Pita", description: "Brush the rolled disk with olive oil and sprinkle za'atar before baking. The herb-oil topping bakes into the crust for a flavour-packed flatbread." },
    { title: "No-Pocket Greek Style", description: "Roll 1cm thick and cook on a very hot griddle with olive oil — this creates the thicker, pocketless Greek gyro pita." }
  ],

  learnLinkTags: ["pocket-bread", "middle-eastern", "flatbread", "steam-puff", "levantine", "ancient-bread", "flash-bake", "falafel"]
};
