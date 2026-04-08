import { Page } from '@/types';

export type CanonicalRoute =
  | 'mylab'
  | 'batch'
  | 'styles'
  | 'styles/detail'
  | 'mylab/levain/detail'
  | 'mylab/consistency/detail'
  | 'community'
  | 'community/post'
  | 'community/user'
  | 'community/create'
  | 'learn'
  | 'learn/article'
  | 'learn/search'
  | 'learn/category'
  | 'calculator'
  | 'plans'
  | 'upgrade'
  | 'profile'
  | 'settings'
  | 'settings/language'
  | 'help'
  | 'landing'
  | 'legal'
  | 'legal/terms'
  | 'legal/privacy'
  | 'legal/cookies'
  | 'legal/eula'
  | 'legal/ip'
  | 'legal/contact'
  | Page;

export interface ParsedRoute {
  route: CanonicalRoute;
  params: string | null;
}

const DYNAMIC_PREFIXES: ReadonlyArray<CanonicalRoute> = [
  'batch',
  'styles/detail',
  'mylab/levain/detail',
  'mylab/consistency/detail',
  'community/post',
  'community/user',
  'learn/article',
  'learn/search',
  'learn/category',
];

function splitHash(hash: string): string[] {
  return hash.replace(/^#\//, '').split('?')[0].split('/').filter(Boolean);
}

export function toHash(route: Page, params?: string): string {
  return params ? `#/${route}/${params}` : `#/${route}`;
}

export function parseHash(rawHash: string): ParsedRoute {
  const hash = rawHash.replace(/^#\//, '');
  if (!hash) return { route: 'mylab', params: null };

  const parts = splitHash(rawHash);
  const normalized = parts.join('/');

  if (parts[0] === 'batch' && parts[1]) {
    return { route: 'batch', params: parts[1] };
  }

  if (parts[0] === 'styles' && parts[1] === 'detail' && parts[2]) {
    return { route: 'styles/detail', params: parts[2] };
  }

  if (parts[0] === 'mylab' && parts[1] === 'levain' && parts[2] === 'detail' && parts[3]) {
    return { route: 'mylab/levain/detail', params: parts[3] };
  }

  if (parts[0] === 'mylab' && parts[1] === 'consistency' && parts[2] === 'detail' && parts[3]) {
    return { route: 'mylab/consistency/detail', params: parts[3] };
  }

  if (parts[0] === 'community' && parts[1] === 'detail' && parts[2]) {
    return { route: 'community/post', params: parts[2] };
  }

  if (parts[0] === 'community' && parts[1] === 'post' && parts[2]) {
    return { route: 'community/post', params: parts[2] };
  }

  if (parts[0] === 'community' && parts[1] === 'user' && parts[2]) {
    return { route: 'community/user', params: parts[2] };
  }

  if (parts[0] === 'community' && parts[1] === 'create') {
    return { route: 'community/create', params: null };
  }

  if (parts[0] === 'learn' && parts[1] === 'article' && parts[2]) {
    return { route: 'learn/article', params: parts[2] };
  }

  if (parts[0] === 'learn' && parts[1] === 'search' && parts[2]) {
    return { route: 'learn/search', params: parts[2] };
  }

  if (parts[0] === 'learn' && parts[1] === 'category' && parts[2]) {
    return { route: 'learn/category', params: decodeURIComponent(parts[2]) };
  }

  return { route: normalized as CanonicalRoute, params: null };
}

export function normalizeNavigateInput(route: Page, params?: string): ParsedRoute {
  if (route === 'styles' && params) {
    return { route: 'styles/detail', params };
  }

  if (DYNAMIC_PREFIXES.includes(route as CanonicalRoute)) {
    return { route: route as CanonicalRoute, params: params || null };
  }

  if (route === 'community/detail') {
    return { route: 'community/post', params: params || null };
  }

  if (route === 'mylab/levain' && params) {
    return { route: 'mylab/levain/detail', params };
  }

  if (route === 'mylab/consistency' && params) {
    return { route: 'mylab/consistency/detail', params };
  }

  return { route: route as CanonicalRoute, params: params || null };
}
