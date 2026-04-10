import React, { useMemo, useState } from 'react';
import {
  Calculator,
  FlaskConical,
  BookOpen,
  Users,
  Settings,
  ChevronDown,
  ChevronUp,
  Search,
  ChefHat,
  Scale,
  Flame,
  FileText,
  Target,
} from 'lucide-react';
import { useTranslation } from '@/i18n';
import AppPageLayout from '@/components/ui/AppPageLayout';
import AppSurface from '@/components/ui/AppSurface';
import { useRouter } from '@/contexts/RouterContext';
import { useGuidance } from '@/contexts/GuidanceContext';
import { Card } from '@/components/ui/Card';
import GuidanceTooltipTrigger from '@/components/guidance/GuidanceTooltipTrigger';

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

      {isOpen ? (
        <div className="p-5 pt-0 border-t border-dlp-border/50 bg-dlp-bg-card/50">
          <div className="mt-4 text-dlp-text-secondary space-y-4 animate-fade-in">{children}</div>
        </div>
      ) : null}
    </Card>
  );
};

export default function HelpPage() {
  const { t } = useTranslation();
  const { navigate } = useRouter();
  const { openTooltip, resetGuidance } = useGuidance();
  const [searchQuery, setSearchQuery] = useState('');

  const taskGuides = useMemo(
    () => [
      {
        id: 'first-formula',
        guidanceId: 'help-task-first-formula',
        title: t('guidance.help.task_formula_title', { defaultValue: 'Create your first formula' }),
        description: t('guidance.help.task_formula_body', { defaultValue: 'Start in Guided mode, pick a style, define yield, and generate a reliable first dough before opening advanced controls.' }),
        actionLabel: t('guidance.help.task_formula_cta', { defaultValue: 'Open Calculator' }),
        action: () => navigate('calculator'),
      },
      {
        id: 'save-bake',
        guidanceId: 'help-task-save-bake',
        title: t('guidance.help.task_save_title', { defaultValue: 'Save and register a bake' }),
        description: t('guidance.help.task_save_body', { defaultValue: 'Use the formula output as a plan, then log the bake into My Lab so the app can connect formula, notes, and results.' }),
        actionLabel: t('guidance.help.task_save_cta', { defaultValue: 'Open My Lab' }),
        action: () => navigate('mylab'),
      },
      {
        id: 'levain',
        guidanceId: 'help-task-levain',
        title: t('guidance.help.task_levain_title', { defaultValue: 'Use levain without overcomplicating the setup' }),
        description: t('guidance.help.task_levain_body', { defaultValue: 'Begin with one starter, one feeding rhythm, and clear notes. Only add more complexity after the routine feels predictable.' }),
        actionLabel: t('guidance.help.task_levain_cta', { defaultValue: 'Open Levain' }),
        action: () => navigate('mylab/levain'),
      },
      {
        id: 'compare-results',
        guidanceId: 'help-task-compare-results',
        title: t('guidance.help.task_compare_title', { defaultValue: 'Compare results in My Lab' }),
        description: t('guidance.help.task_compare_body', { defaultValue: 'Once you have a few runs, use recent activity, consistency work, and insights to see which changes improved the bake.' }),
        actionLabel: t('guidance.help.task_compare_cta', { defaultValue: 'Open Insights' }),
        action: () => navigate('mylab/insights'),
      },
      {
        id: 'workflow-choice',
        guidanceId: 'help-task-workflow-choice',
        title: t('guidance.help.task_workflow_title', { defaultValue: 'Understand Guided, Wizard, and Advanced' }),
        description: t('guidance.help.task_workflow_body', { defaultValue: 'Guided is the best default, Wizard is for explanation, and Advanced is for users who already know which variables they want to control directly.' }),
        actionLabel: t('guidance.help.task_workflow_cta', { defaultValue: 'Open Calculator' }),
        action: () => navigate('calculator'),
      },
    ],
    [navigate, t],
  );

  const guideSections = useMemo(
    () => [
      {
        id: 'calculator',
        title: 'Calculator & Recipes',
        icon: Calculator,
        content: (
          <div className="space-y-4 text-sm md:text-base">
            <p>
              {t('common.the')}
              <strong>{t('nav.calculator')}</strong> is the heart of DoughLab. Here you can create precise dough formulas tailored to your needs.
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-dlp-accent">
              <li><strong>{t('ui.configuration')}</strong> Start with yield, then adjust hydration, salt, and yeast.</li>
              <li><strong>{t('ui.modes')}</strong> Guided keeps things simple, Wizard explains decisions, and Advanced unlocks full control.</li>
              <li><strong>{t('ui.preferments')}</strong> Add Biga, Poolish, or Levain only when you actually need that complexity.</li>
              <li><strong>{t('ui.save__log')}</strong> Log the bake in My Lab once the formula looks right so you can compare future iterations.</li>
            </ul>
          </div>
        ),
      },
      {
        id: 'mylab',
        title: 'My Lab & Consistencies',
        icon: FlaskConical,
        content: (
          <div className="space-y-4 text-sm md:text-base">
            <p><strong>{t('nav.lab')}</strong> is your working memory: batches, notes, repeatability, and progress over time.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-dlp-bg-soft">
                <h4 className="font-semibold text-dlp-text-primary mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />{t('common.batches')}
                </h4>
                <p className="text-sm">Use each batch to capture what you planned, what happened, and what to change next.</p>
              </div>
              <div className="p-3 rounded-lg bg-dlp-bg-soft">
                <h4 className="font-semibold text-dlp-text-primary mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />{t('common.consistencies')}
                </h4>
                <p className="text-sm">Consistency projects work best when you change one meaningful variable at a time.</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'styles',
        title: 'Styles Library & Science',
        icon: BookOpen,
        content: (
          <div className="space-y-4 text-sm md:text-base">
            <p><strong>{t('general.styles_library')}</strong> gives you a stronger starting point before you start tweaking numbers manually.</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-dlp-accent">
              <li><strong>{t('ui.explore')}</strong> Browse by region or technique to find a close baseline.</li>
              <li><strong>{t('ui.deep_dive')}</strong> Open a style to see the why behind flour, timing, and bake assumptions.</li>
              <li><strong>{t('ui.oneclick_recipe')}</strong> Load a style into the calculator to reduce setup friction.</li>
            </ul>
          </div>
        ),
      },
      {
        id: 'community',
        title: 'Community & Sharing',
        icon: Users,
        content: (
          <div className="space-y-4 text-sm md:text-base">
            <p>Use <strong>{t('nav.community')}</strong> to share results with enough technical context that another baker can actually learn from them.</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-dlp-accent">
              <li><strong>{t('ui.share_your_bakes')}</strong> Link a batch when possible so the method and formula stay attached.</li>
              <li><strong>{t('ui.interact')}</strong> Save useful posts and compare how others handle similar constraints.</li>
            </ul>
          </div>
        ),
      },
      {
        id: 'tools',
        title: 'Tools & Utilities',
        icon: ChefHat,
        content: (
          <div className="space-y-4 text-sm md:text-base">
            <p><strong>{t('nav.tools')}</strong> exists for specific jobs, not as a second main workflow.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-dlp-bg-soft">
                <h4 className="font-semibold text-dlp-text-primary mb-2 flex items-center gap-2">
                  <Flame className="w-4 h-4" />{t('common.oven_profiler')}
                </h4>
                <p className="text-sm">Use it when your oven behavior is the main source of inconsistency.</p>
              </div>
              <div className="p-3 rounded-lg bg-dlp-bg-soft">
                <h4 className="font-semibold text-dlp-text-primary mb-2 flex items-center gap-2">
                  <Scale className="w-4 h-4" />{t('common.hydration_converter')}
                </h4>
                <p className="text-sm">Use it to resize or adapt a dough without rebuilding the whole formula from zero.</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'settings',
        title: 'Settings & account',
        icon: Settings,
        content: (
          <div className="space-y-4 text-sm md:text-base">
            <p><strong>{t('nav.settings')}</strong> is where you shape defaults, language, and account-level behavior.</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-dlp-accent">
              <li><strong>{t('ui.profile')}</strong> Keep your public identity up to date.</li>
              <li><strong>{t('ui.units')}</strong> Set the measurement system that matches your workspace.</li>
              <li><strong>{t('ui.language')}</strong> Switch app language without changing the guidance structure.</li>
            </ul>
          </div>
        ),
      },
    ],
    [t],
  );

  const faqs = useMemo(
    () => [
      {
        q: t('ui.how_do_i_save_a_recipe'),
        a: 'Generate the formula in Calculator, then log the bake. That creates a Batch in My Lab with the full recipe and context attached.',
      },
      {
        q: "What is the difference between 'Direct' and 'Biga/Poolish'?",
        a: "Direct dough mixes everything at once. Biga and Poolish are preferments that build extra strength and flavor before the final mix.",
      },
      {
        q: t('ui.can_i_use_my_own_sourdough_starter'),
        a: 'Yes. Switch the yeast type to Sourdough or Levain, then choose one of your saved starters from My Lab.',
      },
      {
        q: t('ui.how_do_i_unlock_pro_features'),
        a: 'Open the Plans page or click a locked feature to compare plans and unlock the tools that are currently gated.',
      },
    ],
    [t],
  );

  const query = searchQuery.trim().toLowerCase();
  const filteredTaskGuides = taskGuides.filter((task) => !query || task.title.toLowerCase().includes(query) || task.description.toLowerCase().includes(query));
  const filteredSections = guideSections.filter((section) => !query || section.title.toLowerCase().includes(query));

  return (
    <AppPageLayout
      width="content"
      density="default"
      pageHeader={{
        page: 'help',
        title: 'How can we help you?',
        description: 'Use the Help Center to find the right workflow faster, not to memorize where every feature lives.',
        children: (
          <div className="flex flex-wrap items-center justify-end gap-3">
            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              Guides, FAQs, and account help
            </div>
            <button
              type="button"
              onClick={() => {
                resetGuidance();
                openTooltip('help-task-hub');
              }}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
            >
              {t('guidance.help.reset_cta', { defaultValue: 'View tips again' })}
            </button>
          </div>
        ),
      }}
    >
      <div className="max-w-4xl mx-auto space-y-8 pb-12 animate-fade-in">
        <AppSurface id="help-task-hub-card" className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t('guidance.help.task_label', { defaultValue: 'Task Paths' })}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-dlp-text-primary">
                {t('guidance.help.task_hub_title', { defaultValue: 'Start from the job you need to get done' })}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-dlp-text-secondary">
                {t('guidance.help.task_hub_body', { defaultValue: 'These paths are meant to get you moving faster than browsing the product section by section.' })}
              </p>
            </div>
            <GuidanceTooltipTrigger itemId="help-task-hub" />
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {filteredTaskGuides.map((task) => (
              <div key={task.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{task.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{task.description}</p>
                  </div>
                  <GuidanceTooltipTrigger itemId={task.guidanceId} />
                </div>
                <button
                  type="button"
                  onClick={task.action}
                  className="mt-4 rounded-xl bg-dlp-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-dlp-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dlp-accent focus-visible:ring-offset-2"
                >
                  {task.actionLabel}
                </button>
              </div>
            ))}
          </div>
        </AppSurface>

        <AppSurface className="p-5">
          <div className="relative max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-dlp-text-muted" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-dlp-border rounded-full leading-5 bg-dlp-bg-card text-dlp-text-primary placeholder-dlp-text-muted focus:outline-none focus:ring-2 focus:ring-dlp-accent focus:border-dlp-accent transition-all shadow-sm"
              placeholder={t('general.search_for_topics')}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
        </AppSurface>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-dlp-text-primary px-2">{t('general.user_guide')}</h2>
          <div className="space-y-4">
            {filteredSections.map((section) => (
              <HelpSection
                key={section.id}
                title={section.title}
                icon={section.icon}
                defaultOpen={section.id === 'calculator'}
              >
                {section.content}
              </HelpSection>
            ))}
          </div>
        </div>

        <div className="space-y-6 pt-8 border-t border-dlp-border">
          <h2 className="text-2xl font-bold text-dlp-text-primary px-2">{t('general.frequently_asked_questions')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <AppSurface key={index} className="p-5 hover:shadow-md transition-all">
                <h3 className="font-semibold text-dlp-text-primary mb-2 flex items-start gap-2">
                  <span className="text-dlp-accent font-bold">Q.</span> {faq.q}
                </h3>
                <p className="text-dlp-text-secondary text-sm pl-6">{faq.a}</p>
              </AppSurface>
            ))}
          </div>
        </div>

        <AppSurface className="mt-12 p-8 bg-gradient-to-br from-dlp-accent/10 to-dlp-accent/10 border-dlp-accent/20 text-center">
          <h3 className="text-xl font-bold text-dlp-text-primary mb-2">{t('ui.still_have_questions')}</h3>
          <p className="text-dlp-text-secondary mb-6">
            We&apos;re here to help! Reach out to our support team for personal assistance.
          </p>
          <a
            href="mailto:support@doughlab.com"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-dlp-accent hover:bg-dlp-accent-hover transition-colors shadow-lg hover:shadow-xl transform active:scale-95"
          >
            {t('common.contact_support')}
          </a>
        </AppSurface>
      </div>
    </AppPageLayout>
  );
}
