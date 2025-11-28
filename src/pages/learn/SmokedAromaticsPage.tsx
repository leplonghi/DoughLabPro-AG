import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { smokedAromaticsData } from '@/data/learn-content';

const SmokedAromaticsPage: React.FC = () => {
  return <LearnArticleRenderer data={smokedAromaticsData} />;
};

export default SmokedAromaticsPage;
