import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const vollkornbrot_100_rye: StyleDefinition = {
  "id": "vollkornbrot_100_rye",
  "title": "100% Rye Vollkornbrot",
  "subtitle": t('styles.wholegrain__rye_3'),
  "category": t('styles.bread_26'),
  "family": t('styles.wholegrain__rye_4'),
  "variantName": "100% Rye Vollkornbrot",
  "origin": {
    "country": t('styles.germany_3'),
    "region": t('styles.central_europe_2'),
    "period": t('styles.traditional_11')
  },
  "intro": "Served as thin slices with butter, cheese, cured meats and spreads; popular in northern European diets.",
  "history": "Vollkornbrot is a dense, wholegrain rye bread made with coarse meals and sourdough, designed for long keeping and high nutrition.",
  "technicalFoundations": [
    "Strong rye sourdough build is essential.",
    "Hydration: 90-100%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      90,
      100
    ],
    "saltRange": [
      1.8,
      2
    ],
    "oilRange": [
      0,
      3
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": "100% rye wholegrain or mixed rye meals",
    "fermentation": {
      "bulk": t('styles.minimal_bulk_dough_is_more_like_a_paste'),
      "proof": "60–120 min in pans",
      "coldRetard": t('styles.sometimes_retarded_to_manage_scheduling')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        180,
        210
      ],
      "notes": t('styles.long_gentle_bake_bread_often_matured_24_h_before_s')
    },
    "difficulty": t('styles.expert_10'),
    "recommendedUse": [
      t('common.dense_wholegrain_rye_bread'),
      t('common.long_keeping_breads')
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.dense_wholegrain_rye_bread'),
    t('common.long_keeping_breads'),
    t('common.bread'),
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
      "title": t('styles.bread__jeffrey_hamelman_6'),
      "url": ""
    },
    {
      "title": t('styles.german_wholegrain_bread_traditions'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official"
};