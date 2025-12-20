import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pao_sovado_brazil: StyleDefinition = {
  "id": "pao_sovado_brazil",
  "title": t('styles.pão_sovado'),
  "subtitle": t('styles.brazilian_professional_breads_5'),
  "category": t('styles.bread_21'),
  "family": t('styles.brazilian_professional_breads_6'),
  "variantName": t('styles.pão_sovado_2'),
  "origin": {
    "country": t('styles.brazil_3'),
    "region": t('styles.various_regions'),
    "period": t('styles.traditional_8')
  },
  "intro": t('styles.popular_in_bakeries_and_home_consumption_as_a_brea'),
  "history": t('styles.pao_sovado_history'),
  "culturalContext": {
    "significance": [
      t('styles.pao_sovado_sig_1'),
      t('styles.pao_sovado_sig_2'),
      t('styles.pao_sovado_sig_3'),
      t('styles.pao_sovado_sig_4'),
      t('styles.pao_sovado_sig_5')
    ],
    "consumptionContext": [
      t('styles.pao_sovado_cons_1'),
      t('styles.pao_sovado_cons_2'),
      t('styles.pao_sovado_cons_3'),
      t('styles.pao_sovado_cons_4'),
      t('styles.pao_sovado_cons_5')
    ],
    "evolution": [
      t('styles.pao_sovado_evo_1'),
      t('styles.pao_sovado_evo_2'),
      t('styles.pao_sovado_evo_3'),
      t('styles.pao_sovado_evo_4'),
      t('styles.pao_sovado_evo_5'),
      t('styles.pao_sovado_evo_6')
    ],
    "rituals": [
      t('styles.pao_sovado_rit_1'),
      t('styles.pao_sovado_rit_2'),
      t('styles.pao_sovado_rit_3'),
      t('styles.pao_sovado_rit_4'),
      t('styles.pao_sovado_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.pao_sovado_flav_1'),
      t('styles.pao_sovado_flav_2'),
      t('styles.pao_sovado_flav_3'),
      t('styles.pao_sovado_flav_4'),
      t('styles.pao_sovado_flav_5')
    ],
    "aromaProfile": [
      t('styles.pao_sovado_aroma_1'),
      t('styles.pao_sovado_aroma_2'),
      t('styles.pao_sovado_aroma_3'),
      t('styles.pao_sovado_aroma_4'),
      t('styles.pao_sovado_aroma_5')
    ],
    "textureNotes": [
      t('styles.pao_sovado_text_1'),
      t('styles.pao_sovado_text_2'),
      t('styles.pao_sovado_text_3'),
      t('styles.pao_sovado_text_4'),
      t('styles.pao_sovado_text_5')
    ],
    "pairingRecommendations": [
      t('styles.pao_sovado_pair_1'),
      t('styles.pao_sovado_pair_2'),
      t('styles.pao_sovado_pair_3'),
      t('styles.pao_sovado_pair_4'),
      t('styles.pao_sovado_pair_5')
    ],
    "flavorEvolution": [
      t('styles.pao_sovado_fevo_1'),
      t('styles.pao_sovado_fevo_2'),
      t('styles.pao_sovado_fevo_3'),
      t('styles.pao_sovado_fevo_4'),
      t('styles.pao_sovado_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Usually straight dough; some use sponge.",
    "Hydration: 60-68%"
  ],
  "doughImpact": [
    "Intensive mechanical degasification (Cilindro) creates the unique bubble-free structure",
    "Moderate enrichment (sugar and fat) provides the characteristic tenderness and shelf-life",
    "Low-to-moderate hydration (60-63%) is critical to allow the dough to pass through the rollers",
    "High protein flour is needed to withstand the 'punishment' of the rolling process",
    "A relatively short bulk fermentation prevents the build-up of large gas pockets"
  ],
  "bakingImpact": [
    "Baked at moderate temperatures (180-195°C) to ensure even heat penetration in a dense loaf",
    "Egg wash or a simple water spray is used for the signature dull-gloss finish",
    "Moderate steam at the start of the bake helps the deep slash to open neatly",
    "Avoid convection (fan) if possible to prevent the crust from becoming too hard/crispy",
    "Must be cooled completely before slicing; the dense crumb needs time to 'set'"
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
      3,
      8
    ],
    "sugarRange": [
      5,
      12
    ],
    "flourStrength": t('styles.brazilian_bread_flour'),
    "fermentation": {
      "bulk": t('styles.pao_sovado_ferm_bulk'),
      "proof": t('styles.pao_sovado_ferm_proof'),
      "coldRetard": t('styles.optional_to_improve_flavor_and_scheduling')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.often_glazed_for_a_slightly_glossy_crust')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.breakfast_bread'),
      t('common.snacks'),
      t('common.sweet_or_savory_fillings')
    ]
  },
  "regionalVariants": [
    t('styles.pao_sovado_var_1'),
    t('styles.pao_sovado_var_2'),
    t('styles.pao_sovado_var_3'),
    t('styles.pao_sovado_var_4'),
    t('styles.pao_sovado_var_5')
  ],
  "climateScenarios": [
    t('styles.pao_sovado_clim_1'),
    t('styles.pao_sovado_clim_2'),
    t('styles.pao_sovado_clim_3'),
    t('styles.pao_sovado_clim_4')
  ],
  "styleComparisons": [
    t('styles.pao_sovado_comp_1'),
    t('styles.pao_sovado_comp_2'),
    t('styles.pao_sovado_comp_3'),
    t('styles.pao_sovado_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.pao_sovado_sens_1'),
    t('styles.pao_sovado_sens_2'),
    t('styles.pao_sovado_sens_3'),
    t('styles.pao_sovado_sens_4'),
    t('styles.pao_sovado_sens_5')
  ],
  "risks": [
    t('styles.pao_sovado_risk_1'),
    t('styles.pao_sovado_risk_2'),
    t('styles.pao_sovado_risk_3'),
    t('styles.pao_sovado_risk_4'),
    t('styles.pao_sovado_risk_5')
  ],
  "notes": [
    t('styles.pao_sovado_note_1'),
    t('styles.pao_sovado_note_2'),
    t('styles.pao_sovado_note_3'),
    t('styles.pao_sovado_note_4'),
    t('styles.pao_sovado_note_5')
  ],
  "tags": [
    t('common.breakfast_bread'),
    t('common.snacks'),
    t('common.sweet_or_savory_fillings'),
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
      "title": t('styles.pao_sovado_title'),
      "url": "https://www.sp.senai.br/",
      "author": "SENAI São Paulo",
      "year": 2021
    },
    {
      "title": t('styles.pao_sovado_title'),
      "url": "https://www.amazon.com/Pao-Nosso-receitas-tecnicas-panificacao-caseira/dp/8565339233",
      "author": "Luiz Américo Camargo",
      "year": 2017
    },
    {
      "title": t('styles.pao_sovado_title'),
      "url": "https://www.editorasaraiva.com.br/",
      "author": "Companhia Editora Nacional",
      "year": 2015
    },
    {
      "title": t('styles.pao_sovado_title'),
      "url": "https://www.abip.org.br/",
      "author": "ABIP Association",
      "year": 2019
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.pao_sovado_faq_1_q'),
      "answer": t('styles.pao_sovado_faq_1_a')
    },
    {
      "question": t('styles.pao_sovado_faq_2_q'),
      "answer": t('styles.pao_sovado_faq_2_a')
    },
    {
      "question": t('styles.pao_sovado_faq_3_q'),
      "answer": t('styles.pao_sovado_faq_3_a')
    },
    {
      "question": t('styles.pao_sovado_faq_4_q'),
      "answer": t('styles.pao_sovado_faq_4_a')
    },
    {
      "question": t('styles.pao_sovado_faq_5_q'),
      "answer": t('styles.pao_sovado_faq_5_a')
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
