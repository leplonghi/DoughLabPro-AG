import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const new_york_slice_shop: StyleDefinition = {
  "id": "new_york_slice_shop",
  "title": "New York Slice Shop (Classic)",
  "subtitle": t('styles.new_york_style_pizza_3'),
  "category": t('styles.pizza_10'),
  "family": t('styles.new_york_style_pizza_4'),
  "variantName": "New York Slice Shop (Classic)",
  "origin": {
    "country": t('styles.united_states_10'),
    "region": t('styles.new_york_city_3'),
    "period": t('styles.early_20th_century')
  },
  "intro": "The quintessential American street food. Cheap, fast, and eaten on the go. The 'New York Fold' is a practical necessity to keep the molten cheese and oil from sliding off.",
  "history": "Descended from Neapolitan immigrants (Lombardi's, 1905), this style evolved to suit coal and later gas deck ovens. The dough became larger (18-20 inches), lower moisture, and tougher to handle the 'slice fold'. The use of bromated high-gluten flour became a standard for that specific chew.",
  "technicalFoundations": [
    "Direct dough is standard. Old dough (scrap) sometimes added.",
    "Hydration: 58-62%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      58,
      62
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      2,
      5
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": "High-Gluten Flour (13–14.5% protein), often bromated",
    "fermentation": {
      "bulk": "24–48h Cold Fermentation is critical for the characteristic blistered crust",
      "proof": "2–3h warm up before stretching",
      "coldRetard": t('styles.mandatory_for_texture_and_flavor')
    },
    "oven": {
      "type": "gas_deck",
      "temperatureC": [
        280,
        315
      ],
      "notes": t('styles.baked_on_deck_for_712_minutes_must_be_crisp_enough')
    },
    "difficulty": t('styles.medium_38'),
    "recommendedUse": [
      "By-the-slice sales",
      "Large 18-inch pies"
    ]
  },
  "defaults": {
    "hydration": 60,
    "salt": 2.2,
    "oil": 3,
    "sugar": 2
  },
  "recommendedFlavorComponents": [
    "mozzarella_low_moisture",
    "pepperoni",
    "italian_sausage",
    "bell_pepper",
    "cogumelos",
    "pecorino_romano"
  ],
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    "By-the-slice sales",
    "Large 18-inch pies",
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
      "title": t('styles.modernist_pizza_8'),
      "url": ""
    },
    {
      "title": "Scott123 (PizzaMaking.com)",
      "url": ""
    },
    {
      "title": "Famous Ray's",
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};