import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import {
    PlusCircleIcon,
    DocumentTextIcon,
    FireIcon,
    ChartBarIcon,
    BeakerIcon,
    SparklesIcon
} from '@/components/ui/Icons';

interface MyLabPageProps {
    onNavigate: (page: any) => void;
    onCreateDraftBatch: () => void;
    onLoadAndNavigate?: (config: any) => void;
}

const MyLabPage: React.FC<MyLabPageProps> = ({ onNavigate, onCreateDraftBatch }) => {
    const { user, batches, levains } = useUser();

    const activeLevain = levains.find(l => l.status === 'ativo');
    const lastBake = batches.length > 0 ? batches[batches.length - 1] : null;

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <div className="space-y-8 p-6">
            {/* Header */}
            <div className="rounded-2xl bg-lime-50 p-8 border border-lime-100">
                <h1 className="text-3xl font-bold text-slate-900">
                    {getGreeting()}, {user?.name || 'Baker'}
                </h1>
                <p className="mt-2 text-slate-600">Ready to bake something amazing today?</p>

                <div className="mt-6 flex gap-4">
                    <button
                        onClick={() => onNavigate('calculator')}
                        className="flex items-center gap-2 rounded-lg bg-lime-500 px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-lime-600"
                    >
                        <PlusCircleIcon className="h-5 w-5" />
                        New Dough
                    </button>
                    <button
                        onClick={() => onNavigate('mylab/fornadas')}
                        className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm border border-slate-200 transition-colors hover:bg-slate-50"
                    >
                        <DocumentTextIcon className="h-5 w-5" />
                        View All Bakes
                    </button>
                </div>
            </div>

            {/* Main Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Levain Pet Card */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                            <FireIcon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Levain Pet</h3>
                    </div>

                    {activeLevain ? (
                        <div>
                            <p className="text-slate-600">Active: <strong>{activeLevain.name}</strong></p>
                            <p className="text-sm text-slate-500">Last fed: {new Date(activeLevain.lastFeeding).toLocaleDateString()}</p>
                        </div>
                    ) : (
                        <p className="text-slate-500">No levain active.</p>
                    )}

                    <button
                        onClick={() => onNavigate('mylab/levain')}
                        className="mt-4 text-sm font-semibold text-lime-600 hover:text-lime-700 hover:underline"
                    >
                        {activeLevain ? 'Manage Levain →' : 'Create Levain →'}
                    </button>
                </div>

                {/* Last Bake Card */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                            <DocumentTextIcon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Last Bake</h3>
                    </div>

                    {lastBake ? (
                        <div>
                            <p className="text-slate-600"><strong>{lastBake.name}</strong></p>
                            <p className="text-sm text-slate-500">{new Date(lastBake.createdAt).toLocaleDateString()}</p>
                        </div>
                    ) : (
                        <p className="text-slate-500">No bakes registered yet.</p>
                    )}

                    <button
                        onClick={() => onNavigate('calculator')}
                        className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                        New Dough →
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Hydration Trend */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-2 text-slate-500">
                        <ChartBarIcon className="h-5 w-5" />
                        <span className="text-sm font-bold uppercase tracking-wide">Hydration Trend</span>
                    </div>
                    <div className="flex h-24 items-center justify-center rounded-lg bg-slate-50 text-slate-400 text-sm">
                        Chart placeholder
                    </div>
                </div>

                {/* Success Rate */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-2 text-slate-500">
                        <SparklesIcon className="h-5 w-5" />
                        <span className="text-sm font-bold uppercase tracking-wide">Success Rate</span>
                    </div>
                    <div className="flex h-24 items-center justify-center rounded-lg bg-slate-50">
                        <span className="text-3xl font-bold text-slate-300">92%</span>
                    </div>
                </div>

                {/* Style Frequency */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-2 text-slate-500">
                        <BeakerIcon className="h-5 w-5" />
                        <span className="text-sm font-bold uppercase tracking-wide">Style Frequency</span>
                    </div>
                    <div className="flex h-24 items-center justify-center rounded-lg bg-slate-50 text-slate-400 text-sm">
                        Chart placeholder
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyLabPage;
