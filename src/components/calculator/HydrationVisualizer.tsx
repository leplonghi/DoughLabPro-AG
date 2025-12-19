import React from 'react';
import { Droplets, ThumbsUp, Disc } from 'lucide-react';

export const HydrationVisualizer: React.FC<{ hydrationPercentage: number }> = ({ hydrationPercentage }) => {

    let config = {
        color: 'text-amber-600 bg-amber-50 border-amber-200',
        icon: Disc,
        title: 'Stiff Dough',
        desc: 'Bagels / Pasta / Flatbreads'
    };

    if (hydrationPercentage >= 55 && hydrationPercentage <= 68) {
        config = {
            color: 'text-dlp-brand-hover bg-emerald-50 border-emerald-200',
            icon: ThumbsUp,
            title: 'Standard / Neapolitan',
            desc: 'Balanced & Easy to handle'
        };
    } else if (hydrationPercentage > 68) {
        config = {
            color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
            icon: Droplets,
            title: 'High Hydration',
            desc: 'Sticky / Requires Folding'
        };
    }

    const Icon = config.icon;

    return (
        <div className={`mt-4 rounded-xl border ${config.color.split(' ')[2]} ${config.color.split(' ')[1]} p-4 flex items-center gap-4 transition-all duration-300`}>
            <div className={`p-3 rounded-full bg-white bg-opacity-60 ${config.color.split(' ')[0]}`}>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h4 className={`font-bold text-sm ${config.color.split(' ')[0]}`}>{config.title}</h4>
                <p className="text-xs opacity-80 font-medium text-black">{config.desc}</p>
            </div>
        </div>
    );
};


