import React, { useState } from 'react';
import { Page } from '@/types';
import { ChevronDownIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';
import {
  LEGAL_COMPANY_NAME,
  LEGAL_EMAIL,
  LEGAL_LAST_UPDATED,
  LEGAL_SUPPORT_EMAIL,
  LGPD_RIGHTS,
} from './legalConfig';

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'privacy', title: 'Privacy and LGPD' },
  { id: 'terms', title: 'Terms and subscriptions' },
  { id: 'cookies', title: 'Cookies and local storage' },
  { id: 'ip', title: 'Community, IP, and content' },
  { id: 'contact', title: 'Contacts and requests' },
];

const LegalSection: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="mb-12 scroll-mt-24">
    <div className="border-b border-dlp-border pb-4">
      <h2 className="text-3xl font-bold tracking-tight text-dlp-text-primary sm:text-4xl">{title}</h2>
    </div>
    <div className="prose mt-6 max-w-none text-dlp-text-secondary prose-a:text-dlp-accent prose-headings:text-dlp-text-primary">
      {children}
    </div>
  </section>
);

const DocCard: React.FC<{
  title: string;
  description: string;
  cta: string;
  onClick: () => void;
}> = ({ title, description, cta, onClick }) => (
  <div className="rounded-2xl border border-dlp-border bg-dlp-bg-soft p-5">
    <h3 className="text-lg font-bold text-dlp-text-primary">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-dlp-text-secondary">{description}</p>
    <button
      type="button"
      onClick={onClick}
      className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-dlp-text-primary ring-1 ring-dlp-border transition-colors hover:bg-dlp-bg-card"
    >
      {cta}
    </button>
  </div>
);

const LegalIndexPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNav = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#/legal?section=${id}`);
    }
  };

  React.useEffect(() => {
    try {
      const hash = window.location.hash;
      if (hash.includes('?')) {
        const queryPart = hash.split('?')[1];
        const params = new URLSearchParams(queryPart);
        const sectionId = params.get('section');
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      }
    } catch (error) {
      console.error('Error parsing legal navigation:', error);
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative mb-6 lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex items-center justify-between rounded-lg bg-dlp-bg-card p-4 text-left shadow-sm ring-1 ring-dlp-border"
        >
          <span className="font-semibold text-dlp-text-primary">{t('general.navigate_page')}</span>
          <ChevronDownIcon className={`h-5 w-5 text-dlp-text-muted transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
        </button>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 z-10 mt-2 w-full rounded-lg bg-dlp-bg-card p-2 shadow-lg ring-1 ring-black ring-opacity-5">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#/legal?section=${section.id}`}
                onClick={(e) => { e.preventDefault(); handleMobileNav(section.id); }}
                className="block w-full rounded-md p-3 text-left text-sm font-medium text-dlp-text-secondary hover:bg-dlp-bg-soft"
              >
                {section.title}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <aside className="hidden lg:block lg:col-span-1">
          <nav className="sticky top-24 space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#/legal?section=${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(section.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', `#/legal?section=${section.id}`);
                  }
                }}
                className="flex w-full items-center rounded-lg p-3 text-sm font-semibold text-dlp-text-secondary transition-colors hover:bg-dlp-bg-soft hover:text-dlp-accent"
              >
                <span className="truncate">{section.title}</span>
              </a>
            ))}
          </nav>
        </aside>

        <main className="lg:col-span-3">
          <div className="rounded-2xl bg-dlp-bg-card p-6 shadow-dlp-lg ring-1 ring-dlp-border sm:p-10">
            <LegalSection id="overview" title="Legal Overview">
              <p>
                This area summarizes the current legal framework for {LEGAL_COMPANY_NAME}. The detailed documents are
                available on their dedicated pages and should be read together.
              </p>
              <p>
                Last coordinated review: <strong>{LEGAL_LAST_UPDATED}</strong>. The package now reflects the product&apos;s
                real operation around Firebase and Google services, community publishing, AI features, Stripe billing,
                cookies, local storage, and LGPD rights handling.
              </p>
              <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2">
                <DocCard
                  title="Privacy Policy"
                  description="Data categories, legal bases, sharing, international transfers, retention, security, and LGPD rights."
                  cta="Open Privacy Policy"
                  onClick={() => onNavigate('privacy')}
                />
                <DocCard
                  title="Terms of Use"
                  description="Service scope, subscriptions, community rules, AI usage, disclaimers, suspension, and liability limits."
                  cta="Open Terms"
                  onClick={() => onNavigate('terms')}
                />
                <DocCard
                  title="Cookie Policy"
                  description="Cookies, local storage, authentication technologies, analytics, and device-level controls."
                  cta="Open Cookie Policy"
                  onClick={() => onNavigate('legal/cookies')}
                />
                <DocCard
                  title="Contact and Requests"
                  description="Support, legal notices, privacy requests, and LGPD exercise channels."
                  cta="Open Contact Page"
                  onClick={() => onNavigate('legal/contact')}
                />
              </div>
            </LegalSection>

            <LegalSection id="privacy" title="Privacy and LGPD Highlights">
              <p>
                DoughLabPro acts as controller for account, workspace, subscription, support, and community data
                processed within the service. The Privacy Policy explains how account data, lab records, uploaded images,
                community posts, billing references, analytics, AI prompts, and local device data are handled.
              </p>
              <p>
                Cross-border processing may occur because the product relies on cloud, identity, AI, and payment
                providers with global infrastructure. The policy also explains the legal bases used under the LGPD and
                how to exercise your rights.
              </p>
              <p>LGPD rights highlighted in the current policy include:</p>
              <ul className="list-disc pl-5 space-y-1">
                {LGPD_RIGHTS.slice(0, 5).map((right) => (
                  <li key={right}>{right}</li>
                ))}
              </ul>
              <p>
                Dedicated channel: <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
              </p>
            </LegalSection>

            <LegalSection id="terms" title="Terms, Subscriptions, and Product Rules">
              <p>
                The Terms of Use define what DoughLabPro provides, the acceptable-use rules for accounts and community
                features, the treatment of user-generated content, the limits of AI-assisted suggestions, and the
                responsibilities that remain with the user for food safety and production decisions.
              </p>
              <p>
                Paid plans, checkout, renewals, and billing support are handled according to the plan offered at the
                time of purchase and the third-party billing infrastructure configured for the product.
              </p>
            </LegalSection>

            <LegalSection id="cookies" title="Cookies, Local Storage, and Similar Technologies">
              <p>
                DoughLabPro uses browser technologies not only in the classic cookie sense but also through local storage,
                service workers, notification permissions, and session technologies from providers such as Firebase,
                Google, and Stripe.
              </p>
              <p>
                These technologies are used to keep you signed in, preserve app preferences, support reminders, recover
                app state after navigation or deploys, and collect sanitized product analytics where enabled.
              </p>
            </LegalSection>

            <LegalSection id="ip" title="Community, Intellectual Property, and Content">
              <p>
                You keep ownership of your recipes, notes, photos, and posts. DoughLabPro receives the limited rights
                necessary to host, process, display, moderate, back up, and operate that content within the service.
              </p>
              <p>
                Community visibility is optional but public content may be seen and shared by others. Copyright,
                trademark, or image-right complaints can be reported through the legal channel.
              </p>
            </LegalSection>

            <LegalSection id="contact" title="Contacts and Request Channels">
              <p>
                General support: <a href={`mailto:${LEGAL_SUPPORT_EMAIL}`}>{LEGAL_SUPPORT_EMAIL}</a><br />
                Legal, privacy, and LGPD channel: <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
              </p>
              <p>
                To exercise LGPD rights, request deletion, correction, or access, please identify the account involved
                and describe the request clearly. We may ask for additional information reasonably necessary to validate
                identity and protect account security.
              </p>
            </LegalSection>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LegalIndexPage;
