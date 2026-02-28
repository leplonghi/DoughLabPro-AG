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
import { useTranslation } from '@/i18n';

export const AdminTools: React.FC = () => {
    const { t } = useTranslation();
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
                name: firebaseUser.displayName || t('ui.admin_384'),
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
            setMessage(`❌ Error: ${error instanceof Error ? error.message : t('ui.unknown_error_385')}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-[10000] max-w-xs w-full bg-white/90 text-slate-800 p-5 rounded-xl shadow-dlp-xl border border-slate-200 backdrop-blur-md">
            <h3 className="mb-4 text-base font-bold flex items-center gap-2">
                🔧 Admin Tools
            </h3>

            <div className="mb-3 text-xs opacity-80 space-y-1">
                <div>UID: {firebaseUser?.uid.slice(0, 8)}...</div>
                <div>Email: {firebaseUser?.email}</div>
                <div>{t('common:current_plan')}<strong className="text-dlp-accent">{user.plan}</strong></div>
                <div>isPro: <strong className={user.isPro ? 'text-dlp-success' : 'text-dlp-error'}>{user.isPro ? 'true' : 'false'}</strong></div>
            </div>

            <button
                onClick={grantProToCurrentUser}
                disabled={loading}
                className={`w-full p-2.5 rounded-lg font-bold text-sm transition-all ${loading
                    ? 'bg-dlp-text-muted cursor-not-allowed opacity-60'
                    : 'bg-dlp-accent hover:bg-dlp-accent-hover text-white shadow-md hover:shadow-lg'
                    }`}
            >
                {loading ? '⏳ Processing...' : '✨ Grant Pro Access'}
            </button>

            {message && (
                <div className={`mt-3 p-2.5 rounded-lg text-xs border ${message.startsWith('✅')
                    ? 'bg-dlp-success/10 border-dlp-success/30 text-dlp-success'
                    : 'bg-dlp-error/10 border-dlp-error/30 text-dlp-error'
                    }`}>
                    {message}
                </div>
            )}

            <div className="mt-3 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[11px] opacity-70">
                💡 This tool updates your Firestore user document to grant Pro access.
            </div>
        </div>
    );
};
