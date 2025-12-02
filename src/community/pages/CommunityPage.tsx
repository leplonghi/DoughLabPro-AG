import React, { useState } from 'react';
import { CommunityFilters } from '../components/CommunityFilters';
import { CommunityFeed } from '../components/CommunityFeed';
import { CommunityProfileSidebar } from '../components/CommunityProfileSidebar';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';

export const CommunityPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('trending');

    return (
        <LibraryPageLayout>
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">Community</h1>
                    <p className="text-gray-500 mt-2">Discover recipes, methods, and bakes from the community.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Feed Column */}
                    <div className="lg:col-span-8">
                        <CommunityFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                        <CommunityFeed />
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
