import { DoughConfig, CustomPreset } from '@/types';

/**
 * Custom Presets Logic
 * 
 * This module provides functions for managing custom presets.
 * The actual CRUD operations are handled by UserProvider via Firebase.
 * These are helper/utility functions for working with presets.
 */

/**
 * Validates a preset configuration
 */
export const validatePresetConfig = (config: DoughConfig): boolean => {
    if (!config.flourId || !config.bakeType || !config.recipeStyle) {
        return false;
    }

    if (config.hydration < 40 || config.hydration > 120) {
        return false;
    }

    if (config.salt < 0 || config.salt > 5) {
        return false;
    }

    return true;
};

/**
 * Creates a preset name suggestion based on config
 */
export const suggestPresetName = (config: DoughConfig): string => {
    const styleName = config.baseStyleName || config.recipeStyle || 'Custom';
    const hydration = Math.round(config.hydration);
    return `${styleName} ${hydration}%`;
};

/**
 * Compares two configs to check if they're similar
 */
export const areConfigsSimilar = (config1: DoughConfig, config2: DoughConfig): boolean => {
    return (
        config1.recipeStyle === config2.recipeStyle &&
        Math.abs(config1.hydration - config2.hydration) < 5 &&
        Math.abs(config1.salt - config2.salt) < 0.5 &&
        config1.fermentationTechnique === config2.fermentationTechnique
    );
};

/**
 * Extracts key characteristics from a config for display
 */
export const getPresetSummary = (preset: CustomPreset): string => {
    const { config } = preset;
    const parts = [
        `${Math.round(config.hydration)}% hydration`,
        `${config.salt}% salt`,
    ];

    if (config.oil > 0) {
        parts.push(`${config.oil}% oil`);
    }

    if (config.sugar && config.sugar > 0) {
        parts.push(`${config.sugar}% sugar`);
    }

    return parts.join(', ');
};
