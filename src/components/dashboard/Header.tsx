
import React, { useMemo } from 'react';
import { useCalculator } from '@/contexts/CalculatorContext';
import { ChefHat } from 'lucide-react';

export const DashboardHeader: React.FC = () => {
    const { results } = useCalculator();

    const totalWeight = useMemo(() => {
        return results ? Math.round(results.totalDough) : 0;
    }, [results]);

    // Mock Cost Estimation (could be real later)
    const estimatedCost = useMemo(() => {
        return (totalWeight / 1000) * 3.50; // $3.50 per kg avg
    }, [totalWeight]);

    return (
        <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-3">
                <div className="bg-orange-500 p-2 rounded-xl text-white shadow-lg shadow-orange-500/20">
                    <ChefHat size={24} />
                </div>
                <div>
                    <h1 className="text-xl font-bold leading-none text-slate-900 dark:text-white">DoughLab<span className="text-orange-500">Pro</span></h1>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Production Dashboard</span>
                </div>
            </div>

            <div className="text-right">
                <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white leading-none">
                    {totalWeight}<span className="text-sm text-slate-400 font-normal ml-1">g</span>
                </div>
                <div className="text-xs text-slate-500">
                    Est. ${estimatedCost.toFixed(2)}
                </div>
            </div>
        </div>
    );
};
