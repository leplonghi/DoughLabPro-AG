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

const DesktopHeader: React.FC<HeaderComponentProps> = ({ activePage, handleNavigate, onNavigate, onOpenAuth }) => {
    const { isAuthenticated, hasProAccess, openPaywall } = useUser();
    const { t } = useTranslation(['common', 'profile', 'auth']);

    const navLinks = [
        { page: 'calculator', label: t('common.nav.calculator'), icon: CalculatorIcon },
        { page: 'mylab', label: t('common.nav.lab'), icon: BeakerIcon },
        { page: 'styles', label: t('common.nav.styles'), icon: BatchesIcon },
        { page: 'learn', label: t('common.nav.learn'), icon: AcademicCapIcon },
        { page: 'tools', label: t('common.nav.tools'), icon: WrenchScrewdriverIcon },
        { page: 'community', label: t('common.nav.community'), icon: UsersIcon },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 hidden border-b border-dlp-border bg-white/95 backdrop-blur-lg sm:block transition-all duration-200 shadow-sm">
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
                                        ? 'border-emerald-200/80 bg-[linear-gradient(135deg,rgba(67,176,93,0.14)_0%,rgba(255,255,255,0.9)_100%)] text-dlp-brand shadow-[0_18px_36px_-26px_rgba(47,139,73,0.42)]'
                                        : 'border-transparent bg-white/40 text-dlp-text-muted hover:border-emerald-100 hover:bg-white/80 hover:text-dlp-text-primary'
                                        }`}
                                >
                                    <span className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${isActive ? 'bg-[linear-gradient(135deg,_#43b05d_0%,_#2f8b49_100%)] text-white shadow-[0_10px_20px_-14px_rgba(47,139,73,0.7)]' : 'bg-emerald-50/90 text-dlp-brand/75 group-hover:bg-emerald-100 group-hover:text-dlp-brand'}`}>
                                        <Icon className="h-[18px] w-[18px] transition-all duration-300 group-hover:scale-110" />
                                    </span>
                                    {link.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex flex-shrink-0 items-center gap-4">
                    <button
                        onClick={() => handleNavigate('settings')}
                        className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200/70 bg-white/80 text-dlp-text-secondary shadow-[0_12px_30px_-20px_rgba(47,139,73,0.45)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white hover:text-dlp-text-primary focus:outline-none focus:ring-2 focus:ring-dlp-accent focus:ring-offset-2"
                        aria-label={t('common.nav.settings')}
                    >
                        <BellIcon className="h-5 w-5 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
                        <span className="pointer-events-none absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(255,255,255,0.9)]" />
                    </button>

                    {isAuthenticated && (
                        <div className="flex items-center gap-3 border-r border-dlp-border pr-4 mr-1">
                            {!hasProAccess && (
                                <>
                                    <span className="text-xs font-medium text-dlp-text-muted bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 transition-smooth hover:shadow-sm">
                                        {t('profile.free_member')}
                                    </span>
                                    <button
                                        onClick={() => openPaywall('general')}
                                        className="text-sm font-semibold text-dlp-accent hover:text-dlp-accent-hover transition-all hover:scale-105 active:scale-95 relative group"
                                    >
                                        <span className="relative z-10">{t('paywall.title').replace('DoughLab ', '')}</span>
                                        <span className="absolute inset-0 bg-dlp-brand/5 rounded-lg scale-0 group-hover:scale-100 transition-transform" />
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
};

const MobileHeader: React.FC<HeaderComponentProps> = ({ activePage, handleNavigate, onNavigate, onOpenAuth }) => {
    const { t } = useTranslation(['common', 'profile', 'auth']);

    const navLinks = [
        { id: 'calculator', page: 'calculator', label: t('common.nav.calculator'), icon: CalculatorIcon },
        { id: 'mylab', page: 'mylab', label: t('common.nav.lab'), icon: BeakerIcon },
        { id: 'styles', page: 'styles', label: t('common.nav.styles'), icon: BatchesIcon },
        { id: 'learn', page: 'learn', label: t('common.nav.learn'), icon: AcademicCapIcon },
        { id: 'tools', page: 'tools', label: t('common.nav.tools'), icon: WrenchScrewdriverIcon },
        { id: 'community', page: 'community', label: t('common.nav.community'), icon: UsersIcon },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 border-b border-dlp-border bg-dlp-bg-card/90 backdrop-blur-md sm:hidden transition-all duration-200 shadow-dlp-sm">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                    <button onClick={() => handleNavigate('mylab')} aria-label={t('common.nav.home')} className="flex flex-shrink-0 items-center">
                        <Logo className="h-9 w-auto" />
                    </button>
                    <div className="flex items-center gap-2">
                        <UserMenu onNavigate={onNavigate} onOpenAuthModal={onOpenAuth} />
                    </div>
                </div>
            </header>

            <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.9)_0%,_rgba(234,248,236,0.85)_100%)] backdrop-blur-2xl shadow-[0_-18px_46px_-28px_rgba(15,23,42,0.3)] sm:hidden">
                <div className="mx-auto max-w-7xl px-2.5 py-2.5">
                    <div className="grid grid-cols-6 gap-2 pb-safe">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = activePage === link.page || activePage.startsWith(link.page + '/');
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavigate(link.page as Page)}
                                    className={`group flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-[1.2rem] border px-1.5 py-2.5 text-[10px] font-semibold transition-all ${
                                        isActive
                                            ? 'border-emerald-200/80 bg-[linear-gradient(135deg,_rgba(67,176,93,0.98)_0%,_rgba(47,139,73,0.98)_100%)] text-white shadow-[0_16px_34px_-20px_rgba(47,139,73,0.7)]'
                                            : 'border-white/70 bg-white/80 text-dlp-text-muted shadow-[0_12px_26px_-22px_rgba(15,23,42,0.18)] hover:border-emerald-200 hover:bg-emerald-50/85 hover:text-dlp-text-primary'
                                    }`}
                                >
                                    <span className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all ${isActive ? 'bg-white/18 text-white' : 'bg-emerald-50/90 text-dlp-brand/80 group-hover:bg-emerald-100 group-hover:text-dlp-brand'}`}>
                                        <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-105" />
                                    </span>
                                    <span className={`w-full truncate text-center leading-none ${isActive ? 'text-white/95' : ''}`}>{link.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </>
    );
};

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

export default Navigation;
