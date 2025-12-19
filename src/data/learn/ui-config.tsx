import React from 'react';
import { useTranslation } from '@/i18n';
import {
    AcademicCapIcon,
    WrenchScrewdriverIcon,
    BeakerIcon,
    AlertTriangleIcon,
    BookOpenIcon
} from '@/components/ui/Icons';

// Image Map
export const TRACK_IMAGES: Record<string, string> = {
    'fundamentals': '/assets/learn/fundamentals.png',
    'process': '/assets/learn/process.png',
    'science': '/assets/learn/science.png',
    'troubleshooting': '/assets/learn/troubleshooting.png'
};

// Color Map (Tailwind classes)
export const TRACK_COLORS: Record<string, { bg: string, text: string, border: string, icon: string, hoverBg: string, ring: string }> = {
    'emerald': {
        bg: 'bg-emerald-50',
        text: 'text-emerald-900',
        border: 'border-emerald-200',
        icon: 'text-dlp-brand-hover',
        hoverBg: 'hover:bg-emerald-50/50',
        ring: 'hover:ring-emerald-400'
    },
    'blue': {
        bg: 'bg-blue-50',
        text: 'text-blue-900',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        hoverBg: 'hover:bg-blue-50/50',
        ring: 'hover:ring-blue-400'
    },
    'purple': {
        bg: 'bg-purple-50',
        text: 'text-purple-900',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        hoverBg: 'hover:bg-purple-50/50',
        ring: 'hover:ring-purple-400'
    },
    'orange': {
        bg: 'bg-orange-50',
        text: 'text-orange-900',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        hoverBg: 'hover:bg-orange-50/50',
        ring: 'hover:ring-orange-400'
    },
    'lime': {
        bg: 'bg-lime-50',
        text: 'text-lime-900',
        border: 'border-lime-200',
        icon: 'text-dlp-brand-hover',
        hoverBg: 'hover:bg-lime-50/50',
        ring: 'hover:ring-lime-400'
    },
};

// Icon Map
export const TRACK_ICONS: Record<string, React.FC<any>> = {
    'academic': AcademicCapIcon,
    'wrench': WrenchScrewdriverIcon,
    'beaker': BeakerIcon,
    'alert': AlertTriangleIcon,
    'book': BookOpenIcon
};


