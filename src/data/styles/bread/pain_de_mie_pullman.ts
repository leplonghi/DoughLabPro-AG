import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const pain_de_mie_pullman: StyleDefinition = {
  "id": "pain_de_mie_pullman",
  "title": "Pain de Mie / Pullman Loaf",
  "subtitle": t('styles.sandwich__enriched_breads_7'),
  "category": t('styles.bread_16'),
  "family": t('styles.sandwich__enriched_breads_8'),
  "variantName": "Pain de Mie / Pullman Loaf",
  "origin": {
    "country": "France/USA",
    "region": t('styles.bakery_and_industrial'),
    "period": "20th century"
  },
  "intro": "Used for sandwiches, toast and canapés where a uniform crumb and shape are desired.",
  "history": "Pain de mie or Pullman loaf is a soft, fine-crumb sandwich bread baked in lidded pans for a square profile.",
  "technicalFoundations": [
    "Often straight dough; can include sponge or poolish.",
    "Hydration: 60-70%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      60,
      70
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
      5,
      15
    ],
    "flourStrength": t('styles.bread_or_strong_allpurpose_flour'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "60–90 min in lidded pans",
      "coldRetard": t('styles.optional_overnight_bulk')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.lidded_pans_create_tight_square_crumb_structure')
    },
    "difficulty": t('styles.hard_10'),
    "recommendedUse": [
      t('common.sandwich_bread'),
      t('common.toast'),
      "Canapés"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.sandwich_bread'),
    t('common.toast'),
    "Canapés",
    t('common.bread'),
    "France/USA"
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
      "title": t('styles.modernist_bread_14'),
      "url": ""
    },
    {
      "title": t('styles.professional_baking_texts'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
