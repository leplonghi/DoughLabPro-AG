
import React, { useState, useEffect } from 'react';
import { Page, FlourDefinition } from '@/types';
import { FlourIcon, PlusCircleIcon, TrashIcon, StarIcon } from '@/components/ui/Icons';
import MyLabLayout from './MyLabLayout';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
import { FLOURS } from '@/flours-constants';

interface MyLabFloursPageProps {
    onNavigate: (page: Page) => void;
}

const MyLabFloursPage: React.FC<MyLabFloursPageProps> = ({ onNavigate }) => {
    const { t } = useTranslation();
    const { preferredFlourId, setPreferredFlour } = useUser();
    const [userFlours, setUserFlours] = useState<FlourDefinition[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [newFlour, setNewFlour] = useState<Partial<FlourDefinition>>({
        name: '',
        category: 'bread',
        strengthW: undefined,
        protein: undefined,
        notes: ''
    });

    // Load user flours from local storage on mount
    useEffect(() => {
        const stored = localStorage.getItem('doughlab_user_flours');
        if (stored) {
            try {
                setUserFlours(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse user flours", e);
            }
        }
    }, []);

    // Save user flours to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('doughlab_user_flours', JSON.stringify(userFlours));
    }, [userFlours]);

    const handleAddFlour = () => {
        if (!newFlour.name) return;

        const flour: FlourDefinition = {
            id: `user_${Date.now()}`,
            name: newFlour.name,
            category: newFlour.category as any || 'other',
            strengthW: newFlour.strengthW,
            protein: newFlour.protein,
            recommendedUses: ['general'],
            notes: newFlour.notes,
        };

        setUserFlours(prev => [...prev, flour]);
        setIsAdding(false);
        setNewFlour({ name: '', category: 'bread', strengthW: undefined, protein: undefined, notes: '' });
    };

    const handleDeleteFlour = (id: string) => {
        if (confirm('Are you sure you want to delete this flour?')) {
            setUserFlours(prev => prev.filter(f => f.id !== id));
            if (preferredFlourId === id) {
                setPreferredFlour(null);
            }
        }
    };

    const allFlours = [...FLOURS, ...userFlours];
    const preferredFlour = allFlours.find(f => f.id === preferredFlourId);

    return (
        <MyLabLayout activePage="mylab/farinhas" onNavigate={onNavigate}>
            <div className="animate-fade-in space-y-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 ">My Flours</h1>
                        <p className="text-slate-600  mt-2">Track your flour inventory and characteristics.</p>
                    </div>
                    <button
                        onClick={() => setIsAdding(!isAdding)}
                        className="flex items-center gap-2 bg-lime-500 text-white px-4 py-2.5 rounded-xl hover:bg-lime-600 transition-colors shadow-lg shadow-lime-500/20 font-bold"
                    >
                        <PlusCircleIcon className="h-5 w-5" />
                        {isAdding ? 'Cancel' : 'Add Custom Flour'}
                    </button>
                </div>

                {/* Add Flour Form */}
                {isAdding && (
                    <div className="bg-white  rounded-2xl p-6 border border-slate-200  shadow-sm animate-slide-down">
                        <h3 className="text-lg font-bold text-slate-900  mb-4">Add New Flour</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700  mb-1">Name</label>
                                <input
                                    type="text"
                                    value={newFlour.name}
                                    onChange={e => setNewFlour({ ...newFlour, name: e.target.value })}
                                    className="w-full rounded-xl border-slate-300  bg-slate-50  p-2.5 text-slate-900  focus:ring-lime-500 focus:border-lime-500"
                                    placeholder="e.g. King Arthur Bread Flour"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700  mb-1">Category</label>
                                <select
                                    value={newFlour.category}
                                    onChange={e => setNewFlour({ ...newFlour, category: e.target.value as any })}
                                    className="w-full rounded-xl border-slate-300  bg-slate-50  p-2.5 text-slate-900  focus:ring-lime-500 focus:border-lime-500"
                                >
                                    <option value="00">00 (Italian)</option>
                                    <option value="bread">Bread Flour</option>
                                    <option value="all_purpose">All Purpose</option>
                                    <option value="whole">Whole Wheat</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700  mb-1">Strength (W) - Optional</label>
                                <input
                                    type="number"
                                    value={newFlour.strengthW || ''}
                                    onChange={e => setNewFlour({ ...newFlour, strengthW: Number(e.target.value) })}
                                    className="w-full rounded-xl border-slate-300  bg-slate-50  p-2.5 text-slate-900  focus:ring-lime-500 focus:border-lime-500"
                                    placeholder="e.g. 300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700  mb-1">Protein % - Optional</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={newFlour.protein || ''}
                                    onChange={e => setNewFlour({ ...newFlour, protein: Number(e.target.value) })}
                                    className="w-full rounded-xl border-slate-300  bg-slate-50  p-2.5 text-slate-900  focus:ring-lime-500 focus:border-lime-500"
                                    placeholder="e.g. 12.5"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700  mb-1">Notes</label>
                                <textarea
                                    value={newFlour.notes}
                                    onChange={e => setNewFlour({ ...newFlour, notes: e.target.value })}
                                    className="w-full rounded-xl border-slate-300  bg-slate-50  p-2.5 text-slate-900  focus:ring-lime-500 focus:border-lime-500"
                                    rows={2}
                                    placeholder="e.g. Good for long fermentation"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsAdding(false)}
                                className="px-4 py-2 rounded-xl text-slate-600  font-medium hover:bg-slate-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddFlour}
                                disabled={!newFlour.name}
                                className="px-6 py-2 rounded-xl bg-lime-500 text-white font-bold shadow-lg shadow-lime-500/20 hover:bg-lime-600 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Save Flour
                            </button>
                        </div>
                    </div>
                )}

                {/* Preferred Flour Card */}
                {preferredFlour && (
                    <div className="bg-gradient-to-br from-lime-50 to-white   rounded-2xl border border-lime-200  p-6 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <StarIcon className="h-32 w-32 text-lime-500" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-lime-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                    <StarIcon className="h-3 w-3" />
                                    Default
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 ">{preferredFlour.name}</h3>
                            <p className="text-lime-700  font-medium mt-1 capitalize">{preferredFlour.category.replace('_', ' ')}</p>

                            <div className="mt-4 flex gap-4 text-sm text-slate-600 ">
                                {preferredFlour.strengthW && (
                                    <div className="bg-white  px-3 py-1.5 rounded-lg border border-lime-100 ">
                                        <span className="font-bold text-slate-900 ">W {preferredFlour.strengthW}</span>
                                    </div>
                                )}
                                {preferredFlour.protein && (
                                    <div className="bg-white  px-3 py-1.5 rounded-lg border border-lime-100 ">
                                        <span className="font-bold text-slate-900 ">{preferredFlour.protein}% Protein</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* User Flours List */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900  mb-4">My Inventory</h2>
                    {userFlours.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {userFlours.map(flour => (
                                <div key={flour.id} className="bg-white  rounded-xl border border-slate-200  p-5 shadow-sm hover:shadow-md transition-all group">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-slate-900 ">{flour.name}</h3>
                                            <p className="text-sm text-slate-500  capitalize">{flour.category.replace('_', ' ')}</p>
                                        </div>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {preferredFlourId !== flour.id && (
                                                <button
                                                    onClick={() => setPreferredFlour(flour.id)}
                                                    className="p-2 text-slate-400 hover:text-lime-500 transition-colors"
                                                    title="Set as default"
                                                >
                                                    <StarIcon className="h-5 w-5" />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleDeleteFlour(flour.id)}
                                                className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                                                title="Delete"
                                            >
                                                <TrashIcon className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex gap-3 text-xs">
                                        {flour.strengthW && <span className="bg-slate-100  px-2 py-1 rounded text-slate-700  font-medium">W {flour.strengthW}</span>}
                                        {flour.protein && <span className="bg-slate-100  px-2 py-1 rounded text-slate-700  font-medium">{flour.protein}% Protein</span>}
                                    </div>
                                    {flour.notes && (
                                        <p className="mt-3 text-sm text-slate-600  italic">"{flour.notes}"</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 rounded-2xl border-2 border-dashed border-slate-200  bg-slate-50/50 ">
                            <FlourIcon className="h-12 w-12 text-slate-300  mx-auto mb-3" />
                            <p className="text-slate-500 ">No custom flours added yet.</p>
                            <button onClick={() => setIsAdding(true)} className="mt-4 text-lime-600  font-bold hover:underline">Add your first flour</button>
                        </div>
                    )}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 ">
                    <h2 className="text-xl font-bold text-slate-900  mb-4">Standard Library</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 opacity-75 hover:opacity-100 transition-opacity">
                        {FLOURS.map(flour => (
                            <div key={flour.id} className="bg-slate-50  rounded-xl border border-slate-200  p-4">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-slate-800  text-sm">{flour.name}</h4>
                                    {preferredFlourId === flour.id ? (
                                        <StarIcon className="h-4 w-4 text-lime-500" />
                                    ) : (
                                        <button onClick={() => setPreferredFlour(flour.id)} className="text-slate-300 hover:text-lime-500">
                                            <StarIcon className="h-4 w-4" />
                                        </button>
                                    )}
                                </div>
                                <p className="text-xs text-slate-500  mt-1 capitalize">{flour.category.replace('_', ' ')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MyLabLayout>
    );
};

export default MyLabFloursPage;
