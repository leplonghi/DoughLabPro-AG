import React from 'react';
import { useTranslation } from '@/i18n';
import { Page } from '@/types';
import { ToolCard as ToolCardType } from '@/types/tools';
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
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import { AdCard } from "@/marketing/ads/AdCard";

interface ToolsPageProps {
    onNavigate: (page: Page) => void;
}

const ToolCardView: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    isLocked?: boolean;
    isNew?: boolean;
    preview?: string;
}> = ({ icon, title, description, onClick, isLocked, isNew, preview }) => {
    const { t } = useTranslation();
    return (
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
                        <span className="px-2 py-1 text-xs font-bold text-lime-700 bg-lime-100 rounded-full">{t('common.new')}</span>
                    )}
                    {isLocked && (
                        <span className="px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-amber-900 bg-gradient-to-r from-amber-200 to-yellow-400 rounded-full flex items-center gap-1 shadow-sm">
                            <LockClosedIcon className="h-3 w-3" />{t('common.pro')}</span>
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
                {isLocked && preview && (
                    <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-500 italic">
                        <span className="font-semibold text-slate-600 not-italic">{t('common.tools_page.pro_insight')}</span> {preview}
                    </div>
                )}
            </div>
        </button>
    );
};

const ToolsPage: React.FC<ToolsPageProps> = ({ onNavigate }) => {
    const { t } = useTranslation();
    const { user } = useUser();
    const plan = getCurrentPlan(user);

    const TOOLS: ToolCardType[] = [
        {
            id: 'calculator',
            title: 'FormulaLab',
            description: 'Advanced dough calculator for creating, scaling, and balancing recipes with precision.',
            isPro: false,
            route: 'calculator',
            icon: <CalculatorIcon />,
            featureKey: undefined
        },
        {
            id: 'doughbot',
            title: 'Dough Diagnostic',
            description: 'AI-powered diagnostic tool to troubleshoot dough issues and get instant solutions.',
            isPro: true,
            route: 'tools/doughbot',
            icon: <SparklesIcon />,
            preview: t('common.tools_page.example_dough_tearing_gluten_underdeveloped_extend'),
            isNew: true,
            featureKey: 'tools.doughbot'
        },
        {
            id: 'oven-profiler',
            title: 'Oven Profiler',
            description: 'Analyze your oven\'s heat distribution and optimize baking parameters for your specific model.',
            isPro: true,
            route: 'tools/oven-profiler',
            icon: <FireIcon />,
            preview: "Example: Your oven maxes at 250°C — use top rack + longer preheat for proper browning.",
            featureKey: 'tools.oven_analysis'
        },
        {
            id: 'hydration-converter',
            title: 'Hydration Adjuster',
            description: 'Calculate exactly how much water or flour to add to correct your dough\'s hydration.',
            isPro: false,
            route: 'tools/hydration-converter',
            icon: <BeakerIcon />,
            featureKey: undefined
        }
    ];

    return (
        <LibraryPageLayout>
            <div className="mx-auto max-w-7xl animate-fade-in pb-20">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-[#3A6B3A] to-[#558B55] rounded-3xl p-6 md:p-8 mb-8 shadow-2xl relative overflow-hidden mx-4 sm:mx-6">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider mb-4">
                            <WrenchScrewdriverIcon className="w-4 h-4" />{t('common.professional_utilities')}</div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight">{t('common.baking_tools')}</h1>
                        <p className="text-base md:text-lg text-lime-100/90 mb-4 leading-relaxed">
                            Professional-grade tools for diagnostics, analysis and optimization.
                        </p>
                        <p className="text-sm text-lime-200 font-medium">
                            Unlock Pro tools for advanced oven analytics and dough diagnostics.
                        </p>
                    </div>
                </div>

                <div className="px-4 sm:px-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {TOOLS.map((tool) => {
                            if (tool.comingSoon) {
                                return (
                                    <div key={tool.id} className="opacity-60 grayscale pointer-events-none">
                                        <ToolCardView
                                            icon={tool.icon}
                                            title={tool.title}
                                            description={tool.description}
                                            onClick={() => { }}
                                        />
                                    </div>
                                );
                            }

                            const Card = (
                                <ToolCardView
                                    icon={tool.icon}
                                    title={tool.title}
                                    description={tool.description}
                                    onClick={() => onNavigate(tool.route as Page)}
                                    isNew={tool.isNew}
                                    preview={tool.preview}
                                />
                            );

                            if (tool.featureKey) {
                                return (
                                    <LockedTeaser key={tool.id} featureKey={tool.featureKey}>
                                        {Card}
                                    </LockedTeaser>
                                );
                            }

                            return <React.Fragment key={tool.id}>{Card}</React.Fragment>;
                        })}
                    </div>
                </div>

                <div className="px-4 sm:px-6 mt-12 space-y-8">
                    <LearnAffiliateBlock placementKeys={['tools_general']} />
                    <AdCard context="tools_footer" />
                </div>
            </div>
        </LibraryPageLayout>
    );
};

export default ToolsPage;
