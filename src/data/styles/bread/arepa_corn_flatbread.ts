import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const arepa_corn_flatbread: StyleDefinition = {
  "id": "arepa_corn_flatbread",
  "title": "Arepa (Corn Flatbread)",
  "subtitle": t('styles.classic_flatbreads'),
  "category": t('styles.bread'),
  "family": t('styles.classic_flatbreads_2'),
  "variantName": "Arepa (Corn Flatbread)",
  "origin": {
    "country": "Venezuela/Colombia",
    "region": t('styles.northern_south_america'),
    "period": t('styles.traditional')
  },
  "intro": t('styles.arepa_intro'),
  "history": t('styles.arepa_history'),
  "culturalContext": {
    "culturalContext": {
      "significance": [
        t('styles.arepa_sig_1'),
        t('styles.arepa_sig_2'),
        t('styles.arepa_sig_3'),
        t('styles.arepa_sig_4'),
        t('styles.arepa_sig_5')
      ],
      "consumptionContext": [
        t('styles.arepa_consum_1'),
        t('styles.arepa_consum_2'),
        t('styles.arepa_consum_3'),
        t('styles.arepa_consum_4'),
        t('styles.arepa_consum_5')
      ],
      "evolution": [
        t('styles.arepa_evo_1'),
        t('styles.arepa_evo_2'),
        t('styles.arepa_evo_3'),
        t('styles.arepa_evo_4'),
        t('styles.arepa_evo_5'),
        t('styles.arepa_evo_6')
      ],
      "rituals": [
        t('styles.arepa_ritual_1'),
        t('styles.arepa_ritual_2'),
        t('styles.arepa_ritual_3'),
        t('styles.arepa_ritual_4'),
        t('styles.arepa_ritual_5')
      ]
    },
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.arepa_flavor_1'),
      t('styles.arepa_flavor_2'),
      t('styles.arepa_flavor_3'),
      t('styles.arepa_flavor_4'),
      t('styles.arepa_flavor_5')
    ],
    "aromaProfile": [
      t('styles.arepa_aroma_1'),
      t('styles.arepa_aroma_2'),
      t('styles.arepa_aroma_3'),
      t('styles.arepa_aroma_4'),
      t('styles.arepa_aroma_5')
    ],
    "textureNotes": [
      t('styles.arepa_texture_1'),
      t('styles.arepa_texture_2'),
      t('styles.arepa_texture_3'),
      t('styles.arepa_texture_4'),
      t('styles.arepa_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.arepa_pair_1'),
      t('styles.arepa_pair_2'),
      t('styles.arepa_pair_3'),
      t('styles.arepa_pair_4'),
      t('styles.arepa_pair_5')
    ],
    "flavorEvolution": [
      t('styles.arepa_fe_1'),
      t('styles.arepa_fe_2'),
      t('styles.arepa_fe_3'),
      t('styles.arepa_fe_4'),
      t('styles.arepa_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.arepa_foundations_1'),
    t('styles.arepa_foundations_2')
  ],
  "doughImpact": [
    t('styles.arepa_di_1'),
    t('styles.arepa_di_2'),
    t('styles.arepa_di_3'),
    t('styles.arepa_di_4'),
    t('styles.arepa_di_5')
  ],
  "bakingImpact": [
    t('styles.arepa_bi_1'),
    t('styles.arepa_bi_2'),
    t('styles.arepa_bi_3'),
    t('styles.arepa_bi_4'),
    t('styles.arepa_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      75
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      0,
      10
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": "Precooked corn flour (masa arepa), not wheat flour",
    "fermentation": {
      "bulk": t('styles.short_rest_after_mixing_to_hydrate_flour'),
      "proof": t('styles.no_fermentation_in_traditional_formulas'),
      "coldRetard": t('styles.optional_rest_in_fridge_for_planning')
    },
    "oven": {
      "type": "griddle_or_pan",
      "temperatureC": [
        160,
        220
      ],
      "notes": t('styles.cooked_on_griddle_and_sometimes_finished_in_oven')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.filled_arepas'),
      t('common.savory_stuffed_flatbreads')
    ]
  },
  "regionalVariants": [
    t('styles.arepa_rv_1'),
    t('styles.arepa_rv_2'),
    t('styles.arepa_rv_3'),
    t('styles.arepa_rv_4'),
    t('styles.arepa_rv_5')
  ],
  "climateScenarios": [
    t('styles.arepa_cs_1'),
    t('styles.arepa_cs_2'),
    t('styles.arepa_cs_3'),
    t('styles.arepa_cs_4')
  ],
  "styleComparisons": [
    t('styles.arepa_sc_1'),
    t('styles.arepa_sc_2'),
    t('styles.arepa_sc_3'),
    t('styles.arepa_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.arepa_ps_1'),
    t('styles.arepa_ps_2'),
    t('styles.arepa_ps_3'),
    t('styles.arepa_ps_4'),
    t('styles.arepa_ps_5')
  ],
  "risks": [
    t('styles.arepa_risk_1'),
    t('styles.arepa_risk_2'),
    t('styles.arepa_risk_3'),
    t('styles.arepa_risk_4'),
    t('styles.arepa_risk_5')
  ],
  "notes": [
    t('styles.arepa_note_1'),
    t('styles.arepa_note_2'),
    t('styles.arepa_note_3'),
    t('styles.arepa_note_4'),
    t('styles.arepa_note_5')
  ],
  "tags": [
    t('common.filled_arepas'),
    t('common.savory_stuffed_flatbreads'),
    t('common.bread'),
    "Venezuela/Colombia"
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
      "title": "¡Arepa!: The Venezuelan Cornbread Cookbook",
      "url": "https://www.worldcat.org/title/arepa-the-venezuelan-cornbread-cookbook/",
      "author": "Irena Stein",
      "year": 2023
    },
    {
      "title": t('styles.modernist_bread'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Colombia: The Cookbook",
      "url": "https://www.phaidon.com/store/cookbooks-food-and-drink/colombia-the-cookbook-9781838666248/",
      "author": "Janna Quintero",
      "year": 2024
    },
    {
      "title": "The History of Pre-Cooked Corn Flour",
      "url": "https://www.bbc.com/travel/article/20190515-venezuelas-daily-bread",
      "author": "BBC Travel",
      "year": 2019
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.arepa_faq_1_q'),
      "answer": t('styles.arepa_faq_1_a')
    },
    {
      "question": t('styles.arepa_faq_2_q'),
      "answer": t('styles.arepa_faq_2_a')
    },
    {
      "question": t('styles.arepa_faq_3_q'),
      "answer": t('styles.arepa_faq_3_a')
    },
    {
      "question": t('styles.arepa_faq_4_q'),
      "answer": t('styles.arepa_faq_4_a')
    },
    {
      "question": t('styles.arepa_faq_5_q'),
      "answer": t('styles.arepa_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
