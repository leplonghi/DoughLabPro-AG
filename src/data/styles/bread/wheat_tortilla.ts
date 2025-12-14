import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const wheat_tortilla: StyleDefinition = {
  "id": "wheat_tortilla",
  "title": t('styles.wheat_flour_tortilla'),
  "subtitle": t('styles.classic_flatbreads_11'),
  "category": t('styles.bread_27'),
  "family": t('styles.classic_flatbreads_12'),
  "variantName": t('styles.wheat_flour_tortilla_2'),
  "origin": {
    "country": t('styles.mexico'),
    "region": t('styles.northern_mexico_and_southwest_us'),
    "period": "Traditional/Modern"
  },
  "intro": t('styles.used_for_tacos_burritos_quesadillas_and_many_stree'),
  "history": "Wheat tortillas are unleavened or lightly leavened flatbreads used as carriers for fillings in Mexican and Tex-Mex cuisines.",
  "technicalFoundations": [
    "Typically no preferment; chemical leaveners sometimes used.",
    "Hydration: 50-60%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      50,
      60
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      5,
      15
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_soft_wheat_flour'),
    "fermentation": {
      "bulk": "Short rest after mixing (20–30 min)",
      "proof": t('styles.no_traditional_yeast_proofing_steps'),
      "coldRetard": t('styles.optional_dough_rest_in_fridge')
    },
    "oven": {
      "type": "griddle_or_pan",
      "temperatureC": [
        180,
        250
      ],
      "notes": t('styles.cooked_quickly_on_hot_comal_or_skillet')
    },
    "difficulty": t('styles.medium_13'),
    "recommendedUse": [
      "Tortillas for tacos, wraps, quesadillas"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    "Tortillas for tacos, wraps, quesadillas",
    t('common.bread'),
    t('common.mexico')
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
      "title": t('styles.mexican_flatbread_literature'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_20'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};