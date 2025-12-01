import React from 'react';
import { Droplets, Wheat, Thermometer } from 'lucide-react';
import { CommunityPost } from '../types';

interface PostTechnicalPanelProps {
    post: CommunityPost;
}

export const PostTechnicalPanel: React.FC<PostTechnicalPanelProps> = ({ post }) => {
    return (
        <div className="grid grid-cols-3 gap-2 p-4 bg-slate-50 dark:bg-slate-800/50 border-y border-slate-100 dark:border-slate-700/50">
            <div className="flex flex-col items-center justify-center p-2">
                <div className="flex items-center gap-1 text-blue-500 mb-1">
                    <Droplets className="h-4 w-4" />
                    <span className="text-xs font-bold">{post.hydration}%</span>
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wide">Hydration</div>
            </div>

            <div className="flex flex-col items-center justify-center p-2 border-l border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                    <Wheat className="h-4 w-4" />
                    <span className="text-xs font-bold">{post.flour || 'Mix'}</span>
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wide">Flour</div>
            </div>

            <div className="flex flex-col items-center justify-center p-2 border-l border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1 text-red-500 mb-1">
                    <Thermometer className="h-4 w-4" />
                    <span className="text-xs font-bold">{post.ovenType || 'Home'}</span>
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wide">Oven</div>
            </div>
        </div>
    );
};
