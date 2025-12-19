import React, { useState } from 'react';
import { useCommunityComments } from '../hooks/useCommunityComments';
import { useUser } from '../../contexts/UserProvider';
import { LockFeature } from '../../components/auth/LockFeature';
import { Send, User } from 'lucide-react';
import { formatPostDate } from '../utils/formatPost';
import { useTranslation } from '@/i18n';

interface PostCommentsProps {
    postId: string;
    onCommentAdded?: () => void;
}

export const PostComments: React.FC<PostCommentsProps> = ({ postId, onCommentAdded }) => {
  const { t } = useTranslation();
    const { comments, loading, addComment } = useCommunityComments(postId);
    const { user } = useUser();
    const [newComment, setNewComment] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim() || !user) return;

        setSubmitting(true);
        try {
            await addComment(
                user.uid || user.stripeCustomerId || 'unknown',
                user.name,
                newComment,
                user.avatar
            );
            setNewComment('');
            if (onCommentAdded) onCommentAdded();
        } catch (err) {
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-50 p-4 border-t border-gray-100">
            {/* Comments List */}
            <div className="space-y-4 mb-4 max-h-60 overflow-y-auto">
                {loading ? (
                    <div className="text-center text-gray-400 text-sm">{t('community.loading_comments')}</div>
                ) : comments.length === 0 ? (
                    <div className="text-center text-gray-400 text-sm">{t('community.no_comments_yet_be_the_first')}</div>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="flex gap-3">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                                {comment.userPhotoURL ? (
                                    <img src={comment.userPhotoURL} alt={comment.username} className="h-full w-full object-cover" />
                                ) : (
                                    <User className="h-4 w-4 m-2 text-gray-400" />
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-semibold text-xs text-gray-900">{comment.username}</span>
                                        <span className="text-[10px] text-gray-400">{formatPostDate(comment.createdAt)}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{comment.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Add Comment Input - Locked */}
            <LockFeature featureKey="community.comment" mode="block" customMessage={t('community.unlock_full_community_3')}>
                <form onSubmit={handleSubmit} className="relative">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder={t('community.add_a_comment')}
                        className="w-full pl-4 pr-12 py-2.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-dlp-brand"
                    />
                    <button
                        type="submit"
                        disabled={!newComment.trim() || submitting}
                        className="absolute right-1.5 top-1.5 p-1.5 bg-dlp-brand-hover text-white rounded-full hover:bg-lime-700 disabled:opacity-50 disabled:hover:bg-dlp-brand hover:text-white-hover transition-colors"
                    >
                        <Send className="h-4 w-4" />
                    </button>
                </form>
            </LockFeature>
        </div>
    );
};



