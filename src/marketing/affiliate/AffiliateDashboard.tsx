import React from 'react';
import { useAffiliate } from './useAffiliate';

export const AffiliateDashboard: React.FC = () => {
    const { affiliateCode, stats, isLoading } = useAffiliate();

    if (isLoading) {
        return <div className="text-zinc-500">Loading dashboard...</div>;
    }

    if (!affiliateCode) {
        return (
            <div className="p-8 text-center bg-zinc-900 rounded-xl border border-zinc-800">
                <h2 className="text-2xl font-bold text-white mb-4">Become a DoughInfluencer</h2>
                <p className="text-zinc-400 mb-6">Earn money by sharing your passion for baking.</p>
                <button className="px-6 py-3 bg-lime-500 text-black font-bold rounded-xl hover:bg-lime-400">
                    Join Program
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-lime-900/40 to-zinc-900 border border-lime-500/20 rounded-xl p-6">
                <h3 className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Your Referral Code</h3>
                <div className="flex items-center gap-4">
                    <code className="text-3xl font-mono font-bold text-lime-400">{affiliateCode}</code>
                    <button className="text-sm text-zinc-400 hover:text-white underline">Copy Link</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <h4 className="text-zinc-500 text-sm mb-1">Total Clicks</h4>
                    <p className="text-2xl font-bold text-white">{stats?.clicks || 0}</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <h4 className="text-zinc-500 text-sm mb-1">Conversions</h4>
                    <p className="text-2xl font-bold text-white">{stats?.conversions || 0}</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <h4 className="text-zinc-500 text-sm mb-1">Revenue</h4>
                    <p className="text-2xl font-bold text-lime-400">${stats?.revenue.toFixed(2) || '0.00'}</p>
                </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Influencer Kit</h3>
                <div className="grid grid-cols-2 gap-4">
                    <button className="p-4 bg-zinc-950 rounded-lg border border-zinc-800 hover:border-lime-500/50 transition-colors text-left">
                        <span className="block text-white font-bold mb-1">Brand Assets</span>
                        <span className="text-xs text-zinc-500">Logos, banners, and fonts</span>
                    </button>
                    <button className="p-4 bg-zinc-950 rounded-lg border border-zinc-800 hover:border-lime-500/50 transition-colors text-left">
                        <span className="block text-white font-bold mb-1">Social Templates</span>
                        <span className="text-xs text-zinc-500">Stories and post templates</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
