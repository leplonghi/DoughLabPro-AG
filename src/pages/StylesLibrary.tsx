import React, { useState, useMemo } from 'react';
import { STYLES_DATA } from '@/data/styles/registry';
import { DoughStyleDefinition, StyleCategory } from '@/types/styles';
import { Region, Category } from '@/types/dough';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { StyleCard } from '@/components/styles/StyleCard';
import { Search, ChefHat } from 'lucide-react';

interface StylesLibraryPageProps {
    onNavigateToDetail: (id: string) => void;
    onUseInCalculator: (style: any) => void;
}

// Helper to map V1 Country to Region Filter
const getRegionFromCountry = (country: string): Region | 'Global' => {
    const c = country.toLowerCase();
    if (c === 'italy') return 'Italy';
    if (['usa', 'brazil', 'canada', 'mexico', 'argentina', 'colombia'].includes(c)) return 'Americas';
    if (['france', 'germany', 'denmark', 'uk', 'spain', 'sweden', 'poland', 'belgium', 'netherlands'].includes(c)) return 'Europe';
    return 'Global';
};

export const StylesLibraryPage: React.FC<StylesLibraryPageProps> = ({ onUseInCalculator }) => {
    const [filterCategory, setFilterCategory] = useState<Category | 'All'>('All');
    const [filterRegion, setFilterRegion] = useState<Region | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');

    // --- AGGREGATE DATA ---
    const allStyles: DoughStyleDefinition[] = useMemo(() => {
        return STYLES_DATA;
    }, []);

    // --- FILTER LOGIC ---
    const filteredStyles = useMemo(() => {
        return allStyles.filter(style => {
            // Category Filter (Normalize case: V1 uses lowercase)
            const matchesCategory = filterCategory === 'All' ||
                (style.category?.toLowerCase() === filterCategory.toLowerCase()) ||
                (filterCategory === 'Enriched' && (style.category === 'enriched_bread' || style.category === 'burger_bun' || style.category === 'pastry')) ||
                (filterCategory === 'Bread' && (style.category === 'bread' || style.category === 'flatbread'));

            // Region Filter
            const styleRegion = getRegionFromCountry(style.origin.country);
            const matchesRegion = filterRegion === 'All' || styleRegion === filterRegion;

            // Search Filter
            const matchesSearch = style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                style.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                style.origin.country.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesRegion && matchesSearch;
        });
    }, [allStyles, filterCategory, filterRegion, searchQuery]);

    return (
        <LibraryPageLayout>
            {/* --- HERO SECTION --- */}
            <div className="mb-8 mx-4 sm:mx-0">
                <div className="bg-gradient-to-br from-[#3A6B3A] to-[#558B55] rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider mb-4">
                            <ChefHat className="w-4 h-4" />
                            Global Dough Registry
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight">
                            Explore Styles
                        </h1>
                        <p className="text-base md:text-lg text-lime-100/90 mb-0 leading-relaxed">
                            Discover professional dough specifications from around the world.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SEARCH & FILTER BAR --- */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md py-4 mb-8 border-b border-slate-200 -mx-4 px-4 md:static md:bg-transparent md:border-none md:p-0 md:mx-0">

                {/* Search Input */}
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 sm:text-sm shadow-sm transition-all"
                        placeholder="Search styles (e.g. 'Neapolitan', 'Ciabatta')..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2 items-center">
                    {/* Reset */}
                    <button
                        onClick={() => { setFilterCategory('All'); setFilterRegion('All'); }}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${filterCategory === 'All' && filterRegion === 'All'
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                            }`}
                    >
                        All
                    </button>

                    <div className="w-px h-6 bg-slate-300 mx-2 hidden sm:block"></div>

                    {/* Categories */}
                    {(['Pizza', 'Bread', 'Flatbread', 'Enriched'] as Category[]).map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilterCategory(current => current === cat ? 'All' : cat)}
                            className={`px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1 transition-all border ${filterCategory === cat
                                ? 'bg-lime-500 text-white border-lime-500 shadow-md transform scale-105'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                }`}
                        >
                            {cat === 'Pizza' && '🍕'}
                            {cat === 'Bread' && '🍞'}
                            {cat === 'Flatbread' && '🫓'}
                            {cat === 'Enriched' && '🥐'}
                            {cat}
                        </button>
                    ))}

                    <div className="w-px h-6 bg-slate-300 mx-2 hidden sm:block"></div>

                    {/* Regions */}
                    {(['Italy', 'Americas', 'Europe', 'Global'] as Region[]).map(reg => (
                        <button
                            key={reg}
                            onClick={() => setFilterRegion(current => current === reg ? 'All' : reg)}
                            className={`px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1 transition-all border ${filterRegion === reg
                                ? 'bg-indigo-500 text-white border-indigo-500 shadow-md transform scale-105'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                }`}
                        >
                            {reg === 'Italy' && '🇮🇹'}
                            {reg === 'Americas' && '🌎'}
                            {reg === 'Europe' && '🇪🇺'}
                            {reg}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- CONTENT GRID --- */}
            {filteredStyles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStyles.map(style => (
                        <StyleCard
                            key={style.id}
                            style={style}
                            onUseInCalculator={onUseInCalculator}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                    <p className="text-slate-400 text-lg">No styles match your filter.</p>
                    <button
                        onClick={() => { setFilterCategory('All'); setFilterRegion('All'); setSearchQuery(''); }}
                        className="mt-4 text-lime-600 font-bold hover:underline"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </LibraryPageLayout>
    );
};
