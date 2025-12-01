import React from 'react';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import SliderInput from "@/components/ui/SliderInput";
import { CubeIcon } from "@/components/ui/Icons";
import { YeastType, FormErrors, DoughConfig, Levain } from "@/types";
import { getArticleById } from "@/data/learnArticles";
import { timeSince } from "@/utils/dateUtils";
import { LockFeature } from "@/components/auth/LockFeature";
import { IngredientTableEditor } from "@/components/calculator/IngredientTableEditor";

interface IngredientsSectionProps {
  config: DoughConfig;
  errors: FormErrors;
  handleNumberChange: (name: string, value: number) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleIngredientsUpdate: (ingredients: any[]) => void;
  isBasic: boolean;
  isAnySourdough: boolean;
  levains: Levain[];
  selectedLevain?: Levain;
  YEAST_OPTIONS: { value: string; labelKey: string }[];
  getRange: (field: string) => [number, number] | undefined;
  getSelectClasses: () => string;
}

const IngredientsSection: React.FC<IngredientsSectionProps> = ({
  config,
  errors,
  handleNumberChange,
  handleSelectChange,
  handleIngredientsUpdate,
  isBasic,
  isAnySourdough,
  levains,
  selectedLevain,
  YEAST_OPTIONS,
  getRange,
  getSelectClasses,
}) => {
  return (
    <div className="space-y-6">
      {isBasic ? (
        <>
          <SliderInput
            label="Hydration"
            name="hydration"
            value={config.hydration}
            onChange={handleNumberChange}
            min={50} max={90} step={1} unit="%"
            tooltip="Water content relative to flour weight."
            hasError={!!errors.hydration}
            recommendedMin={getRange('hydration')?.[0]}
            recommendedMax={getRange('hydration')?.[1]}
            learnArticle={getArticleById('water')}
          />
          <SliderInput
            label="Salt"
            name="salt"
            value={config.salt}
            onChange={handleNumberChange}
            min={0} max={5} step={0.1} unit="%"
            tooltip="Salt content relative to flour weight."
            hasError={!!errors.salt}
            recommendedMin={getRange('salt')?.[0]}
            recommendedMax={getRange('salt')?.[1]}
            learnArticle={getArticleById('salt')}
          />
        </>
      ) : (
        <>
          <LockedTeaser featureKey="calculator.hydration_advanced">
            <SliderInput
              label="Hydration"
              name="hydration"
              value={config.hydration}
              onChange={handleNumberChange}
              min={0} max={120} step={1} unit="%"
              tooltip="Controls dough wetness and crust texture. Higher hydration (65%+) creates an open, airy crumb but is stickier to handle."
              hasError={!!errors.hydration}
              recommendedMin={getRange('hydration')?.[0]}
              recommendedMax={getRange('hydration')?.[1]}
              learnArticle={getArticleById('water')}
            />
          </LockedTeaser>
          <SliderInput
            label="Salt"
            name="salt"
            value={config.salt}
            onChange={handleNumberChange}
            min={0} max={5} step={0.1} unit="%"
            tooltip="Regulates yeast activity, strengthens gluten, and enhances flavor. 2-3% is standard for most styles."
            hasError={!!errors.salt}
            recommendedMin={getRange('salt')?.[0]}
            recommendedMax={getRange('salt')?.[1]}
            learnArticle={getArticleById('salt')}
          />
          <SliderInput
            label="Oil/Fat"
            name="oil"
            value={config.oil}
            onChange={handleNumberChange}
            min={0} max={100} step={0.5} unit="%"
            tooltip="Softens the crumb and helps with browning. Olive oil adds flavor; lard/shortening adds tenderness."
            hasError={!!errors.oil}
            recommendedMin={getRange('oil')?.[0]}
            recommendedMax={getRange('oil')?.[1]}
            learnArticle={getArticleById('fats')}
          />
          <SliderInput
            label="Sugar"
            name="sugar"
            value={config.sugar || 0}
            onChange={handleNumberChange}
            min={0} max={100} step={0.5} unit="%"
            tooltip="Provides food for yeast and promotes browning (Maillard reaction). Essential for short fermentation or low-temp ovens."
            hasError={!!errors.sugar}
            recommendedMin={getRange('sugar')?.[0]}
            recommendedMax={getRange('sugar')?.[1]}
            learnArticle={getArticleById('sugars')}
          />
        </>
      )}

      <div className="pt-6 border-t border-slate-200">
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="yeastType" className="mb-1 block text-sm font-medium text-slate-700">Yeast Type</label>
            <select id="yeastType" name="yeastType" value={config.yeastType} onChange={handleSelectChange} className={getSelectClasses()}>
              {YEAST_OPTIONS.map((opt) => (<option key={opt.value} value={opt.value}>{opt.labelKey}</option>))}
            </select>
          </div>
          <SliderInput label={isAnySourdough ? "Starter %" : "Yeast %"} name="yeastPercentage" value={config.yeastPercentage} onChange={handleNumberChange} min={0} max={isAnySourdough ? (isBasic ? 30 : 200) : (isBasic ? 2 : 5)} step={isAnySourdough ? 1 : 0.1} unit="%" tooltip="Determines fermentation speed. Adjust based on time and temperature. Less yeast = longer fermentation = more flavor." hasError={!!errors.yeastPercentage} learnArticle={getArticleById('yeasts')} />
        </div>

        {isAnySourdough && (
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            {config.yeastType === YeastType.SOURDOUGH_STARTER && (
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-full shadow-sm text-slate-400">
                  <CubeIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Generic Starter</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Assumed Hydration: <strong>100%</strong>.
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    To track your specific starter's hydration and feeding schedule, select <strong>"My Starter"</strong>.
                  </p>
                </div>
              </div>
            )}

            {config.yeastType === YeastType.USER_LEVAIN && (
              <>
                {levains.length > 0 ? (
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="levainId" className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Selected Levain</label>
                      <select id="levainId" name="levainId" value={config.levainId || ''} onChange={handleSelectChange} className={getSelectClasses()}>
                        {levains.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                      </select>
                    </div>
                    {selectedLevain && (
                      <div className="bg-white rounded-md border border-slate-200 p-3 shadow-sm grid grid-cols-2 gap-4">
                        <div>
                          <span className="block text-xs text-slate-500 uppercase">Hydration</span>
                          <span className="block text-lg font-bold text-slate-800">{selectedLevain.hydration}%</span>
                        </div>
                        <div>
                          <span className="block text-xs text-slate-500 uppercase">Last Fed</span>
                          <span className="block text-lg font-bold text-slate-800">{timeSince(selectedLevain.lastFeeding)} ago</span>
                        </div>
                        <div className="col-span-2 border-t border-slate-100 pt-2 mt-1">
                          <span className="block text-xs text-slate-500">Status</span>
                          <span className={`font-medium ${selectedLevain.status === 'ativo' ? 'text-green-600' :
                            selectedLevain.status === 'precisa_atencao' ? 'text-amber-600' : 'text-slate-600'
                            }`}>
                            {selectedLevain.status === 'ativo' ? 'Active' : selectedLevain.status === 'precisa_atencao' ? 'Needs Attention' : 'Resting'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-2">
                    <p className="text-sm text-slate-600 mb-3">No starters found in My Lab.</p>
                    <a href="#/mylab/levain" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-br from-lime-500 to-lime-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-lime-600 hover:to-lime-800">
                      Create Levain
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <CubeIcon className="h-5 w-5 text-lime-600" />
              Advanced Ingredients
            </h3>
            <LockFeature featureKey="calculator.advanced_ingredients" customMessage="Unlock Pro Ingredients">
              <IngredientTableEditor
                ingredients={config.ingredients || []}
                onChange={handleIngredientsUpdate}
                totalFlour={1000} // Placeholder, calculation handles real value
              />
            </LockFeature>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsSection;
