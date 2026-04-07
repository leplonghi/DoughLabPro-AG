import React from 'react';
import BakingTopicPage from './BakingTopicPage';

const CrustFormationPage: React.FC = () => {
    return (
        <BakingTopicPage
            title="Crust Formation"
            subtitle="Crust forms when moisture leaves the surface and browning reactions finally outrun steaming."
            sections={[
                {
                    title: 'The first stage',
                    body: (
                        <p>
                            Early in the bake, the dough surface stays relatively cool because energy is being spent evaporating water. This is why wet sauces, cold cheese, and overloaded toppings delay browning so dramatically.
                        </p>
                    ),
                },
                {
                    title: 'When browning starts',
                    body: (
                        <p>
                            Once the surface dries enough, Maillard reactions and caramelization begin to dominate. Protein availability, residual sugars, and oven intensity all influence whether the crust develops a golden toastiness or stays pale and dull.
                        </p>
                    ),
                },
                {
                    title: 'What weakens crust quality',
                    body: (
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Excess surface moisture from sauce, cheese, or vegetables.</li>
                            <li>Insufficient fermentation, which limits available sugars and gas structure.</li>
                            <li>Low top heat that never lets the upper surface finish drying and coloring.</li>
                        </ul>
                    ),
                },
            ]}
        />
    );
};

export default CrustFormationPage;
