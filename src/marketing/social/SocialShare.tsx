import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { canUseFeature, getCurrentPlan } from '../../permissions';
import { shareContent, generatePreviewImage, SharePayload } from './socialApis';
import { DoughConfig, Levain } from '../../types';
import { DoughStyleDefinition } from '../../types/styles';

interface SocialShareProps {
    title: string;
    data: DoughConfig | Levain | DoughStyleDefinition;
    type: 'recipe' | 'levain' | 'style';
    className?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ title, data, type, className = '' }) => {
    const { user } = useAuth();
    const [isSharing, setIsSharing] = useState(false);

    const handleShare = async () => {
        setIsSharing(true);
        const plan = getCurrentPlan(user);
        const canRichShare = canUseFeature(plan, 'community.share_and_clone');

        // Construct payload
        const payload: SharePayload = {
            title: `Check out my ${type} on DoughLab Pro!`,
            text: title,
            url: window.location.href,
        };

        if (canRichShare) {
            // Add rich data if pro
            payload.data = data;
            payload.image = await generatePreviewImage(data);
        }

        await shareContent(payload);
        setIsSharing(false);
    };

    return (
        <button
            onClick={handleShare}
            disabled={isSharing}
            className={`flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors ${className}`}
        >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="text-sm font-medium">{isSharing ? 'Sharing...' : 'Share'}</span>
        </button>
    );
};
