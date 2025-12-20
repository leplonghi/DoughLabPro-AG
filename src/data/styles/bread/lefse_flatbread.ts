import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const lefse_flatbread: StyleDefinition = {
  "id": "lefse_flatbread",
  "title": "Lefse (Potato Flatbread)",
  "subtitle": t('styles.classic_flatbreads_5'),
  "category": t('styles.bread_12'),
  "family": t('styles.classic_flatbreads_6'),
  "variantName": "Lefse (Potato Flatbread)",
  "origin": {
    "country": t('styles.norway'),
    "region": t('styles.scandinavia'),
    "period": t('styles.traditional_4')
  },
  "intro": t('styles.lefse_intro'),
  "history": t('styles.lefse_history_full'),
  "culturalContext": {
    "significance": [
      t('styles.lefse_sig_1'),
      t('styles.lefse_sig_2'),
      t('styles.lefse_sig_3'),
      t('styles.lefse_sig_4'),
      t('styles.lefse_sig_5')
    ],
    "consumptionContext": [
      t('styles.lefse_consum_1'),
      t('styles.lefse_consum_2'),
      t('styles.lefse_consum_3'),
      t('styles.lefse_consum_4'),
      t('styles.lefse_consum_5')
    ],
    "evolution": [
      t('styles.lefse_evo_1'),
      t('styles.lefse_evo_2'),
      t('styles.lefse_evo_3'),
      t('styles.lefse_evo_4'),
      t('styles.lefse_evo_5')
    ],
    "rituals": [
      t('styles.lefse_ritual_1'),
      t('styles.lefse_ritual_2'),
      t('styles.lefse_ritual_3'),
      t('styles.lefse_ritual_4'),
      t('styles.lefse_ritual_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.lefse_flavor_1'),
      t('styles.lefse_flavor_2'),
      t('styles.lefse_flavor_3'),
      t('styles.lefse_flavor_4'),
      t('styles.lefse_flavor_5')
    ],
    "aromaProfile": [
      t('styles.lefse_aroma_1'),
      t('styles.lefse_aroma_2'),
      t('styles.lefse_aroma_3'),
      t('styles.lefse_aroma_4'),
      t('styles.lefse_aroma_5')
    ],
    "textureNotes": [
      t('styles.lefse_texture_1'),
      t('styles.lefse_texture_2'),
      t('styles.lefse_texture_3'),
      t('styles.lefse_texture_4'),
      t('styles.lefse_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.lefse_pair_1'),
      t('styles.lefse_pair_2'),
      t('styles.lefse_pair_3'),
      t('styles.lefse_pair_4'),
      t('styles.lefse_pair_5')
    ],
    "flavorEvolution": [
      t('styles.lefse_fe_1'),
      t('styles.lefse_fe_2'),
      t('styles.lefse_fe_3'),
      t('styles.lefse_fe_4'),
      t('styles.lefse_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.lefse_tech_1'),
    t('styles.lefse_tech_2')
  ],
  "doughImpact": [
    t('styles.lefse_di_1'),
    t('styles.lefse_di_2'),
    t('styles.lefse_di_3'),
    t('styles.lefse_di_4'),
    t('styles.lefse_di_5')
  ],
  "bakingImpact": [
    t('styles.lefse_bi_1'),
    t('styles.lefse_bi_2'),
    t('styles.lefse_bi_3'),
    t('styles.lefse_bi_4'),
    t('styles.lefse_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      50,
      70
    ],
    "saltRange": [
      1,
      2
    ],
    "oilRange": [
      5,
      15
    ],
    "sugarRange": [
      0,
      5
    ],
    "flourStrength": t('styles.allpurpose_flour_with_mashed_potatoes'),
    "fermentation": {
      "bulk": t('styles.resting_of_dough_before_rolling'),
      "proof": t('styles.no_yeast_fermentation_in_typical_formulas'),
      "coldRetard": t('styles.dough_may_be_chilled_for_rolling_convenience')
    },
    "oven": {
      "type": "griddle",
      "temperatureC": [
        200,
        230
      ],
      "notes": t('styles.cooked_quickly_on_hot_griddles_turned_once')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.traditional_scandinavian_flatbread'),
      t('common.sweet_or_savory_wraps')
    ]
  },
  "regionalVariants": [
    t('styles.lefse_rv_1'),
    t('styles.lefse_rv_2'),
    t('styles.lefse_rv_3'),
    t('styles.lefse_rv_4'),
    t('styles.lefse_rv_5')
  ],
  "climateScenarios": [
    t('styles.lefse_cs_1'),
    t('styles.lefse_cs_2'),
    t('styles.lefse_cs_3'),
    t('styles.lefse_cs_4')
  ],
  "styleComparisons": [],
  "parameterSensitivity": [
    t('styles.lefse_ps_1'),
    t('styles.lefse_ps_2'),
    t('styles.lefse_ps_3'),
    t('styles.lefse_ps_4'),
    t('styles.lefse_ps_5')
  ],
  "risks": [
    t('styles.lefse_risk_1'),
    t('styles.lefse_risk_2'),
    t('styles.lefse_risk_3'),
    t('styles.lefse_risk_4'),
    t('styles.lefse_risk_5')
  ],
  "notes": [
    t('styles.lefse_note_1'),
    t('styles.lefse_note_2'),
    t('styles.lefse_note_3'),
    t('styles.lefse_note_4'),
    t('styles.lefse_note_5')
  ],
  "tags": [
    t('common.traditional_scandinavian_flatbread'),
    t('common.sweet_or_savory_wraps'),
    t('common.bread'),
    t('common.norway')
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
      "title": t('styles.scandinavian_baking_literature'),
      "url": "https://www.ingebretsens.com/culture/cooking/baking-lefse",
      "author": "Ingebretsen's",
      "year": 2023
    },
    {
      "title": t('styles.modernist_bread_11'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold",
      "year": 2017
    },
    {
      "title": "King Arthur Baking: Lefse",
      "url": "https://www.kingarthurbaking.com/recipes/lefse-norwegian-potato-flatbread-recipe",
      "author": "KAB",
      "year": 2024
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.lefse_faq_1_q'),
      "answer": t('styles.lefse_faq_1_a')
    },
    {
      "question": t('styles.lefse_faq_2_q'),
      "answer": t('styles.lefse_faq_2_a')
    },
    {
      "question": t('styles.lefse_faq_3_q'),
      "answer": t('styles.lefse_faq_3_a')
    },
    {
      "question": t('styles.lefse_faq_4_q'),
      "answer": t('styles.lefse_faq_4_a')
    },
    {
      "question": t('styles.lefse_faq_5_q'),
      "answer": t('styles.lefse_faq_5_a')
    }
  ],
  "affiliateProducts": [],

  "isCanonical": true,
  "source": "official"
,
  "defaults": {
    "hydration": 70,
    "salt": 2,
    "oil": 0,
    "sugar": 0
  },
  "recommendedFlavorComponents": ["butter","olive_oil","seeds","herbs"]
};
