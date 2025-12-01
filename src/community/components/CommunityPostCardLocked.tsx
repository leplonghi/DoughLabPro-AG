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
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden relative">
            <PostHeader
                username={post.username}
                userPhotoURL={post.userPhotoURL}
                createdAt={post.createdAt}
            />

            <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                {/* Blurred Image */}
                <img
                    src={post.photos[0]}
                    alt="Locked content"
                    className="h-full w-full object-cover blur-xl opacity-50"
                />

                {/* Lock Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 backdrop-blur-sm p-6 text-center">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-full shadow-lg mb-4">
                        <Lock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        Unlock Community Feed
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-xs">
                        Upgrade to Lab Pro to view all community bakes, recipes, and methods.
                    </p>
                    <button
                        onClick={() => openPaywall('community')}
                        className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-indigo-500/30"
                    >
                        Unlock Full Access
                    </button>
                </div>
            </div>

            {/* Fake Content Skeleton */}
            <div className="p-4 space-y-3 opacity-30 pointer-events-none select-none">
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
            </div>
        </div>
    );
};
