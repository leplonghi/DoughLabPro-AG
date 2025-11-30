import React from 'react';
import { Page } from '@/types';
import {
    FireIcon,
    BeakerIcon,
    ClockIcon,
    ChartBarIcon,
    BookOpenIcon
} from '@/components/ui/Icons';

interface BakingSciencePageProps {
    onNavigate: (page: Page) => void;
}

const LearnCategoryCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
}> = ({ icon, title, description, onClick }) => (
    <button
        onClick={onClick}
        className="group h-full text-left flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
    >
        <div className="flex-shrink-0 text-red-500">{icon}</div>
        <div className="mt-4 flex-grow">
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-red-600 transition-colors">
                {title}
            </h3>
            <p className="mt-2 text-sm text-slate-900 leading-relaxed">{description}</p>
        </div>
        <p className="mt-4 text-sm font-semibold text-slate-600 group-hover:text-red-600 transition-colors">
            Explore &rarr;
        </p>
    </button>
);

const BakingSciencePage: React.FC<BakingSciencePageProps> = ({ onNavigate }) => {
    const categories = [
        {
            page: 'learn/starch-gelatinization' as Page,
            title: 'Starch Gelatinization',
            description: 'How starch absorbs water, swells and sets the crumb structure.',
            icon: <BeakerIcon className="h-8 w-8" />,
        },
        {
            page: 'learn/crust-formation-dynamics' as Page,
            title: 'Crust Formation Dynamics',
            description: 'How heat, moisture and Maillard reactions shape crust texture and color.',
            icon: <FireIcon className="h-8 w-8" />,
        },
        {
            page: 'learn/baking-profiles-by-style' as Page,
            title: 'Baking Profiles by Style',
            description: 'Temperature, heat curves and timing for major global pizza and bread styles.',
            icon: <ClockIcon className="h-8 w-8" />,
        },
        {
            page: 'learn/oven-science' as Page,
            title: 'Oven Physics',
            description: 'The thermal shock, heat transfer mechanisms, and baking stages.',
            icon: <BookOpenIcon className="h-8 w-8" />,
        },
        {
            page: 'learn/baking-surfaces-and-heat-transfer' as Page,
            title: 'Baking Surfaces',
            description: 'Understanding how different surfaces affect heat transfer.',
            icon: <ChartBarIcon className="h-8 w-8" />,
        }
    ];

    return (
        <div className="mx-auto max-w-7xl animate-[fadeIn_0.5s_ease-in-out]">
            <div className="text-center">
                <FireIcon className="mx-auto h-12 w-12 text-red-500" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Baking Science
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-700">
                    Heat transfer, browning chemistry, crust formation and oven physics.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map(category => (
                    <LearnCategoryCard
                        key={category.page}
                        icon={category.icon}
                        title={category.title}
                        description={category.description}
                        onClick={() => onNavigate(category.page)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BakingSciencePage;
