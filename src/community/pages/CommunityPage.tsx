import React, { useState } from 'react';
import { CommunityHero } from '../components/CommunityHero';
import { CommunityFilters } from '../components/CommunityFilters';
import { CommunityFeed } from '@/marketing/community/CommunityFeed';
import { CommunityRanking } from '@/marketing/community/CommunityRanking';
import { LiveEvents } from '@/marketing/community/LiveEvents';
import { AdCard } from '@/marketing/ads/AdCard';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';

export const CommunityPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('trending');

    return (
        <LibraryPageLayout>
            <CommunityHero />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Feed Column */}
                <div className="lg:col-span-8">
                    <CommunityFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                    <CommunityFeed />
                </div>

                {/* Sidebar Column */}
                <div className="hidden lg:block lg:col-span-4 space-y-6">
                    <LiveEvents />
                    <CommunityRanking />
                    <AdCard context="community_sidebar" />
                </div>
            </div>
        </LibraryPageLayout>
    );
};
