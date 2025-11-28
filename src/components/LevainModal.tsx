import React, { useState, useEffect } from 'react';
import { Levain } from '@/types';
import { CloseIcon, InfoIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface LevainModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (levain: Omit<Levain, 'id' | 'isDefault' | 'feedingHistory' | 'status' | 'createdAt'> | Levain) => void;
    levainToEdit: Levain | null;
}

const LevainModal: React.FC<LevainModalProps> = ({
    isOpen,
    onClose,
    onSave,
    levainToEdit,
}) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<Partial<Levain>>({
        name: '',
        hydration: 100,
        baseFlourType: '',
        totalWeight: 200,
        idealFeedingIntervalHours: 24,
        notificationEnabled: false,
        notes: '',
    });

    const [isCustomFlour, setIsCustomFlour] = useState(false);
    const [isCustomInterval, setIsCustomInterval] = useState(false);

    const PRESET_FLOURS = [
        'Strong White (Bread Flour)',
        'All Purpose',
        'Whole Wheat',
        'Rye',
        'Spelt',
        'Mix'
    ];

    const PRESET_INTERVALS = [
        { label: 'Twice a day (12h)', value: 12 },
        { label: 'Once a day (24h)', value: 24 },
        { label: 'Once a week (Fridge - 168h)', value: 168 },
    ];

    useEffect(() => {
        if (levainToEdit) {
            setFormData(levainToEdit);
            setIsCustomFlour(!PRESET_FLOURS.includes(levainToEdit.baseFlourType));
            setIsCustomInterval(!PRESET_INTERVALS.some(i => i.value === levainToEdit.idealFeedingIntervalHours));
        } else {
            setFormData({
                name: '',
                hydration: 100,
                baseFlourType: PRESET_FLOURS[0],
                totalWeight: 200,
                idealFeedingIntervalHours: 24,
                notificationEnabled: false,
                notes: '',
            });
            setIsCustomFlour(false);
            setIsCustomInterval(false);
        }
    }, [levainToEdit, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (levainToEdit) {
            onSave({ ...levainToEdit, ...formData } as Levain);
        } else {
            const newLevain: Omit<Levain, 'id' | 'isDefault' | 'feedingHistory' | 'status' | 'createdAt'> = {
                name: formData.name || 'My Levain',
                hydration: formData.hydration || 100,
                baseFlourType: formData.baseFlourType,
                totalWeight: formData.totalWeight || 0,
                idealFeedingIntervalHours: formData.idealFeedingIntervalHours,
                notificationEnabled: formData.notificationEnabled,
                notes: formData.notes,
                lastFeeding: new Date().toISOString(),
                typicalUse: formData.typicalUse
            };
            onSave(newLevain);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                [name]: (e.target as HTMLInputElement).checked,
            }));
        } else if (['hydration', 'totalWeight', 'idealFeedingIntervalHours'].includes(name)) {
            setFormData((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleFlourSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value === 'custom') {
            setIsCustomFlour(true);
            setFormData(prev => ({ ...prev, baseFlourType: '' }));
        } else {
            setIsCustomFlour(false);
            setFormData(prev => ({ ...prev, baseFlourType: value }));
        }
    };

    const handleIntervalSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value === 'custom') {
            setIsCustomInterval(true);
            setFormData(prev => ({ ...prev, idealFeedingIntervalHours: 0 }));
        } else {
            setIsCustomInterval(false);
            setFormData(prev => ({ ...prev, idealFeedingIntervalHours: Number(value) }));
        }
    };

    const Tooltip = ({ text }: { text: string }) => (
        <div className="group relative inline-block ml-2">
            <InfoIcon className="h-4 w-4 text-slate-400 cursor-help hover:text-lime-600 transition-colors" />
            <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 transition-opacity group-hover:opacity-100 z-50">
                <div className="bg-slate-800 text-white text-xs rounded py-1 px-2 text-center shadow-lg w-max max-w-[200px]">
                    {text}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
            <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 p-4 bg-slate-50/50">
                    <h2 className="text-lg font-bold text-slate-800">
                        {levainToEdit ? t('profile.levains.edit_levain') : t('profile.levains.add_levain')}
                    </h2>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
                    >
                        <CloseIcon className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">
                            {t('profile.levains.name')}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full rounded-xl border-slate-200 bg-slate-50 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                            placeholder="e.g. Bubbles, The Beast"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="hydration" className="flex items-center text-sm font-bold text-slate-700 mb-1">
                                {t('profile.levains.hydration')} (%)
                                <Tooltip text="The ratio of water to flour. 100% means equal parts by weight." />
                            </label>
                            <input
                                type="number"
                                id="hydration"
                                name="hydration"
                                required
                                min="50"
                                max="200"
                                value={formData.hydration}
                                onChange={handleChange}
                                className="block w-full rounded-xl border-slate-200 bg-slate-50 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="totalWeight" className="flex items-center text-sm font-bold text-slate-700 mb-1">
                                Total Weight (g)
                                <Tooltip text="Current total weight of your starter jar content." />
                            </label>
                            <input
                                type="number"
                                id="totalWeight"
                                name="totalWeight"
                                min="0"
                                value={formData.totalWeight}
                                onChange={handleChange}
                                className="block w-full rounded-xl border-slate-200 bg-slate-50 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="flex items-center text-sm font-bold text-slate-700 mb-1">
                            Base Flour Type
                            <Tooltip text="The primary flour used to feed this starter." />
                        </label>
                        <div className="space-y-2">
                            <select
                                value={isCustomFlour ? 'custom' : formData.baseFlourType}
                                onChange={handleFlourSelect}
                                className="block w-full rounded-xl border-slate-200 bg-slate-50 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                            >
                                {PRESET_FLOURS.map(flour => (
                                    <option key={flour} value={flour}>{flour}</option>
                                ))}
                                <option value="custom">Enter Manually...</option>
                            </select>

                            {isCustomFlour && (
                                <input
                                    type="text"
                                    name="baseFlourType"
                                    value={formData.baseFlourType || ''}
                                    onChange={handleChange}
                                    placeholder="Enter custom flour type"
                                    className="block w-full rounded-xl border-slate-200 bg-white shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3 animate-fadeIn"
                                    autoFocus
                                />
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="flex items-center text-sm font-bold text-slate-700 mb-1">
                            Feeding Schedule
                            <Tooltip text="How often does this starter need to be fed to stay active?" />
                        </label>
                        <div className="space-y-2">
                            <select
                                value={isCustomInterval ? 'custom' : formData.idealFeedingIntervalHours}
                                onChange={handleIntervalSelect}
                                className="block w-full rounded-xl border-slate-200 bg-slate-50 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                            >
                                {PRESET_INTERVALS.map(interval => (
                                    <option key={interval.value} value={interval.value}>{interval.label}</option>
                                ))}
                                <option value="custom">Custom Interval...</option>
                            </select>

                            {isCustomInterval && (
                                <div className="flex items-center gap-2 animate-fadeIn">
                                    <input
                                        type="number"
                                        name="idealFeedingIntervalHours"
                                        min="1"
                                        value={formData.idealFeedingIntervalHours}
                                        onChange={handleChange}
                                        className="block w-full rounded-xl border-slate-200 bg-white shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                                        placeholder="Hours"
                                    />
                                    <span className="text-sm text-slate-500 font-medium">hours</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center p-3 bg-lime-50 rounded-xl border border-lime-100">
                        <input
                            id="notificationEnabled"
                            name="notificationEnabled"
                            type="checkbox"
                            checked={formData.notificationEnabled || false}
                            onChange={handleChange}
                            className="h-5 w-5 rounded border-slate-300 text-lime-600 focus:ring-lime-500"
                        />
                        <label htmlFor="notificationEnabled" className="ml-3 block text-sm font-medium text-slate-700">
                            Enable Feeding Reminders
                        </label>
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-bold text-slate-700 mb-1">
                            {t('profile.levains.notes')}
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            rows={3}
                            value={formData.notes || ''}
                            onChange={handleChange}
                            className="block w-full rounded-xl border-slate-200 bg-slate-50 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                            placeholder="Origin story, flavor profile, or special instructions..."
                        />
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-all"
                        >
                            {t('common.cancel')}
                        </button>
                        <button
                            type="submit"
                            className="rounded-xl bg-lime-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-lime-200 hover:bg-lime-600 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                        >
                            {t('common.save')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LevainModal;
