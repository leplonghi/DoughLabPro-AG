import React, { useState } from 'react';
import { Page } from '@/types';
import UserMenu from '@/components/layout/UserMenu';
import {
    CalculatorIcon,
    AcademicCapIcon,
    Bars3Icon,
    CloseIcon,
    BookOpenIcon,
    FireIcon,
    BeakerIcon,
    UsersIcon,
    WrenchScrewdriverIcon,
    UserCircleIcon
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
    <span className="ml-2 inline-flex items-center rounded bg-dlp-bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-dlp-accent uppercase tracking-wide border border-dlp-border">
        PRO
    </span>
);

const DesktopHeader: React.FC<HeaderComponentProps> = ({ activePage, handleNavigate, onNavigate, onOpenAuth }) => {
    const { isAuthenticated, hasProAccess, openPaywall } = useUser();

    const navLinks = [
        { page: 'calculator', label: 'Calculator', icon: <CalculatorIcon className="h-4 w-4" /> },
        { page: 'mylab', label: 'My Lab', icon: <BeakerIcon className="h-4 w-4" /> },
        { page: 'styles', label: 'Styles', icon: <BookOpenIcon className="h-4 w-4" /> },
        { page: 'learn', label: 'Learn', icon: <AcademicCapIcon className="h-4 w-4" /> },
        { page: 'tools', label: 'Tools', icon: <WrenchScrewdriverIcon className="h-4 w-4" /> },
        { page: 'community', label: 'Community', icon: <UsersIcon className="h-4 w-4" /> },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 hidden border-b border-dlp-border bg-dlp-bg-card/90 backdrop-blur-md sm:block transition-all duration-200 shadow-dlp-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left Section: Logo & main links */}
                <div className="flex items-center gap-6">
                    <button onClick={() => handleNavigate('mylab')} aria-label="Home" className="flex flex-shrink-0 items-center">
                        <Logo className="h-9 w-auto" />
                    </button>
                    <nav className="flex items-center gap-1">
                        {navLinks.map(link => {
                            const isCalculator = link.page === 'calculator';
                            const isActive = activePage === link.page || activePage.startsWith(link.page + '/');

                            if (isCalculator) {
                                return (
                                    <button
                                        key={link.page}
                                        onClick={() => handleNavigate(link.page as Page)}
                                        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-dlp-sm hover:shadow-dlp-md hover:scale-105 ${isActive
                                            ? 'bg-dlp-accent text-white ring-2 ring-dlp-accent/50 ring-offset-2'
                                            : 'bg-dlp-accent text-white hover:bg-dlp-accent-hover'
                                            }`}
                                    >
                                        {link.icon}
                                        {link.label}
                                    </button>
                                );
                            }

                            return (
                                <button
                                    key={link.page}
                                    onClick={() => handleNavigate(link.page as Page)}
                                    className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors flex items-center gap-2 ${isActive
                                        ? 'text-dlp-accent bg-dlp-bg-muted'
                                        : 'text-dlp-text-secondary hover:bg-dlp-bg-muted hover:text-dlp-text-primary'
                                        }`}
                                >
                                    {link.icon}
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
                                        Free plan
                                    </span>
                                    <button
                                        onClick={() => openPaywall('general')}
                                        className="text-sm font-semibold text-dlp-accent hover:text-dlp-accent-hover hover:underline transition-all"
                                    >
                                        Unlock Pro
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
    const hasPro = hasProAccess;

    const navLinks = [
        { id: 'calculator', page: 'calculator', label: 'Calculator', icon: <CalculatorIcon className="h-6 w-6 text-dlp-text-muted" /> } as any,
        { id: 'mylab', page: 'mylab', label: 'My Lab', icon: <BeakerIcon className="h-6 w-6 text-dlp-text-muted" /> } as any,
        { id: 'styles', page: 'styles', label: 'Styles', icon: <BookOpenIcon className="h-6 w-6 text-dlp-text-muted" /> } as any,
        { id: 'learn', page: 'learn', label: 'Learn', icon: <AcademicCapIcon className="h-6 w-6 text-dlp-text-muted" /> } as any,
        { id: 'tools', page: 'tools', label: 'Tools', icon: <WrenchScrewdriverIcon className="h-6 w-6 text-dlp-text-muted" /> } as any,
        { id: 'community', page: 'community', label: 'Community', icon: <UsersIcon className="h-6 w-6 text-dlp-text-muted" /> } as any,
        { id: 'profile', page: 'profile', label: 'Profile', icon: <UserCircleIcon className="h-6 w-6 text-dlp-text-muted" /> } as any,
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
                <button onClick={() => handleNavigate('mylab')} aria-label="Home" className="flex flex-shrink-0 items-center">
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
                    {navLinks.map((link: any) => (
                        <button
                            key={link.id}
                            onClick={() => onMobileNavigate(link.page, link.requiresPro)}
                            className="flex w-full items-center gap-3 rounded-lg p-3 text-base font-semibold text-dlp-text-primary hover:bg-dlp-bg-muted"
                        >
                            {link.icon}
                            <span className="flex-grow text-left">{link.label}</span>
                            {link.requiresPro && !hasPro && <ProBadge />}
                        </button>
                    ))}
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
