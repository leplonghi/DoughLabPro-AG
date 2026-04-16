import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * VOLLKORNBROT (100% RYE BREAD)
 * 
 * Researched and validated content:
 * - Origin: Germany (Northern/Westphalia)
 * - Technique: Pentosan-based structure (No gluten kneading), Sourdough acidification
 * - Ingredients: Rye Berries (Chopped), Dark Rye Flour, Water, Salt, Sunflower Seeds
 * - Characteristics: Extremely dense, brick-like, moist, malty, sour, long shelf life
 */
export const vollkornbrot_100_rye: DoughStyleDefinition = {
  id: "vollkornbrot_100_rye",
  name: "Vollkornbrot (German Rye)",
  category: "bread",
  recipeStyle: RecipeStyle.RYE, // I should ensure RYE exists or map to Other
  family: "Northern European Rye",

  origin: {
    country: "Germany",
    region: "Nationwide",
    period: "Medieval (Ancient)"
  },

  description: "Vollkornbrot (Whole Grain Bread) is the heavyweight champion of the bread world. Made with 100% rye (often a mix of flour and coarse chops/berries), it has zero gluten development. Instead, it relies on 'pentosans' (gums) and acidification to hold its structure. It is dense, moist, deeply flavorful, and technically challenging due to the 'Starch Attack' phenomenon which requires high acidity to prevent.",

  history: "Rye was the staple crop of Northern Europe where wheat could not survive the cold winters. German bakers perfected the art of using sourdough not just for leavening, but for chemistry: without the acid from the sourdough, the enzymes in the rye would dismantle the starch structure during baking, resulting in a soggy, hollow loaf.",

  difficulty: "Expert",
  fermentationType: "levain",

  base_formula: [
    { name: "Rye Meal / Chops (Coarse)", percentage: 50 },
    { name: "Whole Rye Flour (Dark)", percentage: 50 },
    { name: "Water (Hot)", percentage: 80 },
    { name: "Rye Sourdough Starter", percentage: 40 }, // High inoculation crucial for acid
    { name: "Sunflower Seeds", percentage: 10 },
    { name: "Salt", percentage: 2 },
    { name: "Molasses/Syrup", percentage: 3 } // Food for yeast + color
  ],

  technicalProfile: {
    hydration: [75, 85], // Rye absorbs a lot
    salt: [1.8, 2.2],
    oil: [0, 0],
    sugar: [2, 5],
    flourStrength: "N/A. Use Whole Rye. Protein content is irrelevant for structure.",
    ovenTemp: [200, 240], // Falling heat curve (starts hot, finishes low)
    recommendedUse: [
      "Smørrebrød (Open faced sandwiches)",
      "With aged Gouda or Cured Meats",
      "Just butter"
    ],
    difficulty: "Expert",
    ballWeight: { recommended: 1000, min: 800, max: 1500 }, // Usually baked in a Pullman tin
    fermentationSteps: [
      "Soaker Prep: Soak the coarse rye chops and seeds in boiling water for 12 hours. [Science: Softens the bran and pre-gelatinizes starch]",
      "Sourdough Build: Build a stiff rye levain. Ripen for 12-16 hours. [Science: Maximize Acetic Acid production]",
      "Mixing: Combine all ingredients. Mix on LOW speed only. Do not knead. [Science: We are mixing like concrete, not developing gluten. Over-mixing breaks the pentosans]",
      "Bulk Rest: Short rest (30 mins). [Science: Rye moves fast]",
      "Shaping: With wet hands (it's sticky like clay), smooth into a greased Pullman pan.",
      "Final Proof: Proof until the surface shows cracks (Pinholes). [Science: Don't look for double size; look for surface texture]",
      "Baking: Bake with steam at 240°C for 15 mins, then drop to 190°C for 45-60 mins. [Science: Long slow bake ensures the dense core reaches 98°C]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "N/A",
      pl_ratio: "N/A",
      absorption_capacity: "Extreme",
      protein_type: "Rye Protein (nutritionally present, functionally useless for structure)",
      science_explanation: "Structure is a 'Pentosan-Starch Gel'. The sourdough acid (pH < 4.5) inhibits amylase enzymes. Without acid, the amylases would eat the starch gel during the bake (Starch Attack), causing the loaf to collapse."
    },
    thermalProfile: {
      oven_type: "Deck Oven or Combi",
      heat_distribution: "Falling heat",
      crust_development: "Think, dark, protective shell",
      crumb_structure: "Dense, moist, heavy, zero alveoli"
    },
    fermentationScience: {
      yeast_activity: "Secondary",
      ph_target: "pH 4.0 - 4.2 (Mandatory)",
      organic_acids: "Acetic Acid dominant (Sour)",
      enzymatic_activity: "Must be INHIBITED by acidity."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "The 24h Wait",
        explanation: "Never cut a Rye bread hot. The starch gel needs 24-48 hours to 'set'. If you cut it early, the knife will be gummy and the bread will crumble."
      },
      {
        tip: "Docking",
        explanation: "Poke holes all over the top (Docking) to prevent the top crust from separating (flying crust)."
      },
      {
        tip: "Sticky Hands",
        explanation: "Rye dough is incredibly sticky. Always use water on your hands/tools, never flour."
      },
      {
        tip: "Acid is Safety",
        explanation: "If in doubt, use MORE sourdough. You can't really over-acidify rye, but you can definitely under-acidify it."
      }
    ],
    what_if: [
      {
        scenario: "The inside is gummy/wet after baking",
        result: " 'Starch Attack' (Not enough acid) or Underbaked",
        correction: "Increase the percentage of pre-fermented flour (sourdough) or bake longer."
      },
      {
        scenario: "The crust separated from the crumb",
        result: "Over-proofed or lack of docking",
        correction: "Proof less and dock the dough deep."
      },
      {
        scenario: "It tasted bland",
        result: "Lack of salt",
        correction: "Rye needs salt (2%+) to balance the sourness."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Wheat Sourdough",
        difference: "Wheat = Gluten/Air/Elasticity. Rye = Pentosans/Gel/Plasticity.",
        why_choose_this: "Choose Rye for longevity and deep nutrition."
      },
      {
        target_style: "Pumpernickel",
        difference: "True Pumpernickel is steamed for 16-24 hours at low temp to caramelize; Vollkornbrot is baked normally.",
        why_choose_this: "Choose Vollkornbrot for a quicker (but still difficult) rye."
      }
    ],
    q_and_a: [
      {
        question: "Is it Gluten Free?",
        answer: "No. Rye contains glutenin/gliadin relatives, but they don't form strong chains. It is NOT safe for Celiacs.",
        context: "Health"
      },
      {
        question: "Why use seeds?",
        answer: "Seeds add texture and mitigate the immense density of the rye crumb.",
        context: "Ingredients"
      },
      {
        question: "Why hot water?",
        answer: "To soak the coarse meal. It speeds up hydration.",
        context: "Technique"
      }
    ],
    fermentation_methods: [
      {
        method: "Sourdough",
        suitability: "Authentic", // Fixed from Mandatory
        notes: "Chemical acidification (vinegar) is possible but cheating."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "High hydration is needed because pentosans absorb 10x their weight in water versus gluten's 2x.",
    methodSuitability: {
      direct: { suitable: false, notes: "Requires acid." },
      biga: { suitable: false, notes: "Use Rye Sour." },
      poolish: { suitable: false, notes: "Use Rye Sour." }
    },
    whatIf: [
      {
        scenario: "You knead it like wheat",
        outcome: "You will break the gum structure and get a sticky soup that never rises.",
        solution: "Mix only until combined."
      }
    ],
    comparisons: [
      {
        vsStyle: "Light vs Dark Rye",
        difference: "Light rye has bran removed and behaves more like wheat; Dark/Whole rye requires the full acid treatment."
      }
    ],
    proTips: [
      "Brush the loaf with water immediately after baking to give it a shine.",
      "Store in a plastic bag or wrapped in linen; it stays fresh for weeks."
    ]
  },

  tags: ["rye", "german", "vollkornbrot", "sourdough", "whole-grain", "dense"],

  watchouts: [
    "Not enough sourdough starter = Starch Attack.",
    "Cutting too early = Gummy mess.",
    "Over-mixing = loss of structure.",
    "Under-baking = wet core."
  ],

  notes: [
    "Requires Rye Sourdough Starter.",
    "No Gluten Development needed.",
    "Wait 24h before slicing.",
    "High Acidity Mandatory.",
    "Excellent keeper."
  ],

  references: [
    {
      source: "The Rye Baker",
      url: "https://theryebaker.com/",
      author: "Stanley Ginsberg",
      year: "2016"
    },
    {
      source: "German Baking Institute",
      url: "https://www.baeckerhandwerk.de/",
      author: "ADB",
      year: "2023"
    }
  ],

  isPro: true,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/vollkornbrot_100_rye_hero.png",
    dough: "/images/styles/vollkornbrot_100_rye_dough.png",
    crumb: "/images/styles/vollkornbrot_100_rye_crumb.png"
  },
  recommendedFlavorComponents: ["caraway_seeds", "sunflower_seeds", "molasses"],

  flavorProfile: {
    primaryFlavors: ["intense sour rye", "earthy malty", "mineral depth", "faint molasses sweetness", "robust whole grain"],
    aromaProfile: ["sour sourdough rye", "damp earth", "toasted grain berries", "caraway (if added)", "dark malt"],
    textureNotes: ["dense brick-like crumb", "moist but not gummy", "zero visible alveoli", "sliced thin — almost translucent", "protective dark outer crust shell"],
    pairingRecommendations: ["Aged Gouda or Tilsit cheese", "Smoked salmon and butter", "Cold cuts and pickles", "Herring with dill", "Smørrebrød toppings"],
    flavorEvolution: ["Day 1 (24h rest required): acidity and moisture fully set — do not slice before 24h", "Day 2-5: peak flavour window — deep, complex, balanced sour", "Week 2: mild drying — excellent for thin croutons", "Keeps up to 2 weeks wrapped in linen"]
  },

  culturalContext: {
    significance: [
      "The bread of Northern European peasants — rye survived harsh winters when wheat could not",
      "German school children's daily lunch bread — associated with strength and endurance",
      "The '24-hour slice rule' is taken seriously — slicing early is considered a mistake",
      "The 'Vollkorn' (whole grain) label carries legal Lebensmittelrecht status in Germany",
      "Symbol of German Gesundheitsbewusstsein (health consciousness) culture"
    ],
    consumptionContext: [
      "Sliced paper-thin for open-faced sandwiches (Smørrebrød style)",
      "Daily breakfast and lunch bread across Northern Germany",
      "Served at German delis and health food stores worldwide",
      "Eaten with strong cheeses, cured meats, or just butter and salt",
      "A component of the traditional 'Abendbrot' (cold evening bread meal)"
    ],
    evolution: [
      "Rye was the dominant grain of Northern Europe since the Middle Ages",
      "Sourdough acidification was discovered empirically — bakers noticed acid prevented the gumminess",
      "20th century industrial baking introduced commercial rye soaks (Quellstücke) for more consistent production",
      "Artisan revival of the 2010s brought Vollkornbrot to international attention via chefs and food writers",
      "Now the subject of scientific interest for gut microbiome benefits of fermented whole grain"
    ],
    rituals: [
      "Docking (poking holes in the top) before baking is mandatory to prevent 'flying crust'",
      "The bread must rest 24-48h before slicing — a discipline that separates patient from impatient bakers",
      "Sliced with a sharp carving knife into very thin slices — thick slices are considered crude",
      "The 'Brotmesser' (bread knife) with its serrated blade is a kitchen essential in German homes"
    ]
  },

  globalPresence: {
    regions: ["Germany (North and Central)", "Scandinavia (similar rye tradition)", "Austria", "German diaspora worldwide", "Health food stores globally"],
    popularity: "staple in Northern Europe; niche but growing global interest",
    exportStatus: "Packaged Vollkornbrot is widely exported; artisan fresh product is local",
    internationalRecognition: "Recognised by health-conscious communities globally for gut health benefits"
  },

  pairings: {
    beverages: ["Dark lager (Schwarzbier)", "Rye Kvass", "Strong black tea", "Cold buttermilk"],
    foods: ["Aged Gouda", "Tilsit or Raclette cheese", "Smoked herring", "Cold cuts (Aufschnitt)", "Butter and pickles", "Cream cheese and cucumber"],
    occasions: ["German Abendbrot (cold evening meal)", "Smørrebrød lunch", "Health-focused breakfast", "Hiking and outdoor provisions (excellent keeping quality)"],
    seasons: ["Year-round; classic autumn and winter bread"]
  },

  experimentSuggestions: [
    { title: "Pumpkin Seed Vollkornbrot", description: "Add 12% pumpkin seeds to the soaker for a richer, nuttier crumb with Austrian influence — pairs wonderfully with pumpkin seed oil." },
    { title: "Caraway and Fennel Vollkornbrot", description: "Add 1% caraway and 0.5% fennel seeds to the dough for a classic 'Landbrot' spiced rye. These are traditional Northern German flavourings." },
    { title: "Extended Soaker Test", description: "Soak the rye chops for 24h instead of 12h — the extra hydration time softens the coarse grain further, creating a moister, denser crumb with deeper fermented notes." },
    { title: "Pumpernickel Comparison", description: "Bake the same dough twice: once normally (Vollkornbrot method) and once in a water bath at 120°C for 16h (Pumpernickel method) to experience the Maillard-driven flavour transformation." },
    { title: "Acid Level Test", description: "Vary the sourdough inoculation (30% vs 50% of rye flour) to see how acidity affects starch stability — the undershoot will show 'Starch Attack' gumminess." }
  ],

  learnLinkTags: ["rye-bread", "vollkornbrot", "sourdough", "pentosan-structure", "northern-european", "whole-grain", "starch-attack", "german-bakery"]
};
