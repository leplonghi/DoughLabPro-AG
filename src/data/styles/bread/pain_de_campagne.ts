import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const pain_de_campagne: StyleDefinition = {
  "id": "pain_de_campagne",
  "title": "Pain de Campagne (Country French)",
  "subtitle": t('styles.french_lean_breads_3'),
  "category": t('styles.bread_15'),
  "family": t('styles.french_lean_breads_4'),
  "variantName": "Pain de Campagne (Country French)",
  "origin": {
    "country": t('styles.france_2'),
    "region": t('styles.rural_bakeries'),
    "period": t('styles.traditional_6')
  },
  "intro": "Served as a versatile table bread, used for slicing, toast and sandwiches with a robust flavor profile.",
  "history": "Pain de campagne is a rustic country loaf blending white, whole wheat and sometimes rye flours, often using a natural preferment.",
  "technicalFoundations": [
    "Levain or pâte fermentée, typically 20–40% of flour.",
    "Hydration: 68-75%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      68,
      75
    ],
    "saltRange": [
      1.8,
      2.1
    ],
    "oilRange": [
      0,
      0
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": t('styles.blend_of_bread_flour_with_1030_wholegrain_or_rye'),
    "fermentation": {
      "bulk": "2–4 h at 23–25°C, sometimes followed by cold retard",
      "proof": "45–90 min at 23–25°C",
      "coldRetard": t('styles.common_816_h_at_48c')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.works_well_in_dutch_ovens_or_steaminjected_decks')
    },
    "difficulty": t('styles.hard_9'),
    "recommendedUse": [
      t('common.country_loaves'),
      t('common.rustic_sandwiches'),
      t('common.toast')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.country_loaves'),
    t('common.rustic_sandwiches'),
    t('common.toast'),
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
      "title": t('styles.bread__jeffrey_hamelman_3'),
      "url": ""
    },
    {
      "title": t('styles.french_country_bread_literature'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
