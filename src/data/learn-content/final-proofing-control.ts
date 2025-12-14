import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const finalProofingControlData: LearnArticleData = {
    id: 'final-proofing-control',
    title: 'Final Proofing Control',
    subtitle: 'Managing the dough’s last fermentation stage before baking.',
    category: 'Process Techniques',
    difficulty: 'Intermediate',
    tags: [t('learn.proofing'), t('learn.fermentation_2'), t('learn.oven_spring'), t('learn.timing_2')],

    intro: "Final proofing determines dough readiness for baking. Correct proof level ensures optimal oven spring, crumb development and crust coloration.",
    history: "Proofing control evolved from artisan bakeries monitoring tactile cues, temperature influences and fermentation curves.",

    technicalFoundations: [
        "Proofing balances gas production and gluten elasticity.",
        "Temperature radically alters fermentation speed.",
        "Visual and tactile cues determine readiness.",
        "Overproofing weakens structure; underproofing restricts spring."
    ],

    doughImpact: [
        "Underproofed dough resists stretching and bakes dense.",
        "Properly proofed dough expands evenly.",
        "Overproofed dough collapses or spreads."
    ],

    bakingImpact: [
        "Correct proofing triggers optimal oven spring.",
        "Underproofed dough has tight crumb.",
        "Overproofed dough produces pale crust and low rise."
    ],

    practicalRanges: [
        { label: t('learn.ideal_final_proofing_temperature'), notes: "Recommended: 26°C (Range: 22-30°C)" }
    ],

    practicalApplications: [
        "Yeast % and temperature feed into proofing time estimates in Calculator.",
        "Different styles require proofing levels for characteristic texture.",
        "Track proofing readiness tests like poke test in MyLab.",
        "Record proofing duration vs rise results in MyLab.",
        "Levain proofing varies with pH levels and acidity.",
        "DoughBot flags under/overproof based on logged patterns."
    ],

    proTips: [
        "Use the poke test to confirm readiness.",
        "Consistency matters more than exact timing."
    ],

    criticalPoints: [
        "Overproofing is irreversible.",
        "Underproofed dough yields tight crumbs."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature and yeast percentage strongly affect proofing."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.warm_proofing'),
            implications: "Fast fermentation with stronger activity. Rapid rise, soft dough. Easy to overproof. Faster coloration. Recommended for Commercial Yeast Doughs, Same-day Bakes."
        },
        {
            variant: t('learn.cool_proofing'),
            implications: "Slow fermentation, tighter control. Stable, predictable. Better gas retention. Improved oven spring. Recommended for Sourdough, Long Fermentation."
        }
    ],

    references: [
        "Calvel — The Taste of Bread.",
        "AIB Proofing Science Notes."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, final proofing is like waiting for dough to take a deep breath before baking.",
        whatItDoes: t('learn.gives_the_bread_its_perfect_rise'),
        howToUse: t('learn.it_needs_to_puff_up_just_the_right_amount'),
        dangerSigns: t('learn.once_overproofed_theres_no_going_back')
    }
};