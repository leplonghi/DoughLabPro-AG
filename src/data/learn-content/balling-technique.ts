import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const ballingTechniqueData: LearnArticleData = {
    id: 'balling-technique',
    title: 'Balling (Staglio): The Physics of Surface Tension',
    subtitle: 'Why the way you shape your dough ball determines the quality of your final crust.',
    category: 'Process Techniques',
    difficulty: 'Intermediate',
    tags: ['shaping', 'staglio', 'surface-tension', 'gluten'],

    intro: "Balling is not just about making it round. It is about creating a 'skin' of tension on the outer surface of the dough. This tight skin acts as a containment vessel, forcing expansion upwards and pressurizing internal gas bubbles for explosive oven spring.",

    history: "In Naples, the process of dividing and shaping dough balls is known as 'Staglio a mano'. Traditionally done entirely by hand, the pizzaiolo pinches off a piece of dough ('mozzeratura') and rolls it on the marble bench. This manual technique remains the gold standard for artisan pizza, ensuring delicate gluten structure is preserved.",

    technicalFoundations: [
        "The 'Skin' Effect: Creating a tight outer surface to contain gas pressure.",
        "Vertical Rise: Tension forces expansion upwards rather than outwards.",
        "Gluten Alignment: Circular motion aligns gluten strands concentrically for even stretching.",
        "Sealing the Seam: The bottom must be sealed tight to prevent gas leakage."
    ],

    doughImpact: [
        "Proper balling ensures even fermentation and shape retention.",
        "A tight skin pressurizes internal gas bubbles.",
        "Chaotic gluten alignment leads to lopsided dough or random tears."
    ],

    bakingImpact: [
        "Explosive oven spring due to pressurized gas.",
        "Even cornione (rim) development.",
        "Consistent round shape."
    ],

    practicalRanges: [],

    practicalApplications: [
        "Practice the 'mozzeratura' or hand-rolling technique for artisan results.",
        "Ensure the seam is completely sealed at the bottom of the ball.",
        "Allow balls to rest (relax) before stretching; you cannot stretch immediately after balling."
    ],

    proTips: [
        "The 'Rest' Period: You cannot stretch a dough ball immediately after balling. The gluten is too tight (elastic). It needs to relax (typically 2-6 hours at room temp, or 24h cold) before it becomes extensible enough to open."
    ],

    criticalPoints: [
        "Tearing the Skin: If you ball too aggressively, you will tear the outer surface (rough, 'shredded' texture). This destroys gas retention. The skin must be smooth and taut."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "The Pizza Bible - Tony Gemignani (2014)",
        "Modernist Pizza - Nathan Myhrvold (2021)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_2'),
        whatItDoes: t('learn.it_makes_the_dough_into_a_nice_tight_ball_so_it_ri'),
        howToUse: t('learn.roll_it_smooth_and_tight_like_making_a_snowball'),
        dangerSigns: "Don't rip the skin! Treat it gently."
    }
};