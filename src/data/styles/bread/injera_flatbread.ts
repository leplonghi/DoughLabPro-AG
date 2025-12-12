import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const injera_flatbread: StyleDefinition = {
  "id": "injera_flatbread",
  "title": "Injera (Teff Sourdough Flatbread)",
  "subtitle": t('styles.classic_flatbreads_3'),
  "category": t('styles.bread_9'),
  "family": t('styles.classic_flatbreads_4'),
  "variantName": "Injera (Teff Sourdough Flatbread)",
  "origin": {
    "country": "Ethiopia/Eritrea",
    "region": t('styles.horn_of_africa'),
    "period": t('styles.traditional_3')
  },
  "intro": t('styles.used_as_the_base_for_stews_and_dishes_torn_by_hand'),
  "history": "Injera is a naturally fermented, spongy flatbread made primarily from teff flour, serving as both plate and utensil in Ethiopian cuisine.",
  "technicalFoundations": [
    "Natural fermentation over several days with teff-based batter.",
    "Hydration: 100-120%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      100,
      120
    ],
    "saltRange": [
      0,
      1.5
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": t('styles.teff_flour_with_possible_blends'),
    "fermentation": {
      "bulk": t('styles.multiday_batter_fermentation_at_ambient_temperatur'),
      "proof": t('styles.short_rest_before_ladling_onto_hot_surface'),
      "coldRetard": t('styles.ambient_fermentation_is_traditional')
    },
    "oven": {
      "type": "griddle",
      "temperatureC": [
        180,
        220
      ],
      "notes": "Cooked on a large hot plate (mitad), no flipping."
    },
    "difficulty": t('styles.expert_6'),
    "recommendedUse": [
      "Base for Ethiopian/Eritrean meals"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    "Base for Ethiopian/Eritrean meals",
    t('common.bread'),
    "Ethiopia/Eritrea"
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
      "title": t('styles.ethiopian_food_literature'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_8'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
