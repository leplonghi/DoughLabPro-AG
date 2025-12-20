import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pao_de_leite_brazil: StyleDefinition = {
  "id": "pao_de_leite_brazil",
  "title": t('styles.pao_leite_title'),
  "subtitle": t('styles.brazilian_professional_breads'),
  "category": t('styles.bread_19'),
  "family": t('styles.brazilian_professional_breads_2'),
  "variantName": t('styles.pao_leite_variantName'),
  "origin": {
    "country": t('styles.brazil'),
    "region": t('styles.nationwide_3'),
    "period": t('styles.pao_leite_origin_period')
  },
  "intro": t('styles.pao_leite_intro'),
  "history": t('styles.pao_leite_history'),
  "culturalContext": {
    "significance": [
      t('styles.pao_leite_sig_1'),
      t('styles.pao_leite_sig_2'),
      t('styles.pao_leite_sig_3'),
      t('styles.pao_leite_sig_4'),
      t('styles.pao_leite_sig_5')
    ],
    "consumptionContext": [
      t('styles.pao_leite_cons_1'),
      t('styles.pao_leite_cons_2'),
      t('styles.pao_leite_cons_3'),
      t('styles.pao_leite_cons_4'),
      t('styles.pao_leite_cons_5')
    ],
    "evolution": [
      t('styles.pao_leite_evo_1'),
      t('styles.pao_leite_evo_2'),
      t('styles.pao_leite_evo_3'),
      t('styles.pao_leite_evo_4'),
      t('styles.pao_leite_evo_5'),
      t('styles.pao_leite_evo_6')
    ],
    "rituals": [
      t('styles.pao_leite_rit_1'),
      t('styles.pao_leite_rit_2'),
      t('styles.pao_leite_rit_3'),
      t('styles.pao_leite_rit_4'),
      t('styles.pao_leite_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.pao_leite_flav_1'),
      t('styles.pao_leite_flav_2'),
      t('styles.pao_leite_flav_3'),
      t('styles.pao_leite_flav_4'),
      t('styles.pao_leite_flav_5')
    ],
    "aromaProfile": [
      t('styles.pao_leite_aroma_1'),
      t('styles.pao_leite_aroma_2'),
      t('styles.pao_leite_aroma_3'),
      t('styles.pao_leite_aroma_4'),
      t('styles.pao_leite_aroma_5')
    ],
    "textureNotes": [
      t('styles.pao_leite_text_1'),
      t('styles.pao_leite_text_2'),
      t('styles.pao_leite_text_3'),
      t('styles.pao_leite_text_4'),
      t('styles.pao_leite_text_5')
    ],
    "pairingRecommendations": [
      t('styles.pao_leite_pair_1'),
      t('styles.pao_leite_pair_2'),
      t('styles.pao_leite_pair_3'),
      t('styles.pao_leite_pair_4'),
      t('styles.pao_leite_pair_5')
    ],
    "flavorEvolution": [
      t('styles.pao_leite_fevo_1'),
      t('styles.pao_leite_fevo_2'),
      t('styles.pao_leite_fevo_3'),
      t('styles.pao_leite_fevo_4'),
      t('styles.pao_leite_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Most often straight dough; sponge methods possible.",
    "Hydration: 60-70%"
  ],
  "doughImpact": [
    "High enrichment (milk, sugar, and fat) creates the signature tender, non-chewy bite",
    "Moderate hydration (60-65%) ensures the dough can be shaped into tight rolls or braids",
    "Intense mechanical mixing (often using a 'Cilindro' in Brazil) is needed for the ultra-fine crumb",
    "Lower salt levels (around 1.5%) allow the sweetness and lactic flavors to dominate",
    "Addition of milk powder (optional) can further soften the crumb and enhance the aroma"
  ],
  "bakingImpact": [
    "Lower oven temperatures (170-185°C) ensure the bread cooks through without burning the sugars",
    "Heavy egg wash creates the iconic deep-mahogany, high-gloss finish",
    "Steam is rarely used; the focus is on a soft skin rather than a hard crust",
    "Baking in close proximity in the pan ('pull-apart') keeps the sides soft and pale",
    "Quick cooling on a covered rack prevents the thin crust from drying out and becoming tough"
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
      8,
      20
    ],
    "flourStrength": t('styles.brazilian_bread_flour_or_strong_allpurpose'),
    "fermentation": {
      "bulk": t('styles.pao_leite_ferm_bulk'),
      "proof": t('styles.pao_leite_ferm_proof'),
      "coldRetard": t('styles.optional_bulk_or_shaped_retard')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        175,
        195
      ],
      "notes": t('styles.often_finished_with_egg_wash_or_sugar_toppings')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.sweet_rolls'),
      t('common.milk_bread_loaves'),
      t('common.snack_sandwiches')
    ]
  },
  "regionalVariants": [
    t('styles.pao_leite_var_1'),
    t('styles.pao_leite_var_2'),
    t('styles.pao_leite_var_3'),
    t('styles.pao_leite_var_4'),
    t('styles.pao_leite_var_5')
  ],
  "climateScenarios": [
    t('styles.pao_leite_clim_1'),
    t('styles.pao_leite_clim_2'),
    t('styles.pao_leite_clim_3'),
    t('styles.pao_leite_clim_4')
  ],
  "styleComparisons": [
    t('styles.pao_leite_comp_1'),
    t('styles.pao_leite_comp_2'),
    t('styles.pao_leite_comp_3'),
    t('styles.pao_leite_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.pao_leite_sens_1'),
    t('styles.pao_leite_sens_2'),
    t('styles.pao_leite_sens_3'),
    t('styles.pao_leite_sens_4'),
    t('styles.pao_leite_sens_5')
  ],
  "risks": [
    t('styles.pao_leite_risk_1'),
    t('styles.pao_leite_risk_2'),
    t('styles.pao_leite_risk_3'),
    t('styles.pao_leite_risk_4'),
    t('styles.pao_leite_risk_5')
  ],
  "notes": [
    t('styles.pao_leite_note_1'),
    t('styles.pao_leite_note_2'),
    t('styles.pao_leite_note_3'),
    t('styles.pao_leite_note_4'),
    t('styles.pao_leite_note_5')
  ],
  "tags": [
    t('common.sweet_rolls'),
    t('common.milk_bread_loaves'),
    t('common.snack_sandwiches'),
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
      "title": t('styles.pao_leite_title'),
      "url": "https://www.sp.senai.br/",
      "author": "SENAI São Paulo",
      "year": 2021
    },
    {
      "title": t('styles.pao_leite_title'),
      "url": "https://www.abip.org.br/",
      "author": "ABIP (Associação Brasileira da Indústria de Panificação)",
      "year": 2022
    },
    {
      "title": t('styles.pao_leite_title'),
      "url": "https://www.amazon.com/Pao-Nosso-receitas-tecnicas-panificacao-caseira/dp/8565339233",
      "author": "Luiz Américo Camargo",
      "year": 2017
    },
    {
      "title": t('styles.pao_leite_title'),
      "url": "https://www.casadopadeiro.com.br/",
      "author": "Alispec Technical Team",
      "year": 2020
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.pao_leite_faq_1_q'),
      "answer": t('styles.pao_leite_faq_1_a')
    },
    {
      "question": t('styles.pao_leite_faq_2_q'),
      "answer": t('styles.pao_leite_faq_2_a')
    },
    {
      "question": t('styles.pao_leite_faq_3_q'),
      "answer": t('styles.pao_leite_faq_3_a')
    },
    {
      "question": t('styles.pao_leite_faq_4_q'),
      "answer": t('styles.pao_leite_faq_4_a')
    },
    {
      "question": t('styles.pao_leite_faq_5_q'),
      "answer": t('styles.pao_leite_faq_5_a')
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
