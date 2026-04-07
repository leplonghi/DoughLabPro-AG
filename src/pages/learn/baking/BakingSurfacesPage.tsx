import React from 'react';
import BakingTopicPage from './BakingTopicPage';

const BakingSurfacesPage: React.FC = () => {
    return (
        <BakingTopicPage
            title="Baking Surfaces"
            subtitle="Stone, steel, biscotto, and pans each move heat differently and produce distinct crust structures."
            sections={[
                {
                    title: 'Steel vs stone',
                    body: (
                        <p>
                            Baking steel transfers heat much faster than stone, which is great for home ovens that struggle with bottom browning. Stone is gentler and more forgiving, making it useful for lean doughs or longer bakes where too much base heat could scorch before the top finishes.
                        </p>
                    ),
                },
                {
                    title: 'Biscotto and porous materials',
                    body: (
                        <p>
                            Porous refractory surfaces like biscotto absorb and release heat in a slower, steadier way. They are especially valued in high-heat pizza ovens because they reduce burning risk while still supporting oven spring during short bakes.
                        </p>
                    ),
                },
                {
                    title: 'Pan baking',
                    body: (
                        <p>
                            Pans add a fat-mediated fry effect and create more even contact across the dough bottom. They are ideal for styles like Detroit or grandma pies, where crisp edges and a structured, fried base are part of the final texture goal.
                        </p>
                    ),
                },
            ]}
        />
    );
};

export default BakingSurfacesPage;
