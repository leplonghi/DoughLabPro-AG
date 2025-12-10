
import React, { useEffect, useState } from 'react';
import { useRouter } from '../../contexts/RouterContext';
import { communityStore } from '../store/communityStore';
import { CommunityPost } from '../types';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';
import { ArrowLeft, Loader2, User as UserIcon, Grid, LayoutList, Bookmark, FileText } from 'lucide-react';
import { CommunityPostCard } from '../components/CommunityPostCard';
import { useUser } from '../../contexts/UserProvider';

interface CommunityUserProfilePageProps {
    uid: string;
}

export const CommunityUserProfilePage: React.FC<CommunityUserProfilePageProps> = ({ uid }) => {
    const { navigate } = useRouter();
    const { user: currentUser, favorites } = useUser();

    const [posts, setPosts] = useState<CommunityPost[]>([]);
    const [savedPosts, setSavedPosts] = useState<CommunityPost[]>([]);
    const [activeTab, setActiveTab] = useState<'posts' | 'saved'>('posts');
    const [loading, setLoading] = useState(true);
    const [savedLoading, setSavedLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isOwnProfile = currentUser?.uid === uid || currentUser?.stripeCustomerId === uid;

    // Derived profile info
    const userProfile = isOwnProfile ? {
        name: currentUser?.name,
        photoURL: currentUser?.avatar
    } : (posts.length > 0 ? {
        name: posts[0].username,
        photoURL: posts[0].userPhotoURL
    } : null);

    useEffect(() => {
        const fetchPosts = async () => {
            if (!uid) return;
            setLoading(true);
            try {
                const fetchedPosts = await communityStore.getUserPosts(uid);
                setPosts(fetchedPosts);
            } catch (err) {
                console.error(err);
                setError('Failed to load user posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [uid]);

    useEffect(() => {
        const fetchSaved = async () => {
            if (!isOwnProfile || activeTab !== 'saved') return;

            setSavedLoading(true);
            try {
                const savedIds = favorites
                    .filter(f => f.type === 'community_post' && f.itemId)
                    .map(f => f.itemId!);

                if (savedIds.length === 0) {
                    setSavedPosts([]);
                    return;
                }

                // Parallel fetch (simple solution)
                const promises = savedIds.map(id => communityStore.getPost(id).catch(() => null));
                const results = await Promise.all(promises);

                // Filter out nulls (deleted posts)
                setSavedPosts(results.filter((p): p is CommunityPost => p !== null));
            } catch (err) {
                console.error("Failed to fetch saved posts", err);
            } finally {
                setSavedLoading(false);
            }
        };

        fetchSaved();
    }, [isOwnProfile, activeTab, favorites]);

    if (loading) {
        return (
            <LibraryPageLayout>
                <div className="flex items-center justify-center min-h-[50vh]">
                    <Loader2 className="h-8 w-8 animate-spin text-lime-600" />
                </div>
            </LibraryPageLayout>
        );
    }

    if (error) {
        return (
            <LibraryPageLayout>
                <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
                    <p className="text-gray-500 mb-4">{error}</p>
                    <button
                        onClick={() => navigate('community')}
                        className="text-lime-600 font-medium hover:underline"
                    >
                        Return to Community
                    </button>
                </div>
            </LibraryPageLayout>
        );
    }

    return (
        <LibraryPageLayout>
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate('community')}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span>Back to Community</span>
                </button>

                {/* Profile Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8 p-8 flex flex-col items-center text-center">
                    <div className="h-24 w-24 rounded-full bg-gray-100 overflow-hidden mb-4 ring-4 ring-lime-50">
                        {userProfile?.photoURL ? (
                            <img
                                src={userProfile.photoURL}
                                alt={userProfile.name}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="h-full w-full flex items-center justify-center bg-gray-200">
                                <UserIcon className="h-10 w-10 text-gray-400" />
                            </div>
                        )}
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 mb-1">
                        {userProfile?.name || 'Unknown Baker'}
                    </h1>

                    {isOwnProfile && currentUser && (
                        <div className="flex flex-col items-center mt-2 max-w-md mx-auto space-y-2">
                            {currentUser.skillLevel && (
                                <span className="px-3 py-1 bg-lime-100 text-lime-800 text-xs font-bold uppercase rounded-full tracking-wide">
                                    {currentUser.skillLevel}
                                </span>
                            )}
                            {currentUser.location && (
                                <p className="text-sm text-gray-500 font-medium">📍 {currentUser.location}</p>
                            )}
                            {currentUser.bio && (
                                <p className="text-gray-600 text-sm leading-relaxed">{currentUser.bio}</p>
                            )}
                            <div className="flex gap-4 mt-2">
                                {currentUser.website && (
                                    <a href={currentUser.website} target="_blank" rel="noreferrer" className="text-lime-600 hover:text-lime-700 text-sm font-medium">
                                        Website
                                    </a>
                                )}
                                {currentUser.instagramHandle && (
                                    <a href={`https://instagram.com/${currentUser.instagramHandle.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                                        Instagram
                                    </a>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="text-gray-500 text-sm mt-4 mb-2">
                        {posts.length} {posts.length === 1 ? 'Bake' : 'Bakes'} Shared
                    </div>
                </div>

                {/* Content Tabs (Only for own profile) */}
                {isOwnProfile && (
                    <div className="flex items-center gap-6 border-b border-gray-200 mb-6 px-4">
                        <button
                            onClick={() => setActiveTab('posts')}
                            className={`pb-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'posts'
                                ? 'border-lime-600 text-lime-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <FileText className="h-4 w-4" />
                            My Bakes
                        </button>
                        <button
                            onClick={() => setActiveTab('saved')}
                            className={`pb-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'saved'
                                ? 'border-lime-600 text-lime-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <Bookmark className="h-4 w-4" />
                            Saved
                        </button>
                    </div>
                )}

                {/* Posts Grid */}
                <div className="px-4 pb-12">
                    {activeTab === 'posts' ? (
                        <>
                            {!isOwnProfile && <h2 className="text-lg font-semibold text-gray-900 mb-4">Bakes</h2>}

                            {posts.length === 0 ? (
                                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                    <p className="text-gray-500">No bakes shared yet.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {posts.map(post => (
                                        <CommunityPostCard key={post.id} post={post} />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        /* Saved Tab Content */
                        <>
                            {savedLoading ? (
                                <div className="flex justify-center py-12">
                                    <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
                                </div>
                            ) : savedPosts.length === 0 ? (
                                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                    <p className="text-gray-500">You haven't saved any posts yet.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {savedPosts.map(post => (
                                        <CommunityPostCard key={post.id} post={post} />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </LibraryPageLayout>
    );
};
