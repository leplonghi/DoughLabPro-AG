
import React, { useState } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon, SparklesIcon, BeakerIcon, BookOpenIcon, PlusCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { IngredientAIService } from '@/services/IngredientAIService';
import { DoughStyleDefinition } from '@/types/styles';
import { AIValidationResponse, IncrementCategory } from '@/types/ingredients';
import { useTranslation } from 'react-i18next';
import { FLAVOR_COMPONENTS } from '@/data/flavorComponents';
import { FlavorComponent } from '@/types/flavor';

interface IngredientCreatorModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentStyle: DoughStyleDefinition;
    onSave: (ingredient: any) => void;
}

export default function IngredientCreatorModal({ isOpen, onClose, currentStyle, onSave }: IngredientCreatorModalProps) {
    const { t } = useTranslation(['common', 'calculator', 'styles']);
    const [step, setStep] = useState<'input' | 'processing' | 'result'>('input');
    const [formData, setFormData] = useState({
        name: '',
        category: 'topping' as IncrementCategory,
        moisture: 'medium' as 'low' | 'medium' | 'high',
        applicationTime: 'pre_bake' as 'pre_bake' | 'post_bake',
        loadType: 'medium' as 'light' | 'medium' | 'heavy',
        creamyBase: false
    });

    const [aiResult, setAiResult] = useState<AIValidationResponse | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // Filter flavor components
    const filteredComponents = FLAVOR_COMPONENTS.filter(comp => {
        const matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comp.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleSelectFromLibrary = (component: FlavorComponent) => {
        // Convert FlavorComponent to Increment format
        const newIngredient = {
            id: component.id,
            visibleName: component.name,
            category: component.category.toLowerCase() as IncrementCategory,
            technicalProfile: {
                moistureLevel: component.flavorProfile.intensity > 3 ? 'high' : component.flavorProfile.intensity > 1 ? 'medium' : 'low',
                fatContent: component.flavorProfile.fat > 3 ? 'high' : component.flavorProfile.fat > 1 ? 'medium' : 'low',
                sugarContent: component.flavorProfile.sweetness > 3 ? 'high' : component.flavorProfile.sweetness > 1 ? 'medium' : 'low',
                weightImpact: 'Standard load',
                thermalBehavior: component.flavorProfile.thermalBehavior || 'Standard'
            },
            compatibilityByStyle: component.commonStyles.reduce((acc, styleId) => {
                acc[styleId] = 'validated';
                return acc;
            }, {} as Record<string, any>),
            source: 'official' as const,
            validatedBy: 'authority' as const,
            createdAt: new Date().toISOString()
        };

        onSave(newIngredient);
        reset();
    };

    const handleSubmit = async () => {
        setStep('processing');
        try {
            const result = await IngredientAIService.validateIngredient(
                formData.name,
                formData.category,
                {
                    moisturePerception: formData.moisture,
                    applicationTime: formData.applicationTime,
                    loadType: formData.loadType,
                    hasCreamyBase: formData.creamyBase
                },
                [currentStyle]
            );
            setAiResult(result);
            setStep('result');
        } catch (e) {
            console.error(e);
            setStep('input');
        }
    };

    const handleConfirm = () => {
        if (!aiResult) return;

        // Construct the UserIngredient object
        const newIngredient = {
            id: `custom_${Date.now()}`,
            ownerUserId: 'current_user',
            visibleName: formData.name,
            category: formData.category,
            technicalProfile: aiResult.technicalProfile,
            compatibilityByStyle: aiResult.compatibilityByStyle,
            confidenceScore: aiResult.confidenceScore,
            assumptions: aiResult.assumptions,
            source: 'user',
            validatedBy: 'ai',
            createdAt: new Date().toISOString()
        };

        onSave(newIngredient);
        reset();
    };

    const reset = () => {
        setStep('input');
        setFormData({
            name: '',
            category: 'topping',
            moisture: 'medium',
            applicationTime: 'pre_bake',
            loadType: 'medium',
            creamyBase: false
        });
        setAiResult(null);
        setSearchTerm('');
        setSelectedCategory('all');
        onClose();
    };

    const categories = ['all', 'Cheese', 'Meat', 'Vegetal', 'Sauce', 'Finish'];

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="flex justify-between items-center mb-4">
                                    <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-slate-900 flex items-center gap-2">
                                        <BeakerIcon className="h-5 w-5 text-lime-600" />
                                        {step === 'result' ? 'AI Validation Complete' : 'Add Ingredient'}
                                    </Dialog.Title>
                                    <button onClick={reset}><XMarkIcon className="h-5 w-5 text-slate-400" /></button>
                                </div>

                                {step === 'input' && (
                                    <Tab.Group>
                                        <Tab.List className="flex space-x-1 rounded-xl bg-slate-100 p-1 mb-4">
                                            <Tab
                                                className={({ selected }) =>
                                                    `w-full rounded-lg py-2.5 text-sm font-bold leading-5 transition-all
                                                    ${selected
                                                        ? 'bg-white text-lime-700 shadow'
                                                        : 'text-slate-600 hover:bg-white/[0.12] hover:text-slate-800'
                                                    }`
                                                }
                                            >
                                                <div className="flex items-center justify-center gap-2">
                                                    <BookOpenIcon className="h-4 w-4" />
                                                    Select from Library
                                                </div>
                                            </Tab>
                                            <Tab
                                                className={({ selected }) =>
                                                    `w-full rounded-lg py-2.5 text-sm font-bold leading-5 transition-all
                                                    ${selected
                                                        ? 'bg-white text-lime-700 shadow'
                                                        : 'text-slate-600 hover:bg-white/[0.12] hover:text-slate-800'
                                                    }`
                                                }
                                            >
                                                <div className="flex items-center justify-center gap-2">
                                                    <PlusCircleIcon className="h-4 w-4" />
                                                    Create Custom
                                                </div>
                                            </Tab>
                                        </Tab.List>
                                        <Tab.Panels>
                                            {/* LIBRARY TAB */}
                                            <Tab.Panel className="space-y-4">
                                                {/* Search and Filter */}
                                                <div className="space-y-3">
                                                    <input
                                                        type="text"
                                                        placeholder="Search ingredients..."
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 text-sm"
                                                    />

                                                    <div className="flex gap-2 flex-wrap">
                                                        {categories.map(cat => (
                                                            <button
                                                                key={cat}
                                                                onClick={() => setSelectedCategory(cat)}
                                                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${selectedCategory === cat
                                                                    ? 'bg-lime-500 text-white'
                                                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                                    }`}
                                                            >
                                                                {cat === 'all' ? 'All' : cat}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Component List */}
                                                <div className="max-h-96 overflow-y-auto space-y-2 pr-2">
                                                    {filteredComponents.length === 0 ? (
                                                        <div className="text-center py-8 text-slate-400">
                                                            <p className="text-sm">No ingredients found</p>
                                                        </div>
                                                    ) : (
                                                        filteredComponents.map(component => (
                                                            <button
                                                                key={component.id}
                                                                onClick={() => handleSelectFromLibrary(component)}
                                                                className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-lime-300 hover:bg-lime-50 transition-all group"
                                                            >
                                                                <div className="flex justify-between items-start">
                                                                    <div className="flex-1">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <h4 className="font-bold text-slate-800 group-hover:text-lime-700">{component.name}</h4>
                                                                            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                                                                {component.category}
                                                                            </span>
                                                                        </div>
                                                                        <p className="text-xs text-slate-600 line-clamp-2">{component.description}</p>
                                                                        <div className="flex gap-2 mt-2">
                                                                            <span className={`text-[10px] px-2 py-0.5 rounded ${component.applicationMoment === 'post_oven'
                                                                                ? 'bg-purple-100 text-purple-700'
                                                                                : 'bg-orange-100 text-orange-700'
                                                                                }`}>
                                                                                {component.applicationMoment === 'post_oven' ? 'Post-Oven' : 'Pre-Oven'}
                                                                            </span>
                                                                            {component.isStandard && (
                                                                                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                                                                                    ✓ Standard
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <PlusCircleIcon className="h-5 w-5 text-slate-300 group-hover:text-lime-600 transition-colors flex-shrink-0 ml-2" />
                                                                </div>
                                                            </button>
                                                        ))
                                                    )}
                                                </div>
                                            </Tab.Panel>

                                            {/* CUSTOM TAB */}
                                            <Tab.Panel>
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-xs font-bold text-slate-500 uppercase">Ingredient Name</label>
                                                        <input
                                                            type="text"
                                                            value={formData.name}
                                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                                            placeholder="e.g. Spicy Honey"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-xs font-bold text-slate-500 uppercase">Category</label>
                                                        <select
                                                            value={formData.category}
                                                            onChange={e => setFormData({ ...formData, category: e.target.value as any })}
                                                            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                                        >
                                                            <option value="topping">Topping</option>
                                                            <option value="sauce">Sauce</option>
                                                            <option value="filling">Filling</option>
                                                            <option value="glaze">Glaze/Finish</option>
                                                        </select>
                                                    </div>

                                                    <div className="border-t border-slate-100 pt-4">
                                                        <h4 className="text-sm font-bold text-slate-800 mb-2">Technical Questions</h4>

                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <label className="text-xs text-slate-500">Moisture Content</label>
                                                                <select
                                                                    value={formData.moisture}
                                                                    onChange={e => setFormData({ ...formData, moisture: e.target.value as any })}
                                                                    className="mt-1 block w-full rounded-md border-slate-300 text-xs"
                                                                >
                                                                    <option value="low">Low (Dry)</option>
                                                                    <option value="medium">Medium</option>
                                                                    <option value="high">High (Wet)</option>
                                                                </select>
                                                            </div>
                                                            <div>
                                                                <label className="text-xs text-slate-500">Weight Load</label>
                                                                <select
                                                                    value={formData.loadType}
                                                                    onChange={e => setFormData({ ...formData, loadType: e.target.value as any })}
                                                                    className="mt-1 block w-full rounded-md border-slate-300 text-xs"
                                                                >
                                                                    <option value="light">Light (Leafs/Spices)</option>
                                                                    <option value="medium">Medium</option>
                                                                    <option value="heavy">Heavy (Meats/Cheeses)</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="mt-4 flex gap-4">
                                                            <label className="flex items-center gap-2 text-sm text-slate-700">
                                                                <input
                                                                    type="radio"
                                                                    checked={formData.applicationTime === 'pre_bake'}
                                                                    onChange={() => setFormData({ ...formData, applicationTime: 'pre_bake' })}
                                                                    className="text-lime-600 focus:ring-lime-500"
                                                                />
                                                                Pre-Bake
                                                            </label>
                                                            <label className="flex items-center gap-2 text-sm text-slate-700">
                                                                <input
                                                                    type="radio"
                                                                    checked={formData.applicationTime === 'post_bake'}
                                                                    onChange={() => setFormData({ ...formData, applicationTime: 'post_bake' })}
                                                                    className="text-lime-600 focus:ring-lime-500"
                                                                />
                                                                Post-Bake
                                                            </label>
                                                        </div>

                                                        <div className="mt-2">
                                                            <label className="flex items-center gap-2 text-sm text-slate-700">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={formData.creamyBase}
                                                                    onChange={e => setFormData({ ...formData, creamyBase: e.target.checked })}
                                                                    className="rounded text-lime-600 focus:ring-lime-500"
                                                                />
                                                                Has Creamy/Fatty Base?
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <button
                                                        onClick={handleSubmit}
                                                        disabled={!formData.name}
                                                        className="w-full mt-4 bg-lime-600 text-white py-2 rounded-xl font-bold shadow-lg shadow-lime-500/20 hover:bg-lime-700 transition disabled:opacity-50"
                                                    >
                                                        Analyze with AI
                                                    </button>
                                                </div>
                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>
                                )}

                                {step === 'processing' && (
                                    <div className="py-12 text-center space-y-4">
                                        <SparklesIcon className="h-12 w-12 text-lime-500 animate-pulse mx-auto" />
                                        <p className="text-slate-500 font-medium">Analyzing molecular properties...</p>
                                    </div>
                                )}

                                {step === 'result' && aiResult && (
                                    <div className="space-y-4">
                                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-bold text-slate-800">{formData.name}</h4>
                                                    <p className="text-xs text-slate-500 capitalize">{formData.category}</p>
                                                </div>
                                                <div className={`px-2 py-1 rounded text-xs font-bold ${aiResult.confidenceScore > 0.7 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                                    {(aiResult.confidenceScore * 100).toFixed(0)}% Confidence
                                                </div>
                                            </div>

                                            {/* Compatibility Badge for CURRENT Style */}
                                            <div className="mt-3 flex items-center gap-2">
                                                <span className="text-xs font-bold text-slate-400">Compatibility:</span>
                                                {(() => {
                                                    const status = aiResult.compatibilityByStyle[currentStyle.id] || 'experimental';
                                                    if (status === 'validated') return <span className="text-xs font-bold text-white bg-emerald-500 px-2 py-0.5 rounded-full">Validated</span>;
                                                    if (status === 'variation') return <span className="text-xs font-bold text-slate-800 bg-yellow-400 px-2 py-0.5 rounded-full">Variation</span>;
                                                    return <span className="text-xs font-bold text-white bg-slate-500 px-2 py-0.5 rounded-full">Experimental</span>;
                                                })()}
                                            </div>

                                            {/* Technical Profile Summary */}
                                            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600">
                                                <div className="bg-white p-2 rounded border border-slate-100">
                                                    <span className="text-slate-400 block text-[10px] uppercase">Moisture</span>
                                                    {aiResult.technicalProfile.moistureLevel}
                                                </div>
                                                <div className="bg-white p-2 rounded border border-slate-100">
                                                    <span className="text-slate-400 block text-[10px] uppercase">Thermal</span>
                                                    <span className="line-clamp-1">{aiResult.technicalProfile.thermalBehavior}</span>
                                                </div>
                                            </div>

                                            {/* AI Explanation/Warnings */}
                                            {aiResult.warnings.length > 0 && (
                                                <div className="mt-3 bg-amber-50 border border-amber-100 p-2 rounded text-xs text-amber-800">
                                                    <strong>Note:</strong> {aiResult.warnings[0]}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                onClick={reset}
                                                className="flex-1 py-2 text-slate-500 font-bold text-sm hover:text-slate-700"
                                            >
                                                Discard
                                            </button>
                                            <button
                                                onClick={handleConfirm}
                                                className="flex-1 bg-lime-600 text-white py-2 rounded-xl font-bold shadow-lg hover:bg-lime-700 transition"
                                            >
                                                Save to Lab
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
