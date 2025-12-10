import React, { useEffect } from 'react';
import { learnContent } from '@/data/learn-content';
import { useRouter } from '@/contexts/RouterContext';
import { LearnArticleRenderer } from '@/components/learn/LearnArticleRenderer';
import { ArrowLeftIcon, CalculatorIcon, ClockIcon, TagIcon, BookmarkSquareIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface LearnArticlePageProps {
    articleId?: string;
}

const LearnArticlePage: React.FC<LearnArticlePageProps> = ({ articleId }) => {
    const { navigate } = useRouter();
    const { t } = useTranslation();

    const article = articleId ? learnContent[articleId] : undefined;

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
                    {t('learn.back_to_academy', { defaultValue: 'Back to Academy' })}
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
        article.intro && "Introduction",
        article.history && "History & Context",
        (article.technicalFoundations?.length ?? 0) > 0 && "Technical Foundations",
        (article.doughImpact?.length ?? 0) > 0 && "Impact on Dough",
        (article.bakingImpact?.length ?? 0) > 0 && "Baking Performance",
        (article.practicalRanges?.length ?? 0) > 0 && "Practical Ranges",
        (article.practicalApplications?.length ?? 0) > 0 && "Practical Applications",
        (article.proTips?.length ?? 0) > 0 && "Pro Tips",
        (article.criticalPoints?.length ?? 0) > 0 && "Critical Points",
        (article.faq?.length ?? 0) > 0 && "FAQ"
    ].filter(Boolean) as string[];

    return (
        <div className="min-h-screen bg-stone-50 font-sans selection:bg-lime-200 selection:text-lime-900">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <button
                        onClick={() => navigate('learn')}
                        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm group"
                    >
                        <div className="p-1.5 rounded-lg bg-stone-100 group-hover:bg-stone-200 transition-colors">
                            <ArrowLeftIcon className="w-4 h-4" />
                        </div>
                        Back to Academy
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 bg-stone-100 px-3 py-1.5 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                            {article.category}
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                    {/* Left Column: Content (8 cols) */}
                    <article className="lg:col-span-8">
                        {/* Article Header */}
                        <div className="mb-10">
                            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-6">
                                <span className="flex items-center gap-1.5 bg-lime-50 text-lime-700 px-3 py-1 rounded-lg font-medium border border-lime-100">
                                    <ClockIcon className="w-4 h-4" />
                                    {estimatedReadTime} min read
                                </span>
                                <span className="text-stone-300">|</span>
                                <span>Updated recently</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                                {article.title}
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed font-serif italic border-l-4 border-lime-400 pl-6">
                                {article.subtitle}
                            </p>
                        </div>

                        {/* Article Body */}
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-loose prose-img:rounded-2xl prose-img:shadow-lg prose-a:text-lime-600 hover:prose-a:text-lime-500">
                            {/* @ts-ignore - passing embedded prop which we will add next */}
                            <LearnArticleRenderer articleData={article} embedded={true} />
                        </div>
                    </article>

                    {/* Right Column: Sidebar (4 cols) */}
                    <aside className="hidden lg:block lg:col-span-4 space-y-8">
                        <div className="sticky top-24 space-y-8">

                            {/* 1. Calculator CTA Card */}
                            <div className="bg-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/20 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-lime-500/30 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4 backdrop-blur-sm">
                                        <CalculatorIcon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Apply this Science</h3>
                                    <p className="text-slate-400 text-sm mb-6">
                                        Put this theory into practice. Create a new formulation using the DoughLab Calculator.
                                    </p>
                                    <button
                                        onClick={() => navigate('calculator')}
                                        className="w-full bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-lime-500/25 flex items-center justify-center gap-2"
                                    >
                                        Open Calculator
                                        <ArrowLeftIcon className="w-4 h-4 rotate-180" />
                                    </button>
                                </div>
                            </div>

                            {/* 2. Key Topics (Visual TOC) */}
                            {sections.length > 0 && (
                                <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <BookmarkSquareIcon className="w-4 h-4 text-lime-600" />
                                        Key Topics
                                    </h4>
                                    <ul className="space-y-2">
                                        {sections.map((section, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2 text-sm text-slate-600"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-lime-500" />
                                                {section}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default LearnArticlePage;
