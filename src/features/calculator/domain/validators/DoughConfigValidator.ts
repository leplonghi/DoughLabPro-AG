import { DoughConfig, FormErrors, FermentationTechnique, YeastType } from '@/types';
import { getStyleWeightBounds } from '@/utils/styleWeight';

const isAnySourdough = (yeastType: YeastType) =>
    [YeastType.SOURDOUGH_STARTER, YeastType.USER_LEVAIN].includes(yeastType);

export const validateDoughConfig = (config: DoughConfig): FormErrors => {
    const errors: FormErrors = {};

    // 1. Pizza Count
    if (config.numPizzas < 1) {
        errors.numPizzas = 'Must make at least 1 pizza/loaf.';
    } else if (config.numPizzas > 100) {
        errors.numPizzas = 'Maximum 100 pizzas/loaves allowed per batch.';
    }

    // 2. Ball Weight
    const { min: minW, max: maxW } = getStyleWeightBounds({
        stylePresetId: config.stylePresetId,
        recipeStyle: config.recipeStyle,
    });

    if (config.doughBallWeight < minW) {
        errors.doughBallWeight = `Weight is too low for this style (min ${minW}g).`;
    } else if (config.doughBallWeight > maxW) {
        errors.doughBallWeight = `Weight is too high for this style (max ${maxW}g).`;
    }

    // 3. Hydration
    // Absolute bounds for physics
    if (config.hydration < 30) {
        errors.hydration = 'Hydration below 30% is practically impossible to mix.';
    } else if (config.hydration > 120) {
        errors.hydration = 'Hydration above 120% is practically soup.';
    }

    // 4. Scale
    if (config.scale < 0.25 || config.scale > 4) {
        errors.scale = 'Scale multiplier must be between 0.25x and 4x.';
    }

    // 5. Temperature
    if (config.bakingTempC < 100) {
        errors.bakingTempC = 'Oven temp too low (min 100°C).';
    } else if (config.bakingTempC > 550) {
        errors.bakingTempC = 'Oven temp unusually high (max 550°C).';
    }

    // 6. Yeast
    const maxYeast = isAnySourdough(config.yeastType) ? 60 : 10;
    if (config.yeastPercentage < 0) {
        errors.yeastPercentage = 'Yeast cannot be negative.';
    } else if (config.yeastPercentage > maxYeast) {
        errors.yeastPercentage = `Yeast percentage seems too high (max ${maxYeast}%).`;
    }

    // 7. Preferments
    if (config.fermentationTechnique !== FermentationTechnique.DIRECT) {
        if (config.prefermentFlourPercentage < 1 && config.fermentationTechnique !== FermentationTechnique.SOURDOUGH) {
            errors.prefermentFlourPercentage = 'Preferment percentage too low.';
        } else if (config.prefermentFlourPercentage > 100) {
            errors.prefermentFlourPercentage = 'Cannot have more than 100% of flour in preferment.';
        }
    }

    // 8. Salt
    if (config.salt < 0) {
        errors.salt = 'Salt cannot be negative.';
    } else if (config.salt > 10) {
        errors.salt = 'Salt > 10% will kill yeast and taste terrible.';
    }

    // 9. Oil/Fat
    if (config.oil < 0) {
        errors.oil = 'Oil/Fat cannot be negative.';
    } else if (config.oil > 50) {
        errors.oil = 'Oil > 50% is extremely high (brioche territory). Verify recipe.';
    }

    // 10. Sugar
    if (config.sugar !== undefined) {
        if (config.sugar < 0) {
            errors.sugar = 'Sugar cannot be negative.';
        } else if (config.sugar > 60) {
            errors.sugar = 'Sugar > 60% is very high.';
        }
    }

    return errors;
};
