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
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
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
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-lime-500 text-lime-700 font-semibold hover:bg-lime-50 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
            >
                {initials}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden animate-fade-in border border-slate-200">
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                        <p className="text-sm font-semibold text-slate-900 truncate">
                            {user?.name || 'User'}
                        </p>
                        <p className="text-xs text-slate-500 truncate mt-0.5">
                            {user?.email || ''}
                        </p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                        <button
                            onClick={() => handleItemClick('profile')}
                            className="flex w-full items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors group"
                        >
                            <UserCircleIcon className="mr-3 h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                            Profile
                        </button>

                        <button
                            onClick={() => handleItemClick('settings')}
                            className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors group"
                        >
                            <div className="flex items-center">
                                <SettingsIcon className="mr-3 h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                                Settings
                            </div>
                            <ChevronRightIcon className="h-4 w-4 text-slate-400" />
                        </button>

                        <button
                            onClick={() => handleItemClick('help')}
                            className="flex w-full items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors group"
                        >
                            <QuestionMarkCircleIcon className="mr-3 h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                            Help
                        </button>

                        <button
                            onClick={() => handleItemClick('legal')}
                            className="flex w-full items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors group"
                        >
                            <ClockIcon className="mr-3 h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                            Legal
                        </button>

                        <div className="border-t border-slate-100 my-1"></div>

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
