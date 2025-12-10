
import React from 'react';
import { Droplets, Wheat, Thermometer, Clock } from 'lucide-react';
import { CommunityPost } from '../types';

interface PostTechnicalPanelProps {
    post: CommunityPost;
}

export const PostTechnicalPanel: React.FC<PostTechnicalPanelProps> = ({ post }) => {
    // Helper for formatting
    const formatTime = (hours?: number) => {
        if (!hours) return '24h';
        return `${hours}h`;
    };

    return (
        <div className="flex items-center gap-3 px-4 py-3 overflow-x-auto no-scrollbar">
            {/* Hydration Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-100/50 shadow-sm flex-shrink-0">
                <Droplets className="h-3.5 w-3.5" />
                <span className="text-xs font-bold">{post.hydration}%</span>
                <span className="text-[10px] opacity-70 uppercase tracking-tight">Hydration</span>
            </div>

            {/* Time Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg border border-purple-100/50 shadow-sm flex-shrink-0">
                <Clock className="h-3.5 w-3.5" />
                <span className="text-xs font-bold">{formatTime(post.fermentationTime)}</span>
            </div>

            {/* Oven Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg border border-orange-100/50 shadow-sm flex-shrink-0">
                <Thermometer className="h-3.5 w-3.5" />
                <span className="text-xs font-bold truncate max-w-[80px]">
                    {post.ovenType ? post.ovenType.replace(/_/g, ' ') : 'Home Oven'}
                </span>
            </div>

            {/* Salt Percentage (New) if available in your type, otherwise just skip or use default logic */}
            {post.saltPct !== undefined && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg border border-gray-100 shadow-sm flex-shrink-0">
                    <span className="text-xs font-bold opacity-60">NaCl</span>
                    <span className="text-xs font-bold">{post.saltPct}%</span>
                </div>
            )}
        </div>
    );
};
