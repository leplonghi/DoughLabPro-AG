
import React, { useEffect, useState } from 'react';
import { useRouter } from '../../contexts/RouterContext';
import { communityStore } from '../store/communityStore';
import { CommunityPost } from '../types';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { PostHeader } from '../components/PostHeader';
import { PostPhotos } from '../components/PostPhotos';
import { PostTechnicalPanel } from '../components/PostTechnicalPanel';
import { PostMethod } from '../components/PostMethod';
import { PostActions } from '../components/PostActions';
import { PostComments } from '../components/PostComments';
import { useTranslation } from '@/i18n';

interface CommunityPostPageProps {
    postId: string;
}

export const CommunityPostPage: React.FC<CommunityPostPageProps> = ({ postId }) => {
  const { t } = useTranslation();
    const { navigate } = useRouter();
    const [post, setPost] = useState<CommunityPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Track local comments count for optimistic updates from the child component
    // Initialized when post loads
    const [commentCount, setCommentCount] = useState(0);

    useEffect(() => {
        const fetchPost = async () => {
            if (!postId) return;
            setLoading(true);
            try {
                const fetchedPost = await communityStore.getPost(postId);
                if (fetchedPost) {
                    setPost(fetchedPost);
                    setCommentCount(fetchedPost.comments);
                } else {
                    setError('Post not found');
                }
            } catch (err) {
                console.error(err);
                setError('Failed to load post');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    const handleCommentAdded = () => {
        setCommentCount((prev) => prev + 1);
    };

    if (loading) {
        return (
            <LibraryPageLayout>
                <div className="flex items-center justify-center min-h-[50vh]">
                    <Loader2 className="h-8 w-8 animate-spin text-lime-600" />
                </div>
            </LibraryPageLayout>
        );
    }

    if (error || !post) {
        return (
            <LibraryPageLayout>
                <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
                    <p className="text-gray-500 mb-4">{error || 'Post not found'}</p>
                    <button
                        onClick={() => navigate('community')}
                        className="text-lime-600 font-medium hover:underline"
                    >{t('community.return_to_community')}</button>
                </div>
            </LibraryPageLayout>
        );
    }

    return (
        <LibraryPageLayout>
            <div className="max-w-2xl mx-auto">
                <button
                    onClick={() => navigate('community')}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span>{t('community.back_to_community')}</span>
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <PostHeader
                        uid={post.uid}
                        username={post.username}
                        userPhotoURL={post.userPhotoURL}
                        createdAt={post.createdAt}
                        title={post.title}
                    />

                    <PostPhotos photos={post.photos} />

                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-3">{post.title || 'Untitled Bake'}</h1>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-wrap mb-6">
                            {post.description}
                        </p>

                        <PostTechnicalPanel post={post} />

                        <div className="mt-8">
                            <PostMethod post={post} />
                        </div>
                    </div>

                    <div className="px-6 pb-4">
                        <PostActions
                            post={post}
                            commentCount={commentCount}
                            // No-op for onCommentClick
                            onCommentClick={() => { }}
                        />
                    </div>

                    <div className="border-t border-gray-100">
                        <PostComments
                            postId={post.id}
                            onCommentAdded={handleCommentAdded}
                        />
                    </div>
                </div>
            </div>
        </LibraryPageLayout>
    );
};
