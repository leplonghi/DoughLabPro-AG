import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const lefse_flatbread: StyleDefinition = {
  "id": "lefse_flatbread",
  "title": "Lefse (Potato Flatbread)",
  "subtitle": t('styles.classic_flatbreads_5'),
  "category": t('styles.bread_12'),
  "family": t('styles.classic_flatbreads_6'),
  "variantName": "Lefse (Potato Flatbread)",
  "origin": {
    "country": t('styles.norway'),
    "region": t('styles.scandinavia'),
    "period": t('styles.traditional_4')
  },
  "intro": "Served with butter, sugar or savory fillings, especially in Scandinavian traditions.",
  "history": "Lefse is a thin, potato-based flatbread from Norway, rolled very thin and cooked on a griddle.",
  "technicalFoundations": [
    "None; relies on cooked potato mash and flour.",
    "Hydration: 50-70%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      50,
      70
    ],
    "saltRange": [
      1,
      2
    ],
    "oilRange": [
      5,
      15
    ],
    "sugarRange": [
      0,
      5
    ],
    "flourStrength": t('styles.allpurpose_flour_with_mashed_potatoes'),
    "fermentation": {
      "bulk": t('styles.resting_of_dough_before_rolling'),
      "proof": t('styles.no_yeast_fermentation_in_typical_formulas'),
      "coldRetard": t('styles.dough_may_be_chilled_for_rolling_convenience')
    },
    "oven": {
      "type": "griddle",
      "temperatureC": [
        180,
        220
      ],
      "notes": t('styles.cooked_quickly_on_hot_griddles_turned_once')
    },
    "difficulty": t('styles.hard_7'),
    "recommendedUse": [
      t('common.traditional_scandinavian_flatbread'),
      t('common.sweet_or_savory_wraps')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.traditional_scandinavian_flatbread'),
    t('common.sweet_or_savory_wraps'),
    t('common.bread'),
    t('common.norway')
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
      "title": t('styles.scandinavian_baking_literature'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_11'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
