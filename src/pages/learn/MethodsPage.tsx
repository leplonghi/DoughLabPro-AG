
import React from 'react';
import { Page } from '@/types';
import TechnicalPageLayout from './TechnicalPageLayout';
import LearnTopicCard from '@/components/learn/LearnTopicCard';
import { SunIcon, WrenchScrewdriverIcon, CubeIcon, SparklesIcon, FireIcon, BeakerIcon, ShieldCheckIcon, ClockIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

interface MethodsPageProps {
    onNavigate: (page: Page) => void;
}

const MethodsPage: React.FC<MethodsPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
    const topics = [
        { page: 'learn/article/autolyse', title: 'Autolyse', description: 'The passive rest technique for gluten development and extensibility.', icon: <ClockIcon className="h-8 w-8" /> },
        { page: 'learn/article/ambient-vs-cold', title: 'Ambient vs. Cold', description: 'A scientific comparison of fermentation methods.', icon: <SunIcon className="h-8 w-8" /> },
        { page: 'learn/article/mixing-techniques', title: 'Mixing Techniques', description: 'The science behind kneading, folding, and the Rubaud method.', icon: <WrenchScrewdriverIcon className="h-8 w-8" /> },
        { page: 'learn/article/balling-technique', title: 'Balling Science', description: 'How surface tension organizes gluten and retains gas.', icon: <CubeIcon className="h-8 w-8" /> },
        { page: 'learn/article/sensory-maturation', title: 'Sensory Maturation', description: 'The formation of complex aromas in long fermentations.', icon: <SparklesIcon className="h-8 w-8" /> },
        { page: 'learn/parbaking', title: 'Parbaking', description: 'The science and technique of parbaking and double baking.', icon: <FireIcon className="h-8 w-8" /> },
        { page: 'learn/article/preferments-overview', title: 'Preferments', description: 'The science and effects of Poolish, Biga, and Sourdough.', icon: <BeakerIcon className="h-8 w-8" /> },
        { page: 'learn/storage', title: 'Dough Storage', description: 'The science of storing dough to control fermentation and texture.', icon: <ShieldCheckIcon className="h-8 w-8" /> },
    ];

    return (
        <TechnicalPageLayout
            title={t('learn.techniques__methods')}
            subtitle={t('learn.master_kneading_folding_balling_preferments_and_te')}
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

export default MethodsPage;
