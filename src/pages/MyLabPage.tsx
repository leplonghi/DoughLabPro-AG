import { MyLabLimitModal } from '@/components/mylab/MyLabLimitModal';
import React, { useState } from 'react';
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
    ArchiveBoxIcon,
    ArrowRightIcon
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
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 3);

    // Limit Logic
    const isLimitReached = !hasProAccess && totalBakes >= 1;
    const [showLimitModal, setShowLimitModal] = useState(false);

    const handleNewBake = () => {
        if (isLimitReached) {
            setShowLimitModal(true);
            return;
        }
        onNavigate('calculator');
    };

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
                            Your personal baking command center. Manage your schedule, track your cultures, and analyze your progress in one place.
                        </p>
                    </div>
                </div>

                {/* Quick Stats & Actions Toolbar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
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

                    <div className="hidden md:block h-10 w-px bg-slate-100"></div>

                    <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
                        <div className="flex flex-col items-start group cursor-pointer">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-lime-600 transition-colors">Total Batches</span>
                            <span className="text-lg font-black text-slate-800">{totalBakes}</span>
                        </div>
                        <div className="flex flex-col items-start group cursor-pointer">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-emerald-600 transition-colors">Success Rate</span>
                            <span className={`text-lg font-black ${successRate >= 80 ? 'text-emerald-500' : 'text-amber-500'}`}>{successRate}%</span>
                        </div>
                    </div>

                    <div className="w-full md:w-auto">
                        <button
                            onClick={handleNewBake}
                            className={`w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all active:scale-95 ${isLimitReached ? 'bg-slate-400 cursor-not-allowed hover:bg-slate-500' : 'bg-lime-500 shadow-lime-500/20 hover:bg-lime-600 hover:scale-105'}`}
                        >
                            {isLimitReached ? <LockClosedIcon className="h-5 w-5" /> : <PlusCircleIcon className="h-5 w-5" />}
                            {isLimitReached ? 'Limit Reached' : 'New Bake'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-slide-up-fade">

                    {/* Left Column: Workbench (Tools) - Span 8 */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Section: Daily Operations */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                                <BoltIcon className="h-5 w-5 text-lime-600" />
                                <h2 className="text-base font-bold text-slate-800">
                                    Daily Operations
                                </h2>
                            </div>
                            <p className="text-sm text-slate-500 -mt-2">
                                Essential tools for planning and logging your baking sessions.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <LabFeatureCard
                                    icon={<ClockIcon className="h-6 w-6 text-lime-600" />}
                                    title="Smart Timeline"
                                    description="Plan your fermentation schedule from start to finish."
                                    onClick={() => onNavigate('mylab/timeline')}
                                    bgClass="bg-lime-50"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_timeline')}
                                />
                                <LabFeatureCard
                                    icon={<BeakerIcon className="h-6 w-6 text-indigo-500" />}
                                    title="My Bakes"
                                    description="Your digital notebook. Log every detail of your bakes."
                                    onClick={() => onNavigate('mylab/bakes')}
                                    bgClass="bg-indigo-50"
                                />
                                <LabFeatureCard
                                    icon={<FireIcon className="h-6 w-6 text-orange-500" />}
                                    title="Levain Tracker"
                                    description="Monitor the health and feeding schedule of your starter."
                                    onClick={() => onNavigate('mylab/levain')}
                                    bgClass="bg-orange-50"
                                />
                                <LabFeatureCard
                                    icon={<ScaleIcon className="h-6 w-6 text-blue-500" />}
                                    title="Inventory"
                                    description="Keep track of flour stocks and ingredients."
                                    onClick={() => onNavigate('mylab/flours')}
                                    bgClass="bg-blue-50"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_flours')}
                                />
                            </div>
                        </div>

                        {/* Section: Analysis & Science */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                                <ChartBarIcon className="h-5 w-5 text-purple-600" />
                                <h2 className="text-base font-bold text-slate-800">
                                    Analysis Lab
                                </h2>
                            </div>
                            <p className="text-sm text-slate-500 -mt-2">
                                Advanced metrics to understand your dough biology and improve consistency.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <LabFeatureCard
                                    icon={<ClipboardDocumentCheckIcon className="h-6 w-6 text-emerald-500" />}
                                    title="Consistency Logic"
                                    description="Track variables across batches to master repeatability."
                                    onClick={() => onNavigate('mylab/consistency')}
                                    bgClass="bg-emerald-50"
                                    isLocked={!hasProAccess}
                                    onUnlock={() => openPaywall('mylab_consistency')}
                                />
                                <LabFeatureCard
                                    icon={<ArrowsRightLeftIcon className="h-6 w-6 text-purple-500" />}
                                    title="A/B Comparisons"
                                    description="Compare two recipes side-by-side to find the best method."
                                    onClick={() => onNavigate('mylab/comparisons')}
                                    bgClass="bg-purple-50"
                                />
                                <LabFeatureCard
                                    icon={<ChartBarIcon className="h-6 w-6 text-pink-500" />}
                                    title="Deep Insights"
                                    description="Visual analytics of your baking trends and history."
                                    onClick={() => onNavigate('mylab/insights')}
                                    bgClass="bg-pink-50"
                                />
                                <LabFeatureCard
                                    icon={<DocumentTextIcon className="h-6 w-6 text-cyan-500" />}
                                    title="Learning Goals"
                                    description="Set targets and track your skill progression."
                                    onClick={() => onNavigate('mylab/goals')}
                                    bgClass="bg-cyan-50"
                                />
                            </div>
                        </div>

                        {/* Recent Activity Feed */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
                                    <ArchiveBoxIcon className="h-5 w-5 text-slate-500" />
                                    Recent Activity
                                </h2>
                                <button
                                    onClick={() => onNavigate('mylab/bakes')}
                                    className="text-sm text-lime-600 font-bold hover:underline"
                                >
                                    View Log
                                </button>
                            </div>

                            {recentBakes.length > 0 ? (
                                <div className="grid grid-cols-1 gap-3">
                                    {recentBakes.map((batch) => (
                                        <div
                                            key={batch.id}
                                            onClick={() => onNavigate('mylab/bakes' as Page)}
                                            className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white hover:border-lime-200 hover:shadow-md transition-all cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold text-sm ${batch.rating && batch.rating >= 4 ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                                    {batch.rating || '-'}
                                                </div>
                                                <div>
                                                    <h4 className="text-base font-bold text-slate-800 group-hover:text-lime-700 transition-colors">
                                                        {batch.name}
                                                    </h4>
                                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                                        <span>{new Date(batch.createdAt).toLocaleDateString()}</span>
                                                        <span>•</span>
                                                        <span>{batch.styleId || 'Custom Style'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-400 group-hover:text-lime-500 transition-colors">
                                                <span className="text-xs font-semibold hidden sm:block">View Details</span>
                                                <ChevronRightIcon className="h-5 w-5" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                                    <BeakerIcon className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                                    <p className="text-sm font-medium text-slate-500">No recent bakes recorded.</p>
                                    <button
                                        onClick={() => onNavigate('calculator')}
                                        className="mt-2 text-lime-600 font-bold text-sm hover:underline"
                                    >
                                        Start your first bake
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Sidebar - Span 4 */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Daily Insight Card */}
                        <div className="relative overflow-hidden rounded-2xl bg-[#1e293b] p-6 text-white shadow-xl ring-1 ring-white/10">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-gradient-to-br from-lime-400/20 to-emerald-400/20 blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-1.5 bg-lime-400/10 rounded-lg">
                                        <SparklesIcon className="h-4 w-4 text-lime-400" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-lime-400">Daily Tip</span>
                                </div>
                                <h3 className="font-bold text-xl mb-3">Autolyse Science</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                    Did you know? Autolyse allows protease enzymes to degrade gluten bonds while amylase turns starch into sugars. This creates a more extensible dough.
                                </p>
                                <button
                                    onClick={() => onNavigate('learn/fundamentals')}
                                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all"
                                >
                                    Read Full Article <ChevronRightIcon className="h-3 w-3" />
                                </button>
                            </div>
                        </div>

                        {/* Locked AI Feature Teaser */}
                        <LockedTeaser featureKey="mylab.quickAction">
                            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group cursor-pointer hover:shadow-indigo-500/25 transition-all">
                                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <LockClosedIcon className="h-5 w-5 text-white/70" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <SparklesIcon className="h-5 w-5 text-indigo-200" />
                                        <span className="text-xs font-bold uppercase tracking-wide text-indigo-200">AI Beta</span>
                                    </div>
                                    <h3 className="font-bold text-white text-lg mb-2">Fermentation Engine</h3>
                                    <p className="text-sm text-indigo-100 leading-relaxed mb-4">
                                        Predict user-specific fermentation times based on your historical lab data.
                                    </p>
                                    <div className="inline-flex items-center gap-1 text-xs font-bold text-white bg-white/20 px-3 py-1.5 rounded-lg">
                                        Unlock Pro Features
                                    </div>
                                </div>
                            </div>
                        </LockedTeaser>

                        {/* Affiliate / Ad Block */}
                        <div className="space-y-4 pt-6 mt-2 border-t border-slate-200">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Recommended Gear</h3>
                            <LearnAffiliateBlock placementKeys={['mylab_dashboard']} />
                            <AdCard context="mylab_sidebar" />
                        </div>
                    </div>
                </div>
            </div>
            <MyLabLimitModal
                isOpen={showLimitModal}
                onClose={() => setShowLimitModal(false)}
            />
        </MyLabLayout>
    );
};

// -- Redesigned Wide Feature Card --
interface LabFeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    bgClass: string;
    isLocked?: boolean;
    onUnlock?: () => void;
}

const LabFeatureCard: React.FC<LabFeatureCardProps> = ({ icon, title, description, onClick, bgClass, isLocked, onUnlock }) => {

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
                relative flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-300 w-full group
                ${isLocked
                    ? 'bg-slate-50 border-slate-100 opacity-90 hover:opacity-100'
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-lg hover:border-lime-200 hover:-translate-y-1'
                }
            `}
        >
            {/* Icon Container */}
            <div className={`
                h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm
                ${isLocked ? 'bg-slate-200 grayscale' : bgClass}
            `}>
                {icon}
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <h3 className={`text-sm font-bold truncate ${isLocked ? 'text-slate-500' : 'text-slate-800'}`}>
                        {title}
                    </h3>
                    {isLocked && <LockClosedIcon className="h-3 w-3 text-slate-400" />}
                </div>
                <p className="text-xs text-slate-500 leading-snug line-clamp-2 mt-0.5">
                    {description}
                </p>
            </div>

            {/* Action Arrow (visible on hover or generic) */}
            <div className={`
                h-8 w-8 rounded-full flex items-center justify-center transition-all bg-slate-50
                ${isLocked ? 'opacity-0' : 'text-slate-300 group-hover:text-lime-600 group-hover:bg-lime-50'}
            `}>
                <ArrowRightIcon className="h-4 w-4" />
            </div>
        </button>
    );
};

export default MyLabPage;
