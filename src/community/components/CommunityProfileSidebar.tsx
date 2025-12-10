import React, { useEffect, useState } from 'react';
import { useUser } from '../../contexts/UserProvider';
import { LockFeature } from '../../components/auth/LockFeature';
import { User, Award, TrendingUp, PlusCircle } from 'lucide-react';
import { useRouter } from '../../contexts/RouterContext';
import { communityStore } from '../store/communityStore';
import { CommunityPost } from '../types';

export const CommunityProfileSidebar: React.FC = () => {
    const { user, hasProAccess } = useUser();
    const { navigate } = useRouter();
    const [stats, setStats] = useState({ posts: 0, likes: 0, clones: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            if (!user?.uid && !user?.stripeCustomerId) return;
            const uid = user.uid || user.stripeCustomerId || 'unknown';
            try {
                // Fetch user posts to aggregate stats
                // Note: accurate global stats typically require a backend counter
                const posts = await communityStore.getUserPosts(uid);
                const totalLikes = posts.reduce((acc, post) => acc + post.likes, 0);
                const totalClones = posts.reduce((acc, post) => acc + post.clones, 0);

                setStats({
                    posts: posts.length,
                    likes: totalLikes,
                    clones: totalClones
                });
            } catch (err) {
                console.error("Failed to fetch user stats", err);
            }
        };

        fetchStats();
    }, [user]);

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
                {user.skillLevel && (
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-medium uppercase tracking-wide">
                        {user.skillLevel}
                    </span>
                )}
                {user.bio && (
                    <p className="mt-2 text-sm text-dlp-text-muted line-clamp-2">{user.bio}</p>
                )}
                <p className="text-xs text-dlp-text-muted mt-1">Joined {new Date().getFullYear()}</p>

                <button
                    onClick={() => navigate('community/create')}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-dlp-accent hover:bg-lime-700 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    <PlusCircle className="h-4 w-4" />
                    New Post
                </button>

                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-dlp-border pt-4">
                    <div className="text-center">
                        <div className="text-sm font-semibold text-dlp-text-primary">{stats.posts}</div>
                        <div className="text-[10px] text-dlp-text-muted uppercase tracking-wide">Posts</div>
                    </div>
                    <div className="text-center border-l border-dlp-border">
                        <div className="text-sm font-semibold text-dlp-text-primary">{stats.likes}</div>
                        <div className="text-[10px] text-dlp-text-muted uppercase tracking-wide">Likes</div>
                    </div>
                    <div className="text-center border-l border-dlp-border">
                        <div className="text-sm font-semibold text-dlp-text-primary">{stats.clones}</div>
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
