
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

/**
 * Generates a dynamic, scientifically-grounded step-by-step method for the dough.
 * Adapts to hydration, fermentation technique, yeast type, and environmental conditions.
 */
export function generateTechnicalMethod(config: DoughConfig, result: DoughResult): TechnicalStep[] {
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
    let waterTempAdvice = "Use room temperature water (20-22°C / 68-72°F).";
    let waterTempTip = "Ideal Desired Dough Temperature (DDT) is 24°C (75°F).";

    if (isHotEnv) {
        waterTempAdvice = "Use cold water (4-10°C / 39-50°F) to counteract the warm room.";
        waterTempTip = "In hot environments, friction from mixing can overheat the dough. Cold water helps regulate this.";
    }
    if (isColdEnv) {
        waterTempAdvice = "Use warm water (25-28°C / 77-82°F) to wake up the yeast.";
        waterTempTip = "Yeast is sluggish in the cold. A warmer start helps kickstart fermentation.";
    }

    addStep(
        'PREP',
        'Mise en Place & Weighing',
        `Weigh all ingredients with a digital scale for 0.1g precision. ${waterTempAdvice}`,
        'Get all your ingredients ready on the counter. Use a scale! Cups are for coffee, not flour.',
        {
            technicalExplanation: 'Precision is key. A 5% variance in water can drastically change dough rheology (flow properties).',
            proTip: waterTempTip,
            criticalPoint: 'Do not let yeast come into direct contact with salt for prolonged periods before mixing.'
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
                'Melt Fat & Chocolate',
                'Melt the butter (and chocolate, if using) gently over a double boiler or in short bursts in the microwave. Let cool slightly (to <45°C).',
                'Melt your butter and chocolate together. Don\'t burn it! Let it cool down a bit so it doesn\'t cook the eggs.',
                { technicalExplanation: 'Melting the fat rather than creaming it yields a denser, fudgier texture by reducing air incorporation.' }
            );
            addStep(
                'MIX',
                'Ribbon Stage (Eggs & Sugar)',
                'Whisk eggs and sugar vigorously until pale, thick, and falling in "ribbons" (approx 3-5 mins).',
                'Beat the eggs and sugar until they look white and fluffy, like a milkshake.',
                {
                    technicalExplanation: 'Dissolving the sugar into the eggs creates a shiny, "papery" crust on top (meringue-like structure). Evaluating Ribbon stage ensures sufficient aeration.',
                    proTip: 'If the sugar isn\'t fully dissolved, the crust will be dull.'
                }
            );
            addStep(
                'MIX',
                'Emulsification & Folding',
                'Stream the cooled chocolate/butter mixture into the egg foam while whisking gently. Then, FOLD in the sifted dry ingredients just until combined.',
                'Pour the chocolate into the eggs and mix. Then add the flour and fold it in gently with a spatula. Don\'t overmix!',
                {
                    criticalPoint: 'Do not overmix after adding flour! Developing gluten creates a tough, rubbery brownie instead of a tender/fudgy one.'
                }
            );
            addStep(
                'BAKE',
                'Baking',
                `Bake at ${config.bakingTempC}°C (${(config.bakingTempC * 9 / 5 + 32).toFixed(0)}°F). Test with a toothpick: it should come out with moist crumbs, not wet batter.`,
                'Bake it until a toothpick comes out with a few sticky crumbs attached. If it\'s clean, you overbaked it!',
                {
                    technicalExplanation: 'Brownies rely on egg protein coagulation and sugar crystallization for structure. Carry-over cooking is significant; pull them before they seem 100% done.',
                }
            );
        } else {
            // COOKIE METHOD (Creaming Method)
            addStep(
                'MIX',
                'Creaming (Butter & Sugar)',
                'Beat softened butter and sugar(s) together until light, fluffy, and pale (3-5 mins).',
                'Mix the butter and sugar until it looks like light, fluffy frosting.',
                {
                    technicalExplanation: 'The Creaming method punches millions of micro-air bubbles into the fat. These bubbles expand during baking (leavening), creating lift and texture.',
                    criticalPoint: 'Butter must be pliable (18-20°C) but not melted. Melted butter cannot hold air bubbles.'
                }
            );
            addStep(
                'MIX',
                'Emulsification (Liquids)',
                'Add eggs one at a time, beating well after each addition. Scrape down the bowl.',
                'Add the eggs one by one. Mix well so it doesn\'t look curdled.',
                {
                    technicalExplanation: 'Eggs are mostly water; butter is fat. Incremental addition allows the lecithin in egg yolks to emulsify the water into the fat phase, preventing breaking.'
                }
            );
            addStep(
                'MIX',
                'Incorporation (Dry Ingredients)',
                'Add dry ingredients (flour, salt, leaveners) all at once. Mix on LOW speed just until streaks of flour disappear.',
                'Add the flour and mix slowly. Stop as soon as the white powder is gone.',
                {
                    technicalExplanation: 'Minimize mixing time after adding flour to limit gluten development. Short gluten strands = tender cookies.',
                    proTip: 'Add mix-ins (chips, nuts) now.'
                }
            );
            addStep(
                'BULK',
                'Cold Maturation (Chilling)',
                'Chill the dough for at least 2-24 hours before scooping/baking.',
                'Put the dough in the fridge for a few hours (or overnight). It makes better cookies!',
                {
                    durationLabel: '2-24h',
                    technicalExplanation: 'Chilling hydrates the flour (less spread), solidifies the fat (less spread), and allows enzymes to break down carbohydrates (browning/flavor).',
                    references: [Maillard reaction, J kenji lopezalt]
                }
            );
            addStep(
                'BAKE',
                'Baking',
                `Bake at ${config.bakingTempC}°C (${(config.bakingTempC * 9 / 5 + 32).toFixed(0)}°F) until edges are set but centers are soft.`,
                'Bake until the edges look golden brown. The center should still look a bit soft.',
                {
                    temperatureLabel: `${config.bakingTempC}°C`,
                    technicalExplanation: 'Sugar caramelization and Maillard browning occur rapidly. The center will finish setting on the hot baking sheet out of the oven.'
                }
            );
        }

        return steps;
    }

    // --- LAMINATED PATHWAY (Croissant, Danish, Puff) ---
    const isLaminated = [RecipeStyle.FRENCH_CROISSANT, RecipeStyle.PASTRY_DANISH, Puffpastry].includes(config.recipeStyle);

    if (isLaminated) {
        addStep(
            'MIX',
            'Detrempe (Base Dough)',
            'Mix flour, water, yeast, salt, sugar, and the dough-portion butter until just combined. Do not overdevelop gluten (keep extensible).',
            'Mix the dough ingredients just until they come together. Don\'t knead it too hard!',
            { technicalExplanation: 'Keeping the gluten structure slightly underdeveloped in the detrempe ensures extensibility for the subsequent lamination process.' }
        );
        addStep(
            'BULK',
            'Disk/Block Formation',
            'Flatten dough into a rectangle or disk, wrap tightly in plastic, and chill for 12-24 hours.',
            'Flatten the dough, wrap it up, and put it in the fridge overnight.',
            { durationLabel: '12-24h', technicalExplanation: 'Chilling relaxes the gluten and ensures the dough matches the temperature/consistency of the butter block for lamination.' }
        );
        addStep(
            'BULK',
            'Lock-in (Beurrage)',
            'Pound the butter block until pliable but cold (10-12°C). Encase it in the dough sheet.',
            'Smash the butter until it bends but doesn\'t break. Wrap the dough around it.',
            { criticalPoint: 'Butter and dough must have the same consistency to prevent shattering (too cold) or absorption (too warm).' }
        );
        addStep(
            'BULK',
            'Lamination (Tourage)',
            'Perform 1 Double Fold (Book) and 1 Simple Fold (Letter), resting 30m in fridge between folds.',
            'Fold the dough like a book, then rest. Then fold like a letter. Keep it cold!',
            { durationLabel: '1h+', technicalExplanation: 'This process creates distinct alternating layers of fat and dough (55 layers for classic croissant) which puff upon baking.' }
        );
        addStep(
            'DIVIDE',
            'Shaping',
            'Roll to 4mm thickness. Cut into triangles (10cm x 25cm). Elongate gently and roll tight. Egg wash.',
            'Roll it out thin, cut long triangles, and roll them up tight. Brush with egg.',
            { proTip: 'Cut with a decisive, downward motion (pizza cutter) to avoid sealing the layers at the edges.' }
        );
        addStep(
            'PROOF',
            'Final Proof',
            'Proof at 26-28°C (78-82°F) until doubled and jiggly (2-3h). Layers should separate slightly.',
            'Let them rise until they jiggle like jelly. Don\'t let it get too hot!',
            { durationLabel: '2-3h', criticalPoint: 'Avoid temperatures above 29°C (84°F) or the butter layers will melt, ruining the flaky structure.' }
        );
        addStep(
            'BAKE',
            'Baking',
            `Bake at 200°C (390°F) for 5-7m, then lower to 190°C (375°F) for 12-15m until deep golden brown.`,
            'Bake hot at first for puff, then lower the heat to finish cooking.',
            { technicalExplanation: 'Initial high heat creates steam for "oven spring" and separates layers before the crust sets.' }
        );
        return steps;
    }

    // --- PHASE 2: PRE-FERMENT (Day -1) ---
    if (isPoolish) {
        addStep(
            'PREP',
            'Prepare Poolish (Day -1)',
            `Mix the Poolish flour and water (1:1 ratio) with the tiny amount of yeast. Cover and ferment for 12-16h at room temperature (18-20°C).`,
            'Mix the poolish ingredients in a jar until it looks like pancake batter. Cover it and leave it on the counter overnight.',
            {
                durationLabel: '12-16h',
                technicalExplanation: 'Poolish is a 100% hydration preferment. It boosts protease activity (extensibility) and creates complex organic acids for flavor.',
                proTip: 'The poolish is ready when it is bubbly, doubled in size, and the center begins to collapse (the "drop").'
            }
        );
    } else if (isBiga) {
        addStep(
            'PREP',
            'Prepare Biga (Day -1)',
            `Mix Biga ingredients gently. Do not knead! You want a shaggy, unmixed mass. Ferment 16-24h at 16-18°C (60-64°F).`,
            'Mix the biga flour, water and yeast just enough so there is no dry flour. It should look lumpy and dry. Leave it overnight in a cool spot.',
            {
                durationLabel: '16-24h',
                technicalExplanation: 'Biga is a stiff preferment (45-50% hydration). Its low water activity favors acetic acid production, giving strength and a complex, slightly sour flavor profile.',
                criticalPoint: 'Over-mixing the Biga will develop too much gluten too early, making it impossible to incorporate into the final dough.'
            }
        );
    } else if (isSourdough) {
        addStep(
            'PREP',
            'Feed Levain',
            'Ensure your starter is active and fed 4-6 hours before mixing. It should be at peak rise.',
            'Feed your sourdough starter so it is bubbly and happy before you start.',
            {
                durationLabel: '4-6h',
                technicalExplanation: 'Using starter at peak activity ensures maximum yeast population and optimal pH balance (avoiding excessive acidity that degrades gluten).'
            }
        );
    }

    // --- PHASE 3: AUTOLYSE (Optional but recommended for high hydration) ---
    if (isHighHydration && !isBiga) {
        addStep(
            'AUTO',
            'Autolyse',
            'Mix only the Flour and Water until no dry flour remains. Cover and rest for 30-60 minutes. Do not add salt, yeast, or oil yet.',
            'Mix just the flour and water together. Let it sit for 30 mins. This helps the flour soak up the water.',
            {
                durationLabel: '30-60m',
                technicalExplanation: 'Autolyse allows protease enzymes to degrade some gluten bonds, increasing extensibility. It also fully hydrates starch and protein, reducing mixing time and oxidation.',
                references: [Prof raymond calvel]
            }
        );
    }

    // --- PHASE 4: MIXING ---
    const mixingMethod = isHighHydration ? 'Double Hydration (Bassinage)' : 'Direct Mixing';

    let mixAction = 'Add yeast and mix. Then add salt. Finally, add oil (if using) once the dough has formed.';
    let mixGrandma = 'Add the yeast and mix it in. Then add the salt. If the recipe has oil, add it last.';

    if (isBiga) {
        mixAction = 'Cut the Biga into small pieces into the water. Squeeze to break it up. Gradually add the remaining flour. Add salt last.';
        mixGrandma = 'Break the stiff Biga into the water with your hands until it\'s milky. Then add the rest of the flour and salt.';
    } else if (isHighHydration) {
        mixAction = 'Add yeast and salt. Mix to develop structure. Then, slowly trickle in the remaining water (Bassinage) while mixing to maintain strength.';
        mixGrandma = 'Mix the yeast and salt in. Once it looks like dough, slowly add the rest of the water bit by bit.';
    }

    addStep(
        'MIX',
        `Final Mixing (${mixingMethod})`,
        mixAction,
        mixGrandma,
        {
            technicalExplanation: 'Salt is hygroscopic and strengthens gluten but dehydrates yeast. Oil coats gluten proteins and inhibits bond formation, so it must be added after the network is established.',
            criticalPoint: 'Stop mixing if the dough exceeds 26°C (79°F) to prevent gluten degradation.'
        }
    );

    // --- PHASE 5: KNEADING / STRENGTH ---
    if (isHighHydration) {
        addStep(
            'KNEAD',
            'Coil Folds (Strength Building)',
            'Perform a set of Coil Folds every 30 minutes for the first 2 hours of bulk fermentation. Wet your hands to prevent sticking.',
            'Every 30 mins, lift the dough up and let it fold under itself. Do this 3-4 times. It makes the dough strong.',
            {
                durationLabel: '2h',
                technicalExplanation: 'High hydration doughs cannot be kneaded traditionally. Folding aligns gluten strands passively through gravity and extension, building structure without tearing.',
                proTip: 'If the dough tears, let it rest 10 mins longer. Extensibility comes from rest; elasticity comes from folding.'
            }
        );
    } else {
        addStep(
            'KNEAD',
            'Kneading & Windowpane',
            'Knead (by hand or machine) until the dough passes the Windowpane Test: it should stretch thin enough to see light through without tearing.',
            'Knead the dough on the counter until it is smooth like a baby\'s bottom. It should bounce back when you poke it.',
            {
                durationLabel: '10-15m',
                technicalExplanation: 'Mechanical action unfolds the protein coils (glutenin/gliadin) and encourages cross-linking (disulfide bonds), creating a viscoelastic network capable of trapping CO2.',
                references: [The windowpane test]
            }
        );
    }

    // --- PHASE 6: BULK FERMENTATION ---
    const bulkTime = isSourdough ? '4-6h' : '2-4h';
    const bulkVisual = 'volume increases by 30-50%';

    addStep(
        'BULK',
        'Bulk Fermentation',
        `Allow the entire dough mass to ferment in a covered container until ${bulkVisual}.`,
        `Let the dough sit in a bowl covered with plastic wrap until it looks puffy and has grown by about half.`,
        {
            durationLabel: bulkTime,
            technicalExplanation: 'Yeast converts sugars into CO2 (rise) and ethanol (flavor). Organic acids develop. The gluten network relaxes.',
            proTip: 'Use a straight-sided container to accurately judge the volume increase.'
        }
    );

    // --- PHASE 7: COLD FERMENT (Optional) ---
    // We assume cold ferment if the user selected it or if it's a standard practice for the style
    // For now, let's add it as a conditional step if the environment is not explicitly "HOT" and style supports it
    if (!isDirect && !isHotEnv) {
        addStep(
            'BULK',
            'Cold Maturation (Retardation)',
            'Place the dough in the fridge (4°C/39°F) for 24-72 hours.',
            'Put the dough in the fridge. You can leave it there for up to 3 days. The longer, the tastier.',
            {
                durationLabel: '24-72h',
                technicalExplanation: 'Cold temperatures slow yeast activity (CO2) but allow enzymatic activity (protease/amylase) and bacterial fermentation (LAB) to continue, developing complex flavors and digestibility.',
                references: [Maillard reaction precursors]
            }
        );
    }

    // --- PHASE 8: DIVIDE & SHAPE ---
    addStep(
        'DIVIDE',
        'Staglio (Divide & Ball)',
        `Divide dough into ${config.numPizzas} equal portions. Shape into tight balls using surface tension.`,
        'Cut the dough into equal pieces. Roll them into tight, smooth balls.',
        {
            technicalExplanation: 'Creating a "skin" of surface tension on the dough ball forces gases to expand upward rather than outward during the final proof.',
            criticalPoint: 'Close the bottom seam of the ball tightly to prevent gas leakage.'
        }
    );

    // --- PHASE 9: FINAL PROOF ---
    const proofTime = isNeapolitan ? '4-6h' : '2-4h';

    addStep(
        'PROOF',
        'Final Proof (Apprêt)',
        `Cover dough balls and proof at room temperature until relaxed and soft to the touch (Poke Test).`,
        'Cover the balls and let them rest on the counter until they look soft and pillowy. If you poke it, the dent should spring back slowly.',
        {
            durationLabel: proofTime,
            technicalExplanation: 'The gluten relaxes (extensibility increases), allowing the dough to be stretched without snapping back. Yeast re-inflates the structure.',
            proTip: 'If the dough springs back immediately when poked, it needs more time. If the dent stays forever, it might be over-proofed.'
        }
    );

    // --- PHASE 10: BAKE ---
    let bakeAction = 'Stretch gently. Top sparingly. Bake on pre-heated stone/steel.';
    let bakeGrandma = 'Stretch it out, put your toppings on, and bake it hot!';
    let bakeTemp = config.bakingTempC;

    if (isPan) {
        bakeAction = 'Press dough into oiled pan. Let rise again in pan for 30m. Top and bake.';
        bakeGrandma = 'Push the dough into the pan. Let it rest a bit. Top and bake.';
    }

    addStep(
        'BAKE',
        'Baking & Oven Spring',
        bakeAction,
        bakeGrandma,
        {
            temperatureLabel: `${bakeTemp}°C / ${(bakeTemp * 9 / 5 + 32).toFixed(0)}°F`,
            technicalExplanation: 'Rapid heat transfer causes Oven spring (gas expansion) before the crust sets. Maillard reaction occurs above 140°C (284°F), creating browning and flavor.',
            criticalPoint: 'Do not overload with wet toppings, or the heat transfer will be blocked, resulting in a "gum line" (undercooked layer).'
        }
    );

    return steps;
}
