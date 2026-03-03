import React from 'react';
import { Skeleton } from './ui/Skeleton';

export function StyleCardSkeleton() {
    return (
        <div className="dlp-card" style={{ height: 'fit-content' }}>
            <Skeleton height="160px" borderRadius="0" />
            <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Skeleton width="70%" height="18px" />
                <Skeleton width="50%" height="14px" />
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                    <Skeleton width="60px" height="22px" borderRadius="12px" />
                    <Skeleton width="80px" height="22px" borderRadius="12px" />
                </div>
            </div>
        </div>
    );
}
