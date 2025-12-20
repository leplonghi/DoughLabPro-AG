import { describe, it, expect } from 'vitest';
import { validateDoughConfig } from './DoughConfigValidator';
import { DoughConfig, BakeType, RecipeStyle, FermentationTechnique, YeastType, AmbientTemperature } from '@/types';

// Mock Config Factory
const createConfig = (overrides: Partial<DoughConfig> = {}): DoughConfig => ({
    bakeType: BakeType.PIZZAS,
    recipeStyle: RecipeStyle.NEAPOLITAN,
    flourId: 'test-flour',
    ambientTemperature: AmbientTemperature.MILD,
    numPizzas: 4,
    doughBallWeight: 250,
    hydration: 65,
    salt: 3,
    oil: 0,
    sugar: 0,
    fermentationTechnique: FermentationTechnique.DIRECT,
    yeastType: YeastType.IDY,
    yeastPercentage: 0.1,
    prefermentFlourPercentage: 0,
    scale: 1,
    notes: '',
    bakingTempC: 430,
    ...overrides
});

describe('DoughConfigValidator', () => {
    it('should return no errors for valid config', () => {
        const config = createConfig();
        const errors = validateDoughConfig(config);
        expect(Object.keys(errors)).toHaveLength(0);
    });

    it('should validate numPizzas', () => {
        expect(validateDoughConfig(createConfig({ numPizzas: 0 })).numPizzas).toBeTruthy();
        expect(validateDoughConfig(createConfig({ numPizzas: 101 })).numPizzas).toBeTruthy();
    });

    it('should validate hydration bounds', () => {
        expect(validateDoughConfig(createConfig({ hydration: 20 })).hydration).toBeTruthy();
        expect(validateDoughConfig(createConfig({ hydration: 121 })).hydration).toBeTruthy();
    });

    it('should validate salt bounds', () => {
        expect(validateDoughConfig(createConfig({ salt: -1 })).salt).toBeTruthy();
        expect(validateDoughConfig(createConfig({ salt: 11 })).salt).toBeTruthy();
    });

    it('should validate preferment limits', () => {
        const config = createConfig({
            fermentationTechnique: FermentationTechnique.POOLISH,
            prefermentFlourPercentage: 110
        });
        expect(validateDoughConfig(config).prefermentFlourPercentage).toBeTruthy();
    });

    it('should validate yeast percentage for commercial yeast', () => {
        const config = createConfig({
            yeastType: YeastType.IDY,
            yeastPercentage: 15
        });
        expect(validateDoughConfig(config).yeastPercentage).toBeTruthy();
    });

    it('should allow higher yeast percentage for sourdough', () => {
        const config = createConfig({
            yeastType: YeastType.SOURDOUGH_STARTER,
            yeastPercentage: 20
        });
        const errors = validateDoughConfig(config);
        expect(errors.yeastPercentage).toBeUndefined();
    });

    it('should validate high yeast percentage for sourdough', () => {
        const config = createConfig({
            yeastType: YeastType.SOURDOUGH_STARTER,
            yeastPercentage: 80
        });
        expect(validateDoughConfig(config).yeastPercentage).toBeTruthy();
    });
});
