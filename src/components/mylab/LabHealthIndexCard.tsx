import React from 'react';
import { useInsights } from '@/contexts/InsightsProvider';
import { useBatches } from '@/contexts/BatchesProvider';
import { useLevain } from '@/contexts/LevainProvider';
import { ActivityLogIcon, HeartIcon, LightningBoltIcon, CheckCircledIcon } from '@radix-ui/react-icons'; // Assuming these exist or use local icons

// Fallback icons if Radix not available
import {
    ChartBarIcon,
    FireIcon,
    ClockIcon,
    CheckCircleIcon
} from '@/components/ui/Icons';

const LabHealthIndexCard: React.FC = () => {
    const { bakeConsistencyScore, usageFrequency } = useInsights();
    const { successRate } = useBatches();
    const { levainHealthScore } = useLevain();

    // Calculate overall Lab Health Index (simple average for now)
    const overallScore = Math.round(
        (bakeConsistencyScore + levainHealthScore + successRate + Math.min(usageFrequency * 10, 100)) / 4
    );

    const getHealthColor = (score: number) => {
        if (score >= 80) return 'text-emerald-500';
        if (score >= 60) return 'text-yellow-500';
        return 'text-rose-500';
    };

    const getHealthBg = (score: number) => {
        if (score >= 80) return 'bg-emerald-500';
        if (score >= 60) return 'bg-yellow-500';
        return 'bg-rose-500';
    };

    return (
        <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100 mb-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <ActivityLogIcon className="h-4 w-4 text-indigo-500" />
                    Lab Health Index
                </h3>
                <div className={`text-xs font-bold px-2 py-1 rounded-full bg-slate-100 ${getHealthColor(overallScore)}`}>
                    {overallScore}/100
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {/* Consistency */}
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-1.5 mb-1">
                        <ChartBarIcon className="h-3 w-3 text-slate-400" />
                        <span className="text-[10px] uppercase font-bold text-slate-500">Consistency</span>
                    </div>
                    <div className="flex items-end gap-1">
                        <span className="text-lg font-bold text-slate-900">{bakeConsistencyScore}</span>
                        <span className="text-[10px] text-slate-400 mb-1">/100</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1 rounded-full mt-1.5">
                        <div
                            className={`h-1 rounded-full ${getHealthBg(bakeConsistencyScore)}`}
                            style={{ width: `${bakeConsistencyScore}%` }}
                        ></div>
                    </div>
                </div>

                {/* Levain Health */}
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-1.5 mb-1">
                        <FireIcon className="h-3 w-3 text-slate-400" />
                        <span className="text-[10px] uppercase font-bold text-slate-500">Levain</span>
                    </div>
                    <div className="flex items-end gap-1">
                        <span className="text-lg font-bold text-slate-900">{levainHealthScore}</span>
                        <span className="text-[10px] text-slate-400 mb-1">/100</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1 rounded-full mt-1.5">
                        <div
                            className={`h-1 rounded-full ${getHealthBg(levainHealthScore)}`}
                            style={{ width: `${levainHealthScore}%` }}
                        ></div>
                    </div>
                </div>

                {/* Frequency */}
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-1.5 mb-1">
                        <ClockIcon className="h-3 w-3 text-slate-400" />
                        <span className="text-[10px] uppercase font-bold text-slate-500">Activity</span>
                    </div>
                    <div className="flex items-end gap-1">
                        <span className="text-lg font-bold text-slate-900">{usageFrequency}</span>
                        <span className="text-[10px] text-slate-400 mb-1">bakes/mo</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1 rounded-full mt-1.5">
                        <div
                            className="h-1 rounded-full bg-blue-500"
                            style={{ width: `${Math.min(usageFrequency * 10, 100)}%` }}
                        ></div>
                    </div>
                </div>

                {/* Success Rate */}
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-1.5 mb-1">
                        <CheckCircleIcon className="h-3 w-3 text-slate-400" />
                        <span className="text-[10px] uppercase font-bold text-slate-500">Success</span>
                    </div>
                    <div className="flex items-end gap-1">
                        <span className="text-lg font-bold text-slate-900">{successRate}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1 rounded-full mt-1.5">
                        <div
                            className={`h-1 rounded-full ${getHealthBg(successRate)}`}
                            style={{ width: `${successRate}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Icon wrapper if Radix is not available
function ActivityLogIcon(props: any) {
    return (
        <svg {...props} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0.875C3.84112 0.875 0.875 3.84112 0.875 7.5C0.875 11.1589 3.84112 14.125 7.5 14.125C11.1589 14.125 14.125 11.1589 14.125 7.5C14.125 3.84112 11.1589 0.875 7.5 0.875ZM1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5ZM3.5 7.5H5.5L6.5 4.5L8.5 10.5L9.5 7.5H11.5" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
    );
}

export default LabHealthIndexCard;
