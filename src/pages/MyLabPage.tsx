import React, { useMemo } from 'react';
import { useUser } from '@/contexts/UserProvider';
import { useBatches } from '@/contexts/BatchesProvider';
import { useLevain } from '@/contexts/LevainProvider';
import { useGoals } from '@/contexts/GoalsProvider';
import MyLabLayout from './mylab/MyLabLayout';
import LabHealthIndexCard from '@/components/mylab/LabHealthIndexCard';
import {
    PlusCircleIcon,
    DocumentTextIcon,
    FireIcon,
    ChartBarIcon,
    BeakerIcon,
    SparklesIcon,
    ClockIcon,
    ScaleIcon,
    ArrowsRightLeftIcon,
    ClipboardDocumentCheckIcon,
    LockClosedIcon
} from '@/components/ui/Icons';
import { Page } from '@/types';
import LearnAffiliateBlock from '@/components/learn/LearnAffiliateBlock';

interface MyLabPageProps {
    onNavigate: (page: Page) => void;
    onCreateDraftBatch: () => void;
    onLoadAndNavigate?: (config: any) => void;
}

const MyLabPage: React.FC<MyLabPageProps> = ({ onNavigate, onCreateDraftBatch }) => {
    const { user, hasProAccess, openPaywall } = useUser();
    const { lastBake, totalBakes, successRate } = useBatches();
    const { activeLevain } = useLevain();
    const { activeGoal } = useGoals();

    // Deep linking support
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const openSection = params.get('open');
        const shortcut = params.get('shortcut');

        if (openSection) {
            // Scroll to or highlight section
            const sectionMap: Record<string, string> = {
                'bakes': 'mylab/bakes',
                'levain': 'mylab/levain',
                'goals': 'mylab/goals',
            };

            if (sectionMap[openSection]) {
                // Smooth scroll behavior
                setTimeout(() => {
                    const element = document.getElementById(openSection);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
        }

        if (shortcut === 'consistency' && hasProAccess) {
            onNavigate('mylab/consistency');
        }
    }, [hasProAccess, onNavigate]);

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <MyLabLayout activePage="mylab" onNavigate={onNavigate}>
            <div className="space-y-4 animate-fade-in max-w-7xl mx-auto">

                {/* Header Section - Mais compacto */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                            {getGreeting()}, {user?.name?.split(' ')[0] || 'Baker'}
                        </h1>
                        <p className="text-slate-500 text-sm mt-0.5">
                            Here's what's happening in your lab today.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onNavigate('calculator')}
                            className="flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white px-3 py-2 rounded-lg font-semibold shadow-md shadow-lime-500/20 transition-all hover:scale-105 active:scale-95 text-sm"
                        >
                            <PlusCircleIcon className="h-4 w-4" />
                            <span>New Bake</span>
                        </button>
                    </div>
                </div>

                {/* Main Grid - Gaps reduzidos */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                    {/* Left Column (Main Activity) */}
                    <div className="lg:col-span-2 space-y-4">

                        {/* Status Cards Row - Compact Design */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div
                                onClick={() => onNavigate('mylab/levain')}
                                className="group relative overflow-hidden rounded-xl bg-white p-3 shadow-sm border border-slate-100 hover:border-orange-200 transition-all cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <FireIcon className="h-16 w-16 text-orange-500" />
                                </div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <div className={`p-1.5 rounded-lg ${activeLevain ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400'}`}>
                                        <FireIcon className="h-4 w-4" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900 text-xs">Levain Status</h3>
                                </div>

                                {activeLevain ? (
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">{activeLevain.name}</p>
                                        <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                                            <ClockIcon className="h-3 w-3" />
                                            <span>Fed {new Date(activeLevain.lastFeeding).toLocaleDateString()}</span>
                                        </div>
                                        <div className="mt-2 inline-flex items-center text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">
                                            Active & Ready
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="text-slate-500 text-sm">No active starter.</p>
                                        <span className="mt-2 inline-block text-xs font-medium text-orange-600 hover:underline">Create one &rarr;</span>
                                    </div>
                                )}
                            </div>

                            <div
                                onClick={() => lastBake ? onNavigate('batch', lastBake.id) : onNavigate('calculator')}
                                className="group relative overflow-hidden rounded-xl bg-white p-3 shadow-sm border border-slate-100 hover:border-blue-200 transition-all cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <BeakerIcon className="h-16 w-16 text-blue-500" />
                                </div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                                        <BeakerIcon className="h-4 w-4" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900 text-xs">Recent Activity</h3>
                                </div>

                                {lastBake ? (
                                    <div>
                                        <p className="text-sm font-bold text-slate-800 truncate">{lastBake.name}</p>
                                        <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                                            <span className="bg-slate-100 px-1.5 py-0.5 rounded">{lastBake.doughConfig.hydration}% Hydration</span>
                                            <span>•</span>
                                            <span>{new Date(lastBake.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        <div className="mt-2 inline-flex items-center text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                                            View Results
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="text-slate-500 text-sm">Start your first bake.</p>
                                        <span className="mt-2 inline-block text-xs font-medium text-blue-600 hover:underline">Open Calculator &rarr;</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Active Goal Banner - Moved & Redesigned */}
                        {activeGoal && (
                            <div className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-3 text-white shadow-md relative overflow-hidden flex items-center justify-between gap-3">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-white/20 blur-xl"></div>
                                <div className="relative z-10 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-100 bg-white/10 px-1.5 py-0.5 rounded">Current Goal</span>
                                    </div>
                                    <h3 className="text-sm font-bold truncate">{activeGoal.title}</h3>
                                </div>

                                <div className="relative z-10 flex items-center gap-3">
                                    {/* Compact Progress Ring */}
                                    <div className="relative h-10 w-10 flex items-center justify-center">
                                        <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                                            <path
                                                className="text-indigo-900/30"
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="text-white transition-all duration-1000 ease-out"
                                                strokeDasharray={`${activeGoal.progress}, 100`}
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <span className="absolute text-[10px] font-bold">{activeGoal.progress}%</span>
                                    </div>

                                    <button
                                        onClick={() => onNavigate('mylab/objetivos')}
                                        className="p-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors"
                                    >
                                        <ArrowsRightLeftIcon className="h-4 w-4 text-white" />
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                            <QuickAction
                                icon={<PlusCircleIcon className="h-5 w-5 text-lime-600" />}
                                label="New Bake"
                                subLabel="Start Fresh"
                                onClick={() => onNavigate('calculator')}
                            />
                            <QuickAction
                                icon={<FireIcon className="h-5 w-5 text-orange-500" />}
                                label="Levain"
                                subLabel="Management"
                                onClick={() => onNavigate('mylab/levain')}
                            />
                            <QuickAction
                                icon={<BeakerIcon className="h-5 w-5 text-blue-500" />}
                                label="My Bakes"
                                subLabel="History"
                                onClick={() => onNavigate('mylab/bakes')}
                            />
                            <QuickAction
                                icon={<ScaleIcon className="h-5 w-5 text-emerald-500" />}
                                label="My Flours"
                                subLabel="Inventory"
                                isLocked={!hasProAccess}
                                previewText="Unlock advanced inventory tracking."
                                onClick={() => !hasProAccess ? openPaywall('mylab_flours') : onNavigate('mylab/flours')}
                            />
                            <QuickAction
                                icon={<ClipboardDocumentCheckIcon className="h-5 w-5 text-cyan-500" />}
                                label="Consistency"
                                subLabel="Tests & Series"
                                isLocked={!hasProAccess}
                                previewText="Unlock consistency testing tools."
                                onClick={() => !hasProAccess ? openPaywall('mylab_consistency') : onNavigate('mylab/consistency')}
                            />
                            <QuickAction
                                icon={<ArrowsRightLeftIcon className="h-5 w-5 text-purple-500" />}
                                label="Comparisons"
                                subLabel="A/B Testing"
                                onClick={() => onNavigate('mylab/comparisons')}
                            />
                            <QuickAction
                                icon={<DocumentTextIcon className="h-5 w-5 text-indigo-500" />}
                                label="Goals"
                                subLabel="Targets"
                                onClick={() => onNavigate('mylab/goals')}
                            />
                            <QuickAction
                                icon={<ChartBarIcon className="h-5 w-5 text-rose-500" />}
                                label="Insights"
                                subLabel="Analytics"
                                onClick={() => onNavigate('mylab/insights')}
                            />
                        </div>

                        {/* Active Goal Banner - Mais compacto */}

                    </div>

                    {/* Right Column (Insights & Suggestions) - Mais compacto */}
                    <div className="space-y-4">

                        {/* Lab Health Index */}
                        <LabHealthIndexCard />

                        {/* Lab Stats */}
                        <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm">
                                <ChartBarIcon className="h-4 w-4 text-lime-500" />
                                Lab Performance
                            </h3>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                                    <span className="text-xs text-slate-500">Total Bakes</span>
                                    <span className="text-base font-bold text-slate-900">{totalBakes}</span>
                                </div>
                                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                                    <span className="text-xs text-slate-500">Success Rate</span>
                                    <span className={`text-base font-bold ${successRate >= 80 ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {successRate}%
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Recommended Reading</p>
                                <div
                                    onClick={() => onNavigate('learn/fermentation')}
                                    className="group flex items-start gap-2 cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded-lg transition-colors"
                                >
                                    <div className="h-8 w-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                                        <SparklesIcon className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Mastering Fermentation</p>
                                        <p className="text-xs text-slate-500 line-clamp-2">Learn how time and temperature affect your crumb structure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Daily Tip - Mais compacto */}
                        <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white shadow-lg border border-slate-700/50">
                            <div className="flex items-start gap-2">
                                <SparklesIcon className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-xs uppercase tracking-wide text-slate-400">Pro Tip</h3>
                                    <p className="text-slate-200 text-xs mt-1.5 leading-relaxed">
                                        "For a more open crumb, try increasing your hydration by 2% and adding a 30-minute autolyse step."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Affiliate Block */}
                        <LearnAffiliateBlock placementKeys={['mylab_dashboard']} />

                    </div>
                </div>
            </div>
        </MyLabLayout>
    );
};

const QuickAction = React.memo<{
    icon: React.ReactNode;
    label: string;
    subLabel: string;
    onClick: () => void;
    isLocked?: boolean;
    previewText?: string;
}>(({ icon, label, subLabel, onClick, isLocked, previewText }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center p-3 rounded-xl border shadow-sm transition-all text-left relative overflow-hidden ${isLocked
            ? 'bg-slate-50 border-slate-200 opacity-90'
            : 'bg-white border-slate-100 hover:shadow-md hover:border-lime-200 hover:-translate-y-0.5'
            }`}
    >
        {isLocked && (
            <div className="absolute top-2 right-2 text-slate-400">
                <LockClosedIcon className="h-3 w-3" />
            </div>
        )}
        <div className={`mb-2 p-1.5 rounded-full ${isLocked ? 'bg-slate-100 grayscale' : 'bg-slate-50'}`}>
            {icon}
        </div>
        <span className={`text-xs font-bold ${isLocked ? 'text-slate-500' : 'text-slate-900'}`}>{label}</span>
        <span className="text-xs text-slate-500">{subLabel}</span>

        {isLocked && previewText && (
            <div className="mt-2 text-[10px] leading-tight text-slate-400 text-center px-1">
                {previewText}
            </div>
        )}
    </button>
));

export default MyLabPage;
