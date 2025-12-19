import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const st_louis_thin: StyleDefinition = {
  "id": "st_louis_thin",
  "title": t('styles.st_louis_style'),
  "subtitle": t('styles.american_cracker_thin'),
  "category": t('styles.pizza_14'),
  "family": t('styles.american_cracker_thin_2'),
  "variantName": t('styles.st_louis_style_2'),
  "origin": {
    "country": t('styles.united_states_12'),
    "region": t('styles.st_louis'),
    "period": t('styles.mid_20th_century_2')
  },
  "intro": t('styles.st_louis_intro'),
  "history": t('styles.st_louis_history'),
  "culturalContext": {
    "significance": [
      t('styles.st_louis_sig_1'),
      t('styles.st_louis_sig_2'),
      t('styles.st_louis_sig_3'),
      t('styles.st_louis_sig_4'),
      t('styles.st_louis_sig_5')
    ],
    "consumptionContext": [
      t('styles.st_louis_consum_1'),
      t('styles.st_louis_consum_2'),
      t('styles.st_louis_consum_3'),
      t('styles.st_louis_consum_4'),
      t('styles.st_louis_consum_5')
    ],
    "evolution": [
      t('styles.st_louis_evo_1'),
      t('styles.st_louis_evo_2'),
      t('styles.st_louis_evo_3'),
      t('styles.st_louis_evo_4'),
      t('styles.st_louis_evo_5'),
      t('styles.st_louis_evo_6')
    ],
    "rituals": [
      t('styles.st_louis_rituals_1'),
      t('styles.st_louis_rituals_2'),
      t('styles.st_louis_rituals_3'),
      t('styles.st_louis_rituals_4'),
      t('styles.st_louis_rituals_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.st_louis_flavor_1'),
      t('styles.st_louis_flavor_2'),
      t('styles.st_louis_flavor_3'),
      t('styles.st_louis_flavor_4'),
      t('styles.st_louis_flavor_5')
    ],
    "aromaProfile": [
      t('styles.st_louis_aroma_1'),
      t('styles.st_louis_aroma_2'),
      t('styles.st_louis_aroma_3'),
      t('styles.st_louis_aroma_4'),
      t('styles.st_louis_aroma_5')
    ],
    "textureNotes": [
      t('styles.st_louis_texture_1'),
      t('styles.st_louis_texture_2'),
      t('styles.st_louis_texture_3'),
      t('styles.st_louis_texture_4'),
      t('styles.st_louis_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.st_louis_pair_1'),
      t('styles.st_louis_pair_2'),
      t('styles.st_louis_pair_3'),
      t('styles.st_louis_pair_4'),
      t('styles.st_louis_pair_5')
    ],
    "flavorEvolution": [
      t('styles.st_louis_fe_1'),
      t('styles.st_louis_fe_2'),
      t('styles.st_louis_fe_3'),
      t('styles.st_louis_fe_4'),
      t('styles.st_louis_fe_5')
    ]
  },
  "technicalFoundations": [
    t('styles.st_louis_tech_1'),
    t('styles.st_louis_tech_2')
  ],
  "doughImpact": [
    t('styles.st_louis_dough_impact_1'),
    t('styles.st_louis_dough_impact_2'),
    t('styles.st_louis_dough_impact_3'),
    t('styles.st_louis_dough_impact_4'),
    t('styles.st_louis_dough_impact_5')
  ],
  "bakingImpact": [
    t('styles.st_louis_baking_impact_1'),
    t('styles.st_louis_baking_impact_2'),
    t('styles.st_louis_baking_impact_3'),
    t('styles.st_louis_baking_impact_4'),
    t('styles.st_louis_baking_impact_5')
  ],
  "technicalProfile": {
    "hydrationRange": [
      40,
      50
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_pastry_flour_for_crispness'),
    "fermentation": {
      "bulk": t('styles.minimal_or_none'),
      "proof": t('styles.none_rolled_thin_immediately'),
      "coldRetard": t('styles.not_typical')
    },
    "oven": {
      "type": "electric_deck",
      "temperatureC": [
        230,
        260
      ],
      "notes": t('styles.baked_on_stone_or_screen_for_maximum_crispness')
    },
    "difficulty": "Easy",
    "recommendedUse": [
      t('common.cracker_crust_pizza'),
      t('common.party_snacks')
    ]
  },
  "regionalVariants": [
    t('styles.st_louis_rv_1'),
    t('styles.st_louis_rv_2'),
    t('styles.st_louis_rv_3'),
    t('styles.st_louis_rv_4'),
    t('styles.st_louis_rv_5')
  ],
  "climateScenarios": [
    t('styles.st_louis_cs_1'),
    t('styles.st_louis_cs_2'),
    t('styles.st_louis_cs_3'),
    t('styles.st_louis_cs_4')
  ],
  "styleComparisons": [
    t('styles.st_louis_sc_1'),
    t('styles.st_louis_sc_2'),
    t('styles.st_louis_sc_3'),
    t('styles.st_louis_sc_4')
  ],
  "parameterSensitivity": [
    t('styles.st_louis_ps_1'),
    t('styles.st_louis_ps_2'),
    t('styles.st_louis_ps_3'),
    t('styles.st_louis_ps_4'),
    t('styles.st_louis_ps_5')
  ],
  "risks": [
    t('styles.st_louis_risks_1'),
    t('styles.st_louis_risks_2'),
    t('styles.st_louis_risks_3'),
    t('styles.st_louis_risks_4'),
    t('styles.st_louis_risks_5')
  ],
  "notes": [
    t('styles.st_louis_notes_1'),
    t('styles.st_louis_notes_2'),
    t('styles.st_louis_notes_3'),
    t('styles.st_louis_notes_4'),
    t('styles.st_louis_notes_5')
  ],
  "tags": [
    t('common.cracker_crust_pizza'),
    t('common.party_snacks'),
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
      "title": t('styles.modernist_pizza_12'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": "Imo's Pizza: The Story of a St. Louis Legend",
      "url": "https://www.imospizza.com/about-us/",
      "author": "Imo's Family",
      "year": 2023
    },
    {
      "title": "The Pizza City, USA Podcast: St. Louis Episode",
      "url": "https://www.stevedolinsky.com/podcasts",
      "author": "Steve Dolinsky",
      "year": 2019
    },
    {
      "title": "Serious Eats: Chicago Thin vs. St. Louis Thin",
      "url": "https://www.seriouseats.com/thin-crust-pizza",
      "author": "Nick Kindelsperger",
      "year": 2017
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.st_louis_faq_1_q'),
      "answer": t('styles.st_louis_faq_1_a')
    },
    {
      "question": t('styles.st_louis_faq_2_q'),
      "answer": t('styles.st_louis_faq_2_a')
    },
    {
      "question": t('styles.st_louis_faq_3_q'),
      "answer": t('styles.st_louis_faq_3_a')
    },
    {
      "question": t('styles.st_louis_faq_4_q'),
      "answer": t('styles.st_louis_faq_4_a')
    },
    {
      "question": t('styles.st_louis_faq_5_q'),
      "answer": t('styles.st_louis_faq_5_a')
    }
  ],
  "isCanonical": true,
  "source": "official"
};
