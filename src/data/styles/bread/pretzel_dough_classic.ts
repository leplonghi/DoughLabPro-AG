import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const pretzel_dough_classic: StyleDefinition = {
  "id": "pretzel_dough_classic",
  "title": "Pretzel Dough (Boiled-Alkaline)",
  "subtitle": t('styles.specialty_breads_3'),
  "category": t('styles.bread_23'),
  "family": t('styles.specialty_breads_4'),
  "variantName": "Pretzel Dough (Boiled-Alkaline)",
  "origin": {
    "country": t('styles.germany'),
    "region": t('styles.bavaria_and_others'),
    "period": t('styles.traditional_9')
  },
  "intro": "Eaten as snacks, with beer, or as street food across German-speaking regions and beyond.",
  "history": "Pretzels are shaped breads boiled briefly in alkaline solution before baking, giving a characteristic color and flavor.",
  "technicalFoundations": [
    "Often straight dough; some use preferments.",
    "Hydration: 55-62%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      55,
      62
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      5
    ],
    "sugarRange": [
      0,
      5
    ],
    "flourStrength": t('styles.bread_flour_or_mediumstrength_wheat_flour'),
    "fermentation": {
      "bulk": "1–2 h at room temperature",
      "proof": t('styles.short_proof_before_or_after_lye_bath_depending_on_'),
      "coldRetard": t('styles.frequently_retarded_for_flavor_and_handling')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        220,
        240
      ],
      "notes": "Dipped in alkaline solution (traditionally lye) before baking."
    },
    "difficulty": t('styles.medium_12'),
    "recommendedUse": [
      t('common.traditional_pretzels'),
      t('common.pretzel_rolls_and_sticks')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.traditional_pretzels'),
    t('common.pretzel_rolls_and_sticks'),
    t('common.bread'),
    t('common.germany')
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
      "title": t('styles.german_baking_literature'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_18'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
