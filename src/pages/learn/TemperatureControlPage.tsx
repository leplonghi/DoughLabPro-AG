
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { BeakerIcon, BookOpenIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';

// Local Section component for structuring content
const TemperatureControlPage: React.FC = () => {
  return (
    <TechnicalPageLayout
      title="Dough Temperature Control"
      subtitle="The most important concept for consistency in baking, qualitatively explained."
      showReferencesSection
    >
      <LearnSection title="1. Introduction: Temperature is Everything">
        <p>
          Temperature is the most influential variable in dough behavior. It regulates biochemical processes transforming flour and water into structure and flavor. Temperature determines:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Fermentation speed:</strong> Pacing gas production.</li>
          <li><strong>Gluten strength/extensibility:</strong> Influencing handling.</li>
          <li><strong>Enzymatic activity:</strong> Crucial for flavor and starch breakdown.</li>
          <li><strong>Final flavor:</strong> Modulating aromatic compounds.</li>
        </ul>
        <p>This concept is universal and applies to all baking forms, from pizza to artisan bread.</p>
      </LearnSection>

      <LearnSection title="2. DDT — Desired Dough Temperature">
        <p>
          DDT is the central concept. Per "Modernist Bread", it represents the <strong>target temperature dough should reach immediately after mixing</strong>. Hitting consistent DDT is key to predictability.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Controlling DDT means consistent fermentation start conditions regardless of weather.</li>
          <li>Main tool transforming baking from "feeling" to controlled science.</li>
        </ul>
      </LearnSection>

      <LearnSection title="3. Factors Influencing Dough Temp">
        <p>
          Final temp sums multiple heat sources. Manage each:
        </p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li><strong>Flour Temp:</strong> Usually room temp.</li>
          <li><strong>Water Temp:</strong> Easiest control factor. Use cold/warm water to adjust.</li>
          <li><strong>Room Temp:</strong> Heat exchange during mixing.</li>
          <li><strong>Friction Heat:</strong> Mechanical mixing generates heat.</li>
          <li><strong>Equipment Temp:</strong> Bowl/bench transfer heat.</li>
        </ol>
      </LearnSection>

      <LearnSection title="4. Friction: Heat of Movement">
        <p>
          Kneading introduces mechanical energy dissipating as heat.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Stiff low hydration doughs generate more friction heat.</li>
          <li>High speed mixers generate significant heat.</li>
          <li>Autolyse/rest reduces mechanical work needed, reducing friction heat.</li>
        </ul>
      </LearnSection>

      <LearnSection title="5. Temperature and Fermentation">
        <p>Direct relationship: temp governs yeast metabolism.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Warm doughs ferment faster.</strong> Yeast active, rapid CO₂.</li>
          <li><strong>Cold doughs ferment slower.</strong> Reduced activity, prolonged rise.</li>
          <li>In sourdough, temp influences yeast/LAB balance affecting flavor profile.</li>
        </ul>
      </LearnSection>

      <LearnSection title="6. Impact on Flavor">
        <p>Fermentation speed impacts flavor.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Long cold fermentations</strong> allow enzymes time to produce complex aromatics. Deep nuanced flavor.</li>
          <li><strong>Fast warm fermentations</strong> favor CO₂/ethanol. Clean simple flavor.</li>
        </ul>
      </LearnSection>

      <LearnSection title="7. Practical Control">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Adjust ingredient temp:</strong> Mainly water.</li>
          <li><strong>Control environment:</strong> Stable room temp if possible.</li>
          <li><strong>Fridge (Retard):</strong> Effective tool to slow fermentation for flavor.</li>
          <li><strong>Bench Rest:</strong> "Wakes up" cold dough.</li>
        </ul>
      </LearnSection>

      <LearnSection title="8. Risks of Uncontrolled Temp">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Too Hot:</strong> Uncontrolled fermentation, gas before flavor, gluten degradation.</li>
          <li><strong>Too Cold:</strong> Slow/inactive fermentation, dense heavy dough.</li>
          <li><strong>Sudden Changes:</strong> Stress gluten network.</li>
        </ul>
      </LearnSection>

      <LearnSection title="9. Technical References" icon={<BookOpenIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 space-y-2">
          <li>"Modernist Bread" (DDT)</li>
          <li>"Modernist Pizza"</li>
          <li>King Arthur Baking</li>
          <li>Wikipedia – Thermodynamics</li>
        </ul>
      </LearnSection>
    </TechnicalPageLayout>
  );
};

export default TemperatureControlPage;
