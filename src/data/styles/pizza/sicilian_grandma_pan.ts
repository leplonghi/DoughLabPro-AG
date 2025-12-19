import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const sicilian_grandma_pan: StyleDefinition = {
  "id": "sicilian_grandma_pan",
  "title": t('styles.sicilian_grandma_pan_title'),
  "subtitle": t('styles.american_pan_pizza_3'),
  "category": t('styles.pizza_13'),
  "family": t('styles.american_pan_pizza_4'),
  "variantName": t('styles.sicilian_grandma_pan_variant'),
  "origin": {
    "country": t('styles.united_states_11'),
    "region": t('styles.italianamerican_communities'),
    "period": "20th century"
  },
  "intro": t('styles.sicilian_grandma_pan_intro'),
  "history": "Originating in Italian-American kitchens, the 'Grandma' style is a leaner, thinner, and crunchier version of the classic Sicilian Sfincione. It was born from home cooks adapting professional techniques to standard home ovens and sheet pans, characterized by a 'sauce-over-cheese' application and a punchy garlic-infused oil flavor.",
  "culturalContext": {
    "significance": [
      "Represents the soul of Italian-American home cooking and the 'immigrant kitchen' tradition",
      "Symbol of domestic ingenuity - making restaurant-quality food with home equipment",
      "Known as the 'back pocket' pizza - something a grandmother could whip up with pantry staples",
      "Has experienced a major 'cool factor' resurgence in high-end NYC pizzerias",
      "Celebrates the humble sheet pan as a legitimate professional baking tool"
    ],
    "consumptionContext": [
      "Traditionally served at large family gatherings and Sunday dinners",
      "Commonly sold as 'square' slices in Long Island and NYC pizzerias",
      "Ideal candidate for home pizza parties due to its forgiving nature",
      "Served on large rectangular trays, cut into squares or rectangles",
      "Often consumed at room temperature, making it a staple of Italian-American buffets"
    ],
    "evolution": [
      "Late 19th Century: Sicilian immigrants bring Sfincione traditions to the US",
      "1950s-70s: Home cooks adapt deep-dish Sicilian styles to shallow household sheet pans",
      "1980s: Pizzerias in Long Island start labeling this rustic home style as 'Grandma Pizza'",
      "1990s: Umberto’s of New Hyde Park popularizes the style professionally",
      "2010s: Gourmet 'Grandma' versions with cold-fermentation become trendy in artisan pizzerias",
      "Present: Recognized as a distinct and respected third category alongside NY and Sicilian"
    ],
    "rituals": [
      "The 'well-seasoned' pan: Grandma pans are often heirloom items, never scrubbed with soap",
      "Sauce stripes: Applying sauce in diagonal lines over the cheese for visual and flavor contrast",
      "Garlic oil brush: Liberally brushing the edges with garlic-infused oil before or after baking",
      "The 'bottom check': Using a spatula to peek at the fried, golden-brown underside",
      "Post-bake basil tearing: Hand-tearing fresh basil over the hot pie to release oils"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Strong garlic and olive oil presence with deeply toasted wheat notes",
      "Tangy, uncooked tomato sweetness contrasted with salty mozzarella",
      "Caramelized cheese 'frico' edges where the dough meets the pan",
      "Fruity, spicy notes from high-quality extra virgin olive oil",
      "Savory herbs: heavy on dried oregano and fresh basil"
    ],
    "aromaProfile": [
      "Pungent roasted garlic and warm olive oil",
      "San Marzano tomato acidity and sweetness",
      "Fried dough notes - similar to a savory donut or focaccia",
      "Toasted cheese and dried oregano",
      "Freshly torn basil (post-bake)"
    ],
    "textureNotes": [
      "Crispy, fried-in-oil bottom crust with a golden shimmer",
      "Dense yet tender interior crumb - thinner than Sicilian, more substantial than NY",
      "Crunchy, caramelized cheese perimeter",
      "Slightly chewy gluten structure that holds up to heavy toppings",
      "Surface contrast between dry, baked cheese and moist, pooled sauce"
    ],
    "pairingRecommendations": [
      "Classic: Garlic oil, mozzarella, plum tomato sauce, basil",
      "Toppings: Sliced meatballs, spicy pepperoni, roasted red peppers",
      "Cheese: Dry mozzarella base with Pecorino Romano finish",
      "Beverage: Chianti, Italian pilsner, or a bold red sangria",
      "Dipping: Extra marinara or hot honey for the crust edges"
    ],
    "flavorEvolution": [
      "Hot (0-5 mins): Maximum crispness, garlic aroma is most aggressive",
      "Warm (10-20 mins): Dough absorbs some oil and sauce, becoming more flavorful and tender",
      "Room Temp: Excellent portability; flavors of the sauce and herbs become more prominent",
      "Next Day: Reheats perfectly in an oven (375°F/190°C) to restore that fried-bottom crunch",
      "Cold: A popular 'breakfast' pizza; the garlic and fat flavors are very concentrated"
    ]
  },
  "technicalFoundations": [
    t('styles.sicilian_grandma_pan_tech_1'),
    t('styles.sicilian_grandma_pan_tech_2')
  ],
  "doughImpact": [
    "High hydration (70%+) allows for a relatively thin dough to remain tender inside",
    "Generous oil in the pan fries the dough, creating a unique semi-fried texture",
    "Longer proofing directly in the pan leads to a more relaxed, easily dimpled dough",
    "Minimal handling after panned preservation of small fermentation bubbles",
    "Bread flour (high protein) provides the strength to support heavy sauce and cheese layers"
  ],
  "bakingImpact": [
    "Moderate temperatures (220-260°C) allow for a thorough 'fry' in the pan without burning the interior",
    "The metal pan acts as a heat conductor, ensuring the bottom is crisper than the top",
    "Sauce-on-top application protects the cheese from over-browning during the 15-20 min bake",
    "Low-moisture mozzarella prevents the pizza from becoming soggy during the longer bake time",
    "Steam trapped under the pan helps with a slight rise while the bottom fries"
  ],
  "technicalProfile": {
    "hydrationRange": [
      65,
      75
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      3,
      6
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose'),
    "fermentation": {
      "bulk": t('styles.sicilian_grandma_pan_fermentation_bulk'),
      "proof": t('styles.sicilian_grandma_pan_fermentation_proof'),
      "coldRetard": t('styles.optional_1224_h')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        220,
        260
      ],
      "notes": t('styles.baked_in_oiled_rectangular_pans_thickness_depends_')
    },
    "difficulty": t('styles.hard_24'),
    "recommendedUse": [
      t('styles.sicilian_grandma_pan_use_1'),
      t('styles.sicilian_grandma_pan_use_2')
    ]
  },
  "regionalVariants": [
    "Long Island Grandma - The original, typically thinner with 'sauce over cheese'",
    "Brooklyn Square - Often uses a heavier sauce and more fermentation time",
    "Sfincione (Sicilian Ancestor) - Thicker, topped with anchovies, onions, and breadcrumbs",
    "L.A. Artisan Grandma - Modern high-hydration sourdough variations",
    "Upside-Down Square - Heavy on cheese first, sauce applied in solid blocks"
  ],
  "climateScenarios": [
    "Hot/Humid (>25°C, >70% RH): Use cold water (4°C), reduce yeast by 25%, bulk ferment in fridge",
    "Cold/Dry (<15°C, <40% RH): Increase yeast by 10%, use warm water (30°C), cover pan tightly to prevent skin",
    "Coastal/High Humidity: May require 2-3% more salt to tighten gluten and prevent sogginess",
    "Desert/Low Humidity: Increase hydration by 2% to compensate for rapid evaporation during panning"
  ],
  "styleComparisons": [
    "vs. Sicilian: Grandma is thinner (~1/2 inch vs ~1 inch), crunchier, and denser",
    "vs. Detroit: Grandma uses traditional mozzarella, sauce stripes on top, no massive cheese crown",
    "vs. NY: Grandma is panned and fried in oil, whereas NY is stretched and baked on a stone",
    "vs. Focaccia: Grandma dough is similar but much thinner and focused on crispiness rather than height"
  ],
  "parameterSensitivity": [
    "Critical: Oil quantity in the pan - too little leads to sticking, too much makes it greasy",
    "Highly sensitive: Proof time in the pan - under-proofed is gummy; over-proofed is bread-like",
    "Sauce viscosity: Too thin and it soaks into the dough; too thick and it won't cook the top cheese",
    "Cheese quality: High-fat, low-moisture mozzarella is essential for the characteristic sear",
    "Oven temperature: Too low and the bottom won't fry before the top dries out"
  ],
  "risks": [
    "Soggy Bottom: Caused by under-baking or insufficient oil in the pan",
    "Sticking to Pan: Usually due to using a non-seasoned pan or not enough fat",
    "Tough Crumb: Over-mixing the dough or using flour with too high protein without enough water",
    "Sauce Bleeding: Sauce seeping through the cheese into the dough, creating a 'gum line'",
    "Burnt Garlic: If garlic is raw in the sauce, it may burn during the 20-minute bake"
  ],
  "notes": [
    "Always use a dark blue steel or heavy aluminum pan for the best thermal mass",
    "Don't be afraid of oil - the 'fry' is what defines the Grandma style",
    "Letting the dough rest for 30 mins after panning makes it easier to push into corners",
    "Traditional Grandma sauce is chunky and simple: crushed tomatoes, garlic, oregano, salt",
    "For the best crunch, finish on the floor of the oven for the last 2 minutes"
  ],
  "tags": [
    t('styles.sicilian_grandma_pan_tag_1'),
    t('styles.sicilian_grandma_pan_tag_2'),
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
      "title": t('styles.modernist_pizza_11'),
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
      "title": "Pizza: A Slice of American History",
      "url": "https://www.amazon.com/Pizza-Slice-American-History-Ronk/dp/141971203X",
      "author": "Liz Ronk",
      "year": 2012
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What is the difference between Sicilian and Grandma pizza?",
      "answer": "Sicilian pizza is traditionally thicker (1 inch+), proofed for a long time in the pan to create a soft, sponge-like crumb. Grandma pizza is thinner (about 1/2 to 3/4 inch), proofed for a shorter time, and has a much crunchier, denser, fried-in-oil bottom. Essentially, Sicilian is 'bread-like' while Grandma is 'cracker-like with a chew'."
    },
    {
      "question": "Why does the sauce go over the cheese?",
      "answer": "Placing sauce over the cheese (often in stripes or spots) protects the cheese from over-caramelizing during the moderately long bake time. It also prevents the moisture from the sauce from seeping into the dough, which would cause a soggy 'gum line'. Plus, the exposed sauce thickens and intensifies in flavor as it bakes."
    },
    {
      "question": "What kind of pan should I use?",
      "answer": "Professional pizzerias use blue steel rectangular pans (typically 12x18 inches). For home use, a heavy-duty rimmed baking sheet (half-sheet pan) works perfectly. Darker pans are better as they absorb more heat, resulting in a crispier bottom crust."
    },
    {
      "question": "How do I get the dough to reach the corners of the pan?",
      "answer": "Cold dough is elastic and will snap back. Once you've oiled the pan and stretched the dough as far as it comfortably goes, let it rest for 15-30 minutes. This relaxes the gluten, allowing you to easily dimple and push it all the way to the edges and corners without it pulling back."
    },
    {
      "question": "Can I use fresh mozzarella for Grandma pizza?",
      "answer": "It is not recommended as the primary cheese. Fresh mozzarella has a high water content which will release into the dough during the 15-20 minute bake, resulting in a soggy mess. Use a high-fat, low-moisture 'brick' mozzarella or a blend with Pecorino Romano for the best results. You can add fresh mozzarella as a post-bake garnish if desired."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
