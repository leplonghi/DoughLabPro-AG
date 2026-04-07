import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * AREPA (VENEZUELAN/COLOMBIAN CORN FLATBREAD)
 * 
 * Researched and validated content:
 * - Origin: Colombia/Venezuela (Pre-Columbian)
 * - Technique: Hydration of pre-cooked corn flour (Masarepa), griddle searing + baking
 * - Ingredients: Masarepa (White/Yellow), Water, Salt, Oil/Butter
 * - Characteristics: Crispy exterior, moist almost creamy interior, split and stuffed
 */
export const arepa_corn_flatbread: DoughStyleDefinition = {
  id: "arepa_corn_flatbread",
  name: "Arepa (Corn Flatbread)",
  category: "flatbread",
  recipeStyle: RecipeStyle.FLATBREAD,
  family: "South American Corn Bread",

  origin: {
    country: "Colombia / Venezuela",
    region: "Northern South America",
    period: "Pre-Columbian (>1000 years)"
  },

  description: "The Arepa is the daily bread of Colombia and Venezuela. It is a round, flat patty made from pre-cooked corn flour (Masarepa). Unlike tortillas, arepas are thick (1.5 - 2cm) and cooked until they develop a hard, crispy shell protecting a soft, steaming, starchy interior. They are sliced open like a pocket and stuffed with cheese, meat, beans, or eggs.",

  history: "Originally made by indigenous tribes who soaked and pounded dried corn in a pilón (large wooden mortar), the modern arepa was revolutionized in the 1960s with the invention of industrial pre-cooked corn flour (Harina P.A.N.). This invention simplified the process from days to minutes, checking the arepa's place as the dominant staple food of the region.",

  difficulty: "Easy",
  fermentationType: "direct", // No fermentation, but hydration rest is key

  base_formula: [
    { name: "Pre-cooked Corn Flour (Masarepa)", percentage: 100 },
    { name: "Water (Warm)", percentage: 120 }, // Hydration is usually > 100%
    { name: "Salt", percentage: 2 },
    { name: "Butter or Oil", percentage: 5 } // Optional, for richness
  ],

  technicalProfile: {
    hydration: [110, 130], // Corn absorbs massive amounts of water
    salt: [1.5, 2.5],
    oil: [0, 5],
    sugar: [0, 0], // Not sweet
    flourStrength: "N/A (Gluten Free). Cohesion comes from gelatinized starch.",
    ovenTemp: [200, 220],
    recommendedUse: [
      "Reina Pepiada (Chicken & Avocado)",
      "Cheese Arepa (Queso de Mano)",
      "Breakfast side"
    ],
    difficulty: "Easy",
    ballWeight: { recommended: 150, min: 100, max: 200 },
    fermentationSteps: [
      "Mixing: Pour water and salt into a bowl. Slowly rain in the flour while mixing with your hand to prevent lumps. [Science: Adding flour to water creates a smoother hydration than water to flour]",
      "Resting (Hydration): Let the mix sit for 5-10 minutes. [Science: The dehydrated corn particles need time to fully absorb the water and swell. The mix will stiffen significantly]",
      "Kneading: Knead briefly in the bowl until smooth and non-sticky. [Science: We are creating a cohesive starch gel, not gluten]",
      "Shaping: Form into a ball, then flatten into a disk (1.5-2cm thick). Repair any cracks on the edges with wet fingers. [Science: Cracks will expand in the heat, so smooth edges are vital]",
      "Searing (Budare/Pan): Cook on medium-high heat for 5-7 mins per side until a crust forms with black spots. [Science: Sets the structure]",
      "Baking (Optional): Finish in oven at 200°C for 10 mins. [Science: Dries the shell further and puffs the center slightly, making it easier to split]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "N/A",
      pl_ratio: "N/A",
      absorption_capacity: "Extreme (>110%)",
      protein_type: "Corn Protein (Zein) - No Gluten",
      science_explanation: "Structure relies entirely on the re-gelatinization of the pre-cooked starch. If the water is too cold or resting is skipped, the arepa will be sandy/grainy."
    },
    thermalProfile: {
      oven_type: "Cast Iron Griddle (Budare) + Oven",
      heat_distribution: "Conduction",
      crust_development: "Hard, crispy, spotted carapace",
      crumb_structure: "Dense, moist, starchy gel"
    },
    fermentationScience: {
      yeast_activity: "None (usually)",
      ph_target: "Neutral",
      organic_acids: "N/A",
      enzymatic_activity: "N/A"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Masarepa is NOT Masa Harina",
        explanation: "Do not use 'Maseca' (for tacos/tortillas). That is nixtamalized and tastes like lime. You need 'Harina de Maiz Precocida' (P.A.N. brand)."
      },
      {
        tip: "The Slap Sound",
        explanation: "Venezuelans say the dough is ready when it doesn't stick to your hands and makes a specific 'chap-chap' sound when slapped between palms."
      },
      {
        tip: "Wet Hands",
        explanation: "Keep a bowl of water nearby. Wet your hands before shaping each arepa to ensure a glossy smooth finish."
      },
      {
        tip: "The Hollow Tap",
        explanation: "An arepa is perfectly cooked when you tap the center and it sounds slightly hollow ('toc toc'), indicating the steam has separated the shell from the crumb."
      }
    ],
    what_if: [
      {
        scenario: "The dough cracks at the edges",
        result: "Too dry",
        correction: "Add more warm water and knead again. Arepa dough is forgiving."
      },
      {
        scenario: "The inside is gummy",
        result: "Under-cooked or sliced too hot",
        correction: "Finish in the oven (the 'Golfeado' technique) to ensure the core is cooked. Let rest 2 mins before slicing."
      },
      {
        scenario: "It falls apart",
        result: "Too wet or didn't rest",
        correction: "Let the dough sit longer to absorb water."
      }
    ],
    comparisons: [
      {
        vsStyle: "Tortilla",
        difference: "Tortilla = Thin, pliable, nixtamalized. Arepa = Thick, crispy shell, non-nixtamalized (usually).",
        why_choose_this: "Choose Arepa for a hearty stuffed sandwich."
      },
      {
        vsStyle: "Pupusa",
        difference: "Pupusa is stuffed BEFORE cooking (El Salvador). Arepa can be stuffed before or after, but usually after.",
        why_choose_this: "Choose Arepa for the 'pocket' experience."
      }
    ],
    q_and_a: [
      {
        question: "Gluten Free?",
        answer: "Yes, naturally 100% gluten free (check packaging for cross-contamination).",
        context: "Dietary"
      },
      {
        question: "White vs Yellow?",
        answer: "Mostly aesthetic. Yellow corn has a slightly nuttier/sweeter profile, but White is the standard canvas for fillings.",
        context: "Ingredients"
      },
      {
        question: "Bake or Fry?",
        answer: "Traditional is grilled (asado). Coastal versions are deep-fried (frita) and incredibly decadent.",
        context: "Technique"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "No yeast, just hydration."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Water amount varies by brand and humidity. Start with 1:1 ratio and add more until soft.",
    methodSuitability: {
      direct: { suitable: true, notes: "Only method." },
      poolish: { suitable: false, notes: "N/A" }
    },
    whatIf: [
      {
        scenario: "You use Polenta/Grits",
        outcome: "Disaster. It won't bind. Polenta is coarse and raw. Masarepa is fine and cooked.",
        solution: "Buy the right flour."
      }
    ],
    comparisons: [
      {
        vsStyle: "Colombian vs Venezuelan",
        difference: "Colombian arepas are often thinner, eaten plain as a side, or topped. Venezuelan arepas are often thicker and stuffed like sandwiches."
      }
    ],
    proTips: [
      "Mix grated cheese (cotija or mozzarella) directly into the dough (Arepa de Queso).",
      "Add a splash of milk to the water for a softer crumb.",
      "Use 'Budare' or a heavy cast iron skillet—non-stick pans don't give the right char."
    ]
  },

  tags: ["arepa", "venezuelan", "colombian", "corn", "gluten-free", "stuffed"],

  watchouts: [
    "Wrong flour type is the #1 error.",
    "Cracked edges split wide open in the pan.",
    "Cooking too fast burns outside, raw inside.",
    "Dough dries out fast—keep covered."
  ],

  notes: [
    "Staple food of Northern South America.",
    "Naturally Gluten Free.",
    "Uses Pre-cooked Corn Flour (P.A.N.).",
    "Can be grilled, baked, or fried.",
    "Infinite filling possibilities."
  ],

  references: [
    {
      source: "Gran Libro de la Cocina Venezolana",
      url: "https://www.venezuelatuya.com/",
      author: "Scannone",
      year: "1982"
    },
    {
      source: "P.A.N. Official Recipes",
      url: "https://www.harinapan.com/",
      author: "Alimentos Polar",
      year: "2023"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/arepa-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "mozzarella_low_moisture"] // Cheese and Butter are standard
};
