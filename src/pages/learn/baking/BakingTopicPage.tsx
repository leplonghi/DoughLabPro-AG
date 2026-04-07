import React from 'react';
import TechnicalPageLayout from '../TechnicalPageLayout';
import { LearnSection } from '../LearnComponents';

interface BakingTopicPageProps {
    title: string;
    subtitle: string;
    sections: Array<{
        title: string;
        body: React.ReactNode;
    }>;
}

const BakingTopicPage: React.FC<BakingTopicPageProps> = ({ title, subtitle, sections }) => {
    return (
        <TechnicalPageLayout title={title} subtitle={subtitle}>
            {sections.map((section) => (
                <LearnSection key={section.title} title={section.title}>
                    {section.body}
                </LearnSection>
            ))}
        </TechnicalPageLayout>
    );
};

export default BakingTopicPage;
