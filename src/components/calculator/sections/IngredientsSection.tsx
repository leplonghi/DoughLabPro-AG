import React from 'react';
import { HydrationInput } from '@/components/calculator/HydrationInput';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import SliderInput from "@/components/ui/SliderInput";
import { CubeIcon, InfoIcon } from "@/components/ui/Icons";
import { FlourSelector } from '@/components/calculator/FlourSelector';
import { YeastType, FormErrors, DoughConfig, Levain, DoughResult } from "@/types";
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
  handleIngredientsUpdate: (ingredients: any[]) => void;
  onConfigChange: (newConfig: Partial<DoughConfig>) => void;
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
  onConfigChange,
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
      {/* 1. Primary Flour Selection */}
      <div className="bg-white rounded-3xl p-0.5 border border-slate-100 shadow-sm">
        <FlourSelector
          selectedFlourId={config.flourId}
          onFlourChange={(flourId) => handleSelectChange({ target: { name: 'flourId', value: flourId } } as any)}
          currentHydration={config.hydration}
        />
      </div>

      <div className="space-y-4">
        {/* 2. Core Ratios */}
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
            max={isBasic ? 100 : 120}
            step={1}
            tooltip={t('calculator.hydration_tooltip')}
            hasError={!!errors.hydration}
            recommendedMin={recommendedHydrationRange?.[0]}
            recommendedMax={recommendedHydrationRange?.[1]}
            learnArticle={getArticleById('water-hydration-dynamics')}
            totalFlour={totalFlour}
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
            onChange={handleNumberChange}
            min={0} max={5} step={0.1} unit="%"
            tooltip={t('calculator.salt_tooltip')}
            hasError={!!errors.salt}
            recommendedMin={getRange('salt')?.[0]}
            recommendedMax={getRange('salt')?.[1]}
            learnArticle={getArticleById('salt-functionality-osmotic-effects')}
            totalFlour={totalFlour}
          />

          {/* Logic for Dynamic Ingredient Sliders */}
          {!isBasic && config.ingredients?.filter(i => !['flour', 'water', 'salt', 'yeast', 'starter'].includes(i.role || '')).map(ing => (
            <SliderInput
              key={ing.id}
              label={getLabel(ing)}
              name={`ing-${ing.id}`}
              value={ing.bakerPercentage || 0}
              onChange={(_, val) => {
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

        {/* 3. Fermentation & Yeast */}
        {!(config.fermentationTechnique === 'CHEMICAL' || config.fermentationTechnique === 'NO_FERMENT') && (
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Yeast Type Integrated Card */}
              <div className="md:col-span-4 group">
                <div className="h-full rounded-xl border-[0.5px] border-slate-100 bg-white shadow-sm overflow-hidden flex flex-col">
                  <div className="px-4 py-2 bg-slate-50/50 border-b-[0.5px] border-slate-100">
                    <label htmlFor="yeastType" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#065F46] block">
                      {t('calculator.yeast_type')}
                    </label>
                  </div>
                  <div className="p-3 flex-grow flex items-center">
                    <select
                      id="yeastType"
                      name="yeastType"
                      value={config.yeastType}
                      onChange={handleSelectChange}
                      className="w-full bg-slate-50 border-none rounded-xl py-2 px-3 font-bold text-slate-700 focus:ring-4 focus:ring-dlp-brand/10 transition-all outline-none cursor-pointer text-sm"
                    >
                      {YEAST_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{t(opt.labelKey)}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Yeast Quantity Slider */}
              <div className="md:col-span-8">
                <SliderInput
                  label={isAnySourdough ? t('calculator.starter_') : t('calculator.yeast_')}
                  name="yeastPercentage"
                  value={config.yeastPercentage}
                  onChange={handleNumberChange}
                  min={0}
                  max={isAnySourdough ? (isBasic ? 40 : 200) : (isBasic ? 3 : 5)}
                  step={isAnySourdough ? 1 : 0.1}
                  unit="%"
                  tooltip={t('calculator.yeast_tooltip')}
                  hasError={!!errors.yeastPercentage}
                  learnArticle={getArticleById('yeast-leavening-agents')}
                  totalFlour={totalFlour}
                />
              </div>
            </div>

            {isAnySourdough && (
              <div className="p-4 bg-[#D8F3DC]/30 rounded-3xl border border-[#D8F3DC]/50">
                {config.yeastType === YeastType.SOURDOUGH_STARTER ? (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#065F46] shadow-sm">
                      <CubeIcon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-heading text-[#065F46]">{t('calculator.generic_starter')}</h4>
                      <p className="text-[11px] text-[#065F46]/60 mt-1 leading-relaxed">
                        Calibrated for a <strong>balanced 100% hydration</strong>. For specific strain adjustments or feeding windows, use <strong>"My Lab"</strong>.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {levains.length > 0 ? (
                      <>
                        <div>
                          <label htmlFor="levainId" className="text-[9px] font-bold uppercase tracking-widest text-[#065F46] mb-2 block">{t('calculator.selected_levain')}</label>
                          <select id="levainId" name="levainId" value={config.levainId || ''} onChange={handleSelectChange} className="w-full bg-white rounded-xl py-2.5 px-3 text-xs font-bold border-none shadow-sm outline-none ring-offset-2 focus:ring-2 focus:ring-[#065F46]">
                            {levains.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                          </select>
                        </div>
                        {selectedLevain && (
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/80 p-3 rounded-2xl">
                              <span className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Status</span>
                              <span className={`text-[11px] font-bold ${selectedLevain.status === 'ativo' ? 'text-dlp-brand-hover' : 'text-amber-600'}`}>
                                {selectedLevain.status === 'ativo' ? 'Active & Ready' : 'Needs Attention'}
                              </span>
                            </div>
                            <div className="bg-white/80 p-3 rounded-2xl">
                              <span className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Consistency</span>
                              <span className="text-[11px] font-bold text-slate-700">{selectedLevain.hydration}% Hydration</span>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-xs text-[#1B4332] font-bold font-heading mb-4">{t('calculator.no_starters_found_in_my_lab')}</p>
                        <a href="#/mylab/levain" className="inline-block bg-[#1B4332] text-white py-2.5 px-6 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#51a145] hover:text-white transition-all shadow-lg active:scale-95">{t('calculator.create_levain')}</a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 4. Advanced Composition Editor */}
        {!isBasic && (
          <div className="pt-6 border-t border-slate-100">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center">
                  <CubeIcon size={12} className="text-[#1B4332]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-800">{t('calculator.dough_composition')}</h3>
              </div>
            </div>

            <LockFeature featureKey="calculator.advanced_ingredients" customMessage={t('calculator.unlock_pro_ingredients')}>
              <div className="bg-slate-50 rounded-[2rem] p-4 border border-slate-100">
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




