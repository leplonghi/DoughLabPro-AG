import React, { useState, useMemo } from 'react';
import { DoughStyleDefinition, StyleCategory } from '@/types/styles';
import { STYLES_DATA } from '@/data/stylesData';
import { useUser } from '@/contexts/UserProvider';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { CategoryBadge } from '@/components/ui/CategoryBadge';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';
import {
    BookOpenIcon,
    SparklesIcon,
    CalculatorIcon,
    HeartIcon,
    FunnelIcon,
    TagIcon,
    BarsArrowDownIcon,
    BarsArrowUpIcon
} from '@/components/ui/Icons';
import { normalizeDoughStyle } from '@/utils/styleAdapter';

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
    { id: 'cookies_confectionery', label: 'Cookies' },
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
        case 'cookies_confectionery': return 'Cookies & Confectionery';
        case 'flatbread': return 'Flatbreads';
        default: return 'Other Styles';
    }
};

// ========================================================
// 2. SUB-COMPONENTS
// ========================================================

const StyleCard: React.FC<{ style: DoughStyleDefinition; onClick: () => void; onUseInCalculator: (style: DoughStyleDefinition) => void }> = ({ style, onClick, onUseInCalculator }) => {
    const { isFavorite, toggleFavorite } = useUser();
    const favorited = isFavorite(style.id);

    return (
        <div
            onClick={onClick}
            className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-lime-200 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full relative"
        >
            {/* Header */}
            <div className="p-5 pb-3">
                <div className="flex justify-between items-start mb-2">
                    <CategoryBadge category={style.category} />
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite({
                                id: style.id,
                                type: 'style',
                                title: style.name,
                                metadata: { category: style.category }
                            });
                        }}
                        className={`p-1.5 rounded-full hover:bg-slate-100 transition-colors ${favorited ? 'text-pink-500' : 'text-slate-300 hover:text-pink-400'}`}
                    >
                        <HeartIcon className={`h-5 w-5 ${favorited ? 'fill-current' : ''}`} />
                    </button>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-lime-600 transition-colors line-clamp-1">{style.name}</h3>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{style.origin.country} {style.origin.region && `• ${style.origin.region}`}</p>
            </div>

            {/* Description */}
            <div className="px-5 pb-4 flex-grow">
                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">{style.description}</p>
            </div>

            {/* Tech Specs */}
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-2">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-slate-400 font-bold">Hydration</span>
                    <span className="text-sm font-bold text-slate-700">
                        {style.technicalProfile?.hydration[0]}-{style.technicalProfile?.hydration[1]}%
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-slate-400 font-bold">Difficulty</span>
                    <span className={`text-sm font-bold ${style.technicalProfile?.difficulty === 'Easy' ? 'text-green-600' :
                        style.technicalProfile?.difficulty === 'Medium' ? 'text-amber-600' :
                            'text-red-600'
                        }`}>
                        {style.technicalProfile?.difficulty}
                    </span>
                </div>
            </div>

            {/* Badges/Tags */}
            {style.tags && style.tags.length > 0 && (
                <div className="px-5 py-3 border-t border-slate-100 flex flex-wrap gap-1">
                    {style.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full font-medium">
                            {tag}
                        </span>
                    ))}
                    {style.tags.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 bg-slate-50 text-slate-400 rounded-full font-medium">+{style.tags.length - 3}</span>
                    )}
                </div>
            )}

            {/* Actions */}
            <div className="p-4 border-t border-slate-100 mt-auto">
                <ProFeatureLock featureKey="styles.detail" customMessage="Unlock calculator integration" origin="styles.library">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onUseInCalculator(style);
                        }}
                        className="w-full bg-slate-50 hover:bg-lime-500 hover:text-white text-slate-600 text-sm font-bold py-2 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
                    >
                        <CalculatorIcon className="h-4 w-4 text-slate-400 group-hover/btn:text-white" />
                        Use in Calculator
                    </button>
                </ProFeatureLock>
            </div>
        </div>
    );
};

// ========================================================
// 3. MAIN PAGE COMPONENT
// ========================================================

interface DoughStylesPageProps {
    onNavigateToDetail: (styleId: string) => void;
    onUseInCalculator: (style: DoughStyleDefinition) => void;
}

const DoughStylesPage: React.FC<DoughStylesPageProps> = ({ onNavigateToDetail, onUseInCalculator }) => {
    const { userStyles, isFavorite } = useUser();

    // State
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<StyleCategory | 'All'>('All');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [showFavorites, setShowFavorites] = useState(false);
    const [sortBy, setSortBy] = useState<'name' | 'newest' | 'hydration'>('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [showFilters, setShowFilters] = useState(false);

    // Combine Data
    const allStyles = useMemo(() => {
        const normalizedUserStyles = userStyles.map(normalizeDoughStyle);
        // Ensure STYLES_DATA is treated as DoughStyleDefinition[]
        return [...(STYLES_DATA as unknown as DoughStyleDefinition[]), ...normalizedUserStyles];
    }, [userStyles]);

    // Derived Data: Available Tags
    const availableTags = useMemo(() => {
        const tags = new Set<string>();
        allStyles.forEach(style => style.tags?.forEach(t => tags.add(t)));
        return Array.from(tags).sort();
    }, [allStyles]);

    // Filter & Sort Logic
    const filteredStyles = useMemo(() => {
        let result = allStyles.filter(style => {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = style.name.toLowerCase().includes(searchLower) ||
                style.description.toLowerCase().includes(searchLower);
            const matchesCategory = selectedCategory === 'All' || style.category === selectedCategory;
            const matchesTag = selectedTag ? style.tags?.includes(selectedTag) : true;
            const matchesFavorite = showFavorites ? isFavorite(style.id) : true;

            return matchesSearch && matchesCategory && matchesTag && matchesFavorite;
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
            }
            return sortOrder === 'asc' ? comparison : -comparison;
        });
    }, [allStyles, searchTerm, selectedCategory, selectedTag, showFavorites, sortBy, sortOrder, isFavorite]);

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

    return (
        <LibraryPageLayout>
            <PageHero
                title="Global Dough Style Encyclopedia"
                subtitle="Scientific profiles, baking parameters, and regional variants."
                badges={
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-600 text-lime-400 text-xs font-bold uppercase tracking-wider shadow-sm">
                        <BookOpenIcon className="w-4 h-4" /> Style Library
                    </div>
                }
            />

            {/* Actions Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Create / AI */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent pointer-events-none" />
                    <div className="relative z-10 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                                <SparklesIcon className="h-5 w-5 text-lime-500" />
                                Create Custom Style
                            </h3>
                            <p className="text-sm text-slate-600 mt-1">Define your own or ask AI to generate it.</p>
                        </div>
                        <ProFeatureLock featureKey="styles.ai.builder" customMessage="Unlock AI Builder" origin="styles.ai.builder">
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl shadow-md transition-all transform hover:scale-105">
                                AI Builder
                            </button>
                        </ProFeatureLock>
                    </div>
                </div>

                {/* Planner CTA */}
                <div className="bg-lime-50 p-6 rounded-2xl border border-lime-200 shadow-sm flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg">Ingredients Planner</h3>
                        <p className="text-sm text-slate-700 mt-1">Calculate toppings & fillings.</p>
                    </div>
                    <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-xl shadow-md transition-all transform hover:scale-105 flex items-center gap-2">
                        <CalculatorIcon className="h-5 w-5" /> Open
                    </button>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-4 z-20 bg-white/90 backdrop-blur-lg p-4 rounded-2xl border border-stone-200 shadow-sm mb-8 flex flex-col gap-4">
                {/* Top Row: Categories & Search */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                        {CATEGORY_FILTERS.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id as any)}
                                className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${selectedCategory === cat.id
                                    ? 'bg-lime-500 text-white shadow-md'
                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
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
                            className={`p-2.5 rounded-xl border transition-all ${showFavorites ? 'bg-pink-50 border-pink-200 text-pink-500' : 'bg-white border-slate-200 text-slate-400 hover:text-pink-400'}`}
                        >
                            <HeartIcon className={`h-5 w-5 ${showFavorites ? 'fill-current' : ''}`} />
                        </button>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`p-2.5 rounded-xl border transition-all ${showFilters || selectedTag ? 'bg-lime-50 border-lime-200 text-lime-600' : 'bg-white border-slate-200 text-slate-400 hover:text-lime-500'}`}
                        >
                            <FunnelIcon className="h-5 w-5" />
                        </button>
                        <div className="relative flex-grow md:w-64">
                            <input
                                type="text"
                                placeholder="Search styles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full rounded-xl border-slate-200 bg-slate-50 py-2.5 pl-4 pr-4 text-sm focus:border-lime-500 focus:ring-lime-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Collapsible Filters: Tags & Sort */}
                {(showFilters || selectedTag) && (
                    <div className="pt-4 border-t border-slate-100 animate-fade-in">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Sort */}
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold uppercase text-slate-400">Sort By</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="text-sm border-slate-200 rounded-lg py-1.5 pl-3 pr-8 bg-slate-50"
                                >
                                    <option value="name">Name</option>
                                    <option value="newest">Newest</option>
                                    <option value="hydration">Hydration</option>
                                </select>
                                <button onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')} className="p-1.5 bg-slate-100 rounded-lg text-slate-500">
                                    {sortOrder === 'asc' ? <BarsArrowUpIcon className="h-4 w-4" /> : <BarsArrowDownIcon className="h-4 w-4" />}
                                </button>
                            </div>

                            {/* Tags */}
                            <div className="flex-grow">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1">
                                        <TagIcon className="h-3 w-3" /> Filter Tags
                                    </span>
                                    {selectedTag && (
                                        <button onClick={() => setSelectedTag(null)} className="text-xs text-red-500 font-medium hover:underline">Clear</button>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto custom-scrollbar">
                                    {availableTags.map(tag => (
                                        <button
                                            key={tag}
                                            onClick={() => setSelectedTag(prev => prev === tag ? null : tag)}
                                            className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${selectedTag === tag
                                                ? 'bg-lime-500 text-white border-lime-600'
                                                : 'bg-white text-slate-600 border-slate-200 hover:border-lime-300'
                                                }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Results Grid */}
            <div className="space-y-12 pb-20">
                {Object.keys(stylesByGroup).length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No styles found matching your criteria.</p>
                        <button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedTag(null); }} className="mt-4 text-lime-600 font-bold hover:underline">
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
                                    <h2 className="text-2xl font-bold text-slate-800">{groupName}</h2>
                                    <span className="text-xs font-bold px-2 py-1 bg-slate-100 rounded-full text-slate-500">{styles.length}</span>
                                    <div className="h-px bg-slate-200 flex-grow"></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {styles.map(style => (
                                        <StyleCard
                                            key={style.id}
                                            style={style}
                                            onClick={() => onNavigateToDetail(style.id)}
                                            onUseInCalculator={onUseInCalculator}
                                        />
                                    ))}
                                </div>
                            </section>
                        );
                    })
                )}
            </div>
        </LibraryPageLayout>
    );
};

export default DoughStylesPage;
