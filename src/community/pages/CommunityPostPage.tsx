import React from 'react';
import { useRouter } from '../../contexts/RouterContext';
import { useCommunityPost } from '../hooks/useCommunityPost';
import { PostHeader } from '../components/PostHeader';
import { PostPhotos } from '../components/PostPhotos';
import { PostTechnicalPanel } from '../components/PostTechnicalPanel';
import { PostMethod } from '../components/PostMethod';
import { PostActions } from '../components/PostActions';
import { PostComments } from '../components/PostComments';
import { LockFeature } from '../../components/auth/LockFeature';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { LibraryPageLayout } from '../../components/ui/LibraryPageLayout';

interface CommunityPostPageProps {
    postId: string;
}

export const CommunityPostPage: React.FC<CommunityPostPageProps> = ({ postId }) => {
    const { navigate } = useRouter();
    const { post, loading, error } = useCommunityPost(postId || '');

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-lime-500" />
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Post not found</h2>
                <button
                    onClick={() => navigate('community')}
                    className="text-lime-600 hover:underline"
                >
                    Back to Community
                </button>
            </div>
        );
    }

    return (
        <LibraryPageLayout>
            <div className="max-w-3xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span>Back</span>
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <PostHeader
                        username={post.username}
                        userPhotoURL={post.userPhotoURL}
                        createdAt={post.createdAt}
                        title={post.title}
                    />

                    <PostPhotos photos={post.photos} />

                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h1>
                        <p className="text-gray-600 mb-6">{post.description}</p>

                        {/* Locked Advanced Content */}
                        <LockFeature featureKey="community.view_post" mode="blur">
                            <div className="space-y-6">
                                <div className="rounded-xl overflow-hidden border border-gray-200">
                                    <PostTechnicalPanel post={post} />
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <h3 className="font-semibold text-gray-900 mb-2">Method & Notes</h3>
                                    <PostMethod post={post} />
                                </div>
                            </div>
                        </LockFeature>
                    </div>

                    <PostActions
                        post={post}
                        onCommentClick={() => { }} // Already on page, maybe scroll to comments
                    />

                    <PostComments postId={post.id} />
                </div>
            </div>
        </LibraryPageLayout>
    );
};
