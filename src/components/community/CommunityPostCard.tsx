import React from 'react';
import { Batch } from '@/types';
import { HeartIcon, DocumentDuplicateIcon, BeakerIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

interface CommunityPostCardProps {
    batch: Batch;
    onClone: (batch: Batch) => void;
}

const CommunityPostCard: React.FC<CommunityPostCardProps> = ({ batch, onClone }) => {
    const { t } = useTranslation();
    const { doughConfig } = batch;

    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                        {batch.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">{batch.name}</h3>
                        <p className="text-xs text-slate-500">by Anonymous Baker • {new Date(batch.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
                <button className="text-slate-400 hover:text-red-500 transition-colors">
                    <HeartIcon className="h-5 w-5" />
                </button>
            </div>

            {batch.photoUrl && (
                <div className="mb-4 rounded-xl overflow-hidden aspect-video bg-slate-100">
                    <img src={batch.photoUrl} alt={batch.name} className="w-full h-full object-cover" />
                </div>
            )}

            <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-slate-50 rounded-lg p-2 text-center">
                    <span className="block text-xs text-slate-500 uppercase font-bold">Hydration</span>
                    <span className="block text-lg font-bold text-slate-900">{doughConfig.hydration}%</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-2 text-center">
                    <span className="block text-xs text-slate-500 uppercase font-bold">Salt</span>
                    <span className="block text-lg font-bold text-slate-900">{doughConfig.salt}%</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-2 text-center">
                    <span className="block text-xs text-slate-500 uppercase font-bold">Time</span>
                    <span className="block text-lg font-bold text-slate-900">{doughConfig.fermentationTime}h</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                    <BeakerIcon className="h-4 w-4" />
                    <span>{doughConfig.recipeStyle}</span>
                </div>
                <button
                    onClick={() => onClone(batch)}
                    className="flex items-center gap-1.5 text-sm font-bold text-lime-600 hover:text-lime-700 transition-colors"
                >
                    <DocumentDuplicateIcon className="h-4 w-4" />
                    Clone Recipe
                </button>
            </div>
        </div>
    );
};

export default CommunityPostCard;
