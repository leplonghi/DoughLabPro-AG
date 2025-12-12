// Force rebuild
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { BookOpenIcon, GlobeAltIcon, FireIcon, SparklesIcon, BeakerIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

// Local Section component for structuring content
const StyleGuidePage: React.FC = () => {
  const { t } = useTranslation();
    return (
        <TechnicalPageLayout
            title={t('learn.dough_style_guide')}
            subtitle="A conceptual, historical, and scientific description of major dough styles, focusing on structural and textural characteristics."
            showReferencesSection={false} // Custom references section at the end
        >
            <LearnSection title="1. Pizza Napoletana (AVPN – Conceptual Version)" icon={<FireIcon className="h-5 w-5" />}>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.dough_2')}</strong> Extremely soft and extensible, designed to be opened by hand.</li>
                    <li><strong>Rim (Cornicione):</strong> The most iconic feature. It is puffed, airy, with irregular alveoli and typical leopard spots ("leoparding") due to rapid, intense baking.</li>
                    <li><strong>{t('learn.baking_2')}</strong> Extremely fast, in wood-fired ovens with extremely high temperatures. Pizza cooks in seconds, resulting in unique texture.</li>
                    <li><strong>{t('learn.flavor')}</strong> Delicate and balanced, centered on high quality of the tomato-mozzarella-basil trio.</li>
                    <li><strong>{t('learn.structure')}</strong> Center is very thin and wet, almost "soupy", making the slice soft and elastic, meant to be folded and eaten.</li>
                    <li><strong>{t('learn.oven_floor')}</strong> Requires a floor with low thermal conductivity (like clay "biscotto") so base bakes perfectly without burning.</li>
                </ul>
            </LearnSection>

            <LearnSection title="2. New York Style" icon={<SparklesIcon className="h-5 w-5" />}>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.base')}</strong> Firmer and wider, resulting in large, structured slices.</li>
                    <li><strong>{t('learn.rim')}</strong> Crispy outside, but soft and chewy inside.</li>
                    <li><strong>{t('learn.sauce')}</strong> Usually a cooked and seasoned tomato sauce, with a deeper flavor profile.</li>
                    <li><strong>{t('learn.cheese')}</strong> Predominantly low-moisture mozzarella, melting evenly and releasing less water.</li>
                    <li><strong>{t('learn.baking_3')}</strong> Longer and at more moderate temperatures than Neapolitan, typically in gas deck ovens.</li>
                    <li><strong>{t('learn.main_feature')}</strong> The "foldable slice", allowing large slices to be eaten with one hand.</li>
                </ul>
            </LearnSection>

            <LearnSection title="3. Roman (Pala and Teglia)" icon={<BookOpenIcon className="h-5 w-5" />}>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.dough_3')}</strong> Very high extensibility and hydration, resulting in extremely light and airy texture.</li>
                    <li><strong>{t('learn.crumb')}</strong> Characterized by very large and irregular alveoli.</li>
                    <li><strong>{t('learn.baking_4')}</strong> Can be double-baked or prolonged, seeking maximum crispness development.</li>
                    <li><strong>{t('learn.crispness')}</strong> The main feature. The base is notably crunchy ("scrocchiarella").</li>
                    <li><strong>{t('learn.flour')}</strong> Commonly uses very strong flours to support high hydration and long fermentations.</li>
                    <li><strong>{t('learn.tradition')}</strong> A pillar of contemporary Roman baking, sold in bakeries ("forni") by weight.</li>
                </ul>
            </LearnSection>

            <LearnSection title="4. Detroit Style" icon={<BeakerIcon className="h-5 w-5" />}>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.baking_pan')}</strong> Baked in rectangular steel pans, which conduct heat intensely.</li>
                    <li><strong>Cheese Crust (t('learn.frico')):</strong> The trademark of the style. Cheese is spread to the pan edges, creating a caramelized and crispy wall.</li>
                    <li><strong>{t('learn.dough_4')}</strong> Higher and airier, with a fluffy and soft texture, similar to focaccia.</li>
                    <li><strong>{t('learn.inverted_assembly')}</strong> Sauce is applied in stripes on top of cheese ("red stripes"), protecting dough from excess moisture.</li>
                    <li><strong>{t('learn.final_texture')}</strong> A crispy, almost fried base, soft interior, and ultra-crispy cheese edges.</li>
                </ul>
            </LearnSection>

            <LearnSection title="5. Focaccia / Pan Dough">
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.dough_5')}</strong> High with a spongy and open crumb structure.</li>
                    <li><strong>{t('learn.texture')}</strong> Soft and moist inside, with base and surface golden from oil.</li>
                    <li><strong>{t('learn.baking_5')}</strong> Slower and at moderate temperatures to ensure interior cooks completely.</li>
                    <li><strong>{t('learn.oily_base')}</strong> Generous use of olive oil in the pan is fundamental for texture and flavor, lightly frying the base.</li>
                    <li><strong>{t('learn.use_3')}</strong> Robust structure is ideal for supporting heavier and wetter toppings.</li>
                </ul>
            </LearnSection>

            <LearnSection title="6. Chicago Style (Technical Summary)">
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.pie_structure')}</strong> Closer to a savory pie than a flat pizza.</li>
                    <li><strong>{t('learn.dough_6')}</strong> Dough forms a high wall and contains fat (butter or oil), giving it a rich, biscuit-like texture.</li>
                    <li><strong>{t('learn.inverted_layers')}</strong> Assembly is done in reverse order (cheese on base, fillings in middle, sauce on top) to protect ingredients during long bake time.</li>
                    <li><strong>{t('learn.baking_6')}</strong> Very long and at low temperature to cook large amount of filling without burning dough.</li>
                </ul>
            </LearnSection>

            <LearnSection title="7. Thermal Considerations by Style">
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.high_temperature')}</strong> styles (like Neapolitan) depend on <strong>intense radiant heat</strong> from oven ceiling to cook top and puff rim quickly.</li>
                    <li><strong>{t('learn.home_oven')}</strong> styles (like adapted NY Style or Detroit) depend more on <strong>heat conduction</strong> from a good surface (steel or pan) and <strong>convection</strong> (circulating hot air) to cook dough over a longer period.</li>
                </ul>
            </LearnSection>

            <LearnSection title="8. Technical References" icon={<BookOpenIcon className="h-5 w-5" />}>
                <ul className="list-disc pl-5 space-y-2">
                    <li>{t('learn.modernist_pizza__nathan_myhrvold__francisco_migoya_2')}</li>
                    <li>Associazione Verace Pizza Napoletana (AVPN) – Official disciplinare</li>
                    <li>{t('learn.historical_and_culinary_records_on_pizza_evolution')}</li>
                    <li>Historical pizzerias like Lombardi's (NY), Forno Campo de' Fiori (Rome), and Buddy's (Detroit).</li>
                </ul>
            </LearnSection>
        </TechnicalPageLayout>
    );
};

export default StyleGuidePage;
