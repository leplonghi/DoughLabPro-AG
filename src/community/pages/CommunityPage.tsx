
import React, { useState } from 'react';
import { CommunityFilters } from '../components/CommunityFilters';
import { CommunityFeed } from '../components/CommunityFeed';
import { CommunityProfileSidebar } from '../components/CommunityProfileSidebar';
import { CommunityTopics } from '../components/CommunityTopics';
import { SuggestedBakers } from '../components/SuggestedBakers';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';
import { Plus, Sparkles } from 'lucide-react';
import { useRouter } from '../../contexts/RouterContext';
import { useTranslation } from '@/i18n';

export const CommunityPage: React.FC = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState<'latest' | 'trending' | 'top'>('latest');
    const { navigate } = useRouter();

    return (
        <LibraryPageLayout>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-2">{t('community.community_feed')}<Sparkles className="h-6 w-6 text-yellow-500 fill-yellow-500 animate-pulse" />
                        </h1>
                        <p className="text-gray-500 mt-1 text-sm sm:text-base">
                            Discover the secret formulas behind the world's best homemade pizzas.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate('community/create')}
                        className="group flex items-center justify-center gap-2 bg-gradient-to-r from-dlp-brand-hover to-dlp-brand hover:from-lime-700 hover:to-dlp-brand-hover text-white px-6 py-3 rounded-full shadow-lg shadow-dlp-brand-hover/20 transition-all hover:scale-105 active:scale-95 font-semibold text-sm"
                    >
                        <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                        <span>{t('community.share_your_bake')}</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Main Feed - Centered & Focused */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* Sticky Filters */}
                        <div className="sticky top-20 z-10 bg-white/80 backdrop-blur-md py-3 -mx-4 px-4 border-b border-gray-100/50 mb-4 sm:rounded-xl sm:mx-0 sm:border sm:px-4">
                            <CommunityFilters activeFilter={activeFilter} onFilterChange={(f) => setActiveFilter(f as any)} />
                        </div>

                        <CommunityFeed filter={activeFilter} />
                    </div>

                    {/* Sidebar - Profile & Trends */}
                    <div className="hidden lg:block lg:col-span-4 space-y-6">
                        <div className="sticky top-24 space-y-6">
                            <CommunityProfileSidebar />

                            <SuggestedBakers />

                            <CommunityTopics />

                            {/* Pro Tip Card */}
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100 shadow-sm">
                                <h3 className="font-bold text-indigo-900 mb-2 text-sm flex items-center gap-2">
                                    <span className="text-lg">💡</span> Baker's Tip
                                </h3>
                                <p className="text-indigo-800/80 text-xs leading-relaxed">
                                    Higher hydration isn't always better! For home ovens,
                                    <strong className="text-indigo-900"> 65-70% hydration</strong> often yields the best balance of open crumb and crispiness without being impossible to handle.
                                </p>
                            </div>

                            {/* Footer links */}
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-400 px-2">
                                <span className="hover:text-gray-600 cursor-pointer">{t('community.guidelines')}</span>
                                <span className="hover:text-gray-600 cursor-pointer">{t('community.privacy')}</span>
                                <span className="hover:text-gray-600 cursor-pointer">{t('community.terms')}</span>
                                <span>© 2024 DoughLab</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LibraryPageLayout>
    );
};


