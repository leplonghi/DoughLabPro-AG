import { LearnArticleData } from '@/types/learn';

export const ambientVsColdFermentationData: LearnArticleData = {
    id: 'ambient-vs-cold-fermentation',
    title: 'Ambient vs. Cold Fermentation: The Thermodynamics of Dough',
    subtitle: 'How temperature dictates enzymatic activity, yeast metabolism, and the final sensory profile of your pizza.',
    history: {
        heading: "The Refrigerator Revolution",
        paragraphs: [
            "Before the invention of mechanical refrigeration, all dough was 'ambient' dough. Bakers had to adjust their yeast (or sourdough) quantities daily based on the weather. A hot summer day meant using less starter; a cold winter night meant using more.",
            "The introduction of commercial refrigeration allowed bakers to decouple the mixing schedule from the baking schedule. This 'retarding' process was initially a logistical convenience—allowing bakers to sleep while the dough proofed slowly—but it was soon discovered to vastly improve the quality of the bread.",
            "DoughLabPro gives you the power to calculate precise fermentation schedules for both methods, or a hybrid of the two, ensuring you're never at the mercy of the weather again."
        ]
    },
    sections: [
        {
            title: 'The Kinetic Theory of Dough',
            content: [
                'Temperature is the master variable in baking. According to the Arrhenius equation, for every 10°C increase in temperature, the rate of chemical reactions roughly doubles. In dough, this applies to yeast metabolism (CO₂ production) and enzymatic activity.',
                'Ambient fermentation (typically 20°C–25°C) places yeast in its optimal metabolic zone. The "Log Phase" of growth is rapid, producing gas quickly. This results in a dough that rises fast but often lacks complex flavor development, as the yeast consumes sugars before enzymes have time to break down proteins and starches into flavor precursors.'
            ]
        },
        {
            title: 'Cold Fermentation (Retarding)',
            content: [
                'Cold fermentation (typically 4°C–6°C) deliberately slows down yeast activity. At these temperatures, yeast enters a dormant or slow-metabolic state. However, enzymes like protease and amylase remain relatively active.',
                'This differential inhibition is the secret to flavor. While yeast sleeps, enzymes continue to break down gluten into amino acids (flavor) and starch into simple sugars (crust color). When the dough is finally baked, these accumulated precursors fuel a supercharged Maillard reaction.'
            ]
        },
        {
            title: 'Flavor Profile Divergence',
            content: [
                'Ambient doughs tend to have a "yeasty" or "boozy" profile due to rapid ethanol production. They are simple and direct.',
                'Cold fermented doughs develop "bready," "nutty," and "sour" notes. The accumulation of organic acids (acetic and lactic) creates a complex pH landscape that adds depth to the final product.'
            ]
        },
        {
            title: 'Structural Consequences',
            content: [
                'Cold fermentation acts as a natural dough conditioner. The extended protease activity slowly clips gluten bonds, increasing extensibility. This is why cold-fermented dough opens so easily without snapping back (elasticity).',
                'Ambient doughs, being younger, often retain more elasticity and can be harder to stretch thinly without tearing.'
            ]
        }
    ],
    proTip: {
        content: 'The "Hybrid Method" often yields the best results: 2–4 hours at ambient temperature to kickstart yeast activity, followed by 24–72 hours in the fridge for enzymatic maturation. This gives you the volume of ambient with the flavor of cold.'
    },
    criticalPoint: {
        content: 'Avoid the "Dead Zone" (8°C–15°C) if possible. In this range, yeast is too active for long storage but too slow for a predictable rise, often leading to over-proofed, acidic doughs that collapse in the oven.'
    },
    references: [
        {
            title: 'Modernist Pizza',
            author: 'Nathan Myhrvold',
            year: '2021'
        },
        {
            title: 'The effect of fermentation temperature on the microstructure of bread',
            link: 'https://www.sciencedirect.com/science/article/pii/S002364382030345X'
        }
    ]
};
