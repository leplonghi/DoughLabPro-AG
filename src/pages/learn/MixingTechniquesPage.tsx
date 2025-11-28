import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { mixingTechniquesData } from '@/data/learn-content';

const MixingTechniquesPage: React.FC = () => {
    return <LearnArticleRenderer data={mixingTechniquesData} />;
};

export default MixingTechniquesPage;
