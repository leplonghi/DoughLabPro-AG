import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * YEASTED DONUTS (RING & FILLED)
 * 
 * Researched and validated content:
 * - Origin: Netherlands (Olykoeks) / USA (Modern evolution, 1847 Hanson Gregory)
 * - Technique: High-enrichment soft dough, precision proofing, deep-frying (175-180°C)
 * - Ingredients: Bread/AP Flour blend, Milk, Butter, Egg, Nutmeg, Vanilla
 * - Characteristics: Light, airy, 'white ring' around the center, pillowy soft crumb
 */
export const yeasted_donuts: DoughStyleDefinition = {
  id: "yeasted_donuts",
  name: "Yeasted Donuts",
  category: "pastry",
  recipeStyle: RecipeStyle.DONUT,
  family: "Fried Enriched Doughs",

  origin: {
    country: "USA / Netherlands",
    region: "North America / Northern Europe",
    period: "17th Century (Dutch roots) / Mid-19th Century (Modern shape)"
  },

  description: "The Yeasted Donut is the king of fried pastries. Unlike cake donuts, yeasted donuts rely on biological leavening (yeast) to create a remarkably light, airy, and bread-like structure. When fried, the dough expands rapidly, creating a crisp golden exterior and a soft, 'melting' interior. A properly made and proofed yeasted donut will always feature a prominent 'white ring' where the donut floated highest in the oil.",

  history: "Donuts trace back to Dutch 'Olykoeks' (oily cakes) brought to New Amsterdam (now New York) in the 17th century. These were simple balls of fried dough. In 1847, American sailor Hanson Gregory claimed to have invented the ring-shaped donut by punching a hole in the center of the dough with a tin pepper box to ensure the raw middle cooked as fast as the edges. During WWI, 'Donut Lassies' served fried donuts to soldiers, cementing the pastry as an American cultural icon. The introduction of the automated donut machine in 1920 by Adolph Levitt made them a ubiquitous global snack.",

  difficulty: "Medium",
  fermentationType: "direct",

  base_formula: [
    { name: "Strong All-Purpose Flour", percentage: 100 },
    { name: "Whole Milk (warm)", percentage: 50 },
    { name: "Sugar", percentage: 12 },
    { name: "Unsalted Butter (melted/softened)", percentage: 15 },
    { name: "Whole Eggs", percentage: 12 },
    { name: "Instant Yeast", percentage: 2 },
    { name: "Salt", percentage: 1.5 },
    { name: "Nutmeg", percentage: 0.2 }
  ],

  technicalProfile: {
    hydration: [60, 65], // High liquid content from milk and eggs
    salt: [1.2, 1.8],
    oil: [10, 20], // Dough fat
    sugar: [10, 15],
    flourStrength: "Medium-strong Bread or All-purpose blend (W240-280) for a soft but structured bite",
    ovenTemp: [175, 185], // Frying temperature
    recommendedUse: [
      "Artisanal donut shop product",
      "Celebration dessert",
      "Filled 'Long johns' or 'Bismarcks'"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 55, min: 45, max: 80 },
    fermentationSteps: [
      "Mixing: Combine all ingredients and mix until the dough is smooth but not overly elastic. [Science: Over-developing the gluten can make the donut tough instead of pillowy]",
      "Bulk Proof: 1 to 1.5 hours at 26°C until doubled. [Science: Allows the yeast to populate the dough and create the initial air cells]",
      "Chilling (Optional): Chill for 1 hour to make cutting easier. [Science: Firm fat prevents the dough from stretching or deforming during cutting]",
      "Cutting/Shaping: Roll to 1.5cm thickness and cut using a donut cutter. [Science: Re-rolling scraps is possible once, but the structure will be slightly tougher]",
      "Final Proof: 30-45 minutes in a warm, humid, draft-free area. [Science: MUST proof to 100% volume. If under-proofed, the donut will be dense and absorb too much oil; if over-proofed, it will collapse]",
      "Frying: Fry in neutral oil at exactly 175-180°C. Fry for 60-90 seconds per side. [Science: High heat causes internal moisture to turn to steam, creating the 'oven spring' of the fryer]",
      "Glazing: Allow to drain for 30 seconds, then dip into glaze while still warm (approx 50°C). [Science: The warmth allows the glaze to flow thinly and set into a crackly shell]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W240-280 (Medium Strength)",
      pl_ratio: "0.45-0.55 (Extensible)",
      absorption_capacity: "Moderate (55-62%)",
      protein_type: "Soft bread wheat blend",
      science_explanation: "The flour must have enough strength to hold the oversized air bubbles created during frying, but low enough protein/tenacity to ensure the soft 'short' bite characteristic of a donut."
    },
    thermalProfile: {
      oven_type: "Deep Fryer (convection of hot oil)",
      heat_distribution: "Instantaneous and uniform conduction from the oil",
      crust_development: "Thin, pale-gold, non-crunchy; the fat inhibits a hard crust",
      crumb_structure: "Highly aerated, 'cotton-candy' like, with a very fine and regular cell structure"
    },
    fermentationScience: {
      yeast_activity: "Fast; the high temperature and moisture of the proofing stage promote rapid CO2 production",
      ph_target: "pH 5.5 - 5.8",
      organic_acids: "Very low; flavor is primarily from the enrichment (milk/butter) and the lipid-oxidation products of frying",
      enzymatic_activity: "Beta-amylase activity provides the maltose needed for the quick golden browning in the fryer"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Watch the 'White Ring'",
        explanation: "The white ring around the center of the donut is the mark of a pro. It indicates the donut was proofed perfectly, making it light enough to float high in the oil."
      },
      {
        tip: "Temp is everything",
        explanation: "If the oil is too cold (below 170°C), the donut will act like a sponge and absorb oil. If too hot (above 190°C), the outside will burn while the inside stays raw."
      },
      {
        tip: "The Nutmeg Secret",
        explanation: "A tiny pinch of nutmeg in the dough is the 'nostalgic' flavor of an old-fashioned donut. It cuts through the richness of the fat."
      },
      {
        tip: "Don't over-handle",
        explanation: "Once the donuts are proofed, they are extremely fragile. Use individual squares of parchment paper (the 'parchment sling') to drop them into the oil without touching the dough."
      },
      {
        tip: "Strain your oil",
        explanation: "Burnt flour bits in the oil will stick to your donuts and make them taste bitter. Strain the oil every few batches."
      }
    ],
    what_if: [
      {
        scenario: "The donuts are 'greasy' and heavy",
        result: "Under-proofed or oil was too cold",
        correction: "Let the next batch proof longer until they feel like air-filled balloons. Check oil temp with a digital thermometer."
      },
      {
        scenario: "The donut collapses when you touch it",
        result: "Over-proofed",
        correction: "Yeast has exhausted the sugar or weakened the gluten. Re-roll (if early) or reduce proofing time for the next tray."
      },
      {
        scenario: "Large bubbles/blisters on the surface",
        result: "Dough was too wet or proofed in too much humidity",
        correction: "Lower the humidity of your proofing chamber. Pop large surface bubbles before they hit the oil."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Cake Donuts",
        difference: "Cake donuts use chemical leavening (baking powder) and are more like fried muffins; yeasted donuts are lighter and bread-like.",
        why_choose_this: "Choose Yeasted for the classic 'Krispy Kreme' experience and superior lightness."
      },
      {
        target_style: "Beignets",
        difference: "Beignets are typically square, contain no hole, are often served with massive amounts of powdered sugar, and use a slightly wetter dough.",
        why_choose_this: "Choose Donuts for a more structured, glazed, or filled experience."
      },
      {
        target_style: "Churros",
        difference: "Churros are a pate-a-choux based fried dough (unleavened/steam leavened) and are much crispier/denser.",
        why_choose_this: "Choose Donuts for a soft, pillowy mouthfeel."
      }
    ],
    q_and_a: [
      {
        question: "Why the hole?",
        answer: "Historically, it ensures the center of the donut cooks as fast as the outside, preventing a raw middle.",
        context: "History"
      },
      {
        question: "What oil is best?",
        answer: "A neutral oil with a high smoke point (Canola, Sunflower, or Rice Bran). Shortening is traditionally used for a 'cleaner' bite and faster setting of the glaze.",
        context: "Technique"
      },
      {
        question: "Can I bake these?",
        answer: "You can, but they will be 'bun-like' rather than donuts. The unique texture of a donut comes from the rapid heat transfer of deep-frying.",
        context: "Methods"
      },
      {
        question: "How long do they last?",
        answer: "Yeasted donuts are best eaten within 6-12 hours. The high surface-to-volume ratio means they go stale faster than a loaf of bread.",
        context: "Storage"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Standard commercial and artisanal method."
      },
      {
        method: "Sourdough",
        suitability: "Possible",
        notes: "Known as 'Sourdough Donuts'. Adds a complex tang and improves shelf life significantly."
      },
      {
        method: "Poolish",
        suitability: "Ideal",
        notes: "Using a 20% poolish improves the extensibility of the dough, leading to a better 'shred' and lighter donut."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Donut hydration is balanced (60%) to be high enough for airiness but low enough for the dough to stay together in the fryer without absorbing too much fat. The eggs and butter provide 'liquid' that doesn't just evaporate, keeping the crumb moist.",
    methodSuitability: {
      direct: { suitable: true, notes: "The most common and reliable method." },
      biga: { suitable: false, notes: "Adds too much chew/tension; not desirable for a soft donut." },
      poolish: { suitable: true, notes: "Great for making the dough easier to roll and cut." }
    },
    whatIf: [
      {
        scenario: "You use Potato Flour (5%)",
        outcome: "The donuts will be even softer and stay fresh for 24 hours longer due to the potato's water-holding capacity.",
        solution: "Replace 5% of the wheat flour with potato flour or starch."
      }
    ],
    comparisons: [
      {
        vsStyle: "Southern vs NYC Donut",
        difference: "Southern donuts (Krispy Kreme style) are often lighter and more heavily glazed; NYC donuts (Dunkin style) are typically slightly denser and more 'bready'."
      }
    ],
    proTips: [
      "Glaze the donuts while they are still warm to get that 'thin-glass' crackle.",
      "Check your yeast vitality! If the dough doesn't double in 90 mins, the donuts will be heavy.",
      "A pinch of salt in the glaze makes the sweetness less cloying.",
      "The best filling is a high-fruit jam or a Madagascar vanilla bean pastry cream.",
      "Always use a wide, shallow pot for frying to make flipping easy with a wooden dowel."
    ]
  },

  tags: ["american", "donut", "pastry", "fried dough", "breakfast", "sweet"],

  watchouts: [
    "Under-proofing is the #1 enemy of a light donut.",
    "Oil temp fluctuations lead to inconsistent batches.",
    "Over-handling after proofing ruins the shape.",
    "Crowding the fryer drops the oil temp too fast."
  ],

  notes: [
    "Peak of American fried pastry.",
    "Enriched dough (Milk/Eggs/Butter).",
    "Frying is the critical cook method.",
    "Nutmeg is the secret aromatic.",
    "Short shelf life (best fresh)."
  ],

  references: [
    {
      source: "Modernist Bread (Fried Doughs section)",
      url: "https://modernistcuisine.com/books/modernist-bread/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2017"
    },
    {
      source: "AIB International - Donut Technology",
      url: "https://www.aibinternational.com/",
      author: "American Institute of Baking",
      year: "2022"
    },
    {
      source: "The Donut: History, Recipes, and Lore",
      url: "https://www.amazon.com/Donut-History-Recipes-Lore-Lamas/dp/1556523992",
      author: "John T. Edge",
      year: "2006"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/donut-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["vanilla_madagascar", "dark_chocolate_70", "strawberry_jam", "vanilla_glaze", "nutmeg", "salted_butter_normandy"]
};
