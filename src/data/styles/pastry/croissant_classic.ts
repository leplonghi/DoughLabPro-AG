import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const croissant_classic: StyleDefinition = {
  "id": "croissant_classic",
  "title": t('styles.classic_french_croissant'),
  "subtitle": t('styles.viennoiserie_laminée'),
  "category": t('styles.pastry_5'),
  "family": t('styles.viennoiserie_laminée_2'),
  "variantName": t('styles.classic_french_croissant_2'),
  "origin": {
    "country": t('styles.france_7'),
    "region": t('styles.paris_and_beyond'),
    "period": "19th–20th century"
  },
  "intro": "Eaten at breakfast and as a snack, produced in artisan and industrial bakeries worldwide.",
  "history": "Croissant is a laminated, yeasted dough with butter layers, becoming a symbol of French viennoiserie.",
  "culturalContext": {
    "significance": [
      "Icon of French breakfast culture and café society worldwide",
      "Symbol of French culinary excellence and pastry craftsmanship",
      "Represents the French art of 'viennoiserie' - enriched, laminated pastries",
      "Cultural ambassador - croissants in cafés signal 'French-style' globally",
      "Embodies French dedication to technique, precision, and quality ingredients"
    ],
    "consumptionContext": [
      "Classic French breakfast: croissant + café au lait or espresso",
      "Eaten at cafés, boulangeries, or taken home fresh in the morning",
      "Weekend treat and special occasion pastry, not everyday food for most French",
      "Business breakfast meetings, hotel continental breakfasts worldwide",
      "Best consumed within 4-6 hours of baking, never reheated or saved"
    ],
    "evolution": [
      "Legend: Inspired by Austrian kipferl, brought to France in 1770s by Marie Antoinette",
      "Reality: Modern croissant developed in Paris in early 1900s, not 1700s",
      "1906: August Zang's Viennese bakery in Paris popularizes laminated pastries",
      "1920s-1950s: Croissant becomes standardized in French bakeries",
      "1970s-1980s: Frozen croissant dough industrializes production, quality varies",
      "2000s-present: Artisan revival, emphasis on all-butter, hand-laminated croissants"
    ],
    "rituals": [
      "The crescent shape (croissant au beurre) vs straight (ordinaire/margarine) distinction",
      "Tearing apart to reveal honeycomb interior - visual quality check",
      "Dipping in café au lait or hot chocolate - traditional French breakfast ritual",
      "The flaky shower of crumbs is expected and accepted - sign of proper lamination",
      "Warm from oven vs room temperature debate - purists prefer slight warmth"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Rich, creamy butter with subtle cultured dairy tang",
      "Delicate yeast and fermentation notes from enriched dough",
      "Subtle sweetness from sugar, balanced by butter's richness",
      "Toasted, caramelized notes from golden-brown crust",
      "Clean wheat flavor from quality flour, enhanced by butter"
    ],
    "aromaProfile": [
      "Intense butter aroma - warm, nutty, slightly sweet",
      "Yeasty, bread-like fermentation scents",
      "Caramelized, toasted notes from baking",
      "Hint of vanilla or cultured cream from quality butter",
      "Overall: irresistible, bakery-fresh pastry aroma"
    ],
    "textureNotes": [
      "Shatteringly crispy, flaky exterior with visible layers",
      "Honeycomb interior structure with distinct, airy layers",
      "Tender, almost melting texture from butter between layers",
      "Delicate crumb that pulls apart in sheets, not chunks",
      "Overall: crispy-tender contrast, light yet rich, never dense or doughy"
    ],
    "pairingRecommendations": [
      "Classic: Plain with café au lait, espresso, or hot chocolate",
      "Traditional: Butter and jam (though purists say unnecessary)",
      "Savory: Ham and cheese (croissant jambon-fromage)",
      "Sweet: Almond cream filling (croissant aux amandes)",
      "Avoid: Heavy fillings that mask the butter and lamination - simplicity is key"
    ],
    "flavorEvolution": [
      "Fresh from oven (0-2 hours): Peak flakiness, butter aroma intense, layers crispy",
      "2-4 hours: Still excellent, layers soften slightly, flavors meld beautifully",
      "4-6 hours: Texture declines, layers merge, still acceptable but past prime",
      "After 6 hours: Stale, tough, layers compressed - use for bread pudding or almond croissants",
      "Reheated: Never recommended - destroys flaky texture, butter leaks out"
    ]
  },
  "technicalFoundations": [
    "Usually straight dough; some use poolish.",
    "Hydration: 50-60%"
  ],
  "doughImpact": [
    "Low hydration (50-60%) creates firm dough that can withstand multiple folds without tearing",
    "Lamination with butter (50% of flour weight) creates distinct flaky layers",
    "Enrichment with milk, sugar, and butter in dough provides tender, rich base",
    "Cold retardation between folds keeps butter solid, preventing mixing with dough",
    "Strong flour (W 280-320) provides structure to support butter layers during proofing and baking"
  ],
  "bakingImpact": [
    "Moderate temperature (190-210°C) allows butter to melt gradually, creating steam between layers",
    "Steam from butter creates dramatic lift and separation of layers (honeycomb structure)",
    "Proper proofing (2-3h at 24-26°C) is critical - under-proofed croissants are dense, over-proofed collapse",
    "Egg wash creates glossy, golden-brown surface and seals edges",
    "Baking time (15-20 min) must be sufficient to fully cook interior while achieving deep color"
  ],
  "technicalProfile": {
    "hydrationRange": [
      50,
      62
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      40,
      65
    ],
    "sugarRange": [
      8,
      14
    ],
    "flourStrength": "Strong bread or pastry flour suitable for lamination (W 280-320)",
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "2–3 h at 24–26°C after shaping",
      "coldRetard": t('styles.mandatory_overnight_retarding_for_lamination')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        190,
        210
      ],
      "notes": t('styles.requires_proper_proofing_and_steam_or_humidity_con')
    },
    "difficulty": t('styles.hard_18'),
    "recommendedUse": [
      t('common.breakfast_pastry'),
      t('common.viennoiserie_display')
    ]
  },
  "defaults": {
    "hydration": 54, // Net hydration of the detrempe (Water+Milk water) roughly
    "salt": 2,
    "oil": 55, // Total butter
    "sugar": 11
  },
  "base_formula": [
    { "name": t('styles.bread_flour_4'), "percentage": 100, "role": "flour" },
    { "name": t('styles.water_2'), "percentage": 28, "hydrationContent": 1, "role": "water" },
    { "name": t('styles.whole_milk_4'), "percentage": 28, "hydrationContent": 0.87, "category": "liquid", "role": "other", "manualOverride": true },
    { "name": t('styles.sugar_4'), "percentage": 11, "role": "sugar", "category": "sugar", "manualOverride": true },
    { "name": t('styles.salt_5'), "percentage": 2, "role": "salt" },
    { "name": "Yeast (Instant)", "percentage": 1.2, "role": "yeast" },
    { "name": "Butter (Dough)", "percentage": 5, "hydrationContent": 0.15, "role": "fat", "category": "fat", "manualOverride": true },
    { "name": "Butter (Lamination)", "percentage": 50, "hydrationContent": 0.15, "role": "fat", "category": "fat", "manualOverride": true }
  ],
  "regionalVariants": [
    "Croissant au Beurre - Made with pure butter, crescent shape (traditional French)",
    "Croissant Ordinaire - Made with margarine, straight shape (commercial)",
    "Croissant aux Amandes - Filled with almond cream, topped with almonds",
    "Pain au Chocolat - Same dough, rectangular shape with chocolate batons",
    "Pain aux Raisins - Rolled with pastry cream and raisins"
  ],
  "climateScenarios": [
    "Hot/Humid (>25°C, >70% RH): Work in air-conditioned space (18-20°C), use European butter (higher melting point), reduce proof time by 30%",
    "Cold/Dry (<15°C, <40% RH): Butter may be too hard - let warm slightly before laminating, extend proof time by 20-30%",
    "Tropical: Nearly impossible without climate control - butter melts into dough. Use 16-18°C workspace, freeze dough between folds",
    "High Altitude (>1500m): Reduce yeast by 10-15%, increase liquid slightly, proof time may be shorter"
  ],
  "styleComparisons": [
    "vs. Danish Pastry: Croissant has more folds (typically 27 layers), less sugar, no eggs in lamination",
    "vs. Puff Pastry: Croissant is yeasted (leavened), enriched dough, Danish is unleavened, neutral dough",
    "vs. Brioche: Croissant is laminated with external butter, brioche has butter mixed into dough",
    "vs. Pain au Lait: Croissant is laminated and flaky, pain au lait is enriched but soft and tender"
  ],
  "parameterSensitivity": [
    "Critical: Butter temperature during lamination must be 15-18°C - too cold cracks, too warm mixes into dough",
    "Highly sensitive to proof temperature and time - 24-26°C for 2-3h is ideal, variance causes collapse or density",
    "Dough temperature during lamination: must stay below 18°C to prevent butter melting",
    "Number of folds affects texture: 3 single folds (27 layers) is standard, more creates dense texture, fewer creates thick layers",
    "Oven temperature critical: below 190°C butter leaks out, above 210°C exterior burns before interior cooks"
  ],
  "risks": [
    "Butter breakthrough: Butter melts into dough during lamination - caused by warm dough or butter",
    "Collapsed layers: Over-proofing causes butter to leak and layers to merge",
    "Dense, bread-like texture: Under-lamination, insufficient folds, or butter too cold and cracked",
    "Butter leakage during baking: Oven too cool, dough over-proofed, or poor sealing of edges",
    "Uneven layers: Inconsistent rolling pressure, dough not relaxed enough between folds"
  ],
  "notes": [
    "Traditional French croissants are crescent-shaped (au beurre), straight ones indicate margarine (ordinaire)",
    "Lamination creates approximately 27 layers with 3 single folds (3x3x3)",
    "European-style butter (82-84% fat) is preferred over American (80% fat) for better lamination",
    "Croissants should be eaten within 4-6 hours of baking for optimal texture",
    "The honeycomb interior structure is the hallmark of proper lamination and proofing"
  ],
  "tags": [
    t('common.breakfast_pastry'),
    t('common.viennoiserie_display'),
    t('common.pastry'),
    t('common.france')
  ],
  "applyInApp": {
    "calculator": [],
    "styles": [],
    "mylab": [],
    "levain": [],
    "tools": []
  },
  "references": [
    {
      "title": t('styles.ferrandi__professional_baking'),
      "url": "https://www.amazon.com/Ferrandi-Paris-Professional-Baking-Fundamentals/dp/2080203266",
      "author": "Ferrandi Paris",
      "year": 2021
    },
    {
      "title": t('styles.modernist_bread_26'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "The Art of French Pastry",
      "url": "https://www.amazon.com/Art-French-Pastry-Jacquy-Pfeiffer/dp/0307959139",
      "author": "Jacquy Pfeiffer",
      "year": 2013
    },
    {
      "title": "Advanced Bread and Pastry",
      "url": "https://www.amazon.com/Advanced-Bread-Pastry-Professional-Approach/dp/1418011754",
      "author": "Michel Suas",
      "year": 2008
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Why did my butter break through the dough during lamination?",
      "answer": "Butter breakthrough occurs when the butter is too soft or the dough is too warm. Both should be around 15-18°C during lamination - firm but pliable. If butter is warmer than dough, it will melt and mix in. If butter is too cold, it will crack and break through. Work in a cool environment (18-20°C) and refrigerate dough between folds if needed. Use European butter (82-84% fat) for better plasticity."
    },
    {
      "question": "How do I know when croissants are properly proofed?",
      "answer": "Properly proofed croissants should be visibly larger (nearly doubled), feel light and airy when gently lifted, and show a slight jiggle when the pan is shaken. The layers should be visible and separated. If you gently press with a finger, the dough should slowly spring back but leave a slight indentation. Under-proofed croissants are dense and small; over-proofed ones collapse during baking and leak butter."
    },
    {
      "question": "What's the difference between 3 single folds and 2 double folds?",
      "answer": "3 single folds (letter folds) create 27 layers (3×3×3), while 2 double folds (book folds) create 16 layers (4×4). The 3 single fold method is traditional French technique, creating more numerous, thinner layers with better separation. The 2 double fold method is faster but creates thicker, fewer layers. For classic croissants, use 3 single folds. Each fold requires 30-60 minutes rest in refrigerator."
    },
    {
      "question": "Can I make croissants without a sheeter or rolling pin?",
      "answer": "A rolling pin is essential for croissant lamination - you cannot achieve the thin, even layers needed without one. A sheeter (dough roller machine) makes the process easier and more consistent but is not necessary. Use a heavy French-style rolling pin without handles for best control. Roll with even pressure, working from center outward, and rotate dough 90° between passes to maintain rectangular shape."
    },
    {
      "question": "Why are my croissants dense and bread-like instead of flaky?",
      "answer": "Dense croissants indicate one of several issues: 1) Insufficient lamination - need 3 complete single folds for 27 layers, 2) Butter was too cold and cracked instead of staying pliable, 3) Over-mixing of dough developed too much gluten, 4) Under-proofing - didn't allow enough time for yeast to create lift, 5) Oven temperature too low - butter leaked out instead of creating steam. Ensure all steps are followed precisely."
    },
    {
      "question": "Should I use salted or unsalted butter for lamination?",
      "answer": "Always use unsalted butter for lamination. Salted butter contains water and salt which interfere with the lamination process and can create uneven layers. European-style unsalted butter with 82-84% fat content is ideal - it has less water than American butter (80% fat), making it more plastic and easier to laminate. The dough itself contains salt for flavor."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
