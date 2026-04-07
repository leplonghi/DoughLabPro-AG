import React from 'react';
import IngredientPageLayout from './IngredientPageLayout';
import { LearnSection } from '../LearnComponents';

const YeastsPage: React.FC = () => {
    return (
        <IngredientPageLayout
            title="Yeasts and Leavening Agents"
            description="How commercial yeast, sourdough cultures, and fermentation speed change gas production, flavor, and schedule control."
            category="Ingredients"
        >
            <LearnSection title="Commercial yeast">
                <p>
                    Instant dry yeast, active dry yeast, and fresh yeast all perform the same biological job: converting sugars into carbon dioxide, ethanol, and aromatic byproducts. The main differences are handling, speed, and hydration requirements.
                </p>
            </LearnSection>

            <LearnSection title="Sourdough cultures">
                <p>
                    Levain adds both wild yeast and acid-producing bacteria. That makes it slower and less predictable than commercial yeast, but also richer in flavor and more sensitive to temperature, flour choice, and feeding rhythm.
                </p>
            </LearnSection>

            <LearnSection title="Choosing the right tool">
                <ul className="list-disc pl-5 space-y-2">
                    <li>Use commercial yeast when you need reliable speed and a cleaner fermentation profile.</li>
                    <li>Use levain when flavor complexity, acidity, and fermentation character matter more than speed.</li>
                    <li>Use very small yeast doses for long cold ferments so the dough matures without racing past peak strength.</li>
                </ul>
            </LearnSection>
        </IngredientPageLayout>
    );
};

export default YeastsPage;
