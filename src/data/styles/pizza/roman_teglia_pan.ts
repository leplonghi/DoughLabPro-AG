import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const roman_teglia_pan: StyleDefinition = {
  "id": "roman_teglia_pan",
  "title": "Roman Teglia (Al Taglio – High Hydration Pan)",
  "subtitle": t('styles.roman_pan_pizza'),
  "category": t('styles.pizza_12'),
  "family": t('styles.roman_pan_pizza_2'),
  "variantName": "Roman Teglia (Al Taglio – High Hydration Pan)",
  "origin": {
    "country": t('styles.italy_12'),
    "region": t('styles.rome_2'),
    "period": t('styles.late_20th_century_3')
  },
  "intro": "Sold by the slice by weight in Roman bakeries and pizzerias, often topped after par-bake or fully baked with toppings.",
  "history": "Pizza in Teglia alla Romana originated in Rome in the mid-20th century as a bready, street-food alternative to round pizzas. It was revolutionized in the 1990s by masters like Angelo Iezzi and later Gabriele Bonci, who introduced high-hydration techniques (80%+), long cold fermentations, and gourmet toppings, turning it into a light, airy, and crispy 'haute couture' bread.",
  "culturalContext": {
    "significance": [
      "The quintessential street food of Rome, found in almost every neighborhood bakery (forno)",
      "Represents the modern Italian 'Pizza Gourmande' movement - focus on dough quality",
      "Symbol of Roman practicality: quick to buy, easy to eat while walking, yet highly artisanal",
      "Famous for being sold 'al taglio' (by the cut) and priced by weight (peso)",
      "A testament to Italian technical excellence in bread making applied to pizza"
    ],
    "consumptionContext": [
      "Typically sold in long rectangular strips at specialized 'Pizza al Taglio' shops",
      "Customers use their hands to indicate how big a piece they want, and it's cut with scissors",
      "Often eaten standing up at high counters or while walking through the city",
      "A very popular lunch or late-afternoon snack for Romans of all ages",
      "Can be served at room temperature or quickly reheated to restore the bottom crunch"
    ],
    "evolution": [
      "1950s: Modern Teglia emerges as a thicker, more satiating 'pan pizza' for laborers",
      "1987: Angelo Iezzi starts experimenting with high hydration and long cold ferments",
      "1990s: Invention of the 'Iezzi Method' - the foundation for modern airy Roman pan pizza",
      "2003: Gabriele Bonci opens Pizzarium, bringing world-class gourmet toppings to the style",
      "2010s: Global expansion as 'Roman Pan Pizza' appears in London, New York, and beyond",
      "Present: Recognized as a pinnacle of technical dough artistry alongside sourdough bread"
    ],
    "rituals": [
      "Cutting with Scissors: specialized pizza shears are used to prevent crushing the airy vertical bubbles",
      "Pointing and Weighing: the ritual of showing the pizzaiolo where to cut with your finger",
      "The Double Bake: often par-baked without toppings to ensure maximum lift, then finished with ingredients",
      "The 'Crunch Test': tapping the bottom to hear the hollow, glassy sound of a well-baked teglia",
      "Biting into the 'Honeycombs': admiring the massive internal aeration (alveolatura) before eating"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Pronounced toasted wheat and sweet malt notes from high-extraction flour",
      "Mild but complex fermentation tang from 48-72 hour cold retard",
      "Pure olive oil richness - the pan is heavily oiled to fry the bottom",
      "Clean, fresh topping flavors; ingredients are often added post-bake to preserve their integrity",
      "Savory sea salt finish on the crispy bottom crust"
    ],
    "aromaProfile": [
      "Intense freshly baked sourdough and toasted bread crust",
      "Fruity extra-virgin olive oil used for panning",
      "Aromas of fresh seasonal produce: artichokes, potatoes, or quality charcuterie",
      "Subtle sweet creamy notes from high-quality mozzarella or burrata finishes",
      "Earthy notes if whole grain or 'Biga' preferments are used"
    ],
    "textureNotes": [
      "The 'Triple Texture': glassy-crisp bottom, impossibly airy middle, soft-tender top",
      "Internal crumb structure resembles a large-holed ciabatta or honeycomb",
      "Extremely light and easy to digest despite its height and volume",
      "Contrasting top textures: creamy cold cheeses or crispy roasted vegetables",
      "Bottom crust is almost 'fried' due to the oil in the blue steel pan"
    ],
    "pairingRecommendations": [
      "Traditional: Potato and Rosemary (patate e rosmarino) - no cheese, just olive oil",
      "Gourmet: Mortadella, stracciatella, and crushed pistachios post-bake",
      "Beverage: Roman craft beer or a dry, sparkling white wine (Spumante)",
      "Vegetables: Zucchini blossoms with anchovies or roasted seasonal funghi",
      "Finish: Drizzle of peppery Italian olive oil or a few flakes of sea salt"
    ],
    "flavorEvolution": [
      "Fresh (0-10 mins): Peak bottom crispness; the 'crumb cloud' is most ethereal",
      "Warm (20-40 mins): Still holds its crunch exceptionally well compared to round pizza",
      "Room Temp: This style is uniquely suited to being eaten cool, like gourmet foccacia",
      "Next Day: Reheats better than any other pizza; a 5-minute oven blast restores the 'glassy' crunch",
      "Cold: A popular 'snack' for the following day - flavors of the dough are very concentrated"
    ]
  },
  "technicalFoundations": [
    "Often uses long cold ferment and sometimes preferments for better structure.",
    "Hydration: 75-85%"
  ],
  "doughImpact": [
    "Ultra-high hydration (75-85%) is critical for the massive steam-driven spring and airy crumb",
    "Requires high-protein 'Strong' or 'Type 0' flour (W 300+) to support such high water content",
    "Long cold fermentation (48-72h) is essential to relax the gluten for pan-stretching",
    "High oil content in the pan 'fries' the base, creating the glassy, crispy barrier",
    "Delicate hand-dimpling (stendere) is required to preserve the gas bubbles created during proof"
  ],
  "bakingImpact": [
    "Baked in blue-steel pans which have superior thermal conductivity for the crispy base",
    "High heat (240-280°C) provides the 'thermal shock' needed for the vertical dough spring",
    "The 15-20 minute bake time allows the internal moisture to evaporate, keeping the crumb light",
    "Often uses a 'half-bake' strategy: par-baking the base alone before adding delicate toppings",
    "Humidity in professional ovens helps the top remain tender while the bottom fries"
  ],
  "technicalProfile": {
    "hydrationRange": [
      75,
      85
    ],
    "saltRange": [
      2.3,
      2.8
    ],
    "oilRange": [
      3,
      5
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": t('styles.strong_bread_or_pizza_flour_w_300340'),
    "fermentation": {
      "bulk": "12–48 h with cold retard",
      "proof": "1–3 h in pan before baking",
      "coldRetard": t('styles.common_for_flavor_and_extensibility')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        240,
        280
      ],
      "notes": t('styles.baked_in_oiled_rectangular_pans_sometimes_in_two_s')
    },
    "difficulty": t('styles.expert_15'),
    "recommendedUse": [
      t('common.roman_pan_pizza'),
      "Tray-baked pizza sold by weight"
    ]
  },
  "regionalVariants": [
    "Classic Bonci Style - High hydration, focus on wild ferment and extreme gourmet toppings",
    "Forno Style - Found in traditional Roman bakeries; usually simpler and a bit denser",
    "Pinsa Romana - Oval cousin, uses a blend of rice/soy/wheat flour for different texture",
    "Pizza alla Pala - Baked directly on the stone with a peel, but high-hydration like Teglia",
    "Scrocchiarella - The thinner, much crunchier Roman cousin baked in similar pans"
  ],
  "climateScenarios": [
    "Humid Summer Rome: Reduce yeast drastically; use ice-cold water (2°C) to control hydration heat",
    "Dry Winter: Tightly cover proofing pans to prevent a skin forming on the high-hydration dough",
    "High Altitude: Reduce yeast by 25%; the low pressure will cause the airy bubbles to expand too fast",
    "Tropical: Use a 'Biga' preferment to strengthen the gluten network against high humidity"
  ],
  "styleComparisons": [
    "vs. Sicilian: Teglia is much more hydrated (80% vs 65%) and has a far airier, lighter crumb",
    "vs. Detroit: Teglia lacks the heavy cheese crown and focuses more on the dough structure",
    "vs. Focaccia: Teglia is crispier on the bottom and topped as a main meal, not just a side bread",
    "vs. Neapolitan: Teglia is a pan-style meal with 3x the bake time and twice the hydration"
  ],
  "parameterSensitivity": [
    "Critical: Flour Strength (W) - weak flour will collapse under 80% hydration, creating a gummy mess",
    "Highly sensitive: Kneading Temp - high hydration needs finished dough at 21-23°C to activate gluten",
    "Pan Material: Aluminum pans won't get hot enough to 'fry' the bottom; blue steel is the standard",
    "Panning Technique: Over-stretching the dough into corners will pop the fragile air bubbles",
    "Water Quality: Hard water can sometimes help tighten the gluten for these extreme hydrations"
  ],
  "risks": [
    "The Gum Line: Dough collapsing under the weight of toppings, creating a raw-looking layer",
    "Sticky Mess: Incorrect mixing technique (not adding water gradually) making the dough unhandleable",
    "Undercooked Crumb: Too much sauce on top preventing the massive internal moisture from escaping",
    "Stuck to Pan: Not enough oil or using a brand new blue-steel pan without seasoning it",
    "Tough Base: Using dough too early (under-fermented) causing the gluten to resist stretching"
  ],
  "notes": [
    "Blue steel pans must be seasoned (bruciatura) before use for non-stick performance",
    "Add the water in 3-4 stages during mixing to ensure the flour fully 'absorbs' the hydration",
    "Focus on 'dimpling' with your fingertips, not rolling or pushing flat",
    "If using a domestic oven, preheat for a full hour to get the stone/rack as hot as possible",
    "Try a 72-hour cold ferment - the digestibility and flavor are infinitely better"
  ],
  "tags": [
    t('common.roman_pan_pizza'),
    "Tray-baked pizza sold by weight",
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
      "title": t('styles.modernist_pizza_10'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": "Il Gioco della Pizza",
      "url": "https://www.rizzolilibri.it/libri/il-gioco-della-pizza-bonci/",
      "author": "Gabriele Bonci",
      "year": 2012
    },
    {
      "title": "Pizza: Roman Art",
      "url": "https://www.amazon.com/Pizza-Roman-Art-Angelo-Iezzi/dp/8895056262",
      "author": "Angelo Iezzi",
      "year": 2008
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What is the secret to the big holes in Roman Pan pizza?",
      "answer": "It is a combination of very high hydration (80%+), strong high-protein flour, a long cold fermentation (48-72h), and gently 'dimpling' the dough into the pan with your fingertips to avoid popping the internal gas bubbles."
    },
    {
      "question": "Why is it sold by the weight (al taglio)?",
      "answer": "Because the pizzas are baked in massive rectangular trays (60x40cm), it's easier and more fair for customers to choose exactly the size they want. The price is then calculated by the gram, reflecting the weight of the dough plus the toppings."
    },
    {
      "question": "What makes it different from Focaccia?",
      "answer": "While similar in shape, Roman Teglia remains crispier on the bottom (baked in blue steel with oil), has a much more open 'cloud-like' crumb, and is designed to be a topped meal rather than a salty accompaniment bread."
    },
    {
      "question": "Do I need a special oven for this style?",
      "answer": "While pros use specialized electric deck ovens with high bottom heat, you can achieve great results in a home oven. The key is using a blue-steel pan and placing it on a preheated pizza stone or the very floor of the oven to get that 'fried' bottom."
    },
    {
      "question": "How do I handle such sticky dough?",
      "answer": "Use wet hands! Water is your friend. Also, performing 'stretch and folds' during the first 2 hours of bulk fermentation builds the gluten strength needed to make the wet dough manageable and elastic."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
