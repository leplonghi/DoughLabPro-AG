import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const panettone_artisanal: StyleDefinition = {
  "id": "panettone_artisanal",
  "title": t('styles.artisanal_panettone'),
  "subtitle": t('styles.festive_breads_3'),
  "category": t('styles.pastry_9'),
  "family": t('styles.festive_breads_4'),
  "variantName": t('styles.artisanal_panettone_2'),
  "origin": {
    "country": t('styles.italy_8'),
    "region": t('styles.northern_italy_3'),
    "period": "Traditional/Modern"
  },
  "intro": "Served around Christmas and festive seasons, now produced artisanal and industrially worldwide.",
  "history": "Panettone is a rich, long-fermented festive bread with candied fruits and raisins, requiring precise sourdough or hybrid processes.",
  "technicalFoundations": [
    "Multiple levain builds or stiff sourdough for structure and flavor.",
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
    "flourStrength": t('styles.very_strong_highprotein_flour_suitable_for_extreme'),
    "fermentation": {
      "bulk": t('styles.multiple_dough_stages_over_1224_h'),
      "proof": "4–8 h at ~28–30°C in molds",
      "coldRetard": t('styles.used_cautiously_temperature_control_is_crucial')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        170,
        190
      ],
      "notes": t('styles.loaves_are_often_cooled_upsidedown_to_prevent_coll')
    },
    "difficulty": t('styles.hard_19'),
    "recommendedUse": [
      t('common.festive_sweet_bread'),
      "High-skill project baking"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.festive_sweet_bread'),
    "High-skill project baking",
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
      "title": t('styles.modernist_bread_30'),
      "url": ""
    },
    {
      "title": t('styles.italian_panettone_master_bakers'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
