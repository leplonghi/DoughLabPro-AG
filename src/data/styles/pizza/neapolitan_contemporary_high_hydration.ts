import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const neapolitan_contemporary_high_hydration: StyleDefinition = {
  "id": "neapolitan_contemporary_high_hydration",
  "title": "Neapolitan Contemporary (Canotto)",
  "subtitle": t('styles.neapolitan_pizza_3'),
  "category": t('styles.pizza_6'),
  "family": t('styles.neapolitan_pizza_4'),
  "variantName": "Neapolitan Contemporary (Canotto)",
  "origin": {
    "country": t('styles.italy_10'),
    "region": "Caserta / Naples",
    "period": "2010s–Present"
  },
  "intro": "Represents the 'New Wave' of Italian pizza. It focuses on extreme digestibility, visual impact (Instagrammable structure), and gourmet toppings. It challenges the strict AVPN rules while respecting the roots.",
  "history": "A modern evolution often called 'Pizza Canotto' (dinghy) due to its large, airy rim. Pioneers like Carlo Sammarco and Franco Pepe pushed hydration limits to create a lighter, more alveolated structure than the traditional style, often using preferments (Biga/Poolish) or autolyse.",
  "technicalFoundations": [
    "Very common: 100% Biga, Poolish, or Autolyse methods.",
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
      2.5,
      3
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      0
    ],
    "flourStrength": "High strength (W 300–350), P/L 0.55–0.65, high protein",
    "fermentation": {
      "bulk": t('styles.variable_often_2448h_cold_fermentation_is_standard'),
      "proof": "2–4h at room temp before baking",
      "coldRetard": "Almost always used (24–72h)"
    },
    "oven": {
      "type": "wood_fired",
      "temperatureC": [
        400,
        450
      ],
      "notes": "Slightly lower temp than AVPN to allow the larger water content to evaporate and structure to set."
    },
    "difficulty": t('styles.hard_22'),
    "recommendedUse": [
      t('common.gourmet_toppings'),
      "Instagram-style puffy crusts"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.gourmet_toppings'),
    "Instagram-style puffy crusts",
    t('common.pizza'),
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
      "title": t('styles.modernist_pizza_5'),
      "url": ""
    },
    {
      "title": t('styles.pizza_research_institute'),
      "url": ""
    },
    {
      "title": t('styles.luciano_pignataro'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};