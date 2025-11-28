import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { fermentationData } from '@/data/learn-content';

const FermentationPage: React.FC = () => {
    return <LearnArticleRenderer data={fermentationData} />;
};

export default FermentationPage;
