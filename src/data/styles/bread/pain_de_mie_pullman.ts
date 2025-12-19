import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pain_de_mie_pullman: StyleDefinition = {
  "id": "pain_de_mie_pullman",
  "title": "Pain de Mie / Pullman Loaf",
  "subtitle": t('styles.sandwich__enriched_breads_7'),
  "category": t('styles.bread_16'),
  "family": t('styles.sandwich__enriched_breads_8'),
  "variantName": "Pain de Mie / Pullman Loaf",
  "origin": {
    "country": "France/USA",
    "region": t('styles.bakery_and_industrial'),
    "period": "20th century"
  },
  "intro": "Used for sandwiches, toast and canapés where a uniform crumb and shape are desired.",
  "history": "Pain de Mie (Bread of Crumbs) originated in France as a counterpoint to the rustic, crusty boules of the countryside. It was refined for use by the urban elite who preferred the soft internal 'mie' over the hard crust. The 'Pullman' name comes from the lidded pans used in the dining cars of the Pullman railway company in the USA; the lids were a strategic choice to save space by producing perfectly square loaves that could be stacked easily. This style represents the technological shift toward 'closed-pan' baking and the standardization of the modern sandwich loaf.",
  "culturalContext": {
    "significance": [
      "The 'Haute Couture' of sandwich bread, balancing elegance and functionality",
      "A symbol of industrial efficiency and culinary standardization",
      "Celebrated for its 'non-crust' aesthetic, making it the favorite for children and high-tea canapés",
      "Represents the bridge between French fine-baking and American convenience",
      "The mandatory vessel for the classic French 'Croque Monsieur'"
    ],
    "consumptionContext": [
      "Ideally sliced for standard square sandwiches with the crusts often removed",
      "The best bread for high-end French Toast (Pain Perdu) due to its uniform absorption",
      "Used for 'Finger Sandwiches' at formal afternoon tea ceremonies",
      "Commonly served as 'Croustades' (toasted hollowed-out cubes) for creamy fillings",
      "A staple of 'Bento' boxes and modern brunch toast presentations"
    ],
    "evolution": [
      "1800s: French bakers develop lidded pans to create a blonde, nearly crustless loaf",
      "1867: George Pullman popularizes the square lidded pan for railway dining cars",
      "1920s: The 'Wonder Bread' era starts in the US, taking Pain de Mie to mass industrial levels",
      "1960s: Standardized enrichment (milk/sugar) levels are set for the 'National Sandwich Loaf'",
      "Present: A return to artisanal 'Pain de Mie' using heritage grains and natural leaven",
      "Future: Shift toward high-fiber, clean-label versions of the soft white classic"
    ],
    "rituals": [
      "The 'Lid Lock': the strategic sliding of the pan lid to ensure it stays closed during oven spring",
      "Crust Removal: the ritual of trimming away all four crusts to create a pure white square",
      "Precision Slicing: using a guide to ensure every slice is exactly 12mm or 20mm thick",
      "Finger-Pressing: checking the dough height in the pan—too low is round, too high is 'mushroomed'",
      "Butter Spreading: the sensory experience of spreading cold butter on a perfectly flat internal surface"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Sweet and milky with clean cereal notes",
      "Buttery richness without the heaviness of Brioche",
      "Subtle vanilla or malted undertones",
      "Mildly savory (thanks to the 2% salt standard)",
      "Designed to be a neutral canvas for delicate ingredients"
    ],
    "aromaProfile": [
      "Fresh warm milk and sweet cream",
      "Honey and light malt",
      "Toasted white wheat (subtle)",
      "Warm yeast and butter",
      "Clean, non-acidic profile"
    ],
    "textureNotes": [
      "The 'Cotton' Crumb: uniform, fine, and incredibly soft with no large holes",
      "Zero Elasticity: should be tender and short-bite (melts in the mouth)",
      "Blonde Skin: the crust should be as thin as paper and soft to the touch",
      "Perfect Square Profile: four sharp 90-degree angles (in a Pullman lidded pan)",
      "Resilient: despite its softness, it must hold its shape when filled with heavy ingredients"
    ],
    "pairingRecommendations": [
      "Savory: Thinly sliced ham with Dijon mustard, cucumber with cream cheese, or smoked salmon",
      "Sweet: Fruit preserves, Dulce de Leche, or thick honey and butter",
      "Meat: Roast beef or turkey breast with light mayonnaise",
      "Dish: Croque Monsieur with Béchamel and Gruyère cheese",
      "Drink: English breakfast tea, warm milk, or a light white wine"
    ],
    "flavorEvolution": [
      "Fresh (0-6 hours): At its softest; ideal for tea sandwiches and un-toasted uses",
      "12-24 Hours: Peak structural strength for sliced sandwiches",
      "Day 3-4: The 'Peak Toasting' phase; moisture loss makes it crisp up beautifully",
      "Day 7: Best used for French Toast or bread pudding",
      "Stale: Traditionally grated for high-quality white breadcrumbs (without the crusts)"
    ]
  },
  "technicalFoundations": [
    "Often straight dough; can include sponge or poolish.",
    "Hydration: 60-70%"
  ],
  "doughImpact": [
    "Enrichment (Milk, Butter, Sugar) at 10-15% total weight provides the signature tenderness",
    "Medium hydration (60-70%) ensures the dough is firm enough to pressure against the lid",
    "Intense mixing (to full windowpane) is required for the fine, tight honeycomb crumb structure",
    "Inclusion of milk powder or scalded milk deactivates enzymes that could weaken the gluten",
    "Short to medium bulk fermentation prevents the development of large, irregular air pockets"
  ],
  "bakingImpact": [
    "The Lid (Pullman Pan) traps steam inside, effectively 'pressure-baking' the crumb for softness",
    "Baked at moderate temperatures (180-200°C) to achieve a light golden, non-crunchy crust",
    "Strategic under-proofing (filling to 70-80% of pan) allows the dough to 'square off' against the lid",
    "Immediate removal from the pan is CRITICAL to prevent 'sweating' and soggy sidewalls",
    "Lack of oven steam (external) is compensated by the heavy internal steam trapped by the lid"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      70
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
      5,
      15
    ],
    "flourStrength": t('styles.bread_or_strong_allpurpose_flour'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "60–90 min in lidded pans",
      "coldRetard": t('styles.optional_overnight_bulk')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.lidded_pans_create_tight_square_crumb_structure')
    },
    "difficulty": t('styles.hard_10'),
    "recommendedUse": [
      t('common.sandwich_bread'),
      t('common.toast'),
      "Canapés"
    ]
  },
  "regionalVariants": [
    "Shokupan - The ultra-soft Japanese evolution using Tangzhong paste",
    "American Sandwich Loaf - Often similar but baked without a lid, giving a rounded top",
    "English Sandwich Bread - Slightly drier and sturdier, designed for heavy buttering",
    "Pain de Mie au Levain - The French artisanal approach using natural leaven for more depth",
    "Whole Wheat Pullman - High-extraction version for a nuttier, healthier sandwich profile"
  ],
  "climateScenarios": [
    "High Humidity: The soft skin can become 'damp/leathery'; ensure cooling on a wire rack",
    "Arid/Dry Environment: The lack of crust makes it prone to drying fast; bag it as soon as cool",
    "Tropical Heat: High sugar causes the lid-baked dough to ferment too fast—reduce yeast by 15%",
    "Winter/Cold: The fats (butter) will make the dough stiff; use milk at 30°C to maintain activity"
  ],
  "styleComparisons": [
    "vs. Brioche: Pain de Mie is leaner and focuses on 'squareness' vs. Brioche's 'luxury and fat'",
    "vs. Baguette: Opposite worlds; Uniform crumb and soft skin vs. irregular crumb and hard crust",
    "vs. Texas Toast: Texas toast is essentially a thick-cut, heavily buttered version of Pain de Mie",
    "vs. Ciabatta: Pain de Mie has a tight, microscopic crumb vs Ciabatta's giant 'cave' alveoli"
  ],
  "parameterSensitivity": [
    "Critical: Pan Volume - 10 grams of dough too much and the lid explodes off; 10g too little and it's round",
    "Highly sensitive: Kneading - under-kneaded dough results in a crumb that 'crumbles' when sliced",
    "Dairy Choice: Whole milk vs water is the difference between an artisan loaf and a generic one",
    "Lid Timing: Placing the lid too late or too early drastically changes the internal density",
    "Sugar Level: Essential for the characteristic fast, light-blonde browning at low heat"
  ],
  "risks": [
    "The 'Flying Lid': Dough was over-proofed or pan was too small, forcing the lid up and off",
    "Rounded Shoulders: Not enough dough or under-proofed, preventing it from reaching the top corners",
    "Dense Bottom: Improper dough distribution in the pan before the final proof",
    "Gummy Texture: Not baking long enough to reach 90°C internally due to the lid blocking heat",
    "Crust Peeling: Too much steam trapped for too long without enough direct heat at the end"
  ],
  "notes": [
    "Always grease the lid as well as the pan, or the dough will stick and break when opening",
    "For the most uniform crumb, degas the dough completely before the final shaping into the pan",
    "If you want even softer bread, substitute 10% of the water with heavy cream (35% fat)",
    "Use a Pullman pan with at least a 10cm height for the most professional 'tall' sandwich feel",
    "Slice it with an electric knife or a very high-quality offset serrated blade for perfectly flat faces"
  ],
  "tags": [
    t('common.sandwich_bread'),
    t('common.toast'),
    "Canapés",
    t('common.bread'),
    "France/USA"
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
      "title": "Professional Baking: The Pullman Loaf",
      "url": "https://www.wiley.com/en-us/Professional+Baking%2C+7th+Edition-p-9781119148449",
      "author": "Wayne Gisslen",
      "year": 2017
    },
    {
      "title": t('styles.modernist_bread_14'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Kitchen Narratives: History of the Pullman Pan",
      "url": "https://www.kingarthurbaking.com/blog/2018/02/12/how-to-use-a-pullman-loaf-pan",
      "author": "King Arthur Baking",
      "year": 2018
    },
    {
      "title": "Larousse Gastronomique: Pain de Mie",
      "url": "https://www.worldcat.org/title/larousse-gastronomique-the-worlds-greatest-culinary-encyclopedia/",
      "author": "Librairie Larousse",
      "year": 2001
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Why is it called 'Pullman' bread?",
      "answer": "The name comes from the Pullman Palace Car Company, which operated high-end dining cars on American railways in the late 1800s. They used lidded pans to bake bread because the resulting square loaves were space-efficient and easy to stack in the small railway kitchens."
    },
    {
      "question": "How do I know how much dough to put in my Pullman pan?",
      "answer": "A good rule of thumb is to fill the pan about 75-80% full after the final proof. Mathematically, for a lidded pan, you usually need about 0.35 to 0.40 grams of dough per cubic centimeter of pan volume to ensure it fills the corners without exploding."
    },
    {
      "question": "Can I bake this without a lid?",
      "answer": "Yes, but it won't be a true Pullman loaf. Baking without a lid results in a rounded 'dome' top and a slightly more open crumb. The lid creates pressure that forces the bubbles to remain small and uniform, resulting in the signature 'cotton' texture."
    },
    {
      "question": "Why is my Pain de Mie crumbling when I slice it?",
      "answer": "This is almost always due to under-kneading. Enriched doughs need strong gluten development (windowpane test) to hold the fats and sugars together. If the gluten is weak, the bread will 'shear' and crumble instead of slicing cleanly."
    },
    {
      "question": "Is it okay to use only water instead of milk?",
      "answer": "Technically yes, but it won't be authentic Pain de Mie. Milk provides the lactose (sugar) for browning and the fats for tenderness. If you must use water, add 2-3% more butter and a tablespoon of honey to mimic the richness of milk."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
