// Force rebuild
import React, { useState, useMemo } from 'react';
import {
    BookOpenIcon,
    BeakerIcon,
    FireIcon,
    CubeIcon,
    ChevronRightIcon,
    StarIcon,
    CalculatorIcon,
    TrashIcon,
    FlourIcon,
    SparklesIcon,
    UserCircleIcon,
    GlobeAltIcon,
    TagIcon,
    HeartIcon,
    BarsArrowDownIcon,
    BarsArrowUpIcon,
    FunnelIcon,
    LockClosedIcon
} from '@/components/ui/Icons';
import { DoughStyleDefinition, DoughConfig, StyleCategory } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import { useCalculator } from '@/contexts/CalculatorContext';
import CreateStyleModal from '@/components/styles/CreateStyleModal';
import AiStyleBuilderModal from '@/components/styles/AiStyleBuilderModal';
import { ToppingPlannerModal } from '@/components/modals/ToppingPlannerModal';
import { canUseFeature, getCurrentPlan } from '@/permissions';
import { LibraryPageLayout } from '../learn/LibraryPageLayout';

interface DoughStylesPageProps {
    doughConfig: DoughConfig;
    onLoadStyle: (style: DoughStyleDefinition) => void;
    onNavigateToDetail: (styleId: string) => void;
}

// Navigation Categories matching the new taxonomy
const CATEGORY_FILTERS: { id: StyleCategory | 'all', label: string }[] = [
    { id: 'all', label: 'All Styles' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'bread', label: 'Breads' },
    { id: 'enriched_bread', label: 'Enriched' },
    { id: 'burger_bun', label: 'Buns' },
    { id: 'pastry', label: 'Pastry' },
    { id: 'cookie', label: 'Cookies' },
];

// Helper to group categories for display sections
const getDisplayGroup = (category: StyleCategory): string => {
    switch (category) {
        case 'pizza': return 'Pizzas';
        case 'bread': return 'Breads & Rustic Loaves';
        case 'enriched_bread': return 'Enriched Breads';
        case 'flatbread': return 'Flatbreads';
        case 'burger_bun': return 'Burger Buns';
        case 'pastry': return 'Pastry & Sweet Doughs';
        case 'cookie': return 'Cookies & Confectionery';
        default: return 'Other Styles';
    }
};

// Priority order for display groups
const GROUP_ORDER = [
    'Pizzas',
    'Breads & Rustic Loaves',
    'Enriched Breads',
    'Burger Buns',
    'Pastry & Sweet Doughs',
    'Cookies & Confectionery',
    'Other Styles'
];

const CategoryBadge: React.FC<{ category: StyleCategory }> = ({ category }) => {
    let colorClass = 'bg-slate-100 text-slate-700 border-slate-200';
    let icon = <CubeIcon className="h-3 w-3 mr-1" />;

    switch (category) {
        case 'pizza':
            colorClass = 'bg-orange-50 text-orange-700 border-orange-200';
            icon = <FireIcon className="h-3 w-3 mr-1" />;
            break;
        case 'bread':
            colorClass = 'bg-amber-50 text-amber-800 border-amber-200';
            icon = <BeakerIcon className="h-3 w-3 mr-1" />;
            break;
        case 'enriched_bread':
            colorClass = 'bg-yellow-50 text-yellow-700 border-yellow-200';
            icon = <StarIcon className="h-3 w-3 mr-1" />;
            break;
        case 'burger_bun':
            colorClass = 'bg-orange-50 text-orange-800 border-orange-200';
            icon = <CubeIcon className="h-3 w-3 mr-1" />;
            break;
        case 'pastry':
            colorClass = 'bg-pink-50 text-pink-700 border-pink-200';
            icon = <SparklesIcon className="h-3 w-3 mr-1" />;
            break;
        case 'cookie':
            colorClass = 'bg-stone-100 text-stone-700 border-stone-200';
            icon = <FlourIcon className="h-3 w-3 mr-1" />;
            break;
    }

    return (
        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${colorClass}`}>
            {icon}
            {category.replace(/_/g, ' ')}
        </span>
    );
};

const TechnicalBadge: React.FC<{ label: string, value: string | number }> = ({ label, value }) => (
    <div className="flex flex-col px-2 py-0.5 bg-slate-50 rounded border border-slate-100 items-center text-center">
        <span className="text-[9px] uppercase text-slate-400 font-bold tracking-wider">{label}</span>
        <span className="text-[10px] font-semibold text-slate-700">{value}</span>
    </div>
);

const StyleCard: React.FC<{ style: DoughStyleDefinition; onClick: () => void; onUse: (e: React.MouseEvent) => void; onDelete?: (e: React.MouseEvent) => void }> = ({ style, onClick, onUse, onDelete }) => {
    // New Badge Logic (last 30 days)
    const isNew = useMemo(() => {
        if (!style.releaseDate) return false;
        const release = new Date(style.releaseDate);
        const diffTime = Math.abs(new Date().getTime() - release.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 30;
    }, [style.releaseDate]);

    // Format hydration display
    const hydrationDisplay = style.technicalProfile
        ? `${style.technicalProfile.hydration[0]}-${style.technicalProfile.hydration[1]}%`
        : `${style.technical.hydration}%`;

    return (
        <div
            onClick={onClick}
            className="group flex flex-col rounded-xl border border-stone-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full relative overflow-hidden hover:border-lime-500"
        >
            {style.isPro && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-lime-400 to-lime-600 text-white text-[9px] font-bold px-2 py-1 rounded-bl-xl shadow-lg z-10 uppercase tracking-wide animate-pulse">
                    ✨ PRO
                </div>
            )}
            {!style.isCanonical && (
                <div className={`absolute top-0 left-0 text-white text-[9px] font-bold px-2 py-1 rounded-br-xl shadow-lg z-10 uppercase tracking-wide flex items-center gap-1 ${style.source === 'user_ai' ? 'bg-gradient-to-br from-indigo-400 to-indigo-600' : 'bg-gradient-to-br from-sky-400 to-sky-600'}`}>
                    {style.source === 'user_ai' ? <SparklesIcon className="h-2.5 w-2.5 animate-pulse" /> : <UserCircleIcon className="h-2.5 w-2.5" />}
                    {style.source === 'user_ai' ? 'AI' : 'CUSTOM'}
                </div>
            )}
            {isNew && style.isCanonical && (
                <div className="absolute top-0 left-0 bg-gradient-to-br from-blue-400 to-blue-600 text-white text-[9px] font-bold px-2 py-1 rounded-br-xl shadow-lg z-10 uppercase tracking-wide flex items-center gap-1">
                    <SparklesIcon className="h-2.5 w-2.5" /> NEW
                </div>
            )}

            <div className="p-4 flex-grow flex flex-col relative z-[1]">
                <div className="flex justify-between items-start mb-2 mt-1">
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-lime-600 transition-all duration-300 line-clamp-1 leading-tight">
                        {style.name}
                    </h3>
                </div>

                <div className="mb-3 flex gap-2 flex-wrap items-center">
                    <CategoryBadge category={style.category} />
                    <span className="text-[10px] font-semibold text-slate-600 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-1 transition-all hover:scale-105">
                        <GlobeAltIcon className="h-2.5 w-2.5" /> {style.country}
                    </span>
                </div>

                <p className="text-xs text-slate-600 mb-3 line-clamp-2 flex-grow leading-relaxed">
                    {style.description}
                </p>

                {/* Technical Stats Grid */}
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                    <TechnicalBadge label="Hydration" value={hydrationDisplay} />
                    <TechnicalBadge label="Time" value={style.technicalProfile ? style.technicalProfile.fermentation?.bulk.split(' ')[0] : 'Std'} />
                    <TechnicalBadge label="Skill" value={style.technicalProfile?.difficulty || 'Med'} />
                </div>

                <div className="mt-auto pt-3 border-t border-slate-100 flex gap-1.5">
                    <button
                        onClick={onUse}
                        className="flex-1 bg-lime-500 text-white hover:bg-lime-600 text-[10px] font-bold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 shadow-md hover:shadow-lg hover:scale-105"
                    >
                        <CalculatorIcon className="h-3 w-3" /> Use Style
                    </button>
                    {!style.isCanonical && onDelete && (
                        <button
                            onClick={onDelete}
                            className="bg-red-50 text-red-600 hover:bg-red-100 p-2 rounded-lg transition-all hover:scale-105 shadow-sm"
                            title="Delete Style"
                        >
                            <TrashIcon className="h-3 w-3" />
                        </button>
                    )}
                    <button className="flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 text-[10px] font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 shadow-sm hover:shadow-md hover:scale-105">
                        Details <ChevronRightIcon className="h-3 w-3" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const DoughStylesPage: React.FC<DoughStylesPageProps> = ({ doughConfig, onLoadStyle, onNavigateToDetail }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<StyleCategory | 'all'>('all');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);
    const [styleToEdit, setStyleToEdit] = useState<Partial<DoughStyleDefinition> | undefined>(undefined);
    const [isPlannerOpen, setIsPlannerOpen] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState<'name' | 'newest' | 'hydration'>('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const { userStyles, addUserStyle, deleteUserStyle, isFavorite, toggleFavorite, hasProAccess, openPaywall, user } = useUser();
    const { styles: contextStyles } = useCalculator(); // Import styles from context
    const userPlan = getCurrentPlan(user);

    // Combine Official and User Styles using the context which has static + remote data
    const allStyles = useMemo(() => [...contextStyles, ...userStyles], [contextStyles, userStyles]);

    // Extract unique tags from all available styles
    const availableTags = useMemo(() => {
        const tags = new Set<string>();
        allStyles.forEach(style => {
            style.tags?.forEach(t => tags.add(t));
        });
        return Array.from(tags).sort();
    }, [allStyles]);

    // Helper to count styles in a category
    const countByCategory = (cat: string) => {
        if (cat === 'all') return allStyles.length;
        return allStyles.filter(s => s.category === cat).length;
    };

    // Group styles by Display Section
    const stylesByGroup = useMemo(() => {
        const filtered = allStyles.filter(style => {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = style.name.toLowerCase().includes(searchLower) ||
                style.description.toLowerCase().includes(searchLower) ||
                (style.tags && style.tags.some(t => t.toLowerCase().includes(searchLower)));

            const matchesCategory = selectedCategory === 'all' || style.category === selectedCategory;

            const matchesTag = selectedTag ? style.tags?.includes(selectedTag) : true;
            const matchesFavorite = showFavorites ? isFavorite(style.id) : true;

            return matchesSearch && matchesCategory && matchesTag && matchesFavorite;
        });

        // Sort
        filtered.sort((a, b) => {
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
                    const hydA = a.technicalProfile ? (a.technicalProfile.hydration[0] + a.technicalProfile.hydration[1]) / 2 : a.technical.hydration;
                    const hydB = b.technicalProfile ? (b.technicalProfile.hydration[0] + b.technicalProfile.hydration[1]) / 2 : b.technical.hydration;
                    comparison = hydA - hydB;
                    break;
            }
            return sortOrder === 'asc' ? comparison : -comparison;
        });

        const grouped: Record<string, DoughStyleDefinition[]> = {};
        filtered.forEach(style => {
            const groupName = getDisplayGroup(style.category);
            if (!grouped[groupName]) grouped[groupName] = [];
            grouped[groupName].push(style);
        });

        return grouped;
    }, [searchTerm, selectedCategory, selectedTag, allStyles, sortBy, sortOrder, showFavorites]);

    const handleUseStyle = (e: React.MouseEvent, style: DoughStyleDefinition) => {
        e.stopPropagation();
        if (style.isPro && !canUseFeature(userPlan, 'styles.full_access')) {
            openPaywall('styles');
            return;
        }
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
                <div className="bg-gradient-to-br from-[#3A6B3A] to-[#558B55] rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="relative z-10 grid md:grid-cols-3 gap-6 items-center">
                        <div className="md:col-span-2 text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider mb-4">
                                <BookOpenIcon className="w-4 h-4" />
                                Style Library
                            </div>
                            <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                                The Global Encyclopedia of Dough
                            </h1>
                            <p className="text-base md:text-lg text-lime-100/90 mb-6 leading-relaxed">
                                Explore <span className="font-bold text-lime-400">technical formulas</span> for Pizzas, Breads, Pastry, and more. Validated recipes with precise hydration and fermentation parameters.
                            </p>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-medium text-lime-100/60">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> Pizza & Breads
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Pastry & Sweets
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Regional Specialties
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> Technical Profiles
                                </span>
                            </div>
                        </div>

                        <div className="hidden md:block bg-white/10 rounded-2xl p-4 border border-white/5 backdrop-blur-sm">
                            <h3 className="text-lime-300 font-bold mb-2 flex items-center gap-2 text-sm">
                                <SparklesIcon className="w-4 h-4" />
                                Did you know?
                            </h3>
                            <ul className="space-y-2 text-xs text-lime-100/70">
                                <li className="flex gap-2">
                                    <span className="text-lime-500">•</span>
                                    Neapolitan pizza cooks in 90s at 485°C
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-lime-500">•</span>
                                    Brioche can contain 50% butter
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-lime-500">•</span>
                                    Sourdough improves digestibility
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Create Your Own Section - Premium Design */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent pointer-events-none" />
                    <div className="flex flex-col justify-center relative z-10">
                        <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                            <SparklesIcon className="h-5 w-5 text-lime-500" />
                            Create Your Own
                        </h3>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">Define your own unique methods or ask AI to generate a technical profile for you.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-end items-center relative z-10">
                        <button
                            disabled
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 py-2.5 px-5 font-bold text-slate-400 shadow-none cursor-not-allowed text-sm border border-slate-200"
                        >
                            <LockClosedIcon className="h-4 w-4" /> Ask AI for a Style (Coming Soon)
                        </button>
                    </div>
                </div>

                {/* Search and Filter Bar - Premium Design */}
                <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between bg-white/80 p-4 rounded-2xl border border-stone-200 sticky top-20 z-20 shadow-sm backdrop-blur-lg">
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                        {CATEGORY_FILTERS.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id as any)}
                                className={`whitespace-nowrap px-3 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 shadow-sm ${selectedCategory === cat.id ? 'bg-lime-500 text-white shadow-md scale-105' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:scale-105'}`}
                            >
                                {cat.label}
                                <span className={`text-[9px] py-0.5 px-1.5 rounded-full font-bold ${selectedCategory === cat.id ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    {countByCategory(cat.id)}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                        {/* Favorites Toggle */}
                        <button
                            onClick={() => setShowFavorites(!showFavorites)}
                            className={`p-2.5 rounded-xl border transition-all ${showFavorites ? 'bg-pink-50 border-pink-200 text-pink-500' : 'bg-white border-slate-200 text-slate-400 hover:text-pink-400'}`}
                            title="Show Favorites Only"
                        >
                            <HeartIcon className={`h-4 w-4 ${showFavorites ? 'fill-current' : ''}`} />
                        </button>

                        {/* Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`p-2.5 rounded-xl border transition-all ${showFilters || selectedTag ? 'bg-lime-50 border-lime-200 text-lime-600' : 'bg-white border-slate-200 text-slate-400 hover:text-lime-500'}`}
                            title="Filter by Tags"
                        >
                            <FunnelIcon className="h-4 w-4" />
                        </button>

                        {/* Sort Controls */}
                        <div className="flex items-center bg-white rounded-xl border border-slate-200 p-1">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as any)}
                                className="border-none bg-transparent text-xs font-semibold text-slate-600 focus:ring-0 py-1.5 pl-2 pr-6 cursor-pointer"
                            >
                                <option value="name">Name</option>
                                <option value="newest">Newest</option>
                                <option value="hydration">Hydration</option>
                            </select>
                            <button
                                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                                className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
                            >
                                {sortOrder === 'asc' ? <BarsArrowUpIcon className="h-4 w-4" /> : <BarsArrowDownIcon className="h-4 w-4" />}
                            </button>
                        </div>

                        <div className="relative flex-grow md:w-56">
                            <input
                                type="text"
                                className="block w-full rounded-xl border-2 border-slate-200 bg-white py-2.5 pl-4 pr-3 text-sm placeholder-slate-500 focus:border-lime-500 focus:ring-4 focus:ring-lime-500/20 transition-all shadow-sm"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Tags Filter - Collapsible */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showFilters || selectedTag ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
                    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
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
                                        className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${selectedTag === tag
                                            ? 'bg-lime-500 text-white border-lime-600 shadow-md'
                                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-white hover:border-lime-300 hover:text-lime-600 hover:shadow-sm'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <p className="text-xs text-slate-400 italic">No tags available for current selection.</p>
                        )}
                    </div>
                </div>

                <div className="space-y-10 mb-20">
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
                                    <div className="flex items-center gap-3 mb-4">
                                        <h2 className="text-xl font-bold text-slate-800">{groupName}</h2>
                                        <span className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 rounded-full text-slate-500">{styles.length}</span>
                                        <div className="h-px bg-slate-200 flex-grow"></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                        {styles.map(style => (
                                            <StyleCard
                                                key={style.id}
                                                style={style}
                                                onClick={() => onNavigateToDetail(style.id)}
                                                onUse={(e) => handleUseStyle(e, style)}
                                                onDelete={!style.isCanonical ? (e) => handleDeleteUserStyle(e, style.id) : undefined}
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
