import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PÃO FRANCÊS (BRAZILIAN BREAD ROLL)
 * 
 * Researched and validated content:
 * - Origin: Brazil (19th-20th c. adaptation of Baguette)
 * - Technique: Intensive kneading (ponto de véu), steam injection, 'pestana' cut
 * - Ingredients: Wheat flour, malt/improver, sugar (1%), fat (1%)
 * - Character: Brittle crispy crust ('vidro quebrado'), airy miolo (crumb)
 */
export const pao_frances_brazil: DoughStyleDefinition = {
  id: "pao_frances_brazil",
  name: "Pão Francês (Brazil)",
  category: "bread",
  recipeStyle: RecipeStyle.PAO_FRANCES,
  family: "Brazilian Professional Bakery",

  origin: {
    country: "Brazil",
    region: "Nationwide",
    period: "Early 20th Century"
  },

  description: "Pão Francês is the undisputed king of Brazilian bakeries. Despite its name, it is a uniquely Brazilian creation, inspired by European baguettes but adapted to local flour and climate. It is famous for its thin, golden, and brittle crispy crust—which should shatter like glass when bitten—and its remarkably light, soft, and airy interior (miolo). It is characterized by the 'pestana', a deep ear-like opening on the top surface.",

  history: "The origins of Pão Francês date back to the early 20th century when the Brazilian elite returned from trips to Europe (primarily France) and requested their local bakers (often Portuguese immigrants) to replicate the short, crispy rolls they had encountered. Lacking the specific French flour and wood-fired steam ovens of the time, Brazilian bakers developed a new technique involving small amounts of sugar and fat to assist with color and crust texture. Over time, it became a standardized product across Brazil, with a specific weight (50g) and a set of quality criteria established by the ABNT (Brazilian Association of Technical Standards) in 2013.",

  difficulty: "Medium",
  fermentationType: "direct",

  base_formula: [
    { name: "Strong Wheat Flour (W280-330)", percentage: 100 },
    { name: "Water (ice-cold)", percentage: 60 },
    { name: "Salt", percentage: 2 },
    { name: "Sugar", percentage: 1 },
    { name: "Margarine, Lard or Vegetable Fat", percentage: 1 },
    { name: "Fresh Yeast", percentage: 3 },
    { name: "Malt or Bread Improver", percentage: 1 }
  ],

  technicalProfile: {
    hydration: [58, 65],
    salt: [1.8, 2.2],
    oil: [1, 2],
    sugar: [1, 2],
    flourStrength: "Brazilian Type 1 or Bread Flour (10-12% protein, W250-320)",
    ovenTemp: [220, 240],
    recommendedUse: [
      "Pão com manteiga (griddled with butter)",
      "Misto Quente (grilled ham and cheese)",
      "Accompaniment for coffee with milk ('Café com Leite')"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 65, min: 50, max: 70 },
    fermentationSteps: [
      "Mix: Combine flours, sugar, malt, and fat. Add ice-cold water slowly. [Science: Ice water is critical to prevent the dough from heating up during intensive mechanical mixing]",
      "Intensive Kneading: Mix at high speed until the 'Ponto de Véu' (windowpane test) is reached. [Science: A perfectly developed gluten network is essential to hold the CO2 and support the 'pestana' expansion]",
      "Rest/First Rise: Short rest of 15-20 minutes. [Science: Relaxes the gluten tension before shaping]",
      "Division & Shaping: Portion into small rolls (usually 65g) and roll into cylinders with a slight taper. [Science: Tight rolling creates the surface tension needed for the crust to snap]",
      "Final Proof: 60-90 minutes at 30°C and 80% humidity. [Science: Humidity prevents the surface from drying out, which would block the 'pestana' from opening]",
      "Cutting (Pestana): Make one deep longitudinal cut with a sharp blade. [Science: Directs the expansion and prevents the bread from cracking elsewhere]",
      "Baking with Steam: 12-15 minutes at 230°C with 5-10 seconds of direct steam injection at the start. [Science: Steam gelatinizes surface starches, creating the thin, golden, brittle 'glassy' crust]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W280-320 (Strong)",
      pl_ratio: "0.50-0.60 (Balanced)",
      absorption_capacity: "Moderate (60%)",
      protein_type: "Strong soft wheat blend",
      science_explanation: "The flour must have enough strength to withstand the intensive mechanical mixing 'ponto de véu' without the gluten cage breaking down."
    },
    thermalProfile: {
      oven_type: "Rotary or Deck oven with high-volume steam",
      heat_distribution: "High convection, rapid steam surge",
      crust_development: "Thin, pale-gold, brittle ('vidro quebrado' or broken glass effect)",
      crumb_structure: "Cotton-soft, white, fine and consistent alveolation"
    },
    fermentationScience: {
      yeast_activity: "Rapid/High (due to significant yeast and sugar dosage)",
      ph_target: "pH 5.4-5.6",
      organic_acids: "Low; focus is on the sweet, wheaty, and toasted-malt aroma",
      enzymatic_activity: "Boosted by improvers (alpha-amylase) to ensure maximum volume and crust crispness"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Steam is 90% of the crust",
        explanation: "Without a heavy surge of steam in the first 10 seconds, you will never get the 'vidro quebrado' (broken glass) texture."
      },
      {
        tip: "The ice-cold water secret",
        explanation: "Brazilian bakeries use ice-cold water during mixing to keep the dough at 22-24°C despite the heat of the mixer."
      },
      {
        tip: "Look for the 'Ponto de Véu'",
        explanation: "The dough must be mixed until it can be stretched into a translucent windowpane."
      },
      {
        tip: "The Angle of the Cut",
        explanation: "Hold your blade at a 30-degree angle to the surface of the bread to create the 'leaf' effect of the pestana."
      },
      {
        tip: "Malt for the Color",
        explanation: "Adding 1% barley malt helps achieve that specific golden-straw color."
      }
    ],
    what_if: [
      {
        scenario: "The bread is heavy and doesn't have an 'ear' (pestana)",
        result: "Under-mixed or not enough steam",
        correction: "Ensure the 'ponto de véu' is reached and check your steam surge."
      },
      {
        scenario: "The crust is thick and hard",
        result: "Bake time was too long or temperature was too low",
        correction: "Increase the heat and shorten the bake to 12-15 minutes."
      },
      {
        scenario: "The inside (miolo) has holes that are too large",
        result: "Too much hydration or over-proofing",
        correction: "Keep hydration at 60% and monitor the final proof."
      },
      {
        scenario: "The bread deflates when cutting",
        result: "Over-proofed",
        correction: "Cut the bread earlier when it still has some resistance."
      }
    ],
    comparative_analysis: [
      {
        target_style: "French Baguette",
        difference: "Baguette is longer, leaner, and has a thicker crust. Pão Francês is small, soft, and slightly enriched.",
        why_choose_this: "Choose Pão Francês for the ultimate breakfast roll."
      },
      {
        target_style: "Bánh Mì",
        difference: "Bánh mì often uses rice flour for a thinner crust; Pão Francês relies on high-speed mixing.",
        why_choose_this: "Choose Pão Francês for a wheat-focused soft crumb."
      },
      {
        target_style: "Portuguese Carcaça",
        difference: "Carcaças are heartier and the ancestors of this style.",
        why_choose_this: "Choose Pão Francês for a standardized, commercial lightness."
      }
    ],
    q_and_a: [
      {
        question: "Why is it called 'French' if it was made in Brazil?",
        answer: "It was a 'French-inspired' elite bread in the 19th/20th century.",
        context: "History"
      },
      {
        question: "What is an 'improver' (melhorador)?",
        answer: "A blend of enzymes and antioxidants that help volume and crust texture.",
        context: "Ingredients"
      },
      {
        question: "Why 50 grams?",
        answer: "It's the industry standard in Brazil for a single 'pãozinho'.",
        context: "Culture"
      },
      {
        question: "Can I make this without steam?",
        answer: "No. Without steam, the crust will be dull and leathery.",
        context: "Technique"
      },
      {
        question: "Is it okay to use butter?",
        answer: "Yes, but bakeries use vegetable fat for cost and consistency.",
        context: "Ingredients"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Most common in high-volume bakeries. Fast and consistent."
      },
      {
        method: "Biga",
        suitability: "Ideal",
        notes: "Traditionally a sponge; adds complexity and aroma."
      },
      {
        method: "Hybrid",
        suitability: "Possible",
        notes: "Often used for overnight cold fermentation in bakeries."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "At 60%, the dough is stiff enough to support the 'pestana' expansion.",
    methodSuitability: {
      direct: { suitable: true, notes: "Reliable for the 50g roll format." },
      biga: { suitable: true, notes: "Adds great crust aroma." },
      poolish: { suitable: true, notes: "Excellent for the cotton-soft interior." }
    },
    whatIf: [
      {
        scenario: "You omit the sugar and fat",
        outcome: "The bread will be very pale and will dry out quickly.",
        solution: "These ingredients are functional; always include at least 1%."
      }
    ],
    comparisons: [
      {
        vsStyle: "Pão de Sal vs Baguette",
        difference: "Pão de Sal is meant to be eaten fresh/warm; Baguettes have longer shelf-life."
      }
    ],
    proTips: [
      "Spray with water twice for an extra-thin crust.",
      "Eat within 4 hours for maximum crunch.",
      "Use a curved blade for the best pestana.",
      "Internal temp should reach 93°C."
    ]
  },

  tags: ["pao-frances", "brazilian", "cacetinho", "pao-de-sal", "breakfast-roll"],

  watchouts: [
    "Dough too warm? It will smell like yeast and stay soft.",
    "Not enough kneading? The miolo will be crumbly.",
    "Blunt blade? It will tear the dough.",
    "No steam? No crunch."
  ],

  notes: [
    "Most consumed bread in Brazil.",
    "Standard weight is 50g.",
    "Also called 'Cacetinho' or 'Pão de Sal'.",
    "Pestana is the indicator of quality.",
    "Ideally eaten 'quente na hora'."
  ],

  references: [
    {
      source: "ABNT NBR 16170 (Official Standard for Pão Francês)",
      url: "https://www.abntcatalogo.com.br/norma.aspx?ID=305710"
    },
    {
      source: "SENAI Alimentos - Tecnologia de Panificação",
      url: "https://alimentos.sp.senai.br/"
    },
    {
      source: "ABIP - Indústria de Panificação",
      url: "https://www.abip.org.br/"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/pao-frances-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "mozzarella_low_moisture", "proscuitto_crudo", "malt_powder"]
};
