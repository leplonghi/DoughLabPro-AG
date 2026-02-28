import { ComputeFormulaParams, TimelineStep } from './EngineTypes';
import { FermentationTechnique } from '@/types';

/**
 * CORE DOMAIN ENGINE - buildTimeline
 * Takes canonical inputs and builds the ordered fermentation and preparation steps.
 */
export function buildTimeline(params: ComputeFormulaParams): TimelineStep[] {
    const { style, equipmentProfile } = params;
    const steps: TimelineStep[] = [];

    // Base start step
    steps.push({
        title: 'Gather Ingredients',
        notes: 'Scale all ingredients precisely using a digital scale.',
    });

    // Determine Fermentation Technique from style index or tech profile
    const techProfile = style.technicalProfile;
    const isPreferment = techProfile?.preferment || style.fermentationType === 'preferment' || style.fermentationType === 'levain';

    if (isPreferment) {
        steps.push({
            title: 'Mix Preferment / Levain',
            notes: techProfile?.preferment || 'Mix flour, water, and yeast/starter. Cover and let rest.',
        });

        let prefermentTime = 12 * 60; // 12 hours default
        if (style.fermentationType === 'levain') prefermentTime = 8 * 60;

        steps.push({
            title: 'Preferment Maturation',
            durationMin: prefermentTime,
            temperatureC: 20,
            notes: 'Wait until doubled or tripled in size.',
        });
    }

    // Main Dough Mix
    steps.push({
        title: 'Mix Final Dough',
        notes: 'Combine all ingredients. Mix until required gluten development is reached.',
    });

    // Bulk Fermentation
    if (techProfile?.fermentation?.bulk) {
        steps.push({
            title: 'Bulk Fermentation',
            notes: techProfile.fermentation.bulk,
        });
    } else {
        steps.push({
            title: 'Bulk Fermentation',
            durationMin: 120, // Default 2 hours if unknown
            temperatureC: 22,
            notes: 'Let the dough rest at room temperature.',
        });
    }

    // Balling / Shaping
    steps.push({
        title: style.category === 'bread' ? 'Shape Loaves' : 'Divide and Ball',
        notes: `Divide the dough into portions of ${techProfile?.ballWeight?.recommended || 'desired'}g.`,
    });

    // Cold Retard (if any)
    if (techProfile?.fermentation?.coldRetard || style.fermentationType === 'cold') {
        steps.push({
            title: 'Cold Fermentation',
            durationMin: 24 * 60, // 24h default
            temperatureC: 4,     // Fridge temp
            notes: techProfile?.fermentation?.coldRetard || 'Place in the refrigerator to develop flavor.',
        });
    }

    // Proofing (Appretto)
    if (techProfile?.fermentation?.proof) {
        steps.push({
            title: 'Final Proof',
            notes: techProfile.fermentation.proof,
        });
    } else {
        steps.push({
            title: 'Final Proof (Room Temp)',
            durationMin: 240, // 4 hours default
            temperatureC: 22,
            notes: 'Let balls come to room temperature and relax before baking.',
        });
    }

    // Baking
    const ovenTemp = techProfile?.ovenTemp ? techProfile.ovenTemp[1] : (equipmentProfile?.maxTempC || 250);
    steps.push({
        title: 'Bake',
        temperatureC: ovenTemp,
        notes: `Bake using ${equipmentProfile?.type === 'home_oven' ? 'a baking steel or stone' : 'your oven'} until crust is well colored.`,
    });

    return steps;
}
