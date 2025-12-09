import React from 'react';
import {
    BeakerIcon,
    ScaleIcon,
    FireIcon,
    ExclamationCircleIcon,
    ChartBarIcon,
    WrenchScrewdriverIcon
} from '@/components/ui/Icons';

export interface LearnCategory {
    id: string;
    title: string;
    description: string;
    color: string;
    icon: React.ReactNode;
    bg: string;
    border: string;
    text: string;
    gradient: string;
    hoverBorder: string; // Legacy support or new design
}

export const LEARN_CATEGORIES: LearnCategory[] = [
    {
        id: 'Ingredient Science',
        title: 'Ingredient Science',
        description: 'Explore the chemistry of flour, water, salts, fats and other key ingredients.',
        color: 'lime',
        icon: <ScaleIcon className="w-8 h-8" />,
        bg: 'bg-white',
        border: 'border-lime-200',
        text: 'text-lime-600',
        gradient: 'from-lime-50 to-white',
        hoverBorder: 'hover:border-lime-400'
    },
    {
        id: 'Dough Science',
        title: 'Dough & Gluten Science',
        description: 'Gluten behavior, rheology, extensibility and dough structure.',
        color: 'sky',
        icon: <ChartBarIcon className="w-8 h-8" />,
        bg: 'bg-white',
        border: 'border-sky-200',
        text: 'text-sky-600',
        gradient: 'from-sky-50 to-white',
        hoverBorder: 'hover:border-sky-400'
    },
    {
        id: 'Fermentation Science',
        title: 'Fermentation Science',
        description: 'Fermentation curves, temperature control, preferments and proofing.',
        color: 'amber',
        icon: <BeakerIcon className="w-8 h-8" />,
        bg: 'bg-white',
        border: 'border-amber-200',
        text: 'text-amber-600',
        gradient: 'from-amber-50 to-white',
        hoverBorder: 'hover:border-amber-400'
    },
    {
        id: 'Baking Science',
        title: 'Baking Science',
        description: 'Heat transfer, browning chemistry, crust formation and oven physics.',
        color: 'rose',
        icon: <FireIcon className="w-8 h-8" />,
        bg: 'bg-white',
        border: 'border-rose-200',
        text: 'text-rose-600',
        gradient: 'from-rose-50 to-white',
        hoverBorder: 'hover:border-rose-400'
    },
    {
        id: 'Process Techniques',
        title: 'Process Techniques',
        description: 'Shaping, lamination, balling and handling techniques.',
        color: 'teal',
        icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
        bg: 'bg-white',
        border: 'border-teal-200',
        text: 'text-teal-600',
        gradient: 'from-teal-50 to-white',
        hoverBorder: 'hover:border-teal-400'
    },
    {
        id: 'Troubleshooting',
        title: 'Troubleshooting',
        description: 'Dough diagnostics powered by DoughBot Knowledge.',
        color: 'purple',
        icon: <ExclamationCircleIcon className="w-8 h-8" />,
        bg: 'bg-white',
        border: 'border-purple-200',
        text: 'text-purple-600',
        gradient: 'from-purple-50 to-white',
        hoverBorder: 'hover:border-purple-400'
    }
];
