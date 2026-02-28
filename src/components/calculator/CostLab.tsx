import React, { useState, useMemo } from 'react';
import { DoughConfig, DoughResult, PricingRegistry } from '@/types';
import { CurrencyDollarIcon, ChartBarIcon, CogIcon, LockClosedIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';
import { useUser } from '@/contexts/UserProvider';

interface CostLabProps {
    config: DoughConfig;
    results: DoughResult;
    hasProAccess: boolean;
    onOpenPaywall: () => void;
}

export const CostLab: React.FC<CostLabProps> = ({ config, results, hasProAccess, onOpenPaywall }) => {
    const { t } = useTranslation(['calculator', 'common']);
    const { settings, updateSettings } = useUser();
    const [isEditing, setIsEditing] = useState(false);

    const pricing = settings?.pricingRegistry || {
        currencySymbol: '$',
        flourPricePerKg: 1.50,
        waterPricePerLiter: 0.00,
        yeastPricePer100g: 5.00,
        saltPricePerKg: 0.80,
        oilPricePerLiter: 10.00,
        sugarPricePerKg: 1.20,
    };

    const financials = useMemo(() => {
        const flourCost = (results.totalFlour / 1000) * pricing.flourPricePerKg;
        const waterCost = (results.totalWater / 1000) * pricing.waterPricePerLiter;
        const yeastCost = (results.totalYeast / 100) * pricing.yeastPricePer100g;
        const saltCost = (results.totalSalt / 1000) * pricing.saltPricePerKg;
        const oilCost = (results.totalOil / 1000) * pricing.oilPricePerLiter;
        const sugarCost = (results.totalSugar / 1000) * pricing.sugarPricePerKg;

        const totalBatchCost = flourCost + waterCost + yeastCost + saltCost + oilCost + sugarCost;
        const costPerBall = totalBatchCost / config.numPizzas;
        const suggestedSellPrice = costPerBall * 4;

        return {
            totalBatchCost,
            costPerBall,
            suggestedSellPrice,
            breakdown: { flourCost, yeastCost, other: saltCost + oilCost + sugarCost },
        };
    }, [results, pricing, config.numPizzas]);

    const handlePriceChange = async (key: string, val: string) => {
        const num = parseFloat(val);
        if (isNaN(num)) return;
        await updateSettings({
            pricingRegistry: {
                ...pricing,
                [key]: num,
            },
        });
    };

    if (!hasProAccess) {
        return (
            <div
                onClick={onOpenPaywall}
                className="relative overflow-hidden rounded-3xl bg-dlp-text-primary p-6 text-white shadow-xl cursor-pointer group"
            >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <CurrencyDollarIcon size={120} />
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-dlp-brand/20 rounded-2xl text-dlp-brand-light">
                        <ChartBarIcon size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold font-heading">{t('financial_intelligence')}</h3>
                        <p className="text-xs text-dlp-text-muted uppercase tracking-widest font-bold">
                            {t('business_analytics')}
                        </p>
                    </div>
                </div>
                <div className="space-y-2 opacity-50 blur-sm select-none">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>{t('cost_per_unit')}</span>
                        <span>$0.45</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>{t('batch_total')}</span>
                        <span>$4.50</span>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px] transition-all group-hover:bg-black/50">
                    <div className="flex items-center gap-2 px-4 py-2 bg-dlp-brand rounded-full text-xs font-bold uppercase tracking-widest shadow-lg transform group-hover:scale-105 transition-transform text-white">
                        <LockClosedIcon size={14} />
                        {t('unlock_cost_lab')}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="dlp-card p-6 relative overflow-hidden animate-slide-up">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-dlp-brand-light/50 flex items-center justify-center text-dlp-brand shadow-sm">
                        <CurrencyDollarIcon size={20} />
                    </div>
                    <div>
                        <h3 className="text-sm font-black text-dlp-text-primary uppercase tracking-widest">
                            {t('cost_lab')}
                        </h3>
                        <p className="text-[10px] text-dlp-text-muted font-bold">
                            {t('real_time_unit_economics')}
                        </p>
                    </div>
                </div>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="p-3 rounded-xl hover:bg-dlp-bg-soft text-dlp-text-muted hover:text-dlp-brand transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                    <CogIcon size={24} />
                </button>
            </div>

            {isEditing ? (
                <div className="space-y-3 mb-4 bg-dlp-bg-soft p-4 rounded-2xl animate-fade-in">
                    <p className="text-[10px] font-black text-dlp-text-muted uppercase tracking-widest mb-2">
                        {t('market_prices')} ({pricing.currencySymbol})
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        {['flourPricePerKg', 'yeastPricePer100g', 'oilPricePerLiter', 'saltPricePerKg'].map((key) => (
                            <div key={key}>
                                <label className="text-[9px] font-bold text-dlp-text-muted block mb-1">
                                    {key.replace('PricePerKg', '').replace('PricePerLiter', '').replace('PricePer100g', '')} ($)
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    defaultValue={pricing[key as keyof typeof pricing]}
                                    onBlur={(e) => handlePriceChange(key, e.target.value)}
                                    className="w-full bg-white border border-dlp-border rounded-lg px-3 py-3 text-xs font-bold text-dlp-text-primary outline-none focus:border-dlp-brand focus:ring-1 focus:ring-dlp-brand min-h-[44px]"
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => setIsEditing(false)}
                        className="w-full mt-2 py-3 bg-dlp-brand text-white text-xs font-bold rounded-xl hover:bg-dlp-brand-hover transition-colors uppercase tracking-widest min-h-[44px] shadow-sm active:scale-[0.98]"
                    >
                        {t('save_prices')}
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dlp-bg-soft rounded-2xl p-4 border border-dlp-border text-dlp-text-primary relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-dlp-brand/5 rounded-full -mr-10 -mt-10 blur-xl group-hover:bg-dlp-brand/10 transition-colors"></div>
                        <p className="text-[9px] font-bold text-dlp-text-muted uppercase tracking-widest mb-1">
                            {t('cost_per_ball')}
                        </p>
                        <p className="text-2xl font-black font-heading tracking-tight text-dlp-text-primary">
                            {pricing.currencySymbol}{financials.costPerBall.toFixed(2)}
                        </p>
                        <p className="text-[9px] text-dlp-brand mt-1 font-medium">
                            {t('marginal_cost')}
                        </p>
                    </div>
                    <div className="bg-dlp-brand-light/30 rounded-2xl p-4 border border-dlp-brand-light flex flex-col justify-center">
                        <p className="text-[9px] font-bold text-dlp-brand-dark uppercase tracking-widest mb-1">
                            {t('total_batch')}
                        </p>
                        <p className="text-xl font-black text-dlp-brand-dark font-heading">
                            {pricing.currencySymbol}{financials.totalBatchCost.toFixed(2)}
                        </p>
                    </div>
                </div>
            )}

            {!isEditing && (
                <div className="mt-4 pt-4 border-t border-dlp-border flex items-center justify-between">
                    <div>
                        <span className="text-[9px] font-bold text-dlp-text-muted uppercase tracking-widest block">
                            {t('suggested_menu_price')}
                        </span>
                        <span className="text-sm font-bold text-dlp-text-secondary">
                            {pricing.currencySymbol}{financials.suggestedSellPrice.toFixed(2)}
                        </span>
                    </div>
                    <div className="h-8 w-px bg-dlp-border mx-2"></div>
                    <div className="text-right">
                        <span className="text-[9px] font-bold text-dlp-text-muted uppercase tracking-widest block">
                            {t('flour_cost')}
                        </span>
                        <span className="text-sm font-bold text-dlp-text-secondary">
                            {((financials.breakdown.flourCost / financials.totalBatchCost) * 100).toFixed(0)}%{' '}
                            <span className="text-[9px] text-dlp-text-muted font-normal">{t('of_total')}</span>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};