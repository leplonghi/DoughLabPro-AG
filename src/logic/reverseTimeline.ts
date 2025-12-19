
import { DoughConfig, BakeType, FermentationTechnique, RecipeStyle, AmbientTemperature, Levain } from '../types';

export interface TimelineStep {
    id: string;
    title: string;
    durationMinutes: number;
    startTime: Date;
    endTime: Date;
    isActive?: boolean; // If currently happening
    description?: string;
}

export const BASE_DURATIONS = {
    MIX: 30,
    AUTOLYSE: 45,
    BULK_AMBIENT: 2 * 60, // 2 hours
    BULK_COLD: 24 * 60, // 24 hours
    BALL_PROOF: 4 * 60, // 4 hours
    BAKE_PIZZA: 30, // Includes heating oven, baking multiple pizzas
    BAKE_BREAD: 60 + 60, // Bake + Cool
    POOLISH: 14 * 60,
    BIGA: 18 * 60,
    FEED_LEVAIN: 4 * 60,
};

export function calculateReverseTimeline(targetDate: Date, config: DoughConfig, levain?: Levain): TimelineStep[] {
    const steps: TimelineStep[] = [];
    let currentTime = new Date(targetDate.getTime());

    const subtract = (minutes: number) => {
        const end = new Date(currentTime.getTime());
        currentTime = new Date(currentTime.getTime() - minutes * 60000);
        return { start: currentTime, end };
    };

    // 1. EATING / FINISHING
    // For pizza, we bake right before eating. For bread, we need cooling.
    let bakeDuration = BASE_DURATIONS.BAKE_PIZZA;
    if (config.bakeType !== BakeType.PIZZAS) {
        bakeDuration = BASE_DURATIONS.BAKE_BREAD;
    }

    const bakeTime = subtract(bakeDuration);
    steps.push({
        id: 'bake',
        title: config.bakeType === BakeType.PIZZAS ? 'Bake & Binge' : 'Bake & Cool',
        durationMinutes: bakeDuration,
        startTime: bakeTime.start,
        endTime: bakeTime.end,
        description: config.bakeType === BakeType.PIZZAS ? 'Heat oven, stretch, top, and bake.' : 'Bake until golden, then cool completely.'
    });

    // 2. FINAL PROOF (Ball Proof)
    let proofTime = BASE_DURATIONS.BALL_PROOF; // Default 4h
    if (config.recipeStyle === RecipeStyle.NEAPOLITAN) proofTime = 6 * 60; // 6h
    if (config.ambientTemperature === AmbientTemperature.HOT) proofTime = 2 * 60; // Faster in heat

    const proof = subtract(proofTime);
    steps.push({
        id: 'proof',
        title: 'Final Proof (Balls)',
        durationMinutes: proofTime,
        startTime: proof.start,
        endTime: proof.end,
        description: 'Dough balls relaxing at room temp.'
    });

    // 3. DIVIDE & SHAPE
    const divide = subtract(30);
    steps.push({
        id: 'divide',
        title: 'Divide & Ball',
        durationMinutes: 30,
        startTime: divide.start,
        endTime: divide.end,
        description: 'Cut dough and shape into smooth balls.'
    });

    // 4. COLD FERMENTATION (Optional)
    // Logic: Did the user ask for cold ferment? 
    // The current Calculator inputs don't strictly separate Cold vs Ambient bulk in a clear "Input" way (it's often implied by style or technique). 
    // However, we can infer. For now, let's assume standard method generation logic.
    // If "Direct" -> usually no cold ferment unless specified.
    // BUT: Many modern pizza styles (Neapolitan, NY) default to Cold Ferment in DoughLab logic.
    // Let's rely on `fermentationTechnique`.
    const isColdFerment = config.fermentationTechnique !== FermentationTechnique.DIRECT;
    // Actually, Biga/Poolish usually imply pre-ferment. Cold ferment of the FINAL dough is style dependent.
    // Let's assume specific styles use Cold Ferment.
    const stylesWithColdFerment = [RecipeStyle.NY_STYLE, RecipeStyle.NEAPOLITAN, RecipeStyle.ROMAN]; // Simplified assumption

    if (stylesWithColdFerment.includes(config.recipeStyle)) {
        const ct = subtract(BASE_DURATIONS.BULK_COLD);
        steps.push({
            id: 'cold_bulk',
            title: 'Cold Maturation (Fridge)',
            durationMinutes: BASE_DURATIONS.BULK_COLD,
            startTime: ct.start,
            endTime: ct.end,
            description: 'Slow fermentation in the refrigerator.'
        });
    }

    // 5. BULK FERMENTATION (Ambient)
    const bulk = subtract(BASE_DURATIONS.BULK_AMBIENT);
    steps.push({
        id: 'bulk',
        title: 'Bulk Fermentation',
        durationMinutes: BASE_DURATIONS.BULK_AMBIENT,
        startTime: bulk.start,
        endTime: bulk.end,
        description: 'Initial rise at room temperature. Cover well.'
    });

    // 5b. FOLDS (Insert during Bulk)
    // Logic: If hydration > 65%, add folds during the first phase of bulk
    const hydration = config.hydration || 60;
    let numFolds = 0;
    if (hydration >= 65) numFolds = 1;
    if (hydration >= 70) numFolds = 2;
    if (hydration >= 75) numFolds = 3;
    if (hydration >= 80) numFolds = 4;

    // Additional check for Panettone or specific complex styles could happen here
    // if (config.recipeStyle === RecipeStyle.PANETTONE) numFolds = 3; // Example - PANETTONE not yet in enum

    if (numFolds > 0) {
        // Start folds 30 mins after mix (or start of bulk)
        // Note: Bulk start is 'bulk.start'.
        let foldTime = new Date(bulk.start.getTime());

        for (let i = 1; i <= numFolds; i++) {
            // Add 30 mins for each fold interval
            foldTime = new Date(foldTime.getTime() + 30 * 60000);

            // Only add if it falls within bulk time (safety check)
            if (foldTime < bulk.end) {
                steps.push({
                    id: `fold_${i}`,
                    title: `Stretch & Fold #${i}`,
                    durationMinutes: 5, // Active time
                    startTime: new Date(foldTime.getTime()), // Point in time
                    endTime: new Date(foldTime.getTime() + 5 * 60000),
                    description: 'Strengthen the gluten network. Perform a set of folds.'
                });
            }
        }
    }

    // 6. MIXING (+ Autolyse)
    if (config.hydration >= 70) {
        const auto = subtract(BASE_DURATIONS.AUTOLYSE);
        steps.push({
            id: 'autolyse',
            title: 'Autolyse',
            durationMinutes: BASE_DURATIONS.AUTOLYSE,
            startTime: auto.start,
            endTime: auto.end,
            description: 'Mix flour and water only. Let rest.'
        });
    }

    const mix = subtract(BASE_DURATIONS.MIX);
    steps.push({
        id: 'mix',
        title: 'Mix & Knead',
        durationMinutes: BASE_DURATIONS.MIX,
        startTime: mix.start,
        endTime: mix.end,
        description: 'Combine all ingredients and develop gluten windowpane.'
    });

    // 7. PRE-FERMENTS
    if (config.fermentationTechnique === FermentationTechnique.POOLISH) {
        const poolish = subtract(BASE_DURATIONS.POOLISH);
        steps.push({
            id: 'poolish',
            title: 'Make Poolish',
            durationMinutes: BASE_DURATIONS.POOLISH,
            startTime: poolish.start,
            endTime: poolish.end,
            description: 'Mix equal parts flour and water with pinch of yeast. Ferment 14-16h.'
        });
    }
    else if (config.fermentationTechnique === FermentationTechnique.BIGA) {
        const biga = subtract(BASE_DURATIONS.BIGA);
        steps.push({
            id: 'biga',
            title: 'Make Biga',
            durationMinutes: BASE_DURATIONS.BIGA,
            startTime: biga.start,
            endTime: biga.end,
            description: 'Mix stiff pre-ferment (45-50% hydration). Ferment 18h at 16-18°C.'
        });
    }
    else if (config.yeastType === 'SOURDOUGH_STARTER') {
        let feedDuration = BASE_DURATIONS.FEED_LEVAIN;
        if (levain && levain.idealFeedingIntervalHours) {
            feedDuration = levain.idealFeedingIntervalHours * 60;
        }

        const feed = subtract(feedDuration);
        steps.push({
            id: 'feed_levain',
            title: 'Feed Levain',
            durationMinutes: feedDuration,
            startTime: feed.start,
            endTime: feed.end,
            description: levain?.name ? `Feed ${levain.name} to reach peak in ${feedDuration / 60}h.` : `Feed starter to peak in ${feedDuration / 60}h.`
        });
    }

    // Sort chronologically (since Folds were added out of "subtract" order)
    return steps.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
}
