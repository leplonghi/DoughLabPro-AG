import React from 'react';
import { CheckCircleIcon } from '@/components/ui/Icons';
import { OvenAnalysisResult } from '@/logic/ovenProfile';
import { useTranslation } from '@/i18n';

interface OvenProfilerSummaryCardProps {
    analysis: OvenAnalysisResult;
}

export const OvenProfilerSummaryCard: React.FC<OvenProfilerSummaryCardProps> = ({ analysis }) => {
    const { t } = useTranslation();
    return (
        <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-200">
            <div className="flex items-start justify-between">
                <div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-dlp-brand px-3 py-1 text-xs font-bold text-white uppercase tracking-wider mb-4">
                        {analysis.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('tools.analysis_summary')}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        {analysis.summary}
                    </p>
                </div>
                <div className="hidden sm:block p-3 bg-lime-50 rounded-full">
                    <CheckCircleIcon className="h-8 w-8 text-dlp-brand" />
                </div>
            </div>
        </div>
    );
};


