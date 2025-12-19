import React, { useState, useEffect } from 'react';
import TechnicalPageLayout from './learn/TechnicalPageLayout';
import { BeakerIcon, ScaleIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

export const HydrationConverterPage: React.FC = () => {
    const { t } = useTranslation();

    // Inputs
    const [flour, setFlour] = useState<number>(1000);
    const [water, setWater] = useState<number>(600); // Replacing calculated standard water with explicit input or derived
    const [resultMode, setResultMode] = useState<'simple' | 'advanced'>('simple');

    // Levain / Starter
    const [useLevain, setUseLevain] = useState<boolean>(false);
    const [levainAmount, setLevainAmount] = useState<number>(200);
    const [levainHydration, setLevainHydration] = useState<number>(100);

    // Target
    const [targetHydration, setTargetHydration] = useState<number>(65);

    // --- Calculations ---

    // 1. Analyze Levain Content
    const levainFlour = useLevain ? Math.round(levainAmount / (1 + levainHydration / 100)) : 0;
    const levainWater = useLevain ? levainAmount - levainFlour : 0;

    // 2. Current Totals
    const totalFlourCurrent = flour + levainFlour;
    const totalWaterCurrent = water + levainWater;

    // 3. Current Hydration
    const currentHydration = totalFlourCurrent > 0
        ? (totalWaterCurrent / totalFlourCurrent) * 100
        : 0;

    // 4. Calculate Adjustment needed to reach Target
    // We want: (totalWaterCurrent + xWater) / (totalFlourCurrent + xFlour) = targetHydration / 100

    // Scenario A: Add Water (Hydration too low)
    // (totalWaterCurrent + x) / totalFlourCurrent = target / 100
    // x = (totalFlourCurrent * target / 100) - totalWaterCurrent
    const waterNeededForTarget = (totalFlourCurrent * (targetHydration / 100)) - totalWaterCurrent;

    // Scenario B: Add Flour (Hydration too high)
    // totalWaterCurrent / (totalFlourCurrent + x) = target / 100
    // totalFlourCurrent + x = totalWaterCurrent / (target / 100)
    // x = (totalWaterCurrent / (target / 100)) - totalFlourCurrent
    const flourNeededForTarget = targetHydration > 0
        ? (totalWaterCurrent / (targetHydration / 100)) - totalFlourCurrent
        : 0;

    const [adjustment, setAdjustment] = useState<{ type: 'add_water' | 'add_flour' | 'exact', amount: number }>({ type: 'exact', amount: 0 });

    useEffect(() => {
        // If we are within 0.1% difference, call it good
        const diff = targetHydration - currentHydration;

        if (Math.abs(diff) < 0.1) {
            setAdjustment({ type: 'exact', amount: 0 });
        } else if (diff > 0) {
            // Need to increase hydration -> Add Water
            setAdjustment({ type: 'add_water', amount: Math.round(waterNeededForTarget) });
        } else {
            // Need to decrease hydration -> Add Flour
            setAdjustment({ type: 'add_flour', amount: Math.round(flourNeededForTarget) });
        }
    }, [currentHydration, targetHydration, waterNeededForTarget, flourNeededForTarget]);

    // Sync initial water when flour changes if in simple mode (optional, but good UX to start somewhere valid)
    // Actually, better to let user type freely.

    return (
        <TechnicalPageLayout
            title={t('general.hydration_adjuster')}
            subtitle={t('ui.calculate_precise_adjustments_including_starter_content')}
            showReferencesSection={false}
        >
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20">

                {/* Top Control Panel */}
                <div className="grid gap-6 lg:grid-cols-2">

                    {/* Left Column: Inputs */}
                    <div className="space-y-6">

                        {/* Base Ingredients */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                    <ScaleIcon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800">{t('general.ingredients')}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-600 mb-1">{t('general.flour_weight')} (g)</label>
                                    <input
                                        type="number"
                                        value={flour}
                                        onChange={(e) => setFlour(Math.max(0, Number(e.target.value)))}
                                        className="w-full rounded-xl border-slate-300 py-2.5 px-3 focus:border-dlp-brand focus:ring-dlp-brand font-mono font-bold text-slate-900 bg-slate-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-600 mb-1">{t('general.water_weight')} (g)</label>
                                    <input
                                        type="number"
                                        value={water}
                                        onChange={(e) => setWater(Math.max(0, Number(e.target.value)))}
                                        className="w-full rounded-xl border-slate-300 py-2.5 px-3 focus:border-dlp-brand focus:ring-dlp-brand font-mono font-bold text-slate-900 bg-slate-50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Levain Toggle Section */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className={`p-2 rounded-lg transition-colors ${useLevain ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-400'}`}>
                                        <BeakerIcon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800">{t('general.sourdough_starter')}</h3>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={useLevain} onChange={(e) => setUseLevain(e.target.checked)} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lime-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dlp-brand"></div>
                                </label>
                            </div>

                            {useLevain && (
                                <div className="grid grid-cols-2 gap-4 animate-scale-in origin-top">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-600 mb-1">{t('ui.starter_weight')} (g)</label>
                                        <input
                                            type="number"
                                            value={levainAmount}
                                            onChange={(e) => setLevainAmount(Math.max(0, Number(e.target.value)))}
                                            className="w-full rounded-xl border-amber-200 py-2.5 px-3 focus:border-amber-400 focus:ring-amber-400 font-mono font-bold text-amber-900 bg-amber-50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-600 mb-1">{t('ui.starter_hydration')} (%)</label>
                                        <input
                                            type="number"
                                            value={levainHydration}
                                            onChange={(e) => setLevainHydration(Math.max(1, Number(e.target.value)))}
                                            className="w-full rounded-xl border-amber-200 py-2.5 px-3 focus:border-amber-400 focus:ring-amber-400 font-mono font-bold text-amber-900 bg-amber-50"
                                        />
                                        <p className="text-[10px] text-slate-400 mt-1">{t('ui.usually_100_for_liquid_starter')}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Current Stats Summary */}
                        <div className="p-4 bg-slate-900 rounded-xl text-white flex justify-between items-center shadow-lg">
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">{t('general.current_net_hydration')}</p>
                                <div className="text-3xl font-black font-mono tracking-tight text-white mb-1">
                                    {currentHydration.toFixed(1)}%
                                </div>
                                <p className="text-xs text-slate-500">
                                    {t('general.total_water')}: {Math.round(totalWaterCurrent)}g • {t('general.total_flour')}: {Math.round(totalFlourCurrent)}g
                                </p>
                            </div>
                            <div className="h-10 w-10 rounded-full border-2 border-slate-700 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Goal & Adjustment */}
                    <div className="space-y-6">

                        {/* Target Setting */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-800 mb-6">{t('general.target_goal')}</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <label className="block text-sm font-bold text-slate-700">{t('general.target_hydration')}</label>
                                        <span className="text-2xl font-black text-dlp-brand">{targetHydration}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="40"
                                        max="100"
                                        step="0.5"
                                        value={targetHydration}
                                        onChange={(e) => setTargetHydration(Number(e.target.value))}
                                        className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-dlp-brand"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                                        <span>40% ({t('ui.dry')})</span>
                                        <span>65% ({t('ui.standard')})</span>
                                        <span>80%+ ({t('ui.wet')})</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Results Card */}
                        <div className={`rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden transition-all duration-500 ${adjustment.type === 'exact' ? 'bg-gradient-to-br from-lime-600 to-lime-800' :
                            adjustment.type === 'add_water' ? 'bg-gradient-to-br from-blue-600 to-blue-800' :
                                'bg-gradient-to-br from-amber-600 to-amber-800'
                            }`}>
                            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/patterns/noise.png')]"></div>

                            <h3 className="relative z-10 text-white/80 text-sm font-bold uppercase tracking-widest mb-6 border-b border-white/20 pb-4 inline-block">
                                {t('general.required_correction')}
                            </h3>

                            <div className="relative z-10">
                                {adjustment.type === 'exact' && (
                                    <div className="animate-fade-in">
                                        <BeakerIcon className="w-16 h-16 text-lime-200 mx-auto mb-4" />
                                        <h2 className="text-4xl font-black text-white mb-2">{t('general.perfect')}</h2>
                                        <p className="text-lime-100">{t('ui.no_adjustment_needed_your_hydration_is_spot_on')}</p>
                                    </div>
                                )}

                                {adjustment.type === 'add_water' && (
                                    <div className="animate-pulse-slow">
                                        <div className="text-6xl font-black text-blue-100 mb-2 tracking-tighter">
                                            +{adjustment.amount}<span className="text-3xl text-blue-300">g</span>
                                        </div>
                                        <span className="inline-block px-4 py-1 rounded-full bg-blue-900/40 text-blue-100 font-bold text-lg mb-4 border border-blue-400/30">
                                            {t('results.water').toUpperCase()}
                                        </span>
                                        <p className="text-blue-100 text-sm max-w-xs mx-auto leading-relaxed">
                                            {t('ui.add_water_to_reach_hydration', { target: targetHydration })}
                                        </p>
                                    </div>
                                )}

                                {adjustment.type === 'add_flour' && (
                                    <div className="animate-pulse-slow">
                                        <div className="text-6xl font-black text-amber-100 mb-2 tracking-tighter">
                                            +{adjustment.amount}<span className="text-3xl text-amber-300">g</span>
                                        </div>
                                        <span className="inline-block px-4 py-1 rounded-full bg-amber-900/40 text-amber-100 font-bold text-lg mb-4 border border-amber-400/30">
                                            {t('results.flour').toUpperCase()}
                                        </span>
                                        <p className="text-amber-100 text-sm max-w-xs mx-auto leading-relaxed">
                                            {t('ui.add_flour_to_lower_hydration_to', { target: targetHydration })}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Final Stats */}
                            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 relative z-10 text-center">
                                <div>
                                    <span className="block text-xs text-white/60 mb-1">{t('ui.final_weight')}</span>
                                    <span className="block text-xl font-bold text-white">
                                        {Math.round(totalFlourCurrent + totalWaterCurrent + adjustment.amount)}g
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-xs text-white/60 mb-1">{t('ui.final_hydration')}</span>
                                    <span className="block text-xl font-bold text-white">{targetHydration}%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </TechnicalPageLayout>
    );
};

export default HydrationConverterPage;


