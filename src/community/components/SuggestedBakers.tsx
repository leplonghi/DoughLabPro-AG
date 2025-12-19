import React, { useState } from 'react';
import { UserPlus, Check } from 'lucide-react';
import { useUser } from '../../contexts/UserProvider';
import { communityStore } from '../store/communityStore';

interface SuggestedUser {
    id: string;
    name: string;
    avatar?: string;
    bio: string;
}

export const SuggestedBakers: React.FC = () => {
    const { user } = useUser();
    const [followed, setFollowed] = useState<string[]>([]);

    // Mock data for now - could be fetched from API later
    const suggestions: SuggestedUser[] = [
        { id: '1', name: 'PizzaMaestro', bio: 'Neapolitan Purist 🇮🇹' },
        { id: '2', name: 'SourdoughSarah', bio: 'Wild yeast whisperer' },
        { id: '3', name: 'DoughGenius', bio: 'Food Scientist & Baker' },
    ];

    const handleFollow = async (targetId: string) => {
        if (!user) return;
        try {
            await communityStore.toggleFollow(user.uid || 'unknown', targetId);
            setFollowed(prev => [...prev, targetId]);
        } catch (error) {
            console.error('Failed to follow', error);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 font-semibold text-sm flex items-center justify-between text-gray-800">
                <span>Who to follow</span>
                <span className="text-xs text-lime-600 cursor-pointer hover:underline">See all</span>
            </div>

            <div className="divide-y divide-gray-50">
                {suggestions.map((baker) => (
                    <div key={baker.id} className="p-4 flex items-center gap-3 hover:bg-gray-50/50 transition-colors">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm shrink-0">
                            {baker.avatar ? (
                                <img src={baker.avatar} alt={baker.name} className="h-full w-full rounded-full object-cover" />
                            ) : (
                                baker.name.charAt(0)
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
