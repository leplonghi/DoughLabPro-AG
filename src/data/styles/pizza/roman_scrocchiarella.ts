import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const roman_scrocchiarella: StyleDefinition = {
  "id": "roman_scrocchiarella",
  "title": t('styles.roman_scrocchiarella_title'),
  "subtitle": t('styles.roman_thin_pizza'),
  "category": t('styles.pizza_11'),
  "family": t('styles.roman_thin_pizza_2'),
  "variantName": t('styles.roman_scrocchiarella_title'),
  "origin": {
    "country": t('styles.italy_11'),
    "region": t('styles.rome'),
    "period": "20th century"
  },
  "intro": t('styles.roman_scrocchiarella_intro'),
  "history": t('styles.roman_scrocchiarella_history'),
  "culturalContext": {
    "significance": [
      "Represents Roman approach to pizza: ultra-thin, crispy, light - opposite of Neapolitan",
      "Symbol of Roman culinary identity and rivalry with Naples over pizza supremacy",
      "Embodies Roman preference for crispiness over softness in bread and pizza",
      "Popular in trendy Roman pizzerias and modern aperitivo culture",
      "Reflects contemporary Roman cuisine: traditional roots with modern execution"
    ],
    "consumptionContext": [
      "Eaten at pizzerias, often during aperitivo hour (6-8 PM) with drinks",
      "Served whole or cut into squares, eaten with hands",
      "Popular for light dinner or sharing during social gatherings",
      "Often paired with Roman white wine (Frascati) or craft beer",
      "Consumed immediately - doesn't hold well, doesn't reheat, doesn't travel"
    ],
    "evolution": [
      "Ancient Rome: Flatbreads existed but not modern pizza",
      "1950s-1970s: Roman pizza develops as thinner alternative to Neapolitan",
      "1990s: Scrocchiarella style emerges emphasizing extreme thinness and crispiness",
      "2000s: Becomes signature of high-end Roman pizzerias like Gabriele Bonci's",
      "2010s: Spreads beyond Rome, featured in international pizza competitions",
      "Modern: Represents artisan Roman pizza movement, contrast to Neapolitan dominance"
    ],
    "rituals": [
      "The crunch test: authentic scrocchiarella should audibly crack when bitten",
      "Minimal toppings philosophy: let the crispy crust shine as the star",
      "Aperitivo pairing: traditionally served with Prosecco, Spritz, or white wine",
      "Eating whole vs cutting debate: purists eat the whole round to preserve crispiness",
      "The fold controversy: some fold once, others eat flat to maintain maximum crunch"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Delicate wheat flavor with subtle sweetness from high-quality Italian flour",
      "Crispy, toasted notes from high-heat baking and thin profile",
      "Minimal toppings allow the crust flavor to dominate the experience",
      "Light olive oil richness without heaviness or greasiness",
      "Clean, pure bread flavor - no fat enrichment or complex fermentation notes"
    ],
    "aromaProfile": [
      "Toasted wheat and bread crust aromas dominate",
      "Light olive oil scent without being oily",
      "Minimal topping aromas - crust-forward experience",
      "Slight char from high heat baking",
      "Fresh, clean bakery smell - simple and pure"
    ],
    "textureNotes": [
      "Extremely thin, cracker-like crust that shatters when bitten",
      "Crispy throughout - no soft or chewy center",
      "Light and airy despite extreme thinness",
      "Delicate - breaks easily when handled roughly",
      "Overall: crispy, crunchy, never chewy or soft anywhere"
    ],
    "pairingRecommendations": [
      "Classic: Minimal toppings - tomato, fresh mozzarella, basil",
      "Roman style: Mortadella, stracciatella cheese, pistachios",
      "Beverage: Roman white wine (Frascati, Castelli Romani), Prosecco, or craft lager",
      "Keep it light: Avoid heavy meats or excessive cheese that create sogginess",
      "Avoid: Thick sauces, too many toppings, wet ingredients - they destroy crispiness"
    ],
    "flavorEvolution": [
      "Fresh from oven (0-5 min): Peak crispiness, crust shatters perfectly, toppings hot",
      "5-10 min: Still crispy, flavors meld nicely, ideal eating window",
      "10-20 min: Begins to soften from moisture, loses signature crunch",
      "After 20 min: Becomes chewy and soft, no longer scrocchiarella",
      "Reheated: Not recommended - impossible to restore the crispy texture"
    ]
  },
  "technicalFoundations": [
    t('styles.roman_scrocchiarella_tech_1'),
    t('styles.roman_scrocchiarella_tech_2')
  ],
  "doughImpact": [
    "Moderate hydration (55-60%) creates extensibility for ultra-thin stretching without tearing",
    "Long cold fermentation (24-48h) develops flavor and improves dough structure",
    "Minimal fat content keeps crust light and crispy, not rich or heavy",
    "Medium-strong flour (W 240-280) provides structure to support paper-thin profile",
    "Dough must be stretched paper-thin (1-2mm) - any thicker spots become chewy"
  ],
  "bakingImpact": [
    "Very high temperature (250-300°C) creates instant crisping throughout",
    "Short bake time (3-5 min) prevents burning while achieving uniform crispiness",
    "Deck or stone baking provides intense bottom heat for crispy base",
    "Minimal toppings prevent sogginess from moisture release during baking",
    "Result: uniformly crispy, cracker-like texture throughout entire pizza"
  ],
  "technicalProfile": {
    "hydrationRange": [
      55,
      60
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      2,
      4
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": t('styles.mediumstrong_flour_w_240280'),
    "fermentation": {
      "bulk": t('styles.roman_scrocchiarella_ferm_bulk'),
      "proof": t('styles.short_proof_in_pans_or_on_trays'),
      "coldRetard": t('styles.optional_up_to_24_h')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        250,
        300
      ],
      "notes": t('styles.baked_thin_on_pans_or_stone_for_crispness')
    },
    "difficulty": "Medium",
    "recommendedUse": [
      t('common.roman_thin_pizza'),
      t('common.crispy_pizza_base')
    ]
  },
  "regionalVariants": [
    "Scrocchiarella Classica - Original ultra-thin Roman style",
    "Pizza Romana Tonda - Slightly thicker round Roman pizza, still crispy",
    "Pizza al Taglio - Rectangular Roman pizza, sold by weight, less crispy",
    "Pinsa Romana - Oval shape, lighter dough with rice/soy flour, modern variation"
  ],
  "climateScenarios": [
    "Hot/Humid (>25°C, >70% RH): Reduce fermentation time by 20%, use cooler water (15-18°C)",
    "Cold/Dry (<15°C, <40% RH): Extend fermentation time by 30%, use warmer water (25-28°C)",
    "Tropical: Refrigerate dough throughout process, reduce yeast by 15%",
    "High Altitude (>1500m): Increase hydration by 2-3%, reduce bake time slightly"
  ],
  "styleComparisons": [
    "vs. Neapolitan: Roman is ultra-thin, crispy throughout vs soft, wet, thick puffy edges",
    "vs. New York: Roman is thinner, crispier, lighter vs chewy, foldable, substantial",
    "vs. Roman Teglia: Scrocchiarella is round, thinner vs rectangular, thicker, breadier",
    "vs. Pinsa: Scrocchiarella is traditional wheat dough vs pinsa uses rice/soy flour blend"
  ],
  "parameterSensitivity": [
    "Critical: Thickness - must be paper-thin (1-2mm), any thick spots become chewy not crispy",
    "Highly sensitive: Oven temperature - below 250°C won't achieve proper crispiness",
    "Topping amount critical: too much creates soggy spots from moisture",
    "Bake time precise: 30 seconds too long = burnt, too short = soft and chewy",
    "Dough temperature: must be room temp (20-25°C) for easy stretching without tearing"
  ],
  "risks": [
    "Thick spots: Uneven stretching creates chewy areas instead of uniformly crispy",
    "Soggy center: Too much sauce or wet toppings release moisture",
    "Burnt edges: Oven too hot or bake time too long for thin crust",
    "Tears during stretching: Dough too cold, under-fermented, or over-worked",
    "Loss of crispiness: Letting pizza sit too long before eating"
  ],
  "notes": [
    "The name 'scrocchiarella' literally means 'little crunchy one' in Roman dialect",
    "Authentic Roman scrocchiarella should be so thin you can almost see through it",
    "Unlike Neapolitan, there's no puffy cornicione - uniformly thin throughout",
    "Best eaten immediately at the pizzeria - doesn't travel well or hold",
    "The crunch is the defining characteristic - if it's not crispy, it's not scrocchiarella"
  ],
  "tags": [
    t('common.roman_thin_pizza'),
    t('common.crispy_pizza_base'),
    t('common.pizza'),
    t('common.italy')
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
      "title": t('styles.modernist_pizza_9'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": t('styles.italian_pizza_technical_literature'),
      "url": "https://www.pizzanapoletana.org/",
      "author": "Italian Pizza Association",
      "year": 2023
    },
    {
      "title": "The Pizza Bible",
      "url": "https://www.amazon.com/Pizza-Bible-Worlds-Favorite-Styles/dp/1607746267",
      "author": "Tony Gemignani",
      "year": 2014
    },
    {
      "title": "Roman Pizza: A Cultural History",
      "url": "https://www.italianfoodexcellence.com/roman-pizza-history/",
      "author": "Italian Food Excellence",
      "year": 2022
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "How thin should scrocchiarella pizza be?",
      "answer": "Authentic scrocchiarella should be extremely thin - about 1-2mm thick, almost translucent in spots. You should be able to see light through the thinnest parts. The entire pizza should be uniformly thin with no thick edges or cornicione like Neapolitan pizza. If it's thicker than 3mm anywhere, it's not true scrocchiarella. The name literally means 'little crunchy one' and refers to the cracker-like texture."
    },
    {
      "question": "Why does my Roman pizza turn out chewy instead of crispy?",
      "answer": "Chewy texture indicates several possible issues: 1) Dough too thick - must be paper-thin (1-2mm) throughout, 2) Oven temperature too low - need 250-300°C minimum, 3) Too many wet toppings creating steam during baking, 4) Bake time too short - needs full 3-5 minutes at high heat, 5) Letting pizza sit too long before eating. The key to scrocchiarella is extreme thinness + very high heat + minimal toppings = crispy throughout."
    },
    {
      "question": "Can I make scrocchiarella in a home oven?",
      "answer": "It's challenging but possible with the right setup. Home ovens typically max out at 260-290°C, which is lower than ideal (300°C+). Use a pizza steel or stone preheated for 1 hour at maximum temperature. Place on the lowest oven rack for maximum bottom heat. The dough must be stretched paper-thin - this is more important than oven temp. Bake time will be slightly longer (5-7 min vs 3-5 min). The result won't be quite as crispy as professional ovens but can still be very good."
    },
    {
      "question": "What's the difference between scrocchiarella and pizza al taglio?",
      "answer": "Scrocchiarella is round, ultra-thin (1-2mm), and extremely crispy throughout - eaten immediately after baking at sit-down pizzerias. Pizza al taglio (pizza by the cut) is rectangular, significantly thicker (5-10mm), and has a softer, breadier texture - designed to sit in display cases and be sold by weight for takeaway. Scrocchiarella emphasizes crispiness and immediate consumption, while al taglio prioritizes portability and longer shelf life."
    },
    {
      "question": "Why do toppings need to be minimal on scrocchiarella?",
      "answer": "The ultra-thin crust (1-2mm) cannot support heavy or wet toppings without becoming soggy. Excess moisture from sauce, fresh mozzarella, or vegetables will steam the crust during baking, preventing the signature crispiness. Traditional scrocchiarella uses: thin layer of sauce, moderate cheese (often less than other styles), and 1-2 light toppings maximum. The crust is the star of the show - toppings should complement and enhance, not overwhelm or dominate."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
