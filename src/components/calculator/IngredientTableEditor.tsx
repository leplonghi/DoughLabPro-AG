import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Save, X, MoreVertical, AlertCircle } from 'lucide-react';
import { IngredientConfig } from '@/types';
import { useTranslation } from '@/i18n';

interface IngredientTableEditorProps {
    ingredients: IngredientConfig[];
    onChange: (ingredients: IngredientConfig[]) => void;
    totalFlour: number;
}

export const IngredientTableEditor: React.FC<IngredientTableEditorProps> = ({ ingredients, onChange, totalFlour }) => {
    const { t } = useTranslation();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState<Partial<IngredientConfig>>({});
    const [isAdding, setIsAdding] = useState(false);

    // Calculate effective weight for display
    const calculateWeight = (pct: number) => ((pct / 100) * totalFlour).toFixed(1);

    const handleAdd = () => {
        setIsAdding(true);
        setEditingId(null);
        setEditForm({
            name: '',
            bakerPercentage: 0,
            type: 'solid',
            role: 'other',
            manualOverride: true
        });
    };

    const handleEdit = (ing: IngredientConfig) => {
        setEditingId(ing.id);
        setIsAdding(false);
        setEditForm({ ...ing });
    };

    const handleDelete = (id: string) => {
        onChange(ingredients.filter(i => i.id !== id));
    };

    const handleSave = () => {
        if (!editForm.name || editForm.bakerPercentage === undefined) return;

        if (isAdding) {
            const newIngredient: IngredientConfig = {
                id: `custom_${Date.now()}`,
                name: editForm.name,
                type: editForm.type || 'solid',
                bakerPercentage: Number(editForm.bakerPercentage),
                role: editForm.role || 'other',
                manualOverride: true,
                ...editForm
            } as IngredientConfig;
            onChange([...ingredients, newIngredient]);
        } else if (editingId) {
            onChange(ingredients.map(ing => ing.id === editingId ? { ...ing, ...editForm } as IngredientConfig : ing));
        }

        cleanup();
    };

    const cleanup = () => {
        setEditingId(null);
        setIsAdding(false);
        setEditForm({});
    };

    const handleChange = (field: keyof IngredientConfig, value: any) => {
        setEditForm(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="w-full bg-dlp-bg-card border border-dlp-border rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 bg-dlp-bg-muted/30 border-b border-dlp-border flex justify-between items-center">
                <h4 className="font-bold text-sm text-dlp-text-primary uppercase tracking-wide">{t('calculator.custom_ingredients')}</h4>
                <button
                    onClick={handleAdd}
                    disabled={isAdding}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-dlp-accent text-white rounded-lg text-xs font-bold hover:bg-dlp-accent-hover transition-colors disabled:opacity-50"
                >
                    <Plus className="w-3.5 h-3.5" />{t('calculator.add_new')}</button>
            </div>

            <div className="divide-y divide-dlp-border">
                {/* List Header */}
                <div className="grid grid-cols-12 gap-2 p-3 bg-dlp-bg-muted/50 text-[10px] uppercase font-bold text-dlp-text-muted select-none">
                    <div className="col-span-5 pl-2">{t('calculator.ingredient')}</div>
                    <div className="col-span-3 text-right">{t('calculator.percentage')}</div>
                    <div className="col-span-3 text-right">{t('calculator.weight')}</div>
                    <div className="col-span-1"></div>
                </div>

                {/* Empty State */}
                {!isAdding && ingredients.length === 0 && (
                    <div className="p-8 text-center text-dlp-text-muted italic text-sm">
                        {t('calculator.no_custom_ingredients_added_yet')}
                    </div>
                )}

                {/* Filtered Ingredients List */}
                {ingredients
                    .filter(ing => {
                        // Always hide base flour (it's 100% base)
                        if (ing.role === 'flour' && !ing.manualOverride) return false;

                        // Hide standard ingredients that are handled by sliders (unless manual override is on)
                        if (!ing.manualOverride) {
                            if (['water', 'salt', 'yeast', 'starter', 'fat', 'sugar'].includes(ing.role || '')) {
                                return false;
                            }
                        }
                        return true;
                    })
                    .map(ing => (
                        <div key={ing.id} className={`grid grid-cols-12 gap-2 p-3 items-center group transition-colors ${editingId === ing.id ? 'bg-dlp-accent/5' : 'hover:bg-dlp-bg-muted/30'}`}>

                            {editingId === ing.id ? (
                                // Edit Mode
                                <>
                                    <div className="col-span-5">
                                        <input
                                            autoFocus
                                            type="text"
                                            value={t(editForm.name || '')}
                                            onChange={e => handleChange('name', e.target.value)}
                                            className="w-full px-2 py-1 text-sm border border-dlp-border rounded focus:border-dlp-accent focus:ring-1 focus:ring-dlp-accent outline-none bg-white text-dlp-text-primary"
                                            placeholder={t('calculator.name')}
                                        />
                                        <div className="flex gap-2 mt-1">
                                            <select
                                                value={editForm.role}
                                                onChange={e => handleChange('role', e.target.value)}
                                                className="text-[10px] border border-dlp-border rounded px-1 py-0.5 bg-dlp-bg-muted text-dlp-text-secondary"
                                            >
                                                <option value="other">{t('calculator.other')}</option>
                                                <option value="flour">{t('results.flour')}</option>
                                                <option value="fat">{t('calculator.fat')}</option>
                                                <option value="sugar">{t('results.sugar')}</option>
                                                <option value="salt">{t('results.salt')}</option>
                                            </select>
                                            <select
                                                value={editForm.type}
                                                onChange={e => handleChange('type', e.target.value)}
                                                className="text-[10px] border border-dlp-border rounded px-1 py-0.5 bg-dlp-bg-muted text-dlp-text-secondary"
                                            >
                                                <option value="solid">{t('calculator.solid')}</option>
                                                <option value="liquid">{t('calculator.liquid')}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-span-3 flex justify-end">
                                        <div className="relative w-24">
                                            <input
                                                type="number"
                                                step="0.1"
                                                value={editForm.bakerPercentage}
                                                onChange={e => handleChange('bakerPercentage', parseFloat(e.target.value))}
                                                className="w-full px-2 py-1 pr-6 text-sm text-right border border-dlp-border rounded focus:border-dlp-accent focus:ring-1 focus:ring-dlp-accent outline-none bg-white font-mono text-dlp-text-primary"
                                            />
                                            <span className="absolute right-2 top-1.5 text-xs text-dlp-text-muted">%</span>
                                        </div>
                                    </div>
                                    <div className="col-span-3 text-right text-sm font-mono text-dlp-text-muted opacity-50">
                                        {calculateWeight(Number(editForm.bakerPercentage || 0))}g
                                    </div>
                                    <div className="col-span-1 flex justify-end gap-1">
                                        <button onClick={handleSave} className="p-1.5 text-dlp-success hover:bg-dlp-success/10 rounded transition-colors"><Save className="w-4 h-4" /></button>
                                        <button onClick={cleanup} className="p-1.5 text-dlp-error hover:bg-dlp-error/10 rounded transition-colors"><X className="w-4 h-4" /></button>
                                    </div>
                                </>
                            ) : (
                                // View Mode
                                <>
                                    <div className="col-span-5 pl-2">
                                        <span className="block font-medium text-sm text-dlp-text-primary">{t(ing.name)}</span>
                                        {ing.role !== 'other' && <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-dlp-bg-muted text-dlp-text-muted uppercase font-bold tracking-wider">{ing.role}</span>}
                                    </div>
                                    <div className="col-span-3 text-right">
                                        <span className="font-mono font-bold text-sm text-dlp-text-primary">{ing.bakerPercentage}%</span>
                                    </div>
                                    <div className="col-span-3 text-right">
                                        <span className="font-mono text-sm text-dlp-text-secondary">{calculateWeight(ing.bakerPercentage)}g</span>
                                    </div>
                                    <div className="col-span-1 flex justify-end gap-1 opacity-10 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => handleEdit(ing)} className="p-1.5 text-dlp-text-secondary hover:text-dlp-accent hover:bg-dlp-bg-muted rounded transition-colors" title={t('common.edit')}>
                                            <Edit2 className="w-3.5 h-3.5" />
                                        </button>
                                        <button onClick={() => handleDelete(ing.id)} className="p-1.5 text-dlp-text-secondary hover:text-dlp-error hover:bg-red-50 rounded transition-colors" title={t('calculator.remove')}>
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}

                {/* Add New Form */}
                {isAdding && (
                    <div className="grid grid-cols-12 gap-2 p-3 items-start bg-dlp-accent/5 animate-fade-in-down border-t-2 border-dlp-accent/20">
                        <div className="col-span-5">
                            <input
                                autoFocus
                                type="text"
                                value={editForm.name}
                                onChange={e => handleChange('name', e.target.value)}
                                className="w-full px-2 py-1 text-sm border border-dlp-border rounded focus:border-dlp-accent focus:ring-1 focus:ring-dlp-accent outline-none bg-white text-dlp-text-primary placeholder:text-dlp-text-muted/50"
                                placeholder={t('calculator.new_ingredient_name')}
                            />
                            <div className="flex gap-2 mt-2">
                                <select
                                    value={editForm.role}
                                    onChange={e => handleChange('role', e.target.value)}
                                    className="text-[10px] border border-dlp-border rounded px-1 py-0.5 bg-white text-dlp-text-secondary"
                                >
                                    <option value="other">{t('calculator.other')}</option>
                                    <option value="flour">{t('results.flour')}</option>
                                    <option value="fat">{t('calculator.fat')}</option>
                                    <option value="sugar">{t('results.sugar')}</option>
                                    <option value="salt">{t('results.salt')}</option>
                                </select>
                                <select
                                    value={editForm.type}
                                    onChange={e => handleChange('type', e.target.value)}
                                    className="text-[10px] border border-dlp-border rounded px-1 py-0.5 bg-white text-dlp-text-secondary"
                                >
                                    <option value="solid">{t('calculator.solid')}</option>
                                    <option value="liquid">{t('calculator.liquid')}</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-3 flex justify-end">
                            <div className="relative w-24">
                                <input
                                    type="number"
                                    step="0.1"
                                    value={editForm.bakerPercentage}
                                    onChange={e => handleChange('bakerPercentage', parseFloat(e.target.value))}
                                    className="w-full px-2 py-1 pr-6 text-sm text-right border border-dlp-border rounded focus:border-dlp-accent focus:ring-1 focus:ring-dlp-accent outline-none bg-white font-mono text-dlp-text-primary"
                                    placeholder="0"
                                />
                                <span className="absolute right-2 top-1.5 text-xs text-dlp-text-muted">%</span>
                            </div>
                        </div>
                        <div className="col-span-3 text-right text-sm font-mono text-dlp-text-muted pt-1.5 opacity-60">
                            {calculateWeight(Number(editForm.bakerPercentage || 0))}g
                        </div>
                        <div className="col-span-1 flex flex-col justify-start gap-1">
                            <button onClick={handleSave} className="p-1.5 bg-dlp-success text-white rounded hover:bg-dlp-accent-hover transition-colors shadow-sm" title={t('common.add')}><Plus className="w-4 h-4" /></button>
                            <button onClick={cleanup} className="p-1.5 text-dlp-error hover:bg-dlp-error/10 rounded transition-colors" title={t('common.cancel')}><X className="w-4 h-4" /></button>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer / Helper Text */}
            <div className="bg-dlp-bg-muted/30 p-2 text-center border-t border-dlp-border">
                <p className="text-[10px] text-dlp-text-muted flex items-center justify-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {t('calculator.custom_ingredients_footer')}
                </p>
            </div>
        </div>
    );
};

export default IngredientTableEditor;
