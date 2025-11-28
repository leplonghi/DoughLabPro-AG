import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { BookOpenIcon } from '../../components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';

const CrumbStructurePage: React.FC = () => {
    return (
        <TechnicalPageLayout
            title="Crumb Structure Science"
            subtitle="The physics of alveoli formation, gluten networks, and the quest for the perfect open crumb."
            showReferencesSection={true}
        >
            <div className="lead text-xl text-slate-600 mb-8 font-medium">
                The "crumb" is the internal cellular structure of baked bread. It is a fossilized record of the fermentation and baking process, revealing the health of the gluten network, the intensity of fermentation, and the skill of the baker.
            </div>

            <LearnKeyTakeaway>
                <strong>Core Concept:</strong> Alveoli (gas bubbles) are <em>not</em> created by yeast. Yeast only inflates existing microscopic air bubbles incorporated during mixing. Therefore, the mixing stage is the "birth" of your crumb structure.
            </LearnKeyTakeaway>

            <LearnSection title="1. The Physics of the Gluten Network">
                <p>
                    The foundation of crumb structure is the gluten network. Wheat flour contains two primary proteins: <strong>glutenin</strong> (responsible for elasticity/strength) and <strong>gliadin</strong> (responsible for extensibility/stretch).
                </p>
                <p className="mt-4">
                    When hydrated and agitated, these proteins cross-link to form a viscoelastic web. This web must be strong enough to retain gas (CO₂) but extensible enough to expand without tearing.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li><strong>Elasticity:</strong> Allows the dough to hold its shape and trap gas under pressure.</li>
                    <li><strong>Extensibility:</strong> Allows the dough to expand like a balloon as gas pressure increases.</li>
                </ul>
            </LearnSection>

            <LearnSection title="2. Alveoli Formation & Nucleation">
                <p>
                    A common misconception is that yeast creates the bubbles in bread. In reality, yeast produces CO₂, which diffuses into <strong>nucleation sites</strong>—microscopic air pockets trapped in the dough during the mixing process.
                </p>
                <p className="mt-4">
                    If you mixed dough in a vacuum, it would not rise, regardless of yeast activity. The size, distribution, and number of these initial air pockets determine the potential of your final crumb.
                </p>
            </LearnSection>

            <LearnSection title="3. The Impact of Mixing">
                <p>
                    Mixing is the most critical variable for crumb texture. It defines the "grain" of the bread.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Undermixing</h4>
                        <p className="text-sm">Weak gluten network. Gas escapes easily. Result: Dense, heavy crumb with irregular, often flat shape.</p>
                    </div>
                    <div className="bg-lime-50 p-4 rounded-lg border border-lime-200">
                        <h4 className="font-bold text-slate-900 mb-2">Optimal Mixing</h4>
                        <p className="text-sm">Strong, extensible network. Traps gas efficiently. Result: Open, airy crumb with thin cell walls (the "windowpane" stage).</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Overmixing</h4>
                        <p className="text-sm">Gluten bonds shatter (oxidation). Dough becomes sticky and slack. Result: Gummy, dense crumb with a greyish hue.</p>
                    </div>
                </div>
            </LearnSection>

            <LearnSection title="4. Hydration and Cell Wall Thickness">
                <p>
                    Water acts as a plasticizer. Higher hydration (70%+) allows gluten strands to slide past each other more easily, enabling thinner cell walls and larger alveoli.
                </p>
                <p className="mt-4">
                    <strong>Low Hydration (60%):</strong> Tighter network, smaller bubbles, uniform "sandwich bread" crumb.<br />
                    <strong>High Hydration (75%+):</strong> Extensible network, large irregular bubbles, "wild" open crumb.
                </p>
            </LearnSection>

            <LearnSection title="5. Fermentation Dynamics">
                <p>
                    As yeast produces CO₂, the pressure inside the alveoli increases.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li><strong>Underproofed:</strong> "Fool's Crumb." Large, cavernous holes surrounded by dense, gummy dough. Caused by insufficient gas production to inflate the smaller alveoli.</li>
                    <li><strong>Overproofed:</strong> The gluten network degrades due to acidity (protease activity) and excessive expansion. The structure collapses, leading to a flat loaf with a dense, uniform crumb.</li>
                </ul>
            </LearnSection>

            <div className="mt-12 border-t border-slate-200 pt-8">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpenIcon className="h-5 w-5 text-lime-600" />
                    References & Further Reading
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                    <li>• <em>Modernist Bread</em>, Nathan Myhrvold (2017) - Vol 3: Structure and Physics.</li>
                    <li>• <em>Bread Science: The Chemistry and Craft of Making Bread</em>, Emily Buehler (2006).</li>
                    <li>• King Arthur Baking Company, "Gluten Development and Mixing".</li>
                    <li>• Serious Eats, "The Science of Dough".</li>
                    <li>• Journal of Cereal Science, "Gas Retention in Wheat Dough".</li>
                </ul>
            </div>
        </TechnicalPageLayout>
    );
};

export default CrumbStructurePage;
