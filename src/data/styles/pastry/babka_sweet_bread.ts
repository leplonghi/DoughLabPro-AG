import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const babka_sweet_bread: StyleDefinition = {
  "id": "babka_sweet_bread",
  "title": "Babka (Chocolate or Cinnamon)",
  "subtitle": t('styles.enriched_sweet_doughs'),
  "category": t('styles.pastry'),
  "family": t('styles.enriched_sweet_doughs_2'),
  "variantName": "Babka (Chocolate or Cinnamon)",
  "origin": {
    "country": t('styles.eastern_europe_2'),
    "region": t('styles.jewish_baking_traditions'),
    "period": "19th–20th century"
  },
  "intro": "Popular in Jewish and artisan bakeries, often sliced as a rich dessert or sweet snack.",
  "history": "Babka is a sweet, braided bread that originated in the Jewish communities of Poland and Ukraine in the early 19th century. The name is diminutive of 'baba', meaning 'grandmother', referring to the wide, tall, fluted shape of traditional cakes common in the region (which looked like a grandmother's pleated skirt). In its original form, it was made with leftover challah dough and filled with jam or cinnamon. It wasn't until the mid-20th century, specifically in the Jewish bakeries of New York, that the chocolate-filled version (popularized by commercial cocoa) became the iconic standard we recognize today.",
  "culturalContext": {
    "significance": [
      "A cornerstone of Ashkenazi Jewish bakeries and Shabbat traditions",
      "Symbolizes the 'grandmotherly' warmth and culinary heritage of Eastern Europe",
      "Gained massive global pop-culture fame via the 1994 Seinfeld episode 'The Dinner Party'",
      "Represents the marriage of lean bread techniques (braiding) with rich pastry enrichment",
      "An icon of the New York City deli and bakery scene"
    ],
    "consumptionContext": [
      "Traditionally served on Shabbat or Jewish holidays as a sweet treat",
      "Now a daily staple in 'Artisan' urban bakeries, sold as full loaves or thick slices",
      "Commonly eaten as a mid-morning snack or afternoon tea with coffee",
      "The 'End Slices' are often coveted for their high concentration of crispy topping",
      "Used as the base for a decadent 'Babka French Toast' in modern brunch spots"
    ],
    "evolution": [
      "1800s: Polish/Russian 'Baba' cakes are large, light, and mostly fruit-based",
      "1900s: Jewish immigrants bring the recipe to America, simplifying it into a loaf form",
      "1950s: Commercial chocolate and cinnamon become widely available, replacing jam fillings",
      "2013-2015: Breads Bakery in NYC starts the 'Babka Renaissance', emphasizing high butter and chocolate %",
      "Present: Flavors expand to include pistachio, halva, and savory variants like pesto",
      "Future: Integration of whole grains into the enriched base for a more nutritious dessert bread"
    ],
    "rituals": [
      "The Pull: peeling back the moist layers to reveal the dark filling swirls",
      "The 'Stretch and Fold': the hypnotic process of layering dough and chocolate",
      "Applying the Syrup: brushing hot sugar syrup over the fresh-baked bread to lock in moisture",
      "The 'Krantz' Twist: the specific Israeli method of splitting the roll lengthwise and twisting for maximum visible layers",
      "The Shabbat Gift: bringing a wrapped babka as a thank-you to a dinner host"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Rich, eggy, and buttery bread base",
      "Deep cocoa or aromatic cinnamon heat",
      "Toasted hazelnut or walnut notes (if included in the filling)",
      "Sweet sugar-syrup finish with a hint of salt",
      "Mild yeasty undertones"
    ],
    "aromaProfile": [
      "Intensity of dark chocolate or warm cinnamon",
      "Freshly baked brioche (butter-forward)",
      "Caramelized sugar",
      "Toasted nuts",
      "Warm yeast and vanilla"
    ],
    "textureNotes": [
      "The 'Swirl': alternating layers of soft, pillowy dough and dense, fudgy filling",
      "Moist and Tacky: the sugar syrup glaze creates a sticky, tender exterior",
      "Streusel Crunch: crumbly bits on top provide a textural contrast to the soft interior",
      "Silky Crumb: highly enriched dough that shreds easily into layers",
      "Dense but not heavy: it should feel 'rich' but still maintain some bread-like structure"
    ],
    "pairingRecommendations": [
      "Coffee: A strong black Pour-over or a creamy Cappuccino",
      "Tea: Earl Grey or Russian Caravan (smoky tea)",
      "Spreads: Tahini drizzle or salted cultured butter",
      "Fruit: Fresh raspberries or tart apricot jam",
      "Dessert: A scoop of vanilla bean gelato or high-fat Greek yogurt"
    ],
    "flavorEvolution": [
      "Fresh (0-6 hours): Peak softness; best for enjoying the feathery dough",
      "Day 2: The filling moistens the surrounding dough even further; the flavors meld",
      "Day 3: Excellent for dipping in milk or coffee",
      "Day 5: Best transformed into French Toast or Bread Pudding",
      "Freezing: Slices freeze well; toast directly from frozen for a 'Babka snack'"
    ]
  },
  "technicalFoundations": [
    "Usually straight dough; some formulas use preferments.",
    "Hydration: 60-68%"
  ],
  "doughImpact": [
    "High enrichment (butter/yolks/sugar) creates a tender crumb and deep golden color",
    "Cold Fermentation (overnight) is MANDATORY for handling; the high fat makes warm dough too sticky to braid",
    "Moderate hydration (60-65%) balances the moisture from the filling to prevent a 'soggy' bake",
    "Use of Bread Flour (High Protein) is vital to support the heavy weight of the chocolate filling",
    "The dough must be stretched extremely thin (1-2mm) before filling to create the maximum number of swirls"
  ],
  "bakingImpact": [
    "Baked in tall loaf pans to support the heavy, twisted structure and encourage vertical lift",
    "Lower oven temperature (170-185°C) prevents the sugar-heavy dough from burning before the center is done",
    "Immediately brushing with simple syrup after baking creates the signature moist, tacky skin",
    "Streusel (crumb) topping is often added to protect the exposed chocolate from drying in the oven",
    "Must be cooled in the pan for 10-15 mins to allow the molten chocolate filling to set slightly"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      68
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      20,
      35
    ],
    "sugarRange": [
      15,
      30
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose_flour_3'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "60–120 min in pans after shaping",
      "coldRetard": t('styles.common_overnight_retard_for_flavor_and_handling')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        175,
        190
      ],
      "notes": t('styles.bake_thoroughly_to_set_rich_crumb_without_burning_')
    },
    "difficulty": t('styles.medium_24'),
    "recommendedUse": [
      t('common.sweet_loaf'),
      t('common.dessert_bread')
    ]
  },
  "regionalVariants": [
    "Polish Baba - The ancestor; often a light, tall, ring-shaped yeast cake with fruit",
    "New York Jewish Babka - Famous for the thick, fudge-like chocolate swirl",
    "Israeli 'Krantz' Cake - High-butter version split lengthwise to show exposed layers",
    "Russian Paska - Variations using similar enriched dough for Easter celebrations",
    "Contemporary Artisan Babka - Using sourdough starters and savory/creative fillings"
  ],
  "climateScenarios": [
    "Humid Summer: The chocolate filling can melt and bleed during shaping; work in small batches",
    "Arid/Dry Environment: The dough will 'skin' fast; keep covered at all times during the rest",
    "Cold Winter: The dough will take double the time to proof; use a warm proofing box at 26°C",
    "High Altitude: Reduce sugar in the dough slightly to prevent the structure from collapsing"
  ],
  "styleComparisons": [
    "vs. Cinnamon Rolls: Babka is braided/twisted into a loaf vs being spiral-cut into individual buns",
    "vs. Brioche: Babka uses a similar dough but focuses on the heavy-filling-to-dough ratio",
    "vs. Challah: Challah is traditionally lean (no dairy) and braided, while Babka is rich and filled",
    "vs. Panettone: Babka is much smaller and focuses on the 'swirl' vs Panettone's vertical aeration"
  ],
  "parameterSensitivity": [
    "Critical: Dough Thickness - if the dough is too thick during rolling, you'll have a bready center with no swirl",
    "Highly sensitive: Filling Moisture - if the chocolate mix is too oily, the layers will separate during baking",
    "Syrup Saturation: Too much syrup makes the loaf soggy; too little makes it dry out in 24 hours",
    "Proofing: Enriched dough proves slowly; under-proofing leads to a split, 'burst' top",
    "Chilling: Trying to shape an un-chilled babka dough is the #1 cause of failed 'swirls'"
  ],
  "risks": [
    "The 'Flying' Crust: Layers separating during baking due to excessive filling or under-proofing",
    "The Soggy Bottom: Simple syrup pooling at the base of the loaf pan",
    "Dry Crumb: Oven temperature was too high, or bake time was too long",
    "Bloody Chocolate: Dark filling leaking out of the braid and burning on the pan",
    "The Brick: Dough was too cold during final proof and never gained enough volume"
  ],
  "notes": [
    "Always chill the dough for at least 6 hours before rolling for a cleaner 'cut'",
    "Add a pinch of salt to your chocolate filling to elevate the cocoa notes",
    "Use a serrated knife to cut the rolls for the 'Krantz' twist to avoid smashing the layers",
    "The syrup should be hot when applied to a hot loaf for maximum absorption",
    "Rotate the loaf pan halfway through the bake to ensure even browning of the sugars"
  ],
  "tags": [
    t('common.sweet_loaf'),
    t('common.dessert_bread'),
    t('common.pastry'),
    t('common.eastern_europe')
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
      "title": "Breads Bakery: The Secret to the Best Babka",
      "url": "https://www.breadsbakery.com/",
      "author": "Gadi Peleg",
      "year": 2013
    },
    {
      "title": t('styles.modernist_bread_22'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Jew-ish: Reinvented Recipes from a Modern Mensch",
      "url": "https://www.amazon.com/Jew-ish-Reinvented-Recipes-Modern-Mensch/dp/0358273550",
      "author": "Jake Cohen",
      "year": 2021
    },
    {
      "title": "The Book of Jewish Food: An Odyssey from Samarkand to New York",
      "url": "https://www.amazon.com/Book-Jewish-Food-Odyssey-Samarkand/dp/0394532589",
      "author": "Claudia Roden",
      "year": 1996
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Why is my Babka always dry inside?",
      "answer": "Dry babka is usually caused by over-baking or not applying enough simple syrup right after the oven. The syrup is essential—it creates a moisture barrier that keeps the crumb tender. Also, ensure you aren't adding too much extra flour during the rolling and shaping phase."
    },
    {
      "question": "What is the 'Krantz' style of shaping?",
      "answer": "The Krantz (or Israeli) style involves rolling the dough with filling into a tight cylinder, then splitting that cylinder lengthwise to reveal the internal layers. Those two halves are then twisted over each other, creating a beautiful loaf where the chocolate is visible on top."
    },
    {
      "question": "Do I really need to chill the dough overnight?",
      "answer": "Yes. This high-fat enriched dough is very soft at room temperature. Chilling it makes the butter firm up, allowing you to stretch it into paper-thin layers and cut the braid without the whole thing turning into a sticky mess."
    },
    {
      "question": "Can I make a savory Babka?",
      "answer": "Absolutely! The same enriched dough works beautifully with savory fillings like pesto and parmesan, sun-dried tomato tapenade, or goat cheese and herbs. Just reduce the sugar in the dough slightly for these variants."
    },
    {
      "question": "How long does a Babka stay fresh?",
      "answer": "Because it's a rich, glazed bread, it stays fresh longer than a baguette, usually 3-4 days. For the best experience after day 1, we recommend warming a slice for 10 seconds in the microwave to melt the chocolate filling slightly."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
