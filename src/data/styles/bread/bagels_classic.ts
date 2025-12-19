import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const bagels_classic: StyleDefinition = {
  "id": "bagels_classic",
  "title": t('styles.classic_boiled_bagels'),
  "subtitle": t('styles.specialty_breads'),
  "category": t('styles.bread_2'),
  "family": t('styles.specialty_breads_2'),
  "variantName": t('styles.classic_boiled_bagels_2'),
  "origin": {
    "country": "Poland/United States",
    "region": t('styles.jewish_baking_new_york'),
    "period": "Traditional/Modern"
  },
  "intro": "Served with spreads like cream cheese and toppings such as smoked fish, widely found in bagel shops and bakeries.",
  "history": "Bagels originated in the Jewish communities of Poland in the 17th century, where they were traditionally given to women after childbirth. They migrated to New York City with Jewish immigrants in the late 19th century. The 'New York Style' Bagel was defined by the use of high-gluten flour and a mandatory boiling step in malted water, which creates the unique shiny, leathery crust and dense, chewy interior that distinguishes them from common rolls.",
  "culturalContext": {
    "significance": [
      "The undisputed culinary icon of New York City and Jewish diaspora culture",
      "One of the few breads in the world where density is a positive quality marker",
      "Historically associated with 'Lox and Schmear' (smoked salmon and cream cheese)",
      "Symbol of late-night and early-morning urban life",
      "Protected by the 'Bagel Bakers Local 338' union in NY for decades, keeping the craft secret"
    ],
    "consumptionContext": [
      "Traditionally served sliced vertically with cream cheese and toppings",
      "Available in 'Everything', 'Sesame', 'Poppy', and 'Cinnamon Raisin' varieties",
      "The 'Lox' Bagel (salmon, cream cheese, capers, onions, tomatoes) is the classic meal",
      "A staple for weekend family brunches in the Northeastern US",
      "In NY, customers often debate whether to 'toast' or 'not to toast' a fresh bagel"
    ],
    "evolution": [
      "1600s: First records of 'Beygls' in Krakow, Poland",
      "1910s: Bagel unions in NYC standardize the size (originally much smaller)",
      "1960s: Introduction of the automated bagel machine (Thompson) changes the industry",
      "1990s: Bagels become a global 'super-food', though quality often drops in mass production",
      "2000s: Resurgence of hand-rolled, wood-fired 'artisan' bagel shops in NY and Montreal",
      "Present: Global fusion bagels containing everything from rainbows to ube swirls"
    ],
    "rituals": [
      "The Boiling Ritual: observing the 'float' when the bagels are dropped into malted boiling water",
      "Hand-Rolling: the ritual of rolling a dough strip around the hand to create the seamless ring",
      "The 'Everything' Shower: dredging the wet, boiled bagel through a mix of seeds and salt",
      "The Schmear: applying a thick, generous layer of cream cheese from end to end",
      "Checking the 'Hole': ensures it's tight enough to hold cream cheese but visible for boiling"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Subtle malty sweetness from barley malt syrup (inside and in the boil)",
      "Clean, high-quality toasted wheat",
      "Savory and salty surface (especially seeds/everything mix)",
      "Zero acidity (unless using sourdough), focusing on pure fermentative depth",
      "Distinct 'leathery' toasted note from the boiled crust"
    ],
    "aromaProfile": [
      "Deep malt and honey-like notes",
      "Toasted sesame and poppy seeds (standard varieties)",
      "Freshly baked heavy bread",
      "Smoky wood-fired notes (in traditional shops)",
      "Nutty wheat aromas"
    ],
    "textureNotes": [
      "The 'NY Chew': extreme resistance when bitten, followed by a dense, moist finish",
      "Shiny, Leathery Crust: smooth, thin, and slightly tough due to the boiling step",
      "The 'Blisters': tiny micro-bubbles on the surface indicating long cold fermentation",
      "Dense Crumb: no large holes; a tight, uniform network that holds liquids well",
      "Structural Integrity: should be sturdy enough to hold significant toppings without bending"
    ],
    "pairingRecommendations": [
      "Schmear: Full-fat cream cheese (Philadelphia style or artisanal)",
      "Protein: Smoked salmon (Lox), whitefish salad, or pastrami",
      "Vegetables: Capers, red onion, vine-ripe tomatoes, sliced cucumbers",
      "Breakfast: Bacon, egg, and cheese (BEC) on a bagel",
      "Beverage: Strong black coffee (NY deli style) or orange juice"
    ],
    "flavorEvolution": [
      "Warm (0-2 hours): Peak texture; the crust is at its most 'leathery' and the inside is soft-warm",
      "4-8 Hours: Becomes significantly firmer; this is the classic 'Deli Bagel' state",
      "Next Day: Must be toasted; toasting restores the aroma and softens the interior",
      "Day 3: Best used for bagel chips (thinly sliced and baked until dry)",
      "Freezing: Sliced bagels freeze exceptionally well and toast perfectly from frozen"
    ]
  },
  "technicalFoundations": [
    "Can be direct dough or use preferments; malt often included.",
    "Hydration: 55-62%"
  ],
  "doughImpact": [
    "Ultra-low hydration (55-62%) creates the required density and resistance ('chew')",
    "High-Gluten Flour (13.5-14.5% protein) is essential to maintain the ring shape during boiling",
    "Barley Malt Syrup provides the signature flavor and nutrients for yeast in the heavy dough",
    "Minimal yeast works slowly during the mandatory 12-24h cold retard (bulk or shaped)",
    "Tight rolling/shaping ensures no internal air pockets, creating the 'solid' bagel bite"
  ],
  "bakingImpact": [
    "The Kettle Boil (30-60 sec) pre-gelatinizes the surface starch, creating the shiny, leathery crust",
    "Boiling in malted water (or with baking soda) provides the alkaline environment for browning",
    "High heat (220-250°C) is required to 'set' the dense dough quickly after the boil",
    "Baking on bagel boards (wet burlap) followed by flipping prevents a 'flat' bottom and ensures even bake",
    "A relatively long bake (15-20 mins) is needed to penetrate the dense, moist crumb"
  ],
  "technicalProfile": {
    "hydrationRange": [
      55,
      62
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      5
    ],
    "sugarRange": [
      2,
      6
    ],
    "flourStrength": t('styles.highgluten_flour_for_chewy_texture'),
    "fermentation": {
      "bulk": "1–2 h at room temperature",
      "proof": t('styles.shaped_rings_are_often_retarded_cold_overnight'),
      "coldRetard": t('styles.common_cold_proof_before_boiling_and_baking')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        220,
        250
      ],
      "notes": "Boiled briefly (often with malt or baking soda) before baking."
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.bagels_for_breakfast_and_sandwiches')
    ]
  },
  "regionalVariants": [
    "New York Style - The classic boiled, dense, and large modern version",
    "Montreal Style - Smaller, sweeter (honey-boiled), and baked in wood-fired ovens",
    "Jerusalem Bagel - Long, oval-shaped, softer, and usually topped with Za'atar",
    "St-Viateur/Fairmount - Specific Montreal sub-styles with distinct hand-rolled shapes",
    "Industrial Bagel - Steamed rather than boiled; lighter and more bread-like (not authentic)"
  ],
  "climateScenarios": [
    "Dry NYC Winter: Use slightly warmer water (30°C) to help the low-hydration dough mix",
    "Hot/Humid Summer: Move shaped bagels to the fridge immediately to prevent over-proofing",
    "Coastal: The high humidity can make the boiled crust go 'soft/soggy'—extend the bake by 2 mins",
    "High Altitude: Reduce yeast and watch the boil time; they will expand and collapse faster"
  ],
  "styleComparisons": [
    "vs. Montreal Bagel: NY is salt-boiled and larger/saltier; Montreal is honey-boiled and smaller/sweeter",
    "vs. Pretzel: Both are boiled/dipped in alkaline water, but Bagels are dense/lean vs. Pretzel's open/oily",
    "vs. Bread Roll: Bagels are boiled and low-hydration; rolls are direct-bake and high-hydration",
    "vs. Bialy: Bagels have a hole and are boiled; Bialys have a depression and are only baked"
  ],
  "parameterSensitivity": [
    "Critical: Flour Protein - using regular All-Purpose will result in a soft, 'ordinary' bread roll",
    "Highly sensitive: Boil Time - too long and it won't rise in the oven; too short and it won't be shiny",
    "Cold Proofing: Skipping the 12h retard is the main reason for flavorless, 'commercial' bagels",
    "Barley Malt: Using sugar instead of malt changes the signature NYC deli flavor profile",
    "Dough Temperature: Keeping the dough 'cool' during mixing prevents premature yeast activity"
  ],
  "risks": [
    "The 'Pancake' Bagel: Over-proofing before boiling leads to total collapse in the water",
    "Matte/Dull Surface: Not enough malt in the boiling water or the water wasn't fully boiling",
    "Raw Middle: Bake temperature too high, burning the outside while the dense center stays gummy",
    "Toughness (Too Hard): Using old flour or over-boiling beyond 90 seconds",
    "Hole Closing: Not stretching the center enough during shaping; it will close during the boil"
  ],
  "notes": [
    "If you don't have barley malt syrup, use honey or brown sugar (though it's less authentic)",
    "Place the bagels in the fridge for at least 12 hours—this is where the flavor and blisters come from",
    "Make the hole bigger than you think; it will shrink during the proof and the boil",
    "Use a slotted spoon to flip them gently in the boiling water",
    "Always seed them IMMEDIATELY after they come out of the water while they are still sticky"
  ],
  "tags": [
    t('common.bagels_for_breakfast_and_sandwiches'),
    t('common.bread'),
    "Poland/United States"
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
      "title": t('styles.modernist_bread_2'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "The Bagel: The Surprising History of a Modest Bread",
      "url": "https://www.amazon.com/Bagel-Surprising-History-Modest-Bread/dp/0300117627",
      "author": "Maria Balinska",
      "year": 2008
    },
    {
      "title": "Inside the Jewish Bakery",
      "url": "https://www.amazon.com/Inside-Jewish-Bakery-Recipes-Traditions/dp/1935754051",
      "author": "Stanley Ginsberg, Norman Berg",
      "year": 2011
    },
    {
      "title": "The Secrets of New York Bagels",
      "url": "https://www.seriouseats.com/how-to-make-real-new-york-bagels",
      "author": "J. Kenji López-Alt",
      "year": 2017
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What's the difference between a Bagel and regular bread rolls shaped like a ring?",
      "answer": "The secret of the Bagel is the boiling process before baking. Boiling the dough in water with malt (or honey) 'cooks' the surface, creating that shiny, elastic crust and preventing the bread from rising too much in the oven, keeping the interior dense and chewy."
    },
    {
      "question": "Is it really necessary to boil the Bagel?",
      "answer": "Yes! Without boiling, you'll just have a regular ring-shaped bread. Boiling gelatinizes the surface starch, ensuring the 'chewy' texture that is the hallmark of an authentic Bagel."
    },
    {
      "question": "What is the difference between New York and Montreal Bagels?",
      "answer": "The NY bagel is boiled in water with malt and salt, is larger, and has a denser, saltier texture. The Montreal bagel is smaller, boiled in honey water, contains no salt in the dough, and is strictly baked in wood-fired ovens, being sweeter and crunchier."
    },
    {
      "question": "Why does the Bagel have a hole in the middle?",
      "answer": "The hole serves two purposes: it increases surface area (helping the dense dough cook evenly and creating more crust) and, historically, allowed bakers to hang bagels on ropes or rods for transport and sale."
    },
    {
      "question": "Can I make Bagels with all-purpose flour?",
      "answer": "You can, but they will be too soft. An authentic Bagel requires 'high-gluten' (high protein) flour to withstand the boiling process and maintain that characteristic bite resistance."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
