import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pain_de_campagne: StyleDefinition = {
  "id": "pain_de_campagne",
  "title": t('styles.pain_campagne_title'),
  "subtitle": t('styles.french_lean_breads_3'),
  "category": t('styles.bread_15'),
  "family": t('styles.french_lean_breads_4'),
  "variantName": t('styles.pain_campagne_variantName'),
  "origin": {
    "country": t('styles.france_2'),
    "region": t('styles.rural_bakeries'),
    "period": t('styles.traditional_6')
  },
  "intro": t('styles.pain_campagne_intro'),
  "history": t('styles.pain_campagne_history'),
  "culturalContext": {
    "significance": [
      t('styles.pain_campagne_sig_1'),
      t('styles.pain_campagne_sig_2'),
      t('styles.pain_campagne_sig_3'),
      t('styles.pain_campagne_sig_4'),
      t('styles.pain_campagne_sig_5')
    ],
    "consumptionContext": [
      t('styles.pain_campagne_cons_1'),
      t('styles.pain_campagne_cons_2'),
      t('styles.pain_campagne_cons_3'),
      t('styles.pain_campagne_cons_4'),
      t('styles.pain_campagne_cons_5')
    ],
    "evolution": [
      t('styles.pain_campagne_evo_1'),
      t('styles.pain_campagne_evo_2'),
      t('styles.pain_campagne_evo_3'),
      t('styles.pain_campagne_evo_4'),
      t('styles.pain_campagne_evo_5'),
      t('styles.pain_campagne_evo_6')
    ],
    "rituals": [
      t('styles.pain_campagne_rit_1'),
      t('styles.pain_campagne_rit_2'),
      t('styles.pain_campagne_rit_3'),
      t('styles.pain_campagne_rit_4'),
      t('styles.pain_campagne_rit_5')
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.pain_campagne_flav_1'),
      t('styles.pain_campagne_flav_2'),
      t('styles.pain_campagne_flav_3'),
      t('styles.pain_campagne_flav_4'),
      t('styles.pain_campagne_flav_5')
    ],
    "aromaProfile": [
      t('styles.pain_campagne_aroma_1'),
      t('styles.pain_campagne_aroma_2'),
      t('styles.pain_campagne_aroma_3'),
      t('styles.pain_campagne_aroma_4'),
      t('styles.pain_campagne_aroma_5')
    ],
    "textureNotes": [
      t('styles.pain_campagne_text_1'),
      t('styles.pain_campagne_text_2'),
      t('styles.pain_campagne_text_3'),
      t('styles.pain_campagne_text_4'),
      t('styles.pain_campagne_text_5')
    ],
    "pairingRecommendations": [
      t('styles.pain_campagne_pair_1'),
      t('styles.pain_campagne_pair_2'),
      t('styles.pain_campagne_pair_3'),
      t('styles.pain_campagne_pair_4'),
      t('styles.pain_campagne_pair_5')
    ],
    "flavorEvolution": [
      t('styles.pain_campagne_fevo_1'),
      t('styles.pain_campagne_fevo_2'),
      t('styles.pain_campagne_fevo_3'),
      t('styles.pain_campagne_fevo_4'),
      t('styles.pain_campagne_fevo_5')
    ]
  },
  "technicalFoundations": [
    "Levain or pâte fermentée, typically 20–40% of flour.",
    "Hydration: 68-75%"
  ],
  "doughImpact": [
    "Mixed flour profile (white + 10-20% whole grain/rye) provides the signature rustic color and flavor",
    "Medium-high hydration (68-75%) facilitates the open, moist crumb without being too difficult to shape",
    "Natural levain (sourdough) provides the enzymes needed for long fermentation and crust color",
    "Extended bulk fermentation (often with a cold retard) develops organic acids and technical strength",
    "Gentle shaping is required to maintain the irregular gas pockets created during floor time"
  ],
  "bakingImpact": [
    "High initial heat (230-250°C) is critical for 'shattering' the crust and inducing oven spring",
    "Ample steam during the first 10-15 minutes ensures the crust stays flexible for expansion",
    "Direct hearth or Dutch oven baking provides the thermal mass needed for a thick, dark base",
    "The 'Bold Bake': traditionally baked longer and darker than white breads to develop caramelized notes",
    "Venting the steam for the final 20% of the bake hardens the crust and sets the rustic texture"
  ],
  "technicalProfile": {
    "hydrationRange": [
      68,
      75
    ],
    "saltRange": [
      1.8,
      2.1
    ],
    "oilRange": [
      0,
      0
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": t('styles.blend_of_bread_flour_with_1030_wholegrain_or_rye'),
    "fermentation": {
      "bulk": t('styles.pain_campagne_ferm_bulk'),
      "proof": t('styles.pain_campagne_ferm_proof'),
      "coldRetard": t('styles.common_816_h_at_48c')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.works_well_in_dutch_ovens_or_steaminjected_decks')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.country_loaves'),
      t('common.rustic_sandwiches'),
      t('common.toast')
    ]
  },
  "regionalVariants": [
    t('styles.pain_campagne_var_1'),
    t('styles.pain_campagne_var_2'),
    t('styles.pain_campagne_var_3'),
    t('styles.pain_campagne_var_4'),
    t('styles.pain_campagne_var_5')
  ],
  "climateScenarios": [
    t('styles.pain_campagne_clim_1'),
    t('styles.pain_campagne_clim_2'),
    t('styles.pain_campagne_clim_3'),
    t('styles.pain_campagne_clim_4')
  ],
  "styleComparisons": [
    t('styles.pain_campagne_comp_1'),
    t('styles.pain_campagne_comp_2'),
    t('styles.pain_campagne_comp_3'),
    t('styles.pain_campagne_comp_4')
  ],
  "parameterSensitivity": [
    t('styles.pain_campagne_sens_1'),
    t('styles.pain_campagne_sens_2'),
    t('styles.pain_campagne_sens_3'),
    t('styles.pain_campagne_sens_4'),
    t('styles.pain_campagne_sens_5')
  ],
  "risks": [
    t('styles.pain_campagne_risk_1'),
    t('styles.pain_campagne_risk_2'),
    t('styles.pain_campagne_risk_3'),
    t('styles.pain_campagne_risk_4'),
    t('styles.pain_campagne_risk_5')
  ],
  "notes": [
    t('styles.pain_campagne_note_1'),
    t('styles.pain_campagne_note_2'),
    t('styles.pain_campagne_note_3'),
    t('styles.pain_campagne_note_4'),
    t('styles.pain_campagne_note_5')
  ],
  "tags": [
    t('common.country_loaves'),
    t('common.rustic_sandwiches'),
    t('common.toast'),
    t('common.bread'),
    t('common.france')
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
      "title": t('styles.bread__jeffrey_hamelman_3'),
      "url": "https://www.amazon.com/Bread-Bakers-Book-Techniques-Recipes/dp/1118132718",
      "author": "Jeffrey Hamelman",
      "year": 2012
    },
    {
      "title": t('styles.pain_campagne_title'),
      "url": "https://www.poilane.com/pages/our-history",
      "author": "Apollonia Poilâne",
      "year": 2019
    },
    {
      "title": t('styles.pain_campagne_title'),
      "url": "https://www.amazon.com/Tartine-Bread-Chad-Robertson/dp/0811870413",
      "author": "Chad Robertson",
      "year": 2010
    },
    {
      "title": t('styles.pain_campagne_title'),
      "url": "https://www.amazon.fr/Larousse-du-Pain-Eric-Kayser/dp/2035884457",
      "author": "Éric Kayser",
      "year": 2013
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": t('styles.pain_campagne_faq_1_q'),
      "answer": t('styles.pain_campagne_faq_1_a')
    },
    {
      "question": t('styles.pain_campagne_faq_2_q'),
      "answer": t('styles.pain_campagne_faq_2_a')
    },
    {
      "question": t('styles.pain_campagne_faq_3_q'),
      "answer": t('styles.pain_campagne_faq_3_a')
    },
    {
      "question": t('styles.pain_campagne_faq_4_q'),
      "answer": t('styles.pain_campagne_faq_4_a')
    },
    {
      "question": t('styles.pain_campagne_faq_5_q'),
      "answer": t('styles.pain_campagne_faq_5_a')
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
