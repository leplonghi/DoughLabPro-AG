import React from 'react';
import { OvenAnalysisResult } from '@/logic/ovenProfile';
import { OvenProfilerSummaryCard } from './OvenProfilerSummaryCard';
import { OvenProfilerAdviceGrid } from './OvenProfilerAdviceGrid';
import { useTranslation } from '@/i18n';

interface OvenProfilerResultsProps {
    analysis: OvenAnalysisResult;
}

export const OvenProfilerResults: React.FC<OvenProfilerResultsProps> = ({ analysis }) => {
  const { t } = useTranslation();
    return (
        <div id="analysis-results" className="animate-fade-in space-y-6 pt-4">
            <OvenProfilerSummaryCard analysis={analysis} />
            <OvenProfilerAdviceGrid analysis={analysis} />

            {/* Disclaimer */}
            <div className="text-center text-xs text-slate-400 italic mt-8">
                Calculations based on thermodynamic principles from Modernist Pizza and general baking physics. Real results may vary.
            </div>
        </div>
    );
};
