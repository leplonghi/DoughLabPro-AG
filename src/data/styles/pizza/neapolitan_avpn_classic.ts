import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const neapolitan_avpn_classic: StyleDefinition = {
  "id": "neapolitan_avpn_classic",
  "title": t('styles.neapolitan_avpn_classic'),
  "subtitle": t('styles.neapolitan_pizza'),
  "category": t('styles.pizza_5'),
  "family": t('styles.neapolitan_pizza_2'),
  "variantName": t('styles.neapolitan_avpn_classic_2'),
  "origin": {
    "country": t('styles.italy_9'),
    "region": t('styles.naples'),
    "period": "18th–19th century (Codified 1984)"
  },
  "intro": "A UNESCO Intangible Cultural Heritage item. It is not just food but a social ritual in Naples. Traditionally eaten with a knife and fork or folded 'a libretto' (like a booklet) as street food. It is soft, wet, and digestible, never crispy.",
  "history": "The 'Verace Pizza Napoletana' is the protected ancestor of modern pizza. While flatbreads existed for millennia, the tomato-topped pizza emerged in 18th-century Naples. The legend of the Margherita (1889) honors Queen Margherita of Savoy, but the style predates her. In 1984, the Associazione Verace Pizza Napoletana (AVPN) codified the rules to protect the tradition against industrialization.",
  "technicalFoundations": [
    "Direct dough (impasto diretto) is the standard. Sourdough (Criskito) is allowed but rare in strict tradition.",
    "Hydration: 58-62.5%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      58,
      62.5
    ],
    "saltRange": [
      2.5,
      3
    ],
    "oilRange": [
      0,
      0
    ],
    "sugarRange": [
      0,
      0
    ],
    "flourStrength": "Medium-High strength (W 280–320), P/L 0.50–0.60, protein 11.5–12.5%",
    "fermentation": {
      "bulk": "2h bulk at room temp, then balling",
      "proof": "6–24h total maturation at room temp (18–25°C)",
      "coldRetard": t('styles.traditionally_not_used_modern_avpn_rules_allow_it')
    },
    "oven": {
      "type": "wood_fired",
      "temperatureC": [
        430,
        485
      ],
      "notes": t('styles.dome_temp_485c_floor_430c_cook_time_strictly_6090_')
    },
    "difficulty": t('styles.medium_35'),
    "recommendedUse": [
      t('common.authentic_neapolitan_margherita'),
      t('common.marinara')
    ]
  },
  "defaults": {
    "hydration": 60,
    "salt": 2.8,
    "oil": 0,
    "sugar": 0
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.authentic_neapolitan_margherita'),
    t('common.marinara'),
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
      "title": t('styles.avpn_international_regulations'),
      "url": ""
    },
    {
      "title": t('styles.modernist_pizza_4'),
      "url": ""
    },
    {
      "title": t('styles.unesco_intangible_cultural_heritage'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};