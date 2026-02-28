
import React from 'react';
import { useTranslation } from '@/i18n';
import { CostCalculationResult } from '@/logic/costCalculator';
import { BanknotesIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

interface CostDisplayProps {
    data: CostCalculationResult;
    overhead: number;
}

export const CostDisplay: React.FC<CostDisplayProps> = ({ data, overhead }) => {
    const { t } = useTranslation();

    return (
        <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-dlp-brand/20 rounded-full blur-3xl group-hover:bg-dlp-brand/30 transition-all"></div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-bold flex items-center gap-2">
                        <BanknotesIcon className="w-5 h-5 text-dlp-brand" />
                        {t('costs.title')}
                    </h3>
                    <div className="px-2 py-0.5 rounded-lg bg-white/10 text-[10px] font-black uppercase tracking-widest border border-white/10">
                        {t('costs.overhead')}: {overhead}%
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                            {t('costs.cost_per_unit')}
                        </span>
                        <div className="text-3xl font-black text-lime-400">
                            {data.currency} {data.costPerUnit.toFixed(2)}
                        </div>
                    </div>
                    <div className="space-y-1 border-l border-white/10 pl-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                            {t('costs.total_batch_cost')}
                        </span>
                        <div className="text-xl font-bold text-white">
                            {data.currency} {data.totalBatchCost.toFixed(2)}
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('ui:ingredient_breakdown')}</span>
                    <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                        {data.ingredients.map((ing, i) => (
                            <div key={i} className="flex justify-between items-center text-xs">
                                <span className="text-slate-300">{ing.name} <span className="text-[10px] opacity-50">({Math.round(ing.weight)}g)</span></span>
                                <span className="font-mono font-bold">{data.currency} {ing.cost.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                    <button className="w-full py-2.5 rounded-xl bg-white text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-lime-400 transition-all flex items-center justify-center gap-2">
                        <ArrowTrendingUpIcon className="w-4 h-4" />{t('ui:export_p_l_report')}</button>
                </div>
            </div>
        </div>
    );
};
