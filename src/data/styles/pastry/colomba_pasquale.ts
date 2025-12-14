import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const colomba_pasquale: StyleDefinition = {
  "id": "colomba_pasquale",
  "title": t('styles.colomba_pasquale'),
  "subtitle": t('styles.festive_breads'),
  "category": t('styles.pastry_4'),
  "family": t('styles.festive_breads_2'),
  "variantName": t('styles.colomba_pasquale_2'),
  "origin": {
    "country": t('styles.italy_7'),
    "region": t('styles.northern_italy_2'),
    "period": "20th century"
  },
  "intro": t('styles.consumed_mainly_at_easter_in_italy_and_in_italian_'),
  "history": "Colomba is an Easter festive bread similar to panettone but shaped like a dove and topped with almond glaze and sugar.",
  "technicalFoundations": [
    "Similar multi-stage sourdough or hybrid method as panettone.",
    "Hydration: 65-75%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      65,
      75
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      20,
      30
    ],
    "sugarRange": [
      20,
      30
    ],
    "flourStrength": t('styles.very_strong_flour_suitable_for_rich_doughs'),
    "fermentation": {
      "bulk": t('styles.long_multistage_builds_and_first_dough_rise'),
      "proof": "4–8 h at warm temperature in dove-shaped molds",
      "coldRetard": t('styles.handled_similarly_to_panettone_with_careful_temper')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        170,
        190
      ],
      "notes": t('styles.topped_with_almond_glaze_and_sugar_before_baking')
    },
    "difficulty": t('styles.hard_17'),
    "recommendedUse": [
      t('common.festive_sweet_bread_for_easter')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.festive_sweet_bread_for_easter'),
    t('common.pastry'),
    t('common.italy')
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
      "title": t('styles.modernist_bread_25'),
      "url": ""
    },
    {
      "title": t('styles.italian_festive_bread_traditions'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};