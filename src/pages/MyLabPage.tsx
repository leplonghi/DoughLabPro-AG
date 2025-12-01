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
    <div className="rounded-xl bg-gradient-to-br from-lime-50 to-white p-4 shadow-sm border border-lime-100">
        <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm">
            <ChartBarIcon className="h-4 w-4 text-lime-500" />
            Lab Health Index
        </h3>
        <div className="text-center">
            <div className="text-3xl font-bold text-lime-600">85</div>
            <p className="text-xs text-slate-500 mt-1">Excellent</p>
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
            <div className="space-y-4 animate-fade-in max-w-7xl mx-auto">
                {/* ... existing code */}

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
                    <LockedTeaser featureKey="mylab.quickAction">
                        <QuickAction
                            icon={<SparklesIcon className="h-5 w-5 text-purple-500" />}
                            label="AI Predict"
                            subLabel="Fermentation"
                            onClick={() => { }}
                        />
                    </LockedTeaser>
                </div>

                {/* Active Goal Banner - Mais compacto */}

            </div>

            {/* Right Column (Insights & Suggestions) - Mais compacto */}
            <div className="space-y-4">

                {/* Lab Health Index */}
                <LockedTeaser featureKey="mylab.healthIndex">
                    <LabHealthIndexCard />
                </LockedTeaser>

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

                <AdCard context="mylab_sidebar" />
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
            ? 'bg-slate-50 border-slate-200 opacity-80 hover:opacity-100'
            : 'bg-white border-slate-100 hover:shadow-md hover:border-lime-200 hover:-translate-y-0.5'
            }`}
    >
        {isLocked && (
            <div className="absolute top-2 right-2 bg-slate-200/50 p-1 rounded-full">
                <LockClosedIcon className="h-3 w-3 text-slate-400" />
            </div>
        )}
        <div className={`mb-2 p-1.5 rounded-full ${isLocked ? 'bg-slate-100 grayscale opacity-50' : 'bg-slate-50'}`}>
            {icon}
        </div>
        <span className={`text-xs font-bold ${isLocked ? 'text-slate-500' : 'text-slate-900'}`}>{label}</span>
        <span className="text-xs text-slate-500">{subLabel}</span>

        {isLocked && previewText && (
            <div className="mt-2 text-[9px] font-medium leading-tight text-lime-600 text-center px-1 bg-lime-50 rounded py-0.5 w-full">
                PRO Feature
            </div>
        )}
    </button>
));

export default MyLabPage;
