import React from 'react';
import { useTranslation } from '@/i18n';
import { Page } from '@/types';
import {
    WrenchScrewdriverIcon,
    FireIcon,
    BeakerIcon,
    CalculatorIcon,
    SparklesIcon,
    LockClosedIcon
} from '@/components/ui/Icons';
import LearnAffiliateBlock from '@/components/learn/LearnAffiliateBlock';
import { useUser } from '@/contexts/UserProvider';
import { canUseFeature, getCurrentPlan, FeatureKey } from '@/permissions';
import { LibraryPageLayout } from './learn/LibraryPageLayout';

interface ToolsPageProps {
    onNavigate: (page: Page) => void;
}

const ToolCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    isLocked?: boolean;
    isNew?: boolean;
}> = ({ icon, title, description, onClick, isLocked, isNew }) => (
    <button
        onClick={onClick}
        className="group h-full text-left flex flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden hover:border-lime-500"
    >
        <div className="flex items-start justify-between mb-4 relative z-10">
            <div className={`p-3 rounded-xl transition-colors duration-300 ${isLocked ? 'bg-slate-100 text-slate-400' : 'bg-lime-50 text-lime-600 group-hover:bg-lime-500 group-hover:text-white'}`}>
                {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8" })}
            </div>
            <div className="flex gap-2">
                {isNew && (
                    <span className="px-2 py-1 text-xs font-bold text-lime-700 bg-lime-100 rounded-full">
                        NEW
                    </span>
                )}
                {isLocked && (
                    <span className="px-2 py-1 text-xs font-bold text-slate-500 bg-slate-100 rounded-full flex items-center gap-1">
                        <LockClosedIcon className="h-3 w-3" /> PRO
                    </span>
                )}
            </div>
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
    const { user } = useUser();
    const plan = getCurrentPlan(user);

    const tools = [
        {
            id: 'calculator',
            title: 'FormulaLab',
            description: 'Advanced dough calculator for creating, scaling, and balancing recipes with precision.',
            icon: <CalculatorIcon />,
            page: 'calculator',
            featureKey: null
        },
        {
            id: 'doughbot',
            title: 'Dough Diagnostic',
            description: 'AI-powered diagnostic tool to troubleshoot dough issues and get instant solutions.',
            icon: <SparklesIcon />,
            page: 'tools-doughbot',
            featureKey: 'tools.doughbot',
            isNew: true
        },
        {
            id: 'oven-profiler',
            title: 'Oven Profiler',
            description: 'Analyze your oven\'s heat distribution and optimize baking parameters for your specific model.',
            icon: <FireIcon />,
            page: 'tools-oven-analysis',
            featureKey: 'tools.oven_analysis'
        },
        // Future tools can be added here
        {
            id: 'hydration-converter',
            title: 'Hydration Converter',
            description: 'Coming Soon: Convert recipes between different hydration levels automatically.',
            icon: <BeakerIcon />,
            page: 'tools', // Placeholder
            featureKey: null,
            comingSoon: true
        }
    ];

    return (
        <LibraryPageLayout>
            <div className="mx-auto max-w-7xl animate-fade-in pb-20">
                {/* Hero Section */}
                <div className="mb-8 mx-4 sm:mx-6">
                    <div className="bg-gradient-to-br from-[#3A6B3A] to-[#558B55] rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider mb-4">
                                <WrenchScrewdriverIcon className="w-4 h-4" />
                                Professional Utilities
                            </div>
                            <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                                Baking Tools
                            </h1>
                            <p className="text-base md:text-lg text-lime-100/90 mb-6 leading-relaxed">
                                Professional grade utilities to refine your process, analyze results, and perfect your craft.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-lime-100/80">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> Recipe Calculation
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> AI Diagnostics
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> Oven Analysis
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Hydration
                                </span>
                            </div>
                        </div>
                    </div>
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

                            const isLocked = tool.featureKey ? !canUseFeature(plan, tool.featureKey as FeatureKey) : false;

                            return (
                                <ToolCard
                                    key={tool.id}
                                    icon={tool.icon}
                                    title={tool.title}
                                    description={tool.description}
                                    onClick={() => onNavigate(tool.page as Page)}
                                    isLocked={isLocked}
                                    isNew={(tool as any).isNew}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="px-4 sm:px-6 mt-12">
                    <LearnAffiliateBlock placementKeys={['tools_general']} />
                </div>
            </div>
        </LibraryPageLayout>
    );
};

export default ToolsPage;
