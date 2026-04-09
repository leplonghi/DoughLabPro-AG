import React, { useState } from 'react';
import { NotificationSettings } from '@/components/notifications/NotificationSettings';
import { TimerDashboard } from '@/components/notifications/TimerDashboard';
import { NotificationList } from '@/components/notifications/NotificationList';
import { NotificationAnalyticsDashboard } from '@/components/notifications/NotificationAnalyticsDashboard';
import { NotificationTemplatePicker } from '@/components/notifications/NotificationTemplatePicker';
import { Bell, Clock, Settings, List, BarChart3, Sparkles } from 'lucide-react';
import { useTranslation } from '@/i18n';
import AppPageLayout from '@/components/ui/AppPageLayout';
import AppSurface from '@/components/ui/AppSurface';


type TabType = 'timers' | 'notifications' | 'settings' | 'analytics' | 'templates';

export const NotificationsPage: React.FC = () => {
  const { t } = useTranslation();

    const [activeTab, setActiveTab] = useState<TabType>('timers');

    const tabs = [
        { id: 'timers' as TabType, label: t('ui.timers_324'), icon: Clock },
        { id: 'notifications' as TabType, label: t('ui.notifications_325'), icon: List },
        { id: 'templates' as TabType, label: t('ui.templates_326'), icon: Sparkles },
        { id: 'analytics' as TabType, label: t('ui.analytics_327'), icon: BarChart3 },
        { id: 'settings' as TabType, label: t('ui.settings_328'), icon: Settings },
    ];

    return (
        <AppPageLayout
            width="wide"
            density="default"
            pageHeader={{
                eyebrow: t('ui.notifications_325', { defaultValue: 'Notifications' }),
                title: t('notifications.notifications_timers_title', { defaultValue: 'Notifications & Timers' }),
                description: t('notifications.notifications_timers_desc', { defaultValue: 'Keep reminders, timers, templates, and notification behavior aligned with your baking workflow.' }),
                children: (
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/85 px-3 py-1 text-[11px] font-semibold text-dlp-text-secondary shadow-sm">
                        <Bell className="h-3.5 w-3.5 text-emerald-600" />
                        {t('notifications.smart_reminders', { defaultValue: 'Smart baking reminders' })}
                    </div>
                ),
            }}
        >
            <div className="mx-auto max-w-7xl animate-[fadeIn_0.45s_ease-in-out] space-y-4 px-1">

            <AppSurface surface="glass" tone="neutral" density="compact" className="p-3 sm:p-4">
                <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5" aria-label="Notification tabs">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center justify-center gap-2 rounded-2xl border px-3 py-2.5 text-xs font-semibold transition-all ${
                                    isActive
                                        ? 'border-emerald-300 bg-emerald-600 text-white shadow-[0_14px_28px_-18px_rgba(47,139,73,0.6)]'
                                        : 'border-emerald-100 bg-white/82 text-dlp-text-secondary hover:border-emerald-200 hover:bg-emerald-50/75 hover:text-dlp-text-primary'
                                }`}
                            >
                                <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                                <span className="truncate">{tab.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </AppSurface>

            <div>
                    {activeTab === 'timers' && <TimerDashboard />}
                    {activeTab === 'notifications' && <NotificationList />}
                    {activeTab === 'templates' && <NotificationTemplatePicker />}
                    {activeTab === 'analytics' && <NotificationAnalyticsDashboard />}
                    {activeTab === 'settings' && <NotificationSettings />}
            </div>
            </div>
        </AppPageLayout>
    );
};
