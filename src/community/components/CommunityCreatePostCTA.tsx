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
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 mb-6 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                    <div className="h-full w-full flex items-center justify-center text-slate-400">
                        <Camera className="h-5 w-5" />
                    </div>
                )}
            </div>

            <button
                onClick={handleCreate}
                className="flex-1 text-left bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-full px-4 py-2.5 text-slate-500 dark:text-slate-400 text-sm border border-slate-200 dark:border-slate-700"
            >
                Share your latest bake, {user?.name?.split(' ')[0] || 'Baker'}...
            </button>

            <button
                onClick={handleCreate}
                className="flex-shrink-0 p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors shadow-lg shadow-indigo-500/30"
            >
                <PlusCircle className="h-5 w-5" />
            </button>
        </div>
    );
};
