/**
 * Geolocation and Weather Service Types
 * Handles automatic location detection and weather data retrieval
 */

export interface GeolocationCoordinates {
    latitude: number;
    longitude: number;
    accuracy?: number;
}

export interface LocationData {
    coordinates: GeolocationCoordinates;
    city?: string;
    country?: string;
    region?: string;
    timezone?: string;
}

export interface WeatherData {
    temperature: number; // in Celsius
    feelsLike: number;
    humidity: number; // percentage
    description: string;
    icon: string;
    windSpeed: number; // m/s
    pressure: number; // hPa
    timestamp: number; // Unix timestamp
}

export interface WeatherConditions {
    current: WeatherData;
    location: LocationData;
}

export enum GeolocationError {
    PERMISSION_DENIED = 'PERMISSION_DENIED',
    POSITION_UNAVAILABLE = 'POSITION_UNAVAILABLE',
    TIMEOUT = 'TIMEOUT',
    UNSUPPORTED = 'UNSUPPORTED',
    WEATHER_API_ERROR = 'WEATHER_API_ERROR',
    NETWORK_ERROR = 'NETWORK_ERROR',
}

export interface GeolocationState {
    loading: boolean;
    error: GeolocationError | null;
    location: LocationData | null;
    weather: WeatherConditions | null;
    lastUpdated: number | null;
}
