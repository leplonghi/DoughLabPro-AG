import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const detroit_style_classic: StyleDefinition = {
  "id": "detroit_style_classic",
  "title": "Detroit Style Classic (Blue Steel Pan)",
  "subtitle": t('styles.detroit_pizza'),
  "category": t('styles.pizza_4'),
  "family": t('styles.detroit_pizza_2'),
  "variantName": "Detroit Style Classic (Blue Steel Pan)",
  "origin": {
    "country": t('styles.united_states_7'),
    "region": t('styles.detroit'),
    "period": t('styles.mid_20th_century')
  },
  "intro": "Served in rectangles with a crispy cheese crown, often topped with sauce stripes after baking.",
  "history": "Detroit-style pizza originated in mid-20th-century Detroit using automotive parts pans, producing a thick, airy crumb and caramelized cheese edges.",
  "culturalContext": {
    "significance": [
      "Symbol of Detroit's industrial heritage and working-class ingenuity",
      "Born from necessity: automotive workers repurposed blue steel parts trays as pizza pans",
      "Represents Detroit's cultural identity and resilience during economic decline",
      "Regional pride: Detroit's answer to New York, Chicago, and Neapolitan styles",
      "Renaissance food: experiencing national revival as Detroit's culinary ambassador"
    ],
    "consumptionContext": [
      "Originally neighborhood bar food and family pizzeria staple",
      "Served in rectangular slices, often square-cut into smaller pieces",
      "Casual dining: eaten with hands, often with beer at local taverns",
      "Takeout tradition: whole pans for family dinners, parties, gatherings",
      "Modern: Upscale versions in trendy restaurants, but roots remain working-class"
    ],
    "evolution": [
      "1946: Gus Guerra creates first Detroit-style pizza at Buddy's Rendezvous",
      "1950s-1960s: Style spreads to neighborhood pizzerias across Detroit",
      "1970s-1990s: Remains regional specialty, little known outside Michigan",
      "2000s: Slow recognition as distinct style, featured in pizza competitions",
      "2012-present: National explosion - chains like Jet's Pizza, Via 313 spread the style",
      "Modern: Featured on food shows, adopted by artisan pizzerias nationwide"
    ],
    "rituals": [
      "The 'frico' hunt: seeking out the crispiest, most caramelized cheese edges",
      "Sauce stripes on top - applied after baking in traditional style",
      "Blue steel pan seasoning: each pan develops unique patina over years",
      "Corner piece preference: most coveted for maximum crispy edges",
      "Eating cold next day: thick crust holds up well, develops cult following"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Rich, caramelized Wisconsin brick cheese with nutty, slightly tangy notes",
      "Crispy, fried 'frico' edges with intense umami and salt",
      "Tangy tomato sauce with oregano, applied in stripes for concentrated flavor",
      "Yeasty, slightly sweet dough with hint of olive oil",
      "Contrast of crispy bottom, airy interior, and molten cheese"
    ],
    "aromaProfile": [
      "Caramelized cheese with toasted, nutty notes",
      "Fried dough and olive oil from pan-frying effect",
      "Tomato sauce with oregano and garlic",
      "Yeasty fermentation with slight sweetness",
      "Overall: rich, savory, indulgent pizza aroma"
    ],
    "textureNotes": [
      "Crispy, almost fried bottom crust from oil in blue steel pan",
      "Light, airy, focaccia-like interior with large irregular holes",
      "Crispy, lacy cheese 'frico' crust at edges - crunchy and caramelized",
      "Tender, pillowy center that's never dense or heavy",
      "Overall: multiple textural contrasts in every bite"
    ],
    "pairingRecommendations": [
      "Classic: Pepperoni, brick cheese, sauce stripes on top",
      "Traditional: Mushrooms, Italian sausage, green peppers",
      "Beverage: Cold beer (lager or IPA), Faygo (Detroit soda), or Vernors ginger ale",
      "Cheese: Wisconsin brick cheese is essential - don't substitute with mozzarella alone",
      "Avoid: Delicate toppings that can't handle thick crust and intense cheese"
    ],
    "flavorEvolution": [
      "Fresh from oven (0-15 min): Peak crispiness, cheese molten, frico edges perfect",
      "15-30 min: Cheese sets, flavors meld, still excellent quality",
      "Room temperature: Holds up better than thin crust, flavors concentrate",
      "Cold next day: Cult favorite - thick crust maintains structure, cheese firms up",
      "Reheated: Works well in oven or toaster oven, revives crispiness"
    ]
  },
  "technicalFoundations": [
    "Typically direct dough with yeast and moderate fermentation.",
    "Hydration: 70-75%"
  ],
  "doughImpact": [
    "High hydration (70-75%) creates light, airy interior with large, irregular holes",
    "Pan fermentation allows dough to rise upward, creating thick, focaccia-like texture",
    "Oil in dough and pan creates fried, crispy bottom and edges",
    "Bread flour (12-13% protein) provides structure to support thick, heavy toppings",
    "Cold fermentation (optional) develops flavor complexity and improves texture"
  ],
  "bakingImpact": [
    "Blue steel pan conducts heat intensely, frying the bottom and creating caramelized cheese crust",
    "High temperature (240-280°C) in convection oven creates crispy exterior while maintaining soft interior",
    "Cheese placed to the edges caramelizes against hot pan, forming the signature 'frico' crust",
    "Sauce applied after baking (or in stripes) prevents soggy center",
    "Rectangular shape and thick profile create high crust-to-center ratio"
  ],
  "technicalProfile": {
    "hydrationRange": [
      70,
      75
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      3,
      5
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.bread_flour_protein_around_1213'),
    "fermentation": {
      "bulk": "1–3 h at room temperature or partial cold ferment",
      "proof": "45–90 min in pan",
      "coldRetard": t('styles.optional_overnight_in_pan')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        240,
        280
      ],
      "notes": t('styles.bluesteel_or_similar_pans_heavily_oiled_for_fried_')
    },
    "difficulty": t('styles.hard_21'),
    "recommendedUse": [
      t('common.thick_pan_pizza'),
      "Cheese-edge caramelized pizzas"
    ]
  },
  "regionalVariants": [
    "Buddy's Pizza - Original Detroit style, square cut, sauce on top",
    "Loui's Pizza - Thinner crust variation, more cheese",
    "Cloverleaf - Thicker, bread-like base",
    "Modern Detroit Style - Adapted for home ovens, various pan types"
  ],
  "climateScenarios": [
    "Hot/Humid (>25°C, >70% RH): Reduce proof time in pan by 20-30%, use cooler water (18-20°C)",
    "Cold/Dry (<15°C, <40% RH): Extend proof time in pan by 30-40%, use warmer water (25-28°C)",
    "Tropical: Proof in refrigerator for first hour, then room temp for final rise",
    "High Altitude (>1500m): Increase hydration by 2-3%, reduce bake time slightly"
  ],
  "styleComparisons": [
    "vs. Sicilian: Detroit is lighter, airier, higher hydration, cheese-to-edge technique",
    "vs. Focaccia: Detroit has toppings, cheese crust, higher temperature, pizza vs bread",
    "vs. Chicago Deep Dish: Detroit is lighter, crispier, cheese-first layering vs sauce-on-top",
    "vs. Grandma Pizza: Detroit is thicker, more airy, blue steel vs sheet pan, higher temp"
  ],
  "parameterSensitivity": [
    "Critical: Pan type - blue steel or similar heavy-gauge steel essential for proper crust",
    "Highly sensitive to oil amount in pan - too little: sticks, too much: greasy",
    "Cheese must reach edges - this creates the signature caramelized crust",
    "Proof time in pan critical: under-proofed is dense, over-proofed collapses",
    "Oven temperature must be high enough to fry bottom while cooking thick dough"
  ],
  "risks": [
    "Dough sticks to pan: Insufficient oil or pan not properly seasoned",
    "Soggy center: Too much sauce, sauce applied before baking, insufficient bake time",
    "Pale bottom: Oven too cool, pan not preheated, insufficient oil",
    "Burnt cheese edges: Oven too hot, cheese not brick cheese (high moisture), over-baking",
    "Dense, heavy texture: Under-proofing, insufficient hydration, over-mixing"
  ],
  "notes": [
    "Original Detroit pizzas used blue steel automotive parts pans - these are now manufactured for pizza",
    "Wisconsin brick cheese is traditional - it has high fat, caramelizes beautifully",
    "Sauce is often applied in stripes after baking, not covering entire surface",
    "The 'frico' (cheese crust) is the most prized element - crispy, lacy, caramelized",
    "Detroit style has experienced a renaissance since 2010s, spreading nationwide"
  ],
  "tags": [
    t('common.thick_pan_pizza'),
    "Cheese-edge caramelized pizzas",
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
      "title": t('styles.modernist_pizza_3'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": t('styles.detroit_pizza_historical_accounts'),
      "url": "https://www.seriouseats.com/detroit-style-pizza-history",
      "author": "Serious Eats",
      "year": 2020
    },
    {
      "title": "The Pizza Bible",
      "url": "https://www.amazon.com/Pizza-Bible-Worlds-Favorite-Styles/dp/1607746267",
      "author": "Tony Gemignani",
      "year": 2014
    },
    {
      "title": "Detroit Pizza: A Slice of Motor City History",
      "url": "https://www.detroitnews.com/story/entertainment/dining/2019/06/13/detroit-style-pizza-history/1440564001/",
      "author": "Detroit News",
      "year": 2019
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What makes Detroit pizza different from other thick-crust styles?",
      "answer": "Detroit pizza is unique for its rectangular shape, light and airy interior (70-75% hydration), crispy fried bottom from blue steel pans, and most distinctively, the caramelized cheese crust that extends to the edges of the pan. The cheese is placed first, then toppings, with sauce often added in stripes after baking. This creates a crispy, lacy 'frico' edge that's the signature of authentic Detroit style."
    },
    {
      "question": "Can I make Detroit pizza without a blue steel pan?",
      "answer": "While blue steel pans are traditional and ideal (they conduct heat intensely for the fried bottom), you can use alternatives: heavy-gauge aluminum pans, cast iron skillets, or even dark-colored metal baking pans. The key is a heavy, well-oiled pan that conducts heat well. Avoid glass or ceramic - they don't get hot enough. A 10x14 inch pan is standard size. Season the pan well with oil before first use."
    },
    {
      "question": "Why is Wisconsin brick cheese recommended?",
      "answer": "Wisconsin brick cheese has the perfect fat and moisture content for Detroit pizza. It melts smoothly, browns beautifully, and caramelizes against the hot pan to create the signature crispy, lacy edges. It has a mild, slightly tangy flavor that doesn't overpower toppings. If unavailable, use a blend of low-moisture mozzarella (70%) and mild cheddar or Monterey Jack (30%). Avoid pre-shredded cheese - it contains anti-caking agents that prevent proper melting."
    },
    {
      "question": "Should I put sauce on before or after baking?",
      "answer": "Traditional Detroit style applies sauce after baking, either in stripes or dollops, not covering the entire surface. This prevents a soggy center and allows the cheese to caramelize properly. Some modern variations put a thin layer of sauce under the cheese, then add more after baking. Never apply thick sauce before baking - the high hydration dough and thick profile make it prone to sogginess."
    },
    {
      "question": "How do I achieve the crispy, fried bottom?",
      "answer": "The crispy bottom requires four elements: 1) Heavy-gauge steel pan (blue steel is best) that conducts heat intensely, 2) Generous oil in the pan (2-3 tablespoons) to fry the dough, 3) High oven temperature (240-280°C), preferably convection, 4) Baking on the lowest rack for maximum bottom heat. The oil should sizzle when dough is added. Some recipes call for preheating the oiled pan for extra crispiness."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
