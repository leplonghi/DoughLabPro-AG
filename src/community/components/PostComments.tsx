import React, { useState } from 'react';
import { useCommunityComments } from '../hooks/useCommunityComments';
import { useUser } from '../../contexts/UserProvider';
import { LockFeature } from '../../components/auth/LockFeature';
import { Send, User } from 'lucide-react';
import { formatPostDate } from '../utils/formatPost';

interface PostCommentsProps {
    postId: string;
}

export const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
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
                user.stripeCustomerId || 'unknown',
                user.name,
                newComment,
                user.avatar
            );
            setNewComment('');
        } catch (err) {
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-t border-slate-100 dark:border-slate-700">
            {/* Comments List */}
            <div className="space-y-4 mb-4 max-h-60 overflow-y-auto">
                {loading ? (
                    <div className="text-center text-slate-400 text-sm">Loading comments...</div>
                ) : comments.length === 0 ? (
                    <div className="text-center text-slate-400 text-sm">No comments yet. Be the first!</div>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="flex gap-3">
                            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 overflow-hidden">
                                {comment.userPhotoURL ? (
                                    <img src={comment.userPhotoURL} alt={comment.username} className="h-full w-full object-cover" />
                                ) : (
                                    <User className="h-4 w-4 m-2 text-slate-400" />
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-semibold text-xs text-slate-900 dark:text-white">{comment.username}</span>
                                        <span className="text-[10px] text-slate-400">{formatPostDate(comment.createdAt)}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">{comment.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Add Comment Input - Locked */}
            <LockFeature featureKey="community.comment" mode="block" customMessage="Unlock full Community">
                <form onSubmit={handleSubmit} className="relative">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full pl-4 pr-12 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="submit"
                        disabled={!newComment.trim() || submitting}
                        className="absolute right-1.5 top-1.5 p-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors"
                    >
                        <Send className="h-4 w-4" />
                    </button>
                </form>
            </LockFeature>
        </div>
    );
};
