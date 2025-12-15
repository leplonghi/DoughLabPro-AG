
import {
    DoughConfig,
    DoughResult,
    TechnicalStep,
    TechnicalPhase,
    FermentationTechnique,
    YeastType,
    RecipeStyle,
    AmbientTemperature,
    BakeType
} from '../types';
import { getStyleById } from '../data/styles';
import { TFunction } from 'i18next';

/**
 * Generates a dynamic, scientifically-grounded step-by-step method for the dough.
 * Adapts to hydration, fermentation technique, yeast type, and environmental conditions.
 */
export function generateTechnicalMethod(config: DoughConfig, result: DoughResult, t: (key: string, options?: any) => string): TechnicalStep[] {
    // 1. Check for Style-Specific Custom Method
    const styleDef = config.selectedStyleId ? getStyleById(config.selectedStyleId) : undefined;

    if (styleDef?.customMethod && styleDef.customMethod.length > 0) {
        return styleDef.customMethod.map((step, index) => ({
            id: `step-${index + 1}`,
            order: index + 1,
            phase: step.phase as TechnicalPhase,
            title: step.title,
            actionInstructions: step.actionInstructions,
            grandmaInstructions: step.grandmaInstructions || step.actionInstructions,
            technicalExplanation: step.technicalExplanation,
            proTip: step.proTip,
            criticalPoint: step.criticalPoint,
            durationLabel: step.durationLabel,
            temperatureLabel: step.temperatureLabel
        }));
    }

    const steps: TechnicalStep[] = [];
    let orderCounter = 1;

    const addStep = (
        phase: TechnicalPhase,
        title: string,
        actionInstructions: string,
        grandmaInstructions: string,
        options: Partial<Omit<TechnicalStep, 'id' | 'order' | 'phase' | 'title' | 'actionInstructions' | 'grandmaInstructions'>> = {}
    ) => {
        steps.push({
            id: `step-${orderCounter}`,
            order: orderCounter++,
            phase,
            title,
            actionInstructions,
            grandmaInstructions: grandmaInstructions || actionInstructions,
            ...options,
        });
    };

    // --- CONTEXT ANALYSIS ---
    const isHighHydration = config.hydration >= 70;
    const isSuperHighHydration = config.hydration >= 80;
    const isSourdough = config.yeastType === YeastType.SOURDOUGH_STARTER || config.yeastType === YeastType.USER_LEVAIN;
    const isPoolish = config.fermentationTechnique === FermentationTechnique.POOLISH;
    const isBiga = config.fermentationTechnique === FermentationTechnique.BIGA;
    const isDirect = config.fermentationTechnique === FermentationTechnique.DIRECT;
    const isNeapolitan = config.recipeStyle === RecipeStyle.NEAPOLITAN;
    const isPan = [RecipeStyle.PAN_PIZZA, RecipeStyle.DETROIT, RecipeStyle.SICILIAN, RecipeStyle.FOCACCIA, RecipeStyle.GRANDMA_STYLE].includes(config.recipeStyle);
    const isColdEnv = config.ambientTemperature === AmbientTemperature.COLD;
    const isHotEnv = config.ambientTemperature === AmbientTemperature.HOT;

    // --- PHASE 1: PREPARATION ---
    let waterAdvice = t('method:vars.water.room', "Use room temperature water (20-22°C / 68-72°F).");
    let waterTip = t('method:vars.water_tip.ideal', "Ideal Desired Dough Temperature (DDT) is 24°C (75°F).");

    if (isHotEnv) {
        waterAdvice = t('method:vars.water.hot');
        waterTip = t('method:vars.water_tip.hot');
    }
    if (isColdEnv) {
        waterAdvice = t('method:vars.water.cold');
        waterTip = t('method:vars.water_tip.cold');
    }

    addStep(
        'PREP',
        t('method:steps.prep.title', 'Mise en Place & Weighing'),
        t('method:steps.prep.desc', { waterAdvice, defaultValue: `Weigh all ingredients with a digital scale for 0.1g precision. ${waterAdvice}` }),
        t('method:steps.prep.grandma', 'Get all your ingredients ready on the counter. Use a scale! Cups are for coffee, not flour.'),
        {
            technicalExplanation: t('method:steps.prep.science', 'Precision is key. A 5% variance in water can drastically change dough rheology (flow properties).'),
            proTip: waterTip,
            criticalPoint: t('method:steps.prep.critical', 'Do not let yeast come into direct contact with salt for prolonged periods before mixing.')
        }
    );

    // --- PASTRY PATHWAY (Early Return for Non-Yeasted) ---
    // We exclude Yeasted pastries (like Croissants/Danish) so they fall through to the standard fermentation steps.
    if (config.bakeType === BakeType.SWEETS_PASTRY && !(config.yeastPercentage > 0 || isSourdough)) {
        const isBrownie = config.recipeStyle === RecipeStyle.BROWNIE;

        if (isBrownie) {
            // BROWNIE METHOD (Melted Fat & Ribbon Stage)
            addStep(
                'MIX',
                t('method:steps.brownie_melt.title'),
                t('method:steps.brownie_melt.desc'),
                t('method:steps.brownie_melt.grandma'),
                { technicalExplanation: t('method:steps.brownie_melt.science') }
            );
            addStep(
                'MIX',
                t('method:steps.brownie_ribbon.title'),
                t('method:steps.brownie_ribbon.desc'),
                t('method:steps.brownie_ribbon.grandma'),
                {
                    technicalExplanation: t('method:steps.brownie_ribbon.science'),
                    proTip: t('method:steps.brownie_ribbon.tip')
                }
            );
            addStep(
                'MIX',
                t('method:steps.brownie_fold.title'),
                t('method:steps.brownie_fold.desc'),
                t('method:steps.brownie_fold.grandma'),
                {
                    criticalPoint: t('method:steps.brownie_fold.critical')
                }
            );
            addStep(
                'BAKE',
                t('method:steps.brownie_bake.title'),
                t('method:steps.brownie_bake.desc', { temp: config.bakingTempC, tempF: (config.bakingTempC * 9 / 5 + 32).toFixed(0) }),
                t('method:steps.brownie_bake.grandma'),
                {
                    technicalExplanation: t('method:steps.brownie_bake.science'),
                }
            );
        } else {
            // COOKIE METHOD (Creaming Method)
            addStep(
                'MIX',
                t('method:steps.cookie_cream.title'),
                t('method:steps.cookie_cream.desc'),
                t('method:steps.cookie_cream.grandma'),
                {
                    technicalExplanation: t('method:steps.cookie_cream.science'),
                    criticalPoint: t('method:steps.cookie_cream.critical')
                }
            );
            addStep(
                'MIX',
                t('method:steps.cookie_emulsify.title'),
                t('method:steps.cookie_emulsify.desc'),
                t('method:steps.cookie_emulsify.grandma'),
                {
                    technicalExplanation: t('method:steps.cookie_emulsify.science')
                }
            );
            addStep(
                'MIX',
                t('method:steps.cookie_dry.title'),
                t('method:steps.cookie_dry.desc'),
                t('method:steps.cookie_dry.grandma'),
                {
                    technicalExplanation: t('method:steps.cookie_dry.science'),
                    proTip: t('method:steps.cookie_dry.tip')
                }
            );
            addStep(
                'BULK',
                t('method:steps.cookie_chill.title'),
                t('method:steps.cookie_chill.desc'),
                t('method:steps.cookie_chill.grandma'),
                {
                    durationLabel: '2-24h',
                    technicalExplanation: t('method:steps.cookie_chill.science'),
                    references: ['Maillard reaction', 'J kenji lopezalt']
                }
            );
            addStep(
                'BAKE',
                t('method:steps.cookie_bake.title'),
                t('method:steps.cookie_bake.desc', { temp: config.bakingTempC, tempF: (config.bakingTempC * 9 / 5 + 32).toFixed(0) }),
                t('method:steps.cookie_bake.grandma'),
                {
                    temperatureLabel: `${config.bakingTempC}°C`,
                    technicalExplanation: t('method:steps.cookie_bake.science')
                }
            );
        }

        return steps;
    }

    // --- LAMINATED PATHWAY (Croissant, Danish, Puff) ---
    const isLaminated = [RecipeStyle.FRENCH_CROISSANT, RecipeStyle.PASTRY_DANISH, RecipeStyle.PUFF_PASTRY].includes(config.recipeStyle);

    if (isLaminated) {
        addStep(
            'MIX',
            t('method:steps.laminated_detrempe.title'),
            t('method:steps.laminated_detrempe.desc'),
            t('method:steps.laminated_detrempe.grandma'),
            { technicalExplanation: t('method:steps.laminated_detrempe.science') }
        );
        addStep(
            'BULK',
            t('method:steps.laminated_block.title'),
            t('method:steps.laminated_block.desc'),
            t('method:steps.laminated_block.grandma'),
            { durationLabel: '12-24h', technicalExplanation: t('method:steps.laminated_block.science') }
        );
        addStep(
            'BULK',
            t('method:steps.laminated_lockin.title'),
            t('method:steps.laminated_lockin.desc'),
            t('method:steps.laminated_lockin.grandma'),
            { criticalPoint: t('method:steps.laminated_lockin.critical') }
        );
        addStep(
            'BULK',
            t('method:steps.laminated_tourage.title'),
            t('method:steps.laminated_tourage.desc'),
            t('method:steps.laminated_tourage.grandma'),
            { durationLabel: '1h+', technicalExplanation: t('method:steps.laminated_tourage.science') }
        );
        addStep(
            'DIVIDE',
            t('method:steps.laminated_shape.title'),
            t('method:steps.laminated_shape.desc'),
            t('method:steps.laminated_shape.grandma'),
            { proTip: t('method:steps.laminated_shape.tip') }
        );
        addStep(
            'PROOF',
            t('method:steps.laminated_proof.title'),
            t('method:steps.laminated_proof.desc'),
            t('method:steps.laminated_proof.grandma'),
            { durationLabel: '2-3h', criticalPoint: t('method:steps.laminated_proof.critical') }
        );
        addStep(
            'BAKE',
            t('method:steps.laminated_bake.title'),
            t('method:steps.laminated_bake.desc'),
            t('method:steps.laminated_bake.grandma'),
            { technicalExplanation: t('method:steps.laminated_bake.science') }
        );
        return steps;
    }

    // --- PHASE 2: PRE-FERMENT (Day -1) ---
    if (isPoolish) {
        addStep(
            'PREP',
            t('method:steps.poolish_prep.title'),
            t('method:steps.poolish_prep.desc'),
            t('method:steps.poolish_prep.grandma'),
            {
                durationLabel: '12-16h',
                technicalExplanation: t('method:steps.poolish_prep.science'),
                proTip: t('method:steps.poolish_prep.tip')
            }
        );
    } else if (isBiga) {
        addStep(
            'PREP',
            t('method:steps.biga_prep.title'),
            t('method:steps.biga_prep.desc'),
            t('method:steps.biga_prep.grandma'),
            {
                durationLabel: '16-24h',
                technicalExplanation: t('method:steps.biga_prep.science'),
                criticalPoint: t('method:steps.biga_prep.critical')
            }
        );
    } else if (isSourdough) {
        addStep(
            'PREP',
            t('method:steps.levain_feed.title'),
            t('method:steps.levain_feed.desc'),
            t('method:steps.levain_feed.grandma'),
            {
                durationLabel: '4-6h',
                technicalExplanation: t('method:steps.levain_feed.science')
            }
        );
    }

    // --- PHASE 3: AUTOLYSE (Optional but recommended for high hydration) ---
    if (isHighHydration && !isBiga) {
        addStep(
            'AUTO',
            t('method:steps.autolyse.title'),
            t('method:steps.autolyse.desc'),
            t('method:steps.autolyse.grandma'),
            {
                durationLabel: '30-60m',
                technicalExplanation: t('method:steps.autolyse.science'),
                references: ['Prof raymond calvel']
            }
        );
    }

    // --- PHASE 4: MIXING ---
    const mixingMethod = isHighHydration ? t('method:vars.mix.double_hydration') : t('method:vars.mix.direct');

    let mixAction = t('method:vars.mix.action.default');
    let mixGrandma = t('method:vars.mix.grandma.default');

    if (isBiga) {
        mixAction = t('method:vars.mix.action.biga');
        mixGrandma = t('method:vars.mix.grandma.biga');
    } else if (isHighHydration) {
        mixAction = t('method:vars.mix.action.high_hydration');
        mixGrandma = t('method:vars.mix.grandma.high_hydration');
    }

    addStep(
        'MIX',
        t('method:steps.mix_final.title', { method: mixingMethod }),
        t('method:steps.mix_final.desc', { mixAction }),
        t('method:steps.mix_final.grandma', { mixGrandma }),
        {
            technicalExplanation: t('method:steps.mix_final.science'),
            criticalPoint: t('method:steps.mix_final.critical')
        }
    );

    // --- PHASE 5: KNEADING / STRENGTH ---
    if (isHighHydration) {
        addStep(
            'KNEAD',
            t('method:steps.fold_coil.title'),
            t('method:steps.fold_coil.desc'),
            t('method:steps.fold_coil.grandma'),
            {
                durationLabel: '2h',
                technicalExplanation: t('method:steps.fold_coil.science'),
                proTip: t('method:steps.fold_coil.tip')
            }
        );
    } else {
        addStep(
            'KNEAD',
            t('method:steps.knead_windowpane.title'),
            t('method:steps.knead_windowpane.desc'),
            t('method:steps.knead_windowpane.grandma'),
            {
                durationLabel: '10-15m',
                technicalExplanation: t('method:steps.knead_windowpane.science'),
                references: ['The windowpane test']
            }
        );
    }

    // --- PHASE 6: BULK FERMENTATION ---
    const bulkTime = isSourdough ? '4-6h' : '2-4h';
    const bulkVisual = '30-50%';

    addStep(
        'BULK',
        t('method:steps.bulk.title'),
        t('method:steps.bulk.desc', { volume: bulkVisual }),
        t('method:steps.bulk.grandma'),
        {
            durationLabel: bulkTime,
            technicalExplanation: t('method:steps.bulk.science'),
            proTip: t('method:steps.bulk.tip')
        }
    );

    // --- PHASE 7: COLD FERMENT (Optional) ---
    // We assume cold ferment if the user selected it or if it's a standard practice for the style
    // For now, let's add it as a conditional step if the environment is not explicitly "HOT" and style supports it
    if (!isDirect && !isHotEnv) {
        addStep(
            'BULK',
            t('method:steps.cold_maturation.title'),
            t('method:steps.cold_maturation.desc'),
            t('method:steps.cold_maturation.grandma'),
            {
                durationLabel: '24-72h',
                technicalExplanation: t('method:steps.cold_maturation.science'),
                references: ['Maillard reaction precursors']
            }
        );
    }

    // --- PHASE 8: DIVIDE & SHAPE ---
    addStep(
        'DIVIDE',
        t('method:steps.staglio.title'),
        t('method:steps.staglio.desc', { count: config.numPizzas }),
        t('method:steps.staglio.grandma'),
        {
            technicalExplanation: t('method:steps.staglio.science'),
            criticalPoint: t('method:steps.staglio.critical')
        }
    );

    // --- PHASE 9: FINAL PROOF ---
    const proofTime = isNeapolitan ? '4-6h' : '2-4h';

    addStep(
        'PROOF',
        t('method:steps.proof.title'),
        t('method:steps.proof.desc'),
        t('method:steps.proof.grandma'),
        {
            durationLabel: proofTime,
            technicalExplanation: t('method:steps.proof.science'),
            proTip: t('method:steps.proof.tip')
        }
    );

    // --- PHASE 10: BAKE ---
    let bakeAction = t('method:vars.bake.action.default');
    let bakeGrandma = t('method:vars.bake.grandma.default');
    let bakeTemp = config.bakingTempC;

    if (isPan) {
        bakeAction = t('method:vars.bake.action.pan');
        bakeGrandma = t('method:vars.bake.grandma.pan');
    }

    addStep(
        'BAKE',
        t('method:steps.bake.title'),
        t('method:steps.bake.desc', { action: bakeAction }),
        t('method:steps.bake.grandma', { grandmaAction: bakeGrandma }),
        {
            temperatureLabel: `${bakeTemp}°C / ${(bakeTemp * 9 / 5 + 32).toFixed(0)}°F`,
            technicalExplanation: t('method:steps.bake.science'),
            criticalPoint: t('method:steps.bake.critical')
        }
    );

    return steps;
}
