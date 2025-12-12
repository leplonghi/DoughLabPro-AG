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
        <button className="text-slate-400 hover:text-lime-600 transition-colors block">
            <InfoIcon className="h-4 w-4" />
        </button>
        <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-xl bg-slate-900 p-3 text-xs text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 border border-slate-700">
            <strong className="text-lime-400">{label}</strong><br />
            {content}
            <svg className="absolute left-0 top-full h-2 w-full text-slate-900" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
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

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="p-2 bg-lime-100 rounded-lg text-lime-600">
                    <FireIcon className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">1. Oven Configuration</h3>
                    <p className="text-sm text-slate-500">{t('tools.define_your_equipment_parameters')}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Oven Type */}
                <div>
                    <label htmlFor="ovenType" className="block text-sm font-medium text-slate-700 mb-1">{t('common.oven_type')}</label>
                    <select
                        id="ovenType"
                        name="ovenType"
                        value={profile.ovenType}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-slate-300 bg-slate-50 p-3 text-slate-900 focus:border-lime-500 focus:ring-lime-500 sm:text-sm transition-shadow"
                    >
                        <option value="home_gas">{t('tools.home_gas_oven')}</option>
                        <option value="home_electric">{t('tools.home_electric_oven')}</option>
                        <option value="convection">{t('tools.convection_oven')}</option>
                        <option value="deck">Deck/stone oven</option>
                        <option value="wood">{t('tools.woodfired_oven')}</option>
                    </select>
                </div>

                {/* Max Temperature */}
                <div>
                    <label htmlFor="maxTemperature" className="block text-sm font-medium text-slate-700 mb-1">
                        Max Temperature (°C)
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            id="maxTemperature"
                            name="maxTemperature"
                            value={profile.maxTemperature}
                            onChange={handleChange}
                            className={`block w-full rounded-xl border p-3 text-slate-900 focus:ring-lime-500 sm:text-sm transition-shadow ${errors.maxTemperature ? 'border-red-500 focus:border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50 focus:border-lime-500'}`}
                            placeholder="e.g. 250"
                        />
                        <span className="absolute right-3 top-3 text-slate-400 text-xs font-bold">°C</span>
                    </div>
                    {errors.maxTemperature && <p className="mt-1 text-xs text-red-500">{errors.maxTemperature}</p>}
                </div>

                {/* Baking Surface */}
                <div>
                    <label htmlFor="surface" className="block text-sm font-medium text-slate-700 mb-1">{t('common.baking_surface')}</label>
                    <select
                        id="surface"
                        name="surface"
                        value={profile.surface}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-slate-300 bg-slate-50 p-3 text-slate-900 focus:border-lime-500 focus:ring-lime-500 sm:text-sm transition-shadow"
                    >
                        <option value="none">No stone/steel</option>
                        <option value="stone">Baking stone (Cordierite)</option>
                        <option value="steel">{t('tools.baking_steel')}</option>
                    </select>
                </div>

                {/* Rack Position */}
                <div>
                    <label htmlFor="rackPosition" className="block text-sm font-medium text-slate-700 mb-1">{t('common.rack_position')}</label>
                    <select
                        id="rackPosition"
                        name="rackPosition"
                        value={profile.rackPosition}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-slate-300 bg-slate-50 p-3 text-slate-900 focus:border-lime-500 focus:ring-lime-500 sm:text-sm transition-shadow"
                    >
                        <option value="top">Top (High heat)</option>
                        <option value="middle">Middle (Balanced)</option>
                        <option value="bottom">Bottom (Direct heat)</option>
                    </select>
                </div>

                {/* Preheat Time */}
                <div>
                    <label htmlFor="preheatMinutes" className="block text-sm font-medium text-slate-700 mb-1 flex items-center">
                        Preheat Time (Minutes)
                        <Tooltip
                            label={t('tools.why_preheat')}
                            content="Stones and steels require significant time to absorb heat (thermal mass). Without saturation, the base of your pizza will remain undercooked."
                        />
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            id="preheatMinutes"
                            name="preheatMinutes"
                            value={profile.preheatMinutes}
                            onChange={handleChange}
                            className={`block w-full rounded-xl border p-3 text-slate-900 focus:ring-lime-500 sm:text-sm transition-shadow ${errors.preheatMinutes ? 'border-red-500 focus:border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50 focus:border-lime-500'}`}
                            placeholder="e.g. 45"
                        />
                        <ClockIcon className="absolute right-3 top-3 h-5 w-5 text-slate-400" />
                    </div>
                    {errors.preheatMinutes && <p className="mt-1 text-xs text-red-500">{errors.preheatMinutes}</p>}
                </div>

                {/* Convection Mode Toggle */}
                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3 bg-slate-50">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-900">{t('tools.convection_mode')}</span>
                        <span className="text-xs text-slate-500">{t('tools.fanforced_air_circulation')}</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            name="convectionMode"
                            checked={profile.convectionMode}
                            onChange={handleChange}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lime-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lime-500"></div>
                    </label>
                </div>
            </div>

            <div className="mt-8">
                <button
                    onClick={onAnalyze}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-lime-500 py-3.5 px-6 text-base font-bold text-white shadow-lg shadow-lime-500/20 transition-all hover:bg-lime-600 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                    <FireIcon className="h-5 w-5" />{t('common.analyze_oven_profile')}</button>
            </div>
        </div>
    );
};
