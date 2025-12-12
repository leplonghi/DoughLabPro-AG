import React from 'react';
import { CommunityPost } from '../types';
import { useTranslation } from '@/i18n';

interface PostMethodProps {
    post: CommunityPost;
}

export const PostMethod: React.FC<PostMethodProps> = ({ post }) => {
  const { t } = useTranslation();
    if (!post.fermentationNotes && !post.method) return null;

    return (
        <div className="px-4 py-3">
            <div className="text-sm text-gray-700 line-clamp-3">
                <span className="font-semibold text-gray-900 mr-1">
                    {post.method || 'Direct Method'}:
                </span>
                {post.fermentationNotes || 'No notes provided.'}
            </div>
        </div>
    );
};
