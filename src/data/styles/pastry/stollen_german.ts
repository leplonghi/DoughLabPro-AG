import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const stollen_german: StyleDefinition = {
  "id": "stollen_german",
  "title": t('styles.german_stollen'),
  "subtitle": t('styles.festive_breads_5'),
  "category": t('styles.pastry_10'),
  "family": t('styles.festive_breads_6'),
  "variantName": t('styles.german_stollen_2'),
  "origin": {
    "country": t('styles.germany_4'),
    "region": t('styles.dresden_and_others'),
    "period": t('styles.traditional_15')
  },
  "intro": t('styles.associated_with_christmas_markets_and_holiday_cele'),
  "history": "Stollen is a rich German Christmas bread with dried fruits, nuts and often marzipan, coated in butter and sugar.",
  "technicalFoundations": [
    "Can use sponge or direct dough with long maturation.",
    "Hydration: 55-65%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      55,
      65
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      15,
      30
    ],
    "sugarRange": [
      15,
      30
    ],
    "flourStrength": t('styles.bread_or_strong_allpurpose_flour_4'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "60–90 min after shaping",
      "coldRetard": t('styles.resting_after_baking_improves_flavor_storage_is_pa')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        170,
        190
      ],
      "notes": t('styles.heavily_buttered_and_sugared_after_baking_improves')
    },
    "difficulty": t('styles.medium_30'),
    "recommendedUse": [
      t('common.christmas_bread'),
      t('common.festive_sweet_loaf')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.christmas_bread'),
    t('common.festive_sweet_loaf'),
    t('common.pastry'),
    t('common.germany')
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
      "title": t('styles.modernist_bread_31'),
      "url": ""
    },
    {
      "title": t('styles.german_baking_traditions'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
