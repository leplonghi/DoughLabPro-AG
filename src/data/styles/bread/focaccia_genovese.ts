import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const focaccia_genovese: StyleDefinition = {
  "id": "focaccia_genovese",
  "title": t('styles.focaccia_genovese'),
  "subtitle": t('styles.italian_rustic__high_hydration_3'),
  "category": t('styles.bread_6'),
  "family": t('styles.italian_rustic__high_hydration_4'),
  "variantName": t('styles.focaccia_genovese_2'),
  "origin": {
    "country": t('styles.italy_3'),
    "region": "Liguria (Genoa)",
    "period": t('styles.traditional_2')
  },
  "intro": "Eaten plain or with simple toppings, often as a snack or accompaniment to meals and drinks.",
  "history": "Focaccia genovese is a traditional Ligurian flatbread with high hydration, generous olive oil and characteristic dimpling.",
  "technicalFoundations": [
    "Direct dough or mild preferment; long fermentation improves flavor.",
    "Hydration: 70-80%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      70,
      80
    ],
    "saltRange": [
      2.5,
      3
    ],
    "oilRange": [
      5,
      10
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour_medium_strength'),
    "fermentation": {
      "bulk": "2–4 h at 23–25°C, possibly including cold retard",
      "proof": "30–90 min in pan after dimpling and brine application",
      "coldRetard": t('styles.often_824_h_for_depth_of_flavor')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        220,
        250
      ],
      "notes": t('styles.baked_in_oiled_sheet_pans_for_crisp_bottom_and_ten')
    },
    "difficulty": t('styles.expert_4'),
    "recommendedUse": [
      t('common.flatbread_snack'),
      t('common.table_bread'),
      t('common.sandwich_base')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.flatbread_snack'),
    t('common.table_bread'),
    t('common.sandwich_base'),
    t('common.bread'),
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
      "title": t('styles.modernist_bread_5'),
      "url": ""
    },
    {
      "title": t('styles.italian_focaccia_traditions'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
