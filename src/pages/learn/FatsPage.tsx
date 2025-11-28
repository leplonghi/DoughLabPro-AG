import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { fatsData } from '@/data/learn-content';

const FatsPage: React.FC = () => {
    return <LearnArticleRenderer data={fatsData} />;
};

export default FatsPage;
