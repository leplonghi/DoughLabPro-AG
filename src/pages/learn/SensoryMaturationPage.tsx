import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { sensoryMaturationData } from '@/data/learn-content';

const SensoryMaturationPage: React.FC = () => {
  return <LearnArticleRenderer data={sensoryMaturationData} />;
};

export default SensoryMaturationPage;
