import { BakeType, DoughStylePreset, RecipeStyle } from '@/types';
import { STYLES_DATA, getStyleById as getRegistryStyleById } from '@/data/styles/registry';

const getBakeTypeFromCategory = (categoryRaw: string): BakeType => {
  const category = categoryRaw.toLowerCase();
  if (['pizza', 'calzone'].includes(category)) return BakeType.PIZZAS;
  if (['pastry', 'cookie', 'cookies', 'cookies_confectionery', 'enriched_bread', 'sweet'].includes(category)) {
    return BakeType.SWEETS_PASTRY;
  }
  return BakeType.BREADS_SAVORY;
};

const getIngredientPct = (style: (typeof STYLES_DATA)[number], keywords: string[]): number => {
  if (!style.base_formula) return 0;
  const ingredient = style.base_formula.find((item) =>
    keywords.some((keyword) => item.name.toLowerCase().includes(keyword)),
  );
  return ingredient ? ingredient.percentage : 0;
};

export const DOUGH_STYLE_PRESETS: DoughStylePreset[] = STYLES_DATA.map((style) => {
  let type = getBakeTypeFromCategory(style.category);

  if (style.recipeStyle === RecipeStyle.BRIOCHE) type = BakeType.SWEETS_PASTRY;
  if (style.recipeStyle === RecipeStyle.BURGER_BUN) type = BakeType.BREADS_SAVORY;

  const hydration = (style.technicalProfile.hydration[0] + style.technicalProfile.hydration[1]) / 2;
  const salt = (style.technicalProfile.salt[0] + style.technicalProfile.salt[1]) / 2;
  const oil =
    getIngredientPct(style, ['oil', 'azeite', 'butter', 'fat']) ||
    (style.technicalProfile.oil ? (style.technicalProfile.oil[0] + style.technicalProfile.oil[1]) / 2 : 0);
  const sugar =
    getIngredientPct(style, ['sugar', 'honey', 'malt']) ||
    (style.technicalProfile.sugar ? (style.technicalProfile.sugar[0] + style.technicalProfile.sugar[1]) / 2 : 0);
  const yeast = getIngredientPct(style, ['yeast', 'levain', 'starter', 'fermento']) || 0.2;

  return {
    id: style.id,
    name: style.name,
    type,
    recipeStyle: style.recipeStyle || RecipeStyle.NEAPOLITAN,
    defaultHydration: hydration,
    defaultSalt: salt,
    defaultOil: oil,
    defaultSugar: sugar,
    defaultYeastPct: yeast,
    region: style.origin.region || style.origin.country,
    country: style.origin.country,
    description: style.description,
  };
});

export const getCalculatorStyleById = getRegistryStyleById;
