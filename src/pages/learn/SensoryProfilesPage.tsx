
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { BookOpenIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';

const SensoryProfilesPage: React.FC = () => {
    return (
        <TechnicalPageLayout
            title="Sensory Profiles in Pizza"
            subtitle="How umami, fat, acidity, sweetness, and crunch balance to create perfect experience."
            showReferencesSection
        >
            <LearnSection title="Balance of Fundamental Tastes">
                <p>Successful pizza is symphony of flavors and textures. Secret isn't single ingredient but harmonious balance between fundamental tastes. Successful combo stimulates different palate parts simultaneously creating complex satisfying experience.</p>
            </LearnSection>
            <LearnSection title="Umami: Taste of Satisfaction">
                <p>Umami, or "fifth taste", is savory depth flavor associated with glutamates. In pizza, umami is naturally present in key ingredients:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Ripe Tomatoes:</strong> Especially when cooked concentrate glutamates.</li>
                    <li><strong>Aged Cheeses:</strong> Parmesan is one of richest natural sources.</li>
                    <li><strong>Mushrooms:</strong> Particularly when cooked release earthy umami rich flavor.</li>
                    <li><strong>Cured Meats:</strong> Curing process breaks proteins releasing glutamates.</li>
                </ul>
            </LearnSection>
            <LearnSection title="Fat as Flavor Vehicle">
                <p>Fat from cheese, oil, and meats is essential. It adds richness and pleasant mouthfeel and acts as solvent for many aromatic compounds carrying and distributing flavor throughout pizza.</p>
            </LearnSection>
            <LearnSection title="Acidity for Contrast and Cleansing">
                <p>Acidity is necessary counterpoint to fat. Tomato sauce acid "cuts" cheese richness cleansing palate preventing cloying pizza. Ingredients like pickles or olives can also add bright acidic note.</p>
            </LearnSection>
            <LearnSection title="Natural Sweetness for Balance">
                <p>Sweetness, even subtle, is crucial balancing salt and acidity. Can come from natural caramelization of onion/pepper, tomato sugar concentration in cooked sauce, or intentional additions like honey drizzle contrasting salty cheese.</p>
            </LearnSection>
            <LearnSection title="Crunch as Texture Element">
                <p>Pizza experience isn't just flavor but texture. Contrast between crispy base, soft melted cheese, and firmness of cured meat is fundamental. Crunch adds auditory and tactile dimension making experience interesting.</p>
            </LearnSection>
            <LearnSection title="Technical References">
                <ul className="list-disc pl-5 space-y-2">
                    <li>"The Flavor Bible" by Karen Page and Andrew Dornenburg</li>
                    <li>"On Food and Cooking" by Harold McGee</li>
                    <li>Modernist Cuisine</li>
                </ul>
            </LearnSection>
        </TechnicalPageLayout>
    );
};

export default SensoryProfilesPage;
