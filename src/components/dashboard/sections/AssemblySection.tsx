
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
                        className="bg-white/60 dark:bg-black/20 backdrop-blur-sm p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/50 shadow-sm flex items-center gap-3 transition-all hover:bg-white/70 dark:hover:bg-black/30"
                    >
                        {/* Count Input */}
                        <div className="flex flex-col items-center">
                            <input
                                type="number"
                                min="1"
                                max={totalYield}
                                value={variant.count}
                                onChange={(e) => updateVariant(variant.id, { count: parseInt(e.target.value) || 0 })}
                                className="w-12 h-10 text-center bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-100 dark:border-emerald-800/50 font-mono font-bold text-lg text-emerald-900 dark:text-emerald-100 focus:ring-2 ring-emerald-500 outline-none"
                            />
                            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase mt-1 font-medium">Balls</span>
                        </div>

                        {/* Name Input & Flavor Selection */}
                        <div className="flex-1">
                            <input
                                type="text"
                                value={variant.name}
                                onChange={(e) => updateVariant(variant.id, { name: e.target.value })}
                                className="w-full bg-transparent border-b border-transparent hover:border-emerald-300 focus:border-emerald-500 outline-none p-1 text-sm font-bold text-emerald-900 dark:text-emerald-100 placeholder-emerald-800/40 transition-colors mb-2"
                                placeholder="Variant Name"
                            />

                            {/* Topping Preset Dropdown */}
                            <select
                                className="w-full text-xs bg-white/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/50 rounded p-1 outline-none focus:ring-1 focus:ring-emerald-500 text-emerald-800 dark:text-emerald-200"
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
                            className="text-emerald-400 hover:text-red-500 p-2 transition-colors"
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
                    className="w-full py-3 border-2 border-dashed border-emerald-300 dark:border-emerald-700 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-lg flex items-center justify-center gap-2 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/20 transition-all font-medium text-sm"
                >
                    <Plus size={16} />
                    Add Variant for Remaining {remainingCount} Balls
                </button>
            )}

            {variants.length === 0 && (
                <div className="text-center py-4">
                    <button
                        onClick={() => addVariant("Main Batch")}
                        className="text-emerald-600 hover:underline text-sm font-medium"
                    >
                        Initialize Batch
                    </button>
                </div>
            )}

        </div>
    );
};
