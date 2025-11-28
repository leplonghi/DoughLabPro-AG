import React from 'react';
import { useTranslation } from '@/i18n';
import { Page } from '@/types';
import {
    WrenchScrewdriverIcon,
    FireIcon,
    BeakerIcon,
    CalculatorIcon,
    SparklesIcon
} from '@/components/ui/Icons';
import { ProFeatureLock } from '@/components/ProFeatureLock';
import LearnAffiliateBlock from '@/components/learn/LearnAffiliateBlock';

interface ToolsPageProps {
    onNavigate: (page: Page) => void;
}

const ToolCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    isPro?: boolean;
    isNew?: boolean;
}> = ({ icon, title, description, onClick, isPro, isNew }) => (
    <button
        onClick={onClick}
        className="group h-full text-left flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="flex items-start justify-between mb-4 relative z-10">
            <div className="p-3 rounded-xl bg-lime-50 text-lime-600 group-hover:bg-lime-500 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8" })}
            </div>
            {isNew && (
                <span className="px-2 py-1 text-xs font-bold text-lime-700 bg-lime-100 rounded-full">
                    NEW
                </span>
            )}
        </div>

        <div className="relative z-10">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-lime-700 transition-colors duration-300 mb-2">
                {title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
                {description}
            </p>
        </div>
    </button>
);

const ToolsPage: React.FC<ToolsPageProps> = ({ onNavigate }) => {
    const { t } = useTranslation();

    const tools = [
        {
            id: 'calculator',
            title: 'FormulaLab',
            description: 'Advanced dough calculator for creating, scaling, and balancing recipes with precision.',
            icon: <CalculatorIcon />,
            page: 'calculator',
            isPro: false
        },
        {
            id: 'doughbot',
            title: 'Dough Diagnostic',
            description: 'AI-powered diagnostic tool to troubleshoot dough issues and get instant solutions.',
            icon: <SparklesIcon />,
            page: 'tools-doughbot',
            isPro: true,
            isNew: true
        },
        {
            id: 'oven-profiler',
            title: 'Oven Profiler',
            description: 'Analyze your oven\'s heat distribution and optimize baking parameters for your specific model.',
            icon: <FireIcon />,
            page: 'tools-oven-analysis',
            isPro: true
        },
        // Future tools can be added here
        {
            id: 'hydration-converter',
            title: 'Hydration Converter',
            description: 'Coming Soon: Convert recipes between different hydration levels automatically.',
            icon: <BeakerIcon />,
            page: 'tools', // Placeholder
            isPro: false,
            comingSoon: true
        }
    ];

    return (
        <div className="mx-auto max-w-7xl animate-fade-in pb-20">
            {/* Hero Section */}
            <div className="text-center mb-16 relative py-10">
                <div className="absolute inset-0 bg-gradient-to-b from-lime-50/50 to-transparent -z-10 rounded-b-[3rem]" />
                <div className="inline-flex p-4 rounded-2xl bg-white shadow-xl mb-6 ring-1 ring-slate-100">
                    <WrenchScrewdriverIcon className="h-12 w-12 text-lime-600" />
                </div>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                    Baking Tools
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
                    Professional-grade utilities to refine your process, analyze results, and perfect your craft.
                </p>
            </div>

            <div className="px-4 sm:px-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tools.map((tool) => {
                        if ((tool as any).comingSoon) {
                            return (
                                <div key={tool.id} className="opacity-60 grayscale pointer-events-none">
                                    <ToolCard
                                        icon={tool.icon}
                                        title={tool.title}
                                        description={tool.description}
                                        onClick={() => { }}
                                    />
                                </div>
                            );
                        }

                        const card = (
                            <ToolCard
                                key={tool.id}
                                icon={tool.icon}
                                title={tool.title}
                                description={tool.description}
                                onClick={() => onNavigate(tool.page as Page)}
                                isPro={tool.isPro}
                                isNew={tool.isNew}
                            />
                        );

                        if (tool.isPro) {
                            return (
                                <ProFeatureLock
                                    key={tool.id}
                                    featureKey={tool.id === 'doughbot' ? 'ai_assistant' : 'advanced_analytics'} // Mapping to likely feature keys
                                    contextLabel={tool.title}
                                    origin="tools"
                                >
                                    {card}
                                </ProFeatureLock>
                            );
                        }

                        return card;
                    })}
                </div>
            </div>

            <div className="px-4 sm:px-6 mt-12">
                <LearnAffiliateBlock placementKeys={['tools_general']} />
            </div>
        </div>
    );
};

export default ToolsPage;
