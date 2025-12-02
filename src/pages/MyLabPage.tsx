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
    LockClosedIcon
} from '@heroicons/react/24/outline';

interface MyLabPageProps {
    onNavigate: (page: Page) => void;
    onCreateDraftBatch: () => void;
}

const LabHealthIndexCard = () => (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm border border-slate-100 transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                <div className="p-1.5 rounded-lg bg-lime-100 text-lime-600">
                    <ChartBarIcon className="h-4 w-4" />
                </div>
                Lab Health Index
            </h3>
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Excellent
            </span>
        </div>
        <div className="flex items-end gap-2">
            <div className="text-4xl font-black text-slate-900 tracking-tight">85</div>
            <div className="text-xs font-medium text-slate-500 mb-1.5">/ 100</div>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-lime-500 to-green-500 w-[85%] transition-all duration-1000 ease-out group-hover:w-[87%]"></div>
        </div>
    </div>
);

const MyLabPage: React.FC<MyLabPageProps> = ({ onNavigate, onCreateDraftBatch }) => {
    const { hasProAccess, openPaywall, batches } = useUser();

    const totalBakes = batches.length;
    const successRate = batches.length > 0
        ? Math.round((batches.filter(b => b.rating && b.rating >= 4).length / batches.length) * 100)
        : 0;

    return (
        <MyLabLayout activePage="mylab" onNavigate={onNavigate}>
            <div className="space-y-6 animate-fade-in max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 pt-6">
                {/* Standardized Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            My Lab
                        </h1>
                        <p className="text-slate-500 text-lg">
                            Manage your ingredients, track progress, and master fermentation.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="group relative">
                            <button
                                disabled
                                className="relative inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-400 cursor-not-allowed opacity-75"
                            >
                                Ingredients Planner
                                <span className="ml-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-500">
                                    Soon
                                </span>
                            </button>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none shadow-xl">
                                Coming soon: plan your formulas based on your actual pantry — with validated substitutions, hydration safety ranges, and direct integration with the Dough Calculator.
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900"></div>
                            </div>
                        </div>

                        <button
                            onClick={() => onNavigate('calculator')}
                            className="inline-flex items-center gap-2 rounded-xl bg-lime-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-lime-500/20 hover:bg-lime-600 hover:scale-105 transition-all active:scale-95"
                        >
                            <PlusCircleIcon className="h-5 w-5" />
                            New Bake
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Actions Grid */}
                    <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <QuickAction
                            icon={<PlusCircleIcon className="h-6 w-6 text-white" />}
                            label="New Bake"
                            subLabel="Start Fresh"
                            onClick={() => onNavigate('calculator')}
                            variant="primary"
                        />
                        <QuickAction
                            icon={<FireIcon className="h-6 w-6 text-orange-500" />}
                            label="Levain"
                            subLabel="Management"
                            onClick={() => onNavigate('mylab/levain')}
                            iconBg="bg-orange-50"
                        />
                        <QuickAction
                            icon={<BeakerIcon className="h-6 w-6 text-lime-600" />}
                            label="My Bakes"
                            subLabel="History"
                            onClick={() => onNavigate('mylab/bakes')}
                            iconBg="bg-lime-50"
                        />
                        <QuickAction
                            icon={<ScaleIcon className="h-6 w-6 text-blue-500" />}
                            label="My Flours"
                            subLabel="Inventory"
                            isLocked={!hasProAccess}
                            previewText="Unlock"
                            onClick={() => !hasProAccess ? openPaywall('mylab_flours') : onNavigate('mylab/flours')}
                            iconBg="bg-blue-50"
                        />
                        <QuickAction
                            icon={<ClipboardDocumentCheckIcon className="h-6 w-6 text-emerald-500" />}
                            label="Consistency"
                            subLabel="Tests"
                            isLocked={!hasProAccess}
                            previewText="Unlock"
                            onClick={() => !hasProAccess ? openPaywall('mylab_consistency') : onNavigate('mylab/consistency')}
                            iconBg="bg-emerald-50"
                        />
                        <QuickAction
                            icon={<ArrowsRightLeftIcon className="h-6 w-6 text-purple-500" />}
                            label="Comparisons"
                            subLabel="A/B Testing"
                            onClick={() => onNavigate('mylab/comparisons')}
                            iconBg="bg-purple-50"
                        />
                        <QuickAction
                            icon={<DocumentTextIcon className="h-6 w-6 text-indigo-500" />}
                            label="Goals"
                            subLabel="Targets"
                            onClick={() => onNavigate('mylab/goals')}
                            iconBg="bg-indigo-50"
                        />
                        <QuickAction
                            icon={<ChartBarIcon className="h-6 w-6 text-pink-500" />}
                            label="Insights"
                            subLabel="Analytics"
                            onClick={() => onNavigate('mylab/insights')}
                            iconBg="bg-pink-50"
                        />
                        <LockedTeaser featureKey="mylab.quickAction">
                            <QuickAction
                                icon={<SparklesIcon className="h-6 w-6 text-amber-500" />}
                                label="AI Predict"
                                subLabel="Fermentation"
                                onClick={() => { }}
                                iconBg="bg-amber-50"
                            />
                        </LockedTeaser>
                    </div>

                    {/* Right Column (Insights & Suggestions) */}
                    <div className="space-y-4">

                        {/* Lab Health Index */}
                        <LockedTeaser featureKey="mylab.healthIndex">
                            <LabHealthIndexCard />
                        </LockedTeaser>

                        {/* Lab Stats */}
                        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-sm">
                                <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600">
                                    <ChartBarIcon className="h-4 w-4" />
                                </div>
                                Lab Performance
                            </h3>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                                    <span className="text-xs font-medium text-slate-600">Total Bakes</span>
                                    <span className="text-sm font-bold text-slate-900">{totalBakes}</span>
                                </div>
                                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                                    <span className="text-xs font-medium text-slate-600">Success Rate</span>
                                    <span className={`text-sm font-bold ${successRate >= 80 ? 'text-green-600' : 'text-amber-500'}`}>
                                        {successRate}%
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Recommended Reading</p>
                                <div
                                    onClick={() => onNavigate('learn/fermentation')}
                                    className="group flex items-start gap-3 cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-all"
                                >
                                    <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                                        <SparklesIcon className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Mastering Fermentation</p>
                                        <p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5">Learn how time and temperature affect your crumb structure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Daily Tip */}
                        <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-5 text-white shadow-lg">
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-full bg-lime-500/20 blur-xl"></div>
                            <div className="flex items-start gap-3 relative z-10">
                                <SparklesIcon className="h-4 w-4 text-lime-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-[10px] uppercase tracking-wide text-lime-400 mb-1">Pro Tip</h3>
                                    <p className="text-slate-100 text-xs leading-relaxed">
                                        "For a more open crumb, try increasing your hydration by 2% and adding a 30-minute autolyse step."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Affiliate Block */}
                        <LearnAffiliateBlock placementKeys={['mylab_dashboard']} />

                        <AdCard context="mylab_sidebar" />
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
    variant?: 'default' | 'primary';
    iconBg?: string;
}>(({ icon, label, subLabel, onClick, isLocked, previewText, variant = 'default', iconBg = 'bg-slate-50' }) => {

    if (variant === 'primary') {
        return (
            <button
                onClick={onClick}
                className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-lime-500 to-lime-600 shadow-lg shadow-lime-500/20 hover:shadow-xl hover:shadow-lime-500/30 transition-all duration-300 relative overflow-hidden w-full hover:-translate-y-1"
            >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-2 p-2.5 rounded-xl bg-white/20 text-white shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-3">
                    {icon}
                </div>
                <span className="text-sm font-bold text-white">{label}</span>
                <span className="text-[10px] text-lime-100 font-medium mt-0.5">{subLabel}</span>
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`group flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden w-full ${isLocked
                ? 'bg-slate-50 border-slate-200 opacity-75 hover:opacity-100'
                : `bg-white border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-lime-200`
                }`}
        >
            {isLocked && (
                <div className="absolute top-2 right-2 bg-slate-100 p-1 rounded-full border border-slate-200">
                    <LockClosedIcon className="h-3 w-3 text-slate-400" />
                </div>
            )}
            <div className={`mb-2 p-2.5 rounded-xl transition-transform group-hover:scale-110 ${isLocked ? 'bg-slate-100 grayscale opacity-50' : `${iconBg} group-hover:shadow-sm`}`}>
                {icon}
            </div>
            <span className={`text-xs font-bold ${isLocked ? 'text-slate-400' : 'text-slate-800'}`}>{label}</span>
            <span className="text-[10px] text-slate-500 font-medium mt-0.5">{subLabel}</span>

            {isLocked && previewText && (
                <div className="mt-2 text-[9px] font-bold uppercase tracking-wider text-lime-600 text-center px-2 bg-lime-50 rounded-full py-0.5 w-full">
                    {previewText}
                </div>
            )}
        </button>
    );
});

export default MyLabPage;
