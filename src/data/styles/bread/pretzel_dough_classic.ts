import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * BAVARIAN PRETZEL (Laugenbrezel)
 * 
 * Researched and validated content with authoritative sources:
 * - German Food Guide & Bavarian Bakers Guild (Bäckerinnung)
 * - The Legend of Anton Nepomuk Pfannenbrenner (1839)
 * - 12th Century Monastic Origins (Hortus Deliciarum)
 * - Food Science of Alkaline Hydrolysis (Lye/Maillard)
 */
export const pretzel_dough_classic: DoughStyleDefinition = {
  id: "pretzel_dough_classic",
  name: "Bavarian Laugenbrezel",
  category: "bread",
  recipeStyle: RecipeStyle.PRETZEL,
  family: "Laugengebäck (Lye Breads)",

  origin: {
    country: "Germany",
    region: "Bavaria (Bayern) & Swabia",
    period: "Early Medieval (Symbol) / 19th Century (Lye Method)"
  },

  description: "The Bavarian Laugenbrezel is a German icon defined by its deep mahogany, glossy 'lye crust' (Laugenkruste) and a startlingly white, chewy interior. This contrast is achieved by dipping the raw, cold dough into a highly alkaline Sodium Hydroxide (NaOH) solution before baking, which accelerates the Maillard reaction to create distinctive salty, malty, and mineral flavors.",

  history: "The pretzel shape (crossed arms in prayer, or 'pretiola') dates back to at least the 12th century, depicted in the 'Hortus Deliciarum'. However, the famous lye-dipping technique has a separate origin legend. In 1839, Anton Nepomuk Pfannenbrenner, a baker at the Munich Royal Coffeehouse, allegedly brushed his pretzels with a sodium hydroxide cleaning solution meant for baking sheets instead of sugar water. The result was a stunning chestnut-brown crust that King Ludwig I adored. Scientifically, lye use predates this legend, likely evolving from preservation techniques or early use of wood ash (potash) water.",

  difficulty: "Hard",
  fermentationType: "cold", // Cold retard is essential for skinning

  base_formula: [
    { name: "German Type 550 or Bread Flour", percentage: 100 },
    { name: "Water (Cold)", percentage: 53 },
    { name: "Salt", percentage: 2.0 },
    { name: "Butter (Bavarian) or Lard", percentage: 4.0 },
    { name: "Fresh Yeast", percentage: 2.0 },
    { name: "Diastatic Malt (Optional)", percentage: 0.5 }
  ],

  technicalProfile: {
    hydration: [50, 56],
    salt: [1.8, 2.2],
    oil: [3, 5],
    sugar: [0, 1], // Traditional Bavarian is very low sugar
    flourStrength: "Medium protein (11-12%), German Type 550. Do not use very high gluten flour or it becomes rubbery.",
    ovenTemp: [220, 240],
    recommendedUse: [
      "Biergarten snack (Brotzeit)",
      "Sliced and buttered (Butterbrezel)",
      "Served with Weißwurst and sweet mustard"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 85, min: 80, max: 100 },
    fermentationSteps: [
      "Intensive Mix: Knead stiff dough thoroughly until smooth. [Science: Low hydration requires mechanical energy to develop gluten structure fully]",
      "Short Bulk: Rest only 30-60 mins. [Science: Prevents excessive gas development; tight crumb structure is desired]",
      "Divide & Shape: Roll into 60cm strands with thick belly/thin ends, then twist. [Science: Varying thickness creates different textures in the final bake]",
      "The Skinning (Hautbildung): Proof UNCOVERED in fridge for 1 hour. [Science: Cold dry air creates a 'skin' that prevents lye from soaking into the crumb]",
      "Lye Dip (Lauge): Dip rigid cold pretzels in 4% NaOH solution. [Science: High pH (13-14) sprays surface with hydroxide ions, breaking down proteins]",
      "Bake: 230°C hot oven immediately after salting. [Science: Lye accelerates Maillard reaction, browning instantly at temperatures where dough would normally stay pale]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W240-280 (Medium-Strong)",
      pl_ratio: "0.55-0.70 (Balanced to Tenacious)",
      absorption_capacity: "Low-Medium (50-55%)",
      protein_type: "Wheat (T550)",
      science_explanation: "The dough must be extensible enough to roll into long thin strands but elastic enough to hold the refined knot shape without retracting or sagging."
    },
    thermalProfile: {
      oven_type: "Deck or Convection",
      heat_distribution: "Even dry heat",
      crust_development: "Rapid, intense Maillard browning due to alkaline surface pH > 10",
      crumb_structure: "Dense, fine-pored, cottony white (due to un-oxidized interior)"
    },
    fermentationScience: {
      yeast_activity: "Restrained. We emphasize texture over aeration.",
      ph_target: "Interior pH ~5.5, Surface pH ~10+ (during bake)",
      organic_acids: "Low. Short fermentation keeps flavor profile clean/wheat-focused, contrasting with the metallic lye crust.",
      enzymatic_activity: "Malt is often added to assist browning and yeast activity in the stiff dough."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "The Lye Safety Rule",
        explanation: "ALWAYS add Lye to Water, never Water to Lye. The reaction is exothermic and can boil/splash if added backward. Wear gloves and eye protection."
      },
      {
        tip: "The 'Skin' (Die Haut)",
        explanation: "Never skip the uncovered refrigeration (skinning). If the dough is moist/tacky, the lye soaks *into* the bread, making the crumb yellow and chemically soapy tasting. It should sit *on* the skin."
      },
      {
        tip: "Bavarian vs. Swabian",
        explanation: "Bavarian pretzels have uniform thickness and often crack naturally. Swabian pretzels have a very fat belly, very thin crispy arms, and the belly is deliberately slashed (scored) with a knife."
      },
      {
        tip: "No Aluminum!",
        explanation: "Sodium Hydroxide reacts aggressively with aluminum (producing hydrogen gas). Use only stainless steel or food-grade plastic containers for the dip."
      },
      {
        tip: "The Salt placement",
        explanation: "Only salt the thick part (belly). Salt on the thin arms draws out too much moisture and makes them rock-hard quickly."
      }
    ],
    what_if: [
      {
        scenario: "The pretzel looks pale and dull despite dipping",
        result: "Your lye solution was too weak or old (absorbed CO2 from air)",
        correction: "Use fresh NaOH pellets and ensure a 3-4% concentration. Baking soda (even baked) will never achieve the same deep shine."
      },
      {
        scenario: "The pretzel tastes soapy or chemical",
        result: "The lye soaked into the crumb",
        correction: "Ensure the pretzels are COLD and have a DRY SKIN before dipping. Do not soak—just a quick 5-second dip."
      },
      {
        scenario: "The arms are burnt before the belly is done",
        result: "Arms were rolled too thin relative to the belly",
        correction: "Aim for more uniform graduation, or increase oven temp to bake faster so arms don't dry out."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Bagel",
        difference: "Bagels are boiled in water (gelatinization) then baked. Pretzels are dipped in cold lye (chemical modification) then baked.",
        why_choose_this: "Choose Pretzel for that specific metallic/mineral tang and crisp skin."
      },
      {
        target_style: "Lye Roll (Laugenbrötchen)",
        difference: "Same dough and dip, but bun shape. The pretzel knot offers three distinct textures (thick soft belly, medium joints, thin crispy crossover) in one bite.",
        why_choose_this: "Choose Pretzel for the textural journey."
      },
      {
        target_style: "American Mall Pretzel",
        difference: "American soft pretzels are often dipped in butter *after* baking and are sweet/soft. Bavarian ones use butter *in* the dough or sliced after, and are savory/chewy.",
        why_choose_this: "Choose Bavarian for authentic chew and savory flavor depth."
      }
    ],
    q_and_a: [
      {
        question: "Is lye dangerous to eat?",
        answer: "No. While raw lye is caustic, the high heat of baking reacts the sodium hydroxide with carbon dioxide in the oven air, converting it into harmless food-grade sodium carbonate and giving the specific flavor. There is no active lye left on the finished product.",
        context: "Safety"
      },
      {
        question: "Can I use Baking Soda instead?",
        answer: "You can use 'Baked Baking Soda' (Sodium Carbonate) for a safer alternative. It's better than raw baking soda but won't achieve the deep mahogany color or glossy shine of real Lye (Sodium Hydroxide).",
        context: "Home Baking substitutions"
      },
      {
        question: "Why do we cut (score) the belly?",
        answer: "In the Swabian tradition, the slash allows controlled expansion of the thick belly. In Bavaria, they typically rely on the natural 'burst' of the skin or leave it smooth.",
        context: "Technique"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Standard German bakery practice. Often using a stiff pre-dough (Vorteig) for better flavor."
      },
      {
        method: "Hybrid",
        suitability: "Ideal",
        notes: "Using 'old dough' (Pâte Fermentée) adds fermentation flavor complexity to balance the strong lye crust."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Pretzel dough is stiff (50-55%) for two reasons: 1) It must hold the intricate knot shape without sagging. 2) A tight crumb is desirable to contrast with the thin, glass-like crust. High hydration would result in a flat, bubbly pretzel that absorbs too much lye.",
    methodSuitability: {
      direct: { suitable: true, notes: "Classic method." },
      biga: { suitable: true, notes: "Excellent for adding strength and flavor." },
      poolish: { suitable: false, notes: "Usually too extensible/soft for pretzel shaping." }
    },
    whatIf: [
      {
        scenario: "You skip the fridge proof",
        outcome: "The dough remains tacky. Lye penetrates. Result: Soapy flavor, matte finish.",
        solution: "Mandatory uncovered refrigeration to form a pellicle (skin)."
      },
      {
        scenario: "You use warm lye solution",
        outcome: "The heat prematurely gelatinizes the surface and makes the dough sticky/slimy.",
        solution: "Always use room temperature or cold lye solution."
      }
    ],
    comparisons: [
      {
        vsStyle: "Swabian Pretzel",
        difference: "Higher fat (lard/butter), distinct thin arms, slashed belly."
      }
    ],
    proTips: [
      "Store lye pellets in an airtight container; they absorb moisture from air and turn into a useless puddle.",
      "Use a 'starting' hydration of 50%, hold back water. You want it stiff.",
      "Traditional 'Brezelsalz' (Pretzel Salt) is coarse, compressed salt that doesn't melt quickly."
    ]
  },

  tags: ["german", "bavarian", "lye", "snack", "beer_food"],

  watchouts: [
    "Lye splashes cause chemical burns - Safety Gear Mandatory!",
    "Humidity destroys the 'skin' needed for dipping",
    "Over-proofing loses the distinct knot shape",
    "Aluminum contact produces black stains and hydrogen gas"
  ],

  notes: [
    "Lye concentration typically 3-4%",
    "Dip duration: 5-10 seconds",
    "Baking time is short and hot (12-15 mins @ 230C)"
  ],

  recommendedFlavorComponents: ["coarse_sea_salt", "butter_churned", "mustard_sweet_bavarian"],

  references: [
    {
      source: "German Food Guide - Brezel Stats",
      url: "http://www.germanfoodguide.com/brezel.cfm"
    },
    {
      source: "King Arthur Baking - Lye Safety",
      url: "https://www.kingarthurbaking.com/blog/2021/01/26/lye-pretzels"
    },
    {
      source: "Atlas Obscura - History of the Pretzel",
      url: "https://www.atlasobscura.com/articles/history-of-pretzels"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/pretzel_dough_classic_hero.png",
    dough: "/images/styles/pretzel_dough_classic_dough.png",
    crumb: "/images/styles/pretzel_dough_classic_crumb.png"
  },

  flavorProfile: {
    primaryFlavors: ["salty", "malty", "mineral from lye", "buttery wheat", "faintly bitter"],
    aromaProfile: ["roasted malt", "alkaline mineral", "warm bread", "coarse salt", "subtle butter"],
    textureNotes: ["glass-thin mahogany crust", "cotton-cottony white interior", "chewy belly", "crispy thin arm ends", "three distinct textures in one bite"],
    pairingRecommendations: ["Obatzda (Bavarian cream cheese spread)", "Weißwurst and süßer Senf (sweet mustard)", "Bavarian Weißbier", "Radler (beer-lemonade)", "Sharp aged Emmental"],
    flavorEvolution: ["Fresh: peak minerality and crunch — eat within hours", "4 hours later: crust softens significantly", "Day-old: best reheated 3 min at 200°C to revive the crust", "Never refrigerate — makes crust leathery"]
  },

  culturalContext: {
    significance: [
      "The Bavarian pretzel (Brezel) is a symbol of Bavaria and Germany recognized worldwide",
      "Historically monks and bakers used it as a 'seal of authenticity' — the knot symbolized prayer",
      "Central icon of the Biergarten and Oktoberfest experience",
      "Legend of Anton Pfannenbrenner (1839) makes it part of Munich Royal Court history",
      "Protected by informal tradition — Bavarian bakers take lye-dipping as a point of professional honour"
    ],
    consumptionContext: [
      "Brotzeit (bread-time snack) in Bavarian beer gardens",
      "Sliced open and spread with butter (Butterbrezel)",
      "Served with Weißwurst on Sunday mornings",
      "Handheld snack at Oktoberfest and Christmas markets",
      "Airport and train station kiosks across Germany"
    ],
    evolution: [
      "Pretzels date to at least the 12th century in medieval illuminated manuscripts",
      "Lye-dipping technique emerged around the 19th century in Bavaria and Swabia",
      "The Bavarian (uniform) vs Swabian (fat belly + thin arms + scored) regional split developed over centuries",
      "Industrialisation spread pretzel culture globally via German immigrant communities in the USA",
      "Artisan revival now focuses on butter-enriched traditional dough and proper NaOH lye"
    ],
    rituals: [
      "Always pulled apart by hand — never cut",
      "The thick 'belly' is the prestige bite — given to the guest of honour",
      "Served cross-wise on a wooden board at Biergarten tables as a communal snack",
      "The lye-dipping is never visible to guests — it's a backstage bakers' ritual",
      "Brezelsalz (coarse compressed salt) applied only to the belly is a non-negotiable detail"
    ]
  },

  globalPresence: {
    regions: ["Bavaria and Swabia (origin)", "All of Germany and Austria", "German diaspora in USA (Pennsylvania, Wisconsin, Texas)", "Global beer bar snack"],
    popularity: "iconic global recognition",
    exportStatus: "Widely exported as packaged pretzels; artisan Laugenbrezel remain a local product",
    internationalRecognition: "The pretzel shape itself is one of the most recognized food symbols globally"
  },

  pairings: {
    beverages: ["Bavarian Weißbier (Hefeweizen)", "Dunkel Lager", "Radler", "Apfelschorle (apple spritzer)"],
    foods: ["Obatzda", "Weißwurst + sweet mustard", "Aged Emmental or Bergkäse", "Bavarian Leberkäse", "Cold cuts and pickles (Brotzeit plate)"],
    occasions: ["Oktoberfest", "Biergarten", "Sunday Brotzeit", "Christmas markets", "Beer hall snack"],
    seasons: ["Year-round — peak at Oktoberfest (September/October)"]
  },

  experimentSuggestions: [
    { title: "Baked Baking Soda Alternative", description: "For home bakers: bake baking soda at 120°C for 1 hour to make sodium carbonate (weaker but safer lye). Dip pretzels in 6% sodium carbonate solution and compare the browning and flavour." },
    { title: "Pâte Fermentée Pretzel", description: "Add 10-15% old dough to the mix for rich, complex wheat flavour that balances the alkaline mineral crust notes." },
    { title: "Swabian Style", description: "Roll the arms paper-thin and score the belly deeply before dipping — creates the dramatic 'exploded belly' look of Swabian Brezeln." },
    { title: "Butterbrezel Variant", description: "After baking, slice open and brush the inside with softened Bavarian butter. An Austrian bakery classic." },
    { title: "Seeded Laugenbrezel", description: "Before dipping in lye, brush with water and press poppy or caraway seeds into the dough surface — they survive the lye bath and baking beautifully." }
  ],

  learnLinkTags: ["lye-bread", "bavarian", "laugengebäck", "alkaline-baking", "maillard-reaction", "biergarten", "german-bakery", "pretzel"]
};
