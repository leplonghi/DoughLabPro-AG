import React from 'react';
import BakingTopicPage from './BakingTopicPage';

const BakingProfilesPage: React.FC = () => {
    return (
        <BakingTopicPage
            title="Baking Profiles"
            subtitle="How heat intensity, bake length, and oven balance shape crust color, crumb dryness, and topping behavior."
            sections={[
                {
                    title: 'What a baking profile really is',
                    body: (
                        <p>
                            A baking profile is the combination of floor heat, top heat, and total bake duration. High top heat favors leopard spotting and fast evaporation, while stronger bottom heat drives oven spring and base setting. The best profile depends on dough hydration, thickness, cheese load, and the target crust style.
                        </p>
                    ),
                },
                {
                    title: 'How to read your results',
                    body: (
                        <ul className="list-disc pl-5 space-y-2">
                            <li>A pale top with a dark base usually means conduction is outrunning radiation.</li>
                            <li>A blonde base with wet crumb often means the oven floor or steel is underpowered.</li>
                            <li>Fast coloring with weak expansion can point to too much top heat before the dough has time to set.</li>
                        </ul>
                    ),
                },
                {
                    title: 'Practical adjustment strategy',
                    body: (
                        <p>
                            Change one variable at a time. Raise top heat to improve color, extend preheat to strengthen the floor, or reduce topping moisture before touching dough formula. A stable baking profile makes every later dough change easier to interpret.
                        </p>
                    ),
                },
            ]}
        />
    );
};

export default BakingProfilesPage;
