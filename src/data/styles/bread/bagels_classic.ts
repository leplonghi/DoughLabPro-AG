import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CLASSIC BOILED BAGELS (NEW YORK STYLE)
 * 
 * Researched and validated content:
 * - Origin: Krakow, Poland (17th c.), popularized in NYC (20th c.)
 * - Technique: Low hydration (50-55%), Boiling before baking, cold fermentation
 * - Ingredients: High-gluten flour, barley malt syrup
 * - Science: Boiling gelatinizes surface starch for the signature chewy crust
 */
export const bagels_classic: DoughStyleDefinition = {
  id: "bagels_classic",
  name: "Classic Boiled Bagels",
  category: "bread",
  recipeStyle: RecipeStyle.BAGEL,
  family: "Jewish-American Specialty Bread",

  origin: {
    country: "Poland / United States",
    region: "Krakow / New York City",
    period: "17th Century (Poland), 1920s (NYC Unionization)"
  },

  description: "The classic boiled bagel is a dense, chewy, and shiny ring of bread. Unlike any other bread, it is boiled in water (ideally containing malt syrup) before being baked. This unique two-step process sets the crust early, resulting in a dense, non-porous crumb and a thick, resilient, and glossy exterior that provides the trademark New York 'chew'.",

  history: "Bagels originated in the Jewish communities of Poland, first mentioned in 1610 in Krakow. They were traditionally given as gifts to women in childbirth due to their circular shape symbolizing the cycle of life. Jewish immigrants brought the recipe to New York in the late 19th century. By the 1920s, the craft was so specialized that the Bagel Bakers Local 338 union was formed, strictly controlling the production of hand-rolled, boiled, and stone-baked bagels. While the 'New York water' is often cited as a secret ingredient, the real secret lies in the long cold fermentation and the precise boiling technique.",

  difficulty: "Hard",
  fermentationType: "cold",

  base_formula: [
    { name: "High-Gluten Flour (13.5-14.5% protein)", percentage: 100 },
    { name: "Water", percentage: 53 },
    { name: "Salt", percentage: 2 },
    { name: "Barley Malt Syrup", percentage: 3 },
    { name: "Instant Yeast", percentage: 0.5 }
  ],

  technicalProfile: {
    hydration: [50, 58],
    salt: [1.8, 2.2],
    oil: [0, 0],
    sugar: [2, 4], // Usually malt
    flourStrength: "Extra-Strong Bread or High-Gluten Flour (W340-400)",
    ovenTemp: [220, 240],
    recommendedUse: [
      "Lox and Cream Cheese (Classic NY)",
      "Breakfast sandwiches with bacon and egg",
      "Pizza Bagels"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 115, min: 100, max: 140 }, // Classic NY size
    fermentationSteps: [
      "Mix: Combine ingredients and mix until very smooth. This is a stiff dough; your mixer will work hard. [Science: Low hydration and high gluten require significant mechanical energy to fully hydrate the protein chains]",
      "Bulk Rise: 1 hour at room temperature. [Science: Initial yeast activation ensures the dough isn't too dense to roll]",
      "Balling and Shaping: Divide and roll into tight logs, then loop around the hand to form rings. [Science: Hand-rolling creates a spiral gluten structure that resists expansion, increasing chewiness]",
      "Cold Retard: 12-24 hours at 4°C. [Science: Cold fermentation allows for flavor development and surface 'micro-blistering' caused by CO2 migration]",
      "The 'Float Test': Drop a cold bagel in water; it should float. [Science: Indicates enough CO2 has been trapped to survive the boiling process]",
      "Boiling: 45-60 seconds per side in water with malt syrup. [Science: Gelatinizes surface starches, killing yeast activity on the periphery and setting the crust thickness]",
      "Baking: 15-18 minutes at high heat. Traditionally on burlap-lined boards, then flipped onto the stone. [Science: High heat completes the Maillard reaction on the gelatinized surface, creating the shine]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W340-400 (Extra Strong)",
      pl_ratio: "0.65-0.80 (Tenacious)",
      absorption_capacity: "Moderate (despite high strength, low water is used)",
      protein_type: "Hard Red Winter/Spring Wheat with high glutenin content",
      science_explanation: "To achieve the 'bagel chew,' the gluten network must be exceptionally strong and dense. High-gluten flour is non-negotiable."
    },
    thermalProfile: {
      oven_type: "Deck oven or Stone-floor gas oven",
      heat_distribution: "Bottom conduction (high), top radiant",
      crust_development: "Thick, leathery, high-gloss shine, deep mahogany color",
      crumb_structure: "Extremely tight, dense, no large alveoli, very chewy"
    },
    fermentationScience: {
      yeast_activity: "Low (slowed by cold and low hydration)",
      ph_target: "pH 5.0-5.2",
      organic_acids: "Balanced; malt provides the primary flavor profile over acidity",
      enzymatic_activity: "Amylase activity is boosted by boiling, converting surface starches into sugars for rapid browning"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Malt is mandatory",
        explanation: "Barley malt syrup gives bagels their distinct 'old world' flavor and the dark, shiny crust. Avoid using honey or white sugar if you want the authentic New York profile."
      },
      {
        tip: "The 24-hour Retard",
        explanation: "Never skip the overnight rest in the fridge. This is where the flavor develops and the skin becomes smooth and blistered. A same-day bagel is just a donut-shaped roll."
      },
      {
        tip: "Don't over-boil",
        explanation: "60 seconds per side is plenty. If you boil too long, the crust becomes too thick and the bagel will fail to rise in the oven, leading to a rock-hard result."
      },
      {
        tip: "Steam is not needed in the oven",
        explanation: "Since you've already boiled the bagel, the surface is fully hydrated and gelatinized. Adding steam to the oven will actually prevent the crust from becoming properly crisp."
      },
      {
        tip: "The Hand-Roll Technique",
        explanation: "Wrap the dough strip around your palm, overlapping the ends by 2 inches, and roll the seal back and forth on the table. This creates a far superior texture to the 'poke-a-hole' method."
      }
    ],
    what_if: [
      {
        scenario: "The bagels are flat and wrinkled",
        result: "Over-proofed before boiling",
        correction: "The bagels should be boiled straight from the fridge. If they sit at room temp too long after the cold retard, they will lose structural integrity in the water."
      },
      {
        scenario: "The hole completely disappears during baking",
        result: "The hole was too small or dough was too soft",
        correction: "The hole should be about the size of a golf ball when shaped. Use a stiffer dough (lower hydration)."
      },
      {
        scenario: "The crust is dull and pale",
        result: "Water was not boiling or no malt was added",
        correction: "Ensure a vigorous boil and use plenty of malt syrup or a tablespoon of barley malt powder in the water."
      },
      {
        scenario: "The bagels are too airy and soft",
        result: "Too much hydration or too much yeast",
        correction: "Drop hydration to 53% and yeast to 0.5%. High-gluten flour is also essential for the dense crumb."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Montreal Bagel",
        difference: "Montreal bagels are boiled in honey-water, have no salt, are baked in wood-fired ovens, and are much denser and sweeter.",
        why_choose_this: "Choose NY style for a salty, chewy sandwich-friendly bagel."
      },
      {
        target_style: "Bialy",
        difference: "Bialys are not boiled; they have a depression instead of a hole, and are usually topped with onions/poppy seeds.",
        why_choose_this: "Choose Bagels for the shiny crust and superior chew."
      },
      {
        target_style: "Pretzel",
        difference: "Pretzels are dipped in lye or baking soda (alkaline), which creates a different chemical crust. Bagels use malt (acidic/neutral sugar).",
        why_choose_this: "Choose Bagels for a breadier, less 'mineral' flavor."
      }
    ],
    q_and_a: [
      {
        question: "Does New York water really make the difference?",
        answer: "The soft water of NYC (low in calcium and magnesium) helps the gluten stay extensible, but top bakers agree that traditional technique (boiling and long ferment) is 99% of the result.",
        context: "History"
      },
      {
        question: "Why boil them?",
        answer: "Boiling cooks the outer layer, 'setting' the size of the bagel. It prevents further expansion in the oven, which creates the dense crumb and chewy crust.",
        context: "Technique"
      },
      {
        question: "Can I use All-Purpose flour?",
        answer: "No. AP flour will result in a soft roll. You need at least 13% protein to fight through the boiling and create the necessary resistance.",
        context: "Ingredients"
      },
      {
        question: "Why malt syrup instead of sugar?",
        answer: "Malt syrup contains complex sugars that brown differently and provide a specific 'earthy' depth of flavor that defines a real bagel.",
        context: "Flavor"
      },
      {
        question: "What is a 'Buzzer' bagel?",
        answer: "In old NY lingo, it was a bagel delivered so fresh it was still hot. Authentic bagels stale quickly because they have zero fat; eat them fresh!",
        context: "Culture"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Possible",
        notes: "Same-day bagels will be bland. Only use if in a rush."
      },
      {
        method: "Hybrid",
        suitability: "Authentic",
        notes: "A mix of instant yeast and a long (18-24h) cold retard is the industry standard for NYC bagels."
      },
      {
        method: "Sourdough",
        suitability: "Ideal",
        notes: "Adds incredible depth and shelf-life, though traditionally NY bagels are yeast-leavened."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "At 53%, the dough is extremely hard to mix but easy to shape. This low moisture ensures that when the bagel hits the boiling water, it doesn't absorb too much and become soggy. It stays a tight, resilient ring.",
    methodSuitability: {
      direct: { suitable: true, notes: "Requires at least 12h cold retard." },
      biga: { suitable: true, notes: "Excellent for building additional chew and aroma." },
      poolish: { suitable: false, notes: "Too liquid; will make the dough too soft to hold its ring shape." }
    },
    whatIf: [
      {
        scenario: "You omit the salt",
        outcome: "The bread will taste like paper and the yeast will over-react, creating a bloated, hollow bagel.",
        solution: "Salt is critical for flavor and for controlling yeast activity in the low-hydration environment."
      }
    ],
    comparisons: [
      {
        vsStyle: "Steamed Bagels",
        difference: "Supermarket bagels are often steamed rather than boiled; they are soft, bread-like, and lack the 'skin' and chew of a boiled bagel."
      }
    ],
    proTips: [
      "Add a tablespoon of baking soda to the water for a darker, more 'pretzel-adjacent' crust.",
      "Topping: Dip the bagels in seeds immediately after boiling while they are still sticky.",
      "Store in the freezer, never the fridge. Refrigeration accelerates staling in lean breads.",
      "Boil in a wide, shallow pot to make flipping easy."
    ]
  },

  tags: ["bagel", "new-york", "boiled", "chewy", "jewish-bread", "classic"],

  watchouts: [
    "Dough too wet? It will stick to the boiling tray and lose its shape.",
    "Water not boiling? The starch won't gelatinize correctly, and the crust will be dull.",
    "Baking too long? The bagel will become a crouton.",
    "Not enough malt? The flavor will be 'white bread' rather than bagel."
  ],

  notes: [
    "Krakow 1610 origin.",
    "Unionized bakers (Local 338) protected the style for decades.",
    "Boiling is the 'magic' step.",
    "Malt syrup is the secret.",
    "Ideally eaten within 6 hours of baking."
  ],

  references: [
    {
      source: "The Bagel: The Surprising History of a Modest Bread",
      url: "https://www.amazon.com/Bagel-Surprising-History-Modest-Bread/dp/0300117627",
      author: "Maria Balinska",
      year: "2008"
    },
    {
      source: "Modernist Bread (Bagel Boiling Science)",
      url: "https://modernistcuisine.com/books/modernist-bread/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2017"
    },
    {
      source: "Serious Eats - How to Make Real New York Bagels",
      url: "https://www.seriouseats.com/how-to-make-real-new-york-bagels",
      author: "J. Kenji López-Alt"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/bagel-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["cream_cheese", "smoked_salmon", "sesame_seeds", "poppy_seeds", "salted_butter_normandy"]
};
