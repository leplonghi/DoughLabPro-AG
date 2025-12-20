import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pao_frances_brazil: StyleDefinition = {
  "id": "pao_frances_brazil",
  "title": t('styles.pao_frances_title'),
  "subtitle": t('styles.brazilian_professional_breads_3'),
  "category": t('styles.bread_20'),
  "family": t('styles.brazilian_professional_breads_4'),
  "variantName": t('styles.pao_frances_variantName'),
  "origin": {
    "country": t('styles.brazil_2'),
    "region": t('styles.nationwide_4'),
    "period": t('styles.pao_frances_origin_period')
  },
  "intro": t('styles.pao_frances_intro'),
  "history": t('styles.pao_frances_history'),
  "culturalContext": {
    "significance": [
      t('styles.pao_frances_sig_1'),
      t('styles.pao_frances_sig_2'),
      t('styles.pao_frances_sig_3'),
      t('styles.pao_frances_sig_4'),
      t('styles.pao_frances_sig_5')
    ],
    "consumptionContext": [
      t('styles.pao_frances_cons_1'),
      t('styles.pao_frances_cons_2'),
      t('styles.pao_frances_cons_3'),
      t('styles.pao_frances_cons_4'),
      t('styles.pao_frances_cons_5')
    ],
    "evolution": [
      t('styles.pao_frances_evo_1'),
      t('styles.pao_frances_evo_2'),
      t('styles.pao_frances_evo_3'),
      t('styles.pao_frances_evo_4'),
      t('styles.pao_frances_evo_5'),
      t('styles.pao_frances_evo_6')
    ],
    "rituals": [
      t('styles.pao_frances_rit_1'),
      t('styles.pao_frances_rit_2'),
      t('styles.pao_frances_rit_3'),
      t('styles.pao_frances_rit_4'),
      t('styles.pao_frances_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.pao_frances_flav_1'),
      t('styles.pao_frances_flav_2'),
      t('styles.pao_frances_flav_3'),
      t('styles.pao_frances_flav_4'),
      t('styles.pao_frances_flav_5')
    ],
    "aromaProfile": [
      t('styles.pao_frances_aroma_1'),
      t('styles.pao_frances_aroma_2'),
      t('styles.pao_frances_aroma_3'),
      t('styles.pao_frances_aroma_4'),
      t('styles.pao_frances_aroma_5')
    ],
    "textureNotes": [
      t('styles.pao_frances_text_1'),
      t('styles.pao_frances_text_2'),
      t('styles.pao_frances_text_3'),
      t('styles.pao_frances_text_4'),
      t('styles.pao_frances_text_5')
    ],
    "pairingRecommendations": [
      t('styles.pao_frances_pair_1'),
      t('styles.pao_frances_pair_2'),
      t('styles.pao_frances_pair_3'),
      t('styles.pao_frances_pair_4'),
      t('styles.pao_frances_pair_5')
    ],
    "flavorEvolution": [
      t('styles.pao_frances_fevo_1'),
      t('styles.pao_frances_fevo_2'),
      t('styles.pao_frances_fevo_3'),
      t('styles.pao_frances_fevo_4'),
      t('styles.pao_frances_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Direct dough or sponge methods depending on bakery line.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [
    "Moderate hydration (60-65%) is key to maintaining the structural integrity of the 'pestana'",
    "Intensive mixing (reaching full gluten development) is required for the ultra-light 'cotton' crumb",
    "Use of ice-cold water is mandatory to control dough temperature during high-speed mixing",
    "Small amounts of sugar/malt (1-3%) assist in rapid browning for the thin crust",
    "Professional 'improvers' (enzymes/ascorbic acid) are standard in Brazil to ensure volume and 'ear' lift"
  ],
  "bakingImpact": [
    "High initial deck heat (230-260°C) induces rapid oven spring and 'pestana' opening",
    "Massive steam injection during the first 5 seconds is CRITICAL for the thin, brittle crust",
    "A short, high-heat bake (12-15 mins) prevents the interior from drying out",
    "Baked on perforated trays to ensure even heat circulation around the small rolls",
    "Immediate removal from the tray prevents 'sweat' and preserves the crispy bottom"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      65
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": t('styles.brazilian_bread_flour_w_280330'),
    "fermentation": {
      "bulk": t('styles.short_to_medium_bulk_often_in_continuous_processes'),
      "proof": t('styles.pao_frances_ferm_proof'),
      "coldRetard": t('styles.sometimes_used_to_manage_production')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        260
      ],
      "notes": t('styles.strong_steam_early_in_bake_to_create_thin_crisp_cr')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.breakfast_rolls'),
      t('common.sandwiches'),
      t('common.everyday_bread')
    ]
  },
  "regionalVariants": [
    t('styles.pao_frances_var_1'),
    t('styles.pao_frances_var_2'),
    t('styles.pao_frances_var_3'),
    t('styles.pao_frances_var_4'),
    t('styles.pao_frances_var_5')
  ],
  "climateScenarios": [
    t('styles.pao_frances_clim_1'),
    t('styles.pao_frances_clim_2'),
    t('styles.pao_frances_clim_3'),
    t('styles.pao_frances_clim_4')
  ],
  "styleComparisons": [
    t('styles.pao_frances_comp_1'),
    t('styles.pao_frances_comp_2'),
    t('styles.pao_frances_comp_3'),
    t('styles.pao_frances_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.pao_frances_sens_1'),
    t('styles.pao_frances_sens_2'),
    t('styles.pao_frances_sens_3'),
    t('styles.pao_frances_sens_4'),
    t('styles.pao_frances_sens_5')
  ],
  "risks": [
    t('styles.pao_frances_risk_1'),
    t('styles.pao_frances_risk_2'),
    t('styles.pao_frances_risk_3'),
    t('styles.pao_frances_risk_4'),
    t('styles.pao_frances_risk_5')
  ],
  "notes": [
    t('styles.pao_frances_note_1'),
    t('styles.pao_frances_note_2'),
    t('styles.pao_frances_note_3'),
    t('styles.pao_frances_note_4'),
    t('styles.pao_frances_note_5')
  ],
  "tags": [
    t('common.breakfast_rolls'),
    t('common.sandwiches'),
    t('common.everyday_bread'),
    t('common.bread'),
    t('common.brazil')
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
      "title": t('styles.pao_frances_title'),
      "url": "https://www.abntcatalogo.com.br/norma.aspx?ID=305710",
      "author": "ABNT",
      "year": 2013
    },
    {
      "title": t('styles.pao_frances_title'),
      "url": "https://www.sp.senai.br/unidades/alimentos",
      "author": "SENAI-SP",
      "year": 2018
    },
    {
      "title": t('styles.pao_frances_title'),
      "url": "https://www.amazon.com.br/Hist%C3%B3ria-Gastronomia-Brasileira-Ricardo-Marinh%C3%A3o/dp/8574581755",
      "author": "Ricardo Maranhão",
      "year": 2005
    },
    {
      "title": t('styles.pao_frances_title'),
      "url": "https://www.abip.org.br/",
      "author": "ABIP",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.pao_frances_faq_1_q'),
      "answer": t('styles.pao_frances_faq_1_a')
    },
    {
      "question": t('styles.pao_frances_faq_2_q'),
      "answer": t('styles.pao_frances_faq_2_a')
    },
    {
      "question": t('styles.pao_frances_faq_3_q'),
      "answer": t('styles.pao_frances_faq_3_a')
    },
    {
      "question": t('styles.pao_frances_faq_4_q'),
      "answer": t('styles.pao_frances_faq_4_a')
    },
    {
      "question": t('styles.pao_frances_faq_5_q'),
      "answer": t('styles.pao_frances_faq_5_a')
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
