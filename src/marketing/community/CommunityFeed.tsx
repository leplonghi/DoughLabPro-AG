import React, { useEffect, useState } from 'react';
import { CommunityBatch } from '../../types';
import { getCommunityFeed } from './CommunityService';
import { CommunityPost } from './CommunityPost';
import { CommunityComposer } from './CommunityComposer';
import { useTranslation } from '@/i18n';

export const CommunityFeed: React.FC = () => {
  const { t } = useTranslation();
    const [posts, setPosts] = useState<CommunityBatch[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCommunityFeed().then(data => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="max-w-2xl mx-auto">
            <CommunityComposer />

            {loading ? (
                <div className="text-center py-10 text-zinc-500">{t('community.loading_community')}</div>
            ) : (
                <div className="space-y-4">
                    {posts.map(post => (
                        <CommunityPost
                            key={post.id}
                            post={post}
                            onLike={(id) => console.log('Like', id)}
                            onComment={(id) => console.log('Comment', id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
