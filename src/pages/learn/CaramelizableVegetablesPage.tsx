import React from 'react';
import LearnArticleRenderer from '@/components/learn/LearnArticleRenderer';
import { caramelizableVegetablesData } from '@/data/learn-content';

const CaramelizableVegetablesPage: React.FC = () => {
  return <LearnArticleRenderer data={caramelizableVegetablesData} />;
};

export default CaramelizableVegetablesPage;
