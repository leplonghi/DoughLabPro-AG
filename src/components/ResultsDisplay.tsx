
import React, { useRef, useMemo, useState } from 'react';
import {
    DoughResult,
    DoughConfig,
    Unit,
    UnitSystem,
    FlourDefinition,
    CalculationMode,
    BakeType,
} from '@/types';
import { gramsToVolume } from '@/helpers';
import {
    ShareIcon,
    DownloadIcon,
    BatchesIcon,
    LockClosedIcon,
    BeakerIcon,
} from '@/components/ui/Icons';
import { useToast } from '@/components/ToastProvider';
import { useTranslation } from '@/i18n';
import { exportBatchToPDF } from '@/services/exportService';
import TechnicalMethodPanel from '@/components/calculator/TechnicalMethodPanel';
import { generateTechnicalMethod } from '@/logic/methodGenerator';
import { useUser } from '@/contexts/UserProvider';
import { canUseFeature, getCurrentPlan } from '@/permissions';
import SocialShareModal from '@/components/social/SocialShareModal';
import { RecommendedProducts } from '@/components/ui/RecommendedProducts';

interface ResultsDisplayProps {
    results: DoughResult | null;
    config: DoughConfig;
    unit: Unit;
    onUnitChange: (unit: Unit) => void;
    unitSystem: UnitSystem;
    onConfigChange: (newConfig: Partial<DoughConfig>) => void;
    onStartBatch: () => void;
    selectedFlour?: FlourDefinition;
    calculatorMode: 'basic' | 'advanced';
    calculationMode: CalculationMode;
    hasProAccess: boolean;
    onOpenPaywall: (origin: any) => void;
    saveButtonRef?: React.Ref<HTMLButtonElement>;
    onboardingStep?: number;
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
}) => {
    const { addToast } = useToast();
    const { t } = useTranslation();
    const { user } = useUser();
    const resultRef = useRef<HTMLDivElement>(null);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const userPlan = getCurrentPlan(user);

    const technicalSteps = useMemo(() => {
        if (!results) return [];
        return generateTechnicalMethod(config, results);
    }, [config, results]);

    if (!results) {
        return (
            <div className="rounded-2xl border-2 border-dashed border-dlp-border bg-dlp-bg-muted p-8 text-center h-full flex flex-col items-center justify-center text-dlp-text-muted min-h-[300px]">
                <div className="mb-4 rounded-full bg-dlp-bg-card p-4 shadow-dlp-sm border border-dlp-border">
                    <BeakerIcon className="h-8 w-8 text-dlp-text-muted" />
                </div>
                <h3 className="text-lg font-semibold text-dlp-text-secondary">Your Formula Awaits</h3>
                <p className="text-sm mt-2 max-w-xs mx-auto text-dlp-text-muted">
                    Adjust the parameters on the left to generate your perfect dough recipe.
                </p>
            </div>
        );
    }

    const displayValue = (grams: number) => {
        if (unit === 'volume') {
            // This is handled per row, passing ingredient name
            return grams.toFixed(0) + 'g'; // Fallback
        }
        if (unit === 'oz') {
            return (grams * 0.035274).toFixed(2) + ' oz';
        }
        return grams.toFixed(1) + 'g';
    };

    const displayIngredient = (
        nameKey: string,
        grams: number,
        ingredientId: string
    ) => {
        if (unit === 'volume') {
            // Map internal IDs to density keys
            let densityKey = ingredientId;
            if (ingredientId === 'base-flour') densityKey = 'flour';
            // Add more mappings if needed

            return gramsToVolume(
                densityKey,
                grams,
                { cups: 'cups', tbsp: 'tbsp', tsp: 'tsp' },
                unitSystem
            );
        }
        return displayValue(grams);
    };

    const handleShare = async () => {
        if (!canUseFeature(userPlan, 'community.share_and_clone')) {
            addToast("Your recipes deserve to be shared — unlock sharing with Pro.", "info");
            onOpenPaywall('calculator');
            return;
        }
        try {
            const url = window.location.href;
            await navigator.clipboard.writeText(url);
            addToast(t('results.share_link', { defaultValue: 'Link copied!' }), "success");
        } catch (e) {
            addToast(t('results.share_error'), "error");
        }
    };

    const handleExportPDF = () => {
        if (!canUseFeature(userPlan, 'export.pdf_json')) {
            addToast("Export your formulas as beautiful PDFs with Pro.", "info");
            onOpenPaywall('calculator');
            return;
        }
        try {
            const batchMock: any = {
                name: `${config.recipeStyle} Formula`,
                createdAt: new Date().toISOString(),
                doughConfig: config,
                doughResult: results,
                notes: config.notes,
            };
            exportBatchToPDF(batchMock, t);
            addToast(t('results.export_pdf_aria', { defaultValue: 'Exporting PDF...' }), "info");
        } catch (e) {
            console.error(e);
            addToast("Export failed", "error");
        }
    };

    const renderRow = (label: string, grams: number, ingredientId: string, subtext?: string) => (
        <div className="flex items-center justify-between border-b border-dlp-border py-3 last:border-0">
            <div>
                <p className="font-medium text-dlp-text-secondary">{label}</p>
                {subtext && <p className="text-xs text-dlp-text-muted">{subtext}</p>}
            </div>
            <span className="font-mono font-semibold text-dlp-text-primary">
                {displayIngredient(label, grams, ingredientId)}
            </span>
        </div>
    );

    return (
        <div ref={resultRef} className="space-y-8">
            <div className="rounded-2xl bg-dlp-bg-card p-6 shadow-dlp-md border border-dlp-border animate-[fadeIn_0.3s_ease-out]">
                <div className="mb-6 flex items-center justify-between border-b border-dlp-border pb-4">
                    <h2 className="text-xl font-bold text-dlp-text-primary">{t('results.title')}</h2>
                    <div className="flex rounded-lg bg-dlp-bg-muted p-1">
                        <button
                            onClick={() => onUnitChange('g')}
                            className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${unit === 'g' ? 'bg-dlp-bg-card text-dlp-text-primary shadow-dlp-sm' : 'text-dlp-text-muted hover:text-dlp-text-secondary'
                                }`}
                        >
                            g
                        </button>
                        <button
                            onClick={() => onUnitChange('oz')}
                            className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${unit === 'oz' ? 'bg-dlp-bg-card text-dlp-text-primary shadow-dlp-sm' : 'text-dlp-text-muted hover:text-dlp-text-secondary'
                                }`}
                        >
                            oz
                        </button>
                        <button
                            onClick={() => onUnitChange('volume')}
                            className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${unit === 'volume' ? 'bg-dlp-bg-card text-dlp-text-primary shadow-dlp-sm' : 'text-dlp-text-muted hover:text-dlp-text-secondary'
                                }`}
                        >
                            Vol
                        </button>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-dlp-bg-muted p-4 text-center">
                        <p className="text-xs font-bold uppercase tracking-wider text-dlp-text-secondary">{t('results.total_dough')}</p>
                        <p className="mt-1 text-2xl font-extrabold text-dlp-text-primary">{displayValue(results.totalDough)}</p>
                    </div>
                    {config.numPizzas > 1 && (
                        <div className="rounded-xl bg-dlp-bg-muted p-4 text-center">
                            <p className="text-xs font-bold uppercase tracking-wider text-dlp-text-secondary">{t('results.single_ball')}</p>
                            <p className="mt-1 text-2xl font-extrabold text-dlp-text-primary">{displayValue(results.totalDough / config.numPizzas)}</p>
                        </div>
                    )}
                </div>

                {/* Pre-ferment Section */}
                {results.preferment && (
                    <div className="mb-6 rounded-xl border border-dlp-border bg-dlp-bg-muted p-4">
                        <div className="mb-3 flex items-center gap-2 border-b border-dlp-border pb-2 text-dlp-text-primary">
                            <BeakerIcon className="h-5 w-5" />
                            <h3 className="font-bold text-sm uppercase tracking-wide">
                                {t(`form.${config.fermentationTechnique.toLowerCase()}`, { defaultValue: 'Preferment' })}
                            </h3>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>{t('results.flour')}</span>
                                <span className="font-mono font-bold">{displayIngredient('Flour', results.preferment.flour, 'flour')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>{t('results.water')}</span>
                                <span className="font-mono font-bold">{displayIngredient('Water', results.preferment.water, 'water')}</span>
                            </div>
                            {results.preferment.yeast > 0 && (
                                <div className="flex justify-between">
                                    <span>{t('results.yeast')}</span>
                                    <span className="font-mono font-bold">{displayIngredient('Yeast', results.preferment.yeast, 'yeast')}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Final Dough / Main Ingredients */}
                <div className="space-y-1 mb-8">
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-dlp-text-muted">
                        {results.preferment ? t('results.final_dough_title') : t('results.ingredients_title', { defaultValue: 'Ingredients' })}
                    </h3>

                    {[BakeType.SWEETS_PASTRY].includes(config.bakeType) ? (
                        <div className="space-y-0 divide-y divide-dlp-border">
                            {results.ingredientWeights?.map(ing => {
                                const n = ing.name.toLowerCase();
                                let subtext = `${(ing.bakerPercentage || 0).toFixed(1)}%`;

                                // Unit conversion for Eggs
                                if ((n.includes('egg') || n.includes('ovo')) && !n.includes('free') && !n.includes('plant')) { // Avoid 'egg-free' etc
                                    let unitWeight = 50; // Standard Large Egg
                                    let unitName = 'un';

                                    if (n.includes('yolk') || n.includes('gema')) {
                                        unitWeight = 18;
                                    } else if ((n.includes('white') || n.includes('clara')) && !n.includes('chocolate')) { // Avoid White Chocolate
                                        unitWeight = 30;
                                    }

                                    const units = (ing.weight / unitWeight);
                                    // Format: if close to integer, show integer, else 1 decimal
                                    const unitStr = Math.abs(Math.round(units) - units) < 0.1
                                        ? Math.round(units).toString()
                                        : units.toFixed(1);

                                    subtext += ` • ~${unitStr} ${unitName}`;
                                }

                                return renderRow(ing.name, ing.weight, ing.id, subtext);
                            })}
                        </div>
                    ) : (
                        <>
                            {results.finalDough ? (
                                <>
                                    {renderRow(t('results.flour'), results.finalDough.flour, 'flour')}
                                    {renderRow(t('results.water'), results.finalDough.water, 'water')}
                                    {renderRow(t('results.salt'), results.finalDough.salt, 'salt', `${config.salt}%`)}
                                    {results.finalDough.yeast > 0 && renderRow(t('results.yeast'), results.finalDough.yeast, 'yeast')}
                                    {results.finalDough.oil > 0 && renderRow(t('results.oil'), results.finalDough.oil, 'oil', `${config.oil}%`)}
                                    {results.finalDough.sugar > 0 && renderRow(t('results.sugar'), results.finalDough.sugar, 'sugar', `${config.sugar}%`)}
                                </>
                            ) : (
                                <>
                                    {renderRow(t('results.flour'), results.totalFlour, 'flour')}
                                    {renderRow(t('results.water'), results.totalWater, 'water', `${config.hydration}%`)}
                                    {renderRow(t('results.salt'), results.totalSalt, 'salt', `${config.salt}%`)}
                                    {results.totalYeast > 0 && renderRow(t('results.yeast'), results.totalYeast, 'yeast', `${config.yeastPercentage}%`)}
                                    {results.totalOil > 0 && renderRow(t('results.oil'), results.totalOil, 'oil', `${config.oil}%`)}
                                    {results.totalSugar > 0 && renderRow(t('results.sugar'), results.totalSugar, 'sugar', `${config.sugar}%`)}
                                </>
                            )}

                            {/* Custom/Other ingredients from Universal model */}
                            {results.ingredientWeights?.filter(i => i.role === 'other').map(ing => (
                                renderRow(ing.name, ing.weight, ing.id, `${ing.bakerPercentage}%`)
                            ))}
                        </>
                    )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                    <button
                        onClick={onStartBatch}
                        ref={saveButtonRef}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-dlp-accent py-3.5 text-base font-bold text-white shadow-dlp-md transition-all hover:bg-dlp-accent-hover hover:shadow-dlp-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-dlp-sm"
                    >
                        <BatchesIcon className="h-5 w-5" />
                        {t('diary_page.new_batch')}
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setIsShareModalOpen(true)}
                            title="Generate a social card to share"
                            className="flex items-center justify-center gap-2 rounded-lg border border-dlp-border bg-dlp-bg-card py-2.5 text-sm font-semibold text-dlp-text-secondary shadow-dlp-sm hover:bg-dlp-bg-muted transition-colors relative group"
                        >
                            <ShareIcon className="h-4 w-4" />
                            {!canUseFeature(userPlan, 'community.share_and_clone') && (
                                <div className="absolute -top-1 -right-1 bg-dlp-bg-muted rounded-full p-0.5 border border-dlp-border shadow-dlp-sm">
                                    <LockClosedIcon className="h-2.5 w-2.5 text-dlp-text-muted" />
                                </div>
                            )}
                            Social Card
                        </button>
                        <button
                            onClick={handleExportPDF}
                            title="Download a professional PDF of your formula"
                            className="flex items-center justify-center gap-2 rounded-lg border border-dlp-border bg-dlp-bg-card py-2.5 text-sm font-semibold text-dlp-text-secondary shadow-dlp-sm hover:bg-dlp-bg-muted transition-colors relative group"
                        >
                            <DownloadIcon className="h-4 w-4" />
                            PDF
                            {!canUseFeature(userPlan, 'export.pdf_json') && (
                                <div className="absolute -top-1 -right-1 bg-dlp-bg-muted rounded-full p-0.5 border border-dlp-border shadow-dlp-sm">
                                    <LockClosedIcon className="h-2.5 w-2.5 text-dlp-text-muted" />
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Technical Method Section */}
            <div className="rounded-2xl bg-dlp-bg-card p-6 shadow-dlp-md border border-dlp-border">
                <TechnicalMethodPanel steps={technicalSteps} />
                <div className="mt-8 border-t border-dlp-border pt-6 flex justify-center gap-4">
                    <button
                        onClick={handleShare}
                        className="flex items-center gap-2 text-sm font-semibold text-dlp-accent hover:text-dlp-accent-hover transition-colors"
                    >
                        <ShareIcon className="h-4 w-4" /> Share
                    </button>
                    <button
                        onClick={handleExportPDF}
                        className="flex items-center gap-2 text-sm font-semibold text-dlp-text-secondary hover:text-dlp-text-primary transition-colors"
                    >
                        <DownloadIcon className="h-4 w-4" /> Download PDF
                    </button>
                </div>
            </div>

            {/* Recommended Gear */}
            <div className="rounded-2xl bg-dlp-bg-card p-6 shadow-dlp-md border border-dlp-border">
                <RecommendedProducts
                    tags={[config.recipeStyle?.toLowerCase() || 'general', 'calculator', 'baking']}
                    title="Tools for this Formula"
                />
            </div>

            <SocialShareModal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                config={config}
                results={results}
            />
        </div >
    );
};
