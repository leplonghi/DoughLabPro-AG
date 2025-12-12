import { learnContent } from '../learn-content';
import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

// Convert map to array
const articlesArray = Object.values(learnContent);

// Sort by category then title
export const allLearnArticles: LearnArticleData[] = articlesArray.sort((a, b) => {
    const catA = a.category || '';
    const catB = b.category || '';
    if (catA === catB) {
        return (a.title || '').localeCompare(b.title || '');
    }
    return catA.localeCompare(catB);
});

// Extract unique categories
export const learnCategories: string[] = Array.from(new Set(articlesArray.map(a => a.category))).sort();

export const getArticlesByCategory = (category: string): LearnArticleData[] => {
    return allLearnArticles.filter(a => a.category === category);
};

export const getArticleById = (id: string): LearnArticleData | undefined => {
    return learnContent[id];
};
