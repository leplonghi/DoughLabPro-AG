import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import LearnHomePage from './LearnHomePage';
import LearnArticlePage from './LearnArticlePage';
import { LearnProvider } from '@/contexts/LearnContext';

const LearnPage: React.FC = () => {
    const { routeParams } = useRouter();

    // Handle case where routeParams might be the ID string directly or an object
    // navigate('learn', { articleId: '...' }) -> routeParams = { articleId: '...' }
    const articleId = typeof routeParams === 'string' ? routeParams : routeParams?.articleId;

    return (
        <LearnProvider>
            {articleId ? <LearnArticlePage articleId={articleId} /> : <LearnHomePage />}
        </LearnProvider>
    );
};

export default LearnPage;
