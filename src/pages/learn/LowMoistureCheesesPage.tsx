import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { lowMoistureCheesesData } from '@/data/learn-content';

const LowMoistureCheesesPage: React.FC = () => {
  return <LearnArticleRenderer data={lowMoistureCheesesData} />;
};

export default LowMoistureCheesesPage;
