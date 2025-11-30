import { LearnArticleData } from '@/types/learn';

export interface ArticleSummary {
    intro: string;
    keyPoints: string[];
    ranges: LearnArticleData['practicalRanges'];
    variants: string[];
    practicalApplications: string[];
}

export function generateArticleSummary(article: LearnArticleData): ArticleSummary {
    // 1. Extract Intro Summary (First 3 sentences or full intro if short)
    const rawIntro = article.intro || '';
    const introSentences = rawIntro.split('.').filter(s => s.trim().length > 0);
    const intro = introSentences.slice(0, 3).join('. ') + (introSentences.length > 3 ? '.' : '');

    // 2. Extract Key Points (Mix of Dough Impact and Baking Impact)
    const doughImpacts = article.doughImpact || [];
    const bakingImpacts = article.bakingImpact || [];
    const allImpacts = [...doughImpacts, ...bakingImpacts];
    const keyPoints = allImpacts.slice(0, 5);

    // 3. Ranges (Direct pass-through)
    const ranges = article.practicalRanges;

    // 4. Top Variants (Names only)
    const variants = article.variantsAndImplications?.map(v => v.variant || v.name || '').filter(Boolean).slice(0, 3) || [];

    // 5. Practical Applications
    const practicalApplications = article.practicalApplications || [];

    return {
        intro,
        keyPoints,
        ranges,
        variants,
        practicalApplications
    };
}
