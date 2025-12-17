
import React from 'react';
import { useDoughSession } from '@/contexts/DoughSessionContext';
import { HydrationVisualizer } from '../HydrationVisualizer';
import { Minus, Plus } from 'lucide-react';

export const LabSection: React.FC = () => {
    const { session, updateDough } = useDoughSession();
    const { dough } = session;

    // Handlers
    const setHydration = (h: number) => updateDough({ hydration: Math.max(0, Math.min(100, h)) });
    const setSalt = (s: number) => updateDough({ salt: Math.max(0, s) });
    const setBalls = (b: number) => updateDough({ yieldCount: Math.max(1, b) });
    const setWeight = (w: number) => updateDough({ ballWeight: Math.max(10, w) });

    return (
        <div className="space-y-6">
            {/* Header / Intro if needed */}

            {/* Main Stats Row */}
            <div className="grid grid-cols-2 gap-4">

                {/* Yield Counter */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Yield (Balls)</label>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => setBalls(dough.yieldCount - 1)}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                        >
                            <Minus size={16} />
                        </button>
                        <span className="text-2xl font-bold font-mono">{dough.yieldCount}</span>
                        <button
                            onClick={() => setBalls(dough.yieldCount + 1)}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                        >
                            <Plus size={16} />
                        </button>
                    </div>
                </div>

                {/* Weight Input */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Ball Weight (g)</label>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => setWeight(dough.ballWeight - 10)}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                        >
                            <Minus size={16} />
                        </button>
                        <span className="text-2xl font-bold font-mono">{dough.ballWeight}</span>
                        <button
                            onClick={() => setWeight(dough.ballWeight + 10)}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                        >
                            <Plus size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Hydration Slider & Viz */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-4">
                    <label className="text-xs uppercase tracking-wider text-slate-500">Hydration</label>
                    <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">{dough.hydration}%</span>
                </div>

                <input
                    type="range"
                    min="40"
                    max="100"
                    step="1"
                    value={dough.hydration}
                    onChange={(e) => setHydration(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 mb-4"
                />

                <HydrationVisualizer hydration={dough.hydration} />
            </div>

            {/* Salt Input */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-2">
                    <label className="text-xs uppercase tracking-wider text-slate-500">Salt Percentage</label>
                    <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">{dough.salt}%</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.1"
                    value={dough.salt}
                    onChange={(e) => setSalt(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                />
            </div>

        </div>
    );
};
