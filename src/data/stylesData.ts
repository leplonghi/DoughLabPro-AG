import { DoughStyleDefinition, StyleCategory, SubstyleDefinition } from '../types';
import { ALL_STYLES } from './styles';
import { StyleDefinition } from '../types/styleDefinition';

// Mapping from StyleDefinition category to DoughStyleDefinition category
const categoryMap: Record<string, StyleCategory> = {
  'Pizza': 'pizza',
  'Bread': 'bread',
  'Enriched': 'enriched_bread',
  'Buns': 'burger_bun',
  'Pastry': 'pastry',
  'Cookies': 'cookies_confectionery',
  'Flatbreads': 'flatbread',
  'Other': 'other'
};

// Grouping Configuration
const STYLE_GROUPS: Record<string, { id: string, name: string, mainStyleId: string }> = {
  'neapolitan': { id: 'neapolitan', name: 'Neapolitan Pizza', mainStyleId: 'neapolitan_avpn_classic' },
  'new_york': { id: 'new_york', name: 'New York Style Pizza', mainStyleId: 'new_york_slice_shop' },
  'ciabatta': { id: 'ciabatta', name: 'Ciabatta', mainStyleId: 'ciabatta_high_hydration' },
  'baguette': { id: 'baguette', name: 'French Baguette', mainStyleId: 'baguette_tradition_francaise' },
  'roman_pan': { id: 'roman_pan', name: 'Roman Pan Pizza (Teglia)', mainStyleId: 'roman_teglia_pan' },
  'roman_thin': { id: 'roman_thin', name: 'Roman Thin Pizza (Scrocchiarella)', mainStyleId: 'roman_scrocchiarella' },
};

// Map individual style IDs to Groups
const ID_TO_GROUP: Record<string, string> = {
  'neapolitan_avpn_classic': 'neapolitan',
  'neapolitan_contemporary_high_hydration': 'neapolitan',
  'neapolitan_home_oven_adapted': 'neapolitan',
  'new_york_slice_shop': 'new_york',
  'new_york_artisan_cold_ferment': 'new_york',
  'ciabatta_high_hydration': 'ciabatta',
};

function transformToDoughStyle(source: StyleDefinition, isMain: boolean): DoughStyleDefinition {
  const cat = categoryMap[source.category] || 'other';

  return {
    id: isMain ? (ID_TO_GROUP[source.id] || source.id) : source.id,
    name: isMain ? (STYLE_GROUPS[ID_TO_GROUP[source.id]]?.name || source.title) : source.variantName,
    family: source.family,
    category: cat,
    description: source.intro,
    origin: source.origin,
    history: source.history,
    culturalContext: source.intro, // Fallback
    isCanonical: source.isCanonical,
    source: source.source as any,
    releaseDate: "2025-01-01",

    technicalProfile: {
      hydration: source.technicalProfile.hydrationRange,
      salt: source.technicalProfile.saltRange,
      oil: source.technicalProfile.oilRange || [0, 0],
      sugar: source.technicalProfile.sugarRange || [0, 0],
      flourStrength: source.technicalProfile.flourStrength,
      fermentation: typeof source.technicalProfile.fermentation === 'string'
        ? { bulk: source.technicalProfile.fermentation, proof: 'Standard' }
        : source.technicalProfile.fermentation,
      oven: {
        temperatureC: source.technicalProfile.oven.temperatureC,
        type: source.technicalProfile.oven.type,
        notes: source.technicalProfile.oven.notes
      },
      difficulty: source.technicalProfile.difficulty
    },

    substyles: [],
    regionExpressions: [],
    seasonalVariants: [],
    experimentalVariants: source.risks && source.risks.length > 0 ? [{
      title: "Common Pitfalls",
      description: "Known risks and challenges with this style.",
      cautionPoints: source.risks
    }] : [],
    tags: source.tags,
    references: source.references.map(r => ({
      source: r.title,
      url: r.url,
      author: r.author,
      year: r.year ? String(r.year) : undefined
    }))
  };
}

function createSubstyle(source: StyleDefinition): SubstyleDefinition {
  return {
    id: source.id,
    title: source.variantName,
    description: source.subtitle || source.intro.substring(0, 100),
    technicalAdjustments: {
      hydration: source.technicalProfile.hydrationRange,
      fermentation: typeof source.technicalProfile.fermentation === 'string'
        ? { bulk: source.technicalProfile.fermentation, proof: 'Standard' }
        : source.technicalProfile.fermentation,
      oven: {
        temperatureC: source.technicalProfile.oven.temperatureC,
        type: source.technicalProfile.oven.type,
        notes: source.technicalProfile.oven.notes
      }
    },
    notes: source.notes,
    isNew: false
  };
}

// Processing Logic
const groupedStylesMap: Record<string, DoughStyleDefinition> = {};

ALL_STYLES.forEach(style => {
  const groupId = ID_TO_GROUP[style.id];

  if (groupId) {
    // It belongs to a group
    if (!groupedStylesMap[groupId]) {
      // Initialize group with the Main Style
      const groupConfig = STYLE_GROUPS[groupId];
      // Find the main style definition
      const mainStyle = ALL_STYLES.find(s => s.id === groupConfig.mainStyleId) || style;

      groupedStylesMap[groupId] = transformToDoughStyle(mainStyle, true);

      // Add the main style as a substyle too? Usually yes, "Classic"
      groupedStylesMap[groupId].substyles.push(createSubstyle(mainStyle));
    }

    // If this is NOT the main style, add it as a substyle
    const groupConfig = STYLE_GROUPS[groupId];
    if (style.id !== groupConfig.mainStyleId) {
      groupedStylesMap[groupId].substyles.push(createSubstyle(style));
    }

  } else {
    // Standalone style
    groupedStylesMap[style.id] = transformToDoughStyle(style, true);
  }
});

export const STYLES_DATA: DoughStyleDefinition[] = Object.values(groupedStylesMap);

export function getStyleById(id: string): DoughStyleDefinition | undefined {
  return STYLES_DATA.find(s => s.id === id);
}
