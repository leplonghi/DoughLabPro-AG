import React from 'react';
import { Page } from '@/types';
import UserMenu from '@/components/layout/UserMenu';
import { useTranslation } from '@/i18n';
import {
    CalculatorIcon,
    AcademicCapIcon,
    BeakerIcon,
    UsersIcon,
    WrenchScrewdriverIcon,
    BatchesIcon
} from '@/components/ui/Icons';
import { useUser } from '@/contexts/UserProvider';
import { Logo } from '@/components/ui/Logo';
import { BellIcon } from '@/components/ui/Icons';

interface NavigationProps {
    activePage: Page;
    onNavigate: (page: Page) => void;
    onOpenAuth: () => void;
}

interface HeaderComponentProps extends Omit<NavigationProps, 'activePage'> {
    activePage: Page;
    handleNavigate: (page: Page) => void;
}

const UtilityControls: React.FC<{ mobile?: boolean; onNavigate: (page: Page) => void }> = React.memo(({ mobile = false, onNavigate }) => {
    const { t } = useTranslation(['common']);

    if (mobile) {
        return (
            <div className="flex items-center gap-1.5">
                <button
                    type="button"
                    onClick={() => onNavigate('notifications')}
                    className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200/70 bg-white/80 text-dlp-text-secondary shadow-[0_10px_24px_-20px_rgba(47,139,73,0.5)] transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:text-dlp-text-primary"
                    aria-label={t('ui.notifications_325', { defaultValue: 'Notifications' })}
                >
                    <BellIcon className="h-4 w-4 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
                    <span className="pointer-events-none absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_2px_rgba(255,255,255,0.9)]" />
                </button>
                <button
                    type="button"
                    onClick={() => onNavigate('tools')}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200/70 bg-white/80 text-dlp-text-secondary shadow-[0_10px_24px_-20px_rgba(47,139,73,0.5)] transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:text-dlp-text-primary"
                    aria-label={t('common.nav.tools')}
                >
                    <WrenchScrewdriverIcon className="h-4 w-4 text-emerald-600" />
                </button>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2">
            <button
                type="button"
                onClick={() => onNavigate('notifications')}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200/70 bg-white/80 text-dlp-text-secondary shadow-[0_12px_30px_-20px_rgba(47,139,73,0.45)] transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white hover:text-dlp-text-primary focus:outline-none focus:ring-2 focus:ring-dlp-primary focus:ring-offset-2"
                aria-label={t('ui.notifications_325', { defaultValue: 'Notifications' })}
            >
                <BellIcon className="h-5 w-5 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="pointer-events-none absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(255,255,255,0.9)]" />
            </button>

            <button
                type="button"
                onClick={() => onNavigate('tools')}
                className="flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-3 py-2 text-xs font-semibold text-dlp-text-secondary shadow-[0_12px_30px_-20px_rgba(47,139,73,0.45)] transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white hover:text-dlp-text-primary focus:outline-none focus:ring-2 focus:ring-dlp-primary focus:ring-offset-2"
            >
                <WrenchScrewdriverIcon className="h-4 w-4 text-emerald-600" />
                {t('common.nav.tools')}
            </button>
        </div>
    );
});

const DesktopHeader: React.FC<HeaderComponentProps> = React.memo(({ activePage, handleNavigate, onNavigate, onOpenAuth }) => {
    const { isAuthenticated, hasProAccess, openPaywall } = useUser();
    const { t } = useTranslation(['common', 'profile', 'auth']);

    const navLinks = [
        { page: 'calculator', label: t('common.nav.calculator'), icon: CalculatorIcon },
        { page: 'mylab', label: t('common.nav.lab'), icon: BeakerIcon },
        { page: 'styles', label: t('common.nav.styles'), icon: BatchesIcon },
        { page: 'learn', label: t('common.nav.learn'), icon: AcademicCapIcon },
        { page: 'community', label: t('common.nav.community'), icon: UsersIcon },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 hidden border-b border-dlp-border bg-[color:var(--dlp-bg-card)]/95 backdrop-blur-lg sm:block transition-all duration-200 shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => handleNavigate('mylab')}
                        aria-label={t('common.nav.home')}
                        className="flex flex-shrink-0 items-center transition-transform hover:scale-105 active:scale-95"
                    >
                        <Logo className="h-9 w-auto" />
                    </button>
                    <nav className="flex items-center gap-1">
                        {navLinks.map(link => {
                            const isActive = activePage === link.page || activePage.startsWith(link.page + '/');
                            const Icon = link.icon;

                            return (
                                <button
                                    key={link.page}
                                    onClick={() => handleNavigate(link.page as Page)}
                                className={`group flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-bold tracking-tight transition-all ${isActive
                                        ? 'border-emerald-200/90 bg-[linear-gradient(135deg,rgba(250,255,251,0.96)_0%,rgba(235,248,239,0.92)_100%)] text-emerald-800 shadow-[0_14px_30px_-22px_rgba(47,139,73,0.34)]'
                                        : 'border-transparent bg-white/40 text-dlp-text-muted hover:border-emerald-100 hover:bg-white/80 hover:text-dlp-text-primary'
                                        }`}
                                >
                                    <span className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${isActive ? 'border border-emerald-200 bg-emerald-100 text-emerald-700 shadow-[inset_0_0_0_1px_rgba(47,139,73,0.12)]' : 'bg-emerald-50/90 text-dlp-primary/75 group-hover:bg-emerald-100 group-hover:text-dlp-primary'}`}>
                                        <Icon className="h-[18px] w-[18px] transition-all duration-300 group-hover:scale-110" />
                                    </span>
                                    {link.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex flex-shrink-0 items-center gap-4">
                    <UtilityControls onNavigate={handleNavigate} />

                    {isAuthenticated && (
                        <div className="flex items-center gap-3 border-r border-dlp-border pr-4 mr-1">
                            {!hasProAccess && (
                                <>
                                    <span className="text-xs font-medium text-dlp-text-muted bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 transition-smooth hover:shadow-sm">
                                        {t('profile.free_member')}
                                    </span>
                                    <button
                                        onClick={() => openPaywall('general')}
                                        className="text-sm font-semibold text-dlp-primary hover:text-dlp-primary-hover transition-all hover:scale-105 active:scale-95 relative group"
                                    >
                                        <span className="relative z-10">{t('paywall.title').replace('DoughLab ', '')}</span>
                                        <span className="absolute inset-0 bg-dlp-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform" />
                                    </button>
                                </>
                            )}
                        </div>
                    )}

                    <UserMenu onNavigate={onNavigate} onOpenAuthModal={onOpenAuth} />
                </div>
            </div>
        </header>
    );
});

const MobileHeader: React.FC<HeaderComponentProps> = React.memo(({ activePage, handleNavigate, onNavigate, onOpenAuth }) => {
    const { t } = useTranslation(['common', 'profile', 'auth']);

    const navLinks = [
        { id: 'calculator', page: 'calculator', label: t('common.nav.calculator'), mobileLabel: t('common.nav.calculator_short', { defaultValue: 'Calc' }), icon: CalculatorIcon },
        { id: 'mylab', page: 'mylab', label: t('common.nav.lab'), mobileLabel: t('common.nav.lab_short', { defaultValue: 'Lab' }), icon: BeakerIcon },
        { id: 'styles', page: 'styles', label: t('common.nav.styles'), icon: BatchesIcon },
        { id: 'learn', page: 'learn', label: t('common.nav.learn'), icon: AcademicCapIcon },
        { id: 'community', page: 'community', label: t('common.nav.community'), mobileLabel: t('common.nav.community_short', { defaultValue: 'Community' }), icon: UsersIcon },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 border-b border-dlp-border bg-dlp-bg-card/90 backdrop-blur-md sm:hidden transition-all duration-200 shadow-dlp-sm">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                    <button onClick={() => handleNavigate('mylab')} aria-label={t('common.nav.home')} className="flex flex-shrink-0 items-center">
                        <Logo className="h-9 w-auto" />
                    </button>
                    <div className="flex items-center gap-2">
                        <UtilityControls mobile onNavigate={handleNavigate} />
                        <UserMenu onNavigate={onNavigate} onOpenAuthModal={onOpenAuth} />
                    </div>
                </div>
            </header>

            <nav className="fixed bottom-0 left-0 right-0 z-50 overflow-x-clip sm:hidden">
                <div className="absolute inset-x-0 bottom-0 top-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,251,248,0.99)_56%,rgba(243,247,244,1)_100%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(74,123,89,0.18),transparent)]" />
                <div className="relative mx-auto max-w-7xl border-t border-[#d8e7db] px-1 pt-1 pb-[calc(env(safe-area-inset-bottom,0px)+6px)]">
                    <div className="grid grid-cols-5 items-end gap-0">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = activePage === link.page || activePage.startsWith(link.page + '/');
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavigate(link.page as Page)}
                                    className="group relative flex min-w-0 flex-col items-center justify-end gap-0.5 px-0.5 py-1.5 font-semibold transition-all duration-300"
                                    style={{ color: isActive ? '#1f7a36' : '#31483a' }}
                                    aria-label={link.label}
                                >
                                    <span
                                        className={`pointer-events-none absolute top-0 h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(48,123,71,0),rgba(48,123,71,0.96),rgba(48,123,71,0))] transition-all duration-300 ${
                                            isActive ? 'w-9 opacity-100' : 'w-4 opacity-0 group-hover:opacity-35'
                                        }`}
                                    />
                                    <span className="relative flex h-11 w-11 items-center justify-center">
                                        <span
                                            className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                                                isActive
                                                    ? '-translate-y-0.5 bg-emerald-50/95 shadow-[0_10px_22px_-16px_rgba(31,122,54,0.45)]'
                                                    : 'group-hover:-translate-y-0.5 bg-transparent'
                                            }`}
                                            style={{
                                                color: isActive ? '#1f7a36' : '#486052',
                                                textShadow: 'none',
                                            }}
                                        >
                                            <Icon className={`h-[22px] w-[22px] transition-all duration-300 ${isActive ? 'scale-[1.08]' : 'group-hover:scale-[1.05]'}`} />
                                        </span>
                                    </span>
                                    <span
                                        className={`min-h-[2rem] w-full max-w-[5.25rem] px-0.5 text-center leading-[1.08] tracking-tight whitespace-normal break-words transition-all duration-300 ${
                                            isActive
                                                ? 'translate-y-0 text-[11.5px]'
                                                : 'translate-y-0.5 text-[11px] group-hover:translate-y-0'
                                        }`}
                                        style={{
                                            color: isActive ? '#1f7a36' : '#31483a',
                                            textShadow: 'none',
                                        }}
                                    >
                                        {link.mobileLabel ?? link.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </>
    );
});

const Navigation: React.FC<NavigationProps> = (props) => {
    const handleNavigate = React.useCallback((page: Page) => {
        props.onNavigate(page);
    }, [props.onNavigate]);

    return (
        <>
            <DesktopHeader {...props} handleNavigate={handleNavigate} />
            <MobileHeader {...props} handleNavigate={handleNavigate} />
        </>
    );
};

export default React.memo(Navigation);
