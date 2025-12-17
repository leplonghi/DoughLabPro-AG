import React, { useState, useEffect } from 'react';
import {
    X,
    Info,
    Beaker,
    Microscope,
    Plus,
    Trash2,
    Save,
    UserCircle
} from 'lucide-react';
import { DoughStyleDefinition, StyleCategory, RecipeStyle } from '@/types';
import { DoughStyle, ProcessStep } from '@/types/dough';
import { useTranslation } from '@/i18n';

interface CreateStyleModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (style: any) => void; // Using any to bypass strict legacy type if needed, but we aim for DoughStyleDefinition compatibility
    defaultValues?: Partial<DoughStyleDefinition>;
}

const CATEGORIES: StyleCategory[] = ['pizza', 'bread', 'enriched_bread', 'burger_bun', 'pastry', 'cookies_confectionery', 'flatbread'];

const CreateStyleModal: React.FC<CreateStyleModalProps> = ({ isOpen, onClose, onSave, defaultValues }) => {
    const { t } = useTranslation(['common', 'styles', 'general', 'calculator']);

    // Moved inside to access translations
    const DIFFICULTIES = [t('styles.easy'), t('styles.medium'), t('styles.hard'), t('styles.expert')];

    const [activeTab, setActiveTab] = useState<'overview' | 'engineering' | 'science'>('overview');

    // Extended Form Data State
    const [formData, setFormData] = useState({
        // Overview
        name: '',
        description: '',
        family: 'My Custom Styles',
        category: 'pizza' as StyleCategory,
        country: 'Custom',
        region: '',
        history: '',
        tags: '', // Comma separated string
        source: 'user_manual' as 'user_manual' | 'user_ai',

        // Engineering
        hydration: 65,
        salt: 2.0,
        oil: 0,
        sugar: 0,
        fermentationTime: '24h',
        bakingTempC: 250,
        difficulty: 'Medium' as 'Easy' | 'Medium' | 'Hard' | 'Expert',

        // Science Lab (New)
        flourRheology: '', // Textarea
        processScience: '', // Textarea
        processSteps: [] as ProcessStep[],
    });

    useEffect(() => {
        if (defaultValues) {
            // Attempt to extract process steps if available in a legacy format or new props
            // This is a simplification; in a real scenario we'd parse the advanced objects.
            setFormData(prev => ({
                ...prev,
                name: defaultValues.name || '',
                description: defaultValues.description || '',
                // @ts-ignore
                family: defaultValues.family || 'My Custom Styles',
                category: defaultValues.category || 'pizza',

                // Engineering
                hydration: defaultValues.technicalProfile?.hydration[0] || 65,
                salt: defaultValues.technicalProfile?.salt[0] || 2.0,
                oil: defaultValues.technicalProfile?.oil?.[0] || 0,
                sugar: defaultValues.technicalProfile?.sugar?.[0] || 0,
                // @ts-ignore
                fermentationTime: defaultValues.technicalProfile?.fermentation?.bulk || '24h',
                bakingTempC: defaultValues.technicalProfile?.ovenTemp[0] || 250,
                difficulty: defaultValues.difficulty || 'Medium',

                // Origin
                country: defaultValues.origin?.country || 'Custom',
                region: defaultValues.origin?.region || '',
                history: defaultValues.history || '',
                source: (defaultValues.source as any) || 'user_manual',

                // Tags
                tags: defaultValues.tags?.join(', ') || '',

                // Science & Process (Defaults or Empty)
                flourRheology: defaultValues.technicalProfile?.flourStrength || '',
                processScience: defaultValues.notes?.[0] || '',
                processSteps: [], // Cannot easily parse back from string[] arrays without heuristic, keeping empty for now
            }));
        }
    }, [defaultValues, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: ['hydration', 'salt', 'oil', 'sugar', 'bakingTempC'].includes(name) ? Number(value) : value
        }));
    };

    // --- Process Builder Logic ---
    const addProcessStep = () => {
        setFormData(prev => ({
            ...prev,
            processSteps: [
                ...prev.processSteps,
                { phase: 'Mix', title: 'New Step', duration: '10 min', action: '', science: '' }
            ]
        }));
    };

    const updateProcessStep = (index: number, field: keyof ProcessStep, value: string) => {
        const newSteps = [...formData.processSteps];
        newSteps[index] = { ...newSteps[index], [field]: value };
        setFormData(prev => ({ ...prev, processSteps: newSteps }));
    };

    const removeProcessStep = (index: number) => {
        setFormData(prev => ({
            ...prev,
            processSteps: prev.processSteps.filter((_, i) => i !== index)
        }));
    };

    // --- Submit Logic (The t('common.complete') Object) ---
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct formatting for Process Steps (Legacy Adapter)
        const fermentationSteps = formData.processSteps.map(step =>
            `${step.title}: ${step.action} [Science: ${step.science}]`
        );

        // Construct the V2 Style Object (Compatible with DoughStyle definition mostly)
        // But adapting to strict DoughStyleDefinition for the app
        const newStyle: Omit<DoughStyleDefinition, 'id' | 'createdAt'> = {
            name: formData.name,
            description: formData.description,
            category: formData.category,
            family: formData.family,
            isCanonical: false,
            source: formData.source,
            origin: {
                country: formData.country,
                region: formData.region,
                period: 'Contemporary'
            },
            history: formData.history || 'User created style.',
            isPro: false,
            recipeStyle: RecipeStyle.NEAPOLITAN, // Defaulting, ideally user selects

            // Core Technical Profile
            technicalProfile: {
                hydration: [Math.max(0, formData.hydration - 2), formData.hydration + 2],
                salt: [Math.max(0, formData.salt - 0.2), formData.salt + 0.2],
                oil: [formData.oil, formData.oil],
                sugar: [formData.sugar, formData.sugar],
                ovenTemp: [formData.bakingTempC, formData.bakingTempC],
                difficulty: formData.difficulty,

                // Mapped Fields
                flourStrength: formData.flourRheology || t('styles.custom'),
                fermentationSteps: fermentationSteps,
                recommendedUse: [],
                fermentation: {
                    bulk: formData.fermentationTime,
                    proof: t('styles.custom_2')
                },

                // Optional: Store raw process in notes or a specific field if supported
            },

            // Scientific Profile (Advanced Schema)
            scientificProfile: {
                flourRheology: {
                    w_index: t('styles.custom_3'),
                    pl_ratio: t('styles.balanced'),
                    absorption_capacity: t('styles.medium_3'),
                    protein_type: t('styles.wheat'),
                    science_explanation: formData.flourRheology
                },
                thermalProfile: {
                    oven_type: t('styles.generic'),
                    heat_distribution: t('styles.standard'),
                    crust_development: t('styles.standard_2'),
                    crumb_structure: t('styles.standard_3')
                },
                fermentationScience: {
                    yeast_activity: t('styles.standard_4'),
                    ph_target: "5.5",
                    organic_acids: t('styles.balanced_2'),
                    enzymatic_activity: t('styles.standard_5')
                }
            },

            tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
            difficulty: formData.difficulty,
            fermentationType: 'direct',
            notes: [formData.processScience], // Storing general science here
            references: defaultValues?.references || [],
            releaseDate: new Date().toISOString(),
        };

        onSave(newStyle);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm p-4 transition-all" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col h-[85vh]" onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white z-10">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            {formData.source === 'user_ai' ? (
                                <span className="flex items-center gap-2 text-indigo-600">
                                    <UserCircle className="h-6 w-6" />{t('common.ai_generated_style')}</span>
                            ) : t('styles.create_new_style')}
                        </h2>
                        <p className="text-sm text-gray-500">{t('styles.define_the_parameters_of_your_custom_dough')}</p>
                    </div>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-100 bg-gray-50/50">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-6 py-3 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${activeTab === 'overview' ? 'border-lime-500 text-lime-700 bg-lime-50/50' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        <Info className="w-4 h-4" />{t('common.overview')}</button>
                    <button
                        onClick={() => setActiveTab('engineering')}
                        className={`px-6 py-3 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${activeTab === 'engineering' ? 'border-orange-500 text-orange-700 bg-orange-50/50' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        <Beaker className="w-4 h-4" />{t('common.engineering')}</button>
                    <button
                        onClick={() => setActiveTab('science')}
                        className={`px-6 py-3 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${activeTab === 'science' ? 'border-purple-500 text-purple-700 bg-purple-50/50' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        <Microscope className="w-4 h-4" />{t('common.science_lab')}</button>
                </div>

                {/* Content Area */}
                <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto bg-gray-50/30">
                    {formData.source === 'user_ai' && (
                        <div className="m-6 mb-0 bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-sm text-indigo-800 flex items-start gap-3">
                            <Info className="w-5 h-5 mt-0.5 shrink-0" />
                            <p>{t('styles.ai_generated_warning')}</p>
                        </div>
                    )}

                    {/* TAB 1: OVERVIEW */}
                    {activeTab === 'overview' && (
                        <div className="p-6 space-y-6 animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">{t('general.style_name')}</label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-xl border-gray-300 focus:ring-lime-500 focus:border-lime-500 p-2.5" placeholder={t('styles.example_grandma_square')} />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">{t('general.category')}</label>
                                    <select name="category" value={formData.category} onChange={handleChange} className="w-full rounded-xl border-gray-300 focus:ring-lime-500 focus:border-lime-500 p-2.5 capitalize">
                                        {CATEGORIES.map(c => <option key={c} value={c}>{c.replace('_', ' ')}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700">{t('general.description')}</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full rounded-xl border-gray-300 focus:ring-lime-500 focus:border-lime-500 p-3" placeholder={t('styles.a_brief_appetizing_description_of_this_dough_style')} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">{t('general.country_of_origin')}</label>
                                    <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full rounded-lg border-gray-300 text-sm" />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">{t('general.region_city')}</label>
                                    <input type="text" name="region" value={formData.region} onChange={handleChange} className="w-full rounded-lg border-gray-300 text-sm" />
                                </div>
                                <div className="space-y-1 col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">{t('general.history_context')}</label>
                                    <input type="text" name="history" value={formData.history} onChange={handleChange} className="w-full rounded-lg border-gray-300 text-sm" placeholder={t('styles.history_placeholder')} />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700">{t('general.tags')}</label>
                                <input type="text" name="tags" value={formData.tags} onChange={handleChange} className="w-full rounded-xl border-gray-300 focus:ring-lime-500 focus:border-lime-500 p-2.5" placeholder={t('styles.tags_placeholder')} />
                            </div>
                        </div>
                    )}

                    {/* TAB 2: ENGINEERING */}
                    {activeTab === 'engineering' && (
                        <div className="p-6 space-y-8 animate-fade-in">
                            {/* Ratios */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                <h3 className="text-sm font-bold uppercase text-orange-600 mb-4 flex items-center gap-2">
                                    <Beaker className="w-4 h-4" /> {t('styles.core_ratios')}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-gray-500 uppercase">{t('form.hydration')}</label>
                                        <div className="flex items-center gap-2">
                                            <input type="number" name="hydration" value={formData.hydration} onChange={handleChange} className="w-full rounded-lg border-gray-300 font-mono text-lg font-bold text-gray-800" />
                                            <span className="text-gray-400 font-bold">%</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-gray-500 uppercase">{t('results.salt')}</label>
                                        <div className="flex items-center gap-2">
                                            <input type="number" step="0.1" name="salt" value={formData.salt} onChange={handleChange} className="w-full rounded-lg border-gray-300 font-mono text-lg font-bold text-gray-800" />
                                            <span className="text-gray-400 font-bold">%</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-gray-500 uppercase">{t('general.fat_oil')}</label>
                                        <div className="flex items-center gap-2">
                                            <input type="number" step="0.5" name="oil" value={formData.oil} onChange={handleChange} className="w-full rounded-lg border-gray-300 font-mono text-lg font-bold text-gray-800" />
                                            <span className="text-gray-400 font-bold">%</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-gray-500 uppercase">{t('results.sugar')}</label>
                                        <div className="flex items-center gap-2">
                                            <input type="number" step="0.5" name="sugar" value={formData.sugar} onChange={handleChange} className="w-full rounded-lg border-gray-300 font-mono text-lg font-bold text-gray-800" />
                                            <span className="text-gray-400 font-bold">%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Execution */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">{t('general.fermentation_time')}</label>
                                    <input type="text" name="fermentationTime" value={formData.fermentationTime} onChange={handleChange} className="w-full rounded-lg border-gray-300" placeholder="e.g. 24h Cold" />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">{t('general.baking_temp_c')}</label>
                                    <input type="number" name="bakingTempC" value={formData.bakingTempC} onChange={handleChange} className="w-full rounded-lg border-gray-300" />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">{t('general.difficulty')}</label>
                                    <select name="difficulty"
                                        // @ts-ignore
                                        value={formData.difficulty}
                                        onChange={handleChange} className="w-full rounded-lg border-gray-300">
                                        {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 3: SCIENCE LAB */}
                    {activeTab === 'science' && (
                        <div className="p-6 space-y-8 animate-fade-in">
                            {/* Scientific Theory */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-purple-800">
                                        <Microscope className="w-4 h-4" /> {t('styles.flour_rheology_chemistry')}
                                    </label>
                                    <textarea
                                        name="flourRheology"
                                        value={formData.flourRheology}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full rounded-xl border-purple-200 focus:ring-purple-500 focus:border-purple-500 bg-purple-50/30 text-sm"
                                        placeholder={t('styles.flour_rheology_placeholder')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-purple-800">
                                        <Beaker className="w-4 h-4" />{t('common.process_chemistry_logic')}</label>
                                    <textarea
                                        name="processScience"
                                        value={formData.processScience}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full rounded-xl border-purple-200 focus:ring-purple-500 focus:border-purple-500 bg-purple-50/30 text-sm"
                                        placeholder={t('styles.process_science_placeholder')}
                                    />
                                </div>
                            </div>

                            {/* Process Builder */}
                            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                                <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                                    <h3 className="font-bold text-gray-700 text-sm uppercase">{t('general.process_timeline')}</h3>
                                    <button
                                        type="button"
                                        onClick={addProcessStep}
                                        className="flex items-center gap-1 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                        <Plus className="w-3 h-3" />{t('common.add_step')}</button>
                                </div>

                                <div className="divide-y divide-gray-100">
                                    {formData.processSteps.length === 0 ? (
                                        <div className="p-8 text-center text-gray-400 italic text-sm">
                                            {t('styles.no_process_steps')}
                                        </div>
                                    ) : (
                                        formData.processSteps.map((step, index) => (
                                            <div key={index} className="p-4 hover:bg-gray-50 transition-colors group">
                                                <div className="grid grid-cols-12 gap-3 mb-2">
                                                    <div className="col-span-12 md:col-span-3">
                                                        <label className="text-xs font-semibold text-gray-500 block mb-1">{t('general.title')}</label>
                                                        <input
                                                            type="text"
                                                            value={step.title}
                                                            onChange={(e) => updateProcessStep(index, 'title', e.target.value)}
                                                            className="w-full text-sm font-bold text-gray-800 rounded border-gray-200 py-1"
                                                        />
                                                    </div>
                                                    <div className="col-span-6 md:col-span-2">
                                                        <label className="text-xs font-semibold text-gray-500 block mb-1">{t('general.phase')}</label>
                                                        <select
                                                            value={step.phase}
                                                            onChange={(e) => updateProcessStep(index, 'phase', e.target.value as any)}
                                                            className="w-full text-xs rounded border-gray-200 py-1"
                                                        >
                                                            <option value={t('general.mix')}>{t('general.mix')}</option>
                                                            <option value={t('general.bulk')}>{t('general.bulk')}</option>
                                                            <option value={t('general.ball')}>{t('general.ball')}</option>
                                                            <option value={t('general.bake')}>{t('general.bake')}</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-span-6 md:col-span-2">
                                                        <label className="text-xs font-semibold text-gray-500 block mb-1">{t('general.duration')}</label>
                                                        <input
                                                            type="text"
                                                            value={step.duration}
                                                            onChange={(e) => updateProcessStep(index, 'duration', e.target.value)}
                                                            className="w-full text-sm rounded border-gray-200 py-1"
                                                        />
                                                    </div>
                                                    <div className="col-span-12 md:col-span-5 flex justify-end items-end">
                                                        <button
                                                            type="button"
                                                            onClick={() => removeProcessStep(index)}
                                                            className="text-red-400 hover:text-red-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-medium text-gray-400 mb-1">{t('general.action')}</label>
                                                        <textarea
                                                            value={step.action}
                                                            onChange={(e) => updateProcessStep(index, 'action', e.target.value)}
                                                            rows={2}
                                                            className="w-full text-sm rounded-lg border-gray-200 resize-none"
                                                            placeholder={t('general.what_to_do')}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-purple-400 mb-1">{t('styles.science_the_why')}</label>
                                                        <textarea
                                                            value={step.science}
                                                            onChange={(e) => updateProcessStep(index, 'science', e.target.value)}
                                                            rows={2}
                                                            className="w-full text-sm rounded-lg border-purple-100 bg-purple-50/30 resize-none focus:border-purple-300 focus:ring-purple-200"
                                                            placeholder={t('general.why_this_step_matters_scientifically')}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                </form>

                {/* Footer */}
                <div className="p-5 border-t border-gray-100 bg-white flex justify-end gap-3 z-10 box-border">
                    <button onClick={onClose} className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">{t('common.cancel')}</button>
                    <button onClick={handleSubmit} className="px-6 py-2.5 text-sm font-bold text-white bg-lime-600 hover:bg-lime-700 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                        <Save className="w-4 h-4" />
                        {formData.source === 'user_ai' ? t('styles.save_generated_style') : t('styles.save_style')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateStyleModal;
