import React, { useEffect } from 'react';
import { learnContent } from '@/data/learn-content';
import { useRouter } from '@/contexts/RouterContext';
import { LearnArticleRenderer } from '@/components/learn/LearnArticleRenderer';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { ArrowLeftIcon, CalculatorIcon, ClockIcon, TagIcon, BookmarkSquareIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';
import { LEARN_CATEGORIES } from '@/data/learn/categories';
import { TRACK_IMAGES, TRACK_COLORS } from '@/data/learn/ui-config';
import { LEARN_TRACKS } from '@/data/learn/tracks';
import { RecommendedProducts } from '@/components/ui/RecommendedProducts';
import { getPageMeta } from '@/app/appShell';

interface LearnArticlePageProps {
    articleId?: string;
}

const LearnArticlePage: React.FC<LearnArticlePageProps> = ({ articleId }) => {
    const { navigate } = useRouter();
    const { t } = useTranslation();
    const learnMeta = getPageMeta('learn');

    const article = articleId ? learnContent[articleId] : undefined;

    // Determine Article Context (Track/Theme)
    const categoryData = article ? LEARN_CATEGORIES.find(c => c.title === article.category) : null;
    const track = categoryData ? LEARN_TRACKS.find(t => t.id === categoryData.trackId) : null;
    const bgImage = track ? TRACK_IMAGES[track.id] : TRACK_IMAGES['fundamentals'];
    const themeColor = track ? TRACK_COLORS[track.colorTheme] : TRACK_COLORS['lime'];

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [articleId]);

    if (!articleId || !article) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center bg-stone-50">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                    <TagIcon className="w-8 h-8 text-stone-400" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('learn.article_not_found', { defaultValue: 'Article Not Found' })}</h2>
                <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">{t('learn.article_not_found_desc', { defaultValue: 'The knowledge you seek is currently baking in our ovens. Please check back later.' })}</p>
                <button
                    onClick={() => navigate('learn')}
                    className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
                >
                    {t('learn.back_to_academy', { defaultValue: t('learn.back_to_academy') })}
                </button>
            </div>
        );
    }

    // Estimated Read Time (Avg 200 wpm)
    // We roughly estimate based on sections content if available
    const wordCount = (article.intro?.split(' ').length || 0) +
        (article.history?.split(' ').length || 0) +
        ((article.technicalFoundations?.length || 0) * 50);
    const estimatedReadTime = Math.max(3, Math.ceil(wordCount / 200));

    // Derive Sections for TOC (Visual only since no anchors in renderer yet)
    const sections = [
        article.intro && t('learn.introduction'),
        article.history && "History & Context",
        (article.technicalFoundations?.length ?? 0) > 0 && t('learn.technical_foundations'),
        (article.doughImpact?.length ?? 0) > 0 && t('learn.impact_on_dough'),
        (article.bakingImpact?.length ?? 0) > 0 && t('learn.baking_performance'),
        (article.practicalRanges?.length ?? 0) > 0 && t('learn.practical_ranges'),
        (article.practicalApplications?.length ?? 0) > 0 && t('learn.practical_applications'),
        (article.proTips?.length ?? 0) > 0 && t('learn.pro_tips'),
        (article.criticalPoints?.length ?? 0) > 0 && t('learn.critical_points'),
        (article.faq?.length ?? 0) > 0 && "FAQ"
    ].filter(Boolean) as string[];

    return (
        <LibraryPageLayout>
            <AppShellHeader
                eyebrow={`${learnMeta.eyebrow} • ${article.category}`}
                title={article.title}
                description={article.subtitle}
                variant="editorial"
            >
                <button
                    onClick={() => navigate('learn')}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
                >
                    <ArrowLeftIcon className="h-4 w-4" />
                    {t('learn.back_to_academy')}
                </button>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                    {estimatedReadTime} min read
                </div>
            </AppShellHeader>

            <div className="grid gap-8 lg:grid-cols-12">
                <article className="lg:col-span-8">
                    <AppSurface className="overflow-hidden">
                        <div className="relative h-64 w-full overflow-hidden md:h-80">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${bgImage})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className={`rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur ${themeColor.bg.replace('50', '500')}/80`}>
                                        {article.category}
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur">
                                        <ClockIcon className="h-3.5 w-3.5" />
                                        {estimatedReadTime} min read
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 md:p-12">
                            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-loose prose-img:rounded-2xl prose-img:shadow-lg prose-a:text-dlp-brand-hover hover:prose-a:text-dlp-brand">
                                {/* @ts-ignore - passing embedded prop */}
                                <LearnArticleRenderer articleData={article} embedded={true} />
                            </div>
                        </div>
                    </AppSurface>
                </article>

                <aside className="lg:col-span-4">
                    <div className="space-y-6 lg:sticky lg:top-28">
                        <AppSurface className="relative overflow-hidden bg-slate-950 p-6 text-white">
                            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-dlp-brand/20 blur-[44px]" />
                            <div className="relative z-10">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                                    <CalculatorIcon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold">{t('learn.apply_this_science')}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                    Put this lesson into practice right away and test the effect in your next formula.
                                </p>
                                <button
                                    onClick={() => navigate('calculator')}
                                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100"
                                >
                                    {t('learn.open_calculator')}
                                    <ArrowLeftIcon className="h-4 w-4 rotate-180" />
                                </button>
                            </div>
                        </AppSurface>

                        {sections.length > 0 && (
                            <AppSurface className="p-6">
                                <h4 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
                                    <BookmarkSquareIcon className="h-4 w-4 text-dlp-brand-hover" />
                                    {t('learn.in_this_article')}
                                </h4>
                                <ul className="space-y-3">
                                    {sections.map((section, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300" />
                                            {section}
                                        </li>
                                    ))}
                                </ul>
                            </AppSurface>
                        )}

                        <AppSurface className="p-6">
                            <RecommendedProducts
                                tags={[article.category.toLowerCase(), ...(article.tags || [])]}
                                title={t('learn.essentials_for_this_technique')}
                                className="rounded-none border-0 bg-transparent p-0 shadow-none"
                            />
                        </AppSurface>
                    </div>
                </aside>
            </div>
        </LibraryPageLayout>
    );
};

export default LearnArticlePage;



