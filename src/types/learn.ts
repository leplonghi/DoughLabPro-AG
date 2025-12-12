import React from 'react';
import { useTranslation } from '@/i18n';

export interface LearnReference {
    title: string;
    author?: string;
    year?: string;
    link?: string;
}

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface LearnArticleData {
    id: string;
    category: string;
    title: string;
    subtitle: string;

    // Metadata
    difficulty?: DifficultyLevel;
    tags?: string[];
    thumbnailUrl?: string;

    intro: string;
    history: string;
    technicalFoundations: string[];
    doughImpact: string[];
    bakingImpact: string[];

    practicalRanges: {
        label: string;
        notes?: string;
    }[];

    practicalApplications?: string[];

    proTips: string[];
    criticalPoints: string[];

    regionalVariants?: string[];
    climateScenarios?: string[];
    styleComparisons?: string[];
    parameterSensitivity?: string[];

    variantsAndImplications?: {
        variant?: string;
        implications?: string;
    }[];

    references?: string[];
    images?: string[];
    diagrams?: string[];

    faq?: { q: string; a: string }[];

    grandmaVersion: {
        intro?: string;
        whatItDoes: string;
        howToUse?: string;
        dangerSigns?: string;
    };
}
