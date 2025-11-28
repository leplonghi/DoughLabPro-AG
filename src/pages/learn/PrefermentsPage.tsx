import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { prefermentsData } from '@/data/learn-content';

const PrefermentsPage: React.FC = () => {
  return <LearnArticleRenderer data={prefermentsData} />;
};

export default PrefermentsPage;
