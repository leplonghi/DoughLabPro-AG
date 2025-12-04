import React, { useRef, useEffect } from 'react';
import { DoughConfig, CalculationMode, FormErrors, YeastType } from '@/types';
import UiModeToggle from './calculator/UiModeToggle';
import QuantitySection from './calculator/sections/QuantitySection';
import StyleSection from './calculator/sections/StyleSection';
import IngredientsSection from './calculator/sections/IngredientsSection';
import FermentationSection from './calculator/sections/FermentationSection';
import EnvironmentSection from './calculator/sections/EnvironmentSection';
import { SparklesIcon } from '@/components/ui/Icons';

interface CalculatorFormProps {
  config: DoughConfig;
  results: any; // DoughResult or null
  errors: FormErrors;
  calculatorMode: 'basic' | 'advanced';
  setCalculatorMode: (mode: 'basic' | 'advanced') => void;
  calculationMode: CalculationMode;
  setCalculationMode: (mode: CalculationMode) => void;
  onConfigChange: (newConfig: Partial<DoughConfig>) => void;
  onBakeTypeChange: (type: any) => void;
  onStyleChange: (styleId: string) => void;
  onYeastTypeChange: (yeast: YeastType) => void;
  unit: any;
  unitSystem: any;
  hasInteracted: boolean;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  config,
  results,
  errors,
  calculatorMode,
  setCalculatorMode,
  calculationMode,
  setCalculationMode,
  onConfigChange,
  onBakeTypeChange,
  onStyleChange,
  onYeastTypeChange,
  unit,
  unitSystem,
  hasInteracted,
}) => {
  const numPizzasRef = useRef<HTMLInputElement>(null);

  // Helper for error styling
  const getInputClasses = (hasError: boolean) =>
    `w-full rounded-lg bg-slate-50 p-2 text-slate-900 border ${hasError
      ? 'border-red-500 ring-1 ring-red-500 focus:border-red-500 focus:ring-red-500'
      : 'border-slate-300 focus:border-lime-500 focus:ring-lime-500'
    } transition-shadow outline-none`;

  const isBasic = calculatorMode === 'basic';

  return (
    <div className="space-y-6">
      
      {/* 1. Header & Mode Toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Dough Calculator</h2>
          <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${isBasic ? 'bg-sky-100 text-sky-800' : 'bg-lime-100 text-lime-800'}`}>
              {isBasic ? 'Guided Mode' : 'Pro Mode'}
            </span>
            <span>•</span>
            <span>Precision Engineering</span>
          </div>
        </div>
        <UiModeToggle calculatorMode={calculatorMode} setCalculatorMode={setCalculatorMode} />
      </div>

      {/* 2. Main Form Sections */}
      <div className="space-y-6">
        
        {/* Style Selection */}
        <StyleSection 
          config={config} 
          onBakeTypeChange={onBakeTypeChange} 
          onStyleChange={onStyleChange} 
        />

        {/* Quantity Inputs */}
        <QuantitySection
          config={config}
          calculationMode={calculationMode}
          onCalculationModeChange={setCalculationMode}
          onConfigChange={onConfigChange}
          errors={errors}
          getInputClasses={getInputClasses}
          numPizzasRef={numPizzasRef}
        />

        {/* Ingredients & Ratios */}
        <IngredientsSection
          config={config}
          results={results}
          onConfigChange={onConfigChange}
          onYeastTypeChange={onYeastTypeChange}
          calculatorMode={calculatorMode}
          unit={unit}
          unitSystem={unitSystem}
        />

        {/* Advanced Sections (Fermentation & Environment) */}
        {calculatorMode === 'advanced' && (
          <div className="animate-fade-in space-y-6">
            <FermentationSection
              config={config}
              onConfigChange={onConfigChange}
              calculatorMode={calculatorMode}
            />
            <EnvironmentSection 
              config={config} 
              onConfigChange={onConfigChange} 
            />
          </div>
        )}
      </div>

      {/* 3. Empty State / Call to Action */}
      {!hasInteracted && !results && (
        <div className="mt-8 rounded-xl bg-lime-50 border border-lime-100 p-6 text-center shadow-sm">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-lime-100 rounded-full">
              <SparklesIcon className="h-6 w-6 text-lime-600" />
            </div>
          </div>
          <p className="text-lg font-bold text-lime-900">Stop guessing. Start mastering your dough.</p>
          <p className="mt-1 text-sm text-lime-700">Costs less than 25¢ a day. Cheaper than a coffee.</p>
          <button
            onClick={() => {
              if (numPizzasRef.current) numPizzasRef.current.focus();
            }}
            className="mt-4 rounded-full bg-lime-600 px-6 py-2 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-lime-700 shadow-md shadow-lime-200"
          >
            Start Calculating
          </button>
        </div>
      )}
    </div>
  );
};

export default CalculatorForm;
