import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();

export * from "./stripe";

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
    .onCreate(async (snap: any) => {
        const data = snap.data();
        const postId = data?.postId;

        if (!postId) return;

        const postRef = db.collection("community_posts").doc(postId);

        await db.runTransaction(async (transaction: any) => {
            const postDoc = await transaction.get(postRef);
            if (!postDoc.exists) return;
            transaction.update(postRef, {
                likes: admin.firestore.FieldValue.increment(1),
            });

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

export const onDeletedLike = functions.firestore
    .document("community_likes/{likeId}")
    .onDelete(async (snap: any) => {
        const data = snap.data();
        const postId = data?.postId;

        if (!postId) return;

        const postRef = db.collection("community_posts").doc(postId);

        await db.runTransaction(async (transaction: any) => {
            const postDoc = await transaction.get(postRef);
            if (!postDoc.exists) return;

            transaction.update(postRef, {
                likes: admin.firestore.FieldValue.increment(-1),
            });

            const ownerUid = postDoc.data()?.uid;
            if (ownerUid) {
                const leaderboardRef = db.collection("leaderboard").doc(ownerUid);
                transaction.set(leaderboardRef, {
                    points: admin.firestore.FieldValue.increment(-POINTS.LIKE),
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
    .onCreate(async (snap: any) => {
        const data = snap.data();
        const postId = data?.postId;

        if (!postId) return;

        const postRef = db.collection("community_posts").doc(postId);

        await db.runTransaction(async (transaction: any) => {
            const postDoc = await transaction.get(postRef);
            if (!postDoc.exists) return;

            transaction.update(postRef, {
                clones: admin.firestore.FieldValue.increment(1),
            });

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
    .onCreate(async (snap: any) => {
        const data = snap.data();
        const postId = data?.postId;

        if (!postId) return;

        const postRef = db.collection("community_posts").doc(postId);

        await db.runTransaction(async (transaction: any) => {
            const postDoc = await transaction.get(postRef);
            if (!postDoc.exists) return;

            transaction.update(postRef, {
                comments: admin.firestore.FieldValue.increment(1),
            });

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

export const onDeletedComment = functions.firestore
    .document("community_comments/{commentId}")
    .onDelete(async (snap: any) => {
        const data = snap.data();
        const postId = data?.postId;

        if (!postId) return;

        const postRef = db.collection("community_posts").doc(postId);

        await db.runTransaction(async (transaction: any) => {
            const postDoc = await transaction.get(postRef);
            if (!postDoc.exists) return;

            transaction.update(postRef, {
                comments: admin.firestore.FieldValue.increment(-1),
            });

            const ownerUid = postDoc.data()?.uid;
            if (ownerUid) {
                const leaderboardRef = db.collection("leaderboard").doc(ownerUid);
                transaction.set(leaderboardRef, {
                    points: admin.firestore.FieldValue.increment(-POINTS.COMMENT),
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
    .onRun(async (_context: any) => {
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

        const rankings = snapshot.docs.map((doc: any, index: number) => ({
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
    .onRun(async (_context: any) => {
        // Similar logic for monthly
        const snapshot = await db.collection("leaderboard")
            .orderBy("points", "desc")
            .limit(100)
            .get();

        const rankings = snapshot.docs.map((doc: any, index: number) => ({
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
