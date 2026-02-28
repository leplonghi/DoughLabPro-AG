import { StyleDefinition } from '../../../types/styleDefinition';

export const colomba_pasquale: StyleDefinition = {
  id: "colomba_pasquale",
  title: "Colomba Pasquale (Easter Dove)",
  subtitle: "The Panettone of Easter",
  category: "Pastry",
  family: "Italian Grand Leavened (Grandi Lievitati)",
  variantName: "Tradizionale",
  origin: {
    country: "Italy",
    region: "Lombardy (Milan)",
    period: "1930s (Modern commercial version by Motta)"
  },
  intro: "Colomba Pasquale ('Easter Dove') is the spring counterpart to Panettone. Shaped like a dove to symbolize peace, it shares the same complex sourdough (Pasta Madre) heritage but differs in its glazing (Ghiaccia) and the absence of raisins. It is celebrated for its incredibly light, shredding crumb and the crunchy, almond-sugar shell that contrasts with the soft interior.",
  history: "While legends trace it to the 6th century siege of Pavia (where a dove-shaped bread brought peace), the modern Colomba was industrialized in the 1930s by Angelo Motta (the Panettone king). Motta wanted to utilize the same machinery and dough used for Panettone during the Easter season. Unlike Panettone, which contains raisins, Colomba traditionally contains only candied orange peel and is topped with a rich glaze of almonds and pearl sugar. It is now a P.A.T. (Traditional Agri-Food Product) regulated by strict Italian laws regarding butter and egg yolk content.",
  culturalContext: {
    significance: [
      "Symbol of peace and resurrection.",
      "The centerpiece of the Italian Easter lunch.",
      "A gift of high esteem when artisanally made."
    ],
    consumptionContext: ["Served at the end of Easter lunch, often with Prosecco or Moscato d'Asti."],
    evolution: [
      "Medieval Legend -> 1930s Industrialization -> 2010s Artisan Renaissance."
    ],
    rituals: [
      "Gifting elegantly wrapped Columbas.",
      "Saving the 'glaze' bits for last.",
      "Eating leftovers toasted for breakfast."
    ]
  },
  flavorProfile: {
    primaryFlavors: ["Candied Orange", "Butter", "Vanilla", "Almond (Glaze)"],
    aromaProfile: ["Sourdough acidity (subtle)", "Citrus zest", "Toasted almonds"],
    textureNotes: ["Cotton-soft", "Melts in mouth", "Crunchy top", "Moist interior"],
    pairingRecommendations: ["Moscato d'Asti", "Espresso", "Mascarpone Cream"]
  },
  technicalFoundations: [
    "Pasta Madre (Solid Sourdough)",
    "Triple Fermentation (Primo/Secondo Impasto)",
    "Inverted Cooling (Hanging)"
  ],
  doughImpact: ["Extreme extensibility", "High osmotic pressure tolerance", "Requires rapid cooling to set"],
  bakingImpact: ["Massive oven spring", "Glaze cracking", "Maillard on the almonds"],
  technicalProfile: {
    hydrationRange: [55, 65],
    saltRange: [0.5, 0.8],
    oilRange: [20, 30],
    sugarRange: [15, 25],
    flourStrength: "Extra Strong Panettone Flour (W360-400, P/L 0.55). Must hold heavy fats and long fermentation.",
    fermentation: {
      bulk: "Primo Impasto: ~12-14 hours at 26°C until tripled.",
      proof: "Secondo Impasto (Final Proof): ~6-8 hours at 28°C in the mold.",
      coldRetard: "Not typical for the final dough, but the starter (Pasta Madre) is managed carefully at cool temps."
    },
    oven: {
      type: "Deck / Convection",
      temperatureC: [160, 175],
      notes: "Lower temperature to cook the core without burning the sugary glaze. Valve open for drying in the last phase."
    },
    difficulty: "Expert",
    recommendedUse: ["Easter Celebration", "Gourmet Gifting"]
  },
  customMethod: [
    {
      phase: 'PREP',
      title: 'Pasta Madre Refresh',
      actionInstructions: "Refresh the solid sourdough starter 3 times (every 3-4 hours) on the day of mixing.",
      technicalExplanation: "Strengthens yeast activity and reduces acetic acid, which can degrade the gluten network during long rises."
    },
    {
      phase: 'MIX',
      title: 'Primo Impasto (First Dough)',
      actionInstructions: "Mix flour, water, sugar, butter, and Pasta Madre. Knead until smooth.",
      technicalExplanation: "Establishes the fundamental crumb structure."
    },
    {
      phase: 'BULK',
      title: 'First Rise',
      actionInstructions: "Ferment for 12-14 hours at 26°C until volume triples.",
      technicalExplanation: "Wait for the triple volume (1+2). If it doesn't triple, the final dough will be heavy."
    },
    {
      phase: 'MIX',
      title: 'Secondo Impasto (Second Dough)',
      actionInstructions: "Deflate the first dough. Add flour, sugar, honey, yolks, aromatics (vanilla/orange paste), salt, and soft butter in stages. Add candied orange peel last.",
      technicalExplanation: "High-fat enrichment is possible only because the first dough has built a strong protein mesh."
    },
    {
      phase: 'DIVIDE',
      title: 'Shaping (Pirlatura)',
      actionInstructions: "Divide into body and wings. Round the pieces tightly (Pirlatura). Place body in mold first, then wings.",
      technicalExplanation: "Pirlatura creates surface tension, ensuring the dove rises vertically rather than spreading."
    },
    {
      phase: 'PROOF',
      title: 'Final Proof & Glazing',
      actionInstructions: "Proof 6-8 hours at 28-30°C. Pipe glaze (Ghiaccia) on top before baking. Top with almonds/pearl sugar.",
      technicalExplanation: "The glaze cracks as the dough expands (Oven Spring), creating the signature look."
    },
    {
      phase: 'BAKE',
      title: 'Baking',
      actionInstructions: "Bake at 160-170°C until core reaches 94°C.",
      technicalExplanation: "Low temp prevents burning the sugar-rich glaze."
    },
    {
      phase: 'COOL',
      title: 'Inverted Cooling',
      actionInstructions: "Immediately skewer the base and flip upside down to cool for 12 hours.",
      technicalExplanation: "Essential. The heavy butter/yolk structure is unstable when hot and will collapse under gravity if not inverted."
    }
  ],
  regionalVariants: ["Traditional (Candied Orange)", "Chocolate & Pear", "Pistachio (Bronte Style)"],
  climateScenarios: ["High heat during proofing is mandatory (28°C+)", "Avoid drafts during hanging"],
  styleComparisons: ["Panettone", "Pandoro"],
  parameterSensitivity: ["Temperature", "Acid Balance"],
  risks: ["Collapse during cooling", "Acidic flavor from poor starter", "Glaze sliding off"],
  notes: ["The glaze acts as a thermal shield, keeping the top moist while adding crunch.", "Must be hung upside down effectively."],
  references: [
    {
      title: "Colomba Pasquale History",
      url: "https://www.lacucinaitaliana.com/italian-food/italian-dishes/colomba-pasqua-history-origins",
      author: "La Cucina Italiana",
      year: 2022
    },
    {
      title: "Maestro Massari's Techniques",
      url: "https://www.iginiomassari.it/",
      author: "Iginio Massari",
      year: 2023
    }
  ],
  isCanonical: true,
  source: "official",
  defaults: {
    hydration: 60,
    salt: 0.5,
    oil: 25,
    sugar: 20
  },
  recommendedFlavorComponents: ["candied_orange_peel", "vanilla_madagascar", "almonds_whole", "pearl_sugar"],
  tags: ["festive_sweet_bread_for_easter", "pastry", "italy"],
  applyInApp: {
    calculator: [],
    styles: [],
    mylab: [],
    levain: [],
    tools: []
  },
  images: [],
  diagrams: [],
  faq: []
};
