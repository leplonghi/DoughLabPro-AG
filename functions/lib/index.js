"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMonthlyRanking = exports.generateWeeklyRanking = exports.onDeletedComment = exports.onNewComment = exports.onNewClone = exports.onDeletedLike = exports.onNewLike = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();
__exportStar(require("./stripe"), exports);
__exportStar(require("./infrastructure/backup"), exports);
__exportStar(require("./infrastructure/monitoring"), exports);
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
exports.onNewLike = functions.firestore
    .document("community_likes/{likeId}")
    .onCreate(async (snap) => {
    const data = snap.data();
    const postId = data === null || data === void 0 ? void 0 : data.postId;
    if (!postId)
        return;
    const postRef = db.collection("community_posts").doc(postId);
    await db.runTransaction(async (transaction) => {
        var _a;
        const postDoc = await transaction.get(postRef);
        if (!postDoc.exists)
            return;
        transaction.update(postRef, {
            likes: admin.firestore.FieldValue.increment(1),
        });
        const ownerUid = (_a = postDoc.data()) === null || _a === void 0 ? void 0 : _a.uid;
        if (ownerUid) {
            const leaderboardRef = db.collection("leaderboard").doc(ownerUid);
            transaction.set(leaderboardRef, {
                points: admin.firestore.FieldValue.increment(POINTS.LIKE),
                lastActive: admin.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        }
    });
});
exports.onDeletedLike = functions.firestore
    .document("community_likes/{likeId}")
    .onDelete(async (snap) => {
    const data = snap.data();
    const postId = data === null || data === void 0 ? void 0 : data.postId;
    if (!postId)
        return;
    const postRef = db.collection("community_posts").doc(postId);
    await db.runTransaction(async (transaction) => {
        var _a;
        const postDoc = await transaction.get(postRef);
        if (!postDoc.exists)
            return;
        transaction.update(postRef, {
            likes: admin.firestore.FieldValue.increment(-1),
        });
        const ownerUid = (_a = postDoc.data()) === null || _a === void 0 ? void 0 : _a.uid;
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
exports.onNewClone = functions.firestore
    .document("community_clones/{cloneId}")
    .onCreate(async (snap) => {
    const data = snap.data();
    const postId = data === null || data === void 0 ? void 0 : data.postId;
    if (!postId)
        return;
    const postRef = db.collection("community_posts").doc(postId);
    await db.runTransaction(async (transaction) => {
        var _a;
        const postDoc = await transaction.get(postRef);
        if (!postDoc.exists)
            return;
        transaction.update(postRef, {
            clones: admin.firestore.FieldValue.increment(1),
        });
        const ownerUid = (_a = postDoc.data()) === null || _a === void 0 ? void 0 : _a.uid;
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
exports.onNewComment = functions.firestore
    .document("community_comments/{commentId}")
    .onCreate(async (snap) => {
    const data = snap.data();
    const postId = data === null || data === void 0 ? void 0 : data.postId;
    if (!postId)
        return;
    const postRef = db.collection("community_posts").doc(postId);
    await db.runTransaction(async (transaction) => {
        var _a;
        const postDoc = await transaction.get(postRef);
        if (!postDoc.exists)
            return;
        transaction.update(postRef, {
            comments: admin.firestore.FieldValue.increment(1),
        });
        const ownerUid = (_a = postDoc.data()) === null || _a === void 0 ? void 0 : _a.uid;
        if (ownerUid) {
            const leaderboardRef = db.collection("leaderboard").doc(ownerUid);
            transaction.set(leaderboardRef, {
                points: admin.firestore.FieldValue.increment(POINTS.COMMENT),
                lastActive: admin.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        }
    });
});
exports.onDeletedComment = functions.firestore
    .document("community_comments/{commentId}")
    .onDelete(async (snap) => {
    const data = snap.data();
    const postId = data === null || data === void 0 ? void 0 : data.postId;
    if (!postId)
        return;
    const postRef = db.collection("community_posts").doc(postId);
    await db.runTransaction(async (transaction) => {
        var _a;
        const postDoc = await transaction.get(postRef);
        if (!postDoc.exists)
            return;
        transaction.update(postRef, {
            comments: admin.firestore.FieldValue.increment(-1),
        });
        const ownerUid = (_a = postDoc.data()) === null || _a === void 0 ? void 0 : _a.uid;
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
exports.generateWeeklyRanking = functions.pubsub
    .schedule("0 2 * * *")
    .timeZone("UTC")
    .onRun(async (_context) => {
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
    const rankings = snapshot.docs.map((doc, index) => (Object.assign({ rank: index + 1, userId: doc.id }, doc.data())));
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
exports.generateMonthlyRanking = functions.pubsub
    .schedule("0 2 1 * *")
    .timeZone("UTC")
    .onRun(async (_context) => {
    // Similar logic for monthly
    const snapshot = await db.collection("leaderboard")
        .orderBy("points", "desc")
        .limit(100)
        .get();
    const rankings = snapshot.docs.map((doc, index) => (Object.assign({ rank: index + 1, userId: doc.id }, doc.data())));
    await db.collection("community_rankings").doc("monthly").set({
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        rankings: rankings
    });
    console.log("Monthly ranking generated.");
    return null;
});
//# sourceMappingURL=index.js.map