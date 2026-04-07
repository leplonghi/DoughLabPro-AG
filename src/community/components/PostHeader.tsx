import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, User, Trash2, Edit, AlertCircle } from 'lucide-react';
import { formatPostDate } from '../utils/formatPost';
import { useRouter } from '../../contexts/RouterContext';
import { useTranslation } from '@/i18n';
import { useUser } from '../../contexts/UserProvider';
import { communityStore } from '../store/communityStore';

interface PostHeaderProps {
    uid?: string;
    username: string;
    userPhotoURL?: string;
    createdAt: any;
    title?: string;
    postId?: string;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ uid, username, userPhotoURL, createdAt, title, postId }) => {
    const { t } = useTranslation();
    const { navigate } = useRouter();
    const { user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const isOwner = user && uid && (user.uid === uid || user.stripeCustomerId === uid);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleUserClick = (e: React.MouseEvent) => {
        if (!uid) return;
        e.stopPropagation();
        navigate('community/user', uid);
    };

    const handleDelete = async () => {
        if (!postId || !confirm(t('community.confirm_delete_post'))) return;
        setIsDeleting(true);
        try {
            await communityStore.deletePost(postId);
            // In a real app, we'd trigger a reload or remove from local state.
            // For now, reload the page or navigate back
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert(t('community.failed_to_delete_post'));
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="flex items-center justify-between p-4 relative">
            <div className="flex items-center gap-3">
                <div
                    className={`flex items-center gap-3 ${uid ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
                    onClick={handleUserClick}
                >
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
                        <div className="font-semibold text-gray-900 text-sm hover:underline hover:text-lime-700 transition-colors">
                            {username}
                        </div>
                        <div className="text-xs text-gray-500">{formatPostDate(createdAt)}</div>
                    </div>
                </div>

                {uid && !isOwner && (
                    <button className="text-xs font-bold text-lime-600 hover:text-lime-700 px-3 py-1 bg-lime-50 hover:bg-lime-100 rounded-full transition-colors ml-2">
                        + Follow
                    </button>
                )}
            </div>

            <div className="relative" ref={menuRef}>
                <button
                    onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
                    className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-50 transition-colors"
                >
                    <MoreHorizontal className="h-5 w-5" />
                </button>

                {isMenuOpen && (
                    <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        {isOwner ? (
                            <>
                                <button
                                    onClick={() => navigate('community/edit', postId)}
                                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                                >
                                    <Edit className="h-4 w-4" />
                                    {t('community.edit_post')}
                                </button>
                                <button
                                    onClick={handleDelete}
                                    disabled={isDeleting}
                                    className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                >
                                    {isDeleting ? <div className="h-4 w-4 rounded-full border-2 border-red-600 border-t-transparent animate-spin" /> : <Trash2 className="h-4 w-4" />}
                                    {t('community.delete_post')}
                                </button>
                            </>
                        ) : (
                            <button className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                                <AlertCircle className="h-4 w-4" />
                                {t('community.report_post')}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};


