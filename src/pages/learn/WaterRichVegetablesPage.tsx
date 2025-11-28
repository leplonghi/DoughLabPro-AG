import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { waterRichVegetablesData } from '@/data/learn-content';

const WaterRichVegetablesPage: React.FC = () => {
  return <LearnArticleRenderer data={waterRichVegetablesData} />;
};

export default WaterRichVegetablesPage;
