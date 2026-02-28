import React, { useState } from 'react';
import { Page } from '@/types';
import UserMenu from '@/components/layout/UserMenu';
import { useTranslation } from '@/i18n';
import {
    CalculatorIcon,
    AcademicCapIcon,
    Bars3Icon,
    CloseIcon,
    BookOpenIcon,
    BeakerIcon,
    UsersIcon,
    WrenchScrewdriverIcon,
    UserCircleIcon,
    BatchesIcon,
    BellIcon
} from '@/components/ui/Icons';
import { useUser } from '@/contexts/UserProvider';
import { Logo } from '@/components/ui/Logo';
import { useNotifications } from '@/contexts/NotificationContext';
import { LanguageSelector } from '@/components/layout/LanguageSelector';

interface NavigationProps {
    activePage: Page;
    onNavigate: (page: Page) => void;
    onOpenAuth: () => void;
}

interface HeaderComponentProps extends Omit<NavigationProps, 'activePage'> {
    activePage: Page;
    handleNavigate: (page: Page) => void;
}

const ProBadge = () => {
    const { t } = useTranslation(['learn']);
    return (
        <span className="ml-2 inline-flex items-center rounded bg-dlp-bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-dlp-accent uppercase tracking-wide border border-dlp-border">
            {t('learn:pro')}
        </span>
    );
};

const NotificationButton: React.FC<{ activePage: Page; handleNavigate: (page: Page) => void }> = ({ activePage, handleNavigate }) => {
    const { scheduledNotifications } = useNotifications();
    const { t } = useTranslation(['ui']);
    const pendingCount = scheduledNotifications.filter(n => n.status === 'PENDING').length;
    const isActive = activePage === 'notifications';

    return (
        <button
            onClick={() => handleNavigate('notifications')}
            className={`relative rounded-xl p-2.5 transition-all focus-ring ${isActive
                ? 'bg-slate-50/80 border border-slate-100 shadow-sm'
                : 'hover:bg-slate-50 border border-transparent'
                }`}
            aria-label={t('ui:notifications')}
        >
            <BellIcon className={`h-5 w-5 ${isActive ? 'text-dlp-brand' : 'text-slate-500'}`} />
            {pendingCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    {pendingCount > 9 ? '9+' : pendingCount}
                </span>
            )}
        </button>
    );
};

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
        <header className="fixed top-0 left-0 w-full z-40 hidden border-b border-dlp-border bg-white/95 backdrop-blur-lg md:block transition-all duration-200 shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left Section: Logo & main links */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => handleNavigate('calculator')}
                        aria-label={t('common.nav.home')}
                        className="flex flex-shrink-0 items-center rounded-lg transition-transform hover:scale-105 active:scale-95 focus-ring"
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
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`group relative rounded-xl px-4 py-2 text-sm font-bold tracking-tight transition-all flex items-center gap-2 border overflow-hidden focus-ring ${isActive
                                        ? 'text-dlp-brand bg-dlp-brand/5 border-dlp-brand/20 shadow-sm'
                                        : 'text-slate-600 border-transparent hover:bg-slate-50 hover:text-slate-900 hover:border-slate-100'
                                        }`}
                                >
                                    {/* Active indicator */}
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-dlp-brand to-dlp-brand-dark animate-slide-in-left" />
                                    )}
                                    <Icon className={`h-5 w-5 transition-all duration-300 ${isActive
                                        ? 'text-dlp-brand'
                                        : 'text-slate-400 group-hover:text-dlp-brand group-hover:scale-110 group-hover:rotate-3'
                                        }`} />
                                    <span className="relative">
                                        {link.label}
                                    </span>
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Right Section: User Avatar & Plan Status */}
                <div className="flex flex-shrink-0 items-center gap-3">
                    {/* Language Selector */}
                    <LanguageSelector />

                    {/* Notifications Button */}
                    <NotificationButton activePage={activePage} handleNavigate={handleNavigate} />

                    {isAuthenticated && (
                        <div className="flex items-center gap-3 border-r border-dlp-border pr-4 mr-1">
                            {!hasProAccess && (
                                <>
                                    <span className="text-xs font-medium text-dlp-text-muted bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 transition-smooth hover:shadow-sm">
                                        {t('profile.free_member')}
                                    </span>
                                    <button
                                        onClick={() => openPaywall('general')}
                                        className="text-sm font-semibold text-dlp-accent hover:text-dlp-accent-hover transition-all hover:scale-105 active:scale-95 relative group focus-ring rounded-lg"
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

const MobileHeader: React.FC<HeaderComponentProps & { isMobileMenuOpen: boolean; setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; }> = ({ activePage, handleNavigate, onNavigate, onOpenAuth }) => {
    const { t } = useTranslation(['common', 'profile', 'auth']);

    return (
        <header className="fixed top-0 left-0 w-full z-40 border-b border-dlp-border bg-dlp-bg-card/90 backdrop-blur-md md:hidden transition-all duration-200 shadow-dlp-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <button
                    onClick={() => handleNavigate('calculator')}
                    aria-label={t('common.nav.home')}
                    className="flex flex-shrink-0 items-center rounded-lg transition-transform active:scale-95 focus-ring"
                >
                    <Logo className="h-9 w-auto" />
                </button>
                <div className="flex items-center gap-2">
                    <LanguageSelector />
                    <UserMenu onNavigate={onNavigate} onOpenAuthModal={onOpenAuth} />
                </div>
            </div>
        </header>
    );
};

const MobileBottomNav: React.FC<HeaderComponentProps & { isMobileMenuOpen: boolean; setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; }> = ({ activePage, handleNavigate, isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const { t } = useTranslation(['common']);

    const navItems = [
        { id: 'calculator', page: 'calculator', label: t('common.nav.calculator'), icon: CalculatorIcon },
        { id: 'mylab', page: 'mylab', label: t('common.nav.lab'), icon: BeakerIcon },
        { id: 'styles', page: 'styles', label: t('common.nav.styles'), icon: BatchesIcon },
        { id: 'learn', page: 'learn', label: t('common.nav.learn'), icon: AcademicCapIcon },
        { id: 'tools', page: 'tools', label: t('common.nav.tools'), icon: WrenchScrewdriverIcon },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-dlp-border pb-safe-area-bottom shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden">
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activePage === item.page || activePage.startsWith(item.page + '/');
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavigate(item.page as Page)}
                            className={`group flex flex-col items-center justify-center w-full h-full space-y-1 focus-ring rounded-lg ${isActive ? 'text-dlp-brand' : 'text-slate-400 hover:text-slate-600'}`}
                            aria-label={item.label}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            <Icon className={`h-6 w-6 transition-transform group-active:scale-95 ${isActive ? 'scale-110' : ''}`} />
                            <span className="text-[10px] font-medium truncate max-w-[64px]">{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

const Navigation: React.FC<NavigationProps> = (props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Skip Link Handler
    const handleSkipToContent = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.setAttribute('tabIndex', '-1');
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigate = React.useCallback((page: Page) => {
        props.onNavigate(page);
        setIsMobileMenuOpen(false);
    }, [props.onNavigate]);

    return (
        <>
            <a
                href="#main-content"
                onClick={handleSkipToContent}
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-toast focus:px-4 focus:py-2 focus:bg-white focus:text-dlp-brand focus:font-bold focus:shadow-xl focus:rounded-lg focus:border focus:border-dlp-brand focus:outline-none focus:ring-2 focus:ring-dlp-brand focus:ring-offset-2 transition-transform"
            >
                Skip to main content
            </a>
            <DesktopHeader {...props} handleNavigate={handleNavigate} />
            <MobileHeader {...props} handleNavigate={handleNavigate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileBottomNav {...props} handleNavigate={handleNavigate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </>
    );
};

export default Navigation;