import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const california_style: StyleDefinition = {
  "id": "california_style",
  "title": t('styles.california_style'),
  "subtitle": t('styles.american_artisan_pizza'),
  "category": t('styles.pizza_2'),
  "family": t('styles.american_artisan_pizza_2'),
  "variantName": t('styles.california_style_2'),
  "origin": {
    "country": t('styles.united_states_5'),
    "region": t('styles.california'),
    "period": "1980s"
  },
  "intro": t('styles.california_intro'),
  "history": "Born in the late 1970s and early 1980s, California Style pizza was pioneered by Alice Waters at Chez Panisse and Ed LaDou at Spago. It broke the traditional Italian rules by treating the pizza crust as a canvas for fresh, seasonal, and often unconventional toppings like goat cheese, smoked salmon, and avocado, sparking the 'Gourmet Pizza' revolution.",
  "culturalContext": {
    "significance": [
      "Represents the birth of 'Gourmet' or 'Artisan' pizza in the United States",
      "Symbol of the farm-to-table movement and California's emphasis on fresh, seasonal ingredients",
      "Shifted the cultural focus of pizza from cheap street food to high-end restaurant fare",
      "Democratized creative cooking by making the pizza crust a blank slate for any flavor profile",
      "Strongly associated with the 'California cool' lifestyle and wine country dining"
    ],
    "consumptionContext": [
      "Primarily served as personal-sized pies in upscale casual restaurants",
      "Often enjoyed with local Californian wines (Chardonnay or Pinot Noir)",
      "Commonly found in outdoor patios or bright, modern dining rooms",
      "Eaten with a knife and fork due to the sometimes delicate or mountain of fresh toppings",
      "A staple of healthy-ish, creative lunches and trendy dinner scenes"
    ],
    "evolution": [
      "1980: Alice Waters puts garden-fresh ingredients on pizzas at Chez Panisse",
      "1982: Wolfgang Puck opens Spago; Ed LaDou creates the iconic Smoked Salmon pizza",
      "Mid-1980s: California Pizza Kitchen (CPK) founded, bringing the style to the masses",
      "1990s: Focus shifts to specialized wood-fired ovens and cold-fermented doughs",
      "2000s: Influence spreads globally, inspiring 'Artisan' pizzerias in every major city",
      "Present: Merged into the broader 'Neo-Neapolitan' and 'Modern American Artisan' categories"
    ],
    "rituals": [
      "The 'Chef's Table' view: watching the pizzaiolo work with fresh produce and a wood-fired oven",
      "Seasonal menu rotations: the pizza changes based on what's available at the market that week",
      "Drizzling high-quality local olive oil or balsamic reduction as a finishing touch",
      "Sharing several different creative pizzas across the table for a variety of flavors",
      "Pairing specific pizzas with artisanal beers or specific wine varietals"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Complex, slightly sweet dough with a clean wheat finish",
      "Strong emphasis on fresh, acidic, and creamy elements (goat cheese, arugula, citrus)",
      "Smoky undertones from wood-fired baking",
      "Often features a balance of savory, sweet, and tangy (e.g., balsamic or fruit additions)",
      "High-quality extra virgin olive oil is often a primary flavor component"
    ],
    "aromaProfile": [
      "Fresh herbs (basil, thyme, rosemary) and garden produce",
      "Toasted bread with a hint of honey or malt",
      "Clean wood smoke from oak or almond wood fires",
      "Sharp, tangy aromas from specialty cheeses",
      "Nutty notes from toasted seeds or nuts often used as toppings"
    ],
    "textureNotes": [
      "Light, airy cornicione (crust edge) with a crisp but tender bite",
      "Thin center that is flexible but not soggy",
      "Variable textures from toppings: crunchy greens, creamy cheeses, tender roasted meats",
      "Slightly chewy crumb with fine to medium aeration",
      "Delicate charring on the edges provides a 'snap' to the bite"
    ],
    "pairingRecommendations": [
      "Cheese: Goat cheese, Gorgonzola, Burrata, Fontina",
      "Produce: Arugula, figs, shaved asparagus, caramelized onions, sun-dried tomatoes",
      "Protein: Prosciutto, smoked salmon, roasted chicken, pine nuts",
      "Beverage: California Chardonnay, IPA, or sparkling water with citrus",
      "Finishing: Hot honey, truffle oil, or fresh lemon zest"
    ],
    "flavorEvolution": [
      "Fresh (0-5 mins): Best for hot/cold contrast pizzas (like arugula on hot crust)",
      "Warm (10-15 mins): Dough softens slightly; oils and juices from toppings meld with the crust",
      "Room Temp: Excellent for vegetarian options; the flavors of the produce become more distinct",
      "Next Day: Thin crust can become tough; best reheated quickly in a hot skillet",
      "Cold: Not the ideal way to enjoy this style; the fresh toppings lose their vibrancy"
    ]
  },
  "technicalFoundations": [
    t('styles.california_tech_1'),
    t('styles.california_tech_2')
  ],
  "doughImpact": [
    "Moderate hydration (60-68%) creates a dough that is easy to handle but remains light",
    "Small amounts of oil and sugar provide tenderness and help with browning in lower-temp wood ovens",
    "Cold fermentation (24-48h) is preferred for developing a complex but clean flavor",
    "Using All-Purpose or Bread Flour instead of 00 creates a more substantial American-style crumb",
    "Gentle balling and shaping ensure the delicate air bubbles aren't crushed before baking"
  ],
  "bakingImpact": [
    "Baked at lower temps than Neapolitan (300-400°C) to allow varied toppings to cook through",
    "Wood-fired ovens provide a dry, intense heat that crisps the crust while keeping toppings fresh",
    "The longer bake time (3-5 minutes) allows for superior structural integrity to hold heavy produce",
    "Differentiation in heat zones: toppings are often added at different stages to preserve texture",
    "Lower humidity in the oven helps achieve a crisp, 'cracker-like' snap in the thinner areas"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      68
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      2,
      5
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour_3'),
    "fermentation": {
      "bulk": t('styles.california_fermentation_bulk'),
      "proof": t('styles.california_fermentation_proof'),
      "coldRetard": t('styles.common_for_flavor')
    },
    "oven": {
      "type": "wood_fired",
      "temperatureC": [
        300,
        400
      ],
      "notes": t('styles.woodfired_for_speed_and_flavor_but_lower_temp_than')
    },
    "difficulty": t('styles.medium_33'),
    "recommendedUse": [
      t('common.gourmet_personal_pizzas'),
      t('common.creative_toppings')
    ]
  },
  "regionalVariants": [
    "The Spago Classic - Famous for smoked salmon, crème fraîche, and caviar",
    "SF Artisan - Often incorporates sourdough starters and locally foraged ingredients",
    "CPK Style - The commercialized version that brought BBQ Chicken pizza to the world",
    "Neo-Artisan - Modern trend using ultra-high hydration and 72-hour ferments",
    "Santa Barbara Style - Focus on avocado, ranch, and very thin 'blonde' crusts"
  ],
  "climateScenarios": [
    "Hot/Humid: Reduce sugar to prevent too-rapid browning; use 10% more salt for gluten strength",
    "Cold/Dry: Increase hydration by 3% to prevent the thin dough from drying out and cracking",
    "High Altitude: Reduce yeast by 20% to prevent over-proofing of the delicate, thin balls",
    "Coastal Fog: May need to slightly increase oven temp to combat ambient humidity during the bake"
  ],
  "styleComparisons": [
    "vs. Neapolitan: California is baked lower/longer, holds toppings better, and uses non-traditional items",
    "vs. NY Style: California is smaller (10-12 inch), has a more tender crust, and gourmet focus",
    "vs. New Haven: California lacks the intense char and heavy grease of an Apizza",
    "vs. Artisan American: Very similar, but California is historically tied to the 80s 'Gourmet' boom"
  ],
  "parameterSensitivity": [
    "Critical: Topping weight - too many fresh ingredients will create a 'soupy' center",
    "Highly sensitive: Oven temp - too high and the crust burns before the toppings (like chicken) cook",
    "Flour type: AP flour gives a softer bite, while Bread flour adds the chew preferred by some",
    "Fermentation temp: Cold retard is vital to prevent the dough from becoming too 'sour'",
    "Rolling vs Stretching: Hand stretching is essential to keep the 'gourmet' airy crust"
  ],
  "risks": [
    "Soggy Middle: Caused by overloaded toppings or moisture-heavy vegetables like zucchini",
    "Tough Crust: Over-kneading or using flour with excessive protein content",
    "Burnt Toppings: Delicate items like arugula or nuts added too early in the bake",
    "Dough Snap-back: Insufficient resting time after baling makes stretching difficult",
    "Bland Flavor: Skipping the cold-ferment or under-salting the dough"
  ],
  "notes": [
    "This style is all about the toppings - use the best quality, freshest produce available",
    "Don't be afraid of fruit - figs, pears, and grapes can work beautifully on this crust",
    "A baking stone is highly recommended for home bakers to get the proper bottom crisp",
    "Finish with fresh greens AFTER the bake to maintain their texture and color",
    "Pair with a light local beverage to complete the West Coast experience"
  ],
  "tags": [
    t('common.gourmet_personal_pizzas'),
    t('common.creative_toppings'),
    t('common.pizza'),
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
      "title": t('styles.modernist_pizza'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": "The California Pizza Kitchen Cookbook",
      "url": "https://www.amazon.com/California-Pizza-Kitchen-Cookbook/dp/0025405417",
      "author": "Larry Flax, Rick Rosenfield",
      "year": 1996
    },
    {
      "title": "Chez Panisse Menu Cookbook",
      "url": "https://www.amazon.com/Chez-Panisse-Menu-Cookbook-Alice/dp/0679720141",
      "author": "Alice Waters",
      "year": 1982
    },
    {
      "title": "Wolfgang Puck Adventures in the Kitchen",
      "url": "https://www.amazon.com/Wolfgang-Puck-Adventures-Kitchen/dp/039453965X",
      "author": "Wolfgang Puck",
      "year": 1991
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What defines a California Style pizza?",
      "answer": "It is defined by its small, personal size (10-12 inches), a light and tender thin crust, and most importantly, the use of non-traditional, upscale, and fresh seasonal toppings such as goat cheese, avocados, or smoked salmon."
    },
    {
      "question": "Can I make this in a regular home oven?",
      "answer": "Yes! Unlike Neapolitan, which requires 450°C+, California style is perfectly happy at 260-300°C. Using a pizza stone or steel in your home oven at its highest setting will yield excellent results."
    },
    {
      "question": "What kind of flour is best?",
      "answer": "While you can use 00 flour, California style is traditionally made with 'strong' American flours like All-Purpose or Bread flour. This gives the pizza a bit more structural integrity to hold up those creative toppings."
    },
    {
      "question": "Should I precook the toppings?",
      "answer": "It depends. Vegetables with high water content (mushrooms, onions) are often better roasted or sautéed beforehand. Delicate items like prosciutto or arugula should be added after the pizza comes out of the oven."
    },
    {
      "question": "How long should I ferment the dough?",
      "answer": "For the best flavor, a cold fermentation in the refrigerator for 24 to 48 hours is ideal. This allows the enzymes to break down sugars and create a more complex, 'artisan' taste without the extreme sourness of old dough."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
