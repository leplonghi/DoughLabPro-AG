import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * FOCACCIA GENOVESE (FUGASSA)
 * 
 * Researched and validated content:
 * - Origin: Genoa, Liguria (Italy)
 * - Technique: Triple proofing, salamoia (brine) application, deep dimpling (oeggi)
 * - Ingredients: Soft wheat flour, malt, high-quality extra virgin olive oil
 * - Science: Brine prevents surface drying and creates the texture contrast
 */
export const focaccia_genovese: DoughStyleDefinition = {
  id: "focaccia_genovese",
  name: "Focaccia Genovese",
  category: "bread",
  recipeStyle: RecipeStyle.FOCACCIA,
  family: "Italian Rustic Flatbread",

  origin: {
    country: "Italy",
    region: "Genoa, Liguria",
    period: "Renaissance origins, formalized in 19th century"
  },

  description: "Focaccia Genovese, known locally as 'Fugassa', is the iconic flatbread of Genoa. It is characterized by its golden, crispy exterior and remarkably soft, spongy interior. Its most defining feature is the 'salamoia' (brine) that pools in deep fingertip dimples, creating a contrast of salty, oily, and airy textures.",

  history: "The term 'focaccia' derives from the Latin 'focus' (hearth), referring to flatbreads baked in the ashes. In Genoa, focaccia became a staple of the working class and sailors due to its shelf life and caloric density. By the Renaissance, it was so popular that it was frequently consumed during wedding masses, leading the Church to briefly ban it inside places of worship. The modern 19th-century version focuses on high-quality Ligurian olive oil and the specific triple-proofing technique that differentiates it from thicker, breadier versions found elsewhere in Italy. In 1996, the 'Marchio Collettivo' (Collective Mark) was established to protect the authentic Genoese recipe.",

  difficulty: "Medium",
  fermentationType: "direct", // Usually direct with long rests, though preferments are possible

  base_formula: [
    { name: "Type 0 or 00 Flour (medium strength)", percentage: 100 },
    { name: "Water", percentage: 60 },
    { name: "Salt", percentage: 2.5 },
    { name: "Extra Virgin Olive Oil", percentage: 10 },
    { name: "Malt Extract (or honey)", percentage: 2 },
    { name: "Fresh Yeast", percentage: 3 }
  ],

  technicalProfile: {
    hydration: [55, 65], // Internal; surface brine adds effective moisture
    salt: [2.5, 3],
    oil: [8, 12],
    sugar: [1, 2], // Usually as malt
    flourStrength: "Medium-strength Type 0 flour (11-12% protein, W240-280)",
    ovenTemp: [220, 240],
    recommendedUse: [
      "Morning breakfast dipped in caffè latte (Genoese tradition)",
      "Accompaniment for wine (Giancu de Pua)",
      "Sandwich base for Mortadella or Prosciutto"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 600, min: 400, max: 1000 }, // Based on pan size
    fermentationSteps: [
      "Mix: Combine flour, water, malt, half the oil, and yeast. Add salt halfway through mixing. [Science: Malt provides simple sugars for rapid yeast activation and deep crust color]",
      "Bulk Rest: 30-60 minutes at room temperature. [Science: Initial gluten relaxation before the first stretch]",
      "Pan Stretch: Place in generously oiled pan and stretch. If it resists, rest 15 mins and repeat. [Science: Gluten memory requires relaxation to fill corners without tearing]",
      "Intermediate Proof: 60-90 minutes in the pan until doubled. [Science: Dough builds volume and air pockets before dimpling]",
      "Dimpling & Brine: Deeply dimple with fingertips and pour 'salamoia' (emulsion of water, salt, and oil) over the top. [Science: Brine pools in dimples, preventing the surface from hardening too early and creating the 'eyes' (oeggi)]",
      "Final Proof: 45-60 minutes until brine is partially absorbed. [Science: Moisture migrates into the top layer of dough for a spongy-crisp finish]",
      "Bake: 12-15 minutes at high heat with a final brush of oil post-bake. [Science: High thermal mass of the pan fries the bottom while brine steams the top]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W240-280 (Medium)",
      pl_ratio: "0.50-0.60 (Extensible)",
      absorption_capacity: "Moderate (60-65%)",
      protein_type: "Soft wheat with high extensibility",
      science_explanation: "Focaccia doesn't need the massive strength of bread; it needs extensibility to spread into pan corners and enough protein to support the high oil and sugar (malt) content."
    },
    thermalProfile: {
      oven_type: "Electric deck or ventilated home oven",
      heat_distribution: "Bottom conduction from pan, top convection",
      crust_development: "Soft, golden, almost fried bottom; moist, salty top",
      crumb_structure: "Spongy, even, with large pools of oil and salt"
    },
    fermentationScience: {
      yeast_activity: "High (due to malt and high yeast ratio)",
      ph_target: "pH 5.4-5.6",
      organic_acids: "Mostly lactic, keeping the flavor sweet and wheaty",
      enzymatic_activity: "Alpha-amylase activity is critical for the characteristic hazelnut crust color"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Malt is the color secret",
        explanation: "Authentic Focaccia Genovese uses barley malt. It provides the essential sugars for the Maillard reaction at lower temperature/time, resulting in that unique hazelnut brown color without drying out the crumb."
      },
      {
        tip: "Dimple with the 'pads', not the 'tips'",
        explanation: "Use the pads of your first three fingers at an angle. You want to create deep wells (oeggi) without piercing through the dough to the pan bottom."
      },
      {
        tip: "The 1:1:1 Brine Ratio",
        explanation: "A good starting point for your salamoia is equal parts water and oil with 2.5% salt by weight of the water. Whisk until cloudy and pour immediately."
      },
      {
        tip: "The 'Caffè Latte' Test",
        explanation: "Try dipping a plain piece of focaccia in your morning coffee with milk. If the oil and salt perfectly balance the sweetness of the coffee, you've made true Fugassa."
      },
      {
        tip: "Wait for the 'Sizzle'",
        explanation: "When you pull it from the oven, brush it once more with EVOO. You should hear a slight sizzle as the crust absorbs the final hit of fat."
      }
    ],
    what_if: [
      {
        scenario: "The focaccia is too bready and tall",
        result: "Too much flour for the pan or over-proofing",
        correction: "Genoese focaccia should be under 2cm thick. Use less dough or a larger pan. Ensure the final proof in brine isn't too long."
      },
      {
        scenario: "The bottom is soft and greasy",
        result: "Oven temperature too low or not enough heat from the bottom",
        correction: "Place the pan on the lowest rack or directly on a preheated stone to fry the bottom crust."
      },
      {
        scenario: "The dimples disappear (smooth surface)",
        result: "Dimpling was too shallow or dough had too much tension",
        correction: "Dimple firmly until you feel the pan bottom. Let the dough relax longer before the final dimpling."
      },
      {
        scenario: "The top is too salty",
        result: "Salt in brine didn't dissolve or ratio was too high",
        correction: "Dissolve salt in the water before mixing with oil. Use a maximum of 30g salt per liter of brine water."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Focaccia Barese",
        difference: "Barese uses re-milled semolina and often includes potatoes in the dough; it's thicker and topped with tomatoes and olives.",
        why_choose_this: "Choose Genovese for a thinner, oilier, and more purist experience."
      },
      {
        target_style: "Sicilian Sfincione",
        difference: "Sfincione is much thicker, bread-like, and always topped with a rich tomato/onion/anchovy sauce.",
        why_choose_this: "Choose Genovese for the ultimate expression of olive oil and salt balance."
      },
      {
        target_style: "Pizza al Taglio",
        difference: "Pizza al Taglio is focused on structure and toppings; Focaccia Genovese is focused on the dough's own flavor and the brine interaction.",
        why_choose_this: "Choose Genovese when you want a versatile snack or table bread."
      }
    ],
    q_and_a: [
      {
        question: "Why do Genoese eat focaccia for breakfast?",
        answer: "It's a historical tradition. The salt and oil provide a high-energy start for dock workers and sailors, and the contrast with sweet coffee is a beloved local flavor profile.",
        context: "Culture"
      },
      {
        question: "Is it okay to use Rosemary?",
        answer: "While Rosemary is popular globally, the 'Classica' Genovese is just oil, salt, and malt. Adding herbs makes it 'Focaccia alle Erbe,' which is common but secondary to the plain classic.",
        context: "Tradition"
      },
      {
        question: "What is salamoia?",
        answer: "It's a brine made of water, salt, and extra virgin olive oil. It is applied just before the final proof to create the signature moist dimples and crispy peaks.",
        context: "Technique"
      },
      {
        question: "Why is malt extract important?",
        answer: "It accelerates fermentation and improves the crust's color and aroma via the Maillard reaction, which is essential for the short bake times of thin focaccia.",
        context: "Science"
      },
      {
        question: "Can I use butter instead of oil?",
        answer: "Absolutely not. Focaccia Genovese is defined by Extra Virgin Olive Oil. Butter would make it a different type of enriched bread altogether.",
        context: "Ingredients"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Most traditional for Genovese bakers. Relies on timing and malt for development."
      },
      {
        method: "Biga",
        suitability: "Possible",
        notes: "Can be used to add structural strength if pushing hydration higher than 70%."
      },
      {
        method: "Poolish",
        suitability: "Ideal",
        notes: "Excellent for home bakers to achieve a very extensible dough that fills the pan easily."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "While usually cited at 60-65% internal hydration, the 'effective' hydration of Focaccia Genovese is much higher due to the salamoia (brine). The water in the brine evaporates into the oven, creating a mini-steam chamber for the dough, while the salt and oil stay behind to season and fry the surface.",
    methodSuitability: {
      direct: { suitable: true, notes: "Reliable and fast." },
      biga: { suitable: true, notes: "Good for high-quality, long-lasting artisan versions." },
      poolish: { suitable: true, notes: "Best for maximum extensibility and airy interior." }
    },
    whatIf: [
      {
        scenario: "You skip the brine and just use oil",
        outcome: "The surface will be hard and dry; the salt will likely fall off. You miss the 'spongy-crisp' contrast.",
        solution: "Never skip the water in the surface application; it's the key to the 'Genoese' texture."
      },
      {
        scenario: "You use a cold pan",
        outcome: "The bottom will be pale and doughy.",
        solution: "Preheat the oven with a heavy tray or stone inside, or use a blue steel pan for best heat conduction."
      }
    ],
    comparisons: [
      {
        vsStyle: "Focaccia di Recco",
        difference: "Completely different style: Recco is unleavened, paper-thin, and filled with crescenza cheese. Genovese is leavened and spongy."
      }
    ],
    proTips: [
      "Lightly dust the top with flour AFTER brining but BEFORE baking for a rustic look.",
      "Use 3-finger pressure to create the oeggi.",
      "Ligurian olive oil (Taggiasca) is the gold standard.",
      "Don't be afraid of a long bake; color is flavor."
    ]
  },

  tags: ["focaccia", "genovese", "ligurian", "oil-bread", "classic-italian"],

  watchouts: [
    "Dough too cold when stretching will shrink back and create thick spots.",
    "Insufficient oil in the pan leads to a stuck, torn bottom.",
    "Oven too cold creates a bready, dry texture without the 'fry'.",
    "Not dissolving salt in brine leads to 'salt spots' instead of even seasoning."
  ],

  notes: [
    "Fugassa in Ligurian dialect means 'flatbread baked on the focus'.",
    "Dimples are called 'oeggi' (eyes).",
    "Malt extract is non-negotiable for the traditional hazelnut color.",
    "Pairs perfectly with a glass of Vermentino or Pigato wine.",
    "Originally a survival food for sailors."
  ],

  references: [
    {
      source: "Consorzio Focaccia Genovese - Official Recipe",
      url: "https://www.panificatori.it/consorzio-focaccia-genovese/"
    },
    {
      source: "Modernist Bread (Genoese Focaccia Profile)",
      url: "https://modernistcuisine.com/books/modernist-bread/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2017"
    },
    {
      source: "Cucinare in Liguria",
      url: "https://www.amazon.it/Cucinare-Liguria-Ricette-Liguri-Tradizionali/dp/8876483562",
      author: "Enzo Rossi",
      year: "1995"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/focaccia-genovese-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["olive_oil_extra_virgin", "rosemary_fresh", "garlic_fresh", "balsamic_modena", "burrata", "stracciatella"]
};
