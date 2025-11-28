import React from 'react';
import { LearnArticleData } from '@/types/learn';
import { CalculatorIcon } from '@/components/ui/Icons';

export const fermentationData: LearnArticleData = {
    id: 'fermentation',
    title: 'Fermentation: The Biological Engine',
    subtitle: 'Yeast metabolism, the Crabtree Effect, and the production of flavor.',
    history: {
        heading: "Ancient Origins & Modern Science",
        paragraphs: [
            "Fermentation is one of the oldest biotechnologies, dating back to ancient Egypt around 4000 BC. Early bakers discovered that leaving dough to sit caused it to rise and develop flavor, likely due to wild yeast spores settling from the air.",
            "For millennia, this process was a mystery. It wasn't until Louis Pasteur's work in the 19th century that we understood yeast as a living microorganism responsible for fermentation, paving the way for the isolated commercial yeast we use today.",
            "DoughLabPro helps you harness this ancient biological engine with precision, allowing you to control temperature and time to achieve flavors that would have been impossible to replicate consistently in the past."
        ]
    },
    sections: [
        {
            title: 'Aerobic vs. Anaerobic Respiration',
            content: [
                'Yeast (Saccharomyces cerevisiae) can function in two modes:',
                '1. Aerobic (With Oxygen): Yeast reproduces rapidly but produces mostly water and CO₂. This happens initially during mixing.',
                '2. Anaerobic (Without Oxygen): Yeast consumes sugar to produce Alcohol (Ethanol) and CO₂. This is the primary mode during bulk fermentation.',
                'Flavor comes from the byproducts of anaerobic fermentation (esters, phenols, organic acids).'
            ]
        },
        {
            title: 'The Crabtree Effect',
            content: [
                'Interestingly, in high-sugar environments (like dough), yeast prefers to ferment (produce alcohol) even if oxygen is present. This is known as the Crabtree Effect. It ensures that bread dough always produces the alcohol and flavor compounds we desire, regardless of how much air we mix in.'
            ]
        },
        {
            title: 'Bacterial Fermentation (LAB)',
            content: [
                'In sourdough (and to a lesser extent in commercial yeast doughs), Lactic Acid Bacteria (LAB) are co-fermenters.',
                '• Homofermentative LAB: Produce Lactic Acid (yogurt-like sourness).',
                '• Heterofermentative LAB: Produce Lactic Acid, Acetic Acid (vinegar-like sharpness), and CO₂.',
                'Balancing yeast activity vs. bacterial activity is the key to sourdough flavor profile.'
            ]
        }
    ],
    proTip: {
        content: 'The "Fridge Effect". LAB are less sensitive to cold than yeast. In the fridge (4°C), yeast almost stops, but LAB keep working (slowly). This is why cold-fermented doughs become more sour/acidic over time.'
    },
    criticalPoint: {
        content: 'Over-Fermentation (Acid Load). If fermentation goes too long, the acid produced by LAB begins to digest the gluten network. The dough turns into a sticky, unworkable soup that tears when you look at it.'
    },
    references: [
        {
            title: 'The Art of Fermentation',
            author: 'Sandor Katz',
            year: '2012'
        },
        {
            title: 'Microbiology of Sourdough Fermentation',
            link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC368433/'
        },
        {
            title: 'Modernist Pizza',
            author: 'Nathan Myhrvold & Francisco Migoya',
            year: '2021'
        },
        {
            title: 'Handbook of Dough Fermentations',
            author: 'Karel Kulp',
            year: '2003'
        },
        {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: '2004'
        },
        {
            title: 'The Sourdough School',
            author: 'Vanessa Kimbell',
            year: '2018'
        }
    ],
    affiliatePlacementKeys: ['learn_levain_care'],
    callToAction: {
        text: "Ready to put theory into practice?",
        buttonText: "Open Calculator",
        link: "calculator",
        icon: <CalculatorIcon className="h-5 w-5" />
    }
};
