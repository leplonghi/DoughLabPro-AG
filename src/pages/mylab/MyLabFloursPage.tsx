
import React, { useState, useEffect, useMemo } from 'react';
import { Page, FlourDefinition } from '@/types';
import {
    FlourIcon,
    PlusCircleIcon,
    TrashIcon,
    StarIcon,
    MagnifyingGlassIcon,
    BeakerIcon
} from '@/components/ui/Icons';
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
    const [viewMode, setViewMode] = useState<'inventory' | 'catalog'>('inventory');
    const [searchQuery, setSearchQuery] = useState('');

    // Modal state for adding custom or catalog flour
    const [isAddingMode, setIsAddingMode] = useState<'none' | 'custom' | 'catalog_confirm'>('none');
    // const [selectedCatalogFlour, setSelectedCatalogFlour] = useState<FlourDefinition | null>(null);

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
                console.error(t('mylab.failed_to_parse_user_flours'), e);
            }
        }
    }, []);

    // Save user flours to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('doughlab_user_flours', JSON.stringify(userFlours));
    }, [userFlours]);

    const handleAddCustomFlour = () => {
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
        setIsAddingMode('none');
        setNewFlour({ name: '', category: 'bread', strengthW: undefined, protein: undefined, notes: '' });
        setViewMode('inventory');
    };

    const handleAddCatalogFlour = (catalogItem: FlourDefinition) => {
        // Pre-fill the form with catalog item but allow editing (or just add directly)
        // Adding directly is better UX for "picking from list"
        const flour: FlourDefinition = {
            ...catalogItem,
            id: `user_${Date.now()}_${catalogItem.id}`, // Unique ID for the user's copy
            notes: catalogItem.notes // Keep original notes
        };
        setUserFlours(prev => [...prev, flour]);
        // Optional: show success toast
        setViewMode('inventory');
        setSearchQuery('');
    };

    const handleDeleteFlour = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (confirm('Are you sure you want to delete this flour from your inventory?')) {
            setUserFlours(prev => prev.filter(f => f.id !== id));
            if (preferredFlourId === id) {
                setPreferredFlour(null);
            }
        }
    };

    // Filter catalog based on search
    const filteredCatalog = useMemo(() => {
        if (!searchQuery) return FLOURS;
        const lowerQ = searchQuery.toLowerCase();
        return FLOURS.filter(f =>
            f.name.toLowerCase().includes(lowerQ) ||
            f.notes?.toLowerCase().includes(lowerQ) ||
            f.category.toLowerCase().includes(lowerQ)
        );
    }, [searchQuery]);

    const preferredFlour = userFlours.find(f => f.id === preferredFlourId) || FLOURS.find(f => f.id === preferredFlourId);

    return (
        <MyLabLayout activePage="mylab/farinhas" onNavigate={onNavigate}>
            <div className="space-y-6 animate-fade-in pb-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">{t('mylab.my_flour_inventory')}</h1>
                        <p className="text-slate-500 mt-1">{t('mylab.manage_your_collection_and_set_your_default_flour_')}</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setViewMode('inventory')}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${viewMode === 'inventory'
                                    ? 'bg-slate-900 text-white shadow-lg'
                                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                                }`}
                        >
                            My Inventory ({userFlours.length})
                        </button>
                        <button
                            onClick={() => setViewMode('catalog')}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${viewMode === 'catalog'
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                                }`}
                        >
                            + Browse Database
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                {viewMode === 'inventory' ? (
                    <div className="space-y-6">

                        {/* Default Flour Card (Hero) */}
                        {preferredFlour && (
                            <div className="bg-gradient-to-r from-lime-50 to-emerald-50 rounded-2xl p-6 border border-lime-100 shadow-sm relative overflow-hidden group">
                                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-lime-100/50 to-transparent"></div>
                                <div className="absolute right-4 top-4 text-lime-200 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    <StarIcon className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-dlp-brand text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                            <StarIcon className="h-3 w-3" />{t('mylab.active_default')}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800">{preferredFlour.name}</h2>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        <span className="px-3 py-1 bg-white/80 backdrop-blur rounded-lg text-xs font-bold text-slate-600 border border-lime-100">
                                            <span className="text-slate-400 font-normal mr-1">{t('mylab.type')}</span>
                                            {preferredFlour.category.toUpperCase().replace('_', ' ')}
                                        </span>
                                        {preferredFlour.strengthW && (
                                            <span className="px-3 py-1 bg-white/80 backdrop-blur rounded-lg text-xs font-bold text-slate-600 border border-lime-100">
                                                W {preferredFlour.strengthW}
                                            </span>
                                        )}
                                        {preferredFlour.protein && (
                                            <span className="px-3 py-1 bg-white/80 backdrop-blur rounded-lg text-xs font-bold text-slate-600 border border-lime-100">
                                                {preferredFlour.protein}% Protein
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Inventory Grid */}
                        {userFlours.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {userFlours.map(flour => {
                                    const isPreferred = preferredFlourId === flour.id;
                                    return (
                                        <div
                                            key={flour.id}
                                            className={`relative bg-white rounded-xl border p-5 transition-all hover:shadow-md group ${isPreferred ? 'border-dlp-brand ring-1 ring-dlp-brand shadow-sm' : 'border-slate-200 hover:border-slate-300'
                                                }`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                                                    {flour.category.replace('_', ' ')}
                                                </div>
                                                <div className="flex gap-1">
                                                    {!isPreferred && (
                                                        <button
                                                            onClick={() => setPreferredFlour(flour.id)}
                                                            className="p-1.5 text-slate-300 hover:text-dlp-brand hover:bg-lime-50 rounded-lg transition-colors"
                                                            title={t('mylab.set_as_default')}
                                                        >
                                                            <StarIcon className="w-4 h-4" />
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={(e) => handleDeleteFlour(flour.id, e)}
                                                        className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                        title={t('mylab.remove_from_inventory')}
                                                    >
                                                        <TrashIcon className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            <h3 className="font-bold text-slate-900 mb-1 line-clamp-1" title={flour.name}>{flour.name}</h3>
                                            <div className="flex gap-3 text-xs text-slate-500 mb-3">
                                                {flour.strengthW ? <span>W <strong>{flour.strengthW}</strong></span> : <span>{t('mylab.w_')}</span>}
                                                <span className="text-slate-300">|</span>
                                                {flour.protein ? <span>{t('mylab.prot')}<strong>{flour.protein}%</strong></span> : <span>{t('mylab.prot_')}</span>}
                                            </div>

                                            {flour.notes && (
                                                <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded-lg italic line-clamp-2 min-h-[3rem]">
                                                    "{flour.notes}"
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}

                                {/* Add Custom Card */}
                                <button
                                    onClick={() => setIsAddingMode('custom')}
                                    className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50/50 transition-all group"
                                >
                                    <div className="bg-white p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                                        <PlusCircleIcon className="w-6 h-6 text-indigo-500" />
                                    </div>
                                    <span className="font-bold text-slate-700">{t('mylab.add_custom_flour')}</span>
                                    <span className="text-xs text-slate-400 mt-1">{t('mylab.manual_entry')}</span>
                                </button>
                            </div>
                        ) : (
                            <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                                <BeakerIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-slate-900">{t('mylab.your_inventory_is_empty')}</h3>
                                <p className="text-slate-500 max-w-md mx-auto mt-2 mb-6">Start by adding flours to your lab. You can search our database of popular brands or add your own manually.</p>
                                <button
                                    onClick={() => setViewMode('catalog')}
                                    className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all"
                                >{t('mylab.browse_flour_database')}</button>
                            </div>
                        )}
                    </div>
                ) : (
                    // CATALOG VIEW
                    <div className="space-y-6">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm sticky top-0 z-20">
                            <div className="relative">
                                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search by brand, type (e.g., Caputo, King Arthur, 00)..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredCatalog.map(flour => (
                                <div key={flour.id} className="bg-white p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col h-full group">
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                                {flour.category.replace('_', ' ')}
                                            </span>
                                            {flour.strengthW && (
                                                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                                                    W {flour.strengthW}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-1">{flour.name}</h3>
                                        <p className="text-xs text-slate-500 line-clamp-2 mb-3 h-8">{flour.notes}</p>
                                    </div>

                                    <button
                                        onClick={() => handleAddCatalogFlour(flour)}
                                        className="w-full mt-2 py-2 text-sm font-bold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-1 group-hover:bg-indigo-600 group-hover:text-white"
                                    >
                                        <PlusCircleIcon className="w-4 h-4" />{t('mylab.add_to_inventory')}</button>
                                </div>
                            ))}
                        </div>

                        {filteredCatalog.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-slate-500">No flours found matching "{searchQuery}"</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setIsAddingMode('custom'); }}
                                    className="text-indigo-600 font-bold hover:underline mt-2"
                                >
                                    Add Custom Flour instead?
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Add Custom Flour Modal/Overlay */}
                {isAddingMode === 'custom' && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-fade-in">
                        <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                                <h3 className="text-xl font-bold text-white">{t('mylab.add_custom_flour')}</h3>
                                <p className="text-indigo-100 text-sm">{t('mylab.enter_the_details_manually')}</p>
                            </div>

                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">{t('mylab.flour_name')}</label>
                                    <input
                                        autoFocus
                                        type="text"
                                        value={newFlour.name}
                                        onChange={e => setNewFlour({ ...newFlour, name: e.target.value })}
                                        className="w-full rounded-xl border-slate-300 bg-slate-50 p-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                                        placeholder="e.g. Grandma's Secret Blend"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">{t('mylab.category')}</label>
                                        <select
                                            value={newFlour.category}
                                            onChange={e => setNewFlour({ ...newFlour, category: e.target.value as any })}
                                            className="w-full rounded-xl border-slate-300 bg-slate-50 p-3 outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                                        >
                                            <option value="00">00 (Italian)</option>
                                            <option value="bread">{t('mylab.bread_flour')}</option>
                                            <option value="all_purpose">{t('mylab.all_purpose')}</option>
                                            <option value="whole">{t('mylab.whole_wheat_2')}</option>
                                            <option value="other">{t('mylab.other')}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Strength (W)</label>
                                        <input
                                            type="number"
                                            value={newFlour.strengthW || ''}
                                            onChange={e => setNewFlour({ ...newFlour, strengthW: Number(e.target.value) })}
                                            className="w-full rounded-xl border-slate-300 bg-slate-50 p-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                            placeholder={t('mylab.optional_2')}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">{t('mylab.protein_')}</label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            value={newFlour.protein || ''}
                                            onChange={e => setNewFlour({ ...newFlour, protein: Number(e.target.value) })}
                                            className="w-full rounded-xl border-slate-300 bg-slate-50 p-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                            placeholder={t('mylab.optional_2')}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">{t('mylab.notes_2')}</label>
                                    <textarea
                                        value={newFlour.notes}
                                        onChange={e => setNewFlour({ ...newFlour, notes: e.target.value })}
                                        className="w-full rounded-xl border-slate-300 bg-slate-50 p-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        rows={3}
                                        placeholder={t('mylab.any_special_characteristics')}
                                    />
                                </div>
                            </div>

                            <div className="bg-slate-50 p-4 flex justify-end gap-3 border-t border-slate-100">
                                <button
                                    onClick={() => setIsAddingMode('none')}
                                    className="px-5 py-2.5 rounded-xl text-slate-600 font-bold hover:bg-slate-200 transition-colors"
                                >{t('mylab.cancel')}</button>
                                <button
                                    onClick={handleAddCustomFlour}
                                    disabled={!newFlour.name}
                                    className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >{t('mylab.save_flour')}</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </MyLabLayout>
    );
};

export default MyLabFloursPage;


