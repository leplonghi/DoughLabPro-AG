
import { useEffect, useCallback } from 'react';
import { useDoughSession } from '@/contexts/DoughSessionContext';
import { calculateReverseSchedule } from '@/logic/scheduling';
import { normalizeDoughConfig } from '@/logic/normalization';
import { syncIngredientsFromConfig } from '@/logic/doughMath';
import { DoughConfig, FermentationTechnique, YeastType, RecipeStyle, BakeType, AmbientTemperature } from '@/types';

export const useReverseScheduling = () => {
    const { session, updateDough, updateSchedule } = useDoughSession();

    const applySchedule = useCallback((targetDate: Date) => {
        // Construct a partial DoughConfig for the calculator
        // We need to act as if we have a config to pass to the logic
        // We map session -> shape needed by logic
        const dummyConfig: DoughConfig = {
            // Minimal set needed for types
            hydration: session.dough.hydration,
            salt: session.dough.salt,
            yeastPercentage: session.dough.yeast,
            oil: session.dough.oil || 0,
            sugar: session.dough.sugar || 0,
            yeastType: (session.dough.yeastType as YeastType) || YeastType.IDY,
            fermentationTechnique: (session.dough.prefermentType as any) || FermentationTechnique.DIRECT,
            // ...fill required
            recipeStyle: RecipeStyle.NEAPOLITAN,
            bakeType: BakeType.PIZZAS,
            numPizzas: 4,
            doughBallWeight: 250,
            bakingTempC: 430,
            scale: 1,
            flourId: 'generic',
            prefermentFlourPercentage: 20,
            notes: '',
            ingredients: [],
            ambientTemperature: AmbientTemperature.COLD
        };

        const result = calculateReverseSchedule(targetDate, dummyConfig, {
            prefermentType: session.dough.prefermentType,
            ambientTemp: session.dough.ambientTemperature || 20
        });

        // Update Session
        updateSchedule({
            targetDate: targetDate.toISOString(),
            computedStartTime: result.startTime.toISOString(),
        });

        updateDough({
            yeast: result.recommendedYeastPercentage
        });

    }, [session.dough, updateSchedule, updateDough]);

    return {
        applySchedule
    };
};
