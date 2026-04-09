import React from 'react';
import { CanonicalRoute } from '@/app/routing';
import { Page } from '@/types';

type NavigateFn = (page: Page, params?: string) => void;

interface SupportRouteContext {
  route: CanonicalRoute;
  navigate: NavigateFn;
  onOpenAuth: () => void;
  components: {
    HelpPage: React.ComponentType;
    LegalIndexPage: React.ComponentType<{ onNavigate: NavigateFn }>;
    TermsPage: React.ComponentType;
    PrivacyPage: React.ComponentType;
    CookiesPage: React.ComponentType;
    EulaPage: React.ComponentType;
    IpPage: React.ComponentType;
    ContactPage: React.ComponentType;
    PublicLandingPage: React.ComponentType<{ onNavigate: NavigateFn; onOpenAuth: () => void }>;
    UpgradePage: React.ComponentType<{ success?: boolean; cancel?: boolean }>;
  };
}

export function resolveSupportRoute({
  route,
  navigate,
  onOpenAuth,
  components,
}: SupportRouteContext): React.ReactNode | null {
  switch (route) {
    case 'help':
      return <components.HelpPage />;
    case 'legal':
      return <components.LegalIndexPage onNavigate={navigate} />;
    case 'legal/terms':
    case 'terms':
      return <components.TermsPage />;
    case 'legal/privacy':
    case 'privacy':
      return <components.PrivacyPage />;
    case 'legal/cookies':
      return <components.CookiesPage />;
    case 'legal/eula':
      return <components.EulaPage />;
    case 'legal/ip':
      return <components.IpPage />;
    case 'legal/contact':
      return <components.ContactPage />;
    case 'landing':
      return <components.PublicLandingPage onNavigate={navigate} onOpenAuth={onOpenAuth} />;
    case 'upgrade/success':
      return <components.UpgradePage success={true} />;
    case 'upgrade/cancel':
      return <components.UpgradePage cancel={true} />;
    default:
      return null;
  }
}
