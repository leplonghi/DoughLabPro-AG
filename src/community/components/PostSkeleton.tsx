
import React from 'react';

export const PostSkeleton: React.FC = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
            {/* Header */}
            <div className="flex items-center gap-3 p-4">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <div className="space-y-2">
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                    <div className="h-3 w-20 bg-gray-200 rounded" />
                </div>
            </div>

            {/* Photo */}
            <div className="h-64 sm:h-96 w-full bg-gray-200" />

            {/* Specs Bar */}
            <div className="h-12 border-b border-gray-100 flex items-center gap-4 px-4 overflow-hidden">
                <div className="h-6 w-20 bg-gray-200 rounded-lg" />
                <div className="h-6 w-20 bg-gray-200 rounded-lg" />
                <div className="h-6 w-20 bg-gray-200 rounded-lg" />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
                <div className="h-6 w-3/4 bg-gray-200 rounded" />
                <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded" />
                </div>
            </div>
        </div>
    );
};
