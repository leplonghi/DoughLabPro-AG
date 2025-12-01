import React from 'react';

export const LiveEvents: React.FC = () => {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden mb-6">
            <div className="relative aspect-video bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-2 animate-pulse">
                            LIVE
                        </div>
                        <h3 className="text-white font-bold">Mastering High Hydration</h3>
                        <p className="text-zinc-400 text-sm">with Chef Marco</p>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <button className="w-full py-2 bg-lime-500 text-black font-bold rounded-lg hover:bg-lime-400">
                    Join Stream
                </button>
            </div>
        </div>
    );
};
