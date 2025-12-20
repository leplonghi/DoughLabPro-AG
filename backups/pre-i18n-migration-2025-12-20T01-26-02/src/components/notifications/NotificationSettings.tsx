import React, { useState } from 'react';
import { useNotifications } from '../../contexts/NotificationContext';
import { Bell, BellOff, Clock, Moon, Volume2, VolumeX, Vibrate, TestTube } from 'lucide-react';

export const NotificationSettings: React.FC = () => {
    const { settings, updateSettings, permissionStatus, requestPermission, testNotification } = useNotifications();
    const [showAdvanced, setShowAdvanced] = useState(false);

    const handlePermissionRequest = async () => {
        const result = await requestPermission();
        if (result === 'denied') {
            alert('Notification permission denied. Please enable notifications in your browser settings.');
        }
    };

    const handleToggle = (key: keyof typeof settings) => {
        updateSettings({ [key]: !settings[key] });
    };

    const handleTimeChange = (key: 'quietHoursStart' | 'quietHoursEnd', value: string) => {
        updateSettings({ [key]: value });
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Bell className="w-6 h-6" />
                    Notification Settings
                </h2>
                <button
                    onClick={testNotification}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                    <TestTube className="w-4 h-4" />
                    Test
                </button>
            </div>

            {/* Permission Status */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Permission Status</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {permissionStatus === 'granted' && '✅ Notifications enabled'}
                            {permissionStatus === 'denied' && '❌ Notifications blocked'}
                            {permissionStatus === 'default' && '⚠️ Permission not requested'}
                        </p>
                    </div>
                    {permissionStatus !== 'granted' && (
                        <button
                            onClick={handlePermissionRequest}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Enable Notifications
                        </button>
                    )}
                </div>
            </div>

            {/* Master Toggle */}
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                    {settings.enabled ? <Bell className="w-5 h-5 text-green-600" /> : <BellOff className="w-5 h-5 text-gray-400" />}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Enable Notifications</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Receive notifications for timers and events</p>
                    </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={settings.enabled}
                        onChange={() => handleToggle('enabled')}
                        className="sr-only peer"
                        disabled={permissionStatus !== 'granted'}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
            </div>

            {/* Notification Categories */}
            <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">Notification Types</h3>

                {[
                    { key: 'fermentationNotifications', label: 'Fermentation Timers', icon: Clock },
                    { key: 'foldingNotifications', label: 'Folding Reminders', icon: Clock },
                    { key: 'proofingNotifications', label: 'Proofing Timers', icon: Clock },
                    { key: 'levainNotifications', label: 'Levain Reminders', icon: Bell },
                    { key: 'bakingNotifications', label: 'Baking Alerts', icon: Bell },
                    { key: 'recipeNotifications', label: 'Recipe Reminders', icon: Bell },
                ].map(({ key, label, icon: Icon }) => (
                    <div key={key} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-3">
                            <Icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            <span className="text-gray-900 dark:text-white">{label}</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings[key as keyof typeof settings] as boolean}
                                onChange={() => handleToggle(key as keyof typeof settings)}
                                className="sr-only peer"
                                disabled={!settings.enabled}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                ))}
            </div>

            {/* Sound & Vibration */}
            <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">Notification Behavior</h3>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                        {settings.soundEnabled ? <Volume2 className="w-4 h-4 text-gray-600 dark:text-gray-300" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
                        <span className="text-gray-900 dark:text-white">Sound</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={settings.soundEnabled}
                            onChange={() => handleToggle('soundEnabled')}
                            className="sr-only peer"
                            disabled={!settings.enabled}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                        <Vibrate className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        <span className="text-gray-900 dark:text-white">Vibration</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={settings.vibrationEnabled}
                            onChange={() => handleToggle('vibrationEnabled')}
                            className="sr-only peer"
                            disabled={!settings.enabled}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>
                </div>
            </div>

            {/* Quiet Hours */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">Quiet Hours</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={settings.quietHoursEnabled}
                            onChange={() => handleToggle('quietHoursEnabled')}
                            className="sr-only peer"
                            disabled={!settings.enabled}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>
                </div>

                {settings.quietHoursEnabled && (
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Start Time
                            </label>
                            <input
                                type="time"
                                value={settings.quietHoursStart || '22:00'}
                                onChange={(e) => handleTimeChange('quietHoursStart', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                End Time
                            </label>
                            <input
                                type="time"
                                value={settings.quietHoursEnd || '07:00'}
                                onChange={(e) => handleTimeChange('quietHoursEnd', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Advanced Settings */}
            <div>
                <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="text-green-600 hover:text-green-700 font-medium"
                >
                    {showAdvanced ? '▼' : '▶'} Advanced Settings
                </button>

                {showAdvanced && (
                    <div className="mt-4 space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Advance Notice (minutes)
                            </label>
                            <input
                                type="number"
                                min="0"
                                max="60"
                                value={settings.advanceNoticeMinutes}
                                onChange={(e) => updateSettings({ advanceNoticeMinutes: parseInt(e.target.value) })}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            />
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Receive notifications this many minutes before events
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
