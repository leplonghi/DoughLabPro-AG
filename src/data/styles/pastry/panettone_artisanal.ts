import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PANETTONE ARTISANAL (MILANESE)
 * 
 * Researched and validated content:
 * - Origin: Milan, Italy (15th c. legends / 1919 Angelo Motta modern shape)
 * - Technique: Sfozatura (Triple fermentation), Lievito Madre (Sourdough) only
 * - Ingredients: Manitoba Flour (W400+), High-fat butter, Egg yolks, Candied citrus, Raisins
 * - Science: Osmotolerant sourdough, inverted cooling (hanging)
 */
export const panettone_artisanal: DoughStyleDefinition = {
  id: "panettone_artisanal",
  name: "Panettone Artisanal",
  category: "pastry",
  recipeStyle: RecipeStyle.PANETTONE_ARTISANAL,
  family: "Large-format Leavened Bread",

  origin: {
    country: "Italy",
    region: "Milan, Lombardy",
    period: "15th Century (Origin myths) / 1919 (Modern tall shape by Angelo Motta)"
  },

  description: "Panettone is the 'Everest of Baking'. It is a rich, dome-shaped Italian leavened bread traditionally prepared for Christmas and New Year. Characterized by its incredible height, soft 'shredding' crumb, and intense fragrance of butter and candied fruits, authentic artisanal panettone is made exclusively with 'Lievito Madre' (natural sourdough leaven) and requires a multi-day process of intense labor and temperature control.",

  history: "Legend attributes its creation to 'Toni', a humble scullery boy in the service of Ludovico il Moro in 15th-century Milan, who saved a Christmas banquet by serving his own enriched bread (Pane di Toni -> Panettone). Historically, it was a flat loaf until 1919, when Angelo Motta revolutionized it by giving it its characteristic tall flute shape and using a triple-fermentation sourdough method. Gioacchino Alemagna later refined the recipe, leading to the industrial vs. artisanal rivalry that defines the style today. Authentic artisanal panettone is protected by an Italian decree (2005) specifying mandatory ingredients and methods.",

  difficulty: "Expert",
  fermentationType: "levain",

  base_formula: [
    { name: "Manitoba or Strong Flour (W400+)", percentage: 100 },
    { name: "Lievito Madre (Solid Sourdough)", percentage: 30 },
    { name: "Egg Yolks", percentage: 40 },
    { name: "Butter (82%+ Fat)", percentage: 50 },
    { name: "Sugar", percentage: 35 },
    { name: "Water", percentage: 45 },
    { name: "Candied Citrus & Raisins", percentage: 60 }
  ],

  technicalProfile: {
    hydration: [60, 75], // High liquid content from eggs and butter
    salt: [0.5, 0.8], // Very low salt compared to bread
    oil: [25, 50], // Very high butter content
    sugar: [20, 35],
    flourStrength: "Extremely strong (W400-450), high protein (15%+) with high P/L stability",
    ovenTemp: [160, 180],
    recommendedUse: [
      "Celebration dessert",
      "Gifting",
      "Panettone French Toast (for leftovers)"
    ],
    difficulty: "Expert",
    ballWeight: { recommended: 1000, min: 500, max: 2000 },
    fermentationSteps: [
      "Lievito Madre Refreshment: 3 refreshments every 4 hours at 28°C to ensure maximum vitality and low acidity. [Science: Balances lactic and acetic acids for a sweet, non-sour result]",
      "Primo Impasto (First Dough): Mix flour, water, sugar, butter, and LM. Ferment 12-14 hours at 24-26°C until tripled in volume. [Science: Builds the structural foundation and initial bacterial population]",
      "Secondo Impasto (Second Dough): Add more flour, sugar, salt, and a massive amount of egg yolks and butter. Incorporate fruits. [Science: The gluten must be strong enough to support the extreme weight of fat and sugar (osmotic pressure)]",
      "Pirlatura (Rounding): Shape the dough on a buttered surface using a circular tensioning movement. [Science: Creates a skin to support the vertical rise in the paper mold]",
      "Final Proof: 6-10 hours at 28-30°C in the paper mold (Pirottino). [Science: The dough must reach the 'shoulder' of the mold before baking]",
      "Scarpatura (Scoring): Cut a cross on top and place a knob of butter. [Science: Allows the dome to expand evenly and creates the classic ears]",
      "Inverted Cooling: Hang the panettone upside down for 10-12 hours immediately after baking. [Science: Prevents the fragile, air-filled structure from collapsing under its own weight while cooling]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W400-450 (Ultra-strong)",
      pl_ratio: "0.50-0.60 (Balanced stability)",
      absorption_capacity: "Very High (70%+)",
      protein_type: "Strong Manitoba wheat with exceptional gluten tenacity",
      science_explanation: "The flour must survive 36+ hours of fermentation and the massive 'osmotic shock' of high sugar and fat concentrations which normally inhibit gluten formation."
    },
    thermalProfile: {
      oven_type: "Convection or static oven with precise temperature control",
      heat_distribution: "Gentle, even heat to cook the large core without burning the sugary crust",
      crust_development: "Thin, soft, brownish-orange with a butter-melted top",
      crumb_structure: "Cloud-like, long vertical fibers (shredding), with irregular elongated holes"
    },
    fermentationScience: {
      yeast_activity: "Exclusively wild yeast from Lievito Madre, selected for acid tolerance and sugar resistance",
      ph_target: "pH 4.8 - 5.2 (End of first dough); pH 5.4 (Final product)",
      organic_acids: "Shifted heavily toward lactic acid (sweetness) via precise temperature control (28°C vs 20°C for bread)",
      enzymatic_activity: "High proteolysis is balanced by the extreme strength of the W450 flour, leading to a melting mouthfeel that still has structure."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "The thermometer is your boss",
        explanation: "Every stage of panettone depends on the internal temperature of the dough. If it gets too hot (30°C+) during mixing, the butter will separate and the gluten will break."
      },
      {
        tip: "Solid Lievito Madre only",
        explanation: "While some use liquid levain, the classic Milanese texture is only possible with a solid sourdough (50% hydration) maintained in a bound cloth (Legato)."
      },
      {
        tip: "Hanging is mandatory",
        explanation: "A panettone is so rich and airy that if cooled upright, the center will sink. Use specialized pins (Forche) to hang them the moment they leave the oven."
      },
      {
        tip: "Avoid 'Acid' notes",
        explanation: "Panettone should NOT taste sour. The 3-stage refreshment of the leaven is designed to wash away acetic acid, leaving only a sweet, milky lactic fragrance."
      },
      {
        tip: "Cura del Lievito",
        explanation: "In the weeks leading up to Panettone season, bakers 'train' their yeast with daily, precise refreshments to ensure it can handle the intense sugar of the final dough."
      }
    ],
    what_if: [
      {
        scenario: "The first dough didn't triple in 12 hours",
        result: "The starter was too weak or the temperature too low",
        correction: "Do not move to the second stage. Wait for the triple, or start over. The second dough will never recover from a weak first stage."
      },
      {
        scenario: "The dough collapses when you add the butter",
        result: "The gluten network wasn't sufficiently developed before the fat was added",
        correction: "Add butter in small increments, ensuring the dough 'cleans the bowl' between each addition."
      },
      {
        scenario: "The panettone has large holes but a gummy core",
        result: "Under-baked in the center",
        correction: "Always use a probe thermometer. The core must reach exactly 92-94°C for structural stability."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Pandoro",
        difference: "Pandoro is from Verona, has a star shape, contains no fruit, and is even richer in butter and eggs.",
        why_choose_this: "Choose Panettone for the complex aroma of candied fruits and the legendary sourdough challenge."
      },
      {
        target_style: "Colomba Pasquale",
        difference: "Same dough, but shaped like a dove and topped with pearl sugar and almonds, traditionally for Easter.",
        why_choose_this: "Choose Panettone for the iconic vertical shred and Christmas tradition."
      },
      {
        target_style: "Stollen",
        difference: "Stollen is German, uses commercial yeast, and is much denser and more like a cake-bread than the airy Panettone.",
        why_choose_this: "Choose Panettone for its unique vertical height and cloud-like texture."
      }
    ],
    q_and_a: [
      {
        question: "Why is it so expensive?",
        answer: "Artisanal panettone takes 3 days of constant attention, specialty high-protein flour, and massive amounts of premium butter and eggs. The failure rate is high even for professionals.",
        context: "Economics"
      },
      {
        question: "Does it contain commercial yeast?",
        answer: "Authentic 'Artisan' Panettone uses 100% Lievito Madre. High-end 'Industrial' versions often use a hybrid method for reliability.",
        context: "Authenticity"
      },
      {
        question: "How long does it stay fresh?",
        answer: "Because of the natural acidity of the Lievito Madre and the high fat content, an artisanal panettone can stay soft for 3-4 weeks if sealed in a bag.",
        context: "Storage"
      },
      {
        question: "What are the raisins and peel for?",
        answer: "They aren't just for flavor; they provide moisture to the crumb and act as little thermal heat-sinks during baking, helping the center cook evenly.",
        context: "Functionality"
      }
    ],
    fermentation_methods: [
      {
        method: "Sourdough",
        suitability: "Authentic",
        notes: "The only method allowed for the true 'Artisanal' designation in Italy."
      },
      {
        method: "Hybrid",
        suitability: "Possible",
        notes: "Used in many bakeries for consistency, but considered a compromise by purists."
      },
      {
        method: "Direct",
        suitability: "Not Recommended",
        notes: "Will result in a dry, cake-like bread that goes stale in 24 hours."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "While the 'water' hydration is low (approx 45%), the effective hydration including eggs and butter is extremely high. The sugar also acts as a liquid during baking, meaning the dough is technically closer to a batter that is held together by an ultra-strong gluten mesh.",
    methodSuitability: {
      direct: { suitable: false, notes: "Impossible to achieve the required volume." },
      biga: { suitable: false, notes: "Too much acetic acid for a sweet bread." },
      poolish: { suitable: false, notes: "Lacks the structural integrity of Lievito Madre." }
    },
    whatIf: [
      {
        scenario: "You use commercial yeast instead of Lievito Madre",
        outcome: "The bread will rise faster but lose its characteristic 'shredding' crumb and long-term shelf life.",
        solution: "Use the hybrid method but still maintain 50% of the leavening from sourdough."
      }
    ],
    comparisons: [
      {
        vsStyle: "Angelo Motta vs Gioacchino Alemagna",
        difference: "Motta created the tall mold; Alemagna added more fat and perfected the sourdough fermentation, defining the luxury artisanal standard."
      }
    ],
    proTips: [
      "Incorporate the sugar slowly—too much at once will 'kill' the yeast by dehydrating the cells (osmotic pressure).",
      "Use 'cedro' (citron) instead of just orange peel for a more complex, historic flavor profile.",
      "If your Lievito Madre smells like vinegar (acetic), your panettone will be tough. It must smell like yogurt and honey.",
      "The 'First Dough' should be allowed to ferment at exactly 24°C; any higher and you risk a 'runaway' fermentation that breaks the gluten."
    ]
  },

  tags: ["italian", "panettone", "pastry", "sourdough", "lievito madre", "christmas"],

  watchouts: [
    "Dough temperature exceeding 30°C during mixing will ruin the texture.",
    "Starter not refreshed properly? It won't rise in time.",
    "Not hanging upside down? It will collapse into a pancake.",
    "Under-baking? It will shrink and pull away from the paper."
  ],

  notes: [
    "Most complex project in baking.",
    "Exclusively Pie di Lievito (Sourdough).",
    "Requires Manitoba W400+ flour.",
    "Inverted cooling is essential.",
    "36-48 hour process."
  ],

  references: [
    {
      source: "Cresci: The Art of Leavened Dough",
      url: "https://www.amazon.com/Cresci-Art-Leavened-Dough-Iginio/dp/8886561135",
      author: "Iginio Massari & Achille Zoia",
      year: "1999"
    },
    {
      source: "Panettone World Cup - Technical Standards",
      url: "https://www.panettoneworldcup.it/",
      author: "Coppa del Mondo del Panettone",
      year: "2023"
    },
    {
      source: "Modernist Bread (Large Sourdough Lepidoptera section)",
      url: "https://modernistcuisine.com/books/modernist-bread/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2017"
    }
  ],

  isPro: true,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/panettone-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "candied_citrus", "raisins", "citrus_zest", "honey_raw", "vanilla_madagascar"]
};
