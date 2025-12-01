/**
 * Script to configure leplonghi@gmail.com as a Pro user in Firestore
 * 
 * Run this script once to ensure the admin user has proper Pro status in the database.
 * 
 * Usage: npx tsx scripts/setupProUser.ts
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as path from 'path';

// Initialize Firebase Admin
const serviceAccountPath = path.resolve(__dirname, '../serviceAccountKey.json');

try {
    initializeApp({
        credential: cert(serviceAccountPath)
    });
} catch (error) {
    console.error('Error initializing Firebase Admin:', error);
    console.log('\n⚠️  Make sure you have a serviceAccountKey.json file in the project root.');
    console.log('   Download it from Firebase Console > Project Settings > Service Accounts\n');
    process.exit(1);
}

const db = getFirestore();

async function setupProUser() {
    console.log('🔧 Setting up Pro user in Firestore...\n');

    const adminEmail = 'leplonghi@gmail.com';

    try {
        // First, we need to find the user document
        // The user document is stored at /users/{uid}
        // We need to query by email to find the UID

        const usersRef = db.collection('users');
        const snapshot = await usersRef.get();

        let userDoc = null;
        let userId = null;

        // Search for the user by email
        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.email === adminEmail) {
                userDoc = doc;
                userId = doc.id;
            }
        });

        if (!userDoc) {
            console.log(`❌ User document not found for ${adminEmail}`);
            console.log('   The user needs to login at least once to create their profile.\n');
            return;
        }

        console.log(`✅ Found user document: ${userId}`);
        console.log(`   Current data:`, userDoc.data(), '\n');

        // Update the user document to ensure Pro status
        const updateData = {
            plan: 'lab_pro',
            isPro: true,
            isAdmin: true,
            proSince: userDoc.data().proSince || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        await usersRef.doc(userId).update(updateData);

        console.log('✅ User successfully updated to Pro status!');
        console.log('   Updated fields:', updateData, '\n');
        console.log('🎉 Setup complete! The user should now have full Pro access.\n');

    } catch (error) {
        console.error('❌ Error setting up Pro user:', error);
    }
}

// Run the setup
setupProUser()
    .then(() => {
        console.log('✨ Script completed successfully!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('💥 Script failed:', error);
        process.exit(1);
    });
