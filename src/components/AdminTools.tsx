/**
 * AdminTools Component
 * 
 * In-app admin panel for managing user Pro access.
 * Only accessible when logged in as leplonghi@gmail.com
 */

import React, { useState } from 'react';
import { doc, updateDoc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/db';
import { useUser } from '@/contexts/UserProvider';
import { useAuth } from '@/contexts/AuthContext';

export const AdminTools: React.FC = () => {
    const { user } = useUser();
    const { firebaseUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Only show to admin
    if (!user || user.email !== 'leplonghi@gmail.com') {
        return null;
    }

    const grantProToCurrentUser = async () => {
        if (!firebaseUser || !db) {
            setMessage('❌ Firebase not initialized');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            const userRef = doc(db, 'users', firebaseUser.uid);

            // Check if document exists
            const userSnap = await getDoc(userRef);

            const now = new Date().toISOString();
            const updateData = {
                plan: 'lab_pro',
                isPro: true,
                isAdmin: true,
                proSince: userSnap.exists() && userSnap.data().proSince ? userSnap.data().proSince : now,
                updatedAt: now,
                email: firebaseUser.email || 'leplonghi@gmail.com',
                name: firebaseUser.displayName || 'Admin',
            };

            if (userSnap.exists()) {
                // Update existing document
                await updateDoc(userRef, updateData);
                setMessage(`✅ User document updated! Plan is now: lab_pro`);
            } else {
                // Create new document
                await setDoc(userRef, {
                    ...updateData,
                    createdAt: now,
                });
                setMessage(`✅ User document created! Plan is now: lab_pro`);
            }

            // Reload the page to update context
            setTimeout(() => {
                window.location.reload();
            }, 2000);

        } catch (error) {
            console.error('Error granting Pro access:', error);
            setMessage(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            maxWidth: '320px',
            zIndex: 10000,
        }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 'bold' }}>
                🔧 Admin Tools
            </h3>

            <div style={{ marginBottom: '12px', fontSize: '13px', opacity: 0.8 }}>
                <div>UID: {firebaseUser?.uid.slice(0, 8)}...</div>
                <div>Email: {firebaseUser?.email}</div>
                <div>Current Plan: <strong>{user.plan}</strong></div>
                <div>isPro: <strong>{user.isPro ? 'true' : 'false'}</strong></div>
            </div>

            <button
                onClick={grantProToCurrentUser}
                disabled={loading}
                style={{
                    width: '100%',
                    padding: '10px',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    opacity: loading ? 0.6 : 1,
                    transition: 'opacity 0.2s',
                }}
            >
                {loading ? '⏳ Processing...' : '✨ Grant Pro Access'}
            </button>

            {message && (
                <div style={{
                    marginTop: '12px',
                    padding: '10px',
                    background: message.startsWith('✅')
                        ? 'rgba(16, 185, 129, 0.1)'
                        : 'rgba(239, 68, 68, 0.1)',
                    borderRadius: '6px',
                    fontSize: '12px',
                    border: `1px solid ${message.startsWith('✅')
                        ? 'rgba(16, 185, 129, 0.3)'
                        : 'rgba(239, 68, 68, 0.3)'}`,
                }}>
                    {message}
                </div>
            )}

            <div style={{
                marginTop: '12px',
                padding: '8px',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '6px',
                fontSize: '11px',
                opacity: 0.7,
            }}>
                💡 This tool updates your Firestore user document to grant Pro access.
            </div>
        </div>
    );
};
