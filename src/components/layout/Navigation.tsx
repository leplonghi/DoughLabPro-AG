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
        <header className="fixed top-0 left-0 w-full z-50 hidden border-b border-dlp-border bg-dlp-bg-card/90 backdrop-blur-md sm:block transition-all duration-200 shadow-dlp-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-6">
                    <button onClick={() => handleNavigate('mylab')} aria-label={t('common.nav.home')} className="flex flex-shrink-0 items-center">
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
                    {isAuthenticated && (
                        <div className="flex items-center gap-3 border-r border-dlp-border pr-4 mr-1">
                            {!hasProAccess && (
                                <>
                                    <span className="text-xs font-medium text-dlp-text-muted bg-dlp-bg-muted px-2.5 py-1 rounded-full border border-dlp-border">
                                        {t('profile.free_member')}
                                    </span>
                                    <button
                                        onClick={() => openPaywall('general')}
                                        className="text-sm font-semibold text-dlp-accent hover:text-dlp-accent-hover hover:underline transition-all"
                                    >
                                        {t('paywall.title').replace('DoughLab ', '')}
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

            <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/70 bg-white/75 backdrop-blur-2xl shadow-[0_-16px_40px_-26px_rgba(15,23,42,0.28)] sm:hidden">
                <div className="mx-auto max-w-7xl px-2.5 py-2.5">
                    <div className="grid grid-cols-6 gap-2 pb-safe">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = activePage === link.page || activePage.startsWith(link.page + '/');
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavigate(link.page as Page)}
                                    className={`group flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-[1.15rem] border px-1.5 py-2.5 text-[10px] font-semibold transition-all ${
                                        isActive
                                            ? 'border-emerald-200/80 bg-[linear-gradient(135deg,_#43b05d_0%,_#2f8b49_100%)] text-white shadow-[0_14px_30px_-18px_rgba(47,139,73,0.7)]'
                                            : 'border-white/60 bg-white/70 text-dlp-text-muted shadow-[0_10px_24px_-20px_rgba(15,23,42,0.18)] hover:border-emerald-100 hover:bg-emerald-50/85 hover:text-dlp-text-primary'
                                    }`}
                                >
                                    <span className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all ${isActive ? 'bg-white/18 text-white' : 'bg-emerald-50 text-dlp-brand/80 group-hover:bg-emerald-100 group-hover:text-dlp-brand'}`}>
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
