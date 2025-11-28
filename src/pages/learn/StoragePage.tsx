
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { BeakerIcon, BookOpenIcon, ShieldCheckIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';

// Local Section component for structuring content
const StoragePage: React.FC = () => {
  return (
    <TechnicalPageLayout
      title="Technical Dough Storage"
      subtitle="The science of storing dough to control fermentation, preserve texture, and ensure safety."
      showReferencesSection={false} // Custom references section at the end
    >
      <LearnSection title="1. Introduction: Storage as Control Tool">
        <p>
          Proper dough storage is an active tool modulating final result, influencing:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Fermentation speed/profile</strong> via temperature/oxygen.</li>
          <li><strong>Texture/surface hydration</strong> preventing drying.</li>
          <li><strong>Flavor development</strong> via stable environment.</li>
          <li><strong>Safety/Hygiene</strong> preventing contamination.</li>
          <li><strong>Gluten stability</strong> maintaining gas retention.</li>
        </ul>
      </LearnSection>

      <LearnSection title="2. Adequate Containers" icon={<ShieldCheckIcon className="h-5 w-5" />}>
        <p>
          Container choice is first defense line.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Clean airtight containers</strong> prevent contamination.</li>
          <li>Individual boxes or dividers <strong>prevent drying and sticking</strong>.</li>
          <li>Must have <strong>space for expansion</strong>. Inadequate space collapses gas structure.</li>
        </ul>
      </LearnSection>

      <LearnSection title="3. Air Contact: Surface Enemy">
        <p>
          Direct air exposure harms dough surface.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Air <strong>dehydrates surface</strong> creating dry skin losing elasticity causing tearing.</li>
          <li>Oxygen contact leads to <strong>surface oxidation</strong> affecting flavor/color.</li>
        </ul>
      </LearnSection>

      <LearnSection title="4. Internal Humidity Control">
        <p>Maintain humidity balance.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Closed boxes retain natural moisture</strong> creating stable microclimate.</li>
          <li>Traditional damp cloth offers less protection.</li>
          <li><strong>Excess humidity causes condensation</strong> making surface sticky.</li>
        </ul>
      </LearnSection>

      <LearnSection title="5. Contamination: Real Risks">
        <p>Dough is ideal culture medium.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Environmental molds</strong> can settle on unprotected dough.</li>
          <li><strong>Bacteria</strong> from dirty surfaces compete with yeast.</li>
          <li>Dough absorbs odors. Store away from strong smells (onion/fish).</li>
        </ul>
      </LearnSection>

      <LearnSection title="6. Storage During Cold Fermentation">
        <p>Refrigerated storage requires care.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Low temp slows yeast</strong> but allows slow enzyme action developing flavor.</li>
          <li>Cold moist fridge makes <strong>clean sealed containers</strong> vital.</li>
        </ul>
      </LearnSection>

      <LearnSection title="7. Post-Balling Storage">
        <p>Preserve individual ball structure.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Maintain <strong>shape and surface tension</strong>.</li>
          <li><strong>Avoid stacking/squashing</strong> destroying gas structure.</li>
          <li>Each ball needs space to expand without touching.</li>
        </ul>
      </LearnSection>

      <LearnSection title="8. Common Improper Storage Risks">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Dried dough:</strong> Surface tears, hard crust. Cause: bad seal/air exposure.</li>
          <li><strong>Sticky dough:</strong> Hard to handle. Cause: condensation.</li>
          <li><strong>Strong alcohol smell:</strong> Uncontrolled anaerobic fermentation.</li>
        </ul>
      </LearnSection>

      <LearnSection title="9. Technical References" icon={<BookOpenIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 space-y-2">
          <li>Modernist Pizza</li>
          <li>Modernist Bread</li>
          <li>King Arthur Baking – Storage Guides</li>
          <li>Ooni Learn – Storing Dough</li>
          <li>Wikipedia – Food safety microbiology</li>
        </ul>
      </LearnSection>
    </TechnicalPageLayout>
  );
};

export default StoragePage;
