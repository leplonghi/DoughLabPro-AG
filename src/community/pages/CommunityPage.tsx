import React, { useState } from 'react';
import { CommunityFilters } from '../components/CommunityFilters';
import { CommunityFeed } from '../components/CommunityFeed';
import { CommunityProfileSidebar } from '../components/CommunityProfileSidebar';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';
import { Plus } from 'lucide-react';
import { useRouter } from '../../contexts/RouterContext';

export const CommunityPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'latest' | 'trending' | 'top'>('latest');
    const { navigate } = useRouter();

    return (
        <LibraryPageLayout>
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">Community</h1>
                        <p className="text-gray-500 mt-2">Discover recipes, methods, and bakes from the community.</p>
                    </div>
                    <button
                        onClick={() => navigate('community/create')}
                        className="flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-full shadow-sm transition-colors font-medium text-sm"
                    >
                        <Plus className="h-5 w-5" />
                        <span className="hidden sm:inline">Share Bake</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Feed Column */}
                    <div className="lg:col-span-8">
                        <CommunityFilters activeFilter={activeFilter} onFilterChange={(f) => setActiveFilter(f as any)} />
                        <CommunityFeed filter={activeFilter} />
                    </div>

                    {/* Sidebar Column */}
                    <div className="hidden lg:block lg:col-span-4">
                        <div className="sticky top-24">
                            <CommunityProfileSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </LibraryPageLayout>
    );
};
