import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const berliner_bomboloni: StyleDefinition = {
  "id": "berliner_bomboloni",
  "title": "Berliner / Bomboloni (Filled Donuts)",
  "subtitle": t('styles.fried_doughs'),
  "category": t('styles.pastry_2'),
  "family": t('styles.fried_doughs_2'),
  "variantName": "Berliner / Bomboloni (Filled Donuts)",
  "origin": {
    "country": "Germany/Italy",
    "region": t('styles.europewide'),
    "period": t('styles.traditional_14')
  },
  "intro": "Sold in bakeries and cafes as filled pastries, often associated with festivals and holidays.",
  "history": "The Berliner (or Berliner Pfannkuchen) is a traditional North German doughnut made from sweet yeast dough, fried in fat or oil, with a marmalade or jam filling and usually iced or dusted with sugar. Legend tells of a Berlin baker who, in 1756, was found unfit for military service but was allowed to stay as a field baker. He shaped his dough into 'cannonballs' and fried them over an open fire. In Italy, the style evolved into the 'Bombolone' (plural: bomboloni), popular in Tuscany and Trentino, characterized by being coated in granulated sugar and often filled with 'crema pasticcera' (pastry cream) instead of jam.",
  "culturalContext": {
    "significance": [
      "The quintessential European filled doughnut; an icon of German and Italian bakery windows",
      "Traditionally associated with 'Karneval' (Germany) and 'Mardi Gras' celebrations",
      "Famous for being the subject of the mythical 'Ich bin ein Berliner' JFK translation error",
      "In Italy, it is the ultimate 'comfort' street food, often sold on beaches in the summer",
      "Symbolizes the indulgence of holidays and festive community gatherings"
    ],
    "consumptionContext": [
      "Commonly eaten as a mid-morning snack or afternoon 'Kaffee und Kuchen' in Germany",
      "In Tuscany, often enjoyed as a late-night street food while walking around the city",
      "Commonly filled with plum jam (Pflaumenmus) in Germany, or Nutella and vanilla cream in Italy",
      "Almost always served fresh; a cold, day-old Berliner is considered a culinary failure",
      "Often used in 'Pranks' during Karneval: one doughnut in a batch might be filled with mustard instead of jam"
    ],
    "evolution": [
      "1500s: Early yeast-raised dough balls are boiled or fried in Central Europe",
      "1756: The legendary 'Field Baker' standardizes the round, hole-less shape in Berlin",
      "1800s: Industrial sugar production makes the sweet coatings more accessible to the masses",
      "1900s: Migration spreads the style to South America (as 'Bolas de Berlim' or 'Sonhos')",
      "Present: High-end versions use sourdough starters and artisanal wild-berry jams",
      "Future: Shift toward air-frying Adaptations for home cooks seeking lower fat options"
    ],
    "rituals": [
      "The White Ring (Kragen): achieving the iconic pale ring around the middle, proving the doughnut is light enough to float",
      "The Injection: using a specialized long nozzle to fill the center without splitting the dough",
      "The Sugar Roll: tossing the hot doughnut in granulated sugar so it sticks perfectly",
      "The 'First Bite' Challenge: trying to eat a jam-filled Berliner without getting a drop on your clothes",
      "Buying by the 'Dutzend': bringing a large box to a party as the ultimate crowd-pleaser"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Rich, eggy, and buttery dough base",
      "Tartness from fruit jams (raspberry, plum, or apricot)",
      "Creamy vanilla or chocolate notes (if cream-filled)",
      "Dominant sweetness from the sugar-dusted exterior",
      "Clean, mild fried-wheat finish"
    ],
    "aromaProfile": [
      "Warm toasted dough and sugar",
      "Fruity jam (specifically raspberry or plum)",
      "Vanilla bean or almond (often used in the cream filling)",
      "Subtle yeasty notes",
      "Earthy fried oil (ideally minimal)"
    ],
    "textureNotes": [
      "The 'Puff': a light, airy interior that is resilient but soft",
      "Thin, non-crunchy skin: should be delicate and hold the sugar well",
      "Gooey Center: a concentrated burst of fruit or cream in every bite",
      "Short Bite: the enrichment of the dough makes it tender, not chewy",
      "Granular Exterior: the crunch of the sugar crystals against the soft dough"
    ],
    "pairingRecommendations": [
      "Hot Drink: A strong German filter coffee or a thick Italian hot chocolate",
      "Wine: A dessert wine like Eiswein or a sweet sparkling Moscato",
      "Side: Fresh seasonal berries to cut through the richness of the cream",
      "Condiment: A touch of citrus zest in the sugar coating",
      "Modern: A shot of cold espresso (shakerato) for the cream-filled versions"
    ],
    "flavorEvolution": [
      "Fresh (0-2 hours): Absolute peak; the dough is at its lightest and the sugar is dry",
      "4-8 Hours: The jam starts to soften the internal crumb; still excellent",
      "Day 2: The sugar begins to melt and turn the dough sticky; best avoided",
      "Stale: Traditionally not used; some creative bakers turn them into 'Doughnut bread pudding'",
      "Reheating: Not recommended for jam versions; cream-filled versions should never be heated"
    ]
  },
  "technicalFoundations": [
    "Usually straight dough or sponge-based enriched dough.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [
    "High enrichment (butter/sugar/eggs) ensures a tender, cake-like final crumb",
    "Moderate hydration (60-65%) is necessary to keep the dough buoyant in the oil",
    "Use of Bread Flour provides the strength needed for the large gas bubbles that create the 'white ring'",
    "The inclusion of lemon zest or vanilla in the dough is traditional for aromatic complexity",
    "Minimal handling during shaping is vital to prevent deflating the delicate aeration"
  ],
  "bakingImpact": [
    "Frying at exactly 170-175°C: too hot and they stay raw inside; too cold and they absorb too much oil",
    "Floating Depth: Doughnuts must float halfway in the oil to create the signature central 'white ring'",
    "The 'Flip': timed to ensure even browning and structure on both sides within 2-3 minutes",
    "Post-Fry Draining: cooling on a wire rack for 60 seconds before sugar-rolling is key for texture",
    "Cooling for 15-20 mins before filling is mandatory to prevent the internal steam from curdling the jam"
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
    "flourStrength": t('styles.bread_or_strong_pastry_flour'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "30–60 min after shaping, until light",
      "coldRetard": t('styles.sometimes_retarded_overnight')
    },
    "oven": {
      "type": "fryer",
      "temperatureC": [
        170,
        180
      ],
      "notes": t('styles.fried_cooled_then_injected_with_fillings_and_duste')
    },
    "difficulty": t('styles.medium_25'),
    "recommendedUse": [
      t('common.filled_donuts'),
      t('common.sweet_fried_pastries')
    ]
  },
  "regionalVariants": [
    "Berliner Classico - Traditionally filled with red fruit jam (raspberry/strawberry)",
    "Tuscan Bomboloni - Usually smaller, hole-less, and rolled in granulated sugar with no filling",
    "Trentino Krapfen - Similar to Berliner but often features apricot jam and more egg yolks",
    "Austrian Faschingskrapfen - Strictly regulated version using high-quality butter and apricot jam",
    "Brazilian 'Sonhos' - The South American descendant, often using a lighter dough and dulce de leche"
  ],
  "climateScenarios": [
    "Humid Environment: The sugar coating will melt into a syrup in minutes; serve immediately",
    "Cold Kitchen: Enriched dough proofs slowly; use a proofing box at 28°C to ensure they float in the oil",
    "Tropical Heat: High risk of over-proofing, leading to doughnuts that soak up oil and sink",
    "High Altitude: Reduce yeast by 15% to prevent the gas bubbles from expanding too fast and bursting"
  ],
  "styleComparisons": [
    "vs. American Raised Donut: Berliner is richer (more egg/butter) and lacks the central hole",
    "vs. Churros: Churros are unleavened/choux-based and crunchy; Berliner is yeasted and soft",
    "vs. Beignet: Beignets are usually square and dusted with powdered sugar, whereas Berliner is round and filled",
    "vs. Paczki: Paczki (Polish) is even richer, often using lard and a splash of grain alcohol (Spirytus)"
  ],
  "parameterSensitivity": [
    "Critical: Oil Temperature - the 170-175°C window is the difference between greasy and perfect",
    "Highly sensitive: Proofing Time - under-proofed doughnuts sink; over-proofed ones collapse and boil",
    "Egg Ratio: Higher egg count provides the better 'lift' needed for the white ring",
    "Filling Volume: Over-filling can cause the doughnut to split and leak",
    "Sugar Timing: If rolled when too hot, sugar melts; if too cold, sugar won't stick"
  ],
  "risks": [
    "Oil-Logged Crumb: Result of frying at too low a temperature or under-proofing",
    "The 'Dark Spot': Uneven frying from trying to cook too many at once in the fryer",
    "Raw Center: result of the oil being too hot (crust browns too fast)",
    "Collapsed Shape: Over-proofing causes the bubbles to weak and the dough to shrink after frying",
    "Poor Injection: Filling pooling on one side instead of the center"
  ],
  "notes": [
    "Add a tablespoon of vodka or high-proof spirit to the dough to inhibit oil absorption",
    "Use a thermometer for the oil—do not guess the temperature",
    "Fill right before serving for the best contrast between dough and jam",
    "Fry in refined vegetable oil or lard for the most traditional and clean flavor",
    "Gently place the doughnuts top-side down in the oil first for better volume"
  ],
  "tags": [
    t('common.filled_donuts'),
    t('common.sweet_fried_pastries'),
    t('common.pastry'),
    "Germany/Italy"
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
      "title": "The Art of the Berlin Doughnut",
      "url": "https://www.berlin.de/en/food/traditional-food/3966804-5047817-berliner-doughnut.en.html",
      "author": "Berlin.de Official Portal",
      "year": 2023
    },
    {
      "title": t('styles.modernist_bread_23'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Science of Frying: The Perfect Doughnut",
      "url": "https://www.seriouseats.com/how-to-make-the-best-doughnuts-at-home",
      "author": "Serious Eats / Stella Parks",
      "year": 2019
    },
    {
      "title": "Classic Italian Pastry",
      "url": "https://www.cucinaitaliana.it/",
      "author": "La Cucina Italiana",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What is the secret to the perfect 'white ring' (Kragen) in the middle?",
      "answer": "The white ring is a sign of perfectly proofed dough. If the dough has enough air, it will float high in the oil, leaving the middle section un-submerged and thus un-fried. If your doughnuts don't have the ring, they are likely under-proofed and too dense to float high enough."
    },
    {
      "question": "Why do my doughnuts taste like oil?",
      "answer": "This happens if the oil temperature is too low (below 160°C) or if the dough is under-proofed. Low heat allows the oil to penetrate the dough instead of searing the exterior instantly. Also, adding a tiny amount of alcohol to the dough helps prevent oil absorption through steam pressure."
    },
    {
      "question": "What is the best way to fill them without making a mess?",
      "answer": "Use a Bismarck tip (a long, narrow piping nozzle). Insert it halfway into the side of the cooled doughnut, squeeze gently until you feel the weight increase, and pull out slowly. Filling them through the side hides the 'entry wound' and preserves the aesthetic top."
    },
    {
      "question": "Can I bake them instead of frying them?",
      "answer": "You can, but the texture and flavor will be closer to a brioche roll than an authentic Berliner. Frying provides a unique 'sear' and mouthfeel that baking cannot replicate. If you must bake, use a high-heat fan setting for a short time (8-10 mins)."
    },
    {
      "question": "Jam or Cream: which is the traditional filling?",
      "answer": "In Germany, jam (raspberry or red currant) is the classic standard. In Italy and South America, pastry cream (vanilla or chocolate) and 'Dulce de Leche' are more common. Both are delicious and technically correct within their respective regional traditions."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
