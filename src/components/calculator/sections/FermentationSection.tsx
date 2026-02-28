import React from 'react';
import { DoughConfig, FermentationTechnique, Levain } from '@/types';
import ChoiceButton from '@/components/ui/ChoiceButton';
import FormSection from '@/components/calculator/AccordionSection';
import SliderInput from '@/components/ui/SliderInput';
import { FermentationIcon, LockClosedIcon, InfoIcon, CubeIcon } from '@/components/ui/Icons';
import { LockFeature } from '@/components/auth/LockFeature';
import { getArticleById } from '@/data/learn';
import { useTranslation } from '@/i18n';
import { getTechniqueRecommendation } from '@/logic/fermentationLogic';

interface FermentationSectionProps {
  id?: string;
  config: DoughConfig;
  onConfigChange: (newConfig: Partial<DoughConfig>) => void;
  isAnySourdough: boolean;
  isBasic: boolean;
  errors: any;
  hasProAccess: boolean;
  onOpenPaywall: () => void;
  allowedTechniques: FermentationTechnique[];
  selectedLevain?: Levain;
}

const FermentationSection: React.FC<FermentationSectionProps> = ({
  id,
  config,
  onConfigChange,
  isAnySourdough,
  isBasic,
  errors,
  hasProAccess,
  onOpenPaywall,
  allowedTechniques = [],
  selectedLevain,
}) => {
  const { t } = useTranslation();
  const safeAllowedTechniques = Array.isArray(allowedTechniques) ? allowedTechniques : [];

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onConfigChange({ [name]: Number(value) });
  };

  const isChemicalOrNoFermentOnly = safeAllowedTechniques.length > 0 && safeAllowedTechniques.every(t =>
    t === FermentationTechnique.CHEMICAL || t === FermentationTechnique.NO_FERMENT
  );

  const getBadgeStyle = (tech: FermentationTechnique) => {
    const recommendation = getTechniqueRecommendation(tech, config.stylePresetId);
    if (recommendation.recommended) {
      if (recommendation.suitability === 'authentic') {
        return { label: '✓ Authentic', class: 'bg-emerald-100 text-emerald-700 border-emerald-200' };
      }
      return null;
    }
    return { label: 'Variation', class: 'bg-amber-50 text-amber-700 border-amber-200' };
  };

  if (isChemicalOrNoFermentOnly) {
    return (
      <FormSection
        title={t('calculator.leavening')}
        description={t('calculator.leavening_description')}
        icon={<FermentationIcon />}
      >
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center space-y-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#51a145] to-[#10B981]/10 rounded-lg flex items-center justify-center mx-auto shadow-sm text-[#51a145]">
            <CubeIcon size={16} />
          </div>
          <p className="text-xs font-bold font-heading text-slate-800">
            {t('calculator.chemical_physical_leavening')}
          </p>
          <p className="text-[10px] text-slate-500 leading-relaxed max-w-[200px] mx-auto">
            {t('calculator.chemical_leavening_desc')}
          </p>
        </div>
      </FormSection>
    );
  }

  return (
    <FormSection
      id={id}
      index={4}
      accentColor="amber"
      title={t('calculator.fermentation_technique')}
      description={t('calculator.fermentation_technique_desc')}
      icon={<FermentationIcon />}
    >
      {isAnySourdough ? (
        <div className="bg-[#D8F3DC]/30 rounded-xl border border-[#D8F3DC]/60 p-3 animate-slide-up">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#51a145] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <FermentationIcon size={20} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-[#1B4332] font-heading text-sm">{t('calculator.natural_leavening')}</h4>
                <span className="text-[8px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider">{t('calculator.active')}</span>
              </div>
              <p className="text-[11px] text-[#1B4332]/70 mb-3 font-medium">
                {selectedLevain ? t('calculator.using_levain', { name: selectedLevain.name }) : t('calculator.using_generic_starter')}
              </p>

              {(() => {
                const hydration = selectedLevain?.hydration || 100;
                const inoculation = config.yeastPercentage || 20;
                const prefermentedFlour = inoculation / (1 + (hydration / 100));

                return (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/60 backdrop-blur-sm p-2 rounded-lg border border-white/40">
                      <span className="block text-[8px] uppercase text-[#1B4332]/50 font-bold tracking-widest mb-0.5">{t('calculator.inoculation')}</span>
                      <span className="block text-sm font-bold font-heading text-[#1B4332]">{inoculation}%</span>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-2 rounded-lg border border-white/40">
                      <span className="block text-[8px] uppercase text-[#1B4332]/50 font-bold tracking-widest mb-0.5">{t('calculator.prefermented_flour')}</span>
                      <span className="block text-sm font-bold font-heading text-[#1B4332]">~{prefermentedFlour.toFixed(1)}%</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
          <p className="text-[9px] text-center text-[#1B4332]/50 mt-3 italic font-medium">
            "{t('calculator.sourdough_is_preferment_msg')}"
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: FermentationTechnique.DIRECT, label: t('calculator.direct'), pro: false },
              { id: FermentationTechnique.POOLISH, label: t('calculator.poolish'), pro: true, msgKey: 'calculator.poolish_pro_msg' },
              { id: FermentationTechnique.BIGA, label: t('calculator.biga'), pro: true, msgKey: 'calculator.biga_pro_msg' }
            ].map(tech => {
              const isActive = config.fermentationTechnique === tech.id;
              const badge = getBadgeStyle(tech.id);

              const Btn = (
                <button
                  onClick={() => onConfigChange({ fermentationTechnique: tech.id, prefermentFlourPercentage: tech.id === FermentationTechnique.BIGA ? 50 : 30 })}
                  className={`relative group w-full flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 border min-h-[64px]
                            ${isActive
                      ? 'bg-[#51a145] border-[#51a145] text-white shadow-md scale-[1.02]'
                      : 'bg-white border-slate-100 text-slate-500 hover:border-[#51a145]/30 hover:bg-slate-50'}
                        `}
                >
                  <span className="text-[10px] font-bold font-heading uppercase tracking-wider">{tech.label}</span>
                  {badge && (
                    <span className={`absolute -top-1.5 left-1/2 -translate-x-1/2 text-[7px] font-bold px-1.5 py-px rounded-full border shadow-sm whitespace-nowrap transition-colors z-10 ${isActive ? 'bg-white text-[#1B4332] border-white' : `${badge.class} group-hover:bg-white`}`}>
                      {badge.label}
                    </span>
                  )}
                  {tech.pro && !hasProAccess && (
                    <div className="absolute top-1 right-1 text-amber-500 opacity-40">
                      <LockClosedIcon size={8} />
                    </div>
                  )}
                </button>
              );

              return tech.pro ? (
                <LockFeature key={tech.id} featureKey="calculator.preferments_advanced" customMessage={t(tech.msgKey)}>
                  {Btn}
                </LockFeature>
              ) : <div key={tech.id}>{Btn}</div>;
            })}
          </div>

          {config.fermentationTechnique !== FermentationTechnique.DIRECT && (
            <div className="pt-2 border-t border-slate-100 animate-slide-up">
              <SliderInput
                label={t('calculator._flour_in_preferment')}
                name="prefermentFlourPercentage"
                value={config.prefermentFlourPercentage}
                onChange={handleNumberChange}
                min={isBasic ? (config.fermentationTechnique === FermentationTechnique.BIGA ? 30 : 20) : 5}
                max={isBasic
                  ? (config.fermentationTechnique === FermentationTechnique.BIGA ? 60 : 50)
                  : (config.fermentationTechnique === FermentationTechnique.POOLISH
                    ? Math.min(100, config.hydration)
                    : (config.fermentationTechnique === FermentationTechnique.BIGA
                      ? Math.min(100, config.hydration * 2)
                      : 100
                    )
                  )
                }
                step={5}
                unit="%"
                tooltip={t('calculator.preferment_flour_tooltip')}
                hasError={!!errors.prefermentFlourPercentage}
                learnArticle={getArticleById('preferments-overview')}
              />

              {/* Dynamic Chef's Hint based on Preferment Level */}
              {(() => {
                const maxAllowed = config.fermentationTechnique === FermentationTechnique.POOLISH
                  ? config.hydration
                  : (config.fermentationTechnique === FermentationTechnique.BIGA ? config.hydration * 2 : 100);

                const isLimit = config.prefermentFlourPercentage >= maxAllowed - 5;
                const isHigh = config.prefermentFlourPercentage > (config.fermentationTechnique === FermentationTechnique.BIGA ? 70 : 40);

                if (isLimit) {
                  return (
                    <div className="mt-2 relative overflow-hidden p-3 rounded-xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 flex items-start gap-3 animate-pulse shadow-sm group">
                      <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                        <InfoIcon size={14} />
                      </div>
                      <div className="relative z-10">
                        <p className="text-[10px] font-black text-amber-900 uppercase tracking-widest mb-0.5">{t('calculator.extreme_fermentation_limit')}</p>
                        <p className="text-[10px] font-medium text-amber-800/70 italic">
                          {t('calculator.extreme_fermentation_limit_desc', {
                            defaultValue: "Approaching physical hydration limit."
                          })}
                        </p>
                      </div>
                    </div>
                  );
                }

                if (isHigh) {
                  return (
                    <div className="mt-2 relative overflow-hidden p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 flex items-start gap-3 animate-slide-up shadow-sm group">
                      <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                        <FermentationIcon size={14} />
                      </div>
                      <div className="relative z-10">
                        <p className="text-[10px] font-black text-emerald-900 uppercase tracking-widest mb-0.5">{t('calculator.rapid_fermentation_notice')}</p>
                        <p className="text-[10px] font-medium text-emerald-800/70 italic">
                          {t('calculator.rapid_fermentation_desc', {
                            defaultValue: "High preferment activity! Watch the clock."
                          })}
                        </p>
                      </div>
                    </div>
                  );
                }

                return null;
              })()}
            </div>
          )}
        </div>
      )}
    </FormSection>
  );
};

export default FermentationSection;
