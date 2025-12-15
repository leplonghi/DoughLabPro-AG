import React, { createContext, useContext, useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
    DoughConfig,
    BakeType,
    YeastType,
    FermentationTechnique,
    Unit,
    UnitSystem,
    CalculationMode,
    DoughResult,
    FormErrors,
    ProRecipe,
    DoughStyleDefinition,
    RecipeStyle,
    IngredientConfig
} from '@/types';
import { DOUGH_STYLE_PRESETS, DEFAULT_CONFIG, DOUGH_WEIGHT_RANGES } from '@/constants';
import { FLOURS } from '@/flours-constants';
import { calculateDoughUniversal, syncIngredientsFromConfig } from '@/logic/doughMath';
import { normalizeDoughConfig } from '@/logic/normalization';
import { convertStyleToDoughConfig } from '@/utils/doughConversion';
import { STYLES_DATA } from '@/data/styles/registry';
import { logEvent } from '@/services/analytics';
import { useUser } from '@/contexts/UserProvider';
import { useToast } from '@/components/ToastProvider';
import { useTranslation } from '@/i18n';

interface CalculatorContextType {
    config: DoughConfig;
    setConfig: React.Dispatch<React.SetStateAction<DoughConfig>>;
    calculatorMode: 'basic' | 'advanced';
    setCalculatorMode: (mode: 'basic' | 'advanced') => void;
    calculationMode: CalculationMode;
    setCalculationMode: React.Dispatch<React.SetStateAction<CalculationMode>>;
    unit: Unit;
    setUnit: React.Dispatch<React.SetStateAction<Unit>>;
    unitSystem: UnitSystem;
    setUnitSystem: React.Dispatch<React.SetStateAction<UnitSystem>>;
    errors: FormErrors;
    results: DoughResult | null;
    hasInteracted: boolean;
    setHasInteracted: React.Dispatch<React.SetStateAction<boolean>>;

    // Handlers
    handleConfigChange: (newConfig: Partial<DoughConfig>) => void;
    handleBakeTypeChange: (bakeType: BakeType) => void;
    handleStyleChange: (presetId: string) => void;
    handleYeastTypeChange: (yeastType: YeastType) => void;
    handleLoadProRecipe: (newConfig: ProRecipe['config']) => void;
    handleLoadAndNavigate: (configToLoad: Partial<DoughConfig>, navigate: (page: string) => void) => void;
    handleLoadStyleFromModule: (style: DoughStyleDefinition, navigate: (page: string) => void) => void;
    resetConfig: () => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

const isAnySourdough = (yeastType: YeastType) =>
    [YeastType.SOURDOUGH_STARTER, YeastType.USER_LEVAIN].includes(yeastType);

export const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { t } = useTranslation();
    const { user, levains, preferredFlourId } = useUser();
    const { addToast } = useToast();
    const previousErrorsRef = useRef<FormErrors>({});

    // --- State ---
    const [calculatorMode, setCalculatorMode] = useState<'basic' | 'advanced'>(() => {
        try {
            const storedMode = localStorage.getItem('doughlab_mode');
            return storedMode === 'advanced' ? 'advanced' : 'basic';
        } catch {
            return 'basic';
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('doughlab_mode', calculatorMode);
        } catch (error) {
            console.error('Failed to save mode to localStorage', error);
        }
    }, [calculatorMode]);

    const initialConfig = useMemo(() => {
        let config = { ...DEFAULT_CONFIG, stylePresetId: undefined };
        const preset = DOUGH_STYLE_PRESETS.find(p => p.id === DEFAULT_CONFIG.stylePresetId);
        if (preset?.preferredFlourProfileId) {
            config.flourId = preset.preferredFlourProfileId;
        } else if (preferredFlourId) {
            config.flourId = preferredFlourId;
        }
        return config;
    }, [preferredFlourId]);

    const [config, setConfig] = useState<DoughConfig>(initialConfig);
    const [calculationMode, setCalculationMode] = useState<CalculationMode>('mass');
    const [unit, setUnit] = useState<Unit>('g');
    const [unitSystem, setUnitSystem] = useState<UnitSystem>(UnitSystem.METRIC);
    const [errors, setErrors] = useState<FormErrors>({});
    const [hasInteracted, setHasInteracted] = useState(false);

    // --- Validation ---
    useEffect(() => {
        const validationErrors: FormErrors = {};

        if (config.numPizzas < 1 || config.numPizzas > 100) {
            validationErrors.numPizzas = 'A value between 1 and 100 is recommended.';
        }
        // Dynamic Weight Validation based on Style
        let minW = 100;
        let maxW = 2000;

        // Try to find the full definition
        const fullStyle = STYLES_DATA.find(s => s.id === config.stylePresetId);

        if (fullStyle?.specs?.ballWeight) {
            minW = fullStyle.specs.ballWeight.min;
            maxW = fullStyle.specs.ballWeight.max;
        } else if (config.recipeStyle && DOUGH_WEIGHT_RANGES[config.recipeStyle]) {
            const rangeStr = DOUGH_WEIGHT_RANGES[config.recipeStyle] || '';
            const nums = rangeStr.replace('g', '').split('-').map(s => parseFloat(s.trim()));
            if (nums.length === 2 && !isNaN(nums[0]) && !isNaN(nums[1])) {
                minW = nums[0];
                maxW = nums[1];
            }
        }

        if (config.doughBallWeight < minW || config.doughBallWeight > maxW) {
            validationErrors.doughBallWeight = `A value between ${minW}g and ${maxW}g is recommended.`;
        }
        if (config.hydration < 0 || config.hydration > 120) {
            validationErrors.hydration = 'A value between 0% and 120% is recommended.';
        }
        if (config.scale < 0.25 || config.scale > 4) {
            validationErrors.scale = 'A scale multiplier between 0.25x and 4x is recommended.';
        }
        if (config.bakingTempC < 150 || config.bakingTempC > 500) {
            validationErrors.bakingTempC = 'A value between 150°C and 500°C is recommended.';
        }
        const maxYeast = isAnySourdough(config.yeastType) ? 50 : 5;
        if (config.yeastPercentage < 0 || config.yeastPercentage > maxYeast) {
            validationErrors.yeastPercentage = `A value between 0% and ${maxYeast}% is recommended.`;
        }
        if (config.fermentationTechnique !== FermentationTechnique.DIRECT) {
            if (
                config.prefermentFlourPercentage < 10 ||
                config.prefermentFlourPercentage > 100
            ) {
                validationErrors.prefermentFlourPercentage = 'A value between 10% and 100% is recommended.';
            }
        }
        setErrors(validationErrors);
    }, [config]);

    useEffect(() => {
        const currentErrors = errors;
        const previousErrors = previousErrorsRef.current;

        Object.entries(currentErrors).forEach(([key, message]) => {
            if (typeof message === 'string' && previousErrors[key as keyof FormErrors] !== message) {
                addToast(message, 'error');
            }
        });

        previousErrorsRef.current = currentErrors;
    }, [errors, addToast]);

    const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

    const results = useMemo(() => {
        if (hasErrors) return null;
        // We don't check for route here, as context is agnostic of route. 
        // Consumers can decide whether to show results.

        const userLevain = config.yeastType === YeastType.USER_LEVAIN
            ? levains.find(l => l.id === config.levainId)
            : null;
        return calculateDoughUniversal(config, calculatorMode, calculationMode, userLevain);
    }, [config, hasErrors, levains, calculatorMode, calculationMode]);

    // --- Handlers ---

    const handleConfigChange = useCallback((newConfig: Partial<DoughConfig>) => {
        setHasInteracted(true);

        let updatedConfig = {
            ...config,
            ...newConfig,
            stylePresetId: calculatorMode === 'basic' ? config.stylePresetId : undefined
        };

        updatedConfig = normalizeDoughConfig(updatedConfig);
        const syncedIngredients = syncIngredientsFromConfig(updatedConfig);
        updatedConfig.ingredients = syncedIngredients;

        setConfig(updatedConfig);
    }, [calculatorMode, config]);

    const handleBakeTypeChange = useCallback(
        (bakeType: BakeType) => {
            setHasInteracted(true);
            const firstMatchingPreset = DOUGH_STYLE_PRESETS.find(
                (p) => p.type === bakeType,
            );

            if (firstMatchingPreset) {
                const { recipeStyle, defaultHydration, defaultSalt, defaultOil, defaultYeastPct, defaultSugar, preferredFlourProfileId } =
                    firstMatchingPreset;
                const presetValues: Partial<DoughConfig> = {
                    hydration: defaultHydration,
                    salt: defaultSalt,
                    oil: defaultOil,
                    sugar: defaultSugar || 0,
                };

                if (defaultYeastPct !== undefined && !isAnySourdough(config.yeastType)) {
                    presetValues.yeastPercentage = defaultYeastPct;
                }
                if (preferredFlourProfileId) {
                    presetValues.flourId = preferredFlourProfileId;
                }

                let newConf = {
                    ...initialConfig,
                    ...config,
                    bakeType,
                    recipeStyle: recipeStyle,
                    ...presetValues,
                    stylePresetId: firstMatchingPreset.id,
                };
                newConf = normalizeDoughConfig(newConf);
                newConf.ingredients = syncIngredientsFromConfig(newConf);
                setConfig(newConf);
            } else {
                let newConf = { ...config, bakeType, stylePresetId: undefined };
                newConf = normalizeDoughConfig(newConf);
                newConf.ingredients = syncIngredientsFromConfig(newConf);
                setConfig(newConf);
            }
        },
        [initialConfig, config.yeastType, config],
    );

    const handleStyleChange = useCallback((presetId: string) => {
        setHasInteracted(true);
        const preset = DOUGH_STYLE_PRESETS.find((p) => p.id === presetId);

        // Try to find the full definition in the registry to get ingredients
        const fullStyle = STYLES_DATA.find(s => s.id === presetId);

        if (preset) {
            const { defaultHydration, defaultSalt, defaultOil, defaultYeastPct, defaultSugar, preferredFlourProfileId, recipeStyle, type } = preset;
            const presetValues: Partial<DoughConfig> = {
                hydration: defaultHydration,
                salt: defaultSalt,
                oil: defaultOil,
                sugar: defaultSugar || 0,
            };
            if (defaultYeastPct !== undefined && !isAnySourdough(config.yeastType)) {
                presetValues.yeastPercentage = defaultYeastPct;
            }
            if (preferredFlourProfileId) {
                presetValues.flourId = preferredFlourProfileId;
            }

            // If we found a full style definition, try to extract ingredients from it
            // Defaults (based on Pizza standard)
            let targetWeight = 250;
            let targetCount = 4;

            // If we found a full style definition, try to extract ingredients and specific defaults
            let ingredients: any[] | undefined = undefined;

            if (fullStyle) {
                const converted = convertStyleToDoughConfig(fullStyle);
                if (converted.ingredients && converted.ingredients.length > 0) {
                    ingredients = converted.ingredients;
                }
                // Use converted defaults if available explicitly
                if (fullStyle.specs.ballWeight?.recommended) {
                    targetWeight = fullStyle.specs.ballWeight.recommended;
                } else if (converted.doughBallWeight) {
                    targetWeight = converted.doughBallWeight;
                }
                if (converted.numPizzas) targetCount = converted.numPizzas;
            }

            // Refine Quantity Defaults based on BakeType/Style if not explicit
            if (preset.type === BakeType.BREADS_SAVORY) targetCount = 2;
            if (preset.type === BakeType.SWEETS_PASTRY) {
                // Cookies
                if (recipeStyle === RecipeStyle.COOKIES || presetId.includes('cookie') || presetId.includes('brownie')) {
                    targetCount = 12;
                    targetWeight = 80;
                } else {
                    // Generic Pastry (Croissants, Cinnamon Rolls)
                    targetCount = 8;
                    targetWeight = 100;
                }
            }

            // Override with Range Data if available and standard
            if (DOUGH_WEIGHT_RANGES[recipeStyle]) {
                const rangeStr = DOUGH_WEIGHT_RANGES[recipeStyle] || '';
                const nums = rangeStr.replace('g', '').split('-').map(s => parseFloat(s.trim()));
                // Only override if we haven't got a specific "converted" weight
                if (!fullStyle || !convertStyleToDoughConfig(fullStyle).doughBallWeight) {
                    if (nums.length === 2 && !isNaN(nums[0]) && !isNaN(nums[1])) {
                        targetWeight = (nums[0] + nums[1]) / 2;
                    } else if (nums.length === 1 && !isNaN(nums[0])) {
                        targetWeight = nums[0];
                    }
                }
            }

            let newConf = {
                ...config,
                recipeStyle,
                ...presetValues,
                doughBallWeight: targetWeight,
                numPizzas: targetCount,
                stylePresetId: preset.id,
            };

            newConf = normalizeDoughConfig(newConf);

            // If we have specific ingredients from the registry, use them.
            // Otherwise, sync from the sliders.
            if (ingredients) {
                newConf.ingredients = ingredients;
                // Sync scalar sliders to match the authentic recipe's ingredients definitions
                // This ensures the sliders start at the correct positions (e.g. 75% sugar for Brownie)
                const totalHydration = ingredients.filter(i => i.role === 'water').reduce((sum, i) => sum + (i.bakerPercentage || 0), 0);
                const totalSalt = ingredients.filter(i => i.role === 'salt').reduce((sum, i) => sum + (i.bakerPercentage || 0), 0);
                const totalFat = ingredients.filter(i => i.role === 'fat').reduce((sum, i) => sum + (i.bakerPercentage || 0), 0);
                const totalSugar = ingredients.filter(i => i.role === 'sugar').reduce((sum, i) => sum + (i.bakerPercentage || 0), 0);

                if (totalHydration > 0) newConf.hydration = totalHydration;
                if (totalSalt > 0) newConf.salt = totalSalt;
                if (totalFat > 0) newConf.oil = totalFat;
                // For sugar, we allow 0 if the recipe is explicitly Savory but has sugar role? 
                // Usually safe to sync.
                if (totalSugar > 0) newConf.sugar = totalSugar;

            } else {
                newConf.ingredients = syncIngredientsFromConfig(newConf);
            }

            setConfig(newConf);
        }
    }, [config.yeastType, config]);

    const handleYeastTypeChange = useCallback((yeastType: YeastType) => {
        setHasInteracted(true);
        setConfig((prev) => {
            const newConfig: Partial<DoughConfig> = { ...prev, yeastType, stylePresetId: undefined };
            if (isAnySourdough(yeastType)) {
                newConfig.fermentationTechnique = FermentationTechnique.DIRECT;
                if (!isAnySourdough(prev.yeastType)) {
                    newConfig.yeastPercentage = 20;
                }
                if (yeastType === YeastType.USER_LEVAIN && levains.length > 0) {
                    const defaultLevain = levains.find(l => l.isDefault) || levains[0];
                    newConfig.levainId = defaultLevain.id;
                    if (user) {
                        logEvent('levain_pet_used_in_recipe', { userId: user.email, levainId: defaultLevain.id, recipeId: prev.stylePresetId || 'custom' });
                    }
                }
            } else if (isAnySourdough(prev.yeastType)) {
                newConfig.fermentationTechnique = FermentationTechnique.DIRECT;
                newConfig.yeastPercentage = 0.4;
            }

            let merged = { ...prev, ...newConfig } as DoughConfig;
            merged = normalizeDoughConfig(merged);
            merged.ingredients = syncIngredientsFromConfig(merged);
            return merged;
        });
    }, [levains, user]);

    const handleLoadProRecipe = useCallback((newConfig: ProRecipe['config']) => {
        setHasInteracted(true);
        let fullConfig = { ...config, ...newConfig, stylePresetId: undefined };
        fullConfig = normalizeDoughConfig(fullConfig);
        fullConfig.ingredients = syncIngredientsFromConfig(fullConfig);
        setConfig(fullConfig);
    }, [config]);

    const handleLoadAndNavigate = useCallback((configToLoad: Partial<DoughConfig>, navigate: (page: string) => void) => {
        setHasInteracted(true);
        let merged = { ...config, ...configToLoad };
        merged = normalizeDoughConfig(merged);
        merged.ingredients = syncIngredientsFromConfig(merged);
        setConfig(merged);
        addToast(`${t('calculator.style_')}${configToLoad.recipeStyle || 'Preset'}" loaded.`, 'info');
        navigate('calculator');
    }, [config, addToast]);

    const handleLoadStyleFromModule = useCallback((style: any, navigate: (page: string) => void) => {
        // Standardize using the robust utility
        const converted = convertStyleToDoughConfig(style);

        // Preserve smart defaults for weight/count from Context logic using Constants
        let targetWeight = converted.doughBallWeight || 250;
        let targetCount = converted.numPizzas || 4;

        const matchingPreset = DOUGH_STYLE_PRESETS.find(p => p.id === style.id);
        const recipeStyle = converted.recipeStyle || RecipeStyle.NEAPOLITAN;
        const bakeType = converted.bakeType || BakeType.PIZZAS;

        if (DOUGH_WEIGHT_RANGES[recipeStyle]) {
            const rangeStr = DOUGH_WEIGHT_RANGES[recipeStyle] || '';
            const nums = rangeStr.replace('g', '').split('-').map(s => parseFloat(s.trim()));
            if (nums.length === 2 && !isNaN(nums[0]) && !isNaN(nums[1])) {
                targetWeight = (nums[0] + nums[1]) / 2;
            } else if (nums.length === 1 && !isNaN(nums[0])) {
                targetWeight = nums[0];
            }
        }

        if (bakeType === BakeType.BREADS_SAVORY) targetCount = 2;
        if (bakeType === BakeType.SWEETS_PASTRY) {
            const rs = recipeStyle.toString(); // Ensure string comparison
            if (rs.includes('COOKIE')) targetCount = 12;
            else targetCount = 8;
        }

        let newDoughConfig: Partial<DoughConfig> = {
            ...converted,
            doughBallWeight: targetWeight,
            numPizzas: targetCount,
            // Ensure ID is passed correctly
            stylePresetId: matchingPreset ? matchingPreset.id : undefined
        };

        // Normalize
        // We merge with current config to fill gaps, then override with new values
        const configToNormalize = { ...config, ...newDoughConfig } as DoughConfig;
        let normalized = normalizeDoughConfig(configToNormalize);

        // If ingredients were provided by utility (e.g. from Formula), use them directly.
        // If not (fallback), sync them.
        if (converted.ingredients && converted.ingredients.length > 0) {
            normalized.ingredients = converted.ingredients;
        } else {
            normalized.ingredients = syncIngredientsFromConfig(normalized);
        }

        setCalculatorMode('advanced');
        handleLoadAndNavigate(normalized, navigate);
    }, [config, handleLoadAndNavigate]);

    const resetConfig = useCallback(() => {
        setConfig({ ...initialConfig, stylePresetId: undefined, ingredients: syncIngredientsFromConfig(initialConfig) });
        setHasInteracted(false);
    }, [initialConfig]);

    // Mode switching logic (basic <-> advanced)
    const setCalculatorModeWrapper = useCallback((newMode: 'basic' | 'advanced') => {
        setCalculatorMode(newMode);
        if (newMode === 'basic') {
            const preset = DOUGH_STYLE_PRESETS.find(p => p.recipeStyle === config.recipeStyle);
            if (preset) {
                const { defaultHydration, defaultSalt, defaultOil, defaultSugar } = preset;
                let newConf = {
                    ...config,
                    hydration: defaultHydration,
                    salt: defaultSalt,
                    oil: defaultOil,
                    sugar: defaultSugar || 0,
                    stylePresetId: preset.id,
                };
                newConf = normalizeDoughConfig(newConf);
                newConf.ingredients = syncIngredientsFromConfig(newConf);
                setConfig(newConf);
            }
        }
    }, [config]);

    const value = useMemo(() => ({
        config,
        setConfig,
        calculatorMode,
        setCalculatorMode: setCalculatorModeWrapper,
        calculationMode,
        setCalculationMode,
        unit,
        setUnit,
        unitSystem,
        setUnitSystem,
        errors,
        results,
        hasInteracted,
        setHasInteracted,
        handleConfigChange,
        handleBakeTypeChange,
        handleStyleChange,
        handleYeastTypeChange,
        handleLoadProRecipe,
        handleLoadAndNavigate,
        handleLoadStyleFromModule,
        resetConfig
    }), [
        config,
        calculatorMode,
        setCalculatorModeWrapper,
        calculationMode,
        unit,
        unitSystem,
        errors,
        results,
        hasInteracted,
        handleConfigChange,
        handleBakeTypeChange,
        handleStyleChange,
        handleYeastTypeChange,
        handleLoadProRecipe,
        handleLoadAndNavigate,
        handleLoadStyleFromModule,
        resetConfig
    ]);

    return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
};

export const useCalculator = () => {
    const context = useContext(CalculatorContext);
    if (context === undefined) {
        throw new Error('useCalculator must be used within a CalculatorProvider');
    }
    return context;
};
