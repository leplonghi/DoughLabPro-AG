
import { addHours, subHours, format, startOfHour } from 'date-fns';

export interface TimelineMilestone {
    id: string;
    label: string; // Translation key
    expectedTime: Date;
    description: string;
    temperatureImpact?: string;
    isCritical: boolean;
}

export interface TimelineOptions {
    targetCompletionTime: Date;
    ambientTemp: number; // Celsius
    fermentationHours: number;
    ballingLeadTime: number; // Hours before bake
    autolyseMinutes: number;
    prefermentHours: number; // 0 if none
}

/**
 * Calculates a dynamic timeline based on temperature and desired end time.
 * Logic: Fermentation speed roughly doubles every 10°C (Q10 Rule).
 * Base temp is 21°C (70°F).
 */
export function buildBakingTimeline(options: TimelineOptions): TimelineMilestone[] {
    const {
        targetCompletionTime,
        ambientTemp,
        fermentationHours,
        ballingLeadTime,
        autolyseMinutes,
        prefermentHours
    } = options;

    // Q10 Adjustment (Simplified for baking)
    // At 21C, factor = 1.0
    // At 26C (+5C), factor = ~0.7 (faster)
    // At 16C (-5C), factor = ~1.4 (slower)
    const tempFactor = Math.pow(0.5, (ambientTemp - 21) / 10);
    const adjustedFermHours = fermentationHours * tempFactor;

    const milestones: TimelineMilestone[] = [];

    // Working Backwards from completion
    const end = startOfHour(targetCompletionTime);

    // 1. Bake Time
    milestones.push({
        id: 'bake-start',
        label: 'timeline.bake_start',
        expectedTime: subHours(end, 0.5), // Typical bake preparation
        description: 'timeline.bake_start_desc',
        isCritical: true
    });

    // 2. Final Proofing / Balling
    const ballingTime = subHours(end, ballingLeadTime * tempFactor + 0.5);
    milestones.push({
        id: 'balling',
        label: 'timeline.balling',
        expectedTime: ballingTime,
        description: 'timeline.balling_desc',
        isCritical: true,
        temperatureImpact: ambientTemp > 24 ? 'timeline.temp_warm_warning' : undefined
    });

    // 3. Bulk Fermentation Start
    const bulkStartTime = subHours(ballingTime, (adjustedFermHours - ballingLeadTime * tempFactor));
    milestones.push({
        id: 'bulk-start',
        label: 'timeline.bulk_start',
        expectedTime: bulkStartTime,
        description: 'timeline.bulk_start_desc',
        isCritical: true
    });

    // 4. Mixing / Autolyse
    const mixTime = subHours(bulkStartTime, 0.5 + (autolyseMinutes / 60));
    milestones.push({
        id: 'mixing',
        label: 'timeline.mixing_autolise',
        expectedTime: mixTime,
        description: 'timeline.mixing_desc',
        isCritical: false
    });

    // 5. Preferment / Levain (if applicable)
    if (prefermentHours > 0) {
        const prefermentTime = subHours(mixTime, prefermentHours * tempFactor);
        milestones.push({
            id: 'preferment-start',
            label: 'timeline.preferment_start',
            expectedTime: prefermentTime,
            description: 'timeline.preferment_desc',
            isCritical: true
        });
    }

    // Sort by time
    return milestones.sort((a, b) => a.expectedTime.getTime() - b.expectedTime.getTime());
}
