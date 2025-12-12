import React from 'react';
import { DoughbotResult } from '@/types/doughbot';
import { BeakerIcon, LightBulbIcon, AdjustmentsIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface DoughbotResultsProps {
    result: DoughbotResult;
}

export const DoughbotResults: React.FC<DoughbotResultsProps> = ({ result }) => {
  const { t } = useTranslation();
    return (
        <div className="space-y-8 animate-fade-in" id="doughbot-results">
            <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-lime-500 pl-4">{t('common.diagnostic_results')}</h3>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Causes Section */}
                <div className="rounded-2xl bg-red-50 p-6 shadow-sm border border-red-100">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-red-900 mb-4">
                        <BeakerIcon className="h-6 w-6 text-red-600" />{t('common.probable_causes')}</h4>
                    <ul className="space-y-3">
                        {result.causes.map((cause, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-200 text-red-800 flex items-center justify-center text-xs font-bold">
                                    {idx + 1}
                                </span>
                                <span className="text-red-900 leading-relaxed font-medium">{cause}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Solutions Section */}
                <div className="rounded-2xl bg-emerald-50 p-6 shadow-sm border border-emerald-100">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-emerald-900 mb-4">
                        <LightBulbIcon className="h-6 w-6 text-emerald-600" />{t('common.action_plan')}</h4>
                    <ul className="space-y-3">
                        {result.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-xs font-bold">
                                    {idx + 1}
                                </span>
                                <span className="text-emerald-900 leading-relaxed font-medium">{solution}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Technical Ranges / Adjustments */}
            {result.ranges && (
                <div className="rounded-2xl bg-slate-800 p-6 shadow-xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/20 rounded-full blur-3xl -mr-8 -mt-8 pointer-events-none"></div>

                    <h4 className="flex items-center gap-2 text-lg font-bold text-slate-100 mb-6 relative z-10">
                        <AdjustmentsIcon className="h-6 w-6 text-lime-400" />{t('common.recommended_adjustments')}</h4>

                    <div className="grid gap-6 sm:grid-cols-3 relative z-10">
                        {result.ranges.hydration && (
                            <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">{t('tools.target_hydration')}</span>
                                <span className="text-2xl font-mono font-bold text-lime-400">{result.ranges.hydration}%</span>
                            </div>
                        )}
                        {result.ranges.fermentation && (
                            <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 sm:col-span-2">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">{t('tools.fermentation_adjustment')}</span>
                                <span className="text-lg font-medium text-slate-200">{result.ranges.fermentation}</span>
                            </div>
                        )}
                        {result.ranges.flour && (
                            <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 sm:col-span-3">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">{t('tools.flour_recommendation')}</span>
                                <span className="text-lg font-medium text-slate-200">{result.ranges.flour}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
