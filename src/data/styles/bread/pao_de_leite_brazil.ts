import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pao_de_leite_brazil: StyleDefinition = {
  "id": "pao_de_leite_brazil",
  "title": "Pão de Leite / Pão Doce Brasileiro",
  "subtitle": t('styles.brazilian_professional_breads'),
  "category": t('styles.bread_19'),
  "family": t('styles.brazilian_professional_breads_2'),
  "variantName": "Pão de Leite / Pão Doce Brasileiro",
  "origin": {
    "country": t('styles.brazil'),
    "region": t('styles.nationwide_3'),
    "period": "20th century"
  },
  "intro": "Common in bakeries as rolls and loaves for breakfast, snacks and simple sandwiches.",
  "history": "Brazilian sweet or milk bread is a soft, slightly sweet enriched dough used for rolls and loaves with a tender crumb.",
  "technicalFoundations": [
    "Most often straight dough; sponge methods possible.",
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
      8,
      20
    ],
    "flourStrength": t('styles.brazilian_bread_flour_or_strong_allpurpose'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–90 min after shaping",
      "coldRetard": t('styles.optional_bulk_or_shaped_retard')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        175,
        195
      ],
      "notes": t('styles.often_finished_with_egg_wash_or_sugar_toppings')
    },
    "difficulty": t('styles.hard_13'),
    "recommendedUse": [
      t('common.sweet_rolls'),
      t('common.milk_bread_loaves'),
      t('common.snack_sandwiches')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.sweet_rolls'),
    t('common.milk_bread_loaves'),
    t('common.snack_sandwiches'),
    t('common.bread'),
    t('common.brazil')
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
      "title": t('styles.senai_panificação'),
      "url": ""
    },
    {
      "title": t('styles.brazilian_bakery_practice'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};