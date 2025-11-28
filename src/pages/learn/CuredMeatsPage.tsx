import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { curedMeatsData } from '@/data/learn-content';

const CuredMeatsPage: React.FC = () => {
  return <LearnArticleRenderer data={curedMeatsData} />;
};

export default CuredMeatsPage;
