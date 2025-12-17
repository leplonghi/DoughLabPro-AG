
import React from 'react';
import { DoughConfig, FermentationTechnique, Levain } from '@/types';
import ChoiceButton from '@/components/ui/ChoiceButton';
import FormSection from '@/components/calculator/AccordionSection';
import SliderInput from '@/components/ui/SliderInput';
import { FermentationIcon, LockClosedIcon, InfoIcon } from '@/components/ui/Icons';
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

  const handleLockedClick = () => {
    if (!hasProAccess) {
      onOpenPaywall();
    }
  };

  // Helper to get recommendation badge for a technique
  const getRecommendationBadge = (tech: FermentationTechnique) => {
    const recommendation = getTechniqueRecommendation(tech, config.stylePresetId);

    if (recommendation.recommended) {
      if (recommendation.suitability === 'authentic') {
        return { label: '✓ Authentic', color: 'bg-green-100 text-green-700 border-green-200' };
      }
      return null; // No badge for suitable techniques
    }

    // Not recommended - show variation badge
    return { label: '⚠ Variation', color: 'bg-amber-100 text-amber-700 border-amber-200' };
  };

  const isAllowed = (tech: FermentationTechnique) => {
    // Always allow all techniques (except for chemical-only styles)
    if (isChemicalOrNoFermentOnly) return false;
    return true;
  };

  // If the style only allows Chemical or No Ferment, we simplify the UI
  const isChemicalOrNoFermentOnly = safeAllowedTechniques.length > 0 && safeAllowedTechniques.every(t =>
    t === FermentationTechnique.CHEMICAL || t === FermentationTechnique.NO_FERMENT
  );

  if (isChemicalOrNoFermentOnly) {
    return (
      <FormSection
        title={t('calculator.leavening')}
        description={t('calculator.leavening_description')}
        icon={<FermentationIcon className="h-6 w-6" />}
      >
        <div className="p-4 bg-dlp-bg-muted rounded-lg border border-dlp-border text-center">
          <p className="text-sm font-medium text-dlp-text-secondary">
            {t('calculator.chemical_physical_leavening')}
          </p>
          <p className="text-xs text-dlp-text-muted mt-1">
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
      icon={<FermentationIcon className="h-6 w-6" />}
    >
      {isAnySourdough ? (
        <div className="bg-emerald-50/50 rounded-xl border border-emerald-100 p-4 animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
              <FermentationIcon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-dlp-text-primary text-sm flex items-center justify-between">
                {t('calculator.natural_leavening')}
                <span className="text-xs font-normal text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {t('calculator.active')}
                </span>
              </h4>
              <p className="text-xs text-dlp-text-secondary mt-1 mb-3">
                {selectedLevain ? t('calculator.using_levain', { name: selectedLevain.name }) : t('calculator.using_generic_starter')}
              </p>

              {/* Stats Calculation */}
              {(() => {
                const hydration = selectedLevain?.hydration || 100;
                const inoculation = config.yeastPercentage || 20;
                // Math: Inoculation 20% means 20g starter per 100g flour.
                // Starter = FlourPart + WaterPart.
                // 20 = f + (f * hyd/100) = f * (1 + hyd/100)
                // f = 20 / (1 + hyd/100)
                const prefermentedFlour = inoculation / (1 + (hydration / 100));

                return (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/80 p-2 rounded-lg border border-emerald-100/50">
                      <span className="block text-[10px] uppercase text-dlp-text-muted font-bold tracking-wider">{t('calculator.inoculation')}</span>
                      <span className="block text-lg font-mono font-semibold text-dlp-text-primary">{inoculation}%</span>
                    </div>
                    <div className="bg-white/80 p-2 rounded-lg border border-emerald-100/50">
                      <span className="block text-[10px] uppercase text-dlp-text-muted font-bold tracking-wider">{t('calculator.prefermented_flour')}</span>
                      <span className="block text-lg font-mono font-semibold text-dlp-text-primary">~{prefermentedFlour.toFixed(1)}%</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
          <p className="text-xs text-center text-dlp-text-muted mt-3 italic">
            {t('calculator.sourdough_is_preferment_msg')}
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="relative group">
              <ChoiceButton
                active={config.fermentationTechnique === FermentationTechnique.DIRECT}
                onClick={() => isAllowed(FermentationTechnique.DIRECT) && onConfigChange({ fermentationTechnique: FermentationTechnique.DIRECT })}
                className={!isAllowed(FermentationTechnique.DIRECT) ? "opacity-50 cursor-not-allowed" : ""}
                label={t('calculator.direct')}
              />
              {(() => {
                const badge = getRecommendationBadge(FermentationTechnique.DIRECT);
                return badge ? (
                  <div className={`absolute -top-2 -right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10 border ${badge.color}`}>
                    {badge.label}
                  </div>
                ) : null;
              })()}
            </div>

            <div className="relative group">
              <LockFeature featureKey="calculator.preferments_advanced" customMessage={t('calculator.poolish_pro_msg')}>
                <ChoiceButton
                  active={config.fermentationTechnique === FermentationTechnique.POOLISH}
                  onClick={() => isAllowed(FermentationTechnique.POOLISH) && onConfigChange({ fermentationTechnique: FermentationTechnique.POOLISH, prefermentFlourPercentage: 30 })}
                  className={!isAllowed(FermentationTechnique.POOLISH) ? "opacity-50 cursor-not-allowed" : ""}
                  label={t('calculator.poolish')}
                />
              </LockFeature>
              {(() => {
                const badge = getRecommendationBadge(FermentationTechnique.POOLISH);
                return badge ? (
                  <div className={`absolute -top-2 -right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10 border ${badge.color}`}>
                    {badge.label}
                  </div>
                ) : null;
              })()}
            </div>

            <div className="relative group">
              <LockFeature featureKey="calculator.preferments_advanced" customMessage={t('calculator.biga_pro_msg')}>
                <ChoiceButton
                  active={config.fermentationTechnique === FermentationTechnique.BIGA}
                  onClick={() => isAllowed(FermentationTechnique.BIGA) && onConfigChange({ fermentationTechnique: FermentationTechnique.BIGA, prefermentFlourPercentage: 50 })}
                  className={!isAllowed(FermentationTechnique.BIGA) ? "opacity-50 cursor-not-allowed" : ""}
                  label={t('calculator.biga')}
                />
              </LockFeature>
              {(() => {
                const badge = getRecommendationBadge(FermentationTechnique.BIGA);
                return badge ? (
                  <div className={`absolute -top-2 -right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10 border ${badge.color}`}>
                    {badge.label}
                  </div>
                ) : null;
              })()}
            </div>
          </div>

          {config.fermentationTechnique !== FermentationTechnique.DIRECT && (
            <div className="pt-6 border-t border-dlp-border">
              <SliderInput
                label={t('calculator._flour_in_preferment')}
                name="prefermentFlourPercentage"
                value={config.prefermentFlourPercentage}
                onChange={handleNumberChange}
                min={
                  isBasic
                    ? config.fermentationTechnique === FermentationTechnique.BIGA
                      ? 30
                      : 20
                    : 0
                }
                max={
                  isBasic
                    ? config.fermentationTechnique === FermentationTechnique.BIGA
                      ? 60
                      : 50
                    : 100
                }
                step={5}
                unit="%"
                tooltip={t('calculator.preferment_flour_tooltip')}
                hasError={!!errors.prefermentFlourPercentage}
                learnArticle={getArticleById('preferments-overview')}
              />
            </div>
          )}
        </>
      )}
    </FormSection>
  );
};

export default FermentationSection;
