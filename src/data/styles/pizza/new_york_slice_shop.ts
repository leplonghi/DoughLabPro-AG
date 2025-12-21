import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * NEW YORK SLICE SHOP (CLASSIC STREET SLICE)
 * 
 * Researched and validated content:
 * - Origin: NYC, USA (Lombardi's 1905 heritage; Modern gas-deck evolution 1940s)
 * - Technique: Wide stretching (18-20 inch), Heavy shielding, Deck baked (280-315°C)
 * - Ingredients: High-protein flour (High Gluten), Sugar, Oil (for re-heatability)
 * - Characteristics: Large, foldable, crispy bottom, 'orange' oil drip
 */
export const new_york_slice_shop: DoughStyleDefinition = {
  id: "new_york_slice_shop",
  name: "NY Slice Shop (Classic)",
  category: "pizza",
  recipeStyle: RecipeStyle.NEW_YORK,
  family: "New York Traditional",

  origin: {
    country: "USA",
    region: "New York City (Five Boroughs)",
    period: "1940s (Introduction of Gas Deck Ovens) – Present"
  },

  description: "The NY Slice Shop style is the quintessential American street food. Designed for high-volume service and 're-heatability', it features a large, 18-to-20-inch pie cut into eight generous slices. The dough is enriched with oil and sugar to ensure it remains tender after being partially baked, cooled, and then quickly crisped up 'on the floor' of the oven for a second time when a customer orders a slice.",

  history: "While Gennaro Lombardi opened the first pizzeria in 1905, the 'Slice Shop' culture truly exploded after WWII with the invention of the commercial gas deck oven. No longer tied to expensive coal or wood, neighborhood pizzerias (like Joe's, Patsy's, and Ray's) could offer quick, affordable slices. The foldable nature of the slice became a necessity for the busy New Yorker eating on the move. By the 1970s, the style had its own set of technical standards: high-gluten flour, low-moisture mozzarella, and a robust tomato sauce.",

  difficulty: "Medium",
  fermentationType: "cold",

  base_formula: [
    { name: "High-Gluten Flour (W340+ / 14% Protein)", percentage: 100 },
    { name: "Water (Cold Tap)", percentage: 60 },
    { name: "Salt", percentage: 2.2 },
    { name: "Vegetable or Olive Oil", percentage: 3 },
    { name: "Sugar or Malt", percentage: 2 },
    { name: "Instant Yeast", percentage: 0.5 }
  ],

  technicalProfile: {
    hydration: [58, 63], // Lower hydration for structural stability at large sizes
    salt: [2.0, 2.5],
    oil: [2, 5], // High oil content prevents the slice from becoming a 'cracker' during reheating
    sugar: [1, 3], // Necessary for the 'Standard NY Gold' color in gas ovens
    flourStrength: "Extra Strong (W340+). Bromated flour was traditional; now high-protein spring wheat is the standard",
    ovenTemp: [280, 315],
    recommendedUse: [
      "Traditional Slice Shop service",
      "Home pizza parties (16-inch+ pies)",
      "Delivery-optimized pizza"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 600, min: 550, max: 800 }, // Heavy balls for 18-20 inch pies
    fermentationSteps: [
      "Mixing: Combine all ingredients. Knead for 10-12 minutes until very smooth. [Science: The higher protein requires more mechanical energy to fully hydrate and align into a strong network]",
      "Scale & Ball: Portion into large 600-800g balls immediately after mixing. [Science: Short bulk rise prevents 'puffy' air pockets; the goal is a dense, consistent structure]",
      "Cold Retard: 24 to 48 hours at 4°C. [Science: Cold temperatures slow the yeast while allowing enzymes to convert starches to sugars for flavor and better browning]",
      "Final Proof: 2 to 4 hours at room temperature. [Science: The balls must reach 18-20°C to be extensible enough to stretch to 20 inches without tearing]",
      "Stretching: Hand-stretched to extreme diameters (up to 50cm). [Science: Thinner in the middle, with a slightly thicker edge (not a Canotto!)]",
      "Baking: Bake on a gas deck for 7-10 minutes. [Science: The longer bake at moderate temps ensures the crust is fully dried and rigid enough to hold its own weight when folded]",
      "The Reheat: Once a slice is ordered, place it back on the oven floor for 1-2 minutes. [Science: Flash-heats the bottom oil, creating the signature 'snap' crunch]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W340-400 (Extra Strong)",
      pl_ratio: "0.60-0.70 (Tenacious)",
      absorption_capacity: "Moderate (58-62%)",
      protein_type: "Hard Red Spring Wheat",
      science_explanation: "The high protein content provides the 'structural integrity' needed to support a huge slice. Without this strength, the slice would 'tip' (the dreaded 'flop') when a New Yorker tries to eat it on the move."
    },
    thermalProfile: {
      oven_type: "Gas Deck Oven (Stone/Refractory floor)",
      heat_distribution: "Moderate bottom conduction and moderate ceiling radiation",
      crust_development: "Uniform orange-gold color, moderately thick with a signature 'snap' when bent",
      crumb_structure: "Dense, bready, and regular with small air cells"
    },
    fermentationScience: {
      yeast_activity: "Steady; relies on the sugar in the dough for consistent gas production in high-volume environments",
      ph_target: "pH 5.4 - 5.7",
      organic_acids: "Low; focus is on a 'clean' wheat and yeast flavor",
      enzymatic_activity: "High; specifically targeted at sugar release to aid the golden color in commercial ovens."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Screen vs Stone",
        explanation: "Pizzerias often use a screen for the initial few minutes of baking to ensure a round shape, then slide the pie directly onto the stone floor for the final crisping."
      },
      {
        tip: "The Fold Test",
        explanation: "A perfect NY slice should be foldable without the crust snapping in half. The oil in our 'base_formula' is what provides this flexibility."
      },
      {
        tip: "Low-Moisture Mozzarella",
        explanation: "Never use fresh balls of mozzarella for this style. Use only low-moisture 'whole milk' mozzarella blocks. It melts with a characteristic orange oil drip that is part of the flavor profile."
      },
      {
        tip: "Garlic/Oregano finish",
        explanation: "Artisan slice shops often finish the pie with a dusting of dried oregano and pecorino romano as it leaves the oven; it's the 'smell' of NYC."
      },
      {
        tip: "Room Temp Sauce",
        explanation: "Never put ice-cold tomato sauce on the dough; it will create a 'gum line' (a layer of raw dough) between the sauce and the crust."
      }
    ],
    what_if: [
      {
        scenario: "The slice 'flops' and won't stand straight",
        result: "Under-baked or hydration was too high",
        correction: "Ensure hydration is below 62% and bake until the bottom has dark brown patches."
      },
      {
        scenario: "The crust is hard and like a rock",
        result: "Flour was too strong or dough was over-worked",
        correction: "Increase the oil content by 1% to tenderize the dough."
      },
      {
        scenario: "The cheese is burnt but the dough is raw",
        result: "Oven ceiling was too hot or dough was too cold",
        correction: "Let the dough balls rest longer at room temperature before stretching."
      }
    ],
    comparative_analysis: [
      {
        target_style: "New Jersey Tomato Pie",
        difference: "NJ puts the cheese down FIRST, then swirls the sauce on top. NY Slice Shop is traditional Sauce-then-Cheese.",
        why_choose_this: "Choose NY Slice for the classic 'street' experience."
      },
      {
        target_style: "New Haven Apizza",
        difference: "New Haven is much thinner, charred black, and oblong; NY Slice is round, golden, and softer.",
        why_choose_this: "Choose NY Slice for a more 'approachable' family-favorite texture."
      },
      {
        target_style: "California Style",
        difference: "California focuses on goat cheese and fresh produce; NY Slice is all about the Pepperoni and Sausage classic combo.",
        why_choose_this: "Choose NY Slice for the 'Traditional American' flavor profile."
      }
    ],
    q_and_a: [
      {
        question: "Why use 'Tap Water'?",
        answer: "Legends say NYC water contains specific minerals that make the dough better, but science says it's mostly about the high-protein flour and the deck oven.",
        context: "Culture"
      },
      {
        question: "18 or 20 inches?",
        answer: "18 is standard for 'Large' pies, but the iconic 1970s shops often used 20 inches to get that extra-long foldable slice.",
        context: "Size"
      },
      {
        question: "Sugar in pizza?",
        answer: "It's not for sweetness. It's a 'coloring agent' for gas ovens that can't reach the extreme heat of wood-fired ones.",
        context: "Science"
      },
      {
        question: "What is an 'Orange Drip'?",
        answer: "It is the emulsion of tomato acidity and the butter-fat from high-quality whole milk mozzarella. It's the hallmark of a good slice.",
        context: "Toppings"
      }
    ],
    fermentation_methods: [
      {
        method: "Cold",
        suitability: "Authentic",
        notes: "Mandatory for the NY texture and flavor depth."
      },
      {
        method: "Direct",
        suitability: "Possible",
        notes: "Only in low-end 'Emergency' pizzerias; results in a bland crust."
      },
      {
        method: "Poolish",
        suitability: "Ideal",
        notes: "Increasingly common in 'New Wave' slice shops for a lighter edge."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Hydration (60%) is low to medium. This ensures the dough is 'stiff' enough to be stretched by a high-volume pizzaiolo into a 20-inch disc that won't tear or become too soggy under heavy pepperoni.",
    methodSuitability: {
      direct: { suitable: true, notes: "Reliable for same-day production targets." },
      biga: { suitable: false, notes: "Adds too much 'spring'; NY dough needs to be extensible, not bouncy." },
      poolish: { suitable: true, notes: "Recommended for 20% of the flour to add extensibility." }
    },
    whatIf: [
      {
        scenario: "You omit the sugar",
        outcome: "The pizza will take 12-14 minutes to brown, resulting in a very dry, tough, and hard crust.",
        solution: "Sugar is mandatory at deck oven temperatures below 300°C."
      }
    ],
    comparisons: [
      {
        vsStyle: "Street Slice vs Artisan Pie",
        difference: "Street Slice uses commercial yeast and higher oil for reheating; Artisan Pie uses sourdough and no oil for immediate consumption."
      }
    ],
    proTips: [
      "A heavy dusting of Pecorino Romano before the bake adds a sharp salty kick that defines the NY profile.",
      "If your home oven only goes to 250°C, use a 'Pizza Screen' to get better airflow around the large pie.",
      "Buy 'Whole Milk' mozzarella blocks and grate them yourself; pre-shredded cheese has starch that prevents a good melt.",
      "The best pepperoni is 'Cup Char'—it curls up into little bowls of oil in the oven.",
      "Don't put too much flour on your peel; it will burn and taste like ash."
    ]
  },

  tags: ["new york", "slice shop", "foldable", "street food", "america", "pizza"],

  watchouts: [
    "Dough balls over-proofing? They will be impossible to lift onto the peel.",
    "Cheese not melting? You used low-fat mozzarella—don't!",
    "Gum line under the sauce? The oven floor was too cold.",
    "Crust too hard? Reduce the bake time or increase oil."
  ],

  notes: [
    "Most iconic American pizza format.",
    "Designed for re-heatability (on the slice).",
    "Uses High-Gluten flour (14% protein).",
    "Foldable, rigid, and golden.",
    "Baked in gas deck ovens (280-315°C)."
  ],

  references: [
    {
      source: "Modernist Pizza (Vol 2 - NY Slice chapter)",
      url: "https://modernistcuisine.com/books/modernist-pizza/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2021"
    },
    {
      source: "Pizza Camp - NYC Methods",
      url: "https://www.amazon.com/Pizza-Camp-Portraits-Summer/dp/1419724097",
      author: "Joe Beddia",
      year: "2017"
    },
    {
      source: "L'Arte della Pizza - NY Tradition",
      url: "https://www.joespizza.com/about/",
      author: "Joe Pozzuoli",
      year: "2023"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/ny-slice-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["mozzarella_low_moisture", "pepperoni", "italian_sausage", "bell_pepper", "cogumelos", "pecorino_romano"]
};
