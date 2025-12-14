import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const mixingTechniquesData: LearnArticleData = {
    id: 'mixing-techniques',
    title: 'Mixing Techniques: Energy & Oxidation',
    subtitle: 'How mechanical energy transforms flour and water into a structured network.',
    category: 'Process Techniques',
    difficulty: 'Intermediate',
    tags: ['mixing', 'oxidation', 'friction', 'gluten'],

    intro: "Mixing is more than just combining ingredients; it's the process of developing the gluten network through mechanical energy and oxidation. The goal is to achieve the right balance of strength and extensibility without over-oxidizing the dough.",

    history: "For most of human history, mixing was done by hand in wooden troughs. This was back-breaking labor that naturally limited the amount of oxidation and development a dough could receive, preserving the creamy color and flavor of the grain. The industrial revolution brought mechanical mixers, initially designed to mimic hand kneading. However, the invention of high-speed mixers in the 20th century led to the 'Chorleywood Bread Process'—a method of ultra-high-speed mixing that produced fluffy but flavorless white bread in minutes. Modern artisan baking has returned to 'improved' or 'short' mix techniques, often using spiral mixers that gently fold the dough without overheating it.",

    technicalFoundations: [
        "Incorporation: Combining ingredients until no dry flour remains.",
        "Development: Gluten bonds form and align; dough becomes cohesive.",
        "Peak Development: Maximum strength; dough cleans the bowl and passes the windowpane test.",
        "Breakdown: Overmixing leads to gluten bond shattering due to excessive oxidation and mechanical stress."
    ],

    doughImpact: [
        "Proper mixing ensures even hydration and ingredient distribution.",
        "Developing the gluten network provides gas retention capabilities.",
        "Friction from mixing increases dough temperature (Friction Factor)."
    ],

    bakingImpact: [
        "Well-developed gluten supports oven spring and volume.",
        "Over-oxidized dough results in a very white crumb and bland flavor.",
        "Under-mixed dough may result in a dense crumb and poor volume."
    ],

    practicalRanges: [
        { label: t('learn.spiral_mixer_friction'), notes: "Recommended: 6°C (Range: 5-8°C)" },
        { label: t('learn.planetary_mixer_friction'), notes: "Recommended: 12°C (Range: 10-15°C)" },
        { label: t('learn.hand_mixing_friction'), notes: "Recommended: 0°C (Range: 0-1°C)" }
    ],

    practicalApplications: [
        "Account for Friction Factor in water temp calculation in Calculator.",
        "Different styles require different mixing intensities (e.g. Panettone vs. No-Knead).",
        "Record mixing time and final dough temperature in MyLab.",
        "Ask for mixing time adjustments based on mixer type in Doughbot."
    ],

    proTips: [
        "Bassinage (Double Hydration): For high hydration doughs (>70%), do not add all water at once. Mix with 60-65% water until gluten forms, then slowly trickle in the remaining water. This allows the gluten to build strength before being diluted.",
        "Stop mixing when the dough is smooth and passes the windowpane test, regardless of the clock."
    ],

    criticalPoints: [
        "Don't Mix by Time, Mix by Feel. 10 minutes in a KitchenAid is different from 10 minutes in a Sunmix.",
        "Watch your dough temperature. If it gets too hot, stop and cool it down."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Mixer speed and duration directly affect dough temperature.",
        "Salt addition time affects gluten formation speed (salt tightens gluten)."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.spiral_mixer'),
            implications: "Bowl rotates with the hook. Gentle action. Low friction, efficient development, low oxidation. Preserves carotenoids (flavor/color). Creamy crumb, excellent flavor. Recommended for Pizza, Artisan Bread."
        },
        {
            variant: t('learn.planetary_mixer'),
            implications: "Hook rotates around a stationary bowl. High friction, inefficient for dough. Heats dough rapidly; risk of over-oxidation. Good for enriched doughs, less ideal for lean doughs. Recommended for Brioche, Cookies, Cakes."
        },
        {
            variant: t('learn.hand_mixing'),
            implications: "Manual folding and squeezing. Zero friction, gentle, labor intensive. Requires autolyse and stretch & folds for strength. Open crumb, rustic texture. Recommended for High hydration, Home baking."
        }
    ],

    references: [
        "Michel Suas, Advanced Bread and Pastry (2008)",
        "Raymond Calvel, The Taste of Bread (2001)",
        "Jeffrey Hamelman, Bread (2004)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.mixing_dough_is_like_giving_it_a_good_massage'),
        whatItDoes: t('learn.it_turns_a_shaggy_mess_into_a_smooth_stretchy_ball'),
        howToUse: "You're helping the flour and water get to know each other and become strong friends.",
        dangerSigns: "If you don't mix enough, your bread will be heavy. If you mix too much, you kill the flavor."
    }
};