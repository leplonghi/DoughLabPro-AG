
import React, { useState } from 'react';
import { useRouter } from '../../contexts/RouterContext';
import { useUser } from '../../contexts/UserProvider';
import { communityStore } from '../store/communityStore';
import { ArrowLeft, Loader2, Image as ImageIcon, Sparkles, ChefHat, Timer, Thermometer, Droplets, Scale, UploadCloud } from 'lucide-react';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';
import { OvenType, RecipeStyle, FermentationTechnique } from '@/types';
import SliderInput from '../../components/ui/SliderInput';

export const CommunityCreatePostPage: React.FC = () => {
    const { navigate } = useRouter();
    const { user } = useUser();

    // -- State --
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Technical Stats
    const [hydration, setHydration] = useState<number>(70);
    const [salt, setSalt] = useState<number>(2.0);
    const [fermentationTime, setFermentationTime] = useState<number>(24);
    const [temp, setTemp] = useState<string>(''); // e.g. "25C"

    // Enums
    const [selectedStyle, setSelectedStyle] = useState<RecipeStyle>(RecipeStyle.NEAPOLITAN);
    const [method, setMethod] = useState<FermentationTechnique>(FermentationTechnique.DIRECT);
    const [ovenType, setOvenType] = useState<OvenType>(OvenType.HOME_OVEN); // Default to home oven as it's most common
    const [flour, setFlour] = useState('');

    // UI State
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    // -- Handlers --

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            if (selectedFile.size > 5 * 1024 * 1024) return setError('Image size should be less than 5MB');
            if (!selectedFile.type.startsWith('image/')) return setError('Please select a valid image file');
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
            setError(null);
        }
    };

    const uploadImage = async (fileToUpload: File, userId: string): Promise<string> => {
        try {
            const { storage } = await import('@/firebase/storage');
            const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
            if (!storage) return 'https://images.unsplash.com/photo-1542834371-41040eb34996?auto=format&fit=crop&q=80&w=1000';
            const fileName = `${userId}_${Date.now()}_${fileToUpload.name}`;
            const storageRef = ref(storage, `community_uploads/${fileName}`);
            await uploadBytes(storageRef, fileToUpload);
            return await getDownloadURL(storageRef);
        } catch (err) {
            console.error('Upload failed', err);
            throw new Error('Failed to upload image.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user?.uid) return setError('You must be logged in to post.');

        setLoading(true);
        setError(null);

        try {
            let photoUrl = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=1000';
            if (file) photoUrl = await uploadImage(file, user.uid);

            const newPost = {
                uid: user.uid,
                username: user.name || 'Baker',
                userPhotoURL: user.avatar,
                title,
                description,
                hydration,
                saltPct: salt,
                fermentationTime, // Need to add to type definition if not exists, but store handles flexible data
                temp,
                flour: flour || 'Mix',
                ovenType,
                styleKey: selectedStyle,
                method,
                photos: [photoUrl],
                likes: 0,
                comments: 0,
                clones: 0,
                tags: [selectedStyle.toLowerCase(), method.toLowerCase(), 'homemade'],
                visibility: 'public' as const,
                createdAt: new Date() as any
            };

            await communityStore.createPost(newPost);
            navigate('community');
        } catch (err: any) {
            console.error(err);
            setError(err.code === 'permission-denied' ? 'Permission denied.' : 'Failed to share your bake.');
        } finally {
            setLoading(false);
        }
    };

    // -- Sub-Components --

    const SelectionCard = ({
        active,
        onClick,
        label,
        subLabel
    }: {
        active: boolean;
        onClick: () => void;
        label: string;
        subLabel?: string
    }) => (
        <button
            type="button"
            onClick={onClick}
            className={`relative p-4 rounded-xl text-left transition-all duration-200 border-2 ${active
                    ? 'border-lime-500 bg-lime-50/[0.3] shadow-sm'
                    : 'border-transparent bg-gray-50 hover:bg-gray-100 hover:border-gray-200'
                }`}
        >
            <div className={`font-semibold ${active ? 'text-lime-700' : 'text-gray-900'}`}>
                {label}
            </div>
            {subLabel && (
                <div className="text-xs text-gray-500 mt-1">{subLabel}</div>
            )}
            {active && (
                <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-lime-500 shadow-lime-glow" />
            )}
        </button>
    );

    return (
        <LibraryPageLayout>
            <div className="max-w-4xl mx-auto pb-20">
                {/* Nav */}
                <button
                    onClick={() => navigate('community')}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors group"
                >
                    <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
                    <span>Cancel & Return</span>
                </button>

                {/* Hero Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">Showcase Your Bake</h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Share your formula, process, and results with the DoughLab community.
                        Detailed recipes help others learn and replicate your success.
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 mx-auto max-w-2xl rounded-lg text-sm border border-red-100 flex items-center justify-center gap-2 mb-8 animate-shake">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* 1. Style & Core Identity */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                            <ChefHat className="h-5 w-5 text-lime-600" />
                            <h2 className="font-semibold text-gray-900">What did you bake?</h2>
                        </div>
                        <div className="p-8">
                            <label className="block text-sm font-medium text-gray-700 mb-4">Pizza Style</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                                {Object.values(RecipeStyle).map(s => (
                                    <SelectionCard
                                        key={s}
                                        label={s.replace(/_/g, ' ')}
                                        active={selectedStyle === s}
                                        onClick={() => setSelectedStyle(s)}
                                    />
                                ))}
                            </div>

                            <label className="block text-sm font-medium text-gray-700 mb-4">Method</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {Object.values(FermentationTechnique).map(m => (
                                    <SelectionCard
                                        key={m}
                                        label={m.replace(/_/g, ' ')}
                                        active={method === m}
                                        onClick={() => setMethod(m)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 2. The Formula */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                            <Droplets className="h-5 w-5 text-blue-500" />
                            <h2 className="font-semibold text-gray-900">The Formula</h2>
                        </div>
                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <SliderInput
                                label="Hydration"
                                name="hydration"
                                value={hydration}
                                min={50}
                                max={100}
                                step={1}
                                unit="%"
                                onChange={(e) => setHydration(Number(e.target.value))}
                                recommendedMin={60}
                                recommendedMax={85}
                                tooltip="Total water weight divided by total flour weight."
                            />

                            <SliderInput
                                label="Salt"
                                name="salt"
                                value={salt}
                                min={0}
                                max={5}
                                step={0.1}
                                unit="%"
                                onChange={(e) => setSalt(Number(e.target.value))}
                                recommendedMin={1.8}
                                recommendedMax={3.2}
                                tooltip="Salt percentage relative to flour."
                            />

                            <div className="col-span-full">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Flour Selection</label>
                                <input
                                    type="text"
                                    value={flour}
                                    onChange={(e) => setFlour(e.target.value)}
                                    placeholder="e.g. 50% Bread Flour, 50% ''00''"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 3. Process */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                            <Timer className="h-5 w-5 text-orange-500" />
                            <h2 className="font-semibold text-gray-900">Process & Oven</h2>
                        </div>
                        <div className="p-8 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <SliderInput
                                    label="Total Fermentation"
                                    name="fermentationTime"
                                    value={fermentationTime}
                                    min={1}
                                    max={72}
                                    step={1}
                                    unit="h"
                                    onChange={(e) => setFermentationTime(Number(e.target.value))}
                                    tooltip="Combined time for bulk and proof."
                                />

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-[6px]">Temperature (Optional)</label>
                                    <div className="relative">
                                        <Thermometer className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            value={temp}
                                            onChange={(e) => setTemp(e.target.value)}
                                            placeholder="e.g. 24°C / 75°F"
                                            className="w-full pl-10 pr-4 py-[10px] bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">Oven Used</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {Object.values(OvenType).map(o => (
                                        <SelectionCard
                                            key={o}
                                            label={o.replace(/_/g, ' ')}
                                            active={ovenType === o}
                                            onClick={() => setOvenType(o)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Story & Visuals */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-purple-600" />
                            <h2 className="font-semibold text-gray-900">The Results</h2>
                        </div>
                        <div className="p-8 space-y-8">

                            {/* Photo Upload - Bigger & Better */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">Hero Photo</label>
                                <div className="w-full">
                                    <label
                                        htmlFor="file-upload"
                                        className={`group relative w-full h-80 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden ${previewUrl
                                                ? 'border-lime-500 bg-gray-900'
                                                : 'border-gray-300 bg-gray-50 hover:border-lime-500 hover:bg-lime-50/10'
                                            }`}
                                    >
                                        {previewUrl ? (
                                            <>
                                                <img
                                                    src={previewUrl}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-75"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <div className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                                        <UploadCloud className="h-4 w-4" /> Change Photo
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="text-center p-6 transform transition-transform group-hover:scale-105">
                                                <div className="bg-white h-20 w-20 rounded-full shadow-sm flex items-center justify-center mx-auto mb-6">
                                                    <ImageIcon className="h-10 w-10 text-gray-400 group-hover:text-lime-600 transition-colors" />
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Drop your best shot here</h3>
                                                <p className="text-sm text-gray-500">Supports JPG, PNG (Max 5MB)</p>
                                            </div>
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

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                        placeholder="e.g. My Best Neapolitan Yet"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition-all font-medium text-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">My Notes / Description</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                        rows={5}
                                        placeholder="Share the details that matter: fermentation signs, oven management, flavor profile..."
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition-all resize-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end pt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full md:w-auto px-10 py-4 bg-lime-600 hover:bg-lime-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-lime-600/30 transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:hover:transform-none flex items-center justify-center gap-3"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="h-6 w-6 animate-spin" />
                                    <span>Publishing...</span>
                                </>
                            ) : (
                                <>
                                    <span>Share with Community</span>
                                    <ArrowLeft className="h-6 w-6 rotate-180" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </LibraryPageLayout>
    );
};
