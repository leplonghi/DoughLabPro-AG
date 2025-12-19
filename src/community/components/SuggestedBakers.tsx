import React, { useState, useEffect } from 'react';
import { UserPlus, Check, Loader2 } from 'lucide-react';
import { useUser } from '../../contexts/UserProvider';
import { communityStore } from '../store/communityStore';
import { useTranslation } from '@/i18n';

interface SuggestedUser {
    id: string; // This is the uid
    name: string;
    avatar?: string;
    bio: string;
}

export const SuggestedBakers: React.FC = () => {
    const { t } = useTranslation();
    const { user } = useUser();
    const [followed, setFollowed] = useState<string[]>([]);
    const [suggestions, setSuggestions] = useState<SuggestedUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSuggestions = async () => {
            setLoading(true);
            try {
                // Fetch recent posts to find active users
                const { posts } = await communityStore.getFeed(undefined, 20, 'latest');

                const uniqueAuthors = new Map<string, SuggestedUser>();

                posts.forEach(post => {
                    // Skip if it's the current user
                    if (user && post.uid === user.uid) return;
                    // Skip if we already have this author
                    if (uniqueAuthors.has(post.uid)) return;

                    if (post.uid && post.username) {
                        uniqueAuthors.set(post.uid, {
                            id: post.uid,
                            name: post.username,
                            avatar: post.userPhotoURL,
                            bio: t('community.active_baker')
                        });
                    }
                });

                setSuggestions(Array.from(uniqueAuthors.values()).slice(0, 5));
            } catch (error) {
                console.error("Failed to fetch suggestions", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSuggestions();
    }, [user, t]);

    const handleFollow = async (targetId: string) => {
        if (!user) return;
        try {
            await communityStore.toggleFollow(user.uid || 'unknown', targetId);
            setFollowed(prev => [...prev, targetId]);
        } catch (error) {
            console.error('Failed to follow', error);
        }
    };

    if (loading) {
        return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 flex justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-gray-300" />
            </div>
        );
    }

    if (suggestions.length === 0) {
        return null; // Don't show the widget if no one to suggest
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 font-semibold text-sm flex items-center justify-between text-gray-800">
                <span>{t('community.who_to_follow')}</span>
            </div>

            <div className="divide-y divide-gray-50">
                {suggestions.map((baker) => (
                    <div key={baker.id} className="p-4 flex items-center gap-3 hover:bg-gray-50/50 transition-colors">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm shrink-0 overflow-hidden">
                            {baker.avatar ? (
                                <img src={baker.avatar} alt={baker.name} className="h-full w-full object-cover" />
                            ) : (
                                baker.name.charAt(0).toUpperCase()
                            )}
                        </div>

                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-gray-900 truncate">{baker.name}</h4>
                            <p className="text-xs text-gray-500 truncate">{baker.bio}</p>
                        </div>

                        <button
                            onClick={() => handleFollow(baker.id)}
                            className={`p-2 rounded-full transition-all ${followed.includes(baker.id)
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-gray-100 text-gray-600 hover:bg-lime-100 hover:text-lime-700'
                                }`}
                        >
                            {followed.includes(baker.id) ? (
                                <Check className="h-4 w-4" />
                            ) : (
                                <UserPlus className="h-4 w-4" />
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
