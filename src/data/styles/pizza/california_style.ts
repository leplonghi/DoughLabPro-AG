import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const california_style: StyleDefinition = {
  "id": "california_style",
  "title": t('styles.california_style'),
  "subtitle": t('styles.american_artisan_pizza'),
  "category": t('styles.pizza_2'),
  "family": t('styles.american_artisan_pizza_2'),
  "variantName": t('styles.california_style_2'),
  "origin": {
    "country": t('styles.united_states_5'),
    "region": t('styles.california'),
    "period": t('styles.1980s_late_20th_century')
  },
  "intro": t('styles.california_intro'),
  "history": t('styles.california_history'),
  "culturalContext": {
    "significance": [
      t('styles.california_sig_1'),
      t('styles.california_sig_2'),
      t('styles.california_sig_3'),
      t('styles.california_sig_4'),
      t('styles.california_sig_5')
    ],
    "consumptionContext": [
      t('styles.california_consum_1'),
      t('styles.california_consum_2'),
      t('styles.california_consum_3'),
      t('styles.california_consum_4'),
      t('styles.california_consum_5')
    ],
    "evolution": [
      t('styles.california_evo_1'),
      t('styles.california_evo_2'),
      t('styles.california_evo_3'),
      t('styles.california_evo_4'),
      t('styles.california_evo_5'),
      t('styles.california_evo_6')
    ],
    "rituals": [
      t('styles.california_rituals_1'),
      t('styles.california_rituals_2'),
      t('styles.california_rituals_3'),
      t('styles.california_rituals_4'),
      t('styles.california_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.california_flavor_1'),
      t('styles.california_flavor_2'),
      t('styles.california_flavor_3'),
      t('styles.california_flavor_4'),
      t('styles.california_flavor_5')
    ],
    "aromaProfile": [
      t('styles.california_aroma_1'),
      t('styles.california_aroma_2'),
      t('styles.california_aroma_3'),
      t('styles.california_aroma_4'),
      t('styles.california_aroma_5')
    ],
    "textureNotes": [
      t('styles.california_texture_1'),
      t('styles.california_texture_2'),
      t('styles.california_texture_3'),
      t('styles.california_texture_4'),
      t('styles.california_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.california_pair_1'),
      t('styles.california_pair_2'),
      t('styles.california_pair_3'),
      t('styles.california_pair_4'),
      t('styles.california_pair_5')
    ],
    "flavorEvolution": [
      t('styles.california_fe_1'),
      t('styles.california_fe_2'),
      t('styles.california_fe_3'),
      t('styles.california_fe_4'),
      t('styles.california_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.california_tech_1'),
    t('styles.california_tech_2')
  ],
  "doughImpact": [
    t('styles.california_di_1'),
    t('styles.california_di_2'),
    t('styles.california_di_3'),
    t('styles.california_di_4'),
    t('styles.california_di_5')
  ],
  "bakingImpact": [
    t('styles.california_bi_1'),
    t('styles.california_bi_2'),
    t('styles.california_bi_3'),
    t('styles.california_bi_4'),
    t('styles.california_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      68
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      2,
      5
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour_3'),
    "fermentation": {
      "bulk": t('styles.california_fermentation_bulk'),
      "proof": t('styles.california_fermentation_proof'),
      "coldRetard": t('styles.common_for_flavor')
    },
    "oven": {
      "type": "wood_fired",
      "temperatureC": [
        300,
        400
      ],
      "notes": t('styles.woodfired_for_speed_and_flavor_but_lower_temp_than')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.gourmet_personal_pizzas'),
      t('common.creative_toppings')
    ]
  },
  "regionalVariants": [
    t('styles.california_rv_1'),
    t('styles.california_rv_2'),
    t('styles.california_rv_3'),
    t('styles.california_rv_4'),
    t('styles.california_rv_5')
  ],
  "climateScenarios": [
    t('styles.california_cs_1'),
    t('styles.california_cs_2'),
    t('styles.california_cs_3'),
    t('styles.california_cs_4')
  ],
  "styleComparisons": [
    t('styles.california_sc_1'),
    t('styles.california_sc_2'),
    t('styles.california_sc_3'),
    t('styles.california_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.california_ps_1'),
    t('styles.california_ps_2'),
    t('styles.california_ps_3'),
    t('styles.california_ps_4'),
    t('styles.california_ps_5')
  ],
  "risks": [
    t('styles.california_risk_1'),
    t('styles.california_risk_2'),
    t('styles.california_risk_3'),
    t('styles.california_risk_4'),
    t('styles.california_risk_5')
  ],
  "notes": [
    t('styles.california_note_1'),
    t('styles.california_note_2'),
    t('styles.california_note_3'),
    t('styles.california_note_4'),
    t('styles.california_note_5')
  ],
  "tags": [
    t('common.gourmet_personal_pizzas'),
    t('common.creative_toppings'),
    t('common.pizza'),
    t('common.united_states')
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
      "title": t('styles.modernist_pizza'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": t('styles.california_pizza_kitchen_cookbook'),
      "url": "https://www.amazon.com/California-Pizza-Kitchen-Cookbook/dp/0025405417",
      "author": t('styles.larry_flax_rick_rosenfield'),
      "year": 1996
    },
    {
      "title": t('styles.chez_panisse_menu_cookbook'),
      "url": "https://www.amazon.com/Chez-Panisse-Menu-Cookbook-Alice/dp/0679720141",
      "author": t('styles.alice_waters'),
      "year": 1982
    },
    {
      "title": t('styles.wolfgang_puck_adventures'),
      "url": "https://www.amazon.com/Wolfgang-Puck-Adventures-Kitchen/dp/039453965X",
      "author": t('styles.wolfgang_puck'),
      "year": 1991
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.california_faq_1_q'),
      "answer": t('styles.california_faq_1_a')
    },
    {
      "question": t('styles.california_faq_2_q'),
      "answer": t('styles.california_faq_2_a')
    },
    {
      "question": t('styles.california_faq_3_q'),
      "answer": t('styles.california_faq_3_a')
    },
    {
      "question": t('styles.california_faq_4_q'),
      "answer": t('styles.california_faq_4_a')
    },
    {
      "question": t('styles.california_faq_5_q'),
      "answer": t('styles.california_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
