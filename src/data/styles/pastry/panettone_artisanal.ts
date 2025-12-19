import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const panettone_artisanal: StyleDefinition = {
  "id": "panettone_artisanal",
  "title": t('styles.artisanal_panettone'),
  "subtitle": t('styles.festive_breads_3'),
  "category": t('styles.pastry_9'),
  "family": t('styles.festive_breads_4'),
  "variantName": t('styles.artisanal_panettone_2'),
  "origin": {
    "country": t('styles.italy_8'),
    "region": t('styles.northern_italy_3'),
    "period": t('styles.panettone_period')
  },
  "intro": t('styles.panettone_intro'),
  "history": t('styles.panettone_history'),
  "culturalContext": {
    "significance": [
      t('styles.panettone_sig_1'),
      t('styles.panettone_sig_2'),
      t('styles.panettone_sig_3'),
      t('styles.panettone_sig_4'),
      t('styles.panettone_sig_5')
    ],
    "consumptionContext": [
      t('styles.panettone_consum_1'),
      t('styles.panettone_consum_2'),
      t('styles.panettone_consum_3'),
      t('styles.panettone_consum_4'),
      t('styles.panettone_consum_5')
    ],
    "evolution": [
      t('styles.panettone_evo_1'),
      t('styles.panettone_evo_2'),
      t('styles.panettone_evo_3'),
      t('styles.panettone_evo_4'),
      t('styles.panettone_evo_5'),
      t('styles.panettone_evo_6')
    ],
    "rituals": [
      t('styles.panettone_ritual_1'),
      t('styles.panettone_ritual_2'),
      t('styles.panettone_ritual_3'),
      t('styles.panettone_ritual_4'),
      t('styles.panettone_ritual_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.panettone_flavor_1'),
      t('styles.panettone_flavor_2'),
      t('styles.panettone_flavor_3'),
      t('styles.panettone_flavor_4'),
      t('styles.panettone_flavor_5')
    ],
    "aromaProfile": [
      t('styles.panettone_aroma_1'),
      t('styles.panettone_aroma_2'),
      t('styles.panettone_aroma_3'),
      t('styles.panettone_aroma_4'),
      t('styles.panettone_aroma_5')
    ],
    "textureNotes": [
      t('styles.panettone_texture_1'),
      t('styles.panettone_texture_2'),
      t('styles.panettone_texture_3'),
      t('styles.panettone_texture_4'),
      t('styles.panettone_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.panettone_pair_1'),
      t('styles.panettone_pair_2'),
      t('styles.panettone_pair_3'),
      t('styles.panettone_pair_4'),
      t('styles.panettone_pair_5')
    ],
    "flavorEvolution": [
      t('styles.panettone_fe_1'),
      t('styles.panettone_fe_2'),
      t('styles.panettone_fe_3'),
      t('styles.panettone_fe_4'),
      t('styles.panettone_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.panettone_foundations_1'),
    t('styles.panettone_foundations_2')
  ],
  "doughImpact": [
    t('styles.panettone_di_1'),
    t('styles.panettone_di_2'),
    t('styles.panettone_di_3'),
    t('styles.panettone_di_4'),
    t('styles.panettone_di_5')
  ],
  "bakingImpact": [
    t('styles.panettone_bi_1'),
    t('styles.panettone_bi_2'),
    t('styles.panettone_bi_3'),
    t('styles.panettone_bi_4'),
    t('styles.panettone_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      65,
      75
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      20,
      30
    ],
    "sugarRange": [
      20,
      30
    ],
    "flourStrength": t('styles.very_strong_highprotein_flour_suitable_for_extreme'),
    "fermentation": {
      "bulk": t('styles.multiple_dough_stages_over_1224_h'),
      "proof": t('styles.panettone_proof'),
      "coldRetard": t('styles.used_cautiously_temperature_control_is_crucial')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        170,
        190
      ],
      "notes": t('styles.loaves_are_often_cooled_upsidedown_to_prevent_coll')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.festive_sweet_bread'),
      t('styles.high_skill_project_baking')
    ]
  },
  "regionalVariants": [
    t('styles.panettone_rv_1'),
    t('styles.panettone_rv_2'),
    t('styles.panettone_rv_3'),
    t('styles.panettone_rv_4'),
    t('styles.panettone_rv_5')
  ],
  "climateScenarios": [
    t('styles.panettone_cs_1'),
    t('styles.panettone_cs_2'),
    t('styles.panettone_cs_3'),
    t('styles.panettone_cs_4')
  ],
  "styleComparisons": [
    t('styles.panettone_sc_1'),
    t('styles.panettone_sc_2'),
    t('styles.panettone_sc_3'),
    t('styles.panettone_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.panettone_ps_1'),
    t('styles.panettone_ps_2'),
    t('styles.panettone_ps_3'),
    t('styles.panettone_ps_4'),
    t('styles.panettone_ps_5')
  ],
  "risks": [
    t('styles.panettone_risk_1'),
    t('styles.panettone_risk_2'),
    t('styles.panettone_risk_3'),
    t('styles.panettone_risk_4'),
    t('styles.panettone_risk_5')
  ],
  "notes": [
    t('styles.panettone_note_1'),
    t('styles.panettone_note_2'),
    t('styles.panettone_note_3'),
    t('styles.panettone_note_4'),
    t('styles.panettone_note_5')
  ],
  "tags": [
    t('common.festive_sweet_bread'),
    t('styles.high_skill_project_baking'),
    t('common.pastry'),
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
      "title": "Panettone: Master Bakers and World Class Techniques",
      "url": "https://www.panettoneworldcup.it/",
      "author": "The Panettone World Cup Association",
      "year": 2023
    },
    {
      "title": t('styles.modernist_bread_30'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Cresci: The Art of Leavened Dough",
      "url": "https://www.amazon.com/Cresci-Art-Leavened-Dough-Iginio/dp/8886561135",
      "author": "Iginio Massari & Achille Zoia",
      "year": 1999
    },
    {
      "title": "Omnia Fermenta: The Science of Large Sourdough",
      "url": "https://www.francesco-migoya.com/",
      "author": "Francesco Migoya",
      "year": 2020
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.panettone_faq_1_q'),
      "answer": t('styles.panettone_faq_1_a')
    },
    {
      "question": t('styles.panettone_faq_2_q'),
      "answer": t('styles.panettone_faq_2_a')
    },
    {
      "question": t('styles.panettone_faq_3_q'),
      "answer": t('styles.panettone_faq_3_a')
    },
    {
      "question": t('styles.panettone_faq_4_q'),
      "answer": t('styles.panettone_faq_4_a')
    },
    {
      "question": t('styles.panettone_faq_5_q'),
      "answer": t('styles.panettone_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
