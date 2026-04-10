import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useUser } from '@/contexts/UserProvider';
import { Page } from '@/types';
import { useTranslation } from '@/i18n';
import {
    UserCircleIcon,
    SettingsIcon,
    QuestionMarkCircleIcon,
    ClockIcon,
    ArrowRightOnRectangleIcon,
    ChevronRightIcon
} from '@/components/ui/Icons';

interface UserMenuProps {
    onNavigate: (page: Page) => void;
    onOpenAuthModal: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ onNavigate, onOpenAuthModal }) => {
    const { logout } = useAuth();
    const { user, isAuthenticated } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    if (!isAuthenticated) {
        return (
            <button
                onClick={onOpenAuthModal}
                className="text-sm font-semibold text-dlp-text-secondary hover:text-dlp-text-primary"
            >
                {t('common.sign_in')}
            </button>
        );
    }

    const handleLogout = async () => {
        await logout();
        setIsOpen(false);
        onNavigate('mylab'); // Redirect to home after logout
    };

    const handleItemClick = (page: Page) => {
        onNavigate(page);
        setIsOpen(false);
    };

    const displayName = user?.name || user?.email || 'User';
    const initials = displayName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-emerald-200/80 bg-white/80 text-dlp-primary shadow-[0_12px_30px_-20px_rgba(47,139,73,0.45)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-dlp-primary focus:ring-offset-2"
                aria-label={t('common.nav.profile')}
            >
                {user?.avatar ? (
                    <img
                        src={user.avatar}
                        alt={displayName}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <span className="text-sm font-bold tracking-tight">{initials}</span>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 z-50 mt-3 w-72 origin-top-right overflow-hidden rounded-[1.35rem] border border-dlp-border bg-[color:var(--dlp-bg-card)] shadow-[0_26px_60px_-32px_rgba(15,23,42,0.3)] ring-1 ring-emerald-100/70 backdrop-blur-xl focus:outline-none animate-fade-in">
                    {/* User Info Header */}
                    <div className="border-b border-dlp-border bg-[linear-gradient(135deg,rgba(237,250,239,0.95)_0%,rgba(255,255,255,0.92)_100%)] px-4 py-3">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white bg-white shadow-sm">
                                {user?.avatar ? (
                                    <img
                                        src={user.avatar}
                                        alt={displayName}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <span className="text-sm font-bold tracking-tight text-dlp-primary">{initials}</span>
                                )}
                            </div>
                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-dlp-text-primary">
                                    {displayName}
                                </p>
                                <p className="mt-0.5 truncate text-xs text-dlp-text-muted">
                                    {user?.email || ''}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1.5">
                        <button
                            onClick={() => handleItemClick('profile')}
                            className="group flex w-full items-center px-4 py-3 text-sm text-dlp-text-secondary transition-colors hover:bg-emerald-50/70"
                        >
                            <UserCircleIcon className="mr-3 h-5 w-5 text-dlp-text-muted transition-colors group-hover:text-dlp-primary" />
                            {t('common.nav.profile')}
                        </button>

                        <button
                            onClick={() => handleItemClick('settings')}
                            className="group flex w-full items-center justify-between px-4 py-3 text-sm text-dlp-text-secondary transition-colors hover:bg-emerald-50/70"
                        >
                            <div className="flex items-center">
                                <SettingsIcon className="mr-3 h-5 w-5 text-dlp-text-muted transition-colors group-hover:text-dlp-primary" />
                                {t('common.nav.settings')}
                            </div>
                            <ChevronRightIcon className="h-4 w-4 text-dlp-text-muted" />
                        </button>

                        <button
                            onClick={() => handleItemClick('help')}
                            className="group flex w-full items-center px-4 py-3 text-sm text-dlp-text-secondary transition-colors hover:bg-emerald-50/70"
                        >
                            <QuestionMarkCircleIcon className="mr-3 h-5 w-5 text-dlp-text-muted transition-colors group-hover:text-dlp-primary" />
                            {t('common.nav.help')}
                        </button>

                        <button
                            onClick={() => handleItemClick('legal')}
                            className="group flex w-full items-center px-4 py-3 text-sm text-dlp-text-secondary transition-colors hover:bg-emerald-50/70"
                        >
                            <ClockIcon className="mr-3 h-5 w-5 text-dlp-text-muted transition-colors group-hover:text-dlp-primary" />
                            {t('common.nav.legal')}
                        </button>

                        <div className="my-1 border-t border-dlp-border"></div>

                        <button
                            onClick={handleLogout}
                            className="group flex w-full items-center px-4 py-3 text-sm text-red-600 transition-colors hover:bg-red-50"
                        >
                            <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-red-500 transition-colors group-hover:text-red-600" />
                            {t('auth.sign_out')}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
