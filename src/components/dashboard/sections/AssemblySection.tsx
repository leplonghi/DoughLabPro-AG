
import React from 'react';
import { useBatchVariants } from '@/hooks/useBatchVariants';
import { Plus, Trash2 } from 'lucide-react';
import { TOPPING_COMBINATIONS } from '@/toppings-constants';

export const AssemblySection: React.FC = () => {
    const { variants, addVariant, removeVariant, updateVariant, validation } = useBatchVariants();
    const { isValid, remainingCount, totalYield } = validation;

    return (
        <div className="space-y-4">

            {/* Header / Validation Status */}
            <div className="flex justify-between items-center mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${isValid ? 'text-green-500' : 'text-amber-500'}`}>
                    {isValid ? 'Batch Balanced' : `Unallocated: ${remainingCount}`}
                </span>
                <span className="text-xs text-slate-400">Total: {totalYield} balls</span>
            </div>

            {/* Variants List */}
            <div className="space-y-3">
                {variants.map((variant) => (
                    <div
                        key={variant.id}
                        className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3"
                    >
                        {/* Count Input */}
                        <div className="flex flex-col items-center">
                            <input
                                type="number"
                                min="1"
                                max={totalYield}
                                value={variant.count}
                                onChange={(e) => updateVariant(variant.id, { count: parseInt(e.target.value) || 0 })}
                                className="w-12 h-10 text-center bg-slate-100 dark:bg-slate-900 rounded font-mono font-bold text-lg focus:ring-2 ring-orange-500 outline-none"
                            />
                            <span className="text-[10px] text-slate-400 uppercase mt-1">Balls</span>
                        </div>

                        {/* Name Input & Flavor Selection */}
                        <div className="flex-1">
                            <input
                                type="text"
                                value={variant.name}
                                onChange={(e) => updateVariant(variant.id, { name: e.target.value })}
                                className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-orange-500 outline-none p-1 text-sm font-medium transition-colors mb-2"
                                placeholder="Variant Name"
                            />

                            {/* Topping Preset Dropdown */}
                            <select
                                className="w-full text-xs bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded p-1 outline-none focus:ring-1 focus:ring-orange-500 text-slate-600 dark:text-slate-400"
                                value={variant.addOns[0]?.id || ""}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    const newAddons = val ? [{ id: val, qty: 1 }] : [];
                                    updateVariant(variant.id, { addOns: newAddons });
                                }}
                            >
                                <option value="">Select Flavor Preset...</option>
                                {TOPPING_COMBINATIONS.map(tc => (
                                    <option key={tc.id} value={tc.id}>
                                        {tc.name} ({tc.referenceTag})
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Actions */}
                        <button
                            onClick={() => removeVariant(variant.id)}
                            className="text-slate-400 hover:text-red-500 p-2 transition-colors"
                            disabled={variants.length === 1} // Prevent deleting last one for now or logic issues
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Add Button */}
            {!isValid && remainingCount > 0 && (
                <button
                    onClick={() => addVariant(`Variant ${variants.length + 1}`)}
                    className="w-full py-3 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center gap-2 text-slate-500 hover:text-slate-800 hover:border-slate-400 dark:hover:text-slate-200 transition-all font-medium text-sm"
                >
                    <Plus size={16} />
                    Add Variant for Remaining {remainingCount} Balls
                </button>
            )}

            {variants.length === 0 && (
                <div className="text-center py-4">
                    <button
                        onClick={() => addVariant("Main Batch")}
                        className="text-orange-500 hover:underline text-sm"
                    >
                        Initialize Batch
                    </button>
                </div>
            )}

        </div>
    );
};
