/**
 * useGeolocation Hook
 * React hook for accessing user location and weather data
 */

import { useState, useEffect, useCallback } from 'react';
import {
    GeolocationState,
    GeolocationError,
    WeatherConditions,
} from '../services/geolocation/types';
import { getLocationData } from '../services/geolocation/geolocationService';
import { getWeatherConditions } from '../services/geolocation/weatherService';

const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes
const STORAGE_KEY = 'doughlabpro_weather_cache';

interface CachedWeatherData {
    weather: WeatherConditions;
    timestamp: number;
}

/**
 * Custom hook for geolocation and weather data
 * Automatically detects user location and fetches current weather
 * Caches results to avoid excessive API calls
 */
export function useGeolocation(autoFetch: boolean = false) {
    const [state, setState] = useState<GeolocationState>({
        loading: false,
        error: null,
        location: null,
        weather: null,
        lastUpdated: null,
    });

    /**
     * Loads cached weather data from localStorage
     */
    const loadFromCache = useCallback((): WeatherConditions | null => {
        try {
            const cached = localStorage.getItem(STORAGE_KEY);
            if (!cached) return null;

            const data: CachedWeatherData = JSON.parse(cached);
            const age = Date.now() - data.timestamp;

            if (age < CACHE_DURATION) {
                return data.weather;
            }

            // Cache expired
            localStorage.removeItem(STORAGE_KEY);
            return null;
        } catch (error) {
            console.error('Error loading weather cache:', error);
            return null;
        }
    }, []);

    /**
     * Saves weather data to localStorage
     */
    const saveToCache = useCallback((weather: WeatherConditions) => {
        try {
            const data: CachedWeatherData = {
                weather,
                timestamp: Date.now(),
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving weather cache:', error);
        }
    }, []);

    /**
     * Fetches location and weather data
     */
    const fetchWeather = useCallback(async () => {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        try {
            // Try to load from cache first
            const cached = loadFromCache();
            if (cached) {
                setState({
                    loading: false,
                    error: null,
                    location: cached.location,
                    weather: cached,
                    lastUpdated: cached.current.timestamp,
                });
                return cached;
            }

            // Fetch fresh data
            const location = await getLocationData();
            const weather = await getWeatherConditions(location);

            // Save to cache
            saveToCache(weather);

            setState({
                loading: false,
                error: null,
                location,
                weather,
                lastUpdated: Date.now(),
            });

            return weather;
        } catch (error) {
            const errorType = error as GeolocationError;
            setState((prev) => ({
                ...prev,
                loading: false,
                error: errorType || GeolocationError.NETWORK_ERROR,
            }));
            throw error;
        }
    }, [loadFromCache, saveToCache]);

    /**
     * Clears cached data and forces a refresh
     */
    const refresh = useCallback(async () => {
        localStorage.removeItem(STORAGE_KEY);
        return await fetchWeather();
    }, [fetchWeather]);

    /**
     * Resets the state
     */
    const reset = useCallback(() => {
        setState({
            loading: false,
            error: null,
            location: null,
            weather: null,
            lastUpdated: null,
        });
    }, []);

    // Auto-fetch on mount if enabled
    useEffect(() => {
        if (autoFetch) {
            fetchWeather().catch(console.error);
        }
    }, [autoFetch, fetchWeather]);

    return {
        ...state,
        fetchWeather,
        refresh,
        reset,
        isStale: state.lastUpdated
            ? Date.now() - state.lastUpdated > CACHE_DURATION
            : true,
    };
}

/**
 * Hook that returns only the current temperature
 * Useful for simple temperature display without full weather data
 */
export function useCurrentTemperature(autoFetch: boolean = false) {
    const { weather, loading, error, fetchWeather } = useGeolocation(autoFetch);

    return {
        temperature: weather?.current.temperature ?? null,
        loading,
        error,
        fetchWeather,
    };
}
