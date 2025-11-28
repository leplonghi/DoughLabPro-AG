import React, { useState, useEffect } from 'react';
import { Oven, OvenType } from '@/types';
import { CloseIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface OvenModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (oven: Omit<Oven, 'id' | 'isDefault'> | Oven) => void;
    ovenToEdit: Oven | null;
}

const OvenModal: React.FC<OvenModalProps> = ({
    isOpen,
    onClose,
    onSave,
    ovenToEdit,
}) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<Partial<Oven>>({
        name: '',
        type: OvenType.ELECTRIC,
        maxTemperature: 250,
        hasStone: false,
        hasSteel: false,
        notes: '',
    });

    useEffect(() => {
        if (ovenToEdit) {
            setFormData(ovenToEdit);
        } else {
            setFormData({
                name: '',
                type: OvenType.ELECTRIC,
                maxTemperature: 250,
                hasStone: false,
                hasSteel: false,
                notes: '',
            });
        }
    }, [ovenToEdit, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validation could go here
        if (ovenToEdit) {
            onSave({ ...ovenToEdit, ...formData } as Oven);
        } else {
            onSave(formData as Omit<Oven, 'id' | 'isDefault'>);
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
        } else if (name === 'maxTemperature') {
            setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 p-4">
                    <h2 className="text-lg font-bold text-slate-800">
                        {ovenToEdit ? t('profile.ovens.edit_oven') : t('profile.ovens.add_oven')}
                    </h2>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                    >
                        <CloseIcon className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                            {t('profile.ovens.name')}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                            placeholder="My Home Oven"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-slate-700">
                                {t('profile.ovens.type')}
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                            >
                                {Object.values(OvenType).map((type) => (
                                    <option key={type} value={type}>
                                        {t(`profile.ovens.types.${type.toLowerCase()}`)}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="maxTemperature" className="block text-sm font-medium text-slate-700">
                                Max Temp (°C)
                            </label>
                            <input
                                type="number"
                                id="maxTemperature"
                                name="maxTemperature"
                                required
                                min="0"
                                max="600"
                                value={formData.maxTemperature}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex items-center">
                            <input
                                id="hasStone"
                                name="hasStone"
                                type="checkbox"
                                checked={formData.hasStone}
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-slate-300 text-lime-600 focus:ring-lime-500"
                            />
                            <label htmlFor="hasStone" className="ml-2 block text-sm text-slate-700">
                                {t('profile.ovens.has_stone')}
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="hasSteel"
                                name="hasSteel"
                                type="checkbox"
                                checked={formData.hasSteel}
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-slate-300 text-lime-600 focus:ring-lime-500"
                            />
                            <label htmlFor="hasSteel" className="ml-2 block text-sm text-slate-700">
                                {t('profile.ovens.has_steel')}
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-slate-700">
                            {t('profile.ovens.notes')}
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            rows={3}
                            value={formData.notes || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                            placeholder="Optional notes about your oven..."
                        />
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                        >
                            {t('common.cancel')}
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                        >
                            {t('common.save')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OvenModal;
