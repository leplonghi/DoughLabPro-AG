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
    <div className="rounded-2xl bg-dlp-bg-card p-6 shadow-dlp-sm border border-dlp-border">
        <h3 className="font-bold text-dlp-text-primary mb-3 flex items-center gap-2 text-sm">
            <ChartBarIcon className="h-5 w-5 text-dlp-accent" />
            Lab Health Index
        </h3>
        <div className="text-center">
            <div className="text-4xl font-bold text-dlp-accent">85</div>
            <p className="text-xs text-dlp-text-muted mt-1 font-medium">Excellent</p>
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
            <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12">
                {/* Welcome Header */}
                <div className="relative overflow-hidden rounded-3xl bg-dlp-text-primary p-8 shadow-dlp-lg text-white">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-dlp-accent/20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-dlp-info/20 blur-3xl"></div>

                    <div className="relative z-10">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-2">
                            <span className="text-white">
                                Welcome to your Lab
                            </span>
                        </h1>
                        <p className="text-white/80 max-w-xl text-lg">
                            Track your progress, manage your ingredients, and master the art of fermentation.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    <QuickAction
                        icon={<PlusCircleIcon className="h-8 w-8 text-white" />}
                        label="New Bake"
                        subLabel="Start Fresh"
                        onClick={() => onNavigate('calculator')}
                        variant="primary"
                    />
                    <QuickAction
                        icon={<FireIcon className="h-8 w-8 text-dlp-warning" />}
                        label="Levain"
                        subLabel="Management"
                        onClick={() => onNavigate('mylab/levain')}
                    />
                    <QuickAction
                        icon={<BeakerIcon className="h-8 w-8 text-dlp-accent" />}
                        label="My Bakes"
                        subLabel="History"
                        onClick={() => onNavigate('mylab/bakes')}
                    />
                    <QuickAction
                        icon={<ScaleIcon className="h-8 w-8 text-dlp-info" />}
                        label="My Flours"
                        subLabel="Inventory"
                        isLocked={!hasProAccess}
                        previewText="Unlock advanced inventory tracking."
                        onClick={() => !hasProAccess ? openPaywall('mylab_flours') : onNavigate('mylab/flours')}
                    />
                    <QuickAction
                        icon={<ClipboardDocumentCheckIcon className="h-8 w-8 text-dlp-success" />}
                        label="Consistency"
                        subLabel="Tests & Series"
                        isLocked={!hasProAccess}
                        previewText="Unlock consistency testing tools."
                        onClick={() => !hasProAccess ? openPaywall('mylab_consistency') : onNavigate('mylab/consistency')}
                    />
                    <QuickAction
                        icon={<ArrowsRightLeftIcon className="h-8 w-8 text-dlp-info" />}
                        label="Comparisons"
                        subLabel="A/B Testing"
                        onClick={() => onNavigate('mylab/comparisons')}
                    />
                    <QuickAction
                        icon={<DocumentTextIcon className="h-8 w-8 text-dlp-accent" />}
                        label="Goals"
                        subLabel="Targets"
                        onClick={() => onNavigate('mylab/goals')}
                    />
                    <QuickAction
                        icon={<ChartBarIcon className="h-8 w-8 text-dlp-accent" />}
                        label="Insights"
                        subLabel="Analytics"
                        onClick={() => onNavigate('mylab/insights')}
                    />
                    <LockedTeaser featureKey="mylab.quickAction">
                        <QuickAction
                            icon={<SparklesIcon className="h-8 w-8 text-dlp-accent" />}
                            label="AI Predict"
                            subLabel="Fermentation"
                            onClick={() => { }}
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
                    <div className="rounded-2xl bg-dlp-bg-card p-6 shadow-dlp-sm border border-dlp-border">
                        <h3 className="font-bold text-dlp-text-primary mb-4 flex items-center gap-2 text-sm">
                            <ChartBarIcon className="h-5 w-5 text-dlp-accent" />
                            Lab Performance
                        </h3>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 rounded-lg bg-dlp-bg-muted">
                                <span className="text-xs text-dlp-text-secondary">Total Bakes</span>
                                <span className="text-base font-bold text-dlp-text-primary">{totalBakes}</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg bg-dlp-bg-muted">
                                <span className="text-xs text-dlp-text-secondary">Success Rate</span>
                                <span className={`text-base font-bold ${successRate >= 80 ? 'text-dlp-success' : 'text-dlp-warning'}`}>
                                    {successRate}%
                                </span>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-dlp-border">
                            <p className="text-xs font-bold uppercase tracking-wider text-dlp-text-muted mb-2">Recommended Reading</p>
                            <div
                                onClick={() => onNavigate('learn/fermentation')}
                                className="group flex items-start gap-2 cursor-pointer hover:bg-dlp-bg-muted p-2 -mx-2 rounded-lg transition-colors"
                            >
                                <div className="h-8 w-8 rounded-lg bg-dlp-info/10 text-dlp-info flex items-center justify-center flex-shrink-0">
                                    <SparklesIcon className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-dlp-text-primary group-hover:text-dlp-accent transition-colors">Mastering Fermentation</p>
                                    <p className="text-xs text-dlp-text-muted line-clamp-2">Learn how time and temperature affect your crumb structure.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Daily Tip */}
                    <div className="rounded-2xl bg-dlp-text-primary p-6 text-white shadow-dlp-lg border border-dlp-border">
                        <div className="flex items-start gap-2">
                            <SparklesIcon className="h-4 w-4 text-dlp-accent flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold text-xs uppercase tracking-wide text-white/60">Pro Tip</h3>
                                <p className="text-white/90 text-xs mt-1.5 leading-relaxed">
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
}>(({ icon, label, subLabel, onClick, isLocked, previewText, variant = 'default' }) => {

    if (variant === 'primary') {
        return (
            <button
                onClick={onClick}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-dlp-accent bg-dlp-bg-card shadow-dlp-sm hover:shadow-dlp-lg hover:shadow-dlp-accent/20 transition-all duration-300 relative overflow-hidden w-full hover:-translate-y-1"
            >
                <div className="mb-3 p-3 rounded-2xl bg-dlp-accent text-white shadow-dlp-lg shadow-dlp-accent/40 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    {icon}
                </div>
                <span className="text-sm font-bold text-dlp-text-primary">{label}</span>
                <span className="text-xs text-dlp-accent font-medium mt-0.5">{subLabel}</span>
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`group flex flex-col items-center justify-center p-6 rounded-2xl border shadow-dlp-sm transition-all duration-300 relative overflow-hidden w-full ${isLocked
                ? 'bg-dlp-bg-muted border-dlp-border opacity-75 hover:opacity-100'
                : `bg-dlp-bg-card border-dlp-border hover:shadow-dlp-md hover:-translate-y-1 hover:border-dlp-accent/50`
                }`}
        >
            {isLocked && (
                <div className="absolute top-3 right-3 bg-dlp-bg-muted p-1.5 rounded-full border border-dlp-border">
                    <LockClosedIcon className="h-3.5 w-3.5 text-dlp-text-muted" />
                </div>
            )}
            <div className={`mb-3 p-3 rounded-2xl transition-transform group-hover:scale-110 ${isLocked ? 'bg-dlp-bg-muted grayscale opacity-50' : 'bg-dlp-bg-muted group-hover:bg-dlp-bg-card group-hover:shadow-dlp-sm'}`}>
                {icon}
            </div>
            <span className={`text-sm font-bold ${isLocked ? 'text-dlp-text-muted' : 'text-dlp-text-primary'}`}>{label}</span>
            <span className="text-xs text-dlp-text-muted font-medium mt-0.5">{subLabel}</span>

            {isLocked && previewText && (
                <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-dlp-accent text-center px-2 bg-dlp-accent/10 rounded-full py-1 w-full">
                    PRO Feature
                </div>
            )}
        </button>
    );
});

export default MyLabPage;
