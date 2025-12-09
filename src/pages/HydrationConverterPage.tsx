import React, { useState, useEffect } from 'react';
import TechnicalPageLayout from './learn/TechnicalPageLayout';
import { BeakerIcon } from '@/components/ui/Icons';

export const HydrationConverterPage: React.FC = () => {
    const [flour, setFlour] = useState<number>(1000);
    const [currentHydration, setCurrentHydration] = useState<number>(60);
    const [targetHydration, setTargetHydration] = useState<number>(65);

    // Calculated values
    const currentWater = Math.round(flour * (currentHydration / 100));
    const targetWater = Math.round(flour * (targetHydration / 100));
    const waterDifference = targetWater - currentWater;

    const [adjustment, setAdjustment] = useState<{ type: 'add_water' | 'add_flour' | 'exact', amount: number }>({ type: 'exact', amount: 0 });

    useEffect(() => {
        if (targetHydration > currentHydration) {
            setAdjustment({ type: 'add_water', amount: waterDifference });
        } else if (targetHydration < currentHydration) {
            // To lower hydration by adding flour (keeping water same)
            // Target = Water / (Flour + X)
            // (Flour + X) = Water / Target
            // X = (Water / Target) - Flour
            const newTotalFlour = currentWater / (targetHydration / 100);
            const flourToAdd = newTotalFlour - flour;
            setAdjustment({ type: 'add_flour', amount: Math.round(flourToAdd) });
        } else {
            setAdjustment({ type: 'exact', amount: 0 });
        }
    }, [flour, currentHydration, targetHydration, currentWater, waterDifference]);

    return (
        <TechnicalPageLayout
            title="Hydration Adjuster"
            subtitle="Calculate exactly how much water or flour to add to correct your dough's hydration."
            showReferencesSection={false}
        >
            <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    <div className="grid gap-6 sm:grid-cols-2">
                        {/* Inputs */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Total Flour (g)</label>
                                <input
                                    type="number"
                                    value={flour}
                                    onChange={(e) => setFlour(Number(e.target.value))}
                                    className="block w-full rounded-xl border-slate-300 py-3 px-4 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-lg font-mono font-bold text-slate-900"
                                />
                            </div>

                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Current Hydration</label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        min="40"
                                        max="100"
                                        step="1"
                                        value={currentHydration}
                                        onChange={(e) => setCurrentHydration(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-lime-600"
                                    />
                                    <span className="text-xl font-bold text-slate-900 w-16 text-right">{currentHydration}%</span>
                                </div>
                                <p className="text-xs text-slate-400 mt-2">Current Water: {currentWater}g</p>
                            </div>

                            <div className="p-4 bg-lime-50/50 rounded-xl border border-lime-100">
                                <label className="block text-xs font-bold text-lime-700 uppercase tracking-wider mb-2">Target Hydration</label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        min="40"
                                        max="100"
                                        step="1"
                                        value={targetHydration}
                                        onChange={(e) => setTargetHydration(Number(e.target.value))}
                                        className="w-full h-2 bg-lime-200 rounded-lg appearance-none cursor-pointer accent-lime-600"
                                    />
                                    <span className="text-xl font-bold text-lime-700 w-16 text-right">{targetHydration}%</span>
                                </div>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="flex flex-col justify-center">
                            <div className="bg-slate-900 text-white rounded-3xl p-8 text-center shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-lime-500"></div>

                                <h3 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">Correction Required</h3>

                                {adjustment.type === 'exact' && (
                                    <div className="text-lime-400 font-bold text-2xl flex flex-col items-center gap-2">
                                        <BeakerIcon className="w-12 h-12" />
                                        <span>Perfect Match</span>
                                    </div>
                                )}

                                {adjustment.type === 'add_water' && (
                                    <div className="animate-pulse-slow">
                                        <div className="text-5xl font-extrabold text-blue-400 mb-2">
                                            +{adjustment.amount}g
                                        </div>
                                        <span className="text-xl font-bold text-blue-200">Water</span>
                                        <p className="mt-4 text-xs text-slate-500">
                                            Add water to reach {targetHydration}%.
                                        </p>
                                    </div>
                                )}

                                {adjustment.type === 'add_flour' && (
                                    <div>
                                        <div className="text-5xl font-extrabold text-amber-200 mb-2">
                                            +{adjustment.amount}g
                                        </div>
                                        <span className="text-xl font-bold text-amber-100">Flour</span>
                                        <p className="mt-4 text-xs text-slate-500">
                                            Add flour to lower hydration to {targetHydration}%.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="mt-6 text-center text-sm text-slate-500">
                                <p>Resulting Total Weight: <span className="font-bold text-slate-700">{flour + currentWater + (adjustment.type === 'add_water' ? adjustment.amount : 0) + (adjustment.type === 'add_flour' ? adjustment.amount : 0)}g</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TechnicalPageLayout>
    );
};

export default HydrationConverterPage;
