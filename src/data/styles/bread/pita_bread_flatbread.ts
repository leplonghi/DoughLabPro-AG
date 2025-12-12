import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const pita_bread_flatbread: StyleDefinition = {
  "id": "pita_bread_flatbread",
  "title": t('styles.pita_bread'),
  "subtitle": t('styles.classic_flatbreads_9'),
  "category": t('styles.bread_22'),
  "family": t('styles.classic_flatbreads_10'),
  "variantName": t('styles.pita_bread_2'),
  "origin": {
    "country": t('styles.middle_east'),
    "region": t('styles.levant_and_mediterranean'),
    "period": "Ancient/Traditional"
  },
  "intro": "Used for sandwiches, dips and wraps across Middle Eastern and Mediterranean cuisines.",
  "history": "Pita is a pocket flatbread baked at high heat to create a characteristic internal cavity.",
  "technicalFoundations": [
    "Often direct dough; sometimes sponge-based.",
    "Hydration: 60-68%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      60,
      68
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      5
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour_2'),
    "fermentation": {
      "bulk": "1–2 h at room temperature",
      "proof": t('styles.short_bench_rest_after_shaping'),
      "coldRetard": t('styles.optional_overnight_bulk_2')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        260,
        320
      ],
      "notes": t('styles.very_hot_stone_or_deck_encourages_pocket_formation')
    },
    "difficulty": t('styles.medium_11'),
    "recommendedUse": [
      t('common.pocket_flatbread'),
      t('common.wraps_and_sandwiches')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.pocket_flatbread'),
    t('common.wraps_and_sandwiches'),
    t('common.bread'),
    t('common.middle_east')
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
      "title": t('styles.flatbread_and_middle_eastern_baking_literature'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_17'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
