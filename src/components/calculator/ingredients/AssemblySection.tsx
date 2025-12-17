import React, { useState, useEffect } from 'react';
import { DoughStyleDefinition } from '@/types/styles';
import { Increment, UserIngredient } from '@/types/ingredients';
import { IngredientAIService } from '@/services/IngredientAIService';
import { officialIncrements } from '@/data/ingredients/official';
import IngredientCreatorModal from './IngredientCreatorModal';
import { DidacticTooltip, SimpleTooltip, CategoryBadge } from './DidacticTooltips';
import { PlusIcon, TrashIcon, ExclamationTriangleIcon, InformationCircleIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import { FLAVOR_COMPONENTS } from '@/data/flavorComponents';
import FlavorComponentProfileModal from '@/components/FlavorComponentProfileModal';
import { FlavorComponent } from '@/types/flavor';
import { BakeType } from '@/types';
import { useTranslation } from '@/i18n';

interface AssemblySectionProps {
    style: DoughStyleDefinition;
    selectedIncrements: (Increment | UserIngredient)[];
    onUpdateIncrements: (increments: (Increment | UserIngredient)[]) => void;
    bakingTempC: number;
    bakeType?: BakeType;
}

export const AssemblySection: React.FC<AssemblySectionProps> = ({ style, selectedIncrements, onUpdateIncrements, bakingTempC, bakeType = 'PIZZAS' }) => {
    const { t } = useTranslation(['calculator', 'styles']);
    const [isCreatorOpen, setIsCreatorOpen] = useState(false);
    const [health, setHealth] = useState<{ status: 'healthy' | 'warning' | 'critical', alerts: string[] }>({ status: 'healthy', alerts: [] });
    const [selectedFlavorComponent, setSelectedFlavorComponent] = useState<FlavorComponent | null>(null);
    const [quantities, setQuantities] = useState<Record<string, number>>({});

    const getFlavorMatch = (ingId: string): FlavorComponent | undefined => {
        let match = FLAVOR_COMPONENTS.find(fc => fc.id === ingId);
        if (match) return match;
        const mapping: Record<string, string> = {
            'mozz_low_moisture': 'mozzarella_low_moisture',
            'mozz_fresh': 'fior_di_latte',
            'cup_n_char_pepperoni': 'pepperoni',
            'tomato_sauce_classic': 'garlic_oregano',
            'shredded_mozzarella': 'mozzarella_low_moisture'
        };
        if (mapping[ingId]) return FLAVOR_COMPONENTS.find(fc => fc.id === mapping[ingId]);
        return undefined;
    };

    // Get suggested quantity based on ingredient type
    const getSuggestedQuantity = (ingredient: Increment | UserIngredient): number => {
        const category = ingredient.category.toLowerCase();
        if (category.includes('cheese')) return 150; // grams
        if (category.includes('meat')) return 80;
        if (category.includes('sauce')) return 100;
        if (category.includes('vegetal')) return 60;
        return 50; // default
    };

    // Validate assembly whenever selection changes
    useEffect(() => {
        const result = IngredientAIService.checkAssemblyHealth(style, selectedIncrements, bakingTempC);
        setHealth(result);
    }, [selectedIncrements, style, bakingTempC]);

    const handleAddOfficial = (id: string) => {
        const inc = officialIncrements.find(i => i.id === id);
        if (inc && !selectedIncrements.find(existing => existing.id === id)) {
            const suggested = getSuggestedQuantity(inc);
            setQuantities(prev => ({ ...prev, [id]: suggested }));
            onUpdateIncrements([...selectedIncrements, inc]);
        }
    };

    const handleAddCustom = (newIngredient: UserIngredient) => {
        const suggested = getSuggestedQuantity(newIngredient);
        setQuantities(prev => ({ ...prev, [newIngredient.id]: suggested }));
        onUpdateIncrements([...selectedIncrements, newIngredient]);
        setIsCreatorOpen(false);
    };

    const handleRemove = (id: string) => {
        onUpdateIncrements(selectedIncrements.filter(i => i.id !== id));
        setQuantities(prev => {
            const newQty = { ...prev };
            delete newQty[id];
            return newQty;
        });
    };

    const handleQuantityChange = (id: string, value: number) => {
        setQuantities(prev => ({ ...prev, [id]: value }));
    };

    // Filter recommended items
    const recommended = officialIncrements.filter(inc => {
        const status = inc.compatibilityByStyle[style.id];
        if (style.recommendedIncrements?.includes(inc.id)) return true;
        return status === 'validated';
    });

    const available = recommended.filter(inc => !selectedIncrements.find(s => s.id === inc.id));

    return (
        <div className="space-y-4 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm animate-fade-in">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-slate-800">
                            {t('calculator.assembly_components')}
                        </h3>
                        {health.status === 'healthy' && <ShieldCheckIcon className="h-4 w-4 text-emerald-500" />}
                        {health.status !== 'healthy' && <ExclamationTriangleIcon className="h-4 w-4 text-amber-500" />}
                        {/* Ultra-Didactic Info Tooltip */}
                        <div className="group relative">
                            <InformationCircleIcon className="h-4 w-4 text-slate-400 cursor-help hover:text-lime-500 transition-colors" />
                            <DidacticTooltip
                                title={t('calculator.what_are_assembly_components')}
                                description={t('calculator.assembly_components_simple')}
                                example={t('calculator.assembly_components_example')}
                                analogy={t('calculator.analogy_sandwich')}
                                tip={t('calculator.tip_dough_first')}
                                visual={{
                                    icon: '🍕',
                                    label: t('calculator.toppings_go_on')
                                }}
                            />
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        {bakeType === 'PIZZAS' && t('calculator.assembly_toppings_desc_pizza')}
                        {bakeType === 'BREADS_SAVORY' && t('calculator.assembly_toppings_desc_bread')}
                        {bakeType === 'SWEETS_PASTRY' && t('calculator.assembly_toppings_desc_pastry')}
                    </p>
                    <p className="text-[10px] text-slate-400 italic mt-1">
                        {bakeType === 'PIZZAS' && t('calculator.assembly_lab_example_pizza')}
                        {bakeType === 'BREADS_SAVORY' && t('calculator.assembly_lab_example_bread')}
                        {bakeType === 'SWEETS_PASTRY' && t('calculator.assembly_lab_example_pastry')}
                    </p>
                </div>
                {/* Compact Status Badge */}
                <div className={`px-2 py-1 rounded-md flex items-center gap-1.5 text-xs font-bold whitespace-nowrap ${health.status === 'healthy' ? 'bg-emerald-50 text-emerald-700' :
                    health.status === 'warning' ? 'bg-amber-50 text-amber-700' :
                        'bg-red-50 text-red-700'
                    }`}>
                    <span className="capitalize">{health.status}</span>
                </div>
            </div>

            {/* AI Analysis - Condensed */}
            {(health.aiAnalysis || health.alerts.length > 0) && (
                <div className={`rounded-lg p-3 text-xs space-y-2 ${health.status === 'critical' ? 'bg-red-50 border border-red-200' :
                    health.status === 'warning' ? 'bg-amber-50 border border-amber-200' :
                        'bg-slate-50 border border-slate-200'
                    }`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 font-bold text-slate-700">
                            <InformationCircleIcon className="h-3.5 w-3.5" />
                            <span>AI Analysis</span>
                        </div>
                        {health.aiAnalysis && (
                            <span className={`text-[10px] uppercase font-black px-1.5 py-0.5 rounded ${health.aiAnalysis.classification === 'Experimental' ? 'bg-purple-100 text-purple-700' :
                                health.aiAnalysis.classification === 'Variation' ? 'bg-blue-100 text-blue-700' :
                                    'bg-emerald-100 text-emerald-700'
                                }`}>
                                {health.aiAnalysis.classification}
                            </span>
                        )}
                    </div>

                    {health.aiAnalysis && (
                        <>
                            {health.aiAnalysis.impact.length > 0 && (
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold opacity-60">Impact</p>
                                    <ul className="list-disc pl-4 space-y-0.5 opacity-90 text-[11px]">
                                        {health.aiAnalysis.impact.slice(0, 2).map((txt, i) => <li key={i}>{txt}</li>)}
                                    </ul>
                                </div>
                            )}

                            {health.aiAnalysis.suggestions.length > 0 && (
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold opacity-60">Suggestions</p>
                                    <ul className="list-disc pl-4 space-y-0.5 opacity-90 text-[11px]">
                                        {health.aiAnalysis.suggestions.slice(0, 2).map((txt, i) => <li key={i}>{txt}</li>)}
                                    </ul>
                                </div>
                            )}

                            <p className="text-[10px] italic opacity-60 pt-1 border-t border-black/5">
                                {health.aiAnalysis.freedomStatement}
                            </p>
                        </>
                    )}
                </div>
            )}

            {/* Selected Ingredients - Condensed */}
            <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t('calculator.current_stack')}</h4>
                {selectedIncrements.length === 0 ? (
                    <div className="text-center py-4 border-2 border-dashed border-slate-100 rounded-lg">
                        <p className="text-xs text-slate-400">{t('calculator.no_components_added')}</p>
                    </div>
                ) : (
                    <div className="space-y-1.5">
                        {selectedIncrements.map(item => {
                            const flavorMatch = getFlavorMatch(item.id);
                            return (
                                <div key={item.id} className="relative group">
                                    <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100 group-hover:border-lime-200 transition">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <p className="font-bold text-slate-700 text-xs truncate">{item.visibleName}</p>
                                                <CategoryBadge category={item.category as any} />
                                                {item.source === 'user' && <span className="text-[10px] text-violet-600 font-bold">Custom</span>}
                                            </div>
                                        </div>

                                        {/* Quantity Input with Tooltip */}
                                        <SimpleTooltip
                                            content={t('calculator.quantity_suggestion', { amount: getSuggestedQuantity(item) })}
                                            icon="⚖️"
                                        >
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="number"
                                                    value={quantities[item.id] || getSuggestedQuantity(item)}
                                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                                                    className="w-16 px-2 py-1 text-xs border border-slate-200 rounded focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
                                                    min="0"
                                                    step="10"
                                                />
                                                <span className="text-[10px] text-slate-400 cursor-help">g</span>
                                            </div>
                                        </SimpleTooltip>

                                        <div className="flex items-center gap-1">
                                            {flavorMatch && (
                                                <button
                                                    onClick={() => setSelectedFlavorComponent(flavorMatch)}
                                                    className="p-1 text-slate-300 hover:text-orange-500 transition"
                                                    title="View Full Profile"
                                                >
                                                    <InformationCircleIcon className="h-4 w-4" />
                                                </button>
                                            )}
                                            <button onClick={() => handleRemove(item.id)} className="p-1 text-slate-300 hover:text-red-500 transition">
                                                <TrashIcon className="h-3.5 w-3.5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Rich Tooltip on Hover */}
                                    {flavorMatch && (
                                        <div className="absolute z-50 w-80 p-4 bg-white rounded-xl shadow-2xl border border-slate-200 bottom-full left-0 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                                            {/* Header */}
                                            <div className="flex items-start gap-3 mb-3 pb-3 border-b border-slate-100">
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-slate-800 text-sm">{item.visibleName}</h4>
                                                    <p className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">{item.category}</p>
                                                </div>
                                                {item.source === 'official' && (
                                                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full">
                                                        Official
                                                    </span>
                                                )}
                                            </div>

                                            {/* Description */}
                                            <div className="mb-3">
                                                <p className="text-xs text-slate-600 leading-relaxed">{flavorMatch.description}</p>
                                            </div>

                                            {/* Origin & History */}
                                            {flavorMatch.origin && (
                                                <div className="mb-3 p-2 bg-amber-50 rounded-lg">
                                                    <div className="flex items-center gap-1.5 mb-1">
                                                        <span className="text-[10px] uppercase font-bold text-amber-700">📍 Origin</span>
                                                    </div>
                                                    <p className="text-xs text-amber-900">{flavorMatch.origin}</p>
                                                </div>
                                            )}

                                            {/* Technical Implementation */}
                                            {flavorMatch.technicalNotes && (
                                                <div className="mb-3 p-2 bg-blue-50 rounded-lg">
                                                    <div className="flex items-center gap-1.5 mb-1">
                                                        <span className="text-[10px] uppercase font-bold text-blue-700">🔬 Implementation</span>
                                                    </div>
                                                    <p className="text-xs text-blue-900">{flavorMatch.technicalNotes}</p>
                                                </div>
                                            )}

                                            {/* Classic Combinations */}
                                            {flavorMatch.classicCombinations && flavorMatch.classicCombinations.length > 0 && (
                                                <div className="mb-3 p-2 bg-purple-50 rounded-lg">
                                                    <div className="flex items-center gap-1.5 mb-1">
                                                        <span className="text-[10px] uppercase font-bold text-purple-700">💡 Classic Pairings</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1">
                                                        {flavorMatch.classicCombinations.slice(0, 3).map((combo, i) => (
                                                            <span key={i} className="text-[10px] px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded">
                                                                {combo}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Application Moment */}
                                            <div className="mb-3 flex items-center gap-2">
                                                <span className="text-[10px] uppercase font-bold text-slate-400">⏰ Application:</span>
                                                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${flavorMatch.applicationMoment === 'post_oven'
                                                    ? 'bg-purple-100 text-purple-700'
                                                    : 'bg-orange-100 text-orange-700'
                                                    }`}>
                                                    {flavorMatch.applicationMoment === 'post_oven' ? 'After Baking' : 'Before Baking'}
                                                </span>
                                            </div>

                                            {/* References */}
                                            {flavorMatch.references && flavorMatch.references.length > 0 && (
                                                <div className="pt-2 border-t border-slate-100">
                                                    <div className="flex items-center gap-1.5 mb-1.5">
                                                        <span className="text-[10px] uppercase font-bold text-slate-400">📚 References</span>
                                                    </div>
                                                    <div className="space-y-1">
                                                        {flavorMatch.references.slice(0, 2).map((ref, i) => (
                                                            <div key={i} className="text-[10px]">
                                                                <span className="text-blue-600 font-medium">{ref.title}</span>
                                                                {ref.summary && (
                                                                    <p className="text-slate-500 mt-0.5 italic">{ref.summary}</p>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Arrow pointer */}
                                            <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-r border-b border-slate-200 transform rotate-45"></div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Recommendations */}
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t('calculator.recommended_for_style', { style: t(style.name) })}</h4>
                    <SimpleTooltip
                        content={t('calculator.try_these_first')}
                        icon="⭐"
                    >
                        <InformationCircleIcon className="h-3.5 w-3.5 text-slate-300 cursor-help hover:text-lime-500 transition-colors" />
                    </SimpleTooltip>
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {available.slice(0, 6).map(inc => (
                        <div key={inc.id} className="flex items-center gap-1">
                            <button
                                onClick={() => handleAddOfficial(inc.id)}
                                className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition text-xs font-medium text-slate-600 hover:text-emerald-700"
                            >
                                <PlusIcon className="h-3 w-3" />
                                {inc.visibleName}
                            </button>
                            {getFlavorMatch(inc.id) && (
                                <button
                                    onClick={() => setSelectedFlavorComponent(getFlavorMatch(inc.id)!)}
                                    className="p-1 rounded-full hover:bg-orange-50 text-slate-300 hover:text-orange-500 transition"
                                    title="View Profile"
                                >
                                    <InformationCircleIcon className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Create Custom - Prominent Button with Didactic Tooltip */}
            <div className="pt-2 border-t border-slate-100">
                <div className="group relative">
                    <button
                        onClick={() => setIsCreatorOpen(true)}
                        className="w-full py-2.5 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white rounded-lg font-bold text-sm shadow-lg shadow-lime-500/25 hover:shadow-lime-500/40 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                    >
                        <BeakerIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        {t('calculator.create_custom_ingredient')}
                        <span className="text-xs opacity-75">{t('calculator.browse_library')}</span>
                    </button>
                    <DidacticTooltip
                        title={t('calculator.create_your_own')}
                        description={t('calculator.ai_simple_explanation')}
                        example="Want pineapple? Bacon? Anything you can imagine!"
                        tip={t('calculator.browse_all')}
                        visual={{
                            icon: '🧪',
                            label: "Click to explore 40+ ingredients or create your own"
                        }}
                    />
                </div>
            </div>

            <IngredientCreatorModal
                isOpen={isCreatorOpen}
                onClose={() => setIsCreatorOpen(false)}
                currentStyle={style}
                onSave={handleAddCustom}
            />

            <FlavorComponentProfileModal
                isOpen={!!selectedFlavorComponent}
                onClose={() => setSelectedFlavorComponent(null)}
                component={selectedFlavorComponent}
            />
        </div>
    );
};
