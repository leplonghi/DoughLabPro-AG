import React from 'react';

export interface LearnReference {
    title: string;
    author?: string;
    year?: string;
    link?: string; // Optional URL for verification
}

export interface LearnSection {
    title: string; // Heading
    content: React.ReactNode[]; // Paragraphs, lists, or other nodes. Can be strings.
    icon?: React.ReactNode; // Optional icon for the section header
}

export interface LearnArticleData {
    id: string; // Unique ID for the article (e.g., 'autolyse')
    title: string;
    subtitle: string; // Summary
    sections: LearnSection[];
    proTip?: {
        title?: string;
        content: React.ReactNode;
    };
    criticalPoint?: {
        title?: string;
        content: React.ReactNode;
    };
    history?: {
        heading: string;
        paragraphs: string[];
    };
    references: LearnReference[];
    relatedStyles?: string[]; // IDs of related dough styles
    affiliatePlacementKeys?: string[]; // Keys for affiliate product placements
    callToAction?: {
        text: string;
        buttonText: string;
        link: string;
        icon?: React.ReactNode;
    };
}
