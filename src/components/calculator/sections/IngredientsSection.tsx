import React, { useState } from 'react';
import { DoughConfig, DoughResult, IngredientConfig, Unit, UnitSystem, YeastType, Levain } from '@/types';
import { BeakerIcon, InfoIcon, CubeIcon } from '@/components/ui/Icons';
import SliderInput from '@/components/ui/SliderInput';
import ChoiceButton from '@/components/ui/ChoiceButton';
import AccordionSection from '@/components/calculator/AccordionSection';
import IngredientTableEditor from '@/components/calculator/IngredientTableEditor';
import { convertWeight } from '@/helpers';
import { useUser } from '@/contexts/UserProvider';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';

interface IngredientsSectionProps {
  config: DoughConfig;
  results: DoughResult | null;
  onConfigChange: (newConfig: Partial<DoughConfig>) => void;
  onYeastTypeChange: (yeastType: YeastType) => void;
  calculatorMode: 'basic' | 'advanced';
  unit: Unit;
  unitSystem: UnitSystem;
}

const IngredientCard: React.FC<{
  label: string;
  value: string | number;
  unit: string;
  colorClass: string;
  subtext?: string;
}> = ({ label, value, unit, colorClass, subtext }) => (
  <div className="flex flex-row items-center justify-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm transition-all hover:bg-white hover:shadow-md">
    <div className={`flex-shrink-0 rounded-full p-1.5 ${colorClass} bg-opacity-15`}>
      <div className={`h-2 w-2 rounded-full ${colorClass}`} />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{label}</span>
      <span className="text-base font-bold text-slate-800">
        {value}<span className="text-xs font-medium text-slate-500 ml-0.5">{unit}</span>
      </span>
      {subtext && <span className="text-[10px] text-slate-400 leading-none">{subtext}</span>}
    </div>
  </div>
);

const IngredientsSection: React.FC<IngredientsSectionProps> = ({
  config,
  results,
  onConfigChange,
  onYeastTypeChange,
  calculatorMode,
  unit,
  unitSystem,
}) => {
  const { levains, hasProAccess, openPaywall } = useUser();
  const [showTableEditor, setShowTableEditor] = useState(false);

  // Helper to format display values based on unit
  const formatWeight = (grams: number) => {
    return convertWeight(grams, 'g', unit, unitSystem).toFixed(unit === 'oz' ? 2 : 0);
  };

  // Find user levain if selected
  const selectedLevain = config.yeastType === YeastType.USER_LEVAIN
    ? levains.find(l => l.id === config.levainId)
    : null;

  const timeSince = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays > 0) return `${diffDays}d`;
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    return `${diffHrs}h`;
  };

  return (
    <AccordionSection
      title="Ingredients"
      description="Ratios, percentages, and enrichments."
      icon={<BeakerIcon className="h-6 w-6" />}
    >
      {/* 1. Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-6">
        <IngredientCard
          label="Flour"
          value={results ? formatWeight(results.totalFlour) : '-'}
          unit={unit}
          colorClass="text-slate-500 bg-slate-500"
        />
        <IngredientCard
          label="Water"
          value={results ? formatWeight(results.totalWater) : '-'}
          unit={unit}
          colorClass="text-blue-500 bg-blue-500"
          subtext={`${config.hydration}%`}
        />
        <IngredientCard
          label="Salt"
          value={results ? formatWeight(results.totalSalt) : '-'}
          unit={unit}
          colorClass="text-rose-500 bg-rose-500"
          subtext={`${config.salt}%`}
        />
        <IngredientCard
          label="Yeast"
          value={results ? formatWeight(results.totalYeast) : '-'}
          unit={unit}
          colorClass="text-amber-500 bg-amber-500"
          subtext={`${config.yeastPercentage}%`}
        />
      </div>

      {/* 2. Sliders */}
      <div className="space-y-6">
        <SliderInput
          label="Hydration (Water)"
          value={config.hydration}
          onChange={(val) => onConfigChange({ hydration: val })}
          min={40}
          max={100}
          step={1}
          unit="%"
          description="Controls dough wetness and crumb openness."
        />

        <SliderInput
          label="Salt"
          value={config.salt}
          onChange={(val) => onConfigChange({ salt: val })}
          min={0}
          max={5}
          step={0.1}
          unit="%"
          description="Flavor and gluten tightening."
        />

        {calculatorMode === 'advanced' && (
          <div className="animate-fade-in space-y-6">
            <SliderInput
              label="Oil / Fat"
              value={config.oil}
              onChange={(val) => onConfigChange({ oil: val })}
              min={0}
              max={20}
              step={0.5}
              unit="%"
              description="Softens crumb and crust."
            />

            <SliderInput
              label="Sugar"
              value={config.sugar || 0}
              onChange={(val) => onConfigChange({ sugar: val })}
              min={0}
              max={20}
              step={0.5}
              unit="%"
              description="Adds sweetness and browning."
            />
          </div>
        )}
      </div>

      {/* 3. Yeast Selector (Moved down for flow) */}
      <div className="pt-6 border-t border-slate-200 mt-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <label htmlFor="yeastType" className="mb-1 block text-sm font-medium text-slate-700">Yeast Type</label>
            <p className="text-xs text-slate-500">Select your leavening agent.</p>
          </div>
          <select
            id="yeastType"
            value={config.yeastType}
            onChange={(e) => onYeastTypeChange(e.target.value as YeastType)}
            className="rounded-md border-slate-300 py-1.5 pl-3 pr-8 text-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 bg-white"
          >
            <option value={YeastType.IDY}>Instant Yeast (IDY)</option>
            <option value={YeastType.ADY}>Active Dry (ADY)</option>
            <option value={YeastType.FRESH}>Fresh Yeast</option>
            <option value={YeastType.SOURDOUGH_STARTER}>Sourdough Starter</option>
            <option value={YeastType.USER_LEVAIN}>My Levain (My Lab)</option>
          </select>
        </div>

        {/* Levain Selector Logic */}
        {config.yeastType === YeastType.USER_LEVAIN && (
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            {!levains || levains.length === 0 ? (
              <div className="text-center py-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 mb-2">
                  <BeakerIcon className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="text-sm font-medium text-slate-900">No Starters Found</h3>
                <p className="text-sm text-slate-600 mb-3">No starters found in My Lab.</p>
                <button
                  type="button"
                  onClick={() => window.location.hash = '#/mylab/levain'}
                  className="inline-flex items-center rounded-md border border-transparent bg-lime-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none"
                >
                  Create Starter
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {levains.map(levain => (
                  <div
                    key={levain.id}
                    onClick={() => onConfigChange({ levainId: levain.id })}
                    className={`relative cursor-pointer rounded-lg border p-4 shadow-sm transition-all hover:border-lime-500 ${config.levainId === levain.id ? 'border-lime-500 ring-1 ring-lime-500 bg-white' : 'border-slate-200 bg-white'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-slate-900">{levain.name}</h4>
                        <p className="text-xs text-slate-500 mt-1">Hydration: {levain.hydration}% • Last Fed: {timeSince(levain.lastFeeding)} ago</p>
                      </div>
                      {config.levainId === levain.id && (
                        <div className="h-5 w-5 rounded-full bg-lime-500 flex items-center justify-center">
                          <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <SliderInput
          label={config.yeastType === YeastType.SOURDOUGH_STARTER || config.yeastType === YeastType.USER_LEVAIN ? "Starter Percentage" : "Yeast Percentage"}
          value={config.yeastPercentage}
          onChange={(val) => onConfigChange({ yeastPercentage: val })}
          min={0.1}
          max={config.yeastType === YeastType.SOURDOUGH_STARTER || config.yeastType === YeastType.USER_LEVAIN ? 50 : 5}
          step={0.1}
          unit="%"
          description="Amount relative to flour weight."
        />
      </div>

      {/* 4. Advanced Table Editor Toggle */}
      {calculatorMode === 'advanced' && (
        <div className="mt-6 pt-6 border-t border-slate-200">
          <div className="relative">
            {!hasProAccess && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 backdrop-blur-[1px] rounded-xl">
                <button
                  onClick={() => openPaywall('calculator')}
                  className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  <CubeIcon className="h-4 w-4 text-lime-400" />
                  Unlock Ingredient Table
                </button>
              </div>
            )}
            <button
              onClick={() => hasProAccess && setShowTableEditor(!showTableEditor)}
              className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <CubeIcon className="h-5 w-5 text-slate-500" />
                <span className="text-sm font-semibold text-slate-700">Advanced Ingredient Table</span>
              </div>
              <span className="text-xs text-lime-600 font-bold hover:underline">
                {showTableEditor ? 'Hide' : 'Edit'}
              </span>
            </button>

            {showTableEditor && hasProAccess && (
              <div className="mt-4 animate-fade-in">
                <IngredientTableEditor
                  config={config}
                  onConfigChange={onConfigChange}
                  unit={unit}
                  unitSystem={unitSystem}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </AccordionSection>
  );
};

export default IngredientsSection;
