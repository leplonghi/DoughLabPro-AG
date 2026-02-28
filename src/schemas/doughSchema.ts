import { z } from 'zod';
import { BakeType, RecipeStyle, FermentationTechnique, YeastType, AmbientTemperature, OvenType } from '@/types';

// Zod Schema for DoughConfig validation
export const DoughConfigSchema = z.object({
    bakeType: z.nativeEnum(BakeType),
    recipeStyle: z.nativeEnum(RecipeStyle),

    // Numeric Constraints
    hydration: z.number().min(30, "Too dry").max(120, "Too wet"),
    salt: z.number().min(0).max(5, "Too much salt"),
    oil: z.number().min(0).max(30),
    sugar: z.number().min(0).max(50).optional(),

    numPizzas: z.number().min(1).max(100),
    doughBallWeight: z.number().min(50).max(2000),

    // Fermentation
    fermentationTechnique: z.nativeEnum(FermentationTechnique),
    yeastType: z.nativeEnum(YeastType),
    yeastPercentage: z.number().min(0).max(10), // Can be 0 for pure levain

    // Environment
    ambientTemperature: z.nativeEnum(AmbientTemperature),
    bakingTempC: z.number().min(100).max(600),

    // Optional / Metadata
    notes: z.string().max(1000).optional(),
    name: z.string().max(100).optional(), // Batch name if present
});

export type ValidatedDoughConfig = z.infer<typeof DoughConfigSchema>;

export const validateDoughConfig = (config: unknown) => {
    return DoughConfigSchema.safeParse(config);
};
