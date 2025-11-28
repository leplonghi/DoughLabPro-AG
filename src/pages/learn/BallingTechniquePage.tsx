import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { ballingTechniqueData } from '@/data/learn-content';

const BallingTechniquePage: React.FC = () => {
    return <LearnArticleRenderer data={ballingTechniqueData} />;
};

export default BallingTechniquePage;
