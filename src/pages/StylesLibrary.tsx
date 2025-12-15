import React, { useState, useMemo } from 'react';
import { STYLES_DATA, COMING_SOON_STYLES } from '@/data/styles/registry';
import { DoughStyleDefinition } from '@/types/styles';
import { Region, Category } from '@/types/dough';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { StyleCard } from '@/components/styles/StyleCard';
import { Search, ChefHat, Globe2, MapPin, Calendar, ChevronDown } from 'lucide-react';
import { RecommendedProducts } from '@/components/ui/RecommendedProducts';
import { useTranslation } from '@/i18n';

interface StylesLibraryPageProps {
    onNavigateToDetail: (id: string) => void;
    onUseInCalculator: (style: any) => void;
}

// Expanded Region Helper
const resolveRegion = (origin: string): Region | 'Global' => {
    const o = origin.toLowerCase();

    // Direct Region Matches
    if (o === 'asia') return 'Asia';
    if (o === 'europe') return 'Europe';
    if (o === 'north america') return 'North America';
    if (o === 'south america') return 'South America';
    if (o === 'italy') return 'Italy';

    // Country Mapping (Legacy Support)
    if (['usa', 'canada', 'mexico'].includes(o)) return 'North America';
    if (['brazil', 'argentina', 'colombia', 'peru'].includes(o)) return 'South America';
    if (['france', 'germany', 'denmark', 'uk', 'spain', 'sweden', 'poland', 'belgium', 'netherlands'].includes(o)) return 'Europe';
    if (['japan', 'china', 'india', 'taiwan', 'korea', 'thailand', 'vietnam'].includes(o)) return 'Asia';

    return 'Global';
};

export const StylesLibraryPage: React.FC<StylesLibraryPageProps> = ({ onUseInCalculator }) => {
    const { t } = useTranslation();
    // State
    const [filterCategory, setFilterCategory] = useState<Category | 'All'>('All');
    const [filterRegion, setFilterRegion] = useState<Region | 'All' | 'Global'>('All');
    const [searchQuery, setSearchQuery] = useState('');

    // --- AGGREGATE DATA ---
    const allStyles: DoughStyleDefinition[] = useMemo(() => {
        return STYLES_DATA;
    }, []);

    // --- FILTER LOGIC ---
    const filteredStyles = useMemo(() => {
        return allStyles.filter(style => {
            // Category Filter
            const styleCat = style.category?.toLowerCase();
            const matchesCategory = filterCategory === 'All' ||
                (styleCat === filterCategory.toLowerCase()) ||
                (filterCategory === 'Enriched' && (styleCat === 'enriched_bread' || styleCat === 'burger_bun' || styleCat === 'pastry' || styleCat === 'buns' || styleCat === 'snack' || styleCat === 'enriched')) ||
                (filterCategory === 'Bread' && (styleCat === 'bread' || styleCat === 'flatbread' || styleCat === 'soft bread'));

            // Region Filter
            const styleRegion = resolveRegion(style.origin.country || style.origin.region || '');
            const matchesRegion = filterRegion === 'All' || styleRegion === filterRegion;

            // Search Filter
            const translatedName = t(style.name);
            const matchesSearch = translatedName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                style.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (style.origin.country || '').toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesRegion && matchesSearch;
        });
    }, [allStyles, filterCategory, filterRegion, searchQuery]);

    // Available Regions for Filter Tabs
    // We treat 'Global' as a specific bucket for fallback styles, distinct from 'All'
    const regionOptions: { value: Region | 'Global'; label: string }[] = [
        { value: 'Italy', label: t('styles.italy_20') },
        { value: 'Europe', label: t('styles.europe_9') },
        { value: 'North America', label: t('styles.north_america_2') },
        { value: 'South America', label: t('styles.south_america_8') },
        { value: 'Asia', label: t('styles.asia_6') },
        { value: 'Global', label: t('styles.global_6') }
    ];

    return (
        <LibraryPageLayout>
            {/* --- HERO SECTION --- */}
            <div className="mb-8 mx-4 sm:mx-0">
                <div className="bg-gradient-to-br from-[#3A6B3A] to-[#558B55] rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider mb-4">
                            <ChefHat className="w-4 h-4" />{t('common.global_dough_registry')}</div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight">{t('common.explore_styles')}</h1>
                        <p className="text-base md:text-lg text-lime-100/90 mb-0 leading-relaxed">
                            Discover professional dough specifications from around the world.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SEARCH & FILTER BAR --- */}
            <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md py-4 mb-8 border-b border-slate-200 -mx-4 px-4 md:static md:bg-transparent md:border-none md:p-0 md:mx-0 transition-all">

                <div className="max-w-5xl mx-auto">

                    <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">

                        {/* Search Input (Flexible) */}
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-sm shadow-sm transition-all"
                                placeholder={t('general.search_styles')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Filters Container */}
                        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">

                            {/* Primary Category Tabs */}
                            <div className="flex bg-slate-100/80 p-1 rounded-lg overflow-x-auto no-scrollbar w-full sm:w-auto border border-slate-200/50">
                                <button
                                    onClick={() => setFilterCategory('All')}
                                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${filterCategory === 'All'
                                        ? 'bg-white text-slate-800 shadow-sm ring-1 ring-slate-200'
                                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                                        }`}
                                >{t('common.all_types')}</button>
                                {([t('styles.pizza_21'), t('styles.bread_38'), t('styles.flatbread_6'), t('styles.enriched_4')] as Category[]).map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilterCategory(current => current === cat ? 'All' : cat)}
                                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${filterCategory === cat
                                            ? 'bg-white text-lime-700 shadow-sm ring-1 ring-lime-200'
                                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                                            }`}
                                    >
                                        <span>
                                            {cat === 'Pizza' && '🍕'}
                                            {cat === 'Bread' && '🍞'}
                                            {cat === 'Flatbread' && '🫓'}
                                            {cat === 'Enriched' && '🥐'}
                                        </span>
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Secondary Region Dropdown */}
                            <div className="relative min-w-[140px] w-full sm:w-auto">
                                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-500">
                                    <Globe2 className="h-3.5 w-3.5" />
                                </div>
                                <select
                                    value={filterRegion}
                                    onChange={(e) => setFilterRegion(e.target.value as Region | 'All' | 'Global')}
                                    className="block w-full pl-9 pr-8 py-2 text-xs font-bold border border-slate-200 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 shadow-sm appearance-none cursor-pointer hover:bg-slate-50 transition-colors"
                                >
                                    <option value="All">{t('general.all_regions')}</option>
                                    <option disabled>──────────</option>
                                    {regionOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-slate-400">
                                    <ChevronDown className="h-4 w-4" />
                                </div>
                            </div>

                        </div>
                    </div>
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
                    <p className="text-slate-400 text-lg">{t('styles.no_styles_match_your_filter')}</p>
                    <button
                        onClick={() => { setFilterCategory('All'); setFilterRegion('All'); setSearchQuery(''); }}
                        className="mt-4 text-lime-600 font-bold hover:underline"
                    >{t('common.clear_filters')}</button>
                </div>
            )}

            {/* --- RECOMMENDED GEAR (Contextual) --- */}
            <div className="mt-8 mb-12">
                <RecommendedProducts
                    tags={[filterCategory.toLowerCase(), filterRegion.toLowerCase(), 'baking'].filter(t => t !== 'all' && t !== 'global')}
                    title={filterCategory !== 'All' ? `Recommended Gear for ${filterCategory}` : t('styles.professional_baking_gear')}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
                />
            </div>

            {/* --- COMING SOON SECTION --- */}
            <div className="mt-16 border-t border-slate-200 pt-10 pb-8">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        <Calendar className="w-4 h-4" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">{t('styles.coming_soon_early_2026_roadmap')}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {COMING_SOON_STYLES.map(style => (
                        <div key={style.id} className="relative group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-amber-300 transition-all opacity-80 hover:opacity-100">
                            <div className="h-32 bg-slate-100 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:from-amber-100 group-hover:to-orange-50 transition-colors"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:text-amber-200">
                                    <ChefHat className="w-12 h-12 opacity-20" />
                                </div>
                                <div className="absolute bottom-2 right-2 px-2 py-1 rounded text-[10px] font-bold bg-white/90 text-slate-600 shadow-sm">
                                    {style.releaseDate}
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{style.region}</div>
                                <h3 className="font-bold text-slate-800 text-sm mb-1 leading-snug">{t(style.name)}</h3>
                                <div className="flex items-center gap-1.5 text-xs text-amber-600 font-medium mt-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                                    </span>{t('common.in_development')}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LibraryPageLayout>
    );
};
