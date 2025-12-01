import { allLearnArticles } from '@/data/learn';
import { LearnArticleData } from '@/types/learn';

export interface SearchResult {
    article: LearnArticleData;
    score: number;
    matches: string[];
}

export const searchLearn = (query: string): SearchResult[] => {
    if (!query || query.trim().length < 2) return [];

    const normalizedQuery = query.toLowerCase().trim();
    const terms = normalizedQuery.split(' ').filter(t => t.length > 1);
    const results: SearchResult[] = [];

    allLearnArticles.forEach(article => {
        let score = 0;
        const matches: Set<string> = new Set();

        // Helper to check and score
        const check = (text: string | undefined, weight: number, fieldName: string) => {
            if (!text) return;
            const lower = text.toLowerCase();

            // Exact phrase match boost
            if (lower.includes(normalizedQuery)) {
                score += weight * 2;
                matches.add(fieldName);
            }

            // Term matching
            terms.forEach(term => {
                if (lower.includes(term)) {
                    score += weight;
                    matches.add(fieldName);
                }
            });
        };

        // 1. Title (Weight 20) - Highest priority
        check(article.title, 20, 'Title');

        // 2. Category (Weight 15)
        check(article.category, 15, 'Category');

        // 3. Subtitle (Weight 10)
        check(article.subtitle, 10, 'Subtitle');

        // 4. Technical Foundations (Weight 5)
        article.technicalFoundations?.forEach(tf => check(tf, 5, 'Technical Foundations'));

        // 5. Variants (Weight 5)
        article.variantsAndImplications?.forEach(v => {
            check(v.variant, 5, 'Variants');
            check(v.implications, 2, 'Variants');
        });

        // 6. Parameter Sensitivity (Weight 3)
        article.parameterSensitivity?.forEach(p => check(p, 3, 'Parameters'));

        // 7. Practical Applications (Weight 4)
        article.practicalApplications?.forEach(p => check(p, 4, 'Applications'));

        // 7. Troubleshooting/Symptoms (Weight 8)
        if (article.category === 'Troubleshooting') {
            check(article.title, 8, 'Troubleshooting');
        }

        // 8. Content (Weight 1)
        article.intro && check(article.intro, 1, 'Content');
        article.history && check(article.history, 1, 'Content');
        article.grandmaVersion?.whatItDoes && check(article.grandmaVersion.whatItDoes, 1, 'Grandma Explanation');

        if (score > 0) {
            results.push({ article, score, matches: Array.from(matches) });
        }
    });

    return results.sort((a, b) => b.score - a.score);
};
