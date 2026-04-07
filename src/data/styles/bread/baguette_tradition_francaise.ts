import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * BAGUETTE TRADITION FRANÇAISE
 * 
 * Researched and validated content:
 * - UNESCO Intangible Cultural Heritage (2022)
 * - Le Décret Pain (1993 French Bread Decree) standard
 * - Ingredients: Strictly flour, water, salt, yeast/leaven only
 * - Technique: Steam injection and long fermentation
 */
export const baguette_tradition_francaise: DoughStyleDefinition = {
  id: "baguette_tradition_francaise",
  name: "Baguette Tradition Française",
  category: "bread",
  recipeStyle: RecipeStyle.BAGUETTE,
  family: "French Artisan Bread",

  origin: {
    country: "France",
    region: "Paris and throughout France",
    period: "Early 20th century (term adopted 1920, protected 1993)"
  },

  description: "The Baguette Tradition Française is the iconic French bread protected by UNESCO (2022) and French law (Decree 1993). It represents centuries of French baking tradition, characterized by its elongated shape, crispy golden crust, and airy interior crumb with irregular holes (alvéoles).",

  history: "While the exact origins of the baguette are debated, theories connect it to 19th-century Vienna, the French Revolution, or early 20th-century Paris. Before the baguette, French bread was typically round and dense. The elongated shape allowed faster baking, particularly relevant after a 1920 law limited bakers' working hours. The term 'baguette' was officially adopted in 1920. Steam ovens invented in the late 19th century enabled the characteristic crispy crust. By the 1930s, the baguette had become ubiquitous and an icon of French culture. The crucial 'Le Décret Pain' (Bread Decree) of September 13, 1993 legally protected the 'baguette de tradition française,' mandating it contain only wheat flour, water, salt, and yeast/leaven, with no frozen dough, additives, or preservatives. UNESCO inscribed 'the artisanal know-how and culture of baguette bread' on its Intangible Cultural Heritage list on November 30, 2022.",

  difficulty: "Hard",
  fermentationType: "preferment",

  base_formula: [
    { name: "French T65 or T55 flour", percentage: 100 },
    { name: "Water", percentage: 68 },
    { name: "Sea Salt", percentage: 2.0 },
    { name: "Fresh Yeast (or 0.3% dry)", percentage: 1.0 },
    { name: "Poolish or Leaven (optional)", percentage: 20 }
  ],

  technicalProfile: {
    hydration: [65, 75],
    salt: [1.8, 2.2],
    oil: [0, 0],
    sugar: [0, 0],
    flourStrength: "French Type 55 or 65 flour, moderate protein (10-12%)",
    ovenTemp: [230, 250],
    recommendedUse: [
      "Daily bread for French meals and sandwiches",
      "Base for tartines, crostini, and bruschetta"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 350, min: 250, max: 400 },
    fermentationSteps: [
      "Autolyse: Mix flour and water only for 20-45 minutes. [Science: Allows enzymes to begin breaking down starches and proteins for improved flavor and extensibility]",
      "Mixing: Add salt and yeast/leaven. Knead minimally until smooth but don't overwork. [Science: Preserves the large air bubbles needed for 'alvéolage']",
      "Bulk Fermentation: 2-4 hours with folds every 30-45 minutes. [Science: Folds develop gluten strength without traditional heavy kneading]",
      "Dividing & Preshaping: Cut into 350g pieces and roll into loose cylinders. Rest 20 min. [Science: Relaxes the gluten for the final shaping elongation]",
      "Final Shaping: Elongate carefully to 55-65cm. [Science: Proper tension is critical for a straight baguette and even expansion]",
      "Baking with Steam: Score 5-7 times and bake at 460°F with heavy steam injection. [Science: Steam keeps the surface moist, allowing maximum 'oven spring' before the crust hardens]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W220-260 (Moderate strength)",
      pl_ratio: "0.40-0.60 (Extensible)",
      absorption_capacity: "Moderate (65-72%)",
      protein_type: "French soft wheat T65 with low ash content",
      science_explanation: "The relatively low W index and high extensibility allow the dough to expand significantly during the initial minutes of baking without tearing the delicate thin walls of the bubbles."
    },
    thermalProfile: {
      oven_type: "Deck oven with steam injection (mandatory for authentic results)",
      heat_distribution: "Bottom conduction from stone, top radiation, steam convection",
      crust_development: "Thin, crispy, with deep golden brown caramelization (Maillard reaction)",
      crumb_structure: "Open and irregular (Alvéolage sauvage) with translucent walls"
    },
    fermentationScience: {
      yeast_activity: "Controlled; often using cold retard (Pointage en bac) to foster amino acid production",
      ph_target: "pH 5.4 - 5.6",
      organic_acids: "Lactic-dominant if using poolish; more complex acetic notes if using levain de pâte",
      enzymatic_activity: "High alpha-amylase activity is desired to provide sugars for the crust color and crusty texture"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Master the 'coupe de lame' (scoring)",
        explanation: "Score the baguette with a slight overlap (about 1/3) and keep the blade at a 30-degree angle. This creates the 'ear' of the crust and allows the bread to expand upwards rather than sideways."
      },
      {
        tip: "Steam is the secret to the shine",
        explanation: "Without steam, the crust becomes dull and grey. Steam gelatinizes the surface starches, creating that polished, golden, shattering crust that makes a baguette 'tradition'."
      },
      {
        tip: "Don't fear the autolyse",
        explanation: "Giving the flour and water time to sit before adding salt/yeast significantly reduces kneading time, which prevents oxygenating the dough too much and ruining the wheat's natural yellow pigments and flavor."
      },
      {
        tip: "Check the 'quignon' (end piece)",
        explanation: "The ends of the baguette should be slightly pointed for 'baguette' and rounded for 'pain'. In France, it's a social ritual to tear off and eat the quignon on the walk home from the bakery."
      },
      {
        tip: "Flour choice matters more than anything",
        explanation: "Using high-protein American bread flour will result in a chewy, tough baguette. Use French T55 or a blend that mimics its properties (approx 11% protein, moderate strength)."
      }
    ],
    what_if: [
      {
        scenario: "The baguette is flat and has no ears (grignes)",
        result: "Under-proofing or insufficient steam during the first 5 mins of baking",
        correction: "Extend the final proof and ensure your steam system is producing heavy mist. Score more decisively."
      },
      {
        scenario: "The crumb is dense like sandwich bread",
        result: "Over-kneading or too low hydration",
        correction: "Reduce kneading time (use more folds instead) and ensure hydration is at least 68-70%."
      },
      {
        scenario: "The crust is thick and hard like a shell",
        result: "Oven temperature was too low or bake time too long",
        correction: "Bake at a higher initial temperature (460-480°F) to set the crust quickly and retain interior moisture."
      },
      {
        scenario: "Dough sticks to everything during shaping",
        result: "Insufficient bulk fermentation or poor shaping technique",
        correction: "Don't skip the folds during bulk fermentation; use just enough flour to touch the dough, not to coat it."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Ciabatta",
        difference: "Baguette is elongated and crustier; Ciabatta is flatter with even higher hydration and much larger holes",
        why_choose_this: "Choose Baguette for iconic crispy texture and versatility in sandwiches."
      },
      {
        target_style: "Italian Bread",
        difference: "Baguette is thinner and crispier with a more open crumb; Italian loaves are often wider and softer",
        why_choose_this: "Choose Baguette for higher crust-to-crumb ratio and artisanal prestige."
      },
      {
        target_style: "Sourdough Boule",
        difference: "Baguette usually uses commercial yeast (poolish/direct) for a cleaner wheat flavor vs the acidic bite of sourdough",
        why_choose_this: "Choose Baguette when you want a lighter, neutral carrier for delicate cheeses and butter."
      }
    ],
    q_and_a: [
      {
        question: "What makes a baguette 'tradition' vs regular baguette?",
        answer: "A 'Baguette de Tradition Française' is legally protected by the 1993 French Bread Decree. It must contain only four ingredients (flour, water, salt, yeast/leaven) with no additives or preservatives. Regular baguettes can use industrial dough conditioners and enzymes.",
        context: "Legal/Quality"
      },
      {
        question: "Why did UNESCO recognize the baguette?",
        answer: "UNESCO recognized the 'artisanal know-how and culture' of the baguette in 2022 as part of the world's intangible cultural heritage, celebrating its role in French social identity and craftsmanship.",
        context: "History"
      },
      {
        question: "How should I store my baguette?",
        answer: "Never refrigerate bread! It accelerates the staling process. Store room temperature in a paper bag. It is best eaten within 6 hours of baking. If it's a day old, sprinkle with water and bake for 5 mins to refresh.",
        context: "Storage"
      },
      {
        question: "Why is my baguette crust soft after cooling?",
        answer: "This is usually caused by 'moisture migration' from the crumb to the crust. Increasing the bake time slightly or allowing the bread to cool in a drafty area can help keep it crispy longer.",
        context: "Quality Control"
      },
      {
        question: "What is poolish and do I need it?",
        answer: "Poolish is a 1:1 mixture of flour and water with a tiny bit of yeast. It improves the extensibility of the baguette and adds a nutty, sweet flavor that isn't found in a simple direct dough.",
        context: "Technique"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Used for high-turnover daily production, but flavor is less complex than preferment versions."
      },
      {
        method: "Hybrid",
        suitability: "Ideal",
        notes: "Using a small amount of poolish or old dough (pâte fermentée) with fresh yeast is the gold standard for French Tradition."
      },
      {
        method: "Sourdough",
        suitability: "Possible",
        notes: "Known as 'Baguette au Levain'. Changes the flavor profile to be more acidic and the crust to be thicker."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Traditional Baguettes target 68-72% hydration. This is high enough to produce a light, open crumb (alvéolage) but low enough to allow the high-tension shaping required for the baguette's iconic length without the dough collapsing into a flat puddle.",
    methodSuitability: {
      direct: { suitable: true, notes: "Reliable, but requires very high-quality flour to achieve good flavor." },
      biga: { suitable: false, notes: "Biga adds too much tenacity; baguettes needs extensibility to stretch to 60cm." },
      poolish: { suitable: true, notes: "The preferred preferment for French artisan baguettes. Enhances extensibility and aroma." }
    },
    whatIf: [
      {
        scenario: "You use 75% hydration with T55 flour",
        outcome: "The dough will be very difficult to score cleanly and may lack 'ear' development",
        solution: "Reduce hydration to 68% or add a few more folds to build strength"
      },
      {
        scenario: "You omit the steam injection",
        outcome: "The baguette will be dull, have a thick grey crust, and very small volume",
        solution: "Use a cast iron pan with lava rocks and add hot water at the exact moment the bread goes in"
      },
      {
        scenario: "You proof in a drafty room",
        outcome: "A skin will form on the dough, causing it to tear awkwardly rather than expand at the scores",
        solution: "Keep proofing dough covered or in a humidity-controlled 'couche' (linen cloth)"
      }
    ],
    comparisons: [
      {
        vsStyle: "Baguette Ordinaire",
        difference: "Ordinaire contains additives/enzymes and is often mixed with high-speed mixers, leading to a white, odorless crumb vs the cream-colored, aromatic Tradition."
      },
      {
        vsStyle: "Viennoise",
        difference: "Viennoise contains milk, sugar, and fat (enrichment) making it soft and sweet, unlike the lean Tradition."
      }
    ],
    proTips: [
      "Use a baker's couche (unbleached linen) for proofing to keep the baguettes' shape and wick away surface moisture for a better crust",
      "The Maillard reaction is your friend—don't be afraid of a 'well baked' (bien cuite) dark golden crust",
      "Always allow the poolish to bubble and collapse slightly before using it in the final mix",
      "In the 'Coupe du Monde de la Boulangerie' (World Bakery Cup), the baguette is the ultimate test of a baker's skill",
      "If you listen closely, a perfect baguette 'sings' (crackles) as it cools on the rack"
    ]
  },

  tags: ["french", "baguette", "unesco", "artisan bread", "lean dough"],

  watchouts: [
    "Over-proofing causes flat, dense bread without proper rise",
    "Insufficient steam results in pale, thick crust instead of crispy golden",
    "Wrong flour type creates texture that's too soft or too tough",
    "Dull scoring leads to internal pressure blowouts on the side",
    "Cold dough when shaping will resist elongation"
  ],

  notes: [
    "UNESCO Intangible Cultural Heritage (2022) recognition",
    "Contains only 4 ingredients: Wheat flour, water, salt, yeast/leaven",
    "Must be made on-site to be called 'Boulangerie' in France",
    "Shape is approx 5-6cm wide and 55-65cm long",
    "Traditional scoring is an odd number (usually 5 or 7 cuts)"
  ],

  recommendedFlavorComponents: ["salted_butter_normandy", "brie_de_meaux", "malt_powder"],

  references: [
    {
      source: "UNESCO - Baguette culture and know-how",
      url: "https://ich.unesco.org/en/RL/artisanal-know-how-and-culture-of-baguette-bread-01883"
    },
    {
      source: "Legifrance - Décret n°93-1074 (Bread Decree)",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000727648/"
    },
    {
      source: "Le Cordon Bleu - The History of the Baguette",
      url: "https://www.cordonbleu.edu/news/history-of-the-baguette/en"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/baguette-tradition-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  }
};
