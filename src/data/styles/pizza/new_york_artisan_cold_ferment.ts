import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * NEW YORK ARTISAN COLD FERMENT
 * 
 * Researched and validated content:
 * - Origin: Brooklyn/Manhattan (Early 2000s - Lucali, Roberta's, Joe Beddia)
 * - Technique: Sourdough (Levain) hybrid, 48-72h Cold Fermentation, No Sugar/No Oil
 * - Ingredients: Heirloom/Organic High-protein Flour, Natural Sourdough Starter
 * - Characteristics: Intense char (leopard spotting), complex sourdough tang, rigid structure
 */
export const new_york_artisan_cold_ferment: DoughStyleDefinition = {
  id: "new_york_artisan_cold_ferment",
  name: "NY Artisan (Cold Ferment)",
  category: "pizza",
  recipeStyle: RecipeStyle.NEW_YORK,
  family: "New York Modern Artisan",

  origin: {
    country: "USA",
    region: "New York (Brooklyn / Lower East Side)",
    period: "2006 (Opening of Lucali) – Present"
  },

  description: "New York Artisan is the sophisticated, chef-driven evolution of the classic NY Slice. While the classic slice is built for speed and commercial efficiency, the Artisan style focuses on the 'Art of the Dough'. It utilizes natural leavening (Sourdough), extremely long cold maturation (up to 72-96 hours), and high-heat baking (315-350°C) to achieve a crust that is more complex, more charred, and more digestible than its commercial predecessor.",

  history: "The 'Artisan' movement in NY pizza was sparked by Mark Iacono (Lucali) in 2006 and further propelled by spots like Roberta’s in Bushwick. These pizzerias abandoned the 'gas-deck' standardized templates in favor of wood-fired or high-performance deck ovens and sourdough starters. This 'New York Renaissance' brought back the attention to flour quality and fermentation science, attracting a cult following that values the 'imperfect' char and artisanal irregularities over the uniform commercial slice.",

  difficulty: "Hard",
  fermentationType: "sourdough",

  base_formula: [
    { name: "Organic High-Protein Bread Flour (W320+)", percentage: 100 },
    { name: "Water (Filtered)", percentage: 68 },
    { name: "Sea Salt", percentage: 2.8 },
    { name: "Active Sourdough Starter (Liquid Levain)", percentage: 10 },
    { name: "Instant Yeast (Optional hybrid)", percentage: 0.1 }
  ],

  technicalProfile: {
    hydration: [65, 72], // Higher than commercial NY to produce more steam/air
    salt: [2.5, 3.0],
    oil: [0, 2], // Often omitted to prevent a 'greasy' feel and allow better char
    sugar: [0, 0], // Omitted; browning is achieved through long enzymatic maturation
    flourStrength: "Very Strong (W320-350). Must withstand 3+ days of acidity and enzymatic breakdown",
    ovenTemp: [315, 350], // Higher than standard slice shops
    recommendedUse: [
      "High-end Artisanal Pizzeria",
      "Sourdough-based menu",
      "Whole-pie service only (traditionally)"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 350, min: 320, max: 400 }, // Larger balls for a 35-40cm artisan pie
    fermentationSteps: [
      "Mixing: Combine flour, water, and Levain. Let autolyse for 45 mins. [Science: Sourdough acids begin breaking down proteins, increasing extensibility]",
      "Incorporating Salt: Add salt and mix until a strong, smooth windowpane is achieved. [Science: High protein flour requires intense mechanical work to align gluten strands]",
      "Bulk Rise: 4 hours at room temperature with 4 sets of folds. [Science: Builds structural 'muscle' to hold the heavy artisan toppings]",
      "Cold Maturation: 48 to 96 hours at 3-4°C. [Science: The 'sweet spot' for flavor. Protease enzymes break down gluten into amino acids, creating the savory umami depth characteristic of artisan NY dough]",
      "Balling: Shape into tight balls. [Science: Re-establishes the 'skin' tension for the final rise]",
      "Final Proof: 5-6 hours at room temperature. [Science: Vital for the sourdough to reach peak CO2 production after being cold]",
      "Baking: Bake on a high-conductivity stone or steel. [Science: High heat + long maturation = intense Maillard reaction and charred 'dots' even without sugar]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W320-350 (Strong)",
      pl_ratio: "0.55-0.65",
      absorption_capacity: "High (65-70%)",
      protein_type: "Strong wheat with high glutenin-to-gliadin ratio for maximum 'spring'",
      science_explanation: "The dough must maintain elasticity over a 4-day period. High-quality organic flours are preferred to support the microbial life of the sourdough starter."
    },
    thermalProfile: {
      oven_type: "Wood-fired or High-temp Electric Deck",
      heat_distribution: "Aggressive bottom conduction and top radiation",
      crust_development: "Thin, rigid, and intensely charred; 'Leopard spotting' is desirable",
      crumb_structure: "Highly irregular, large air pockets (alveoli) near the cornicione"
    },
    fermentationScience: {
      yeast_activity: "Low (Natural yeast from starter); slow but persistent",
      ph_target: "pH 4.8 - 5.2 (Highly acidic compared to commercial)",
      organic_acids: "Lactic and Acetic acids provide the complex tang and improve shelf life",
      enzymatic_activity: "Peak activity. Amylase provides the fermentable sugars that create the dark, blistered crust without needing added sugar."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "The Wine Bottle Technique",
        explanation: "Inspired by Mark Iacono (Lucali). Using a wine bottle instead of a standard pin or hands allows for a unique, ultra-thin stretch that maintains its rigid structure."
      },
      {
        tip: "Use a Liquid Levain",
        explanation: "A high-hydration starter (100% hydration) incorporates more easily into the wet dough and promotes lactic acid, which keeps the flavors sweet rather than overly sour."
      },
      {
        tip: "The 72-Hour sweet spot",
        explanation: "Most artisans agree that 72 hours is the peak. Before that, the flavor is thin; after that, the gluten may begin to collapse due to acidity."
      },
      {
        tip: "Hand-crushed tomatoes",
        explanation: "Artisan NY pizza always uses hand-crushed San Marzano or high-quality California tomatoes (like 7/11 or Alta Cucina) to maintain texture."
      },
      {
        tip: "Post-bake Basil",
        explanation: "Never bake the basil at these high temperatures. Place fresh leaves on the pie immediately after it leaves the oven; the residual heat will release the oils without burning the leaves."
      }
    ],
    what_if: [
      {
        scenario: "The dough is too sour",
        result: "Starter was too old or room-temp fermentation was too long",
        correction: "Use a 'young' starter (fed 4 hours before use) and shorten the bulk rise time."
      },
      {
        scenario: "Dough collapses during stretching",
        result: "Over-matured or acidity was too high",
        correction: "Reduce the cold retard to 48 hours or use a stronger flour with more buffering capacity."
      },
      {
        scenario: "No 'leopard spots' (char)",
        result: "Oven floor was too cold or dough didn't have enough simple sugars",
        correction: "Increase preheat time of the stone and ensure at least 48h maturation for enzymatic activity."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Classic NY Slice Shop",
        difference: "Artisan uses Sourdough and long cold rest; Slice Shop uses Commercial Yeast and often added sugar/oil for high-volume efficiency.",
        why_choose_this: "Choose Artisan for a gourmet dinner experience and a more complex, charred crust."
      },
      {
        target_style: "Neapolitan Contemporary",
        difference: "Artisan NY is crispier and more rigid; Neapolitan is softer and more elastic. Both use high hydration and long rests.",
        why_choose_this: "Choose Artisan NY for the 'crunch' and foldable rigidity."
      },
      {
        target_style: "New Haven Apizza",
        difference: "Both are charred and artisanal, but New Haven uses coal-fire and has an oblong, even thinner crust with distinct local toppings (Clams).",
        why_choose_this: "Choose Artisan NY for the classic round shape and balanced sourdough profile."
      }
    ],
    q_and_a: [
      {
        question: "Why no sugar?",
        answer: "Artisans rely on the natural sugars released by enzymes over 3 days. This creates a more 'complex' brown rather than a 'sweet' brown.",
        context: "Baking"
      },
      {
        question: "Is it always sourdough?",
        answer: "Not always, but 'Natural Leavening' is the hallmark of the top 10% of artisan shops in Brooklyn.",
        context: "Tradition"
      },
      {
        question: "Why whole pies only?",
        answer: "Reheating a sourdough artisan pie can make it too tough/hard. These pizzas are meant to be eaten fresh from the oven to appreciate the airy cornicione.",
        context: "Service"
      },
      {
        question: "Can I use tap water?",
        answer: "Chlorine in tap water can inhibit the natural cultures in your sourdough starter. Use filtered water for the best results.",
        context: "Ingredients"
      }
    ],
    fermentation_methods: [
      {
        method: "Sourdough",
        suitability: "Authentic",
        notes: "The defining technique for the 'Artisan' label in NY."
      },
      {
        method: "Hybrid",
        suitability: "Ideal",
        notes: "Using a tiny amount of yeast (0.1%) with the starter ensures a consistent rise while keeping the sourdough flavor."
      },
      {
        method: "Poolish",
        suitability: "Possible",
        notes: "A great yeast-based alternative if you don't maintain a sourdough starter."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "High hydration (68-70%) prevents the dough from drying out during the long fridge rest and allows for the 'explosive' air pockets (alveoli) in the edge when it hits a 350°C stone.",
    methodSuitability: {
      direct: { suitable: false, notes: "Impossible to achieve the artisan flavor depth in one day." },
      biga: { suitable: true, notes: "Recommended for adding even more crunch and structural strength." },
      poolish: { suitable: true, notes: "Excellent for the extensibility needed for a large 16-inch pizza." }
    },
    whatIf: [
      {
        scenario: "You use a wine bottle to roll",
        outcome: "You will achieve a very thin, consistent center while pushing the air to the very edge for a crisp Canotto-NY hybrid.",
        solution: "Be gentle; don't roll over the very edge."
      }
    ],
    comparisons: [
      {
        vsStyle: "Lucali vs Roberta's",
        difference: "Lucali is more focus on traditional thinness and rigid crunch; Roberta's is slightly more Neapolitan-influenced with a puffier, wetter edge."
      }
    ],
    proTips: [
      "A 24h 'bulk' in the fridge followed by 24h 'balled' in the fridge gives the best handling.",
      "Add a pinch of rye flour (2%) to your mix for a deeper, more rustic color and flavor.",
      "Use a blend of Fresh Mozzarella (drained) and Grana Padano for the perfect 'artisan' melt.",
      "The best way to reheat this is in a dry pan with a lid—keeps the bottom crispy and melts the cheese without drying the dough.",
      "Rub a clove of fresh garlic on the crust right after baking for an incredible aroma."
    ]
  },

  tags: ["artisan", "new york", "brooklyn", "sourdough", "cold ferment", "premium"],

  watchouts: [
    "Dough too acidic? It will smell like alcohol and tear like paper.",
    "Over-stretching? The center will be so thin it will 'soup' under the sauce.",
    "Under-preheated stone? The pizza will be 'gummy' on the bottom.",
    "Toppings too many? Artisan pizzas are balanced; don't hide the dough."
  ],

  notes: [
    "Peak of the Modern NY Pizza movement.",
    "Sourdough based fermentation.",
    "48-96h Cold Maturation standard.",
    "High protein organic flours.",
    "Whole pie, high-end service focus."
  ],

  references: [
    {
      source: "Modernist Pizza (Vol 2 - NY Artisan section)",
      url: "https://modernistcuisine.com/books/modernist-pizza/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2021"
    },
    {
      source: "Mastering Pizza",
      url: "https://www.amazon.com/Mastering-Pizza-Practice-Neapolitan-Artisanal/dp/0399579226",
      author: "Marc Vetri",
      year: "2018"
    },
    {
      source: "Munchies - The Pizza Show (Lucali Episode)",
      url: "https://www.youtube.com/watch?v=M-vCfc3M7eY",
      author: "Frank Pinello",
      year: "2016"
    }
  ],

  isPro: true,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/ny-artisan-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["mozzarella_low_moisture", "tomato_sauce", "basil_fresh", "parmigiano_reggiano", "garlic_oregano"]
};
