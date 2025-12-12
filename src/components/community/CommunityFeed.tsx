import React from 'react';
import { Batch } from '@/types';
import CommunityPostCard from './CommunityPostCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useTranslation } from '@/i18n';

interface CommunityFeedProps {
    batches: Batch[];
    isLoading: boolean;
    onCloneBatch?: (batch: Batch) => void;
}

const CommunityFeed: React.FC<CommunityFeedProps> = ({ batches, isLoading, onCloneBatch }) => {
  const { t } = useTranslation();
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
                <p className="text-slate-500 font-medium">{t('community.no_posts_yet_be_the_first_to_share')}</p>
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
