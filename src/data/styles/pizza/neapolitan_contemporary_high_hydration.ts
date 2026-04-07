import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * NEAPOLITAN CONTEMPORARY (PIZZA A CANOTTO / GOURMET)
 * 
 * Researched and validated content:
 * - Origin: Caserta/Naples, Italy (Early 2010s evolution - Franco Pepe, Martucci)
 * - Technique: High Hydration (70%+) / Extreme Alveolatura / Puffy Cornicione (Canotto)
 * - Ingredients: High Strength Flour (W300+), Preferments (Bigas/Poolish)
 * - Characteristics: Light as air, huge 'dinghy' edge, gourmet toppings added post-bake
 */
export const neapolitan_contemporary_high_hydration: DoughStyleDefinition = {
  id: "neapolitan_contemporary_high_hydration",
  name: "Neapolitan Contemporary (Canotto)",
  category: "pizza",
  recipeStyle: RecipeStyle.NEAPOLITAN,
  family: "Neapolitan Evolution",

  origin: {
    country: "Italy",
    region: "Caserta and Naples",
    period: "2012–Present (The 'New Wave' of Pizza)"
  },

  description: "Neapolitan Contemporary is a modern, high-tech evolution of the traditional Neapolitan style. It is most famous for its 'Canotto' (dinghy) cornicione—an oversized, extremely light and airy edge filled with massive air pockets. Unlike the traditional AVPN style, Contemporary pizza uses high-protein flours and high-hydration doughs (70-80%), often involving complex preferments like Biga or Poolish, to achieve a result that is visually dramatic and incredibly digestible.",

  history: "The style emerged as a 'rebellion' against the rigid rules of the AVPN (Associazione Verace Pizza Napoletana). Figures like Franco Pepe and Francesco Martucci began experimenting with different flour blends and hydration levels that were previously forbidden. By 2015, the 'Pizza a Canotto' trend took over social media (Instagram), making the puffy, honeycombed edge a global sensation. Today, it represents the 'Gourmet' side of Neapolitan pizza, focusing on technical precision and high-quality cold-cuts or slow-cooked toppings added after the pizza leaves the oven.",

  difficulty: "Hard",
  fermentationType: "indirect",

  base_formula: [
    { name: "Strong Italian Flour (Type 0, W320-350)", percentage: 100 },
    { name: "Water", percentage: 75 },
    { name: "Sea Salt", percentage: 2.8 },
    { name: "Active Dry Yeast (for Biga)", percentage: 0.1 },
    { name: "Malt (Optional)", percentage: 0.5 }
  ],

  technicalProfile: {
    hydration: [70, 80], // High hydration is the engine of the 'Canotto'
    salt: [2.5, 3.0],
    oil: [0, 0], // Traditionally no oil, as high heat (450°C) would burn it
    sugar: [0, 0],
    flourStrength: "High strength (W320-400). Necessary to hold the high water and extreme gas expansion",
    ovenTemp: [430, 480], // Flash bake in 60-90 seconds
    recommendedUse: [
      "High-end Gourmet Pizzeria",
      "Instagram-worthy plating",
      "Modern technical baking"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 280, min: 260, max: 320 }, // Larger balls for the massive edge
    fermentationSteps: [
      "Biga (100%): Combine 100% of the flour with 45-50% water and a tiny amount of yeast. Let ferment at 18°C for 18-24 hours. [Science: The Biga creates an incredible aromatic profile and provides a 'sturdier' protein structure that can expand without tearing]",
      "Refining (Closing): Mix the Biga with the remaining water (cold), salt, and malt. Mix until a very smooth, glossy dough forms. [Science: The high hydration requires careful, slow water incorporation to ensure the gluten fully encapsulates the liquid]",
      "Bulk Rise: 1 hour at room temperature. [Science: Allows the yeast to start generating CO2 after the shock of the second mix]",
      "Balling: Shape into 280g balls with high surface tension. [Science: High tension is critical; without it, the gas won't push the edge into a 'Canotto' shape in the oven]",
      "Cold Retard: 24 to 48 hours at 4°C. [Science: Further matures the dough, breaking down proteins for extreme digestibility]",
      "Stretching: Use the 'Neapolitan Slap' but be extremely careful NOT to touch the edge (cornicione). [Science: Every bubble you crush in the edge is a bubble that won't show up in the final honeycomb]",
      "Baking: Bake at 450°C for 60-70 seconds. [Science: The intense heat creates 'thermal shock', causing the high water content to turn into steam instantly and 'explosively' expand the edge]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W320-380 (Extra Strong)",
      pl_ratio: "0.55-0.65",
      absorption_capacity: "High (70-80%)",
      protein_type: "European or American blend with high elastic recovery",
      science_explanation: "The dough needs 'muscle'. Strong gluten is required to act like a balloon that can stretch to extreme sizes without popping under the heat of a 450°C oven."
    },
    thermalProfile: {
      oven_type: "High-temperature Wood-fired or Electric (e.g., Izzo Forni or Scugnizzo Napoletano)",
      heat_distribution: "Extreme radiation from the dome",
      crust_development: "Soft, 'leopard-spotted' (Maku-pika), extremely thin on the bottom, with a dry, hollow edge",
      crumb_structure: "Explosive alveolatura (honeycomb); the edge should be mostly air when cut with scissors"
    },
    fermentationScience: {
      yeast_activity: "Low and slow; relies on the preferment (Biga) for the majority of the chemical work",
      ph_target: "pH 5.4 - 5.6",
      organic_acids: "Balanced profile from the long, cool preferment stage",
      enzymatic_activity: "High; specifically designed for the peak maturation of the dough to ensure it doesn't feel 'heavy' in the stomach."
    }
  },

  education: {
    pro_tips: [
      {
        tip: " Scissors for Cutting",
        explanation: "Contemporary pizza should always be cut with scissors (forbici), never a wheel. A wheel crushes the delicate air pockets in the Canotto; scissors preserve them."
      },
      {
        tip: "The 100% Biga Secret",
        explanation: "Modern masters like Salvatore Lioniello use a 100% Biga (all the flour in the preferment). This gives the edge a unique 'cookie-like' perfume and a more vertical rise."
      },
      {
        tip: "Cold Water Strategy",
        explanation: "To incorporate 75%+ hydration, use ice-cold water during the second mixing stage. This keeps the dough temp below 24°C, preventing the gluten from breaking down."
      },
      {
        tip: "Don't press the edge!",
        explanation: "When stretching, keep a 2cm border untouched. If you press it, you've ruined the Canotto before it even hits the oven."
      },
      {
        tip: "Toppings 'Post-Bake'",
        explanation: "Add premium ingredients like Burrata, Prosciutto Crudo, or Mortadella after baking. The fresh contrast with the hot, airy crust is the hallmark of the 'Gourmet' style."
      }
    ],
    what_if: [
      {
        scenario: "The cornicione stays flat",
        result: "Under-hydrated dough or oven was too cold",
        correction: "Increase hydration above 70% and ensure the oven is at least 430°C."
      },
      {
        scenario: "The dough is a sticky mess during stretching",
        result: "Under-developed gluten or water was added too fast during mixing",
        correction: "Use a higher 'W' flour and ensure you reach a perfect windowpane before stopping the mixer."
      },
      {
        scenario: "The pizza is 'tough' and rubbery",
        result: "Over-worked dough or wasn't matured long enough",
        correction: "Ensure at least 24h cold rest and avoid over-handling the dough balls."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Traditional AVPN Neapolitan",
        difference: "Contemporary is higher hydration (75% vs 60%), uses preferments (Biga vs Direct), and has a much larger, airier edge.",
        why_choose_this: "Choose Contemporary for a lighter, more dramatic 'Instagram' look and deeper artisanal flavor."
      },
      {
        target_style: "New York Style",
        difference: "NY is crispy and foldable; Contemporary is soft, moist in the center, and has a 'bread-like' puffy edge.",
        why_choose_this: "Choose Contemporary for the highest level of Italian technical baking."
      },
      {
        target_style: "Roman Pinsa",
        difference: "Both are high hydration, but Pinsa is an oval tray-bake with soy/rice flour; Contemporary is round, wheat-only, and high-temp flash-baked.",
        why_choose_this: "Choose Contemporary for a traditional round pizza format with modern lightness."
      }
    ],
    q_and_a: [
      {
        question: "Why is it called 'Canotto'?",
        answer: "Because the edge looks like the inflatable rubber rings (dinghies) used on boats.",
        context: "Etymology"
      },
      {
        question: "Is high hydration always better?",
        answer: "Not necessarily. It's harder to handle (requires more skill) but results in a lighter, more easily digested crumb.",
        context: "Technique"
      },
      {
        question: "Do I need a wood oven?",
        answer: "High-end electric ovens capable of 500°C (like the Neapolis) now produce results identical to wood-fired for this style.",
        context: "Equipment"
      },
      {
        question: "Is it authentic Neapolitan?",
        answer: "It's an 'evolution'. While not AVPN-certified, it is currently the dominant style in the best pizzerias within Naples itself.",
        context: "Tradition"
      }
    ],
    fermentation_methods: [
      {
        method: "Biga",
        suitability: "Ideal",
        notes: "The golden standard for Contemporary Canotto style."
      },
      {
        method: "Poolish",
        suitability: "Possible",
        notes: "Produces a very extensible dough but can be harder to shape than Biga-based versions."
      },
      {
        method: "Sourdough",
        suitability: "Possible",
        notes: "Adds incredible flavor but can make the high-hydration dough more fragile/faster to degrade."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Hydration (75%+) decreases the density of the dough. In the initial seconds of baking, this higher water volume creates a massive steam pressure that 'blows up' the gluten structure from the inside out, creating the hollow edge.",
    methodSuitability: {
      direct: { suitable: true, notes: "Only if using very long room-temp fermentation (24h) and high skill." },
      biga: { suitable: true, notes: "Highly recommended for structural stability." },
      poolish: { suitable: true, notes: "Great for flavor but 'slacker' dough." }
    },
    whatIf: [
      {
        scenario: "You use Type 1 (Semi-whole) flour",
        outcome: "The flavor will be more rustic and nutty, but the Canotto expansion will be slightly reduced due to bran cutting gluten strands.",
        solution: "Sift the Type 1 or limit it to 20% of the total flour blend."
      }
    ],
    comparisons: [
      {
        vsStyle: "Napoli vs Caserta",
        difference: "Traditional Naples still loves the 'Ruota di Carro' (wide/flat); Caserta (just north) is the birthplace of the puffy 'Canotto'."
      }
    ],
    proTips: [
      "Use a 'scissors cut' to show off the alveolatura to guests.",
      "A 48h cold rest is the sweet spot for the best balance of workability and flavor.",
      "Don't put too much sauce on the center—the high hydration dough is thin and can become a 'soup' in the middle.",
      "Add a pinch of yeast to the second mix if your Biga is moving slowly.",
      "Ensure your oven floor is hot (400°C+) to prevent a 'white bottom' on a pizza that cooks in 60 seconds."
    ]
  },

  tags: ["neapolitan", "contemporary", "canotto", "gourmet", "high hydration", "biga"],

  watchouts: [
    "Dough too wet to handle? Reduce hydration to 70% and try again.",
    "Biga smells like vinegar? It over-fermented—don't use it, it will destroy the gluten.",
    "Oven too cold? The pizza will turn into a biscuit instead of staying soft.",
    "Toppings too wet? Fresh buffalo mozzarella must be drained for 6 hours before use."
  ],

  notes: [
    "Pizza a Canotto (Dinghy style).",
    "High Hydration (70-80%).",
    "Indirect fermentation (Biga/Poolish).",
    "Extreme honeycomb edge (Alveolatura).",
    "Gourmet/Post-bake toppings."
  ],

  references: [
    {
      source: "Modernist Pizza (Contemporary Neapolitan chapter)",
      url: "https://modernistcuisine.com/books/modernist-pizza/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2021"
    },
    {
      source: "Gambero Rosso - Le Nuove Frontiere della Pizza",
      url: "https://www.gamberorosso.it/",
      author: "Luciano Pignataro",
      year: "2022"
    },
    {
      source: "Pepe in Grani - Technical Philosophy",
      url: "https://www.pepeingrani.it/",
      author: "Franco Pepe",
      year: "2023"
    }
  ],

  isPro: true,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/neapolitan-contemporary-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["stracciatella", "mortadella", "pistachio", "cherry_tomatoes_confit", "basil_fresh"]
};
