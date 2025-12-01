"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = require("sinon");
const fft = require("firebase-functions-test");
const proxyquire = require("proxyquire");
const test = fft();
describe('Community Functions', () => {
    let myFunctions;
    let collectionStub;
    let runTransactionStub;
    before(() => {
        // Mock Firestore chain
        collectionStub = sinon.stub();
        runTransactionStub = sinon.stub();
        const firestoreObj = {
            collection: collectionStub,
            runTransaction: runTransactionStub
        };
        // Mock admin
        const adminStub = {
            initializeApp: sinon.stub(),
            apps: [],
            firestore: sinon.stub().returns(firestoreObj),
            // Add other admin properties if needed, e.g. credential
            credential: {
                cert: sinon.stub()
            }
        };
        // Add FieldValue mock which is used in the function
        adminStub.firestore.FieldValue = {
            increment: sinon.stub().returns('INCREMENT_MOCK'),
            serverTimestamp: sinon.stub().returns('TIMESTAMP_MOCK')
        };
        // Use proxyquire to load index with mocked admin
        // We use .noCallThru() to prevent loading the real firebase-admin
        myFunctions = proxyquire('../index', {
            'firebase-admin': adminStub
        });
    });
    after(() => {
        test.cleanup();
    });
    it('onNewLike should increment likes and award points', async () => {
        const wrapped = test.wrap(myFunctions.onNewLike);
        // Mock data
        const snap = test.firestore.makeDocumentSnapshot({
            postId: 'post_123',
            uid: 'user_456'
        }, 'community_likes/like_abc');
        // Mock Transaction
        const transaction = {
            get: sinon.stub(),
            update: sinon.stub(),
            set: sinon.stub()
        };
        // Mock Post Doc
        const postDoc = {
            exists: true,
            data: () => ({ likes: 5, uid: 'owner_789' })
        };
        // Setup stubs
        const postRef = { path: 'posts/post_123' };
        const leaderboardRef = { path: 'leaderboard/owner_789' };
        collectionStub.withArgs('community_posts').returns({
            doc: sinon.stub().withArgs('post_123').returns(postRef)
        });
        collectionStub.withArgs('leaderboard').returns({
            doc: sinon.stub().withArgs('owner_789').returns(leaderboardRef)
        });
        runTransactionStub.callsFake(async (updateFunction) => {
            await updateFunction(transaction);
        });
        transaction.get.withArgs(postRef).resolves(postDoc);
        // Execute
        await wrapped(snap, { params: { likeId: 'like_abc' } });
        // Assertions
        sinon.assert.calledWith(transaction.update, postRef, { likes: 6 });
        sinon.assert.calledWith(transaction.set, leaderboardRef, sinon.match.has('points'));
    });
});
//# sourceMappingURL=community.test.js.map