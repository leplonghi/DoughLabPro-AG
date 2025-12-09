
import React, { useState } from 'react';
import { useRouter } from '../../contexts/RouterContext';
import { useUser } from '../../contexts/UserProvider';
import { communityStore } from '../store/communityStore';
import { ArrowLeft, Loader2, Image as ImageIcon } from 'lucide-react';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';
import { OvenType } from '@/types';

export const CommunityCreatePostPage: React.FC = () => {
    const { navigate } = useRouter();
    const { user } = useUser();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [hydration, setHydration] = useState<number>(70);
    const [flour, setFlour] = useState('');
    const [ovenType, setOvenType] = useState<string>('ELECTRIC');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];

            // Basic validation
            if (selectedFile.size > 5 * 1024 * 1024) {
                setError('Image size should be less than 5MB');
                return;
            }

            if (!selectedFile.type.startsWith('image/')) {
                setError('Please select a valid image file');
                return;
            }

            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
            setError(null);
        }
    };

    const uploadImage = async (fileToUpload: File, userId: string): Promise<string> => {
        try {
            // Dynamically import storage to avoid breaking if storage is not set up
            const { storage } = await import('@/firebase/storage');
            const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');

            if (!storage) {
                console.warn('Firebase Storage not initialized, falling back to unsplash placeholder');
                return 'https://images.unsplash.com/photo-1542834371-41040eb34996?auto=format&fit=crop&q=80&w=1000';
            }

            const fileName = `${userId}_${Date.now()}_${fileToUpload.name}`;
            const storageRef = ref(storage, `community_uploads/${fileName}`);

            await uploadBytes(storageRef, fileToUpload);
            return await getDownloadURL(storageRef);
        } catch (err) {
            console.error('Upload failed', err);
            throw new Error('Failed to upload image');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        setLoading(true);
        setError(null);

        try {
            let photoUrl = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=1000'; // Default placeholder

            if (file) {
                photoUrl = await uploadImage(file, user.uid || user.stripeCustomerId || 'unknown');
            }

            const newPost = {
                uid: user.uid || user.stripeCustomerId || 'unknown',
                username: user.name || 'Baker',
                userPhotoURL: user.avatar,
                title,
                description,
                hydration,
                flour: flour || 'Mix',
                ovenType: ovenType as any,
                photos: [photoUrl],
                likes: 0,
                comments: 0,
                clones: 0,
                tags: ['sourdough', 'homemade'],
                visibility: 'public' as const,
                createdAt: new Date() as any // serverTimestamp logic handled in store if needed, or pass Date
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
                                    Flour Blend
                                </label>
                                <input
                                    type="text"
                                    value={flour}
                                    onChange={(e) => setFlour(e.target.value)}
                                    placeholder="e.g. 90% Bread, 10% Rye"
                                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Oven Type
                                </label>
                                <select
                                    value={ovenType}
                                    onChange={(e) => setOvenType(e.target.value)}
                                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition-all appearance-none"
                                >
                                    {Object.values(OvenType).map((type) => (
                                        <option key={type} value={type}>
                                            {type.replace('_', ' ')}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Photos
                                </label>
                                <div className="w-full">
                                    <label
                                        htmlFor="file-upload"
                                        className={`w-full h-32 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors ${previewUrl ? 'border-lime-500 bg-lime-50' : 'border-gray-300 hover:border-lime-500 hover:bg-gray-50'
                                            }`}
                                    >
                                        {previewUrl ? (
                                            <div className="relative w-full h-full p-2">
                                                <img
                                                    src={previewUrl}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 transition-all">
                                                    <span className="text-white opacity-0 hover:opacity-100 font-medium drop-shadow-md">Change Photo</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <ImageIcon className="h-8 w-8 text-gray-400 mb-2" />
                                                <span className="text-sm text-gray-500">Upload a photo</span>
                                            </>
                                        )}
                                        <input
                                            id="file-upload"
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                        />
                                    </label>
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
