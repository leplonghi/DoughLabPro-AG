import { DOUGH_WEIGHT_RANGES } from '@/constants';
import { getStyleById } from '@/data/styles';
import { RecipeStyle } from '@/types';

type StyleWeightLookup = {
  stylePresetId?: string;
  recipeStyle?: RecipeStyle;
};

export type StyleWeightBounds = {
  min: number;
  max: number;
  recommended: number;
};

const ABSOLUTE_WEIGHT_BOUNDS: StyleWeightBounds = {
  min: 20,
  max: 3000,
  recommended: 250,
};

const parseWeightRange = (range?: string): StyleWeightBounds | null => {
  if (!range) return null;

  const matches = range.match(/(\d+(?:\.\d+)?)\s*g/gi);
  if (!matches || matches.length === 0) return null;

  const values = matches
    .map((item) => Number.parseFloat(item.replace(/g/gi, '').trim()))
    .filter((value) => !Number.isNaN(value));

  if (values.length === 0) return null;

  const min = values[0];
  const max = values.length > 1 ? values[1] : values[0];

  return {
    min,
    max,
    recommended: values.length > 1 ? (min + max) / 2 : min,
  };
};

export const getStyleWeightBounds = ({
  stylePresetId,
  recipeStyle,
}: StyleWeightLookup): StyleWeightBounds => {
  if (stylePresetId) {
    const style = getStyleById(stylePresetId);
    const ballWeight = style?.technicalProfile?.ballWeight;

    if (ballWeight) {
      const min = ballWeight.min ?? ABSOLUTE_WEIGHT_BOUNDS.min;
      const max = ballWeight.max ?? ABSOLUTE_WEIGHT_BOUNDS.max;
      const recommended = ballWeight.recommended ?? (min + max) / 2;

      return { min, max, recommended };
    }
  }

  if (recipeStyle) {
    const parsedRange = parseWeightRange(DOUGH_WEIGHT_RANGES[recipeStyle]);
    if (parsedRange) return parsedRange;
  }

  return ABSOLUTE_WEIGHT_BOUNDS;
};
