import React, { useState, useEffect } from 'react';
import { TestSeries, TestSeriesVariable } from '@/types';
import { CloseIcon, InfoIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface ConsistencySeriesModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (series: Omit<TestSeries, 'id' | 'createdAt' | 'updatedAt' | 'relatedBakes'> | TestSeries) =>Promise<void>;
    seriesToEdit: TestSeries | null;
}

const ConsistencySeriesModal: React.FC<ConsistencySeriesModalProps> = ({
    isOpen,
    onClose,
    onSave,
    seriesToEdit,
}) => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [variable, setVariable] = useState<TestSeriesVariable>('hydration');
    const [notes, setNotes] = useState('');
    const [stepsString, setStepsString] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (seriesToEdit) {
            setName(seriesToEdit.name);
            setDescription(seriesToEdit.description);
            setVariable(seriesToEdit.parameters.variable);
            setNotes(seriesToEdit.parameters.notes || '');
            setStepsString(seriesToEdit.parameters.steps.join(', '));
        } else {
            setName('');
            setDescription('');
            setVariable('hydration');
            setNotes('');
            setStepsString('');
        }
        setLoading(false);
    }, [seriesToEdit, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const steps = stepsString.split(',').map(s => s.trim()).filter(s => s.length > 0);

        const parameters = {
            variable,
            notes,
            steps
        };

        const seriesData = seriesToEdit
            ? { ...seriesToEdit, name, description, parameters }
            : { name, description, parameters };

        try {
            await onSave(seriesData as any);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const variables: { value: TestSeriesVariable; label: string }[] = [
        { value: 'hydration', label: 'Hydration' },
        { value: 'fermentation_time', label: 'Fermentation Time' },
        { value: 'flour', label: 'Flour Type/Blend' },
        { value: 'other', label: 'Other' }
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
            <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
                <div className="flex items-center justify-between border-b border-gray-100 p-4 bg-gray-50/50">
                    <h2 className="text-lg font-bold text-gray-900">
                        {seriesToEdit ? 'Edit Series' : 'Create New Test Series'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                    >
                        <CloseIcon className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">{t('mylab.series_name')}</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Hydration Test 60-80%"
                            className="block w-full rounded-xl border-gray-200 bg-white shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">{t('mylab.description')}</label>
                        <textarea
                            rows={2}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={t('mylab.goal_of_this_experiment')}
                            className="block w-full rounded-xl border-gray-200 bg-white shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">{t('mylab.variable_3')}</label>
                            <select
                                value={variable}
                                onChange={(e) => setVariable(e.target.value as TestSeriesVariable)}
                                className="block w-full rounded-xl border-gray-200 bg-white shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                            >
                                {variables.map(pub => (
                                    <option key={pub.value} value={pub.value}>{pub.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-1">{t('mylab.steps_2')}<div className="group relative">
                                    <InfoIcon className="h-4 w-4 text-gray-400 cursor-help" />
                                    <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                                        <div className="bg-slate-800 text-white text-xs rounded py-1 px-2 text-center shadow-lg">
                                            Comma separated values (e.g. 60%, 65%, 70%)
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <input
                                type="text"
                                value={stepsString}
                                onChange={(e) => setStepsString(e.target.value)}
                                placeholder="e.g. 60%, 65%, 70%"
                                className="block w-full rounded-xl border-gray-200 bg-white shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">
                            Notes (Optional)
                        </label>
                        <textarea
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder={t('mylab.specific_instructions_or_observations')}
                            className="block w-full rounded-xl border-gray-200 bg-white shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm py-2.5 px-3"
                        />
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-bold text-gray-600 shadow-sm hover:bg-gray-50 transition-all"
                        >{t('mylab.cancel')}</button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-xl bg-lime-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-lime-500/20 hover:bg-lime-600 transition-all active:scale-95 disabled:opacity-50"
                        >
                            {loading ? 'Saving...' : 'Save Series'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConsistencySeriesModal;
