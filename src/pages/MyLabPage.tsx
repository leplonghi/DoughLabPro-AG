import React from 'react';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import { AdCard } from "@/marketing/ads/AdCard";
import MyLabLayout from '@/pages/mylab/MyLabLayout';
import LearnAffiliateBlock from '@/components/learn/LearnAffiliateBlock';
import { useUser } from '@/contexts/UserProvider';
import { Page } from '@/types';
import {
    PlusCircleIcon,
    FireIcon,
    BeakerIcon,
    ScaleIcon,
    ClipboardDocumentCheckIcon,
    ArrowsRightLeftIcon,
    DocumentTextIcon,
    ChartBarIcon,
    SparklesIcon,
    LockClosedIcon,
    ClockIcon,
    BoltIcon,
    ArchiveBoxIcon
} from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface MyLabPageProps {
    onNavigate: (page: Page) => void;
    onCreateDraftBatch: () => void;
}

const MyLabPage: React.FC<MyLabPageProps> = ({ onNavigate, onCreateDraftBatch }) => {
    const { hasProAccess, openPaywall, batches } = useUser();

    // Stats Calculation
    const totalBakes = batches.length;
    const successRate = batches.length > 0
        ? Math.round((batches.filter(b => b.rating && b.rating >= 4).length / batches.length) * 100)
        : 0;

    // Get recent bakes (last 3)
    const recentBakes = [...batches]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <MyLabLayout activePage="mylab" onNavigate={onNavigate}>
            <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 pt-6 space-y-8 animate-fade-in">

                {/* Hero Section */}
                <div className="bg-gradient-to-br from-[#3A6B3A] to-[#558B55] rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-900/50 border border-lime-700/50 text-lime-300 text-xs font-bold uppercase tracking-wider mb-4">
                            <BeakerIcon className="w-4 h-4" />
                            Production Hub
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight">
                            My Lab
                        </h1>
                        <p className="text-base md:text-lg text-lime-100/90 mb-0 leading-relaxed">
                            Your personal baking command center. Track batches, analyze consistency, and manage your inventory.
                        </p>
                    </div>
                </div>

                {/* Quick Stats & Actions Toolbar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                            <ChartBarIcon className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lab Status</span>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-black text-slate-800">Operational</span>
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full md:w-px md:h-10 bg-slate-100"></div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center md:items-start group cursor-pointer">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-lime-600 transition-colors">Total Batches</span>
                            <span className="text-lg font-black text-slate-800">{totalBakes}</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start group cursor-pointer">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-emerald-600 transition-colors">Success Rate</span>
                            <span className={`text-lg font-black ${successRate >= 80 ? 'text-emerald-500' : 'text-amber-500'}`}>{successRate}%</span>
                        </div>
                    </div>

                    <div className="h-px w-full md:hidden bg-slate-100"></div>

                    <div className="flex-1 md:text-right w-full md:w-auto">
                        <button
                            onClick={() => onNavigate('calculator')}
                            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-lime-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-lime-500/20 hover:bg-lime-600 hover:scale-105 transition-all active:scale-95"
                        >
                            <PlusCircleIcon className="h-5 w-5" />
                            New Bake
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Column: Workbench (Tools) - Span 8 */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Section: Production & Management */}
                        <div className="space-y-3">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                                <BoltIcon className="h-4 w-4" />
                                Workbench
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <ToolCard
                                    icon={<ClockIcon className="h-5 w-5 text-lime-600" />}
                                    label="Timeline"
                                    description="Schedule" // Renamed from SubLabel for clarity
                                    onClick={() => onNavigate('mylab/timeline')}
                                    bgClass="bg-lime-50"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_timeline')}
                                />
                                <ToolCard
                                    icon={<BeakerIcon className="h-5 w-5 text-indigo-500" />}
                                    label="My Bakes"
                                    description="History"
                                    onClick={() => onNavigate('mylab/bakes')}
                                    bgClass="bg-indigo-50"
                                />
                                <ToolCard
                                    icon={<FireIcon className="h-5 w-5 text-orange-500" />}
                                    label="Levain"
                                    description="Cultures"
                                    onClick={() => onNavigate('mylab/levain')}
                                    bgClass="bg-orange-50"
                                />
                                <ToolCard
                                    icon={<ScaleIcon className="h-5 w-5 text-blue-500" />}
                                    label="Inventory"
                                    description="Flours"
                                    onClick={() => onNavigate('mylab/flours')}
                                    bgClass="bg-blue-50"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_flours')}
                                />
                            </div>
                        </div>

                        {/* Section: Analysis & Science */}
                        <div className="space-y-3">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                                <ChartBarIcon className="h-4 w-4" />
                                Analysis Lab
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <ToolCard
                                    icon={<ClipboardDocumentCheckIcon className="h-5 w-5 text-emerald-500" />}
                                    label="Consistency"
                                    description="Data Series"
                                    onClick={() => onNavigate('mylab/consistency')}
                                    bgClass="bg-emerald-50"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_consistency')}
                                />
                                <ToolCard
                                    icon={<ArrowsRightLeftIcon className="h-5 w-5 text-purple-500" />}
                                    label="Compare"
                                    description="A/B Tests"
                                    onClick={() => onNavigate('mylab/comparisons')}
                                    bgClass="bg-purple-50"
                                />
                                <ToolCard
                                    icon={<ChartBarIcon className="h-5 w-5 text-pink-500" />}
                                    label="Insights"
                                    description="Analytics"
                                    onClick={() => onNavigate('mylab/insights')}
                                    bgClass="bg-pink-50"
                                />
                                <ToolCard
                                    icon={<DocumentTextIcon className="h-5 w-5 text-cyan-500" />}
                                    label="Goals"
                                    description="Targets"
                                    onClick={() => onNavigate('mylab/goals')}
                                    bgClass="bg-cyan-50"
                                />
                            </div>
                        </div>

                        {/* Recent Activity Feed (Dynamic) */}
                        <div className="pt-2">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                                    <ArchiveBoxIcon className="h-4 w-4" />
                                    Recent Batches
                                </h2>
                                <button
                                    onClick={() => onNavigate('mylab/bakes')}
                                    className="text-xs text-lime-600 font-bold hover:underline"
                                >
                                    View All
                                </button>
                            </div>

                            {recentBakes.length > 0 ? (
                                <div className="space-y-2">
                                    {recentBakes.map((batch) => (
                                        <div
                                            key={batch.id}
                                            onClick={() => onNavigate('mylab/bakes' as Page)} // Ideally navigate to detail
                                            className="group flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white hover:border-lime-200 hover:shadow-sm transition-all cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${batch.rating && batch.rating >= 4 ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                                    <span className="text-xs font-bold">{batch.rating || '-'}</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-lime-700 transition-colors">{batch.name}</h4>
                                                    <p className="text-xs text-slate-500">{new Date(batch.date).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                            <ChevronRightIcon className="h-4 w-4 text-slate-300 group-hover:text-lime-500 transition-colors" />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center p-6 border-2 border-dashed border-slate-100 rounded-xl">
                                    <p className="text-sm text-slate-400">No recent bakes found.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Sidebar - Span 4 */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Daily Insight Card */}
                        <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-5 text-white shadow-xl ring-1 ring-white/10">
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-gradient-to-br from-lime-400/20 to-emerald-400/20 blur-2xl"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <SparklesIcon className="h-4 w-4 text-lime-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-lime-400">Science Corner</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Autolyse: The Science</h3>
                                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                                    Allows protease enzymes to break down gluten while amylase turns starch into sugars, increasing extensibility.
                                </p>
                                <button
                                    onClick={() => onNavigate('learn/fundamentals')}
                                    className="text-xs font-bold text-lime-400 hover:text-lime-300 flex items-center gap-1 transition-colors"
                                >
                                    Read Article <ChevronRightIcon className="h-3 w-3" />
                                </button>
                            </div>
                        </div>

                        {/* Locked AI Feature Teaser */}
                        <LockedTeaser featureKey="mylab.quickAction">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                <div className="relative z-10 flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <SparklesIcon className="h-4 w-4 text-indigo-200" />
                                            <span className="text-[10px] font-bold uppercase text-indigo-100">AI Assistant</span>
                                        </div>
                                        <h3 className="font-bold text-white text-sm">Prediction Engine</h3>
                                    </div>
                                    <LockClosedIcon className="h-5 w-5 text-white/50" />
                                </div>
                                <p className="mt-2 text-xs text-indigo-100 leading-relaxed">
                                    Unlock AI-powered fermentation predictions based on your lab history.
                                </p>
                            </div>
                        </LockedTeaser>

                        {/* Affiliate / Ad Block */}
                        <div className="space-y-4 pt-4 border-t border-slate-100">
                            <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Partners</h3>
                            <LearnAffiliateBlock placementKeys={['mylab_dashboard']} />
                            <AdCard context="mylab_sidebar" />
                        </div>
                    </div>
                </div>
            </div>
        </MyLabLayout>
    );
};

// -- Compact Tool Card Component --
interface ToolCardProps {
    icon: React.ReactNode;
    label: string;
    description: string;
    onClick: () => void;
    bgClass: string;
    isLocked?: boolean;
    onUnlock?: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, label, description, onClick, bgClass, isLocked, onUnlock }) => {

    const handleClick = () => {
        if (isLocked && onUnlock) {
            onUnlock();
        } else {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`
                relative group flex flex-col items-start p-3.5 rounded-xl border text-left transition-all duration-300 w-full
                ${isLocked
                    ? 'bg-slate-50 border-slate-100 opacity-80 hover:opacity-100'
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-lime-200 hover:-translate-y-0.5'
                }
            `}
        >
            <div className="flex items-center justify-between w-full mb-2">
                <div className={`p-2 rounded-lg transition-transform group-hover:scale-110 ${isLocked ? 'bg-slate-200 grayscale' : bgClass}`}>
                    {icon}
                </div>
                {isLocked && <LockClosedIcon className="h-3 w-3 text-slate-300" />}
            </div>

            <div className="w-full">
                <span className={`block text-xs font-bold ${isLocked ? 'text-slate-500' : 'text-slate-700 group-hover:text-slate-900'}`}>
                    {label}
                </span>
                <span className="block text-[10px] text-slate-400 font-medium truncate mt-0.5">
                    {description}
                </span>
            </div>
        </button>
    );
};

export default MyLabPage;
