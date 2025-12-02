import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    orderBy,
    limit,
    startAfter,
    Timestamp,
    increment,
    updateDoc,
    serverTimestamp,
    DocumentSnapshot,
    setDoc,
    deleteDoc
} from 'firebase/firestore';
import { db } from '../../firebase/db';
import { CommunityPost, CommunityComment, CommunityLike, CommunityClone, CommunityFollow } from '../types';

const POSTS_COLLECTION = 'community_posts';
const COMMENTS_COLLECTION = 'community_comments';
const LIKES_COLLECTION = 'community_likes';
const CLONES_COLLECTION = 'community_clones';
const FOLLOWS_COLLECTION = 'community_follows';

export const communityStore = {
    // --- POSTS ---
    createPost: async (postData: Omit<CommunityPost, 'id' | 'createdAt' | 'likes' | 'comments' | 'clones'>) => {
        const docRef = await addDoc(collection(db, POSTS_COLLECTION), {
            ...postData,
            likes: 0,
            comments: 0,
            clones: 0,
            createdAt: serverTimestamp(),
        });
        return docRef.id;
    },

    getFeed: async (lastDoc?: DocumentSnapshot, limitCount = 10, filter: 'latest' | 'trending' | 'top' = 'latest') => {
        let orderByField = 'createdAt';
        if (filter === 'trending') orderByField = 'comments';
        if (filter === 'top') orderByField = 'likes';

        let q = query(
            collection(db, POSTS_COLLECTION),
            where('visibility', '==', 'public'),
            orderBy(orderByField, 'desc'),
            limit(limitCount)
        );

        if (lastDoc) {
            q = query(q, startAfter(lastDoc));
        }

        const snapshot = await getDocs(q);
        return {
            posts: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CommunityPost)),
            lastDoc: snapshot.docs[snapshot.docs.length - 1]
        };
    },

    getPost: async (postId: string) => {
        const docRef = doc(db, POSTS_COLLECTION, postId);
        const snapshot = await getDoc(docRef);
        if (!snapshot.exists()) return null;
        return { id: snapshot.id, ...snapshot.data() } as CommunityPost;
    },

    getUserPosts: async (uid: string) => {
        const q = query(
            collection(db, POSTS_COLLECTION),
            where('uid', '==', uid),
            orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CommunityPost));
    },

    // --- COMMENTS ---
    addComment: async (commentData: Omit<CommunityComment, 'id' | 'createdAt'>) => {
        const docRef = await addDoc(collection(db, COMMENTS_COLLECTION), {
            ...commentData,
            createdAt: serverTimestamp(),
        });

        // Increment comment count on post
        const postRef = doc(db, POSTS_COLLECTION, commentData.postId);
        await updateDoc(postRef, { comments: increment(1) });

        return docRef.id;
    },

    getComments: async (postId: string) => {
        const q = query(
            collection(db, COMMENTS_COLLECTION),
            where('postId', '==', postId),
            orderBy('createdAt', 'asc')
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CommunityComment));
    },

    // --- LIKES ---
    toggleLike: async (postId: string, uid: string) => {
        const likeId = `${postId}_${uid}`;
        const likeRef = doc(db, LIKES_COLLECTION, likeId);
        const likeSnap = await getDoc(likeRef);

        const postRef = doc(db, POSTS_COLLECTION, postId);

        if (likeSnap.exists()) {
            // Unlike
            await deleteDoc(likeRef);
            await updateDoc(postRef, { likes: increment(-1) });
            return false;
        } else {
            // Like
            await setDoc(likeRef, {
                postId,
                uid,
                createdAt: serverTimestamp()
            });
            await updateDoc(postRef, { likes: increment(1) });
            return true;
        }
    },

    checkLikeStatus: async (postId: string, uid: string) => {
        const likeId = `${postId}_${uid}`;
        const likeSnap = await getDoc(doc(db, LIKES_COLLECTION, likeId));
        return likeSnap.exists();
    },

    // --- CLONES ---
    recordClone: async (postId: string, uid: string) => {
        // Just record the clone event for stats
        await addDoc(collection(db, CLONES_COLLECTION), {
            postId,
            uid,
            createdAt: serverTimestamp()
        });

        const postRef = doc(db, POSTS_COLLECTION, postId);
        await updateDoc(postRef, { clones: increment(1) });
    },

    // --- FOLLOWS ---
    toggleFollow: async (followerUid: string, targetUid: string) => {
        const followId = `${followerUid}_${targetUid}`;
        const followRef = doc(db, FOLLOWS_COLLECTION, followId);
        const followSnap = await getDoc(followRef);

        if (followSnap.exists()) {
            await deleteDoc(followRef);
            return false;
        } else {
            await setDoc(followRef, {
                followerUid,
                targetUid,
                createdAt: serverTimestamp()
            });
            return true;
        }
    },

    checkFollowStatus: async (followerUid: string, targetUid: string) => {
        const followId = `${followerUid}_${targetUid}`;
        const followSnap = await getDoc(doc(db, FOLLOWS_COLLECTION, followId));
        return followSnap.exists();
    },

    getFollowersCount: async (uid: string) => {
        const q = query(collection(db, FOLLOWS_COLLECTION), where('targetUid', '==', uid));
        const snapshot = await getDocs(q);
        return snapshot.size;
    },

    getFollowingCount: async (uid: string) => {
        const q = query(collection(db, FOLLOWS_COLLECTION), where('followerUid', '==', uid));
        const snapshot = await getDocs(q);
        return snapshot.size;
    }
};
