import React, { useState } from 'react';
import { useRouter } from '../../contexts/RouterContext';
import { useUser } from '../../contexts/UserProvider';
import { communityStore } from '../store/communityStore';
import { ArrowLeft, Loader2, Image as ImageIcon } from 'lucide-react';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';

export const CommunityCreatePostPage: React.FC = () => {
    const { navigate } = useRouter();
    const { user } = useUser();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [hydration, setHydration] = useState<number>(70);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        setLoading(true);
        setError(null);

        try {
            // Create a basic post structure
            // In a real app, we would handle image uploads here
            const newPost = {
                uid: user.stripeCustomerId || 'unknown',
                username: user.name || 'Baker',
                userPhotoURL: user.avatar,
                title,
                description,
                hydration,
                photos: ['https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=1000'], // Placeholder image
                likes: 0,
                comments: 0,
                clones: 0,
                tags: ['sourdough', 'homemade'],
                visibility: 'public' as const,
                createdAt: new Date() as any // Firestore timestamp handled in store usually, but for type compatibility
            };

            await communityStore.createPost(newPost);
            navigate('community');
        } catch (err) {
            console.error(err);
            setError('Failed to create post. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <LibraryPageLayout>
            <div className="max-w-2xl mx-auto">
                <button
                    onClick={() => navigate('community')}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span>Back to Community</span>
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Bake</h1>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                placeholder="e.g. Sunday Morning Sourdough"
                                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                rows={4}
                                placeholder="Share your process, flour blend, or tasting notes..."
                                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition-all resize-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Hydration (%)
                                </label>
                                <input
                                    type="number"
                                    value={hydration}
                                    onChange={(e) => setHydration(Number(e.target.value))}
                                    min={50}
                                    max={120}
                                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Photos
                                </label>
                                <div className="w-full h-[42px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 cursor-not-allowed bg-gray-50">
                                    <ImageIcon className="h-5 w-5 mr-2" />
                                    <span className="text-sm">Upload disabled</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => navigate('community')}
                                className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-6 py-2 bg-lime-600 hover:bg-lime-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
                            >
                                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                                Post Bake
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </LibraryPageLayout>
    );
};
