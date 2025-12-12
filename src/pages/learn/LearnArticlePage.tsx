import React, { useEffect } from 'react';
import { learnContent } from '@/data/learn-content';
import { useRouter } from '@/contexts/RouterContext';
import { LearnArticleRenderer } from '@/components/learn/LearnArticleRenderer';
import { ArrowLeftIcon, CalculatorIcon, ClockIcon, TagIcon, BookmarkSquareIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';
import { LEARN_CATEGORIES } from '@/data/learn/categories';
import { TRACK_IMAGES, TRACK_COLORS } from '@/data/learn/ui-config';
import { LEARN_TRACKS } from '@/data/learn/tracks';
import { RecommendedProducts } from '@/components/ui/RecommendedProducts';

interface LearnArticlePageProps {
    articleId?: string;
}

const LearnArticlePage: React.FC<LearnArticlePageProps> = ({ articleId }) => {
    const { navigate } = useRouter();
    const { t } = useTranslation();

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
        <div className="min-h-screen bg-stone-50 font-sans selection:bg-lime-200 selection:text-lime-900">
            {/* 1. HERO HEADER WITH IMAGE */}
            <div className="relative h-[400px] w-full bg-stone-900 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />

                {/* Navigation Bar (Transparent on top of hero) */}
                <div className="absolute top-0 w-full z-40 bg-gradient-to-b from-black/50 to-transparent">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between text-white">
                        <button
                            onClick={() => navigate('learn')}
                            className="flex items-center gap-2 hover:text-lime-300 transition-colors font-medium text-sm group"
                        >
                            <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-colors">
                                <ArrowLeftIcon className="w-4 h-4" />
                            </div>{t('learn.back_to_academy')}</button>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-0 w-full p-8 pb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl animate-slide-up-fade">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 text-white ${themeColor.bg.replace('50', '500')}/80`}>
                                    {article.category}
                                </span>
                                <span className="flex items-center gap-1 text-stone-300 text-xs font-medium">
                                    <ClockIcon className="w-3.5 h-3.5" />
                                    {estimatedReadTime} min read
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight shadow-sm">
                                {article.title}
                            </h1>

                            <p className="text-lg md:text-xl text-stone-200 leading-relaxed max-w-2xl font-medium">
                                {article.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-20">
                <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                    {/* Left Column: Content (8 cols) */}
                    <article className="lg:col-span-8">
                        {/* Article Body Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-stone-100">
                            {/* Article content renderer */}
                            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-loose prose-img:rounded-2xl prose-img:shadow-lg prose-a:text-lime-600 hover:prose-a:text-lime-500">
                                {/* @ts-ignore - passing embedded prop */}
                                <LearnArticleRenderer articleData={article} embedded={true} />
                            </div>
                        </div>
                    </article>

                    {/* Right Column: Sidebar (4 cols) */}
                    <aside className="hidden lg:block lg:col-span-4 space-y-8 mt-8 lg:mt-0">
                        <div className="sticky top-8 space-y-8">

                            {/* 1. Calculator CTA Card (Contextual) */}
                            <div className="bg-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/20 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-lime-500/30 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4 backdrop-blur-sm">
                                        <CalculatorIcon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{t('learn.apply_this_science')}</h3>
                                    <p className="text-slate-400 text-sm mb-6">
                                        Put this theory into practice. Create a new formulation using the DoughLab Calculator.
                                    </p>
                                    <button
                                        onClick={() => navigate('calculator')}
                                        className="w-full bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-lime-500/25 flex items-center justify-center gap-2"
                                    >{t('learn.open_calculator')}<ArrowLeftIcon className="w-4 h-4 rotate-180" />
                                    </button>
                                </div>
                            </div>

                            {/* 2. Key Topics (Visual TOC) */}
                            {sections.length > 0 && (
                                <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <BookmarkSquareIcon className="w-4 h-4 text-lime-600" />{t('learn.in_this_article')}</h4>
                                    <ul className="space-y-3">
                                        {sections.map((section, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-sm text-slate-600 hover:text-lime-700 transition-colors cursor-default"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5 group-hover:bg-lime-500" />
                                                {section}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* 3. Recommended Tools (Native Ad) */}
                            <RecommendedProducts
                                tags={[article.category.toLowerCase(), ...(article.tags || [])]}
                                title={t('learn.essentials_for_this_technique')}
                                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm"
                            />
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default LearnArticlePage;
