import React, { useState, useMemo } from 'react';
import { DoughStyleDefinition, StyleCategory } from '@/types/styles';
import { STYLES_DATA } from '@/data/stylesData';
import { useUser } from '@/contexts/UserProvider';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { LockFeature } from '@/components/auth/LockFeature';
import { StyleCard } from '@/components/styles/StyleCard';
import { StylesFilterDrawer } from '@/components/styles/StylesFilterDrawer';
import {
    BookOpen,
    Sparkles,
    Calculator,
    Heart,
    Filter,
    Search,
    ArrowUpDown,
    ChefHat
} from 'lucide-react';
import { normalizeDoughStyle } from '@/utils/styleAdapter';
import { AdCard } from '@/marketing/ads/AdCard';

// ========================================================
// 1. CONSTANTS & CONFIG
// ========================================================

const CATEGORY_FILTERS: { id: StyleCategory | 'All', label: string }[] = [
    { id: 'All', label: 'All Styles' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'bread', label: 'Breads' },
    { id: 'enriched_bread', label: 'Enriched' },
    { id: 'burger_bun', label: 'Buns' },
    { id: 'pastry', label: 'Pastry' },
    { id: 'cookie', label: 'Cookies' },
    { id: 'flatbread', label: 'Flatbreads' },
    { id: 'other', label: 'Other' },
];

const GROUP_ORDER = [
    'Pizzas',
    'Breads & Rustic Loaves',
    'Enriched Breads',
    'Burger Buns',
    'Pastry & Sweet Doughs',
    'Cookies & Confectionery',
    'Flatbreads',
    'Other Styles'
];

const getDisplayGroup = (category: StyleCategory): string => {
    switch (category) {
        case 'pizza': return 'Pizzas';
        case 'bread': return 'Breads & Rustic Loaves';
        case 'enriched_bread': return 'Enriched Breads';
        case 'burger_bun': return 'Burger Buns';
        case 'pastry': return 'Pastry & Sweet Doughs';
        case 'cookie': return 'Cookies & Confectionery';
        case 'flatbread': return 'Flatbreads';
        default: return 'Other Styles';
    }
};

// ========================================================
// 2. MAIN PAGE COMPONENT
// ========================================================

interface DoughStylesPageProps {
    onNavigateToDetail: (styleId: string) => void;
    onUseInCalculator: (style: DoughStyleDefinition) => void;
}

const DoughStylesPage: React.FC<DoughStylesPageProps> = ({ onNavigateToDetail, onUseInCalculator }) => {
    const { userStyles, isFavorite, deleteUserStyle } = useUser();

    // State
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<StyleCategory | 'All'>('All');
    const [showFavorites, setShowFavorites] = useState(false);
    const [sortBy, setSortBy] = useState<'name' | 'newest' | 'hydration' | 'difficulty'>('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    // Advanced Filters State
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

    // Combine Data
    const allStyles = useMemo(() => {
        const normalizedUserStyles = userStyles.map(normalizeDoughStyle);
        // Ensure STYLES_DATA is treated as DoughStyleDefinition[]
        return [...(STYLES_DATA as unknown as DoughStyleDefinition[]), ...normalizedUserStyles];
    }, [userStyles]);

    // Derived Data: Available Options
    const { availableTags, availableRegions } = useMemo(() => {
        const tags = new Set<string>();
        const regions = new Set<string>();

        allStyles.forEach(style => {
            style.tags?.forEach(t => tags.add(t));
            if (style.origin.country) regions.add(style.origin.country);
        });

        return {
            availableTags: Array.from(tags).sort(),
            availableRegions: Array.from(regions).sort()
        };
    }, [allStyles]);

    // Filter & Sort Logic
    const filteredStyles = useMemo(() => {
        let result = allStyles.filter(style => {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = style.name.toLowerCase().includes(searchLower) ||
                style.description.toLowerCase().includes(searchLower);

            const matchesCategory = selectedCategory === 'All' || style.category === selectedCategory;

            const matchesTags = selectedTags.length === 0 ||
                (style.tags && selectedTags.every(tag => style.tags?.includes(tag)));

            const matchesDifficulty = selectedDifficulty.length === 0 ||
                (style.technicalProfile?.difficulty && selectedDifficulty.includes(style.technicalProfile.difficulty));

            const matchesRegion = selectedRegions.length === 0 ||
                selectedRegions.includes(style.origin.country);

            const matchesFavorite = showFavorites ? isFavorite(style.id) : true;

            return matchesSearch && matchesCategory && matchesTags && matchesDifficulty && matchesRegion && matchesFavorite;
        });

        return result.sort((a, b) => {
            let comparison = 0;
            switch (sortBy) {
                case 'name':
                    comparison = a.name.localeCompare(b.name);
                    break;
                case 'newest':
                    const dateA = new Date(a.releaseDate || 0).getTime();
                    const dateB = new Date(b.releaseDate || 0).getTime();
                    comparison = dateA - dateB;
                    break;
                case 'hydration':
                    const hydA = (a.technicalProfile?.hydration[0] || 0);
                    const hydB = (b.technicalProfile?.hydration[0] || 0);
                    comparison = hydA - hydB;
                    break;
                case 'difficulty':
                    const diffMap: Record<string, number> = { 'Easy': 1, 'Medium': 2, 'Hard': 3, 'Expert': 4 };
                    const diffA = diffMap[a.technicalProfile?.difficulty || 'Medium'] || 2;
                    const diffB = diffMap[b.technicalProfile?.difficulty || 'Medium'] || 2;
                    comparison = diffA - diffB;
                    break;
            }
            return sortOrder === 'asc' ? comparison : -comparison;
        });
    }, [allStyles, searchTerm, selectedCategory, selectedTags, selectedDifficulty, selectedRegions, showFavorites, sortBy, sortOrder, isFavorite]);

    // Grouping for Display
    const stylesByGroup = useMemo(() => {
        const grouped: Record<string, DoughStyleDefinition[]> = {};
        filteredStyles.forEach(style => {
            const groupName = getDisplayGroup(style.category);
            if (!grouped[groupName]) grouped[groupName] = [];
            grouped[groupName].push(style);
        });
        return grouped;
    }, [filteredStyles]);

    const countByCategory = (cat: string) => {
        if (cat === 'All') return allStyles.length;
        return allStyles.filter(s => s.category === cat).length;
    };

    const activeFilterCount = selectedTags.length + selectedDifficulty.length + selectedRegions.length;

    return (
        <LibraryPageLayout>
            <PageHero
                title="The Global Dough Atlas"
                subtitle="Scientific profiles, baking parameters, and regional styles across 6 global dough families."
                backgroundClass="bg-gradient-to-br from-[#3A6B3A] to-[#558B55]"
                badges={
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                        <BookOpen className="w-4 h-4" /> Style Library
                    </div>
                }
            />

            {/* Actions Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Create / AI */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent pointer-events-none" />
                    <div className="relative z-10 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-lime-500" />
                                Create Custom Style
                            </h3>
                            <p className="text-sm text-slate-600 mt-1">Define your own or ask AI to generate it.</p>
                        </div>
                        <div className="flex gap-2">
                            <LockFeature featureKey="styles.ai.builder" customMessage="Unlock AI Builder" origin="styles.ai.builder">
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl shadow-md transition-all transform hover:scale-105 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" /> AI Builder
                                </button>
                            </LockFeature>
                        </div>
                    </div>
                </div>

                {/* Planner CTA */}
                <div className="bg-lime-50 p-6 rounded-2xl border border-lime-200 shadow-sm flex justify-between items-center hover:shadow-md transition-all">
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                            <ChefHat className="h-5 w-5 text-lime-600" />
                            Ingredients Planner
                        </h3>
                        <p className="text-sm text-slate-700 mt-1">Calculate toppings & fillings ratios.</p>
                    </div>
                    <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-xl shadow-md transition-all transform hover:scale-105 flex items-center gap-2">
                        <Calculator className="h-5 w-5" /> Open
                    </button>
                </div>
            </div>

            {/* Sticky Filter Bar */}
            <div className="sticky top-4 z-20 bg-white/90 backdrop-blur-lg p-4 rounded-2xl border border-stone-200 shadow-sm mb-8 flex flex-col gap-4 transition-all duration-300">
                {/* Top Row: Categories & Search */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar mask-linear-fade">
                        {CATEGORY_FILTERS.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id as any)}
                                className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${selectedCategory === cat.id
                                    ? 'bg-lime-500 text-white shadow-md transform scale-105'
                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                            >
                                {cat.label}
                                <span className={`text-[10px] py-0.5 px-1.5 rounded-full ${selectedCategory === cat.id ? 'bg-white/20' : 'bg-slate-200'}`}>
                                    {countByCategory(cat.id)}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <button
                            onClick={() => setShowFavorites(!showFavorites)}
                            className={`p-2.5 rounded-xl border transition-all ${showFavorites ? 'bg-pink-50 border-pink-200 text-pink-500 shadow-sm' : 'bg-white border-slate-200 text-slate-400 hover:text-pink-400 hover:bg-slate-50'}`}
                            title="Show Favorites"
                        >
                            <Heart className={`h-5 w-5 ${showFavorites ? 'fill-current' : ''}`} />
                        </button>

                        <button
                            onClick={() => setIsDrawerOpen(true)}
                            className={`p-2.5 rounded-xl border transition-all relative ${activeFilterCount > 0 ? 'bg-lime-50 border-lime-200 text-lime-600' : 'bg-white border-slate-200 text-slate-400 hover:text-lime-500 hover:bg-slate-50'}`}
                            title="Advanced Filters"
                        >
                            <Filter className="h-5 w-5" />
                            {activeFilterCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-lime-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                                    {activeFilterCount}
                                </span>
                            )}
                        </button>

                        <div className="relative flex-grow md:w-64 group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-lime-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search styles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full rounded-xl border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm focus:border-lime-500 focus:ring-lime-500 transition-all"
                            />
                        </div>

                        {/* Sort Dropdown (Desktop) */}
                        <div className="hidden md:flex items-center gap-1 bg-slate-50 rounded-xl border border-slate-200 p-1">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as any)}
                                className="bg-transparent border-none text-sm font-medium text-slate-600 focus:ring-0 py-1.5 pl-2 pr-8 cursor-pointer"
                            >
                                <option value="name">Name</option>
                                <option value="newest">Newest</option>
                                <option value="hydration">Hydration</option>
                                <option value="difficulty">Difficulty</option>
                            </select>
                            <button
                                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                                className="p-1.5 hover:bg-white rounded-lg text-slate-500 transition-colors shadow-sm"
                            >
                                <ArrowUpDown className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <div className="space-y-12 pb-20">
                {Object.keys(stylesByGroup).length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                        <div className="inline-flex p-4 bg-slate-50 rounded-full mb-4">
                            <Search className="w-8 h-8 text-slate-300" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">No styles found</h3>
                        <p className="text-slate-500 mb-6">Try adjusting your filters or search terms.</p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('All');
                                setSelectedTags([]);
                                setSelectedDifficulty([]);
                                setSelectedRegions([]);
                            }}
                            className="text-lime-600 font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    GROUP_ORDER.map(groupName => {
                        const styles = stylesByGroup[groupName];
                        if (!styles || styles.length === 0) return null;

                        return (
                            <section key={groupName} className="animate-fade-in">
                                <div className="flex items-center gap-4 mb-6">
                                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{groupName}</h2>
                                    <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 rounded-full text-slate-500">{styles.length}</span>
                                    <div className="h-px bg-slate-200 flex-grow"></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {styles.map(style => (
                                        <StyleCard
                                            key={style.id}
                                            style={style}
                                            onUseInCalculator={onUseInCalculator}
                                            onDelete={deleteUserStyle}
                                        />
                                    ))}
                                </div>
                            </section>
                        );
                    })
                )}
            </div>

            {/* Filter Drawer */}
            <StylesFilterDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                availableTags={availableTags}
                selectedTags={selectedTags}
                onToggleTag={(tag) => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])}
                selectedDifficulty={selectedDifficulty}
                onToggleDifficulty={(diff) => setSelectedDifficulty(prev => prev.includes(diff) ? prev.filter(d => d !== diff) : [...prev, diff])}
                availableRegions={availableRegions}
                selectedRegions={selectedRegions}
                onToggleRegion={(region) => setSelectedRegions(prev => prev.includes(region) ? prev.filter(r => r !== region) : [...prev, region])}
                onClearAll={() => {
                    setSelectedTags([]);
                    setSelectedDifficulty([]);
                    setSelectedRegions([]);
                }}
            />
            <AdCard context="styles_list" className="mt-12" />
        </LibraryPageLayout>
    );
};

export default DoughStylesPage;
