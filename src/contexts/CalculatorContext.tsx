import React, { createContext, useContext, useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
    DoughConfig,
    BakeType,
    YeastType,
    FermentationTechnique,
    Unit,
    UnitSystem,
    CalculationMode,
    QuantityInputMode,
    DifficultyLevel,
    DoughResult,
    FormErrors,
    ProRecipe,
    DoughStyleDefinition,
    RecipeStyle,
    IngredientConfig,
    DoughStylePreset
} from '@/types';
import { DEFAULT_CONFIG, DOUGH_WEIGHT_RANGES } from '@/constants';
import { FLOURS } from '@/flours-constants';
import { calculateDoughUniversal, syncIngredientsFromConfig } from '@/logic/doughMath';
import { normalizeDoughConfig } from '@/logic/normalization';
import { convertStyleToDoughConfig } from '@/utils/doughConversion';
import { logCalculatorEvent, logEvent } from '@/services/analytics';
import { useUser } from '@/contexts/UserProvider';
import { useToast } from '@/components/ToastProvider';
import { useTranslation } from '@/i18n';
import { useDoughSession } from '@/contexts/DoughSessionContext';
import { validateDoughConfig } from '@/features/calculator/domain/validators/DoughConfigValidator';
import { importWithChunkRecovery } from '@/utils/chunkRecovery';
import { getStyleWeightBounds } from '@/utils/styleWeight';

interface CalculatorContextType {
    config: DoughConfig;
    setConfig: React.Dispatch<React.SetStateAction<DoughConfig>>;
    calculatorMode: 'wizard' | 'basic' | 'advanced';
    setCalculatorMode: (mode: 'wizard' | 'basic' | 'advanced') => void;
    difficultyLevel: DifficultyLevel;
    setDifficultyLevel: React.Dispatch<React.SetStateAction<DifficultyLevel>>;
    quantityInputMode: QuantityInputMode;
    setQuantityInputMode: React.Dispatch<React.SetStateAction<QuantityInputMode>>;
    /**
     * @deprecated Keep while migrating components to quantityInputMode.
     */
    calculationMode: CalculationMode;
    /**
     * @deprecated Keep while migrating components to setQuantityInputMode.
     */
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

const normalizeQuantityInputMode = (mode: CalculationMode | QuantityInputMode): QuantityInputMode => {
    if (mode === 'TARGET_TIME' || mode === 'target_time') return 'target_time';
    return mode;
};

const getCalculatorVariant = (): 'A' | 'B' => {
    if (typeof window === 'undefined') return 'A';
    const storageKey = 'doughlab-calculator-variant';
    const stored = window.localStorage.getItem(storageKey);
    return stored === 'B' ? 'B' : 'A';
};

const loadCalculatorStylePresets = () => importWithChunkRecovery(() => import('@/features/calculator/data/stylePresets'));

const clampToStyleWeightBounds = (config: DoughConfig): DoughConfig => {
    if (!config.stylePresetId) return config;

    const { min, max, recommended } = getStyleWeightBounds({
        stylePresetId: config.stylePresetId,
        recipeStyle: config.recipeStyle,
    });

    const currentWeight = config.doughBallWeight;
    const nextWeight =
        currentWeight <= 0 ? recommended :
            currentWeight < min ? min :
                currentWeight > max ? max :
                    currentWeight;

    if (nextWeight === currentWeight) return config;
    return { ...config, doughBallWeight: nextWeight };
};

const getDefaultYieldCount = (presetId: string, bakeType: BakeType, recipeStyle: RecipeStyle): number => {
    if (bakeType === BakeType.BREADS_SAVORY) return 2;

    if (bakeType === BakeType.SWEETS_PASTRY) {
        if (recipeStyle === RecipeStyle.COOKIES || presetId.includes('cookie') || presetId.includes('brownie')) {
            return 12;
        }

        return 8;
    }

    return 4;
};

export const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { t } = useTranslation(['common', 'calculator', 'styles']);
    const { user, levains, preferredFlourId, ovens } = useUser();
    const { addToast } = useToast();
    const previousErrorsRef = useRef<FormErrors>({});
    const [stylePresets, setStylePresets] = useState<DoughStylePreset[]>([]);

    // --- State ---
    const [calculatorMode, setCalculatorMode] = useState<'wizard' | 'basic' | 'advanced'>(() => {
        try {
            const storedMode = localStorage.getItem('doughlab_mode');
            if (storedMode === 'wizard' || storedMode === 'basic' || storedMode === 'advanced') {
                return storedMode;
            }
            return 'basic'; // Guided-first default
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

    useEffect(() => {
        let active = true;

        loadCalculatorStylePresets()
            .then(({ DOUGH_STYLE_PRESETS }) => {
                if (active) {
                    setStylePresets(DOUGH_STYLE_PRESETS);
                }
            })
            .catch((error) => {
                console.error('Failed to load calculator style presets', error);
            });

        return () => {
            active = false;
        };
    }, []);

    const { session, updateSession, updateDough, isSaving } = useDoughSession();

    const [hasInteracted, setHasInteracted] = useState(false);

    // Smart Defaults (formerly initialConfig)
    const smartDefaults = useMemo(() => {
        let config = { ...DEFAULT_CONFIG, stylePresetId: undefined };
        const preset = stylePresets.find(p => p.id === DEFAULT_CONFIG.stylePresetId);
        if (preset?.preferredFlourProfileId) {
            config.flourId = preset.preferredFlourProfileId;
        } else if (preferredFlourId) {
            config.flourId = preferredFlourId;
        }

        // Apply Default Oven Temperature
        const defaultOven = ovens.find(o => o.isDefault) || (ovens.length > 0 ? ovens[0] : undefined);
        if (defaultOven?.maxTemperature) {
            config.bakingTempC = defaultOven.maxTemperature;
        }

        return config;
    }, [preferredFlourId, ovens, stylePresets]);

    // --- State Mapping ---
    // Map Session State to DoughConfig
    const config = useMemo<DoughConfig>(() => {
        const d = session.dough;
        // Basic mapping
        const mappedConfig: DoughConfig = {
            ...DEFAULT_CONFIG,
            // Explicit Mappings
            hydration: d.hydration,
            salt: d.salt,
            doughBallWeight: d.ballWeight,
            numPizzas: d.yieldCount,
            fermentationTechnique: d.prefermentType as FermentationTechnique,

            // Spread other fields that match (e.g. oil, sugar, notes, yeastType, etc)
            ...d,

            // Ensure types match
            yeastType: (d.yeastType as YeastType) || DEFAULT_CONFIG.yeastType,
            bakeType: (d.bakeType as BakeType) || DEFAULT_CONFIG.bakeType,
            recipeStyle: (d.recipeStyle as RecipeStyle) || DEFAULT_CONFIG.recipeStyle,

            // If ingredients array is in session, use it, else generic normalization deals with it
            ingredients: (d as { ingredients?: IngredientConfig[] }).ingredients || undefined,
        };

        let normalized = normalizeDoughConfig(mappedConfig);
        normalized = clampToStyleWeightBounds(normalized);
        normalized.ingredients = syncIngredientsFromConfig(normalized);
        return normalized;
    }, [session.dough]);

    // Silent bootstrap correction: fix old saved sessions that violate the selected style's weight bounds.
    // This prevents "red toast during loading screen" and avoids persisting invalid configs forever.
    useEffect(() => {
        if (hasInteracted) return;
        if (!config.stylePresetId) return;
        if (typeof session.dough.ballWeight !== 'number') return;

        if (config.doughBallWeight !== session.dough.ballWeight) {
            updateDough({ ballWeight: config.doughBallWeight });
        }
    }, [hasInteracted, config.stylePresetId, config.doughBallWeight, session.dough.ballWeight, updateDough]);

    // setConfig Wrapper to update Session
    const setConfig = useCallback((action: React.SetStateAction<DoughConfig>) => {
        // Resolve value
        // Note: we can't easily access 'prev' config inside updateDough if we use the function form of setConfig 
        // derived from the *current* session. 
        // Use the 'config' dependency which is derived from session.

        let newConfig: DoughConfig;
        if (typeof action === 'function') {
            newConfig = action(config);
        } else {
            newConfig = action;
        }

        // Map DoughConfig back to Session Dough
        const sessionUpdate: Partial<typeof session.dough> = {
            hydration: newConfig.hydration,
            salt: newConfig.salt,
            ballWeight: newConfig.doughBallWeight,
            yieldCount: newConfig.numPizzas,
            prefermentType: newConfig.fermentationTechnique as FermentationTechnique,
            // Spread likely fields
            oil: newConfig.oil,
            sugar: newConfig.sugar,
            yeastType: newConfig.yeastType,
            bakeType: newConfig.bakeType,
            recipeStyle: newConfig.recipeStyle,
            ingredients: newConfig.ingredients,
            scale: newConfig.scale,
            notes: newConfig.notes,
            flourId: newConfig.flourId,
            ambientTemperature: newConfig.ambientTemperature,
            bakingTempC: newConfig.bakingTempC,
            // Add any other fields from DoughConfig that need persistence
            ...newConfig
        };

        updateDough(sessionUpdate);
        setHasInteracted(true);
    }, [config, updateDough, session.dough]);


    // Initialization Logic (Ported)
    // Runs when we have User Data but session might be fresh/default
    useEffect(() => {
        if (!hasInteracted && !session.dough.flourId && user) {
            // Logic to inject defaults if session seems empty/default
            let defaults: Partial<DoughConfig> = {};
            // Use smartDefaults
            if (smartDefaults.flourId) defaults.flourId = smartDefaults.flourId;
            if (smartDefaults.bakingTempC) defaults.bakingTempC = smartDefaults.bakingTempC;

            if (Object.keys(defaults).length > 0) {
                // Update the session directly
                updateDough(defaults);
            }
        }
    }, [user, hasInteracted, updateDough, session.dough.flourId, smartDefaults]);

    const [difficultyLevel, setDifficultyLevelState] = useState<DifficultyLevel>('beginner');
    const [quantityInputMode, setQuantityInputModeState] = useState<QuantityInputMode>('mass');
    const [unit, setUnit] = useState<Unit>('g');
    const [unitSystem, setUnitSystem] = useState<UnitSystem>(UnitSystem.METRIC);
    const [errors, setErrors] = useState<FormErrors>({});

    // --- Validation ---
    useEffect(() => {
        const validationErrors = validateDoughConfig(config);
        setErrors(validationErrors);
    }, [config]);

    useEffect(() => {
        const currentErrors = errors;
        const previousErrors = previousErrorsRef.current;

        // Don't show global error toasts until the user has interacted with the calculator.
        // Inline field errors still render, but we avoid startup/loading toasts.
        if (!hasInteracted) {
            previousErrorsRef.current = currentErrors;
            return;
        }

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
        return calculateDoughUniversal(config, calculatorMode, quantityInputMode, userLevain);
    }, [config, hasErrors, levains, calculatorMode, quantityInputMode]);

    // --- Handlers ---

    const handleConfigChange = useCallback((newConfig: Partial<DoughConfig>) => {
        setHasInteracted(true);
        const selectedPreset = config.stylePresetId
            ? stylePresets.find((preset) => preset.id === config.stylePresetId)
            : undefined;

        const guidedLocks: Partial<DoughConfig> = {};
        if (calculatorMode === 'basic' && selectedPreset) {
            guidedLocks.hydration = selectedPreset.defaultHydration;
            guidedLocks.flourId = selectedPreset.preferredFlourProfileId || config.flourId;
        }

        let updatedConfig = {
            ...config,
            ...newConfig,
            ...guidedLocks,
            stylePresetId: newConfig.stylePresetId ?? config.stylePresetId
        };

        updatedConfig = normalizeDoughConfig(updatedConfig);
        const syncedIngredients = syncIngredientsFromConfig(updatedConfig);
        updatedConfig.ingredients = syncedIngredients;

        setConfig(updatedConfig);
    }, [calculatorMode, config, stylePresets]);

    const handleBakeTypeChange = useCallback(
        (bakeType: BakeType) => {
            setHasInteracted(true);
            const firstMatchingPreset = stylePresets.find(
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
                    ...smartDefaults,
                    ...config,
                    bakeType,
                    recipeStyle: recipeStyle,
                    ...presetValues,
                    doughBallWeight: getStyleWeightBounds({
                        stylePresetId: firstMatchingPreset.id,
                        recipeStyle,
                    }).recommended,
                    numPizzas: getDefaultYieldCount(firstMatchingPreset.id, bakeType, recipeStyle),
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
        [smartDefaults, config.yeastType, config, stylePresets],
    );

    const handleStyleChange = useCallback((presetId: string) => {
        setHasInteracted(true);
        const preset = stylePresets.find((p) => p.id === presetId);

        if (!preset) return;

        const applyStyleSelection = async () => {
            const { getCalculatorStyleById } = await loadCalculatorStylePresets();
            const fullStyle = getCalculatorStyleById(presetId);
            const { defaultHydration, defaultSalt, defaultOil, defaultYeastPct, defaultSugar, preferredFlourProfileId, recipeStyle } = preset;
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

            let targetWeight = 250;
            let targetCount = 4;
            let ingredients: IngredientConfig[] | undefined;
            let convertedWeight: number | undefined;

            if (fullStyle) {
                const converted = convertStyleToDoughConfig(fullStyle);
                convertedWeight = converted.doughBallWeight;
                if (converted.ingredients && converted.ingredients.length > 0) {
                    ingredients = converted.ingredients;
                }
                if (fullStyle.technicalProfile?.ballWeight?.recommended) {
                    targetWeight = fullStyle.technicalProfile.ballWeight.recommended;
                } else if (converted.doughBallWeight) {
                    targetWeight = converted.doughBallWeight;
                }
                if (converted.numPizzas) targetCount = converted.numPizzas;
            }

            targetCount = getDefaultYieldCount(presetId, preset.type, recipeStyle);

            if (preset.type === BakeType.SWEETS_PASTRY) {
                if (recipeStyle === RecipeStyle.COOKIES || presetId.includes('cookie') || presetId.includes('brownie')) {
                    targetWeight = 80;
                } else {
                    targetWeight = 100;
                }
            }

            if (!convertedWeight) {
                targetWeight = getStyleWeightBounds({
                    stylePresetId: presetId,
                    recipeStyle,
                }).recommended;
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

            if (ingredients) {
                newConf.ingredients = ingredients;
                const totalHydration = ingredients.filter(i => i.role === 'water').reduce((sum, i) => sum + (i.bakerPercentage || 0), 0);
                const totalSalt = ingredients.filter(i => i.role === 'salt').reduce((sum, i) => sum + (i.bakerPercentage || 0), 0);
                const totalFat = ingredients.filter(i => i.role === 'fat').reduce((sum, i) => sum + (i.bakerPercentage || 0), 0);
                const totalSugar = ingredients.filter(i => i.role === 'sugar').reduce((sum, i) => sum + (i.bakerPercentage || 0), 0);

                if (totalHydration > 0) newConf.hydration = totalHydration;
                if (totalSalt > 0) newConf.salt = totalSalt;
                if (totalFat > 0) newConf.oil = totalFat;
                if (totalSugar > 0) newConf.sugar = totalSugar;
            } else {
                newConf.ingredients = syncIngredientsFromConfig(newConf);
            }

            setConfig(newConf);
            logCalculatorEvent('style_selected', {
                stylePresetId: preset.id,
                recipeStyle: preset.recipeStyle,
                bakeType: preset.type
            });
        };

        void applyStyleSelection();
    }, [config, stylePresets]);

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

    const handleLoadStyleFromModule = useCallback((style: DoughStyleDefinition, navigate: (page: string) => void) => {
        // Standardize using the robust utility
        const converted = convertStyleToDoughConfig(style);

        // Preserve smart defaults for weight/count from Context logic using Constants
        let targetWeight = converted.doughBallWeight || 250;
        let targetCount = converted.numPizzas || 4;

        const matchingPreset = stylePresets.find(p => p.id === style.id);
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
    }, [config, handleLoadAndNavigate, stylePresets]);

    const resetConfig = useCallback(() => {
        setConfig({ ...smartDefaults, stylePresetId: undefined, ingredients: syncIngredientsFromConfig(smartDefaults) });
        setHasInteracted(false);
    }, [smartDefaults]);

    // Mode switching logic (wizard <-> basic <-> advanced)
    const setCalculatorModeWrapper = useCallback((newMode: 'wizard' | 'basic' | 'advanced') => {
        setCalculatorMode(newMode);
        logCalculatorEvent('mode_selected', { axis: 'ui_mode', value: newMode, variant: getCalculatorVariant() });
    }, []);

    const setQuantityInputMode: React.Dispatch<React.SetStateAction<QuantityInputMode>> = useCallback((action) => {
        setQuantityInputModeState((prev) => {
            const next = typeof action === 'function' ? action(prev) : action;
            logCalculatorEvent('mode_selected', { axis: 'quantity_mode', value: next, variant: getCalculatorVariant() });
            return next;
        });
    }, []);

    const setDifficultyLevel: React.Dispatch<React.SetStateAction<DifficultyLevel>> = useCallback((action) => {
        setDifficultyLevelState((prev) => {
            const next = typeof action === 'function' ? action(prev) : action;
            logCalculatorEvent('mode_selected', { axis: 'difficulty_level', value: next, variant: getCalculatorVariant() });
            return next;
        });
    }, []);

    const setCalculationMode: React.Dispatch<React.SetStateAction<CalculationMode>> = useCallback((action) => {
        setQuantityInputModeState((prev) => {
            const next = typeof action === 'function' ? action(prev) : action;
            const normalized = normalizeQuantityInputMode(next);
            logCalculatorEvent('mode_selected', { axis: 'quantity_mode', value: normalized, variant: getCalculatorVariant() });
            return normalized;
        });
    }, []);

    const value = useMemo(() => ({
        config,
        setConfig,
        calculatorMode,
        setCalculatorMode: setCalculatorModeWrapper,
        difficultyLevel,
        setDifficultyLevel,
        quantityInputMode,
        setQuantityInputMode,
        calculationMode: quantityInputMode,
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
        difficultyLevel,
        quantityInputMode,
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
