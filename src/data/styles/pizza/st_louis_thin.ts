import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const st_louis_thin: StyleDefinition = {
  "id": "st_louis_thin",
  "title": t('styles.st_louis_style'),
  "subtitle": t('styles.american_cracker_thin'),
  "category": t('styles.pizza_14'),
  "family": t('styles.american_cracker_thin_2'),
  "variantName": t('styles.st_louis_style_2'),
  "origin": {
    "country": t('styles.united_states_12'),
    "region": t('styles.st_louis'),
    "period": t('styles.mid_20th_century_2')
  },
  "intro": t('styles.st_louis_intro'),
  "history": "St. Louis-style pizza emerged in the mid-20th century, most famously at Imo's Pizza in 1964. It was designed to be a quick, thin, and easy-to-share party food. The defining characteristics—unleavened (no-yeast) cracker-thin crust, Provel cheese (a processed blend of provolone, swiss, and white cheddar), and the 'square' or 'tavern' cut—were all adapted to make the pizza stay crisp and be edible while standing up or mingling.",
  "culturalContext": {
    "significance": [
      "Fiercely debated and beloved regional icon of St. Louis, Missouri",
      "Known as the 'Square Beyond Compare' due to its unique grid-style cut",
      "Represents the Midwest 'Tavern style' adapted for domestic and party consumption",
      "Symbol of local pride: you either love it or you don't understand it",
      "One of the few US styles that uses a specialized processed cheese (Provel) as its core identity"
    ],
    "consumptionContext": [
      "Cut into small 2-inch squares ('party cut' or 'tavern cut') instead of wedges",
      "A staple of casual gatherings, sporting events, and late-night snacks",
      "Often ordered from local legends like Imo's, Cecil Whittaker's, or Stefanina's",
      "Designed to be eaten with one hand while holding a drink in the other",
      "The thin crust means people typically eat several small squares as a single meal"
    ],
    "evolution": [
      "1940s: Italian immigrants in St. Louis start experimenting with thin, unleavened crusts",
      "1947: Provel cheese is developed specifically for the St. Louis pizza market",
      "1964: Ed and Margie Imo open the first Imo's Pizza, standardizing the style",
      "1970s-80s: Rapid expansion of local chains makes it the dominant style in the region",
      "2000s: Becomes a 'cult' food item for food travelers visiting the Midwest",
      "Present: Remains a unique island of pizza culture, largely unchanged for 60 years"
    ],
    "rituals": [
      "The 'No-Fold' Zone: the crust is so brittle it cracks rather than folds",
      "Fighting for the Corners: the small corner squares are the crispest and most coveted pieces",
      "The Provel Pull: unlike mozzarella, Provel melts into a gooey, creamy liquid that doesn't 'string'",
      "Ordering a 'Deluxe': the standard topping load of sausage, mushrooms, and onions",
      "The Toasted Ravioli Side: no St. Louis pizza meal is complete without this local appetizer"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Sweet, rich, and 'smoky' from the unique Provel cheese blend",
      "High acidity and sweetness from a heavily seasoned tomato sauce (often with oregano)",
      "Brittle, toasted wheat notes from the cracker-like unleavened dough",
      "Salty and savory meats (fennel sausage or pepperoni)",
      "Sharpness from the white cheddar and swiss components of the cheese"
    ],
    "aromaProfile": [
      "Intense dried oregano and sweet tomato sauce",
      "Toasted bread, similar to a plain cracker or matzo",
      "Distinctive 'tangy' cheese aroma from the processed Provel",
      "Spicy fennel from traditional St. Louis sausage toppings",
      "Clean, dry heat aroma from the stone-baked crust"
    ],
    "textureNotes": [
      "The 'Cracker Crunch': perfectly flat, brittle, and snaps when broken",
      "Gooey, creamy cheese layer that almost behaves like a warm dip",
      "No internal aeration or 'crumb'; it is a singular, solid layer",
      "Toppings are usually chopped small to stay on the tiny square pieces",
      "The bottom is bone-dry and slightly dusty from flour or cornmeal"
    ],
    "pairingRecommendations": [
      "Classic: Imo's Deluxe (sausage, mushrooms, onions, green peppers, Provel)",
      "Cheese: Must be Provel (or a blend of white cheddar, provolone, and swiss)",
      "Beverage: Ice-cold Busch Beer (another St. Louis icon) or a sweet cola",
      "Appetizer: Toasted Ravioli with marinara sauce",
      "Finishing: Extra dried oregano and crushed red pepper flakes"
    ],
    "flavorEvolution": [
      "Fresh (0-5 mins): Peak brittleness; the cheese is in its most liquid/creamy state",
      "Warm (10-15 mins): Excellent party food; the crust stays crisp much longer than yeasted dough",
      "Room Temp: Slices stay firm; great for grazing throughout an evening",
      "Next Day: Reheats surprisingly well in a toaster oven to restore the 'snap'",
      "Cold: A favorite 'next morning' snack for many locals; the flavors are very concentrated"
    ]
  },
  "technicalFoundations": [
    t('styles.st_louis_tech_1'),
    t('styles.st_louis_tech_2')
  ],
  "doughImpact": [
    "Ultra-low hydration (40-50%) creates a stiff, dry dough that can be rolled extremely thin",
    "Minimal or no yeast allows the dough to stay flat and cracker-like during baking",
    "Rolling with a pin (or sheeter) is required to achieve the necessary 'paper-thin' thickness",
    "Short to no fermentation time prevents the development of air pockets or chewiness",
    "Addition of a small amount of oil helps with extensibility and creates a 'short' cracker bite"
  ],
  "bakingImpact": [
    "Baked at moderate temps (230-260°C) for a relatively short time (8-12 mins)",
    "Baking on a screen or direct stone ensures the bottom dries out completely for maximum crunch",
    "The thinness allows for very even cooking of the toppings despite the short bake",
    "Lack of yeast means there is zero 'oven spring'; the height is fixed at the moment of launch",
    "Provel cheese's low melting point means it liquefies before the crust can burn"
  ],
  "technicalProfile": {
    "hydrationRange": [
      40,
      50
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_pastry_flour_for_crispness'),
    "fermentation": {
      "bulk": t('styles.minimal_or_none'),
      "proof": t('styles.none_rolled_thin_immediately'),
      "coldRetard": t('styles.not_typical')
    },
    "oven": {
      "type": "electric_deck",
      "temperatureC": [
        230,
        260
      ],
      "notes": t('styles.baked_on_stone_or_screen_for_maximum_crispness')
    },
    "difficulty": "Easy",
    "recommendedUse": [
      t('common.cracker_crust_pizza'),
      t('common.party_snacks')
    ]
  },
  "regionalVariants": [
    "The Imo's Standard - The benchmark for the style using Provel and thin crust",
    "Cecil Whittaker's Style - Often features a slightly bulkier sausage topping",
    "Tavern Style (Chicago Thin) - The cousin style, usually uses yeast and Mozzarella",
    "Grandpa's Style - Variations found in rural Missouri that use different cheese blends",
    "Pizza World Style - High-volume variant found in Missouri strip malls"
  ],
  "climateScenarios": [
    "High Humidity: Increase baking time by 2 minutes to ensure the cracker doesn't stay 'limp'",
    "Very Dry: Keep dough covered with a damp cloth before rolling to prevent cracking",
    "Cold Kitchen: May need slightly warmer water (35°C) just to make the dry dough easier to roll",
    "Tropical: Avoid storing the finished cracker-crust in open air; it will absorb moisture instantly"
  ],
  "styleComparisons": [
    "vs. Chicago Thin: St. Louis uses no yeast and Provel; Chicago use yeast and Mozzarella",
    "vs. NY Style: St. Louis is a cracker; NY is a bread. St. Louis squares vs NY wedges",
    "vs. California: St. Louis is traditional/nostalgic; California is gourmet/avant-garde",
    "vs. Neapolitan: Opposite ends of the spectrum in everything from hydration to bake time"
  ],
  "parameterSensitivity": [
    "Critical: Crust Thickness - if it's thicker than 1/8th inch, it becomes a 'biscuit' not a 'cracker'",
    "Highly sensitive: Provel Cheese - using pure mozzarella completely changes the signature flavor",
    "Rolling Pressure: Uneven rolling leads to raw 'soft spots' in the middle of the pie",
    "Sauce Seasoning: Needs to be bold and slightly sweet to balance the creamy/salty cheese",
    "Oven Stone Saturation: Needs a very dry, hot base to prevent any 'sogginess'"
  ],
  "risks": [
    "Soggy Bottom: Using too much sauce or high-moisture toppings on the thin base",
    "Tough/Hard Shell: Over-baking at too low a temperature, making the cracker 'concrete-like'",
    "Bubbling: If the dough is too wet, it might bubble up (docking the dough is recommended)",
    "Dough Tearing: Trying to roll a cold, dry dough without letting it rest for 30 minutes",
    "Bland Taste: Skipping the salt in the dough or using a bland, non-seasoned sauce"
  ],
  "notes": [
    "If you can't find Provel, mix Provolone, white Cheddar, and Swiss with a drop of liquid smoke",
    "A rolling pin is your best friend here - the thinner the better",
    "Dough docking (poking tiny holes) is essential to keep the cracker perfectly flat",
    "The squares should be small - about the size of a business card",
    "Serve with a side of toasted ravioli for the full 314 (St. Louis area code) experience"
  ],
  "tags": [
    t('common.cracker_crust_pizza'),
    t('common.party_snacks'),
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
      "title": t('styles.modernist_pizza_12'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": "Imo's Pizza: The Story of a St. Louis Legend",
      "url": "https://www.imospizza.com/about-us/",
      "author": "Imo's Family",
      "year": 2023
    },
    {
      "title": "The Pizza City, USA Podcast: St. Louis Episode",
      "url": "https://www.stevedolinsky.com/podcasts",
      "author": "Steve Dolinsky",
      "year": 2019
    },
    {
      "title": "Serious Eats: Chicago Thin vs. St. Louis Thin",
      "url": "https://www.seriouseats.com/thin-crust-pizza",
      "author": "Nick Kindelsperger",
      "year": 2017
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What is Provel cheese?",
      "answer": "Provel is a processed cheese product developed in St. Louis. It is a specific blend of Provolone, Swiss, and White Cheddar. It is known for its low melting point, creamy texture, and slightly smoky flavor. It does not 'string' like mozzarella."
    },
    {
      "question": "Is there really no yeast in the crust?",
      "answer": "Traditionally, yes. While some modern home versions use a tiny amount of yeast for flavor, the authentic St. Louis style is an unleavened dough, which gives it that distinctively flat, brittle 'cracker' crunch."
    },
    {
      "question": "Why is it cut into squares?",
      "answer": "Originally, it was cut that way so it would be easier to serve as small 'bites' at parties or in bars ('tavern cut'). The thin crust also holds up better as small squares than long, floppy wedges."
    },
    {
      "question": "Can I make this in a regular oven?",
      "answer": "Absolutely! Since the temperature requirements are modest (230-260°C), it's one of the easiest styles to replicate at home. Using a pizza stone or even a pre-heated baking sheet yields great results."
    },
    {
      "question": "What is the 'Square Beyond Compare'?",
      "answer": "It is the famous slogan of Imo's Pizza, the most iconic purveyor of St. Louis-style pizza. It refers to the unique square shape and the perceived superiority of the style by its fans."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
