import React from 'react';
import { useUser } from '../../contexts/UserProvider';
import { LockFeature } from '../../components/auth/LockFeature';
import { User, Award, TrendingUp } from 'lucide-react';

export const CommunityProfileSidebar: React.FC = () => {
    const { user, hasProAccess } = useUser();

    if (!user) return null;

    return (
        <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-dlp-bg-card rounded-lg p-6 shadow-dlp-sm border border-dlp-border text-center">
                <div className="relative inline-block">
                    <div className="h-20 w-20 rounded-full bg-dlp-bg-muted mx-auto overflow-hidden border-4 border-dlp-bg-card shadow-dlp-md">
                        {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                        ) : (
                            <div className="h-full w-full flex items-center justify-center text-dlp-text-muted">
                                <User className="h-8 w-8" />
                            </div>
                        )}
                    </div>
                    {hasProAccess && (
                        <div className="absolute bottom-0 right-0 bg-dlp-accent text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-dlp-sm border border-dlp-bg-card">
                            PRO
                        </div>
                    )}
                </div>

                <h3 className="mt-3 font-semibold text-dlp-text-primary">{user.name}</h3>
                <p className="text-xs text-dlp-text-muted">Joined {new Date().getFullYear()}</p>

                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-dlp-border pt-4">
                    <div className="text-center">
                        <div className="text-sm font-semibold text-dlp-text-primary">0</div>
                        <div className="text-[10px] text-dlp-text-muted uppercase tracking-wide">Posts</div>
                    </div>
                    <div className="text-center border-l border-dlp-border">
                        <div className="text-sm font-semibold text-dlp-text-primary">0</div>
                        <div className="text-[10px] text-dlp-text-muted uppercase tracking-wide">Likes</div>
                    </div>
                    <div className="text-center border-l border-dlp-border">
                        <div className="text-sm font-semibold text-dlp-text-primary">0</div>
                        <div className="text-[10px] text-dlp-text-muted uppercase tracking-wide">Clones</div>
                    </div>
                </div>
            </div>

            {/* Stats - Locked for Free */}
            <div className="bg-dlp-bg-card rounded-lg shadow-dlp-sm border border-dlp-border overflow-hidden">
                <div className="p-4 border-b border-dlp-border font-semibold text-sm flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-dlp-accent" />
                    Performance Stats
                </div>

                <LockFeature featureKey="community.profile_full" className="p-4">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-dlp-text-secondary">Weekly Rank</span>
                            <span className="font-medium text-dlp-text-primary">#42</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-dlp-text-secondary">Total Clones</span>
                            <span className="font-medium text-dlp-text-primary">128</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-dlp-text-secondary">Avg. Rating</span>
                            <span className="font-medium text-dlp-text-primary">4.8/5</span>
                        </div>
                    </div>
                </LockFeature>
            </div>

            {/* Badges - Locked for Free */}
            <div className="bg-dlp-bg-card rounded-lg shadow-dlp-sm border border-dlp-border overflow-hidden">
                <div className="p-4 border-b border-dlp-border font-semibold text-sm flex items-center gap-2">
                    <Award className="h-4 w-4 text-dlp-accent" />
                    Achievements
                </div>

                <LockFeature featureKey="community.profile_full" className="p-4">
                    <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square rounded-lg bg-dlp-bg-muted flex items-center justify-center text-dlp-text-muted">
                                <Award className="h-5 w-5" />
                            </div>
                        ))}
                    </div>
                </LockFeature>
            </div>
        </div>
    );
};
