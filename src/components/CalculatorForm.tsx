
import React, { useMemo, useState, useEffect } from 'react';
import {
  DoughConfig,
  YeastType,
  BakeType,
  FormErrors,
  CalculationMode,
  Levain,
  FermentationTechnique,
} from '@/types';
import { DOUGH_STYLE_PRESETS } from '@/constants';
import { STYLES_DATA, getStyleById, getAllowedFermentationTechniques } from '@/data/stylesData';
import * as customPresets from '@/logic/customPresets';
import {
  FlourIcon,
  BookmarkSquareIcon,
  TrashIcon,
  CloseIcon,
  SparklesIcon,
} from '@/components/ui/Icons';
import FormSection from '@/components/calculator/AccordionSection';
import { useToast } from '@/components/ToastProvider';
import IngredientsSection from '@/components/calculator/sections/IngredientsSection';
import StyleSection from '@/components/calculator/sections/StyleSection';
import FermentationSection from '@/components/calculator/sections/FermentationSection';
import QuantitySection from '@/components/calculator/sections/QuantitySection';
import EnvironmentSection from '@/components/calculator/sections/EnvironmentSection';
import { useUser } from '@/contexts/UserProvider';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';
import CreateStyleModal from '@/components/styles/CreateStyleModal';

interface CalculatorFormProps {
  config: DoughConfig;
  errors: FormErrors;
  onConfigChange: (newConfig: Partial<DoughConfig>) => void;
  onBakeTypeChange: (bakeType: BakeType) => void;
  onStyleChange: (presetId: string) => void;
  onYeastTypeChange: (yeastType: YeastType) => void;
  onReset: () => void;
  calculatorMode: 'basic' | 'advanced';
  calculationMode: CalculationMode;
  onCalculationModeChange: (mode: CalculationMode) => void;
  onCalculatorModeChange: (mode: 'basic' | 'advanced') => void;
  hasProAccess: boolean;
  onOpenPaywall: () => void;
  levains: Levain[];
  selectedLevain: Levain | null;
  inputRefs: {
    numPizzas: React.Ref<HTMLInputElement>;
  };
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  config,
  errors,
  onConfigChange,
  onBakeTypeChange,
  onStyleChange,
  onYeastTypeChange,
  onReset,
  calculatorMode,
  calculationMode,
  onCalculationModeChange,
  onCalculatorModeChange,
  hasProAccess,
  onOpenPaywall,
  levains,
  selectedLevain,
  inputRefs,
}) => {
  const { addToast } = useToast();
  const { userStyles, addUserStyle } = useUser();
  const isBasic = calculatorMode === 'basic';
  
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  // Safety check: Prevent rendering if config is not properly initialized
  if (!config || !config.recipeStyle || !config.bakeType) {
    console.warn('[CalculatorForm] Config not properly initialized, skipping render:', config);
    return <div className="p-4 text-center text-slate-500">Loading calculator...</div>;
  }

  // State for presets
  const [presets, setPresets] = useState<{ name: string }[]>([]);
  const [selectedPreset, setSelectedPreset] = useState<string>('');

  const refreshPresets = () => {
    const presetList = customPresets.listCustomPresets();
    setPresets(presetList);
    if (presetList.length > 0) {
      if (!presetList.some((p) => p.name === selectedPreset)) {
        setSelectedPreset(presetList[0].name);
      }
    } else {
      setSelectedPreset('');
    }
  };

  useEffect(() => {
    refreshPresets();
  }, []);

  const handleSavePreset = async (style: any) => {
    try {
        // Prepare the new style object
        const newStyle = {
            ...style,
            technical: {
                hydration: config.hydration,
                salt: config.salt,
                oil: config.oil,
                sugar: config.sugar || 0,
                fermentation: config.notes || 'Custom Fermentation', // Default if notes are empty
                fermentationTechnique: config.fermentationTechnique,
                bakingTempC: config.bakingTempC
            },
             // Map dough config to required fields
             category: 'pizza', // Default or derive
             origin: { country: 'Custom' },
             history: 'Created via Calculator',
             isCanonical: false,
             source: 'user_manual',
             ingredients: config.ingredients || [], // Ensure ingredients are passed
             allowedFermentationTechniques: [config.fermentationTechnique],
             defaultFermentationTechnique: config.fermentationTechnique,
        };

        await addUserStyle(newStyle);
        addToast(`Style "${style.name}" saved to your library!`, 'success');
        setIsSaveModalOpen(false);
    } catch (error) {
        console.error("Error saving style:", error);
        addToast("Failed to save style. Please try again.", "error");
    }
  };


  const handleLoadPreset = () => {
    if (!selectedPreset) return;
    const loadedConfig = customPresets.loadCustomPreset(selectedPreset);
    if (loadedConfig) {
      onConfigChange(loadedConfig);
      addToast(`Preset "${selectedPreset}" loaded.`, 'info');
    }
  };

  const handleDeletePreset = () => {
    if (!selectedPreset) return;
    if (window.confirm(`Are you sure you want to delete preset "${selectedPreset}"?`)) {
      customPresets.deleteCustomPreset(selectedPreset);
      addToast(`Preset "${selectedPreset}" deleted.`, 'info');
      const newList = customPresets.listCustomPresets();
      setPresets(newList);
      setSelectedPreset(newList[0]?.name || '');
    }
  };

  const handleResetPreset = () => {
    if (config.stylePresetId) {
      onStyleChange(config.stylePresetId);
    }
  };

  // Find current active style definition (Official or User)
  const activeStyle = useMemo(() => {
    if (config.selectedStyleId) {
      // Try finding in official data
      const official = getStyleById(config.selectedStyleId);
      if (official) return official;
      // Try finding in user styles
      const userStyle = userStyles.find(s => s.id === config.selectedStyleId);
      if (userStyle) return userStyle;
    }
    // Fallback to finding by preset ID if selectedStyleId is missing (legacy compatibility)
    return STYLES_DATA.find(s => s.recipeStyle === config.recipeStyle);
  }, [config.selectedStyleId, config.stylePresetId, config.recipeStyle, userStyles]);

  const recipeStylesToShow = DOUGH_STYLE_PRESETS.filter(
    (p) => p.type === config.bakeType,
  );

  const currentPreset = useMemo(
    () => DOUGH_STYLE_PRESETS.find((p) => p.id === config.stylePresetId),
    [config.stylePresetId],
  );

  const allowedFermentationTechniques = useMemo(() => {
    // Safety check: ensure config has required properties
    if (!config || !config.recipeStyle || !config.bakeType) {
      console.warn('[CalculatorForm] Invalid config for getAllowedFermentationTechniques:', config);
      return [FermentationTechnique.DIRECT];
    }
    const techniques = getAllowedFermentationTechniques(config.recipeStyle, config.bakeType);
    return Array.isArray(techniques) ? techniques : [FermentationTechnique.DIRECT];
  }, [config.recipeStyle, config.bakeType]);

  const getInputClasses = (hasError: boolean) =>
    `w-full rounded-lg bg-slate-50 p-2 text-slate-900 border ${hasError
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : 'border-slate-300 focus:border-lime-500 focus:ring-lime-500'
    }`;
  const getSelectClasses = () =>
    'w-full rounded-lg border-slate-300 bg-slate-50 p-2 text-slate-900 focus:border-lime-500 focus:ring-lime-500';

  const isAnySourdough = [
    YeastType.SOURDOUGH_STARTER,
    YeastType.USER_LEVAIN,
  ].includes(config.yeastType);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${isBasic ? 'bg-sky-100 text-sky-800' : 'bg-lime-100 text-lime-800'
            }`}
        >
          {isBasic ? 'Guided Mode' : 'Advanced Mode'}
        </span>
      </div>

      {!activeStyle && config.baseStyleName && (
        <div className="flex items-center justify-between rounded-lg bg-lime-50 p-3 text-sm text-lime-800 border border-lime-200 shadow-sm">
          <div className="flex items-center gap-2">
            <SparklesIcon className="h-5 w-5 text-lime-600" />
            <span>
              Base Style: <strong>{config.baseStyleName}</strong>
            </span>
          </div>
          <button
            onClick={() => onConfigChange({ baseStyleName: undefined })}
            className="rounded-full p-1 hover:bg-lime-200 transition-colors"
            title="Clear style"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>
      )}

      {!isBasic && (
        <FormSection
          title="Load Custom Preset"
          description="Start from one of your saved dough formulas."
          icon={<BookmarkSquareIcon className="h-6 w-6" />}
        >
          <div className="space-y-4">
            <div className="flex gap-2">
              <select
                value={selectedPreset}
                onChange={(e) => setSelectedPreset(e.target.value)}
                disabled={presets.length === 0}
                className={getSelectClasses()}
                aria-label="Select saved preset"
              >
                {presets.length === 0 ? (
                  <option>No presets saved</option>
                ) : (
                  presets.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))
                )}
              </select>
              <button
                onClick={handleDeletePreset}
                disabled={!selectedPreset}
                className="flex-shrink-0 rounded-lg p-2 text-red-500 transition-colors hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                title="Delete Preset"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={handleLoadPreset}
              disabled={!selectedPreset}
              className="w-full rounded-md bg-slate-200 py-2 px-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Load Preset
            </button>
          </div>
        </FormSection>
      )}

      {/* Style Selection is less relevant if an Active Style is loaded, but kept for basic mode switching */}
      {/* Style Selection - Always visible to allow changing styles */}
      <StyleSection
        config={config}
        onBakeTypeChange={onBakeTypeChange}
        onStyleChange={onStyleChange}
        recipeStylesToShow={recipeStylesToShow}
        isBasic={isBasic}
        currentPreset={currentPreset}
        onResetPreset={handleResetPreset}
      />

      <FermentationSection
        config={config}
        onConfigChange={onConfigChange}
        isAnySourdough={isAnySourdough}
        isBasic={isBasic}
        errors={errors}
        hasProAccess={hasProAccess}
        onOpenPaywall={onOpenPaywall}
        allowedTechniques={allowedFermentationTechniques}
      />

      <QuantitySection
        config={config}
        calculationMode={calculationMode}
        onCalculationModeChange={onCalculationModeChange}
        onConfigChange={onConfigChange}
        errors={errors}
        getInputClasses={getInputClasses}
        numPizzasRef={inputRefs.numPizzas}
      />

      <FormSection
        title="Ingredients"
        description="Adjust the percentages of each component."
        icon={<FlourIcon className="h-6 w-6" />}
      >
        <IngredientsSection
          config={config}
          errors={errors}
          onConfigChange={onConfigChange}
          onYeastTypeChange={onYeastTypeChange}
          calculatorMode={calculatorMode}
          levains={levains}
          selectedLevain={selectedLevain}
          getSelectClasses={getSelectClasses}
          onCalculatorModeChange={onCalculatorModeChange}
          hasProAccess={hasProAccess}
          onOpenPaywall={onOpenPaywall}
          activeStyle={activeStyle}
        />
      </FormSection>

      {!isBasic && (
        <ProFeatureLock featureKey="calculator.environmental_insights" customMessage="Unlock advanced environment controls with Lab Pro.">
          <EnvironmentSection
            config={config}
            onConfigChange={onConfigChange}
            getSelectClasses={getSelectClasses}
            errors={errors}
          />
        </ProFeatureLock>
      )}

      {!isBasic && (
        <>
          <ProFeatureLock featureKey="calculator.environmental_insights" customMessage="Save your custom formulas with Lab Pro.">
            <FormSection
              title="Save Custom Preset"
              description="Save the current configuration for future use."
              icon={<BookmarkSquareIcon className="h-6 w-6" />}
            >
              <button
                onClick={() => setIsSaveModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-lime-500 py-2 px-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-lime-600"
              >
                Save as Custom Style
              </button>
            </FormSection>
          </ProFeatureLock>
        </>
      )}

      <div>
        <button
          type="button"
          onClick={onReset}
          className="w-full rounded-lg bg-slate-200 py-3 px-4 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
        >
          Reset Fields
        </button>
      </div>

      {!hasProAccess && (
        <div className="mt-8 rounded-xl bg-lime-50 border border-lime-100 p-6 text-center shadow-sm">
          <p className="text-lg font-bold text-lime-900">Stop guessing. Start mastering your dough.</p>
          <p className="mt-1 text-sm text-lime-700">Costs less than 25¢ a day. Cheaper than a coffee.</p>
          <button
            onClick={onOpenPaywall}
            className="mt-4 rounded-full bg-lime-600 px-6 py-2 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-lime-700 shadow-md shadow-lime-200"
          >
            Upgrade to Pro
          </button>
        </div>
      )}
      
      <CreateStyleModal 
          isOpen={isSaveModalOpen} 
          onClose={() => setIsSaveModalOpen(false)} 
          onSave={handleSavePreset} 
          defaultValues={{
             name: "",
             description: config.notes || "My custom dough formula",
             category: 'pizza', // Or derive from bakeType
             // Pass partial technical data to pre-fill if possible, but the modal mainly asks for metadata
          }}
      />

    </div>
  );
};

export default CalculatorForm;
