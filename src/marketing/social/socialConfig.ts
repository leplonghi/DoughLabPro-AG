export const SOCIAL_PLATFORMS = {
    FACEBOOK: 'facebook',
    INSTAGRAM: 'instagram',
    TIKTOK: 'tiktok',
    YOUTUBE: 'youtube',
    TWITTER: 'twitter',
    WHATSAPP: 'whatsapp'
} as const;

export type SocialPlatform = typeof SOCIAL_PLATFORMS[keyof typeof SOCIAL_PLATFORMS];

export const SOCIAL_CONFIG = {
    facebook: {
        shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=',
        color: '#1877F2'
    },
    twitter: {
        shareUrl: 'https://twitter.com/intent/tweet?text=',
        color: '#1DA1F2'
    },
    whatsapp: {
        shareUrl: 'https://wa.me/?text=',
        color: '#25D366'
    },
    // Instagram/TikTok don't support direct web sharing easily without API, usually handled via native share or copy link
};
