/**
 * TemperatureDetector Component
 * Compact button to auto-detect ambient temperature
 */

import React, { useState } from 'react';
import { useCurrentTemperature } from '../../hooks/useGeolocation';

interface TemperatureDetectorProps {
    onTemperatureDetected: (temperature: number) => void;
    className?: string;
}

export const TemperatureDetector: React.FC<TemperatureDetectorProps> = ({
    onTemperatureDetected,
    className = '',
}) => {
    const { temperature, loading, error, fetchWeather } = useCurrentTemperature();
    const [showTooltip, setShowTooltip] = useState(false);

    const handleDetect = async () => {
        try {
            const result = await fetchWeather();
            if (result && result.weather?.current.temperature !== undefined) {
                onTemperatureDetected(result.weather.current.temperature);
                setShowTooltip(true);
                setTimeout(() => setShowTooltip(false), 3000);
            }
        } catch (err) {
            console.error('Failed to detect temperature:', err);
        }
    };

    return (
        <div className={`relative inline-block ${className}`}>
            <button
                type="button"
                onClick={handleDetect}
                disabled={loading}
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md text-sm font-medium"
                title="Auto-detect ambient temperature based on your location"
            >
                {loading ? (
                    <>
                        <span className="animate-spin">⏳</span>
                        <span>Detecting...</span>
                    </>
                ) : (
                    <>
                        <span>📍</span>
                        <span>Auto-detect Temperature</span>
                    </>
                )}
            </button>

            {/* Success Tooltip */}
            {showTooltip && temperature !== null && (
                <div className="absolute top-full left-0 mt-2 px-3 py-2 bg-green-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-10 animate-fade-in">
                    ✓ Temperature set to {temperature}°C
                    <div className="absolute -top-1 left-4 w-2 h-2 bg-green-800 transform rotate-45"></div>
                </div>
            )}

            {/* Error Tooltip */}
            {error && (
                <div className="absolute top-full left-0 mt-2 px-3 py-2 bg-red-600 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-10">
                    ⚠️ Failed to detect location
                    <div className="absolute -top-1 left-4 w-2 h-2 bg-red-600 transform rotate-45"></div>
                </div>
            )}
        </div>
    );
};
