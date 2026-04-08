import React, { useRef, useMemo, useState } from 'react';
import {
    DoughResult,
    DoughConfig,
    Unit,
    UnitSystem,
    FlourDefinition,
    CalculationMode,
    BakeType,
    Levain,
} from '@/types';
import { gramsToVolume } from '@/helpers';
import {
    ShareIcon,
    DownloadIcon,
    BatchesIcon,
    LockClosedIcon,
    BeakerIcon,
    ScaleIcon,
    InfoIcon,
    FlourIcon,
    CubeIcon,
    ListBulletIcon,
} from '@/components/ui/Icons';
import { useToast } from '@/components/ToastProvider';
import { useTranslation } from '@/i18n';
import { exportBatchToPDF } from '@/services/exportService';
import AppSurface from '@/components/ui/AppSurface';
import EmptyStateCard from '@/components/ui/EmptyStateCard';
import MetricCard from '@/components/ui/MetricCard';
import TechnicalMethodPanel from '@/components/calculator/TechnicalMethodPanel';
import { generateTechnicalMethod } from '@/logic/methodGenerator';
import { useUser } from '@/contexts/UserProvider';
import { canUseFeature, getCurrentPlan } from '@/permissions';
import SocialShareModal from '@/components/social/SocialShareModal';
import { RecommendedProducts } from '@/components/ui/RecommendedProducts';
import { getStyleById } from '@/data/styles';
import { ReverseSchedule } from '@/components/calculator/ReverseSchedule';
import { AffiliateIngredientRow } from '@/components/calculator/AffiliateIngredientRow';


interface ResultsDisplayProps {
    results: DoughResult | null;
    config: DoughConfig;
    unit: Unit;
    onUnitChange: (unit: Unit) => void;
    unitSystem: UnitSystem;
    onConfigChange: (newConfig: Partial<DoughConfig>) => void;
    onStartBatch: () => void;
    selectedFlour?: FlourDefinition;
    calculatorMode: 'wizard' | 'basic' | 'advanced';
    calculationMode: CalculationMode;
    hasProAccess: boolean;
    onOpenPaywall: (origin: any) => void;
    saveButtonRef?: React.Ref<HTMLButtonElement>;
    onboardingStep?: number;
    selectedLevain?: Levain | null;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
    results,
    config,
    unit,
    onUnitChange,
    unitSystem,
    onStartBatch,
    hasProAccess,
    onOpenPaywall,
    saveButtonRef,
    selectedLevain,
    calculationMode,
}) => {
    const { addToast } = useToast();
    const { t } = useTranslation(['common', 'calculator', 'method']);
    const { user } = useUser();
    const resultRef = useRef<HTMLDivElement>(null);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const userPlan = getCurrentPlan(user);

    const technicalSteps = useMemo(() => {
        if (!results) return [];
        return generateTechnicalMethod(config, results, t);
    }, [config, results, t]);

    if (!results) {
        return (
            <EmptyStateCard className="min-h-[400px] border-none">
                <div className="mb-4 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-premium border border-slate-100 transition-all duration-500 hover:scale-110 hover:rotate-12">
                    <BeakerIcon className="h-10 w-10 text-dlp-brand" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-800">{t('common.general.your_formula_awaits')}</h3>
                <p className="text-sm mt-3 max-w-xs mx-auto text-slate-500 leading-relaxed">
                    Set your parameters to generate a scientifically precise dough formula.
                </p>
            </EmptyStateCard>
        );
    }

    const displayValue = (grams: number) => {
        if (unit === 'volume') return grams.toFixed(0) + 'g';
        if (unit === 'oz') return (grams * 0.035274).toFixed(2) + ' oz';
        return grams.toFixed(1) + 'g';
    };

    const displayIngredient = (nameKey: string, grams: number, ingredientId: string) => {
        if (unit === 'volume') {
            let densityKey = ingredientId === 'base-flour' ? 'flour' : ingredientId;
            return gramsToVolume(densityKey, grams, { cups: 'cups', tbsp: 'tbsp', tsp: 'tsp' }, unitSystem);
        }
        return displayValue(grams);
    };

    const handleShare = async () => {
        if (!canUseFeature(userPlan, 'community.share_and_clone')) {
            addToast("Pro feature: Share your formulas with the community.", "info");
            onOpenPaywall('calculator');
            return;
        }
        try {
            await navigator.clipboard.writeText(window.location.href);
            addToast(t('results.share_link'), "success");
        } catch (e) { addToast(t('results.share_error'), "error"); }
    };

    const handleExportPDF = async () => {
        if (!canUseFeature(userPlan, 'export.pdf_json')) {
            addToast("Pro feature: Export formulas as professional PDFs.", "info");
            onOpenPaywall('calculator');
            return;
        }
        try {
            const batchMock: any = { name: `${config.recipeStyle} Formula`, createdAt: new Date().toISOString(), doughConfig: config, doughResult: results, notes: config.notes };
            addToast(t('results.export_pdf_aria'), "info");
            await exportBatchToPDF(batchMock, t);
        } catch (e) {
            console.error("PDF Export Error:", e);
            const errorMsg = e instanceof Error ? e.message : String(e);
            addToast(`${t('common.export_failed')}: ${errorMsg}`, "error");
        }
    };

    const renderIngredientRow = (label: string, grams: number, ingredientId: string, subtext?: string) => (
        <AffiliateIngredientRow
            key={ingredientId + label}
            label={String(label || '')}
            grams={grams}
            displayValue={displayIngredient(label, grams, ingredientId)}
            hydration={config.hydration}
            subtext={subtext}
        />
    );

    return (
        <div ref={resultRef} className="space-y-6 animate-slide-up">
            {/* Main Result Card: Dough Recipe */}
            <AppSurface surface="elevated" tone="neutral" className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h2 className="text-xl font-bold font-heading text-slate-800 flex items-center gap-3">
                            <BeakerIcon className="w-6 h-6 text-dlp-brand-lime" />
                            {t('results.title', { defaultValue: 'Dough Recipe' })}
                        </h2>
                    </div>


                </div>


                {/* Metric Boxes */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                    <MetricCard
                        label={t('results.total_flour')}
                        value={<span className="text-lg font-bold font-heading">{displayValue(results.totalFlour)}</span>}
                        icon={<FlourIcon className="w-4 h-4 text-dlp-brand-lime" />}
                        className="items-center text-center"
                    />
                    <MetricCard
                        label={t('results.total_dough')}
                        value={<span className="text-lg font-bold font-heading">{displayValue(results.totalDough)}</span>}
                        icon={<ScaleIcon className="w-4 h-4 text-dlp-brand-lime" />}
                        className="items-center text-center"
                    />
                    <MetricCard
                        label={calculationMode === 'flour' ? t('results.est_yield', { defaultValue: 'Est. Yield' }) : t('results.weight_per_piece', { defaultValue: 'Per piece' })}
                        value={
                            <span className="text-lg font-bold font-heading">
                                {calculationMode === 'flour' ? `${results.projectedYield || 0} Pcs` : displayValue(results.totalDough / config.numPizzas)}
                            </span>
                        }
                        icon={<CubeIcon className="w-4 h-4 text-dlp-brand-lime" />}
                        className="items-center text-center"
                    />
                </div>

                {/* Ingredients List */}
                <div className="space-y-1 px-1 mb-8" id="tour-results-ingredients">
                    <div className="flex items-center gap-3 mb-1">
                        <ListBulletIcon className="w-4 h-4 text-dlp-brand-lime" />
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-800">
                            {t('results.ingredients_title', { defaultValue: 'INGREDIENTS' })}
                        </h4>
                        <div className="h-px flex-1 bg-slate-100"></div>
                    </div>

                    {results.preferment && (
                        <div className="mb-4 bg-slate-50/30 rounded-2xl p-3 border border-dashed border-slate-200">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Preferment / Levain</p>
                            <div className="space-y-0.5">
                                {renderIngredientRow(t('results.flour'), results.preferment.flour, 'flour')}
                                {renderIngredientRow(t('results.water'), results.preferment.water, 'water')}
                                {results.preferment.yeast > 0 && renderIngredientRow(t('results.yeast'), results.preferment.yeast, 'yeast')}
                            </div>
                        </div>
                    )}

                    <div className="space-y-1">
                        {results.finalDough ? (
                            <>
                                {renderIngredientRow(t('results.flour'), results.finalDough.flour, 'flour')}
                                {renderIngredientRow(t('results.water'), results.finalDough.water, 'water')}
                                {renderIngredientRow(t('results.salt'), results.finalDough.salt, 'salt', `${config.salt}%`)}
                                {results.finalDough.yeast > 0 && renderIngredientRow(t('results.yeast'), results.finalDough.yeast, 'yeast')}
                                {results.finalDough.oil > 0 && renderIngredientRow(t('results.oil'), results.finalDough.oil, 'oil', `${config.oil}%`)}
                                {results.finalDough.sugar > 0 && renderIngredientRow(t('results.sugar'), results.finalDough.sugar, 'sugar', `${config.sugar}%`)}
                            </>
                        ) : (
                            <>
                                {renderIngredientRow(t('results.flour'), results.totalFlour, 'flour')}
                                {renderIngredientRow(t('results.water'), results.totalWater, 'water', `${config.hydration}%`)}
                                {renderIngredientRow(t('results.salt'), results.totalSalt, 'salt', `${config.salt}%`)}
                                {results.totalYeast > 0 && renderIngredientRow(t('results.yeast'), results.totalYeast, 'yeast', `${config.yeastPercentage}%`)}
                                {results.totalOil > 0 && renderIngredientRow(t('results.oil'), results.totalOil, 'oil', `${config.oil}%`)}
                                {results.totalSugar > 0 && renderIngredientRow(t('results.sugar'), results.totalSugar, 'sugar', `${config.sugar}%`)}
                            </>
                        )}
                        {results.ingredientWeights?.filter(i => i.role === 'other').map(ing => renderIngredientRow(t(ing.name), ing.weight, ing.id, `${ing.bakerPercentage}%`))}
                    </div>
                </div>

                {/* Primary Action Button */}
                <div className="relative group mt-4">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-dlp-brand to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <button
                        id="tour-log-batch"
                        onClick={onStartBatch}
                        ref={saveButtonRef}
                        className="relative dlp-button-primary w-full py-4 text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl active:scale-[0.98] transition-all bg-dlp-brand text-[#1B4332] font-bold rounded-2xl border-none"
                    >
                        <BatchesIcon className="h-5 w-5" />
                        {t('common.diary_page.new_batch', { defaultValue: 'Log New Bake' })}
                    </button>
                </div>

                {/* Bottom Secondary Actions */}
                <div className="grid grid-cols-2 gap-4 mt-6" id="tour-actions">
                    <button
                        onClick={() => setIsShareModalOpen(true)}
                        className="dlp-button-secondary group flex items-center justify-center gap-2.5 rounded-2xl py-3.5 text-[10px] font-bold uppercase tracking-[0.1em] font-heading active:translate-y-0.5"
                    >
                        <ShareIcon className="h-4 w-4 text-dlp-brand/60 group-hover:text-dlp-brand transition-all duration-300 group-hover:scale-110" />
                        {t('results.social_card', { defaultValue: 'SOCIAL CARD' })}
                    </button>
                    <button
                        onClick={handleExportPDF}
                        className="dlp-button-secondary group flex items-center justify-center gap-2.5 rounded-2xl py-3.5 text-[10px] font-bold uppercase tracking-[0.1em] font-heading active:translate-y-0.5"
                    >
                        <DownloadIcon className="h-4 w-4 text-dlp-brand/60 group-hover:text-dlp-brand transition-all duration-300 group-hover:scale-110" />
                        {t('results.pdf', { defaultValue: 'PDF' })}
                    </button>
                </div>

            </AppSurface>

            {/* Smart Schedule Integrated */}
            {user?.enableSmartSchedule && (
                <AppSurface surface="glass" tone="brand" className="overflow-hidden border-teal-100/50 p-0">
                    <ReverseSchedule config={config} levain={selectedLevain || undefined} />
                </AppSurface>
            )}

            {/* Step-by-Step Method Panel */}
            <AppSurface surface="glass" tone="neutral" className="overflow-hidden p-0">
                <div className="p-6">
                    <TechnicalMethodPanel steps={technicalSteps} />
                </div>
            </AppSurface>

            {/* Recommended Lab Gear */}
            <AppSurface surface="glass" tone="neutral" className="p-8">
                <RecommendedProducts tags={[config.recipeStyle?.toLowerCase() || 'general', 'calculator', 'baking']} title={t('common.general.tools_for_this_formula')} />
            </AppSurface>


            <SocialShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} config={config} results={results} />
        </div>
    );
};

