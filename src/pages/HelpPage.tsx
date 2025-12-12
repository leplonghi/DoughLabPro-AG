import React, { useState } from 'react';
import {
    Calculator,
    FlaskConical,
    BookOpen,
    Users,
    Settings,
    HelpCircle,
    ChevronDown,
    ChevronUp,
    Search,
    ChefHat,
    Scale,
    Flame,
    FileText,
    Target
} from 'lucide-react';
import { useTranslation } from '@/i18n';

// Components
import { Card } from '@/components/ui/Card';

interface HelpSectionProps {
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const HelpSection: React.FC<HelpSectionProps> = ({ title, icon: Icon, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <Card className="mb-4 overflow-hidden border border-dlp-border shadow-dlp-sm transition-all duration-200 hover:shadow-dlp-md">
            <button
                className="w-full flex items-center justify-between p-5 text-left bg-transparent hover:bg-dlp-bg-soft/50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-dlp-accent/10 text-dlp-accent">
                        <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-dlp-text-primary">{title}</h3>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-dlp-text-muted" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-dlp-text-muted" />
                )}
            </button>

            {isOpen && (
                <div className="p-5 pt-0 border-t border-dlp-border/50 bg-dlp-bg-card/50">
                    <div className="mt-4 text-dlp-text-secondary space-y-4 animate-fade-in">
                        {children}
                    </div>
                </div>
            )}
        </Card>
    );
};

const guideSections = [
    {
        id: 'calculator',
        title: 'Calculator & Recipes',
        icon: Calculator,
        content: (
            <div className="space-y-4 text-sm md:text-base">
                <p>{t('common.the')}<strong>{t('nav.calculator')}</strong> is the heart of DoughLab. Here you can create precise dough formulas tailored to your needs.
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-dlp-accent">
                    <li>
                        <strong>{t('ui.configuration')}</strong> Start by entering your desired dough weight (Total, per Ball, or Total Flour) and the number of balls.
                        Adjust hydration, salt, and yeast percentages.
                    </li>
                    <li>
                        <strong>{t('ui.modes')}</strong>{t('common.switch_between')}<em>{t('general.basic')}</em> (simple sliders) and <em>{t('general.advanced')}</em> (detailed inputs) modes using the toggle at the top left.
                    </li>
                    <li>
                        <strong>{t('ui.preferments')}</strong> Incorporate Biga, Poolish, or Sourdough (Levain) into your recipe. Enable these options to calculate complex fermentations automatically.
                    </li>
                    <li>
                        <strong>{t('ui.flour__oven')}</strong> Select specific flour types and oven profiles to get tailored recommendations for baking times and temperatures.
                    </li>
                    <li>
                        <strong>{t('ui.save__log')}</strong> Once you have a perfect formula, click t('common.start_bake') to save it to your history and begin tracking your process in {t('nav.lab')}.
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'mylab',
        title: 'My Lab & Consistencies',
        icon: FlaskConical,
        content: (
            <div className="space-y-4 text-sm md:text-base">
                <p>
                    <strong>{t('nav.lab')}</strong> is your personal digital notebook for tracking your baking journey and experiments.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-dlp-bg-soft">
                        <h4 className="font-semibold text-dlp-text-primary mb-2 flex items-center gap-2">
                            <FileText className="w-4 h-4" />{t('common.batches')}</h4>
                        <p className="text-sm">
                            Every time you bake, a t('common.batch') is created. Track the status (Planned, Mixing, Bulk, Baling, Cold Ferment, Baking, Done) and add notes at each stage.
                        </p>
                    </div>
                    <div className="p-3 rounded-lg bg-dlp-bg-soft">
                        <h4 className="font-semibold text-dlp-text-primary mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4" />{t('common.consistencies')}</h4>
                        <p className="text-sm">
                            Improve your skills by running t('common.consistency_projects'). Bake the same recipe multiple times to master it, and track your metrics over time.
                        </p>
                    </div>
                </div>
                <p>{t('common.use_the')}<strong>{t('general.timeline')}</strong> view to visualize your past bakes and see how your skills have improved.
                </p>
            </div>
        )
    },
    {
        id: 'styles',
        title: 'Styles Library & Science',
        icon: BookOpen,
        content: (
            <div className="space-y-4 text-sm md:text-base">
                <p>{t('common.the')}<strong>{t('general.styles_library')}</strong> is an encyclopedia of pizza styles from around the world.
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-dlp-accent">
                    <li>
                        <strong>{t('ui.explore')}</strong> Browse styles by region (Italy, USA, Licensed). Each style card shows key characteristics like hydration, oven temp, and difficulty.
                    </li>
                    <li>
                        <strong>{t('ui.deep_dive')}</strong> Click on a style to see its full profile, including history, recommended flour types, fermentation schedules, and detailed scientific breakdowns.
                    </li>
                    <li>
                        <strong>{t('ui.oneclick_recipe')}</strong> Found a style you love? Click t('common.use_in_calculator') to instantly load that style's authentic parameters into the calculator.
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'community',
        title: 'Community & Sharing',
        icon: Users,
        content: (
            <div className="space-y-4 text-sm md:text-base">
                <p>{t('common.connect_with_other_bakers_in_the')}<strong>{t('nav.community')}</strong> section.
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-dlp-accent">
                    <li>
                        <strong>{t('ui.share_your_bakes')}</strong> Post photos and details of your latest creations. You can link directly to a Batch from My Lab to share the exact recipe and method.
                    </li>
                    <li>
                        <strong>{t('ui.interact')}</strong> Like and comment on other posts. Save inspiring posts to your bookmarks for later.
                    </li>
                    <li>
                        <strong>{t('ui.profiles')}</strong> Visit user profiles to see their baking history and stats.
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'tools',
        title: 'Tools & Utilities',
        icon: ChefHat,
        content: (
            <div className="space-y-4 text-sm md:text-base">
                <p>{t('common.access_a_suite_of_utilities_under_the')}<strong>{t('nav.tools')}</strong> menu to help with specific tasks.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-dlp-bg-soft">
                        <h4 className="font-semibold text-dlp-text-primary mb-2 flex items-center gap-2">
                            <Flame className="w-4 h-4" />{t('common.oven_profiler')}</h4>
                        <p className="text-sm">
                            Analyze your oven's performance. Log heating times and max temperatures to get better baking time predictions.
                        </p>
                    </div>
                    <div className="p-3 rounded-lg bg-dlp-bg-soft">
                        <h4 className="font-semibold text-dlp-text-primary mb-2 flex items-center gap-2">
                            <Scale className="w-4 h-4" />{t('common.hydration_converter')}</h4>
                        <p className="text-sm">
                            Easily convert recipes between different hydration levels or resizing factors without losing the dough's character.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'settings',
        title: 'Settings & account',
        icon: Settings,
        content: (
            <div className="space-y-4 text-sm md:text-base">
                <p>{t('common.manage_your_app_experience_in')}<strong>{t('nav.settings')}</strong>.
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-dlp-accent">
                    <li>
                        <strong>{t('ui.profile')}</strong> Update your name, bio, and avatar.
                    </li>
                    <li>
                        <strong>{t('ui.units')}</strong> Choose between Metric (g, kg, °C) and Imperial (oz, lb, °F) systems.
                    </li>
                    <li>
                        <strong>{t('ui.language')}</strong> Switch the app language (English, Portuguese, Spanish, etc.).
                    </li>
                    <li>
                        <strong>{t('ui.subscription')}</strong> Manage your PRO subscription status and billing.
                    </li>
                </ul>
            </div>
        )
    }
];

const faqs = [
    {
        q: t('ui.how_do_i_save_a_recipe'),
        a: "To save a recipe, first calculate your formula in the Calculator. Then, click the t('common.start_bake') button. This will create a new Batch in 'My Lab' with all your recipe details saved."
    },
    {
        q: "What is the difference between 'Direct' and 'Biga/Poolish'?",
        a: "'Direct' dough means all ingredients are mixed at once. 'Biga' and 'Poolish' are preferments—a portion of flour and water fermented beforehand to add complexity and strength. Use the 'Preferment' toggles in the Calculator to set this up."
    },
    {
        q: t('ui.can_i_use_my_own_sourdough_starter'),
        a: "Yes! In the Calculator, change the Yeast type to 'Sourdough/Levain'. You can then select from your saved Levains (manage them in My Lab > Levain) or use a generic profile."
    },
    {
        q: t('ui.how_do_i_unlock_pro_features'),
        a: "Go to the 'Plans' page or click any locked feature (marked with a lock icon). You can choose a monthly or annual subscription to unlock unlimited batches, advanced tools, and the full styles library."
    }
];

export default function HelpPage() {
    const { t } = useTranslation(); // Though we are hardcoding English text for now based on the request content being mixed/english, ideally this should use keys.
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSections = guideSections.filter(section =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        // Simple content check - in real app might want better search
        true
    );

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-12 animate-fade-in">

            {/* Header */}
            <div className="text-center space-y-4 py-8">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-dlp-bg-soft mb-2 shadow-sm">
                    <HelpCircle className="w-8 h-8 text-dlp-accent" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-dlp-text-primary tracking-tight">
                    How can we help you?
                </h1>
                <p className="text-lg text-dlp-text-secondary max-w-2xl mx-auto">
                    Welcome to the DoughLab Help Center. Explore our guides to master the app and improve your baking.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-lg mx-auto mt-6">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-dlp-text-muted" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-dlp-border rounded-xl leading-5 bg-dlp-bg-card text-dlp-text-primary placeholder-dlp-text-muted focus:outline-none focus:ring-2 focus:ring-dlp-accent focus:border-dlp-accent transition-all shadow-sm"
                        placeholder={t('general.search_for_topics')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Main Sections */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-dlp-text-primary px-2">{t('general.user_guide')}</h2>
                <div className="space-y-4">
                    {guideSections.map((section) => (
                        <div key={section.id} style={{
                            display:
                                (section.title.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '') ? 'block' : 'none'
                        }}>
                            <HelpSection
                                title={section.title}
                                icon={section.icon}
                                defaultOpen={section.id === 'calculator'} // Open first one by default
                            >
                                {section.content}
                            </HelpSection>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQs */}
            <div className="space-y-6 pt-8 border-t border-dlp-border">
                <h2 className="text-2xl font-bold text-dlp-text-primary px-2">{t('general.frequently_asked_questions')}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-5 rounded-xl bg-dlp-bg-card border border-dlp-border shadow-sm hover:shadow-md transition-all">
                            <h3 className="font-semibold text-dlp-text-primary mb-2 flex items-start gap-2">
                                <span className="text-dlp-accent font-bold">Q.</span> {faq.q}
                            </h3>
                            <p className="text-dlp-text-secondary text-sm pl-6">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Support */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-dlp-accent/10 to-dlp-accent/10 border border-dlp-accent/20 text-center">
                <h3 className="text-xl font-bold text-dlp-text-primary mb-2">{t('ui.still_have_questions')}</h3>
                <p className="text-dlp-text-secondary mb-6">
                    We're here to help! Reach out to our support team for personal assistance.
                </p>
                <a
                    href="mailto:support@doughlab.com"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-dlp-accent hover:bg-dlp-accent-hover transition-colors shadow-lg hover:shadow-xl transform active:scale-95"
                >{t('common.contact_support')}</a>
            </div>

        </div>
    );
}
