import React, { useState, useMemo } from 'react';
import { STYLES_DATA, COMING_SOON_STYLES } from '@/data/styles/registry';
import { DoughStyleDefinition } from '@/types/styles';
import { Region, Category } from '@/types/dough';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { StyleCard } from '@/components/styles/StyleCard';
import { Search, ChefHat, Globe2, ChevronDown, Calendar } from 'lucide-react';
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
    if (['brazil', 'brasil', 'argentina', 'colombia', 'peru'].includes(o)) return 'South America';
    if (['france', 'germany', 'denmark', 'uk', 'spain', 'sweden', 'poland', 'belgium', 'netherlands'].includes(o)) return 'Europe';
    if (['japan', 'china', 'india', 'taiwan', 'korea', 'thailand', 'vietnam'].includes(o)) return 'Asia';
    return 'Global';
};

export const StylesLibraryPage: React.FC<StylesLibraryPageProps> = ({ onUseInCalculator }) => {
    const { t } = useTranslation(['common', 'styles']);

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
            <div className="mb-10 mx-4 sm:mx-0">
                <div className="bg-gradient-to-br from-dlp-brand-dark to-dlp-brand rounded-[2rem] p-8 md:p-12 shadow-premium relative overflow-hidden isolate">
                    {/* Abstract Shapes for Texture */}
                    <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none mix-blend-overlay"></div>
                    <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-dlp-accent/10 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none mix-blend-overlay"></div>

                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm shadow-sm">
                            <ChefHat className="w-4 h-4" />
                            {t('global_dough_registry')}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight leading-[1.1]">
                            {t('explore_styles')}
                        </h1>
                        <p className="text-lg text-white/80 mb-0 leading-relaxed font-medium">
                            {t('calculator:styles.discover_professional_dough_specifications_from_ar')}
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SEARCH & FILTER BAR --- */}
            <div className="sticky top-4 z-40 mb-8 px-4 md:px-0 transition-all">
                <div className="glass-panel rounded-2xl p-2 shadow-lg max-w-5xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-2 items-stretch lg:items-center">
                        {/* Search Input */}
                        <div className="relative flex-grow group">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-dlp-text-muted group-focus-within:text-dlp-brand transition-colors" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-4 py-3 bg-transparent border-none rounded-xl text-dlp-text-primary placeholder-dlp-text-muted/70 focus:ring-0 text-sm font-medium transition-all"
                                placeholder={t('search_styles')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Divider for Desktop */}
                        <div className="hidden lg:block w-px h-8 bg-dlp-border mx-2"></div>

                        {/* Filters Container */}
                        <div className="flex flex-col sm:flex-row gap-2 items-center">
                            {/* Primary Category Tabs */}
                            <div className="flex bg-dlp-bg-soft/50 p-1 rounded-xl w-full sm:w-auto overflow-x-auto no-scrollbar">
                                <button
                                    onClick={() => setFilterCategory('All')}
                                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${filterCategory === 'All'
                                        ? 'bg-white text-dlp-text-primary shadow-sm'
                                        : 'text-dlp-text-muted hover:text-dlp-text-secondary hover:bg-white/50'
                                        }`}
                                >
                                    {t('all_types')}
                                </button>
                                {([t('styles.pizza_21'), t('styles.bread_38'), t('styles.flatbread_6'), t('styles.enriched_4')] as Category[]).map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilterCategory(current => current === cat ? 'All' : cat)}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${filterCategory === cat
                                            ? 'bg-white text-dlp-brand shadow-sm'
                                            : 'text-dlp-text-muted hover:text-dlp-text-secondary hover:bg-white/50'
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
                            <div className="relative min-w-[160px] w-full sm:w-auto">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-dlp-text-muted">
                                    <Globe2 className="h-3.5 w-3.5" />
                                </div>
                                <select
                                    value={filterRegion}
                                    onChange={(e) => setFilterRegion(e.target.value as Region | 'All' | 'Global')}
                                    className="block w-full pl-9 pr-8 py-2.5 text-xs font-bold bg-dlp-bg-soft/50 border-none rounded-xl text-dlp-text-secondary focus:ring-2 focus:ring-dlp-brand/20 cursor-pointer hover:bg-dlp-bg-soft transition-colors appearance-none"
                                >
                                    <option value="All">{t('all_regions')}</option>
                                    <option disabled>──────────</option>
                                    {regionOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-dlp-text-muted">
                                    <ChevronDown className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CONTENT GRID --- */}
            {filteredStyles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
                    {filteredStyles.map(style => (
                        <div key={style.id} className="h-full">
                            <StyleCard
                                style={style}
                                onUseInCalculator={onUseInCalculator}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-dlp-bg-soft rounded-[2rem] border border-dashed border-dlp-border mx-4 md:mx-0">
                    <div className="w-16 h-16 bg-dlp-bg-card rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-dlp-text-muted">
                        <Search className="w-6 h-6" />
                    </div>
                    <p className="text-dlp-text-muted text-lg font-medium">{t('styles.no_styles_match_your_filter')}</p>
                    <button
                        onClick={() => { setFilterCategory('All'); setFilterRegion('All'); setSearchQuery(''); }}
                        className="mt-4 text-dlp-brand font-bold hover:underline"
                    >
                        {t('clear_filters')}
                    </button>
                </div>
            )}

            {/* --- RECOMMENDED GEAR (Contextual) --- */}
            <div className="mt-8 mb-12 px-4 md:px-0">
                <RecommendedProducts
                    tags={[filterCategory.toLowerCase(), filterRegion.toLowerCase(), 'baking'].filter(t => t !== 'all' && t !== 'global')}
                    title={filterCategory !== 'All' ? `Recommended Gear for ${filterCategory}` : t('styles.professional_baking_gear')}
                    className="bg-white rounded-2xl border border-dlp-border p-6 shadow-sm"
                />
            </div>

            {/* --- COMING SOON SECTION --- */}
            <div className="mt-16 border-t border-dlp-border pt-10 pb-8 px-4 md:px-0">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-dlp-accent/10 flex items-center justify-center text-dlp-accent">
                        <Calendar className="w-4 h-4" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-dlp-text-primary">{t('styles.coming_soon_early_2026_roadmap')}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {COMING_SOON_STYLES.map(style => (
                        <div key={style.id} className="relative group bg-white rounded-xl border border-dlp-border overflow-hidden hover:border-dlp-accent transition-all opacity-80 hover:opacity-100 shadow-sm hover:shadow-md">
                            <div className="h-32 bg-dlp-bg-soft relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-dlp-bg-soft to-white group-hover:from-dlp-accent/5 group-hover:to-white transition-colors"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-dlp-border-strong group-hover:text-dlp-accent/30">
                                    <ChefHat className="w-12 h-12 opacity-20" />
                                </div>
                                <div className="absolute bottom-2 right-2 px-2 py-1 rounded text-[10px] font-bold bg-white/90 text-dlp-text-secondary shadow-sm">
                                    {style.releaseDate}
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-[10px] font-bold text-dlp-text-muted uppercase tracking-wider mb-1">{style.region}</div>
                                <h3 className="font-bold text-dlp-text-primary text-sm mb-1 leading-snug">{t(style.name)}</h3>
                                {style.teaser && (
                                    <p className="text-[11px] text-dlp-text-muted italic leading-snug mb-1">{style.teaser}</p>
                                )}
                                <div className="flex items-center gap-1.5 text-xs text-dlp-accent font-medium mt-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dlp-accent opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-dlp-accent"></span>
                                    </span>
                                    {t('in_development')}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LibraryPageLayout>
    );
};