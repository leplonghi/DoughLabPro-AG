/**
 * Example: Using Geolocation and Weather Features
 * 
 * This file demonstrates how to use the geolocation and weather
 * detection features in different scenarios.
 */

import React from 'react';
import { WeatherWidget, TemperatureDetector } from '@/components/weather';
import { useGeolocation, useCurrentTemperature } from '@/hooks/useGeolocation';
import { getAmbientTemperatureCategory } from '@/services/geolocation';

// ============================================
// Example 1: Full Weather Widget
// ============================================
export function WeatherWidgetExample() {
    const handleTemperatureDetected = (temperature: number) => {
        console.log('Detected temperature:', temperature);
        // Use the temperature in your calculations
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Weather Widget Example</h2>

            {/* Full widget */}
            <WeatherWidget
                onTemperatureDetected={handleTemperatureDetected}
                compact={false}
            />

            {/* Compact widget */}
            <div className="mt-4">
                <WeatherWidget
                    onTemperatureDetected={handleTemperatureDetected}
                    compact={true}
                />
            </div>
        </div>
    );
}

// ============================================
// Example 2: Temperature Detector Button
// ============================================
export function TemperatureDetectorExample() {
    const [temperature, setTemperature] = React.useState<number | null>(null);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Temperature Detector Example</h2>

            <TemperatureDetector
                onTemperatureDetected={(temp) => {
                    setTemperature(temp);
                    console.log('Temperature set to:', temp);
                }}
            />

            {temperature && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-800">
                        Current temperature: {temperature}°C
                    </p>
                    <p className="text-sm text-green-600">
                        Category: {getAmbientTemperatureCategory(temperature)}
                    </p>
                </div>
            )}
        </div>
    );
}

// ============================================
// Example 3: Using the useGeolocation Hook
// ============================================
export function GeolocationHookExample() {
    const {
        weather,
        location,
        loading,
        error,
        fetchWeather,
        refresh,
        isStale
    } = useGeolocation();

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">useGeolocation Hook Example</h2>

            <div className="space-y-4">
                <div className="flex gap-2">
                    <button
                        onClick={fetchWeather}
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                    >
                        {loading ? 'Detecting...' : 'Detect Location'}
                    </button>

                    {weather && (
                        <button
                            onClick={refresh}
                            disabled={loading}
                            className="px-4 py-2 bg-gray-600 text-white rounded-lg disabled:opacity-50"
                        >
                            Refresh
                        </button>
                    )}
                </div>

                {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800">Error: {error}</p>
                    </div>
                )}

                {weather && (
                    <div className="p-4 bg-white border rounded-lg">
                        <h3 className="font-bold mb-2">Weather Data:</h3>
                        <ul className="space-y-1 text-sm">
                            <li>Temperature: {weather.current.temperature}°C</li>
                            <li>Feels Like: {weather.current.feelsLike}°C</li>
                            <li>Humidity: {weather.current.humidity}%</li>
                            <li>Description: {weather.current.description}</li>
                            {location?.city && <li>Location: {location.city}</li>}
                            {isStale && <li className="text-orange-600">⚠️ Data is stale</li>}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

// ============================================
// Example 4: Simple Temperature Only
// ============================================
export function SimpleTemperatureExample() {
    const { temperature, loading, fetchWeather } = useCurrentTemperature();

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Simple Temperature Example</h2>

            <button
                onClick={fetchWeather}
                disabled={loading}
                className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50"
            >
                {loading ? 'Getting Temperature...' : 'Get Temperature'}
            </button>

            {temperature !== null && (
                <div className="mt-4 text-2xl font-bold">
                    {temperature}°C
                </div>
            )}
        </div>
    );
}

// ============================================
// Example 5: Auto-fetch on Mount
// ============================================
export function AutoFetchExample() {
    // Automatically fetches location and weather when component mounts
    const { weather, loading } = useGeolocation(true);

    if (loading) {
        return <div className="p-6">Loading weather data...</div>;
    }

    if (!weather) {
        return <div className="p-6">No weather data available</div>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Auto-fetch Example</h2>
            <p>Temperature automatically detected: {weather.current.temperature}°C</p>
        </div>
    );
}

// ============================================
// Example 6: Integration with Form
// ============================================
export function FormIntegrationExample() {
    const [formData, setFormData] = React.useState({
        temperature: 20,
        yeastAmount: 2,
    });

    const handleTemperatureDetected = (temp: number) => {
        setFormData(prev => ({
            ...prev,
            temperature: temp,
        }));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Form Integration Example</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Ambient Temperature
                    </label>
                    <div className="flex gap-2 items-center">
                        <input
                            type="number"
                            value={formData.temperature}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                temperature: Number(e.target.value)
                            }))}
                            className="px-4 py-2 border rounded-lg"
                        />
                        <span>°C</span>
                        <TemperatureDetector
                            onTemperatureDetected={handleTemperatureDetected}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Yeast Amount
                    </label>
                    <input
                        type="number"
                        value={formData.yeastAmount}
                        onChange={(e) => setFormData(prev => ({
                            ...prev,
                            yeastAmount: Number(e.target.value)
                        }))}
                        className="px-4 py-2 border rounded-lg"
                    />
                    <span className="ml-2">%</span>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">Current Settings:</h3>
                    <p>Temperature: {formData.temperature}°C</p>
                    <p>Yeast: {formData.yeastAmount}%</p>
                    <p>Category: {getAmbientTemperatureCategory(formData.temperature)}</p>
                </div>
            </div>
        </div>
    );
}
