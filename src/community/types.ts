import { Timestamp } from 'firebase/firestore';
import { DoughConfig, OvenType } from '@/types';
import { useTranslation } from '@/i18n';

export interface CommunityPost {
    id: string;
    uid: string;
    username: string;
    userPhotoURL?: string;
    batchId?: string; // Link to original batch if applicable
    styleKey?: string; // e.g., 'NEAPOLITAN'
    hydration: number;
    flour?: string;
    saltPct?: number;
    levainPct?: number;
    prefermentUsed?: boolean;
    method?: string; // 'DIRECT', 'POOLISH', etc.
    fermentationNotes?: string;
    ovenType?: OvenType;
    photos: string[];
    likes: number;
    comments: number;
    clones: number;
    tags: string[];
    visibility: 'public' | 'private';
    createdAt: Timestamp;
    title?: string;
    description?: string;
}

export interface CommunityComment {
    id: string;
    postId: string;
    uid: string;
    username: string;
    userPhotoURL?: string;
    text: string;
    createdAt: Timestamp;
}

export interface CommunityLike {
    postId: string;
    uid: string;
    createdAt: Timestamp;
}

export interface CommunityClone {
    postId: string;
    uid: string;
    createdAt: Timestamp;
}

export interface CommunityFollow {
    followerUid: string;
    targetUid: string;
    createdAt: Timestamp;
}

export interface RankingUser {
    uid: string;
    username: string;
    userPhotoURL?: string;
    score: number;
    rank: number;
    stats: {
        posts: number;
        likes: number;
        clones: number;
        comments: number;
    };
}

export interface CommunityRanking {
    id: string; // e.g., 'weekly_2025_48'
    period: 'weekly' | 'monthly' | 'all_time';
    topUsers: RankingUser[];
    generatedAt: Timestamp;
}
