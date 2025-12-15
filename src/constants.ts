
import {
  AmbientTemperature,
  BakeType,
  RecipeStyle,
  YeastType,
  DoughConfig,
  UnitSystem,
  FermentationTechnique,
  DoughStylePreset
} from '@/types';
import i18n from '@/i18n';

export const AMBIENT_TEMPERATURE_OPTIONS = [
  { value: AmbientTemperature.COLD, labelKey: 'calculator.temp_cold', tempRange: '< 18°C' },
  { value: AmbientTemperature.MILD, labelKey: 'calculator.temp_mild', tempRange: '18°C - 24°C' },
  { value: AmbientTemperature.HOT, labelKey: 'calculator.temp_hot', tempRange: '> 24°C' },
];

export const YEAST_OPTIONS = [
  { value: YeastType.IDY, label: 'Instant Dry Yeast (IDY)' },
  { value: YeastType.ADY, label: 'Active Dry Yeast (ADY)' },
  { value: YeastType.FRESH, label: 'Fresh Yeast (CY)' },
  { value: YeastType.SOURDOUGH_STARTER, label: 'Sourdough Starter (Liquid)' },
  { value: YeastType.USER_LEVAIN, label: 'My Custom Levain' },
];

export const YEAST_EQUIVALENCIES = {
  IDY_TO_ADY: 1.25,
  IDY_TO_FRESH: 3.0,
  ADY_TO_IDY: 0.8,
  FRESH_TO_IDY: 0.33,
};

export const DOUGH_WEIGHT_RANGES: Partial<Record<RecipeStyle, string>> = {
  [RecipeStyle.NEAPOLITAN]: '200g - 280g',
  [RecipeStyle.NEW_YORK]: '300g - 650g',
  [RecipeStyle.PAN_PIZZA]: '400g - 900g',
  [RecipeStyle.ROMANA_TONDA]: '180g - 250g',
  [RecipeStyle.ROMAN]: '900g - 1500g', // Teglia
  [RecipeStyle.DETROIT]: '350g - 600g',
  [RecipeStyle.CIABATTA]: '80g - 400g',
  [RecipeStyle.BAGUETTE]: '300g - 350g',
  [RecipeStyle.BURGER_BUN]: '80g - 120g',
  [RecipeStyle.BRIOCHE]: '400g - 600g',
  [RecipeStyle.FOCACCIA]: '600g - 2000g',
  [RecipeStyle.SOURDOUGH]: '800g - 1200g',
};

export const DEFAULT_CONFIG: DoughConfig = {
  recipeStyle: RecipeStyle.NEAPOLITAN,
  bakeType: BakeType.PIZZAS,
  numPizzas: 4,
  doughBallWeight: 250,
  hydration: 65,
  salt: 3.0,
  yeastPercentage: 0.2, // Default for 24h
  oil: 0,
  sugar: 0,
  yeastType: YeastType.IDY,
  fermentationTechnique: FermentationTechnique.DIRECT,
  ambientTemperature: AmbientTemperature.MILD,
  bakingTempC: 430,
  scale: 1,
  flourId: 'generic',
  prefermentFlourPercentage: 20, // Default for Biga/Poolish
  notes: '',
  ingredients: [],
};

// --- DYNAMIC STYLE LOADING ---
import { STYLES_DATA } from '@/data/styles/registry';

const getBakeTypeFromCategory = (catRaw: string): BakeType => {
  const cat = catRaw.toLowerCase();
  if (['pizza', 'calzone'].includes(cat)) return BakeType.PIZZAS;
  if (['pastry', 'cookie', 'cookies', 'cookies_confectionery', 'enriched_bread', 'sweet'].includes(cat)) return BakeType.SWEETS_PASTRY;
  return BakeType.BREADS_SAVORY; // bread, flatbread, burger_bun, other
};

const getIngredientPct = (style: any, keywords: string[]): number => {
  if (!style.base_formula) return 0;
  const ing = style.base_formula.find((i: any) =>
    keywords.some(k => i.name.toLowerCase().includes(k))
  );
  return ing ? ing.percentage : 0;
};

export const DOUGH_STYLE_PRESETS: DoughStylePreset[] = STYLES_DATA.map(style => {
  // Determine Type
  let type = getBakeTypeFromCategory(style.category);

  // Specific Overrides based on RecipeStyle if Category is ambiguous
  if (style.recipeStyle === RecipeStyle.BRIOCHE) type = BakeType.SWEETS_PASTRY;
  if (style.recipeStyle === RecipeStyle.BURGER_BUN) type = BakeType.BREADS_SAVORY;

  // Calculate Defaults (Average of Range)
  const hydration = (style.technicalProfile.hydration[0] + style.technicalProfile.hydration[1]) / 2;
  const salt = (style.technicalProfile.salt[0] + style.technicalProfile.salt[1]) / 2;

  // Extract or Default others
  // If base_formula is present, priority to it. Else, legacy defaults.
  const oilPct = getIngredientPct(style, ['oil', 'azeite', 'butter', 'fat']) ||
    (style.technicalProfile.oil ? (style.technicalProfile.oil[0] + style.technicalProfile.oil[1]) / 2 : 0);

  const sugarPct = getIngredientPct(style, ['sugar', 'honey', 'malt', 'sugar']) ||
    (style.technicalProfile.sugar ? (style.technicalProfile.sugar[0] + style.technicalProfile.sugar[1]) / 2 : 0);

  const yeastPct = getIngredientPct(style, ['yeast', 'levain', 'starter', 'fermento']) || 0.2; // Default low

  return {
    id: style.id,
    name: style.name,
    type: type,
    recipeStyle: style.recipeStyle || RecipeStyle.NEAPOLITAN,
    defaultHydration: hydration,
    defaultSalt: salt,
    defaultOil: oilPct,
    defaultSugar: sugarPct,
    defaultYeastPct: yeastPct,
    region: style.origin.region || style.origin.country,
    description: style.description,
  };
});

export const ENVIRONMENT_TEMPERATURE_GUIDELINES = {
  [AmbientTemperature.COLD]: {
    yeastAdjustment: 1.25,
    notes: i18n.t('ui.fermentation_will_be_slower')
  },
  [AmbientTemperature.MILD]: {
    yeastAdjustment: 1.0,
    notes: i18n.t('ui.ideal_temperature_for_most_standard_recipes')
  },
  [AmbientTemperature.HOT]: {
    yeastAdjustment: 0.7,
    notes: i18n.t('ui.fermentation_will_be_faster_consider_using_cold_wa')
  }
};
