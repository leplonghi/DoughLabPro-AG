import React, { useDeferredValue, useMemo, useState } from 'react';
import { DoughStyleDefinition, StyleCategory } from '@/types/styles';
import { useStyles } from '@/contexts/StylesProvider';
import { useTranslation } from '@/i18n';
import { useUser } from '@/contexts/UserProvider';
import { normalizeDoughStyle } from '@/utils/styleAdapter';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';
import { StyleCard } from '@/components/styles/StyleCard';
import { getPageMeta } from '@/app/appShell';
import { getStyleCatalogMeta } from '@/utils/styleEditorialAdapter';
import { STYLE_LIBRARY_NEXT_ADDITIONS } from '@/data/styles/editorial/libraryCuration';
import {
    ArrowsRightLeftIcon as CompareArrows,
    BookOpenIcon as BookOpen,
    CalculatorIcon as Calculator,
    GlobeAltIcon as Globe,
    HeartIcon as Heart,
    InsightsIcon as Sparkline,
    MagnifyingGlassIcon as Search,
    SparklesIcon as Sparkles,
} from '@/components/ui/Icons';

interface StylesLibraryPageProps {
    onNavigateToDetail: (id: string) => void;
    onUseInCalculator: (style: DoughStyleDefinition) => void;
}

type CatalogMode = 'browse' | 'compare' | 'favorites';

const CATEGORY_LABELS: Record<'all' | StyleCategory, string> = {
    all: 'All',
    pizza: 'Pizza',
    bread: 'Bread',
    enriched_bread: 'Enriched',
    burger_bun: 'Buns',
    pastry: 'Pastry',
    cookie: 'Cookies',
    cookies_confectionery: 'Confectionery',
    flatbread: 'Flatbreads',
    other: 'Other',
};

const categoryEditorialLines: Record<string, string> = {
    all: 'A connected reference library for choosing, studying, and applying dough systems.',
    pizza: 'High-heat, deck, and pan pizza systems compared through structure, process, and service context.',
    bread: 'Bread styles organized around crust, crumb, fermentation, and shaping behavior.',
    enriched_bread: 'Rich doughs where tenderness, fat, and sugar shift process and final texture.',
    burger_bun: 'Soft service breads designed for resilience, moisture, and clean slicing.',
    pastry: 'Layered and enriched systems where precision shows up in tenderness and lift.',
    cookie: 'Cookie systems organized around spread, chew, snap, and caramelization.',
    cookies_confectionery: 'Sweet doughs and confectionery systems with strong process variation.',
    flatbread: 'Fast-format breads with flexible shaping and service applications.',
    other: 'Specialty doughs that still fit the same editorial system.',
};

const CATEGORY_ORDER: Array<'all' | StyleCategory> = [
    'all',
    'pizza',
    'bread',
    'enriched_bread',
    'burger_bun',
    'pastry',
    'cookie',
    'flatbread',
    'other',
];

const groupByFamily = (styles: Array<ReturnType<typeof getStyleCatalogMeta>>) =>
    styles
        .slice()
        .sort((left, right) => left.displayOrder - right.displayOrder || left.title.localeCompare(right.title))
        .reduce<Record<string, Array<ReturnType<typeof getStyleCatalogMeta>>>>((groups, item) => {
        if (!groups[item.familyLabel]) groups[item.familyLabel] = [];
        groups[item.familyLabel].push(item);
        return groups;
        }, {});

export const StylesLibraryPage: React.FC<StylesLibraryPageProps> = ({ onUseInCalculator }) => {
    const { styles: officialStyles } = useStyles();
    const { userStyles, isFavorite } = useUser();
    const { t } = useTranslation(['common', 'styles']);
    const stylesMeta = getPageMeta('styles');

    const [mode, setMode] = useState<CatalogMode>('browse');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<'all' | StyleCategory>('all');
    const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | DoughStyleDefinition['difficulty']>('all');
    const [selectedRegion, setSelectedRegion] = useState<'all' | string>('all');
    const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
    const [showSpecialist, setShowSpecialist] = useState(false);

    const deferredSearch = useDeferredValue(searchQuery);

    const allStyles = useMemo(() => {
        const normalizedUserStyles = userStyles.map(normalizeDoughStyle);
        return [...officialStyles, ...normalizedUserStyles];
    }, [officialStyles, userStyles]);

    const catalogItems = useMemo(
        () => allStyles.map((style) => ({ style, meta: getStyleCatalogMeta(style, { allStyles, t }) })),
        [allStyles, t],
    );

    const availableRegions = useMemo(() => {
        const regions = new Set<string>();
        catalogItems.forEach(({ style }) => {
            if (style.origin.country) regions.add(style.origin.country);
        });
        return Array.from(regions).sort((left, right) => left.localeCompare(right));
    }, [catalogItems]);

    const filteredItems = useMemo(() => {
        const query = deferredSearch.trim().toLowerCase();
        const revealSpecialist = showSpecialist || Boolean(query) || mode === 'compare';

        return catalogItems
            .filter(({ style, meta }) => {
            if (mode === 'favorites' && !isFavorite(style.id)) return false;
            if (selectedCategory !== 'all' && style.category !== selectedCategory) return false;
            if (selectedDifficulty !== 'all' && (style.technicalProfile?.difficulty || style.difficulty) !== selectedDifficulty) return false;
            if (selectedRegion !== 'all' && style.origin.country !== selectedRegion) return false;
            if (meta.visibility === 'hidden' && !revealSpecialist) return false;

            if (!query) return true;

            const haystack = [
                meta.title,
                meta.description,
                meta.familyLabel,
                meta.regionLabel,
                meta.signatureTrait,
                ...(style.tags || []).map(tag => t(tag, { defaultValue: tag })),
            ]
                .join(' ')
                .toLowerCase();

            return haystack.includes(query);
            })
            .sort((left, right) => left.meta.displayOrder - right.meta.displayOrder || left.meta.title.localeCompare(right.meta.title));
    }, [catalogItems, deferredSearch, isFavorite, mode, selectedCategory, selectedDifficulty, selectedRegion, showSpecialist, t]);

    const compareItems = useMemo(
        () => filteredItems.filter(({ style }) => selectedForCompare.includes(style.id)).slice(0, 3),
        [filteredItems, selectedForCompare],
    );

    const spotlightItems = useMemo(
        () => filteredItems.filter(item => item.meta.libraryTier === 'flagship' && item.meta.visibility === 'featured').slice(0, 6),
        [filteredItems],
    );

    const standardItems = useMemo(
        () =>
            filteredItems.filter(item =>
                item.meta.libraryTier !== 'community' &&
                item.meta.libraryTier !== 'specialist' &&
                !(item.meta.libraryTier === 'flagship' && item.meta.visibility === 'featured'),
            ),
        [filteredItems],
    );

    const specialistItems = useMemo(
        () => filteredItems.filter(item => item.meta.libraryTier === 'specialist' || item.meta.visibility === 'hidden'),
        [filteredItems],
    );

    const communityItems = useMemo(
        () => filteredItems.filter(item => item.meta.libraryTier === 'community'),
        [filteredItems],
    );

    const groupedStandardItems = useMemo<Record<string, Array<ReturnType<typeof getStyleCatalogMeta>>>>(
        () => groupByFamily(standardItems.map(item => item.meta)),
        [standardItems],
    );

    const groupedSpecialistItems = useMemo<Record<string, Array<ReturnType<typeof getStyleCatalogMeta>>>>(
        () => groupByFamily(specialistItems.map(item => item.meta)),
        [specialistItems],
    );

    const toggleCompare = (styleId: string) => {
        setSelectedForCompare(current => {
            if (current.includes(styleId)) return current.filter(id => id !== styleId);
            if (current.length >= 3) return [...current.slice(1), styleId];
            return [...current, styleId];
        });
    };

    const resetFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSelectedDifficulty('all');
        setSelectedRegion('all');
    };

    const activeCategoryLine = categoryEditorialLines[selectedCategory] || categoryEditorialLines.all;

    return (
        <LibraryPageLayout>
            <AppShellHeader
                eyebrow={stylesMeta.eyebrow}
                title="Styles Knowledge System"
                description="Study styles deeply, compare them side by side, and move straight into your next bake with linked tools and references."
            >
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                    {filteredItems.length} visible styles
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                    Catalog + detail architecture
                </div>
            </AppShellHeader>

            <AppSurface className="mb-8 overflow-hidden p-0">
                <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                    <div className="p-6 md:p-8">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-700">
                            <BookOpen className="h-4 w-4" />
                            Editorial system
                        </div>
                        <h2 className="max-w-3xl text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                            A reference library built for studying styles, not just skimming cards.
                        </h2>
                        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                            Every style follows the same knowledge architecture: origin, technical profile, process logic, comparisons,
                            flexibility guides, gallery, citations, and direct links into the rest of the app.
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Browse</div>
                                <p className="mt-2 text-sm font-medium text-slate-700">Scan by family, region, difficulty, and signature trait.</p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Compare</div>
                                <p className="mt-2 text-sm font-medium text-slate-700">Put nearby styles side by side before choosing what to bake.</p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Apply</div>
                                <p className="mt-2 text-sm font-medium text-slate-700">Jump into Calculator, Learn, Flavor, Lab, and Community from the same source.</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-l border-slate-100 bg-slate-50/80 p-6 md:p-8">
                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Catalog status</div>
                        <dl className="mt-5 grid grid-cols-2 gap-4">
                            <div className="rounded-3xl bg-white p-4 shadow-sm">
                                <dt className="text-sm text-slate-500">Official styles</dt>
                                <dd className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                                    {allStyles.filter(style => style.source === 'official').length}
                                </dd>
                            </div>
                            <div className="rounded-3xl bg-white p-4 shadow-sm">
                                <dt className="text-sm text-slate-500">Community styles</dt>
                                <dd className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                                    {allStyles.filter(style => style.source !== 'official').length}
                                </dd>
                            </div>
                            <div className="rounded-3xl bg-white p-4 shadow-sm">
                                <dt className="text-sm text-slate-500">Favorite styles</dt>
                                <dd className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                                    {catalogItems.filter(({ style }) => isFavorite(style.id)).length}
                                </dd>
                            </div>
                            <div className="rounded-3xl bg-white p-4 shadow-sm">
                                <dt className="text-sm text-slate-500">Compare slots</dt>
                                <dd className="mt-2 text-3xl font-black tracking-tight text-slate-950">{selectedForCompare.length}/3</dd>
                            </div>
                            <div className="rounded-3xl bg-white p-4 shadow-sm">
                                <dt className="text-sm text-slate-500">Flagship styles</dt>
                                <dd className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                                    {catalogItems.filter(({ meta }) => meta.libraryTier === 'flagship').length}
                                </dd>
                            </div>
                            <div className="rounded-3xl bg-white p-4 shadow-sm">
                                <dt className="text-sm text-slate-500">Specialist hidden</dt>
                                <dd className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                                    {catalogItems.filter(({ meta }) => meta.visibility === 'hidden').length}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </AppSurface>

            <AppSurface className="sticky top-3 z-30 mb-8 border-slate-200/80 bg-white/90 p-5 backdrop-blur">
                <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
                    <div className="grid gap-4">
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                placeholder="Search by style, region, trait, or teaching angle"
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-dlp-brand focus:bg-white focus:ring-2 focus:ring-dlp-brand/20"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {CATEGORY_ORDER.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setSelectedCategory(category)}
                                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                                        selectedCategory === category
                                            ? 'bg-slate-950 text-white'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                                >
                                    {CATEGORY_LABELS[category]}
                                </button>
                            ))}
                        </div>

                        <p className="text-sm text-slate-500">{activeCategoryLine}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={() => setShowSpecialist(current => !current)}
                                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
                                    showSpecialist
                                        ? 'bg-amber-100 text-amber-800'
                                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                }`}
                            >
                                {showSpecialist ? 'Hide specialist styles' : 'Reveal specialist styles'}
                            </button>
                            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                                Flagships lead the default browse
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="grid gap-2 sm:grid-cols-3">
                            <button
                                type="button"
                                onClick={() => setMode('browse')}
                                className={`rounded-2xl border px-4 py-3 text-sm font-bold transition ${
                                    mode === 'browse'
                                        ? 'border-slate-950 bg-slate-950 text-white'
                                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                                }`}
                            >
                                Browse
                            </button>
                            <button
                                type="button"
                                onClick={() => setMode('compare')}
                                className={`rounded-2xl border px-4 py-3 text-sm font-bold transition ${
                                    mode === 'compare'
                                        ? 'border-slate-950 bg-slate-950 text-white'
                                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                                }`}
                            >
                                Compare
                            </button>
                            <button
                                type="button"
                                onClick={() => setMode('favorites')}
                                className={`rounded-2xl border px-4 py-3 text-sm font-bold transition ${
                                    mode === 'favorites'
                                        ? 'border-slate-950 bg-slate-950 text-white'
                                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                                }`}
                            >
                                Favorites
                            </button>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <select
                                value={selectedDifficulty}
                                onChange={(event) => setSelectedDifficulty(event.target.value as typeof selectedDifficulty)}
                                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 outline-none transition focus:border-dlp-brand focus:ring-2 focus:ring-dlp-brand/20"
                            >
                                <option value="all">All difficulty levels</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                                <option value="Expert">Expert</option>
                            </select>

                            <select
                                value={selectedRegion}
                                onChange={(event) => setSelectedRegion(event.target.value)}
                                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 outline-none transition focus:border-dlp-brand focus:ring-2 focus:ring-dlp-brand/20"
                            >
                                <option value="all">All regions</option>
                                {availableRegions.map(region => (
                                    <option key={region} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </AppSurface>

            {mode === 'compare' ? (
                <AppSurface className="mb-8">
                    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">
                                <CompareArrows className="h-4 w-4" />
                                Compare mode
                            </div>
                            <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950">Compare up to three styles side by side</h3>
                            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                                Use comparison mode to understand hydration, difficulty, signature trait, and positioning before you open the full editorial page.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setSelectedForCompare([])}
                            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                        >
                            Clear compare list
                        </button>
                    </div>

                    {compareItems.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead>
                                    <tr className="text-left text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                                        <th className="px-4 py-3">Dimension</th>
                                        {compareItems.map(({ meta }) => (
                                            <th key={meta.id} className="px-4 py-3 text-slate-700">
                                                {meta.title}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { label: 'Family', value: (item: typeof compareItems[number]) => item.meta.familyLabel },
                                        { label: 'Region', value: (item: typeof compareItems[number]) => item.meta.regionLabel },
                                        { label: 'Difficulty', value: (item: typeof compareItems[number]) => item.meta.difficulty },
                                        { label: 'Hydration', value: (item: typeof compareItems[number]) => `${item.meta.hydrationRange[0]}-${item.meta.hydrationRange[1]}%` },
                                        { label: 'Signature trait', value: (item: typeof compareItems[number]) => item.meta.signatureTrait },
                                        { label: 'Editorial depth', value: (item: typeof compareItems[number]) => item.meta.completeness },
                                    ].map((row) => (
                                        <tr key={row.label}>
                                            <td className="px-4 py-4 text-sm font-semibold text-slate-500">{row.label}</td>
                                            {compareItems.map((item) => (
                                                <td key={`${item.meta.id}-${row.label}`} className="px-4 py-4 text-sm text-slate-700">
                                                    {row.value(item)}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-slate-500">
                            Add styles to compare from the cards below. The first three selections will appear here.
                        </div>
                    )}
                </AppSurface>
            ) : null}

            {filteredItems.length ? (
                <div className="space-y-12">
                    {mode === 'browse' && spotlightItems.length ? (
                        <section>
                            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-lime-600">Flagship spine</div>
                                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Start here: the indispensable styles</h3>
                                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                                        These styles form the backbone of the library and define the main comparison language for pizza, bread, pastry, and flatbread.
                                    </p>
                                </div>
                                <div className="rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-sm font-semibold text-lime-700 shadow-sm">
                                    {spotlightItems.length} flagship styles
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {spotlightItems.map((item) => (
                                    <StyleCard
                                        key={item.meta.id}
                                        style={item.style}
                                        allStyles={allStyles}
                                        onUseInCalculator={onUseInCalculator}
                                        mode="browse"
                                        isSelectedForCompare={selectedForCompare.includes(item.style.id)}
                                        onToggleCompare={undefined}
                                    />
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {Object.entries(groupedStandardItems as Record<string, Array<ReturnType<typeof getStyleCatalogMeta>>>).map(([familyLabel, items]) => (
                        <section key={familyLabel}>
                            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Core library</div>
                                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">{familyLabel}</h3>
                                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                                        {items[0]?.editorialLine || 'Structured styles ready for deeper study.'}
                                    </p>
                                </div>
                                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500 shadow-sm">
                                    {items.length} styles
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {items.map((meta) => {
                                    const fullItem = standardItems.find(item => item.meta.id === meta.id);
                                    if (!fullItem) return null;
                                    return (
                                        <StyleCard
                                            key={meta.id}
                                            style={fullItem.style}
                                            allStyles={allStyles}
                                            onUseInCalculator={onUseInCalculator}
                                            mode={mode === 'compare' ? 'compare' : 'browse'}
                                            isSelectedForCompare={selectedForCompare.includes(fullItem.style.id)}
                                            onToggleCompare={mode === 'compare' ? toggleCompare : undefined}
                                        />
                                    );
                                })}
                            </div>
                        </section>
                    ))}

                    {communityItems.length ? (
                        <section>
                            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-500">Community layer</div>
                                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Your custom and contributed styles</h3>
                                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                                        Community entries keep the same structure, but they sit after the curated editorial spine so experimentation does not dilute the core library.
                                    </p>
                                </div>
                                <div className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
                                    {communityItems.length} community styles
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {communityItems.map((item) => (
                                    <StyleCard
                                        key={item.meta.id}
                                        style={item.style}
                                        allStyles={allStyles}
                                        onUseInCalculator={onUseInCalculator}
                                        mode={mode === 'compare' ? 'compare' : 'browse'}
                                        isSelectedForCompare={selectedForCompare.includes(item.style.id)}
                                        onToggleCompare={mode === 'compare' ? toggleCompare : undefined}
                                    />
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {showSpecialist && specialistItems.length ? (
                        <section>
                            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">Specialist shelf</div>
                                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Niche, regional, or non-essential default entries</h3>
                                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                                        These styles are still valuable, but they are intentionally kept off the default browse path to reduce redundancy and preserve clarity for the main library.
                                    </p>
                                </div>
                                <div className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
                                    {specialistItems.length} specialist styles
                                </div>
                            </div>

                            <div className="space-y-10">
                                {Object.entries(groupedSpecialistItems as Record<string, Array<ReturnType<typeof getStyleCatalogMeta>>>).map(([familyLabel, items]) => (
                                    <section key={familyLabel}>
                                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                            <h4 className="text-xl font-black tracking-tight text-slate-900">{familyLabel}</h4>
                                            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500 shadow-sm">
                                                {items.length} styles
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                                            {items.map((meta) => {
                                                const fullItem = specialistItems.find(item => item.meta.id === meta.id);
                                                if (!fullItem) return null;
                                                return (
                                                    <StyleCard
                                                        key={meta.id}
                                                        style={fullItem.style}
                                                        allStyles={allStyles}
                                                        onUseInCalculator={onUseInCalculator}
                                                        mode={mode === 'compare' ? 'compare' : 'browse'}
                                                        isSelectedForCompare={selectedForCompare.includes(fullItem.style.id)}
                                                        onToggleCompare={mode === 'compare' ? toggleCompare : undefined}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {mode === 'browse' ? (
                        <section>
                            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Next indispensable additions</div>
                                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">The expansion queue already mapped in the repo</h3>
                                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                                        These are the next styles worth elevating into the curated spine because they close meaningful gaps in regional coverage or technical comparison.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {STYLE_LIBRARY_NEXT_ADDITIONS.map((item) => (
                                    <AppSurface key={item.id} className="border-dashed">
                                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Roadmap</div>
                                        <h4 className="mt-2 text-xl font-black tracking-tight text-slate-950">{item.title}</h4>
                                        <p className="mt-3 text-sm leading-6 text-slate-600">{item.reason}</p>
                                        {item.sourcePath ? (
                                            <div className="mt-4 rounded-2xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500">
                                                Source already exists in {item.sourcePath}
                                            </div>
                                        ) : null}
                                    </AppSurface>
                                ))}
                            </div>
                        </section>
                    ) : null}
                </div>
            ) : (
                <AppSurface className="py-20 text-center">
                    <div className="mx-auto max-w-xl">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                            <Search className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-950">No styles match this reading lens</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Adjust category, difficulty, region, or search terms to reopen the library with a broader slice of styles.
                        </p>
                        <button
                            type="button"
                            onClick={resetFilters}
                            className="mt-6 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                        >
                            Reset filters
                        </button>
                    </div>
                </AppSurface>
            )}

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
                <AppSurface>
                    <div className="flex items-center gap-3">
                        <Calculator className="h-5 w-5 text-lime-600" />
                        <div>
                            <h4 className="font-bold text-slate-900">Calculator-linked</h4>
                            <p className="text-sm text-slate-500">Any card can jump straight into a base formula.</p>
                        </div>
                    </div>
                </AppSurface>
                <AppSurface>
                    <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-indigo-600" />
                        <div>
                            <h4 className="font-bold text-slate-900">Learn-connected</h4>
                            <p className="text-sm text-slate-500">Every style detail page is ready to branch into science content.</p>
                        </div>
                    </div>
                </AppSurface>
                <AppSurface>
                    <div className="flex items-center gap-3">
                        <Heart className="h-5 w-5 text-pink-500" />
                        <div>
                            <h4 className="font-bold text-slate-900">Personal library</h4>
                            <p className="text-sm text-slate-500">Save the styles you revisit most and compare them faster.</p>
                        </div>
                    </div>
                </AppSurface>
                <AppSurface>
                    <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-orange-500" />
                        <div>
                            <h4 className="font-bold text-slate-900">Region-aware</h4>
                            <p className="text-sm text-slate-500">Surface regional context without hiding technical differences.</p>
                        </div>
                    </div>
                </AppSurface>
            </div>
        </LibraryPageLayout>
    );
};
