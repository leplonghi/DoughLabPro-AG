import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { sugarsData } from '@/data/learn-content';

const SugarsPage: React.FC = () => {
    return <LearnArticleRenderer data={sugarsData} />;
};

export default SugarsPage;
