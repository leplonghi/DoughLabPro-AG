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
    DoughStyleDefinition
} from '@/types';
import { DOUGH_STYLE_PRESETS, DEFAULT_CONFIG } from '@/constants';
import { FLOURS } from '@/flours-constants';
import { calculateDoughUniversal, syncIngredientsFromConfig } from '@/logic/doughMath';
import { normalizeDoughConfig } from '@/logic/normalization';
import { logEvent } from '@/services/analytics';
import { useUser } from '@/contexts/UserProvider';
import { useToast } from '@/components/ToastProvider';
import { STYLES_DATA } from '@/data/stylesData';
import { fetchStyles } from '@/services/stylesService';

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
    
    // Global Styles List
    styles: DoughStyleDefinition[];

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
    
    // Styles State - Initialized with fallback data
    const [styles, setStyles] = useState<DoughStyleDefinition[]>(STYLES_DATA);

    // --- Styles Fetching ---
    useEffect(() => {
        let isMounted = true;
        fetchStyles()
            .then((fetchedStyles) => {
                if (isMounted && fetchedStyles && fetchedStyles.length > 0) {
                    setStyles(fetchedStyles);
                }
            })
            .catch((err) => {
                console.warn('Failed to fetch styles asynchronously, keeping static data.', err);
            });
        
        return () => { isMounted = false; };
    }, []);

    // --- Validation ---
    useEffect(() => {
        const validationErrors: FormErrors = {};

        if (config.numPizzas < 1 || config.numPizzas > 100) {
            validationErrors.numPizzas = 'A value between 1 and 100 is recommended.';
        }
        if (config.doughBallWeight < 100 || config.doughBallWeight > 2000) {
            validationErrors.doughBallWeight = 'A value between 100g and 2000g is recommended.';
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

            let newConf = {
                ...config,
                recipeStyle,
                ...presetValues,
                stylePresetId: preset.id,
            };
            newConf = normalizeDoughConfig(newConf);
            newConf.ingredients = syncIngredientsFromConfig(newConf);
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
        addToast(`Style "${configToLoad.recipeStyle || 'Preset'}" loaded.`, 'info');
        navigate('calculator');
    }, [config, addToast]);

    const handleLoadStyleFromModule = useCallback((style: DoughStyleDefinition, navigate: (page: string) => void) => {
        let bakeType = BakeType.PIZZAS;
        if (style.category === 'bread' || style.category === 'enriched_bread' || style.category === 'burger_bun') {
            bakeType = BakeType.BREADS_SAVORY;
        } else if (style.category === 'pastry' || style.category === 'cookie') {
            bakeType = BakeType.SWEETS_PASTRY;
        }

        let newDoughConfig: Partial<DoughConfig> = {
            bakeType,
            baseStyleName: style.name,
            recipeStyle: style.recipeStyle,
            hydration: style.technical.hydration,
            salt: style.technical.salt,
            oil: style.technical.oil,
            sugar: style.technical.sugar,
            bakingTempC: style.technical.bakingTempC,
            fermentationTechnique: style.technical.fermentationTechnique,
            ingredients: style.ingredients.map(ing => ({ ...ing, manualOverride: false })),
            stylePresetId: undefined,
            selectedStyleId: style.id
        };

        const tempConfig = { ...config, ...newDoughConfig };
        const normalized = normalizeDoughConfig(tempConfig);

        newDoughConfig = {
            ...newDoughConfig,
            fermentationTechnique: normalized.fermentationTechnique,
            yeastType: normalized.yeastType
        };

        setCalculatorMode('advanced');
        handleLoadAndNavigate(newDoughConfig, navigate);
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
        styles,
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
        styles,
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
