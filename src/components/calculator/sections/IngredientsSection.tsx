import React from 'react';
import { HydrationInput } from '@/components/calculator/HydrationInput';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import SliderInput from "@/components/ui/SliderInput";
import { CubeIcon, InfoIcon } from "@/components/ui/Icons";
import { FlourSelector } from '@/components/calculator/FlourSelector';
import { YeastType, FormErrors, DoughConfig, Levain, DoughResult, IngredientConfig } from "@/types";
import { getArticleById } from "@/data/learn";
import { timeSince } from "@/utils/dateUtils";
import { LockFeature } from "@/components/auth/LockFeature";
import { IngredientTableEditor } from "@/components/calculator/IngredientTableEditor";
import { InfoTooltip } from '@/components/ui/InfoTooltip';
import { useTranslation } from '@/i18n';
import { FLOURS } from '@/flours-constants';

interface IngredientsSectionProps {
  config: DoughConfig;
  errors: FormErrors;
  handleNumberChange: (name: string, value: number) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleIngredientsUpdate: (ingredients: IngredientConfig[]) => void;
  onConfigChange: (newConfig: Partial<DoughConfig>) => void;
  isGuided: boolean;
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
  onConfigChange,
  isGuided,
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
    return (results.finalDough?.flour || 0) + (results.preferment?.flour || 0);
  }, [results]);

  const selectedFlourDef = React.useMemo(() => FLOURS.find(f => f.id === config.flourId), [config.flourId]);

  const recommendedHydrationRange = React.useMemo(() => {
    if (selectedFlourDef?.hydrationHint?.min !== undefined && selectedFlourDef?.hydrationHint?.max !== undefined) {
      return [selectedFlourDef.hydrationHint.min, selectedFlourDef.hydrationHint.max];
    }
    return getRange('hydration');
  }, [selectedFlourDef, getRange]);

  const getLabel = (ing: any) => {
    const rawName = ing.name;
    const translatedName = t(rawName);
    const n = translatedName.toLowerCase();
    if ((n.includes('egg') || n.includes('ovo')) && !n.includes('free') && !n.includes('plant')) {
      const weight = (ing.bakerPercentage || 0) / 100 * totalFlour;
      let unitW = 50;
                if (n.includes('yolk') || n.includes('gema')) unitW = 18;
                if (n.includes('white') || n.includes('clara')) unitW = 30;
      if (unitW === 0) return translatedName;
      const count = weight / unitW;
      const str = Math.abs(Math.round(count) - count) < 0.1 ? Math.round(count).toString() : count.toFixed(1);
      return `${translatedName} (~${str} un • ${Math.round(weight)}g)`;
    }
    return translatedName;
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {isGuided && (
        <div className="dlp-inline-notice dlp-inline-notice--brand rounded-[1.4rem] px-4 py-3 text-[12px] font-medium">
          Guided mode keeps flour and hydration aligned with the selected style for consistent results.
        </div>
      )}

      <FlourSelector
        selectedFlourId={config.flourId}
        onFlourChange={(flourId) => handleSelectChange({ target: { name: 'flourId', value: flourId } } as any)}
        currentHydration={config.hydration}
        disabled={isGuided}
        disabledReason="Unlock Advanced mode to change flour profile."
      />

      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <HydrationInput
            label={
              <div className="flex items-center gap-2">
                <span>{config.bakeType === 'SWEETS_PASTRY' ? t('calculator.liquids_eggs') : t('form.hydration')}</span>
                <InfoTooltip
                  variant="tutorial"
                  size="lg"
                  position="right"
                  content={
                    <div>
                      <p className="font-bold mb-2">💧 Hidratação: A alma da massa</p>
                      <div className="space-y-2 text-[11px]">
                        <p><strong>O que é?</strong> Percentual de água em relação à farinha.</p>
                        <div className="bg-white/10 rounded-lg p-2 my-2">
                          <p className="font-bold text-[10px] mb-1">Guia Rápido:</p>
                          <ul className="space-y-0.5 text-[10px]">
                            <li>• 55-60%: Massa firme (bagels)</li>
                            <li>• 60-65%: Clássica (pizza NY)</li>
                            <li>• 65-70%: Macia (pães artesanais)</li>
                            <li>• 70-80%: Muito úmida (ciabatta)</li>
                            <li>• 80%+: Extrema (focaccia)</li>
                          </ul>
                        </div>
                        <p className="text-[10px] opacity-80">💡 Mais água = mais alvéolos, mas mais difícil de trabalhar!</p>
                      </div>
                    </div>
                  }
                />
              </div>
            }
            value={config.hydration}
            onChange={(e) => handleNumberChange('hydration', Number(e.target.value))}
            min={config.bakeType === 'SWEETS_PASTRY' ? 0 : 40}
            max={isGuided ? 100 : 120}
            step={1}
            tooltip={t('calculator.hydration_tooltip')}
            hasError={!!errors.hydration}
            recommendedMin={recommendedHydrationRange?.[0]}
            recommendedMax={recommendedHydrationRange?.[1]}
            learnArticle={getArticleById('water-hydration-dynamics')}
            totalFlour={totalFlour}
            disabled={isGuided}
          />

          <SliderInput
            label={
              <div className="flex items-center gap-2">
                <span>{t('results.salt')}</span>
                <InfoTooltip
                  variant="tutorial"
                  size="lg"
                  position="right"
                  content={
                    <div>
                      <p className="font-bold mb-2">🧂 Sal: Controle e sabor</p>
                      <div className="space-y-2 text-[11px]">
                        <p><strong>Funções principais:</strong></p>
                        <ul className="space-y-1 text-[10px] ml-2">
                          <li>✓ Fortalece o glúten</li>
                          <li>✓ Controla fermentação</li>
                          <li>✓ Realça sabor</li>
                          <li>✓ Melhora cor da crosta</li>
                        </ul>
                        <div className="bg-white/10 rounded-lg p-2 my-2">
                          <p className="font-bold text-[10px]">Recomendações:</p>
                          <p className="text-[10px]">• Pizza: 2-2.5%</p>
                          <p className="text-[10px]">• Pão: 1.8-2.2%</p>
                          <p className="text-[10px]">• Focaccia: 2.5-3%</p>
                        </div>
                        <p className="text-[10px] opacity-80">⚠️ Nunca misture sal direto com fermento!</p>
                      </div>
                    </div>
                  }
                />
              </div>
            }
            name="salt"
            value={config.salt}
            onValueChange={(nextValue) => handleNumberChange('salt', nextValue)}
            min={0} max={5} step={0.1} unit="%"
            tooltip={t('calculator.salt_tooltip')}
            hasError={!!errors.salt}
            recommendedMin={getRange('salt')?.[0]}
            recommendedMax={getRange('salt')?.[1]}
            learnArticle={getArticleById('salt-functionality-osmotic-effects')}
            totalFlour={totalFlour}
            quickValues={[2, 2.2, 2.5, 3]}
          />

          {/* Logic for Dynamic Ingredient Sliders */}
          {!isGuided && config.ingredients?.filter(i => !['flour', 'water', 'salt', 'yeast', 'starter'].includes(i.role || '')).map(ing => (
            <SliderInput
              key={ing.id}
              label={getLabel(ing)}
              name={`ing-${ing.id}`}
              value={ing.bakerPercentage || 0}
              onValueChange={(val) => {
                const newIngs = config.ingredients?.map(Current => Current.id === ing.id ? { ...Current, bakerPercentage: val, manualOverride: true } : Current) || [];

                const updates: Partial<DoughConfig> = { ingredients: newIngs };
                if (ing.role === 'fat') updates.oil = val;
                if (ing.role === 'sugar') updates.sugar = val;

                onConfigChange(updates);
              }}
              min={0}
              max={ing.role === 'sugar' ? 300 : ing.role === 'fat' ? 200 : 100}
              step={0.1}
              unit="%"
              tooltip={`${t('calculator.adjust_percentage_of')} ${ing.name}`}
              totalFlour={totalFlour}
            />
          ))}
        </div>

        {!(config.fermentationTechnique === 'CHEMICAL' || config.fermentationTechnique === 'NO_FERMENT') && (
          <div className="space-y-4 border-t border-slate-200/70 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 group">
                <div className="dlp-calc-panel h-full overflow-hidden rounded-[1.5rem] border flex flex-col">
                  <div className="border-b border-slate-200/70 px-4 py-3">
                    <label htmlFor="yeastType" className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#385343] dark:text-emerald-100">
                      {t('calculator.yeast_type')}
                    </label>
                  </div>
                  <div className="flex flex-grow items-center p-3">
                    <select
                      id="yeastType"
                      name="yeastType"
                      value={config.yeastType}
                      onChange={handleSelectChange}
                      className="dlp-calc-field w-full rounded-[1rem] border bg-transparent py-3 px-3 text-sm font-semibold text-slate-800 outline-none dark:text-slate-100"
                    >
                      {YEAST_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{t(opt.labelKey)}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="md:col-span-8">
                <SliderInput
                  label={isAnySourdough ? t('calculator.starter_') : t('calculator.yeast_')}
                  name="yeastPercentage"
                  value={config.yeastPercentage}
                  onValueChange={(nextValue) => handleNumberChange('yeastPercentage', nextValue)}
                  min={0}
                  max={isAnySourdough ? (isGuided ? 40 : 200) : (isGuided ? 3 : 5)}
                  step={isAnySourdough ? 1 : 0.1}
                  unit="%"
                  tooltip={t('calculator.yeast_tooltip')}
                  hasError={!!errors.yeastPercentage}
                  learnArticle={getArticleById('yeast-leavening-agents')}
                  totalFlour={totalFlour}
                  quickValues={isAnySourdough ? [10, 20, 30, 40] : [0.1, 0.2, 0.5, 1]}
                />
              </div>
            </div>

            {isAnySourdough && (
              <div className="rounded-[1.8rem] border border-emerald-200/70 bg-[linear-gradient(180deg,rgba(236,250,238,0.96),rgba(248,252,248,0.98))] p-5 dark:border-emerald-900/50 dark:bg-[linear-gradient(180deg,rgba(17,41,27,0.95),rgba(11,24,16,0.97))]">
                {config.yeastType === YeastType.SOURDOUGH_STARTER ? (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#065F46] shadow-[0_14px_24px_-18px_rgba(47,139,73,0.4)] dark:bg-emerald-950/70">
                      <CubeIcon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-heading text-[#16351f] dark:text-emerald-50">{t('calculator.generic_starter')}</h4>
                      <p className="mt-1 text-[12px] leading-relaxed text-[#35513c] dark:text-emerald-100/80">
                        Calibrated for a <strong>balanced 100% hydration</strong>. For specific strain adjustments or feeding windows, use <strong>t('calculator.my_lab_394')</strong>.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {levains.length > 0 ? (
                      <>
                        <div>
                          <label htmlFor="levainId" className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#385343] dark:text-emerald-100">{t('calculator.selected_levain')}</label>
                          <select id="levainId" name="levainId" value={config.levainId || ''} onChange={handleSelectChange} className="dlp-calc-field w-full rounded-[1rem] border bg-transparent py-3 px-3 text-xs font-semibold text-slate-800 outline-none dark:text-slate-100">
                            {levains.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                          </select>
                        </div>
                        {selectedLevain && (
                          <div className="grid grid-cols-2 gap-3">
                            <div className="dlp-calc-metric rounded-[1.2rem] p-3">
                              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Status</span>
                              <span className={`text-[11px] font-bold ${selectedLevain.status === 'ativo' ? 'text-dlp-brand-hover' : 'text-amber-600'}`}>
                                {selectedLevain.status === 'ativo' ? 'Active & Ready' : t('calculator.needs_attention_395')}
                              </span>
                            </div>
                            <div className="dlp-calc-metric rounded-[1.2rem] p-3">
                              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Consistency</span>
                              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-100">{selectedLevain.hydration}% Hydration</span>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <p className="mb-4 text-xs font-bold font-heading text-[#1B4332] dark:text-emerald-50">{t('calculator.no_starters_found_in_my_lab')}</p>
                        <a href="#/mylab/levain" className="inline-block rounded-2xl bg-[#1B4332] px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-all hover:bg-[#51a145] hover:text-white active:scale-95">{t('calculator.create_levain')}</a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {!isGuided && (
          <div className="border-t border-slate-200/70 pt-6">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-emerald-100 dark:bg-emerald-900/60">
                  <CubeIcon size={12} className="text-[#1B4332]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-slate-50">{t('calculator.dough_composition')}</h3>
              </div>
            </div>

            <LockFeature featureKey="calculator.advanced_ingredients" customMessage={t('calculator.unlock_pro_ingredients')}>
              <div className="dlp-calc-panel--subtle rounded-[1.7rem] border p-4">
                <IngredientTableEditor
                  ingredients={config.ingredients || []}
                  onChange={handleIngredientsUpdate}
                  totalFlour={1000}
                />
              </div>
            </LockFeature>
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientsSection;




