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
            className="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-emerald-100/90 bg-[linear-gradient(155deg,rgba(255,255,255,0.94)_0%,rgba(241,249,243,0.88)_100%)] p-4 text-left shadow-[0_16px_34px_-24px_rgba(21,38,23,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_22px_42px_-24px_rgba(47,139,73,0.34)]"
        >
            <div className="relative z-10 mb-3 flex items-start justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-300 ${isLocked ? 'border-slate-200 bg-slate-100 text-slate-400' : 'border-emerald-200 bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100'}`}>
                    {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5" })}
                </div>
                <div className="flex gap-2">
                    {isNew && (
                        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                            {t('common.new', { defaultValue: 'New' })}
                        </span>
                    )}
                    {isLocked && (
                        <span className="flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                            <LockClosedIcon className="h-3 w-3" />
                            {t('common.pro', { defaultValue: 'Pro' })}
                        </span>
                    )}
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="mb-1.5 text-[1.15rem] font-bold tracking-tight text-dlp-text-primary transition-colors duration-300 group-hover:text-emerald-800">
                    {title}
                </h3>
                <p className="text-sm leading-6 text-dlp-text-secondary">
                    {description}
                </p>
                {isLocked && preview && (
                    <div className="mt-3 rounded-xl border border-emerald-100 bg-white/75 p-2.5 text-xs italic text-dlp-text-muted">
                        <span className="font-semibold not-italic text-dlp-text-secondary">
                            {t('common.tools_page.pro_insight', { defaultValue: 'Pro insight:' })}
                        </span>{' '}
                        {preview}
                    </div>
                )}
            </div>
        </button>
    );
};

const ToolsPage: React.FC<ToolsPageProps> = ({ onNavigate }) => {
    const { t } = useTranslation();

    const TOOLS: ToolCardType[] = [

        {
            id: 'doughbot',
            title: t('ui.dough_diagnostic_378', { defaultValue: 'Dough Diagnostic' }),
            description: t('common.tools_page.dough_diagnostic_desc', { defaultValue: 'Troubleshoot dough issues quickly and get corrective actions.' }),
            isPro: true,
            route: 'tools/doughbot',
            icon: <SparklesIcon />,
            preview: t('common.tools_page.example_dough_tearing_gluten_underdeveloped_extend'),
            isNew: true,
            featureKey: 'tools.doughbot'
        },
        {
            id: 'oven-profiler',
            title: t('ui.oven_profiler_379', { defaultValue: 'Oven Profiler' }),
            description: t('common.tools_page.oven_profiler_desc', { defaultValue: 'Map heat behavior and tune bake settings for your oven.' }),
            isPro: true,
            route: 'tools/oven-profiler',
            icon: <FireIcon />,
            preview: "Example: Your oven maxes at 250°C — use top rack + longer preheat for proper browning.",
            featureKey: 'tools.oven_analysis'
        },
        {
            id: 'hydration-converter',
            title: t('ui.hydration_adjuster_380', { defaultValue: 'Hydration Adjuster' }),
            description: t('common.tools_page.hydration_adjuster_desc', { defaultValue: 'Adjust hydration with precise flour/water corrections.' }),
            isPro: false,
            route: 'tools/hydration-converter',
            icon: <BeakerIcon />,
            featureKey: undefined
        }
    ];

    return (
        <LibraryPageLayout
            pageHeader={{
                page: 'tools',
                children: (
                    <>
                        <div className="rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-xs font-semibold text-dlp-text-secondary shadow-sm">
                            {TOOLS.length} focused utilities
                        </div>
                        <div className="rounded-full border border-emerald-200/90 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
                            {t('common.tools_page.pro_unlocks', { defaultValue: 'Pro unlocks diagnostics and oven analysis' })}
                        </div>
                    </>
                ),
            }}
        >
            <div className="mx-auto max-w-7xl animate-fade-in pb-20 dlp-flow-stack">
                <div className="px-4 sm:px-6 dlp-flow-node">
                    <AppSurface tone="brand" surface="glass" density="compact" className="mb-4 p-3.5 sm:p-4">
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                            <div className="min-w-0">
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                                    <WrenchScrewdriverIcon className="h-4 w-4" />
                                    Utility lane
                                </div>
                                <p className="mt-1.5 max-w-3xl text-sm leading-6 text-dlp-text-secondary">
                                    Open the utility you need, solve the issue quickly, and return straight to the main bake workflow without losing context.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div className="rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-xs font-semibold text-dlp-text-secondary shadow-sm">
                                    FormulaLab stays the main build
                                </div>
                                <div className="rounded-full border border-emerald-200 bg-emerald-50/85 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
                                    Hydration for quick fixes
                                </div>
                                <div className="rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-xs font-semibold text-dlp-text-secondary shadow-sm">
                                    Diagnostics when results drift
                                </div>
                            </div>
                        </div>
                    </AppSurface>

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

                <div className="px-4 sm:px-6 mt-8 space-y-6 dlp-flow-node">
                    <LearnAffiliateBlock placementKeys={['tools_general']} />
                    <AdCard context="tools_footer" />
                </div>
            </div>
        </LibraryPageLayout>
    );
};

export default ToolsPage;


