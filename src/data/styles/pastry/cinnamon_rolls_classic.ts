import { StyleDefinition } from '../../../types/styleDefinition';
import { useTranslation } from '@/i18n';

export const cinnamon_rolls_classic: StyleDefinition = {
  "id": "cinnamon_rolls_classic",
  "title": t('styles.classic_cinnamon_rolls'),
  "subtitle": t('styles.enriched_sweet_doughs_3'),
  "category": t('styles.pastry_3'),
  "family": t('styles.enriched_sweet_doughs_4'),
  "variantName": t('styles.classic_cinnamon_rolls_2'),
  "origin": {
    "country": "United States/Northern Europe",
    "region": t('styles.multiple'),
    "period": "20th century"
  },
  "intro": t('styles.common_as_a_breakfast_or_coffeeshop_pastry_in_many'),
  "history": "Cinnamon rolls are enriched, sweet yeasted dough spirals filled with cinnamon sugar and often topped with icing.",
  "technicalFoundations": [
    "Usually straight dough; some formulas use sponges.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [],
  "bakingImpact": [],
  "technicalProfile": {
    "hydrationRange": [
      60,
      65
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      15,
      25
    ],
    "sugarRange": [
      15,
      25
    ],
    "flourStrength": t('styles.bread_or_strong_allpurpose_flour_2'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–90 min after shaping in pans",
      "coldRetard": t('styles.frequently_retarded_overnight_for_convenience')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        175,
        190
      ],
      "notes": t('styles.bake_until_set_but_still_soft_icing_added_after_ba')
    },
    "difficulty": t('styles.medium_26'),
    "recommendedUse": [
      t('common.breakfast_pastry'),
      "Coffee-shop pastry"
    ]
  },
  "regionalVariants": [],
  "climateScenarios": [],
  "styleComparisons": [],
  "parameterSensitivity": [],
  "risks": [],
  "notes": [],
  "tags": [
    t('common.breakfast_pastry'),
    "Coffee-shop pastry",
    t('common.pastry'),
    "United States/Northern Europe"
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
      "title": t('styles.aib_sweet_dough_guidelines'),
      "url": ""
    },
    {
      "title": t('styles.modernist_bread_24'),
      "url": ""
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [],
  "isCanonical": true,
  "source": "official",
  "base_formula": [
    { "name": t('styles.bread_flour_3'), "percentage": 100, "category": "base", "role": "flour" },
    { "name": t('styles.whole_milk_3'), "percentage": 65, "hydrationContent": 0.87, "category": "liquid", "role": "other" },
    { "name": t('styles.sugar_3'), "percentage": 15, "category": "sugar", "role": "sugar" },
    { "name": "Butter (Soft)", "percentage": 15, "hydrationContent": 0.15, "category": "fat", "role": "fat" },
    { "name": t('styles.whole_egg_2'), "percentage": 10, "hydrationContent": 0.74, "category": "liquid", "role": "other" },
    { "name": t('styles.instant_yeast_2'), "percentage": 1.5, "role": "yeast" },
    { "name": t('styles.salt_4'), "percentage": 2, "role": "salt" },
    { "name": t('styles.filling_brown_sugar_2'), "percentage": 25, "role": "other" },
    { "name": t('styles.filling_cinnamon_2'), "percentage": 2.5, "role": "other" },
    { "name": t('styles.filling_butter_2'), "percentage": 10, "role": "other" },
    { "name": t('styles.frosting_cream_cheese_2'), "percentage": 20, "role": "other" },
    { "name": t('styles.frosting_powdered_sugar_2'), "percentage": 15, "role": "other" }
  ]
};
