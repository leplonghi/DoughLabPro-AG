import React, { useState, useEffect, useMemo } from 'react';
import { DoughConfig, Page, Batch, CommunityBatch, BatchStatus } from '@/types';
import CommunityFeed from '@/components/community/CommunityFeed';
import CommunityProfileSidebar from '@/components/community/CommunityProfileSidebar';
import { useTranslation } from '@/i18n';
import CommunityCreatePost from '@/components/community/CommunityCreatePost';
import { FeedIcon, SparklesIcon, UserCircleIcon } from '@/components/ui/Icons';
import { getAllCommunityBatches } from '@/data/communityStore';
import { LibraryPageLayout } from './learn/LibraryPageLayout';

interface CommunityPageProps {
    onLoadInspiration: (config: Partial<DoughConfig>) => void;
    onNavigate: (page: Page, params?: string) => void;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ onLoadInspiration, onNavigate }) => {
    const { t } = useTranslation();
    const [communityBatches, setCommunityBatches] = useState<CommunityBatch[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBatches = async () => {
            setIsLoading(true);
            try {
                const batches = await getAllCommunityBatches();
                setCommunityBatches(batches);
            } catch (error) {
                console.error("Failed to load community feed", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBatches();
    }, []);

    // Adapt CommunityBatch[] to Batch[] to fit the existing CommunityFeed and CommunityPostCard components
    const adaptedBatches = useMemo((): Batch[] => {
        return communityBatches.map(cb => ({
            id: cb.id,
            name: cb.title,
            doughConfig: cb.baseConfig,
            createdAt: cb.createdAt,
            updatedAt: cb.createdAt,
            status: BatchStatus.COMPLETED, // Assume community batches are completed
            isFavorite: false,
            isPublic: true,
            notes: cb.description,
            photoUrl: cb.photoUrl || cb.thumbnailUrl,
            rating: cb.ratingAverage,
            // Add other missing fields from Batch with default values
            ovenType: cb.ovenType,
        }));
    }, [communityBatches]);

    return (
        <LibraryPageLayout>
            <div className="mx-auto max-w-7xl animate-fade-in">
                {/* Hero Section */}
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-[#3A6B3A] to-[#558B55] rounded-3xl p-6 md:p-10 mb-12 shadow-2xl relative overflow-hidden mx-4 sm:mx-6">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider mb-6">
                            <FeedIcon className="w-4 h-4" />
                            Community Hub
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            {t('community_page.title')}
                        </h1>
                        <p className="text-lg md:text-xl text-lime-100/90 mb-8 leading-relaxed">
                            {t('community_page.subtitle')}
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-lime-100/80">
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> Share Recipes
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Get Inspired
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> Connect
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Learn
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-4 sm:px-6">
                    {/* Create Post (Right on desktop, top on mobile) */}
                    <div className="col-span-1 lg:col-span-3 lg:order-3">
                        <CommunityCreatePost />
                    </div>

                    {/* Main Feed (Center) */}
                    <div className="col-span-1 lg:col-span-6 lg:order-2">
                        {isLoading ? (
                            <div className="flex justify-center py-12">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lime-500"></div>
                            </div>
                        ) : (
                            <CommunityFeed
                                batches={adaptedBatches}
                                isLoading={isLoading}
                                onCloneBatch={(batch) => onLoadInspiration(batch.doughConfig)}
                            />
                        )}
                    </div>

                    {/* Profile Sidebar (Left) - visible on large screens */}
                    <div className="lg:col-span-3 lg:order-1">
                        <CommunityProfileSidebar />
                    </div>
                </div>
            </div>
        </LibraryPageLayout>
    );
};

export default CommunityPage;
