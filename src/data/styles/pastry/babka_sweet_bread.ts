import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const babka_sweet_bread: StyleDefinition = {
  "id": "babka_sweet_bread",
  "title": "Babka (Chocolate or Cinnamon)",
  "subtitle": t('styles.enriched_sweet_doughs'),
  "category": t('styles.pastry'),
  "family": t('styles.enriched_sweet_doughs_2'),
  "variantName": "Babka (Chocolate or Cinnamon)",
  "origin": {
    "country": t('styles.eastern_europe_2'),
    "region": t('styles.jewish_baking_traditions'),
    "period": "19th–20th century"
  },
  "intro": "Popular in Jewish and artisan bakeries, often sliced as a rich dessert or sweet snack.",
  "history": "Babka is an enriched sweet bread rolled with fillings like chocolate or cinnamon and twisted into loaves.",
  "technicalFoundations": [
    "Usually straight dough; some formulas use preferments.",
    "Hydration: 60-68%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      60,
      68
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      20,
      35
    ],
    "sugarRange": [
      15,
      30
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose_flour_3'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "60–120 min in pans after shaping",
      "coldRetard": t('styles.common_overnight_retard_for_flavor_and_handling')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        175,
        190
      ],
      "notes": t('styles.bake_thoroughly_to_set_rich_crumb_without_burning_')
    },
    "difficulty": t('styles.medium_24'),
    "recommendedUse": [
      t('common.sweet_loaf'),
      t('common.dessert_bread')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.sweet_loaf'),
    t('common.dessert_bread'),
    t('common.pastry'),
    t('common.eastern_europe')
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
      "title": t('styles.modernist_bread_22'),
      "url": ""
    },
    {
      "title": t('styles.east_european_baking_traditions'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
