import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { ambientVsColdFermentationData } from '@/data/learn-content';

const AmbientVsColdFermentationPage: React.FC = () => {
  return <LearnArticleRenderer data={ambientVsColdFermentationData} />;
};

export default AmbientVsColdFermentationPage;
