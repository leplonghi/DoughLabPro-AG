import React, { useState } from 'react';
import { NotificationSettings } from '@/components/notifications/NotificationSettings';
import { TimerDashboard } from '@/components/notifications/TimerDashboard';
import { NotificationList } from '@/components/notifications/NotificationList';
import { Bell, Clock, Settings, List } from 'lucide-react';

type TabType = 'timers' | 'notifications' | 'settings';

export const NotificationsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('timers');

    const tabs = [
        { id: 'timers' as TabType, label: 'Timers', icon: Clock },
        { id: 'notifications' as TabType, label: 'Notifications', icon: List },
        { id: 'settings' as TabType, label: 'Settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <Bell className="w-8 h-8 text-green-600" />
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Notifications & Timers
                        </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Manage your baking timers and notification preferences
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-6">
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="flex gap-4" aria-label="Tabs">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`
                                            flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm transition-colors
                                            ${isActive
                                                ? 'border-green-600 text-green-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                            }
                                        `}
                                    >
                                        <Icon className="w-5 h-5" />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Tab Content */}
                <div>
                    {activeTab === 'timers' && <TimerDashboard />}
                    {activeTab === 'notifications' && <NotificationList />}
                    {activeTab === 'settings' && <NotificationSettings />}
                </div>
            </div>
        </div>
    );
};
