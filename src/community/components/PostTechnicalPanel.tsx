
import React from 'react';
import { Droplets, Wheat, Thermometer, Clock } from 'lucide-react';
import { CommunityPost } from '../types';
import { useTranslation } from '@/i18n';

interface PostTechnicalPanelProps {
    post: CommunityPost;
}

export const PostTechnicalPanel: React.FC<PostTechnicalPanelProps> = ({ post }) => {
  const { t } = useTranslation();
    // Helper for formatting
    const formatTime = (hours?: number) => {
        if (!hours) return '24h';
        return `${hours}h`;
    };

    return (
        <div className="flex flex-wrap items-center gap-2.5 px-4 py-3">
            {/* Hydration Pill */}
            <div className="flex items-center gap-1.5 rounded-lg border border-blue-100/50 bg-blue-50 px-3 py-1.5 text-blue-700 shadow-sm">
                <Droplets className="h-3.5 w-3.5" />
                <span className="text-xs font-bold">{post.hydration}%</span>
                <span className="text-[10px] opacity-70 uppercase tracking-tight">{t('form.hydration')}</span>
            </div>

            {/* Time Pill */}
            <div className="flex items-center gap-1.5 rounded-lg border border-purple-100/50 bg-purple-50 px-3 py-1.5 text-purple-700 shadow-sm">
                <Clock className="h-3.5 w-3.5" />
                <span className="text-xs font-bold">{formatTime(post.fermentationTime)}</span>
            </div>

            {/* Oven Pill */}
            <div className="min-w-0 flex items-center gap-1.5 rounded-lg border border-orange-100/50 bg-orange-50 px-3 py-1.5 text-orange-700 shadow-sm">
                <Thermometer className="h-3.5 w-3.5" />
                <span className="max-w-[11rem] truncate text-xs font-bold">
                    {post.ovenType ? post.ovenType.replace(/_/g, ' ') : 'Home Oven'}
                </span>
            </div>

            {/* Salt Percentage (New) if available in your type, otherwise just skip or use default logic */}
            {post.saltPct !== undefined && (
                <div className="flex items-center gap-1.5 rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-gray-700 shadow-sm">
                    <span className="text-xs font-bold opacity-60">{t('community.nacl')}</span>
                    <span className="text-xs font-bold">{post.saltPct}%</span>
                </div>
            )}
        </div>
    );
};
