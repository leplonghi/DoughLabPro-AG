import React, { useEffect, useMemo, useState } from 'react';
import { DoughStyleDefinition, EditorialTextBlock } from '@/types/styles';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
import { FLAVOR_COMPONENTS } from '@/data/flavorComponents';
import FlavorComponentProfileModal from '@/components/FlavorComponentProfileModal';
import { FlavorComponent } from '@/types/flavor';
import { getPageMeta } from '@/app/appShell';
import { learnContent } from '@/data/learn-content';
import { getStyleEditorialViewModel } from '@/utils/styleEditorialAdapter';
import { useStyles } from '@/contexts/StylesProvider';
import { AffiliateGrid } from '@/components/AffiliateGrid';
import {
    ArrowLeftIcon as ArrowLeft,
    CalculatorIcon as Calculator,
    CheckCircleIcon as CheckCircle,
    ChefHatIcon as ChefHat,
    ClockIcon as Clock,
    FireIcon as Flame,
    HeartIcon as Heart,
    InfoIcon as Info,
    InsightsIcon as Sparkline,
    LightBulbIcon as Lightbulb,
    ThermometerIcon as Thermometer,
    WaterIcon as Droplets,
} from '@/components/ui/Icons';

interface StyleDetailPageProps {
    styleId?: string | null;
    onLoadAndNavigate: (style: DoughStyleDefinition) => void;
    onBack: () => void;
    onNavigate?: (page: string, params?: string) => void;
}

const blockClass = 'rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.35)]';

const CitationPills = ({ ids }: { ids?: string[] }) =>
    ids?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
            {ids.map((id, index) => (
                <a key={`${id}-${index}`} href={`#reference-${id}`} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-600 transition hover:border-indigo-200 hover:text-indigo-700">
                    [{index + 1}]
                </a>
            ))}
        </div>
    ) : null;

const TextBlockCard: React.FC<{ block: EditorialTextBlock }> = ({ block }) => (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
        {block.title ? <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{block.title}</div> : null}
        <p className="mt-3 text-sm leading-7 text-slate-700">{block.body}</p>
        <CitationPills ids={block.citationIds} />
    </div>
);

export const StyleDetailPage: React.FC<StyleDetailPageProps> = ({ styleId, onLoadAndNavigate, onBack, onNavigate }) => {
    const { t } = useTranslation(['common', 'styles']);
    const { styles: allStyles, isLoading, ensureStylesLoaded } = useStyles();
    const { isFavorite, toggleFavorite } = useUser();
    const [selectedFlavorComponent, setSelectedFlavorComponent] = useState<FlavorComponent | null>(null);
    const stylesMeta = getPageMeta('styles');

    useEffect(() => {
        void ensureStylesLoaded();
    }, [ensureStylesLoaded]);

    const style = useMemo(
        () => (styleId ? allStyles.find((item) => item.id === styleId) || null : null),
        [allStyles, styleId],
    );

    const editorial = useMemo(
        () =>
            style
                ? getStyleEditorialViewModel(style, {
                      allStyles,
                      learnArticles: Object.values(learnContent),
                      flavorComponents: FLAVOR_COMPONENTS,
                      t,
                  })
                : null,
        [allStyles, style, t],
    );

    const flavorMatches = useMemo(
        () => (editorial ? FLAVOR_COMPONENTS.filter(component => (editorial.integrationLinks.flavorComponentIds || []).includes(component.id)) : []),
        [editorial],
    );

    const learnArticles = useMemo(
        () => (editorial ? (editorial.integrationLinks.learnArticleIds || []).map(id => learnContent[id]).filter(Boolean) : []),
        [editorial],
    );

    const groupedCitations = useMemo(() => {
        if (!editorial) return [];
        return Object.entries(
            editorial.citations.reduce<Record<string, typeof editorial.citations>>((groups, citation) => {
                if (!groups[citation.sourceType]) groups[citation.sourceType] = [];
                groups[citation.sourceType].push(citation);
                return groups;
            }, {}),
        );
    }, [editorial]);

    if (isLoading || !style || !editorial) {
        return (
            <LibraryPageLayout>
                <div className="flex min-h-[60vh] items-center justify-center">
                    <div className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm">
                        {isLoading ? 'Loading style reference…' : 'Style not found.'}
                    </div>
                </div>
            </LibraryPageLayout>
        );
    }

    const hero = editorial.mediaGallery[0];
    const favorited = isFavorite(style.id);
    const formula = style.base_formula || [];

    return (
        <LibraryPageLayout>
            <AppShellHeader eyebrow={stylesMeta.eyebrow} title={editorial.title} description={editorial.subtitle} variant="editorial">
                <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
                    <ArrowLeft className="h-4 w-4" />
                    Back to styles
                </button>
                <button
                    onClick={() => toggleFavorite({ id: style.id, type: 'style', title: editorial.title, metadata: { category: style.category } })}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition-all ${favorited ? 'border-pink-200 bg-pink-50 text-pink-600' : 'border-slate-200 bg-white text-slate-600 hover:border-pink-200 hover:text-pink-500'}`}
                >
                    <Heart className={`h-4 w-4 ${favorited ? 'fill-current' : ''}`} />
                    {favorited ? 'Saved' : 'Save style'}
                </button>
                <button onClick={() => onLoadAndNavigate(style)} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-slate-800">
                    <Calculator className="h-4 w-4" />
                    Use in calculator
                </button>
            </AppShellHeader>

            <div className="mx-auto max-w-7xl pb-20 pt-6">
                <AppSurface className="mb-8 overflow-hidden p-0">
                    <div className="relative min-h-[340px] overflow-hidden">
                        <img src={hero?.src} alt={hero?.alt} className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/78 to-slate-950/30" />
                        <div className="relative z-10 grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
                            <div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/80">{editorial.familyLabel}</span>
                                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/80">{editorial.regionLabel}</span>
                                    <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-200">{editorial.libraryCuration.tier}</span>
                                    <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-200">{editorial.contentCompleteness}</span>
                                </div>
                                <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">{editorial.title}</h2>
                                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">{editorial.editorialSummary.promise}</p>
                                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                    <div className="rounded-3xl border border-white/10 bg-white/10 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Difficulty</div><div className="mt-2 text-2xl font-black tracking-tight text-white">{editorial.difficulty}</div></div>
                                    <div className="rounded-3xl border border-white/10 bg-white/10 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Hydration</div><div className="mt-2 text-2xl font-black tracking-tight text-white">{editorial.hydrationRange[0]}-{editorial.hydrationRange[1]}%</div></div>
                                    <div className="rounded-3xl border border-white/10 bg-white/10 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Signature trait</div><div className="mt-2 text-sm font-semibold leading-6 text-white">{editorial.signatureTrait}</div></div>
                                </div>
                            </div>
                            <div className="rounded-[32px] border border-white/10 bg-white/10 p-6">
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-lime-200/80">Quick guidance</div>
                                <div className="mt-4 grid gap-4">
                                    <div>
                                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Library role</div>
                                        <p className="mt-2 text-sm leading-6 text-white">{editorial.libraryCuration.rationale}</p>
                                    </div>
                                    {editorial.quickRead.map(block => (
                                        <div key={block.id}>
                                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{block.title}</div>
                                            <p className="mt-2 text-sm leading-6 text-white">{block.body}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AppSurface>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
                    <div className="space-y-8">
                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Identity</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Origin, context, and defining character</h3>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {editorial.identity.map(block => <TextBlockCard key={block.id} block={block} />)}
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Technical profile</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">The practical spec sheet</h3>
                            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {editorial.technicalProfile.map(item => (
                                    <div key={item.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                                        <div className="mt-3 text-xl font-black tracking-tight text-slate-950">{item.value}</div>
                                        {item.detail ? <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p> : null}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Process map</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Step-by-step timeline with logic</h3>
                            <div className="mt-5 space-y-4">
                                {editorial.processTimeline.map((step, index) => (
                                    <div key={step.id} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">{index + 1}</div>
                                                <div>
                                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{step.phase}</div>
                                                    <h4 className="text-lg font-black tracking-tight text-slate-950">{step.title}</h4>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"><Clock className="h-3.5 w-3.5 text-slate-400" />{step.duration}</span>
                                                {step.temperature ? <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"><Thermometer className="h-3.5 w-3.5 text-orange-500" />{step.temperature}</span> : null}
                                            </div>
                                        </div>
                                        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
                                            <div>
                                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Action</div>
                                                <p className="mt-2 text-sm leading-7 text-slate-700">{step.summary}</p>
                                            </div>
                                            <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-4">
                                                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-500"><Lightbulb className="h-4 w-4" />Science and checkpoint</div>
                                                <p className="mt-2 text-sm leading-6 text-indigo-900">{step.science || 'Use dough feel, tension, and fermentation behavior to calibrate this step.'}</p>
                                                {step.criticalPoint ? <p className="mt-3 text-sm font-semibold text-indigo-700">{step.criticalPoint}</p> : null}
                                            </div>
                                        </div>
                                        <CitationPills ids={step.citationIds} />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Science</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">The fermentation and baking logic behind the style</h3>
                            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {editorial.scienceNotes.map(block => <TextBlockCard key={block.id} block={block} />)}
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Variations & flexibility</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Regional variants, production shifts, and practical adaptations</h3>
                            <div className="mt-5 grid gap-6 xl:grid-cols-2">
                                <div className="space-y-4">
                                    {editorial.variations.length ? editorial.variations.map(variation => (
                                        <div key={variation.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{variation.category}</div>
                                            <h4 className="mt-2 text-lg font-black tracking-tight text-slate-950">{variation.name}</h4>
                                            <p className="mt-4 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">What changes:</span> {variation.changes}</p>
                                            <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">Why:</span> {variation.rationale}</p>
                                            <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">Expected result:</span> {variation.expectedResult}</p>
                                            <CitationPills ids={variation.citationIds} />
                                        </div>
                                    )) : <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-500">This page is ready for richer regional and formula variations as more source-backed content is added.</div>}
                                </div>
                                <div className="space-y-4">
                                    {editorial.flexibilityGuides.map(guide => (
                                        <div key={guide.id} className="rounded-3xl border border-amber-100 bg-amber-50 p-5">
                                            <h4 className="text-lg font-black tracking-tight text-slate-950">{guide.scenario}</h4>
                                            {guide.substitutions?.length ? <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">{guide.substitutions.map(item => <li key={item}>{item}</li>)}</ul> : null}
                                            <p className="mt-4 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">Process changes:</span> {guide.processChanges}</p>
                                            <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">Tradeoffs:</span> {guide.tradeoffs}</p>
                                            <CitationPills ids={guide.citationIds} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Comparisons</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Understand this style by contrast</h3>
                            <div className="mt-5 space-y-4">
                                {editorial.comparisonSet.length ? editorial.comparisonSet.map(comparison => (
                                    <div key={comparison.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <div>
                                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Compared against</div>
                                                <h4 className="mt-2 text-lg font-black tracking-tight text-slate-950">{comparison.targetStyleName}</h4>
                                            </div>
                                            {comparison.targetStyleId ? <button type="button" onClick={() => onNavigate?.('styles/detail', comparison.targetStyleId)} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 transition hover:border-indigo-200 hover:text-indigo-700">Open style</button> : null}
                                        </div>
                                        <div className="mt-4 grid gap-4 md:grid-cols-3">
                                            <div><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Difference</div><p className="mt-2 text-sm leading-6 text-slate-700">{comparison.difference}</p></div>
                                            <div><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">When to choose it</div><p className="mt-2 text-sm leading-6 text-slate-700">{comparison.whenToChoose}</p></div>
                                            <div><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Risk of confusion</div><p className="mt-2 text-sm leading-6 text-slate-700">{comparison.riskOfConfusion || 'Use process, bake profile, and service context to keep the distinction clear.'}</p></div>
                                        </div>
                                        <CitationPills ids={comparison.citationIds} />
                                    </div>
                                )) : <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-500">Comparison slots are ready and will stay in the same structure as the library expands.</div>}
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Pairings & service</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">How the style behaves on the plate</h3>
                            <div className="mt-5 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                                <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                                    {[{ title: 'Canonical pairings', items: editorial.pairingContext.canonical }, { title: 'Modern pairings', items: editorial.pairingContext.modern }, { title: 'Regional expressions', items: editorial.pairingContext.regional }].map(group => (
                                        <div key={group.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{group.title}</div>
                                            {group.items.length ? <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">{group.items.map(item => <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" /><span>{item}</span></li>)}</ul> : <p className="mt-3 text-sm leading-6 text-slate-500">This slot is ready for service notes, topping logic, and regional pairing variations.</p>}
                                        </div>
                                    ))}
                                </div>
                                <div className="rounded-[28px] border border-slate-200 bg-white p-5">
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Flavor components from the app</div>
                                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                        {flavorMatches.length ? flavorMatches.map(component => <button key={component.id} type="button" onClick={() => setSelectedFlavorComponent(component)} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-orange-200 hover:bg-orange-50"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-500">{component.category}</div><h4 className="mt-2 text-base font-black tracking-tight text-slate-950">{component.name}</h4><p className="mt-2 text-sm leading-6 text-slate-600">{component.description}</p></button>) : <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-500 sm:col-span-2">No mapped flavor components yet. The structure is ready to connect this style to toppings and pairing logic.</div>}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Integrations</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Connected actions across the app</h3>
                            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                <button type="button" onClick={() => onLoadAndNavigate(style)} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-lime-200 hover:bg-lime-50"><Calculator className="h-5 w-5 text-lime-600" /><h4 className="mt-4 text-lg font-black tracking-tight text-slate-950">Open in calculator</h4><p className="mt-2 text-sm leading-6 text-slate-600">Use this style as the base formula and move straight into the bake workspace.</p></button>
                                <button type="button" onClick={() => onNavigate?.('mylab')} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-indigo-200 hover:bg-indigo-50"><Sparkline className="h-5 w-5 text-indigo-600" /><h4 className="mt-4 text-lg font-black tracking-tight text-slate-950">Start a My Lab loop</h4><p className="mt-2 text-sm leading-6 text-slate-600">Track experiments and compare adaptations using this style as a repeatable test base.</p></button>
                                <button type="button" onClick={() => onNavigate?.('community')} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-orange-200 hover:bg-orange-50"><ChefHat className="h-5 w-5 text-orange-500" /><h4 className="mt-4 text-lg font-black tracking-tight text-slate-950">Browse community examples</h4><p className="mt-2 text-sm leading-6 text-slate-600">See how other bakers interpret the same style in real ovens and workflows.</p></button>
                            </div>
                            <div className="mt-6 grid gap-4 lg:grid-cols-2">
                                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Related Learn articles</div>
                                    {learnArticles.length ? <div className="mt-4 space-y-3">{learnArticles.map(article => <button key={article.id} type="button" onClick={() => onNavigate?.('learn/article', article.id)} className="w-full rounded-3xl border border-slate-200 bg-white p-4 text-left transition hover:border-indigo-200"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-500">{article.category}</div><h4 className="mt-2 text-base font-black tracking-tight text-slate-950">{article.title}</h4><p className="mt-2 text-sm leading-6 text-slate-600">{article.subtitle}</p></button>)}</div> : <p className="mt-4 text-sm leading-6 text-slate-500">This style already has learn-link slots prepared and they will surface here automatically as related science content grows.</p>}
                                </div>
                                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Production experiments</div>
                                    <div className="mt-4 grid gap-3">
                                        {(style.experimentSuggestions || []).length ? style.experimentSuggestions?.map(experiment => <div key={experiment} className="rounded-3xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">{experiment}</div>) : <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-4 text-sm leading-6 text-slate-500">Experiment prompts can live here for hydration pushes, fermentation changes, oven swaps, or ingredient substitutions.</div>}
                                        {(style.recommendedIncrements || []).length ? <div className="rounded-3xl border border-slate-200 bg-white p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Recommended increments</div><div className="mt-3 flex flex-wrap gap-2">{style.recommendedIncrements?.map(increment => <span key={increment} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">{increment}</span>)}</div></div> : null}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Gallery</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">A didactic media sequence</h3>
                            <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                                <figure className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50"><img src={hero?.src} alt={hero?.alt} className="aspect-[4/3] w-full object-cover" /><figcaption className="space-y-2 p-5"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{hero?.role}</div><p className="text-sm leading-6 text-slate-700">{hero?.caption}</p><p className="text-xs font-medium text-slate-500">Credit: {hero?.credit || 'Editorial placeholder'}</p></figcaption></figure>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">{editorial.mediaGallery.filter(asset => asset.id !== hero?.id).map(asset => <figure key={asset.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50"><img src={asset.src} alt={asset.alt} className="aspect-[4/3] w-full object-cover" /><figcaption className="space-y-2 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{asset.role}</div><p className="text-sm leading-6 text-slate-700">{asset.caption}</p><p className="text-xs font-medium text-slate-500">Credit: {asset.credit || 'Editorial placeholder'}</p></figcaption></figure>)}</div>
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">References</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Bibliography and validation</h3>
                            <div className="mt-5 rounded-[28px] border border-emerald-100 bg-emerald-50 p-5"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><CheckCircle className="h-5 w-5" /></div><div><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700">Validation note</div><p className="mt-1 text-sm leading-6 text-emerald-900">This page uses inline source markers and a grouped bibliography so readers can either scan quickly or verify each technical claim in depth.</p></div></div></div>
                            <div className="mt-6 grid gap-4">{groupedCitations.map(([sourceType, citations]) => <div key={sourceType} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{sourceType}</div><div className="mt-4 space-y-4">{citations.map(citation => <div key={citation.id} id={`reference-${citation.id}`} className="rounded-3xl border border-slate-200 bg-white p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">[{citation.label}]</div><h4 className="mt-2 text-base font-black tracking-tight text-slate-950">{citation.title}</h4></div>{citation.url ? <a href={citation.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 transition hover:border-indigo-200 hover:text-indigo-700">Open source</a> : null}</div><div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">{citation.authors?.length ? <span>Authors: {citation.authors.join(', ')}</span> : null}{citation.publisher ? <span>Publisher: {citation.publisher}</span> : null}{citation.year ? <span>Year: {citation.year}</span> : null}</div>{citation.notes ? <p className="mt-3 text-sm leading-6 text-slate-600">{citation.notes}</p> : null}</div>)}</div></div>)}</div>
                        </section>
                    </div>

                    <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                        <AppSurface className="overflow-hidden">
                            <div className="border-b border-slate-100 bg-slate-50 px-6 py-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Control panel</div><h3 className="mt-2 text-lg font-black tracking-tight text-slate-950">Use and monitor this style</h3></div>
                            <div className="space-y-6 p-6">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Hydration</div><div className="mt-2 text-2xl font-black tracking-tight text-slate-950">{editorial.hydrationRange[0]}-{editorial.hydrationRange[1]}%</div></div>
                                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Status</div><div className="mt-2 text-2xl font-black tracking-tight text-slate-950">{editorial.contentCompleteness}</div></div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400"><Droplets className="h-4 w-4 text-sky-500" />Baker's percentage baseline</div>
                                    <div className="mt-3 overflow-hidden rounded-3xl border border-slate-200">{formula.length ? <table className="min-w-full divide-y divide-slate-200 bg-white text-sm"><thead className="bg-slate-50 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400"><tr><th className="px-4 py-3">Ingredient</th><th className="px-4 py-3 text-right">%</th></tr></thead><tbody className="divide-y divide-slate-100">{formula.map(ingredient => <tr key={ingredient.name}><td className="px-4 py-3 font-medium text-slate-700">{ingredient.name}</td><td className="px-4 py-3 text-right font-bold text-slate-950">{ingredient.percentage}%</td></tr>)}</tbody></table> : <div className="p-4 text-sm leading-6 text-slate-500">This style can display a normalized baker's percentage table as formula data becomes available.</div>}</div>
                                </div>
                                <div className="grid gap-3">
                                    <button type="button" onClick={() => onLoadAndNavigate(style)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"><Calculator className="h-4 w-4" />Load style in calculator</button>
                                    <button type="button" onClick={() => onNavigate?.('tools/oven-profiler')} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700"><Flame className="h-4 w-4" />Open oven profiler</button>
                                    <button type="button" onClick={() => onNavigate?.('community/create')} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"><ChefHat className="h-4 w-4" />Share your variation</button>
                                </div>
                                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4"><div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400"><Info className="h-4 w-4 text-indigo-500" />Growth-ready structure</div><p className="mt-3 text-sm leading-6 text-slate-600">This page is built on a fixed editorial skeleton. New citations, media, variations, comparisons, and integrations can be added without redesigning the layout.</p></div>
                            </div>
                        </AppSurface>
                        <AffiliateGrid tags={[...(style.tags || []), 'styles', style.category || 'general']} title={`Gear that supports ${editorial.title}`} />
                    </aside>
                </div>
            </div>

            <FlavorComponentProfileModal isOpen={!!selectedFlavorComponent} onClose={() => setSelectedFlavorComponent(null)} component={selectedFlavorComponent} />
        </LibraryPageLayout>
    );
};
