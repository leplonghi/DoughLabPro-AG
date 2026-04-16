import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PÃO DE LEITE (BRAZILIAN MILK BREAD / PULL-APART)
 * 
 * Researched and validated content:
 * - Origin: Brazil (Commonly known as 'Bisnaguinha' or 'Pão de Leite de Padaria')
 * - Technique: Enrichment with Whole Milk/Milk Powder, Long proofing, Pull-apart format
 * - Ingredients: Whole milk, Butter/Margarine, Sugar (10%), Milk Powder (3%)
 * - Characteristics: Pillowy-soft, thin deep-golden glossy crust, buttery-milky aroma
 */
export const pao_de_leite_brazil: DoughStyleDefinition = {
  id: "pao_de_leite_brazil",
  name: "Pão de Leite (Brazilian Bakery Style)",
  category: "bread",
  recipeStyle: RecipeStyle.ENRICHED_LOAF,
  family: "Brazilian Professional Bakery",

  origin: {
    country: "Brazil",
    region: "Nationwide",
    period: "Mid-20th Century"
  },

  description: "Pão de Leite is the epitome of softness in the Brazilian bakery world. It is a highly enriched dough, characterized by its cloud-like lightness and a thin, mahogany-colored, shiny crust. Often sold as small individual rolls or as 'pull-apart' loaves where the sides remain white and soft, it is the most popular bread for children's lunches and for high-end hotel breakfast buffets in Brazil.",

  history: "Evolved from the European soft rolls introduced by Portuguese and German immigrants, the Brazilian version became distinct by its high sugar content and the intensive use of milk powder to achieve a specific 'creamy' aroma. In the 1980s, industrial versions like the 'Bisnaguinha' became icons of Brazilian childhood, but the artisanal 'padaria' version remains the gold standard for its superior butter content and fresh milk profile.",

  difficulty: "Medium",
  fermentationType: "hybrid",

  base_formula: [
    { name: "Strong Wheat Flour (W250-280)", percentage: 100 },
    { name: "Whole Milk (Cold)", percentage: 50 },
    { name: "Sugar", percentage: 12 },
    { name: "Unsalted Butter (Softened)", percentage: 12 },
    { name: "Whole Milk Powder", percentage: 4 },
    { name: "Whole Egg", percentage: 10 },
    { name: "Sea Salt", percentage: 1.5 },
    { name: "Instant Yeast", percentage: 1.2 }
  ],

  technicalProfile: {
    hydration: [60, 68], // High moisture provided by milk and eggs
    salt: [1.2, 1.8],
    oil: [10, 15], // Strictly butter for premium results
    sugar: [10, 15],
    flourStrength: "Medium-Strong Bread Flour (W250-280). We want structure without the 'chewiness' of a pizza dough",
    ovenTemp: [170, 185], // Low temperature is vital to prevent the high-sugar dough from burning
    recommendedUse: [
      "Bisnaguinha (Child's lunch roll)",
      "Luxury Hot Dog buns",
      "Pull-apart rolls for breakfast"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 60, min: 30, max: 90 }, // Usually small individual rolls
    fermentationSteps: [
      "Mixing: Combine flour, milk, milk powder, sugar, and eggs. Mix until 70% gluten development or 'Windowpane' is just starting. [Science: Sugar and milk powder compete with gluten for moisture, so initial mixing takes longer]",
      "Fat Addition: Add softened butter in stages. Knead until a full, elastic windowpane is achieved. [Science: The butter's fats lubricate the gluten strands, ensuring the 'cloud' texture]",
      "Bulk Proof: 1 hour at room temperature or 12 hours in the fridge. [Science: Cold proofing develops the lactic-acid notes that enhance the milky profile]",
      "Shaping: Form into small, tight balls or mini-logs. Place them close together on the tray. [Science: Placing them close together causes them to rise 'up' rather than 'out', resulting in the soft pull-apart sides]",
      "The Double Proof: Proof for 2-3 hours until tripled in size. [Science: The high sugar and fat make the dough heavy; it needs extra time to become truly airy]",
      "Egg Wash: Brush generously with a mix of egg yolk and cream. [Science: High protein and fat in the wash create the iconic mahogany shine]",
      "Baking: Bake for 12-15 minutes. [Science: Internal temp should hit 90°C. Over-baking will destroy the 'pillowy' moisture]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W250-280 (Medium-Strong)",
      pl_ratio: "0.50 (Highly Extensible)",
      absorption_capacity: "Moderate",
      protein_type: "Strong soft wheat",
      science_explanation: "Weak flour won't hold the 'lift' of the heavy dough; too strong will make it 'bready' and difficult to bite. W260 is the sweet spot for softness."
    },
    thermalProfile: {
      oven_type: "Conventional or Convection Oven",
      heat_distribution: "Moderate and uniform",
      crust_development: "Paper-thin, deep gold to mahogany, flexible and intensely shiny",
      crumb_structure: "Extremely fine, cotton-soft, and snow-white"
    },
    fermentationScience: {
      yeast_activity: "High; requires a strong yeast strain to handle the osmotic pressure of 12% sugar",
      ph_target: "pH 5.5 - 5.8",
      organic_acids: "Lactic-dominant from the milk and rest time",
      enzymatic_activity: "Protease activity is kept low by the fat, preserving the shape."
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Milk Powder is Mandatory",
        explanation: "Whole milk powder contains concentrated lactose and milk proteins that provide the specific 'Padaria' smell that plain milk cannot replicate."
      },
      {
        tip: "Pull-Apart for Softness",
        explanation: "By placing the rolls 1cm apart, they merge as they rise. This prevents the sides from forming a crust, keeping the entire loaf softer for longer."
      },
      {
        tip: "Don't skip the Egg Wash",
        explanation: "The visual identity of Pão de Leite is its high-gloss, dark-golden top. Without it, it looks like a standard dinner roll."
      },
      {
        tip: "Steam the Oven?",
        explanation: "NO. Steam creates a crusty, crunchy exterior. For Pão de Leite, you want a soft, skin-like crust. Skip the steam."
      },
      {
        tip: "Add a pinch of Nutmeg",
        explanation: "In high-end artisanal versions, a microscopic amount of nutmeg is added to the milk to deepen the creamy profile."
      }
    ],
    what_if: [
      {
        scenario: "The bread is dry and bready",
        result: "Flour was too strong or you over-baked it",
        correction: "Check your internal temperature (should be 88-90°C) and ensure you are using 'Softened' butter, not melted."
      },
      {
        scenario: "The dough is a sticky mess during shaping",
        result: "Butter was too warm or kitchen is too hot",
        correction: "Chill the dough in the fridge for 30 minutes before shaping. Cold dough is much easier to form into tight balls."
      },
      {
        scenario: "The rolls are pale and didn't brown",
        result: "Not enough sugar or oven temp was too low",
        correction: "Ensure at least 10% sugar (or honey) for the Maillard reaction. Use a dark-colored tray to absorb more bottom heat."
      },
      {
        scenario: "You replace 30% of the milk with cold mashed potato (Asterix/Russet variety)",
        result: "You get a 'Pão de Batata' variant — denser, more moisture-locked, slightly squidgy crumb that keeps for 3-4 days",
        correction: "Always use starchy (floury) potatoes, not waxy ones. Chill the mash before adding. Reduce yeast by 10% since potato starch boosts fermentation speed. Classic filling: Requeijão Cremoso piped cold into each ball before sealing."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Hokkaido Milk Bread",
        difference: "Hokkaido uses the Tangzhong method for extreme shredding; Brazilian Pão de Leite relies on high milk powder and simple-straight enrichment for a simpler, 'snackable' texture.",
        why_choose_this: "Choose Pão de Leite for small sliders and kids' sandwiches."
      },
      {
        target_style: "Brioche",
        difference: "Brioche is dominated by eggs and high fat (40%+); Pão de Leite is dominated by milk and moderate fat (12%).",
        why_choose_this: "Choose Pão de Leite when you want a lighter, more daily-bread taste."
      },
      {
        target_style: "Hawaiian Rolls",
        difference: "Hawaiian rolls use pineapple juice for tang; Pão de Leite is strictly creamy and milky.",
        why_choose_this: "Choose Pão de Leite for its pure dairy aroma."
      }
    ],
    q_and_a: [
      {
        question: "Can I use Water instead of Milk?",
        answer: "You can, but it won't be 'Pão de Leite'. The milk protein is what creates the unique, soft texture and the dark crust color.",
        context: "Ingredients"
      },
      {
        question: "Is it the same as 'Bisnaguinha'?",
        answer: "Bisnaguinha is the industrial, commercial version. The Padaria version is richer and uses real butter and fresh milk.",
        context: "Culture"
      },
      {
        question: "Why so much Sugar?",
        answer: "It's not just for sweetness; sugar is hygroscopic, meaning it traps water, which is what makes the bread feel 'moist' even after 2 days.",
        context: "Science"
      },
      {
        question: "Does it freeze well?",
        answer: "Yes! Because of the high fat and sugar content, it freezes and reheats perfectly without becoming dry.",
        context: "Storage"
      }
    ],
    fermentation_methods: [
      {
        method: "Hybrid",
        suitability: "Ideal",
        notes: "A bit of levain adds shelf-life, while yeast provides the necessary 'puffy' volume."
      },
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Standard for fast-turnover Brazilian bakeries."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Hydration (65%) is high for an enriched roll but necessary to compensate for the drying effect of the high sugar and milk powder concentrations.",
    methodSuitability: {
      direct: { suitable: true, notes: "Reliable for softness." },
      biga: { suitable: true, notes: "Excellent for the depth of aroma." },
      poolish: { suitable: true, notes: "Adds extensibility for perfectly round rolls." }
    },
    whatIf: [
      {
        scenario: "You omit the Milk Powder",
        outcome: "The bread will lose 50% of its characteristic 'padaria' aroma and the crumb will be slightly less tender.",
        solution: "Substitute with an extra 5% butter if milk powder is unavailable."
      }
    ],
    comparisons: [
      {
        vsStyle: "Milk Bread vs Bread Roll",
        difference: "Milk bread is enriched with fats; standard bread rolls (like Pão Francês) are lean and focuses on crust."
      }
    ],
    proTips: [
      "Brush the buns with melted butter immediately after taking them out of the oven for a softer-than-silk crust.",
      "Add a pinch of turmeric (0.1%) for a creamy, golden crumb that looks extra rich.",
      "Use 'Osmotolerant' yeast if your sugar level exceeds 15%—it helps with the rise time.",
      "The best way to eat it? Sliced cold with a thick layer of 'Requeijão' and a slice of ham.",
      "Try the 'Saco de Pão' method: bake inside a loose paper bag for a perfectly soft uniform steam-effect."
    ]
  },

  tags: ["pao-de-leite", "brazilian", "soft-rolls", "bisnaguinha", "bakery", "pillowy"],

  watchouts: [
    "Over-proofing can cause the rolls to collapse in the oven.",
    "Drafts in the kitchen will make the crust leathery.",
    "Cold milk is key to preventing the butter from melting during kneading.",
    "Don't slice while hot; the internal crumb is too delicate."
  ],

  notes: [
    "The soul of the Brazilian breakfast table.",
    "Pillowy soft and intensely milky.",
    "Uses Whole Milk Powder for the 'Padaria' aroma.",
    "Pull-apart format is the traditional presentation.",
    "Requires high-gloss egg-wash finish."
  ],

  references: [
    {
      source: "Manual de Padaria Artística",
      url: "https://www.sp.senai.br/",
      author: "SENAI SP",
      year: "2019"
    },
    {
      source: "Indústria de Panificação Brasileira",
      url: "https://www.abip.org.br/",
      author: "ABIP",
      year: "2021"
    },
    {
      source: "Pão de Leite de Padaria - Receita Profissional",
      url: "https://www.padariafoco.com.br/",
      author: "Professional Bakery Team",
      year: "2023"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/pao_de_leite_brazil_hero.png",
    dough: "/images/styles/pao_de_leite_brazil_dough.png",
    crumb: "/images/styles/pao_de_leite_brazil_crumb.png"
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "requeijao_cremoso", "mortadella", "minas_cheese"],

  flavorProfile: {
    primaryFlavors: ["rich milky sweetness", "buttery warmth", "delicate vanilla-eggy note", "pillowy enriched wheat", "caramelised glaze"],
    aromaProfile: ["milk powder warmth", "butter and honey", "fresh-baked yeasty sweetness", "nostalgic bakery morning"],
    textureDescriptors: ["impossibly soft crumb", "pull-apart feathery strands", "thin glossy mahogany crust", "no resistance on bite"],
    tasteJourney: "An immediate hit of milky sweetness from the glaze. Then the crumb pulls apart in silky, pillowy strands — deeply buttery and enriched. The sugar level is noticeable but never cloying. It disappears on the palate before you have time to analyze it.",
    mouthfeel: "The softest leavened bread in Brazilian bakery culture. The crumb is so fine it almost melts. The butter creates a slick richness that coats the palate gently.",
    bakersNotes: "Milk powder (leite em pó) is the key differentiator — not fresh milk. The powder concentrates the milk proteins and creates a specific 'padaria aroma' that fresh milk cannot replicate. Too much sugar = uneven browning (common failure). Maintain 8-10% sugar maximum."
  },

  culturalContext: {
    significance: "Pão de Leite is the bread of Brazilian childhood and the gold standard of padaria (bakery) culture. The 'bisnaguinha' (small industrial version) was Brazil's most iconic lunchbox bread throughout the 1980-2000s. Artisanal versions in premium padarias are now social media subjects.",
    rituals: ["Eaten as breakfast in virtually every Brazilian home — buttered and with café com leite", "The pull-apart format creates a social eating ritual at family tables", "Hotel breakfast buffets use it as the premium soft bread offering", "Nativity and first communion celebrations often include Pão de Leite as the soft bread option"],
    symbolism: "Represents the warmth and comfort of Brazilian family mornings. The 'bisnaguinha' shape is imprinted on Brazilian childhood memory — it is simultaneously nostalgic and aspirational (the padaria version versus the industrial one).",
    modernRole: "Artisan padarias have elevated Pão de Leite significantly — premium versions use real butter, high-fat cream, and imported flour. Viral content of bakeries pulling massive pull-apart loaves apart on social media generates enormous engagement."
  },

  globalPresence: {
    primaryMarkets: ["Brazil (nationwide)"],
    growingMarkets: ["Portugal", "USA (Brazilian diaspora in Florida, New York)", "Japan (influencing Japanese milk bread culture)"],
    penetrationLevel: "national_dominant",
    trend: "Growing internationally as Brazilian bakery culture spreads. Recognized as a 'softer, sweeter' version of Japanese Shokupan by international bakers who travel to Brazil.",
    diasporaImpact: "Brazilian community bakeries (padarias brasileiras) in Florida, New York, and London have introduced Pão de Leite to international audiences. It is becoming a point of Brazilian culinary pride abroad."
  },

  pairings: {
    beverages: [
      { name: "Café com Leite (Brazilian Coffee with Milk)", type: "traditional", notes: "The defining breakfast — the national ritual. Sweet bread + strong coffee + hot milk" },
      { name: "Vitamina de Banana (Banana Milkshake)", type: "traditional", notes: "Thick Brazilian fruit smoothie — the softness of the bread contrasts beautifully with the cold drink" },
      { name: "Chocolate Quente (Hot Chocolate)", type: "traditional", notes: "For children's breakfast and afternoon merenda — pull-apart bread dipped in hot chocolate" },
      { name: "Light Sparkling Wine", type: "modern", notes: "Modern brunch pairing — the very slight fizz works against the richness" }
    ],
    foods: [
      { name: "Requeijão Cremoso (Brazilian Cream Cheese)", pairing: "perfect", notes: "The most beloved Brazilian bread spread — creamy, slightly salty requeijão on warm Pão de Leite" },
      { name: "Mortadela Bologna", pairing: "classic", notes: "The iconic Brazilian padaria sandwich — thick mortadela between soft pão de leite is a lunchtime institution" },
      { name: "Minas Cheese (Queijo Minas)", pairing: "classic", notes: "Fresh Minas cheese with a drizzle of honey — the artisanal breakfast version" },
      { name: "Goiabada (Guava Paste) & Cream Cheese", pairing: "elevated", notes: "'Romeu e Julieta' filling inside Pão de Leite — a classic Brazilian flavour combination" }
    ],
    occasions: ["Brazilian breakfast (café da manhã)", "Children's lunchbox", "Hotel breakfast buffet", "Padaria weekend indulgence"]
  },

  experimentSuggestions: [
    {
      title: "Coconut Milk Pão de Leite",
      description: "Replace 50% of whole milk with coconut milk and 50% of milk powder with coconut powder. Reduce sugar by 2% to balance sweetness.",
      difficulty: "Easy",
      expectedOutcome: "A subtly tropical version with a lighter, less rich flavor. The coconut fragrance is delicate and elegant — not sweet but present."
    },
    {
      title: "Cream Cheese-Stuffed Pull-Apart",
      description: "Ball the individual portions around a tablespoon of requeijão cremoso. Arrange touching in the pan. The cheese melts inside during baking.",
      difficulty: "Medium",
      expectedOutcome: "Each roll reveals a molten cream cheese center when torn apart. Spectacular for Sunday brunch presentation."
    },
    {
      title: "São Paulo-Style Pão de Leite com Creme de Avelã",
      description: "Add 1% Nutella or hazelnut paste to the dough and swirl more on top of each roll before baking. Inspired by padaria 'especial' menus.",
      difficulty: "Easy",
      expectedOutcome: "A richer, slightly chocolate-hazelnut indulgent version. The filling caramelises slightly on the exposed roll tops."
    }
  ],

  learnLinkTags: ["brazilian-bread", "enriched-bread", "milk-bread", "soft-bread", "padaria", "pull-apart", "breakfast-bread", "brazil", "leite-em-pó", "bisnaguinha"]
};
