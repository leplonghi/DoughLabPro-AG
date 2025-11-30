import React from 'react';
import { DoughStyleDefinition } from '@/types';
import { useNavigate } from 'react-router-dom';
import { Droplets, Flame, Lock, ArrowRight, Layers, Globe, Calendar, FlaskConical } from 'lucide-react';
import { OriginBadge, DifficultyBadge } from './StyleComponents';
import { ProFeatureLock } from '../ui/ProFeatureLock';

interface StyleCardProps {
    style: DoughStyleDefinition;
    isPro?: boolean;
}

export const StyleCard: React.FC<StyleCardProps> = ({ style, isPro = false }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/styles/${style.id}`);
    };

    return (
        <div
            onClick={handleCardClick}
            className="group relative bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col h-full"
        >
            {/* Header / Image Placeholder */}
            <div className="h-32 bg-stone-100 relative overflow-hidden">
                {/* Placeholder for images since DoughStyleDefinition doesn't have images array yet, or use a default */}
                <div className="w-full h-full flex items-center justify-center bg-stone-200 text-stone-400">
                    <span className="text-4xl font-serif opacity-20">{style.name.charAt(0)}</span>
                </div>

                <div className="absolute top-3 right-3">
                    <DifficultyBadge difficulty={style.technicalProfile.difficulty} />
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
                <div className="mb-1">
                    <OriginBadge origin={style.origin} />
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-1 group-hover:text-lime-700 transition-colors">
                    {style.name}
                </h3>
                <p className="text-sm text-stone-500 line-clamp-2 mb-4 flex-1">
                    {style.description}
                </p>

                {/* Mini Specs */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-blue-50 rounded p-2 flex items-center justify-between">
                        <div className="flex items-center text-blue-800">
                            <Droplets className="w-3.5 h-3.5 mr-1.5" />
                            <span className="text-xs font-medium">Hydration</span>
                        </div>
                        <span className="text-xs font-bold text-blue-900">
                            {style.technicalProfile.hydration[0]}-{style.technicalProfile.hydration[1]}%
                        </span>
                    </div>

                    <div className="bg-orange-50 rounded p-2 flex items-center justify-between">
                        <div className="flex items-center text-orange-800">
                            <Flame className="w-3.5 h-3.5 mr-1.5" />
                            <span className="text-xs font-medium">Oven</span>
                        </div>
                        <span className="text-xs font-bold text-orange-900 capitalize truncate max-w-[60px]" title={style.technicalProfile.oven.type.replace('_', ' ')}>
                            {style.technicalProfile.oven.type.replace('_', ' ')}
                        </span>
                    </div>
                </div>

                {/* Badges Row */}
                <div className="flex flex-wrap gap-1 mb-3">
                    {style.substyles && style.substyles.length > 0 && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-purple-100 text-purple-800" title={`${style.substyles.length} Substyles Available`}>
                            <Layers className="w-3 h-3 mr-1" /> {style.substyles.length} Substyles
                        </span>
                    )}
                    {style.regionExpressions && style.regionExpressions.length > 0 && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-teal-100 text-teal-800" title="Regional Expressions">
                            <Globe className="w-3 h-3 mr-1" /> Regional
                        </span>
                    )}
                    {style.seasonalVariants && style.seasonalVariants.length > 0 && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-800" title="Seasonal Variants">
                            <Calendar className="w-3 h-3 mr-1" /> Seasonal
                        </span>
                    )}
                    {style.experimentalVariants && style.experimentalVariants.length > 0 && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-rose-100 text-rose-800" title="Lab Exclusive / Experimental">
                            <FlaskConical className="w-3 h-3 mr-1" /> Lab Exclusive
                        </span>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                    <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">
                        {style.category}
                    </span>
                    <span className="text-lime-600 text-xs font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                        View Profile <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                </div>
            </div>

            {/* Pro Lock Overlay (Example - logic to be handled by parent or context) */}
            {/* This is a placeholder for where the Pro lock would go if we were locking specific styles */}
            {/* <ProFeatureLock featureKey="styles_access" ... /> */}
        </div>
    );
};
