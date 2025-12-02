import React from 'react';
import { PlusCircle, Camera } from 'lucide-react';
import { useUser } from '../../contexts/UserProvider';
import { useRouter } from '../../contexts/RouterContext';

export const CommunityCreatePostCTA: React.FC = () => {
    const { user } = useUser();
    const { navigate } = useRouter();

    const handleCreate = () => {
        // Navigate to create post page or open modal
        // For now, assume a route or just a placeholder
        // The prompt didn't ask for a CreatePostPage, but "CommunityCreatePostCTA" implies a button.
        // I'll assume it navigates to a create page or opens a modal.
        // Since "CommunityCreatePost.tsx" was mentioned in conversation history, maybe it exists?
        // But I am creating "Community Module 1.0" from scratch in src/community.
        // I'll just log for now or navigate to 'create'.
        // navigate('community/create'); // Route not defined yet
        console.log('Create post clicked');
    };

    return (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-6 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
                {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-400">
                        <Camera className="h-5 w-5" />
                    </div>
                )}
            </div>

            <button
                onClick={handleCreate}
                className="flex-1 text-left bg-gray-50 hover:bg-gray-100 transition-colors rounded-full px-4 py-2.5 text-gray-500 text-sm border border-gray-200"
            >
                Share your latest bake, {user?.name?.split(' ')[0] || 'Baker'}...
            </button>

            <button
                onClick={handleCreate}
                className="flex-shrink-0 p-2.5 bg-lime-600 hover:bg-lime-700 text-white rounded-full transition-colors shadow-lg shadow-lime-600/20"
            >
                <PlusCircle className="h-5 w-5" />
            </button>
        </div>
    );
};
