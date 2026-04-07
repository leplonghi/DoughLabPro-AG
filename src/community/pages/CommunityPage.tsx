
import React, { useState } from 'react';
import { CommunityFilters } from '../components/CommunityFilters';
import { CommunityFeed } from '../components/CommunityFeed';
import { CommunityProfileSidebar } from '../components/CommunityProfileSidebar';
import { CommunityTopics } from '../components/CommunityTopics';
import { SuggestedBakers } from '../components/SuggestedBakers';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';
import { Plus, Sparkles } from 'lucide-react';
import { useRouter } from '../../contexts/RouterContext';
import { useTranslation } from '@/i18n';
import { getPageMeta } from '@/app/appShell';

export const CommunityPage: React.FC = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState<'latest' | 'trending' | 'top'>('latest');
    const { navigate } = useRouter();
    const communityMeta = getPageMeta('community');

    return (
        <LibraryPageLayout>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <AppShellHeader
                    eyebrow={communityMeta.eyebrow}
                    title={communityMeta.title}
                    description={communityMeta.description}
                >
                    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                        Bakers share formulas, notes, and results
                    </div>
                    <button
                        onClick={() => navigate('community/create')}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-slate-800 active:scale-95"
                    >
                        <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                        <span>{t('community.share_your_bake')}</span>
                    </button>
                </AppShellHeader>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    <div className="lg:col-span-8 space-y-6">
                        <AppSurface className="sticky top-[112px] z-10 p-4 sm:p-5">
                            <CommunityFilters activeFilter={activeFilter} onFilterChange={(f) => setActiveFilter(f as any)} />
                        </AppSurface>

                        <CommunityFeed filter={activeFilter} />
                    </div>

                    <div className="hidden lg:block lg:col-span-4 space-y-6">
                        <div className="sticky top-24 space-y-6">
                            <CommunityProfileSidebar />

                            <SuggestedBakers />

                            <CommunityTopics />

                            <AppSurface className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 border-indigo-100">
                                <h3 className="font-bold text-indigo-900 mb-2 text-sm flex items-center gap-2">
                                    <span className="text-lg">💡</span> Baker's Tip
                                </h3>
                                <p className="text-indigo-800/80 text-xs leading-relaxed">
                                    Higher hydration isn't always better! For home ovens,
                                    <strong className="text-indigo-900"> 65-70% hydration</strong> often yields the best balance of open crumb and crispiness without being impossible to handle.
                                </p>
                            </AppSurface>

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


