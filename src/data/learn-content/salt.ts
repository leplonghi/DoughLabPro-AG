import { LearnArticleData } from '@/types/learn';

export const saltData: LearnArticleData = {
    id: 'salt',
    title: 'Salt: The Ionic Controller of Dough',
    subtitle: 'More than just flavor: how Sodium Chloride (NaCl) regulates gluten structure and yeast metabolism.',
    history: {
        heading: "The Price of Flavor",
        paragraphs: [
            "Salt has always been precious. The word 'salary' comes from the Roman allowance for salt. In medieval Tuscany, heavy salt taxes led bakers to create 'Pane Toscano'—a completely salt-free bread that is still famous today for its blandness, designed to pair with salty cured meats and cheeses.",
            "Historically, salt was also the primary preservative. Before refrigeration, high-salt doughs were more stable and less prone to spoilage.",
            "In modern pizza making, we use salt not just for preservation, but as a precise control knob for fermentation speed and gluten structure, typically ranging from 2% to 3% in DoughLabPro formulas."
        ]
    },
    sections: [
        {
            title: 'Gluten Strengthening (Ionic Shielding)',
            content: [
                'Gluten proteins (gliadin and glutenin) carry electrical charges. Like magnets, similar charges repel each other, preventing the proteins from getting close enough to bond tightly.',
                'When salt dissolves into ions (Na+ and Cl-), these ions cluster around the charged parts of the proteins, "shielding" them. This reduces repulsion and allows the proteins to pack closer together, creating a stronger, tighter, and more stable gluten network.'
            ]
        },
        {
            title: 'Yeast Regulation (Osmotic Pressure)',
            content: [
                'Salt is hygroscopic—it loves water. In dough, it creates osmotic pressure that pulls water out of yeast cells.',
                'This slows down the yeast\'s metabolism (fermentation rate). Without salt, yeast would eat the sugar too fast, leading to a "wild" fermentation that is hard to control and results in a sticky, weak dough.'
            ]
        },
        {
            title: 'Antioxidant Properties',
            content: [
                'Salt inhibits the oxidation of pigments in the flour (carotenoids). This preserves the creamy, off-white color of the crumb and contributes to flavor retention. Unsalted breads often have a bleached, white crumb and lack aroma.'
            ]
        }
    ],
    proTip: {
        content: 'Delayed Salt Method. In very strong flours or difficult mixes, add salt 5 minutes after mixing starts. This allows the yeast to hydrate fully and start working before the salt "tightens" the gluten and slows everything down.'
    },
    criticalPoint: {
        content: 'The 1.8% - 3.0% Range. Never go below 1.8% salt (flavorless, weak dough). Be careful above 3.0% (yeast inhibition, too salty). Neapolitan pizza traditionally uses high salt (2.8-3.0%) to control fermentation at room temperature.'
    },
    references: [
        {
            title: 'Bread Science',
            author: 'Emily Buehler',
            year: '2006'
        },
        {
            title: 'The Art of Fermentation',
            author: 'Sandor Katz',
            year: '2012'
        },
        {
            title: 'Salt, Fat, Acid, Heat',
            author: 'Samin Nosrat',
            year: '2017'
        },
        {
            title: 'Salt: A World History',
            author: 'Mark Kurlansky',
            year: '2002'
        },
        {
            title: 'Technologie de la Boulangerie',
            author: 'Xavier Calvel',
            year: '2013'
        },
        {
            title: 'Journal of Food Engineering',
            author: 'Various Authors',
            year: '2015'
        }
    ]
};
