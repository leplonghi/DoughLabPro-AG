import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { autolyseData } from '@/data/learn-content';

const AutolysePage: React.FC = () => {
    return <LearnArticleRenderer data={autolyseData} />;
};

export default AutolysePage;
