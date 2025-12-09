
const fs = require('fs');
const path = require('path');

const batchFiles = [
  'styles_batch.json',
  'styles_batch_2.json',
  'styles_batch_3.json',
  'styles_batch_4.json',
  'styles_batch_5.json',
  'styles_batch_6.json',
  'styles_batch_7.json',
  'styles_batch_8_reworked.json'
];

let allStyles = [];
const seenIds = new Set();

for (const file of batchFiles) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    try {
      const styles = JSON.parse(content);
      styles.forEach(style => {
         const existingIndex = allStyles.findIndex(s => s.id === style.id);
         if (existingIndex >= 0) {
           allStyles[existingIndex] = style;
         } else {
           allStyles.push(style);
         }
      });
    } catch (e) {
      console.error(`Error parsing ${file}:`, e);
    }
  }
}

// Convert to the TypeScript file content
const tsContent = `
import { DoughStyleDefinition, FermentationTechnique, RecipeStyle, BakeType, IngredientConfig } from '../types';

// Raw Canonical Data provided
export const RAW_CANONICAL_STYLES = ${JSON.stringify(allStyles, null, 2)};

export function mapRawStyleToDoughStyleDefinition(raw: any): DoughStyleDefinition {
  // Determine RecipeStyle Enum Mapping
  let recipeStyle = RecipeStyle.NEAPOLITAN; // Default fallback

  const id = raw.id;
  const cat = raw.category;

  // Mapping logic based on ID or Category
  if (id.includes('neapolitan')) recipeStyle = RecipeStyle.NEAPOLITAN;
  else if (id.includes('canotto')) recipeStyle = RecipeStyle.NEAPOLITAN; 
  else if (id.includes('new_york')) recipeStyle = RecipeStyle.NEW_YORK;
  else if (id.includes('detroit')) recipeStyle = RecipeStyle.DETROIT;
  else if (id.includes('roman') || id.includes('teglia')) recipeStyle = RecipeStyle.ROMANA_TONDA; 
  else if (id.includes('scrocchiarella')) recipeStyle = RecipeStyle.THIN_CRUST;
  else if (id.includes('sicilian') || id.includes('sfincione')) recipeStyle = RecipeStyle.SICILIANA;
  else if (id.includes('grandma')) recipeStyle = RecipeStyle.GRANDMA_STYLE;
  else if (id.includes('baguette')) recipeStyle = RecipeStyle.BAGUETTE;
  else if (id.includes('ciabatta')) recipeStyle = RecipeStyle.CIABATTA;
  else if (id.includes('focaccia')) recipeStyle = RecipeStyle.FOCACCIA;
  else if (id.includes('brioche')) recipeStyle = RecipeStyle.BRIOCHE;
  else if (id.includes('burger') || id.includes('dinner_rolls') || id.includes('milk_bun')) recipeStyle = RecipeStyle.BURGER_BUN;
  else if (id.includes('cinnamon')) recipeStyle = RecipeStyle.CINNAMON_ROLL;
  else if (id.includes('cookie')) recipeStyle = RecipeStyle.COOKIES;
  else if (id.includes('rye') || id.includes('rugbrod')) recipeStyle = RecipeStyle.RYE;
  else if (id.includes('sourdough') || id.includes('levain') || id.includes('pain_de_campagne') || id.includes('artisan')) recipeStyle = RecipeStyle.SOURDOUGH;
  else if (id.includes('brazilian') || id.includes('pao_frances')) recipeStyle = RecipeStyle.PAO_FRANCES;
  else if (id.includes('chicago_deep')) recipeStyle = RecipeStyle.CHICAGO_DEEP_DISH;
  else if (id.includes('pinsa')) recipeStyle = RecipeStyle.PINSA;
  else if (id.includes('barbari')) recipeStyle = RecipeStyle.BARBARI_BREAD;
  else if (id.includes('khobz') || id.includes('aish')) recipeStyle = RecipeStyle.KHOBZ_BREAD;
  else if (id.includes('pide')) recipeStyle = RecipeStyle.TURKISH_PIDE;
  else if (id.includes('manoushe')) recipeStyle = RecipeStyle.MANOUSHE;
  else if (id.includes('pretzel')) recipeStyle = RecipeStyle.PRETZEL;
  else if (cat === 'Flatbread' || id.includes('lavash') || id.includes('knackebrod')) recipeStyle = RecipeStyle.FLATBREAD;
  else if (cat === 'Pastry' || id.includes('malawach')) recipeStyle = RecipeStyle.SWEETS_PASTRY;

  // Calculate Technical Values (Averages)
  const hydrationRange = raw.technicalProfile.hydration.match(/(\\d+)[–-](\\d+)/);
  const hydration = hydrationRange ? (parseInt(hydrationRange[1]) + parseInt(hydrationRange[2])) / 2 : 60; // Fallback

  const saltRange = raw.technicalProfile.salt.match(/(\\d+(\\.\\d+)?)[–-](\\d+(\\.\\d+)?)/);
  const salt = saltRange ? (parseFloat(saltRange[1]) + parseFloat(saltRange[3])) / 2 : 2.0;

  const oilRange = raw.technicalProfile.oil.match(/(\\d+)[–-](\\d+)/);
  const oil = oilRange ? (parseInt(oilRange[1]) + parseInt(oilRange[2])) / 2 : 0;

  const sugarRange = raw.technicalProfile.sugar.match(/(\\d+)[–-](\\d+)/);
  const sugar = sugarRange ? (parseInt(sugarRange[1]) + parseInt(sugarRange[2])) / 2 : 0;

  const ovenTempRange = raw.technicalProfile.ovenTemp.match(/(\\d+)[–-](\\d+)/);
  const bakingTempC = ovenTempRange ? (parseInt(ovenTempRange[1]) + parseInt(ovenTempRange[2])) / 2 : 250;

  // Default Ingredients Generation
  const generatedIngredients: IngredientConfig[] = [
    { id: 'flour', name: 'Flour', type: 'solid', role: 'flour', bakerPercentage: 100 },
    { id: 'water', name: 'Water', type: 'liquid', role: 'water', bakerPercentage: hydration },
    { id: 'salt', name: 'Salt', type: 'solid', role: 'salt', bakerPercentage: salt },
    { id: 'yeast', name: 'Yeast', type: 'solid', role: 'yeast', bakerPercentage: 0.5 } // Default placeholder
  ];

  if (oil > 0) {
    generatedIngredients.push({ id: 'oil', name: 'Oil/Fat', type: 'liquid', role: 'fat', bakerPercentage: oil });
  }
  if (sugar > 0) {
    generatedIngredients.push({ id: 'sugar', name: 'Sugar', type: 'solid', role: 'sugar', bakerPercentage: sugar });
  }

  // Fermentation Techniques
  const allowedTechniques = [FermentationTechnique.DIRECT, FermentationTechnique.POOLISH, FermentationTechnique.BIGA];
  let defaultTechnique = FermentationTechnique.DIRECT;

  if (raw.technicalProfile.preferment && raw.technicalProfile.preferment.toLowerCase().includes('poolish')) {
    defaultTechnique = FermentationTechnique.POOLISH;
  } else if (raw.technicalProfile.preferment && raw.technicalProfile.preferment.toLowerCase().includes('biga')) {
    defaultTechnique = FermentationTechnique.BIGA;
  } else if (raw.technicalProfile.preferment && (raw.technicalProfile.preferment.toLowerCase().includes('levain') || raw.technicalProfile.preferment.toLowerCase().includes('sourdough') || raw.technicalProfile.preferment.toLowerCase().includes('pasta acida') || raw.technicalProfile.preferment.toLowerCase().includes('old dough') || raw.technicalProfile.preferment.toLowerCase().includes('surdej'))) {
    allowedTechniques.push(FermentationTechnique.SOURDOUGH);
    defaultTechnique = FermentationTechnique.SOURDOUGH;
  } else if (raw.technicalProfile.preferment && raw.technicalProfile.preferment.toLowerCase().includes('tangzhong')) {
      // Tangzhong is an additive technique usually with direct
      defaultTechnique = FermentationTechnique.DIRECT;
  }

  if (cat === 'cookie' || cat === 'flatbread') {
    // Cookies/Flatbreads often chemical or no ferment
    if (!allowedTechniques.includes(FermentationTechnique.NO_FERMENT)) allowedTechniques.push(FermentationTechnique.NO_FERMENT);
    if (!allowedTechniques.includes(FermentationTechnique.CHEMICAL)) allowedTechniques.push(FermentationTechnique.CHEMICAL);
  }


  return {
    id: raw.id,
    name: raw.name,
    family: raw.category, 
    category: raw.category.toLowerCase() as any,
    origin: raw.origin,
    country: raw.origin.country,
    year: raw.origin.period,
    description: raw.description,
    history: raw.history,
    scientificFoundations: raw.scientificFoundations, // New Field
    culturalContext: "See history.", 
    isCanonical: true, 
    source: raw.source as any,
    isPro: raw.isPro,
    recipeStyle: recipeStyle,
    technical: {
      hydration,
      salt,
      oil,
      sugar,
      fermentation: raw.technicalProfile.fermentationSteps.join(' '), 
      fermentationTechnique: defaultTechnique,
      bakingTempC
    },
    technicalProfile: {
      hydration: [hydration - 2, hydration + 2], 
      salt: [salt - 0.2, salt + 0.2],
      oil: [oil, oil + 1],
      sugar: [sugar, sugar + 1],
      flourStrength: raw.technicalProfile.flourStrength,
      fermentation: {
          bulk: raw.technicalProfile.fermentationSteps[0] || "Standard",
          proof: raw.technicalProfile.fermentationSteps[1] || "Standard"
      },
      ovenRecommendations: raw.technicalProfile.ovenTemp,
      difficulty: raw.difficulty as any,
      recommendedUse: raw.technicalProfile.recommendedUse.join(', '),
      prefermentDescription: raw.technicalProfile.preferment
    },
    references: raw.references.map((ref: any) => typeof ref === 'string' ? { source: ref } : ref),
    allowedFermentationTechniques: allowedTechniques,
    defaultFermentationTechnique: defaultTechnique,
    ingredients: generatedIngredients,
    tags: raw.tags
  };
}

export const STYLES_DATA: DoughStyleDefinition[] = RAW_CANONICAL_STYLES.map(mapRawStyleToDoughStyleDefinition);

export function getStyleById(id: string): DoughStyleDefinition | undefined {
  return STYLES_DATA.find(s => s.id === id);
}

export function getAllowedFermentationTechniques(style: RecipeStyle, bakeType: BakeType): FermentationTechnique[] {
  if (!style || !bakeType) {
    return [FermentationTechnique.DIRECT];
  }

  const definition = STYLES_DATA.find(s => s.recipeStyle === style);
  if (definition && definition.allowedFermentationTechniques && Array.isArray(definition.allowedFermentationTechniques)) {
    return definition.allowedFermentationTechniques;
  }

  if (bakeType === BakeType.SWEETS_PASTRY) {
    return [FermentationTechnique.CHEMICAL, FermentationTechnique.NO_FERMENT, FermentationTechnique.DIRECT];
  }

  return [
    FermentationTechnique.DIRECT,
    FermentationTechnique.POOLISH,
    FermentationTechnique.BIGA,
    FermentationTechnique.SOURDOUGH
  ];
}
`;

fs.writeFileSync('src/data/stylesData.ts', tsContent);
console.log('Successfully updated src/data/stylesData.ts with ' + allStyles.length + ' styles.');
