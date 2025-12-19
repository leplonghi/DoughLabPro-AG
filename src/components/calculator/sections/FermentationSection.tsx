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
    return { label: '⚠ Variation', class: 'bg-amber-50 text-amber-700 border-amber-200' };
  };

  if (isChemicalOrNoFermentOnly) {
    return (
      <FormSection
        title={t('calculator.leavening')}
        description={t('calculator.leavening_description')}
        icon={<FermentationIcon />}
      >
        <div className="p-4 bg-slate-50 rounded-[2rem] border border-slate-100 text-center space-y-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#51a145] to-[#10B981]/10 rounded-2xl flex items-center justify-center mx-auto shadow-sm text-[#51a145] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <CubeIcon size={24} />
          </div>
          <p className="text-sm font-bold font-heading text-slate-800">
            {t('calculator.chemical_physical_leavening')}
          </p>
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-[240px] mx-auto">
            {t('calculator.chemical_leavening_desc')}
          </p>
        </div>
      </FormSection>
    );
  }

  return (
    <FormSection
      title={t('calculator.fermentation_technique')}
      description={t('calculator.fermentation_technique_desc')}
      icon={<FermentationIcon />}
    >
      {isAnySourdough ? (
        <div className="bg-[#D8F3DC]/30 rounded-[2rem] border border-[#D8F3DC]/60 p-4 animate-slide-up">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#51a145] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <FermentationIcon size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-[#1B4332] font-heading">{t('calculator.natural_leavening')}</h4>
                <span className="text-[9px] font-bold text-white bg-[#1B4332] px-3 py-1 rounded-full uppercase tracking-widest">{t('calculator.active')}</span>
              </div>
              <p className="text-xs text-[#1B4332]/70 mb-6 font-medium">
                {selectedLevain ? t('calculator.using_levain', { name: selectedLevain.name }) : t('calculator.using_generic_starter')}
              </p>

              {(() => {
                const hydration = selectedLevain?.hydration || 100;
                const inoculation = config.yeastPercentage || 20;
                const prefermentedFlour = inoculation / (1 + (hydration / 100));

                return (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/40">
                      <span className="block text-[9px] uppercase text-[#1B4332]/40 font-bold tracking-widest mb-1">{t('calculator.inoculation')}</span>
                      <span className="block text-xl font-bold font-heading text-[#1B4332]">{inoculation}%</span>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/40">
                      <span className="block text-[9px] uppercase text-[#1B4332]/40 font-bold tracking-widest mb-1">{t('calculator.prefermented_flour')}</span>
                      <span className="block text-xl font-bold font-heading text-[#1B4332]">~{prefermentedFlour.toFixed(1)}%</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
          <p className="text-[10px] text-center text-[#1B4332]/50 mt-6 italic font-medium">
            "{t('calculator.sourdough_is_preferment_msg')}"
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                  className={`relative group w-full flex flex-col items-center justify-center p-5 rounded-3xl transition-all duration-300
                            ${isActive
                      ? 'bg-[#51a145] text-white shadow-lg shadow-[#51a145]/30 scale-[1.02]'
                      : 'bg-white shadow-sm hover:shadow-md text-slate-600 hover:text-white hover:bg-[#51a145]'}
                        `}
                >
                  <span className="text-xs font-bold font-heading uppercase tracking-widest">{tech.label}</span>
                  {badge && (
                    <span className={`absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] font-bold px-2 py-0.5 rounded-full border shadow-sm whitespace-nowrap transition-colors ${isActive ? 'bg-white text-[#1B4332] border-white' : `${badge.class} group-hover:bg-white group-hover:text-[#1B4332] group-hover:border-white`}`}>
                      {badge.label}
                    </span>
                  )}
                  {tech.pro && !hasProAccess && (
                    <div className="absolute top-2 right-2 text-amber-500 opacity-40">
                      <LockClosedIcon size={12} />
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
            <div className="pt-4 border-t border-slate-100 animate-slide-up">
              <SliderInput
                label={t('calculator._flour_in_preferment')}
                name="prefermentFlourPercentage"
                value={config.prefermentFlourPercentage}
                onChange={handleNumberChange}
                min={isBasic ? (config.fermentationTechnique === FermentationTechnique.BIGA ? 30 : 20) : 5}
                max={isBasic ? (config.fermentationTechnique === FermentationTechnique.BIGA ? 60 : 50) : 100}
                step={5}
                unit="%"
                tooltip={t('calculator.preferment_flour_tooltip')}
                hasError={!!errors.prefermentFlourPercentage}
                learnArticle={getArticleById('preferments-overview')}
              />
            </div>
          )}
        </div>
      )}
    </FormSection>
  );
};

export default FermentationSection;



