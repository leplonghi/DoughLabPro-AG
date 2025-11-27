import React from 'react';

export const LoadingSpinner: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`animate-spin rounded-full border-2 border-current border-t-transparent ${className || 'h-6 w-6 text-lime-500'}`} />
);
export default LoadingSpinner;
