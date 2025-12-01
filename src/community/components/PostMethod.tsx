import React from 'react';
import { CommunityPost } from '../types';

interface PostMethodProps {
    post: CommunityPost;
}

export const PostMethod: React.FC<PostMethodProps> = ({ post }) => {
    if (!post.fermentationNotes && !post.method) return null;

    return (
        <div className="px-4 py-3">
            <div className="text-sm text-slate-700 dark:text-slate-300 line-clamp-3">
                <span className="font-semibold text-slate-900 dark:text-white mr-1">
                    {post.method || 'Direct Method'}:
                </span>
                {post.fermentationNotes || 'No notes provided.'}
            </div>
        </div>
    );
};
