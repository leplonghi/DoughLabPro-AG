import React from 'react';
import { useTranslation } from '@/i18n';
import { Page } from '@/types';
import { ToolCard as ToolCardType } from '@/types/tools';
import {
    WrenchScrewdriverIcon,
    FireIcon,
    BeakerIcon,

    SparklesIcon,
    LockClosedIcon
} from '@/components/ui/Icons';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';
import LearnAffiliateBlock from '@/components/learn/LearnAffiliateBlock';
import { LibraryPageLayout } from './learn/LibraryPageLayout';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import { AdCard } from "@/marketing/ads/AdCard";
import { getPageMeta } from '@/app/appShell';

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
            className="group h-full text-left flex flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden hover:border-dlp-brand"
        >
            <div className="flex items-start justify-between mb-4 relative z-10">
                <div className={`p-3 rounded-xl transition-colors duration-300 ${isLocked ? 'bg-slate-100 text-slate-400' : 'bg-lime-50 text-dlp-brand-hover group-hover:bg-dlp-brand group-hover:text-white'}`}>
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
    const toolsMeta = getPageMeta('tools');

    const TOOLS: ToolCardType[] = [

        {
            id: 'doughbot',
            title: t('ui.dough_diagnostic_378'),
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
            title: t('ui.oven_profiler_379'),
            description: 'Analyze your oven\'s heat distribution and optimize baking parameters for your specific model.',
            isPro: true,
            route: 'tools/oven-profiler',
            icon: <FireIcon />,
            preview: "Example: Your oven maxes at 250°C — use top rack + longer preheat for proper browning.",
            featureKey: 'tools.oven_analysis'
        },
        {
            id: 'hydration-converter',
            title: t('ui.hydration_adjuster_380'),
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
                <AppShellHeader
                    eyebrow={toolsMeta.eyebrow}
                    title={toolsMeta.title}
                    description={toolsMeta.description}
                >
                    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                        {TOOLS.length} focused utilities
                    </div>
                    <div className="rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-sm font-semibold text-[#2f6a27] shadow-sm">
                        Pro unlocks diagnostics and oven analysis
                    </div>
                </AppShellHeader>

                <div className="px-4 sm:px-6">
                    <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                        <AppSurface className="p-5 sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-50 text-dlp-brand-hover">
                                    <WrenchScrewdriverIcon className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">How to use this area</p>
                                    <h2 className="mt-1 text-xl font-bold text-slate-900">Start with the utility, then return to the workflow</h2>
                                </div>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                Utilities should feel like support tools, not separate products. Use them to fix hydration, profile an oven, or diagnose a dough issue, then move straight back into the bake flow.
                            </p>
                        </AppSurface>
                        <AppSurface className="p-5 sm:p-6 bg-slate-950 text-white">
                            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Best fit</p>
                            <div className="mt-4 space-y-3 text-sm text-slate-300">
                                <div>FormulaLab for the main build.</div>
                                <div>Hydration Adjuster for small corrections.</div>
                                <div>Dough Diagnostic and Oven Profiler when results drift.</div>
                            </div>
                        </AppSurface>
                    </div>

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


