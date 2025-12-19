import React from 'react';
import { FireIcon, ClockIcon, InfoIcon } from '@/components/ui/Icons';
import { OvenProfileInput } from '@/logic/ovenProfile';
import { useTranslation } from '@/i18n';

interface OvenProfilerFormProps {
    profile: OvenProfileInput;
    errors: Partial<Record<keyof OvenProfileInput, string>>;
    onChange: (field: keyof OvenProfileInput, value: any) => void;
    onAnalyze: () => void;
}

const Tooltip: React.FC<{ label: string; content: string }> = ({ label, content }) => (
    <div className="group relative inline-block ml-2 align-middle">
        <button className="text-slate-400 hover:text-dlp-brand-hover transition-colors block">
            <InfoIcon className="h-4 w-4" />
        </button>
        <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-xl bg-white p-3 text-xs text-slate-700 opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 border border-slate-200">
            <strong className="text-[#51a145]">{label}</strong><br />
            {content}
            <svg className="absolute left-0 top-full h-2 w-full text-white" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
        </div>
    </div>
);


export const OvenProfilerForm: React.FC<OvenProfilerFormProps> = ({
    profile,
    errors,
    onChange,
    onAnalyze
}) => {
    const { t } = useTranslation();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const finalValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked :
            type === 'number' ? Number(value) : value;

        onChange(name as keyof OvenProfileInput, finalValue);
    };

    // Helper to update specific fields directly
    const setField = (name: keyof OvenProfileInput, value: any) => {
        onChange(name, value);
    };

    return (
        <div className="space-y-6">

            {/* 1. Oven Type & Heating Physics */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold ring-1 ring-slate-200">1</span>
                    {t('common.oven_type')}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {[
                        { id: 'home_electric', label: t('tools.home_electric_oven'), icon: '⚡' },
                        { id: 'home_gas', label: t('tools.home_gas_oven'), icon: '🔥' },
                        { id: 'convection', label: t('tools.convection_oven'), icon: '💨' },
                        { id: 'deck', label: 'Deck / Stone', icon: '🍕' },
                        { id: 'wood', label: t('tools.woodfired_oven'), icon: '🪵' },
                    ].map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setField('ovenType', type.id)}
                            className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${profile.ovenType === type.id
                                    ? 'border-dlp-brand bg-lime-50 text-dlp-brand shadow-md'
                                    : 'border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                        >
                            <span className="text-2xl mb-1">{type.icon}</span>
                            <span className="text-xs font-bold text-center leading-tight">{type.label}</span>
                        </button>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <label className="block text-sm font-bold text-slate-700 mb-2">{t('tools.max_temperature_c')}</label>
                        <div className="relative">
                            <input
                                type="number"
                                name="maxTemperature"
                                value={profile.maxTemperature}
                                onChange={handleChange}
                                className={`block w-full rounded-xl border-2 py-3 px-4 text-xl font-bold font-mono shadow-sm focus:outline-none focus:ring-4 focus:ring-lime-100 transition-all ${errors.maxTemperature ? 'border-red-300 text-red-600 bg-red-50' : 'border-slate-200 text-slate-800 focus:border-dlp-brand'
                                    }`}
                            />
                            <div className="absolute right-3 top-3.5 text-slate-400 font-bold text-sm">°C</div>
                        </div>
                        {errors.maxTemperature && <p className="mt-1 text-xs font-bold text-red-500">{errors.maxTemperature}</p>}
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold text-slate-700">{t('tools.fan_convection')}</label>
                            <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${profile.convectionMode ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-400'}`}>
                                {profile.convectionMode ? 'Active' : 'Off'}
                            </div>
                        </div>
                        <button
                            onClick={() => setField('convectionMode', !profile.convectionMode)}
                            className={`w-full py-3 px-4 rounded-xl border-2 flex items-center justify-center gap-2 font-bold transition-all ${profile.convectionMode
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-slate-200 text-slate-400 hover:border-slate-300'
                                }`}
                        >
                            <InfoIcon className={`w-5 h-5 ${profile.convectionMode ? 'animate-spin-slow' : ''}`} />
                            {profile.convectionMode ? t('tools.fan_on') : t('tools.fan_off')}
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. Baking Surface & Rack Position */}
            <div className="grid md:grid-cols-2 gap-6">

                {/* Surface Selector */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold ring-1 ring-slate-200">2</span>
                        {t('common.baking_surface')}
                    </h3>

                    <div className="space-y-3">
                        {[
                            { id: 'none', label: 'Standard Rack / Pan', desc: t('tools.low_thermal_mass'), color: 'bg-slate-100' },
                            { id: 'stone', label: 'Baking Stone', desc: t('tools.medium_thermal_mass_good_result'), color: 'bg-orange-100' },
                            { id: 'steel', label: t('tools.baking_steel'), desc: t('tools.high_thermal_mass_best_for_crisp'), color: 'bg-slate-800 text-white' },
                        ].map((surface) => (
                            <button
                                key={surface.id}
                                onClick={() => setField('surface', surface.id)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all group ${profile.surface === surface.id
                                        ? 'border-dlp-brand ring-1 ring-dlp-brand shadow-md transform scale-[1.02]'
                                        : 'border-slate-100 hover:border-slate-300'
                                    }`}
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-sm block">{surface.label}</span>
                                    <div className={`w-3 h-3 rounded-full ${surface.color} border border-black/10`}></div>
                                </div>
                                <span className="text-xs text-slate-500 block">{surface.desc}</span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-6">
                        <label className="block text-sm font-bold text-slate-700 mb-2">{t('tools.preheat_time_mins')}</label>
                        <div className="relative">
                            <input
                                type="number"
                                name="preheatMinutes"
                                value={profile.preheatMinutes}
                                onChange={handleChange}
                                className="block w-full rounded-xl border-slate-200 py-2.5 px-3 bg-slate-50 focus:bg-white focus:border-dlp-brand focus:outline-none focus:ring-2 focus:ring-lime-100 font-mono text-slate-900"
                            />
                            <ClockIcon className="absolute right-3 top-3 w-4 h-4 text-slate-400" />
                        </div>
                    </div>
                </div>

                {/* Visual Rack Position */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold ring-1 ring-slate-200">3</span>
                        {t('common.rack_position')}
                    </h3>

                    {/* Oven Visualization */}
                    <div className="flex-1 rounded-xl bg-slate-800 relative p-4 border-4 border-slate-300 shadow-inner flex flex-col justify-between overflow-hidden">
                        {/* Heat Elements Visuals */}
                        <div className={`absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-red-500/50 to-transparent transition-opacity duration-500 ${['home_electric', 'convection'].includes(profile.ovenType) ? 'opacity-100' : 'opacity-20'}`}></div>
                        <div className={`absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-red-500/50 to-transparent transition-opacity duration-500 ${['home_electric', 'convection', 'deck', 'home_gas'].includes(profile.ovenType) ? 'opacity-100' : 'opacity-20'}`}></div>

                        {['top', 'middle', 'bottom'].map((pos) => (
                            <button
                                key={pos}
                                onClick={() => setField('rackPosition', pos)}
                                className={`relative z-10 w-full h-2 rounded-full transition-all duration-300 flex items-center justify-center group ${profile.rackPosition === pos
                                        ? 'bg-gradient-to-r from-slate-200 via-white to-slate-200 shadow-[0_0_15px_rgba(255,255,255,0.5)] scale-y-150'
                                        : 'bg-slate-600 hover:bg-slate-500 opacity-50 hover:opacity-100'
                                    }`}
                            >
                                <span className={`absolute -right-12 text-xs font-bold ${profile.rackPosition === pos ? 'text-white' : 'text-transparent group-hover:text-slate-400'}`}>
                                    {pos.toUpperCase()}
                                </span>
                            </button>
                        ))}
                    </div>
                    <p className="text-center text-xs text-slate-500 mt-4">
                        {t('tools.click_chart_to_set_rack_position')}
                    </p>
                </div>
            </div>

            <button
                onClick={onAnalyze}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 py-4 px-6 text-base font-bold text-white shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:from-black hover:to-slate-900 hover:-translate-y-0.5 transition-all text-lg"
            >
                <FireIcon className="h-5 w-5 text-orange-400" />
                {t('common.analyze_oven_profile')}
            </button>
        </div>
    );
};



