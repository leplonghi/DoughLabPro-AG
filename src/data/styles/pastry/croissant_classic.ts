import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CROISSANT CLASSIC (VIENNOISERIE)
 * 
 * Researched and validated content:
 * - Origin: Austria (Kipferl) / France (Modern evolution, 1839 August Zang)
 * - Technique: Lamination (3x3 folds), Détrempe, Beurrage (82%+ fat butter)
 * - Ingredients: T55/T45 Flour, Milk, High-fat dry butter, Yeast, Sugar, Salt
 * - Characteristics: Honeycomb crumb (Alvéolage), shattering crispness, intense butter aroma
 */
export const croissant_classic: DoughStyleDefinition = {
  id: "croissant_classic",
  name: "Croissant Classic",
  category: "pastry",
  recipeStyle: RecipeStyle.FRENCH_CROISSANT,
  family: "Laminated Yeasted Dough",

  origin: {
    country: "France",
    region: "Paris / National",
    period: "1839 (August Zang) - Early 20th Century (Modern puff-paste version)"
  },

  description: "The classic French Croissant is the peak of Viennoiserie craftsmanship. It is a laminated, yeasted pastry characterized by its crescent shape, multiple visible flaky layers, and a moist, buttery 'honeycomb' interior. A perfect croissant should have a shattering, golden-brown crust that yields to a soft, airy, and intensely aromatic crumb.",

  history: "While often associated with Marie Antoinette, the croissant's true ancestor is the Austrian 'Kipferl'. The modern history began in 1839 when August Zang, an Austrian artillery officer, opened the 'Boulangerie Viennoise' in Paris. He introduced the Kipferl, which Parisians quickly adopted. However, it wasn't until the early 20th century that French bakers replaced the brioche-like dough of the Kipferl with puff-pastry-style lamination (pâte feuilletée levée), creating the light, flaky icon we know today. In 1915, the first official recipe for the laminated croissant was published by Sylvain Claudius Goy.",

  difficulty: "Expert",
  fermentationType: "cold",

  base_formula: [
    { name: "Strong Bread Flour (T55/T45 blend)", percentage: 100 },
    { name: "Whole Milk (cold)", percentage: 55 },
    { name: "Sugar", percentage: 12 },
    { name: "Salt", percentage: 2 },
    { name: "Fresh Yeast", percentage: 4 },
    { name: "Butter (for the dough/détrempe)", percentage: 5 },
    { name: "Butter Block (for lamination)", percentage: 50 }
  ],

  technicalProfile: {
    hydration: [50, 58], // Including milk water content
    salt: [1.8, 2.2],
    oil: [45, 60], // Total butter content
    sugar: [10, 15],
    flourStrength: "T55 or Bread Flour blend (W280-320) with good extensibility",
    ovenTemp: [180, 200],
    recommendedUse: [
      "Artisanal breakfast pastry",
      "Croissant Sandwiches (Jambon-beurre)",
      "Bread Pudding (for day-old croissants)"
    ],
    difficulty: "Expert",
    ballWeight: { recommended: 70, min: 55, max: 90 },
    fermentationSteps: [
      "Mixing (Détrempe): Combine flour, milk, yeast, sugar, salt, and first butter. Mix only until organized. [Science: Minimal mixing prevents excessive gluten development, making rolling easier later]",
      "Bulk Rise & Chill: 1 hour at room temp, then flatten and freeze/chill for 12-24 hours. [Science: Cold temperature inhibits yeast and firms the dough for lamination]",
      "Beurrage (Enclosure): Enclose the cold butter block (82%+ fat) into the cold dough. [Science: Dough and butter must have the same consistency/softness to roll together without breaking]",
      "Lamination (Turns): Perform one simple turn and one double turn (or 3 simple turns). Rest in fridge between turns. [Science: Creates alternating layers of dough and fat. Steam from the butter pushes the dough layers apart during baking]",
      "Shaping: Roll to 4mm thickness, cut into long triangles, and roll tightly into crescents. [Science: Proper rolling tension ensures an even spiral and prevents the center from being raw]",
      "Final Proof: 2 to 2.5 hours at 26-28°C with 80% humidity. [Science: Temperature must stay below the butter's melting point (approx 32°C) or the layers will merge and fail]",
      "Baking: Bake at 190°C with an initial surge of steam. [Science: Mechanical leavening happens as the water in the butter layers evaporates and lifts the dough before the structure sets]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W280-320 (Strong but extensible)",
      pl_ratio: "0.45-0.55 (Low P/L for high extensibility)",
      absorption_capacity: "Moderate (55%)",
      protein_type: "Strong wheat with high extensibility (elasticity should be low enough to prevent snap-back)",
      science_explanation: "The dough must be strong enough to hold the thin layers of butter during rolling but extensible enough to be stretched without tearing the delicate laminate."
    },
    thermalProfile: {
      oven_type: "Convection or Deck Oven",
      heat_distribution: "Rapid convection for uniform browning of the many thin edges",
      crust_development: "Paper-thin, shattering, golden-mahogany (significant Maillard reaction due to milk and sugar)",
      crumb_structure: "Honeycomb (Alvéolage) - large, regular air pockets separated by thin filaments of dough"
    },
    fermentationScience: {
      yeast_activity: "Slowed by high sugar and high fat; cold fermentation is used to develop flavor complexity and lactic acidity",
      ph_target: "pH 5.4 - 5.6",
      organic_acids: "Lactic-forward from the milk and slow proof; subtle acetic notes from the long cold rest",
      enzymatic_activity: "Alpha-amylase converts starches to sugars for the crust, while protease slowly relaxes the gluten for the final stretch"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Consistency is King",
        explanation: "The dough and the butter must have exactly the same 'firmness' when you start lamination. If the butter is too hard, it will break into shards; if too soft, it will bleed into the dough."
      },
      {
        tip: "Never skip the cold rests",
        explanation: "Between every turn, the dough needs at least 30-45 minutes in the fridge. This relaxes the gluten and ensures the butter remains a solid sheet."
      },
      {
        tip: "The 28°C Limit",
        explanation: "Never proof croissants above 28°C (82°F). Most European butters melt at 30-32°C. If the butter melts during proofing, you end up with a brioche, not a croissant."
      },
      {
        tip: "Watch the 'Shoulders'",
        explanation: "When rolling the triangle, the 'shoulders' (the wide base) should be slightly stretched out before rolling to get the high-relief, defined look of the final spiral."
      },
      {
        tip: "Egg Wash twice",
        explanation: "Apply egg wash once after shaping and again just before baking. This creates a deep, professional shine and prevents the dough from drying out."
      }
    ],
    what_if: [
      {
        scenario: "The butter is leaking out during baking",
        result: "Under-proofed or the proofing temperature was too high",
        correction: "Ensure the croissants are very 'jiggly' before baking, and check that your proofer didn't exceed 28°C."
      },
      {
        scenario: "The inside is 'bready' and dense without holes",
        result: "Over-worked dough or poor lamination technique",
        correction: "Reduce the initial mixing time of the détrempe and be more precise with your turns. Don't press down too hard with the rolling pin."
      },
      {
        scenario: "The layers are shattered and uneven",
        result: "Butter was too cold during the first turn",
        correction: "Let the butter block sit at room temperature for 5 minutes before enclosing it so it becomes pliable like plasticine."
      },
      {
        scenario: "The croissants look pale and soft",
        result: "Under-baked or too much steam",
        correction: "Increase the oven temperature and vent the steam halfway through the bake to allow the crust to crisp."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Pain au Chocolat",
        difference: "Same dough, but shaped as a rectangle with two chocolate bars inside. Lamination technique is identical.",
        why_choose_this: "Choose Croissant for the pure appreciation of butter flavor."
      },
      {
        target_style: "Danish Pastry",
        difference: "Danish dough often includes more sugar, eggs, and cardomom, and the lamination often results in more, thinner layers.",
        why_choose_this: "Choose Croissant for a crispier, leaner, and more traditional French profile."
      },
      {
        target_style: "Puff Pastry (Mille-feuille)",
        difference: "Puff pastry contains no yeast. All the lift comes from mechanical steam expansion of the fat layers.",
        why_choose_this: "Choose Croissant when you want a soft, yeasted interior combined with a flaky exterior."
      }
    ],
    q_and_a: [
      {
        question: "Is it really Austrian?",
        answer: "Yes, the shape and name come from the Austrian 'Kipferl' (crescent), but the laminated texture is a purely French innovation from the late 19th century.",
        context: "History"
      },
      {
        question: "Why use 'Dry Butter' (Beurre de Tournage)?",
        answer: "Professional dry butter (84% fat) has a higher melting point and is more plastic, making it much easier to roll into thin sheets without breaking.",
        context: "Ingredients"
      },
      {
        question: "How long does it take?",
        answer: "A true artisanal croissant takes 2 to 3 days to allow for proper gluten relaxation and flavor development through cold fermentation.",
        context: "Technique"
      },
      {
        question: "What is 'mechanical leavening'?",
        answer: "It's the process where the water in the butter layers evaporates into steam, pushing the dough layers up before the yeast even starts to expand vigorously.",
        context: "Science"
      },
      {
        question: "Why do my croissants smell like yeast?",
        answer: "This happens if they are proofed too fast or if too much yeast was used to compensate for poor lamination.",
        context: "Troubleshooting"
      }
    ],
    fermentation_methods: [
      {
        method: "Hybrid",
        suitability: "Authentic",
        notes: "Combination of commercial yeast and long cold fermentation (and sometimes a bit of leaven) is the modern standard."
      },
      {
        method: "Sourdough",
        suitability: "Possible",
        notes: "Known as 'Croissant au Levain'. Much harder to control and less 'light' than yeasted versions, but with incredible shelf life."
      },
      {
        method: "Direct",
        suitability: "Not Recommended",
        notes: "Omitting the cold rest makes the dough impossible to roll without the butter melting."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Croissant hydration (milk/water) is kept relatively low (50-55%) because the dough must be firm enough to resist the pressure of the butter block and the weight of the many laminated layers.",
    methodSuitability: {
      direct: { suitable: false, notes: "Requires overnight cold rest." },
      biga: { suitable: false, notes: "Too much strength; hinders rolling." },
      poolish: { suitable: true, notes: "Sometimes used in a small percentage (15%) to add aroma and extensibility." }
    },
    whatIf: [
      {
        scenario: "You use 80% fat butter (standard table butter)",
        outcome: "The higher water content in the butter will evaporate too quickly or bleed into the dough, leading to a less defined honeycomb.",
        solution: "Use the highest fat content butter available (82-84%) or 'dry' butter."
      }
    ],
    comparisons: [
      {
        vsStyle: "Butter Croissant vs Margarine Croissant",
        difference: "In France, 'Croissants au Beurre' are straight/oblong, while 'Croissants ordinaires' (made with margarine) are curved. Butter has a superior melt-in-mouth feeling."
      }
    ],
    proTips: [
      "Freeze the dough for 20 minutes before the final roll to make cutting triangles effortless.",
      "Internal temp should reach 90-94°C.",
      "Store in a paper bag; reheating for 2 mins in an oven brings back the 'shatter'.",
      "The 'Poolish' method is often used by modern French MOF (Meilleur Ouvrier de France) bakers for better aroma.",
      "Always use cold milk to keep the friction heat of the mixer in check."
    ]
  },

  tags: ["french", "croissant", "pastry", "lamination", "butter", "viennoiserie"],

  watchouts: [
    "Butter melting during rolling? Your layers are ruined.",
    "Draft during proofing? The croissants will crack like dry earth.",
    "Oven too cold? The butter will pool on the tray.",
    "Shaping too tight? The center won't cook."
  ],

  notes: [
    "Peak of Viennoiserie.",
    "Lamination (Pâte Feuilletée Levée).",
    "Requires high-fat dry butter.",
    "Proofing temp is critical (< 28°C).",
    "Shaping requires consistent tension."
  ],

  references: [
    {
      source: "Ferrandi Paris - Professional Baking Fundamentals",
      url: "https://www.amazon.com/Ferrandi-Paris-Professional-Baking-Fundamentals/dp/2080203266",
      author: "Ferrandi Paris",
      year: "2021"
    },
    {
      source: "The Art of French Pastry",
      url: "https://www.amazon.com/Art-French-Pastry-Jacquy-Pfeiffer/dp/0307959139",
      author: "Jacquy Pfeiffer",
      year: "2013"
    },
    {
      source: "Modernist Bread (Viennoiserie Science)",
      url: "https://modernistcuisine.com/books/modernist-bread/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2017"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/croissant-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw", "dark_chocolate_70", "vanilla_madagascar"]
};
