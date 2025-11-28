import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { doughScienceData } from '@/data/learn-content';

const DoughSciencePage: React.FC = () => {
    return <LearnArticleRenderer data={doughScienceData} />;
};

export default DoughSciencePage;
