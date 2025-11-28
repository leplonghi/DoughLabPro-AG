import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { smokedCheesesData } from '@/data/learn-content';

const SmokedCheesesPage: React.FC = () => {
  return <LearnArticleRenderer data={smokedCheesesData} />;
};

export default SmokedCheesesPage;
