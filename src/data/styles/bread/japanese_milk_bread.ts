import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const japanese_milk_bread: StyleDefinition = {
  "id": "japanese_milk_bread",
  "title": "Japanese Milk Bread (Tangzhong)",
  "subtitle": t('styles.sandwich__enriched_breads_5'),
  "category": t('styles.bread_10'),
  "family": t('styles.sandwich__enriched_breads_6'),
  "variantName": "Japanese Milk Bread (Tangzhong)",
  "origin": {
    "country": t('styles.japan'),
    "region": t('styles.east_asia'),
    "period": "20th–21st century"
  },
  "intro": "Common in Japanese and Asian bakeries as a premium soft bread for toast and sandwiches.",
  "history": "Japanese milk bread uses a cooked flour paste (tangzhong) to achieve an especially soft, shreddable crumb and extended shelf life.",
  "technicalFoundations": [
    "Straight dough with tangzhong; some formulas use sponge.",
    "Hydration: 68-75%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      68,
      75
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
    "flourStrength": t('styles.bread_or_highquality_allpurpose_flour'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–90 min in pans until nearly at rim",
      "coldRetard": t('styles.optional_bulk_retard_to_improve_flavor')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        170,
        190
      ],
      "notes": t('styles.bake_to_golden_color_without_overdrying')
    },
    "difficulty": t('styles.hard_5'),
    "recommendedUse": [
      t('common.soft_sandwich_bread'),
      t('common.toast'),
      t('common.breakfast_bread')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.soft_sandwich_bread'),
    t('common.toast'),
    t('common.breakfast_bread'),
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
      "title": t('styles.modernist_bread_9'),
      "url": ""
    },
    {
      "title": t('styles.asian_bakery_literature'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};