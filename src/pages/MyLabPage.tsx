import React, { useMemo } from 'react';
import { useUser } from '@/contexts/UserProvider';
import MyLabLayout from './mylab/MyLabLayout';
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
    ClipboardDocumentCheckIcon
} from '@/components/ui/Icons';
import { Page } from '@/types';
import LearnAffiliateBlock from '@/components/learn/LearnAffiliateBlock';

interface MyLabPageProps {
    onNavigate: (page: Page) => void;
    onCreateDraftBatch: () => void;
    onLoadAndNavigate?: (config: any) => void;
}

const MyLabPage: React.FC<MyLabPageProps> = ({ onNavigate, onCreateDraftBatch }) => {
    const { user, batches, levains, goals } = useUser();

    const activeLevain = useMemo(() => levains.find(l => l.status === 'ativo'), [levains]);
    const lastBake = useMemo(() => batches.length > 0 ? batches[batches.length - 1] : null, [batches]);
    const activeGoal = useMemo(() => goals.find(g => g.status === 'ativo'), [goals]);

    // Derived Stats
    const totalBakes = batches.length;
    const successRate = useMemo(() => {
        if (totalBakes === 0) return 0;
        const ratedBakes = batches.filter(b => b.rating);
        if (ratedBakes.length === 0) return 0;
        const avgRating = ratedBakes.reduce((acc, b) => acc + (b.rating || 0), 0) / ratedBakes.length;
        return Math.round((avgRating / 5) * 100);
    }, [batches, totalBakes]);

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <MyLabLayout activePage="mylab" onNavigate={onNavigate}>
            <div className="space-y-6 animate-fade-in">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900  tracking-tight">
                            {getGreeting()}, {user?.name?.split(' ')[0] || 'Baker'}
                        </h1>
                        <p className="text-slate-500  mt-1">
                            Here's what's happening in your lab today.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => onNavigate('calculator')}
                            className="flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white px-4 py-2.5 rounded-xl font-semibold shadow-lg shadow-lime-500/20 transition-all hover:scale-105 active:scale-95"
                        >
                            <PlusCircleIcon className="h-5 w-5" />
                            <span>New Bake</span>
                        </button>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Column (Main Activity) */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Status Cards Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Levain Status Widget */}
                            <div
                                onClick={() => onNavigate('mylab/levain')}
                                className="group relative overflow-hidden rounded-2xl bg-white  p-5 shadow-sm border border-slate-100  hover:border-orange-200 transition-all cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <FireIcon className="h-24 w-24 text-orange-500" />
                                </div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2 rounded-lg ${activeLevain ? 'bg-orange-100  text-orange-600 ' : 'bg-slate-100  text-slate-400 '}`}>
                                        <FireIcon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900 ">Levain Status</h3>
                                </div>

                                {activeLevain ? (
                                    <div>
                                        <p className="text-lg font-bold text-slate-800 ">{activeLevain.name}</p>
                                        <div className="flex items-center gap-2 mt-2 text-xs text-slate-500 ">
                                            <ClockIcon className="h-3.5 w-3.5" />
                                            <span>Fed {new Date(activeLevain.lastFeeding).toLocaleDateString()}</span>
                                        </div>
                                        <div className="mt-3 inline-flex items-center text-xs font-bold text-orange-600  bg-orange-50  px-2 py-1 rounded-md">
                                            Active & Ready
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="text-slate-500  text-sm">No active starter.</p>
                                        <span className="mt-3 inline-block text-xs font-medium text-orange-600  hover:underline">Create one &rarr;</span>
                                    </div>
                                )}
                            </div>

                            {/* Last Bake Widget */}
                            <div
                                onClick={() => lastBake ? onNavigate('batch', lastBake.id) : onNavigate('calculator')}
                                className="group relative overflow-hidden rounded-2xl bg-white  p-5 shadow-sm border border-slate-100  hover:border-blue-200 transition-all cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <BeakerIcon className="h-24 w-24 text-blue-500" />
                                </div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-blue-100  text-blue-600 ">
                                        <BeakerIcon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900 ">Recent Activity</h3>
                                </div>

                                {lastBake ? (
                                    <div>
                                        <p className="text-lg font-bold text-slate-800  truncate">{lastBake.name}</p>
                                        <div className="flex items-center gap-2 mt-2 text-xs text-slate-500 ">
                                            <span className="bg-slate-100  px-1.5 py-0.5 rounded">{lastBake.doughConfig.hydration}% Hydration</span>
                                            <span>•</span>
                                            <span>{new Date(lastBake.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        <div className="mt-3 inline-flex items-center text-xs font-bold text-blue-600  bg-blue-50  px-2 py-1 rounded-md">
                                            View Results
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="text-slate-500  text-sm">Start your first bake.</p>
                                        <span className="mt-3 inline-block text-xs font-medium text-blue-600  hover:underline">Open Calculator &rarr;</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Quick Actions / Tools Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            <QuickAction
                                icon={<BeakerIcon className="h-6 w-6 text-blue-500" />}
                                label="My Bakes"
                                subLabel="History"
                                onClick={() => onNavigate('mylab/fornadas')}
                            />
                            <QuickAction
                                icon={<FireIcon className="h-6 w-6 text-orange-500" />}
                                label="Levain"
                                subLabel="Management"
                                onClick={() => onNavigate('mylab/levain')}
                            />
                            <QuickAction
                                icon={<ClipboardDocumentCheckIcon className="h-6 w-6 text-cyan-500" />}
                                label="Consistency"
                                subLabel="Tests & Series"
                                onClick={() => onNavigate('mylab/consistency')}
                            />
                            <QuickAction
                                icon={<ArrowsRightLeftIcon className="h-6 w-6 text-purple-500" />}
                                label="Comparisons"
                                subLabel="A/B Testing"
                                onClick={() => onNavigate('mylab/comparacoes')}
                            />
                            <QuickAction
                                icon={<DocumentTextIcon className="h-6 w-6 text-indigo-500" />}
                                label="Goals"
                                subLabel="Targets"
                                onClick={() => onNavigate('mylab/objetivos')}
                            />
                            <QuickAction
                                icon={<ChartBarIcon className="h-6 w-6 text-rose-500" />}
                                label="Insights"
                                subLabel="Analytics"
                                onClick={() => onNavigate('mylab/insights')}
                            />
                            <QuickAction
                                icon={<ScaleIcon className="h-6 w-6 text-emerald-500" />}
                                label="My Flours"
                                subLabel="Inventory"
                                onClick={() => onNavigate('mylab/farinhas')}
                            />
                        </div>

                        {/* Active Goal Banner */}
                        {activeGoal && (
                            <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600   p-6 text-white shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/20 blur-xl"></div>
                                <div className="relative z-10 flex justify-between items-center">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-indigo-100 mb-1">Current Goal</p>
                                        <h3 className="text-lg font-bold">{activeGoal.title}</h3>
                                        <p className="text-sm text-indigo-100 mt-1">Progress: {activeGoal.progress}%</p>
                                    </div>
                                    <button
                                        onClick={() => onNavigate('mylab/objetivos')}
                                        className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-sm font-semibold transition-colors"
                                    >
                                        Update
                                    </button>
                                </div>
                                {/* Progress Bar */}
                                <div className="mt-4 w-full bg-black/20 rounded-full h-1.5">
                                    <div
                                        className="bg-white h-1.5 rounded-full transition-all duration-1000"
                                        style={{ width: `${activeGoal.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column (Insights & Suggestions) */}
                    <div className="space-y-6">

                        {/* Lab Stats */}
                        <div className="rounded-2xl bg-white  p-6 shadow-sm border border-slate-100 ">
                            <h3 className="font-bold text-slate-900  mb-4 flex items-center gap-2">
                                <ChartBarIcon className="h-5 w-5 text-lime-500" />
                                Lab Performance
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 ">
                                    <span className="text-sm text-slate-500 ">Total Bakes</span>
                                    <span className="text-lg font-bold text-slate-900 ">{totalBakes}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 ">
                                    <span className="text-sm text-slate-500 ">Success Rate</span>
                                    <span className={`text-lg font-bold ${successRate >= 80 ? 'text-green-600 ' : 'text-yellow-600 '}`}>
                                        {successRate}%
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-100 ">
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Recommended Reading</p>
                                <div
                                    onClick={() => onNavigate('learn/fermentation')}
                                    className="group flex items-start gap-3 cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded-lg transition-colors"
                                >
                                    <div className="h-10 w-10 rounded-lg bg-indigo-100  text-indigo-600  flex items-center justify-center flex-shrink-0">
                                        <SparklesIcon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900  group-hover:text-indigo-600 transition-colors">Mastering Fermentation</p>
                                        <p className="text-xs text-slate-500  line-clamp-2">Learn how time and temperature affect your crumb structure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Daily Tip */}
                        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800   p-6 text-white shadow-lg border border-slate-700/50">
                            <div className="flex items-start gap-3">
                                <SparklesIcon className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-sm uppercase tracking-wide text-slate-400">Pro Tip</h3>
                                    <p className="text-slate-200 text-sm mt-2 leading-relaxed">
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

const QuickAction: React.FC<{ icon: React.ReactNode; label: string; subLabel: string; onClick: () => void }> = ({ icon, label, subLabel, onClick }) => (
    <button
        onClick={onClick}
        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white  border border-slate-100  shadow-sm hover:shadow-md hover:border-lime-200 transition-all hover:-translate-y-1"
    >
        <div className="mb-3 p-2 rounded-full bg-slate-50 ">
            {icon}
        </div>
        <span className="text-sm font-bold text-slate-900 ">{label}</span>
        <span className="text-xs text-slate-500 ">{subLabel}</span>
    </button>
);

export default MyLabPage;
