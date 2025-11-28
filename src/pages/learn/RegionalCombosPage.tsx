import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { regionalCombosData } from '@/data/learn-content';

const RegionalCombosPage: React.FC = () => {
  return <LearnArticleRenderer data={regionalCombosData} />;
};

export default RegionalCombosPage;
