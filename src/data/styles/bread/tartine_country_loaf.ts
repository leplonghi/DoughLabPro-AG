import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const tartine_country_loaf: StyleDefinition = {
  "id": "tartine_country_loaf",
  "title": "Country Sourdough (Tartine-style)",
  "subtitle": t('styles.levain__country_sourdough_5'),
  "category": t('styles.bread_25'),
  "family": t('styles.levain__country_sourdough_6'),
  "variantName": "Country Sourdough (Tartine-style)",
  "origin": {
    "country": t('styles.united_states_3'),
    "region": t('styles.san_francisco'),
    "period": t('styles.early_21st_century')
  },
  "intro": t('styles.baked_in_artisan_bakeries_and_by_home_enthusiasts_'),
  "history": "The Tartine Country Loaf was born in San Francisco in the early 2000s, developed by Chad Robertson at Tartine Bakery. Drawing from traditional French methods but pushing the boundaries of hydration and 'wild' fermentation, it sparked a global movement. Often called 'The Loaf That Changed Bread', it shifted the artisan focus from dense, acidified sourdoughs to light, highly hydrated, open-crumb 'custardy' loaves.",
  "culturalContext": {
    "significance": [
      "The quintessential benchmark of the 21st-century 'Artisan Sourdough' movement",
      "Redefined the home baker's standards for open crumb and deep crust caramelization",
      "Credited with reviving the interest in natural leavening (Levain) globally",
      "Represents the 'San Francisco Style' of high-hydration baking",
      "A symbol of culinary patience, requiring a multi-day process"
    ],
    "consumptionContext": [
      "Often eaten simple: a thick slice with high-fat salted butter",
      "Perfect base for 'Tartines'—complex, gourmet open-faced sandwiches",
      "A centerpiece bread for communal dinners, often served in large wedges",
      "Ideal for 'Scarpetta'—sopping up high-end olive oil or pasta sauces",
      "Traditionally sliced thick to admire the giant, irregular internal air pockets"
    ],
    "evolution": [
      "Early 2000s: Chad Robertson experiments with 'young' levain and high hydration in Pt. Reyes",
      "2002: Tartine Bakery opens in SF, selling 100 loaves a day that sell out in minutes",
      "2010: The book 'Tartine Bread' is published, becoming the bible for home bakers",
      "2010s: The 'Sourdough Revolution' spreads to London, Copenhagen, and Tokyo",
      "2020: The global pandemic induces a massive resurgence of Tartine-style home baking",
      "Present: Remains the most photographed and technical benchmark bread on social media"
    ],
    "rituals": [
      "The 'Windowpane' Test: checking the sheer transparency of the high-hydration dough",
      "The Float Test: checking if the 'young' levain is ready by seeing if a spoonful floats in water",
      "The Dutch Oven Ritual: the excitement of removing the lid after 20 minutes to see the 'oven spring'",
      "Listening to the 'Crackles': hearing the crust shatter as the bread cools on the rack",
      "The 'Crumb Shot': cutting the bread centrally to photograph and share the open internal structure"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Mild, creamy sweetness from 'young' liquid levain",
      "Subtle yogurt-like lactic acidity (low acetic sharpness)",
      "Intense caramelized, almost smoky notes from a dark-burnt crust",
      "Rich toasted wheat and toasted cereal flavors",
      "Subtle roasted nuttiness from the small percentage of whole wheat"
    ],
    "aromaProfile": [
      "Sweet, fermented fruit and fresh cream",
      "Deeply toasted, slightly smoky crust notes",
      "Warm wheat and toasted malt",
      "Mild cider-like tang",
      "Clean, earthy, and complex"
    ],
    "textureNotes": [
      "The 'Custardy' Crumb: highly moist, gelatinized, and tender to the point of being translucent",
      "The 'Shatter' Crust: thin, blistered, and exceptionally crunchy",
      "Open Alveolatura: giant, irregular, 'wild' internal air pockets",
      "Springy and elastic: should fully recover its shape when compressed",
      "Significant weight-to-volume ratio: feels light in the hand but substantial in the mouth"
    ],
    "pairingRecommendations": [
      "Fat: High-quality cultured butter (Le Beurre Bordier style) or raw honey",
      "Cheese: Soft-ripened cheeses like Brillat-Savarin or aged Gruyère",
      "Meal: Roasted chicken, heritage tomato salads, or bone marrow",
      "Beverage: Natural wines, craft sourdough beers, or fresh-pressed apple juice",
      "Finishing: A drizzle of cold-pressed Californian olive oil and sea salt"
    ],
    "flavorEvolution": [
      "Warm (0-2 hours): Crumb is still setting; extreme toasted crust aroma",
      "8-12 Hours: Peak texture and flavor balance (the 'Gold Standard' window)",
      "Next Day: Acidity develops slightly further; becomes the ultimate toast bread",
      "Day 3+: Toasts to a perfect golden crunch; the moist interior stays soft",
      "Stale: Used for rustic Panzanella salad or high-end Ribollita soup"
    ]
  },
  "technicalFoundations": [
    "Liquid levain 15–25% of flour.",
    "Hydration: 75-80%"
  ],
  "doughImpact": [
    "High hydration (75-80%+) creates the characteristic 'custardy' and open-crumb texture",
    "Use of 10-20% whole wheat provides the nutrients needed for wild yeast and enzymatic activity",
    "A 'young' liquid levain (used before peak acidity) ensures a mild, sweet flavor profile",
    "Gentle 'coil folds' or 'stretch and folds' build technical strength without degassing the dough",
    "Extended cold retard (12-16h) develops flavor and firms the dough for intricate scoring"
  ],
  "bakingImpact": [
    "High initial heat (230-250°C) and confined steam (Dutch oven) maximize 'oven spring'",
    "Steam keeps the surface flexible, allowing the massive expansion that creates the 'ear'",
    "The 'Dark Bake': bread is left until the crust is a deep mahogany color for maximum flavor",
    "Radiant heat from a heavy cast iron pot mimics the floor heat of a professional deck oven",
    "Venting the steam after 20 minutes is crucial for drying the crust to achieve the 'shatter' crunch"
  ],
  "technicalProfile": {
    "hydrationRange": [
      75,
      80
    ],
    "saltRange": [
      2,
      2.2
    ],
    "oilRange": [
      0,
      0
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": t('styles.bread_flour_with_1020_whole_wheat'),
    "fermentation": {
      "bulk": "3–4 h at 25–27°C with repeated folds",
      "proof": "2–4 h at 20–24°C or retarded overnight",
      "coldRetard": t('styles.commonly_816_h_for_flavor_and_scoring')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.often_baked_in_dutch_ovens_or_steaminjected_decks')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.artisan_sourdough'),
      t('common.table_bread'),
      "Toast, tartines"
    ]
  },
  "regionalVariants": [
    "Tartine Whole Wheat - 70% whole grain variant for a denser, more nutritious profile",
    "Tartine Sesame - Coated in toasted seeds for a nutty, aromatic finish",
    "Tartine Porridge - Inclusion of cooked grains (oats/barley) for an even moister crumb",
    "San Francisco Sour - The traditional, more acidic predecessor to the Tartine style",
    "Artisan Bakery Standard - The simplified professional version found in modern bakeries"
  ],
  "climateScenarios": [
    "San Francisco Fog (Ideal): 18-22°C ambient is perfect for the slow fermentation required",
    "Dry Desert: Increase hydration by 2% and keep dough in a sealed container throughout folds",
    "Tropical: Use ice water for the mix; use the fridge for 50% of the bulk ferment time",
    "High Altitude: Reduce levain percentage and monitor hydration; the dough will dry out faster"
  ],
  "styleComparisons": [
    "vs. Baguette: Tartine is much wetter, relies on levain vs yeast, and has a thicker bake",
    "vs. Pain de Campagne: Tartine is usually more hydrated and has a more 'translucent' crumb",
    "vs. German Rye: Opposite worlds; Tartine is light/airy wheat vs dense/acidic rye",
    "vs. Wonder Bread: Completely different philosophies; Tartine is slow/lean/natural vs fast/enriched/industrial"
  ],
  "parameterSensitivity": [
    "Critical: Levain Ripeness - using a levain that is even slightly too acidic will lead to a dense loaf",
    "Highly sensitive: Bulk Temperature - 25-27°C is the sweet spot; too low and it won't rise",
    "Autolyse Time: 30-60 mins is essential to allow the high hydration to fully saturate the flour",
    "Scoring Angle: A shallow, 30-degree slit is required to achieve the signature 'ear'",
    "Steam Management: If steam is lost in the first 10 mins, the crust will set too early"
  ],
  "risks": [
    "The 'Pancake' Effect: Using weak flour or failing to build enough strength during folds",
    "Gummy Texture: Cutting the bread while still warm; the starch needs to set",
    "Burnt Bottom: Dutch oven base getting too hot; solved by placing a tray on the rack below",
    "Lack of Oven Spring: Under-proofing (leads to bursting) or over-proofing (leads to collapse)",
    "Dense Crumb: Over-handling the dough during the final shape, degassing the bubbles"
  ],
  "notes": [
    "The 'Float Test' is your best friend—don't mix the dough until the levain floats",
    "Use a cast iron combo cooker for the best home oven results",
    "Don't be afraid of the 'burnt' bits — they provide the essential bitter-sweet contrast",
    "Keep hands wet when folding to prevent sticking without adding extra flour",
    "Scoring should be one confident, swift motion using a sharp razor blade (lame)"
  ],
  "tags": [
    t('common.artisan_sourdough'),
    t('common.table_bread'),
    "Toast, tartines",
    t('common.bread'),
    t('common.united_states')
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
      "title": t('styles.tartine_bread__chad_robertson'),
      "url": "https://www.amazon.com/Tartine-Bread-Chad-Robertson/dp/0811870413",
      "author": "Chad Robertson",
      "year": 2010
    },
    {
      "title": t('styles.modernist_bread_19'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "The Bread Code: Tartine Style",
      "url": "https://www.thebreadcode.com/recipe/tartine-style-sourdough/",
      "author": "Hendrik Kleinwaechter",
      "year": 2021
    },
    {
      "title": "Tartine Bakery: The Cult of Sourdough",
      "url": "https://www.newyorker.com/magazine/2010/11/29/the-staff-of-life",
      "author": "The New Yorker",
      "year": 2010
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "O que define o pão estilo 'Tartine'?",
      "answer": "É um pão de fermentação natural (sourdough) com altíssima hidratação, miolo muito aberto e 'gelatinoso', e uma casca escura, caramelizada e crocante. Ele utiliza um 'levain jovem' (pouco ácido) para garantir um sabor adocicado e cremoso."
    },
    {
      "question": "Por que o pão estilo Tartine é tão difícil de fazer?",
      "answer": "Devido à alta hidratação (além de 75-80%), a massa é muito mole e pegajosa. O sucesso depende de desenvolver a força do glúten apenas com dobras (sem sova pesada) e de um controle preciso da temperatura de fermentação."
    },
    {
      "question": "O que é o 'levain jovem'?",
      "answer": "É o fermento natural usado logo após ele dobrar de volume, antes de começar a colapsar e ficar ácido. Isso resulta em um pão com aroma de iogurte e creme, em vez daquele azedo forte dos sourdoughs tradicionais."
    },
    {
      "question": "Por que assar dentro de uma panela de ferro (Dutch Oven)?",
      "answer": "A panela de ferro retém a umidade da própria massa, criando um ambiente de vapor saturado. Isso permite que o pão cresça ao máximo ('oven spring') antes que a casca se forme, resultando em uma pestana aberta e miolo leve."
    },
    {
      "question": "Qual a melhor farinha para este estilo?",
      "answer": "É necessária uma farinha de trigo com alto teor de proteína (farinha para pão forte) para suportar tanta água. Geralmente mistura-se uma pequena porcentagem de farinha integral para dar nutrientes ao fermento e complexidade ao sabor."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
