import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const arepa_corn_flatbread: StyleDefinition = {
  "id": "arepa_corn_flatbread",
  "title": "Arepa (Corn Flatbread)",
  "subtitle": t('styles.classic_flatbreads'),
  "category": t('styles.bread'),
  "family": t('styles.classic_flatbreads_2'),
  "variantName": "Arepa (Corn Flatbread)",
  "origin": {
    "country": "Venezuela/Colombia",
    "region": t('styles.northern_south_america'),
    "period": t('styles.traditional')
  },
  "intro": "Griddled, baked or fried, then split and filled with a wide range of savory fillings.",
  "history": "Arepas are corn-based flatbreads made from precooked corn flour, central to Venezuelan and Colombian cuisines.",
  "technicalFoundations": [
    "None; relies on precooked corn flour hydration.",
    "Hydration: 60-75%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      60,
      75
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      0,
      10
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": "Precooked corn flour (masa arepa), not wheat flour",
    "fermentation": {
      "bulk": t('styles.short_rest_after_mixing_to_hydrate_flour'),
      "proof": t('styles.no_fermentation_in_traditional_formulas'),
      "coldRetard": t('styles.optional_rest_in_fridge_for_planning')
    },
    "oven": {
      "type": "griddle_or_pan",
      "temperatureC": [
        160,
        220
      ],
      "notes": t('styles.cooked_on_griddle_and_sometimes_finished_in_oven')
    },
    "difficulty": t('styles.hard_3'),
    "recommendedUse": [
      t('common.filled_arepas'),
      t('common.savory_stuffed_flatbreads')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.filled_arepas'),
    t('common.savory_stuffed_flatbreads'),
    t('common.bread'),
    "Venezuela/Colombia"
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
      "title": t('styles.latin_american_food_literature'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};