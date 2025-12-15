import React from 'react';
import { DoughConsistencyVisualizer } from '@/components/calculator/DoughConsistencyVisualizer';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import SliderInput from "@/components/ui/SliderInput";
import { CubeIcon } from "@/components/ui/Icons";
import { YeastType, FormErrors, DoughConfig, Levain, DoughResult } from "@/types";
import { getArticleById } from "@/data/learn";
import { timeSince } from "@/utils/dateUtils";
import { LockFeature } from "@/components/auth/LockFeature";
import { IngredientTableEditor } from "@/components/calculator/IngredientTableEditor";
import { useTranslation } from '@/i18n';

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
  results?: DoughResult | null;
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
  results,
}) => {
  const { t } = useTranslation();

  const totalFlour = React.useMemo(() => {
    if (!results) return 1000;
    // Handle Direct vs Preferment flour sums
    const finalF = results.finalDough?.flour || 0;
    const prefF = results.preferment?.flour || 0;
    // If Direct, preferment is likely undefined or 0.
    // If Poolish/Biga, total = both.
    return finalF + prefF;
  }, [results]);

  const getLabel = (ing: any) => {
    const n = ing.name.toLowerCase();
    if ((n.includes('egg') || n.includes('ovo')) && !n.includes('free') && !n.includes('plant')) {
      const weight = (ing.bakerPercentage || 0) / 100 * totalFlour;
      let unitW = 50;
      if (n.includes('yolk') || n.includes('gema')) unitW = 18;
      if (n.includes('white') || n.includes('clara')) unitW = 30;

      // Avoid division by zero
      if (unitW === 0) return ing.name;

      const count = weight / unitW;
      const str = Math.abs(Math.round(count) - count) < 0.1 ? Math.round(count).toString() : count.toFixed(1);
      return `${ing.name} (~${str} un • ${Math.round(weight)}g)`;
    }
    return ing.name;
  };

  return (
    <div className="space-y-6">
      {isBasic ? (
        <>
          <SliderInput
            label={config.bakeType === 'SWEETS_PASTRY' ? t('calculator.liquids_eggs') : t('form.hydration')}
            name="hydration"
            value={config.hydration}
            onChange={handleNumberChange}
            min={config.bakeType === 'SWEETS_PASTRY' ? 0 : 50}
            max={config.bakeType === 'SWEETS_PASTRY' ? 200 : 90}
            step={1}
            unit="%"
            tooltip={t('calculator.hydration_tooltip')}
            hasError={!!errors.hydration}
            recommendedMin={getRange('hydration')?.[0]}
            recommendedMax={getRange('hydration')?.[1]}
            learnArticle={getArticleById('water-hydration-dynamics')}
          />
          {config.bakeType !== 'SWEETS_PASTRY' && (
            <div className="mb-4">
              <DoughConsistencyVisualizer hydration={config.hydration} />
            </div>
          )}
          <SliderInput
            label={t('results.salt')}
            name="salt"
            value={config.salt}
            onChange={handleNumberChange}
            min={0} max={5} step={0.1} unit="%"
            tooltip={t('calculator.salt_tooltip')}
            hasError={!!errors.salt}
            recommendedMin={getRange('salt')?.[0]}
            recommendedMax={getRange('salt')?.[1]}
            learnArticle={getArticleById('salt-functionality-osmotic-effects')}
          />
        </>
      ) : (
        <>
          {config.bakeType !== 'SWEETS_PASTRY' && (
            <LockedTeaser featureKey="calculator.hydration_advanced">
              <SliderInput
                label={t('form.hydration')}
                name="hydration"
                value={config.hydration}
                onChange={handleNumberChange}
                min={0} max={120} step={1} unit="%"
                tooltip={t('calculator.hydration_advanced_help')}
                hasError={!!errors.hydration}
                recommendedMin={getRange('hydration')?.[0]}
                recommendedMax={getRange('hydration')?.[1]}
                learnArticle={getArticleById('water-hydration-dynamics')}
              />
              <DoughConsistencyVisualizer hydration={config.hydration} />
            </LockedTeaser>
          )}
          <SliderInput
            label={t('results.salt')}
            name="salt"
            value={config.salt}
            onChange={handleNumberChange}
            min={0} max={5} step={0.1} unit="%"
            tooltip={t('calculator.salt_advanced_help')}
            hasError={!!errors.salt}
            recommendedMin={getRange('salt')?.[0]}
            recommendedMax={getRange('salt')?.[1]}
            learnArticle={getArticleById('salt-functionality-osmotic-effects')}
          />

          {/* Dynamic Ingredient Sliders (Universal Engine) */}
          {config.ingredients?.filter(i =>
            !['flour', 'water', 'salt', 'yeast', 'starter'].includes(i.role || '') &&
            // We can exclude 'other' if we want, but usually custom ingredients are 'other'.
            // Exclude chemical leaveners if handled elsewhere? No, keep them.
            true
          ).map(ing => (
            <SliderInput
              key={ing.id}
              label={getLabel(ing)}
              name={`ing-${ing.id}`}
              value={ing.bakerPercentage || 0}
              onChange={(_, val) => {
                const newIngs = config.ingredients?.map(Current =>
                  Current.id === ing.id ? { ...Current, bakerPercentage: val, manualOverride: true } : Current
                );
                handleIngredientsUpdate(newIngs || []);
              }}
              min={0}
              max={ing.role === 'sugar' ? 300 : ing.role === 'fat' ? 200 : ing.name.includes('Chocolate') ? 200 : 100}
              step={0.1}
              unit="%"
              tooltip={`${t('calculator.adjust_percentage_of')} ${ing.name}`}
            />
          ))}
        </>
      )}

      <div className="pt-6 border-t border-dlp-border">
        {/* Hide Yeast controls if style is Chemical/No-Ferment (e.g. Brownies, Cookies) */}
        {!(config.fermentationTechnique === 'CHEMICAL' || config.fermentationTechnique === 'NO_FERMENT') && (
          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="yeastType" className="mb-1 block text-sm font-medium text-dlp-text-secondary">{t('calculator.yeast_type')}</label>
              <select id="yeastType" name="yeastType" value={config.yeastType} onChange={handleSelectChange} className={getSelectClasses()}>
                {YEAST_OPTIONS.map((opt) => (<option key={opt.value} value={opt.value}>{opt.labelKey}</option>))}
              </select>
            </div>
            <SliderInput label={isAnySourdough ? t('calculator.starter_') : t('calculator.yeast_')} name="yeastPercentage" value={config.yeastPercentage} onChange={handleNumberChange} min={0} max={isAnySourdough ? (isBasic ? 30 : 200) : (isBasic ? 2 : 5)} step={isAnySourdough ? 1 : 0.1} unit="%" tooltip={t('calculator.yeast_tooltip')} hasError={!!errors.yeastPercentage} learnArticle={getArticleById('yeast-leavening-agents')} />
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
                  <h4 className="text-sm font-bold text-dlp-text-primary">{t('calculator.generic_starter')}</h4>
                  <p className="text-xs text-dlp-text-secondary mt-1">
                    Assumed Hydration: <strong>100%</strong>.
                  </p>
                  <p className="text-xs text-dlp-text-muted mt-2">
                    To track your specific starter's hydration and feeding schedule, select <strong>{t('calculator.my_starter')}</strong>.
                  </p>
                </div>
              </div>
            )}

            {config.yeastType === YeastType.USER_LEVAIN && (
              <>
                {levains.length > 0 ? (
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="levainId" className="block text-xs font-bold uppercase tracking-wide text-dlp-text-muted mb-1">{t('calculator.selected_levain')}</label>
                      <select id="levainId" name="levainId" value={config.levainId || ''} onChange={handleSelectChange} className={getSelectClasses()}>
                        {levains.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                      </select>
                    </div>
                    {selectedLevain && (
                      <div className="bg-dlp-bg-card rounded-md border border-dlp-border p-3 shadow-dlp-sm grid grid-cols-2 gap-4">
                        <div>
                          <span className="block text-xs text-dlp-text-muted uppercase">{t('form.hydration')}</span>
                          <span className="block text-lg font-bold text-dlp-text-primary">{selectedLevain.hydration}%</span>
                        </div>
                        <div>
                          <span className="block text-xs text-dlp-text-muted uppercase">{t('calculator.last_fed')}</span>
                          <span className="block text-lg font-bold text-dlp-text-primary">{timeSince(selectedLevain.lastFeeding)} ago</span>
                        </div>
                        <div className="col-span-2 border-t border-dlp-border pt-2 mt-1">
                          <span className="block text-xs text-dlp-text-muted">{t('calculator.status')}</span>
                          <span className={`font-medium ${selectedLevain.status === 'ativo' ? 'text-dlp-success' :
                            selectedLevain.status === 'precisa_atencao' ? 'text-dlp-warning' : 'text-dlp-text-secondary'
                            }`}>
                            {selectedLevain.status === 'ativo' ? t('calculator.status_active') : selectedLevain.status === 'precisa_atencao' ? t('calculator.status_needs_attention') : t('calculator.status_resting')}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-2">
                    <p className="text-sm text-dlp-text-secondary mb-3">{t('calculator.no_starters_found_in_my_lab')}</p>
                    <a href="#/mylab/levain" className="inline-flex items-center justify-center gap-2 rounded-md bg-dlp-accent px-4 py-2 text-sm font-semibold text-white shadow-dlp-sm hover:bg-dlp-accent-hover transition-colors">{t('calculator.create_levain')}</a>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {config.bakeType !== 'SWEETS_PASTRY' && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-dlp-text-primary flex items-center gap-2">
                <CubeIcon className="h-5 w-5 text-dlp-accent" />{t('calculator.advanced_ingredients')}</h3>
              <LockFeature featureKey="calculator.advanced_ingredients" customMessage={t('calculator.unlock_pro_ingredients')}>
                <IngredientTableEditor
                  ingredients={config.ingredients || []}
                  onChange={handleIngredientsUpdate}
                  totalFlour={1000} // Placeholder
                />
              </LockFeature>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientsSection;
