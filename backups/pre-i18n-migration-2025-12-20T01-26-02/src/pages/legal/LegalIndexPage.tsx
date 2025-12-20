import React, { useState } from 'react';
import { Page } from '@/types';
import { ChevronDownIcon } from '@/components/ui/Icons';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';

// --- Placeholders for Company Data ---
const COMPANY_NAME = 'DoughLabPro';
const LAST_UPDATED_DATE = 'August 1, 2024';

const sections = [
    { id: 'overview', title: 'Legal Overview' },
    { id: 'terms', title: 'Terms of Use' },
    { id: 'privacy', title: 'Privacy Policy' },
    { id: 'cookies', title: 'Cookie Policy' },
    { id: 'affiliate', title: 'Affiliate Disclosure' },
    { id: 'eula', title: 'EULA' },
    { id: 'ip', title: 'Intellectual Property' },
    { id: 'contact', title: 'Contact' },
];

const LegalSection: React.FC<{ id: string, title: string, lastUpdated?: string, children: React.ReactNode }> = ({ id, title, lastUpdated, children }) => (
    <section id={id} className="mb-12 scroll-mt-24">
        <div className="border-b border-dlp-border pb-4">
            <h2 className="text-3xl font-bold tracking-tight text-dlp-text-primary sm:text-4xl">{title}</h2>
            {lastUpdated && (
                <p className="mt-2 text-sm text-dlp-text-muted">Last updated: {lastUpdated}</p>
            )}
        </div>
        <div className="prose mt-6 max-w-none text-dlp-text-secondary">
            {children}
        </div>
    </section>
);


const LegalIndexPage: React.FC<{ onNavigate: (page: Page) => void }> = () => {
    const { t } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // A simplified handler for mobile navigation that closes the menu.
    const handleMobileNav = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `#/legal?section=${id}`);
        }
    };

    React.useEffect(() => {
        // Attempt to scroll to section if present in URL
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
        } catch (e) {
            console.error("Error parsing legal navigation:", e);
        }
    }, []);

    return (
        <div className="mx-auto max-w-7xl">
            {/* Mobile Header/Dropdown */}
            <div className="lg:hidden mb-6 relative">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-full flex items-center justify-between rounded-lg bg-dlp-bg-card p-4 shadow-sm ring-1 ring-dlp-border text-left"
                >
                    <span className="font-semibold text-dlp-text-primary">{t('general.navigate_page')}</span>
                    <ChevronDownIcon className={`h-5 w-5 text-dlp-text-muted transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 rounded-lg bg-dlp-bg-card shadow-lg ring-1 ring-black ring-opacity-5 p-2 z-10">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#/legal?section=${section.id}`}
                                onClick={(e) => { e.preventDefault(); handleMobileNav(section.id); }}
                                className="block w-full text-left rounded-md p-3 text-sm font-medium text-dlp-text-secondary hover:bg-dlp-bg-soft"
                            >
                                {section.title}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Desktop Sidebar */}
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
                                className="flex w-full items-center rounded-lg p-3 text-sm font-semibold transition-colors text-dlp-text-secondary hover:bg-dlp-bg-soft hover:text-dlp-accent"
                            >
                                <span className="truncate">{section.title}</span>
                            </a>
                        ))}
                    </nav>
                </aside>

                <main className="lg:col-span-3">
                    <div className="rounded-2xl bg-dlp-bg-card p-6 shadow-dlp-lg ring-1 ring-dlp-border sm:p-10">

                        <LegalSection id="overview" title={t('general.legal_overview')}>
                            <p>This section consolidates the legal documentation governing your use of DoughLabPro. These documents constitute a binding legal agreement between you (t('common.user')) and {COMPANY_NAME} (t('common.company'), "we", "us").</p>
                            <p><strong>By accessing or using DoughLabPro, you acknowledge that you have read, understood, and agree to be bound by these Terms.</strong> If you do not agree, you must immediately cease usage of the Application.</p>
                        </LegalSection>

                        <LegalSection id="terms" title="1. Terms of Use" lastUpdated={LAST_UPDATED_DATE}>
                            <h3>1.1. Scope of Services</h3>
                            <p>DoughLabPro provides technical tools for baking and fermentation calculations, educational content, and data logging (the t('common.service')). You acknowledge that the Service is educational in nature. <strong>{t('ui.the_service_does_not_constitute_professional_culin')}</strong></p>

                            <h3>1.2. Account Security</h3>
                            <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these Terms or are used for fraudulent purposes.</p>

                            <h3>1.3. User Obligations</h3>
                            <p>{t('ui.you_agree_not_to')}</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>{t('ui.use_the_service_for_any_illegal_or_unauthorized_pu')}</li>
                                <li>Violate any laws in your jurisdiction (including but not limited to copyright laws);</li>
                                <li>{t('ui.interfere_with_or_disrupt_the_integrity_or_perform')}</li>
                                <li>{t('ui.attempt_to_gain_unauthorized_access_to_the_service')}</li>
                            </ul>

                            <h3>1.4. Food Safety Disclaimer</h3>
                            <p className="uppercase text-xs font-bold text-dlp-text-muted tracking-wider mb-2">{t('general.critical_notice')}</p>
                            <p>The User is solely responsible for adhering to food safety regulations and best practices. The consumption of raw eggs, raw flour, or undercooked products poses significant health risks (e.g., Salmonella, E. coli). <strong>DoughLabPro explicitly disclaims liability for any illness, injury, or damage resulting from recipes or techniques found within the application.</strong></p>

                            <h3>1.5. Limitation of Liability</h3>
                            <p className="uppercase font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL {COMPANY_NAME} BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; OR (III) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.</p>
                        </LegalSection>

                        <LegalSection id="privacy" title="2. Privacy Policy" lastUpdated={LAST_UPDATED_DATE}>
                            <p>Your privacy is critically important to us. This policy outlines our practices regarding the collection, use, and disclosure of your information.</p>

                            <h3>2.1. Information Collection</h3>
                            <p>{t('ui.we_collect_information_that_allows_us_to_provide_t')}</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>{t('ui.account_information')}</strong> Email address, name, and optional profile data.</li>
                                <li><strong>{t('ui.user_content')}</strong> Recipes, notes, photos, and logs stored in {t('nav.lab')}.</li>
                                <li><strong>{t('ui.usage_data')}</strong> Device identifiers, IP addresses, and interaction metrics used for analytics and performance optimization.</li>
                            </ul>

                            <h3>2.2. Data Usage Rights</h3>
                            <p>We use your data to operate, maintain, and improve the Service. We do not sell your personal data to third parties. We may share anonymized, aggregated data for research or marketing purposes.</p>

                            <h3>2.3. User Rights (GDPR/CCPA/LGPD)</h3>
                            <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the use of your personal data. To exercise these rights, please contact our Data Protection Officer at the email provided below.</p>
                        </LegalSection>

                        <LegalSection id="cookies" title="3. Cookie Policy" lastUpdated={LAST_UPDATED_DATE}>
                            <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>{t('ui.essential_cookies')}</strong> Necessary for the operation of the Service (e.g., authentication).</li>
                                <li><strong>{t('ui.preference_cookies')}</strong> Remember your settings and preferences.</li>
                                <li><strong>{t('ui.analytics_cookies')}</strong> Help us understand how users interact with the Service.</li>
                            </ul>
                            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                        </LegalSection>

                        <LegalSection id="affiliate" title="4. Affiliate Disclosure" lastUpdated={LAST_UPDATED_DATE}>
                            <p>{t('ui.discclosure_in_compliance_with_ftc_guidelines')}</p>
                            <p>DoughLabPro may participate in affiliate marketing programs, which allows us to earn commissions on purchases made through our links to third-party retailer sites.</p>
                            <p><strong>{t('ui.transparency')}</strong> If you click on a third-party link (e.g., Amazon Associates) and make a purchase, we may receive a commission at no additional cost to you. This helps support the development of the App. We only recommend products we verify and trust.</p>
                        </LegalSection>

                        <LegalSection id="eula" title="5. End User License Agreement (EULA)" lastUpdated={LAST_UPDATED_DATE}>
                            <h3>5.1. License Grant</h3>
                            <p>{COMPANY_NAME} grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the Application strictly in accordance with the terms of this Agreement.</p>

                            <h3>5.2. Restrictions</h3>
                            <p>{t('ui.you_agree_not_to_and_you_will_not_permit_others_to')}</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose, or otherwise commercially exploit the Application;</li>
                                <li>Modify, make derivative works of, disassemble, decrypt, reverse compile, or reverse engineer any part of the Application;</li>
                                <li>Remove, alter, or obscure any proprietary notice (including any copyright or trademark notice) of {COMPANY_NAME} or its affiliates.</li>
                            </ul>
                        </LegalSection>

                        <LegalSection id="ip" title="6. Intellectual Property">
                            <p>The Application and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by {COMPANY_NAME}, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
                        </LegalSection>

                        <LegalSection id="contact" title="7. Contact Information">
                            <p>{t('ui.for_any_questions_regarding_these_legal_terms_plea')}</p>
                            <div className="mt-4 p-4 bg-dlp-bg-soft rounded-lg border border-dlp-border">
                                <p className="font-medium text-dlp-text-primary">{t('general.legal_department')}</p>
                                <p>Email: <a href="mailto:legal@doughlabpro.com" className="text-dlp-accent hover:underline">legal@doughlabpro.com</a></p>
                                <p>Support: <a href="mailto:support@doughlabpro.com" className="text-dlp-accent hover:underline">support@doughlabpro.com</a></p>
                            </div>
                        </LegalSection>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default LegalIndexPage;
