import { describe, expect, it } from 'vitest';
import { RecipeStyle } from '@/types';
import { getStyleWeightBounds } from './styleWeight';

describe('getStyleWeightBounds', () => {
  it('prefers technical profile ball-weight bounds from the selected preset', () => {
    expect(getStyleWeightBounds({ stylePresetId: 'focaccia-genovese', recipeStyle: RecipeStyle.FOCACCIA })).toEqual({
      min: 400,
      max: 1000,
      recommended: 600,
    });
  });

  it('falls back to coarse recipe-style ranges when the preset id is unavailable', () => {
    expect(getStyleWeightBounds({ stylePresetId: 'custom-user-preset', recipeStyle: RecipeStyle.FOCACCIA })).toEqual({
      min: 600,
      max: 2000,
      recommended: 1300,
    });
  });
});
