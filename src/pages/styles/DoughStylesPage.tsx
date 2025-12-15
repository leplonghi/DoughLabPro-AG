import React, { useState, useMemo } from 'react';
import { DoughStyleDefinition, StyleCategory } from '@/types/styles';
import { useStyles } from '@/contexts/StylesProvider';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
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
    ChefHat,
    Globe,
    LayoutGrid,
    Pizza,
    Wheat,
    Croissant,
    CircleDot,
    Cookie,
    ScrollText,
    MoreHorizontal
} from 'lucide-react';
import { normalizeDoughStyle } from '@/utils/styleAdapter';
import { AdCard } from '@/marketing/ads/AdCard';

// ========================================================
// 1. CONSTANTS & CONFIG
// ========================================================

// Category filters - labels will be translated dynamically
const getCategoryFilters = (t: any): { id: StyleCategory | 'All', label: string, iconSrc: string }[] => [
    { id: 'All', label: t('styles_page.categories.all'), iconSrc: '/icons/styles/all.png' },
    { id: 'pizza', label: t('styles_page.categories.pizza'), iconSrc: '/icons/styles/pizza.png' },
    { id: 'bread', label: t('styles_page.categories.bread'), iconSrc: '/icons/styles/bread.png' },
    { id: 'enriched_bread', label: t('styles_page.categories.enriched_bread'), iconSrc: '/icons/styles/enriched.png' },
    { id: 'burger_bun', label: t('styles_page.categories.burger_bun'), iconSrc: '/icons/styles/bun.png' },
    { id: 'pastry', label: t('styles_page.categories.pastry'), iconSrc: '/icons/styles/pastry.png' },
    { id: 'cookie', label: t('styles_page.categories.cookie'), iconSrc: '/icons/styles/cookie.png' },
    { id: 'flatbread', label: t('styles_page.categories.flatbread'), iconSrc: '/icons/styles/flatbread.png' },
    { id: 'other', label: t('styles_page.categories.other'), iconSrc: '/icons/styles/other.png' },
];

const GROUP_ORDER = [
    'pizzas',
    'breads',
    'enriched',
    'buns',
    'pastry',
    'cookies',
    'flatbreads',
    'other'
];

const getDisplayGroup = (category: StyleCategory): string => {
    switch (category) {
        case 'pizza': return 'pizzas';
        case 'bread': return 'breads';
        case 'enriched_bread': return 'enriched';
        case 'burger_bun': return 'buns';
        case 'pastry': return 'pastry';
        case 'cookie': return 'cookies';
        case 'flatbread': return 'flatbreads';
        default: return 'other';
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
    const { styles: stylesData } = useStyles();
    const { userStyles, isFavorite, deleteUserStyle } = useUser();
    const { t } = useTranslation();
    const CATEGORY_FILTERS = getCategoryFilters(t);

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
        // stylesData comes from context now (which might be Firestore or fallback)
        return [...stylesData, ...normalizedUserStyles];
    }, [stylesData, userStyles]);

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
                title={t('styles.discover_professional_dough_specifications_from_ar')}
                subtitle={t('styles_page.hero_subtitle')}
                backgroundClass="bg-gradient-to-br from-[#1c2e1c] to-[#2d4a2d]"
                badges={
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                        <Globe className="w-4 h-4" />{t('common.global_library')}</div>
                }
            />

            {/* Actions Bar - Simplified for new layout */}
            <div className="flex justify-end mb-6">
                <div className="flex gap-2">
                    <LockFeature featureKey="styles.ai.builder" customMessage={t('general.unlock_ai_builder')} origin="styles.ai.builder">
                        <button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-2.5 px-5 rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:scale-105 flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />{t('common.ai_style_builder')}</button>
                    </LockFeature>
                </div>
            </div>

            {/* Sticky Filter Header */}
            <div className="sticky top-2 z-30 mb-8 transition-all duration-300">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-stone-200/80 shadow-lg shadow-stone-200/20 p-4 space-y-4">

                    {/* Top Row: Search & Meta Controls */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center pb-4 border-b border-stone-100">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-96 group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-lime-600 transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder={t('styles_page.search_placeholder')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 transition-all duration-200 sm:text-sm"
                            />
                        </div>

                        {/* Right Side Controls */}
                        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                            <button
                                onClick={() => setShowFavorites(!showFavorites)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${showFavorites
                                    ? 'bg-pink-50 text-pink-600 border border-pink-100'
                                    : 'bg-white text-slate-500 border border-transparent hover:bg-slate-50'
                                    }`}
                            >
                                <Heart className={`w-4 h-4 ${showFavorites ? 'fill-current' : ''}`} />
                                <span>{t('general.favorites')}</span>
                            </button>

                            <div className="h-6 w-px bg-slate-200 mx-1"></div>

                            <button
                                onClick={() => setIsDrawerOpen(true)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors relative ${activeFilterCount > 0
                                    ? 'bg-lime-50 text-lime-700 border border-lime-100'
                                    : 'bg-white text-slate-500 border border-transparent hover:bg-slate-50'
                                    }`}
                            >
                                <Filter className="w-4 h-4" />
                                <span>{t('general.filters')}</span>
                                {activeFilterCount > 0 && (
                                    <span className="ml-1 bg-lime-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                        {activeFilterCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Filter Rows Container */}
                    <div className="flex flex-col gap-3">

                        {/* TYPE Filter Row */}
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider w-12 flex-shrink-0">{t('styles.type_2')}</span>
                            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar mask-linear-fade flex-grow">
                                {CATEGORY_FILTERS.map(cat => {
                                    const isActive = selectedCategory === cat.id;

                                    // Custom active style for Pastry to distinguish from Pizza/Bread
                                    let activeClass = 'bg-slate-900 border-slate-900 text-white shadow-md transform scale-105';
                                    if (cat.id === 'pastry') {
                                        activeClass = 'bg-[#6d6c4e] border-[#6d6c4e] text-white shadow-md transform scale-105';
                                    }

                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.id as any)}
                                            className={`
                                                whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border flex items-center gap-2
                                                ${isActive
                                                    ? activeClass
                                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                                }
                                            `}
                                        >
                                            <img
                                                src={cat.iconSrc}
                                                alt={cat.label}
                                                className={`w-5 h-5 object-contain ${isActive ? 'brightness-200' : ''}`}
                                            />
                                            {cat.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* REGION Filter Row */}
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider w-12 flex-shrink-0">{t('general.region')}</span>
                            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar mask-linear-fade flex-grow">
                                <button
                                    onClick={() => setSelectedRegions([])}
                                    className={`
                                        whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border flex items-center gap-1.5
                                        ${selectedRegions.length === 0
                                            ? 'bg-slate-900 border-slate-900 text-white shadow-md transform scale-105'
                                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                        }
                                    `}
                                >
                                    <Globe className="w-3.5 h-3.5" />{t('common.any')}</button>

                                {availableRegions.map(region => {
                                    const isActive = selectedRegions.includes(region);

                                    return (
                                        <button
                                            key={region}
                                            onClick={() => {
                                                if (isActive) {
                                                    setSelectedRegions(prev => prev.filter(r => r !== region));
                                                } else {
                                                    setSelectedRegions(prev => [...prev, region]);
                                                }
                                            }}
                                            className={`
                                                whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border flex items-center gap-1.5
                                                ${isActive
                                                    ? 'bg-white border-lime-500 text-lime-700 ring-1 ring-lime-500 shadow-sm'
                                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                                }
                                            `}
                                        >
                                            {region}
                                        </button>
                                    );
                                })}
                            </div>
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
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{t('general.no_styles_found')}</h3>
                        <p className="text-slate-500 mb-6">{t('styles.try_adjusting_your_filters_or_search_terms')}</p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('All');
                                setSelectedTags([]);
                                setSelectedDifficulty([]);
                                setSelectedRegions([]);
                            }}
                            className="text-lime-600 font-bold hover:underline"
                        >{t('common.clear_all_filters')}</button>
                    </div>
                ) : (
                    GROUP_ORDER.map(groupName => {
                        const styles = stylesByGroup[groupName];
                        if (!styles || styles.length === 0) return null;

                        return (
                            <section key={groupName} className="animate-fade-in">
                                <div className="flex items-center gap-4 mb-6">
                                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{t(`styles_page.groups.${groupName}`)}</h2>
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
