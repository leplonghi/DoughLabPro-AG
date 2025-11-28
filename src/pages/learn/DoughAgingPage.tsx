import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { doughAgingData } from '@/data/learn-content';

const DoughAgingPage: React.FC = () => {
  return <LearnArticleRenderer data={doughAgingData} />;
};

export default DoughAgingPage;
