import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pain_rustique: StyleDefinition = {
  "id": "pain_rustique",
  "title": t('styles.pain_rustique'),
  "subtitle": t('styles.french_lean_breads_5'),
  "category": t('styles.bread_17'),
  "family": t('styles.french_lean_breads_6'),
  "variantName": t('styles.pain_rustique_2'),
  "origin": {
    "country": t('styles.france_3'),
    "region": t('styles.artisan_bakeries'),
    "period": t('styles.modern_artisanal')
  },
  "intro": "Used in artisan bakeries as a rustic, irregular bread ideal for sharing and slicing.",
  "history": "Pain rustique is a very open-crumb, lean French-inspired bread, often made with high hydration and gentle handling.",
  "technicalFoundations": [
    "Often poolish or liquid levain, 30–50%.",
    "Hydration: 72-78%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      72,
      78
    ],
    "saltRange": [
      1.8,
      2.1
    ],
    "oilRange": [
      0,
      0.5
    ],
    "sugarRange": [
      0,
      0.5
    ],
    "flourStrength": t('styles.bread_flour_or_strong_t65equivalent_w_260'),
    "fermentation": {
      "bulk": "3–4 h at 23–25°C with gentle folds",
      "proof": "30–60 min at 23–25°C",
      "coldRetard": t('styles.optional_overnight_for_extra_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        235,
        250
      ],
      "notes": t('styles.requires_good_steaming_and_gentle_shaping_to_prese')
    },
    "difficulty": t('styles.hard_11'),
    "recommendedUse": [
      t('common.rustic_loaves'),
      t('common.table_bread'),
      t('common.soup_accompaniment')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.rustic_loaves'),
    t('common.table_bread'),
    t('common.soup_accompaniment'),
    t('common.bread'),
    t('common.france')
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
      "title": t('styles.bread__jeffrey_hamelman_4'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_15'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};