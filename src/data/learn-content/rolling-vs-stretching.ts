import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const rollingVsStretchingData: LearnArticleData = {
    id: 'rolling-vs-stretching',
    title: 'Rolling vs Stretching Methods',
    subtitle: 'Two shaping philosophies with distinct effects on crumb, gas retention and texture.',
    category: 'Process Techniques',
    difficulty: 'Intermediate',
    tags: ['shaping', 'rolling', 'stretching', 'crumb'],

    intro: "Rolling and stretching are two fundamentally different shaping methods. Rolling compresses gases and equalizes thickness; stretching preserves bubbles and creates artisanal texture.",
    history: "Rolling pins have long been used in traditional flatbreads, while hand-stretching emerged as the standard technique in Italian and artisan pizza disciplines.",

    technicalFoundations: [
        "Rolling redistributes and compresses air pockets.",
        "Stretching expands gluten networks gently to preserve gas.",
        "Hydration levels influence which method works best.",
        "Handling temperature alters extensibility during shaping."
    ],

    doughImpact: [
        "Rolling reduces internal gas, producing uniform crumb.",
        "Stretching maintains fermentation gases for open crumb.",
        "Over-stretching causes thinning and tearing."
    ],

    bakingImpact: [
        "Rolled dough bakes with flatter, denser texture.",
        "Stretched dough forms irregular bubbles and better oven spring.",
        "Rolling reduces cornicione height significantly."
    ],

    practicalRanges: [
        { label: t('learn.ideal_stretching_temp'), notes: "Recommended: 23°C (Range: 20-25°C)" }
    ],

    practicalApplications: [
        "Extensibility predictions shift based on shaping method in Calculator.",
        "Neapolitan demands stretching; thin-crust can be rolled.",
        "Compare rolling vs stretching outcomes to improve technique in MyLab.",
        "Levain doughs should avoid rolling to preserve bubbles.",
        "DoughBot suggests shaping method based on hydration and style."
    ],

    proTips: [
        "Warm dough stretches better than cold dough.",
        "Avoid pressing the cornicione when stretching."
    ],

    criticalPoints: [
        "Rolling eliminates air — not suitable for artisanal styles.",
        "Overstretching causes holes and weak spots."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration strongly influences choice of shaping method."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.full_rolling'),
            implications: "Used for thin, uniform styles. Even thickness, reduced gas. Simplified shaping. Low cornicione. Recommended for Thin Crust, Flatbreads, Crackers."
        },
        {
            variant: t('learn.hand_stretching'),
            implications: "Preferred for artisan structure. Open crumb, high cornicione. Requires practice. Irregular but beautiful texture. Recommended for Neapolitan, Artisan Bread, Focaccia."
        }
    ],

    references: [
        "AVPN Shaping Guidelines.",
        "AIB Pizza Shaping Research Papers."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, rolling is like flattening dough for cookies; stretching is like gently pulling pizza dough with your fingertips.",
        whatItDoes: t('learn.changes_how_the_crust_rises'),
        howToUse: t('learn.rolling_squeezes_the_air_out_stretching_keeps_it_f'),
        dangerSigns: t('learn.stretch_slowly_so_you_dont_rip_the_dough')
    }
};
