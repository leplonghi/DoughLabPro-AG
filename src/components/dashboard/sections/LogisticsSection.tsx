
import React, { useMemo } from 'react';
import { useCalculator } from '@/contexts/CalculatorContext';
import { useDoughSession } from '@/contexts/DoughSessionContext';
import { AffiliateIngredientLink } from '../../ui/AffiliateIngredientLink';
import { ShoppingBag, AlertTriangle } from 'lucide-react';
import { TOPPING_COMBINATIONS } from '@/toppings-constants';

export const LogisticsSection: React.FC = () => {
    const { results } = useCalculator();
    const { session, updateSettings } = useDoughSession();
    const { settings, variants } = session;

    const safetyBuffer = settings.safetyBuffer;

    const handleBufferChange = (val: 0 | 10 | 20) => {
        updateSettings({ safetyBuffer: val });
    };

    const finalIngredients = useMemo(() => {
        if (!results?.ingredientWeights) return [];

        // 1. Start with Dough Ingredients
        const multiplier = 1 + (safetyBuffer / 100);

        const combined = results.ingredientWeights.map(ing => ({
            id: ing.id,
            name: ing.name,
            weight: ing.weight * multiplier,
            type: 'dough'
        }));

        // 2. Aggregate Variant Toppings
        // Iterate variants -> check addons -> lookup toppings-constants -> sum up sauce/cheese
        const toppingAgg: Record<string, number> = {
            'Pizza Sauce': 0,
            'Mozzarella Cheese': 0,
            'Toppings (Generic)': 0
        };

        variants.forEach(v => {
            const presetId = v.addOns[0]?.id;
            const preset = TOPPING_COMBINATIONS.find(t => t.id === presetId);

            if (preset && preset.sizes) {
                // Approximate size match or pick first?
                // DoughConfig has "doughBallWeight".
                // We should guess size from weight (e.g. 250g ~ 30cm).
                // Or just pick the first size ref for rough estimation.
                const sizeRef = preset.sizes[0]; // simplistic V1

                if (sizeRef) {
                    const count = v.count;
                    if (sizeRef.sauceGrams) toppingAgg['Pizza Sauce'] += sizeRef.sauceGrams * count;
                    if (sizeRef.cheeseGrams) toppingAgg['Mozzarella Cheese'] += sizeRef.cheeseGrams * count;
                    if (sizeRef.toppingsGrams) toppingAgg['Toppings (Generic)'] += sizeRef.toppingsGrams * count;
                }
            }
        });

        // 3. Merge Toppings into List
        Object.entries(toppingAgg).forEach(([name, weight]) => {
            if (weight > 0) {
                // Apply buffer to toppings too? Yes, usually good.
                const bufferedWeight = weight * multiplier;
                combined.push({
                    id: `topping-${name.toLowerCase().replace(/\s/g, '-')}`,
                    name: name,
                    weight: bufferedWeight,
                    type: 'topping'
                });
            }
        });

        return combined;

    }, [results, safetyBuffer, variants]);

    if (!finalIngredients.length) return <div className="p-4 text-center text-slate-500">Calculate dough to see logistics.</div>;

    return (
        <div className="space-y-6">

            {/* Safety Buffer Toggles */}
            <div className="flex flex-col space-y-2">
                <label className="text-xs uppercase tracking-wider text-slate-500">Inventory Safety Buffer</label>
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                    {[0, 10, 20].map((val) => (
                        <button
                            key={val}
                            onClick={() => handleBufferChange(val as any)}
                            className={`
                                flex-1 py-1 px-3 text-xs font-medium rounded-md transition-all
                                ${safetyBuffer === val
                                    ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white'
                                    : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}
                            `}
                        >
                            {val === 0 ? 'Exact' : `+${val}% ${val === 20 ? 'Party' : 'Safe'}`}
                        </button>
                    ))}
                </div>
                {safetyBuffer > 0 && (
                    <p className="text-[10px] text-slate-400 flex items-center gap-1">
                        <AlertTriangle size={10} />
                        Includes extra margin for spillage/waste.
                    </p>
                )}
            </div>

            {/* Shopping List Table */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="bg-slate-50 dark:bg-slate-800/50 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                        <ShoppingBag size={14} />
                        Shopping List
                    </span>
                    <span className="text-[10px] text-slate-400 italic">Values in Grams</span>
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {finalIngredients.map((ing) => (
                        <div key={ing.id} className="flex justify-between items-center px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${ing.type === 'topping' ? 'bg-orange-400' : 'bg-slate-400'}`}></span>
                                <AffiliateIngredientLink
                                    ingredientName={ing.name}
                                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                                    showIcon
                                />
                            </div>
                            <span className="font-mono font-bold text-slate-900 dark:text-white">
                                {Math.round(ing.weight)}g
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};
