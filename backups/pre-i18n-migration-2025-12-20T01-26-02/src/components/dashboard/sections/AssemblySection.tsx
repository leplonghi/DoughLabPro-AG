
import React, { useState } from 'react';
import { useBatchVariants } from '@/hooks/useBatchVariants';
import { Plus, Trash2, PlusCircle } from 'lucide-react';
import { useToppings } from '@/hooks/useToppings';
import { ToppingCreatorModal } from '../ToppingCreatorModal';

export const AssemblySection: React.FC = () => {
    const { variants, addVariant, removeVariant, updateVariant, validation } = useBatchVariants();
    const { allToppings, addCustomTopping } = useToppings();
    const { isValid, remainingCount, totalYield } = validation;
    const [isToppingModalOpen, setIsToppingModalOpen] = useState(false);

    return (
        <div className="space-y-4">

            {/* Header / Validation Status */}
            <div className="flex justify-between items-center mb-2 px-1">
                <span className={`text-xs font-bold uppercase tracking-wider ${isValid ? 'text-[#51a145]' : 'text-amber-500'}`}>
                    {isValid ? 'Batch Balanced' : `Unallocated: ${remainingCount}`}
                </span>
                <span className="text-xs font-medium text-slate-400">Total: {totalYield} balls</span>
            </div>

            {/* Variants List */}
            <div className="space-y-3">
                {variants.map((variant) => (
                    <div
                        key={variant.id}
                        className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 transition-all hover:shadow-md"
                    >
                        {/* Count Input */}
                        <div className="flex flex-col items-center">
                            <input
                                type="number"
                                min="1"
                                max={totalYield}
                                value={variant.count}
                                onChange={(e) => updateVariant(variant.id, { count: parseInt(e.target.value) || 0 })}
                                className="w-12 h-10 text-center bg-slate-50 rounded-lg border border-slate-200 font-mono font-bold text-lg text-slate-800 focus:ring-2 ring-[#51a145] outline-none"
                            />
                            <span className="text-[9px] text-slate-400 uppercase mt-1 font-bold tracking-wider">Balls</span>
                        </div>

                        {/* Name Input & Flavor Selection */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between gap-2 mb-2">
                                <input
                                    type="text"
                                    value={variant.name}
                                    onChange={(e) => updateVariant(variant.id, { name: e.target.value })}
                                    className="flex-1 bg-transparent border-b border-transparent hover:border-slate-200 focus:border-[#51a145] outline-none p-1 text-sm font-bold text-slate-800 placeholder-slate-300 transition-colors"
                                    placeholder="Variant Name"
                                />
                            </div>

                            {/* Topping Preset Dropdown */}
                            <div className="flex gap-2">
                                <select
                                    className="flex-1 text-xs bg-slate-50 border border-slate-200 rounded-lg p-1.5 outline-none focus:ring-1 focus:ring-[#51a145] text-slate-600 font-medium"
                                    value={variant.addOns[0]?.id || ""}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        const newAddons = val ? [{ id: val, qty: 1 }] : [];
                                        updateVariant(variant.id, { addOns: newAddons });
                                    }}
                                >
                                    <option value="">Select Flavor Preset...</option>
                                    {allToppings.map(tc => (
                                        <option key={tc.id} value={tc.id}>
                                            {tc.name} ({tc.referenceTag})
                                        </option>
                                    ))}
                                </select>
                                <button
                                    onClick={() => setIsToppingModalOpen(true)}
                                    className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 hover:text-[#51a145] hover:border-[#51a145] transition-colors"
                                    title="Add New Preset"
                                >
                                    <PlusCircle size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Actions */}
                        <button
                            onClick={() => removeVariant(variant.id)}
                            className="text-slate-300 hover:text-red-500 p-2 transition-colors"
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
                    className="w-full py-3 border-2 border-dashed border-emerald-200 bg-emerald-50 rounded-xl flex items-center justify-center gap-2 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300 transition-all font-bold text-xs uppercase tracking-wider"
                >
                    <Plus size={16} />
                    Add Variant for Remaining {remainingCount} Balls
                </button>
            )}

            {variants.length === 0 && (
                <div className="text-center py-4">
                    <button
                        onClick={() => addVariant("Main Batch")}
                        className="text-[#51a145] hover:underline text-sm font-medium"
                    >
                        Initialize Batch
                    </button>
                </div>
            )}

            <ToppingCreatorModal
                isOpen={isToppingModalOpen}
                onClose={() => setIsToppingModalOpen(false)}
                onSave={addCustomTopping}
            />

        </div>
    );
};


