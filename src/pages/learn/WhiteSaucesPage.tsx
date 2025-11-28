
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { BookOpenIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';

const WhiteSaucesPage: React.FC = () => {
    return (
        <TechnicalPageLayout
            title="White Sauces & Emulsions"
            subtitle="The science of consistency in creamy pizza bases."
        >
            <LearnSection title="Introduction: Emulsion Chemistry">
                <p>White sauces, like béchamel or cheese-based creams, are emulsions — stable suspensions of fat in liquid (usually water or milk). Stability of this emulsion is key for a creamy sauce that behaves well in the oven, rather than "breaking" and releasing oil.</p>
            </LearnSection>
            <LearnSection title="Stable vs. Unstable Emulsions">
                <p>A <strong>stable emulsion</strong> is maintained by an emulsifying agent (like milk proteins in béchamel or lecithin in egg yolk). These agents prevent fat droplets from joining. An <strong>unstable emulsion</strong>, like a simple vinaigrette, separates quickly. Pizza sauces need stability to resist intense heat.</p>
            </LearnSection>
            <LearnSection title="Role of Dairy Fat">
                <p>Dairy fat (cream, butter, cheese) gives richness and flavor to white sauces. It also carries fat-soluble aromatic compounds. The challenge is keeping this fat emulsified. Starches (like flour in béchamel) and proteins help create a network trapping fat.</p>
            </LearnSection>
            <LearnSection title="Thermal Behavior in Oven">
                <p>Under oven heat, water in emulsion begins to evaporate, concentrating the sauce. At the same time, heat can destabilize the emulsion. A well-made sauce thickens and browns slightly (Maillard reaction of milk proteins), while a poorly made one separates.</p>
            </LearnSection>
            <LearnSection title="Risks of Separation ('Breaking')">
                <p>A white sauce "breaks" when emulsion fails and fat separates from liquid. This can happen due to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Excessive heat:</strong> Intense heat can denature proteins maintaining emulsion.</li>
                    <li><strong>Excess acid:</strong> Acidic ingredients can coagulate milk proteins, causing separation.</li>
                    <li><strong>Lack of emulsifying agent:</strong> Sauce lacks sufficient structure to keep fat suspended.</li>
                </ul>
            </LearnSection>
            <LearnSection title="Uses in Specific Pizzas">
                <p>White sauces are the base for "white pizzas". They offer a neutral creamy canvas pairing well with mushrooms, spinach, potatoes, or cured meats. In focaccias, an oil-water emulsion base is often used to maintain moisture and flavor.</p>
            </LearnSection>
            <LearnSection title="Technical References">
                <ul className="list-disc pl-5 space-y-2">
                    <li>"On Food and Cooking" by Harold McGee</li>
                    <li>Modernist Cuisine</li>
                    <li>Wikipedia (Emulsion, Bechamel Sauce)</li>
                </ul>
            </LearnSection>
        </TechnicalPageLayout>
    );
};

export default WhiteSaucesPage;
