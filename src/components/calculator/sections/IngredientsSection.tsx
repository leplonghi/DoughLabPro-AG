import React from 'react';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import SliderInput from "@/components/ui/SliderInput";
import { CubeIcon } from "@/components/ui/Icons";
import { YeastType, FormErrors, DoughConfig, Levain } from "@/types";
import { getArticleById } from "@/data/learn";
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
            label={config.bakeType === 'SWEETS_PASTRY' ? "Liquids (inc. Eggs)" : "Hydration"}
            name="hydration"
            value={config.hydration}
            onChange={handleNumberChange}
            min={config.bakeType === 'SWEETS_PASTRY' ? 0 : 50}
            max={config.bakeType === 'SWEETS_PASTRY' ? 200 : 90}
            step={1}
            unit="%"
            tooltip="Water content relative to flour weight."
            hasError={!!errors.hydration}
            recommendedMin={getRange('hydration')?.[0]}
            recommendedMax={getRange('hydration')?.[1]}
            learnArticle={getArticleById('water-hydration-dynamics')}
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
            learnArticle={getArticleById('salt-functionality-osmotic-effects')}
          />
        </>
      ) : (
        <>
          <LockedTeaser featureKey="calculator.hydration_advanced">
            <SliderInput
              label={config.bakeType === 'SWEETS_PASTRY' ? "Liquids (inc. Eggs)" : "Hydration"}
              name="hydration"
              value={config.hydration}
              onChange={handleNumberChange}
              min={0} max={config.bakeType === 'SWEETS_PASTRY' ? 200 : 120} step={1} unit="%"
              tooltip="Controls dough wetness and crust texture. Higher hydration (65%+) creates an open, airy crumb but is stickier to handle."
              hasError={!!errors.hydration}
              recommendedMin={getRange('hydration')?.[0]}
              recommendedMax={getRange('hydration')?.[1]}
              learnArticle={getArticleById('water-hydration-dynamics')}
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
            learnArticle={getArticleById('salt-functionality-osmotic-effects')}
          />
          <SliderInput
            label={config.bakeType === 'SWEETS_PASTRY' ? "Butter/Fat" : "Oil/Fat"}
            name="oil"
            value={config.oil}
            onChange={handleNumberChange}
            min={0} max={100} step={0.5} unit="%"
            tooltip="Softens the crumb and helps with browning. Olive oil adds flavor; lard/shortening adds tenderness."
            hasError={!!errors.oil}
            recommendedMin={getRange('oil')?.[0]}
            recommendedMax={getRange('oil')?.[1]}
            learnArticle={getArticleById('fats-oils-lubrication-oxidation')}
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
            learnArticle={getArticleById('sugars-enzymatic-activity')}
          />
        </>
      )}

      <div className="pt-6 border-t border-dlp-border">
        {/* Hide Yeast controls if style is Chemical/No-Ferment (e.g. Brownies, Cookies) */}
        {!(config.fermentationTechnique === 'CHEMICAL' || config.fermentationTechnique === 'NO_FERMENT') && (
          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="yeastType" className="mb-1 block text-sm font-medium text-dlp-text-secondary">Yeast Type</label>
              <select id="yeastType" name="yeastType" value={config.yeastType} onChange={handleSelectChange} className={getSelectClasses()}>
                {YEAST_OPTIONS.map((opt) => (<option key={opt.value} value={opt.value}>{opt.labelKey}</option>))}
              </select>
            </div>
            <SliderInput label={isAnySourdough ? "Starter %" : "Yeast %"} name="yeastPercentage" value={config.yeastPercentage} onChange={handleNumberChange} min={0} max={isAnySourdough ? (isBasic ? 30 : 200) : (isBasic ? 2 : 5)} step={isAnySourdough ? 1 : 0.1} unit="%" tooltip="Determines fermentation speed. Adjust based on time and temperature. Less yeast = longer fermentation = more flavor." hasError={!!errors.yeastPercentage} learnArticle={getArticleById('yeast-leavening-agents')} />
          </div>
        )}

        {isAnySourdough && (
          <div className="mt-4 rounded-lg border border-dlp-border bg-dlp-bg-muted p-4">
            {config.yeastType === YeastType.SOURDOUGH_STARTER && (
              <div className="flex items-start gap-3">
                <div className="p-2 bg-dlp-bg-card rounded-full shadow-dlp-sm text-dlp-text-muted border border-dlp-border">
                  <CubeIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dlp-text-primary">Generic Starter</h4>
                  <p className="text-xs text-dlp-text-secondary mt-1">
                    Assumed Hydration: <strong>100%</strong>.
                  </p>
                  <p className="text-xs text-dlp-text-muted mt-2">
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
                      <label htmlFor="levainId" className="block text-xs font-bold uppercase tracking-wide text-dlp-text-muted mb-1">Selected Levain</label>
                      <select id="levainId" name="levainId" value={config.levainId || ''} onChange={handleSelectChange} className={getSelectClasses()}>
                        {levains.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                      </select>
                    </div>
                    {selectedLevain && (
                      <div className="bg-dlp-bg-card rounded-md border border-dlp-border p-3 shadow-dlp-sm grid grid-cols-2 gap-4">
                        <div>
                          <span className="block text-xs text-dlp-text-muted uppercase">Hydration</span>
                          <span className="block text-lg font-bold text-dlp-text-primary">{selectedLevain.hydration}%</span>
                        </div>
                        <div>
                          <span className="block text-xs text-dlp-text-muted uppercase">Last Fed</span>
                          <span className="block text-lg font-bold text-dlp-text-primary">{timeSince(selectedLevain.lastFeeding)} ago</span>
                        </div>
                        <div className="col-span-2 border-t border-dlp-border pt-2 mt-1">
                          <span className="block text-xs text-dlp-text-muted">Status</span>
                          <span className={`font-medium ${selectedLevain.status === 'ativo' ? 'text-dlp-success' :
                            selectedLevain.status === 'precisa_atencao' ? 'text-dlp-warning' : 'text-dlp-text-secondary'
                            }`}>
                            {selectedLevain.status === 'ativo' ? 'Active' : selectedLevain.status === 'precisa_atencao' ? 'Needs Attention' : 'Resting'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-2">
                    <p className="text-sm text-dlp-text-secondary mb-3">No starters found in My Lab.</p>
                    <a href="#/mylab/levain" className="inline-flex items-center justify-center gap-2 rounded-md bg-dlp-accent px-4 py-2 text-sm font-semibold text-white shadow-dlp-sm hover:bg-dlp-accent-hover transition-colors">
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
            <h3 className="text-lg font-bold text-dlp-text-primary flex items-center gap-2">
              <CubeIcon className="h-5 w-5 text-dlp-accent" />
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
