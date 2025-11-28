import React, { useState } from 'react';
import { ShareIcon, CheckIcon } from '@/components/ui/Icons';

interface ShareButtonProps {
    title: string;
    text?: string;
    url?: string;
    className?: string;
    label?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({
    title,
    text = '',
    url = typeof window !== 'undefined' ? window.location.href : '',
    className = '',
    label = 'Share'
}) => {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text,
                    url
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback to clipboard
            try {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };

    return (
        <button
            onClick={handleShare}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${className}`}
            title="Share this page"
        >
            {copied ? (
                <>
                    <CheckIcon className="h-4 w-4 text-lime-600" />
                    <span className="text-lime-600 font-medium">Copied!</span>
                </>
            ) : (
                <>
                    <ShareIcon className="h-4 w-4" />
                    <span>{label}</span>
                </>
            )}
        </button>
    );
};

export default ShareButton;
