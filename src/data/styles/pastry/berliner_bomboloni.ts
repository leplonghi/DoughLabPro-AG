import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const berliner_bomboloni: StyleDefinition = {
  "id": "berliner_bomboloni",
  "title": "Berliner / Bomboloni (Filled Donuts)",
  "subtitle": t('styles.fried_doughs'),
  "category": t('styles.pastry_2'),
  "family": t('styles.fried_doughs_2'),
  "variantName": "Berliner / Bomboloni (Filled Donuts)",
  "origin": {
    "country": "Germany/Italy",
    "region": t('styles.europewide'),
    "period": t('styles.traditional_14')
  },
  "intro": "Sold in bakeries and cafes as filled pastries, often associated with festivals and holidays.",
  "history": "Berliner and bomboloni are yeast-raised, fried doughnuts without central holes, typically filled with jams or creams.",
  "technicalFoundations": [
    "Usually straight dough or sponge-based enriched dough.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      60,
      65
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      10,
      20
    ],
    "sugarRange": [
      10,
      20
    ],
    "flourStrength": t('styles.bread_or_strong_pastry_flour'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "30–60 min after shaping, until light",
      "coldRetard": t('styles.sometimes_retarded_overnight')
    },
    "oven": {
      "type": "fryer",
      "temperatureC": [
        170,
        180
      ],
      "notes": t('styles.fried_cooled_then_injected_with_fillings_and_duste')
    },
    "difficulty": t('styles.medium_25'),
    "recommendedUse": [
      t('common.filled_donuts'),
      t('common.sweet_fried_pastries')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.filled_donuts'),
    t('common.sweet_fried_pastries'),
    t('common.pastry'),
    "Germany/Italy"
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
      "title": t('styles.european_baking_literature'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_23'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};
