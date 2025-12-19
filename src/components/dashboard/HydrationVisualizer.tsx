
import React, { useMemo } from 'react';

interface HydrationVisualizerProps {
    hydration: number;
}

export const HydrationVisualizer: React.FC<HydrationVisualizerProps> = ({ hydration }) => {
    const { color, label, widthPct } = useMemo(() => {
        let color = 'bg-dlp-brand';
        let label = 'Standard';

        // Cap visual width between 50% and 100% for better UI scaling
        // 50% hydro -> 0% bar (technically) but let's map 40-100 to 0-100 range visually
        const minH = 40;
        const maxH = 90;
        const clamped = Math.min(Math.max(hydration, minH), maxH);
        const widthPct = ((clamped - minH) / (maxH - minH)) * 100;

        if (hydration < 55) {
            color = 'bg-yellow-500'; // Stiff
            label = 'Stiff';
        } else if (hydration >= 70) {
            color = 'bg-blue-500'; // High Hydro
            label = 'High Hydration';
        }

        return { color, label, widthPct };
    }, [hydration]);

    return (
        <div className="w-full space-y-1">
            <div className="flex justify-between text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
                <span>Stiff (50%)</span>
                <span>Standard</span>
                <span>High (80%+)</span>
            </div>
            <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden relative">
                <div
                    className={`h-full ${color} transition-all duration-500 ease-out`}
                    style={{ width: `${widthPct}%` }}
                />
            </div>
            <div className="flex justify-between items-center mt-1">
                <span className={`text-xs font-bold ${color.replace('bg-', 'text-')}`}>
                    {label}
                </span>
                <span className="text-xs text-gray-400">{hydration}%</span>
            </div>
        </div>
    );
};

