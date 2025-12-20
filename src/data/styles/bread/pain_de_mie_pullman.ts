import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pain_de_mie_pullman: StyleDefinition = {
  "id": "pain_de_mie_pullman",
  "title": t('styles.pain_mie_title'),
  "subtitle": t('styles.sandwich__enriched_breads_7'),
  "category": t('styles.bread_16'),
  "family": t('styles.sandwich__enriched_breads_8'),
  "variantName": t('styles.pain_mie_variantName'),
  "origin": {
    "country": t('styles.pain_mie_origin_country'),
    "region": t('styles.bakery_and_industrial'),
    "period": t('styles.pain_mie_origin_period')
  },
  "intro": t('styles.pain_mie_intro'),
  "history": t('styles.pain_mie_history'),
  "culturalContext": {
    "significance": [
      t('styles.pain_mie_sig_1'),
      t('styles.pain_mie_sig_2'),
      t('styles.pain_mie_sig_3'),
      t('styles.pain_mie_sig_4'),
      t('styles.pain_mie_sig_5')
    ],
    "consumptionContext": [
      t('styles.pain_mie_cons_1'),
      t('styles.pain_mie_cons_2'),
      t('styles.pain_mie_cons_3'),
      t('styles.pain_mie_cons_4'),
      t('styles.pain_mie_cons_5')
    ],
    "evolution": [
      t('styles.pain_mie_evo_1'),
      t('styles.pain_mie_evo_2'),
      t('styles.pain_mie_evo_3'),
      t('styles.pain_mie_evo_4'),
      t('styles.pain_mie_evo_5'),
      t('styles.pain_mie_evo_6')
    ],
    "rituals": [
      t('styles.pain_mie_rit_1'),
      t('styles.pain_mie_rit_2'),
      t('styles.pain_mie_rit_3'),
      t('styles.pain_mie_rit_4'),
      t('styles.pain_mie_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.pain_mie_flav_1'),
      t('styles.pain_mie_flav_2'),
      t('styles.pain_mie_flav_3'),
      t('styles.pain_mie_flav_4'),
      t('styles.pain_mie_flav_5')
    ],
    "aromaProfile": [
      t('styles.pain_mie_aroma_1'),
      t('styles.pain_mie_aroma_2'),
      t('styles.pain_mie_aroma_3'),
      t('styles.pain_mie_aroma_4'),
      t('styles.pain_mie_aroma_5')
    ],
    "textureNotes": [
      t('styles.pain_mie_text_1'),
      t('styles.pain_mie_text_2'),
      t('styles.pain_mie_text_3'),
      t('styles.pain_mie_text_4'),
      t('styles.pain_mie_text_5')
    ],
    "pairingRecommendations": [
      t('styles.pain_mie_pair_1'),
      t('styles.pain_mie_pair_2'),
      t('styles.pain_mie_pair_3'),
      t('styles.pain_mie_pair_4'),
      t('styles.pain_mie_pair_5')
    ],
    "flavorEvolution": [
      t('styles.pain_mie_fevo_1'),
      t('styles.pain_mie_fevo_2'),
      t('styles.pain_mie_fevo_3'),
      t('styles.pain_mie_fevo_4'),
      t('styles.pain_mie_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Often straight dough; can include sponge or poolish.",
    "Hydration: 60-70%"
  ],
  "doughImpact": [
    "Enrichment (Milk, Butter, Sugar) at 10-15% total weight provides the signature tenderness",
    "Medium hydration (60-70%) ensures the dough is firm enough to pressure against the lid",
    "Intense mixing (to full windowpane) is required for the fine, tight honeycomb crumb structure",
    "Inclusion of milk powder or scalded milk deactivates enzymes that could weaken the gluten",
    "Short to medium bulk fermentation prevents the development of large, irregular air pockets"
  ],
  "bakingImpact": [
    "The Lid (Pullman Pan) traps steam inside, effectively 'pressure-baking' the crumb for softness",
    "Baked at moderate temperatures (180-200°C) to achieve a light golden, non-crunchy crust",
    "Strategic under-proofing (filling to 70-80% of pan) allows the dough to 'square off' against the lid",
    "Immediate removal from the pan is CRITICAL to prevent 'sweating' and soggy sidewalls",
    "Lack of oven steam (external) is compensated by the heavy internal steam trapped by the lid"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      70
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      5,
      15
    ],
    "sugarRange": [
      5,
      15
    ],
    "flourStrength": t('styles.bread_or_strong_allpurpose_flour'),
    "fermentation": {
      "bulk": t('styles.pain_mie_ferm_bulk'),
      "proof": t('styles.pain_mie_ferm_proof'),
      "coldRetard": t('styles.optional_overnight_bulk')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.lidded_pans_create_tight_square_crumb_structure')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.sandwich_bread'),
      t('common.toast'),
      "Canapés"
    ]
  },
  "regionalVariants": [
    t('styles.pain_mie_var_1'),
    t('styles.pain_mie_var_2'),
    t('styles.pain_mie_var_3'),
    t('styles.pain_mie_var_4'),
    t('styles.pain_mie_var_5')
  ],
  "climateScenarios": [
    t('styles.pain_mie_clim_1'),
    t('styles.pain_mie_clim_2'),
    t('styles.pain_mie_clim_3'),
    t('styles.pain_mie_clim_4')
  ],
  "styleComparisons": [
    t('styles.pain_mie_comp_1'),
    t('styles.pain_mie_comp_2'),
    t('styles.pain_mie_comp_3'),
    t('styles.pain_mie_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.pain_mie_sens_1'),
    t('styles.pain_mie_sens_2'),
    t('styles.pain_mie_sens_3'),
    t('styles.pain_mie_sens_4'),
    t('styles.pain_mie_sens_5')
  ],
  "risks": [
    t('styles.pain_mie_risk_1'),
    t('styles.pain_mie_risk_2'),
    t('styles.pain_mie_risk_3'),
    t('styles.pain_mie_risk_4'),
    t('styles.pain_mie_risk_5')
  ],
  "notes": [
    t('styles.pain_mie_note_1'),
    t('styles.pain_mie_note_2'),
    t('styles.pain_mie_note_3'),
    t('styles.pain_mie_note_4'),
    t('styles.pain_mie_note_5')
  ],
  "tags": [
    t('common.sandwich_bread'),
    t('common.toast'),
    "Canapés",
    t('common.bread'),
    "France/USA"
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
      "title": t('styles.pain_mie_title'),
      "url": "https://www.wiley.com/en-us/Professional+Baking%2C+7th+Edition-p-9781119148449",
      "author": "Wayne Gisslen",
      "year": 2017
    },
    {
      "title": t('styles.modernist_bread_14'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": t('styles.pain_mie_title'),
      "url": "https://www.kingarthurbaking.com/blog/2018/02/12/how-to-use-a-pullman-loaf-pan",
      "author": "King Arthur Baking",
      "year": 2018
    },
    {
      "title": t('styles.pain_mie_title'),
      "url": "https://www.worldcat.org/title/larousse-gastronomique-the-worlds-greatest-culinary-encyclopedia/",
      "author": "Librairie Larousse",
      "year": 2001
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.pain_mie_faq_1_q'),
      "answer": t('styles.pain_mie_faq_1_a')
    },
    {
      "question": t('styles.pain_mie_faq_2_q'),
      "answer": t('styles.pain_mie_faq_2_a')
    },
    {
      "question": t('styles.pain_mie_faq_3_q'),
      "answer": t('styles.pain_mie_faq_3_a')
    },
    {
      "question": t('styles.pain_mie_faq_4_q'),
      "answer": t('styles.pain_mie_faq_4_a')
    },
    {
      "question": t('styles.pain_mie_faq_5_q'),
      "answer": t('styles.pain_mie_faq_5_a')
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
