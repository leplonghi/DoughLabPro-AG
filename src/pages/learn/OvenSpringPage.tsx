import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { ovenSpringData } from '@/data/learn-content';

const OvenSpringPage: React.FC = () => {
    return <LearnArticleRenderer data={ovenSpringData} />;
};

export default OvenSpringPage;
