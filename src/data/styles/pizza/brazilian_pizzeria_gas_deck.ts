import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const brazilian_pizzeria_gas_deck: StyleDefinition = {
  "id": "brazilian_pizzeria_gas_deck",
  "title": t('styles.brazilian_pizzeria_title'),
  "subtitle": t('styles.brazilian_pizzeria'),
  "category": t('styles.pizza'),
  "family": t('styles.brazilian_pizzeria_2'),
  "variantName": t('styles.brazilian_pizzeria_title'),
  "origin": {
    "country": t('styles.brazil_4'),
    "region": t('styles.urban_pizzerias'),
    "period": t('styles.late_20th_century_2')
  },
  "intro": t('styles.brazilian_pizzeria_intro'),
  "history": t('styles.brazilian_history'),
  "culturalContext": {
    "significance": [
      t('styles.brazilian_sig_1'),
      t('styles.brazilian_sig_2'),
      t('styles.brazilian_sig_3'),
      t('styles.brazilian_sig_4'),
      t('styles.brazilian_sig_5')
    ],
    "consumptionContext": [
      t('styles.brazilian_consum_1'),
      t('styles.brazilian_consum_2'),
      t('styles.brazilian_consum_3'),
      t('styles.brazilian_consum_4'),
      t('styles.brazilian_consum_5')
    ],
    "evolution": [
      t('styles.brazilian_evo_1'),
      t('styles.brazilian_evo_2'),
      t('styles.brazilian_evo_3'),
      t('styles.brazilian_evo_4'),
      t('styles.brazilian_evo_5'),
      t('styles.brazilian_evo_6')
    ],
    "rituals": [
      t('styles.brazilian_rituals_1'),
      t('styles.brazilian_rituals_2'),
      t('styles.brazilian_rituals_3'),
      t('styles.brazilian_rituals_4'),
      t('styles.brazilian_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.brazilian_flavor_1'),
      t('styles.brazilian_flavor_2'),
      t('styles.brazilian_flavor_3'),
      t('styles.brazilian_flavor_4'),
      t('styles.brazilian_flavor_5')
    ],
    "aromaProfile": [
      t('styles.brazilian_aroma_1'),
      t('styles.brazilian_aroma_2'),
      t('styles.brazilian_aroma_3'),
      t('styles.brazilian_aroma_4'),
      t('styles.brazilian_aroma_5')
    ],
    "textureNotes": [
      t('styles.brazilian_texture_1'),
      t('styles.brazilian_texture_2'),
      t('styles.brazilian_texture_3'),
      t('styles.brazilian_texture_4'),
      t('styles.brazilian_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.brazilian_pair_1'),
      t('styles.brazilian_pair_2'),
      t('styles.brazilian_pair_3'),
      t('styles.brazilian_pair_4'),
      t('styles.brazilian_pair_5')
    ],
    "flavorEvolution": [
      t('styles.brazilian_fe_1'),
      t('styles.brazilian_fe_2'),
      t('styles.brazilian_fe_3'),
      t('styles.brazilian_fe_4'),
      t('styles.brazilian_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.brazilian_pizzeria_tech_1'),
    t('styles.brazilian_pizzeria_tech_2')
  ],
  "doughImpact": [
    t('styles.brazilian_dough_impact_1'),
    t('styles.brazilian_dough_impact_2'),
    t('styles.brazilian_dough_impact_3'),
    t('styles.brazilian_dough_impact_4'),
    t('styles.brazilian_dough_impact_5')
  ],
  "bakingImpact": [
    t('styles.brazilian_baking_impact_1'),
    t('styles.brazilian_baking_impact_2'),
    t('styles.brazilian_baking_impact_3'),
    t('styles.brazilian_baking_impact_4'),
    t('styles.brazilian_baking_impact_5')
  ],
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
      2,
      4
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.brazilian_pizzeria_flour'),
    "fermentation": {
      "bulk": t('styles.brazilian_pizzeria_ferm_bulk'),
      "proof": t('styles.brazilian_pizzeria_ferm_proof'),
      "coldRetard": t('styles.optional_up_to_24_h_for_flavor')
    },
    "oven": {
      "type": "gas_deck",
      "temperatureC": [
        280,
        320
      ],
      "notes": t('styles.designed_for_repeated_baking_cycles_in_commercial_')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('styles.brazilian_pizzeria_use_1'),
      t('styles.brazilian_pizzeria_use_2')
    ]
  },
  "regionalVariants": [
    t('styles.brazilian_rv_1'),
    t('styles.brazilian_rv_2'),
    t('styles.brazilian_rv_3'),
    t('styles.brazilian_rv_4'),
    t('styles.brazilian_rv_5')
  ],
  "climateScenarios": [
    t('styles.brazilian_cs_1'),
    t('styles.brazilian_cs_2'),
    t('styles.brazilian_cs_3'),
    t('styles.brazilian_cs_4')
  ],
  "styleComparisons": [
    t('styles.brazilian_sc_1'),
    t('styles.brazilian_sc_2'),
    t('styles.brazilian_sc_3'),
    t('styles.brazilian_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.brazilian_ps_1'),
    t('styles.brazilian_ps_2'),
    t('styles.brazilian_ps_3'),
    t('styles.brazilian_ps_4'),
    t('styles.brazilian_ps_5')
  ],
  "risks": [
    t('styles.brazilian_risks_1'),
    t('styles.brazilian_risks_2'),
    t('styles.brazilian_risks_3'),
    t('styles.brazilian_risks_4'),
    t('styles.brazilian_risks_5')
  ],
  "notes": [
    t('styles.brazilian_notes_1'),
    t('styles.brazilian_notes_2'),
    t('styles.brazilian_notes_3'),
    t('styles.brazilian_notes_4'),
    t('styles.brazilian_notes_5')
  ],
  "tags": [
    t('styles.brazilian_pizzeria_use_1'),
    t('styles.brazilian_pizzeria_use_2'),
    t('common.pizza'),
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
      "title": "A Cozinha Paulista",
      "url": "https://www.estantevirtual.com.br/livros/ari-valter-do-carmo/a-cozinha-paulista/135965410",
      "author": "Ari Valter do Carmo",
      "year": 2004
    },
    {
      "title": "Pizzas de São Paulo: Tradição e Regionalismo",
      "url": "https://revistas.sp.senac.br/index.php/itinerarium/article/view/15",
      "author": "Senac São Paulo",
      "year": 2018
    },
    {
      "title": "Guia de Pizzarias de São Paulo",
      "url": "https://www.terra.com.br/diversao/comer-e-beber/as-melhores-pizzarias-de-sao-paulo,4d31e977f6b8b310VgnVCM4000009bc1b40aRCRD.html",
      "author": "Terra Gastronomia",
      "year": 2022
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.brazilian_faq_1_q'),
      "answer": t('styles.brazilian_faq_1_a')
    },
    {
      "question": t('styles.brazilian_faq_2_q'),
      "answer": t('styles.brazilian_faq_2_a')
    },
    {
      "question": t('styles.brazilian_faq_3_q'),
      "answer": t('styles.brazilian_faq_3_a')
    },
    {
      "question": t('styles.brazilian_faq_4_q'),
      "answer": t('styles.brazilian_faq_4_a')
    },
    {
      "question": t('styles.brazilian_faq_5_q'),
      "answer": t('styles.brazilian_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
