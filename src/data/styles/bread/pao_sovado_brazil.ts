import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PÃO SOVADO (BRAZILIAN ROLLED BREAD)
 * 
 * Researched and validated content:
 * - Origin: Brazil (Legacy of Portuguese immigrants using the 'Cilindro' machine)
 * - Technique: Intensive mechanical degasification (Cilindrado), low fermentation
 * - Ingredients: Strong flour, high sugar (10%), Fat (8%), Eggs
 * - Characteristics: Extremely dense, velvet 'shreddy' crumb with NO visible bubbles (alveoli)
 */
export const pao_sovado_brazil: DoughStyleDefinition = {
  id: "pao_sovado_brazil",
  name: "Pão Sovado (Brazilian Rolled Bread)",
  category: "bread",
  recipeStyle: RecipeStyle.SANDWICH_LOAF,
  family: "Brazilian Professional Bakery",

  origin: {
    country: "Brazil",
    region: "Nationwide (Strongest in Southeast/São Paulo)",
    period: "Early 20th Century"
  },

  description: "Pão Sovado is the masterpiece of the 'Cilindro' technique. Unlike any Western bread that celebrates air bubbles, the Sovado celebrates the absence of them. Through a process of intensive mechanical rolling (Sovagem), the gluten is forced into sheets and every single air pocket is removed. The result is a bread with a density similar to cake, a semi-sweet flavor, and a 'shreddy' texture that peels off in thin, silky slices.",

  history: "The term 'Sovado' comes from 'Sovar' (to knead/punish). It evolved from the Portuguese 'Pão de Leite', but Brazilian bakers in the 1900s began using heavy steel rollers (Cilindros) to improve efficiency. They discovered that by passing the dough 20-30 times through these rollers, they could achieve a level of crumb refinement impossible by hand. Today, it is a staple of 'Café da Tarde' (afternoon coffee) across Brazil, often identified by its deep, cross-shaped cuts on the top.",

  difficulty: "Hard",
  fermentationType: "direct",

  base_formula: [
    { name: "Strong Wheat Flour (W300+)", percentage: 100 },
    { name: "Whole Milk (Cold)", percentage: 45 },
    { name: "Sugar", percentage: 12 },
    { name: "Margarine or Butter", percentage: 8 },
    { name: "Whole Eggs", percentage: 10 },
    { name: "Fresh Yeast", percentage: 4 },
    { name: "Sea Salt", percentage: 1.8 },
    { name: "Bread Improver (optional)", percentage: 1 }
  ],

  technicalProfile: {
    hydration: [55, 62], // Low hydration is necessary so the dough doesn't stick to the steel rollers
    salt: [1.5, 2.0],
    oil: [6, 10], // Margarine is traditional for that 'bakery' flavor, but butter is premium
    sugar: [10, 15],
    flourStrength: "High-quality Bread Flour (W300-340). It must survive the 'torture' of the rollers",
    ovenTemp: [170, 190], // Moderate heat to cook the dense center without burning the crust
    recommendedUse: [
      "Traditional Afternoon Tea",
      "Ham and Cheese grilled sandwich",
      "Toast with thick salted butter"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 500, min: 300, max: 1000 },
    fermentationSteps: [
      "Initial Mix: Combine ingredients and mix until just homogeneous. Keep the dough cold. [Science: Heat during mixing is the enemy of the Cilindro method]",
      "The Cilindro (Sovagem): Pass the dough through steel rollers 25-35 times, folding it over itself each time. [Science: This mechanical action completely degasses the dough and aligns the gluten fibers into sheets, creating the 'bubble-free' crumb]",
      "Resting: Let the sheets of dough rest for 10 mins. [Science: Relaxes the massive tension built during rolling]",
      "Shaping: Roll tightly into a cylinder. The surface must be perfectly smooth. [Science: Prevents large cracks during the oven spring]",
      "Final Proof: Proof for 60-90 minutes at 30°C. [Science: We want a slow, controlled rise that creates tiny, uniform gas cells rather than large ones]",
      "The Cross Cut: Make a deep 'X' or longitudinal cut. Brush with egg wash. [Science: Allows the dense mass to expand without bursting at the sides]",
      "Baking: Bake for 30-40 minutes. [Science: The dense crumb takes a long time for heat to reach the core; internal temp must hit 94°C]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W300-340 (Strong)",
      pl_ratio: "0.60 (Relatively Tenacious)",
      absorption_capacity: "Moderate",
      protein_type: "Strongest soft wheat varieties",
      science_explanation: "Weak flour will literally shred and disintegrate under the pressure of the steel rollers. A high P/L ratio ensures the dough maintains its shape after the 30th pass."
    },
    thermalProfile: {
      oven_type: "Rotary or Convection Oven",
      heat_distribution: "Moderate but deep penetration",
      crust_development: "Thin, soft, slightly flexible, and dull-glossy (mahogany color)",
      crumb_structure: "Microscopic alveolation; feels like a soft sponge or velvet; 'shreddy'"
    },
    fermentationScience: {
      yeast_activity: "Moderate; specifically suppressed by the high sugar and mechanical degasification",
      ph_target: "pH 5.4 - 5.6",
      organic_acids: "Low; aroma is mostly 'cooked milk' and 'sweet wheat'",
      enzymatic_activity: "Minimal; the structure is mechanical rather than enzymatic."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Fold, don't Pile",
        explanation: "When using the Cilindro, always fold the dough in the same direction. This creates the 'lamination' of the gluten that produces the shredding effect."
      },
      {
        tip: "Egg Wash with Milk",
        explanation: "Mix 1 yolk with 1 tbsp of milk for the perfect 'Pão Sovado finish'—rich, golden, and not too shiny."
      },
      {
        tip: "Use Ice",
        explanation: "If your kitchen is hot, use ice in the milk. If the dough starts fermenting while in the rollers, the crumb structure will be ruined by large bubbles."
      },
      {
        tip: "The 30-Pass Rule",
        explanation: "Professional Sovado is only ready when the dough surface looks like 'skin'—perfectly smooth and slightly glossy."
      },
      {
        tip: "Add a touch of Vanilla",
        explanation: "In many interior regions of Brazil, a tiny drop of vanilla essence is added to 'Pão Sovado' to enhance the afternoon tea experience."
      }
    ],
    what_if: [
      {
        scenario: "The bread has large holes in the middle",
        result: "Not enough passes through the rollers or over-proofing",
        correction: "Increase the number of passes through the Cilindro and shorten the proofing time."
      },
      {
        scenario: "The bread is tough and rubbery",
        result: "Flour was too strong or hydration was too low",
        correction: "Increase milk hydration by 2-3% or use a slightly weaker flour (Type 1)."
      },
      {
        scenario: "The bread didn't rise and is tiny",
        result: "Yeast died due to friction heat in the rollers",
        correction: "Ensure the dough stays under 24°C during the rolling process."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Pão de Leite",
        difference: "Pão de Leite is airy and light; Pão Sovado is dense and mechanical. Sovado has a much tighter crumb.",
        why_choose_this: "Choose Sovado for the ultimate dense sandwich experience."
      },
      {
        target_style: "Hokkaido Milk Bread",
        difference: "Hokkaido uses Tangzhong for softness; Sovado uses the Cilindro for density. Both are 'shreddy' but in completely different ways.",
        why_choose_this: "Choose Sovado if you want a firmer, traditional Brazilian texture."
      },
      {
        target_style: "Pullman Loaf",
        difference: "Pullman is a standard commercial mix; Sovado is a high-fat, high-sugar specialty loaf with mechanical refinement.",
        why_choose_this: "Choose Sovado for superior flavor and texture."
      }
    ],
    q_and_a: [
      {
        question: "Can I make this without a Cilindro?",
        answer: "It's extremely difficult. You can use a pasta roller or a rolling pin, but it takes massive physical effort to reach the required level of degassing.",
        context: "Technique"
      },
      {
        question: "Why Margarine?",
        answer: "Historically, it provided a specific 'buttery-artificial' aroma associated with Brazilian town bakeries. Butter is better, but margarine is 'authentic'.",
        context: "Tradition"
      },
      {
        question: "Is it a pound cake?",
        answer: "No, it's 100% bread, but the density is indeed cake-like. It is meant to be sliced and spread with butter or jelly.",
        context: "Classification"
      },
      {
        question: "What is 'Cacetinho' vs 'Sovado'?",
        answer: "Cacetinho is the light, crusty Pão Francês. Sovado is the soft, dense, enriched loaf.",
        context: "Linguistics"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "The industry standard; allows for the mechanical work to be the focus."
      },
      {
        method: "Biga",
        suitability: "Possible",
        notes: "Used in artisan bakeries to add some 'old-world' acidity to the sweet dough."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Hydration must be kept below 62%. If it's too high, the dough becomes sticky and impossible to pass through the steel rollers of the Cilindro.",
    methodSuitability: {
      direct: { suitable: true, notes: "Reliable for dense structure." },
      biga: { suitable: true, notes: "Adds complexity to the 'shred'." },
      poolish: { suitable: false, notes: "Too extensible; makes the dough difficult to roll." }
    },
    whatIf: [
      {
        scenario: "You use 0% fat",
        outcome: "The bread will be incredibly tough and won't have the signature 'melting' density.",
        solution: "Fat is mandatory to lubricate the gluten sheets in a dense loaf."
      }
    ],
    comparisons: [
      {
        vsStyle: "Sovado vs Brioche",
        difference: "Brioche relies on air bubbles for lightness; Sovado relies on the absence of air for a velvety feel."
      }
    ],
    proTips: [
      "A pinch of Turmeric (0.1%) gives the crumb that 'premium egg-heavy' yellow look preferred in bakeries.",
      "Steam the oven briefly (only 2 seconds) to help the 'X' cut open without making the crust hard.",
      "Store in a paper bag for 2 hours, then move to plastic; this keeps the crust soft.",
      "Serve thick slices griddled with 'Requeijão na Chapa'.",
      "The best Sovado is heavy for its size—if it feels light, it has too much air."
    ]
  },

  tags: ["pao-sovado", "brazilian", "enriched-bread", "dense", "shreddy", "bakery"],

  watchouts: [
    "Friction heat in the mixer/roller can kill the yeast.",
    "Not enough passes through the roller = bread with holes.",
    "Over-baking makes it dry like a biscuit.",
    "Under-kneading results in a crumbly mess."
  ],

  notes: [
    "The soul of the Brazilian bakery (Padaria).",
    "Uses the 'Cilindro' mechanical technique.",
    "No visible air bubbles in the crumb.",
    "High sugar and fat enrichment.",
    "Requires high-protein (W300+) flour."
  ],

  references: [
    {
      source: "Pão Nosso",
      url: "https://www.amazon.com/Pao-Nosso-receitas-tecnicas-panificacao-caseira/dp/8565339233",
      author: "Luiz Américo Camargo",
      year: "2017"
    },
    {
      source: "Manual Tecnológico de Panificação SENAI",
      url: "https://alimentos.sp.senai.br/",
      author: "SENAI SP",
      year: "2020"
    },
    {
      source: "ABIP - Associação Brasileira da Indústria de Panificação",
      url: "https://www.abip.org.br/",
      author: "ABIP Team",
      year: "2022"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/pao-sovado-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "requeijao_cremoso", "minas_cheese"]
};
