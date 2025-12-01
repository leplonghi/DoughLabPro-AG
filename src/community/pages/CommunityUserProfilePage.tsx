import React, { useEffect, useState } from 'react';
import { useRouter } from '../../contexts/RouterContext';
import { communityStore } from '../store/communityStore';
import { CommunityPost } from '../types';
import { CommunityPostCard } from '../components/CommunityPostCard';
import { LockFeature } from '../../components/auth/LockFeature';
import { User, MapPin, Calendar, Award } from 'lucide-react';
import { useCommunityFollow } from '../hooks/useCommunityFollow';
import { useUser } from '../../contexts/UserProvider';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';

interface CommunityUserProfilePageProps {
    uid: string;
}

export const CommunityUserProfilePage: React.FC<CommunityUserProfilePageProps> = ({ uid }) => {
    const { navigate } = useRouter();
    const { user: currentUser } = useUser();
    const [posts, setPosts] = useState<CommunityPost[]>([]);
    const [loading, setLoading] = useState(true);

    // Follow logic
    const { isFollowing, toggleFollow, loading: followLoading } = useCommunityFollow(currentUser?.stripeCustomerId, uid);

    useEffect(() => {
        if (!uid) return;
        const loadUserPosts = async () => {
            try {
                setLoading(true);
                const userPosts = await communityStore.getUserPosts(uid);
                setPosts(userPosts);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadUserPosts();
    }, [uid]);

    // Mock user profile data since we don't have a separate user profile fetch yet
    const profileUser = posts.length > 0 ? {
        username: posts[0].username,
        photoURL: posts[0].userPhotoURL
    } : { username: 'Baker', photoURL: undefined };

    return (
        <LibraryPageLayout>
            <div className="max-w-5xl mx-auto">
                {/* Profile Header */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden mb-8">
                    <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                    <div className="px-8 pb-8">
                        <div className="relative flex justify-between items-end -mt-12 mb-6">
                            <div className="h-24 w-24 rounded-full bg-white dark:bg-slate-800 p-1">
                                <div className="h-full w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                    {profileUser.photoURL ? (
                                        <img src={profileUser.photoURL} alt={profileUser.username} className="h-full w-full object-cover" />
                                    ) : (
                                        <div className="h-full w-full flex items-center justify-center text-slate-400">
                                            <User className="h-10 w-10" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <LockFeature featureKey="community.follow" mode="tooltip" customMessage="Unlock full Community">
                                    <button
                                        onClick={toggleFollow}
                                        disabled={followLoading}
                                        className={`px-6 py-2 rounded-full font-medium transition-colors ${isFollowing
                                            ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600'
                                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                            }`}
                                    >
                                        {isFollowing ? 'Following' : 'Follow'}
                                    </button>
                                </LockFeature>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{profileUser.username}</h1>
                            <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
                                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Global Baker</span>
                                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Joined 2025</span>
                            </div>
                        </div>

                        {/* Locked Stats Section */}
                        <LockFeature featureKey="community.profile_full" mode="blur" className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700" customMessage="Unlock full Community">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{posts.length}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wide">Bakes</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <div className="text-2xl font-bold text-slate-900 dark:text-white">0</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wide">Followers</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <div className="text-2xl font-bold text-slate-900 dark:text-white">0</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wide">Clones</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                                    <Award className="h-8 w-8 text-amber-500" />
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white">Top 10%</div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wide">Rank</div>
                                    </div>
                                </div>
                            </div>
                        </LockFeature>
                    </div>
                </div>

                {/* User Posts Grid */}
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Recent Bakes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? (
                        <div className="col-span-full text-center py-12 text-slate-400">Loading bakes...</div>
                    ) : posts.length === 0 ? (
                        <div className="col-span-full text-center py-12 text-slate-400">No bakes shared yet.</div>
                    ) : (
                        posts.map(post => (
                            <CommunityPostCard key={post.id} post={post} />
                        ))
                    )}
                </div>
            </div>
        </LibraryPageLayout>
    );
};
