import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const wheat_tortilla: StyleDefinition = {
  "id": "wheat_tortilla",
  "title": t('styles.wheat_flour_tortilla'),
  "subtitle": t('styles.classic_flatbreads_11'),
  "category": t('styles.bread_27'),
  "family": t('styles.classic_flatbreads_12'),
  "variantName": t('styles.wheat_flour_tortilla_2'),
  "origin": {
    "country": t('styles.mexico'),
    "region": t('styles.northern_mexico_and_southwest_us'),
    "period": "Traditional/Modern"
  },
  "intro": t('styles.used_for_tacos_burritos_quesadillas_and_many_stree'),
  "history": "Wheat Flour Tortillas (Tortillas de Harina) originated in the northern states of Mexico (Sonora, Chihuahua, Sinaloa) following the Spanish conquest. While central and southern Mexico remained dedicated to corn (maize), the north had white wheat and lard introduced by the Europeans. Jewish conversos (Crypto-Jews) in the region are often credited with adapting their unleavened flatbread traditions to the local ingredients, creating a thin, pliable carrier that became the foundation for northern Mexican cuisine and, later, the American 'Tex-Mex' burrito culture.",
  "culturalContext": {
    "significance": [
      "The defining vessel of Northern Mexican and Southwest American cuisine",
      "Historically a symbol of the 'Borderlands'—where indigenous methods met European grains",
      "Represents a mastery of 'Leanness' vs 'Fat'—achieving flexibility with minimal ingredients",
      "Essential for the 'Sonoran' food identity, distinguishing it from the 'Corn-Belt' of the South",
      "An icon of versatility: can be a snack, a main meal wrapper, or a dessert (Sopapillas)"
    ],
    "consumptionContext": [
      "Commonly served warm for Tacos (Carne Asada), Burritos, and Quesadillas",
      "Used for 'Desayuno' (breakfast) with eggs, beans, and chorizo",
      "Can be fried into 'Chimichangas' or used as 'Buñuelos' with sugar and cinnamon",
      "Often used simply as a utensil to scoop up stews (Guisados)",
      "Essential for 'Fajita' night in Tex-Mex restaurant culture"
    ],
    "evolution": [
      "1500s: Spanish introduce wheat and lard to Northern Mexico",
      "1800s: The 'Sonoran' style of ultra-thin, giant flour tortillas is standardized",
      "1920s: Burritos (little donkeys) gain popularity as a portable lunch for laborers",
      "1950s: Industrial flour tortillas enter US supermarkets, losing the traditional lard complexity",
      "2010s: Artisanal revival: chefs return to hand-pressed, lard-based tortillas using heirloom wheat",
      "Present: Global staple, used as 'wraps' in every culinary fusion context imaginable"
    ],
    "rituals": [
      "The 'Puff' Test: watching the tortilla inflate on the Comal as a sign of proper hydration and heat",
      "Hand-Stretching: the artisan technique of 'stretching' the dough until it's translucent",
      "The 'Comal' Flip: the rapid, bare-handed flip of the hot tortilla on the griddle",
      "Hot-Towel Wrap: stacking fresh tortillas immediately into a cloth to 'sweat' and soften",
      "Lard Rub: the sensory ritual of working cold lard into the flour until it feels like wet sand"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Mildly sweet, toasted wheat flavor",
      "Savory richness (especially if using traditional lard)",
      "Slightly salty with clean cereal notes",
      "Buttery or nutty undertones (depending on the fat used)",
      "Neutral but satisfying canvas for spicy salsas and rich meats"
    ],
    "aromaProfile": [
      "Toasted bread and warm cereal",
      "Subtle sweet fat (lard or butter)",
      "Warm wheat fields",
      "Mild yeast-like notes (even if unleavened)",
      "Sun-warmed earth"
    ],
    "textureNotes": [
      "Flexible and Pliable: must be able to fold twice without breaking",
      "Soft and Tender: should have a short 'bite' (gentle resistance then yielding)",
      "Translucent Spots: the iconic 'dark brown bubbles' on a pale white background",
      "Pillsbury Cloud: slightly airy if chemical leaveners or high-heat steam are present",
      "Non-Greasy: should feel smooth and dry to the touch, despite the high fat content"
    ],
    "pairingRecommendations": [
      "Protein: Carne Asada (grilled beef), Al Pastor (pork), or Refried Beans",
      "Fat: Avocado, Sour Cream, or melted Monterey Jack cheese",
      "Acid: Salsa Verde (Tomatillo), pickled onions, or fresh lime juice",
      "Condiment: Guacamole and spicy Pico de Gallo",
      "Beverage: Ice-cold Mexican Lager (Corona/Dos Equis), Horchata, or a Margarita"
    ],
    "flavorEvolution": [
      "Fresh (0-10 mins): Peak flexibility and 'toast' aroma; melts in the mouth",
      "1-2 Hours: Becomes slightly firmer; perfect for sturdier burritos",
      "Next Day: Must be reheated on a dry pan to restore softness; excellent for chips (Totopos)",
      "Stale: Traditionally transformed into 'Chilaquiles' or fried for dessert",
      "Freezing: Freezes exceptionally well; separate with parchment and reheat directly from frozen"
    ]
  },
  "technicalFoundations": [
    "Typically no preferment; chemical leaveners sometimes used.",
    "Hydration: 50-60%"
  ],
  "doughImpact": [
    "High-quality fat (Lard or Oil) at 10-15% is critical for the 'short' texture and pliability",
    "Hot Water (45-60°C) is often used to partially gelatinize starch, making the dough more extensible",
    "Resting (30-60 mins) is MANDATORY to allow the gluten to relax for thin stretching",
    "Low to medium hydration (50-60%) ensures the dough isn't sticky during hand-thinning",
    "Chemical leavener (Baking Powder) provides the iconic soft 'bubbles' in American-style tortillas"
  ],
  "bakingImpact": [
    "High heat (230-250°C) on a Comal/Flat-top is necessary for the 'spotty' Maillard browning",
    "Short cooking time (30-45 seconds total) prevents the tortilla from drying out and becoming a 'cracker'",
    "The 'Steam Puff' in the middle of baking ensures the layers separate, leading to a tender bite",
    "Immediate stacking in a cloth 'sweats' the tortillas, using residual steam to fully soften the gluten",
    "Lack of oil on the pan: tortillas are almost always baked 'dry' to prevent frying"
  ],
  "technicalProfile": {
    "hydrationRange": [
      50,
      60
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      5,
      15
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_soft_wheat_flour'),
    "fermentation": {
      "bulk": "Short rest after mixing (20–30 min)",
      "proof": t('styles.no_traditional_yeast_proofing_steps'),
      "coldRetard": t('styles.optional_dough_rest_in_fridge')
    },
    "oven": {
      "type": "griddle_or_pan",
      "temperatureC": [
        180,
        250
      ],
      "notes": t('styles.cooked_quickly_on_hot_comal_or_skillet')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      "Tortillas for tacos, wraps, quesadillas"
    ]
  },
  "regionalVariants": [
    "Sonoran Flour Tortillas - Ultra-thin, giant (40cm+) tortillas using high-quality local wheat",
    "Tex-Mex Style - Thicker, fluffier tortillas often containing baking powder",
    "Chihuahuense - Known for being more robust and slightly larger",
    "Corn-Wheat Blend - A hybrid style common in some coastal regions",
    "Whole Wheat Tortilla - Modern 'health' variant using high-extraction flour"
  ],
  "climateScenarios": [
    "Extreme Dryness: The dough will 'skin' over; keep under a damp towel during rolling",
    "High Humidity: Tortillas may stick when stacked; ensure they are fully 'sweat' and then separated",
    "Tropical Heat: Lard will melt too fast during mixing—use chilled lard if the room is above 30°C",
    "High Altitude: Moisture evaporates faster; add 2-3% more water to prevent cracking during folding"
  ],
  "styleComparisons": [
    "vs. Naan: Tortillas are much thinner, have no yeast, and use lard/oil vs Naan's Yogurt/Butter",
    "vs. Piadina: Tortillas are thinner and more flexible; Piadina is thicker and more 'bready'",
    "vs. Corn Tortilla: Wheat uses gluten for stretch; Corn uses Nixtamalization for structure",
    "vs. Lavash: Tortillas are smaller and rely on fat for softness vs Lavash's thinness and hydration"
  ],
  "parameterSensitivity": [
    "Critical: Fat Content - too little makes them 'bready' and prone to breaking; too much makes them greasy",
    "Highly sensitive: Water Temp - using cold water makes it impossible to stretch the dough thin",
    "Salt Level: 1.5% is standard; it highlights the sweetness of the wheat and the richness of the lard",
    "Rest Time: Skipping the 30-min rest results in 'rubber' dough that snaps back when rolled",
    "Pan Temp: If the comal is too cold, the tortilla dries into leather before it can brown"
  ],
  "risks": [
    "The Crack: Tortilla snaps when folded (usually due to under-hydration or over-baking)",
    "Rubber Band Effect: Dough won't hold its thin shape (due to skipping the rest period)",
    "Pale/Soggy: Pan was too cold or too many stacked together without enough initial heat",
    "Grease Slick: Lard wasn't incorporated properly into the flour before adding water",
    "Unblown Bubbles: Surface of the pan was oiled or dough was too dry internally"
  ],
  "notes": [
    "Always use a dry cast-iron skillet (Comal) for the best results and iconic brown 'freckles'",
    "If you want them super soft, use half milk and half hot water as your liquid",
    "Don't be afraid of lard—it provides the traditional flavor that vegetable oil can't match",
    "Roll from the center outward to ensure the edges aren't thicker than the middle",
    "Stack them inside a clean kitchen towel inside a lidded container to keep them warm for hours"
  ],
  "tags": [
    "Tortillas for tacos, wraps, quesadillas",
    t('common.bread'),
    t('common.mexico')
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
      "title": "Mexican Cookery: Flatbreads of the North",
      "url": "https://www.worldcat.org/title/mexican-cookery-flatbreads-of-the-north/",
      "author": "Barbara Pool Fenzl",
      "year": 1995
    },
    {
      "title": t('styles.modernist_bread_20'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "The Art of the Flour Tortilla",
      "url": "https://www.latimes.com/food/la-fo-flour-tortilla-master-class-20180517-story.html",
      "author": "L.A. Times",
      "year": 2018
    },
    {
      "title": "Sonoran Flour Tortillas: A Cultural Identity",
      "url": "https://www.foodandwine.com/news/sonoran-flour-tortilla-history",
      "author": "Food & Wine",
      "year": 2019
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Why won't my tortillas stretch thin enough?",
      "answer": "This is almost always because the dough hasn't rested enough. The gluten needs at least 30-60 minutes to relax after being mixed. If you try to roll them immediately, they will act like a rubber band and snap back."
    },
    {
      "question": "Can I use oil instead of lard?",
      "answer": "Yes, vegetable oil works perfectly fine and is a great vegan alternative. However, lard provides a specific savory 'shortness' and flavor that is traditional to Northern Mexico. If using oil, you might need 1-2% more to match the tenderness of lard."
    },
    {
      "question": "Why is it important to stack them in a cloth after baking?",
      "answer": "This is a critical step called 'sweating'. As the hot tortillas are stacked, they release steam. The cloth traps this steam, which softens the recently-browned crust, keeping the tortillas pliable and preventing them from becoming hard and brittle."
    },
    {
      "question": "What is the secret to the 'bubbles' on top?",
      "answer": "High heat and proper hydration. When a tortilla hits a very hot pan, the water inside turns to steam instantly. This steam pushes the layers apart, creating the puffed bubbles that brown quickly on the surface."
    },
    {
      "question": "How do I store leftover homemade tortillas?",
      "answer": "Let them cool completely, then place them in an airtight plastic bag. They will last 2-3 days at room temperature or several months in the freezer. To reheat, always use a dry pan for 15 seconds per side to restore their flexibility."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
