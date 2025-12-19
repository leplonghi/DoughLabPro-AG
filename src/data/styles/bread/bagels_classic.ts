import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const bagels_classic: StyleDefinition = {
  "id": "bagels_classic",
  "title": t('styles.classic_boiled_bagels'),
  "subtitle": t('styles.specialty_breads'),
  "category": t('styles.bread_2'),
  "family": t('styles.specialty_breads_2'),
  "variantName": t('styles.classic_boiled_bagels_2'),
  "origin": {
    "country": "Poland/United States",
    "region": t('styles.jewish_baking_new_york'),
    "period": "Traditional/Modern"
  },
  "intro": t('styles.bagels_intro'),
  "history": t('styles.bagels_history'),
  "culturalContext": {
    "significance": [
      t('styles.bagels_sig_1'),
      t('styles.bagels_sig_2'),
      t('styles.bagels_sig_3'),
      t('styles.bagels_sig_4'),
      t('styles.bagels_sig_5')
    ],
    "consumptionContext": [
      t('styles.bagels_consum_1'),
      t('styles.bagels_consum_2'),
      t('styles.bagels_consum_3'),
      t('styles.bagels_consum_4'),
      t('styles.bagels_consum_5')
    ],
    "evolution": [
      t('styles.bagels_evo_1'),
      t('styles.bagels_evo_2'),
      t('styles.bagels_evo_3'),
      t('styles.bagels_evo_4'),
      t('styles.bagels_evo_5'),
      t('styles.bagels_evo_6')
    ],
    "rituals": [
      t('styles.bagels_ritual_1'),
      t('styles.bagels_ritual_2'),
      t('styles.bagels_ritual_3'),
      t('styles.bagels_ritual_4'),
      t('styles.bagels_ritual_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.bagels_flavor_1'),
      t('styles.bagels_flavor_2'),
      t('styles.bagels_flavor_3'),
      t('styles.bagels_flavor_4'),
      t('styles.bagels_flavor_5')
    ],
    "aromaProfile": [
      t('styles.bagels_aroma_1'),
      t('styles.bagels_aroma_2'),
      t('styles.bagels_aroma_3'),
      t('styles.bagels_aroma_4'),
      t('styles.bagels_aroma_5')
    ],
    "textureNotes": [
      t('styles.bagels_texture_1'),
      t('styles.bagels_texture_2'),
      t('styles.bagels_texture_3'),
      t('styles.bagels_texture_4'),
      t('styles.bagels_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.bagels_pair_1'),
      t('styles.bagels_pair_2'),
      t('styles.bagels_pair_3'),
      t('styles.bagels_pair_4'),
      t('styles.bagels_pair_5')
    ],
    "flavorEvolution": [
      t('styles.bagels_fe_1'),
      t('styles.bagels_fe_2'),
      t('styles.bagels_fe_3'),
      t('styles.bagels_fe_4'),
      t('styles.bagels_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.bagels_foundations_1'),
    t('styles.bagels_foundations_2')
  ],
  "doughImpact": [
    t('styles.bagels_di_1'),
    t('styles.bagels_di_2'),
    t('styles.bagels_di_3'),
    t('styles.bagels_di_4'),
    t('styles.bagels_di_5')
  ],
  "bakingImpact": [
    t('styles.bagels_bi_1'),
    t('styles.bagels_bi_2'),
    t('styles.bagels_bi_3'),
    t('styles.bagels_bi_4'),
    t('styles.bagels_bi_5')
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
      0,
      5
    ],
    "sugarRange": [
      2,
      6
    ],
    "flourStrength": t('styles.highgluten_flour_for_chewy_texture'),
    "fermentation": {
      "bulk": t('styles.bagels_bulk'),
      "proof": t('styles.shaped_rings_are_often_retarded_cold_overnight'),
      "coldRetard": t('styles.common_cold_proof_before_boiling_and_baking')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        220,
        250
      ],
      "notes": "Boiled briefly (often with malt or baking soda) before baking."
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.bagels_for_breakfast_and_sandwiches')
    ]
  },
  "regionalVariants": [
    t('styles.bagels_rv_1'),
    t('styles.bagels_rv_2'),
    t('styles.bagels_rv_3'),
    t('styles.bagels_rv_4'),
    t('styles.bagels_rv_5')
  ],
  "climateScenarios": [
    t('styles.bagels_cs_1'),
    t('styles.bagels_cs_2'),
    t('styles.bagels_cs_3'),
    t('styles.bagels_cs_4')
  ],
  "styleComparisons": [
    t('styles.bagels_sc_1'),
    t('styles.bagels_sc_2'),
    t('styles.bagels_sc_3'),
    t('styles.bagels_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.bagels_ps_1'),
    t('styles.bagels_ps_2'),
    t('styles.bagels_ps_3'),
    t('styles.bagels_ps_4'),
    t('styles.bagels_ps_5')
  ],
  "risks": [
    t('styles.bagels_risk_1'),
    t('styles.bagels_risk_2'),
    t('styles.bagels_risk_3'),
    t('styles.bagels_risk_4'),
    t('styles.bagels_risk_5')
  ],
  "notes": [
    t('styles.bagels_note_1'),
    t('styles.bagels_note_2'),
    t('styles.bagels_note_3'),
    t('styles.bagels_note_4'),
    t('styles.bagels_note_5')
  ],
  "tags": [
    t('common.bagels_for_breakfast_and_sandwiches'),
    t('common.bread'),
    "Poland/United States"
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
      "title": t('styles.modernist_bread_2'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "The Bagel: The Surprising History of a Modest Bread",
      "url": "https://www.amazon.com/Bagel-Surprising-History-Modest-Bread/dp/0300117627",
      "author": "Maria Balinska",
      "year": 2008
    },
    {
      "title": "Inside the Jewish Bakery",
      "url": "https://www.amazon.com/Inside-Jewish-Bakery-Recipes-Traditions/dp/1935754051",
      "author": "Stanley Ginsberg, Norman Berg",
      "year": 2011
    },
    {
      "title": "The Secrets of New York Bagels",
      "url": "https://www.seriouseats.com/how-to-make-real-new-york-bagels",
      "author": "J. Kenji López-Alt",
      "year": 2017
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.bagels_faq_1_q'),
      "answer": t('styles.bagels_faq_1_a')
    },
    {
      "question": t('styles.bagels_faq_2_q'),
      "answer": t('styles.bagels_faq_2_a')
    },
    {
      "question": t('styles.bagels_faq_3_q'),
      "answer": t('styles.bagels_faq_3_a')
    },
    {
      "question": t('styles.bagels_faq_4_q'),
      "answer": t('styles.bagels_faq_4_a')
    },
    {
      "question": t('styles.bagels_faq_5_q'),
      "answer": t('styles.bagels_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
