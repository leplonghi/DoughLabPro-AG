
import React, { useState, useEffect } from 'react';
import { DoughStyleDefinition } from '@/types/styles';
import { Increment, UserIngredient } from '@/types/ingredients';
import { IngredientAIService } from '@/services/IngredientAIService';
import { officialIncrements } from '@/data/ingredients/official';
import IngredientCreatorModal from './IngredientCreatorModal';
import { PlusIcon, TrashIcon, ExclamationTriangleIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

interface AssemblySectionProps {
    style: DoughStyleDefinition;
    selectedIncrements: (Increment | UserIngredient)[];
    onUpdateIncrements: (increments: (Increment | UserIngredient)[]) => void;
    bakingTempC: number;
}

export const AssemblySection: React.FC<AssemblySectionProps> = ({ style, selectedIncrements, onUpdateIncrements, bakingTempC }) => {
    const [isCreatorOpen, setIsCreatorOpen] = useState(false);
    const [health, setHealth] = useState<{ status: 'healthy' | 'warning' | 'critical', alerts: string[] }>({ status: 'healthy', alerts: [] });

    // Validate assembly whenever selection changes
    useEffect(() => {
        const result = IngredientAIService.checkAssemblyHealth(style, selectedIncrements, bakingTempC);
        setHealth(result);
    }, [selectedIncrements, style, bakingTempC]);

    const handleAddOfficial = (id: string) => {
        const inc = officialIncrements.find(i => i.id === id);
        if (inc && !selectedIncrements.find(existing => existing.id === id)) {
            onUpdateIncrements([...selectedIncrements, inc]);
        }
    };

    const handleAddCustom = (newIngredient: UserIngredient) => {
        onUpdateIncrements([...selectedIncrements, newIngredient]);
        setIsCreatorOpen(false);
    };

    const handleRemove = (id: string) => {
        onUpdateIncrements(selectedIncrements.filter(i => i.id !== id));
    };

    // Filter recommended items (Mock logic: if style has recommended list, use it. Else show some defaults)
    // For now, since most styles don't have recommendedIncrements populated yet, I'll just show all official ones that are 'validated' for this style.
    const recommended = officialIncrements.filter(inc => {
        const status = inc.compatibilityByStyle[style.id];
        // If explicitly recommended in style definition (future proofing)
        if (style.recommendedIncrements?.includes(inc.id)) return true;
        // Or if validated in increment definition
        return status === 'validated';
    });

    // Items available to add (not already selected)
    const available = recommended.filter(inc => !selectedIncrements.find(s => s.id === inc.id));

    return (
        <div className="space-y-6 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-800">Assembly Lab</h3>
                    <p className="text-sm text-slate-500">Construct your final product profile</p>
                </div>
                {/* Health Status Indicator */}
                <div className={`px-3 py-1 rounded-full flex items-center gap-2 text-sm font-bold border ${health.status === 'healthy' ? 'bg-emerald-50 border-emerald-100 text-emerald-700' :
                    health.status === 'warning' ? 'bg-amber-50 border-amber-100 text-amber-700' :
                        'bg-red-50 border-red-100 text-red-700'
                    }`}>
                    {health.status === 'healthy' && <ShieldCheckIcon className="h-4 w-4" />}
                    {health.status !== 'healthy' && <ExclamationTriangleIcon className="h-4 w-4" />}
                    <span className="capitalize">{health.status} Status</span>
                </div>
            </div>

            {/* Alert Box */}
            {health.alerts.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-sm space-y-1">
                    {health.alerts.map((alert, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                            <ExclamationTriangleIcon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>{alert}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Selected Ingredients List (The "Stack") */}
            <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Current Stack</h4>
                {selectedIncrements.length === 0 ? (
                    <div className="text-center py-6 border-2 border-dashed border-slate-100 rounded-xl">
                        <p className="text-sm text-slate-400">No ingredients added yet. Start with the basics.</p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        {selectedIncrements.map(item => (
                            <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 group hover:border-lime-200 transition">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 uppercase">
                                        {item.visibleName.substring(0, 2)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-700 text-sm">{item.visibleName}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] uppercase text-slate-400">{item.category}</span>
                                            {/* Compatibility Badge */}
                                            {(() => {
                                                const comp = item.compatibilityByStyle[style.id];
                                                if (comp === 'experimental') return <span className="text-[10px] text-amber-600 font-bold">• Experimental</span>;
                                                // if (comp === 'variation') return <span className="text-[10px] text-yellow-600 font-bold">• Variation</span>;
                                                return null;
                                            })()}
                                            {/* User badge */}
                                            {item.source === 'user' && <span className="text-[10px] text-violet-600 font-bold">• Custom</span>}
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => handleRemove(item.id)} className="text-slate-300 hover:text-red-500 transition">
                                    <TrashIcon className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Recommendations / Add Section */}
            <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recommended for {style.name}</h4>
                <div className="flex flex-wrap gap-2">
                    {available.map(inc => (
                        <button
                            key={inc.id}
                            onClick={() => handleAddOfficial(inc.id)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition text-sm font-medium text-slate-600 hover:text-emerald-700"
                        >
                            <PlusIcon className="h-3 w-3" />
                            {inc.visibleName}
                            <CheckBadgeIcon className="h-4 w-4 text-emerald-500" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100">
                <button
                    onClick={() => setIsCreatorOpen(true)}
                    className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 font-bold hover:border-lime-400 hover:text-lime-600 hover:bg-lime-50 transition flex items-center justify-center gap-2"
                >
                    <PlusIcon className="h-5 w-5" />
                    Create Custom Ingredient
                </button>
            </div>

            <IngredientCreatorModal
                isOpen={isCreatorOpen}
                onClose={() => setIsCreatorOpen(false)}
                currentStyle={style}
                onSave={handleAddCustom}
            />
        </div>
    );
};
