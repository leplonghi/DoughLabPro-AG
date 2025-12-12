
import React from 'react';
import { Page } from '@/types';
import TechnicalPageLayout from './TechnicalPageLayout';
import LearnTopicCard from '@/components/learn/LearnTopicCard';
import { FireIcon, BeakerIcon, CubeIcon, TagIcon, WaterIcon, FlourIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

interface CriticalIngredientsPageProps {
    onNavigate: (page: Page) => void;
}

const CriticalIngredientsPage: React.FC<CriticalIngredientsPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
    const topics = [
        { page: 'learn/ingredients/flours', title: 'Flours', description: 'The science behind strength (W), P/L, and milling types.', icon: <FlourIcon className="h-8 w-8" /> },
        { page: 'learn/article/yeast-leavening-agents', title: 'Yeasts', description: 'Commercial yeasts, sourdough starters, and fermentation science.', icon: <BeakerIcon className="h-8 w-8" /> },
        { page: 'learn/tomato-preservation', title: 'Tomato Science', description: 'Acidity, sweetness, and preservation to create the perfect sauce.', icon: <FireIcon className="h-8 w-8" /> },
        { page: 'learn/white-sauces', title: 'White Sauces', description: 'The science behind creamy bases and their behavior in heat.', icon: <BeakerIcon className="h-8 w-8" /> },
        { page: 'learn/special-sauces', title: 'Special Sauces', description: 'Technical use of pesto, ricotta, and other bases on pizza.', icon: <TagIcon className="h-8 w-8" /> },
        { page: 'learn/article/low-moisture-cheeses', title: 'Low-Moisture Cheeses', description: 'The science of stable melting and concentrated flavor.', icon: <CubeIcon className="h-8 w-8" /> },
        { page: 'learn/article/smoked-cheeses', title: 'Smoked Cheeses', description: 'The physics of smoke and aromatic impact on pizza.', icon: <FireIcon className="h-8 w-8" /> },
        { page: 'learn/article/cured-meats', title: 'Cured Meats', description: 'Understanding curing science and how it transforms flavor.', icon: <TagIcon className="h-8 w-8" /> },
        { page: 'learn/article/smoked-aromatics', title: 'Smoked & Aromatics', description: 'Using ingredients with intense flavor and the risk of saturation.', icon: <BeakerIcon className="h-8 w-8" /> },
        { page: 'learn/article/water-rich-vegetables', title: 'Water-Rich Vegetables', description: 'How to control moisture in mushrooms, zucchini, and others.', icon: <WaterIcon className="h-8 w-8" /> },
        { page: 'learn/article/caramelizable-vegetables', title: 'Caramelizable Vegetables', description: 'The science of sugars in onions, peppers, and their impact on flavor.', icon: <FireIcon className="h-8 w-8" /> },
    ];

    return (
        <TechnicalPageLayout
            title={t('learn.critical_ingredients')}
            subtitle={t('learn.a_deep_dive_into_flours_tomatoes_cheeses_meats_and')}
        >
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map(topic => (
                    <LearnTopicCard
                        key={topic.page}
                        {...topic}
                        onClick={() => onNavigate(topic.page as Page)}
                    />
                ))}
            </div>
        </TechnicalPageLayout>
    );
};

export default CriticalIngredientsPage;
