import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const heirloom_levain_loaf: StyleDefinition = {
  "id": "heirloom_levain_loaf",
  "title": t('styles.heirloom_grain_levain_loaf'),
  "subtitle": t('styles.levain__country_sourdough'),
  "category": t('styles.bread_7'),
  "family": t('styles.levain__country_sourdough_2'),
  "variantName": t('styles.heirloom_grain_levain_loaf_2'),
  "origin": {
    "country": t('styles.global'),
    "region": t('styles.local_grain_movements'),
    "period": "21st century"
  },
  "intro": "Produced by small mills, micro-bakeries and advanced home bakers focusing on grain diversity.",
  "history": "Heirloom grain levain loaves use regionally milled, often ancient or heritage grains to express local terroir in bread.",
  "technicalFoundations": [
    "Levain 20–30%, often adjusted to grain mix.",
    "Hydration: 75-85%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      75,
      85
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      3
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": t('styles.varies_with_grain_blend_typically_medium_to_strong'),
    "fermentation": {
      "bulk": "3–5 h at 24–26°C with careful observation",
      "proof": "1–3 h or overnight retard",
      "coldRetard": t('styles.common_for_flexibility_and_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.baker_must_adapt_to_specific_grain_absorption_and_')
    },
    "difficulty": t('styles.expert_5'),
    "recommendedUse": [
      t('common.artisan_bread_expressing_local_grains')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.artisan_bread_expressing_local_grains'),
    t('common.bread'),
    t('common.global')
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
      "title": t('styles.modernist_bread_6'),
      "url": ""
    },
    {
      "title": t('styles.contemporary_grainfocused_baking_literature'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
