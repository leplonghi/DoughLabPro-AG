import React from 'react';
import BakingTopicPage from './BakingTopicPage';

const StarchGelatinizationPage: React.FC = () => {
    return (
        <BakingTopicPage
            title="Starch Gelatinization"
            subtitle="This is the internal setting phase that turns wet dough into a stable crumb instead of a gummy center."
            sections={[
                {
                    title: 'What gelatinization means',
                    body: (
                        <p>
                            As dough heats, starch granules absorb water and swell. This process helps lock structure into the crumb. Without enough internal heat, the dough may look baked outside while still feeling pasty or gummy inside.
                        </p>
                    ),
                },
                {
                    title: 'Why gum lines happen',
                    body: (
                        <p>
                            A gum line usually appears when the top zone stays too wet for too long. Heavy toppings, cold ingredients, or a weak oven floor prevent the dough beneath the sauce from reaching the temperature needed for proper starch setting.
                        </p>
                    ),
                },
                {
                    title: 'How to improve it',
                    body: (
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Reduce topping moisture and drain fresh cheese before baking.</li>
                            <li>Preheat longer so the baking surface drives heat deeper into the dough.</li>
                            <li>Match hydration to oven strength. Weak home ovens struggle with very wet doughs.</li>
                        </ul>
                    ),
                },
            ]}
        />
    );
};

export default StarchGelatinizationPage;
