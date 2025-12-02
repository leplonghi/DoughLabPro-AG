import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import { FireIcon, PlusCircleIcon, ChartBarIcon, BeakerIcon } from '@/components/ui/Icons';
import MyLabLayout from './MyLabLayout';
import { Page } from '@/types';
import { SocialShare } from '@/marketing/social/SocialShare';
import { LockedTeaser } from "@/marketing/fomo/components/LockedTeaser";
import { AdCard } from "@/marketing/ads/AdCard";

interface MyLabLevainPetPageProps {
    onNavigate: (page: Page) => void;
}

const MyLabLevainPetPage: React.FC<MyLabLevainPetPageProps> = ({ onNavigate }) => {
    const { levains, hasProAccess, openPaywall } = useUser();
    const activeLevain = levains.find(l => l.status === 'ativo');

    return (
        <MyLabLayout activePage="mylab/levain-pet" onNavigate={onNavigate}>
            <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 pt-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Levain Dashboard
                        </h1>
                        <p className="text-slate-500 text-lg">
                            Monitor your starter's health, feeding schedule, and activity.
                        </p>
                    </div>
                    <button
                        onClick={() => { /* TODO: Add create levain logic */ }}
                        className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:scale-105 transition-all active:scale-95"
                    >
                        <PlusCircleIcon className="h-5 w-5" />
                        New Starter
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {activeLevain ? (
                            <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg border border-slate-100">
                                <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="flex items-center gap-5">
                                            <div className="p-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl text-white shadow-lg shadow-orange-500/30">
                                                <FireIcon className="h-8 w-8" />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{activeLevain.name}</h2>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-bold text-green-700 ring-1 ring-inset ring-green-600/20">
                                                        Active
                                                    </span>
                                                    <span className="text-sm text-slate-500 font-medium">
                                                        Created {new Date(activeLevain.createdAt).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <SocialShare
                                            title={`Meet ${activeLevain.name}, my sourdough starter!`}
                                            data={activeLevain}
                                            type="levain"
                                            className="bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Last Feeding</p>
                                            <p className="text-lg font-bold text-slate-900">{new Date(activeLevain.lastFeeding).toLocaleDateString()}</p>
                                        </div>
                                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Age</p>
                                            <p className="text-lg font-bold text-slate-900">
                                                {Math.floor((Date.now() - new Date(activeLevain.createdAt).getTime()) / (1000 * 60 * 60 * 24))} days
                                            </p>
                                        </div>
                                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Hydration</p>
                                            <p className="text-lg font-bold text-slate-900">100%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-12 text-center">
                                <div className="mx-auto h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                                    <FireIcon className="h-8 w-8 text-slate-400" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">No active Levain</h3>
                                <p className="text-slate-500 mt-2 max-w-sm mx-auto">
                                    Start your sourdough journey by creating a new starter or activating an existing one.
                                </p>
                                <button
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700"
                                    onClick={() => { /* TODO */ }}
                                >
                                    <PlusCircleIcon className="h-4 w-4" />
                                    Create Starter
                                </button>
                            </div>
                        )}

                        {/* Advanced Analytics Section */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-slate-900">Fermentation Health</h3>
                                {!hasProAccess && (
                                    <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-full">
                                        PRO Feature
                                    </span>
                                )}
                            </div>

                            <LockedTeaser featureKey="levain.lab_full">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="h-64 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50"></div>
                                        <ChartBarIcon className="h-12 w-12 text-blue-200 mb-3 group-hover:scale-110 transition-transform" />
                                        <span className="text-slate-900 font-bold relative z-10">Activity Chart</span>
                                        <span className="text-xs text-slate-500 mt-1 relative z-10">Rise vs. Time</span>
                                    </div>
                                    <div className="h-64 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-50"></div>
                                        <BeakerIcon className="h-12 w-12 text-purple-200 mb-3 group-hover:scale-110 transition-transform" />
                                        <span className="text-slate-900 font-bold relative z-10">pH History</span>
                                        <span className="text-xs text-slate-500 mt-1 relative z-10">Acidity Tracking</span>
                                    </div>
                                </div>
                            </LockedTeaser>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-orange-500/20 blur-2xl"></div>
                            <h3 className="font-bold text-lg mb-2 relative z-10">Feeding Schedule</h3>
                            <p className="text-slate-300 text-sm mb-4 relative z-10">
                                Next feeding recommended in:
                            </p>
                            <div className="text-3xl font-black text-orange-400 mb-1 relative z-10">4h 30m</div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden relative z-10">
                                <div className="h-full bg-orange-500 w-[60%]"></div>
                            </div>
                        </div>

                        <AdCard context="mylab_sidebar" />
                    </div>
                </div>
            </div>
        </MyLabLayout>
    );
};

export default MyLabLevainPetPage;
