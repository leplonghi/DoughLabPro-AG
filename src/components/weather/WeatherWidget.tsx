/**
 * WeatherWidget Component
 * Displays current weather and allows automatic temperature detection
 */

import React from 'react';
import { useGeolocation } from '../../hooks/useGeolocation';
import { GeolocationError } from '../../services/geolocation/types';

interface WeatherWidgetProps {
    onTemperatureDetected?: (temperature: number) => void;
    compact?: boolean;
    className?: string;
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({
    onTemperatureDetected,
    compact = false,
    className = '',
}) => {
    const { weather, loading, error, fetchWeather, lastUpdated, isStale } =
        useGeolocation();

    const handleDetectLocation = async () => {
        try {
            const weatherData = await fetchWeather();
            if (weatherData && onTemperatureDetected) {
                onTemperatureDetected(weatherData.current.temperature);
            }
        } catch (err) {
            console.error('Failed to detect location:', err);
        }
    };

    const getErrorMessage = (err: GeolocationError): string => {
        switch (err) {
            case GeolocationError.PERMISSION_DENIED:
                return 'Location permission denied. Please enable location access.';
            case GeolocationError.POSITION_UNAVAILABLE:
                return 'Location unavailable. Please try again.';
            case GeolocationError.TIMEOUT:
                return 'Location request timed out. Please try again.';
            case GeolocationError.UNSUPPORTED:
                return 'Geolocation is not supported by your browser.';
            case GeolocationError.WEATHER_API_ERROR:
                return 'Failed to fetch weather data. Please try again.';
            case GeolocationError.NETWORK_ERROR:
                return 'Network error. Please check your connection.';
            default:
                return 'An error occurred. Please try again.';
        }
    };

    const formatLastUpdated = (timestamp: number): string => {
        const minutes = Math.floor((Date.now() - timestamp) / 60000);
        if (minutes < 1) return 'Just now';
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.floor(minutes / 60);
        return `${hours}h ago`;
    };

    if (compact) {
        return (
            <div className={`flex items-center gap-2 ${className}`}>
                {weather ? (
                    <>
                        <span className="text-2xl">{weather.current.icon}</span>
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold">
                                {weather.current.temperature}°C
                            </span>
                            {weather.location.city && (
                                <span className="text-xs text-gray-500">
                                    {weather.location.city}
                                </span>
                            )}
                        </div>
                        {isStale && (
                            <button
                                onClick={handleDetectLocation}
                                disabled={loading}
                                className="text-xs text-blue-600 hover:text-blue-700 underline"
                            >
                                Update
                            </button>
                        )}
                    </>
                ) : (
                    <button
                        onClick={handleDetectLocation}
                        disabled={loading}
                        className="flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                        {loading ? (
                            <>
                                <span className="animate-spin">⏳</span>
                                <span>Detecting...</span>
                            </>
                        ) : (
                            <>
                                <span>📍</span>
                                <span>Detect Location</span>
                            </>
                        )}
                    </button>
                )}
                {error && (
                    <span className="text-xs text-red-600" title={getErrorMessage(error)}>
                        ⚠️
                    </span>
                )}
            </div>
        );
    }

    return (
        <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    Current Weather
                </h3>
                <button
                    onClick={handleDetectLocation}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {loading ? (
                        <>
                            <span className="animate-spin">⏳</span>
                            <span>Detecting...</span>
                        </>
                    ) : (
                        <>
                            <span>📍</span>
                            <span>Detect Location</span>
                        </>
                    )}
                </button>
            </div>

            {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">{getErrorMessage(error)}</p>
                </div>
            )}

            {weather ? (
                <div className="space-y-4">
                    {/* Location */}
                    {weather.location.city && (
                        <div className="flex items-center gap-2 text-gray-600">
                            <span>📍</span>
                            <span>
                                {weather.location.city}
                                {weather.location.country && `, ${weather.location.country}`}
                            </span>
                        </div>
                    )}

                    {/* Main Weather Info */}
                    <div className="flex items-center gap-6">
                        <span className="text-6xl">{weather.current.icon}</span>
                        <div>
                            <div className="text-5xl font-bold text-gray-800">
                                {weather.current.temperature}°C
                            </div>
                            <div className="text-sm text-gray-600">
                                Feels like {weather.current.feelsLike}°C
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                                {weather.current.description}
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                            <span>💧</span>
                            <div>
                                <div className="text-xs text-gray-500">Humidity</div>
                                <div className="font-semibold">{weather.current.humidity}%</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>💨</span>
                            <div>
                                <div className="text-xs text-gray-500">Wind</div>
                                <div className="font-semibold">
                                    {weather.current.windSpeed} m/s
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🌡️</span>
                            <div>
                                <div className="text-xs text-gray-500">Pressure</div>
                                <div className="font-semibold">
                                    {weather.current.pressure} hPa
                                </div>
                            </div>
                        </div>
                        {lastUpdated && (
                            <div className="flex items-center gap-2">
                                <span>🕐</span>
                                <div>
                                    <div className="text-xs text-gray-500">Updated</div>
                                    <div className="font-semibold">
                                        {formatLastUpdated(lastUpdated)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Dough Tip */}
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-start gap-2">
                            <span className="text-lg">💡</span>
                            <div className="text-sm text-green-800">
                                <strong>Dough Tip:</strong>{' '}
                                {weather.current.temperature < 18
                                    ? 'Cold temperature - expect slower fermentation. Consider using warmer water or extending fermentation time.'
                                    : weather.current.temperature > 26
                                        ? 'Warm temperature - fermentation will be faster. Consider using cooler water or reducing yeast.'
                                        : 'Ideal temperature for dough fermentation. Standard recipes should work well.'}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                !loading && (
                    <div className="text-center py-8 text-gray-500">
                        <p className="mb-2">Click "Detect Location" to get current weather</p>
                        <p className="text-sm">
                            We'll use your location to provide accurate temperature data for
                            your dough calculations
                        </p>
                    </div>
                )
            )}
        </div>
    );
};
