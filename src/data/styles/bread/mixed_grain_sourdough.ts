import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const mixed_grain_sourdough: StyleDefinition = {
  "id": "mixed_grain_sourdough",
  "title": "Mixed Grain Sourdough (30–60% Wholegrain)",
  "subtitle": t('styles.levain__country_sourdough_3'),
  "category": t('styles.bread_13'),
  "family": t('styles.levain__country_sourdough_4'),
  "variantName": "Mixed Grain Sourdough (30–60% Wholegrain)",
  "origin": {
    "country": t('styles.global_2'),
    "region": t('styles.artisan_baking'),
    "period": t('styles.modern')
  },
  "intro": "Common in artisan bakeries and health-conscious baking, adapted with local grain blends.",
  "history": "Mixed Grain Sourdough is the backbone of the modern artisan bread movement. It draws inspiration from historical 'Maslin' breads (traditional blends of wheat and rye grown together) and the French 'Pain de Campagne'. In the 20th century, as people moved away from industrial white bread, bakers began experimenting with higher percentages of stone-ground whole wheat, rye, spelt, and ancient grains. This style represents the intersection of traditional fermentation, sustainable agriculture, and modern nutritional science, prioritizing the biodiversity of the grain over the uniformity of refined flour.",
  "culturalContext": {
    "significance": [
      "The 'Earth-centered' loaf of the modern artisanal sourdough revival",
      "Represents a shift toward soil health, local milling, and heirloom grain diversity",
      "Mathematically complex: requires balancing the different water absorption rates of multiple grains",
      "Celebrates the 'imperfectly' rustic aesthetic—darker, denser, and more textured",
      "A symbol of 'Slow Food' and the rejection of highly processed industrial millinery"
    ],
    "consumptionContext": [
      "The ultimate 'Sandwich Sourdough' for savory fillings like aged cheese or smoked meats",
      "Highly prized for toasting; the variety of grains creates a more complex caramelization",
      "Served in thick, hearty slices with high-fat cultured butter and sea salt",
      "The preferred base for 'Avocado Toast' in modern high-end cafes",
      "Often used in 'Tartines' (open-faced sandwiches) where the bread flavor is prominent"
    ],
    "evolution": [
      "Pre-Industrial: Farmers bake with whatever 'mix' comes from the field (Maslin)",
      "1970s: The 'Tassajara' and 'Whole Earth' movement popularizes coarse, whole-grain loaves in the US",
      "1990s: Chad Robertson (Tartine) refines the high-hydration method for 10-20% whole grain",
      "2010s: Bakers push to 40-60% mixed grain while maintaining a light, open crumb",
      "Present: Focus on 'Regional Grains'—using specific heritage wheat from local farmers"
    ],
    "rituals": [
      "The 'Soak': pre-hydrating coarse bits or seeds (soaker) to prevent them from drying out the crumb",
      "Bran Sifting: sifting stone-ground flour to extract bran for the crust decoration",
      "Autolyse: the mandatory rest period allowing different flours to hydrate at their own pace",
      "Deep Scoring: using a bold, single slash to allow the heavy, mixed-grain dough to expand",
      "The Crumb-Shot: the ritual of slicing and inspecting the distribution of different grain particles"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Complex, multi-layered earthy notes (hazelnut, malt, and cocoa)",
      "Moderate lactic acidity with a subtle fruity tang",
      "Deeply toasted grain profile from the high-mineral crust",
      "Savory, almost mineral-like finish",
      "Sweetness from the long-fermented whole grains"
    ],
    "aromaProfile": [
      "Nutty and earthy (like a forest floor or fresh earth)",
      "Toasted cereal and dark chocolate",
      "Subtle spice notes (if rye is included)",
      "Mildly sour and tangy",
      "Deeply caramelized crust aroma"
    ],
    "textureNotes": [
      "Hearty and Substantial: a more significant chew than white bread",
      "Textured Crumb: visible flecks of bran and germ throughout the interior",
      "Moist and Custardy: high hydration creates a 'cool' and moist internal feel",
      "Shatter-Crust: a thick, dark-brown crust that provides a major crunch",
      "Irregular Alveoli: medium-sized, uneven holes that hold spreads well without leaking"
    ],
    "pairingRecommendations": [
      "Cheese: Sharp Aged Cheddar, French Comté, or creamy Goat Cheese",
      "Fat: Cultured salted butter or high-quality extra virgin olive oil",
      "Spread: Smoked salmon with cream cheese or almond butter with sea salt",
      "Meal: Hearty vegetable soups (Minestrone), beef stew, or shakshuka",
      "Beverage: Robust red wine (Syrah), dark ale (Stout), or strong Earl Grey tea"
    ],
    "flavorEvolution": [
      "Fresh (0-12 hours): Maximum crust crunch; grain flavors are distinct and 'green'",
      "Day 2: The 'Peak'; the sourdough acidity and grain sweetness reach perfect balance",
      "Day 3-4: The crumb sets; the toast becomes exponentially better as moisture redistributes",
      "Day 7: Still moist; the high whole-grain content acts as a natural preservative",
      "Stale: Excellent for 'Panzanella' or traditional bread-based soups"
    ]
  },
  "technicalFoundations": [
    "Levain 15–30%, sometimes stiff for higher wholegrain percentages.",
    "Hydration: 72-82%"
  ],
  "doughImpact": [
    "High hydration (72-82%) is necessary as bran (whole grain) absorbs significantly more water",
    "Mixed flour types (Wheat/Rye/Spelt) require different handling: Rye adds stickiness, Spelt adds extensibility",
    "Increase in minerals/bran accelerates fermentation significantly; dough will move faster than white bread",
    "Extended Autolyse (1-2 hours) is vital to soften the sharp bran particles before kneading",
    "Inclusion of 'Levain' at 20-30% ensures enough enzymatic activity to break down complex sugars"
  ],
  "bakingImpact": [
    "Requires a longer, 'drying' bake to remove the high internal moisture of the wholegrains",
    "High initial heat (240-250°C) with heavy steam is required for maximum volume (oven spring)",
    "Baked to a very dark 'bold' color (maillard) to develop the nutty flavors of the bran",
    "The crust becomes thicker and more protective than on white loaves, aiding shelf life",
    "A 'falling oven' temperature profile (starting high, then lowering) ensures a cooked center"
  ],
  "technicalProfile": {
    "hydrationRange": [
      72,
      82
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      3
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": "Blend of bread flour and wholegrain flours (wheat, rye, others)",
    "fermentation": {
      "bulk": "3–4 h at 24–26°C with folds",
      "proof": "1–3 h or retarded overnight",
      "coldRetard": t('styles.very_common_816_h_for_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.requires_good_steaming_scoring_adapted_to_dough_st')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.nutritious_sourdough_loaves'),
      t('common.sandwiches'),
      t('common.toast')
    ]
  },
  "regionalVariants": [
    "Pain de Campagne (Modern) - The classic French wheat/rye blend (usually 10-15% rye)",
    "German Mischbrot - Heavy rye/wheat blend (usually 50/50 or 60/40 rye-forward)",
    "Danish Rugbrød Style Sourdough - Wheat-based loaf with high amounts of cracked rye and seeds",
    "Country Brown - The US artisan standard (80% white, 20% whole wheat/rye)",
    "Ancient Heritage Blend - Loaves using Spelt, Einkorn, or Emmer for 100% of the grain mix"
  ],
  "climateScenarios": [
    "Hot/Humid: The whole grains will ferment uncontrollably; use 10% less Levain and iced water",
    "Arid/Dry: The crust will set too fast; double the steam time and use a Dutch oven if possible",
    "Cold Winter: Extend the bulk fermentation by 2-3 hours; whole grains need warmth to activate",
    "High Altitude: Reduce Levain and hydration slightly (2-3%) to manage the faster gas expansion"
  ],
  "styleComparisons": [
    "vs. Tartine Country: Mixed grain uses more whole grain (30%+) vs Tartine's standard 10%",
    "vs. Baguette: Opposite ends; Mixed grain is heavy/moist/complex vs Baguette's light/dry/simple",
    "vs. 100% Whole Wheat: Mixed grain is lighter and more open due to the white flour support",
    "vs. Rye Bread: Mixed grain has a wheat-based gluten structure vs Rye's pentosan-based structure"
  ],
  "parameterSensitivity": [
    "Critical: Water Balance - even 2% too much can make the dough unshapeable (slack)",
    "Highly sensitive: Bulk Fermentation - whole grains have 'no brakes'; catch it at 30-40% growth",
    "Bran Sharpness: If the flour is very coarse, it can 'cut' the gluten; handle very gently",
    "Levain Maturity: Using a young (sweet) levain balances the potential bitterness of whole grains",
    "Flour Ash Content: Higher mineral content means faster browning and faster fermentation"
  ],
  "risks": [
    "The 'Flying Crust' (Separation): Over-fermented top or not enough steam during the bake",
    "Gummy Center: Under-baking a high-hydration whole grain loaf; ensure 98°C internal temp",
    "Bitter finish: Using rancid whole wheat flour or over-oxidizing the dough during mixing",
    "Brick-like Crumb: Under-hydrating the bran or not enough gluten development",
    "Flat Loaf: Over-fermentation or the grains were too weak to hold the high water content"
  ],
  "notes": [
    "If using more than 30% whole grain, consider a 1-hour room temp autolyse before adding salt/yeast",
    "Sift the stone-ground flour and add the bran back during the folding process for better gluten",
    "Bake it 'bold'—don't be afraid of a few charred edges; that's where the flavor is",
    "Let it rest at least 4 hours before slicing; the moist wholegrain crumb needs time to set",
    "Record which grains you use—even a 5% addition of Spelt or Rye changes the handling drastically"
  ],
  "tags": [
    t('common.nutritious_sourdough_loaves'),
    t('common.sandwiches'),
    t('common.toast'),
    t('common.bread'),
    t('common.global')
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
      "title": "Tartine Bread",
      "url": "https://www.amazon.com/Tartine-Bread-Chad-Robertson/dp/0811870413",
      "author": "Chad Robertson",
      "year": 2010
    },
    {
      "title": t('styles.modernist_bread_12'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "The Sourdough School",
      "url": "https://sourdough.co.uk/",
      "author": "Vanessa Kimbell",
      "year": 2018
    },
    {
      "title": "Flour Water Salt Yeast",
      "url": "https://www.amazon.com/Flour-Water-Salt-Yeast-Fundamentals/dp/160774273X",
      "author": "Ken Forkish",
      "year": 2012
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Why is the dough for mixed grain sourdough so much stickier?",
      "answer": "Whole grain flours (especially Rye and Spelt) contain more soluble fibers and sugars that make the dough feel tacky. Additionally, the bran 'leaks' moisture during fermentation. Don't add more flour; use wet hands and focus on gentle folds to build strength."
    },
    {
      "question": "Do I really need more water for whole grains?",
      "answer": "Yes! The bran and germ in whole grains act like tiny sponges that absorb significantly more water than white flour starch. If you use white-bread hydration for a 50% whole grain loaf, the bread will be dry, dense, and crumbly."
    },
    {
      "question": "What is the best blend of grains for a beginner?",
      "answer": "A great starting point is 80% High-Protein White Bread Flour, 15% Stone-ground Whole Wheat, and 5% Whole Rye. This gives you plenty of health and flavor benefits while maintaining the strong gluten network of white bread."
    },
    {
      "question": "Why did my loaf turn out dense and flat?",
      "answer": "The most common reason is over-fermentation. Whole grains provide more nutrients for the yeast and bacteria, making the dough rise much faster. If you wait too long, the gluten weakens and collapses in the oven. Aim to bake when the dough is still 'bouncy' and has only grown about 30-50% in volume."
    },
    {
      "question": "How long should I wait to slice mixed grain sourdough?",
      "answer": "Wait at least 4 hours, and ideally 12 hours. Moist, high-whole-grain loaves continue to 'cook' and set their internal structure through residual heat. Slicing too early can result in a gummy, wet-feeling crumb."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
