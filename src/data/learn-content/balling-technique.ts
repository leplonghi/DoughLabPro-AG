import { LearnArticleData } from '@/types/learn';

export const ballingTechniqueData: LearnArticleData = {
    id: 'balling-technique',
    title: 'Balling (Staglio): The Physics of Surface Tension',
    subtitle: 'Why the way you shape your dough ball determines the quality of your final crust.',
    history: {
        heading: "The Art of Staglio",
        paragraphs: [
            "In Naples, the process of dividing and shaping dough balls is known as 'Staglio a mano'. Traditionally, this was done entirely by hand, with the pizzaiolo pinching off a piece of dough from the bulk mass (the 'mozzeratura' technique, similar to making mozzarella) and rolling it on the marble bench.",
            "This manual technique was passed down through generations of pizzaioli as a rite of passage. The speed and consistency of the staglio were marks of a master baker, ensuring that every pizza would be identical in size and fermentation.",
            "While mechanical dividers and rounders exist today, the hand-rolled ball remains the gold standard for artisan pizza. It is the only way to ensure the delicate gluten structure is preserved and the surface tension is perfectly set for the final rise."
        ]
    },
    sections: [
        {
            title: 'The "Skin" Effect',
            content: [
                'Balling is not just about making it round. It is about creating a "skin" of tension on the outer surface of the dough.',
                'This tight skin acts as a containment vessel. As the yeast produces gas during the final proof, the skin forces the expansion to happen UPWARDS (vertical rise) rather than OUTWARDS (flattening). It also pressurizes the internal gas bubbles, which contributes to explosive oven spring.'
            ]
        },
        {
            title: 'Sealing the Seam',
            content: [
                'The bottom of the ball (the seam) must be sealed tight. If the seam is open, gas will leak out the bottom, and the ball will lose pressure. It\'s like a balloon with a hole.',
                'A proper balling technique pulls the gluten matrix around the dough mass and pinches it shut at the bottom.'
            ]
        },
        {
            title: 'Gluten Alignment',
            content: [
                'The circular motion of balling aligns the gluten strands in a concentric pattern. This ensures that when you eventually stretch the pizza, it opens into a circle naturally. If the gluten is chaotic, the dough will be lopsided or tear in random spots.'
            ]
        }
    ],
    proTip: {
        content: 'The "Rest" Period. You cannot stretch a dough ball immediately after balling. The gluten is too tight (elastic). It needs to relax (typically 2-6 hours at room temp, or 24h cold) before it becomes extensible enough to open.'
    },
    criticalPoint: {
        content: 'Tearing the Skin. If you ball too aggressively, you will tear the outer surface (you\'ll see a rough, "shredded" texture). This destroys the gas retention capability. The skin must be smooth and taut, not ripped.'
    },
    references: [
        {
            title: 'The Pizza Bible',
            author: 'Tony Gemignani',
            year: '2014'
        },
        {
            title: 'Modernist Pizza',
            author: 'Nathan Myhrvold',
            year: '2021'
        }
    ]
};
