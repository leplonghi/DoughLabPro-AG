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
  "history": "Derived from Neapolitan pizza but baked in intense coal-fired ovens, resulting in a charred, oblong, thin crust.",
  "technicalFoundations": [
    "Long cold fermentation, often direct or sponge.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
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
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
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
      "url": ""
    },
    {
      "title": t('styles.new_haven_pizza_lore'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};