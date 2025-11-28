import React from 'react';
import { Batch } from '@/types';
import CommunityPostCard from './CommunityPostCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface CommunityFeedProps {
    batches: Batch[];
    isLoading: boolean;
    onCloneBatch?: (batch: Batch) => void;
}

const CommunityFeed: React.FC<CommunityFeedProps> = ({ batches, isLoading, onCloneBatch }) => {
    if (isLoading) {
        return (
            <div className="flex justify-center py-12">
                <LoadingSpinner />
            </div>
        );
    }

    if (batches.length === 0) {
        return (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                <p className="text-slate-500 font-medium">No posts yet. Be the first to share!</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {batches.map((batch) => (
                <CommunityPostCard
                    key={batch.id}
                    batch={batch}
                    onClone={onCloneBatch || (() => { })}
                />
            ))}
        </div>
    );
};

export default CommunityFeed;
