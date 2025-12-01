import React from 'react';
import { Users, Trophy } from 'lucide-react';

export const CommunityHero: React.FC = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900 to-purple-900 p-6 text-white shadow-xl mb-6">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <Users className="h-6 w-6 text-indigo-300" />
                        Community Lab
                    </h1>
                    <p className="text-indigo-200 mt-1 text-sm max-w-lg">
                        Share your best bakes, clone recipes from pros, and climb the rankings.
                        The ultimate sourdough social network.
                    </p>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                    <Trophy className="h-5 w-5 text-yellow-400" />
                    <div className="text-xs">
                        <div className="font-semibold text-white">Weekly Challenge</div>
                        <div className="text-indigo-200">Highest Hydration Panettone</div>
                    </div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"></div>
        </div>
    );
};
