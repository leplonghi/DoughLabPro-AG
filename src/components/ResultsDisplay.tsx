import React, { useRef, useMemo, useState } from 'react';
import {
    DoughResult,
    DoughConfig,
    Unit,
    UnitSystem,
    FlourDefinition,
    QuantityInputMode,
    Levain,
    Batch,
    BatchStatus,
} from '@/types';
import { gramsToVolume } from '@/helpers';
import {
    ShareIcon,
    DownloadIcon,
    BatchesIcon,
    BeakerIcon,
    ScaleIcon,
    FlourIcon,
    CubeIcon,
    ListBulletIcon,
} from '@/components/ui/Icons';
import { useToast } from '@/components/ToastProvider';
import { useTranslation } from '@/i18n';
import AppSurface from '@/components/ui/AppSurface';
import EmptyStateCard from '@/components/ui/EmptyStateCard';
import MetricCard from '@/components/ui/MetricCard';
import TechnicalMethodPanel from '@/components/calculator/TechnicalMethodPanel';
import GuidanceTooltipTrigger from '@/components/guidance/GuidanceTooltipTrigger';
import { generateTechnicalMethod } from '@/logic/methodGenerator';
import { useUser } from '@/contexts/UserProvider';
import { canUseFeature, getCurrentPlan } from '@/permissions';
import SocialShareModal from '@/components/social/SocialShareModal';
import { RecommendedProducts } from '@/components/ui/RecommendedProducts';
import { ReverseSchedule } from '@/components/calculator/ReverseSchedule';
import { AffiliateIngredientRow } from '@/components/calculator/AffiliateIngredientRow';
import { useRouter } from '@/contexts/RouterContext';
import { logCalculatorEvent } from '@/services/analytics';
import { importWithChunkRecovery } from '@/utils/chunkRecovery';


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
    quantityInputMode: QuantityInputMode;
    hasProAccess: boolean;
    onOpenPaywall: (origin: string) => void;
    saveButtonRef?: React.Ref<HTMLButtonElement>;
    onboardingStep?: number;
    selectedLevain?: Levain | null;
    showExtras?: boolean;
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
    quantityInputMode,
    showExtras = false,
}) => {
    const { addToast } = useToast();
    const { t } = useTranslation(['common', 'calculator', 'method']);
    const { user } = useUser();
    const { navigate } = useRouter();
    const resultRef = useRef<HTMLDivElement>(null);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const userPlan = getCurrentPlan(user);

    const technicalSteps = useMemo(() => {
        if (!results) return [];
        return generateTechnicalMethod(config, results, t);
    }, [config, results, t]);

    if (!results) {
        return (
            <EmptyStateCard className="min-h-[400px] border-none dlp-calc-panel">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-200/70 bg-white shadow-[0_18px_30px_-22px_rgba(47,139,73,0.45)] transition-all duration-500 hover:scale-105">
                    <BeakerIcon className="h-10 w-10 text-dlp-brand" />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#75907d]">
                    Ready When You Are
                </p>
                <h3 className="mt-2 text-2xl font-bold font-heading text-slate-800 dark:text-slate-50">{t('common.general.your_formula_awaits')}</h3>
                <p className="mt-3 max-w-xs mx-auto text-sm leading-relaxed text-slate-500 dark:text-slate-300">
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

    const handleExportPDF = async () => {
        if (!canUseFeature(userPlan, 'export.pdf_json')) {
            addToast("Pro feature: Export formulas as professional PDFs.", "info");
            logCalculatorEvent('paywall_opened_from_calculator', { source: 'export_pdf' });
            onOpenPaywall('calculator');
            return;
        }
        try {
            const { exportBatchToPDF } = await importWithChunkRecovery(() => import('@/services/exportService'));
            const now = new Date().toISOString();
            const batchMock: Batch = {
                id: `tmp-${Date.now()}`,
                name: `${config.recipeStyle} Formula`,
                createdAt: now,
                updatedAt: now,
                status: BatchStatus.DRAFT,
                isFavorite: false,
                doughConfig: config,
                doughResult: results,
                notes: config.notes,
            };
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
            <AppSurface id="calculator-results-card" surface="elevated" tone="neutral" className="p-5 sm:p-6">
                <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#75907d]">
                            Formula Output
                        </p>
                        <h2 className="mt-2 flex items-center gap-3 text-xl font-bold font-heading text-slate-800 dark:text-slate-50">
                            <BeakerIcon className="h-6 w-6 text-dlp-brand" />
                            {t('results.title', { defaultValue: 'Dough Recipe' })}
                        </h2>
                        <p className="mt-2 inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/50 dark:text-emerald-100">
                            {t('results.total_dough')}: {displayValue(results.totalDough)}
                        </p>
                    </div>
                    <div className="dlp-calc-panel--subtle rounded-[1.1rem] border px-4 py-3">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    Batch profile
                                </p>
                                <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-50">
                                    {config.recipeStyle || t('common.general.custom', { defaultValue: 'Custom' })}
                                </p>
                            </div>
                            <GuidanceTooltipTrigger
                                itemId="calculator-results-tip"
                                onAction={() => navigate('mylab')}
                                completeOnAction
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <MetricCard
                        label={t('results.total_flour')}
                        value={<span className="text-lg font-bold font-heading">{displayValue(results.totalFlour)}</span>}
                        icon={<FlourIcon className="w-4 h-4 text-dlp-brand" />}
                        className="items-center text-center"
                    />
                    <MetricCard
                        label={t('results.total_dough')}
                        value={<span className="text-lg font-bold font-heading">{displayValue(results.totalDough)}</span>}
                        icon={<ScaleIcon className="w-4 h-4 text-dlp-brand" />}
                        className="items-center text-center"
                    />
                    <MetricCard
                        label={quantityInputMode === 'flour' ? t('results.est_yield', { defaultValue: 'Est. Yield' }) : t('results.weight_per_piece', { defaultValue: 'Per piece' })}
                        value={
                            <span className="text-lg font-bold font-heading">
                                {quantityInputMode === 'flour' ? `${results.projectedYield || 0} Pcs` : displayValue(results.totalDough / config.numPizzas)}
                            </span>
                        }
                        icon={<CubeIcon className="w-4 h-4 text-dlp-brand" />}
                        className="items-center text-center"
                    />
                </div>

                <div className="mb-8 dlp-calc-panel--subtle rounded-[1.7rem] border p-4 sm:p-5" id="tour-results-ingredients">
                    <div className="mb-4 flex items-center gap-3">
                        <ListBulletIcon className="h-4 w-4 text-dlp-brand" />
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-800 dark:text-slate-100">
                            {t('results.ingredients_title', { defaultValue: 'INGREDIENTS' })}
                        </h4>
                        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                    </div>

                    {results.preferment && (
                        <div className="mb-4 rounded-[1.25rem] border border-dashed border-emerald-200/80 bg-white/70 p-3 dark:border-emerald-900/60 dark:bg-emerald-950/20">
                            <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Preferment / Levain</p>
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

                <div className="relative group mt-4">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-dlp-brand to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <button
                        id="tour-log-batch"
                        onClick={() => {
                            logCalculatorEvent('start_batch_clicked', {
                                recipeStyle: config.recipeStyle,
                                bakeType: config.bakeType
                            });
                            onStartBatch();
                        }}
                        ref={saveButtonRef}
                        className="relative dlp-button-primary flex w-full items-center justify-center gap-3 rounded-2xl border-none bg-dlp-brand py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1B4332] shadow-xl transition-all hover:shadow-2xl active:scale-[0.98]"
                    >
                        <BatchesIcon className="h-5 w-5" />
                        {t('common.diary_page.new_batch', { defaultValue: 'Log New Bake' })}
                    </button>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3" id="tour-actions">
                    <button
                        onClick={() => setIsShareModalOpen(true)}
                        className="dlp-button-secondary group flex items-center justify-center gap-2.5 rounded-2xl py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] font-heading active:translate-y-0.5"
                    >
                        <ShareIcon className="h-4 w-4 text-dlp-brand/60 group-hover:text-dlp-brand transition-all duration-300 group-hover:scale-110" />
                        {t('results.social_card', { defaultValue: 'SOCIAL CARD' })}
                    </button>
                    <button
                        onClick={handleExportPDF}
                        className="dlp-button-secondary group flex items-center justify-center gap-2.5 rounded-2xl py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] font-heading active:translate-y-0.5"
                    >
                        <DownloadIcon className="h-4 w-4 text-dlp-brand/60 group-hover:text-dlp-brand transition-all duration-300 group-hover:scale-110" />
                        {t('results.pdf', { defaultValue: 'PDF' })}
                    </button>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <button onClick={() => navigate('mylab')} className="dlp-calc-panel--subtle rounded-xl border px-3 py-2 text-xs font-semibold text-[#1B4332] transition-colors hover:border-emerald-200 hover:bg-emerald-50/90 dark:text-emerald-100">
                        My Lab
                    </button>
                    <button onClick={() => navigate('learn')} className="dlp-calc-panel--subtle rounded-xl border px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:text-slate-100">
                        Learn
                    </button>
                    <button onClick={() => navigate('styles')} className="dlp-calc-panel--subtle rounded-xl border px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:text-slate-100">
                        Compare Styles
                    </button>
                    <button onClick={() => navigate('community')} className="dlp-calc-panel--subtle rounded-xl border px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:text-slate-100">
                        Community
                    </button>
                </div>

            </AppSurface>

            {showExtras && user?.enableSmartSchedule && (
                <AppSurface surface="rail" tone="brand" className="overflow-hidden p-0">
                    <ReverseSchedule config={config} levain={selectedLevain || undefined} />
                </AppSurface>
            )}

            <AppSurface surface="rail" tone="neutral" className="overflow-hidden p-0">
                <div className="p-6">
                    <TechnicalMethodPanel steps={technicalSteps} />
                </div>
            </AppSurface>

            {showExtras && (
                <AppSurface surface="rail" tone="neutral" className="p-8">
                    <RecommendedProducts tags={[config.recipeStyle?.toLowerCase() || 'general', 'calculator', 'baking']} title={t('common.general.tools_for_this_formula')} />
                </AppSurface>
            )}


            <SocialShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} config={config} results={results} />
        </div>
    );
};

