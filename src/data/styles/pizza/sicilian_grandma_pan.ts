import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const sicilian_grandma_pan: StyleDefinition = {
  "id": "sicilian_grandma_pan",
  "title": t('styles.sicilian_grandma_pan_title'),
  "subtitle": t('styles.american_pan_pizza_3'),
  "category": t('styles.pizza_13'),
  "family": t('styles.american_pan_pizza_4'),
  "variantName": t('styles.sicilian_grandma_pan_variant'),
  "origin": {
    "country": t('styles.united_states_11'),
    "region": t('styles.italianamerican_communities'),
    "period": "20th century"
  },
  "intro": t('styles.sicilian_grandma_pan_intro'),
  "history": t('styles.sicilian_grandma_pan_history'),
  "technicalFoundations": [
    t('styles.sicilian_grandma_pan_tech_1'),
    t('styles.sicilian_grandma_pan_tech_2')
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      65,
      75
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      3,
      6
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose'),
    "fermentation": {
      "bulk": t('styles.sicilian_grandma_pan_fermentation_bulk'),
      "proof": t('styles.sicilian_grandma_pan_fermentation_proof'),
      "coldRetard": t('styles.optional_1224_h')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        220,
        260
      ],
      "notes": t('styles.baked_in_oiled_rectangular_pans_thickness_depends_')
    },
    "difficulty": t('styles.hard_24'),
    "recommendedUse": [
      t('styles.sicilian_grandma_pan_use_1'),
      t('styles.sicilian_grandma_pan_use_2')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('styles.sicilian_grandma_pan_tag_1'),
    t('styles.sicilian_grandma_pan_tag_2'),
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
      "title": t('styles.modernist_pizza_11'),
      "url": ""
    },
    {
      "title": t('styles.american_pizza_baking_practice'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};