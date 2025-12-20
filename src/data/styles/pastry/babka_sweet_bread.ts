import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const babka_sweet_bread: StyleDefinition = {
  "id": "babka_sweet_bread",
  "title": t('styles.babka_sweet_bread'),
  "subtitle": t('styles.enriched_sweet_doughs'),
  "category": t('styles.pastry'),
  "family": t('styles.enriched_sweet_doughs_2'),
  "variantName": t('styles.babka_sweet_bread_2'),
  "origin": {
    "country": t('styles.eastern_europe_2'),
    "region": t('styles.jewish_baking_traditions'),
    "period": "19th–20th century"
  },
  "intro": t('styles.babka_intro'),
  "history": t('styles.babka_history'),
  "culturalContext": {
    "significance": [
      t('styles.babka_sig_1'),
      t('styles.babka_sig_2'),
      t('styles.babka_sig_3'),
      t('styles.babka_sig_4'),
      t('styles.babka_sig_5')
    ],
    "consumptionContext": [
      t('styles.babka_consum_1'),
      t('styles.babka_consum_2'),
      t('styles.babka_consum_3'),
      t('styles.babka_consum_4'),
      t('styles.babka_consum_5')
    ],
    "evolution": [
      t('styles.babka_evo_1'),
      t('styles.babka_evo_2'),
      t('styles.babka_evo_3'),
      t('styles.babka_evo_4'),
      t('styles.babka_evo_5'),
      t('styles.babka_evo_6')
    ],
    "rituals": [
      t('styles.babka_ritual_1'),
      t('styles.babka_ritual_2'),
      t('styles.babka_ritual_3'),
      t('styles.babka_ritual_4'),
      t('styles.babka_ritual_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.babka_flavor_1'),
      t('styles.babka_flavor_2'),
      t('styles.babka_flavor_3'),
      t('styles.babka_flavor_4'),
      t('styles.babka_flavor_5')
    ],
    "aromaProfile": [
      t('styles.babka_aroma_1'),
      t('styles.babka_aroma_2'),
      t('styles.babka_aroma_3'),
      t('styles.babka_aroma_4'),
      t('styles.babka_aroma_5')
    ],
    "textureNotes": [
      t('styles.babka_texture_1'),
      t('styles.babka_texture_2'),
      t('styles.babka_texture_3'),
      t('styles.babka_texture_4'),
      t('styles.babka_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.babka_pair_1'),
      t('styles.babka_pair_2'),
      t('styles.babka_pair_3'),
      t('styles.babka_pair_4'),
      t('styles.babka_pair_5')
    ],
    "flavorEvolution": [
      t('styles.babka_fe_1'),
      t('styles.babka_fe_2'),
      t('styles.babka_fe_3'),
      t('styles.babka_fe_4'),
      t('styles.babka_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.babka_tech_1'),
    t('styles.babka_tech_2')
  ],
  "doughImpact": [
    t('styles.babka_di_1'),
    t('styles.babka_di_2'),
    t('styles.babka_di_3'),
    t('styles.babka_di_4'),
    t('styles.babka_di_5')
  ],
  "bakingImpact": [
    t('styles.babka_bi_1'),
    t('styles.babka_bi_2'),
    t('styles.babka_bi_3'),
    t('styles.babka_bi_4'),
    t('styles.babka_bi_5')
  ],
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
      "proof": t('styles.babka_proof'),
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
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.sweet_loaf'),
      t('common.dessert_bread')
    ]
  },
  "regionalVariants": [
    t('styles.babka_rv_1'),
    t('styles.babka_rv_2'),
    t('styles.babka_rv_3'),
    t('styles.babka_rv_4'),
    t('styles.babka_rv_5')
  ],
  "climateScenarios": [
    t('styles.babka_cs_1'),
    t('styles.babka_cs_2'),
    t('styles.babka_cs_3'),
    t('styles.babka_cs_4')
  ],
  "styleComparisons": [
    t('styles.babka_sc_1'),
    t('styles.babka_sc_2'),
    t('styles.babka_sc_3'),
    t('styles.babka_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.babka_ps_1'),
    t('styles.babka_ps_2'),
    t('styles.babka_ps_3'),
    t('styles.babka_ps_4'),
    t('styles.babka_ps_5')
  ],
  "risks": [
    t('styles.babka_risk_1'),
    t('styles.babka_risk_2'),
    t('styles.babka_risk_3'),
    t('styles.babka_risk_4'),
    t('styles.babka_risk_5')
  ],
  "notes": [
    t('styles.babka_note_1'),
    t('styles.babka_note_2'),
    t('styles.babka_note_3'),
    t('styles.babka_note_4'),
    t('styles.babka_note_5')
  ],
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
      "title": t('styles.babka_ref_title_1'),
      "url": "https://www.breadsbakery.com/",
      "author": t('styles.babka_ref_auth_1'),
      "year": 2013
    },
    {
      "title": t('styles.modernist_bread_22'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.babka_ref_title_3'),
      "url": "https://www.amazon.com/Jew-ish-Reinvented-Recipes-Modern-Mensch/dp/0358273550",
      "author": t('styles.babka_ref_auth_3'),
      "year": 2021
    },
    {
      "title": t('styles.babka_ref_title_4'),
      "url": "https://www.amazon.com/Book-Jewish-Food-Odyssey-Samarkand/dp/0394532589",
      "author": t('styles.babka_ref_auth_4'),
      "year": 1996
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.babka_faq_1_q'),
      "answer": t('styles.babka_faq_1_a')
    },
    {
      "question": t('styles.babka_faq_2_q'),
      "answer": t('styles.babka_faq_2_a')
    },
    {
      "question": t('styles.babka_faq_3_q'),
      "answer": t('styles.babka_faq_3_a')
    },
    {
      "question": t('styles.babka_faq_4_q'),
      "answer": t('styles.babka_faq_4_a')
    },
    {
      "question": t('styles.babka_faq_5_q'),
      "answer": t('styles.babka_faq_5_a')
    }
  ],
  "affiliateProducts": [],

  "isCanonical": true,
  "source": "official"
,
  "defaults": {
    "hydration": 60,
    "salt": 1.5,
    "oil": 5,
    "sugar": 10
  },
  "recommendedFlavorComponents": ["butter","sugar","vanilla","cinnamon","chocolate"]
};
