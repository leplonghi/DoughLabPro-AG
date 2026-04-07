import React, { useMemo } from 'react';
import { Levain } from '@/types';

interface LevainProfileProps {
    levain: Levain;
}

const formatDate = (value?: string) => {
    if (!value) return 'Not recorded';
    return new Date(value).toLocaleString();
};

const LevainProfile: React.FC<LevainProfileProps> = ({ levain }) => {
    const metrics = useMemo(() => {
        const totalFeedings = levain.feedingHistory.length;
        const lastFeed = levain.feedingHistory[0];
        return [
            { label: 'Hydration', value: `${levain.hydration}%` },
            { label: 'Current weight', value: `${levain.totalWeight}g` },
            { label: 'Base flour', value: levain.baseFlourType || 'Not set' },
            { label: 'Feed interval', value: levain.idealFeedingIntervalHours ? `${levain.idealFeedingIntervalHours}h` : 'Not set' },
            { label: 'Last feeding', value: formatDate(levain.lastFeeding) },
            { label: 'Total logs', value: `${totalFeedings}` },
            { label: 'Typical use', value: levain.typicalUse || 'Not set' },
            { label: 'Last ratio', value: lastFeed?.ratio || 'Unknown' },
        ];
    }, [levain]);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">Starter profile</h3>
                <p className="mt-2 text-sm text-slate-500">
                    A technical summary of how this levain is configured and how you are currently maintaining it.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{metric.label}</p>
                            <p className="mt-1 text-sm font-semibold text-slate-800">{metric.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">Notes and maintenance cues</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-600">Keeper notes</h4>
                        <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                            {levain.notes?.trim() || 'No notes yet. Add aroma, rise behavior, and seasonal observations to build a more useful profile over time.'}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-600">What to keep improving</h4>
                        <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                            <li>Keep the feeding ratio consistent for at least a few cycles before judging strength.</li>
                            <li>Log ambient temperature whenever behavior changes suddenly.</li>
                            <li>Use the notes field for smell, peak timing, and dough performance, not just ingredients.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LevainProfile;
