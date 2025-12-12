import React from 'react';
import IngredientPageLayout from './IngredientPageLayout';
import { BookOpenIcon, SparklesIcon, BeakerIcon, FireIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from '../LearnComponents';
import { useTranslation } from '@/i18n';

const Section: React.FC<{ title: string, icon?: React.ReactNode, children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="mt-8">
    <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-3">
      {icon}
      {title}
    </h3>
    <div className="prose-sm max-w-none text-slate-900 leading-relaxed">
      {children}
    </div>
  </div>
);

const CheesesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IngredientPageLayout
      title={t('learn.cheese_on_pizza')}
      description="A technical analysis of the ingredient that defines pizza. Understand the science behind melting, stretch, and flavor to make precise choices."
      category={t('learn.ingredients')}
    >
      <LearnSection title={t('learn.introduction_the_sensitive_chemistry_of_cheese')}>
        <p>
          Cheese is a heat-sensitive ingredient and a complex system composed of water, fat, proteins (mainly caseins), minerals, and volatile aromatic compounds. The exact proportion of these components, as detailed in sources like "Modernist Pizza," determines cheese behavior in the oven, including:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.melting')}</strong> Fluidity acquired with heat.</li>
          <li><strong>{t('learn.stretch')}</strong> Ability to form characteristic elastic strands.</li>
          <li><strong>{t('learn.browning')}</strong> Ability to brown and develop color and flavor.</li>
          <li><strong>{t('learn.oilout')}</strong> Separation of fat from protein matrix.</li>
          <li><strong>{t('learn.flavor_and_aroma')}</strong> Intensity and aromatic profile released during baking.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.chemical_fundamentals_of_cheese_behavior')} icon={<BeakerIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.melting')}</strong> occurs when fat, emulsified in protein matrix, liquifies with heat, and casein networks begin to break down, allowing cheese to flow.</li>
          <li><strong>{t('learn.water_content')}</strong> acts as lubricant for proteins, crucial for elasticity. Cheeses with ideal moisture (like mozzarella) stretch well, while dry cheeses break.</li>
          <li><strong>{t('learn.fat')}</strong> not only carries most flavor but influences "oil-out". Fatty cheeses tend to release more oil on surface.</li>
          <li><strong>{t('learn.aged')}</strong> cheeses undergo process where enzymes break proteins and fats into smaller, more aromatic compounds, resulting in much more intense and complex flavor.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.technical_properties_of_common_cheeses')}>
        <h4>a) Mozzarella Fior di Latte (Cow)</h4>
        <p>High moisture and casein structure giving excellent elasticity and even melt. Flavor is mild and milky, serving as perfect base not overpowering other ingredients. Low tendency to "oil-out".</p>

        <h4>b) Buffalo Mozzarella</h4>
        <p>With even higher moisture content, melts more irregularly, creating creamy "pools". Releases significant water, ideal for very hot, fast ovens (per AVPN rules), where evaporation is instant. Flavor is richer and more complex than fior di latte.</p>

        <h4>c) Provolone</h4>
        <p>More aged cheese, resulting in lower moisture and higher salinity. Melt is less fluid and elasticity lower than mozzarella. Adds stronger, sharp, or smoked flavor.</p>

        <h4>d) Parmesan / Grana Padano</h4>
        <p>Hard, long-aged, low-moisture cheeses. Do not "melt" in traditional sense; instead, "sweat" fat and brown. Main function is adding deep umami flavor and salinity, ideal for post-oven finishing.</p>

        <h4>e) Gorgonzola</h4>
        <p>Like other blue cheeses, has intense, pungent flavor due to mold action (Penicillium). High fat ensures creamy melt. Famous for contrast with sweet ingredients (honey or fig), a documented combination in modern gastronomy.</p>

        <h4>f) Regional Cheeses (Qualitative Analysis)</h4>
        <p>Consider local cheeses based on moisture and fat. Medium-cured cheeses offer mild notes and good browning but less elasticity. Standard semi-soft cheeses melt creamier but release more whey. Firm grilling cheeses (like Halloumi/Coalho) soften and brown but maintain shape without melting or stretching.</p>
      </LearnSection>

      <LearnSection title={t('learn.the_oilout_phenomenon')} icon={<BeakerIcon className="h-5 w-5" />}>
        <p>"Oil-out" occurs when fat emulsion in cheese protein matrix breaks under heat, causing fat to separate and rise to surface. High-fat cheeses (like cheddar and provolone) are more prone. Risk increases with long baking times or very high temperatures giving fat time and energy to separate.</p>
      </LearnSection>

      <LearnSection title={t('learn.browning_maillard_reaction_in_cheese')} icon={<FireIcon className="h-5 w-5" />}>
        <p>Cheese browning depends on Maillard Reaction requiring amino acids and reducing sugars (lactose). Lower moisture cheeses brown faster because surface dries and reaches reaction temperature quicker. Very wet cheeses like ricotta release steam, keeping surface "cool" (near 100°C) preventing effective browning.</p>
      </LearnSection>

      <LearnSection title={t('learn.classic_and_documented_blends')} icon={<BookOpenIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.mozzarella__provolone')}</strong> Flavor base of many NY-style pizzas, combining mozzarella texture with sharper provolone flavor.</li>
          <li><strong>{t('learn.mozzarella__parmesan')}</strong> Italian and Italian-American classic. Mozzarella offers creamy base, parmesan adds salty umami finish.</li>
          <li><strong>{t('learn.traditional_four_cheese')}</strong> Classic combo usually includes Mozzarella (base), Gorgonzola (sharp), Provolone (smoked/sharp), and Parmesan (salty/umami).</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.risks_and_practical_care')}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.excess_cheese')}</strong> Too thick cheese layer acts as thermal insulator preventing heat reaching dough and sauce, resulting in "gum line".</li>
          <li><strong>{t('learn.too_much_moisture')}</strong> Fresh cheeses like fior di latte or buffalo must be well drained and dried before use to avoid soggy pizza.</li>
          <li><strong>{t('learn.hard_cheeses_in_oven')}</strong> Cheeses like parmesan and pecorino aren't made to melt. If baked too long, they burn and turn bitter. Use for post-oven finishing.</li>
        </ul>
      </LearnSection>
    </IngredientPageLayout>
  );
};

export default CheesesPage;
