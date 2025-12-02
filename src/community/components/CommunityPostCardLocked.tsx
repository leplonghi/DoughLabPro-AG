import React from 'react';
import { CommunityPost } from '../types';
import { PostHeader } from './PostHeader';
import { Lock } from 'lucide-react';
import { useUser } from '../../contexts/UserProvider';

interface CommunityPostCardLockedProps {
    post: CommunityPost;
}

export const CommunityPostCardLocked: React.FC<CommunityPostCardLockedProps> = ({ post }) => {
    const { openPaywall } = useUser();

    return (
        <div className="bg-dlp-bg-card rounded-xl shadow-dlp-sm border border-dlp-border overflow-hidden relative">
            <PostHeader
                username={post.username}
                userPhotoURL={post.userPhotoURL}
                createdAt={post.createdAt}
            />

            <div className="relative aspect-square w-full bg-dlp-bg-muted overflow-hidden">
                {/* Blurred Image */}
                <img
                    src={post.photos[0]}
                    alt="Locked content"
                    className="h-full w-full object-cover blur-xl opacity-50"
                />

                {/* Lock Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-dlp-bg-card/90 p-6 text-center">
                    <div className="bg-dlp-bg-card p-4 rounded-full shadow-dlp-md mb-4">
                        <Lock className="h-6 w-6 text-dlp-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-dlp-text-primary mb-2">
                        Unlock Community Feed
                    </h3>
                    <p className="text-sm text-dlp-text-secondary mb-6 max-w-xs">
                        Upgrade to Lab Pro to view all community bakes, recipes, and methods.
                    </p>
                    <button
                        onClick={() => openPaywall('community')}
                        className="px-6 py-2.5 bg-dlp-accent hover:bg-dlp-accent-hover text-white rounded-full font-medium transition-colors shadow-dlp-md"
                    >
                        Unlock Full Access
                    </button>
                </div>
            </div>

            {/* Fake Content Skeleton */}
            <div className="p-4 space-y-3 opacity-30 pointer-events-none select-none">
                <div className="h-6 bg-dlp-border rounded w-3/4"></div>
                <div className="h-4 bg-dlp-border rounded w-full"></div>
                <div className="h-4 bg-dlp-border rounded w-2/3"></div>
            </div>
        </div>
    );
};
