import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const new_york_slice_shop: StyleDefinition = {
  "id": "new_york_slice_shop",
  "title": "New York Slice Shop (Classic)",
  "subtitle": t('styles.new_york_style_pizza_3'),
  "category": t('styles.pizza_10'),
  "family": t('styles.new_york_style_pizza_4'),
  "variantName": "New York Slice Shop (Classic)",
  "origin": {
    "country": t('styles.united_states_10'),
    "region": t('styles.new_york_city_3'),
    "period": t('styles.early_20th_century')
  },
  "intro": "The quintessential American street food. Cheap, fast, and eaten on the go. The 'New York Fold' is a practical necessity to keep the molten cheese and oil from sliding off.",
  "history": "Descended from Neapolitan immigrants (Lombardi's, 1905), this style evolved to suit coal and later gas deck ovens. The dough became larger (18-20 inches), lower moisture, and tougher to handle the 'slice fold'. The use of bromated high-gluten flour became a standard for that specific chew.",
  "culturalContext": {
    "significance": [
      "Iconic symbol of New York City and American urban culture since early 1900s",
      "Represents Italian-American immigrant success and cultural adaptation",
      "Quintessential fast food - cheap, portable, eaten on-the-go by busy New Yorkers",
      "Cultural touchstone in movies, TV shows, and popular culture worldwide",
      "Embodies NYC's working-class ethos: no-frills, efficient, democratic food"
    ],
    "consumptionContext": [
      "Sold by the slice at walk-up counters, reheated on deck ovens",
      "Eaten standing up, folded in half, often while walking or on subway",
      "Late-night food staple - pizzerias open until 3-4 AM in many neighborhoods",
      "Office lunch standard - delivered in large pies, eaten communally",
      "Dollar slice phenomenon: ultra-cheap slices as loss leaders in competitive markets"
    ],
    "evolution": [
      "1905: Lombardi's opens in Little Italy, first American pizzeria using coal ovens",
      "1920s-1940s: Italian immigrants adapt Neapolitan style to American tastes and ovens",
      "1950s-1970s: Gas deck ovens replace coal, style standardizes across NYC",
      "1980s-1990s: Bromated high-gluten flour becomes standard for characteristic chew",
      "2000s: Dollar slice wars begin, quality varies widely",
      "2010s-present: Artisan revival with cold-fermented doughs, premium ingredients"
    ],
    "rituals": [
      "The 'New York Fold' - folding slice lengthwise to eat, prevents topping slide",
      "Blotting excess oil with napkin - personal preference, hotly debated",
      "Ordering: 'Two slices and a Coke' is the classic NYC order",
      "Reheating ritual: watching pizzaiolo reheat your slice on the deck",
      "Late-night slice run: post-bar tradition for generations of New Yorkers"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Tangy, slightly sweet tomato sauce with oregano and garlic",
      "Rich, salty low-moisture mozzarella with mild funk",
      "Chewy, yeasty dough with complex fermentation notes from cold retard",
      "Subtle char and caramelization from high-heat deck baking",
      "Hint of olive oil richness throughout"
    ],
    "aromaProfile": [
      "Yeasty, bread-like fermentation with slight tang",
      "Oregano, garlic, and dried herbs from sauce",
      "Toasted, caramelized cheese with nutty notes",
      "Slight char and smoke from deck oven",
      "Warm olive oil and wheat flour aromas"
    ],
    "textureNotes": [
      "Chewy, substantial crust with strong gluten structure",
      "Crispy, sturdy bottom that doesn't sag when folded",
      "Slight crunch from cornmeal on deck (some pizzerias)",
      "Tender interior crumb with small, even holes",
      "Overall: foldable yet structurally sound, never floppy"
    ],
    "pairingRecommendations": [
      "Classic: Plain cheese, pepperoni, or sausage - keep it simple",
      "Traditional toppings: Mushrooms, peppers, onions, extra cheese",
      "Beverage: Cold beer, Coca-Cola, or Italian soda",
      "Condiments: Red pepper flakes, garlic powder, oregano, Parmesan",
      "Avoid: Gourmet toppings, arugula, balsamic - stick to NYC classics"
    ],
    "flavorEvolution": [
      "Fresh from oven (0-10 min): Peak flavor, cheese stretchy, crust crispy",
      "Room temp (10-30 min): Flavors meld, still excellent, classic NYC experience",
      "Reheated on deck: Revives crispiness, concentrates flavors, very acceptable",
      "Cold from fridge: Controversial but beloved by many - different but valid experience",
      "Next day: Crust toughens but flavors deepen, cold pizza breakfast tradition"
    ]
  },
  "technicalFoundations": [
    "Direct dough is standard. Old dough (scrap) sometimes added.",
    "Hydration: 58-62%"
  ],
  "doughImpact": [
    "High-gluten flour (13-14.5% protein) creates strong, chewy texture that holds up when folded",
    "Cold fermentation (24-48h) develops complex flavor and creates characteristic blistering",
    "Moderate hydration (58-62%) produces dough that's easy to handle and stretch to large diameter",
    "Oil addition (2-5%) improves extensibility and adds richness",
    "Sugar (1-3%) aids browning and balances acidity of tomato sauce"
  ],
  "bakingImpact": [
    "Gas deck oven (280-315°C) creates even heat for consistent baking across large 18-inch pies",
    "7-12 minute bake time develops crispy bottom while maintaining structural integrity",
    "Deck baking creates crispy, sturdy base that supports heavy toppings",
    "Lower temperature than Neapolitan allows for more even cooking and less charring",
    "Result must be firm enough to fold without breaking, yet tender enough to bite through easily"
  ],
  "technicalProfile": {
    "hydrationRange": [
      58,
      62
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
    "flourStrength": "High-Gluten Flour (13–14.5% protein), often bromated",
    "fermentation": {
      "bulk": "24–48h Cold Fermentation is critical for the characteristic blistered crust",
      "proof": "2–3h warm up before stretching",
      "coldRetard": t('styles.mandatory_for_texture_and_flavor')
    },
    "oven": {
      "type": "gas_deck",
      "temperatureC": [
        280,
        315
      ],
      "notes": t('styles.baked_on_deck_for_712_minutes_must_be_crisp_enough')
    },
    "difficulty": t('styles.medium_38'),
    "recommendedUse": [
      "By-the-slice sales",
      "Large 18-inch pies"
    ]
  },
  "defaults": {
    "hydration": 60,
    "salt": 2.2,
    "oil": 3,
    "sugar": 2
  },
  "recommendedFlavorComponents": [
    "mozzarella_low_moisture",
    "pepperoni",
    "italian_sausage",
    "bell_pepper",
    "cogumelos",
    "pecorino_romano"
  ],
  "regionalVariants": [
    "Manhattan Style - Classic coal-oven version (Lombardi's, John's)",
    "Brooklyn Style - Slightly thinner, crispier, often square-cut",
    "Long Island Bar Pie - Smaller (12-14\"), cooked in seasoned pans",
    "New Haven Apizza - Related style with charred crust, clam topping tradition"
  ],
  "climateScenarios": [
    "Hot/Humid (>25°C, >70% RH): Reduce cold fermentation to 24-36h, use ice water for mixing",
    "Cold/Dry (<15°C, <40% RH): Extend cold fermentation to 48-72h for flavor development",
    "Tropical: Keep dough refrigerated at all times, reduce yeast by 20%",
    "High Altitude (>1500m): Increase hydration by 2-3%, reduce bake time slightly"
  ],
  "styleComparisons": [
    "vs. Neapolitan: NY is larger, crispier, lower temperature, longer bake, foldable structure",
    "vs. Detroit: NY is hand-tossed not pan-baked, thinner, less airy, gas deck vs convection",
    "vs. Chicago Deep Dish: NY is thin crust vs thick, quick bake vs long, foldable vs fork-and-knife",
    "vs. California Style: NY is traditional toppings vs gourmet, chewy vs crispy-thin, classic vs innovative"
  ],
  "parameterSensitivity": [
    "Critical: Cold fermentation time - 24-48h is essential for flavor and texture",
    "High-gluten flour is non-negotiable - lower protein creates floppy, weak structure",
    "Oven temperature must be 280-315°C - lower temps create pale, tough crust",
    "Dough temperature during fermentation: must stay below 4°C to prevent over-fermentation",
    "Stretching technique: must be hand-tossed or hand-stretched, never rolled"
  ],
  "risks": [
    "Over-fermentation: Dough becomes too acidic, tears easily, develops off-flavors",
    "Under-fermentation: Lacks flavor complexity, dense texture, poor oven spring",
    "Insufficient gluten development: Dough won't stretch to 18 inches without tearing",
    "Too much sauce: Creates soggy center, prevents crispy bottom",
    "Oven too cool: Results in pale, tough, bread-like crust without proper char"
  ],
  "notes": [
    "Bromated flour was traditional but now banned in many regions - use high-gluten unbromated",
    "The 'New York Fold' is functional - it prevents toppings from sliding and makes eating easier",
    "Authentic NY pizza uses low-moisture mozzarella to prevent sogginess",
    "Coal ovens are traditional but rare now - gas deck ovens are standard",
    "Slices are typically sold by weight or by the slice, reheated on the deck"
  ],
  "tags": [
    "By-the-slice sales",
    "Large 18-inch pies",
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
      "title": t('styles.modernist_pizza_8'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": "The Pizza Bible",
      "url": "https://www.amazon.com/Pizza-Bible-Worlds-Favorite-Styles/dp/1607746267",
      "author": "Tony Gemignani",
      "year": 2014
    },
    {
      "title": "American Pie: My Search for the Perfect Pizza",
      "url": "https://www.amazon.com/American-Pie-Search-Perfect-Pizza/dp/1580084222",
      "author": "Peter Reinhart",
      "year": 2003
    },
    {
      "title": "PizzaMaking.com Forums - New York Style",
      "url": "https://www.pizzamaking.com/forum/index.php/board,31.0.html",
      "author": "Scott123 and community",
      "year": 2023
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What makes New York pizza different from other styles?",
      "answer": "New York pizza is characterized by its large size (18 inches), hand-tossed preparation, high-gluten flour creating a chewy yet foldable texture, and gas deck oven baking at 280-315°C. The mandatory 24-48 hour cold fermentation develops complex flavor and creates the signature blistered, slightly charred crust. It's designed to be eaten folded in half while walking."
    },
    {
      "question": "Can I substitute all-purpose flour for high-gluten flour?",
      "answer": "No, high-gluten flour (13-14.5% protein) is essential for authentic New York pizza. All-purpose flour (10-12% protein) will create a weak structure that can't support the large diameter and heavy toppings. The dough will tear during stretching and become floppy when folded. If high-gluten flour is unavailable, use bread flour (12-13% protein) as a compromise, though the texture won't be identical."
    },
    {
      "question": "Why is cold fermentation necessary?",
      "answer": "Cold fermentation (24-48 hours at 2-4°C) is critical for three reasons: 1) Flavor development - slow fermentation creates complex, slightly tangy flavor, 2) Texture - develops the characteristic blistering and char on the crust, 3) Extensibility - allows dough to stretch to 18 inches without tearing. Room temperature fermentation cannot replicate these qualities."
    },
    {
      "question": "How do I achieve the characteristic blistering on the crust?",
      "answer": "Blistering requires: 1) Cold fermentation for 24-48 hours to develop proper gas structure, 2) High oven temperature (280-315°C), 3) Proper hydration (58-62%), 4) Deck baking for direct bottom heat. The blisters form when gas pockets in the dough expand rapidly from the intense heat. Using a pizza steel or stone in a home oven at maximum temperature can approximate this effect."
    },
    {
      "question": "What's the difference between coal and gas deck ovens?",
      "answer": "Traditional New York pizzerias used coal ovens (Lombardi's, John's) which reach 370-425°C and impart a subtle smoky flavor. Modern gas deck ovens (280-315°C) are now standard due to regulations and consistency. Gas ovens provide more even heat distribution and easier temperature control. The pizza style has adapted - coal oven pizza tends to be slightly more charred and cooked faster (4-6 min vs 7-12 min)."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
