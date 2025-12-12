import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { canUseFeature, getCurrentPlan } from '../../permissions';
import { createPost } from './CommunityService';
import { useTranslation } from '@/i18n';

export const CommunityComposer: React.FC = () => {
  const { t } = useTranslation();
    const { user } = useAuth();
    const [text, setText] = useState('');
    const [isPosting, setIsPosting] = useState(false);

    const plan = getCurrentPlan(user);
    const canPost = canUseFeature(plan, 'community.share_and_clone'); // Using existing key for now

    const handlePost = async () => {
        if (!text.trim()) return;
        setIsPosting(true);
        try {
            await createPost({ title: 'New Post', description: text }, user!);
            setText('');
            // In real app, would refresh feed
        } catch (e) {
            console.error(e);
        } finally {
            setIsPosting(false);
        }
    };

    if (!canPost) {
        return (
            <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
                <p className="text-zinc-400 text-sm mb-2">{t('community.join_the_conversation_with_doughlab_pro')}</p>
                <button className="text-lime-400 text-sm font-bold">{t('community.upgrade_to_post')}</button>
            </div>
        );
    }

    return (
        <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 mb-6">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t('community.share_your_baking_journey')}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:border-lime-500 outline-none resize-none h-24 mb-3"
            />
            <div className="flex justify-end">
                <button
                    onClick={handlePost}
                    disabled={isPosting || !text.trim()}
                    className="px-4 py-2 bg-lime-500 text-black font-bold rounded-lg hover:bg-lime-400 disabled:opacity-50"
                >
                    {isPosting ? 'Posting...' : 'Post'}
                </button>
            </div>
        </div>
    );
};
