import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { getArticlesByCategory } from '@/data/learn';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';
import { ArrowLeftIcon, BookOpenIcon, ClockIcon, BeakerIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';
import { LEARN_CATEGORIES } from '@/data/learn/categories';
import { LEARN_TRACKS } from '@/data/learn/tracks';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { TRACK_IMAGES, TRACK_COLORS } from '@/data/learn/ui-config';
import { getPageMeta } from '@/app/appShell';

interface CategoryPageProps {
    categoryId?: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId }) => {
    const { navigate } = useRouter();
    const { t } = useTranslation();
    const learnMeta = getPageMeta('learn');

    // Decode category from URL (e.g. "Ingredient%20Science" -> t('learn.ingredient_science'))
    const decodedCategory = categoryId ? decodeURIComponent(categoryId) : '';
    const articles = getArticlesByCategory(decodedCategory);

    // Find category configuration
    const categoryData = LEARN_CATEGORIES.find(c => c.title === decodedCategory);
    // Find parent track
    const track = categoryData ? LEARN_TRACKS.find(t => t.id === categoryData.trackId) : null;

    // UI Config based on track
    const bgImage = track ? TRACK_IMAGES[track.id] : TRACK_IMAGES['fundamentals'];
    const themeColor = track ? TRACK_COLORS[track.colorTheme] : TRACK_COLORS['lime'];

    if (!decodedCategory) return <div>{t('learn.category_not_found')}</div>;

    return (
        <LibraryPageLayout>
            <div className="mx-auto max-w-7xl animate-fade-in pb-20">
                <AppShellHeader
                    eyebrow={`${learnMeta.eyebrow} • ${track?.title || 'Category'}`}
                    title={decodedCategory}
                    description={categoryData?.description || t('learn.category_default_desc', { defaultValue: 'Explore our comprehensive knowledge base.' })}
                >
                    <button
                        onClick={() => navigate('learn')}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
                    >
                        <ArrowLeftIcon className="h-4 w-4" />
                        {t('learn.back_to_learn')}
                    </button>
                    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                        {articles.length} articles
                    </div>
                </AppShellHeader>

                <AppSurface className="mb-8 overflow-hidden p-0">
                    <div className="relative h-56 md:h-72 bg-stone-900">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-60"
                            style={{ backgroundImage: `url(${bgImage})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="relative z-10 flex h-full items-end p-8 md:p-12">
                            <div className="flex items-start gap-6">
                                <div className="hidden rounded-2xl border border-white/20 bg-white/10 p-4 text-white shadow-xl backdrop-blur-md md:flex">
                                    {React.cloneElement((categoryData?.icon || <BookOpenIcon />) as React.ReactElement, { className: "w-10 h-10" })}
                                </div>
                                <div>
                                    <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
                                        {track?.title || 'DoughLab Academy'}
                                    </div>
                                    <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                                        {decodedCategory}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppSurface>

                <div className="px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map(article => (
                            <AppSurface
                                key={article.id}
                                onClick={() => navigate('learn/article', article.id)}
                                className={`
                                    overflow-hidden 
                                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer 
                                    group flex flex-col h-full relative
                                `}
                            >
                                <div className={`h-1.5 w-full ${themeColor.bg.replace('50', '500')}`} /> {/* e.g. bg-dlp-brand */}

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${article.difficulty === 'Advanced' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                            article.difficulty === t('learn.intermediate_441') ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                                'bg-lime-50 text-lime-700 border-lime-200'
                                            }`}>
                                            {article.difficulty}
                                        </span>
                                        <div className="flex items-center text-slate-400 text-xs font-medium">
                                            <ClockIcon className="w-3.5 h-3.5 mr-1" />
                                            5 min
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors line-clamp-2 group-hover:text-dlp-brand-hover">
                                        {article.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                                        {article.subtitle}
                                    </p>

                                    <div className="mt-auto flex items-center justify-end">
                                        <div className={`
                                            w-8 h-8 rounded-full flex items-center justify-center 
                                            bg-stone-50 text-stone-400 
                                            group-hover:bg-white group-hover:text-dlp-brand-hover
                                            transition-all duration-300
                                        `}>
                                            <ArrowLeftIcon className="w-4 h-4 rotate-180" />
                                        </div>
                                    </div>
                                </div>
                            </AppSurface>
                        ))}
                    </div>

                    {articles.length === 0 && (
                        <AppSurface className="text-center py-20 bg-stone-50 border-dashed border-stone-300">
                            <BeakerIcon className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                            <p className="text-slate-500 text-lg font-medium">{t('learn.content_brewing')}</p>
                            <p className="text-slate-400 text-sm">{t('learn.no_articles_found_in_this_category_yet')}</p>
                            <button onClick={() => navigate('learn')} className="mt-6 text-dlp-brand-hover hover:text-lime-700 font-bold text-sm uppercase tracking-wide">{t('learn.return_to_learn_home')}</button>
                        </AppSurface>
                    )}
                </div>
            </div>
        </LibraryPageLayout>
    );
};

export default CategoryPage;


