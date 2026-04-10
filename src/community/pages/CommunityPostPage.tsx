
import React, { useEffect, useState } from 'react';
import { useRouter } from '../../contexts/RouterContext';
import { communityStore } from '../store/communityStore';
import { CommunityPost } from '../types';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { PostHeader } from '../components/PostHeader';
import { PostPhotos } from '../components/PostPhotos';
import { PostTechnicalPanel } from '../components/PostTechnicalPanel';
import { PostMethod } from '../components/PostMethod';
import { PostActions } from '../components/PostActions';
import { PostComments } from '../components/PostComments';
import { useTranslation } from '@/i18n';
import { getPageMeta } from '@/app/appShell';

interface CommunityPostPageProps {
    postId: string;
}

export const CommunityPostPage: React.FC<CommunityPostPageProps> = ({ postId }) => {
  const { t } = useTranslation();
    const { navigate } = useRouter();
    const communityMeta = getPageMeta('community');
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
                    <Loader2 className="h-8 w-8 animate-spin text-dlp-primary-hover" />
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
                        className="text-dlp-primary-hover font-medium hover:underline"
                    >{t('community.return_to_community')}</button>
                </div>
            </LibraryPageLayout>
        );
    }

    return (
        <LibraryPageLayout>
            <div className="max-w-5xl mx-auto">
                <AppShellHeader
                    eyebrow={communityMeta.eyebrow}
                    title={post.title || 'Untitled Bake'}
                    description={post.description || communityMeta.description}
                >
                    <button
                        onClick={() => navigate('community')}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>{t('community.back_to_community')}</span>
                    </button>
                </AppShellHeader>

                <AppSurface className="overflow-hidden">
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
                </AppSurface>
            </div>
        </LibraryPageLayout>
    );
};

