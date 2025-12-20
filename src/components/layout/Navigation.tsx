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

interface NavigationProps {
    activePage: Page;
    onNavigate: (page: Page) => void;
    onOpenAuth: () => void;
}

interface HeaderComponentProps extends Omit<NavigationProps, 'activePage'> {
    activePage: Page;
    handleNavigate: (page: Page) => void;
}

const ProBadge = () => (
    <span className="ml-2 inline-flex items-center rounded bg-dlp-bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-dlp-accent uppercase tracking-wide border border-dlp-border">PRO</span>
);

const NotificationButton: React.FC<{ activePage: Page; handleNavigate: (page: Page) => void }> = ({ activePage, handleNavigate }) => {
    const { scheduledNotifications } = useNotifications();
    const pendingCount = scheduledNotifications.filter(n => n.status === 'PENDING').length;
    const isActive = activePage === 'notifications';

    return (
        <button
            onClick={() => handleNavigate('notifications')}
            className={`relative rounded-xl p-2.5 transition-all ${isActive
                ? 'bg-slate-50/80 border border-slate-100 shadow-sm'
                : 'hover:bg-slate-50 border border-transparent'
                }`}
            aria-label="Notifications"
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
        <header className="fixed top-0 left-0 w-full z-50 hidden border-b border-dlp-border bg-white/95 backdrop-blur-lg sm:block transition-all duration-200 shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left Section: Logo & main links */}
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
                                    className={`group relative rounded-xl px-4 py-2 text-sm font-bold tracking-tight transition-all flex items-center gap-2 border overflow-hidden ${isActive
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
                <div className="flex flex-shrink-0 items-center gap-4">
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

const MobileHeader: React.FC<HeaderComponentProps & { isMobileMenuOpen: boolean; setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; }> = ({ activePage, handleNavigate, onNavigate, onOpenAuth, isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const { hasProAccess, openPaywall } = useUser();
    const { t } = useTranslation(['common', 'profile', 'auth']);
    const hasPro = hasProAccess;

    const navLinks = [
        { id: 'calculator', page: 'calculator', label: t('common.nav.calculator'), icon: CalculatorIcon },
        { id: 'mylab', page: 'mylab', label: t('common.nav.lab'), icon: BeakerIcon },
        { id: 'styles', page: 'styles', label: t('common.nav.styles'), icon: BatchesIcon },
        { id: 'learn', page: 'learn', label: t('common.nav.learn'), icon: AcademicCapIcon },
        { id: 'tools', page: 'tools', label: t('common.nav.tools'), icon: WrenchScrewdriverIcon },
        { id: 'community', page: 'community', label: t('common.nav.community'), icon: UsersIcon },
        { id: 'notifications', page: 'notifications', label: 'Notifications', icon: BellIcon },
        { id: 'profile', page: 'profile', label: t('common.nav.profile'), icon: UserCircleIcon },
    ];

    const onMobileNavigate = (page: Page, requiresPro: boolean = false) => {
        if (requiresPro && !hasPro) {
            setIsMobileMenuOpen(false);
            openPaywall();
        } else {
            handleNavigate(page);
            setIsMobileMenuOpen(false);
        }
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-dlp-border bg-dlp-bg-card/90 backdrop-blur-md sm:hidden transition-all duration-200 shadow-dlp-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <button onClick={() => handleNavigate('mylab')} aria-label={t('common.nav.home')} className="flex flex-shrink-0 items-center transition-transform active:scale-95">
                    <Logo className="h-9 w-auto" />
                </button>
                <div className="flex items-center gap-2">
                    <UserMenu onNavigate={onNavigate} onOpenAuthModal={onOpenAuth} />
                    <button
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                        className="rounded-xl p-2.5 text-dlp-text-muted hover:bg-dlp-bg-muted transition-smooth touch-target"
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav className="fixed top-16 left-0 right-0 bg-white border-b border-dlp-border shadow-2xl z-50 max-h-[calc(100vh-4rem)] overflow-y-auto animate-slide-down">
                    <div className="p-4 space-y-1">
                        {navLinks.map((link: any, index: number) => {
                            const Icon = link.icon;
                            const isActive = activePage === link.page || activePage.startsWith(link.page + '/');
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => onMobileNavigate(link.page, link.requiresPro)}
                                    className={`flex w-full items-center gap-3 rounded-xl p-4 text-base font-semibold transition-smooth touch-target animate-slide-in-left stagger-${Math.min(index + 1, 5)} ${isActive
                                        ? 'bg-dlp-brand/10 text-dlp-brand shadow-sm'
                                        : 'text-dlp-text-primary hover:bg-dlp-bg-muted active:scale-98'
                                        }`}
                                >
                                    <Icon className={`h-6 w-6 transition-transform ${isActive ? 'text-dlp-brand scale-110' : 'text-dlp-text-muted'}`} />
                                    <span className="flex-grow text-left">{link.label}</span>
                                    {link.requiresPro && !hasPro && <ProBadge />}
                                    {isActive && (
                                        <div className="w-2 h-2 rounded-full bg-dlp-brand animate-pulse" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </nav>
            )}
        </header>
    );
};


const Navigation: React.FC<NavigationProps> = (props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigate = React.useCallback((page: Page) => {
        props.onNavigate(page);
        setIsMobileMenuOpen(false);
    }, [props.onNavigate]);

    return (
        <>
            <DesktopHeader {...props} handleNavigate={handleNavigate} />
            <MobileHeader {...props} handleNavigate={handleNavigate} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </>
    );
};

export default Navigation;
