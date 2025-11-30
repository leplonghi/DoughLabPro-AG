import React, { useState, useMemo } from 'react';
import {
    BookOpenIcon,
    SparklesIcon,
    CalculatorIcon,
    TrashIcon,
    HeartIcon,
    BarsArrowDownIcon,
    BarsArrowUpIcon,
    FunnelIcon,
    TagIcon
} from '@/components/ui/Icons';
import { STYLES_DATA } from '@/data/stylesData';
import { DoughStyleDefinition, StyleCategory } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import CreateStyleModal from '@/components/styles/CreateStyleModal';
import AiStyleBuilderModal from '@/components/styles/AiStyleBuilderModal';
import { ToppingPlannerModal } from '@/components/modals/ToppingPlannerModal';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';
import { canUseFeature, getCurrentPlan } from '@/permissions';
import { LibraryPageLayout } from '../learn/LibraryPageLayout';
import { StyleCard } from '@/components/styles/StyleCard';
import { normalizeDoughStyle } from '@/utils/styleAdapter';
import { DoughConfig } from '@/types';
import { useStyleSearch } from '@/hooks/useStyleSearch';

interface DoughStylesPageProps {
    doughConfig: DoughConfig;
    onLoadStyle: (style: DoughStyleDefinition) => void;
    onNavigateToDetail: (styleId: string) => void;
}

// Navigation Categories matching the new taxonomy
// Navigation Categories matching the new taxonomy
const CATEGORY_FILTERS: { id: StyleCategory | 'All', label: string }[] = [
    { id: 'All', label: 'All Styles' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'bread', label: 'Breads' },
    { id: 'enriched_bread', label: 'Enriched Breads' },
    { id: 'burger_bun', label: 'Burger Buns' },
    { id: 'pastry', label: 'Pastry & Laminated' },
    { id: 'cookies_confectionery', label: 'Cookies & Confectionery' },
    { id: 'flatbread', label: 'Flatbreads & Unleavened' },
    { id: 'other', label: 'Other / Experimental' },
];

// Helper to group categories for display sections
// Helper to group categories for display sections
const getDisplayGroup = (category: StyleCategory): string => {
    switch (category) {
        case 'pizza': return 'Pizza';
        case 'bread': return 'Bread';
        case 'enriched_bread': return 'Enriched Breads';
        case 'burger_bun': return 'Burger Buns';
        case 'pastry': return 'Pastry & Laminated';
        case 'cookies_confectionery': return 'Cookies & Confectionery';
        case 'flatbread': return 'Flatbreads & Unleavened';
        default: return 'Other / Experimental';
    }
};

// Priority order for display groups
// Priority order for display groups
const GROUP_ORDER = [
    'Pizza',
    'Bread',
    'Enriched Breads',
    'Burger Buns',
    'Pastry & Laminated',
    'Cookies & Confectionery',
    'Flatbreads & Unleavened',
    'Other / Experimental'
];

const DoughStylesPage: React.FC<DoughStylesPageProps> = ({ doughConfig, onLoadStyle, onNavigateToDetail }) => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);
    const [styleToEdit, setStyleToEdit] = useState<Partial<DoughStyleDefinition> | undefined>(undefined);
    const [isPlannerOpen, setIsPlannerOpen] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const { userStyles, addUserStyle, deleteUserStyle, isFavorite, toggleFavorite, hasProAccess, openPaywall, user } = useUser();
    const userPlan = getCurrentPlan(user);

    // Combine Official and User Styles
    const allStyles: DoughStyleDefinition[] = useMemo(() => {
        const normalizedUserStyles = userStyles.map(normalizeDoughStyle);
        return [...STYLES_DATA, ...normalizedUserStyles];
    }, [userStyles]);

    const {
        searchTerm, setSearchTerm,
        selectedCategory, setSelectedCategory,
        selectedTag, setSelectedTag,
        showFavorites, setShowFavorites,
        filterSubstyles, setFilterSubstyles,
        filterRegional, setFilterRegional,
        filterSeasonal, setFilterSeasonal,
        sortBy, setSortBy,
        sortOrder, setSortOrder,
        availableTags,
        filteredStyles
    } = useStyleSearch({ styles: allStyles });

    // Helper to count styles in a category
    const countByCategory = (cat: string) => {
        if (cat === 'All') return allStyles.length;
        return allStyles.filter(s => s.category === cat).length;
    };

    // Group styles by Display Section
    const stylesByGroup = useMemo(() => {
        const grouped: Record<string, DoughStyleDefinition[]> = {};
        filteredStyles.forEach(style => {
            const groupName = getDisplayGroup(style.category);
            if (!grouped[groupName]) grouped[groupName] = [];
            grouped[groupName].push(style);
        });
        return grouped;
    }, [filteredStyles]);

    const handleUseStyle = (e: React.MouseEvent, style: DoughStyleDefinition) => {
        e.stopPropagation();
        if (onLoadStyle) {
            onLoadStyle(style);
        }
    };

    const handleDeleteUserStyle = async (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        if (confirm('Are you sure you want to delete this custom style?')) {
            await deleteUserStyle(id);
        }
    };

    const handleAiStyleGenerated = (style: Partial<DoughStyleDefinition>) => {
        setStyleToEdit({ ...style, source: 'user_ai' });
        setIsCreateModalOpen(true);
        setIsAiModalOpen(false);
    };

    return (
        <LibraryPageLayout>
            {/* Hero Section */}
            <div className="mb-8 mx-4 sm:mx-6">
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden border border-slate-700">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-600 text-lime-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                            <BookOpenIcon className="w-4 h-4" />
                            Style Library
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                            Global Dough Style Encyclopedia
                        </h1>
                        <p className="text-base md:text-lg text-slate-300 mb-6 leading-relaxed font-light">
                            Scientific profiles, baking parameters, and regional variants.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-400">
                            <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700">
                                <span className="w-2 h-2 rounded-full bg-lime-500"></span> Validated Formulas
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700">
                                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Historical Context
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700">
                                <span className="w-2 h-2 rounded-full bg-sky-500"></span> Technical Profiles
                            </span>
                        </div>
                    </div>
                </div>

                {/* Create Your Own Section */}
                <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-2xl bg-white border border-stone-200 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent pointer-events-none" />
                    <div className="flex flex-col justify-center relative z-10">
                        <h3 className="font-extrabold text-slate-900 text-xl flex items-center gap-2">
                            <SparklesIcon className="h-5 w-5 text-lime-500" />
                            Create Your Own
                        </h3>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">Define your own unique methods or ask AI to generate a technical profile for you.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-end items-center relative z-10">
                        <ProFeatureLock featureKey="styles.full_access" customMessage="Unlock AI Style Builder with Lab Pro.">
                            <button
                                onClick={() => setIsAiModalOpen(true)}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 px-6 font-bold text-white shadow-md hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
                            >
                                <SparklesIcon className="h-5 w-5" /> Ask AI for a Style
                            </button>
                        </ProFeatureLock>
                    </div>
                </div>

                {/* Toppings Planner CTA */}
                <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-center p-6 rounded-2xl bg-lime-50 border border-lime-200 shadow-sm relative overflow-hidden">
                    <p className="text-base font-semibold text-slate-800 text-center md:text-left relative z-10">Need to calculate toppings or fillings for your bake?</p>
                    <button onClick={() => setIsPlannerOpen(true)} className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-lime-500 py-3 px-6 font-bold text-white shadow-md hover:bg-lime-600 transition-all duration-300 hover:scale-105 relative z-10">
                        <CalculatorIcon className="h-5 w-5" /> Open Ingredients Planner
                    </button>
                </div>

                {/* Search and Filter Bar */}
                <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between bg-white/80 p-5 rounded-2xl border border-stone-200 sticky top-20 z-20 shadow-sm backdrop-blur-lg">
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                        {CATEGORY_FILTERS.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id as any)}
                                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 shadow-sm ${selectedCategory === cat.id ? 'bg-lime-500 text-white shadow-md scale-105' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:scale-105'}`}
                            >
                                {cat.label}
                                <span className={`text-[10px] py-1 px-2 rounded-full font-bold ${selectedCategory === cat.id ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    {countByCategory(cat.id)}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                        {/* Favorites Toggle */}
                        <button
                            onClick={() => setShowFavorites(!showFavorites)}
                            className={`p-3 rounded-xl border transition-all ${showFavorites ? 'bg-pink-50 border-pink-200 text-pink-500' : 'bg-white border-slate-200 text-slate-400 hover:text-pink-400'}`}
                            title="Show Favorites Only"
                        >
                            <HeartIcon className={`h-5 w-5 ${showFavorites ? 'fill-current' : ''}`} />
                        </button>

                        {/* Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`p-3 rounded-xl border transition-all ${showFilters || selectedTag ? 'bg-lime-50 border-lime-200 text-lime-600' : 'bg-white border-slate-200 text-slate-400 hover:text-lime-500'}`}
                            title="Filter by Tags"
                        >
                            <FunnelIcon className="h-5 w-5" />
                        </button>

                        {/* Sort Controls */}
                        <div className="flex items-center bg-white rounded-xl border border-slate-200 p-1">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as any)}
                                className="border-none bg-transparent text-sm font-semibold text-slate-600 focus:ring-0 py-2 pl-3 pr-8 cursor-pointer"
                            >
                                <option value="name">Name</option>
                                <option value="newest">Newest</option>
                                <option value="hydration">Hydration</option>
                            </select>
                            <button
                                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                                className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
                            >
                                {sortOrder === 'asc' ? <BarsArrowUpIcon className="h-5 w-5" /> : <BarsArrowDownIcon className="h-5 w-5" />}
                            </button>
                        </div>

                        <div className="relative flex-grow md:w-64">
                            <input
                                type="text"
                                className="block w-full rounded-xl border-2 border-slate-200 bg-white py-3 pl-5 pr-4 text-sm placeholder-slate-500 focus:border-lime-500 focus:ring-4 focus:ring-lime-500/20 transition-all shadow-sm"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Advanced Filters */}
                <div className="mb-6 flex flex-wrap gap-4 px-4">
                    <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                        <input type="checkbox" checked={filterSubstyles} onChange={e => setFilterSubstyles(e.target.checked)} className="rounded border-slate-300 text-lime-500 focus:ring-lime-500" />
                        Substyles Available
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                        <input type="checkbox" checked={filterRegional} onChange={e => setFilterRegional(e.target.checked)} className="rounded border-slate-300 text-lime-500 focus:ring-lime-500" />
                        Regional Expressions
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                        <input type="checkbox" checked={filterSeasonal} onChange={e => setFilterSeasonal(e.target.checked)} className="rounded border-slate-300 text-lime-500 focus:ring-lime-500" />
                        Seasonal Variants
                    </label>
                </div>

                {/* Tags Filter - Collapsible */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showFilters || selectedTag ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'}`}>
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                                <TagIcon className="h-3 w-3" /> Filter by Tag
                            </span>
                            {selectedTag && (
                                <button
                                    onClick={() => setSelectedTag(null)}
                                    className="text-xs text-red-500 hover:text-red-700 font-medium hover:underline"
                                >
                                    Clear Filter
                                </button>
                            )}
                        </div>

                        {availableTags.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                                {availableTags.map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => setSelectedTag(prev => prev === tag ? null : tag)}
                                        className={`text-sm px-3 py-1.5 rounded-lg border transition-all ${selectedTag === tag
                                            ? 'bg-lime-500 text-white border-lime-600 shadow-md'
                                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-white hover:border-lime-300 hover:text-lime-600 hover:shadow-sm'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-slate-400 italic">No tags available for current selection.</p>
                        )}
                    </div>
                </div>

                <div className="space-y-12 mb-20">
                    {Object.keys(stylesByGroup).length === 0 ? (
                        <div className="col-span-full text-center py-12 text-slate-500">
                            No styles found matching criteria.
                        </div>
                    ) : (
                        GROUP_ORDER.map(groupName => {
                            const styles = stylesByGroup[groupName];
                            if (!styles || styles.length === 0) return null;

                            return (
                                <section key={groupName} className="animate-fade-in">
                                    <div className="flex items-center gap-4 mb-6">
                                        <h2 className="text-2xl font-bold text-slate-800">{groupName}</h2>
                                        <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded-full text-slate-500">{styles.length}</span>
                                        <div className="h-px bg-slate-200 flex-grow"></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {styles.map(style => (
                                            <StyleCard
                                                key={style.id}
                                                style={style}
                                            />
                                        ))}
                                    </div>
                                </section>
                            );
                        })
                    )}
                </div>
            </div>

            <CreateStyleModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                defaultValues={styleToEdit}
                onSave={async (style) => {
                    await addUserStyle(style);
                    setIsCreateModalOpen(false);
                }}
            />

            <AiStyleBuilderModal
                isOpen={isAiModalOpen}
                onClose={() => setIsAiModalOpen(false)}
                onStyleGenerated={handleAiStyleGenerated}
            />

            {isPlannerOpen && <ToppingPlannerModal onClose={() => setIsPlannerOpen(false)} totalBalls={doughConfig.numPizzas} />}
        </LibraryPageLayout>
    );
};

export default DoughStylesPage;
