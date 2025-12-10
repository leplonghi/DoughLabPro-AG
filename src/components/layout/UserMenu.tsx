import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useUser } from '@/contexts/UserProvider';
import { Page } from '@/types';
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
                Sign In
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

    // Get initials for avatar
    const initials = user?.name
        ? user.name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase()
        : 'U';

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-dlp-bg-card border border-dlp-accent text-dlp-accent font-semibold hover:bg-dlp-bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-dlp-accent focus:ring-offset-2"
            >
                {initials}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-xl bg-dlp-bg-card shadow-dlp-lg ring-1 ring-dlp-border focus:outline-none z-50 overflow-hidden animate-fade-in">
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-dlp-border bg-dlp-bg-muted">
                        <p className="text-sm font-semibold text-dlp-text-primary truncate">
                            {user?.name || 'User'}
                        </p>
                        <p className="text-xs text-dlp-text-muted truncate mt-0.5">
                            {user?.email || ''}
                        </p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                        <button
                            onClick={() => handleItemClick('profile')}
                            className="flex w-full items-center px-4 py-2.5 text-sm text-dlp-text-secondary hover:bg-dlp-bg-muted transition-colors group"
                        >
                            <UserCircleIcon className="mr-3 h-5 w-5 text-dlp-text-muted group-hover:text-dlp-text-secondary" />
                            Profile
                        </button>

                        <button
                            onClick={() => handleItemClick('settings')}
                            className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-dlp-text-secondary hover:bg-dlp-bg-muted transition-colors group"
                        >
                            <div className="flex items-center">
                                <SettingsIcon className="mr-3 h-5 w-5 text-dlp-text-muted group-hover:text-dlp-text-secondary" />
                                Settings
                            </div>
                            <ChevronRightIcon className="h-4 w-4 text-dlp-text-muted" />
                        </button>

                        <button
                            onClick={() => handleItemClick('help')}
                            className="flex w-full items-center px-4 py-2.5 text-sm text-dlp-text-secondary hover:bg-dlp-bg-muted transition-colors group"
                        >
                            <QuestionMarkCircleIcon className="mr-3 h-5 w-5 text-dlp-text-muted group-hover:text-dlp-text-secondary" />
                            Help
                        </button>

                        <button
                            onClick={() => handleItemClick('legal')}
                            className="flex w-full items-center px-4 py-2.5 text-sm text-dlp-text-secondary hover:bg-dlp-bg-muted transition-colors group"
                        >
                            <ClockIcon className="mr-3 h-5 w-5 text-dlp-text-muted group-hover:text-dlp-text-secondary" />
                            Legal
                        </button>

                        <div className="border-t border-dlp-border my-1"></div>

                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors group"
                        >
                            <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-red-500 group-hover:text-red-600" />
                            Sign Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
