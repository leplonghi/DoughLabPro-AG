import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const gasBubbleBlowoutsData: LearnArticleData = {
    id: "gas-bubble-blowouts",
    title: t('learn.gas_bubble_blowouts'),
    subtitle: t('learn.understanding_excessive_bubbling_runaway_gas_pocke'),
    category: t('learn.troubleshooting_4'),
    difficulty: t('learn.intermediate_17'),
    tags: ["bubbles", "blowouts", "troubleshooting", "shaping"],

    intro: "Gas bubble blowouts occur when gas accumulates in concentrated pockets instead of distributing evenly. This leads to large blisters, eruptions or hollow sections.",
    history: "Blistering phenomena have been studied in pizza baking, linking fermentation irregularities and heat profile mismatch.",

    technicalFoundations: [
        "Gas accumulates where gluten is weaker or thinner.",
        "Uneven fermentation causes local CO₂ concentration.",
        "Excessive heat creates runaway blister formation.",
        "Overproofed dough increases bubble instability."
    ],

    doughImpact: [
        "Leads to fragile, thin spots that burst.",
        "Weak gluten pathways channel gas improperly.",
        "Irregular gas pockets reduce structural integrity."
    ],

    bakingImpact: [
        "Large blisters scorch quickly.",
        "Surface eruptions disrupt uniform baking.",
        "May cause hollow cornicione."
    ],

    practicalRanges: [
        { label: t('learn.safe_proofing_range_before_blister_risk'), notes: "Recommended: 80% (Range: 70-90%)" }
    ],

    practicalApplications: [
        "Fermentation timing and hydration influence bubble formation in Calculator.",
        "Neapolitan purposely promotes controlled blistering.",
        "Track bubble patterns by adjusting fermentation time in MyLab.",
        "Levain gas variability increases blister risk.",
        "DoughBot flags patterns that lead to blowouts."
    ],

    proTips: [
        "Avoid overstretching the center of the dough.",
        "Use a fork to gently dock trouble areas in certain styles."
    ],

    criticalPoints: [
        "Overproofing drastically increases blister risk.",
        "Uneven shaping produces bubble pathways that erupt."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Fermentation time, heat intensity and gluten uniformity."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.thin_spots_during_stretching'),
            implications: "Over-thinned dough channels gas upward. Fragile, prone to blisters. Sensitive structure. Large surface bubbles."
        },
        {
            variant: t('learn.overproofed_dough'),
            implications: "Gas pockets already enlarged pre-bake. Soft, volatile. Bubble instability. Eruptions during bake."
        }
    ],

    references: [
        "AVPN Blister Formation Observations.",
        "AIB Gas Cell Dynamics Research."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.sweetheart_gas_blowouts_are_like_bubbles_bursting_'),
        whatItDoes: t('learn.makes_huge_bubbles_pop_on_the_surface'),
        howToUse: t('learn.handle_the_dough_gently_and_dont_overstretch_thin_'),
        dangerSigns: t('learn.too_much_gas_gathers_in_one_spot_and_can_burn_or_t')
    }
};
