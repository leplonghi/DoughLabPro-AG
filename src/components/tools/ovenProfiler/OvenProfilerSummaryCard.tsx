import React from 'react';
import { CheckCircleIcon } from '@/components/ui/Icons';
import { OvenAnalysisResult } from '@/logic/ovenProfile';

interface OvenProfilerSummaryCardProps {
    analysis: OvenAnalysisResult;
}

export const OvenProfilerSummaryCard: React.FC<OvenProfilerSummaryCardProps> = ({ analysis }) => {
    return (
        <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-lg border border-slate-800">
            <div className="flex items-start justify-between">
                <div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-lime-500 px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                        {analysis.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">Analysis Summary</h3>
                    <p className="text-slate-300 leading-relaxed text-lg">
                        {analysis.summary}
                    </p>
                </div>
                <div className="hidden sm:block p-3 bg-slate-800 rounded-full">
                    <CheckCircleIcon className="h-8 w-8 text-lime-500" />
                </div>
            </div>
        </div>
    );
};
