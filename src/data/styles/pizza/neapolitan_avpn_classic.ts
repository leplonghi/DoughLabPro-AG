import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * NEAPOLITAN PIZZA (AVPN CLASSIC)
 * 
 * Researched and validated content with authoritative sources:
 * - UNESCO Intangible Cultural Heritage (2017)
 * - AVPN (Associazione Verace Pizza Napoletana) - Official Standards (1984)
 * - European Union TSG Status (2010)
 * - Historical documentation from Naples, Italy
 */
export const neapolitan_avpn_classic: DoughStyleDefinition = {
  id: "neapolitan_avpn_classic",
  name: "Neapolitan Pizza (AVPN Classic)",
  category: "pizza",
  recipeStyle: RecipeStyle.NEAPOLITAN,

  origin: {
    country: "Italy",
    region: "Naples, Campania",
    period: "18th-19th century, formalized 1984"
  },

  description: "Neapolitan pizza is the original pizza style from Naples, Italy, recognized by UNESCO as an Intangible Cultural Heritage. Protected by strict AVPN standards since 1984, it represents centuries of culinary tradition and craftsmanship.",

  history: "Pizza's origins in Naples trace back centuries to humble flatbreads topped with olive oil, garlic, and herbs. By the 18th century, tomatoes became widely available through Naples' port and were incorporated into these flatbreads among the working class. The modern pizza evolved in the late 18th and early 19th centuries in Naples' poorer areas. A pivotal moment occurred in 1889 when pizzaiolo Raffaele Esposito created Pizza Margherita for Queen Margherita of Savoy, featuring tomatoes, mozzarella, and basil representing the Italian flag colors. Following WWII, American soldiers brought the dish back home, spreading its fame internationally. AVPN was established in 1984 to protect traditional methods globally.",

  difficulty: "Hard",
  fermentationType: "direct",

  base_formula: [
    { name: "Type 00 flour", percentage: 100 },
    { name: "Water", percentage: 59 },
    { name: "Salt", percentage: 2.5 },
    { name: "Fresh yeast", percentage: 0.1 }
  ],

  technicalProfile: {
    hydration: [55, 62.5],
    salt: [2, 3],
    oil: [0, 0],
    sugar: [0, 0],
    flourStrength: "Type 00 or 0 flour, moderate protein (11-12.5%)",
    ovenTemp: [430, 480],
    recommendedUse: [
      "Traditional Margherita and Marinara pizzas",
      "Simple, high-quality ingredient combinations respecting AVPN guidelines"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 250, min: 200, max: 280 },
    fermentationSteps: [
      "Mix: Combine flour, water, salt, and yeast by hand or low-speed mixer until just incorporated. [Science: Minimal mixing prevents excessive gluten development, maintaining delicate texture]",
      "Bulk Fermentation: 8-24 hours at room temperature (22-25°C). [Science: Long fermentation develops complex flavors through enzymatic activity and creates extensible dough]",
      "Divide and Ball: Portion into 200-280g balls using gentle, rotatory movements. [Science: Characteristic AVPN technique preserves air structure]",
      "Final Proof: 4-6 hours at room temperature until doubled. [Science: Yeast creates CO2 for final rise and airy cornicione]",
      "Stretch and Top: Hand-stretch (never roll) to 3mm center, 1-2cm raised edge. [Science: Preserves air bubbles for characteristic puffy cornicione]",
      "Bake: Wood-fired oven at 430-480°C for 60-90 seconds. [Science: Extreme heat creates rapid oven spring, leopard spotting, and preserves moisture]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W250-310 (Moderate strength)",
      pl_ratio: "0.50-0.70 (Extensible)",
      absorption_capacity: "High (55-62.5%)",
      protein_type: "Type 00 or 0 flour, soft wheat",
      science_explanation: "Type 00 flour with moderate protein creates delicate, extensible dough that's easy to digest and produces characteristic soft texture"
    },
    thermalProfile: {
      oven_type: "Wood-fired dome oven",
      heat_distribution: "Intense radiant heat from dome and floor",
      crust_development: "Leopard-spotted char with puffy cornicione",
      crumb_structure: "Soft, airy center with irregular holes"
    },
    fermentationScience: {
      yeast_activity: "Moderate (long room temp fermentation)",
      ph_target: "pH 5.5-6.0",
      organic_acids: "Balanced lactic and acetic",
      enzymatic_activity: "High (long fermentation breaks down starches)"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "The four phases of dough preparation",
        explanation: "AVPN specifies four distinct phases with characteristic rotatory movements: mixing, bulk fermentation, balling, and final proof. Each phase is crucial for authentic texture."
      },
      {
        tip: "Hand-stretching is essential",
        explanation: "Never use a rolling pin. Hand-stretching preserves air bubbles and creates the characteristic irregular, puffy cornicione. The dough should be stretched from the center outward."
      },
      {
        tip: "Less is more with toppings",
        explanation: "Authentic Neapolitan pizza uses minimal toppings. Too much sauce or cheese makes the center soggy and prevents proper cooking in the short 60-90 second bake time."
      },
      {
        tip: "Pizza sospesa tradition",
        explanation: "The 'suspended pizza' tradition where customers pay for two pizzas, leaving one for a stranger in need, embodies Neapolitan community spirit."
      },
      {
        tip: "Eat immediately",
        explanation: "Neapolitan pizza is best consumed within 2-3 minutes from the oven when crust is at peak texture and cheese is molten. It's meant to be eaten fresh, not reheated."
      }
    ],
    what_if: [
      {
        scenario: "Pizza center is too wet and soggy",
        result: "Too much sauce, insufficient oven temperature, or over-topped",
        correction: "Use less sauce (80-100g max), ensure oven reaches 430-480°C, limit toppings to AVPN guidelines"
      },
      {
        scenario: "Crust is tough and dry",
        result: "Over-baked, oven too cool, or under-fermented dough",
        correction: "Reduce bake time to 60-90 seconds, increase oven temp, ensure minimum 8-hour fermentation"
      },
      {
        scenario: "Cornicione doesn't puff up",
        result: "Dough rolled instead of hand-stretched, or insufficient proof",
        correction: "Always hand-stretch to preserve air bubbles, ensure 4-6 hour final proof at room temperature"
      },
      {
        scenario: "No leopard spotting on crust",
        result: "Oven temperature too low or bake time too short",
        correction: "Ensure oven reaches 430-480°C, bake for full 60-90 seconds, rotate pizza if needed"
      }
    ],
    comparative_analysis: [
      {
        target_style: "New York Style",
        difference: "Neapolitan has softer, wetter center and puffier crust; NY is crispier, drier, and foldable for eating on the go",
        why_choose_this: "Choose Neapolitan for authentic Italian tradition, UNESCO-protected heritage, and delicate flavors"
      },
      {
        target_style: "Roman Pizza",
        difference: "Neapolitan is thicker and softer with puffy edges; Roman is ultra-thin, cracker-crisp throughout",
        why_choose_this: "Choose Neapolitan for soft, pillowy texture and traditional wood-fired flavor"
      },
      {
        target_style: "Contemporary High-Hydration",
        difference: "AVPN Classic uses lower hydration (55-62.5%) vs. 70%+ modern styles; Classic is more traditional and regulated",
        why_choose_this: "Choose AVPN Classic for certified authenticity and centuries-old tradition"
      }
    ],
    q_and_a: [
      {
        question: "What makes Neapolitan pizza authentic according to AVPN?",
        answer: "Authentic Neapolitan pizza must use Type 00 or 0 flour, San Marzano tomatoes, fresh mozzarella (buffalo or fior di latte), fresh basil, and extra virgin olive oil. The dough must be hand-kneaded, fermented for minimum 8 hours, and baked in a wood-fired oven at 430-480°C for 60-90 seconds. The finished pizza must be round, maximum 35cm diameter, with a raised cornicione 1-2cm high.",
        context: "AVPN Official Standards"
      },
      {
        question: "Why is Neapolitan pizza so soft and floppy in the center?",
        answer: "The soft, slightly wet center is intentional and traditional. The high oven temperature (430-480°C) and very short bake time (60-90 seconds) cook the pizza rapidly, preserving moisture. The high hydration dough (55-62.5%) and minimal toppings also contribute to the characteristic soft, pliable texture that allows the pizza to be folded.",
        context: "Traditional technique"
      },
      {
        question: "Can I make authentic Neapolitan pizza in a home oven?",
        answer: "While challenging, it's possible to approximate Neapolitan pizza at home. Use a pizza stone or steel preheated to maximum temperature (usually 260-290°C), extend bake time to 5-8 minutes, and consider using a broiler for extra top heat. However, the authentic flavor and texture from a 480°C wood-fired oven cannot be fully replicated in a standard home oven.",
        context: "Home baking adaptation"
      },
      {
        question: "What is the difference between Pizza Margherita and Marinara?",
        answer: "Pizza Margherita (created 1889) has tomato, mozzarella, basil, and olive oil. Pizza Marinara (the oldest variant) has tomato, garlic, oregano, and olive oil but NO cheese. Both are AVPN-certified traditional variants.",
        context: "Traditional variants"
      },
      {
        question: "Why was Neapolitan pizza recognized by UNESCO?",
        answer: "In 2017, UNESCO recognized 'The Art of the Neapolitan Pizzaiuolo' as Intangible Cultural Heritage of Humanity, celebrating the traditional craft, social practice, and cultural significance of Neapolitan pizza-making that has been passed down through generations.",
        context: "UNESCO recognition 2017"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct (Room Temperature)",
        suitability: "Authentic",
        notes: "8-24 hours at 22-25°C is the traditional AVPN method. Develops flavor and extensibility without cold retard."
      },
      {
        method: "Cold Retard",
        suitability: "Modern Adaptation",
        notes: "Some contemporary pizzaiolos use overnight cold fermentation, but this is not traditional AVPN practice."
      },
      {
        method: "Biga/Poolish",
        suitability: "Not Traditional",
        notes: "Preferments are not part of authentic AVPN Neapolitan pizza. Direct dough only."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "AVPN specifies 55-62.5% hydration to create soft, extensible dough that's easy to hand-stretch and produces the characteristic tender texture. Higher hydration would make the dough too sticky for traditional hand-kneading techniques and could result in excessive moisture in the finished pizza during the ultra-short 60-90 second bake.",
    methodSuitability: {
      direct: { suitable: true, notes: "The only authentic AVPN method. 8-24 hours room temperature fermentation is traditional." },
      biga: { suitable: false, notes: "Not part of AVPN standards. Authentic Neapolitan uses direct dough only." },
      poolish: { suitable: false, notes: "Not traditional for AVPN certification. Direct method is required." }
    },
    whatIf: [
      {
        scenario: "Dough is too sticky to handle",
        outcome: "Hydration too high or flour protein too low",
        solution: "Reduce water to 55-59% range, ensure Type 00 flour with 11-12.5% protein"
      },
      {
        scenario: "Pizza burns in spots but center is raw",
        outcome: "Oven temperature uneven or pizza not rotated",
        solution: "Ensure even oven heat distribution, rotate pizza halfway through 60-90 second bake"
      },
      {
        scenario: "Dough tears when stretching",
        outcome: "Under-fermented, over-kneaded, or too cold",
        solution: "Ensure minimum 8-hour bulk + 4-6 hour final proof, minimal kneading, room temperature dough"
      }
    ],
    comparisons: [
      {
        vsStyle: "Contemporary High-Hydration Neapolitan",
        difference: "AVPN Classic uses 55-62.5% hydration; Contemporary uses 70%+ for even softer, more delicate texture"
      },
      {
        vsStyle: "Neapolitan Home Oven Adapted",
        difference: "AVPN requires wood-fired oven at 430-480°C; Home adaptation uses standard oven at 260-290°C with longer bake time"
      }
    ],
    proTips: [
      "The characteristic rotatory movements during balling are essential for creating surface tension",
      "Wood type matters - oak and beech are traditional for authentic flavor",
      "The 'pizza sospesa' tradition embodies Neapolitan solidarity and community spirit",
      "Authentic Neapolitan pizza should never exceed 35cm diameter",
      "Eat with fork and knife in Italy - it's the traditional way for this soft, delicate pizza"
    ]
  },

  tags: ["traditional", "unesco heritage", "wood-fired", "avpn certified", "italian"],

  watchouts: [
    "Over-baking even by 30 seconds can dry out the pizza and burn the cornicione",
    "Insufficient oven temperature results in pale, tough crust without proper char",
    "Too much sauce or toppings makes center soggy and prevents proper cooking",
    "Rolling pin destroys air bubbles - always hand-stretch",
    "Dough must be at room temperature for proper extensibility"
  ],

  notes: [
    "AVPN certification requires strict adherence to ingredients, techniques, and equipment specifications",
    "The 'pizza sospesa' tradition embodies Neapolitan community spirit and solidarity",
    "Authentic Neapolitan pizza should never exceed 35cm diameter and must be round",
    "UNESCO recognized the Art of the Neapolitan Pizzaiuolo in 2017",
    "Pizza Margherita was created in 1889 for Queen Margherita of Savoy",
    "European Union granted TSG (Traditional Speciality Guaranteed) status in 2010"
  ],

  references: [
    {
      source: "UNESCO - Art of Neapolitan 'Pizzaiuolo'",
      url: "https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722"
    },
    {
      source: "AVPN - Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/"
    },
    {
      source: "European Commission - TSG Registration",
      url: "https://ec.europa.eu/agriculture/quality/door/"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/neapolitan-avpn-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  }
};
