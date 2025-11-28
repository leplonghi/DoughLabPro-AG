import { LearnArticleData } from '@/types/learn';

export const curedMeatsData: LearnArticleData = {
    id: 'cured-meats',
    title: 'Cured Meats: The Science of Preservation & Umami',
    subtitle: 'Understanding water activity (aw), protein hydrolysis, and the behavior of lipids under high heat.',
    history: {
        heading: "Survival Food to Delicacy",
        paragraphs: [
            "Curing meat was originally a survival necessity. Before refrigeration, salting and drying were the only ways to preserve the harvest of a pig slaughter through the winter. Every region in Italy developed its own specific style of salumi based on the local climate and available spices.",
            "What began as peasant food evolved into a high-status delicacy. The specific microclimates of regions like Parma (for Prosciutto) or Calabria (for spicy Nduja) became legendary, with production methods protected by law (DOP).",
            "On pizza, cured meats provide a concentrated burst of savory intensity. Understanding the history of a meat—whether it's a smoky American pepperoni or a delicate Italian speck—helps you respect its flavor profile and decide whether to cook it or serve it raw."
        ]
    },
    sections: [
        {
            title: 'The Curing Mechanism',
            content: [
                'Curing is primarily a method of dehydration. By adding salt (and often nitrates/nitrites), we lower the water activity (aw) of the meat, making it inhospitable to spoilage bacteria.',
                'This process also concentrates flavor. As water leaves, the relative proportion of proteins, fats, and minerals increases, creating an ingredient with significantly higher flavor intensity per gram than fresh meat.'
            ]
        },
        {
            title: 'Lipid Rendering & The "Cup" Effect',
            content: [
                'Cured meats are often high in fat. In a high-heat pizza oven, this fat renders (melts) rapidly. This liquid fat acts as a frying medium for the lean protein parts of the meat, creating crispy edges.',
                'The "cupping" of pepperoni is a result of differential shrinkage. The casing (or collagen-rich exterior) shrinks faster than the interior, and the heat differential between the top (exposed) and bottom (insulated) forces the slice to curl upwards.'
            ]
        },
        {
            title: 'Glutamate Concentration (Umami)',
            content: [
                'Long-cured meats like Prosciutto di Parma or Jamón Ibérico undergo enzymatic proteolysis during aging. Enzymes break down proteins into free amino acids, including glutamic acid.',
                'This free glutamate triggers the Umami receptors on the tongue, providing a savory depth that anchors the lighter flavors of cheese and dough.'
            ]
        },
        {
            title: 'Post-Bake vs. Pre-Bake',
            content: [
                'Delicate cured meats (Prosciutto, Culatello) should almost always be added POST-bake. Their fat melting point is low, and high oven heat will destroy their delicate volatile aromas and make them overly salty.',
                'Robust cured meats (Pepperoni, Salami, Pancetta) benefit from baking, as the fat rendering and Maillard reaction on the meat surface add texture and flavor complexity.'
            ]
        }
    ],
    proTip: {
        content: 'If using a very fatty cured meat (like Guanciale), consider sweating it in a pan beforehand and using the rendered fat to brush the cornicione (crust) of the pizza before baking. This infuses the entire pie with flavor.'
    },
    criticalPoint: {
        content: 'Salt Saturation. Cured meats are 3–5% salt by weight. If you load a pizza with pepperoni and prosciutto, you must adjust your dough or sauce salinity downwards, or the final product will be unpalatably salty.'
    },
    references: [
        {
            title: 'Modernist Cuisine: The Art and Science of Cooking',
            author: 'Nathan Myhrvold',
            year: '2011'
        },
        {
            title: 'Salumi: The Craft of Italian Dry Curing',
            author: 'Michael Ruhlman',
            year: '2012'
        }
    ]
};
