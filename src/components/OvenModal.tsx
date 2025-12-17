import React, { useState, useEffect } from 'react';
import { Oven, OvenType } from '@/types';
import { CloseIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface OvenModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (oven: Omit<Oven, 'id' | 'isDefault'> | Oven) => void | Promise<void>;
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Validation could go here
        if (ovenToEdit) {
            await onSave({ ...ovenToEdit, ...formData } as Oven);
        } else {
            await onSave(formData as Omit<Oven, 'id' | 'isDefault'>);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
            <div className="w-full max-w-md rounded-2xl bg-dlp-bg-card shadow-dlp-lg ring-1 ring-dlp-border overflow-hidden">
                <div className="flex items-center justify-between border-b border-dlp-border p-4 bg-dlp-bg-muted">
                    <h2 className="text-lg font-bold text-dlp-text-primary">
                        {ovenToEdit ? t('profile.ovens.edit_oven') : t('profile.ovens.add_oven')}
                    </h2>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 text-dlp-text-muted hover:bg-dlp-border hover:text-dlp-text-secondary transition-colors"
                    >
                        <CloseIcon className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-dlp-text-secondary mb-1">
                            {t('profile.ovens.name')}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full rounded-xl border-dlp-border bg-dlp-bg-muted shadow-sm focus:border-dlp-accent focus:ring-dlp-accent sm:text-sm py-2.5 px-3 text-dlp-text-primary placeholder-dlp-text-muted"
                            placeholder={t('general.my_home_oven')}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="type" className="block text-sm font-bold text-dlp-text-secondary mb-1">
                                {t('profile.ovens.type')}
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="block w-full rounded-xl border-dlp-border bg-dlp-bg-muted shadow-sm focus:border-dlp-accent focus:ring-dlp-accent sm:text-sm py-2.5 px-3 text-dlp-text-primary"
                            >
                                {Object.values(OvenType).map((type) => (
                                    <option key={type} value={type}>
                                        {t(`profile.ovens.types.${type.toLowerCase()}`)}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="maxTemperature" className="block text-sm font-bold text-dlp-text-secondary mb-1">
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
                                className="block w-full rounded-xl border-dlp-border bg-dlp-bg-muted shadow-sm focus:border-dlp-accent focus:ring-dlp-accent sm:text-sm py-2.5 px-3 text-dlp-text-primary"
                            />
                        </div>
                    </div>

                    <div className="flex gap-6 p-3 bg-dlp-bg-muted rounded-xl border border-dlp-border">
                        <div className="flex items-center">
                            <input
                                id="hasStone"
                                name="hasStone"
                                type="checkbox"
                                checked={formData.hasStone}
                                onChange={handleChange}
                                className="h-5 w-5 rounded border-dlp-border text-dlp-accent focus:ring-dlp-accent"
                            />
                            <label htmlFor="hasStone" className="ml-2 block text-sm font-medium text-dlp-text-secondary">
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
                                className="h-5 w-5 rounded border-dlp-border text-dlp-accent focus:ring-dlp-accent"
                            />
                            <label htmlFor="hasSteel" className="ml-2 block text-sm font-medium text-dlp-text-secondary">
                                {t('profile.ovens.has_steel')}
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-bold text-dlp-text-secondary mb-1">
                            {t('profile.ovens.notes')}
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            rows={3}
                            value={formData.notes || ''}
                            onChange={handleChange}
                            className="block w-full rounded-xl border-dlp-border bg-dlp-bg-muted shadow-sm focus:border-dlp-accent focus:ring-dlp-accent sm:text-sm py-2.5 px-3 text-dlp-text-primary placeholder-dlp-text-muted"
                            placeholder={t('general.optional_notes_about_your_oven')}
                        />
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-dlp-border">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-dlp-border bg-dlp-bg-card px-5 py-2.5 text-sm font-bold text-dlp-text-secondary shadow-sm hover:bg-dlp-bg-muted transition-all"
                        >
                            {t('common.cancel')}
                        </button>
                        <button
                            type="submit"
                            className="rounded-xl bg-dlp-accent px-5 py-2.5 text-sm font-bold text-white shadow-dlp-md hover:bg-dlp-accent-hover hover:shadow-dlp-lg transition-all transform hover:-translate-y-0.5"
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
