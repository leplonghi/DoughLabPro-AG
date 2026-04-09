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
        <div className="dlp-calc-panel--subtle rounded-[1.75rem] border p-5 text-center space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#51a145] shadow-[0_14px_24px_-18px_rgba(47,139,73,0.4)]">
            <CubeIcon size={24} />
          </div>
          <p className="text-sm font-bold font-heading text-slate-900 dark:text-slate-50">
            {t('calculator.chemical_physical_leavening')}
          </p>
          <p className="mx-auto max-w-[280px] text-[12px] leading-relaxed text-slate-600 dark:text-slate-300">
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
        <div className="rounded-[1.9rem] border border-emerald-200/70 bg-[linear-gradient(180deg,rgba(235,248,239,0.9),rgba(247,252,248,0.98))] p-5 animate-slide-up dark:border-emerald-900/50 dark:bg-[linear-gradient(180deg,rgba(19,45,29,0.94),rgba(12,26,18,0.96))]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#51a145] shadow-[0_14px_24px_-18px_rgba(47,139,73,0.4)] dark:bg-emerald-950/70">
              <FermentationIcon size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-[#16351f] font-heading dark:text-emerald-50">{t('calculator.natural_leavening')}</h4>
                <span className="rounded-full border border-emerald-200/70 bg-white/80 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-100">{t('calculator.active')}</span>
              </div>
              <p className="mb-6 text-[13px] text-[#294031] dark:text-emerald-100/80">
                {selectedLevain ? t('calculator.using_levain', { name: selectedLevain.name }) : t('calculator.using_generic_starter')}
              </p>

              {(() => {
                const hydration = selectedLevain?.hydration || 100;
                const inoculation = config.yeastPercentage || 20;
                const prefermentedFlour = inoculation / (1 + (hydration / 100));

                return (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="dlp-calc-metric rounded-[1.35rem] p-4">
                      <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#62816c] dark:text-emerald-200/60">{t('calculator.inoculation')}</span>
                      <span className="block text-xl font-bold font-heading text-[#16351f] dark:text-emerald-50">{inoculation}%</span>
                    </div>
                    <div className="dlp-calc-metric rounded-[1.35rem] p-4">
                      <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#62816c] dark:text-emerald-200/60">{t('calculator.prefermented_flour')}</span>
                      <span className="block text-xl font-bold font-heading text-[#16351f] dark:text-emerald-50">~{prefermentedFlour.toFixed(1)}%</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
          <p className="mt-6 text-center text-[11px] italic font-medium text-[#4d6955] dark:text-emerald-100/55">
            "{t('calculator.sourdough_is_preferment_msg')}"
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="dlp-calc-rail grid grid-cols-1 gap-2 rounded-[1.65rem] p-1.5 sm:grid-cols-3">
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
                  className={`dlp-calc-option relative group w-full flex flex-col items-center justify-center rounded-[1.3rem] p-4 text-center
                            ${isActive
                      ? 'dlp-calc-option--active'
                      : ''}
                        `}
                >
                  <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em]">{tech.label}</span>
                  {badge && (
                    <span className={`absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-2 py-0.5 text-[8px] font-bold shadow-sm transition-colors ${isActive ? 'bg-white text-[#1B4332] border-white' : `${badge.class} group-hover:bg-white group-hover:text-[#1B4332] group-hover:border-white`}`}>
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
            <div className="animate-slide-up border-t border-slate-200/70 pt-4">
              <SliderInput
                label={t('calculator._flour_in_preferment')}
                name="prefermentFlourPercentage"
                value={config.prefermentFlourPercentage}
                onValueChange={(nextValue) => onConfigChange({ prefermentFlourPercentage: nextValue })}
                min={isBasic ? (config.fermentationTechnique === FermentationTechnique.BIGA ? 30 : 20) : 5}
                max={isBasic ? (config.fermentationTechnique === FermentationTechnique.BIGA ? 60 : 50) : 100}
                step={5}
                unit="%"
                tooltip={t('calculator.preferment_flour_tooltip')}
                hasError={!!errors.prefermentFlourPercentage}
                learnArticle={getArticleById('preferments-overview')}
                quickValues={config.fermentationTechnique === FermentationTechnique.BIGA ? [30, 40, 50, 60] : [20, 30, 40, 50]}
              />
            </div>
          )}
        </div>
      )}
    </FormSection>
  );
};

export default FermentationSection;



