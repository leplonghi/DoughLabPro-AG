import React, { useState } from 'react';
import { TrashIcon, CloseIcon, PlusCircleIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

export const ToppingPlannerModal: React.FC<{ onClose: () => void; totalBalls: number; }> = ({ onClose, totalBalls }) => {
    const { t } = useTranslation();
    const [flavors, setFlavors] = useState<{ name: string, ingredients: { name: string, amount: string }[], assignedBalls: number }[]>([{ name: 'Flavor 1', ingredients: [{ name: '', amount: '' }], assignedBalls: totalBalls }]);
    const [results, setResults] = useState<Record<string, number> | null>(null);

    const allocatedBalls = flavors.reduce((sum, item) => sum + item.assignedBalls, 0);
    const remainingBalls = totalBalls - allocatedBalls;

    const handleFlavorChange = (index: number, field: string, value: string | number) => {
        const newFlavors = [...flavors];
        if (field === 'name') {
            // @ts-ignore
            newFlavors[index].name = value as string;
        } else if (field === 'assignedBalls') {
            const newCount = Number(value);
            const countDiff = newCount - newFlavors[index].assignedBalls;
            if (countDiff <= remainingBalls) {
                newFlavors[index].assignedBalls = Math.max(0, newCount);
            }
        }
        setFlavors(newFlavors);
    };

    const handleIngredientChange = (flavorIndex: number, ingIndex: number, field: string, value: string) => {
        const newFlavors = [...flavors];
        // @ts-ignore
        newFlavors[flavorIndex].ingredients[ingIndex] = { ...newFlavors[flavorIndex].ingredients[ingIndex], [field]: value };
        setFlavors(newFlavors);
    };

    const addIngredient = (flavorIndex: number) => {
        const newFlavors = [...flavors];
        newFlavors[flavorIndex].ingredients.push({ name: '', amount: '' });
        setFlavors(newFlavors);
    };

    const removeIngredient = (flavorIndex: number, ingIndex: number) => {
        const newFlavors = [...flavors];
        newFlavors[flavorIndex].ingredients.splice(ingIndex, 1);
        setFlavors(newFlavors);
    };

    const addFlavor = () => {
        if (remainingBalls > 0) {
            setFlavors([...flavors, { name: `Flavor ${flavors.length + 1}`, ingredients: [{ name: '', amount: '' }], assignedBalls: 1 }]);
        }
    };

    const removeFlavor = (index: number) => {
        setFlavors(flavors.filter((_, i) => i !== index));
    };

    const calculateToppings = () => {
        const consolidated: Record<string, number> = {};
        flavors.forEach(flavor => {
            flavor.ingredients.forEach(ing => {
                const amount = parseFloat(ing.amount);
                if (ing.name && !isNaN(amount)) {
                    consolidated[ing.name] = (consolidated[ing.name] || 0) + (amount * flavor.assignedBalls);
                }
            });
        });
        setResults(consolidated);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div className="relative w-full max-w-3xl bg-white rounded-2xl p-6 shadow-xl" onClick={e => e.stopPropagation()}>
                <h2 className="text-xl font-bold mb-4">{t('general.ingredients_planner')}</h2>
                <div className="p-3 rounded-lg bg-slate-100 text-center font-semibold mb-4">
                    Total Pieces in Bake: {totalBalls}
                </div>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    {flavors.map((flavor, flavorIndex) => (
                        <div key={flavorIndex} className="p-4 border rounded-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <input type="text" value={flavor.name} onChange={e => handleFlavorChange(flavorIndex, 'name', e.target.value)} className="font-semibold text-lg flex-grow border-0 p-1 focus:ring-0" />
                                <input type="number" value={flavor.assignedBalls} onChange={e => handleFlavorChange(flavorIndex, 'assignedBalls', e.target.value)} className="w-20 rounded-md border-slate-300 text-sm" />
                                {flavors.length > 1 && <button onClick={() => removeFlavor(flavorIndex)}><TrashIcon className="h-5 w-5 text-red-500" /></button>}
                            </div>
                            <div className="space-y-2">
                                {flavor.ingredients.map((ing, ingIndex) => (
                                    <div key={ingIndex} className="flex items-center gap-2">
                                        <input type="text" value={ing.name} onChange={e => handleIngredientChange(flavorIndex, ingIndex, 'name', e.target.value)} placeholder={t('general.ingredient')} className="flex-grow rounded-md border-slate-300 text-sm" />
                                        <input type="text" value={ing.amount} onChange={e => handleIngredientChange(flavorIndex, ingIndex, 'amount', e.target.value)} placeholder={t('general.qtyunit')} className="w-24 rounded-md border-slate-300 text-sm" />
                                        {flavor.ingredients.length > 1 && <button onClick={() => removeIngredient(flavorIndex, ingIndex)}><CloseIcon className="h-4 w-4 text-slate-400" /></button>}
                                    </div>
                                ))}
                                <button onClick={() => addIngredient(flavorIndex)} className="text-xs font-semibold text-lime-600 flex items-center gap-1"><PlusCircleIcon className="h-4 w-4" />{t('common.add_ingredient')}</button>
                            </div>
                        </div>
                    ))}
                    <button onClick={addFlavor} disabled={remainingBalls <= 0} className="w-full text-sm font-semibold text-lime-600 flex items-center justify-center gap-1 p-2 border-2 border-dashed rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"><PlusCircleIcon className="h-5 w-5" />{t('common.add_variation')}</button>
                </div>

                <button onClick={calculateToppings} disabled={remainingBalls !== 0} className="mt-4 w-full bg-lime-500 text-white font-semibold py-2 rounded-lg disabled:bg-slate-400 disabled:cursor-not-allowed">
                    {remainingBalls !== 0 ? `${remainingBalls} piece(s) remaining to allocate` : 'Calculate Shopping List'}
                </button>

                {results && (
                    <div className="mt-6 border-t pt-4">
                        <h3 className="font-bold">{t('ui.consolidated_shopping_list')}</h3>
                        <ul className="list-disc list-inside mt-2 text-sm columns-2">
                            {Object.entries(results).map(([name, total]) => (
                                <li key={name}><strong>{name}:</strong> {total} (units)</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
