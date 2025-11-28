import React from 'react';
import { useUser } from '../contexts/UserProvider';
import { canUseFeature, FeatureKey } from '../logic/permissions';
import { LockClosedIcon } from './ui/Icons';
import { PaywallOrigin } from '@/types';

interface ProFeatureLockProps {
    featureKey: FeatureKey;
    children: React.ReactNode;
    contextLabel?: string;
    className?: string;
    origin?: PaywallOrigin;
}

export const ProFeatureLock: React.FC<ProFeatureLockProps> = ({
    featureKey,
    children,
    contextLabel,
    className = '',
    origin = 'general',
}) => {
    const { user, openPaywall } = useUser();
    const allowed = canUseFeature(user, featureKey);

    if (allowed) {
        return <>{children}</>;
    }

    return (
        <div className={`relative group ${className}`}>
            {/* Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
                <div
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-lime-400 shadow-lg max-w-xs text-center cursor-default pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="mx-auto bg-lime-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                        <LockClosedIcon className="w-5 h-5 text-lime-600" />
                    </div>

                    <p className="text-sm font-bold text-slate-900 mb-1">
                        Pro feature locked
                    </p>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                        Unlock full dough lab power with Pro and use {contextLabel || "this advanced feature"}.
                        <br />It costs less than a slice of pizza per month.
                    </p>
                    <button
                        type="button"
                        onClick={() => openPaywall(origin)}
                        className="px-4 py-2.5 text-sm rounded-lg bg-lime-600 text-white font-bold hover:bg-lime-700 transition-colors w-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Upgrade to Pro
                    </button>
                </div>
            </div>

            {/* Blurred Content */}
            <div className="opacity-40 pointer-events-none select-none filter blur-[3px]" aria-hidden="true">
                {children}
            </div>
        </div>
    );
};

export default ProFeatureLock;
