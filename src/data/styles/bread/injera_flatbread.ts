import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const injera_flatbread: StyleDefinition = {
  "id": "injera_flatbread",
  "title": t('styles.injera_title'),
  "subtitle": t('styles.classic_flatbreads_3'),
  "category": t('styles.bread_9'),
  "family": t('styles.classic_flatbreads_4'),
  "variantName": t('styles.injera_variantName'),
  "origin": {
    "country": t('styles.injera_origin_country'),
    "region": t('styles.horn_of_africa'),
    "period": t('styles.traditional_3')
  },
  "intro": t('styles.used_as_the_base_for_stews_and_dishes_torn_by_hand'),
  "history": t('styles.injera_history'),
  "culturalContext": {
    "significance": [
      t('styles.injera_sig_1'),
      t('styles.injera_sig_2'),
      t('styles.injera_sig_3'),
      t('styles.injera_sig_4'),
      t('styles.injera_sig_5')
    ],
    "consumptionContext": [
      t('styles.injera_cons_1'),
      t('styles.injera_cons_2'),
      t('styles.injera_cons_3'),
      t('styles.injera_cons_4'),
      t('styles.injera_cons_5')
    ],
    "evolution": [
      t('styles.injera_evo_1'),
      t('styles.injera_evo_2'),
      t('styles.injera_evo_3'),
      t('styles.injera_evo_4'),
      t('styles.injera_evo_5'),
      t('styles.injera_evo_6')
    ],
    "rituals": [
      t('styles.injera_rit_1'),
      t('styles.injera_rit_2'),
      t('styles.injera_rit_3'),
      t('styles.injera_rit_4'),
      t('styles.injera_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.injera_flav_1'),
      t('styles.injera_flav_2'),
      t('styles.injera_flav_3'),
      t('styles.injera_flav_4'),
      t('styles.injera_flav_5')
    ],
    "aromaProfile": [
      t('styles.injera_aroma_1'),
      t('styles.injera_aroma_2'),
      t('styles.injera_aroma_3'),
      t('styles.injera_aroma_4'),
      t('styles.injera_aroma_5')
    ],
    "textureNotes": [
      t('styles.injera_text_1'),
      t('styles.injera_text_2'),
      t('styles.injera_text_3'),
      t('styles.injera_text_4'),
      t('styles.injera_text_5')
    ],
    "pairingRecommendations": [
      t('styles.injera_pair_1'),
      t('styles.injera_pair_2'),
      t('styles.injera_pair_3'),
      t('styles.injera_pair_4'),
      t('styles.injera_pair_5')
    ],
    "flavorEvolution": [
      t('styles.injera_fevo_1'),
      t('styles.injera_fevo_2'),
      t('styles.injera_fevo_3'),
      t('styles.injera_fevo_4'),
      t('styles.injera_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Natural fermentation over several days with teff-based batter.",
    "Hydration: 100-120%"
  ],
  "doughImpact": [
    "No gluten network: Teff is gluten-free; the structure comes from the cooked starch 'sponge'",
    "Multiday fermentation (2-4 days) allows the Ersho (starter) to fully acidify the batter",
    "High hydration (100-150%) results in a thin, pourable batter rather than a solid dough",
    "Starch Gelatinization (Absit): a small portion of the batter is boiled and added back to ensure binding",
    "Mineral content: high iron and calcium in Teff accelerate the wild yeast fermentation"
  ],
  "bakingImpact": [
    "Single-sided cooking on a 'Mitad' (hot griddle) prevents the 'eyes' from being crushed",
    "Steam-baking: a lid (Akambalo) is used to trap internal steam, cooking the top surface through",
    "The 'Eyes' are created by the rapid release of fermentation gases through the thin batter",
    "Zero oil: traditionally cooked on a dry, seasoned clay or electric surface",
    "Rapid cooling: it must be removed and placed on a straw mat to prevent it from becoming gummy"
  ],
  "technicalProfile": {
    "hydrationRange": [
      100,
      120
    ],
    "saltRange": [
      0,
      1.5
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      2
    ],
    "flourStrength": t('styles.teff_flour_with_possible_blends'),
    "fermentation": {
      "bulk": t('styles.multiday_batter_fermentation_at_ambient_temperatur'),
      "proof": t('styles.short_rest_before_ladling_onto_hot_surface'),
      "coldRetard": t('styles.ambient_fermentation_is_traditional')
    },
    "oven": {
      "type": "griddle",
      "temperatureC": [
        180,
        220
      ],
      "notes": t('styles.injera_oven_notes')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      "Base for Ethiopian/Eritrean meals"
    ]
  },
  "regionalVariants": [
    t('styles.injera_var_1'),
    t('styles.injera_var_2'),
    t('styles.injera_var_3'),
    t('styles.injera_var_4'),
    t('styles.injera_var_5')
  ],
  "climateScenarios": [
    t('styles.injera_clim_1'),
    t('styles.injera_clim_2'),
    t('styles.injera_clim_3'),
    t('styles.injera_clim_4')
  ],
  "styleComparisons": [
    t('styles.injera_comp_1'),
    t('styles.injera_comp_2'),
    t('styles.injera_comp_3'),
    t('styles.injera_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.injera_sens_1'),
    t('styles.injera_sens_2'),
    t('styles.injera_sens_3'),
    t('styles.injera_sens_4'),
    t('styles.injera_sens_5')
  ],
  "risks": [
    t('styles.injera_risk_1'),
    t('styles.injera_risk_2'),
    t('styles.injera_risk_3'),
    t('styles.injera_risk_4'),
    t('styles.injera_risk_5')
  ],
  "notes": [
    t('styles.injera_note_1'),
    t('styles.injera_note_2'),
    t('styles.injera_note_3'),
    t('styles.injera_note_4'),
    t('styles.injera_note_5')
  ],
  "tags": [
    "Base for Ethiopian/Eritrean meals",
    t('common.bread'),
    "Ethiopia/Eritrea"
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
      "title": t('styles.injera_title'),
      "url": "https://www.worldcat.org/title/ethiopia-recipes-and-traditions-from-the-horn-of-africa/",
      "author": "Yohanis Gebreyesus",
      "year": 2019
    },
    {
      "title": t('styles.modernist_bread_8'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.injera_title'),
      "url": "https://www.teffco.com/history-of-teff/",
      "author": "The Teff Company",
      "year": 2021
    },
    {
      "title": t('styles.injera_title'),
      "url": "https://www.sciencedirect.com/topics/food-science/injera",
      "author": "ScienceDirect",
      "year": 2018
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.injera_faq_1_q'),
      "answer": t('styles.injera_faq_1_a')
    },
    {
      "question": t('styles.injera_faq_2_q'),
      "answer": t('styles.injera_faq_2_a')
    },
    {
      "question": t('styles.injera_faq_3_q'),
      "answer": t('styles.injera_faq_3_a')
    },
    {
      "question": t('styles.injera_faq_4_q'),
      "answer": t('styles.injera_faq_4_a')
    },
    {
      "question": t('styles.injera_faq_5_q'),
      "answer": t('styles.injera_faq_5_a')
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
