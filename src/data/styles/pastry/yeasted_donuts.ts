import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const yeasted_donuts: StyleDefinition = {
  "id": "yeasted_donuts",
  "title": t('styles.yeasted_ring_donuts'),
  "subtitle": t('styles.fried_doughs_5'),
  "category": t('styles.pastry_12'),
  "family": t('styles.fried_doughs_6'),
  "variantName": t('styles.yeasted_ring_donuts_2'),
  "origin": {
    "country": t('styles.united_states_4'),
    "region": t('styles.globalized'),
    "period": "20th century"
  },
  "intro": t('styles.served_as_sweet_snacks_and_breakfast_items_often_g'),
  "history": "Modern yeasted donuts owe their popular 'ring' shape to mid-19th century American innovation, famously attributed to Hanson Gregory, a ship captain who in 1847 claimed to have punched a hole in fried dough to ensure the center cooked through. The automation of donut machines by Adolph Levitt in 1920 turned the yeasted donut into the quintessential American 'fast snack'. It evolved from a simple grease-laden treat to the highly refined, ultra-light 'Original Glazed' standard of the 1930s (notably by Krispy Kreme), and later into the artisanal 'Gourmet Donut' era of the 2010s, which features brioche-style doughs and creative botanical glazes.",
  "culturalContext": {
    "significance": [
      "An iconic symbol of American breakfast and coffee shop culture",
      "Historically associated with 'Donut Dollies' who served treats to soldiers in WWI/II",
      "Represented in pop culture as the universal food for road trips and office breaks",
      "National Donut Day (started in 1938) remains a major marketing and community event",
      "The 'Glazed Donut' is the benchmark for all other fried pastries globally"
    ],
    "consumptionContext": [
      "Traditionally served fresh in the morning ('Hot Now') with coffee",
      "Commonly sold in groups of 12 ('a dozen'), encouraging communal sharing",
      "The 'Donut Walk' is a weekend morning ritual for families and friends",
      "Often used as a canvas for seasonal themes (Halloween, Christmas colors)",
      "Found in dedicated specialty shops, grocery bakeries, and high-end cafes"
    ],
    "evolution": [
      "1840s: Captain Hanson Gregory punches the first hole in a 'donas' dough ball",
      "1920: Adolph Levitt invents the automated donut machine in NYC, making them uniform",
      "1937: Vernon Rudolph founds Krispy Kreme, standardizing the yeast-raised glazed ring",
      "1950: William Rosenberg founds Dunkin' Donuts, shifting focus to coffee/donut pairings",
      "2004: Voodoo Doughnut pioneers the 'Gourmet/Bizarre' topping movement",
      "Present: High-end bakeries using 48-hour cold-fermented brioche dough for 'luxury' donuts"
    ],
    "rituals": [
      "The 'Glaze Dip': watching the waterfall of molten sugar syrup coat the hot rings",
      "The Box Flip: the satisfying moment of opening a fresh cardboard dozen to share",
      "Pink Box Culture: in the Western US, donuts are almost exclusively served in bright pink boxes",
      "The Dunk: dipping the ring into black coffee to soften the crumb and melt the glaze",
      "Sharing the 'Hole': eating the leftover center pieces (Donut Holes) as a snack"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Neutral but sweet wheat base with a fatty richness",
      "Intense sweetness from the sugar or chocolate glaze",
      "Warm yeast and subtle vanilla or nutmeg notes in the dough",
      "Clean fried-wheat finish",
      "Nutty aromatics from the oil (fryer-specific)"
    ],
    "aromaProfile": [
      "Dominant warm vanilla and powdered sugar",
      "Freshly baked bread with a yeasty tang",
      "Sweet, caramelized wheat",
      "Rich cocoa (if chocolate-topped)",
      "Iconic 'donut shop' smell—a mix of sugar and hot oil"
    ],
    "textureNotes": [
      "The 'Marshmallow' Crumb: so light and airy it practically melts on the tongue",
      "Transparent Glaze: a thin, crackly layer of sugar that shatters upon the first bite",
      "Elasticity: the ring should 'rebound' immediately after being compressed",
      "Short Bite: the dough should not be chewy; it should yield to minimal pressure",
      "The 'White Ring': the central pale line proves the donut stayed light during frying"
    ],
    "pairingRecommendations": [
      "Drink: Black filter coffee (the classic) or cold whole milk",
      "Side: Salted pecans or bacon to contrast the extreme sweetness",
      "Fruit: Sliced strawberries or a tart blueberry compote",
      "Topping: Rainbow sprinkles, crushed Oreos, or toasted coconut",
      "Modern: A shot of Bourbon or a dark Stout beer for evening pairings"
    ],
    "flavorEvolution": [
      "Fresh (0-15 mins): Peak 'melt-in-mouth' experience; glaze is still slightly soft",
      "2-6 Hours: The standard bakery experience; the glaze has set into a crackly shell",
      "12 Hours: The dough begins to absorb the glaze, making it slightly heavier",
      "Day 2: Needs 8 seconds in the microwave to restore the 'fluffy' internal structure",
      "Stale: Traditionally transformed into 'Bread Pudding' or 'Donut French Toast'"
    ]
  },
  "technicalFoundations": [
    "Typically straight dough; some formulas use sponge.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [
    "High enrichment (shortening/sugar/milk) ensures the softest 'pillow' texture",
    "Moderate hydration (60-65%) prevents the dough from being too wet to handle during cutting",
    "Intense gluten development is required to create the network that holds the large air bubbles",
    "Addition of potato flour (in some styles) helps with moisture retention even after frying",
    "Chilling the dough after bulk makes the final cutting and handling much more precise"
  ],
  "bakingImpact": [
    "Frying at 175-180°C creates the perfect 'seal' to prevent excessive oil absorption",
    "Float-Height: The donuts should float high enough in the oil to produce a thick 'white ring'",
    "The 60-90 second fry per side is critical; any longer and the light dough dries out",
    "Immediate glazing after a 30-second drain is essential for the 'Original Glazed' look",
    "Cooling on a rack prevents the bottom from becoming soggy from trapped steam"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      65
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      10,
      20
    ],
    "sugarRange": [
      10,
      20
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose_flour_4'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "30–60 min after cutting, until light and puffy",
      "coldRetard": t('styles.often_retarded_for_production_convenience')
    },
    "oven": {
      "type": "fryer",
      "temperatureC": [
        170,
        180
      ],
      "notes": t('styles.fried_until_golden_on_both_sides_then_glazed_or_su')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.fried_donuts'),
      t('common.glazed_or_filled_donuts')
    ]
  },
  "regionalVariants": [
    "Original Glazed - The standard airy ring with a thin, clear sugar glaze",
    "Long John / Bar - Elongated rectangular donuts, often topped with maple or chocolate",
    "Donut Holes - Small round spheres made from the dough center cut-outs",
    "BeaverTails (Canada) - Large, flat, hand-stretched fried dough topped with cinnamon/sugar",
    "Portuguese Malasadas - Traditional yeasted dough balls often filled with tropical creams"
  ],
  "climateScenarios": [
    "High Humidity: The glaze will 'sweat' and melt into the dough quickly; use a higher sugar density",
    "Cold/Dry: The dough will take twice as long to gain volume; use a humidity-controlled proofer",
    "High Altitude: Reduce yeast by 20% to prevent the rings from 'exploding' in the fryer",
    "High Heat: Use ice-cold liquids for mixing; enriched dough heats up fast and loses quality"
  ],
  "styleComparisons": [
    "vs. Cake Donuts: Yeasted are light/airy/spongy; Cake are dense/crusty/crumbly-like-a-muffin",
    "vs. Berliner: Yeasted rings have a hole and are usually glazed; Berliners are filled and sugar-rolled",
    "vs. Cronuts: Yeasted is a simple dough vs Cronut's complex laminated (croissant) dough",
    "vs. Churros: Yeasted uses yeast and air bubbles; Churros are choux-based and crunchy"
  ],
  "parameterSensitivity": [
    "Critical: Oil Temperature - even 5°C too low will result in a greasy, heavy donut",
    "Highly sensitive: Proofing - under-proofed donuts aren't airy; over-proofed donuts soak oil",
    "Cutting Quality: dull cutters will 'seal' the edges, preventing the vertical rise",
    "Drain Time: Skipping the drain before glazing leads to an oily, unstable sugar coating",
    "Shortening type: Pure vegetable shortening provides the cleanest final mouthfeel"
  ],
  "risks": [
    "Oil-Logged: Caused by cold oil or under-proofing",
    "The Speckled Crust: From using old flour or dirty fryer oil with burnt particles",
    "Zero White Ring: Donuts were too dense/heavy and sank too deep in the oil",
    "Cracked Surface: Result of the dough skin drying out before it hit the fryer",
    "Burnt Glaze: Applying glaze to donuts that were still too hot (over 80°C)"
  ],
  "notes": [
    "Adding a small amount of nutmeg to the dough is the secret to the 'classic bakery' aroma",
    "Use a donut cutter with a bridge to ensure the center hole is perfectly centered every time",
    "Temperature check your milk before adding yeast—should be around 24-28°C",
    "For 'Hot Now' results home, glaze them while still very warm, then eat within 5 minutes",
    "Filter your fryer oil through a fine mesh after every batch to keep the taste clean"
  ],
  "tags": [
    t('common.fried_donuts'),
    t('common.glazed_or_filled_donuts'),
    t('common.pastry'),
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
      "title": "AIB: Quality Control for Yeast-Raised Donuts",
      "url": "https://www.aibinternational.com/",
      "author": "AIB International",
      "year": 2022
    },
    {
      "title": t('styles.modernist_bread_23'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Glazed: The American Donut History",
      "url": "https://www.amazon.com/Glazed-History-Great-American-Donut/dp/0312353347",
      "author": "Erika Casper",
      "year": 2008
    },
    {
      "title": "The Donut Machine: A Mechanical History",
      "url": "https://www.smithsonianmag.com/arts-culture/the-history-of-the-donut-machine-71933903/",
      "author": "Smithsonian Magazine",
      "year": 2013
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What is the difference between a yeast donut and a cake donut?",
      "answer": "Yeast donuts are leavened with yeast and take time to proof, resulting in a light, airy, and 'bread-like' texture. Cake donuts are chemically leavened (baking powder) and are mixed/fried immediately, resulting in a denser, muffin-like, and more crumbly texture."
    },
    {
      "question": "Why do my donuts not have that white line around the middle?",
      "answer": "The 'white ring' appears when the donut is light enough to float high in the oil. If your donuts don't have it, they were likely under-proofed (too dense) or the oil temperature was slightly too high, causing them to cook before they could rise to the surface."
    },
    {
      "question": "Can I make them in an air fryer?",
      "answer": "You can, but they will technically be 'baked buns' rather than donuts. The unique flavor and 'melt-in-mouth' mouthfeel of a donut come from the rapid heat transfer and fat of deep-frying. For an air fryer, brush generously with butter before 'frying' to mimic the effect."
    },
    {
      "question": "What kind of oil is best for frying donuts?",
      "answer": "A clean vegetable oil with a high smoke point (like canola or peanut oil) is best. Many commercial shops use solid vegetable shortening because it creates a 'dryer' finish on the donut surface once cooled."
    },
    {
      "question": "How long do they take to proof after cutting?",
      "answer": "Usually 30 to 60 minutes in a warm, draft-free spot. They should look puffy and feel like they are 'filled with air'. If you poke them gently, the indentation should remain for a second; if it springs back instantly, they need more time."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
