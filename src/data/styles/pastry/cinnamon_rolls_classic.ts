import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CLASSIC CINNAMON ROLLS (KANELBULLE / STICKY BUNS)
 * 
 * Researched and validated content:
 * - Origin: Sweden (Kanelbulle, 1920s) / USA (Philadelphia Sticky Buns evolution)
 * - Technique: Enriched Brioche-style dough, Tangzhong (optional for shelf-life), Spiral Lamination
 * - Ingredients: Bread Flour, Milk, Butter, Eggs, Brown Sugar, Ceylon Cinnamon, Cream Cheese
 * - Characteristics: Spiraled crumb, ultra-soft texture, gooey center, aromatic spice
 */
export const cinnamon_rolls_classic: DoughStyleDefinition = {
  id: "cinnamon_rolls_classic",
  name: "Cinnamon Rolls Classic",
  category: "pastry",
  recipeStyle: RecipeStyle.CINNAMON_ROLL,
  family: "Enriched Sweet Rolls",

  origin: {
    country: "Sweden / USA",
    region: "Northern Europe / North America",
    period: "1920s (Sweden) / 18th Century (German-American adaptations)"
  },

  description: "The Classic Cinnamon Roll is the ultimate comfort pastry, featuring a soft, pillowy enriched dough spiraled around a rich filling of butter, brown sugar, and cinnamon. It exists in two main families: the Swedish 'Kanelbulle' (often spiced with cardamom and pearl sugar) and the North American version (larger, Gooey, and topped with cream cheese frosting or caramel glaze).",

  history: "The concept of spiced sweet rolls dates back to Roman times, but the modern cinnamon roll developed in Northern Europe. In Sweden, the 'Kanelbulle' became a national icon after WWI as ingredients like cinnamon became more affordable; Sweden even celebrates 'Kanelbullens dag' every October 4th. In the United States, German and Dutch settlers in Pennsylvania introduced 'Sticky Buns' (Philadelphia Style), which evolved into the massive, frosting-heavy rolls popularized by modern American bakeries.",

  difficulty: "Medium",
  fermentationType: "direct",

  base_formula: [
    { name: "Strong Bread Flour", percentage: 100 },
    { name: "Whole Milk (warm)", percentage: 55 },
    { name: "Sugar (in dough)", percentage: 12 },
    { name: "Unsalted Butter (softened)", percentage: 15 },
    { name: "Whole Eggs", percentage: 10 },
    { name: "Instant Yeast", percentage: 1.5 },
    { name: "Salt", percentage: 1.5 },
    { name: "Brown Sugar (filling)", percentage: 25 },
    { name: "Cinnamon (Ceylon preferred)", percentage: 3 }
  ],

  technicalProfile: {
    hydration: [60, 68], // Including milk and egg liquid
    salt: [1.2, 1.8],
    oil: [10, 20], // Dough fat
    sugar: [10, 25], // Dough sugar
    flourStrength: "Bread Flour (W280-300) to support the weight of the enrichment",
    ovenTemp: [175, 190],
    recommendedUse: [
      "Artisanal breakfast pastry",
      "Coffee-shop staple",
      "Holiday morning treats"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 100, min: 80, max: 150 },
    fermentationSteps: [
      "Mixing (Enrichment): Mix flour, milk, eggs, sugar, and yeast. Add butter slowly after the gluten starts to form. [Science: Adding fat too early can coat the protein molecules and inhibit gluten development]",
      "Bulk Fermentation: 1.5 to 2 hours at 25-26°C. [Science: The high sugar and fat content slow down the yeast, requiring a slightly warmer environment than lean bread]",
      "Rolling and Filling: Roll the dough into a large rectangle (approx 5mm thick). Spread softened butter and a generous layer of cinnamon-sugar. [Science: The fat and sugar create 'layers' without a technical lamination process]",
      "Shaping (The Spiral): Roll tightly into a log and cut into rounds using unflavored dental floss or a very sharp knife. [Science: Dental floss provides a clean, non-crushing cut that preserves the air-cell structure]",
      "Second Proof: Arrange in a buttered pan and proof for 45-60 minutes until doubled and 'touching'. [Science: Touching each other allows the rolls to rise upwards instead of outwards, keeping the sides soft]",
      "Baking: Bake until golden brown. Optional: Pour a small amount of heavy cream over the rolls halfway through baking. [Science: This 'Cinnabon' secret creates an ultra-gooey, custard-like bottom]",
      "Frosting: Apply cream cheese frosting while the rolls are still slightly warm. [Science: The residual heat slightly melts the frosting, allowing it to penetrate the first few layers of the spiral]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W280-320 (Medium-Strong)",
      pl_ratio: "0.40-0.50 (High extensibility)",
      absorption_capacity: "High (55-65%)",
      protein_type: "Strong soft wheat blend",
      science_explanation: "A high protein content is necessary to hold the air bubbles against the pressure of the heavy fat and sugar, but it must be extensible to allow for easy rolling and spiral expansion."
    },
    thermalProfile: {
      oven_type: "Convection oven",
      heat_distribution: "Even heat to ensure the center of the roll cooks through without burning the sugar-laden outside",
      crust_development: "Soft, golden, almost non-existent (steamed by its own proximity in the pan)",
      crumb_structure: "Tight but ultra-tender, with a 'shredding' quality similar to brioche"
    },
    fermentationScience: {
      yeast_activity: "High; requires osmotolerant yeast if the sugar concentration exceeds 15%",
      ph_target: "pH 5.4 - 5.6",
      organic_acids: "Low acidity; flavor is dominated by the Maillard reaction between milk solids and sugar rather than bacterial fermentation",
      enzymatic_activity: "Protease activity helps soften the dough, while amylase provides the sugars for browning"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Use Bread Flour, not AP",
        explanation: "All-purpose flour often results in a 'cakey' roll that collapses under the weight of the icing. Bread flour provides the 'chew' and structure needed for a professional result."
      },
      {
        tip: "The Dental Floss Trick",
        explanation: "Cutting with a knife often squashes the delicate layers of the spiral. Using a piece of unflavored dental floss to 'strangle' the log provides a perfect, symmetrical cut every time."
      },
      {
        tip: "Room Temp Butter",
        explanation: "Never melt the butter for the filling; it should be softened but solid. Melted butter will leak out during the second proof, leaving the roll dry."
      },
      {
        tip: "Heavy Cream Soak",
        explanation: "Pouring 1/4 cup of warm heavy cream over the proofed rolls just before they go in the oven creates a steaming effect that ensures a soft, bakery-style texture."
      },
      {
        tip: "Cream Cheese Tang",
        explanation: "A good frosting should have enough cream cheese to balance the sweetness of the sugar. A 1:1 ratio of butter to cream cheese is often the sweet spot."
      }
    ],
    what_if: [
      {
        scenario: "The rolls are dry and tough",
        result: "Over-baked or too much flour was used during rolling",
        correction: "Check the internal temperature (should be 88-90°C) and use a 'bench-scraper' instead of more flour to handle the dough."
      },
      {
        scenario: "The center 'pops up' like a volcano",
        result: "Rolled too tightly or too much tension during shaping",
        correction: "Roll the dough log firmly but don't pull/stretch it as you roll. Give the yeast room to expand upwards."
      },
      {
        scenario: "The frosting runs off completely",
        result: "Applied to a roll that was too hot",
        correction: "Wait 10-15 minutes after baking before applying the first layer of frosting."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Kanelbulle (Swedish)",
        difference: "Traditional Swedish rolls use cardamom in the dough, are twisted instead of spiraled, and use pearl sugar instead of frosting.",
        why_choose_this: "Choose Swedish for a lighter, spice-forward, less sugary experience."
      },
      {
        target_style: "Brioche",
        difference: "Brioche has significantly more butter (often 50%+) and eggs, and is less focused on the filling-to-dough ratio.",
        why_choose_this: "Choose Cinnamon Rolls when you want a specific spice-and-glaze experience."
      },
      {
        target_style: "Babka",
        difference: "Babka is braided and has a much higher ratio of filling (often chocolate), resulting in a more 'swirly' and dense loaf.",
        why_choose_this: "Choose Cinnamon Rolls for individual portions and a softer, fluffier crumb."
      }
    ],
    q_and_a: [
      {
        question: "Why add heavy cream before baking?",
        answer: "It creates a humid environment in the oven that keeps the rolls incredibly soft and creates a 'syrup' at the bottom of the pan that mimics commercial bakeries.",
        context: "Technique"
      },
      {
        question: "Can I make these overnight?",
        answer: "Yes! The best cinnamon rolls are often proofed in the fridge overnight. This develops better flavor and makes the cold dough easier to handle in the morning.",
        context: "Convenience"
      },
      {
        question: "What is the best cinnamon?",
        answer: "Ceylon cinnamon (True Cinnamon) has a delicate, complex sweetness, while Cassia is sharper and more 'red-hot' flavored. Most commercial rolls use Cassia for its punch.",
        context: "Ingredients"
      },
      {
        question: "Why is my dough so sticky?",
        answer: "Enriched doughs are naturally sticky because of the sugar and fat. Resist the urge to add more flour; instead, use cold temperatures to make the dough manageable.",
        context: "Handling"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Standard American method for quick production."
      },
      {
        method: "Tangzhong",
        suitability: "Ideal",
        notes: "Modern adaptation (milk roux) that pre-gelatinizes starch for extreme softness and longer shelf life."
      },
      {
        method: "Sourdough",
        suitability: "Possible",
        notes: "Known as 'Sourdough Cinnamon Rolls'. Adds a beautiful tang that balances the heavy sugar."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Though the hydration is technically around 60%, the presence of fat and sugar makes the dough feel much wetter. The sugar hygroscopically binds water, keeping the roll moist long after baking.",
    methodSuitability: {
      direct: { suitable: true, notes: "Reliable for same-day baking." },
      biga: { suitable: false, notes: "Adds too much strength; makes rolling the spiral difficult." },
      poolish: { suitable: true, notes: "Good for improving the extensibility of the dough log." }
    },
    whatIf: [
      {
        scenario: "You use a Tangzhong (Starch Paste)",
        outcome: "The rolls will stay soft for 3-4 days instead of 24 hours. The crumb will be more like a 'cloud'.",
        solution: "Cook 5% of the flour with 5x its weight in milk to 65°C before adding to the main mix."
      }
    ],
    comparisons: [
      {
        vsStyle: "Cinnabon Style vs Artisan",
        difference: "Cinnabon uses high-protein flour, Makara cinnamon (a type of Cassia), and a heavy cream soak to achieve their iconic texture vs the more bread-like artisan roll."
      }
    ],
    proTips: [
      "Invert the pan onto a tray immediately after baking if making 'Sticky Buns' to allow the caramel to coat the tops.",
      "Add a pinch of salt to your filling to make the cinnamon flavor pop.",
      "The best icing is made with slightly cold cream cheese and room-temp butter.",
      "For a 'Kanelbulle' twist, add 1 tsp of ground cardamom to the dough.",
      "If the rolls are rising too much in the center, place a flat baking sheet on top for the first 10 minutes of baking."
    ]
  },

  tags: ["american", "swedish", "pastry", "cinnamon rolls", "brioche", "breakfast"],

  watchouts: [
    "Over-proofing makes the rolls collapse into each other and lose their spiral definition.",
    "Filling leaking out? Your seal wasn't tight enough.",
    "Raw center? The dough was too cold or the oven too hot.",
    "Burnt bottom? Sugar and butter pooled and scorched—use a double baking sheet."
  ],

  notes: [
    "Icon of American and Swedish baking.",
    "Enriched dough (Milk/Butter/Eggs).",
    "Uses brown sugar/cinnamon filling.",
    "Multiple shaping styles (Twist vs Spiral).",
    "Requires cream cheese or caramel glaze."
  ],

  references: [
    {
      source: "Modernist Bread (Enriched Doughs section)",
      url: "https://modernistcuisine.com/books/modernist-bread/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2017"
    },
    {
      source: "Sweden.se - The Swedish Cinnamon Bun",
      url: "https://sweden.se/culture/food/the-swedish-cinnamon-bun",
      author: "Sweden Food Culture Association",
      year: "2023"
    },
    {
      source: "King Arthur Baking - Cinnamon Roll Science",
      url: "https://www.kingarthurbaking.com/blog/2021/11/17/cinnamon-roll-breakdown",
      author: "King Arthur Editorial Team",
      year: "2021"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/cinnamon-roll-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "brown_sugar", "cinnamon_ceylon", "cream_cheese", "pecan_nuts", "vanilla_madagascar"]
};
