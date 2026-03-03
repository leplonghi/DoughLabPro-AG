import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { useTranslation } from '@/i18n';
import {
    CalculatorIcon as Calculator,
    BatchesIcon as Styles,
    BeakerIcon as Lab,
    UserCircleIcon as Profile,
    Bars3Icon as Menu
} from '@/components/ui/Icons';
import { Page } from '@/types';

export function BottomNav() {
    const { route, navigate } = useRouter();
    const { t } = useTranslation(['common']);

    const navItems = [
        { id: 'calculator', label: t('common.nav.calculator'), Icon: Calculator },
        { id: 'styles', label: t('common.nav.styles'), Icon: Styles },
        { id: 'mylab', label: t('common.nav.lab'), Icon: Lab },
        { id: 'tools', label: t('common.nav.tools'), Icon: Menu }, // or something else for Profile/Tools
    ];

    return (
        <nav className="bottom-nav">
            {navItems.map((item) => {
                const Icon = item.Icon;
                const isActive = route === item.id || (item.id !== 'calculator' && route.startsWith(item.id));
                return (
                    <button
                        key={item.id}
                        onClick={() => navigate(item.id as Page)}
                        className={isActive ? 'active' : ''}
                        aria-label={item.label}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        <Icon className="nav-icon" />
                        <span className="nav-label">{item.label}</span>
                    </button>
                );
            })}
        </nav>
    );
}
