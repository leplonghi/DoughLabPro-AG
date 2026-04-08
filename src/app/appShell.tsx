import {
  AcademicCapIcon,
  BeakerIcon,
  BatchesIcon,
  CalculatorIcon,
  ChartBarIcon,
  DocumentTextIcon,
  FireIcon,
  SparklesIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from '@/components/ui/Icons';
import { Page } from '@/types';
import React from 'react';

export type AppPillar = 'bake' | 'lab' | 'library' | 'community' | 'pro';

export interface ShellNavItem {
  id: string;
  label: string;
  page: Page;
  icon: React.ComponentType<any>;
}

export interface ShellPageMeta {
  eyebrow: string;
  title: string;
  description: string;
  pillar: AppPillar;
  showHeader?: boolean;
}

export const PRIMARY_NAV_ITEMS: Array<ShellNavItem & { pillar: AppPillar }> = [
  { id: 'bake', label: 'Bake', page: 'calculator', icon: CalculatorIcon, pillar: 'bake' },
  { id: 'lab', label: 'Lab', page: 'mylab', icon: BeakerIcon, pillar: 'lab' },
  { id: 'library', label: 'Library', page: 'learn', icon: AcademicCapIcon, pillar: 'library' },
  { id: 'community', label: 'Community', page: 'community', icon: UsersIcon, pillar: 'community' },
  { id: 'pro', label: 'Pro', page: 'plans', icon: SparklesIcon, pillar: 'pro' },
];

export const PILLAR_NAV_ITEMS: Record<AppPillar, ShellNavItem[]> = {
  bake: [
    { id: 'new-bake', label: 'New Bake', page: 'calculator', icon: CalculatorIcon },
    { id: 'oven-analysis', label: 'Oven Analysis', page: 'tools/oven-profiler', icon: FireIcon },
    { id: 'converter', label: 'Hydration Adjuster', page: 'tools/hydration-converter', icon: WrenchScrewdriverIcon },
  ],
  lab: [
    { id: 'lab-home', label: 'Overview', page: 'mylab', icon: BeakerIcon },
    { id: 'lab-batches', label: 'Batches', page: 'mylab/bakes', icon: DocumentTextIcon },
    { id: 'lab-levain', label: 'Levain', page: 'mylab/levain', icon: FireIcon },
    { id: 'lab-insights', label: 'Insights', page: 'mylab/insights', icon: ChartBarIcon },
  ],
  library: [
    { id: 'library-home', label: 'Learn', page: 'learn', icon: AcademicCapIcon },
    { id: 'library-styles', label: 'Styles', page: 'styles', icon: BatchesIcon },
    { id: 'library-ingredients', label: 'Ingredients', page: 'learn/ingredients', icon: DocumentTextIcon },
    { id: 'library-science', label: 'Science', page: 'learn/baking-science', icon: ChartBarIcon },
    { id: 'library-tools', label: 'Utilities', page: 'tools', icon: WrenchScrewdriverIcon },
  ],
  community: [
    { id: 'community-home', label: 'Feed', page: 'community', icon: UsersIcon },
    { id: 'community-post', label: 'Share Bake', page: 'community/create', icon: SparklesIcon },
  ],
  pro: [
    { id: 'pro-plans', label: 'Plans', page: 'plans', icon: SparklesIcon },
    { id: 'pro-billing', label: 'Billing', page: 'plans', icon: SparklesIcon },
    { id: 'pro-help', label: 'Help', page: 'help', icon: DocumentTextIcon },
  ],
};

const PREFIX_META: Array<{ prefix: string; meta: ShellPageMeta }> = [
  {
    prefix: 'calculator',
    meta: {
      eyebrow: 'Bake Workspace',
      title: 'Plan the next bake',
      description: 'Build a formula, tune the process, and move straight into a tracked bake without leaving the workspace.',
      pillar: 'bake',
    },
  },
  {
    prefix: 'tools/oven-profiler',
    meta: {
      eyebrow: 'Bake Utility',
      title: 'Profile your oven',
      description: 'Map heat behavior, calibrate expectations, and turn your real oven into a reliable baking variable.',
      pillar: 'bake',
    },
  },
  {
    prefix: 'tools/hydration-converter',
    meta: {
      eyebrow: 'Bake Utility',
      title: 'Correct hydration precisely',
      description: 'Fix a dough that drifted off target without redoing the full formula from scratch.',
      pillar: 'bake',
    },
  },
  {
    prefix: 'mylab',
    meta: {
      eyebrow: 'Lab System',
      title: 'Run your baking lab',
      description: 'Track bakes, manage levain, compare outcomes, and keep the improvement loop active every week.',
      pillar: 'lab',
    },
  },
  {
    prefix: 'batch',
    meta: {
      eyebrow: 'Lab Record',
      title: 'Review a bake log',
      description: 'Inspect what happened, record outcomes, and feed the next iteration with better data.',
      pillar: 'lab',
      showHeader: false,
    },
  },
  {
    prefix: 'learn',
    meta: {
      eyebrow: 'Library',
      title: 'Study with a baker’s context',
      description: 'Move from theory to application with guides, ingredients, science, and next-step actions.',
      pillar: 'library',
    },
  },
  {
    prefix: 'styles',
    meta: {
      eyebrow: 'Library',
      title: 'Browse dough styles',
      description: 'Explore regional dough systems and load them into your workflow with a clearer, more comparable structure.',
      pillar: 'library',
    },
  },
  {
    prefix: 'tools',
    meta: {
      eyebrow: 'Library Utilities',
      title: 'Use focused baking tools',
      description: 'Access specialty utilities without losing the bigger workflow around formula, lab, and learning.',
      pillar: 'library',
    },
  },
  {
    prefix: 'community',
    meta: {
      eyebrow: 'Community',
      title: 'Learn from other bakers',
      description: 'Explore shared bakes, formulas, and creators in a space focused on useful inspiration, not noise.',
      pillar: 'community',
    },
  },
  {
    prefix: 'plans',
    meta: {
      eyebrow: 'Pro',
      title: 'Compare free and pro clearly',
      description: 'See the product in one structure, understand the upgrade value, and manage billing with less friction.',
      pillar: 'pro',
    },
  },
  {
    prefix: 'upgrade',
    meta: {
      eyebrow: 'Pro',
      title: 'Unlock the full lab',
      description: 'Upgrade when you want deeper tracking, more control, and a stronger feedback loop across the whole product.',
      pillar: 'pro',
    },
  },
  {
    prefix: 'profile',
    meta: {
      eyebrow: 'Account',
      title: 'Manage your baker profile',
      description: 'Keep your identity, preferences, equipment, and baking context aligned in one place.',
      pillar: 'lab',
    },
  },
  {
    prefix: 'settings',
    meta: {
      eyebrow: 'Account Settings',
      title: 'Tune the workspace defaults',
      description: 'Set units, environment defaults, and baking preferences so the rest of the product feels consistent.',
      pillar: 'lab',
    },
  },
  {
    prefix: 'help',
    meta: {
      eyebrow: 'Support',
      title: 'Get unstuck quickly',
      description: 'Find answers, clarify workflows, and understand the product without leaving the system.',
      pillar: 'pro',
    },
  },
  {
    prefix: 'landing',
    meta: {
      eyebrow: 'DoughLab Pro',
      title: 'Turn instinct into repeatable results',
      description: 'A connected product for planning, tracking, learning, and improving every bake from one system.',
      pillar: 'pro',
      showHeader: false,
    },
  },
];

export const PUBLIC_ROUTES = new Set([
    'landing',
    'plans',
    'upgrade',
    'upgrade/success',
    'upgrade/cancel',
    'help',
  'legal',
  'legal/terms',
  'terms',
  'legal/privacy',
  'privacy',
  'legal/cookies',
  'legal/eula',
  'legal/ip',
  'legal/contact',
]);

export function getPillarForRoute(route: Page): AppPillar {
  if (route === 'landing') return 'pro';
  if (route === 'plans' || route.startsWith('upgrade') || route.startsWith('pro')) return 'pro';
  if (route === 'community' || route.startsWith('community/')) return 'community';
  if (route === 'mylab' || route.startsWith('mylab') || route === 'batch') return 'lab';
  if (route === 'learn' || route.startsWith('learn') || route === 'styles' || route.startsWith('styles') || (route.startsWith('tools') && route !== 'tools/oven-profiler' && route !== 'tools/hydration-converter')) return 'library';
  return 'bake';
}

export function isPillarRouteActive(currentRoute: Page, pillar: AppPillar) {
  return getPillarForRoute(currentRoute) === pillar;
}

export function isContextRouteActive(currentRoute: Page, itemPage: Page) {
  if (currentRoute === itemPage) return true;
  if (itemPage === 'learn' && currentRoute.startsWith('learn/')) return true;
  if (itemPage === 'styles' && currentRoute.startsWith('styles/')) return true;
  if (itemPage === 'mylab' && (currentRoute === 'batch' || currentRoute.startsWith('mylab/'))) return true;
  if (itemPage === 'community' && currentRoute.startsWith('community/')) return true;
  if (itemPage === 'upgrade' && currentRoute.startsWith('upgrade/')) return true;
  if (itemPage === 'plans' && currentRoute.startsWith('plans/')) return true;
  return false;
}

export function getPageMeta(route: Page): ShellPageMeta {
  const match = PREFIX_META.find((entry) => route === entry.prefix || route.startsWith(`${entry.prefix}/`));
  if (match) return match.meta;

  return {
    eyebrow: 'Workspace',
    title: 'DoughLab Pro',
    description: 'A connected baking system for planning, tracking, learning, and improving every session.',
    pillar: getPillarForRoute(route),
  };
}
