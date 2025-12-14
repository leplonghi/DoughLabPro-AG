import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const japanese_shokupan: StyleDefinition = {
  "id": "japanese_shokupan",
  "title": "Japanese Shokupan (Milk Bread)",
  "subtitle": t('styles.asian_milk_bread'),
  "category": t('styles.bread_11'),
  "family": t('styles.asian_milk_bread_2'),
  "variantName": "Japanese Shokupan (Milk Bread)",
  "origin": {
    "country": t('styles.japan_2'),
    "region": t('styles.nationwide_2'),
    "period": "20th century"
  },
  "intro": "The gold standard for sandwich bread in Japan, prized for its 'mochi-mochi' (chewy/soft) texture.",
  "history": "A super-soft, fluffy white bread made using the Tangzhong (water roux) method to retain moisture and softness.",
  "technicalFoundations": [
    "Tangzhong (cooked flour/water paste) + Yeast.",
    "Hydration: 70-78%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      70,
      78
    ],
    "saltRange": [
      1.8,
      2
    ],
    "oilRange": [
      6,
      10
    ],
    "sugarRange": [
      6,
      12
    ],
    "flourStrength": t('styles.highprotein_bread_flour'),
    "fermentation": {
      "bulk": "1–2 h at room temperature",
      "proof": "60–90 min in lidded or open pans",
      "coldRetard": t('styles.optional')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.baked_gently_to_avoid_thick_crust_often_lidded_for')
    },
    "difficulty": t('styles.hard_6'),
    "recommendedUse": [
      t('common.sandwiches'),
      t('common.thick_toast'),
      t('common.dessert_bread')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.sandwiches'),
    t('common.thick_toast'),
    t('common.dessert_bread'),
    t('common.bread'),
    t('common.japan')
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
      "title": t('styles.modernist_bread_10'),
      "url": ""
    },
    {
      "title": t('styles.asian_baking_techniques'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};