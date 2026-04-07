
import React, { useMemo } from 'react';
import { useCalculator } from '@/contexts/CalculatorContext';
import { useDoughSession } from '@/contexts/DoughSessionContext';
import { useTranslation } from '@/i18n';
import { useToppings } from '@/hooks/useToppings';
import { AffiliateIngredientLink } from '../../ui/AffiliateIngredientLink';
import { ShoppingBag, AlertTriangle } from 'lucide-react';

export const LogisticsSection: React.FC = () => {
    const { t } = useTranslation();
    const { config, results } = useCalculator();
    const { session, updateSettings } = useDoughSession();
    const { allToppings } = useToppings();
    const { settings, variants } = session;

    const safetyBuffer = settings.safetyBuffer;

    const handleBufferChange = (val: 0 | 10 | 20) => {
        updateSettings({ safetyBuffer: val });
    };

    const finalIngredients = useMemo(() => {
        if (!results?.ingredientWeights) return [];

        const multiplier = 1 + (safetyBuffer / 100);
        const totalYield = config.numPizzas || 0;

        // 1. Start with Dough Ingredients
        const combined = results.ingredientWeights.map(ing => ({
            id: ing.id,
            name: ing.name,
            weight: ing.weight * multiplier,
            type: 'dough'
        }));

        // 2. Aggregate Toppings
        const toppingAgg: Record<string, number> = {};

        if (variants.length > 0) {
            // Use Production Variants
            variants.forEach(v => {
                const presetId = v.addOns[0]?.id;
                const preset = allToppings.find(t => t.id === presetId);
                if (preset && preset.sizes) {
                    const sizeRef = preset.sizes[0];
                    if (sizeRef) {
                        const count = v.count;
                        if (sizeRef.sauceGrams) toppingAgg['Pizza Sauce'] = (toppingAgg['Pizza Sauce'] || 0) + sizeRef.sauceGrams * count;
                        if (sizeRef.cheeseGrams) toppingAgg['Mozzarella Cheese'] = (toppingAgg['Mozzarella Cheese'] || 0) + sizeRef.cheeseGrams * count;
                        if (sizeRef.toppingsGrams) toppingAgg['Toppings (Generic)'] = (toppingAgg['Toppings (Generic)'] || 0) + sizeRef.toppingsGrams * count;
                    }
                }
            });
        } else if (config.assemblyIncrements && config.assemblyIncrements.length > 0) {
            // Fallback to Lab Assembly (Step 6) if no production variants
            config.assemblyIncrements.forEach(inc => {
                const weightPerUnit = (inc as any).grams || 0;
                if (weightPerUnit > 0) {
                    toppingAgg[inc.name] = (toppingAgg[inc.name] || 0) + weightPerUnit * totalYield;
                }
            });
        }

        // 3. Merge Toppings into List
        Object.entries(toppingAgg).forEach(([name, weight]) => {
            if (weight > 0) {
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
                <label className="text-xs uppercase tracking-wider text-slate-400 font-bold">Inventory Safety Buffer</label>
                <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                    {[0, 10, 20].map((val) => (
                        <button
                            key={val}
                            onClick={() => handleBufferChange(val as any)}
                            className={`
                                flex-1 py-2 px-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200
                                ${safetyBuffer === val
                                    ? 'bg-[#51a145] text-white shadow-md'
                                    : 'text-slate-400 hover:text-[#51a145] hover:bg-white'}
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
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                        <ShoppingBag size={14} className="text-[#51a145]" />
                        Shopping List
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Values in Grams</span>
                </div>

                <div className="divide-y divide-slate-50">
                    {finalIngredients.map((ing) => (
                        <div key={ing.id} className="flex justify-between items-center px-4 py-3 hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className={`w-2 h-2 rounded-full ${ing.type === 'topping' ? 'bg-orange-400' : 'bg-[#51a145]'}`}></span>
                                <AffiliateIngredientLink
                                    ingredientName={t(ing.name) || ing.name}
                                    className="text-sm font-bold text-slate-700 hover:text-[#51a145]"
                                    showIcon
                                />
                            </div>
                            <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded text-xs">
                                {Math.round(ing.weight)}g
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};


