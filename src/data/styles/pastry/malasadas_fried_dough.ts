import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const malasadas_fried_dough: StyleDefinition = {
  "id": "malasadas_fried_dough",
  "title": t('styles.malasadas'),
  "subtitle": t('styles.fried_doughs_3'),
  "category": t('styles.pastry_6'),
  "family": t('styles.fried_doughs_4'),
  "variantName": t('styles.malasadas_2'),
  "origin": {
    "country": "Portugal / Hawaii",
    "region": t('styles.portuguese_diaspora'),
    "period": "Traditional/Modern"
  },
  "intro": t('styles.served_as_sweet_treats_especially_around_certain_h'),
  "history": "Malasadas are Portuguese-origin fried doughnuts without holes, popularized in Hawaii and Portuguese communities.",
  "technicalFoundations": [
    "Often straight enriched dough; some use sponge.",
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
    "flourStrength": t('styles.bread_or_strong_allpurpose_flour_3'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "30–60 min after shaping",
      "coldRetard": t('styles.optional_for_scheduling')
    },
    "oven": {
      "type": "fryer",
      "temperatureC": [
        170,
        180
      ],
      "notes": t('styles.traditionally_coated_in_sugar_after_frying')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.fried_sweet_doughnuts'),
      t('common.festive_treats')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.fried_sweet_doughnuts'),
    t('common.festive_treats'),
    t('common.pastry'),
    "Portugal / Hawaii"
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
      "title": t('styles.regional_baking_literature'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_27'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
