
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X, Save, Plus, Trash2, Info } from 'lucide-react';
import { ToppingCombination, RecipeStyle } from '@/types';
import { useTranslation } from '@/i18n';

interface ToppingCreatorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (topping: Omit<ToppingCombination, 'id'>) => Promise<any>;
}

export const ToppingCreatorModal: React.FC<ToppingCreatorModalProps> = ({ isOpen, onClose, onSave }) => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [category, setCategory] = useState<'classic' | 'modern' | 'experimental'>('classic');
    const [sauceGrams, setSauceGrams] = useState(80);
    const [cheeseGrams, setCheeseGrams] = useState(100);
    const [toppingsGrams, setToppingsGrams] = useState(50);
    const [notes, setNotes] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
        if (!name) return;
        setIsSaving(true);
        try {
            const newTopping: Omit<ToppingCombination, 'id'> = {
                name,
                category,
                compatibleStyles: [RecipeStyle.NEAPOLITAN, RecipeStyle.NEW_YORK, RecipeStyle.PAN_PIZZA], // Broad compatibility by default
                sizes: [
                    {
                        sizeCm: 30, // Default size reference
                        sauceGrams,
                        cheeseGrams,
                        toppingsGrams,
                        oilFinishGrams: 5
                    }
                ],
                notes,
                referenceTag: t('ui.custom_428')
            };
            await onSave(newTopping);
            onClose();
            // Reset
            setName('');
            setNotes('');
        } catch (error) {
            console.error(error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[100]" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-white/40 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-6 shadow-2xl transition-all border border-slate-100">
                                <div className="flex justify-between items-center mb-6">
                                    <Dialog.Title as="h3" className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                        <Plus size={20} className="text-[#51a145]" />{t('common:create_new_filling_preset')}</Dialog.Title>
                                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                        <X size={20} className="text-slate-400" />
                                    </button>
                                </div>

                                <div className="space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">{t('ui:mylab.preset_name')}</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="e.g. Special Truffle Margherita"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 ring-[#51a145]/20 focus:border-[#51a145] outline-none font-bold text-slate-700 transition-all"
                                        />
                                    </div>

                                    {/* Grams Grid */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div>
                                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">{t('common:sauce_g')}</label>
                                            <input
                                                type="number"
                                                value={sauceGrams}
                                                onChange={(e) => setSauceGrams(parseInt(e.target.value) || 0)}
                                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 ring-[#51a145]/20 focus:border-[#51a145] outline-none font-mono font-bold text-slate-700"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">{t('common:cheese_g')}</label>
                                            <input
                                                type="number"
                                                value={cheeseGrams}
                                                onChange={(e) => setCheeseGrams(parseInt(e.target.value) || 0)}
                                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 ring-[#51a145]/20 focus:border-[#51a145] outline-none font-mono font-bold text-slate-700"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">{t('common:others_g')}</label>
                                            <input
                                                type="number"
                                                value={toppingsGrams}
                                                onChange={(e) => setToppingsGrams(parseInt(e.target.value) || 0)}
                                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 ring-[#51a145]/20 focus:border-[#51a145] outline-none font-mono font-bold text-slate-700"
                                            />
                                        </div>
                                    </div>

                                    {/* Notes */}
                                    <div>
                                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">{t('common:notes_description')}</label>
                                        <textarea
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                            placeholder={t('common:ingredients_and_special_instructions')}
                                            rows={3}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 ring-[#51a145]/20 focus:border-[#51a145] outline-none text-sm text-slate-600 transition-all resize-none"
                                        />
                                    </div>

                                    <div className="bg-emerald-50 p-4 rounded-2xl flex items-start gap-3">
                                        <Info size={16} className="text-[#51a145] mt-0.5 shrink-0" />
                                        <p className="text-[11px] text-[#2d5a27] leading-relaxed">{t('common:this_preset_will_be_used_to_calculate_your_cumulative_shoppi')}</p>
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-3">
                                    <button
                                        onClick={onClose}
                                        className="flex-1 py-3 px-4 rounded-xl border border-slate-200 font-bold text-slate-500 hover:bg-slate-50 transition-colors"
                                    >{t('ui:profile.cancel')}</button>
                                    <button
                                        onClick={handleSave}
                                        disabled={!name || isSaving}
                                        className="flex-[2] py-3 px-4 rounded-xl bg-[#51a145] hover:bg-[#36782c] disabled:opacity-50 disabled:hover:bg-[#51a145] text-white font-bold shadow-lg shadow-[#51a145]/20 transition-all flex items-center justify-center gap-2"
                                    >
                                        {isSaving ? 'Saving...' : (
                                            <>
                                                <Save size={18} />{t('common:create_preset')}</>
                                        )}
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
