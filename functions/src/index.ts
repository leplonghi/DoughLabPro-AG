import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();

export * from "./stripe";
export * from "./infrastructure/backup";
export * from "./infrastructure/monitoring";

// Points System
const POINTS = {
    LIKE: 10,
    CLONE: 50,
    COMMENT: 5,
    POST: 20
};

// --- Triggers ---

/**
 * Trigger: When a user likes a post
 * Path: community_likes/{likeId}
 */
export const onNewLike = functions.firestore
    .document("community_likes/{likeId}")
    .onCreate(async (snap, context) => {
        const data = snap.data();
        const postId = data?.postId;
        // const userId = data?.['uid']; // Unused

        if (!postId) return;

        const postRef = db.collection("community_posts").doc(postId);

        await db.runTransaction(async (transaction) => {
            const postDoc = await transaction.get(postRef);
            if (!postDoc.exists) return;
            // 1. Increment likes count
            const currentLikes = postDoc.data()?.likes || 0;
            transaction.update(postRef, { likes: currentLikes + 1 });

            // 2. Award points to post owner
            const ownerUid = postDoc.data()?.uid;

            if (ownerUid) {
                const leaderboardRef = db.collection("leaderboard").doc(ownerUid);
                transaction.set(leaderboardRef, {
                    points: admin.firestore.FieldValue.increment(POINTS.LIKE),
                    lastActive: admin.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
            }
        });
    });

/**
 * Trigger: When a user clones a post
 * Path: community_clones/{cloneId}
 */
export const onNewClone = functions.firestore
    .document("community_clones/{cloneId}")
    .onCreate(async (snap, context) => {
        const data = snap.data();
        const postId = data?.postId;

        if (!postId) return;

        const postRef = db.collection("community_posts").doc(postId);

        await db.runTransaction(async (transaction) => {
            const postDoc = await transaction.get(postRef);
            if (!postDoc.exists) return;

            // 1. Increment clones count
            const currentClones = postDoc.data()?.cloneCount || 0;
            transaction.update(postRef, { cloneCount: currentClones + 1 });

            // 2. Award points to post owner
            const ownerUid = postDoc.data()?.uid;
            if (ownerUid) {
                const leaderboardRef = db.collection("leaderboard").doc(ownerUid);
                transaction.set(leaderboardRef, {
                    points: admin.firestore.FieldValue.increment(POINTS.CLONE),
                    lastActive: admin.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
            }
        });
    });

/**
 * Trigger: When a user comments on a post
 * Path: community_comments/{commentId}
 */
export const onNewComment = functions.firestore
    .document("community_comments/{commentId}")
    .onCreate(async (snap, context) => {
        const data = snap.data();
        const postId = data?.postId;

        if (!postId) return;

        const postRef = db.collection("community_posts").doc(postId);

        await db.runTransaction(async (transaction) => {
            const postDoc = await transaction.get(postRef);
            if (!postDoc.exists) return;

            // 1. Increment comment count
            const currentComments = postDoc.data()?.commentCount || 0;
            transaction.update(postRef, { commentCount: currentComments + 1 });

            // 2. Award points to post owner
            const ownerUid = postDoc.data()?.uid;
            if (ownerUid) {
                const leaderboardRef = db.collection("leaderboard").doc(ownerUid);
                transaction.set(leaderboardRef, {
                    points: admin.firestore.FieldValue.increment(POINTS.COMMENT),
                    lastActive: admin.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
            }
        });
    });

// --- Scheduled Tasks ---

/**
 * Scheduled: Generate Weekly Ranking
 * Frequency: Daily at 02:00 UTC
 */
export const generateWeeklyRanking = functions.pubsub
    .schedule("0 2 * * *")
    .timeZone("UTC")
    .onRun(async (context) => {
        // Logic: Aggregate points from the last 7 days or snapshot current leaderboard
        // For simplicity, we'll take the top 50 from 'leaderboard' collection 
        // (assuming 'points' is a running total, or we reset it? 
        // Realistically, we might want a 'weeklyPoints' field that resets, 
        // but for this MVP we'll just snapshot the top users).

        // Better approach for "Weekly": 
        // We could have a 'weekly_points' collection or field. 
        // But to keep it simple and robust: We'll just snapshot the current top users.

        const snapshot = await db.collection("leaderboard")
            .orderBy("points", "desc")
            .limit(50)
            .get();

        const rankings = snapshot.docs.map((doc, index) => ({
            rank: index + 1,
            userId: doc.id,
            ...doc.data()
        }));

        // Write to community_rankings
        await db.collection("community_rankings").doc("weekly").set({
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
            rankings: rankings
        });

        console.log("Weekly ranking generated.");
        return null;
    });

/**
 * Scheduled: Generate Monthly Ranking
 * Frequency: Monthly on the 1st at 02:00 UTC
 */
export const generateMonthlyRanking = functions.pubsub
    .schedule("0 2 1 * *")
    .timeZone("UTC")
    .onRun(async (context) => {
        // Similar logic for monthly
        const snapshot = await db.collection("leaderboard")
            .orderBy("points", "desc")
            .limit(100)
            .get();

        const rankings = snapshot.docs.map((doc, index) => ({
            rank: index + 1,
            userId: doc.id,
            ...doc.data()
        }));

        await db.collection("community_rankings").doc("monthly").set({
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
            rankings: rankings
        });

        console.log("Monthly ranking generated.");
        return null;
    });
