import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const new_haven_apizza: StyleDefinition = {
  "id": "new_haven_apizza",
  "title": "New Haven Style (Apizza)",
  "subtitle": t('styles.american_artisan_pizza_3'),
  "category": t('styles.pizza_8'),
  "family": t('styles.american_artisan_pizza_4'),
  "variantName": "New Haven Style (Apizza)",
  "origin": {
    "country": t('styles.united_states_8'),
    "region": t('styles.new_haven_ct'),
    "period": "1920s"
  },
  "intro": "Served on paper sheets, known for 'mootz' (mozzarella) being a topping, not default.",
  "history": "New Haven Style pizza, or 'Apizza' (pronounced ah-BEETS), was introduced in the 1920s by Italian immigrants, most notably Frank Pepe. Derived from Neapolitan pizza but adapted to intense coal-fired ovens in Connecticut, it resulted in a larger, thinner, and significantly more charred crust than its Italian ancestor. It is famous for its irregular shape and its 'White Clam Pie'.",
  "culturalContext": {
    "significance": [
      "A fierce point of pride for Connecticut residents and a national pizza pilgrimage site",
      "One of the only US styles that explicitly preserves the Neapolitan dialect name 'Apizza'",
      "Represents the working-class Italian-American heritage of New Haven",
      "Famous for its 'Big Three' pizzerias: Pepe's, Sally's, and Modern",
      "The 'White Clam Pie' is legally designated as a Connecticut State Food item"
    ],
    "consumptionContext": [
      "Served on sheets of white paper on a tray, never pre-sliced unless requested",
      "Ordering a 'Tomato Pie' (without cheese) is a traditional and common practice",
      "'Mootz' (mozzarella) is considered a topping, not a given; you must ask for it",
      "The dining environment is typically old-school, featuring long lines and wooden booths",
      "Best enjoyed with a Foxon Park birch beer, the traditional local beverage pairing"
    ],
    "evolution": [
      "1925: Frank Pepe opens his bakery and starts selling 'Tomato Pies' from a cart",
      "1930s-40s: Sally's Apizza (founded by Pepe's nephew) and Modern Apizza establish the 'Big Three'",
      "1960s: Frank Pepe creates the White Clam Pie, an instant local legend",
      "1990s: National recognition grows as food critics discover the regional excellence",
      "2010s: Apizza locations start expanding beyond New Haven to other states",
      "Present: Consistently ranked among the top pizza destinations in the world"
    ],
    "rituals": [
      "The Coal Fire Peek: watching the pizzaiolo use a 14-foot peel to rotate pies in the coal oven",
      "Ordering 'Foxon Park': no Apizza meal is complete without this local Connecticut soda",
      "The Char Debate: locals love the 'burnt' bits, while newcomers often mistake it for a mistake",
      "Shared Trays: pizzas are typically large and shared family-style across the table",
      "The Sunday Line: waiting on Wooster Street for an hour or more is part of the experience"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Intense smoky char and bitterness from high-heat coal firing",
      "Punchy acidic tomato sauce (traditional tomato pie has no cheese)",
      "Garlic-heavy brine and salty clams (in the famous white pie)",
      "Richness from pecorino romano and heavy olive oil application",
      "Subtle sourdough notes from the long-fermented dough balls"
    ],
    "aromaProfile": [
      "Distinctive coal smoke and soot-charred bread",
      "Roasted garlic and fresh oregano",
      "Briny Atlantic clams and sea salt (for white pies)",
      "Sharp, aged sheep's milk cheese (Pecorino)",
      "Warm, fruity olive oil"
    ],
    "textureNotes": [
      "Thin, flexible center with a dry, slightly gritty surface from flour or cornmeal",
      "The cornicione is crisp on the outside but retains a chewy, bready interior",
      "Significant 'char-crunch' on the darker spots of the crust",
      "Dense topping application (especially the clams) creates a substantial bite",
      "Irregular, oblong shape leads to varying slice sizes and textures"
    ],
    "pairingRecommendations": [
      "Classic: White Clam Pie (chopped clams, garlic, oregano, olive oil, pecorino)",
      "Traditional: Tomato Pie (sauce, garlic, oregano, pecorino - no mozzarella)",
      "Beverage: Foxon Park White Birch Beer is the only 'official' pairing",
      "Beer: A light, crisp lager to balance the smoky bitterness of the char",
      "Side: Local garden salads with simple vinaigrettes"
    ],
    "flavorEvolution": [
      "Piping Hot (0-5 mins): Maximum smoke aroma, bottom char is at its crispest",
      "Warm (10-20 mins): Clam juices or tomato sauce soak slightly into the chewy crust",
      "Room Temp: Slices remain chewy and the pecorino flavor becomes more pronounced",
      "Cold: Not recommended for the clam pie; tomato pies are decent cold",
      "Reheated: Best in a very hot oven for 2 minutes to revive the bottom crunch"
    ]
  },
  "technicalFoundations": [
    "Long cold fermentation, often direct or sponge.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [
    "Moderately low hydration (60-65%) prevents the thin dough from becoming too soft",
    "Long cold retard (24-48h) develops the strength needed for a very thin stretch",
    "High-gluten flour is essential to achieve the characteristic New Haven 'chew'",
    "The use of minimal oil ensures the crust is dry and receptive to coal-oven charring",
    "Traditional direct or sponge methods create a dense but flavorful bubble structure"
  ],
  "bakingImpact": [
    "Coal-fired ovens (300-350°C+) provide an exceptionally dry and intense radiant heat",
    "The 14-foot wooden peels are used to move pies deep into the hearth",
    "Irregular 'oblong' shape is a result of the rapid, rustic stretching on the peel",
    "The long 7-10 minute bake time creates a deep, 'well-done' char without drying the interior",
    "Flour or cornmeal on the peel adds a slight toasted grit to the bottom texture"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      65
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      1,
      3
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": t('styles.highgluten_bread_flour'),
    "fermentation": {
      "bulk": "24–48 h cold fermentation",
      "proof": "1–2 h at room temperature",
      "coldRetard": t('styles.essential_for_flavor_and_char')
    },
    "oven": {
      "type": "coal_fired",
      "temperatureC": [
        300,
        350
      ],
      "notes": t('styles.coalfired_for_distinct_char_and_smokiness')
    },
    "difficulty": t('styles.medium_36'),
    "recommendedUse": [
      t('common.charred_thin_crust'),
      t('common.clam_pie')
    ]
  },
  "regionalVariants": [
    "Wooster Street Classic - The standard set by Pepe's and Sally's",
    "Modern Style - Usually slightly thicker with a heavier cheese application",
    "Bar Pizza (New Haven) - Smaller, very thin, baked in a different style of oven",
    "Zuppardi's (West Haven) - Famous for their fresh-shucked clam pie and artisan sausage",
    "The Derby Clone - Variations found in the Valley that mimic the New Haven char"
  ],
  "climateScenarios": [
    "Cold CT Winters: Use warm water (30°C) and extend room temp proof to 2 hours",
    "Humid Summer: Reduce hydration by 2% to maintain dough strength during stretching",
    "High Altitude: Brazilians in mountainous regions like Campos do Jordão reduce sugar slightly",
    "Very Dry Environment: Wrap dough balls tightly to prevent 'skinning' of the high-gluten dough"
  ],
  "styleComparisons": [
    "vs. NY Style: Apizza is thinner, much more charred, and more irregularly shaped",
    "vs. Neapolitan: Apizza is larger, uses coal instead of wood, and has a much firmer crust",
    "vs. Trenton Tomato Pie: Similar in sauce application, but New Haven has more intense char",
    "vs. Coal-Fired NY: New Haven is generally 'sturdier' and focused on domestic Connecticut ingredients"
  ],
  "parameterSensitivity": [
    "Critical: Oven Floor Temp - must be hot enough to char instantly without burning through",
    "Highly sensitive: Flour Strength - using AP flour will result in a soggy, weak pie",
    "Topping Moisture: Fresh clams or sauce must be balanced to avoid the 'center-pool' effect",
    "Stretching Technique: Must be thin but with enough 'ribbing' to trap char in the dough",
    "Bake Time: 30 seconds can be the difference between 'perfect char' and 'ruined'"
  ],
  "risks": [
    "Center Sog: Caused by over-saucing or using high-moisture 'mootz' incorrectly",
    "Undercooked Clams: If bake is too fast, the cold clams won't reach safety temp",
    "Brittle Crust: Over-baking or insufficient hydration in a very dry coal oven",
    "Excessive Soot: Poor coal management leading to a bitter, gritty bottom",
    "Dough Tears: Attempting to stretch a cold, high-gluten dough too quickly"
  ],
  "notes": [
    "If you want mozzarella, remember to ask for 'Mootz' - it's not a standard topping",
    "The Foxon Park Birch Beer is a essential cultural part of the experience",
    "Char is flavor! Don't let the dark spots scare you; they are the soul of the style",
    "Homemade clam mix: use chopped fresh clams, lots of garlic, oregano, and olive oil",
    "Use a high-gluten flour (13%+ protein) for the best results"
  ],
  "tags": [
    t('common.charred_thin_crust'),
    t('common.clam_pie'),
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
      "title": t('styles.modernist_pizza_6'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": "Pizza City, USA",
      "url": "https://www.stevedolinsky.com/books",
      "author": "Steve Dolinsky",
      "year": 2018
    },
    {
      "title": "Connecticut Pizza: A History of Mehal's to Pepe's",
      "url": "https://www.amazon.com/Connecticut-Pizza-History-Mehal-Pepes/dp/1467140411",
      "author": "Erik Ofgang",
      "year": 2018
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What is 'Apizza' vs 'Pizza'?",
      "answer": "It's the local New Haven dialect pronunciation of 'la pizza' (ah-beets). Culturally, it signifies a specific style of thin, coal-fired, heavily charred pizza native to Connecticut."
    },
    {
      "question": "Why is the clam pie so famous?",
      "answer": "Invented by Frank Pepe in the 1960s, it uses fresh chopped littleneck clams, garlic, olive oil, and oregano. The combination of briny Atlantic seawater and smoky coal fire created a flavor profile that won national acclaim."
    },
    {
      "question": "Is the crust supposed to be burnt?",
      "answer": "It's not burnt, it's 'charred'. The high-heat coal ovens (300°C+) create dark, bitter spots that provide a crucial flavor contrast to the sweet tomato and salty cheese. It is a defining feature of the style."
    },
    {
      "question": "Can I get a pizza without mozzarella?",
      "answer": "Yes, and it's quite common! A 'Tomato Pie' is the traditional foundation of the style: just dough, sauce, garlic, oregano, and a sprinkle of pecorino. Mozzarella is always considered an extra topping."
    },
    {
      "question": "Why is Foxon Park soda always served with it?",
      "answer": "Foxon Park is a local bottling company in East Haven. They have been the default beverage partner for the famous pizzerias for generations, particularly their Birch Beer and White Birch Beer."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
