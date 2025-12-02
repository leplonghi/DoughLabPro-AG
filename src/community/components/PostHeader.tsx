import React from 'react';
import { MoreHorizontal, User } from 'lucide-react';
import { formatPostDate } from '../utils/formatPost';

interface PostHeaderProps {
    username: string;
    userPhotoURL?: string;
    createdAt: any;
    title?: string;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ username, userPhotoURL, createdAt, title }) => {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 overflow-hidden">
                    {userPhotoURL ? (
                        <img src={userPhotoURL} alt={username} className="h-full w-full object-cover" />
                    ) : (
                        <div className="h-full w-full flex items-center justify-center text-gray-400">
                            <User className="h-5 w-5" />
                        </div>
                    )}
                </div>
                <div>
                    <div className="font-semibold text-gray-900 text-sm">{username}</div>
                    <div className="text-xs text-gray-500">{formatPostDate(createdAt)}</div>
                </div>
            </div>

            <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-5 w-5" />
            </button>
        </div>
    );
};
