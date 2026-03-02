import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import LearnHomePage from './LearnHomePage';
import LearnArticlePage from './LearnArticlePage';
import { LearnProvider } from '@/contexts/LearnContext';
import { useTranslation } from '@/i18n';

const LearnPage: React.FC = () => {
    const { t } = useTranslation();
    const { routeParams } = useRouter();

    const articleId = routeParams;

    return (
        <LearnProvider>
            {articleId ? <LearnArticlePage articleId={articleId} /> : <LearnHomePage />}
        </LearnProvider>
    );
};

export default LearnPage;
