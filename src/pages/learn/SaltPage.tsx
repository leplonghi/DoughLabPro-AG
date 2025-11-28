import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { saltData } from '@/data/learn-content';

const SaltPage: React.FC = () => {
    return <LearnArticleRenderer data={saltData} />;
};

export default SaltPage;
