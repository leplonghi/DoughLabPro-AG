import { LearnArticleData } from '@/types/learn';

import * as Additives from './additives';
import * as AmbientVsCold from './ambient-vs-cold';
import * as Autolyse from './autolyse';
import * as BakingProfilesByStyle from './baking-profiles-by-style';
import * as BakingSurfacesAndHeatTransfer from './baking-surfaces-and-heat-transfer';
import * as BallingTechnique from './balling-technique';
import * as BulkFermentation from './bulk-fermentation';
import * as CaramelizableVegetables from './caramelizable-vegetables';
import * as ColdFermentation from './cold-fermentation';
import * as CrustFormationDynamics from './crust-formation-dynamics';
import * as CuredMeats from './cured-meats';
import * as DenseCrumb from './dense-crumb';
import * as DividingBalling from './dividing-balling';
import * as DoughAging from './dough-aging';
import * as DoughBallingTensioning from './dough-balling-tensioning';
import * as DoughDevelopment from './dough-development';
import * as DoughRheology from './dough-rheology';
import * as DoughScience from './dough-science';
import * as ExcessAcidity from './excess-acidity';
import * as Extensibility from './extensibility';
import * as Fats from './fats';
import * as FermentationBasics from './fermentation-basics';
import * as FermentationCurves from './fermentation-curves';
import * as FermentationFundamentals from './fermentation-fundamentals';
import * as Fermentation from './fermentation';
import * as FinalProofingControl from './final-proofing-control';
import * as Flours from './flours';
import * as FoodSafetyAndDoughHandling from './food-safety-and-dough-handling';
import * as GasBubbleBlowouts from './gas-bubble-blowouts';
import * as GlutenNetwork from './gluten-network';
import * as GummyCrumb from './gummy-crumb';
import * as HandlingDelicateDoughs from './handling-delicate-doughs';
import * as HighHydration from './high-hydration';
import * as LaminationLayeringTechniques from './lamination-layering-techniques';
import * as LowMoistureCheeses from './low-moisture-cheeses';
import * as MixingTechniques from './mixing-techniques';
import * as OvenSpring from './oven-spring';
import * as OvenTypesAndConstraints from './oven-types-and-constraints';
import * as OverproofUnderproof from './overproof-underproof';
import * as PaleCrust from './pale-crust';
import * as PoorOvenSpring from './poor-oven-spring';
import * as PrefermentsOverview from './preferments-overview';
import * as ProofingTiming from './proofing-timing';
import * as RegionalCombos from './regional-combos';
import * as RollingVsStretching from './rolling-vs-stretching';
import * as Salt from './salt';
import * as SensoryMaturation from './sensory-maturation';
import * as ShapingFundamentals from './shaping-fundamentals';
import * as SmokedAromatics from './smoked-aromatics';
import * as SmokedCheeses from './smoked-cheeses';
import * as StarchGelatinization from './starch-gelatinization';
import * as StickyDough from './sticky-dough';
import * as StretchAndFold from './stretch-and-fold';
import * as Sugars from './sugars';
import * as TemperatureManagementAndProfiling from './temperature-management-and-profiling';
import * as TemperatureProfiles from './temperature-profiles';
import * as ToughDough from './tough-dough';
import * as UnevenBrowning from './uneven-browning';
import * as WaterRichVegetables from './water-rich-vegetables';
import * as Water from './water';
import * as WeakGlutenStructure from './weak-gluten-structure';
import * as WholeGrains from './whole-grains';
import * as WorkflowAndServicePlanning from './workflow-and-service-planning';
import * as Yeasts from './yeasts';

const modules = [
    Additives, AmbientVsCold, Autolyse, BakingProfilesByStyle, BakingSurfacesAndHeatTransfer,
    BallingTechnique, BulkFermentation, CaramelizableVegetables, ColdFermentation,
    CrustFormationDynamics, CuredMeats, DenseCrumb, DividingBalling, DoughAging,
    DoughBallingTensioning, DoughDevelopment, DoughRheology, DoughScience, ExcessAcidity,
    Extensibility, Fats, FermentationBasics, FermentationCurves, FermentationFundamentals,
    Fermentation, FinalProofingControl, Flours, FoodSafetyAndDoughHandling, GasBubbleBlowouts,
    GlutenNetwork, GummyCrumb, HandlingDelicateDoughs, HighHydration, LaminationLayeringTechniques,
    LowMoistureCheeses, MixingTechniques, OvenSpring, OvenTypesAndConstraints, OverproofUnderproof,
    PaleCrust, PoorOvenSpring, PrefermentsOverview, ProofingTiming, RegionalCombos,
    RollingVsStretching, Salt, SensoryMaturation, ShapingFundamentals, SmokedAromatics,
    SmokedCheeses, StarchGelatinization, StickyDough, StretchAndFold, Sugars,
    TemperatureManagementAndProfiling, TemperatureProfiles, ToughDough, UnevenBrowning,
    WaterRichVegetables, Water, WeakGlutenStructure, WholeGrains, WorkflowAndServicePlanning, Yeasts
];

export const learnContent: Record<string, LearnArticleData> = {};

modules.forEach(mod => {
    Object.values(mod).forEach(val => {
        if (val && typeof val === 'object' && 'id' in val && 'title' in val) {
            const article = val as LearnArticleData;
            learnContent[article.id] = article;
        }
    });
});

export * from './additives';
export * from './ambient-vs-cold';
export * from './autolyse';
export * from './baking-profiles-by-style';
export * from './baking-surfaces-and-heat-transfer';
export * from './balling-technique';
export * from './bulk-fermentation';
export * from './caramelizable-vegetables';
export * from './cold-fermentation';
export * from './crust-formation-dynamics';
export * from './cured-meats';
export * from './dense-crumb';
export * from './dividing-balling';
export * from './dough-aging';
export * from './dough-balling-tensioning';
export * from './dough-development';
export * from './dough-rheology';
export * from './dough-science';
export * from './excess-acidity';
export * from './extensibility';
export * from './fats';
export * from './fermentation-basics';
export * from './fermentation-curves';
export * from './fermentation-fundamentals';
export * from './fermentation';
export * from './final-proofing-control';
export * from './flours';
export * from './food-safety-and-dough-handling';
export * from './gas-bubble-blowouts';
export * from './gluten-network';
export * from './gummy-crumb';
export * from './handling-delicate-doughs';
export * from './high-hydration';
export * from './lamination-layering-techniques';
export * from './low-moisture-cheeses';
export * from './mixing-techniques';
export * from './oven-spring';
export * from './oven-types-and-constraints';
export * from './overproof-underproof';
export * from './pale-crust';
export * from './poor-oven-spring';
export * from './preferments-overview';
export * from './proofing-timing';
export * from './regional-combos';
export * from './rolling-vs-stretching';
export * from './salt';
export * from './sensory-maturation';
export * from './shaping-fundamentals';
export * from './smoked-aromatics';
export * from './smoked-cheeses';
export * from './starch-gelatinization';
export * from './sticky-dough';
export * from './stretch-and-fold';
export * from './sugars';
export * from './temperature-management-and-profiling';
export * from './temperature-profiles';
export * from './tough-dough';
export * from './uneven-browning';
export * from './water-rich-vegetables';
export * from './water';
export * from './weak-gluten-structure';
export * from './whole-grains';
export * from './workflow-and-service-planning';
export * from './yeasts';
