import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const stollen_german: StyleDefinition = {
  "id": "stollen_german",
  "title": t('styles.german_stollen'),
  "subtitle": t('styles.festive_breads_5'),
  "category": t('styles.pastry_10'),
  "family": t('styles.festive_breads_6'),
  "variantName": t('styles.german_stollen_2'),
  "origin": {
    "country": t('styles.germany_4'),
    "region": t('styles.dresden_and_others'),
    "period": t('styles.traditional_15')
  },
  "intro": t('styles.associated_with_christmas_markets_and_holiday_cele'),
  "history": t('styles.stollen_history'),
  "culturalContext": {
    "significance": [
      t('styles.stollen_sig_1'),
      t('styles.stollen_sig_2'),
      t('styles.stollen_sig_3'),
      t('styles.stollen_sig_4'),
      t('styles.stollen_sig_5')
    ],
    "consumptionContext": [
      t('styles.stollen_consum_1'),
      t('styles.stollen_consum_2'),
      t('styles.stollen_consum_3'),
      t('styles.stollen_consum_4'),
      t('styles.stollen_consum_5')
    ],
    "evolution": [
      t('styles.stollen_evo_1'),
      t('styles.stollen_evo_2'),
      t('styles.stollen_evo_3'),
      t('styles.stollen_evo_4'),
      t('styles.stollen_evo_5'),
      t('styles.stollen_evo_6')
    ],
    "rituals": [
      t('styles.stollen_ritual_1'),
      t('styles.stollen_ritual_2'),
      t('styles.stollen_ritual_3'),
      t('styles.stollen_ritual_4'),
      t('styles.stollen_ritual_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.stollen_flavor_1'),
      t('styles.stollen_flavor_2'),
      t('styles.stollen_flavor_3'),
      t('styles.stollen_flavor_4'),
      t('styles.stollen_flavor_5')
    ],
    "aromaProfile": [
      t('styles.stollen_aroma_1'),
      t('styles.stollen_aroma_2'),
      t('styles.stollen_aroma_3'),
      t('styles.stollen_aroma_4'),
      t('styles.stollen_aroma_5')
    ],
    "textureNotes": [
      t('styles.stollen_texture_1'),
      t('styles.stollen_texture_2'),
      t('styles.stollen_texture_3'),
      t('styles.stollen_texture_4'),
      t('styles.stollen_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.stollen_pair_1'),
      t('styles.stollen_pair_2'),
      t('styles.stollen_pair_3'),
      t('styles.stollen_pair_4'),
      t('styles.stollen_pair_5')
    ],
    "flavorEvolution": [
      t('styles.stollen_fe_1'),
      t('styles.stollen_fe_2'),
      t('styles.stollen_fe_3'),
      t('styles.stollen_fe_4'),
      t('styles.stollen_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.stollen_tech_1'),
    t('styles.stollen_tech_2')
  ],
  "doughImpact": [
    t('styles.stollen_di_1'),
    t('styles.stollen_di_2'),
    t('styles.stollen_di_3'),
    t('styles.stollen_di_4'),
    t('styles.stollen_di_5')
  ],
  "bakingImpact": [
    t('styles.stollen_bi_1'),
    t('styles.stollen_bi_2'),
    t('styles.stollen_bi_3'),
    t('styles.stollen_bi_4'),
    t('styles.stollen_bi_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      55,
      65
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      15,
      30
    ],
    "sugarRange": [
      15,
      30
    ],
    "flourStrength": t('styles.bread_or_strong_allpurpose_flour_4'),
    "fermentation": {
      "bulk": t('styles.stollen_bulk'),
      "proof": t('styles.stollen_proof'),
      "coldRetard": t('styles.resting_after_baking_improves_flavor_storage_is_pa')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        170,
        190
      ],
      "notes": t('styles.heavily_buttered_and_sugared_after_baking_improves')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.christmas_bread'),
      t('common.festive_sweet_loaf')
    ]
  },
  "regionalVariants": [
    t('styles.stollen_rv_1'),
    t('styles.stollen_rv_2'),
    t('styles.stollen_rv_3'),
    t('styles.stollen_rv_4'),
    t('styles.stollen_rv_5')
  ],
  "climateScenarios": [
    t('styles.stollen_cs_1'),
    t('styles.stollen_cs_2'),
    t('styles.stollen_cs_3'),
    t('styles.stollen_cs_4')
  ],
  "styleComparisons": [
    t('styles.stollen_sc_1'),
    t('styles.stollen_sc_2'),
    t('styles.stollen_sc_3'),
    t('styles.stollen_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.stollen_ps_1'),
    t('styles.stollen_ps_2'),
    t('styles.stollen_ps_3'),
    t('styles.stollen_ps_4'),
    t('styles.stollen_ps_5')
  ],
  "risks": [
    t('styles.stollen_risk_1'),
    t('styles.stollen_risk_2'),
    t('styles.stollen_risk_3'),
    t('styles.stollen_risk_4'),
    t('styles.stollen_risk_5')
  ],
  "notes": [
    t('styles.stollen_note_1'),
    t('styles.stollen_note_2'),
    t('styles.stollen_note_3'),
    t('styles.stollen_note_4'),
    t('styles.stollen_note_5')
  ],
  "tags": [
    t('common.christmas_bread'),
    t('common.festive_sweet_loaf'),
    t('common.pastry'),
    t('common.germany')
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
      "title": t('styles.dresdner_stollen_history'),
      "url": "https://www.dresdnerstollen.de/en/dresden-christstollen/history",
      "author": t('styles.dresden_stollen_assoc'),
      "year": 2023
    },
    {
      "title": t('styles.modernist_bread_31'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.german_christmas_baking'),
      "url": "https://www.germanfoods.org/recipes/stollen/",
      "author": t('styles.german_foods_north_america'),
      "year": 2021
    },
    {
      "title": t('styles.science_ripening_rich_breads'),
      "url": "https://www.foodandwine.com/desserts/cakes/christmas-cakes/stollen-guide",
      "author": t('styles.food_and_wine_mag'),
      "year": 2019
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.stollen_faq_1_q'),
      "answer": t('styles.stollen_faq_1_a')
    },
    {
      "question": t('styles.stollen_faq_2_q'),
      "answer": t('styles.stollen_faq_2_a')
    },
    {
      "question": t('styles.stollen_faq_3_q'),
      "answer": t('styles.stollen_faq_3_a')
    },
    {
      "question": t('styles.stollen_faq_4_q'),
      "answer": t('styles.stollen_faq_4_a')
    },
    {
      "question": t('styles.stollen_faq_5_q'),
      "answer": t('styles.stollen_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
