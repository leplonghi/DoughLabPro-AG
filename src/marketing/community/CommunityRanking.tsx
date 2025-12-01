import React, { useEffect, useState } from 'react';
import { getRankings } from './CommunityService';

export const CommunityRanking: React.FC = () => {
    const [rankings, setRankings] = useState<any[]>([]);

    useEffect(() => {
        getRankings().then(setRankings);
    }, []);

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-zinc-800 bg-zinc-950/50">
                <h3 className="text-lg font-bold text-white">Baker of the Week</h3>
            </div>
            <div className="divide-y divide-zinc-800">
                {rankings.map((user, index) => (
                    <div key={index} className="p-4 flex items-center gap-4">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${index === 0 ? 'bg-yellow-500 text-black' :
                                index === 1 ? 'bg-zinc-400 text-black' :
                                    index === 2 ? 'bg-orange-700 text-white' : 'bg-zinc-800 text-zinc-400'
                            }`}>
                            {user.rank}
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-zinc-200">{user.name}</h4>
                            <p className="text-xs text-zinc-500">{user.points} points</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
