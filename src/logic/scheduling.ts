
import { DoughConfig, PrefermentType, YeastType } from '@/types';
import { YEAST_EQUIVALENCIES } from '@/constants';

// === Buffers in Hours ===
const BUFFER_PREHEAT = 1.0;
const BUFFER_BALLING = 4.0; // Relaxing time after balling (Appretto)
const BUFFER_POOLISH = 12.0;
const BUFFER_BIGA = 16.0; // Biga usually takes longer

// === Yeast Model Constants ===
// Based on "Craig's Chart" approximation for IDY
// H = Factor / (Y% * 2^((T-Ref)/Rate))
// Calibrated: 0.1% at 20°C = 24h
// 24 = F / (0.1 * 1) => F = 2.4
const YEAST_FACTOR = 2.4;
const REF_TEMP = 20; // Celsius
const TEMP_RATE = 10; // Doubles rate every 10C

export interface ScheduleResult {
    targetDate: Date;
    startTime: Date;
    totalDurationHours: number;
    fermentationHours: number;
    recommendedYeastPercentage: number;
    details: {
        preheatBuffer: number;
        ballingBuffer: number;
        prefermentBuffer: number;
        bulkFermentation: number;
    }
}

/**
 * Calculates the start time and required yeast percentage given a target eating time.
 */
export const calculateReverseSchedule = (
    targetDate: Date,
    config: DoughConfig,
    doughSettings: { prefermentType: PrefermentType; ambientTemp: number }
): ScheduleResult => {
    const now = new Date();

    // 1. Calculate Offsets
    const preheatBuffer = BUFFER_PREHEAT; // Always 1h for home oven/wood oven
    // If "No Ferment", balling might be 0, but let's assume standard behavior
    const ballingBuffer = config.fermentationTechnique === 'NO_FERMENT' ? 0.5 : BUFFER_BALLING;

    let prefermentBuffer = 0;
    if (doughSettings.prefermentType === 'POOLISH') prefermentBuffer = BUFFER_POOLISH;
    else if (doughSettings.prefermentType === 'BIGA') prefermentBuffer = BUFFER_BIGA;

    // 2. Timeline Backwards from Target
    // Target -> Preheat Start -> Balling Start -> Mixing (Bulk End) -> Preferment Start (if any) -> Mix Start

    // Total "Process" time to subtract from Target to finding "Mixing Start"
    // Note: Biga/Poolish usually ferment *before* the final mix. 
    // If we want "Start Time" to be the VERY FIRST step (making the preferment):
    // Start = Target - Preheat - Balling - Bulk - PrefermentTime.

    // However, the "Yeast Calculation" typically applies to the *Total Fermentation Time* or the *Bulk*.
    // For simplcity in this V2 engine:
    // "Fermentation Hours" = Time available for the main dough to rise (Total - Buffers).

    // Let's determine the Start Time first based on Target.
    // Actually, in "Target Time" mode, we usually WANT strictly:
    // "I eat at 8PM".
    // "You must start at X".
    // If I use a dynamic yeast model, I can fix the Time to `Now` and solve for Yeast?
    // OR, if the user sets a Date in the future, I calculate the Yeast for that Time gap.
    // YES. The user picks specific Future Date. 

    const endProcessTime = targetDate.getTime();
    const totalDurationMs = endProcessTime - now.getTime();
    const totalDurationHours = totalDurationMs / (1000 * 60 * 60);

    // Effective Fermentation Time = Total Available - Fixed Buffers
    // Note: Preferment time IS fermentation time, but usually fixed (12h).
    // The variable part is the Bulk/Proof of the main dough if using preferment, 
    // OR the total time if Direct.

    let variableFermentationHours = totalDurationHours - preheatBuffer - ballingBuffer;

    if (doughSettings.prefermentType !== 'DIRECT') {
        // If using preferment, we assume the preferment fits INTO the total duration.
        // E.g. 24h total. 12h Poolish. 4h Balling. 1h Preheat. 
        // Remaining for Bulk: 24 - 12 - 4 - 1 = 7h.
        // The yeast calc for the *final dough* (refreshment) depends on this 7h.
        // The preferment itself usually uses fixed tiny yeast (0.1%).

        variableFermentationHours -= prefermentBuffer;
    }

    // Guard against impossible physics (Time travel)
    if (variableFermentationHours < 0.5) {
        variableFermentationHours = 0.5; // Minimum 30 mins
    }

    // 3. Calculate Yeast % needed for this Duration
    // Using IDY Model
    const temp = doughSettings.ambientTemp || 20;

    // Y = F / (Hours * 2^((T-ref)/10))
    const tempMultiplier = Math.pow(2, (temp - REF_TEMP) / TEMP_RATE);
    let predictedIDY = YEAST_FACTOR / (variableFermentationHours * tempMultiplier);

    // Cap reasonable limits
    if (predictedIDY > 5) predictedIDY = 5; // Max 5%
    if (predictedIDY < 0.01) predictedIDY = 0.01; // Min 0.01%

    // Convert to requested Yeast Type
    let finalYeastPct = predictedIDY;

    switch (config.yeastType) {
        case YeastType.ADY:
            finalYeastPct = predictedIDY * YEAST_EQUIVALENCIES.IDY_TO_ADY;
            break;
        case YeastType.FRESH:
            finalYeastPct = predictedIDY * YEAST_EQUIVALENCIES.IDY_TO_FRESH;
            break;
        case YeastType.SOURDOUGH_STARTER:
        case YeastType.USER_LEVAIN:
            // Sourdough model is different. 
            // Simple heuristic: 20% starter ~ 8h at 24C. 
            // If 4h, maybe 40%? If 16h, maybe 5%?
            // Linear approx: Pct = 160 / Hours (e.g. 160/8 = 20%, 160/24 = 6.6%)
            // Adjusted by temp? Sourdough is faster when hot.
            const sdBase = 160 / variableFermentationHours;
            // Temp correction: Hotter -> Needs Less Starter
            // Use sqrt of temp variation
            finalYeastPct = sdBase / Math.max(0.5, tempMultiplier);
            break;
        default:
            break;
    }

    // 4. Compute Start Time (which is simply Now, because we calculated duration FROM now)
    // Wait, if users pick a target time, the "Start Time" is "When to start the FIRST step".
    // If TotalDuration is 48h and buffers are 17h, Variable is 31h.
    // Start Time is Now? 
    // No. If "Target Time" logic implies "Calculate the Recipe to fit THIS time span".
    // If the user says "I want to eat on Saturday (3 days away)", 
    // duration is 72h. Can we ferment for 72h? Yes, with 0.01% yeast and Fridge (Cold).
    // But our simple model uses Ambient. 
    // If Ambient is 20C, 72h is too long for Direct.
    // The app should probably assume "Start Now" and adjust Yeast to fit.

    const computedStartTime = now;

    return {
        targetDate,
        startTime: computedStartTime,
        totalDurationHours,
        fermentationHours: variableFermentationHours,
        recommendedYeastPercentage: parseFloat(finalYeastPct.toFixed(3)),
        details: {
            preheatBuffer,
            ballingBuffer,
            prefermentBuffer,
            bulkFermentation: variableFermentationHours
        }
    };
};
