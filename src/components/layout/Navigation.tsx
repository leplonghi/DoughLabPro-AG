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

const ProBadge = () => (
    <span className="ml-2 inline-flex items-center rounded bg-dlp-bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-dlp-accent uppercase tracking-wide border border-dlp-border">PRO</span>
);



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
                {/* Left Section: Logo & main links */}
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
                                    className={`group rounded-xl px-4 py-2 text-sm font-bold tracking-tight transition-all flex items-center gap-2 border ${isActive
                                        ? 'text-dlp-brand bg-slate-50/80 border-slate-100 shadow-sm'
                                        : 'text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-800'
                                        }`}
                                >
                                    <Icon className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${isActive ? 'text-dlp-brand' : 'text-dlp-brand/60 group-hover:text-dlp-brand'}`} />
                                    {link.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Right Section: User Avatar & Plan Status */}
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
        { id: 'profile', page: 'profile', label: t('common.nav.profile'), icon: UserCircleIcon },
    ];

    const onMobileNavigate = (page: Page, requiresPro: boolean = false) => {
        if (requiresPro && !hasPro) {
            setIsMobileMenuOpen(false);
            openPaywall();
        } else {
            handleNavigate(page);
        }
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-dlp-border bg-dlp-bg-card/90 backdrop-blur-md sm:hidden transition-all duration-200 shadow-dlp-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <button onClick={() => handleNavigate('mylab')} aria-label={t('common.nav.home')} className="flex flex-shrink-0 items-center">
                    <Logo className="h-9 w-auto" />
                </button>
                <div className="flex items-center gap-2">

                    <UserMenu onNavigate={onNavigate} onOpenAuthModal={onOpenAuth} />
                    <button onClick={() => setIsMobileMenuOpen(prev => !prev)} className="rounded-md p-2 text-dlp-text-muted hover:bg-dlp-bg-muted">
                        {isMobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <nav className="space-y-1 p-4 border-t border-dlp-border bg-dlp-bg-card shadow-dlp-md absolute w-full left-0 max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link: any) => {
                        const Icon = link.icon;
                        return (
                            <button
                                key={link.id}
                                onClick={() => onMobileNavigate(link.page, link.requiresPro)}
                                className="flex w-full items-center gap-3 rounded-lg p-3 text-base font-semibold text-dlp-text-primary hover:bg-dlp-bg-muted"
                            >
                                <Icon className="h-6 w-6 text-dlp-brand" />
                                <span className="flex-grow text-left">{link.label}</span>
                                {link.requiresPro && !hasPro && <ProBadge />}
                            </button>
                        );
                    })}
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
