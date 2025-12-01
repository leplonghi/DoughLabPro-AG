import React from 'react';
import { useUser } from '../../contexts/UserProvider';
import { LockFeature } from '../../components/auth/LockFeature'; // Assuming this exists from previous tasks
import { User, Award, TrendingUp, Users } from 'lucide-react';

export const CommunityProfileSidebar: React.FC = () => {
    const { user, hasProAccess } = useUser();

    if (!user) return null;

    return (
        <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 text-center">
                <div className="relative inline-block">
                    <div className="h-20 w-20 rounded-full bg-slate-100 dark:bg-slate-700 mx-auto overflow-hidden border-4 border-white dark:border-slate-800 shadow-md">
                        {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                        ) : (
                            <div className="h-full w-full flex items-center justify-center text-slate-400">
                                <User className="h-8 w-8" />
                            </div>
                        )}
                    </div>
                    {hasProAccess && (
                        <div className="absolute bottom-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-white">
                            PRO
                        </div>
                    )}
                </div>

                <h3 className="mt-3 font-bold text-slate-900 dark:text-white">{user.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Joined {new Date().getFullYear()}</p>

                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 dark:border-slate-700 pt-4">
                    <div className="text-center">
                        <div className="text-sm font-bold text-slate-900 dark:text-white">0</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wide">Posts</div>
                    </div>
                    <div className="text-center border-l border-slate-100 dark:border-slate-700">
                        <div className="text-sm font-bold text-slate-900 dark:text-white">0</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wide">Likes</div>
                    </div>
                    <div className="text-center border-l border-slate-100 dark:border-slate-700">
                        <div className="text-sm font-bold text-slate-900 dark:text-white">0</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wide">Clones</div>
                    </div>
                </div>
            </div>

            {/* Stats - Locked for Free */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="p-4 border-b border-slate-100 dark:border-slate-700 font-semibold text-sm flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-indigo-500" />
                    Performance Stats
                </div>

                <LockFeature featureKey="community.profile_full" className="p-4">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500">Weekly Rank</span>
                            <span className="font-medium text-slate-900 dark:text-white">#42</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500">Total Clones</span>
                            <span className="font-medium text-slate-900 dark:text-white">128</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500">Avg. Rating</span>
                            <span className="font-medium text-slate-900 dark:text-white">4.8/5</span>
                        </div>
                    </div>
                </LockFeature>
            </div>

            {/* Badges - Locked for Free */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="p-4 border-b border-slate-100 dark:border-slate-700 font-semibold text-sm flex items-center gap-2">
                    <Award className="h-4 w-4 text-amber-500" />
                    Achievements
                </div>

                <LockFeature featureKey="community.profile_full" className="p-4">
                    <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-300">
                                <Award className="h-5 w-5" />
                            </div>
                        ))}
                    </div>
                </LockFeature>
            </div>
        </div>
    );
};
