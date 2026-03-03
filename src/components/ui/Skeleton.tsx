import React from 'react';

interface SkeletonProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    className?: string;
}

export function Skeleton({ width = '100%', height = '16px', borderRadius = '4px', className }: SkeletonProps) {
    return (
        <div
            className={`skeleton ${className ?? ''}`}
            style={{ width, height, borderRadius }}
        />
    );
}
